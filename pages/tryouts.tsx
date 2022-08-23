import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../styles/common-styles";

const TryOuts = () => {
  return (
    <div>
      <Head>
        <title>2022/2023 Tryouts | SESC Wolves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className="prose">
          <h1 className="text-4xl font-bold text-center mb-2">
            2022/2023 Tryouts
          </h1>
          <hr />
          <div className="py-4 my-4">
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <p>
              <strong>2022-2023 U11 Wolves:</strong>
            </p>
            <ul>
              <li>Jozy Slaughter</li>
              <li>Megan Murphey</li>
              <li>Etta Reschke</li>
              <li>Olivia Krill</li>
              <li>Elle Koleno</li>
              <li>Nora Valls</li>
              <li>Skye Halverson</li>
              <li>Vivian Wacker</li>
              <li>Joan VanSandt</li>
              <li>Sunny Garber</li>
              <li>Elise Young</li>
              <li>Elise Moore</li>
              <li>Mavis Zins</li>
              <li>Clarke Daniel</li>
            </ul>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default TryOuts;
