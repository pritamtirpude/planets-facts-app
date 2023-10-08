export const mobileULVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const mobileLIVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  show: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      y: 0,
      duration: 0.3,
      stiffness: 500,
      delay: index * 0.1,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  }),
  exit: (index: number) => ({
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: index * 0.01,
    },
  }),
};

export const fadeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

export const fadeParagraphVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
