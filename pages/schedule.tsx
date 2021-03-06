import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import Navbar from "../components/Navbar";
import { hasRole } from "../components/utils";
import { Container } from "../styles/common-styles";
import lentspark from "../public/lentspark.png";
import brentwoodpark from "../public/brentwoodpark.png";

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

const Table = tw.table`w-full border-collapse`;
const TableHeader = tw.th`font-bold text-xs md:text-lg text-left p-1 md:p-2`;
const TableDateRow = tw.tr`text-sm md:text-base border-b-2 border-gray-300 bg-gray-100`;
const TableData = tw.td`text-xs md:text-base pt-1 pb-2 px-1 md:px-2 text-left`;
const TableDataNotes = styled(TableData)(() => [
  tw`italic`,
  tw`align-middle pt-0 text-sm`,
]);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Schedule = () => {
  const { user, error, isLoading } = useUser();

  const { data: schedule, error: fetchError } = useSWR<Schedule[], any>(
    "/api/getSchedule",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>Schedule</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
            2021-2022 Game Schedule
          </h1>
          <hr />
          <div id="fall-season" className="my-5 py-5">
            <h2 tw="text-xl md:text-2xl font-bold text-center">
              Spring 2022 Season Schedule
            </h2>
            <h3 tw="text-lg md:text-xl font-bold text-center">
              Gold/Blue (G) and Bronze/White (B)
            </h3>
            <h4 tw="text-sm text-center italic">All games at Delta Park.</h4>
            <h4 tw="mt-2 text-center text-xs">
              <strong>Home:</strong> Gray Jersey
              <br />
              <strong>Away:</strong> Blue Jersey
            </h4>
            <Table tw="mt-5">
              <thead>
                <tr>
                  <TableHeader>Team</TableHeader>
                  <TableHeader>Time</TableHeader>
                  <TableHeader>Field</TableHeader>
                  <TableHeader>Jersey</TableHeader>
                  <TableHeader>Opponent</TableHeader>
                  <TableHeader>Result</TableHeader>
                </tr>
              </thead>
              <tbody>
                {schedule &&
                  schedule.map((date: { date: string; games: Game[] }) => (
                    <>
                      <TableDateRow key={date.date}>
                        <TableHeader>{date.date}</TableHeader>
                        <TableData></TableData>
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

export default Schedule;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
