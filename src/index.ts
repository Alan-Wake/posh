#!/usr/bin/env node
/**
 * Internal dependencies
 */
import { prompt } from "./prompt";
import { run } from "./run";

(async () => {
  const response: any = await prompt();
  console.log("==> Installing", response.value);
  run(response.run);
})();
