const { makePalette } = require('../')

it('uses the correct Material palette when appropriate', () => {
  expect([
    makePalette('#F44336'), // Red
    makePalette('#E91E63'), // Pink
    makePalette('#9C27B0'), // Purple
    makePalette('#673AB7'), // Deep Purple
    makePalette('#3F51B5'), // Indigo
    makePalette('#2196F3'), // Blue
    makePalette('#03A9F4'), // Light Blue
    makePalette('#00BCD4'), // Cyan
    makePalette('#009688'), // Teal
    makePalette('#4CAF50'), // Green
    makePalette('#8BC34A'), // Light Green
    makePalette('#CDDC39'), // Lime
    makePalette('#FFEB3B'), // Yellow
    makePalette('#FFC107'), // Amber
    makePalette('#FF9800'), // Orange
    makePalette('#FF5722'), // Deep Orange
    makePalette('#795548'), // Brown
    makePalette('#9E9E9E'), // Gray
    makePalette('#607D8B') // Blue Gray
  ]).toMatchSnapshot('Material')
})

it('generates spec-compliant palettes from custom colors', () => {
  expect([
    makePalette('#1E242D'), // Dark
    makePalette('#4A4A4A'), // Dark
    makePalette('#EFF0EF') // Light
  ]).toMatchSnapshot('Dark and Light')

  expect([
    makePalette('#E82127'), // Tesla "Lust"
    makePalette('#004225') // British Racing Green
  ]).toMatchSnapshot('Car Colors')

  expect([
    makePalette('#4285F4'),
    makePalette('#DB4437'),
    makePalette('#F4B400'),
    makePalette('#0F9D58')
  ]).toMatchSnapshot('Google Logo')
})

it('allows either a HEX code or HSV to be used', () => {
  expect(
    makePalette([358, 85.77586206896551, 90.98039215686275])
  ).toStrictEqual(
    makePalette('#E82127')
  )
})
