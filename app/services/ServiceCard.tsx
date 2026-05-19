"use client";

import { motion, type Variants } from "framer-motion";

type ServiceCardProps = {
  service: {
    title: string;
    image: string;
    description: string;
    offers: string[];
  };
  index: number;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 52,
    scale: 0.96,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.035,
    },
  },
  rest: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  hover: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.045,
    },
  },
};

const itemVariants: Variants = {
  show: { opacity: 0.72, x: 0 },
  rest: { opacity: 0.72, x: 0 },
  hover: {
    opacity: 1,
    x: 8,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.article
      className="serviceDetailCard"
      initial="rest"
      variants={cardVariants}
      whileHover="hover"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
    >
      <motion.div
        className="serviceNumber"
        variants={{
          show: { y: 0 },
          rest: { y: 0 },
          hover: { y: -8, transition: { duration: 0.32 } },
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>
      <div className="serviceImageWrap">
        <motion.img
          src={service.image}
          alt={`${service.title} service`}
          variants={{
            show: { scale: 1, x: 0 },
            rest: { scale: 1, x: 0 },
            hover: {
              scale: 1.1,
              x: -8,
              transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />
      </div>
      <motion.div
        className="serviceContent"
        variants={{
          show: { y: 0 },
          rest: { y: 0 },
          hover: { y: -4, transition: { duration: 0.34 } },
        }}
      >
        <motion.h2
          variants={{
            show: { x: 0 },
            rest: { x: 0 },
            hover: { x: 10, transition: { duration: 0.34 } },
          }}
        >
          {service.title}
        </motion.h2>
        <p>{service.description}</p>
        <h3>What we offer</h3>
        <motion.ul variants={listVariants}>
          {service.offers.map((offer) => (
            <motion.li key={offer} variants={itemVariants}>
              {offer}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.article>
  );
}
