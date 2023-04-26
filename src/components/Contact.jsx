import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import EarthLottieController from "./lottie/EarthLottieController";

const Contact = ({ isMobile }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.send(
        "service_vgs1pyp",
        "template_m542zef",
        {
          from_name: form.name,
          to_name: "Felix Philips",
          from_email: form.email,
          to_email: "devfelixphil@gmail.com",
          message: form.message,
        },
        "Ym2iABbzyzj5pMQZb"
      );

      window.alert("Thank you! I will get back to you as soon as possible");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      window.alert("Ooops! Something went wrong. Please try again!");
    }
    setLoading(false);
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse w-full gap-10 flex overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            ></textarea>
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 outline-none font-bold w-fit text-white shadow-md shadow-primary rounded-xl disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        {isMobile ? <EarthLottieController /> : <EarthCanvas />}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
