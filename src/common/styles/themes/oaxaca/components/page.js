import Color from 'color';
import merge from 'deepmerge';

import * as coreConfig from '../../../config';
import * as themeConfig from '../config';

const rootConfig = merge( coreConfig, themeConfig );

const config = {
  html: {
    color: {
      background: {
        solid: rootConfig.color.background,
        gradient: {
          bottom: [
            Color( rootConfig.color.brand[ 0 ])
              .desaturate( 0.35 )
              .hexString(),
            Color( rootConfig.color.brand[ 1 ])
              .desaturate( 0.35 )
              .hexString(),
            Color( rootConfig.color.brand[ 2 ])
              .desaturate( 0.35 )
              .hexString(),
          ],
          top: [
            Color().hsl( 0, 0, 100 ).alpha( 0 ).hslString(),
            Color( rootConfig.color.brand[ 0 ])
              .alpha( 0.75 )
              .hslString(),
          ],
        },
      },
      font: rootConfig.color.font,
    },
  },
};

const html = {
  background: `
    linear-gradient(
      ${ config.html.color.background.gradient.top[ 0 ]},
      ${ config.html.color.background.gradient.top[ 1 ]}
    ),
    linear-gradient(
      25deg,
      ${ config.html.color.background.gradient.bottom[ 0 ]},
      ${ config.html.color.background.gradient.bottom[ 1 ]},
      ${ config.html.color.background.gradient.bottom[ 0 ]}
    ) ${ config.html.color.background.solid }`,
  color: config.html.color.font,
  minHeight: '100%',
};

export { html };
