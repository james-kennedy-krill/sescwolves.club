import "../styles/index.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { PlayersProvider } from "../contexts/PlayersContext";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <PlayersProvider>
        <Navbar />
        <div className="container mx-auto max-w-xl">
          <Component {...pageProps} />
        </div>
      </PlayersProvider>
    </UserProvider>
  );
}
export default MyApp;
