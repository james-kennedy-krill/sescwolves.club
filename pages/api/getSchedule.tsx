import type { NextApiRequest, NextApiResponse } from "next";
import data from "./schedule-data";

const getSchedule = async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(data);
};

export default getSchedule;
