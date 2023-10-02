const loginArea = document.getElementById("loginArea"),
  dashboard = document.getElementById("dashboard"),
  deposite = document.getElementById("deposite"),
  withdraw = document.getElementById("withdraw"),
  balance = document.getElementById("balance"),
  depositeInput = document.getElementById("deposite-input"),
  withdrawInput = document.getElementById("withdraw-input"),
  depositeBtn = document.getElementById("submit-deposite"),
  withdrawBtn = document.getElementById("submit-withdraw"),
  loginsubmit = document.getElementById("login-submit"),
  emailInput = document.getElementById("email"),
  passwordInput = document.getElementById("password");

loginsubmit.addEventListener("click", () => {
  if (
    emailInput.value == "email@fakemail.com" &&
    passwordInput.value == Number(1234)
  ) {
    loginArea.style.display = "none";
    dashboard.classList.remove("dshow");
    depositeBtn.addEventListener("click", () => {
      const value = depositeInput.value;
      const total = Number(value) + Number(balance.innerText);
      deposite.innerText = value;
      balance.innerText = total;
      depositeInput.value = "";
    });

    withdrawBtn.addEventListener("click", () => {
      const value = withdrawInput.value;

      if (Number(value) > Number(balance.innerText)) {
        window.alert("Not Enough Money");
        withdrawInput.value = "";
      } else if (Number(balance.innerText) == 0) {
        alert("You don't have any Balance");
      } else {
        const total = Number(balance.innerText) - Number(value);
        withdraw.innerText = value;
        balance.innerText = total;
        withdrawInput.value = "";
      }
    });
  } else {
    alert("Wrong password and email");
  }
});
