// VARIABLE
const automation = document.getElementById('automation');
const editStoreFormId = document.getElementById('EditStoreFormId');

const ourDetails = document.getElementById('ourDetails');


const myAutomation = document.getElementById('myAutomation');
const sideBarWrapper = document.getElementById('sidebar-wrapper');
const settingTabs = document.getElementsByClassName('setting-tabs');
const asideAutomation = document.getElementById('aside-automation');
const createNewBtn = document.getElementById('create-new');
const automationUlElement = document.getElementById('created-ul');
const closeBtnAutomation__aside = document.querySelector('.close-automation-aside');
const form_ul_automation = document.getElementById('wrapper-automation-form-ul');



// TEMPLATES START HERE
const actionTemplates = document.getElementById('action-template');
const conditionTemplates = document.getElementById('condition-template');
// TEMPLATES START HERE





/*-----------------------------------------
AUTOMATION FORMS ALL CONDITIONS
--------------------------------------------*/
const formCondition = () => {
	
	// input variable and input group variables
	const nestedInputs = document.querySelectorAll('.nested-input');
	const inputUl = document.getElementById('input-ul');
	const delParentBtns = document.querySelectorAll('.delete-its-parent');
	
	
	// functions to be used again and again

	const inputFocusBlur = (nestedInputs) => {
		nestedInputs.forEach(nestedInput => {
		
			// elements to show when user focus on input 
			nestedInput.onfocus = e => {		
				inputUl.classList.remove('d-none');
				inputUl.style.top = e.target.getClientRects()[0].top + 'px';
				inputUl.style.left = e.target.getClientRects()[0].left + 'px';
			}
	
			// elements to hidden when user get focus on somewhere else
			nestedInput.onblur = () => {
					
				inputUl.classList.add('d-none');
	
			}
		})
	}

	inputFocusBlur(nestedInputs);


	// cross icon to delete only its parent element 
const deleteSelectedItem = (selectedItem) => {
	selectedItem.remove();
}	



// add criteria function 
const addCriteria = (wrapperElement, template) => {

	wrapperElement.appendChild(template);
	
	// const addedElement = ;.	
	document.querySelectorAll('.delete-its-parent').forEach((eachBtn) => {

		eachBtn.addEventListener('click', (e) => {

			deleteSelectedItem(e.target.parentElement);

		})
	})

	const nestedInputs = document.querySelectorAll('.nested-input');
	inputFocusBlur(nestedInputs);

}

// deleteAll
const deleteAll = (wrapperElement) => {	
	wrapperElement.innerHTML = "";
}


//  add criteria button 
document.querySelectorAll('.add-criteria').forEach(addBtn => {

	addBtn.addEventListener('click', (e) => {

		const domDrilling = e.target.parentElement.nextElementSibling.className;
		const targetElement = e.target.parentElement.nextElementSibling;

		e.preventDefault();
		if (domDrilling.search('input-group-wrapper') !== -1) {

			addCriteria(targetElement, actionTemplates.content.cloneNode(true));

		}


		else if (domDrilling.search('input-wrapper-condition') !== -1) {
			
			addCriteria(targetElement, conditionTemplates.content.cloneNode(true));

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
		deleteSelectedItem(e.target.parentElement);
	});

})

	
}

formCondition();

/*-----------------------------------------
 AUTOMATION FORMS ALL CONDITIONS ENDS HERE
--------------------------------------------*/



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

		grabbedDiv.style.cursor = 'grab';
		grabbedDiv.style.removeProperty('user-select');
		grabbedDiv.removeEventListener('mousemove', mouseMoveHandler);		

	};


	let pos = { top: 0, left: 0, x: 0, y: 0 };

	const mouseDownHandler = function (e) {


		pos = {
			// The current scroll 
			left: grabbedDiv.scrollLeft,
			top: grabbedDiv.scrollTop,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY,
		};
		

		// check whether the space is pressed along with it or not 
		// document.body.onkeydown = (e) => {
		// 	if (e.code === 'Space') {

		// 		console.log('keydown');
				
				
				

		// 	}
		// }
		
		// Change the cursor and prevent user from selecting the text
		grabbedDiv.style.cursor = 'grabbing';
		grabbedDiv.style.userSelect = 'none';
		
		
		grabbedDiv.addEventListener('mousemove', mouseMoveHandler);
		
		// document.body.onkeyup = (e) => {
		// 	if (e.code === 'Space') {
		// 		console.log('keyup');
		// 		// grabbedDiv.style.cursor = 'normal';
		
		// 	}
		// }

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


	// RENDERING LI ELEMENTS BY CLICKING ON CREATE NEW
	const renderingElement = (searchedValue) => {

		const li =
		`<li class="created-li-element" data-id='${searchedValue}'>
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

		deleteElement();

		// calling the attach event funciton
		// attachingEvent();

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



