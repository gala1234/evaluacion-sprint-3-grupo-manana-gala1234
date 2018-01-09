'use strict';





// creo el evento que escribe las 3 nuevas razones
var btnMoreReasons = document.querySelector('.block_main_section-reason-more');

btnMoreReasons.addEventListener('click', function(){

  var request = new XMLHttpRequest();
  request.open('GET','https://three-random-reasons-izwfjpgbqm.now.sh');

  request.addEventListener('load',showPicture);
  function showPicture(){
      var response = request.responseText;
      var responseJSON = JSON.parse(response).reasons;
  }
  request.send();
  var reasons = document.querySelector('.block_main_section-reason-articles');
  reasons.innerHTML += responseJSON;
});
