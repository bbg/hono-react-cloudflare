//
// BEGIN
//

import Application from "@app/app";
import * as ReactDOMServer from "react-dom/server";

export async function SSRRender() {
  return await ReactDOMServer.renderToReadableStream(<Application />, {
    bootstrapModules: ["/assets/main.js"],
  });
}

//
// END
//
