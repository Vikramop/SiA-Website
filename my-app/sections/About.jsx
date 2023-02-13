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
      <TypingText
        title="| About SiA"
        textStyles="text-center"
        className="font-extrabold"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">Silicon Association (SiA)</span> is the
        <span className="font-extrabold">E&CE department</span> student chapter
        it was established in the year of{' '}
        <span className="font-extrabold">2009</span>. The Organization has
        emerged as a platform overseeing the interest of the students. SiA is
        conceived with an idea to provide a platform for it's members to
        organize events, social awareness and beneficial camps, lectures through
        the year. Active participation equips and empowers students with
        experience, confidence and personal growth when they come out their
        academic precincts. It tend to{' '}
        <span className="font-extrabold">expose students</span> to{' '}
        <span className="font-extrabold">professional environment</span> and to
        make a mark on
        <span className="font-extrabold">career development</span>. SiA aims to
        showcase the hidden talent of every student by providing platform in{' '}
        <span className="font-extrabold">
          technical and non - technical fields
        </span>
        . It creates a healthy,{' '}
        <span className="font-extrabold">
          competitive, socialistic and interactive
        </span>
        environment among the students.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
