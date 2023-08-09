import React from "react";
import Navigation from "./Navigation";
import "../styles/type.css"; // Import your custom CSS file
import Dropdown from "react-bootstrap/Dropdown";
import { RiPencilLine } from "react-icons/ri";
import TextEditor from "./TextEditor";

function Page1() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [num, setNum] = React.useState("");
  const [dnum, setdNum] = React.useState("");
  const [showEditor, setShowEditor] = React.useState(false);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Navigation />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 custom-border-right">
            {" "}
            {/* Add custom CSS class for right border */}
            {/* <h3>Column 1</h3> */}
            <div className="row">
              <div className="col-6">
                <div className="container mt-4">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Select Language
                  </label>
                  <select
                    className="d-flex justify-content-start"
                    id="selectBox"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="option1">Sinhala</option>
                    <option value="India">English</option>
                    <option value="Sri Lanka">Tamil</option>
                  </select>
                  <p>{console.log(selectedOption)}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="container mt-4">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Select Tone
                  </label>
                  <select
                    className="d-flex justify-content-start"
                    id="selectBox"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>
                      Select tone
                    </option>
                    <option value="option1">Casual</option>
                    <option value="India">Formal</option>
                    <option value="Sri Lanka">Funny</option>
                  </select>
                  <p>{console.log(selectedOption)}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="container mt-1">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Choose use case
                  </label>
                  <select
                    className="d-flex justify-content-start"
                    id="selectBox"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>
                      Choose use case
                    </option>
                    <option value="option1">Instagram</option>
                    <option value="India">Youtube</option>
                    <option value="Sri Lanka">Tiktok</option>
                  </select>
                  <p>{console.log(selectedOption)}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="container mt-1">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Product name
                  </label>
                  <input
                    className="d-flex justify-content-start"
                    type="text"
                    onChange={(e) => {
                      setNum(e.target.value);
                    }}
                    maxlength="100"
                    id="product-name"
                    name="product_name"
                    required
                  />
                  <p className="d-flex justify-content-end">
                    {0 + num.length}/100
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div class="input-textarea text">
                  <div className="container mt-1">
                    <label
                      className="d-flex justify-content-start mb-2"
                      for="product-description"
                    >
                      Product Description
                    </label>
                    <textarea
                      onChange={(e) => {
                        setdNum(e.target.value);
                      }}
                      id="product-description"
                      name="product_description"
                      rows="4"
                      maxlength="500"
                      required
                    ></textarea>
                    <p className="d-flex justify-content-end">
                      {0 + dnum.length}/500
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="container mt-1">
                  <button
                    className="submitbtn"
                    style={{ width: "100%", padding: "9px" }}
                    onClick={() => setShowEditor(!showEditor)}
                  >
                    <RiPencilLine style={{ marginRight: "5px" }} />
                    Ryte Me
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8" style={{paddingRight:"0px"}}>
            {showEditor ? (
              <TextEditor />
            ) : (
              <div className="line-left">
                <div class="container mt-4">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Items</th>
                        <th>Words</th>
                        <th>Modified</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product 1</td>
                        <td>10</td>
                        <td>500</td>
                        <td>2023-07-20</td>
                      </tr>
                      <tr>
                        <td>Product 2</td>
                        <td>5</td>
                        <td>250</td>
                        <td>2023-07-19</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
