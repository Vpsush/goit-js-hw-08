import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(storageKey)) || {};
console.log(formData);

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaSubmit, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(storageKey);
}
function onTextAreaSubmit(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
