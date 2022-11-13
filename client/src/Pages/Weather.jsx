import React from "react";
import Windy from "./Windy";

// Conditional rendering
const Weather = ({ today, windy }) => {
  // destructuration
  return (
    <>
      {today === "cloudy" && (
        <div>
          {" "}
          The weather is {today}, grab a scarf ! {windy && <Windy />}
        </div>
      )}

      {today !== "cloudy" && (
        <div>
          The weather isn't {today}, we hope some sun ! {windy && <Windy />}
        </div>
      )}
    </>
  );
};

export default Weather;

// props passées dans HOME
// Home 2 Weather with differents values
