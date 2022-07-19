var personalSurname = document.querySelector("#personalSurname");
var personalName = document.querySelector("#personalName");
var personalAge = document.querySelector("#personalAge");
var personalJob = document.querySelector("#personalJob");
var alertMessage = document.querySelector("#alertMessage");
var submitForm = document.querySelector("#submitForm");
var personals = [];

submitForm.addEventListener("click", () => {
  alertMessage.classList.remove("d-none");

  if (
    !personalSurname.value ||
    !personalName.value ||
    !personalAge.value
  ) {
    alertMessage.classList.add("alert-danger");
    alertMessage.classList.remove("alert-success");
    alertMessage.innerHTML = "Please fill out the form completely";
    return;
  }

  var personalInfo = {
    surname: personalSurname.value,
    name: personalName.value,
    age: parseInt(personalAge.value),
    job: personalJob.value,
  };
  alertMessage.classList.remove("alert-danger");
  alertMessage.classList.add("alert-success");
  alertMessage.innerHTML = "Successfully";
  personals.push(personalInfo);
  renderTable(personals);
  resetForm();
});

var renderTable = (arr) => {
  var personalDOM = arr
    .map((user, index) => {
      return `
        <tr>
             <th scope="row">${index + 1}</th>
             <td>${user.surname}</td>
             <td>${user.name}</td>
             <td>${user.age}</td>
             <td>${user.job ? user.job : "unemployed"}</td>
             
        </tr>
        `;
    })
    .join("");

  document.querySelector(".table tbody").innerHTML = personalDOM;
};

var resetForm = () => {
  personalSurname.value = "";
  personalName.value = "";
  personalAge.value = "";
  personalJob.value = "";
};
