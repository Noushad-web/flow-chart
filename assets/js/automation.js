// VARIABLE
const automation = document.getElementById('automation');
const editStoreFormId = document.getElementById('EditStoreFormId');

const myAutomation = document.getElementById('myAutomation');
const ourDetails = document.getElementById('ourDetails');

const sideBarWrapper = document.getElementById('sidebar-wrapper');
const settingTabs = document.getElementsByClassName('setting-tabs');
const asideAutomation = document.getElementById('aside-automation');
const createNewBtn = document.getElementById('create-new');
const automationUlElement = document.getElementById('created-ul');
const closeBtnAutomation__aside = document.querySelector('.close-automation-aside');

const form_ul_automation = document.getElementById('wrapper-automation-form-ul');


/*-----------------------------------------
 AUTOMATION FORMS ALL CONDITIONS
--------------------------------------------*/
// input variable and input group variables
const nestedInput = document.querySelectorAll('.nested-input');
const inputUl = document.querySelectorAll('.input-ul');
const delParentBtns = document.querySelectorAll('.delete-its-parent');


// functions to be used again and again

// add criteria function 
const addCriteria = (wrapperElement, outerHTMLToAdded) => {

	// console.log('addCriteria');
	wrapperElement.innerHTML += outerHTMLToAdded;
	
}

// deleteAll
const deleteAll = (wrapperElement) => {
	console.log('delete all');
	wrapperElement.innerHTML = "";
}

// cross icon to delete only its parent element 
const deleteSelectedItem = (selectedItem) => {

}	


//  add criteria button 
document.querySelectorAll('.add-criteria').forEach(addBtn => {

	addBtn.addEventListener('click', (e) => {

		const domDrilling = e.target.parentElement.nextElementSibling.className;
		const targetElement = e.target.parentElement.nextElementSibling;

		e.preventDefault();
		if (domDrilling.search('input-group-wrapper') !== -1) {


			const outerHTML =
			`
			<div class="input-group">

			<select name="" id="">
				 <option value="Is">Wait</option>
			</select>

			<input type="text" name="" id="" value="1 hour">

			<button class="delete-its-parent">
				 <img src="./assets/images/cross.svg" alt="">
			</button>
	 </div>
			`;

			addCriteria(targetElement, outerHTML);

		} else if (domDrilling.search('input-wrapper-condition') !== -1 ) {
			

			const outerHTML =
			`
			<div class="input-group">
			<input type="text" name="" class="nested-input" value="Registration">

			<!-- ELEMENTS TO SHOW WHEN USER FOCUS ON INPUT -->
			<ul class="input-ul d-none" id="input-ul">
				 <li>
						<div class="inner-content-li">
							 <span>Contact information</span> <span> &#10095; </span>
						</div>
							 <ul>
									<li>firstname</li>
									<li>last name</li>
									<li>Address</li>
									<li>City</li>
									<li>Country</li>
									<li>Age</li>
									<li>Gender</li>
									<li>Email</li>
									<li>Mobile Phone</li>
									<li>GDPR consent</li>
							 </ul>
				 </li>

				 <li>
						<div class="inner-content-li">
							 <span>Product</span>
							 <span> &#10095; </span>
						</div>
				 </li>
				 <li>
						<div class="inner-content-li">
							 <span>Purchase</span>
							 <span> &#10095; </span>
						</div>
				 </li>
				 <li>
						<div class="inner-content-li">
							 <span>Member Level</span>
							 <span> &#10095; </span>
						</div>
				 </li>
				 <li>
						<div class="inner-content-li">
							 <span>Segments</span>
							 <span> &#10095; </span>
						</div>
				 </li>

			</ul>



			<select name="" id="">
				 <option value="Is">Is</option>
			</select>
			<input type="text" name="" id="" value="POS, webshop">
			<button class="delete-its-parent"><img src="./assets/images/cross.svg" alt=""></button>
	 </div>
			`
			addCriteria(targetElement, outerHTML);

		}
		
		else {
			console.error('please let the input-group-wrapper div only after the btns div to make it work right.');
		}

	});

});








