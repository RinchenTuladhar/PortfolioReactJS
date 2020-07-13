import React from "react";
import Panel from "./Panel";

const Skills = () => {
  return (
    <div>
      <h1>Experienced with:</h1>
      <div className="flex-time">
        <Panel title="Ruby on Rails" />
        <Panel title="JavaScript" />
        <Panel title="ReactJS" />
      </div>

      <h1>Project examples:</h1>
      <div className="flex-time">
        <Panel
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          url=""
        />
        <Panel
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          url=""
        />
        <Panel
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          url=""
        />
      </div>
    </div>
  );
};

export default Skills;
