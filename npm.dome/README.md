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
--save-dev:记录
