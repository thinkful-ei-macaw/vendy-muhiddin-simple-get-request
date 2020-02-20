function getDogImage(value) {
  
  fetch(`https://dog.ceo/api/breeds/image/random/${value}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('#imageHolder').html(
    responseJson.message.map(image => `<img src="${image}" class="results-img">`)
  );
  //display the results section
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let value = $('#textInput').val();
    getDogImage(value);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();

});