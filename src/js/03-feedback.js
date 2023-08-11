import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const storageKey = 'feedback-form-state';
let formSaveData = JSON.parse(localStorage.getItem(storageKey));
const formData = {};

const { email, message } = refs.form.elements;

if (formSaveData) {
  email.value = formSaveData.email;
  message.value = formSaveData.message;
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaSubmit, 500));

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
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
function onTextAreaSubmit() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
