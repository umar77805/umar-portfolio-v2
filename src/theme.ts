import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const theme = defineConfig({
  globalCss: {
    body: {
      overflowX: "hidden"
    },
    html: {
      scrollBehavior: "smooth",
      marginLeft: { md: "100px", mdDown: "0" },
      marginTop: { mdDown: "100px", md: "0" },
      overflowX: "hidden"
    }
  }
});

export const system = createSystem(defaultConfig, theme);