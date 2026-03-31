import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="60"
      height="29"
      viewBox="0 0 60 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <text
            x="0"
            y="26"
            fontFamily="system-ui, sans-serif"
            fontWeight="bold"
            fontSize="30px"
            letterSpacing="-0.04em"
          >
            RRK
          </text>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
