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
import { Button } from '@mui/material';
import RouterLink from 'src/routes/components/router-link';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'tdesign:cooperate',
    title: 'Consulting',
    description:
      'Let us help take your Application to the next level - planning the next big steps, reviewing architecture, and brainstorming with the team to ensure you achieve your most ambitious goals!',
  },
  {
    icon: 'iconoir:laptop-dev-mode',
    title: 'Development',
    description:
      "Trilon can become part of your development process, making sure that you're building enterprise-grade, scalable applications with best-practices in mind, all while getting things done better and faster!",
  },
  {
    icon: 'fluent:people-team-32-regular',
    title: 'Workshops',
    description:
      "Have a Trilon team member come to YOU! Get your team up to speed with guided workshops on a huge variety of topics. Modern NodeJS (or NestJS) development, JavaScript frameworks, Reactive Programming, or anything in between! We've got you covered.",
  },
  {
    icon: 'mdi:source-branch',
    title: 'Open-source ',
    description:
      'We love open-source because we love giving back to the community! We help maintain & contribute to some of the largest open-source projects, and hope to always share our knowledge with the world!',
  },
];

// ----------------------------------------------------------------------

export default function HomeMinimal() {
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
          <Typography component="div" variant="h1" sx={{ color: 'text.disabled' }}>
            What we do .
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h4">
            At Trilon, our goal is to help elevate teams - giving them the push they need to truly{' '}
            <br />
            succeed in today's ever-changing tech world.
          </Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 3, lg: 2 }}
        maxWidth={2000}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                height: '380px',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(2, 1),
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
              <Iconify icon={card.icon} width={40} sx={{ color: 'primary' }} />

              <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                {card.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
            </Card>
          </m.div>
        ))}
      </Box>
      <Stack
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <Button
          component={RouterLink}
          href={paths.services}
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="mingcute:arow-to-right-line" width={24} />}
          sx={{ width: '200px', mt: '20px' }}
        >
          Explore more
        </Button>
      </Stack>
    </Container>
  );
}
