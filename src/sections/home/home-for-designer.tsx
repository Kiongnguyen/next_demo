import { m } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderDescription = (
    <Box sx={{ textAlign: { xs: 'center', md: 'unset' }, mt: { xs: 10, md: 20 } }}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="h2" sx={{ color: 'text.primary' }}>
          WE'VE VISITED
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          variant="h2"
          sx={{
            mt: 1,
            mb: 1,
            ...textGradient(
              `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
            ),
          }}
        >
          15 COUNTRIES
        </Typography>
      </m.div>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="h2" sx={{ color: 'text.primary', mb: 5 }}>
          WITH OUR LECTURES
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          endIcon={<Iconify icon="mingcute:arrow-down-fill" />}
          target="_blank"
          rel="noopener"
          href={paths.careers}
        >
          Watch some of them
        </Button>
      </m.div>
    </Box>
  );

  const renderImg = (
    <Box
      component={m.img}
      src="https://trilon.io/_nuxt/bg-world-map-1.9380c395.png"
      variants={varFade().in}
      sx={{
        height: 1,
        width: 0.5,
        objectFit: 'cover',
        position: 'absolute',
        boxShadow: `-80px 80px 80px ${
          theme.palette.mode === 'light'
            ? alpha(theme.palette.grey[500], 0.48)
            : alpha(theme.palette.common.black, 0.24)
        }`,
      }}
    />
  );

  return (
    <Box
      sx={{
        minHeight: 560,
        overflow: 'hidden',
        position: 'relative',
        ...bgGradient({
          startColor: `${theme.palette.grey[900]} 25%`,
          endColor: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/home/for_designer.webp',
        }),
        ...(mdUp && {
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.8),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
        }),
      }}
    >
      <Container component={MotionViewport}>
        <Grid container>
          <Grid xs={12} md={6}>
            {renderDescription}
          </Grid>

          {mdUp && <Grid md={6}>{renderImg}</Grid>}
        </Grid>
      </Container>
    </Box>
  );
}
