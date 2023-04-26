import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = ({ isMobile }) => {
  return (
    <div className="flex flex-wrow flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas
            index={index}
            icon={technology.icon}
            isMobile={isMobile}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "techs");
