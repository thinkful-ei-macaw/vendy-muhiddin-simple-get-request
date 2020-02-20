'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
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
});