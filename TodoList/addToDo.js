// 1 / Ajouter une todo via un formulaire

class addToDo {
  constructor(
    titleHTML,
    descriptionHTML,
    dueDateHTML,
    notUrgentHTML,
    normalHTML,
    urgentHTML
  ) {
    this.titleHTML = titleHTML;
    this.descriptionHTML = descriptionHTML;
    this.dueDateHTML = dueDateHTML;
    this.notUrgentHTML = notUrgentHTML;
    this.normalHTML = normalHTML;
    this.urgentHTML = urgentHTML;
  }

  // Using DOM
  targetHTML() {
    this.titleHTML = document.querySelector("#title");
    this.descriptionHTML = document.querySelector("#description");
    this.dueDateHTML = document.querySelector("#date");
    this.notUrgentHTML = document.querySelector("#NU");
    this.normalHTML = document.querySelector("#N");
    this.urgentHTML = document.querySelector("#U");
  }
  checkForm() {
    // Making sure that the form isn't empty
    this.targetHTML();
    if (
      this.titleHTML.value === "" &&
      this.descriptionHTML.value === "" &&
      this.dueDateHTML.value === "" &&
      (!this.notUrgentHTML.checked ||
        !this.normalHTML.checked ||
        !this.urgentHTML.checked)
    ) {
      console.log("Your form isn't complete");
    } else {
      console.log("Your form is complete");
    }
  }
}
export default addToDo;
