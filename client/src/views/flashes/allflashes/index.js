import React from "react";
import TableReusable from "../../../reusable/TableReusable";
import { findallflashes } from "../../../graphql/gql";
import { useQuery } from "@apollo/react-hooks";
function Index() {
  const { data, loading } = useQuery(findallflashes);
  const tablelabels = [
    "ID",
    "Number of Flashes",
    "Amount",
    "Discount Coupons ",
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
          flag="allflashes"
          tablelabels={tablelabels}
          tablelist={data.findallflashes}
        ></TableReusable>
      )}
    </div>
  );
}

export default Index;
