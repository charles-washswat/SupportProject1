import React, { useState, useEffect, useMemo } from "react";

const imageWidth = 3544;
const imageHeight = 6828;
const urlLink1 =
  "https://docs.google.com/forms/d/1jN8E3dM2NDaU6k2OYxVlI9sFtLeRFQsnkkBVPMMDT_0/edit";
const urlLink2 =
  "https://docs.google.com/forms/d/1jN8E3dM2NDaU6k2OYxVlI9sFtLeRFQsnkkBVPMMDT_0/edit";
const urlLink3 = "https://tmarket.dgist.ac.kr/main.do";
const urlLink4 =
  "https://docs.google.com/forms/d/1jN8E3dM2NDaU6k2OYxVlI9sFtLeRFQsnkkBVPMMDT_0/edit";

function App() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const imgDimension = useMemo(
    () => (imageHeight * windowDimenion.winWidth) / imageWidth,
    [windowDimenion]
  );

  const detectSize = () => {
    // console.log("window.innerWidth: ", window.innerWidth);
    // console.log("window.innerHeight: ", window.innerHeight);
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const handleClick = (myLink) => {
    window.location.href = myLink;
  };

  return (
    <div className="App" style={{ display: "flex", flex: 1 }}>
      <div
        style={{
          position: "absolute",
          width: "20%",
          height: imgDimension * 0.027,
          top: imgDimension * 0.18,
          left: "40%",
          // backgroundColor: "gray",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => handleClick(urlLink1)}
      />
      {/* <div
        style={{
          position: "absolute",
          width: "11.5%",
          height: imgDimension * 0.053,
          top: imgDimension * 0.522,
          left: "80.2%",
          // backgroundColor: "gray",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => handleClick(urlLink2)}
      /> */}
      <div
        style={{
          position: "absolute",
          width: "11.5%",
          height: imgDimension * 0.053,
          top: imgDimension * 0.59,
          left: "80.2%",
          // backgroundColor: "gray",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => handleClick(urlLink3)}
      />
      <div
        style={{
          position: "absolute",
          width: "11%",
          height: imgDimension * 0.053,
          top: imgDimension * 0.757,
          left: "80.4%",
          // backgroundColor: "gray",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => handleClick(urlLink4)}
      />
      <img
        src="/images/gyeongbuk.png"
        alt="blank"
        style={{ width: "100%", zIndex: 1 }}
      ></img>
    </div>
  );
}

export default App;
