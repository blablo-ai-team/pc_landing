'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

type SplitTextProps = {
  children: React.ReactNode;
  className?: string;
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const child: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export default function SplitText({ children, className }: SplitTextProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return node.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ));
    }

    if (Array.isArray(node)) {
      return node.map((childNode, i) => (
        <React.Fragment key={i}>{processNode(childNode)}</React.Fragment>
      ));
    }

    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<React.PropsWithChildren<object>>;
      return React.cloneElement(element, {
        children: processNode(element.props.children),
      });
    }

    return null;
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
    //   style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
    >
      {processNode(children)}
    </motion.div>
  );
}
