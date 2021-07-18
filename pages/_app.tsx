import "../styles/index.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}
export default MyApp;
