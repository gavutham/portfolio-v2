import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { projects } from "../../utils/data";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="projects"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div className="">
            <span className="primaryText">My Works</span>
            <p style={{ marginTop: "10px" }}>
              Here are the big ones that I've Crafted
            </p>
          </div>
          <a
            target="_blank"
            href="https://github.com/gavutham"
            className="secondaryText"
          >
            Explore more Works
          </a>
        </div>
        <div className={`flexCenter ${css.showCase}`}>
          {projects.map((project, i) => (
            <a href={project.link} target="_blank">
              <motion.img
                variants={fadeIn("up", "tween", 0.5 + i * 0.2, 0.6)}
                src={project.img}
                alt="project"
              />
            </a>
          ))}

          {/* <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./shophub.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./crorepati.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./blog.png"
            alt="project"
          /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
