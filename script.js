console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
document.getElementById('test').addEventListener('click',(e) =>{
    console.log('Button clicked');
})
// document.getElementById('test').addEventListener('onclick',function(e){
//     console.log('Button clicked');
// })
// function handleclick() {
//     console.log('Button clicked');
// }
document.getElementById('test').addEventListener('dblclick',(e) =>{
    console.log('Double clicked');
    console.log(e);
    console.log(e.target.id);
    document.getElementById('test').innerHTML ='heyy everyone i m shivanshi shrivastava';
})
document.getElementById('btn').addEventListener('click',(e) =>{
    document.getElementById('head').innerHTML = 'content changed';
})
document.getElementById('test').addEventListener('contextmenu',(e) =>{
    console.log('right click');
})
document.addEventListener('keydown',(e) =>{
    console.log('key pressed');
    console.log(e);
    if(e.key=="u"){
        alert("do not press u")
    }
})