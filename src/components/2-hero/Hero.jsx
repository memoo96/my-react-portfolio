import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../src/animation/dev.json";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./mohamed.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          UI/UX Developer
        </motion.h1>
        <p className="sub-title">
          I’m a Senior UI/UX Developer with a strong background in Computer
          Science, blending design and technology to create user-centered
          digital products. Passionate about solving complex problems with
          innovative solutions, I thrive in collaborative environments, driving
          projects that deliver exceptional user experiences and align with
          business goals.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie animationData={devAnimation} />
      </div>
    </section>
  );
}
