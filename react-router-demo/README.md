# react-router 装包

-  npm install react-router-dom --save
```js
  <Router>
    <div className="App">

      <h1>欢迎光临</h1>
      <Link to='/'>首页</Link>
      <Link to='/about'>About页面</Link>
      <Link to='/work'>Work页面</Link>

      <Route exact path='/' component={Home} /> //exact 默认打开页面
      <Route path='/About' component={About}/>
      <Route path='/:work' component={Work}/>  // path='.:work' ':'后接收一个变量,变量可以是任意字符

    </div>
  </Router>

```

//-------------------------------------------------------------------------------------------------------//
