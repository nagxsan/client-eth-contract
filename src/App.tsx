import { WagmiProvider } from "wagmi"
import "./App.css"
import { config } from "./config"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ConnectWallet from "./components/ConnectWallet"

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App