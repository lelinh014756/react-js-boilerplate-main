/* eslint-disable @typescript-eslint/no-empty-interface */
import { motion, useCycle } from 'framer-motion';
import React, {
  forwardRef,
  type ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react';

import { type AnimateButtonProps, type ScaleVal } from './type';

interface DivRef {}

// ==============================|| ANIMATION BUTTON ||============================== //

const AnimateButton: ForwardRefRenderFunction<DivRef, AnimateButtonProps> = (
  { children, type = 'scale', direction = 'right', offset = 10, scale },
  ref
) => {
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
    default: {
      const scaleVal: ScaleVal = {};

      if (typeof scale === 'number') {
        Object.assign(scaleVal, {
          hover: scale,
          tap: scale,
        });
      } else {
        const { hover = 1, tap = 0.9 } = scale ?? {};

        Object.assign(scaleVal, {
          hover,
          tap,
        });
      }
      return (
        <motion.div
          ref={animateRef}
          whileHover={{ scale: scaleVal.hover }}
          whileTap={{ scale: scaleVal.tap }}
        >
          {children}
        </motion.div>
      );
    }
  }
};

export default forwardRef(AnimateButton);
