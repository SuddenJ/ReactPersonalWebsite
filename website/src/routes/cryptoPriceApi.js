import { useEffect, useState } from "react";

export default function CryptoPriceApi() {
  // Stupid names to remind me that these are not magical names
  // x is the state variable, setX is the method that triggers the change of state
  // You pass initial value for state to the useState function
  const [x, setX] = useState(undefined);

  // Similar to componentDidMount, will get called once when the component mounts
  useEffect(() => {
    fetch('https://production.api.coindesk.com/v2/tb/price/ticker?assets=ETH,DOT,BTC')
      .then(response => response.json())
      .then(data => setX(data.data));
  }, []);

  const getCryptoPrices = () => {
    if (x !== undefined) {
      return Object.entries(x).map((xProp) => {
        return <p key={xProp[0]}>{`${xProp[1].name}: $${xProp[1].ohlc.c} USD`}</p>;
      });
    }
  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>CryptoPriceApi</h2>
      {getCryptoPrices()}
    </main>
  );
}