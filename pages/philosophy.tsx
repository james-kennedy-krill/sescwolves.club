import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../styles/common-styles";

import wolves_pendant from "../public/wolves_pendants.jpg";

const TryOuts = () => {
  return (
    <div>
      <Head>
        <title>Team Philosophy | SESC Wolves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="prose">
        <h1 className="text-4xl font-bold mb-2">I am Wolf</h1>
        <Image src={wolves_pendant} alt="Wolves Pendants" />
      </Container>
    </div>
  );
};

export default TryOuts;
