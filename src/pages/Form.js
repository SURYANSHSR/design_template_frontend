import "./Form.css";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import { save } from "save-file";

export default () => {
  const [productCode, setProductCode] = useState("");
  const [revision, setRevision] = useState("");
  const [tyreSize, setTyreSize] = useState("");
  const [tyrePattern, setTyrePattern] = useState("");

  const fetch = () => {
    if (productCode === "" || revision === "") {
      alert("Plz enter productcode & revision");
      return;
    }

    let report_data = [];

    async function addSlug() {
      console.log("displaying");
      const req = await axios.get(`/recorddetails?q=${productCode}${revision}`);
      console.log(req);

      for (let key2 in req.data["id"]) {
        let data = {};

        for (let cl_name in req.data) {
          data[cl_name] = req.data[cl_name][key2];
        }
        report_data.push(data);
        setProductCode(report_data[0]["product_code"]);
        setRevision(report_data[0]["revision"]);
        setTyreSize(report_data[0]["tyre_size"]);
        setTyrePattern(report_data[0]["tyre_pattern"]);
        console.log(report_data);
      }
    }

    addSlug();
  };

  const create = () => {
    if (productCode === "" || revision === "") {
      alert("Plz enter details");
      return;
    }
    let report_data = [];
    let sentData = { productCode, revision, tyreSize, tyrePattern };

    let formData = new FormData();
    formData.append("data", JSON.stringify(sentData));
    formData.append("name", "suryansh123");
    async function addSlug() {
      const req = await axios.post(`/createrecord/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      for (let key2 in req.data["id"]) {
        let data = {};

        for (let cl_name in req.data) {
          data[cl_name] = req.data[cl_name][key2];
        }
        report_data.push(data);
        setProductCode(report_data[0]["product_code"]);
        setRevision(report_data[0]["revision"]);
        setTyreSize(report_data[0]["tyre_size"]);
        setTyrePattern(report_data[0]["tyre_pattern"]);
        console.log(report_data);
        clearFields();
      }
    }

    addSlug();
  };

  const update = () => {
    if (productCode === "" || revision === "") {
      alert("Plz enter productcode & revision");
      return;
    }
    let report_data = [];
    let sentData = { productCode, revision, tyreSize, tyrePattern };

    let formData = new FormData();
    formData.append("data", JSON.stringify(sentData));
    formData.append("name", "saurabh123");
    async function addSlug() {
      const req = await axios.post(`/createrecord/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      for (let key2 in req.data["id"]) {
        let data = {};

        for (let cl_name in req.data) {
          data[cl_name] = req.data[cl_name][key2];
        }
        report_data.push(data);
        setProductCode(report_data[0]["product_code"]);
        setRevision(report_data[0]["revision"]);
        setTyreSize(report_data[0]["tyre_size"]);
        setTyrePattern(report_data[0]["tyre_pattern"]);
        console.log(report_data);
        clearFields();
      }
    }

    addSlug();
  };

  const clearFields = () => {
    setProductCode("");
    setRevision("");
    setTyreSize("");
    setTyrePattern("");
  };

  const download = () => {
    if (productCode === "" || revision === "") {
      alert("Plz enter productcode & revision");
      return;
    }
    async function addSlug() {
      const req = await axios.get(`/export_excel?q=${productCode}${revision}`, {
        responseType: "arraybuffer"
      });
      console.log(req);

      await save(req.data, "example.xlsx");

      clearFields();
    }

    addSlug();
  };
  let data = ["1E2569", "02", "10.00-20", "Tipper King"];
  return (
    <div>
      <div className="DMF">
        <div>
          <h3> Data Management Form</h3>
          <div className="row">
            <level className="level">Product Code</level>
            <input
              className="input"
              onChange={(e) => setProductCode(e.target.value)}
              value={productCode}
            />
          </div>
          <div className="row">
            <level className="level">Revision</level>
            <input
              className="input"
              onChange={(e) => setRevision(e.target.value)}
              value={revision}
            />
          </div>
          <div className="row">
            <level className="level">Tyre Size</level>
            <input
              className="input"
              onChange={(e) => setTyreSize(e.target.value)}
              value={tyreSize}
            />
          </div>
          <div className="row">
            <level className="level">Tyre Pattern</level>
            <input
              className="input"
              onChange={(e) => setTyrePattern(e.target.value)}
              value={tyrePattern}
            />
          </div>
        </div>
        <div className="button__box">
          <input
            placeholder="Enter Product Code"
            onChange={(e) => setProductCode(e.target.value)}
            value={productCode}
          />
          <input
            placeholder="Enter Revision No"
            onChange={(e) => setRevision(e.target.value)}
            value={revision}
          />

          <button className="button" onClick={clearFields}>
            CLEAR
          </button>

          <button className="button" onClick={create}>
            CREATE
          </button>
          <button className="button" onClick={update}>
            UPDATE
          </button>
          <button className="button" onClick={fetch}>
            DISPLAY
          </button>
          <button className="button" onClick={download}>
            DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  );
};
