import React from "react";

import TableReusable from "../../../reusable/TableReusable";
import { findallUsers } from "../../../graphql/gql";
import { useQuery } from "@apollo/react-hooks";

function Index() {
  const { data, loading } = useQuery(findallUsers);
  const tablelabels = ["Name", "UserName", "Email", "Badges", "Certificates"];

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
          flag="usergist"
          tablelabels={tablelabels}
          tablelist={data.findallUsers}
        ></TableReusable>
      )}
    </div>
  );
}

export default Index;
