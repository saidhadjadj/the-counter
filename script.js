let count =0;
const btns =document.querySelectorAll(".btn");
let Counter= document.querySelector('.counter');

btns.forEach(btn => {
  
    btn.addEventListener('click',(e) =>{
    const styles =e.currentTarget.classList;

styles.contains('move')

    ? count ++
    : count --

    Counter.textContent= count;

    count > 0
      
    ? Counter.style.color="blue"
    : Counter.style.color ="red";

     if(count === 0){
      Counter.style.color ="yellow";
}

})  
});