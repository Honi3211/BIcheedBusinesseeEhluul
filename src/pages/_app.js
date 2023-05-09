import { UserContextProvider } from "@/contexts/userContext";
import "@/styles/globals.css";
import { Head } from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
