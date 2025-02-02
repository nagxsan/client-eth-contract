import { useReadContract } from "wagmi"
import { ABI } from "../abi"

export default function TotalSupply() {
  const { data, isLoading, error } = useReadContract({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    abi: ABI,
    functionName: "totalSupply",
  })

  if (isLoading) return <div>Loading...</div>

  return (
    error ? (
      <div>
        Error getting total supply: {error.message}
      </div>
    ) : (
      <div>
        Total supply: {data?.toString()}
      </div>
    )
  )
}
