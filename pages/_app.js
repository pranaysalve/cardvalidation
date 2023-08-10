import "@/styles/globals.css";
import { CardCheckContextProvider } from "@/service/cardcheck.context";
export default function App({ Component, pageProps }) {
  return (
    <CardCheckContextProvider>
      <Component {...pageProps} />
    </CardCheckContextProvider>
  );
}
