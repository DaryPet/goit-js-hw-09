const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const messageData = form.message.value.trim();
  const emailData = form.email.value.trim();
  return {
    messageData,
    emailData,
  };
}

form.addEventListener('input', event => {
  // event.preventDefault();
  const data = readFormData(event.currentTarget);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = readFormData(form);
  if (form.email.value !== '' && form.message.value !== '') {
    localStorage.clear();
    form.email.value = '';
    form.message.value = '';
  } else {
    alert(' Please fill all fileds');
  }
});

const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData) {
  const data = JSON.parse(rawData);
  form.email.value = data.emailData;
  form.message.value = data.messageData;
}
console.log(JSON.parse(rawData));
