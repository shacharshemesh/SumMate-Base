import { useState } from "react";
import { improveTextWithAI } from "../services/AI";

const Summarize = () => {
  const [AIErrors, setAIErrors] = useState<string | null>(null);

  const improveText = async () => {
    try {
      const improvedText = await improveTextWithAI("");
      setAIErrors(null);
      console.log(improvedText)
    } catch (error) {
      if (error instanceof Error) {
        setAIErrors(`Error improving text. ${error.message}`);
        console.error("Error improving text:", error);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row col-12">
        <div
          className="card p-5 container"
          style={{ width: "50vw", height: "80vh", borderRadius: "50px", overflowY: "auto" }}
        >
          <div className="text-center mb-2 row">
            <h4 className="col-12">SumMate Assistent - co</h4>
          </div>
          <div className="row justify-content-center">
            <textarea className="col-11" style={{ borderRadius: "20px", padding: "10px", height: "20vh" }}>fsjkj</textarea>
            {AIErrors && <p className="text-danger">{AIErrors}</p>}
          </div>
          <div className="row justify-content-center my-3">
            <button className="btn btn-primary col-6" onClick={improveText} style={{ borderRadius: "50px" }}>Improve with AI</button>
          </div>
          <div className="row justify-content-center">
            <textarea className="col-11" style={{ borderRadius: "20px", padding: "10px", height: "20vh" }}>fsjkj</textarea>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Summarize;
