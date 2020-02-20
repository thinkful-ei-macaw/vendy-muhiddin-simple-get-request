'use strict';

function getDogImage(breedName) {
  fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
    .then(response => {
      if(response.ok) {
      return response.json()
      } else {
        throw new Error('Not found!');
      }
    })
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(error.message));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
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