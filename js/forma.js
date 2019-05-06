const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('poruka');
const button = document.querySelector('.dugme');
const regEx = /^\w+([\.\-]?\w+)+@\w+([\.\-]?\w+)+(\.\w{2,3})+$/;
const regExLetters = /^[A-ZČĆŠĐŽ][a-zčćšđž]{1,11}$/;
const form = document.getElementById('myForm');
const full = document.querySelectorAll('full');
const helpTextFirstName = document.getElementById('pomocni-text-firstName');
const helpTextLastName = document.getElementById('pomocni-text-lastName');
const helpTextEmail = document.getElementById('pomocni-text-email');
const helpTextMessage = document.getElementById('pomocni-text-poruka');



function validateFirstName() {
  if (regExLetters.test(inputFirstName.value)) {
    inputFirstName.style.border = '1px solid #00ff99';
    helpTextFirstName.style.visibility = 'hidden';

  } else {
    if (inputFirstName.value.trim() == "") {
      helpTextFirstName.style.visibility = 'hidden';

    } else {
      helpTextFirstName.style.visibility = 'visible';
      inputFirstName.style.border = '1px solid #ccebff';
    }
  }
}

function validateLastName() {
  if (regExLetters.test(inputLastName.value)) {
    inputLastName.style.border = '1px solid #00ff99';
    helpTextLastName.style.visibility = 'hidden';

  } else {
    if (inputLastName.value.trim() == "") {
      helpTextLastName.style.visibility = 'hidden';
    } else {
      helpTextLastName.style.visibility = 'visible';
      inputFirstName.style.border = '1px solid #ccebff';
    }
  }
}

function validateEmail() {
  if (regEx.test(inputEmail.value)) {
    inputEmail.style.border = '1px solid #00ff99';
    helpTextEmail.style.visibility = 'hidden';

  } else {
    if (inputEmail.value.trim() == "") {
      helpTextEmail.style.visibility = 'hidden';
    } else {
      helpTextEmail.style.visibility = 'visible';
      inputFirstName.style.border = '1px solid #ccebff';
    }
  }
}

function validateMessage() {
  if (inputMessage.value.trim() !== "") {
    inputMessage.style.border = '1px solid #00ff99';
  } else {
    inputMessage.style.border = '1px solid #ccebff';
  }
}





function checkInput() {
  if (inputFirstName.value.trim() !== "" && inputLastName.value.trim() !== "" && inputEmail.value.trim() !== "" && inputMessage.value.trim() !== "") {
    button.style.backgroundColor = '#00ff99';
    inputMessage.style.border = '1px solid #00ff99';
    button.disabled = false;
  } else {
    button.style.backgroundColor = '#979695';
    button.disabled = true;
  }
  if (regExLetters.test(inputFirstName.value) == false || regEx.test(inputEmail.value) == false || regExLetters.test(inputLastName.value) == false) {
    button.style.backgroundColor = '#979695';
    button.disabled = true;
  }
}


inputFirstName.addEventListener("focusout", validateFirstName);
inputLastName.addEventListener("focusout", validateLastName);
inputEmail.addEventListener("focusout", validateEmail);
inputMessage.addEventListener("focusout",validateMessage);

inputFirstName.addEventListener("input", checkInput);
inputLastName.addEventListener("input", checkInput);
inputEmail.addEventListener("input", checkInput);
inputMessage.addEventListener("input", checkInput);



form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (inputFirstName.value.trim() !== "" && inputLastName.value.trim() !== "" &&
    inputEmail.value.trim() !== "" && inputMessage.value.trim() !== "") {
    if (regExLetters.test(inputFirstName.value) && regEx.test(inputEmail.value) && regExLetters.test(inputLastName.value)) {
      form.submit();
      form.reset();
      button.style.backgroundColor = '#c9e6ff';
      inputFirstName.style.border = '1px solid #ccebff';
      inputLastName.style.border = '1px solid #ccebff';
      inputEmail.style.border = '1px solid #ccebff';
      inputMessage.style.border = '1px solid #ccebff';
    } else {
      console.log("pratite pravila");

    }
  }
  else {
    console.log('popunite sva polja');

  }
});
