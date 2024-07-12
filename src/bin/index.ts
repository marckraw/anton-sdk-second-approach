import { AntonSDK } from "../index";
import { createLogger } from "../logger/logger";

const logger = createLogger("main");
const main = async () => {
  const anton = new AntonSDK({ type: "anthropic", apiKey: "" });
  const response = await anton.chat([{ role: "user", content: "Hello" }]);

  logger.warn("This is response: ");
  logger.log(response);
};

(async () => {
  try {
    await main();
  } catch (e) {
    console.error("Error in main function: ", e);
  }
})();
