
document.querySelector('.form-flex').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('lozinka').value;

firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log('User signed up:', user);
      // Redirect to login page or home page
      window.location.href = 'login.html';
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);
    });
});