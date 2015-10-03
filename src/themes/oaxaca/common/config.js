import Color from 'color';

const color = {
  brand: [
    Color().hsl( 5, 85, 55 ).hexString(),
    Color().hsl( 345, 85, 50 ).hexString(),
  ],
};

color.background = Color( color.brand[ 0 ])
  .lighten( 0.15 )
  .hexString();

color.block = {
  background: color.brand[ 0 ],
};

color.border = Color( color.brand[ 0 ])
  .lighten( 0.7 )
  .hexString();

color.font = Color( color.brand[ 0 ])
  .darken( 0.75 )
  .desaturate( 0.25 )
  .hexString();

const width = {
  border: 4,
};

export { color, width };
