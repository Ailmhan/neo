import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import "@fontsource/cascadia-code"

const styles = {
  global: (props) => ({
    body: {
      bg: mode('black', '#fff')(props),
    },
  }),
};

const colors = {
  brand: {
    50: '#f6e8ff',
    100: '#e3bdff',
    200: '#0BA7CF',
    300: '#b46ef7',
    400: 'white',
    500: '#0BA7CF',
    600: '#0BA7CF',
    700: '#4b1483',
    800: '#341158',
    900: '#1e0d2d',
  },
};

const fonts = {
  heading: `Wake Up Neo, ${base.fonts.heading}`,
  fonts: {
    heading: "Cascadia Code",
    body: "Cascadia Code",
  },
};

const components = {
  Button: {
    variants: {
      pill: (props) => ({
        ...base.components.Button.variants.outline(props),
        rounded: 'full',
        color: 'gray.500',
      }),
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
