/*
 * This function removes a particular todo note when its dismiss button is
 * clicked.  This event listener should be delegated to the <main> element.
 */
function removeTodoOnDelegatedDismissClick(event) {

  var clickedElem = event.target;
  var clickedElemParent = event.target.parentNode;

  /*
   * If the clicked element is the dismiss button of a todo note, then remove
   * the todo from its parent.
   */
  if (clickedElem.classList.contains('dismiss-button') && clickedElemParent.classList.contains('todo')) {
    var todoNoteElemParent = clickedElemParent.parentNode;
    todoNoteElemParent.removeChild(clickedElemParent);
  }

}

/*
 * This function shows the modal to add a new todo note when the add note
 * button is clicked.
 */
function displayAddNoteModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var addNoteModalElem = document.getElementById('add-note-modal');

  // Show the modal and its backdrop.
  backdropElem.classList.remove('hidden');
  addNoteModalElem.classList.remove('hidden');

}

/*
 * This function hides the modal to add a new todo note and clears any
 * existing values from the input fields whenever any of the modal close
 * actions are taken.
 */
function closeAddNoteModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var addNoteModalElem = document.getElementById('add-note-modal');

  // Hide the modal and its backdrop.
  backdropElem.classList.add('hidden');
  addNoteModalElem.classList.add('hidden');

  clearTodoInputValues();

}

/*
 * This function clears any value present in any of the todo input elements.
 */
function clearTodoInputValues() {

  var todoInputElems = document.getElementsByClassName('todo-input-element');
  for (var i = 0; i < todoInputElems.length; i++) {
    var input = todoInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}

/*
 * This function inserts a new todo note based on the values specified in the
 * add note modal when the modal accept button is clicked.
 */
function insertNewTodo() {

  // Grab the values from all the input fields.
  var todoInputWhat = document.getElementById('todo-input-what').value || '';
  var todoInputWhere = document.getElementById('todo-input-where').value || '';
  var todoInputWhen = document.getElementById('todo-input-when').value || '';
  var todoInputWho = document.getElementById('todo-input-who').value || '';
  var todoInputDetails = document.getElementById('todo-input-details').value || '';

  // We only add the note if we have a value for "what".
  if (todoInputWhat.trim()) {

    // Create a new todo section and append it to the main element.
    var newTodoHTML = generateTodoHTML(
      todoInputWhat.trim(),
      todoInputWhere.trim(),
      todoInputWhen.trim(),
      todoInputWho.trim(),
      todoInputDetails.trim()
    );
    var mainElement = document.querySelector('main');
    mainElement.insertAdjacentHTML('beforeend', newTodoHTML);

    closeAddNoteModal();

  } else {

    // If there's no "what" value specified, throw an alert.
    alert('You must specify a value for the "what" field.');

  }

}

/*
 * This function navigates to a user's notes when a user is selected from
 * the user select list.
 */
function handleUserSelection(event) {

  var userSelection = event.target.value;

  if (userSelection) {
    window.location.href = '/notes/' + userSelection;
  }

}

// Wait until the DOM content is loaded to hook up UI interactions, etc.
window.addEventListener('DOMContentLoaded', function (event) {

  // Delegate an event listener to <main> to handle clicks on dismiss buttons.
  var main = document.querySelector('main');
  if (main) {
    main.addEventListener('click', removeTodoOnDelegatedDismissClick);
  }

  var addNoteButton = document.getElementById('add-note-button');
  if (addNoteButton) {
    addNoteButton.addEventListener('click', displayAddNoteModal);
  }

  var modalCloseButton = document.querySelector('#add-note-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', closeAddNoteModal);
  }

  var modalCancalButton = document.querySelector('#add-note-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', closeAddNoteModal);
  }

  var modalAcceptButton = document.querySelector('#add-note-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', insertNewTodo);
  }

  var userSelect = document.getElementById('user-select');
  if (userSelect) {
    userSelect.addEventListener('change', handleUserSelection);
  }

});
