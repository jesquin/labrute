import { Gender, BodyColors } from '@backend/types';
import React from 'react';

interface TorsoProps {
  gender: Gender;
  colors: BodyColors;
  type: number;
}

const Torso = ({ gender, colors, type }: TorsoProps) => {
  if (gender === 'male') {
    switch (type) {
      case 1:
        return (
          <>
            <use height="44.2" transform="matrix(1.0, 0.0, 0.0, 1.0, 0.05, 72.1)" width="79.15" xlinkHref="#torso" />
            <defs>
              <g id="torso" transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
                <use height="44.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref="#torso-sprite67" />
              </g>
              <g id="torso-sprite67" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
                <use height="41.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref="#torso-sprite68" />
              </g>
              <g id="torso-sprite68" transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
                <use height="25.5" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref="#torso-sprite69" />
                <use height="35.0" transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref="#torso-sprite70" />
                <use height="41.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref="#torso-sprite71" />
              </g>
              <g id="torso-sprite70" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
                <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref="#torso-shape13" />
              </g>
              <g id="torso-shape13" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
                <path d="M11.7 -16.6 L13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85 1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
                <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
                <path d="M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
              </g>
              <g id="torso-sprite71" transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
                <use height="33.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref="#torso-sprite72" />
              </g>
              <g id="torso-sprite72" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
                <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref="#torso-shape14" />
              </g>
              <g id="torso-shape14" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
                <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
                <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
                <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
                <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
                <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
                <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
                <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
              </g>
            </defs>
          </>
        );
      default:
        return null;
    }
  }

  switch (type) {
    case 1:
      return (
        <>
          <use height="47.7" transform="matrix(0.9218, 0.0, -0.0995, 0.8353, 15.9468, 75.8153)" width="62.75" xlinkHref="#torso" />
          <defs>
            <g id="torso" transform="matrix(1.0, 0.0, 0.0, 1.0, 26.0, 22.25)">
              <use height="47.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.0, -22.25)" width="62.75" xlinkHref="#torso-sprite66" />
            </g>
            <g id="torso-sprite66" transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 6.35)">
              <use height="47.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -6.35)" width="62.75" xlinkHref="#torso-sprite67" />
            </g>
            <g id="torso-sprite67" transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 6.35)">
              <use height="25.5" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, 0.5)" width="17.6" xlinkHref="#torso-sprite68" />
              <use height="35.0" transform="matrix(0.9077, 0.0, 0.0, 0.9077, -2.1503, 0.0158)" width="41.35" xlinkHref="#torso-sprite69" />
              <use height="47.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.65, -6.35)" width="59.4" xlinkHref="#torso-sprite70" />
            </g>
            <g id="torso-sprite69" transform="matrix(1.0, 0.0, 0.0, 1.0, 22.2, 17.5)">
              <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -22.2, -17.5)" width="41.35" xlinkHref="#torso-shape16" />
            </g>
            <g id="torso-shape16" transform="matrix(1.0, 0.0, 0.0, 1.0, 22.2, 17.5)">
              <path d="M11.7 -16.6 L13.8 -16.15 14.7 -15.8 15.95 -15.1 17.45 -14.15 Q18.35 -13.35 18.7 -12.3 19.2 -10.95 19.15 -9.5 19.05 -7.7 18.55 -6.0 17.75 -3.2 16.25 -0.95 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85 1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
              <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-11.0 0.05 L-9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
              <path d="M4.7 14.1 L10.9 6.2 Q12.7 4.5 14.1 2.45 L16.25 -0.95 Q17.75 -3.2 18.55 -6.0 19.05 -7.7 19.15 -9.5 19.2 -10.95 18.7 -12.3 18.35 -13.35 17.45 -14.15 L15.95 -15.1 14.7 -15.8 13.8 -16.15 11.7 -16.6 M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M-6.75 17.45 L-6.75 17.5 M-19.85 11.4 L-19.65 6.85 -18.4 0.1 -18.3 -0.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
              <path d="M4.65 -3.45 Q2.1 -2.25 -0.9 -1.0 -3.95 0.25 -5.2 0.45 L-10.25 0.65 -11.1 0.7 -11.95 0.25 -14.7 -0.95 -15.1 -1.1 -16.35 -1.5 -19.35 -2.4 Q-20.0 -2.65 -22.1 -4.4 -21.8 -6.35 -19.9 -7.85 -16.35 -10.65 -12.0 -11.8 L-11.45 -10.5 Q-11.0 -9.35 -9.95 -8.6 -6.85 -6.1 -3.45 -5.1 L0.25 -3.9 Q1.8 -3.5 5.2 -3.9 L4.05 -3.4 4.55 -3.45 4.65 -3.45 M-12.65 -0.1 L-12.2 0.1 -12.45 0.0 -12.65 -0.1" fill={colors.skin.color} fillRule="evenodd" stroke="none" />
              <path d="M4.65 -3.45 L5.05 -3.45 5.2 -3.55 5.3 -3.5 5.1 -0.9 4.35 2.4 Q3.8 4.1 2.5 5.4 -2.2 9.95 -7.85 8.0 -12.2 6.55 -16.0 3.95 L-17.7 3.65 Q-21.95 1.75 -22.2 -2.95 L-22.2 -3.0 -22.2 -3.5 -22.1 -4.4 Q-20.0 -2.65 -19.35 -2.4 L-16.35 -1.5 -15.1 -1.1 -14.7 -0.95 -11.95 0.25 -11.1 0.7 -10.25 0.65 -5.2 0.45 Q-3.95 0.25 -0.9 -1.0 2.1 -2.25 4.65 -3.45 M-12.65 -0.1 L-12.45 0.0 -12.2 0.1 -12.65 -0.1" fill={colors.skin.shade} fillRule="evenodd" stroke="none" />
              <path d="M-22.1 -4.4 L-22.2 -3.5 -22.2 -3.0 -22.2 -2.95 Q-21.95 1.75 -17.7 3.65 L-16.0 3.95 Q-12.2 6.55 -7.85 8.0 -2.2 9.95 2.5 5.4 3.8 4.1 4.35 2.4 L5.1 -0.9 5.3 -3.5 M-12.0 -11.8 Q-16.35 -10.65 -19.9 -7.85 -21.8 -6.35 -22.1 -4.4 M5.2 -3.9 L5.2 -3.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
            </g>
            <g id="torso-sprite70" transform="matrix(1.0, 0.0, 0.0, 1.0, 21.25, 21.5)">
              <use height="32.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -21.25, -15.9)" width="35.4" xlinkHref="#torso-sprite71" />
            </g>
            <g id="torso-sprite71" transform="matrix(1.0, 0.0, 0.0, 1.0, 21.25, 15.9)">
              <use height="26.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -21.25, -15.9)" width="24.3" xlinkHref="#torso-shape17" />
              <use height="18.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.45, -8.95)" width="18.1" xlinkHref="#torso-sprite72" />
              <use height="32.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.6, -15.35)" width="21.75" xlinkHref="#torso-shape19" />
            </g>
            <g id="torso-shape17" transform="matrix(1.0, 0.0, 0.0, 1.0, 21.25, 15.9)">
              <path d="M-8.25 -9.4 L-11.45 -10.3 -10.65 -10.8 -9.8 -11.25 -9.7 -11.3 -9.55 -11.4 Q-2.7 -15.3 3.05 -15.9 1.35 -14.5 -1.05 -13.55 -3.45 -12.6 -5.55 -11.15 L-6.8 -10.35 -8.25 -9.4 M-19.5 -1.2 L-17.7 -0.9 -16.95 -0.65 -17.05 -0.2 -17.1 2.9 -16.85 6.25 -16.45 10.1 Q-18.3 7.65 -18.85 4.55 L-19.45 0.3 -19.5 -0.3 -19.5 -1.2 M-7.95 -10.5 L-7.95 -10.65 -8.25 -10.55 -7.95 -10.5" fill="#764701" fillRule="evenodd" stroke="none" />
              <path d="M-10.65 -10.8 L-11.45 -10.3 -8.25 -9.4 -9.85 -8.35 -14.25 -5.25 Q-16.35 -3.6 -16.95 -0.75 L-17.05 -0.2 -16.95 -0.65 -17.7 -0.9 -19.5 -1.2 -19.15 -3.65 Q-18.8 -5.3 -17.25 -6.8 -16.75 -7.3 -10.65 -10.8 M-7.95 -10.5 L-8.25 -10.55 -7.95 -10.65 -7.95 -10.5" fill="#996600" fillRule="evenodd" stroke="none" />
              <path d="M-8.25 -9.4 L-6.8 -10.35 -5.55 -11.15 Q-3.45 -12.6 -1.05 -13.55 1.35 -14.5 3.05 -15.9 -2.7 -15.3 -9.55 -11.4 M-9.7 -11.3 L-9.8 -11.25 -10.65 -10.8 Q-16.75 -7.3 -17.25 -6.8 -18.8 -5.3 -19.15 -3.65 L-19.5 -1.2 -19.5 -0.3 -19.45 0.3 -18.85 4.55 Q-18.3 7.65 -16.45 10.1 L-16.85 6.25 -17.1 2.9 -17.05 -0.2 -16.95 -0.75 Q-16.35 -3.6 -14.25 -5.25 L-9.85 -8.35 -8.25 -9.4 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
              <path d="M-17.1 -8.7 L-16.75 -9.2 Q-15.95 -10.15 -15.1 -10.15 L-14.45 -9.95 -13.55 -9.45 Q-13.6 -9.05 -15.1 -8.15 L-15.45 -7.9 Q-16.55 -8.6 -17.1 -8.7 M-9.75 -13.95 Q-9.05 -14.75 -7.95 -14.75 L-6.95 -14.65 Q-6.6 -14.45 -6.25 -13.45 -7.1 -12.35 -9.65 -11.45 L-10.0 -11.7 -10.35 -12.3 Q-10.35 -13.2 -9.75 -13.95 M-21.15 2.05 L-21.25 0.8 Q-21.25 0.05 -20.6 -0.35 -20.15 -0.6 -19.4 -0.15 L-19.45 0.15 -19.15 2.65 -19.3 1.75 -19.7 1.75 -21.15 2.05" fill="#ffffcc" fillRule="evenodd" stroke="none" />
              <path d="M-17.1 -8.7 Q-16.55 -8.6 -15.45 -7.9 L-16.8 -7.1 -17.2 -7.2 -17.4 -7.9 -17.1 -8.7 M-21.15 2.05 L-19.7 1.75 -19.3 1.75 -19.15 2.65 -19.05 3.75 -19.1 4.25 -19.6 4.35 Q-20.1 4.35 -20.6 3.55 L-21.15 2.05" fill="#bfb695" fillRule="evenodd" stroke="none" />
              <path d="M-9.75 -13.95 Q-10.35 -13.2 -10.35 -12.3 L-10.0 -11.7 -9.65 -11.45 Q-7.1 -12.35 -6.25 -13.45 -6.6 -14.45 -6.95 -14.65 L-7.95 -14.75 Q-9.05 -14.75 -9.75 -13.95 M-15.45 -7.9 L-15.1 -8.15 Q-13.6 -9.05 -13.55 -9.45 L-14.45 -9.95 -15.1 -10.15 Q-15.95 -10.15 -16.75 -9.2 L-17.1 -8.7 -17.4 -7.9 -17.2 -7.2 -16.8 -7.1 -15.45 -7.9 M-19.15 2.65 L-19.45 0.15 -19.4 -0.15 Q-20.15 -0.6 -20.6 -0.35 -21.25 0.05 -21.25 0.8 L-21.15 2.05 -20.6 3.55 Q-20.1 4.35 -19.6 4.35 L-19.1 4.25 -19.05 3.75 -19.15 2.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
            </g>
            <g id="torso-sprite72" transform="matrix(1.0, 0.0, 0.0, 1.0, 9.05, 9.25)">
              <use height="18.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -9.05, -9.25)" width="18.1" xlinkHref="#torso-shape18" />
            </g>
            <g id="torso-shape18" transform="matrix(1.0, 0.0, 0.0, 1.0, 9.05, 9.25)">
              <path d="M-8.85 -3.05 Q-8.35 -5.6 -6.45 -6.95 L-3.4 -8.95 -2.25 -9.25 0.35 -8.95 3.7 -8.3 9.05 -7.5 Q6.0 -4.85 4.75 -3.0 3.5 -1.15 2.95 1.05 L0.95 -0.25 -2.8 -2.55 -3.8 -3.0 -7.5 -3.2 -8.85 -3.05" fill={colors.primary.color} fillRule="evenodd" stroke="none" />
              <path d="M2.95 1.05 L2.9 1.35 2.8 1.8 Q2.55 3.1 2.55 4.5 2.55 6.55 2.95 9.25 L2.9 9.3 -3.65 4.8 Q-5.25 3.7 -7.65 3.6 -9.05 2.15 -9.05 0.6 L-9.05 -1.4 -9.0 -2.05 -8.85 -3.05 -7.5 -3.2 -3.8 -3.0 -2.8 -2.55 0.95 -0.25 2.95 1.05" fill={colors.primary.shade} fillRule="evenodd" stroke="none" />
              <path d="M-8.85 -3.05 Q-8.35 -5.6 -6.45 -6.95 L-3.4 -8.95 -2.25 -9.25 0.35 -8.95 3.7 -8.3 9.05 -7.5 Q6.0 -4.85 4.75 -3.0 3.5 -1.15 2.95 1.05 L2.9 1.35 2.8 1.8 Q2.55 3.1 2.55 4.5 2.55 6.55 2.95 9.25 L3.0 9.35 2.9 9.3 -3.65 4.8 Q-5.25 3.7 -7.65 3.6 -9.05 2.15 -9.05 0.6 L-9.05 -1.4 -9.0 -2.05 -8.85 -3.05 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
            </g>
            <g id="torso-shape19" transform="matrix(1.0, 0.0, 0.0, 1.0, 7.6, 15.35)">
              <path d="M-0.55 -9.75 L0.95 -10.95 2.1 -11.85 Q3.9 -13.2 6.2 -14.15 8.85 -15.4 11.7 -15.35 L13.4 -14.65 14.15 -14.25 5.6 -6.65 4.55 -5.6 2.7 -7.3 -0.55 -9.75 M-6.8 2.05 Q-5.05 2.85 -3.25 4.7 L-2.35 5.7 -2.55 7.1 Q-2.7 8.85 -1.9 10.45 -0.3 13.55 1.6 16.2 0.0 17.1 -1.95 17.0 -3.55 15.05 -4.95 12.6 L-6.25 10.0 -6.9 7.65 -6.95 7.1 -6.8 2.05" fill="#764701" fillRule="evenodd" stroke="none" />
              <path d="M-0.55 -9.75 L2.7 -7.3 4.55 -5.6 2.9 -3.55 Q-0.5 0.5 -2.35 5.7 L-3.25 4.7 Q-5.05 2.85 -6.8 2.05 L-5.85 -0.1 Q-4.05 -5.45 -0.55 -9.75" fill="#996600" fillRule="evenodd" stroke="none" />
              <path d="M5.6 -6.65 L14.15 -14.25 13.4 -14.65 11.7 -15.35 Q8.85 -15.4 6.2 -14.15 3.9 -13.2 2.1 -11.85 L0.95 -10.95 -0.55 -9.75 Q-4.05 -5.45 -5.85 -0.1 L-6.8 2.05 -6.95 7.1 -6.9 7.65 -6.25 10.0 -4.95 12.6 Q-3.55 15.05 -1.95 17.0 0.0 17.1 1.6 16.2 -0.3 13.55 -1.9 10.45 -2.7 8.85 -2.55 7.1 L-2.35 5.7 Q-0.5 0.5 2.9 -3.55 L4.55 -5.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
              <path d="M3.1 -9.65 Q2.55 -10.4 2.55 -11.3 L2.8 -12.25 Q3.05 -13.0 3.3 -13.0 L3.75 -13.1 4.75 -13.35 4.8 -13.35 5.45 -11.7 Q5.45 -10.75 3.85 -10.0 L3.1 -9.65 M-2.4 -2.2 Q-3.1 -2.95 -3.1 -4.6 L-2.8 -5.3 -1.45 -6.0 Q-0.45 -6.35 0.7 -5.5 1.85 -4.7 1.7 -3.65 1.45 -5.1 -0.45 -3.3 L-2.4 -2.2 M-7.1 8.6 L-7.4 8.1 Q-8.0 6.45 -6.9 5.45 L-5.4 5.25 Q-3.6 4.8 -3.1 6.7 L-3.05 6.8 -4.75 6.65 Q-6.9 6.85 -7.1 8.6" fill="#ffffcc" fillRule="evenodd" stroke="none" />
              <path d="M4.8 -13.35 L5.25 -13.3 Q5.75 -13.05 6.2 -12.85 L6.35 -12.75 6.6 -12.6 Q7.55 -11.8 7.55 -10.95 7.55 -10.0 6.95 -9.3 6.25 -8.45 5.0 -8.45 4.55 -8.45 4.0 -8.85 L3.55 -9.2 3.1 -9.65 3.85 -10.0 Q5.45 -10.75 5.45 -11.7 L4.8 -13.35 M1.7 -3.65 L1.7 -3.45 Q1.5 -2.55 0.85 -2.1 0.2 -1.6 -0.8 -1.6 -1.85 -1.6 -2.4 -2.2 L-0.45 -3.3 Q1.45 -5.1 1.7 -3.65 M-3.05 6.8 Q-2.8 7.95 -3.25 9.15 L-3.7 9.65 Q-5.5 10.2 -6.8 8.95 L-7.1 8.6 Q-6.9 6.85 -4.75 6.65 L-3.05 6.8" fill="#bfb695" fillRule="evenodd" stroke="none" />
              <path d="M4.8 -13.35 L5.25 -13.3 Q5.75 -13.05 6.2 -12.85 M6.35 -12.75 L6.6 -12.6 Q7.55 -11.8 7.55 -10.95 7.55 -10.0 6.95 -9.3 6.25 -8.45 5.0 -8.45 4.55 -8.45 4.0 -8.85 L3.55 -9.2 3.1 -9.65 Q2.55 -10.4 2.55 -11.3 L2.8 -12.25 Q3.05 -13.0 3.3 -13.0 L3.75 -13.1 4.75 -13.35 4.8 -13.35 M-2.4 -2.2 Q-3.1 -2.95 -3.1 -4.6 L-2.8 -5.3 -1.45 -6.0 Q-0.45 -6.35 0.7 -5.5 1.85 -4.7 1.7 -3.65 L1.7 -3.45 Q1.5 -2.55 0.85 -2.1 0.2 -1.6 -0.8 -1.6 -1.85 -1.6 -2.4 -2.2 M-7.1 8.6 L-7.4 8.1 Q-8.0 6.45 -6.9 5.45 L-5.4 5.25 Q-3.6 4.8 -3.1 6.7 L-3.05 6.8 Q-2.8 7.95 -3.25 9.15 L-3.7 9.65 Q-5.5 10.2 -6.8 8.95 L-7.1 8.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
            </g>
          </defs>
        </>
      );
    default:
      return null;
  }
};

export default Torso;
