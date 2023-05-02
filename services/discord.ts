import { redirectURI } from "@/components/utils/discord";
import { VerifyNetwork, VerifyResult } from "@/stores/verify.store";
import axios from "axios";
import Caver from "caver-js";
import { HashConnect, MessageTypes } from "hashconnect";

declare global {
  interface Window {
    klaytn?: any;
  }
}

export async function getKlaytnMsg(code: string) {
  const klaytn_kaikas_address = sessionStorage.getItem('klaytn_kaikas_address');
  const klaytn_klip_address = sessionStorage.getItem('klaytn_klip_address');
  if (klaytn_kaikas_address) {
    try {
      const klaytn = await window.klaytn.enable();
      const caver = new Caver(window.klaytn);
      const get = await axios.get(
        `https://api.dogesound.club/discord/token?code=${code}&redirect_uri=${redirectURI}?network=klaytn%26`,
        {
          headers: {
            Accept: "*/*",
          },
        }
      );
      const me = await axios.get(
        `https://api.dogesound.club/discord/me?code=${code}`
      );
      const msg = await caver.rpc.klay.sign(klaytn[0], "Check Holder");
      // address, code, si
      // const res = await axios.get(
      //   `https://api.dogesound.club/discord/me?code=${code}`
      // );
      const res = await axios.post(
        "https://api.dogesound.club/checkholder",
        JSON.stringify({
          signedMessage: msg,
          code,
          address: klaytn[0],
        }),
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "text/plain;charset=UTF-8",
          },
        }
      );
      const { data } = res;
      console.log(data);
      let verified = false;
      for (let key in data) {
        if (data[key]) verified = true;
      }
      return verified;
    } catch (err) {
      console.log(err);
      return false;
    }
  } else {
    try {
      const get = await axios.get(
        `https://api.dogesound.club/discord/token?code=${code}&redirect_uri=${redirectURI}?network=klaytn%26`,
        {
          headers: {
            Accept: "*/*",
          },
        }
      );
      const me = await axios.get(
        `https://api.dogesound.club/discord/me?code=${code}`
      );
      const res = await axios.post(
        "https://api.dogesound.club/checkholder",
        JSON.stringify({
          klipAddress: klaytn_klip_address,
          code,
          address: klaytn_klip_address,
        }),
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "text/plain;charset=UTF-8",
          },
        }
      );
        const { data } = res;
        console.log(data);
        let verified = false;
        for (let key in data) {
          if (data[key]) verified = true;
        }
        return verified;
    } catch (err) {
        console.log(err);
        return false;
    }
  }
}

export async function getHederaMsg(
  code: string,
  setResult: (result: VerifyResult, network: VerifyNetwork) => void
) {
  try {
    const hashconnect = new HashConnect();
    const appMetadata = {
      name: "Monshoecl Holder Verify",
      description: "Monshoecl Holder Verify",
      icon: "https://dogesound.club/favicon.ico",
      url: "https://dogesound.club",
    };
    await hashconnect.init(appMetadata, "mainnet", true);

    hashconnect.pairingEvent.once(async (data) => {
      if (data) {
        const payload = {
          url: "https://dogesound.club",
          data: { token: "holder" },
        };
        const get = await axios.get(
          `https://api.dogesound.club/discord/token?code=${code}&redirect_uri=${redirectURI}?network=hedera%26`,
          {
            headers: {
              Accept: "*/*",
            },
          }
        );
        const me = await axios.get(
          `https://api.dogesound.club/discord/me?code=${code}`
        );
        const res = await axios.get("/api/hedera");
        const signingData = res.data;
        console.log(signingData);
        const serverSigAsArr = Object.values(signingData.serverSignature);
        console.log("server sig arr", serverSigAsArr);
        console.log(signingData.serverSigningAccount);
        //@ts-ignore
        const serverSigAsBuffer = Buffer.from(serverSigAsArr);
        console.log(serverSigAsBuffer);
        const auth = await hashconnect.authenticate(
          data.topic,
          data.accountIds[0],
          signingData.serverSigningAccount,
          serverSigAsBuffer,
          payload
        );

        const balance = await axios.post(
          "https://api.dogesound.club/checkholder",
          JSON.stringify({
            signedMessage: "0x0000000000000000000000000000000000000000",
            code: code,
            signingAccount: data.accountIds[0],
            res: auth,
          })
        );
        let verified = false;
        for (let key in balance.data) {
          if (balance.data[key]) verified = true;
        }
        if (verified) setResult("success", "hedera");
        else setResult("fail", "hedera");
        await new Promise<MessageTypes.AuthenticationResponse>(
          (res) => (hashconnect.authResolver = res)
        );
      }
    });
    hashconnect.connectToLocalWallet();
  } catch (err) {
    console.log(err);

    setResult("fail", "hedera");
  }
}