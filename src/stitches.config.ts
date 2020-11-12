// stitches.config.ts
import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {},
  breakpoints: {
  bp1180: (rule) => `@media (max-width: 1180px) { ${rule} }`,
  bp980: (rule) => `@media (max-width: 980px) { ${rule} }`,
  bp880: (rule) => `@media (max-width: 880px) { ${rule} }`,
  bp540: (rule) => `@media (max-width: 540px) { ${rule} }`,
  bp1010: (rule) => `@media (max-width: 1010px) { ${rule} }`,
  bp910: (rule) => `@media (max-width: 910px) { ${rule} }`,

  },
  utils: {},
});
