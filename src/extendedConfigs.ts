"use client"

import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import "@fontsource-variable/vend-sans/index.css"
import "@fontsource/mea-culpa/index.css"
import "@fontsource/fascinate-inline/index.css"
import '@fontsource/black-ops-one/index.css';

const theme = {
  tokens: {
    fonts: {
      html: { value: "Vend Sans" }
    }
  }
}

const globalCss = {
  body: {
    overflowX: "hidden"
  },
  html: {
    scrollBehavior: "smooth",
    marginLeft: { md: "100px", mdDown: "0" },
    marginTop: { mdDown: "100px", md: "0" },
    overflowX: "hidden",
  },
  img: {
    draggable: false
  }
}

const extendedConfigs = defineConfig({
  globalCss,
  theme
});

export const system = createSystem(defaultConfig, extendedConfigs);