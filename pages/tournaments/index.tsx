import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../styles/common-styles";
import summerslam_image from "../../public/summer-slam2021.jpg";
import pcu_summer_classic_image from "../../public/pcu-summer-classic2021.jpg";

const Tournaments = withPageAuthRequired(() => {
  return (
    <div>
      <Head>
        <title>Tournament Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <h1 className="text-4xl font-bold text-center mb-2">Tournaments</h1>
          <div className="grid grid-cols-2 items-center">
            <Link href="/tournaments/summerslam">
              <a className="text-center text-2xl flex items-center justify-center h-32 mx-2 border-2 border-gray-200 bg-gray-100 hover:bg-blue-500 hover:text-white">
                Summer Slam
              </a>
            </Link>
            <Link href="/tournaments/mthoodchallenge2021">
              <a className="text-center text-2xl flex items-center justify-center h-32 mx-2 border-2 border-gray-200 bg-gray-100 hover:bg-blue-500 hover:text-white">
                Mt. Hood Challenge
              </a>
            </Link>
          </div>
          <hr className="my-5" />
          <Image src={summerslam_image} alt="Photo of team at tournament" />
          <p className="italic font-bold">Summer Slam 2021 Champions!</p>
          <p className="text-sm italic text-gray-400 mb-4">
            Wolves (left to right): Coach James, Sidney, Nora B., Isa, Olivia,
            Amara, Jozy, Camille, Coach Robin, Skye, Etta, Cora, Lucia, Coach
            Mkonu
          </p>
          <Image
            src={pcu_summer_classic_image}
            alt="Photo of team at tournament"
          />
          <p className="italic font-bold">PCU Summer Classic 2021 Champions!</p>
          <p className="text-sm italic text-gray-400 mb-4">
            Wolves (left to right): Isa, Etta, Coach James, Megan, Nola, Amelia,
            Sidney, Sylvia, Olivia, Camille, Nora B, Coach Robin, Skye
          </p>
        </div>
      </Container>
    </div>
  );
});

export default Tournaments;
