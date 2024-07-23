'use strict';

setTimeout(() => {
  // Create a form element
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'http://172.16.0.1/userportal/newlogin.do';

  // Create input elements for username, password, and type
  const username = document.createElement('input');
  username.type = 'hidden';
  username.name = 'username';
  username.value = 'your_username';
  form.appendChild(username);

  const password = document.createElement('input');
  password.type = 'hidden';
  password.name = 'passwd';
  password.value = 'your_password';
  form.appendChild(password);

  const type = document.createElement('input');
  type.type = 'hidden';
  type.name = 'type';
  type.value = '1';
  form.appendChild(type);

  // Append form to the body and submit
  document.body.appendChild(form);
  form.submit();
}, 2000);
