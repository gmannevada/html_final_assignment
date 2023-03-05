function toggleSignups() {
  document.getElementById("login").style.display = "none";
  document.getElementById("signups").style.display = "block";    
} 

function clearnameEmail() {
  document.getElementById("name").textContent = "";
  document.getElementById("email").textContent = "";
}

function openForm() {
    clearnameEmail();
    document.getElementById("leroyForm").style.display = "block";
    toggleSignups();
  }
  
  function closeForm() {
    document.getElementById("leroyForm").style.display = "none";
    clearnameEmail();
  }

  window.onload = function() {
    openForm();
    };


    function openPage(pageName) {
      // Simulate a mouse click:
      window.location.href = "https://github.com/gmannevada/html_final_assignment/settings/" + pageName;
    }
 
 