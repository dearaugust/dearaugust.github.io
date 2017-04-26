

// ---------------------------------------------------------------//
// 继承
class Father {
  _render(){
    throw new Error('子集必须实现') //提示信息 主动报错
  }
  render(){
    return(`
      <ul>
        ${this._render()}
      </ul>
    `)
  }
}
class Son extends Father{
  _render(){
    return(`
      <li>我是子集li</li>
    `)
  }
}
var son = new Son();
console.log(son.render());
/*
class [name] ()  定义类

class [name] extends [fathername] {}  继承类
子类定义

*/
// -----------------------------------------------------------------------//
// ## 原生写法
// function Point(x,y){
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.toString = function(){
//   return '('+ this.x +','+ this.y +')';
// }
// var p =new Point(1,2);
// console.log(p);

// ## class 类 ES6
class Point {
  constructor(father){
    this.father = father;
  }
  toString(){
    console.log('point tostring');
  }
}
class Point2 extends Point{ // extends 继承
  constructor(x,y, father){
    super(father); //继承 constructor 必须加 super() ;
    this.x = x;
    this.y = y;
  }
  say(){
    console.log('point2 say')
  }
}
var p = new Point2(1,2, 666);
console.log(p);
// p.toString();
// p.say();



// -----------------------------------------------------------------------//
import {str as strDc, obj as objDc} from './test.js';
console.log(strDc,objDc);
//导入
import test from './test.js'; //导入 默认导出
console.log(test);

// -----------------------------------------------------------------------//
// ## .map 遍历原数组,生成新数组,不破坏原数组
let numbers = [1,22,33,4,10];
let newNum = numbers.map(function(item,index,array){
  // return item
  return `<p>${item}</p>`
});
console.log(newNum,numbers);

// -----------------------------------------------------------------------//
document.body.innerHTML = '<h1 style="text-align:center;color:teal;font-size:100px">ES6</h1>';
{
  let a = 5; //作用域只在大括号内
  console.log(a);
}
// let array = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//   console.log(i)
// }
{
  let [q,w,,e] = [3,{name:'array'},9,function(){}]; //let空格也找对应数组下标匹配 (可以使对象,属性,函数等)
  console.log(q,w,e)

  let {ab,cd}= {ab:"aaa",cd:"bbb"};
  console.log(ab);
  console.log(cd);
}

{
  const [r,t,y,u,i] = 'hello' //数组拆分字符串
  console.log(r+t+y+u+i) //hello

  const b = {
    name:'dearaugust'
  }
  b.name = 'August0819';
  console.log(b.name);
}

// -----------------------------------------------------------------------//
// ##对象写法
// let name = 'lyc';
// let age = 27;
// let say = function(){
//   say = '我叫'+ name +',今年'+ age;
//   console.log(say)
// }
// let obj = {
//   name,
//   age,
//   say,
//   run(){
//     console.log('run')
//   }
// }
// console.log(obj)
// console.log(say())

// -----------------------------------------------------------------------//
//##箭头函数
let aa = (nn,bb) => nn * bb + 2; //传1个'参数'可以省略(),没有'参数'或多个'参数'必须有();
// aa:函数名  ():参数  =>:函数体
  // function aa(nn,bb){
  //   return 38;
  // } //原写法
console.log(aa(4,9))

let bb = (b1,b2) => {
  // alert('666');
  b1 = b1++;
  b2 = b2++;
  return b1+b2;
}
console.log(bb(5,8))

let nb = (a1,a2) => ({name:'augu'}); // ()告诉浏览器是个整体函数;
console.log(nb())

// -----------------------------------------------------------------------//
//setTimeout的(this)对象指向window;
// setTimeout(() => {
//   console.log(55);
// },100);

// -----------------------------------------------------------------------//
// var name = 'lyc';
var age = 27;
let obj = {name:'4450'}
var str = `<p class='active'>姓名是 ${obj.name} 年龄是 ${age*2}</p>`; //字符串拼接,变量用${}
document.body.innerHTML = str;

function sum(num=5){ //给函数定义默认值参数;
  return ++num;
}
console.log(sum())

function sum1({name}){
  console.log(name)
}
sum1({name:'August',age:'546534'})

// -----------------------------------------------------------------------//
// ## Rest 剩余参数
function restFunc(a,...rest){
  console.log(a)
  console.log(rest)
  // console.log(arguments); // 原方法
}
restFunc(1,2,3,4,5);

// -----------------------------------------------------------------------//
// ## .reduce
[0,1,2,3,4].reduce(function(aa,bb){
  console.log(aa,bb);
  // 0 1
  // 1 2
  // 2 3
  // 3 4  //比数组长度少一位
  // return aa>bb ? aa:bb //比较谁大,谁大返回谁
  return bb
});

function add(...x){
    return x.reduce((n,m)=>m+n);
};
//传递任何个数的参数
console.log(add(1,2,3));

//比较最大值
let arr = [1,45,99,23,9];
let max = arr.reduce(function(aa,bb){
  let max = aa > bb ? aa : bb;
  return max
})
console.log(max);

//展开数组 ...arr
var arr1 =['ab','cd','ef'];
var arr2 =[...arr1,'gh',5];
console.log(arr2);
console.log(...arr1);
