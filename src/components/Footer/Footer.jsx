import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { GoLocation, GoDeviceMobile } from "react-icons/go";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Wanna have a Coffee? <br /> Why not?
          </span>
          <span className="primaryText">
            Start by <a href="mailto:kgavutham2005@gmail.com">saying hola</a>
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <div>
              <GoLocation size={24} />
              <p>SSNCE, Chennai, IN</p>
            </div>
            <div>
              <GoDeviceMobile size={24} />
              <p>+91 9789137382</p>
            </div>
          </div>

          <div className={css.menu}>
            <a href="#about">About</a>
            <a href="#work">Experience</a>
            <a href="#projects">Portfolio</a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
