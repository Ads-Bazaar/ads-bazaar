"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  getAddress,
  getNetworkDetails,
  isAllowed,
  isConnected,
  requestAccess,
} from "@stellar/freighter-api";
import { WalletContext, type WalletState } from "./wallet-context";

// AdsBazaar's Soroban contracts are only deployed on Stellar Testnet right
// now, so a Mainnet (or Futurenet) Freighter connection must be rejected.
const REQUIRED_NETWORK = "TESTNET";
const WRONG_NETWORK_MESSAGE =
  "Wrong network detected. Switch your Freighter wallet to Testnet to use AdsBazaar.";

export function WalletProvider({ children }: { children: ReactNode }) {
  const [wallet, setWallet] = useState<WalletState | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const restoreWallet = async () => {
      const connected = await isConnected();
      if (connected.error || !connected.isConnected) return;

      const allowed = await isAllowed();
      if (allowed.error || !allowed.isAllowed) return;

      const [addressResult, networkResult] = await Promise.all([
        getAddress(),
        getNetworkDetails(),
      ]);

      if (!isMounted || addressResult.error || !addressResult.address) return;
      if (networkResult.error || networkResult.network !== REQUIRED_NETWORK) return;

      setWallet({
        address: addressResult.address,
        network: networkResult.network,
      });
    };

    restoreWallet();
    return () => {
      isMounted = false;
    };
  }, []);

  const connect = async (): Promise<WalletState | null> => {
    setIsConnecting(true);
    setError(null);

    try {
      const connected = await isConnected();
      if (connected.error || !connected.isConnected) {
        throw new Error("Install Freighter to connect a Stellar wallet.");
      }

      // Wrap requestAccess() in a race against a 30-second timeout so a
      // dismissed or never-resolving Freighter popup cannot leave
      // isConnecting stuck true indefinitely.
      const CONNECT_TIMEOUT_MS = 30_000;
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error("Wallet connection timed out. Please try again.")),
          CONNECT_TIMEOUT_MS,
        ),
      );

      const access = await Promise.race([requestAccess(), timeoutPromise]);
      if (access.error || !access.address) {
        const msg =
          access.error &&
          typeof access.error === "object" &&
          "message" in access.error
            ? String((access.error as { message: string }).message)
            : "Unable to connect wallet.";
        throw new Error(msg);
      }

      const network = await getNetworkDetails();
      if (network.error) {
        throw new Error("Unable to read the connected wallet's network.");
      }
      if (network.network !== REQUIRED_NETWORK) {
        throw new Error(WRONG_NETWORK_MESSAGE);
      }

      const newWallet: WalletState = {
        address: access.address,
        network: network.network,
      };
      setWallet(newWallet);
      return newWallet;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to connect wallet.");
      return null;
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setWallet(null);
    setError(null);
  };

  return (
    <WalletContext.Provider value={{ wallet, isConnecting, error, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}
