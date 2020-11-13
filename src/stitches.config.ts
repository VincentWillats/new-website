// stitches.config.ts
import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
    prefix: '',
    tokens: {
        colors: {
            $background: '#B8D8D8',
            $secondary: '#7A9E9F',
            $main: '#627B7F',
            $accent01: '#FE5F55',
            $accent02: '#EEF5DB',
            $accent03: '#282a36',
        },
    },
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
