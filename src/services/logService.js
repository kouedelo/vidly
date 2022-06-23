import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://c79d76c54f014f66b0102d56285d86e8@o565532.ingest.sentry.io/5707288",
  //   { release: "1-0-0", environment: "development-test" }
  // ).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default {
  init,
  log,
};
