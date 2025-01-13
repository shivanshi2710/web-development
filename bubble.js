document.getElementById('child').addEventListener('click',(event) =>{
    console.log('child clicked');
    event.stopPropagation(); // Prevent the child's event from bubbling up to the parent
})
document.getElementById('childcontainer').addEventListener('click',(event) =>{
    console.log('child container clicked');
    event.stopPropagation();
})

document.getElementById('container').addEventListener('click',(event) =>{
    console.log('container clicked');
})