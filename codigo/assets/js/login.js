var API_URL = "http://localhost:3000";

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function processaFormLogin(ev) {
  ev.preventDefault();

  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
}

/**
 * Logs in a user.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<void>} - A promise that resolves when the login is complete.
 */
async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/users`);
  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if (email === data[i].email && password === data[i].password) {
      sessionStorage.setItem("user", JSON.stringify(data[i]));

      return true;
    }
  }

  return false;
}

async function logoutUser() {
  sessionStorage.removeItem("user");
  window.location = "login.html";
}

function verificaLogin() {
  const user = sessionStorage.getItem("user");

  if (!user) {
    window.location = "login.html";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (
    !window.location.pathname.includes("login.html") &&
    !window.location.pathname.includes("register.html") &&
    !window.location.pathname.includes("index.html")
  ) {
    verificaLogin();
  }
});
