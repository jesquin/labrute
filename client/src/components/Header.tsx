import { Box, BoxProps, Link } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import pad from '../utils/pad';

/**
 * Header component
 * @param props - Props passed to the component
 * @returns The component
 */
const Header = (props: BoxProps) => {
  const { t } = useTranslation();

  // Randomized left art
  const leftArt = useMemo(() => Math.floor(Math.random() * (11 - 1 + 1) + 1), []);
  // Randomized right art (must be different from left art)
  const rightArt = useMemo(() => {
    let art = Math.floor(Math.random() * (11 - 1 + 1) + 1);
    while (art === leftArt) {
      art = Math.floor(Math.random() * (11 - 1 + 1) + 1);
    }
    return art;
  }, [leftArt]);

  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 2,
      }}
      {...props}
    >
      <Box
        component="img"
        src={`/images/header/left/${pad(leftArt, 2)}.png`}
        alt={t('MyBruteIllustration')}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          width: '23.118279569%',
        }}
      />
      <Link component={RouterLink} to="/">
        <Box
          component="img"
          src="/images/header/head.jpg"
          alt={t('MyBrute')}
          sx={{ width: 1 }}
        />
      </Link>
      <Box
        component="img"
        src={`/images/header/right/1${pad(rightArt, 2)}.png`}
        alt={t('MyBruteIllustration')}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          width: '23.118279569%',
        }}
      />
    </Box>
  );
};

export default Header;
