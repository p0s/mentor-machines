"use client";
import { mentors } from "@/config/mentors";
import { ScrollAlphaTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import Learn from "./Learn";
import Mentors from "./Mentors";

export default function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const handleSelect = (index: number) => {
    setSelected(index);
  };
  return (
    <ThirdwebProvider
      supportedWallets={[metamaskWallet()]}
      activeChain={ScrollAlphaTestnet}
    >
      <>
        {selected !== null ? (
          <Learn mentor={mentors[selected]} />
        ) : (
          <Mentors handleSelect={handleSelect} />
        )}
      </>
    </ThirdwebProvider>
  );
}
