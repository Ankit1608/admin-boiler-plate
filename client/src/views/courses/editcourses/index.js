// FruitSelector = React.createClass({
//   getInitialState: function () {
//     return { selectValue: "Radish" };
//   },
//   handleChange: function (e) {
//     this.setState({ selectValue: e.target.value });
//   },
//   render: function () {
//     var message = "You selected " + this.state.selectValue;
//     return (
//       <div>
//         <select value={this.state.selectValue} onChange={this.handleChange}>
//           <option value="Orange">Orange</option>
//           <option value="Radish">Radish</option>
//           <option value="Cherry">Cherry</option>
//         </select>
//         <p>{message}</p>
//       </div>
//     );
//   },
// });

// React.render(<FruitSelector name="World" />, document.body);

import React, { useState } from "react";
import { findall } from "../../../graphql/gql";
import { useQuery } from "@apollo/react-hooks";

function Index() {
  function handleChange(e) {
    Setselectvalue(e.target.value);
  }
  const { data, loading } = useQuery(findall);
  const [selectvalue, Setselectvalue] = useState("hjljkl");

  var message = "You selected " + selectvalue;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {data && (
        <div>
          <select
            style={{ width: "130px" }}
            value={selectvalue}
            onChange={handleChange}
          >
            {data.findall.map((course) => {
              const name1 = String(course.course_name1);
              const name2 = String(course.course_name2);
              const title = name1 + " " + name2;
              return <option value={title}>{title}</option>;
            })}
          </select>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Index;
{
  /* <option value="Orange">Orange</option>
<option value="Radish">Radish</option>
<option value="Cherry">Cherry</option> */
}
