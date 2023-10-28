//
// BEGIN
//

import { usePosts } from "@app/hooks/usePosts";
import { Fragment } from "react";

function DataList() {
  const posts = usePosts();

  return (
    <Fragment>
      {posts.status === "pending" ? (
        "Data is fetching..."
      ) : posts.status === "success" ? (
        <ul>
          {posts.data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      ) : null}
    </Fragment>
  );
}

export default DataList;

//
// END
//
