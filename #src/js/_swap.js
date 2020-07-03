window.onload = function() {

	document.querySelectorAll('.swape-block').forEach((item) => {
		let step = parseInt(item.getAttribute('id').replace('step-', ''));
		if(step == 3)
			item.querySelector('.swape-block__bottom-button.ACCEPT').onclick = sendResult;
		else
			item.querySelector('.swape-block__bottom-button.ACCEPT').onclick = () => {goStep(step + 1)};
		if(step == 1) {
			if(item.querySelector('.swape-block__bottom-button.back'))
				item.querySelector('.swape-block__bottom-button.back').onclick = () => {goStep(1)};
		}
		else {
			if(item.querySelector('.swape-block__bottom-button.back'))
				item.querySelector('.swape-block__bottom-button.back').onclick = () => {goStep(step - 1)};
		}
	});


	document.querySelector('input[name="quantity_from"]').onchange = () => {
		
		document.querySelector('input[name="quantity_to"]').value = document.querySelector('input[name="quantity_from"]').value;
	};

	
	document.querySelectorAll('.swape-block__bottom-button.close').forEach((item) => {
		item.onclick = () => {window.location.href = 'index.html';}
	});
	document.querySelectorAll('.swape-block__bottom-button.close_block').forEach((item) => {
		item.onclick = () => { 
			let parent = item.parentNode;
			while(parent.tagName != 'BODY' && !parent.classList.contains('swape-voucher')) {
				parent = parent.parentNode;
			}
			if(parent.classList.contains('swape-voucher'))
				parent.style.display = 'none';
			document.getElementById('shadow').style.display = 'none';
		}
	});

	document.querySelectorAll('.swape-block__item').forEach((item) => {
		item.onclick = (e) => {
			if(e.target.tagName != 'IMG') {
				e.preventDefault();
				return false;
			}
				
			let result = activateCurrentcy(item);
//console.log('click ', !result);
			if(!result)
				e.preventDefault();
			return result;
		}
	});

	document.getElementById('quantity_static').onchange = () => {
		document.querySelector('input[name="quantity_from"]').value = document.getElementById('quantity_static').value;
		document.querySelector('input[name="quantity_to"]').value = document.getElementById('quantity_static').value;
	};
window.step = 0;
}

function goStep(nextStep) {
	if(nextStep == 3 && !validateCurrency()) {
		document.getElementById('step-error').style.display = 'block';
		return false;
	}

	if(nextStep == 3 && !validate()) {
		document.querySelectorAll('.error').forEach(item => {
			item.classList.remove('error');
		});
		document.querySelectorAll('#step-2 input').forEach(item => {
			if(!item.value)
				item.classList.add('error');
		});
		return false;
	}

	document.querySelectorAll('.swape-block').forEach((item) => {
		item.style.display = 'none';
	});
	document.getElementById('step-' + nextStep).style.display = 'block';
	if(nextStep == 3)
		drawSummary();
}

function drawSummary() {
	
	let summaryNode = document.getElementById('summary_from');
	summaryNode.querySelector('.swape-block__link').innerHTML = document.querySelector('input[name="currency_from"]:checked').nextSibling.nextSibling.innerHTML;
	summaryNode.querySelector('.amount').innerHTML = document.querySelector('input[name="quantity_from"]').value;
	summaryNode.querySelector('.address').innerHTML = document.querySelector('input[name="address_from"]').value;

	summaryNode = document.getElementById('summary_to');
	summaryNode.querySelector('.swape-block__link').innerHTML = document.querySelector('input[name="currency_to"]:checked').nextSibling.nextSibling.innerHTML;
	summaryNode.querySelector('.amount').innerHTML = document.querySelector('input[name="quantity_to"]').value;
	summaryNode.querySelector('.address').innerHTML = document.querySelector('input[name="address_to"]').value;	
}

