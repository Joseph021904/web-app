document.getElementById('login').addEventListener('submit', function(e) {
  e.preventDefault();

    // Get the values from the input fields
    const Username = document.getElementById("Username").value.trim();
    const password = document.getElementById("password").value.trim(); 
    
    if (Username === "" || password === "") {
        alert("Please fill in both Username and password.");
    } else {
      alert(`Welcome , ${Username}! Login successful.`); 
        
    }
});
document.getElementById('register').addEventListener('click', function(e) {
  e.preventDefault();
  
  window.location.href = "register.html";
});