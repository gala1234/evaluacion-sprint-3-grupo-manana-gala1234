'use strict';





// creo el evento que escribe las 3 nuevas razones
var request = new XMLHttpRequest();
request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');


var btnMoreReasons = document.querySelector('.block_main_section-reason-more');

btnMoreReasons.addEventListener('click', function(){
  request.addEventListener('load', moreReasons);
  request.send();
})


function moreReasons(){
      var response = request.responseText;
      var responseJSON = JSON.parse(response).reasons;
      var reasonsListHTML = '';
	    for (var i = 0; i < responseJSON.length; i++) {
		  reasonsListHTML += '<div class="block_main_section-reason-article"><h3 class="Reason-title---mobile">'+ responseJSON[i].title + '</h3><p class="Reason-description---mobile">' + responseJSON[i].description +'</p></div>';
	}
  var section = document.querySelector('.block_main_section-reason-articles');
  section.innerHTML += reasonsListHTML;
};
