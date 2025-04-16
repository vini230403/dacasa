const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    nome: document.getElementById('name').value,
    email: document.getElementById('email').value,
    mensagem: document.getElementById('message').value
  };

  console.log(data);

  axios.post('http://localhost:8000/form/dacasalinguicas/contato', data, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => {
      console.log('Sucesso:', response.data);
      alert('Mensagem enviada com sucesso!');
      // form.reset();
    })
    .catch(error => {
      console.error('Erro ao enviar:', error.response?.data || error);
      alert('Erro ao enviar mensagem. Tente novamente.');

      
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        for (const field in errors) {
          console.warn(`${field}: ${errors[field].join(', ')}`);
        }
      }
    });
});
