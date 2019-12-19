exports.COLORS = require('./colors.js')

exports.GREYS = require('./greys.js')

exports.MATERIAL_2014 = [].concat(exports.COLORS, exports.GREYS)

exports.decodeColor = ([l, a, b, c, h]) => ({ l, a, b, c, h })
