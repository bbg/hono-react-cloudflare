//
// BEGIN
//

import React from "react";
import ReactDOM from "react-dom/client";
import Application from "@app/app";

function Client() {
  return (
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  );
}

ReactDOM.hydrateRoot(document!, <Client />);

//
// END
//
