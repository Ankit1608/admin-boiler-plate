import React from "react";
import "./TableReusable.css";
function CtfTablelist({ flag, tablelabels, tablelist }) {
  return (
    <>
      {flag === "usergist" && (
        <div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => {
                return (
                  <>
                    <tr className="table-data">
                      <td>{item.name}</td>
                      <td>{item.user_name} </td>
                      <td>{item.email}</td>
                      <td>{item.badges.length}</td>
                      <td>{item.certificates.length}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {flag === "userpayments" && (
        <div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => {
                return (
                  <>
                    <tr className="table-data">
                      <td>{item.email}</td>
                      <td>{item.transaction_id}</td>
                      <td>{item.time_stamp}</td>
                      <td>{item.amount}</td>
                      <td>{item.flashes}</td>
                      <td>{item.discount_coupon.discount}</td>
                      <td>{item.invoice}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {flag === "usersecurity" && (
        <div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => {
                return (
                  <>
                    <tr className="table-data">
                      <td>{item.id}</td>
                      <td>{item.user_name}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.tokenVersion}</td>
                      <td>Button</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {flag === "allcourses" && (
        <div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => {
                return (
                  <>
                    <tr className="table-data">
                      <td>{item.id}</td>
                      <td>
                        {item.course_name1}
                        {item.course_name2}
                      </td>
                      <td>{item.subtitle}</td>
                      <td>{item.difficulty}</td>
                      <td>{item.modules.length}</td>

                      <td>{item.flashes}</td>
                      <td>
                        <button onClick="">Edit</button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {flag === "allpaths" && (
        <div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => {
                return (
                  <>
                    <tr className="table-data">
                      <td>{item.id}</td>
                      <td>
                        {item.path_title1}
                        {item.path_title2}
                      </td>
                      <td>{item.difficulty}</td>
                      <td>{item.flashes}</td>

                      <td>{item.courses.length}</td>
                      <td>
                        <button>Edit</button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {flag === "allflashes" && (
        <div>
          <table
            id="ctftable"
            style={{
              width: "100%",
              color: "#ffffff",
            }}
          >
            <tbody>
              <tr className="table-header">
                {tablelabels.map((label) => (
                  <td>{label}</td>
                ))}
              </tr>
              {tablelist.map((item) => {
                return (
                  <>
                    <tr className="table-data">
                      <td>{item.id}</td>
                      <td>{item.flashes_no}</td>
                      <td> {item.amount}</td>
                      <td>{item.discount.length}</td>
                      <td>Button</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CtfTablelist;
