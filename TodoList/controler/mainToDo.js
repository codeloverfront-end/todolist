// title: string,
// description: string,
// dueDate: Date,
// priority: not urgent | normal | urgent
// I create a class to manage interaction user - toDoList
class manageList {
  // Using DOM
  targetHTML() {
    this.titleHTML = document.querySelector("#title");
    this.descriptionHTML = document.querySelector("#description");
    this.dueDateHTML = document.querySelector("#date");
    this.notUrgentHTML = document.querySelector("#NU");
    this.normalHTML = document.querySelector("#N");
    this.urgentHTML = document.querySelector("#U");
  }
  //   Add one To Do list through form - // 1 / Ajouter une todo via un formulaire
  addToDoList() {
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
  //  Edit one To Do list - // 2 / Editer une todo en cours
  editTodoList() {}
  // Erase one or more To do lists - // 3 / Supprimer une/plusieurs todos
  erasetoDoList() {}
  // Filter through title/description/dueDate/priority - // 4 / Filtrer des todos par title/description/dueDate/priority
  filtertoDoList() {}
  // Save toDoList on localStorage - // 5 / Sauvegarder les todos au sein du local Storage
  savetoDoList() {
    // if (this.addToDoList()) {
    //   const formData = {
    //     title: add1.targetHTML().titleHTML.value,
    //     description: add1.targetHTML().descriptionHTML.value,
    //     dueDate: add1.targetHTML().dueDateHTML.value,
    //     priority: add1.targetHTML().value,
    //   };
    //   localStorage.setItem(formData, JSON.stringify());
    // }
  }
  // Display toDoList - // 6 / Affichage de toutes les todos en cours
  displayToDoList() {
    this.addToDoList();
    this.screen = document.querySelector(".screen");
    this.priority = document.querySelector("input[type=radio]:checked");

    this.screen.innerHTML = `
    Titre : ${this.titleHTML.value}
    Description : ${this.descriptionHTML.value}
    Date d'écheance : ${this.dueDateHTML.value}
    Priorité : ${this.priority.value}`;
  }
}
let test1 = new manageList();
test1.addToDoList();
test1.displayToDoList();
console.log(test1);
