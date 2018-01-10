'use strict';





// creo el evento que escribe las 3 nuevas razones


var reasonsListHTML = '';
var btnMoreReasons = document.querySelector('.block_main_section-reason-more');
var section = document.querySelector('.block_main_section-reason-articles');

btnMoreReasons.addEventListener('click', moreReasons);

function moreReasons(){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');

	request.addEventListener('load', function(){
		var response = request.responseText;
		var responseJSON = JSON.parse(response).reasons;
		for (var i = 0; i < responseJSON.length; i++) {
			reasonsListHTML += '<article class="block_main_section-reason-article"><h3 class="Reason-title---mobile">'+ responseJSON[i].title + '</h3><p class="Reason-description---mobile">' + responseJSON[i].description +'</p></article>';
		}
		section.innerHTML += reasonsListHTML;
	});

	request.send();
};
