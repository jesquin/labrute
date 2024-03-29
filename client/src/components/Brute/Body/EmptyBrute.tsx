import React, { SVGProps } from 'react';

const EmptyBrute = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="140" {...props}>
    <g transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 0.0)">
      <use width="65" height="140" transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, 0.0)" xlinkHref="#shape0" />
      <use id="5yv3" width="27.6" height="48.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -16.0, 29.7)" xlinkHref="#questionMark" />
    </g>
    <defs>
      <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 0.0)">
        <pattern id="PatternID_9_1" width="65" height="140" overflow="visible" patternTransform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, 0.0)" patternUnits="userSpaceOnUse" viewBox="0 0 65 140">
          <image
            width="65"
            height="140"
            xlinkHref="data:image/PNG;base64,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"
          />
        </pattern>
        <path d="M33.0 140.0 L-32.0 140.0 -32.0 0.0 33.0 0.0 33.0 140.0" style={{ fill: 'url(#PatternID_9_1)' }} />
      </g>
      <g id="questionMark" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.8, 24.35)"><use width="27.6" height="48.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.8, -24.35)" xlinkHref="#shape1" /></g>
      <g id="shape1">
        <path
          fill="#fff"
          fillRule="evenodd"
          stroke="none"
          d="M13.8 -13.0 Q13.8 -5.6 6.05 -0.55 L0.75 3.0 Q-1.7 5.05 -1.7 7.5 L-1.1 9.2 Q-0.45 10.45 -0.45 10.95 -0.45 12.0 -0.7 11.9 L-1.0 12.15 -2.15 12.4 Q-5.65 12.4 -6.65 8.7 -7.1 6.85 -6.9 4.85 -6.9 2.45 -4.8 0.25 L-0.05 -3.35 Q3.2 -5.65 4.65 -7.35 6.8 -9.9 6.8 -13.0 6.8 -15.2 4.9 -16.65 2.8 -18.4 -1.2 -18.4 -4.95 -18.4 -6.6 -16.25 L-6.9 -11.15 Q-6.9 -10.8 -7.9 -9.5 -8.95 -8.05 -9.55 -8.05 -12.45 -8.05 -13.4 -11.35 -13.8 -13.0 -13.75 -14.75 L-13.65 -15.4 -13.8 -16.45 Q-13.8 -20.45 -9.5 -22.65 -5.55 -24.7 0.0 -24.3 5.7 -23.95 9.5 -21.2 13.8 -18.1 13.8 -13.0 M5.75 20.65 Q5.75 21.8 4.5 23.0 3.05 24.35 1.3 24.35 -0.65 24.35 -1.4 23.1 -1.9 22.4 -1.9 21.7 -1.9 16.95 1.95 17.2 3.45 17.3 4.5 18.3 5.75 19.3 5.75 20.65"
          transform="matrix(1.0, 0.0, 0.0, 1.0, 13.8, 24.35)"
        />
      </g>
    </defs>
  </svg>
);

export default EmptyBrute;
