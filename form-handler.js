const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    nome: document.getElementById('name').value,
    email: document.getElementById('email').value,
    mensagem: document.getElementById('message').value
  };

  axios.post('http://localhost:8000/form/dacasalinguicas/contato', data)
    .then(response => {
      console.log('Sucesso:', response.data);
      alert('Mensagem enviada com sucesso!');
      //form.reset();
    })
    .catch(error => {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    });
});