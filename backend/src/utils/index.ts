import {
  cleanEnv, str, port
} from "envalid";

export function validateEnv(): void {
  cleanEnv(process.env, {
    MONGO_URI: str(),
    PORT: port(),
    NODE_ENV: str(),
    GOOGLE_SPREADSHEET_ID: str(),
    MAX_CACHE_GLOBAL: str(),
  });
}
