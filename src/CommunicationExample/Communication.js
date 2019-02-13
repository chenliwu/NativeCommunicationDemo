import {
    NativeModules
} from 'react-native';

/**
 * 为了让你的功能从 JavaScript 端访问起来更为方便，通常我们都会把原生模块封装成一个 JavaScript 模块。
 * 这不是必须的，但省下了每次都从NativeModules中获取对应模块的步骤。这个 JS 文件也可以用于添加一些其他 JavaScript 端实现的功能。
 */
module.exports = NativeModules.Communication;