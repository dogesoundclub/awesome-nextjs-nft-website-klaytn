import type { NextApiRequest, NextApiResponse } from "next";
import { PrivateKey } from "@hashgraph/sdk";
type Data = {
  serverSignature: Uint8Array;
  serverSigningAccount: string;
};

const clientKeys =
  "302e020100300506032b65700422042098a3da77db82249fb4f12e6f2dd6562b573f6e0eaa1f701324e32e561b185163";
let clientId = "0.0.2125403";

const clientKey = PrivateKey.fromString(clientKeys);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const payload = { url: "https://dogesound.club", data: { token: "holder" } };

  const bytes = new Uint8Array(Buffer.from(JSON.stringify(payload)));
  const signature = await clientKey.sign(bytes);
  return res.send({
    serverSignature: signature,
    serverSigningAccount: clientId,
  });
}
