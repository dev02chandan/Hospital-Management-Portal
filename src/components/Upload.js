import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [uploadFile, setUploadFile] = useState();
  const [superHero, setSuperHero] = useState();

  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("superHeroName", superHero);
    dataArray.append("uploadFile", uploadFile);

    axios
      .post("api_url_here", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // successfully uploaded response
      })
      .catch((error) => {
        // error response
      });
  };

  return (
    <div className="form-container">
      <h2 className="myh2">Upload Your Files here: </h2>
      <form onSubmit={submitForm}>
        <div className="form-inner">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setSuperHero(e.target.value)}
              placeholder={"Your PDF Files: "}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="file"
              onChange={(e) => setUploadFile(e.target.files)}
            />
          </div>
          <br />
          <div className="form-group">
            <input type="submit" className="button" />
          </div>
        </div>
      </form>
    </div>
  );
}
