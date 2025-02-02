import React from 'react'
import { useWriteContract } from "wagmi"
import { ABI } from "../abi";

export default function AllowUSDT() {
  const { data, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    writeContract({
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      abi: ABI,
      functionName: "approve",
      args: ["0x2966473D85A76A190697B5b9b66b769436EFE8e5", BigInt(100)]
    })
  }

  return (
    <form onSubmit={submit}>
      <input type="text" name="token" placeholder="1" required />
      <button type="submit">
        Approve 
      </button>
      {data && <div>Transaction Hash: {data}</div>}
    </form>
  )
}
