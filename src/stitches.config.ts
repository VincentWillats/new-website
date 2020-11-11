// stitches.config.ts
import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {},
    breakpoints: {
    bp1: (rule) => `@media (max-width: 640px) { ${rule} }`,
    bp2: (rule) => `@media (max-width: 800px) { ${rule} }`,
    bp3: (rule) => `@media (max-width: 1024px) { ${rule} }`,
    bp4: (rule) => `@media (max-width: 1280px) { ${rule} }`,
  },
  utils: {},
});
