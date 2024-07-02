import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "./Context/Context";

const Main = () => {
  const {
    onSent,
    recentPromt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
          {!showResult ? (
            <>
              {" "}
              <div className="greet">
                <p>
                  <span>Hello,Nachiket</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Brainstrom team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPromt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                  </div> 
                  :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                placeholder="Enter a promt here.."
              />

              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
