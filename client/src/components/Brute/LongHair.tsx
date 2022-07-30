import { Gender, BodyColors } from '@backend/types';
import React from 'react';

interface LongHairProps {
  gender: Gender;
  colors: BodyColors;
  type?: number;
}

const LongHair = ({ gender, colors, type }: LongHairProps) => {
  if (gender === 'male') return null;

  switch (type) {
    case 1:
      return (
        <>
          <use height="163.4" transform="matrix(0.9897, 0.0, 0.0, 0.9897, 32.0407, -5.8605)" width="66.2" xlinkHref="#longHair" />
          <defs>
            <g id="longHair" transform="matrix(1.0, 0.0, 0.0, 1.0, 28.35, 96.5)">
              <use height="163.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -28.35, -96.5)" width="66.2" xlinkHref="#longHair-sprite1" />
            </g>
            <g id="longHair-sprite1" transform="matrix(1.0, 0.0, 0.0, 1.0, 107.05, 103.4)">
              <use height="90.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -93.35, -89.7)" width="52.5" xlinkHref="#longHair-sprite2" />
              <use height="27.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -90.6, -85.15)" width="27.4" xlinkHref="#longHair-sprite3" />
              <use height="8.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -87.4, -81.85)" width="7.2" xlinkHref="#longHair-shape2" />
            </g>
            <g id="longHair-sprite2" transform="matrix(1.0, 0.0, 0.0, 1.0, 26.25, 45.1)">
              <use height="90.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.25, -45.1)" width="52.5" xlinkHref="#longHair-shape0" />
            </g>
            <g id="longHair-shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 26.25, 45.1)">
              <path d="M9.15 -42.55 L9.35 -42.45 9.95 -42.2 13.8 -40.3 14.5 -39.75 Q16.25 -38.2 17.8 -36.25 20.8 -32.8 22.85 -28.6 25.5 -22.8 26.0 -16.55 26.35 -13.55 26.2 -10.4 25.65 -6.95 24.6 -3.45 23.4 0.6 21.65 5.1 19.2 10.9 16.95 17.2 15.35 21.2 14.65 25.75 13.8 29.6 14.5 33.6 15.0 36.75 17.3 39.55 19.55 41.65 22.55 43.55 L24.45 43.2 20.6 44.4 12.75 44.75 Q9.1 44.05 5.4 42.0 L1.75 39.35 -2.1 35.35 -2.45 35.0 -2.8 34.45 -5.05 30.6 Q-6.3 27.5 -7.0 23.8 -8.2 16.5 -8.2 6.5 -8.2 -3.6 -11.7 -9.35 -15.2 -15.3 -20.8 -17.4 -22.7 -18.3 -23.95 -19.35 -25.5 -20.9 -26.05 -23.35 L-20.95 -23.0 Q-14.5 -22.8 -8.55 -21.05 -7.0 -20.55 -5.6 -19.85 L-5.4 -19.85 -5.05 -20.2 -4.7 -20.35 Q-2.3 -18.8 -1.05 -15.3 -0.7 -13.55 0.15 -12.15 L0.5 -11.3 0.5 -8.15 Q1.2 -17.25 -2.8 -25.95 2.25 -25.45 6.1 -20.7 8.9 -17.05 11.0 -13.2 12.05 -19.5 11.85 -25.8 11.7 -33.8 8.9 -41.15 8.55 -42.05 8.55 -42.75 L9.15 -42.55" fill={colors.hair.shade} fillRule="evenodd" stroke="none" />
              <path d="M-26.05 -23.35 Q-26.4 -24.75 -26.2 -26.3 -26.05 -33.1 -23.75 -34.7 -18.35 -40.65 -9.6 -43.8 -3.85 -45.7 1.4 -44.85 5.35 -44.2 9.15 -42.55 L8.55 -42.75 Q8.55 -42.05 8.9 -41.15 11.7 -33.8 11.85 -25.8 12.05 -19.5 11.0 -13.2 8.9 -17.05 6.1 -20.7 2.25 -25.45 -2.8 -25.95 1.2 -17.25 0.5 -8.15 L0.5 -11.3 0.15 -12.15 Q-0.7 -13.55 -1.05 -15.3 -2.3 -18.8 -4.7 -20.35 L-5.05 -20.2 -5.4 -19.85 -5.6 -19.85 Q-7.0 -20.55 -8.55 -21.05 -14.5 -22.8 -20.95 -23.0 L-26.05 -23.35" fill={colors.hair.color} fillRule="evenodd" stroke="none" />
              <path d="M9.15 -42.55 L9.35 -42.45 9.95 -42.2 13.8 -40.3 14.5 -39.75 Q16.25 -38.2 17.8 -36.25 20.8 -32.8 22.85 -28.6 25.5 -22.8 26.0 -16.55 26.35 -13.55 26.2 -10.4 25.65 -6.95 24.6 -3.45 23.4 0.6 21.65 5.1 19.2 10.9 16.95 17.2 15.35 21.2 14.65 25.75 13.8 29.6 14.5 33.6 15.0 36.75 17.3 39.55 19.55 41.65 22.55 43.55 L24.45 43.2 20.6 44.4 12.75 44.75 Q9.1 44.05 5.4 42.0 L1.75 39.35 -2.1 35.35 -2.45 35.0 -2.8 34.45 -5.05 30.6 Q-6.3 27.5 -7.0 23.8 -8.2 16.5 -8.2 6.5 -8.2 -3.6 -11.7 -9.35 -15.2 -15.3 -20.8 -17.4 -22.7 -18.3 -23.95 -19.35 -25.5 -20.9 -26.05 -23.35 -26.4 -24.75 -26.2 -26.3 -26.05 -33.1 -23.75 -34.7 -18.35 -40.65 -9.6 -43.8 -3.85 -45.7 1.4 -44.85 5.35 -44.2 9.15 -42.55 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id="longHair-sprite3" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.7, 13.7)">
              <use height="27.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.7, -13.7)" width="27.4" xlinkHref="#longHair-shape1" />
            </g>
            <g id="longHair-shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.7, 13.7)">
              <path d="M1.5 -13.6 L2.4 -13.5 2.8 -13.4 3.9 -13.15 Q7.1 -12.25 9.65 -9.7 13.7 -5.65 13.7 0.0 13.7 5.65 9.65 9.65 5.65 13.7 0.0 13.7 -5.65 13.7 -9.7 9.65 -12.6 6.75 -13.4 3.0 L-13.65 0.8 -11.0 1.25 Q-3.55 1.25 -0.3 -6.15 1.3 -9.9 1.5 -13.6" fill={colors.hair.shade} fillRule="evenodd" stroke="none" />
              <path d="M-13.65 0.8 L-13.7 0.0 Q-13.7 -5.65 -9.7 -9.7 -5.65 -13.7 0.0 -13.7 L1.5 -13.6 Q1.3 -9.9 -0.3 -6.15 -3.55 1.25 -11.0 1.25 L-13.65 0.8" fill={colors.hair.color} fillRule="evenodd" stroke="none" />
              <path d="M-13.65 0.8 L-13.7 0.0 Q-13.7 -5.65 -9.7 -9.7 -5.65 -13.7 0.0 -13.7 L1.5 -13.6 2.4 -13.5 2.8 -13.4 3.9 -13.15 Q7.1 -12.25 9.65 -9.7 13.7 -5.65 13.7 0.0 13.7 5.65 9.65 9.65 5.65 13.7 0.0 13.7 -5.65 13.7 -9.7 9.65 -12.6 6.75 -13.4 3.0 L-13.65 0.8 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id="longHair-shape2" transform="matrix(1.0, 0.0, 0.0, 1.0, -16.7, 21.25)">
              <path d="M16.7 -14.2 Q16.7 -15.1 17.85 -15.1 18.95 -15.1 18.95 -13.85 18.95 -12.95 17.85 -12.95 17.35 -12.95 17.0 -13.55 16.7 -14.0 16.7 -14.2 M18.75 -18.1 Q18.75 -19.45 21.35 -20.8 23.9 -22.15 23.9 -19.5 23.9 -18.8 23.1 -17.75 22.1 -16.55 21.05 -16.55 19.5 -16.55 19.0 -17.25 18.75 -17.6 18.75 -18.1" fill={colors.hair.color} fillRule="evenodd" stroke="none" />
            </g>
          </defs>
        </>
      );
    case 2:
      return (
        <g transform="matrix(1.0, 0.0, 0.0, 1.0, 79.5, 47.55)">
          <path d="M27.65 -29.25 L27.7 -28.1 Q27.5 -21.7 26.6 -17.65 25.7 -13.6 22.8 -7.85 L15.05 6.25 Q10.2 14.55 8.9 16.95 L8.8 17.25 Q7.65 20.75 6.2 27.3 5.5 26.65 5.35 24.0 L5.2 21.0 3.3 22.4 Q1.8 23.5 0.8 23.5 -0.15 23.5 -0.65 19.05 L-0.95 14.75 0.7 11.45 Q3.75 6.05 11.55 -1.4 19.5 -9.0 22.4 -13.85 26.7 -21.15 27.65 -29.25 M10.6 33.5 L11.35 34.4 12.55 35.55 Q15.6 35.55 21.6 27.8 17.85 38.4 14.2 38.7 11.5 37.6 10.6 33.5 M-18.2 -24.0 Q-19.15 -22.65 -18.85 -24.25 L-18.2 -24.0 -18.85 -24.25 -18.1 -27.2 Q-18.35 -28.5 -14.7 -35.3 -11.4 -41.5 -10.0 -43.1 L-12.85 -40.8 Q-15.3 -38.75 -16.6 -36.8 -21.5 -29.45 -22.85 -26.45 L-24.4 -27.4 -24.4 -27.55 Q-23.65 -30.65 -22.25 -33.5 -19.45 -39.15 -11.75 -45.0 -4.1 -50.9 9.0 -51.5 14.6 -51.8 16.75 -48.75 12.25 -47.9 7.95 -46.2 2.3 -44.0 -1.1 -42.2 -6.0 -39.6 -10.3 -35.05 L-12.4 -32.9 Q-13.85 -31.4 -14.8 -29.65 L-17.8 -24.55 -18.2 -24.0" fill={colors.hair.color} fillRule="evenodd" stroke="none" />
          <path d="M-0.95 14.75 L-0.65 19.05 Q-0.15 23.5 0.8 23.5 1.8 23.5 3.3 22.4 L5.2 21.0 5.35 24.0 Q5.5 26.65 6.2 27.3 7.65 20.75 8.8 17.25 L8.9 16.95 Q10.2 14.55 15.05 6.25 L22.8 -7.85 Q25.7 -13.6 26.6 -17.65 27.5 -21.7 27.7 -28.1 L27.65 -29.25 27.75 -30.2 27.8 -31.45 Q28.25 -40.75 27.05 -43.6 25.8 -46.5 18.55 -45.6 11.3 -44.7 0.95 -39.8 -7.65 -35.75 -10.9 -30.3 -12.25 -28.15 -12.7 -25.8 L-12.85 -24.55 -12.95 -23.1 -12.8 -22.5 -18.2 -24.0 -17.8 -24.55 -14.8 -29.65 Q-13.85 -31.4 -12.4 -32.9 L-10.3 -35.05 Q-6.0 -39.6 -1.1 -42.2 2.3 -44.0 7.95 -46.2 12.25 -47.9 16.75 -48.75 L16.8 -48.7 18.9 -49.1 19.55 -49.2 Q24.55 -49.95 26.6 -48.15 31.1 -44.15 31.5 -29.7 31.85 -15.3 21.0 3.3 L13.55 16.25 Q10.15 23.1 10.15 28.55 10.15 31.4 10.6 33.5 11.5 37.6 14.2 38.7 17.85 38.4 21.6 27.8 L22.1 27.1 22.6 28.9 23.1 31.5 Q23.1 32.8 22.3 35.1 L21.45 37.8 21.75 38.1 22.45 38.15 Q23.2 38.15 24.55 37.4 L27.25 35.9 Q26.65 39.1 24.3 42.1 21.35 45.9 16.65 47.3 17.65 48.45 19.5 49.15 L22.15 50.3 18.0 51.25 13.15 51.6 Q9.4 51.6 7.35 50.7 6.85 50.85 4.45 48.55 2.0 46.25 -1.8 46.0 -5.65 45.75 -4.9 32.95 -4.35 22.45 -0.95 14.75 M11.4 48.55 L8.95 49.95 7.35 50.7 8.95 49.95 11.4 48.55 M-18.85 -24.25 Q-19.75 -24.6 -20.25 -24.9 L-22.85 -26.45 Q-21.5 -29.45 -16.6 -36.8 -15.3 -38.75 -12.85 -40.8 L-10.0 -43.1 Q-11.4 -41.5 -14.7 -35.3 -18.35 -28.5 -18.1 -27.2 L-18.85 -24.25 M13.35 47.9 L16.65 47.3 13.35 47.9 M18.55 38.15 L17.8 38.95 16.45 39.1 14.2 38.7 16.45 39.1 17.8 38.95 18.55 38.15" fill={colors.hair.shade} fillRule="evenodd" stroke="none" />
          <path d="M-0.95 14.75 Q-4.35 22.45 -4.9 32.95 -5.65 45.75 -1.8 46.0 2.0 46.25 4.45 48.55 6.85 50.85 7.35 50.7 L8.95 49.95 11.4 48.55 M16.75 -48.75 L16.8 -48.7 18.9 -49.1 19.55 -49.2 Q24.55 -49.95 26.6 -48.15 31.1 -44.15 31.5 -29.7 31.85 -15.3 21.0 3.3 L13.55 16.25 Q10.15 23.1 10.15 28.55 10.15 31.4 10.6 33.5 L11.35 34.4 12.55 35.55 Q15.6 35.55 21.6 27.8 L22.1 27.1 22.6 28.9 23.1 31.5 Q23.1 32.8 22.3 35.1 L21.45 37.8 21.75 38.1 22.45 38.15 Q23.2 38.15 24.55 37.4 L27.25 35.9 27.3 35.55 27.3 35.85 27.25 35.9 Q26.65 39.1 24.3 42.1 21.35 45.9 16.65 47.3 17.65 48.45 19.5 49.15 L22.15 50.3 18.0 51.25 13.15 51.6 Q9.4 51.6 7.35 50.7 M27.65 -29.25 L27.75 -30.2 27.8 -31.45 Q28.25 -40.75 27.05 -43.6 25.8 -46.5 18.55 -45.6 11.3 -44.7 0.95 -39.8 -7.65 -35.75 -10.9 -30.3 -12.25 -28.15 -12.7 -25.8 L-12.85 -24.55 -12.95 -23.1 -12.8 -22.5 -18.2 -24.0 -18.85 -24.25 Q-19.75 -24.6 -20.25 -24.9 L-22.85 -26.45 -24.4 -27.4 -24.4 -27.55 Q-23.65 -30.65 -22.25 -33.5 -19.45 -39.15 -11.75 -45.0 -4.1 -50.9 9.0 -51.5 14.6 -51.8 16.75 -48.75 M-0.95 14.75 L0.7 11.45 Q3.75 6.05 11.55 -1.4 19.5 -9.0 22.4 -13.85 26.7 -21.15 27.65 -29.25 M14.2 38.7 L16.45 39.1 17.8 38.95 18.55 38.15 M16.65 47.3 L13.35 47.9 M10.6 33.5 Q11.5 37.6 14.2 38.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M-29.35 -24.6 L-30.8 -25.6 -31.2 -25.85 -31.25 -25.9 -31.5 -26.25 Q-31.15 -33.75 -25.75 -38.85 L-26.25 -35.5 -26.7 -29.15 Q-20.95 -31.6 -14.9 -32.3 -10.1 -32.9 -5.15 -32.4 L-8.15 -32.3 Q-13.6 -31.95 -17.2 -30.4 L-25.0 -27.35 Q-28.15 -25.95 -29.35 -24.6 M-17.55 -27.0 L-16.85 -26.55 Q-14.1 -24.75 -11.1 -24.0 L-14.8 -24.4 -18.35 -25.05 -21.7 -25.85 -18.6 -26.75 -17.55 -27.0" fill={colors.hair.color} fillRule="evenodd" stroke="none" />
          <path d="M-5.15 -32.4 L-3.75 -32.25 -18.0 -27.35 -17.55 -27.0 -18.6 -26.75 -21.7 -25.85 -18.35 -25.05 -14.8 -24.4 -11.1 -24.0 Q-6.55 -22.95 -1.5 -24.55 -6.75 -21.5 -12.75 -20.8 -7.05 -19.6 -2.25 -16.4 L-10.0 -15.2 Q-21.95 -19.3 -25.45 -21.85 L-29.35 -24.6 Q-28.15 -25.95 -25.0 -27.35 L-17.2 -30.4 Q-13.6 -31.95 -8.15 -32.3 L-5.15 -32.4" fill={colors.hair.shade} fillRule="evenodd" stroke="none" />
          <path d="M-29.35 -24.6 L-30.8 -25.6 -31.2 -25.85 -31.25 -25.9 -31.5 -26.25 Q-31.15 -33.75 -25.75 -38.85 L-26.25 -35.5 -26.7 -29.15 Q-20.95 -31.6 -14.9 -32.3 -10.1 -32.9 -5.15 -32.4 L-3.75 -32.25 -18.0 -27.35 -17.55 -27.0 -16.85 -26.55 Q-14.1 -24.75 -11.1 -24.0 -6.55 -22.95 -1.5 -24.55 -6.75 -21.5 -12.75 -20.8 -7.05 -19.6 -2.25 -16.4 L-10.0 -15.2 Q-21.95 -19.3 -25.45 -21.85 L-29.35 -24.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
      );
    default:
      return null;
  }
};

export default LongHair;
