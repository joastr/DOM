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
function addEventListener(param) {
  console.log(param);
}

var list = document.getElementById('Lista');
	add = document.getElementById('addElem');
	
	

	add.addEventListener('click', function() {
		
		var	newElem = document.createElement('li');
		var	number = document.getElementsByTagName('li');
		
		for (var i=0; i<number.length; i++) {
			var nb = number[i]
				
	    newElem.innerHTML += '<li>item</li>' + nb;}
		list.appendChild(newElem); 
	});

	
	




	



