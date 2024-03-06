// 1 / Ajouter une todo via un formulaire

// Using DOM
function addToDo() {
  let titleHTML = document.querySelector("#title");
  let descriptionHTML = document.querySelector("#description");
  let dueDateHTML = document.querySelector("#date");
  let notUrgentHTML = document.querySelector("#NU");
  let normalHTML = document.querySelector("#N");
  let urgentHTML = document.querySelector("#U");

  // Making sure that the form isn't empty
  if (
    titleHTML.value === "" &&
    descriptionHTML.value === "" &&
    dueDateHTML.value === "" &&
    (!notUrgentHTML.checked || !normalHTML.checked || !urgentHTML.checked)
  ) {
    console.log("Your form isn't complete");
  } else {
    console.log("Your form is complete");
  }
}
export default addToDo;
