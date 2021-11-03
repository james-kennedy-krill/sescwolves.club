import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import tw from "twin.macro";
import { Container } from "../styles/common-styles";

const P = tw.p`mb-2`;
const TeamList = tw.ol`list-decimal ml-6`;

const Futsal = () => {
  return (
    <div>
      <Head>
        <title>Winter Futsal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-1">
            Winter Futsal Information
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            Nov 6th-Jan 9th
          </h2>
          <div>
            <P className="italic text-center mb-2">More information to come.</P>
            <P>For now here are some links to Rose City Futsal&apos;s site.</P>
            <ul className="list-disc ml-8">
              <li className="list-item">
                <Link href="https://rosecityfutsal.com/knowledge-base/5-v-5-futsal-rules/">
                  <a className="font-bold underline" target="_blank">
                    Futsal Rules
                  </a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="https://rosecityfutsal.com/knowledge-base/game-day-questions/">
                  <a target="_blank" className="font-bold underline">
                    Gameday Questions
                  </a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="https://rosecityfutsal.com/covid-19/">
                  <a target="_blank" className="font-bold underline">
                    Covid 19 Protocols
                  </a>
                </Link>
              </li>
              <li className="list-item">
                <Link href="https://www.youtube.com/channel/UCYw-c1T_J7KwiU7rDyd62Ig">
                  <a target="_blank" className="font-bold underline">
                    Rose City Futsal YouTube Channel
                  </a>
                </Link>
              </li>
            </ul>
            <h2 className="text-xl md:text-2xl font-bold mt-8">Equipment</h2>
            <P>
              Players need their usual gear, except cleats. Instead of cleats
              the following is needed:
            </P>
            <blockquote className="border-l-4 border-blue-600 pl-4 mt-2">
              <P>
                Futsal shoes, or footwear of canvas or soft leather training or
                gymnastic shoes with soles of rubber or a similar material. No
                cleats allowed.
              </P>
            </blockquote>
            <P className="italic mt-4">Example of a futsal shoe:</P>
            <P>
              <Image src="/futsal-shoe-1.jpg" width="300" height="300" />
              <br />
              <Link href="https://www.adidas.com/us/predator-freak.3-indoor-shoes/FY1033.html">
                <a
                  className="underline italic text-sm text-gray-600"
                  target="_blank"
                >
                  Adidas Predator Freak.3 Indoor Shoes
                </a>
              </Link>
            </P>
            <h2 className="text-xl md:text-2xl font-bold mt-8">Teams</h2>
            <P>
              We will have two teams: one in the{" "}
              <span className="text-yellow-500 font-bold">GOLD</span> division
              and one in the{" "}
              <span className="text-gray-500 font-bold">SILVER</span> division.
            </P>
            <P>
              Players will be assigned to a specific team but there might be
              some overlap (especially if players are out and our numbers are
              low for any given week).
            </P>
            <div className="flex w-full">
              <div className="flex-1">
                <h2 className="text-yellow-500 font-bold text-4xl">GOLD</h2>
                <TeamList>
                  <li className="list-item">Jozy</li>
                  <li className="list-item">Olivia*</li>
                  <li className="list-item">Isa</li>
                  <li className="list-item">Sidney</li>
                  <li className="list-item">Megan</li>
                  <li className="list-item">Amara</li>
                  <li className="list-item">Camille</li>
                  <li className="list-item">Nora B.</li>
                </TeamList>
              </div>
              <div className="flex-1">
                <h2 className="text-gray-500 font-bold text-4xl">SILVER</h2>
                <TeamList>
                  <li className="list-item">Skye</li>
                  <li className="list-item">Sylvia</li>
                  <li className="list-item">Nola</li>
                  <li className="list-item">Clara</li>
                  <li className="list-item">Lucia</li>
                  <li className="list-item">Mazzie</li>
                  <li className="list-item">Olivia*</li>
                  <li className="list-item">Etta</li>
                </TeamList>
              </div>
            </div>
            <P className="text-sm mt-4 italic border-t-2 border-gray-200">
              * will play on both teams as needed.
            </P>
            <h2 className="text-xl md:text-2xl font-bold mt-8">Schedule</h2>
            <P>Coming Soon!</P>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Futsal;