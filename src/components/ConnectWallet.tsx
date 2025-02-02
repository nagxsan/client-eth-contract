import { useAccount, useConnect, useConnectors, useDisconnect } from "wagmi";

export default function ConnectWallet() {
  const { address } = useAccount();
  const connectors = useConnectors();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();

  console.log({ address, connectors });

  if (address) {
    return (
      <div>
        You are connected {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((c, idx) => (
        <button
          key={idx}
          onClick={() => {
            connect({ connector: c });
          }}
        >
          Connect via {c.name}
        </button>
      ))}
    </div>
  );
}
