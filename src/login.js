document.querySelector('.form-flex').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('lozinka').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User signed in:', user);
      localStorage.setItem("token", userCredential.user.uid);
      // Redirect to home page
      window.location.href = 'recepti.html';      
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in:', errorCode, errorMessage);
      alert("Neispravan Email ili Lozinka");
    });
});