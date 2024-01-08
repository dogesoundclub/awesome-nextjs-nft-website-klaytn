import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from "ethers";
import MixContractABI from '../../contracts/MixContractABI.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Requested GET /api/mixPrice')

  const provider = new ethers.JsonRpcProvider('https://public-en-cypress.klaytn.net');

  const mixKlayContractAddress = '0xa50cec0216c1cee6f90c7d5359444d46315279bd';
  const klayUsdtContractAddress = '0xd83f1b074d81869eff2c46c530d7308ffec18036';

  const MixKlayContract = new ethers.Contract(mixKlayContractAddress, MixContractABI, provider);
  const KlayUsdtContract = new ethers.Contract(klayUsdtContractAddress, MixContractABI, provider);

  try {
    const mixBalance = await MixKlayContract.balanceOf(mixKlayContractAddress);
    console.log('mixBalance', mixBalance.toString());
    const klayBalanceInMixKlayContract = await MixKlayContract.balanceOf(mixKlayContractAddress);
    console.log('klayBalanceInMixKlayContract', klayBalanceInMixKlayContract.toString());

    const klayBalanceInKlayUsdtContract = await KlayUsdtContract.balanceOf(klayUsdtContractAddress);
    console.log('klayBalanceInKlayUsdtContract', klayBalanceInKlayUsdtContract.toString());
    const usdtBalance = await KlayUsdtContract.balanceOf(klayUsdtContractAddress);
    console.log('usdtBalance', usdtBalance.toString());

    const mixPriceInKlay = mixBalance.div(klayBalanceInMixKlayContract);
    console.log('mixPriceInKlay', mixPriceInKlay.toString());
    const klayPriceInUsdt = klayBalanceInKlayUsdtContract.div(usdtBalance);
    console.log('klayPriceInUsdt', klayPriceInUsdt.toString());

    const mixPriceInUsdt = mixPriceInKlay.mul(klayPriceInUsdt);

    res.status(200).json({
      data: { mixPriceInUsdt },
      message: "200 OK"
    });
  } catch (error: unknown) {
    let message = 'An error occurred';
    if (error instanceof Error) {
      message = error.message;
    }

    res.status(500).json({
      message: message
    });
  }
}