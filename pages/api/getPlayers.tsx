import type { NextApiRequest, NextApiResponse } from "next";
import { table, statsTable, minifyRecords } from "./utils/Airtable";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { sortBy = "rating", direction = "desc" } = req.query;
    if (
      typeof sortBy !== "string" ||
      (direction !== "asc" && direction !== "desc")
    ) {
      throw new Error("Query param must be string");
    }
    const records: readonly any[] = await table
      .select({ sort: [{ field: sortBy, direction }] })
      .firstPage();
    const minifiedRecords = minifyRecords(records);
    res.statusCode = 200;
    res.json(minifiedRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
