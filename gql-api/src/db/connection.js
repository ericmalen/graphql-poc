import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();

const sql = postgres(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
);

export default sql;
