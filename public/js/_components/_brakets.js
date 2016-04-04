function Brakets(form){
	"use strict";

	if(!form){
		return false;
	}

	this.form = form;
	this.text = document.querySelector('.taxifolia-description-form-script-replace > span');

	this.addEventListeners();

}

Brakets.prototype = Object.create(SiteController.prototype);


Brakets.prototype.addEventListeners = function(){
	"use strict";
	this.form.addEventListener('submit', this.HandletToSubmit.bind(this));
	this.form.addEventListener('change', this.HandletToInput.bind(this));
}

Brakets.prototype.HandletToSubmit = function(event){
	event.preventDefault();
	

	var surialize = this.surializer(event.target);
	
	this.Xhr("POST", "/brakets.php", surialize, this.calbackToLoadModal);

}

Brakets.prototype.HandletToInput = function(event){

	var target = event && event.target;

	if(!target) return;

	if(target.getAttribute('type') == 'radio'){
		this.text.innerHTML = target.value;
	}
}

Brakets.prototype.surializer = function(form){

	var elements = form.elements,
		str = "?";

	for (var i = 0; i < elements.length; i++) {
		if(elements[i].type == "radio" && !elements[i].checked){
			continue;
		}
		if(!elements[i].name){
			continue;
		}
		str += elements[i].name+"="+elements[i].value+"&";
	}

	return str.slice(0,-1);


}

Brakets.prototype.calbackToLoadModal = function(data){
	console.log(data);
}