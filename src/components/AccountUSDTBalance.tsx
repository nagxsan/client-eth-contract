import { useAccount, useReadContract } from "wagmi"
import { ABI } from "../abi"

export default function AccountUSDTBalance() {
  const { address } = useAccount();

  const { data, isLoading, error } = useReadContract({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    abi: ABI,
    functionName: "balanceOf",
    args: [address]
  })

  if (isLoading) return <div>Loading...</div>

  return (
    error ? (
      <div>
        Error getting balance: {error.message}
      </div>
    ) : (
      <div>
        Balance: {data?.toString()}
      </div>
    )
  )
}
