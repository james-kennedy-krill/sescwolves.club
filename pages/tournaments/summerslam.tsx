import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import summerslam_image from "../../public/summer-slam2021.jpg";

const MtHoodChallenge = withPageAuthRequired(() => {
  return (
    <div>
      <Head>
        <title>Director&apos;s Mortgage Summer Slam - August 27-29, 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white rounded py-2 px-4 shadow-lg mt-5">
          <h1 className="text-4xl font-bold text-center mb-2">Summer Slam</h1>
          <p className="mb-4 flex items-center justify-around">
            <Link href="http://timberstournaments.com/directors-mortgage-summer-slam">
              <a target="_blank" className="underline">
                Website
              </a>
            </Link>
          </p>
          <hr />
          <div className="my-5 py-5">
            <h2 className="text-2xl font-bold mb-4">Schedule</h2>
            <p className="italic">WE WON!!</p>
          </div>
          <hr />
          <div className="py-4 my-4">
            <h2 className="text-2xl font-bold mb-4">Photos</h2>
            <Image src={summerslam_image} alt="Photo of team at tournament" />
            <p className="text-sm italic text-gray-400 mb-4">
              Wolves (left to right): Coach James, Sidney, Nora B., Isa, Olivia,
              Amara, Jozy, Camille, Coach Robin, Skye, Etta, Cora, Lucia, Mkonu
            </p>
          </div>
        </div>
      </main>
    </div>
  );
});

export default MtHoodChallenge;
