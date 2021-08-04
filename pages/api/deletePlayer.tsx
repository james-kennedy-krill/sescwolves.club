import type { NextApiRequest, NextApiResponse } from "next";
import { table, getMinifiedRecord } from "./utils/Airtable";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  try {
    const deletedRecords: readonly any[] = await table.destroy([id]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(deletedRecords[0]));
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
