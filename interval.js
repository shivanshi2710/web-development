// setTimeout(function(){
//     // console.log('Hello from app.js!');
//     hello();
//     bye();
  
// },5000)
function hello(){
    console.log('Hello from hello()!');
}
// hello();
const bye = ()=>{
 console.log('Hello from');

}
// setInterval(function(){
//     console.log('heelo interval')
// },6000)

document.getElementById('btn').addEventListener('click',()=>{
    setTimeout(function(){
        // console.log('Hello from button click');
        document.getElementById('tag').innerHTML ="hello from kuki";
    },4000)
})