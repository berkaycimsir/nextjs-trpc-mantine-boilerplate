import { ColorScheme } from '@mantine/core';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import { useCallback } from 'react';

type ReturnType = {
  colorScheme: ColorScheme;
  toggleColorScheme: (value?: ColorScheme) => void;
};

export const useSwitchTheme = (): ReturnType => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    },
    [colorScheme, setColorScheme]
  );

  useHotkeys([['mod+E', () => toggleColorScheme()]]);

  return { colorScheme, toggleColorScheme };
};
