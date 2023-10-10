import { useAccount, useDisconnect, useBalance } from "wagmi";
import "./App.css";
import { useWeb3Modal } from "@web3modal/react";
import ShowTime from "./components/ShowTime";
import { useEffect, useState } from "react";
import ArrayPair from "./components/ArrayPair";
import LongString from "./components/LongString";

function App() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data ,  isLoading } = useBalance({
    address: address,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [backgroundColor, setBackgroundColor] = useState("#242424");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const calculateBackgroundColor = (mousePosition) => {
      const minGreenValue = 20;
      const maxGreenValue = 150;

      const normalizedY = mousePosition.y / window.innerHeight;
      const greenValue = Math.round(
        minGreenValue + (maxGreenValue - minGreenValue) * normalizedY
      );
      return `rgb(10, ${greenValue}, 10)`;
    };

    setBackgroundColor(calculateBackgroundColor(mousePosition));
  }, [mousePosition]);

  return (
    <div style={{ background: backgroundColor }} className="app-container">
      <div></div>

      <h1>Metamask + React</h1>
      {!isConnected && (
        <div className="card">
          <button onClick={open}>Connect Wallet</button>
          <p>Click on connect wallet to connect the wallet</p>
        </div>
      )}
      {isConnected && (
        <div className="card">
          <p className="address">{address}</p>
          <p>{isLoading && "Loading" } </p>
          {data && (<p className="address">Balance: {data?.formatted} {data?.symbol}</p>)}
          <button onClick={disconnect}>Disconnect Wallet</button>
        </div>
      )}
      <p className="read-the-docs">
        You need to get a wallet connect project ID
      </p>
      <ShowTime />
      <ArrayPair />
      <LongString />
    </div>
  );
}

export default App;
