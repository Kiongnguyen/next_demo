import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import { Avatar, Button, Link } from '@mui/material';
import RouterLink from 'src/routes/components/router-link';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const CARDS_LEADER = [
  {
    id: 1,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg',
    url: 'https://trilon.io/',
    name: 'Adam',
    job: 'Co-Founder',
    title: 'NestJS Framework Creator Google Developer Expert International Speaker',
  },
  {
    id: 2,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg',
    url: 'https://trilon.io/',
    name: 'Evar',
    job: 'Co-Founder',
    title: 'NestJS Framework Creator Google Developer Expert International Speaker',
  },
];
const CARDS = [
  {
    id: 1,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_10.jpg',
    name: 'Adam',
    job: 'Lead Software Architect',
  },
  {
    id: 2,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_11.jpg',
    name: 'Eva',
    job: 'Software Architect',
  },
  {
    id: 3,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_12.jpg',
    name: 'Jonh',
    job: 'Lead Software Architect',
  },
  {
    id: 4,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_13.jpg',
    name: 'Elena',
    job: 'Software Architect',
  },
  {
    id: 5,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_14.jpg',
    name: 'Anna',
    job: 'Senior Software Engineer',
  },
  {
    id: 6,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_10.jpg',
    name: 'Adam',
    job: 'Lead Software Architect',
  },
  {
    id: 7,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_11.jpg',
    name: 'Eva',
    job: 'Software Architect',
  },
  {
    id: 8,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_12.jpg',
    name: 'Jonh',
    job: 'Lead Software Architect',
  },
  {
    id: 9,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_13.jpg',
    name: 'Elena',
    job: 'Software Architect',
  },
  {
    id: 10,
    avatar: 'https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_14.jpg',
    name: 'Anna',
    job: 'Senior Software Engineer',
  },
];

// ----------------------------------------------------------------------

export default function HomeTeam() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="h3" sx={{ color: 'text.disabled' }}>
            MEET OUR TEAM
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Our Experts are ready to
            <br />
            help grow your business .
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="body2">
            We've worked with small start-ups, to Fortune 500 companies, leading them all to
            success.
          </Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 4, lg: 4 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {CARDS_LEADER.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.id}>
            <Card
              sx={{
                width: 600,
                height: 300,
                textAlign: 'center',
                alignItems: 'center',
                mb: 10,
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(10, 5),
                ...{
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                },
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Avatar
                  alt={card.name}
                  src={card.avatar}
                  sx={{ width: 80, height: 80, mx: 'auto' }}
                />

                <Stack direction="column">
                  <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
                    {card.name}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{card.job}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{card.title}</Typography>
                </Stack>
              </Stack>
            </Card>
          </m.div>
        ))}
      </Box>

      <Box
        gap={{ xs: 4, lg: 4 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.id}>
            <Card
              sx={{
                width: 300,
                height: 300,
                textAlign: 'center',
                alignItems: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(10, 5),
                ...(index % 2 === 1 && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
              }}
            >
              <Avatar
                alt={card.name}
                src={card.avatar}
                sx={{ width: 80, height: 80, mx: 'auto' }}
              />

              <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
                {card.name}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{card.job}</Typography>
            </Card>
          </m.div>
        ))}
        <Card
          sx={{
            width: 300,
            height: 300,
            textAlign: 'center',
            alignItems: 'center',
            boxShadow: { md: 'none' },
            bgcolor: 'background.default',
            p: (theme) => theme.spacing(10, 5),
          }}
        >
          <Avatar alt="You" src="" sx={{ width: 80, height: 80, mx: 'auto' }} />

          <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
            You
          </Typography>

          <Link
            color="inherit"
            variant="caption"
            target="_blank"
            rel="noopener"
            href={paths.careers}
            sx={{
              textDecoration: 'underline',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Apply now
          </Link>
        </Card>
      </Box>
      <m.div variants={varFade().in}>
        <Stack
          spacing={5}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column-reverse', sm: 'row' }}
          sx={{ m: 5 }}
        >
          <Button
            component={RouterLink}
            href={paths.careers}
            color="inherit"
            size="large"
            variant="contained"
          >
            Want to join our team?
          </Button>

          <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={paths.team}
            sx={{ borderColor: 'text.primary' }}
          >
            Get to know us!
          </Button>
        </Stack>
      </m.div>
    </Container>
  );
}
