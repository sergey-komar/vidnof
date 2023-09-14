$(function () {

})

window.addEventListener('DOMContentLoaded', () => {

const menu = document.querySelector('.mobile-menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function() {
    this.classList.toggle('nav-icon--active')
    menu.classList.toggle('nav--active');
});



var element1 = document.getElementById('input-mask1');
var maskOptions = {
	mask: '+{7}(000)000-00-00',
};
if(element1){
    var mask1 = IMask(element1, maskOptions);
  }

  let input = document.querySelector('.input1');
  let email = document.querySelector('.input2');


  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  

  function isEmailValid(value) {
     return EMAIL_REGEXP.test(value);
  }
  
  function onInput() {
    if (isEmailValid(email.value)) {
      email.style.borderColor = 'green';
    } else {
      email.style.borderColor = 'red';
    }
  }
  
  email.addEventListener('input', onInput);
  

  if(input){
    input.maxLength = '10';
  input.addEventListener('input',()=> {
      input.value = input.value.replace(/[^А-я,A-z]/,'');
      // input.value = input.value.replace(/[^А-я]/,'');
  });
  }


  
})