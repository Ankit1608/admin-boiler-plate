import React from "react";

import TableReusable from "../../../reusable/TableReusable";
import { findallpaths } from "../../../graphql/gql";
import { useQuery } from "@apollo/react-hooks";

function Index() {
  const { data, loading } = useQuery(findallpaths);
  const tablelabels = [
    "Path ID",
    "PathName",
    "Difficulty",
    "Flashes",
    "Modules",
    "More",
  ];

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {data && (
        <TableReusable
          flag="allpaths"
          tablelabels={tablelabels}
          tablelist={data.findallpaths}
        ></TableReusable>
      )}
    </div>
  );
}

export default Index;
