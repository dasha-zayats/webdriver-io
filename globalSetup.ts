// eslint-disable-next-line @typescript-eslint/no-var-requires
require("ts-node").register({ transpileOnly: true });
import { DbClient } from "./src/db/db.client";
const setup = async function () {
  await DbClient.getInstance().getConnection();
};

export default setup;
