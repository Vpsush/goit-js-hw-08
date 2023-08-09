import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(storageKey)) || {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaSubmit, 500));

function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;

  if (email === '' || message === '') {
    return console.log('Please fill in all the fields!');
  }

  const info = {
    email: email.value,
    message: message.value,
  };
  console.log(info);
  e.currentTarget.reset();
  localStorage.removeItem(storageKey);
  console.log(formData);
}
function onTextAreaSubmit(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
