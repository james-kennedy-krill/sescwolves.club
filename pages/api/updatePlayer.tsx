import type { NextApiRequest, NextApiResponse } from "next";
import { table, getMinifiedRecord } from "./utils/Airtable";

const updatePlayer = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, fields } = req.body;
  try {
    const updatedRecords: readonly any[] = await table.update([{ id, fields }]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecords[0]));
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};

export default updatePlayer;
