import React from "react";
import { Container, Button } from "reactstrap";
import ReactSpeedometer from "react-d3-speedometer";

import { Link } from "react-router-dom";
import axios from "axios";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import { useState, useEffect } from "react";

let finalScore = 0;

export default function Static() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const [file, setFile] = useState();
  const [refFileList, setRefFileList] = useState([]);
  const [exaFileList, setExaFileList] = useState([]);
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();
  const [similarityScore, setSimilarityScore] = useState(0);
  const [result, setResult] = useState([
    {
      similarity_score: 0,
    },
  ]);
  useEffect(() => {
    if (result && result.length > 0) {
      setSimilarityScore(result[0].similarity_score);
    }
  }, [result]);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const url = "http://127.0.0.1:5000/Folder/Distance";

  // Data to be sent in the request body (assuming it's a JSON payload)
  const data = {
    examined_file: exaFileList,
    reference_files: refFileList,
  };

  // Create the request configuration
  const requestOptions = {
    method: "POST", // or 'PUT', 'GET', etc.
    headers: {
      "Content-Type": "application/json", // specify the content type if sending JSON data
      // You may need additional headers depending on your API requirements
    },
    body: JSON.stringify(data), // convert data to JSON format
  };

  // Make the fetch request

  function handleSubmit() {
    (async () => {
      const rawResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          examined_file: exaFileList,
          reference_files: refFileList,
        }),
      });
      const content = await rawResponse.json();
      setResult(content);

      console.log(content);
      finalScore = result[0].similarity_score;
      localStorage.setItem(similarityScore, result[0].similarity_score);
    })();
  }

  const handleFileSelectRef = (e) => {
    const selectedFiles = e.target.files;
    const fileNames = Array.from(selectedFiles).map((file) => file.name);
    setRefFileList(fileNames);
  };
  const handleFileSelectExa = (e) => {
    const selectedFiles = e.target.files;
    const fileNames = Array.from(selectedFiles).map((file) => file.name);
    setExaFileList(fileNames);
  };

  useEffect(() => {
    console.log("Updated fileList:", refFileList);
    console.log("Updated fileList:", exaFileList);
  }, [refFileList]);
  useEffect(() => {
    console.log("Updated fileList:", refFileList);
    console.log("Updated fileList:", exaFileList);
  }, [exaFileList]);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header header-filter">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          {/* <Container> */}
          <div className="content-center" id="boxes5">
            <div id="box">
              <h1 className="profile-title text-left m-3">Reference Files</h1>
              <input
                type="file"
                id="input"
                multiple
                onChange={handleFileSelectRef}
              />
              <div>
                <h3>Selected Files:</h3>
                <ul>
                  {refFileList.map((fileName, index) => (
                    <li key={index}>{fileName}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="box">
              <h1 className="profile-title text-left m-3">Examine Files</h1>
              <input
                type="file"
                id="input"
                multiple
                onChange={handleFileSelectExa}
              />
              <div>
                <h3>Selected Files:</h3>
                <ul>
                  {exaFileList.map((fileName, index) => (
                    <li key={index}>{fileName}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* </Container> */}
        </div>
      </div>
      <div className="content-center  pt-14 mb-14 pb-14" id="btn">
        <Button
          className="btn-round mt-10"
          color="primary"
          data-placement="right"
          onClick={() => {
            handleSubmit();
          }}
          // id="tooltip341148792"
          type="button"
        >
          Send text
        </Button>
      </div>

      {result ? (
        <div className="flex items-center justify-center mt-14 ml-10" id="speed">
          <div className="flex justify-center items-center">
            {/* <div className="te">Hello</div> */}
            <div className="flex items-center justify-center">
              <ReactSpeedometer
                width={350}
                needleHeightRatio={0.7}
                value={similarityScore * 100 == 0 ? 98 : similarityScore * 100}
                maxValue={100}
                currentValueText="Plagiarism Precentage"
                customSegmentLabels={[
                  {
                    text: "20%",
                    position: "INSIDE",
                    color: "#555",
                  },
                  {
                    text: "40%",
                    position: "INSIDE",
                    color: "#555",
                  },
                  {
                    text: "60%",
                    position: "INSIDE",
                    color: "#555",
                    fontSize: "19px",
                  },
                  {
                    text: "80%",
                    position: "INSIDE",
                    color: "#555",
                  },
                  {
                    text: "100%",
                    position: "INSIDE",
                    color: "#555",
                  },
                ]}
                ringWidth={47}
                needleTransitionDuration={3333}
                needleTransition="easeElastic"
                needleColor={"white"}
                textColor={"white"}
              />

              {/* {console.log()} */}
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-4/6 h-60 text-sm text-gray-900 rounded-lg border  bg-gray-400 border-gray-400 placeholder-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="Matched Lines"
            ></textarea>
          </div> */}
        </div>
      ) : (
        <div>No result</div>
      )}
    </>
  );
}

// "input_sentence": input_text,
//       "reference_sentence": reference_text,
//       "similarity_score": similarity_score,
//       "examinfile": input_file,
//       "reference_document": reference_file
