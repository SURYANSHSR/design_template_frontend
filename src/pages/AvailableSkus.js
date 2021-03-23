import "./AvailableSkus.css";
import React, { useEffect, useState } from "react";
import axios from "../axios";
export default () => {
  const [fontDetails, setFontDetails] = useState();

  useEffect(() => {
    report_data = [];
    async function addSlug() {
      let z = [];

      const req = await axios.get(`/allrecords1`);

      if (req.data === []) {
      } else {
        /*
      for (let i in req.data) {
        z.push(<th>{i}</th>);
      }
*/
        for (let key2 in req.data["id"]) {
          let data = {};

          for (let cl_name in req.data) {
            data[cl_name] = req.data[cl_name][key2];
          }
          report_data.push(data);
        }

        for (let x in report_data) {
          let td = [];
          for (let cl_name in req.data) {
            td.push(<td>{report_data[x][cl_name]}</td>);
          }
          z.push(<tr>{td}</tr>);
        }
        let y = <table className="table">{z}</table>;
        console.log(y);

        setFontDetails(y);
      }
    }
    addSlug();
  }, []);

  return (
    <div className="ASKUS">
      <h3> Available SKUs</h3>
      <div id="table-wrapper">
        <div id="table-scroll">{fontDetails}</div>
      </div>
    </div>
  );
};
