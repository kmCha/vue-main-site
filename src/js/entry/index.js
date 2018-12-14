require('@/css/index.less')
require('../../css/monokai-sublime.css')

window.THREE = require('../lib/three')

// 全局执行环境下的老代码包
require('../lib/scripts/highlight.js')
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