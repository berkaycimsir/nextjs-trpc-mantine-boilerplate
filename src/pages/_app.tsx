import { withTRPC } from '@trpc/next';
import type { AppRouter } from '@/server/router';
import type { AppType } from 'next/dist/shared/lib/utils';
import superjson from 'superjson';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { useSwitchTheme } from '@/hooks/useSwitchTheme';
import { mantineTheme } from '@/utils/theme';

const MyApp: AppType = ({ Component, pageProps }) => {
  const { colorScheme, toggleColorScheme } = useSwitchTheme();

  return (
    <>
      <Head>
        <title>Nextjs Mantine Trpc Boilerplate</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            ...mantineTheme,
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
