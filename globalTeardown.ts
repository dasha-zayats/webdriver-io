// eslint-disable-next-line @typescript-eslint/no-var-requires
require("ts-node").register({ transpileOnly: true });
import { DbClient } from "./src/db/db.client";

const teardown = function () {
  DbClient.getInstance().releaseConnection();
};

export default teardown;
