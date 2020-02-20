
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img" height="200" width="200">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let value = $('#textInput').val();
    //console.log(value);
    for(let i = 0; i < value; i++) {
      getDogImage();

    }
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  //render();
});