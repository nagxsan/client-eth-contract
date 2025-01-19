import { useConnectors } from "wagmi";

export default function ConnectWallet() {
    const connectors = useConnectors()
    return (
        <div>
            {connectors.map((c, idx) => (
                <button key={idx}>
                    Connect via {c.name}
                </button>
            ))}
        </div>
    )
}
