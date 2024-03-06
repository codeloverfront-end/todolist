// 5 / Sauvegarder les todos au sein du local Storage
import addToDo from "./addToDo.js";
// Target the form
let formHTML = document.querySelector("form");

// If my form is submitted, then storage it

// Object form containing the different parts of the form
class form {
  submitForm() {
    let add1 = new addToDo();
    if (add1.checkForm()) {
      const formData = {
        title: add1.targetHTML().titleHTML.value,
        description: add1.targetHTML().descriptionHTML.value,
        dueDate: add1.targetHTML().dueDateHTML.value,
        priority: add1.targetHTML().value,
      };
      localStorage.setItem(formHTML, JSON.stringify());
    }
  }
}

export default form;

// A poursuivre le jeudi 07 mars 2024
