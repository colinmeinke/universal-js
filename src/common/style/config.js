import Color from 'color';

const color = {
  background: Color().hsl( 0, 0, 98 ).hexString(),
  block: {
    background: Color().hsl( 0, 0, 35 ).hexString(),
    font: Color().hsl( 0, 0, 100 ).hexString(),
    border: Color().hsl( 0, 0, 10 ).hexString(),
  },
  border: Color().hsl( 0, 0, 70 ).hexString(),
  font: Color().hsl( 0, 0, 20 ).hexString(),
};

const font = {
  family: {
    regular: '"Droid", "San Francisco", "Helvetica", "Arial", sans-serif',
  },
  lineHeight: 1.5,
  size: {
    large: 50,
    medium: 30,
    small: 20,
  },
};

const spacing = {
  large: 40,
  medium: 20,
  small: 10,
};

const width = {
  border: 2,
};

export { color, font, spacing, width };