// delete all button 
document.querySelectorAll('.delete-all').forEach(deleteBtn => {
	deleteBtn.addEventListener('click', (e) => {
		e.preventDefault();
		
		const domDrilling = e.target.parentElement.nextElementSibling.className;
		const targetElement = e.target.parentElement.nextElementSibling;
		if (domDrilling.search('input-group-wrapper') !== -1) {
			
			
			deleteAll(targetElement);

		}else if (domDrilling.search('input-wrapper-condition') !== -1 ) {
	
			deleteAll(targetElement);
		}
		
		else {
			console.error('please let the input-group-wrapper div only after the btns div to make it work right.');
		}		

	})
})

// Selection of cross items selected the item
delParentBtns.forEach((delParentBtn) => {

	delParentBtn.addEventListener('click', (e) => {
		e.target.parentElement.remove();
	});

})



// form condition
const formCondition = document.getElementById('form-condition');


// elements to show when user focus on input 
nestedInput.onfocus = () => {
	inputUl.classList.remove('d-none');
}
// elements to hidden when user get focus on somewhere else
nestedInput.onblur = () => {
	inputUl.classList.add('d-none');
}








/* ----------------------------------------------------------------
SMS TEMPLATE POPUP CODES START HERE
-------------------------------------------------------------------*/
const smsFun = () => {
	const smsChangeBtns = document.querySelectorAll('.sms-change-btn');
	const smsTemplateWrapper = document.getElementById('sms-template-wrapper');
	const smsTemplateClosedBtns = document.querySelectorAll('.sms-template-btns button');

	// sms template closing
	const closedBtn_4_sms_template = () => {

		smsTemplateClosedBtns.forEach(smsTemplateClosedBtn => {

			smsTemplateClosedBtn.addEventListener('click', e => {

				smsTemplateWrapper.classList.add('d-none');

			});

		})

	}

	// sms template change btn opening the popup 
	smsChangeBtns.forEach(smsChangeBtn => {
		smsChangeBtn.addEventListener('click', e => {

			smsTemplateWrapper.classList.remove('d-none');

			// calling the closed button function
			closedBtn_4_sms_template();

		});

	});
}

smsFun();

/* ----------------------------------------------------------------
SMS TEMPLATE POPUP CODES ENDS HERE
-------------------------------------------------------------------*/






/*---------------------------
DRAGGABLE STARTS HERE
------------------------------*/

const dragFun = () => {
	// div which have to be grabbed and drag 
	const grabbedDiv = document.getElementById('grab-component');

	grabbedDiv.scrollTop = 100;
	grabbedDiv.scrollLeft = 150;

	const mouseMoveHandler = function (e) {
		// console.log('mousemove');
		// How far the mouse has been moved
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;

		// Scroll the element
		grabbedDiv.scrollTop = pos.top - dy;
		grabbedDiv.scrollLeft = pos.left - dx;

	};

	const mouseUpHandler = function () {
		// console.log('mouseup');
		grabbedDiv.style.cursor = 'grab';
		grabbedDiv.style.removeProperty('user-select');
		grabbedDiv.removeEventListener('mousemove', mouseMoveHandler);

	};


	let pos = { top: 0, left: 0, x: 0, y: 0 };

	const mouseDownHandler = function (e) {
		// console.log('mousedown');
		pos = {
			// The current scroll 
			left: grabbedDiv.scrollLeft,
			top: grabbedDiv.scrollTop,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY,
		};

		// Change the cursor and prevent user from selecting the text
		grabbedDiv.style.cursor = 'grabbing';
		grabbedDiv.style.userSelect = 'none';


		grabbedDiv.addEventListener('mousemove', mouseMoveHandler);
		grabbedDiv.addEventListener('mouseup', mouseUpHandler);

	};

	grabbedDiv.addEventListener('mousedown', mouseDownHandler);

}

