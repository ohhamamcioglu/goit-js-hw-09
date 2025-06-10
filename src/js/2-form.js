const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1. Sayfa yüklendiğinde localStorage'dan veriyi al ve alanlara yaz
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (savedData.email) form.elements.email.value = savedData.email;
if (savedData.message) form.elements.message.value = savedData.message;

// 2. Her input değişikliğinde verileri kaydet
form.addEventListener('input', () => {
  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

// 3. Gönderilince konsola yaz ve her şeyi temizle
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
