require('@/css/index.less')

window.THREE = require('../lib/three')

require('../lib/scripts/ConvolutionShader')
require('../lib/scripts/CopyShader')
require('../lib/scripts/FilmShader')
require('../lib/scripts/EffectComposer')
require('../lib/scripts/FilmPass')
require('../lib/scripts/BloomPass')
require('../lib/scripts/RenderPass')
require('../lib/scripts/ShaderPass')
require('../lib/scripts/FocusShader')

require('@/js/app/index')

console.log(require("../../data/index-model/planet.json"))