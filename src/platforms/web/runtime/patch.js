/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
// modules是一个包含以下元素的数组[attrs,klass,events,domProps,style,transitionref,directives]
//是一些列包含操作属性，类，时间，样式等的方法的对象
const modules = platformModules.concat(baseModules)

//nodeOps中是一些列操作dom的方法

export const patch: Function = createPatchFunction({ nodeOps, modules })
