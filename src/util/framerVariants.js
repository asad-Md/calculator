export const containerFramer = {
  initial: { y: "-100dvh" }, /// names here are option itsms
  animate: { y: 0, transition: { delay: 0.2, type: "tween", duration: 0.1 } },
  whileHover: { scale: 1.01 },
  when: "beforeChildren",
};
export const displayFramer = {
    initial: { y: "-100dvh", opacity:0 }, /// names here are option itsms
    animate: { opacity:1, y: 0, 
      transition: { delay: .2, type: "tween", duration: 0.1 }
    }
}

export const utilContainerFramer = {
  initial: { y: "-80dvh", opacity: 0.4 }, // names here are option itsms
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, type: "tween", duration: 0.2 },
  },
  whileHover: { scale: 1.01 },
};

export const btnsContainerFramer = {
  initial: { y: "-100dvh", opacity: 0 }, //names here are option itsms
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, type: "tween", duration: 0.2 },
  },
  whileHover: { scale: 1.01 },
};

export const utilBtnFramer = {
  initial: { scale: 0 }, //names here are option itsms
  animate: {
    scale: 1,
    transition: { delay: 1, type: "spring" , stiffness:60 , damping : 4},
  },
  whileHover: { scale: 1.02 },
};

export const numsBtnFramer = {
  initial: { opacity: 0, scale: 0 }, //names here are option itsms
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1.3, type: "spring" , stiffness:70 , damping : 4 },
  },
  whileHover: { scale: 1.02 },
};
