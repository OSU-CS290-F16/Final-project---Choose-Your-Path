// Grab the todo template from Handlebars.
var todoTemplate = Handlebars.templates.todo;

/*
 * This function should create an HTML string representing a new todo note
 * given the information that could be in the note.
 *
 * Note that where, when, who, and details can be an empty string.  If this
 * is the case, the corresponding portion of the todo note should not be
 * included in the HTML string.
 */
function generateTodoHTML( title, prolog, dialog, choice1, choice2, choice3) {
    var data = {
        title: title,
            body: {
                prolog: prolog,
                dialog: dialog,
                choice1: choice2,
                choice3: choice3
            }
    }

  return todoTemplate(data);

}
