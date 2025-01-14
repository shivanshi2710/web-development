
let arr = [
  "initializing hacking...",
  "Reading File...",
  "Password files detected...",
  "Sending all Passwords files to server...",
  " Cleaning up...",
];

const randomDElay = () => {
  const pr = new Promise((resolve, reject) => {
    let x = Math.floor(Math.random() * 7) + 1;
    // console.log(x); 
    setTimeout(() => {
      resolve();
    }, x * 1000);
  });
  return pr;
};
// console.log(randomDElay());
// for(let i=0; i<arr.length; i++){
//     let x = Math.floor(Math.random()*7)+1;
// setTimeout(()=>{
//     console.log(arr[i]);
// }

const SetDAta = async (y) => {
  await randomDElay();
  const p = document.createElement("p");
  p.className = "meta";
  p.textContent = y;
  document.body.appendChild(p);
};
const final = async () => {
  for (let i = 0; i < arr.length; i++) {
    await SetDAta(arr[i]);
  }
};
final();
