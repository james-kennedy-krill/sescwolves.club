import type { NextApiRequest, NextApiResponse } from "next";
import { table, minifyRecords } from "./utils/Airtable";

const createPlayer = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName } = req.body;
  try {
    const createdRecords: readonly any[] = await table.create([
      { fields: { firstName, lastName } },
    ]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};

export default createPlayer;
