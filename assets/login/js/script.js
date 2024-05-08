let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  console.log("Email:", email.value);
  console.log("Password:", password.value);


  const formData = {
    email: email.value,
    password: password.value
  };

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      window.location.href = 'profile.html';
    } else {
      alert('Los datos son incorrectos');
      // window.location.href = 'login.html';
      throw new Error('Error en la solicitud al servidor');
    }
  } catch (error) {
    console.error('Error al enviar la solicitud:', error.message);
  }
});
