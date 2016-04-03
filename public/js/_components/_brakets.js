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
	

	console.log(this.form['taxifolia-radio-meds'])


}

Brakets.prototype.HandletToInput = function(event){

	var target = event && event.target;

	if(!target) return;

	if(target.getAttribute('type') == 'radio'){
		this.text.innerHTML = target.value;
	}
}