/* eslint-disable @typescript-eslint/no-empty-interface */
import { motion, useCycle } from 'framer-motion';
import React, {
  forwardRef,
  type ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react';

import { type AnimateButtonProps } from './type';

interface DivRef {}

// ==============================|| ANIMATION BUTTON ||============================== //

const AnimateButton: ForwardRefRenderFunction<DivRef, AnimateButtonProps> = (
  { children, type = 'scale', direction = 'right', offset = 10, scale },
  ref
) => {
  const { hover = 1, tap = 0.9 } = scale ?? {};

  const animateRef = useRef(null);

  useImperativeHandle(ref, () => ({
    ...ref,
  }));

  let offset1;
  let offset2;
  switch (direction) {
    case 'up':
    case 'left':
      offset1 = offset;
      offset2 = 0;
      break;
    case 'right':
    case 'down':
    default:
      offset1 = 0;
      offset2 = offset;
      break;
  }

  const [x, cycleX] = useCycle(offset1, offset2);
  const [y, cycleY] = useCycle(offset1, offset2);

  switch (type) {
    case 'rotate':
      return (
        <motion.div
          ref={animateRef}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
            repeatDelay: 0,
          }}
        >
          {children}
        </motion.div>
      );
    case 'slide':
      if (direction === 'up' || direction === 'down') {
        return (
          <motion.div
            ref={animateRef}
            animate={{ y: y !== undefined ? y : '' }}
            onHoverEnd={() => {
              cycleY();
            }}
            onHoverStart={() => {
              cycleY();
            }}
          >
            {children}
          </motion.div>
        );
      }
      return (
        <motion.div
          ref={animateRef}
          animate={{ x: x !== undefined ? x : '' }}
          onHoverEnd={() => {
            cycleX();
          }}
          onHoverStart={() => {
            cycleX();
          }}
        >
          {children}
        </motion.div>
      );

    case 'scale':
    default:
      if (typeof scale === 'number') {
        scale = {
          hover: scale,
          tap: scale,
        };
      }
      return (
        <motion.div
          ref={animateRef}
          whileHover={{ scale: hover }}
          whileTap={{ scale: tap }}
        >
          {children}
        </motion.div>
      );
  }
};

export default forwardRef(AnimateButton);
