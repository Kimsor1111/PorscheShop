const inputID = document.querySelector(
  ".login-container .login-top .login-form form .form-body .input.id input"
);
const inputLabelID = document.querySelector(
  ".login-container .login-top .login-form form .form-body .input.id label"
);
const inputPass = document.querySelector(
  ".login-container .login-top .login-form form .form-body .input.pass input"
);
const inputLabelPass = document.querySelector(
  ".login-container .login-top .login-form form .form-body .input.pass label"
);
const Eye = document.querySelector(
  ".login-container .login-top .login-form form .form-body .input.pass .fa-regular"
);
// id
inputID.addEventListener("focus", () => {
  inputLabelID.style.cssText = `top: 1px;font-size: 14px`;
});
inputID.addEventListener("blur", () => {
  if (inputID.value !== "") {
    inputLabelID.style.cssText = "top: 1px; font-size: 14px";
  } else {
    inputLabelID.style.cssText = "top: 50%; font-size: 15px";
  }
});
inputLabelID.addEventListener("click", () => {
  inputID.focus();
});

// password
inputPass.addEventListener("focus", () => {
  inputLabelPass.style.cssText = `top: 1px;font-size: 14px`;
});
inputPass.addEventListener("blur", () => {
  if (inputPass.value !== "") {
    inputLabelPass.style.cssText = "top: 1px; font-size: 14px";
  } else {
    inputLabelPass.style.cssText = "top: 50%; font-size: 15px";
  }
});
inputLabelPass.addEventListener("click", () => {
  inputPass.focus();
});
//eye
let bool = true;
Eye.addEventListener("click", () => {
  inputPass.setAttribute("type", bool ? "text" : "password");
  Eye.classList.toggle("fa-eye-slash", !bool);
  Eye.classList.toggle("fa-eye", bool);
  bool = !bool;
});
