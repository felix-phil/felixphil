import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { aboutMe, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1.2,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain object-center"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [collapsedText, setCollapsedText] = useState(true);
  return (
    <React.Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ${
            collapsedText && "line-clamp-4"
          }`}
        >
          {aboutMe}
        </motion.p>
        <button
          type="button"
          onClick={() => setCollapsedText((prev) => !prev)}
          className="mt-5 bg-tertiary py-3 px-8 outline-none font-bold w-fit text-white shadow-md shadow-primary rounded-xl disabled:opacity-50"
        >
          {collapsedText ? "See more" : "Collapse"}
        </button>
      </div>
      <div className="mt-20 flex flex-wrap gap-10 items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default SectionWrapper(About, "about");
