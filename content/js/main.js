document.querySelector(".container button").addEventListener("click", () => {
  let size = document.querySelector("#passLength").value;
  let password = "";
  let options = "";


  /* Check if user wants special letters */
  if (document.querySelector("#uppercase").checked) {
      options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if (document.querySelector("#lowercase").checked) {
      options += "abcdefghijklmnopqrstuvwxyz";
    }
  if (document.querySelector("#numbers").checked) {
      options += "1234567890";
    }
  if (document.querySelector("#symbols").checked) {
      options += "!@#$%*/.^~){}[];|-";
    }


  /* Error handler */
  if (!options.length >= 1) {
    createNotification("Check at Least 1 of the options!");
  }
  else if (size <= 0  || isNaN(size)) {
    createNotification("Length of the password should be bigger than 0");
  }
  else {
    for (var i=0; i<size; i++) {
       password += options[Math.floor(Math.random() * options.length)];
   }
    document.querySelector(".result-container h1").innerText = password;
  }
})



function createNotification(message) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = message;

    document.querySelector(".toasts").appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 1500)
}
