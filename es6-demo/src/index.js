document.body.innerHTML = '<h1 style="text-align:center;color:teal;font-size:100px">ES6</h1>';
{
  let a = 5; //作用域只在大括号内
  console.log(a);
}
// let array = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//   console.log(i)
// }
let [q,w,,e] = [3,{name:'array'},9,function(){}]; //let空格也找对应数组下标匹配 (可以使对象,属性,函数等)
console.log(q,w,e)

let {ab,cd}= {ab:"aaa",cd:"bbb"};
console.log(ab);
console.log(cd);

const [r,t,y,u,i] = 'hello' //数组拆分字符串
console.log(r+t+y+u+i) //hello

const b = {
  name:'dearaugust'
}
b.name = 'August0819';
console.log(b.name);

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

setTimeout(()=>console.log(55),1000)

var name = 'lyc';
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
