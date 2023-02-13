'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewPort={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About SiA" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Silicon association (SiA) an E&CE department student chapter was
        established in 2009. The organization has emerged as a platform
        overseeing the interest of the students. SiA is conceived with an idea
        to provide a platform for its members to organize events, social
        awareness and beneficial camp, lectures through the year. Active
        participation equips and empowers students with experience, confidence
        and personal growth when they come out their academic precincts. It tend
        to expose students to professional environment and to make a mark on
        career development. SiA aims to showcase the hidden talent of every
        student by providing platform in technical and non- technical fields. It
        creates a healthy, competitive, socialistic and interactive environment
        among the students.
      </motion.p>
    </motion.div>
    About section
  </section>
);

export default About;
