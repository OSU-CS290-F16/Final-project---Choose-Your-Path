/*
 *
 */
function storePersonPhoto(personID, url, caption, callback) {

  // We'll post to the add-photo endpoint for the appropriate person.
  var postUrl = '/people/' + personID + '/add-photo';

  // Start a new request to post our newly added photo as JSON data.
  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postUrl);
  postRequest.setRequestHeader('Content-Type', 'application/json');

  /*
   * Set up a simple handler for completed requests.  This will send an error
   * into the callback if we don't get a 200 (success) status back.
   */
  postRequest.addEventListener('load', function (event) {
    var error;
    if (event.target.status !== 200) {
      error = event.target.response;
    }
    callback(error);
  });

  // Send our photo data off to the server.
  postRequest.send(JSON.stringify({
    url: url,
    caption: caption
  }));

}
