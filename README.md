# dearaugust.github.io
我的第一个Github项目
# md操作
`
  我是个变量var(单引号: <code>标签)
`
```js
  console.log('aaa') (语法高亮)
  console.log();
  (三个单引号: <pre>标签)
```
<code>
  (code标签)
</code>
<pre>
  console.log('aaa')
  (块标签)
</pre>
我是个 `window` 变量

这样可以**加粗** 字体

这样可以 *倾斜* 字体

[内容来自百度](https://www.baidu.com) (a标签)

![img](http://p3.music.126.net/C6T3EaqQz5Z8UJe2xxI0YA==/7808731580968168.jpg?param=180y180)

#### 分割线

***

#### table标签

| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |

>从小不刻苦 长大卖红薯


# 终端操作
- cd (切换跳转目录)
- mkdir (创建文件夹)
- touch (创建文件)
- ls (显示目录)
- ls -a (查看隐藏文件)
- ls -l (显示文件详情)
- cat (显示文件内容)
- rm  (删除)
- rm -r dearaugust.github.io -f (强制删除 -f)
- mv (移动或重命名文件)
- q (退出操作)
- --help (查看帮助)

## 操作github
- git clone[url] (克隆)
- git status (查看版本)
- git log (查看 提交历史)

## 修改有上传更新
- git add . (获取版本)
- git commit -m'messagr' (做版本 ‘版本说明’)
- git push (上推,把本地上传到github)
- git pull (下拉,把github下载到本地)

## Atom packages (apm install atom)
- emmet
- open-in-browser  (右键浏览器打开)
- autocomplete-paths  (自动补齐路径)
- language-babel  (支持ES6语法)
- highlight-line  (高亮)
- highlight-selected （高亮 选择）
- file-icons  (图标)
- activate-power-mode (敲击效果)
- Atom Material ui (主题)
- Advanced Open File (创建新文件)
- language-vue Atom开发Vue需要装包
- 找到autusave插件设置失去焦点自动保存
- ctrl+shift+p 找到 snippets 添加代码片段
```
'.source.js':
  'reactClass':
     'prefix': '!'
     'body': """
        import React, { Component } from 'react'

        class ${1:Name} extends Component {
          render(){
            return(
              <div>
                ${1:Name}
              </div>
            )
          }
        }

        export default ${1:Name}
     """
```
## 创建仓库  
- git init (把初始化仓库创建成一个git仓库)
- .gitignore (创建.gitignone文件,忽略不上传的文件)(提前写好)
- git remote add
- git push -u origin master

## 安装node.js   (版本号 v7.9.0)
- github 搜索 nvm 安装
- nvm -- version (查看nvm版本)
- nvm ls-remote (查看node.js版本)
- nvm install 版本号 (安装版本号)(LTS是稳定版)
- node -v (查看已安装版本)
- npm -v (查看npm版本)
- npm (管理node.js包,插件)
- nvm use 版本号 (切换版本)
- nvm alias default node版本号 (设置默认node版本)
### 卸载node.js
- nvm uninstall node版本号 (卸载node版本)


## 创建react项目
- create-react-app react-props


# AJAX
- AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
- AJAX 不是新的编程语言，而是一种使用现有标准的新方法。
- AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下。
