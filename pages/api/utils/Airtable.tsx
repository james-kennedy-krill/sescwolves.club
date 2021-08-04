import Airtable from "airtable";

export type PlayerStats = {
  id: string;
  fields: {
    goals?: number;
    assists?: number;
  };
};

export type Player = {
  id: string;
  fields: {
    [key: string]: string | string[] | number | undefined;
    firstName: string;
    lastName: string;
    number?: string;
    position?: string[];
    rating?: number;
    dribbling?: number;
    passing?: number;
    shooting?: number;
    aggressiveness?: number;
    attention?: number;
    intelligence?: number;
    player_stats?: string[];
  };
  stats?: PlayerStats;
};

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID || ""
);

const table = base(process.env.AIRTABLE_TABLE_NAME || "");
const statsTable = base(
  process.env.AIRTABLE_STATS_TABLE_NAME || "player_stats"
);

const getMinifiedRecord = (record: Player): Player => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records: readonly any[]) => {
  return records.map((record: any) => getMinifiedRecord(record));
};

export { table, statsTable, getMinifiedRecord, minifyRecords };
