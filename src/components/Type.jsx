import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
      <Typewriter
        options={{
          strings: ["Frontend Developer", "Software Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
        }}
      />
  );
}

export default Type;
