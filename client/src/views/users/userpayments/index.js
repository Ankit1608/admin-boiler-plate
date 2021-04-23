import React from "react";
import TableReusable from "../../../reusable/TableReusable";
import { findallPayments } from "../../../graphql/gql";
import { useQuery } from "@apollo/react-hooks";
function Index() {
  const { data, loading } = useQuery(findallPayments);
  const tablelabels = [
    "Email",
    "Transaction_id",
    "Time",
    "Amount",
    "Flashes",
    "Discount",
    "Invoice",
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
          flag="userpayments"
          tablelabels={tablelabels}
          tablelist={data.findallPayments}
        ></TableReusable>
      )}
    </div>
  );
}

export default Index;
