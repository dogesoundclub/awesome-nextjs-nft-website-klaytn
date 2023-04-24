import { create } from "zustand";
export type VerifyResult = "ready" | "success" | "fail";
export type VerifyNetwork = "hedera" | "klaytn";
type VerifyStore = {
  modal: boolean;
  result: VerifyResult;
  resultMsg: string;
  network: VerifyNetwork | null;
  setResult: (result: VerifyResult, network: VerifyNetwork) => void;
  init: () => void;
};
const msgs = ["Certification successfully finished!", "Certification failed"];
export const verifyStore = create<VerifyStore>((set, get) => ({
  modal: false,
  result: "ready",
  resultMsg: "",
  network: null,
  setResult: (result, network) => {
    if (result !== "ready") {
      const msg = result === "fail" ? msgs[1] : msgs[0];
      set(() => ({
        modal: true,
        result: result,
        resultMsg: msg,
        network: network,
      }));
    } else
      set(() => ({
        modal: false,
        result: result,
        resultMsg: "",
        network: null,
      }));
  },
  init: () =>
    set(() => ({
      modal: false,
      result: "ready",
      resultMsg: "",
      network: null,
    })),
}));
