import '../css/common.css';
import '../css/03-feedback.css';
// import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextAreaSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
}
function onTextAreaSubmit(event) {
  const message = event.currentTarget.value;
  localStorage.setItem(storageKey, message);
}
