// JavaScript Document
/*

function addEventListener(param) {
  console.log(param);
}

var list = document.getElementById('Lista');
	add = document.getElementById('addElem');
	

	add.addEventListener('click', function() {
	newElem = document.createElement('li');
	
	newElem.innerHTML += '<li>item</li>';

	list.appendChild(newElem);
	});
	
*/

var list = document.getElementById('Lista');
	add = document.getElementById('addElem');
	
	

	add.addEventListener('click', function() {
		
		var	newElem = document.createElement('li'),
			number = document.getElementsByTagName('li');
				
	    newElem.innerHTML += 'item ' + number.length;
		list.appendChild(newElem); 
	});

	
	




	



