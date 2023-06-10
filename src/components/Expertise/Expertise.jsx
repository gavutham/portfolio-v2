import React from "react";
import css from "./Expertise.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Expertise = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <a className="anchor" id="about"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((p, i) => (
            <motion.div
              variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
              className={css.exp}
            >
              <div className="flexCenter" style={{ backgroundColor: p.bg }}>
                <p.icon size="25" color="white" />
              </div>
              <div>
                <span>{p.name}</span>
                <span className="secondaryText">
                  {p.projects}
                  <BiPlus />
                  {"  "}
                  Projects
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">What can i help with ?</span>
          {WhatDoIHelp.map((content) => (
            <span className="secondaryText">{content}</span>
          ))}
          {/* <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">5+</span>
              <span className="secondaryText">Projects</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">2+</span>
              <span className="secondaryText">Happy Client</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