dragFun();
/*---------------------------
DRAGGABLE ENDS HERE
------------------------------*/




/*---------------------------
TOGGLING SWITCH STARTS HERE
------------------------------*/

const toggleFun = () => {

	const activeBtn = document.getElementById('activeBtn');
	const activeBtnLine = document.getElementById('activeBtnLine');
	const activeBtnCircle = document.getElementById('activeBtnCircle');
	const activeBtnText = document.getElementById('activeBtnText');

	activeBtn.addEventListener('click', (e) => {
		activeBtnLine.classList.toggle('line2');
		activeBtnCircle.classList.toggle('circle2');


		if (activeBtnLine.className.search('line2') !== -1) activeBtnText.innerHTML = "Inactive"
		else activeBtnText.innerHTML = 'Active';
	});
}

toggleFun();
/*---------------------------
TOGGLING SWITCH ENDS HERE
------------------------------*/





/* --------------------------------------------
	ASIDE BAR OF AUTOMATION SECTION STARTS HERE
-------------------------------------------------*/

const asideAutomationFun = () => {
	// ADDING THE EVENT LISTENERS TO ALL CREATED LI ELEMENTS IN AUTOMATION ASIDE BAR
	const attachingEvent = () => {
		const liElements = document.querySelectorAll('.created-li-element');

		if (liElements.length > 0) {
			liElements.forEach((liElement) => {
				liElement.addEventListener('click', (e) => {

					// RENDERING COMPONENTS BY CLICKING ON RENDERED LIST ELEMENTS
					console.log(e.target.id);

				})
			})
		}

	}



	// RENDERING LI ELEMENTS BY CLICKING ON CREATE NEW
	const renderingElement = (searchedValue) => {

		let li = `
	<li class="created-li-element" data-id='${searchedValue}'>
    	<div class="automation-text">
        <img src="./assets/images/auomation-black.svg" class="img-fluid search-icon" alt="">
      <span>${searchedValue}</span>
    </div>	
    <button  class="trash border-0 " id="trashBtn">
        <img src="./assets/images/trash.svg" alt="trash" class="trash">
    </button>
  </li>
							 `;
		automationUlElement.innerHTML += li;

		// calling the attach event funciton
		// attachingEvent();

	}


	// TRASH BTN FOR REMOVING ELEMENT
	const deleteElement = () => {
		const trashBtns = document.querySelectorAll('#trashBtn');

		trashBtns.forEach(trashBtn => {

			trashBtn.addEventListener('click', (e) => {
				// e.stopPropagation();
				e.target.parentElement.remove();
			})

		});

	}



	// ONCLICK EVENTS FIRE ON AUTOMATION BTN 
	automation.addEventListener('click', (e) => {
		editStoreFormId.classList.add('d-none');
		asideAutomation.classList.remove('aside-hidden');
		myAutomation.classList.add('active')
		ourDetails.classList.remove('active');
	});


	ourDetails.addEventListener('click', (e) => {
		editStoreFormId.classList.remove('d-none');
		ourDetails.classList.add('active');
		myAutomation.classList.remove('active');
	})



	// ONCLICK EVENT FIRES ON CREATE NEW MY AUTOMATION 
	createNewBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.parentElement.search.value !== '') {
			renderingElement(e.target.parentElement.search.value);
		}
		e.target.parentElement.search.value = '';

	});


	if (automationUlElement.childElementCount > 0) {
		deleteElement();
	};



	// CLOSING THE AUTOMATION MENU WHEN CLICKING ON THIS BUTTON 
	closeBtnAutomation__aside.addEventListener('click', (e) => {
		form_ul_automation.classList.toggle('d-none');
		asideAutomation.classList.toggle('w-auto');
	})

}

asideAutomationFun();

/* --------------------------------------------
	ASIDE BAR OF AUTOMATION SECTION STARTS HERE
-------------------------------------------------*/



