import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="py-8 w-full flex items-center justify-center">
      <GitHubCalendar
        username="nvnKr09"
        blockSize={13.3}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        />
    </div>
  );
}

export default Github;