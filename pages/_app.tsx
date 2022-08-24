import "../styles/index.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { PlayersProvider } from "../contexts/PlayersContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <PlayersProvider>
        <Navbar />
        <div className="container mx-auto md:max-w-5xl pb-36 md:pb-24">
          <Component {...pageProps} />
        </div>
        <Footer />
      </PlayersProvider>
    </UserProvider>
  );
}
export default MyApp;
