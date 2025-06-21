const errorMessage = document.getElementById('error-message');
const inputField = document.querySelector('input');
const form = document.querySelector('form');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('input', () => {

})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailAddress = inputField.value.trim();

  if (!emailRegex.test(emailAddress)) {
    errorMessage.style.display = 'flex';
    inputField.style.border = '1px solid red';
    inputField.style.color = 'red';
    inputField.style.backgroundColor = '#ffeeee';


  } else {
    errorMessage.style.display = 'none';
    inputField.style.border = '';
    inputField.style.color = '';
    inputField.style.backgroundColor = '';

  }
}); 
