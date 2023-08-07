// import '../css/common.css';
// import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';
const formData = {};

populateTextarea();
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaSubmit, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(storageKey, JSON.stringify(formData));
  // console.log(e.target.name);
  // console.log(e.target.value);
});

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
}
function onTextAreaSubmit(event) {
  const message = event.target.value;
  localStorage.setItem(storageKey, message);
}
function populateTextarea() {
  const savedMessage = localStorage.getItem(storageKey);
  if (savedMessage) {
    return;
  }
  // refs.textarea.value = savedMessage;
  refs.textarea.value = savedMessage.message || '';
  refs.input.value = savedMessage.email || '';
  formData.email = savedMessage.email || '';
  formData.message = savedMessage.message || '';
}

populateTextarea();
