import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import tw from "twin.macro";
import { Container } from "../styles/common-styles";

const Futsal = () => {
  return (
    <div>
      <Head>
        <title>Winter Futsal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
            Winter Futsal Information
          </h1>
          <div>
            <p>
              More information to come.
              <br />
              For now here are some links to Rose City Futsal&apos;s site.
            </p>
            <ul className="list-disc ml-8">
              <li className="list-item">
                <Link href="https://rosecityfutsal.com/knowledge-base/5-v-5-futsal-rules/">
                  <a className="font-bold underline">Futsal Rules</a>
                </Link>
              </li>
            </ul>
            <h2 className="text-xl md:text-2xl font-bold mt-8">Equipment</h2>
            <p>
              Players need their usual gear, except cleats. Instead of cleats
              the following is needed:
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 mt-2">
              <p>
                Futsal shoes, or footwear of canvas or soft leather training or
                gymnastic shoes with soles of rubber or a similar material. No
                cleats allowed.
              </p>
            </blockquote>
            <p className="italic mt-4">Example of a futsal shoe:</p>
            <p>
              <Image src="/futsal-shoe-1.jpg" width="300" height="300" />
              <br />
              <Link href="https://www.adidas.com/us/predator-freak.3-indoor-shoes/FY1033.html">
                <a className="underline italic text-sm text-gray-600">
                  Adidas Predator Freak.3 Indoor Shoes
                </a>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Futsal;