function activateCurrentcy(node) {

	clearInput();
	
	let isValidCurrency = false;

	if(node.parentNode.parentNode.classList.contains('left')) {
		let fromBlock = document.querySelector('.swape-block__column.right');
		let selectedFromValue = (node.querySelector('input')) ? node.querySelector('input').getAttribute('data-id') : 0;			
		let selectedToValue = 0;//(document.querySelector('input[name="currency_to"]:checked')) ? document.querySelector('input[name="currency_to"]:checked').getAttribute('data-id') : 0;		

/*	
		if(selectedFromValue == 1 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 3 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 2 && selectedToValue == 2)
			fromBlock.querySelector('input[data-id="1"]').parentNode.click();
*/


		if(selectedFromValue == 1 || selectedFromValue == 2)
			document.querySelector('input[name="address_to"]').value = '0x8C54085Ad729FDE488338FC50CfC8dFD5e2b5B89';

		if(selectedFromValue == 1 /*|| selectedFromValue == 2*/ || selectedToValue == 1 /*|| selectedToValue == 2*/)
			switchInputSelect();
		else
			switchInputSelect(true);

		isValidCurrency = validateCurrency(0, selectedFromValue);		
	}
	if(node.parentNode.parentNode.classList.contains('right')) {
		let fromBlock = document.querySelector('.swape-block__column.left');
		let selectedFromValue = (node.querySelector('input')) ? node.querySelector('input').getAttribute('data-id') : 0;				
		let selectedToValue = 0;//(document.querySelector('input[name="currency_from"]:checked')) ? document.querySelector('input[name="currency_from"]:checked').getAttribute('data-id') : 0;		

/*	
		if(selectedFromValue == 1 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 3 && selectedToValue != 2)
			fromBlock.querySelector('input[data-id="2"]').parentNode.click();
		if(selectedFromValue == 2 && selectedToValue == 2)
			fromBlock.querySelector('input[data-id="1"]').parentNode.click();

*/
		if(selectedToValue == 1 || selectedToValue == 2)
			document.querySelector('input[name="address_to"]').value = '0x8C54085Ad729FDE488338FC50CfC8dFD5e2b5B89';

		if(selectedFromValue == 1 || selectedToValue == 1 /*|| selectedToValue == 2 || selectedFromValue == 2*/)
			switchInputSelect();
		else
			switchInputSelect(true);

		isValidCurrency = validateCurrency(selectedFromValue, 0);
	}

console.log('validateCurrency ', !isValidCurrency, node);

	if(!isValidCurrency) {
		
		console.log('validateCurrency not passed');
		return false;
	}

	node.querySelector('input').checked = true;

	//node.parentNode.querySelectorAll('img').forEach((item) => { item.classList.remove('active'); });
	node.parentNode.querySelectorAll('img').forEach((item) => { 
		if(item.classList.contains('active'))
			item.style.display = 'block';
		else
			item.style.display = 'none';
	});
	
	node.querySelector('img.active').style.display = 'none';
	node.querySelector('img:not(.active)').style.display = 'block';

	return true;
}


function validate() {
	if(!document.querySelector('input[name="quantity_from"]').value)
		return false;
	if(!document.querySelector('input[name="address_from"]').value)
		return false;
	if(!document.querySelector('input[name="quantity_to"]').value)
		return false;
	//if(!document.querySelector('input[name="address_to"]').value)
	//	return false;
	if(!document.querySelector('input[name="currency_from"]:checked').value)
		return false;
	if(!document.querySelector('input[name="currency_to"]:checked').value)
		return false;

	return true;
} 

function validateCurrency(newSelectedFromValue, newSelectedToValue) {
	let selectedFromValue = document.querySelector('input[name="currency_to"]:checked') ? document.querySelector('input[name="currency_to"]:checked').getAttribute('data-id') : 0;				
	let selectedToValue = document.querySelector('input[name="currency_from"]:checked') ? document.querySelector('input[name="currency_from"]:checked').getAttribute('data-id') : 0;

console.log('func validateCurrency ', selectedFromValue , '/', selectedToValue );

	if(newSelectedFromValue)
		selectedFromValue = newSelectedFromValue;
	if(newSelectedToValue)
		selectedToValue = newSelectedToValue;
		
console.log('func validateCurrency ', selectedFromValue , '/', selectedToValue );
console.log('func validateCurrency ', newSelectedFromValue , '/', newSelectedToValue );
console.log('func validateCurrency ', selectedToValue != 0 );
console.log('func validateCurrency ', selectedFromValue == selectedToValue );

	if(selectedFromValue < 1 || selectedToValue < 1)
		return true;

	if(selectedFromValue == selectedToValue)
		return false;

	if(selectedFromValue == 1 && selectedToValue == 3)
		return false;
	if(selectedFromValue == 3 && selectedToValue == 1)
		return false;

	return true;
} 


function sendResult() {

	let formData = new FormData();
	formData.append('quantity_from', document.querySelector('input[name="quantity_from"]').value);
	formData.append('address_from', document.querySelector('input[name="address_from"]').value);
	formData.append('quantity_to', document.querySelector('input[name="quantity_to"]').value);
	formData.append('address_to', document.querySelector('input[name="address_to"]').value);
	formData.append('currency_from', document.querySelector('input[name="currency_from"]:checked').value);
	formData.append('currency_to', document.querySelector('input[name="currency_to"]:checked').value);

	let oReq = new XMLHttpRequest();
	oReq.addEventListener("load", (response) => {
		document.getElementById('step-result-graph').style.display = 'block';
		document.getElementById('shadow').style.display = 'block';
		document.getElementById('step-result-graph').querySelector('.address_result').innerHTML = document.querySelector('input[name="address_to"]').value;
		document.querySelectorAll('.swape-block').forEach((item) => {
			item.style.display = 'none';
		});
		console.log(response);
	});
	oReq.open("POST", "send.php");
	oReq.send(formData);
}


function clearInput() {
	document.querySelectorAll('.form__input').forEach(item => {
		item.value = '';
	});
}


/*
 * direct == true is input to select
 * direct == false is select to input
*/
function switchInputSelect(direct) {
	if(direct) {	
		document.getElementById('step-warning').style.display = 'none';
		//document.getElementById('step-warning').style.display = 'block';
		document.getElementById('shadow').style.display = 'none';
		document.getElementById('quantity_static').style.display = 'none';
		document.querySelector('input[name="quantity_from"]').style.display = 'block';
	} else {	
		document.getElementById('step-warning').style.display = 'block';
		document.getElementById('shadow').style.display = 'block';
		document.getElementById('quantity_static').style.display = 'block';
		document.querySelector('input[name="quantity_from"]').style.display = 'none';
	}
}






