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
  const {
    elements: { form, textarea },
  } = e.currentTarget;

  if (form === '' || textarea === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`Email: ${form}, Message: ${textarea}`);
  e.currentTarget.reset();
  localStorage.removeItem(storageKey);
  console.log(formData);
}
function onTextAreaSubmit(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}
