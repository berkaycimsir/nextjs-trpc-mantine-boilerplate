import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';
import {
  AppShell,
  Navbar,
  Header,
  Burger,
  MediaQuery,
  useMantineTheme,
  Text,
  Title,
  List,
  ThemeIcon,
  Highlight,
  ScrollArea,
  Box,
  ActionIcon,
} from '@mantine/core';
import { useState } from 'react';
import { ChevronsRight, ArrowNarrowLeft, Sun, Moon } from 'tabler-icons-react';
import { NavbarLinks } from '@/components/NavbarLinks';
import TextLink from '@/components/Link/TextLink';
import ButtonLink from '@/components/Link/ButtonLink';
import { useSwitchTheme } from '@/hooks/useSwitchTheme';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'from tRPC' }]);
  const { toggleColorScheme } = useSwitchTheme();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding="xl"
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section mt="xs">Sticky navbar header</Navbar.Section>

          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <NavbarLinks />
          </Navbar.Section>

          <Navbar.Section>Sticky navbar footer</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Title
                sx={{
                  fontFamily: theme.fontFamilyMonospace,
                }}
                order={4}
              >
                Nextjs Mantine Trpc Boilerplate
              </Title>
            </Box>

            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="filled"
              color={theme.colorScheme === 'dark' ? 'violet' : 'gray'}
              size={28}
            >
              {theme.colorScheme === 'dark' ? (
                <Sun size={16} />
              ) : (
                <Moon color="white" size={16} />
              )}
            </ActionIcon>
          </Box>
        </Header>
      }
    >
      <div>
        <Title mb="xl" order={3}>
          This Boilerplate uses:
        </Title>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon variant="light" color="green" size={24} radius="xl">
              <ChevronsRight size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text>Nextjs</Text>
          </List.Item>
          <List.Item>
            <Text>tRPC</Text>
          </List.Item>
          <List.Item>
            <Text>Typescript</Text>
          </List.Item>
          <List.Item>
            <Text>Mantine</Text>
          </List.Item>
        </List>

        <Box mt="xl" sx={{ display: 'flex', alignItems: 'center' }}>
          <Highlight
            align="center"
            highlight={['Hello from tRPC', 'Loading...']}
            style={{ textAlign: 'left' }}
            highlightStyles={(theme) => ({
              backgroundImage: theme.fn.linearGradient(
                45,
                theme.colors.cyan[5],
                theme.colors.indigo[5]
              ),
              fontWeight: 700,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })}
            mr="md"
          >
            {data ? data.greeting : 'Loading...'}
          </Highlight>
          <ArrowNarrowLeft />
          <Text ml="xs">This comes from tRPC api routes</Text>
        </Box>

        <ButtonLink
          href="/sign-in"
          text="Button Link Example"
          buttonProps={{ color: 'indigo', mt: 'lg' }}
        />

        <TextLink
          href="/sign-in"
          text="Text Link Example"
          textProps={{ color: 'indigo', ml: 'lg' }}
        />
      </div>
    </AppShell>
  );
};

export default Home;
