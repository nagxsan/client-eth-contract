import { mainnet } from "viem/chains";
import { createConfig, http } from "wagmi";

export const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`)
    }
})