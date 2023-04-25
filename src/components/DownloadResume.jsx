import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { resume } from "../assets";
import { resume_link } from "../constants";

const DownloadResume = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] p-8">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Need more information?</p>
        <h2 className={styles.sectionHeadText}>Résumé</h2>
      </motion.div>

      <div className="flex flex-row items-center justify-between">
        <div className="h-16 w-16">
          <img src={resume} className="h-full w-full invert" />
        </div>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none font-bold w-fit text-white shadow-md shadow-primary rounded-xl disabled:opacity-50"
          onClick={() => {
            window.open(resume_link, "_blank");
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(DownloadResume, "resume");
