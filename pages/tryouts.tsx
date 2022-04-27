import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const TryOuts = () => {
  return (
    <div>
      <Head>
        <title>2022/2023 Tryouts | SESC Wolves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white rounded p-6 shadow-lg mt-5 prose">
          <h1 className="text-4xl font-bold text-center mb-2">
            2022/2023 Tryouts
          </h1>
          <p className="mb-4 flex items-center justify-around"></p>
          <hr />
          <div className="my-5 py-5">
            <h2 className="text-2xl font-bold mb-4">Schedule</h2>
            <p className="pb-4">
              You can come to both or one of the tryout dates. It is encouraged
              to come to both so that we have enough time to watch you train,
              but if you can only make one we will not hold it against you.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg">
                <strong className="text-xl">Monday</strong>
                <br />
                May 2nd
                <br />
                5:00pm - 6:30pm
                <br />
                <Link href="https://goo.gl/maps/ZjiheSK8nq4fpbQD8">
                  <a target="_blank" className="underline">
                    @ Lents Park Turf Field
                  </a>
                </Link>
              </p>
              <p className="italic text-6xl">&amp;</p>
              <p className="text-lg">
                <strong className="text-xl">Friday</strong>
                <br />
                May 6th
                <br />
                5:00pm - 6:30pm
                <br />
                <Link href="https://goo.gl/maps/ZjiheSK8nq4fpbQD8">
                  <a target="_blank" className="underline">
                    @ Lents Park Turf Field
                  </a>
                </Link>
              </p>
            </div>
            <p className="pt-6">
              <ul class="list-disc list-inside ml-2">
                <li>Look for us on the turf field.</li>
                <li>
                  Bring:
                  <ul class="list-inside list-disc ml-4">
                    <li>a water bottle</li>
                    <li>a size 4 ball</li>
                    <li>
                      dress in non-sesc gear (white shirt, black shorts, white
                      socks - as an example - doesn&apos;t have to be this
                      exactly)
                    </li>
                    <li>Please wear shin-guards and soccer cleats.</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <hr />
          <div className="py-4 my-4">
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <p>Team assignments will be posted by Saturday, May 7th.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TryOuts;
