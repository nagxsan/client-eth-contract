import { WagmiProvider } from "wagmi"
import "./App.css"
import { config } from "./config"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ConnectWallet from "./components/ConnectWallet"
import TotalSupply from "./components/TotalSupply"
import AccountUSDTBalance from "./components/AccountUSDTBalance"
import AllowUSDT from "./components/AllowUSDT"

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
        <TotalSupply />
        <AccountUSDTBalance />
        <AllowUSDT />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App