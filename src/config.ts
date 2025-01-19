import { mainnet } from "viem/chains";
import { createConfig, http, injected } from "wagmi";

export const config = createConfig({
    chains: [mainnet],
    connectors: [
        injected()
    ],
    transports: {
        [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`)
    }
})