import React from "react";

import TableReusable from "../../../reusable/TableReusable";
import { findall } from "../../../graphql/gql";
import { useQuery } from "@apollo/react-hooks";

function Index() {
  const { data, loading } = useQuery(findall);
  const tablelabels = [
    "Course ID",
    "CourseName",
    "Subtitle",
    "Difficulty",
    "Modules",
    "Flashes",
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
          flag="allcourses"
          tablelabels={tablelabels}
          tablelist={data.findall}
        ></TableReusable>
      )}
    </div>
  );
}

export default Index;
