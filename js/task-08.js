const form = document.querySelector(".login-form");

// console.log(refs.form);

// console.log(refs.submitBtn);

// console.log(refs.inputList);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" && formElements.password.value === "") {
    alert("Enter email and password");
  } else if (formElements.email.value === "") {
    alert("Enter email");
  } else if (formElements.password.value === "") {
    alert("Enter password");
  } else {
    const dataForm = new FormData(event.currentTarget);
    const dataToServer = {};

    dataForm.forEach((value, name) => (dataToServer[name] = value));
    console.log(dataToServer);

    form.reset();
  }
}
