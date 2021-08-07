import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { hasRole } from "../components/utils";
import mthoodchallenge from "../public/mthoodchallenge.jpg";

const Schedule = withPageAuthRequired(() => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>Schedule</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white rounded py-2 px-4 shadow-lg mt-5">
          <h1 className="text-4xl font-bold text-center mb-2">
            2021-2022 Schedule
          </h1>
          <hr />
          <div className="my-5 py-5">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Mt. Hood Challenge
            </h2>
            <p className="mb-4 flex items-center justify-around">
              <Link href="http://www.gotsport.com/events/schedule.aspx?EventID=80394&GroupID=976139&Gender=Girls&Age=10">
                <a className="underline">Schedule</a>
              </Link>
              {" | "}
              <Link href="http://www.gotsport.com/events/results.aspx?EventID=80394&GroupID=976139&Gender=Girls&Age=10">
                <a className="underline">Standings</a>
              </Link>
              {" | "}
              <Link href="http://www.gotsport.com/events/resultsgrid.aspx?EventID=80394&GroupID=976139">
                <a className="underline">Results</a>
              </Link>
            </p>

            <h3 className="text-2xl font-bold">Friday, August 6th 2021</h3>
            <p className="mb-3">
              <strong>5:30pm</strong>: @ FCSC Nemesis Blue{" "}
              <span className="text-green-500 italic font-bold">W 2-0</span>
            </p>

            <h3 className="text-2xl font-bold">Saturday, August 7th 2021</h3>
            <p className="mb-3 flex items-center justify-between">
              <span>
                <strong>9:00am</strong>: @ Pacific FC Fuego
              </span>
              <span className="text-gray-900 font-bold">L 0-3</span>
            </p>
            <p className="mb-3">
              <strong>6:00pm</strong>: vs. WUFC Gold{" "}
              <span className="text-gray-500 italic">Field 2A</span>
              <br /> (wear WHITE; bring BLUE)
            </p>

            <h3 className="text-2xl font-bold">Sunday, August 8th 2021</h3>
            <p className="mb-3">
              <strong>9:00am</strong>: vs Eastside Thorns Red{" "}
              <span className="text-gray-500 italic">Field 2A</span>
              <br /> (wear WHITE; bring BLUE)
            </p>
            <p className="mb-3">
              <strong>1:30pm</strong>: vs. TBD{" "}
              <span className="text-gray-500 italic">Field 2A</span>
              <br /> (if necessary, championship game)
            </p>
          </div>
          <Image src={mthoodchallenge} />
        </div>
      </main>
    </div>
  );
});

export default Schedule;
