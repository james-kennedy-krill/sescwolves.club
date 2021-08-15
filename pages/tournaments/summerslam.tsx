import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
            {/* <Link href="http://www.gotsport.com/events/schedule.aspx?EventID=80394&GroupID=976139&Gender=Girls&Age=10">
              <a target="_blank" className="underline">
                Schedule
              </a>
            </Link>
            {" | "}
            <Link href="http://www.gotsport.com/events/results.aspx?EventID=80394&GroupID=976139&Gender=Girls&Age=10">
              <a target="_blank" className="underline">
                Standings
              </a>
            </Link>
            {" | "}
            <Link href="http://www.gotsport.com/events/resultsgrid.aspx?EventID=80394&GroupID=976139">
              <a target="_blank" className="underline">
                Results
              </a>
            </Link> */}
          </p>
          <hr />
          <div className="my-5 py-5">
            <h2 className="text-2xl font-bold mb-4">Schedule</h2>
            <p className="italic">Coming Soon</p>

            {/* <h3 className="text-2xl font-bold">Friday, August 6th 2021</h3>
            <p className="mb-3 flex items-start justify-between">
              <span>
                <strong>5:30pm</strong>: @ FCSC Nemesis Blue{" "}
              </span>
              <span className="text-green-500 italic font-bold">W 2-0</span>
            </p>

            <h3 className="text-2xl font-bold">Saturday, August 7th 2021</h3>
            <p className="mb-3 flex items-start justify-between">
              <span>
                <strong>9:00am</strong>: @ Pacific FC Fuego
              </span>
              <span className="text-gray-900 font-bold">L 0-3</span>
            </p>
            <p className="mb-3 flex items-start justify-between">
              <span>
                <strong>6:00pm</strong>: vs. WUFC Gold
              </span>
              <span className="text-gray-900 font-bold">L 2-4</span>
            </p>

            <h3 className="text-2xl font-bold">Sunday, August 8th 2021</h3>
            <p className="mb-3 flex items-start justify-between">
              <span>
                <strong>9:00am</strong>: vs Eastside Thorns Red
              </span>
              <span className="text-gray-900 font-bold">L 0-3</span>
            </p> */}
          </div>
          <hr />
          <div className="py-4 my-4">
            <h2 className="text-2xl font-bold mb-4">Photos</h2>
            <p className="italic">Coming Soon!</p>
            {/* <Image
              src={mthoodchallenge_image}
              alt="Photo of team at tournament"
            />
            <p className="text-sm italic text-gray-400 mb-4">
              Wolves (left to right): Isa, Jozy, Camille, Olivia, Amara, Nora B,
              Nora V, Etta, Skye
            </p> */}
          </div>
        </div>
      </main>
    </div>
  );
});

export default MtHoodChallenge;
