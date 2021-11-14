import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { Container } from "../styles/common-styles";

type Game = {
  team: string;
  time: string;
  field: string;
  homeOrAway: string;
  opponent: string;
  result: string;
  notes?: string;
};

type Schedule = {
  date: string;
  games: Game[];
};

const P = tw.p`mb-2`;
const TeamList = tw.ol`list-decimal ml-6`;
const Table = tw.table`w-full border-collapse`;
const TableHeader = tw.th`font-bold text-xs md:text-lg text-left p-1 md:p-2`;
const TableDateRow = tw.tr`text-sm md:text-base border-b-2 border-gray-300 bg-gray-100`;
const TableData = tw.td`text-xs md:text-base pt-1 pb-2 px-1 md:px-2 text-left align-top`;
const TableDataNotes = styled(TableData)(() => [
  tw`italic`,
  tw`align-middle pt-0 text-sm`,
]);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Futsal = () => {
  const { user, error, isLoading } = useUser();

  const { data: schedule, error: fetchError } = useSWR<Schedule[], any>(
    "/api/getFutsalSchedule",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
            <P className="italic text-center mb-2">
              <Link href="#schedule">
                <a className="underline font-bold">Schedule</a>
              </Link>
            </P>
            <P>For now here are some links to Rose City Futsal&apos;s site.</P>
            <ul className="list-disc ml-8">
              <li className="list-item">
                <Link href="https://rosecityfutsal.com/about/locations/">
                  <a className="underline font-bold" target="_blank">
                    Locations/Directions
                  </a>
                </Link>{" "}
                - please check here for directions to EAST and WEST locations.
              </li>
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
            <P>
              Dick&apos;s has indoor shoes in stock, Lake Oswego store has the
              most available.
            </P>
            <h2 className="text-xl md:text-2xl font-bold mt-8">Teams</h2>
            <P>
              We will have two teams:{" "}
              <span className="text-blue-700 font-bold">BLUE</span> and{" "}
              <span className="text-white bg-black inline-block px-1 font-bold">
                WHITE
              </span>
              .
            </P>
            <P>
              Players will be assigned to a specific team but there might be
              some overlap (especially if players are out and our numbers are
              low for any given week).
            </P>
            <div className="flex w-full">
              <div className="flex-1">
                <h2 className="text-blue-700 font-bold text-4xl">BLUE</h2>
                <TeamList>
                  <li className="list-item">Jozy</li>
                  <li className="list-item">Olivia</li>
                  <li className="list-item">Isa</li>
                  <li className="list-item">Sidney</li>
                  <li className="list-item">Megan</li>
                  <li className="list-item">Amara</li>
                  <li className="list-item">Camille</li>
                  <li className="list-item">Nora B.</li>
                </TeamList>
              </div>
              <div className="flex-1">
                <h2 className="text-white bg-black inline-block px-1 font-bold text-4xl">
                  WHITE
                </h2>
                <TeamList>
                  <li className="list-item">Skye</li>
                  <li className="list-item">Sylvia</li>
                  <li className="list-item">Nola</li>
                  <li className="list-item">Clara</li>
                  <li className="list-item">Lucia</li>
                  <li className="list-item">Mazzie</li>
                  <li className="list-item">Milly</li>
                  <li className="list-item">Etta</li>
                </TeamList>
              </div>
            </div>
            <h2 id="schedule" className="text-xl md:text-2xl font-bold mt-8">
              Schedule
            </h2>
            <p tw="mt-2">
              <strong>RCF West</strong> -{" "}
              <Link href="https://maps.google.com/maps?ll=45.440828,-122.781705&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=3329731263541845162">
                <a target="_blank" className="underline">
                  10831 SW Cascade Ave. Tigard, OR 97223
                </a>
              </Link>
            </p>
            <p tw="mt-1">
              <strong>RCF East</strong> -{" "}
              <Link href="https://maps.google.com/maps?ll=45.528941,-122.611831&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=9811445618550201241">
                <a target="_blank" className="underline">
                  5010 NE Oregon St. Portland, OR 97213
                </a>
              </Link>
            </p>
            <Table tw="mt-5">
              <thead>
                <tr>
                  <TableHeader>Team</TableHeader>
                  <TableHeader>Time</TableHeader>
                  <TableHeader>Location</TableHeader>
                  <TableHeader>H/A</TableHeader>
                  <TableHeader>Opponent</TableHeader>
                  <TableHeader>Result</TableHeader>
                </tr>
              </thead>
              <tbody>
                {schedule &&
                  schedule.map((date: { date: string; games: Game[] }) => (
                    <>
                      <TableDateRow key={date.date}>
                        <TableHeader colSpan={2}>{date.date}</TableHeader>
                        <TableData></TableData>
                        <TableData></TableData>
                        <TableData></TableData>
                        <TableData></TableData>
                      </TableDateRow>
                      {date.games.map((game: Game) => (
                        <>
                          <tr
                            key={`${game.team}-${game.homeOrAway}-${game.opponent}`}
                          >
                            <TableData>{game.team}</TableData>
                            <TableData>{game.time}</TableData>
                            <TableData>{game.field}</TableData>
                            <TableData>{game.homeOrAway}</TableData>
                            <TableData>{game.opponent}</TableData>
                            <TableData>{game.result}</TableData>
                          </tr>
                          {game.notes && (
                            <tr>
                              <TableDataNotes colSpan={6}>
                                <p tw="flex items-center">
                                  <span className="material-icons pr-2">
                                    sports_soccer
                                  </span>
                                  {game.notes}
                                </p>
                              </TableDataNotes>
                            </tr>
                          )}
                        </>
                      ))}
                    </>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Futsal;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
