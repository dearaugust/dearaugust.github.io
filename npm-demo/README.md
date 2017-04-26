# npm 使用

##初始化node项目
- npm install jquery --save (安装插件,并保存到package.json配置文件,不用上传node_modules文件)
- npm install (下载以后安装项目内所有依赖插件)

```bash
npm init
```

##安装第三方模块
```js
npm install [packagename] [--save]
//安装到了node modules
--save:记录到dependencies字段下
--save-dev:记录到devDependencies字段下
--global:缩写为 -g   ,(安装到用户主目录系统下,可以在任何位置安装)
```

##卸载模块
```bash
  npm uninstall [packagename] [-g]
```

###引入第三方模块的时候,直接require包的名称
```js
//var $ = require('jquery'); //引入第三方模块的时候,直接require包的名称

//console.log($);
```
```js
function sayname(name){
  console.log(name)
}
module.exports = sayname;
```

###/引入自己写的js需要加./路径名
```js
var aaa = require('./index.js'); //引入自己写的js需要加./路径名

console.log(aaa);

aaa('小门')
```

##执行
- npm run [name] (执行自定义命令)
