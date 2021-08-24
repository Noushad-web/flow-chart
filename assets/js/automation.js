// VARIABLES
const automationNavBtn = document.getElementById('automation');
const editStoreFormId = document.getElementById('EditStoreFormId');
const ourDetails = document.getElementById('ourDetails');
const myAutomation = document.getElementById('myAutomation');
const sideBarWrapper = document.getElementById('sidebar-wrapper');
const settingTabs = document.getElementsByClassName('setting-tabs');
const asideAutomation = document.getElementById('aside-automation');
const createNewBtn = document.getElementById('create-new');
const createNewBtnFlowChart = document.getElementById('create-new-flow-chart');
const automationUlElement = document.getElementById('created-ul');
const closeBtnAutomation__aside = document.querySelector('.close-automation-aside');
const form_ul_automation = document.getElementById('wrapper-automation-form-ul');
const actionTemplates = document.getElementById('action-template');
const conditionTemplates = document.getElementById('condition-template');
const emptyBlog = document.getElementById('empty-blog');
const grabbedDiv = document.getElementById('grab-component');
const counterArray = [0];


/* ---------------- ASIDE BAR OF AUTOMATION SECTION --------------- */
const asideAutomationFun = () => {
	const automationHorizontalNavbar = document.getElementById('automation-horizontal-navbar');

	const togglingComponents = () => {
		emptyBlog.classList.add('d-none');
		grabbedDiv.classList.remove('d-none');
		automationHorizontalNavbar.classList.remove('d-none');
	}

	// ADDING THE EVENT LISTENERS TO ALL CREATED LI ELEMENTS IN AUTOMATION ASIDE BAR
	// const attachingEvent = () => {
	// 	const textElements = document.querySelectorAll('.created-li-element > .automation-text');
	// 	if (textElements.length > 0) {
	// 		textElements.forEach((textElement, elementNumber) => {
	// 			textElement.addEventListener('click', () => {
	// 				togglingComponents();
	// 			})
	// 		})
	// 	}
	// }
	// attachingEvent();

	// TRASH BTN FOR REMOVING ELEMENT
	const deleteElement = () => {
		const trashBtns = document.querySelectorAll('#trashBtn');
		trashBtns.forEach(trashBtn => {
			trashBtn.addEventListener('click', (e) => {
				e.target.parentElement.remove();
			})
		})
	}

	// RENDERING LI ELEMENTS BY CLICKING ON CREATE NEW
	const renderingElement = (searchedValue) => {
		counterArray.push(counterArray.length);
		const li =
			`
		<li class="created-li-element" >
		<div class="automation-text" data-id='${counterArray[counterArray.length - 1]}'>
		<img src="./assets/images/auomation-black.svg" class="img-fluid search-icon" alt="">
		<span>Gold Message</span>
		</div>	
		<button class="trash border-0" id="trashBtn">
		<img src="./assets/images/trash.svg" alt="trash" class="trash">
		</button>
		</li>
		`;
		automationUlElement.innerHTML += li;
		deleteElement();
		// attachingEvent();
	}

	// ONCLICK EVENTS FIRE ON AUTOMATION BTN 
	automationNavBtn.addEventListener('click', (e) => {

		const automateSection = document.getElementById('automation-section');
		editStoreFormId.classList.add('d-none');
		asideAutomation.classList.remove('aside-hidden');
		myAutomation.classList.add('active')
		ourDetails.classList.remove('active');
		automateSection.classList.toggle('automation-section-height');
		emptyBlog.classList.remove('d-none');
		grabbedDiv.classList.add('d-none');

	});

	ourDetails.addEventListener('click', (e) => {
		editStoreFormId.classList.remove('d-none');
		ourDetails.classList.add('active');
		myAutomation.classList.remove('active');
	})

	// ONCLICK EVENT FIRES ON CREATE NEW MY AUTOMATION 
	createNewBtn.addEventListener('click', (e) => {
		e.preventDefault();
		renderingElement();
	});

	if (automationUlElement.childElementCount > 0) {
		deleteElement();
	};

	// CLOSING THE AUTOMATION MENU WHEN CLICKING ON THIS BUTTON 
	closeBtnAutomation__aside.addEventListener('click', (e) => {
		form_ul_automation.classList.toggle('d-none');
		asideAutomation.classList.toggle('w-auto');
		// grabbedDiv.classList.toggle('grab-div-padding');
	})

	// opening flow chart on clicking create me btn 
	createNewBtnFlowChart.addEventListener('click', () => {
		togglingComponents();
	})

}
asideAutomationFun();


/*------------- AUTOMATION FORMS ALL CONDITIONS ---------------*/
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
				inputUl.style.top = e.target.getClientRects()[0].top + 30 + 'px';
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
			} else if (domDrilling.search('input-wrapper-condition') !== -1) {
				addCriteria(targetElement, conditionTemplates.content.cloneNode(true));
			} else {
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
			} else if (domDrilling.search('input-wrapper-condition') !== -1) {
				deleteAll(targetElement);
			} else {
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


/* -------------- SMS TEMPLATE POPUP --------------*/
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
			closedBtn_4_sms_template(); // calling the closed button function
		});
	});
}
smsFun();


/*---------------- TOGGLING SWITCH STARTS HERE ---------------*/
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


/* -------------- FLOW CHART SHOW AND HIDE STARTS HERE -------------*/
const flowFun = () => {
	const allLeftElem = document.querySelectorAll('.left-grid');
	const allRightElem = document.querySelectorAll('.right-grid');
	const noActionLeft = document.getElementById('no-action-left');
	const sendSmsLeft = document.getElementById('sms-left');
	const noActionRight = document.getElementById('no-action-right');
	const sendSmsRight = document.getElementById('sms-right');
	const selectActionElementLeft = document.getElementById('action');
	const selectActionElementRight = document.getElementById('action-right');

	selectActionElementLeft.addEventListener('change', (e) => {
		if (e.target.value === 'no-action') {
			allLeftElem.forEach((element) => {
				element.style.visibility = 'hidden';
				// grabbedDiv.classList.add('w-auto');
			})
		} else {
			allLeftElem.forEach((element) => {
				element.style.visibility = 'visible';
				// grabbedDiv.style.width = "100%";
			})
		}
	})

	selectActionElementRight.addEventListener('change', (e) => {
		if (e.target.value === 'no-action') {
			allRightElem.forEach((element) => {
				element.style.visibility = 'hidden';
			})
		} else {
			allRightElem.forEach((element) => {
				element.style.visibility = 'visible';
			})
		}
	})


	sendSmsLeft.addEventListener('click', () => {
		allLeftElem.forEach((element) => {
			element.style.visibility = 'visible';
		})
	})

	noActionLeft.addEventListener('click', () => {
		allLeftElem.forEach((element) => {
			element.style.visibility = 'hidden';
		})
	})

	sendSmsRight.addEventListener('click', () => {
		allRightElem.forEach((element) => {
			element.style.visibility = 'visible';
		})
	});

	noActionRight.addEventListener('click', () => {
		allRightElem.forEach((element) => {
			element.style.visibility = 'hidden';
		})
	})
}
flowFun();


/* _______________ DRAG THE DIV BY GRABBING ________________*/
const dragDivFun = () => {
	
	let pos = { top: 0, left: 0, x: 0, y: 0 };
	// div which have to be grabbed and drag 
	grabbedDiv.scrollTop = 0;
	grabbedDiv.scrollLeft = 0;

	const checkEvents = (key, mouse) => {
		let eventKey = key;
		let eventMouse = mouse;
		if (eventKey && eventMouse) {
			console.log(eventKey, eventMouse);
			grabbedDiv.addEventListener('mousemove', mousemove); // Phase 3 mousemove
		} else {
			grabbedDiv.removeEventListener('mousemove', mousemove);
		}
	}

	const mouseup = (e) => {
		checkEvents(true, false);
		grabbedDiv.style.cursor = 'auto';
		grabbedDiv.style.removeProperty('user-select');
	}

	const mousemove = (e)=> {
		console.log('mousemoving');
		grabbedDiv.style.cursor = 'grabbing';
		// How far the mouse has been moved
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;
		// Scroll the element
		grabbedDiv.scrollTop = pos.top - dy;
		grabbedDiv.scrollLeft = pos.left - dx;
	}

	const mousedown = (e) => {
		pos = {
			// The current scroll 
			left: grabbedDiv.scrollLeft,
			top: grabbedDiv.scrollTop,
			// Get the current mouse position
			x: e.clientX,
			y: e.clientY,
		};
		checkEvents(true, true);
		grabbedDiv.addEventListener('mouseup', mouseup); // Phase 4 mouseup
	};

	document.addEventListener("keyup", (e) => { // phase 5 keyup
		if (e.code === 'Space') {
			console.log("keyup");
			grabbedDiv.removeEventListener('mousedown', mousedown);
			grabbedDiv.removeEventListener('mousemove', mousemove);
			grabbedDiv.style.cursor = 'auto';
			grabbedDiv.style.removeProperty('user-select');
		}		
	});

	const keydown = (e)=> {
		if (e.code === 'Space') {
			// Change the cursor and prevent user from selecting the text
			grabbedDiv.style.cursor = 'grab';
			grabbedDiv.style.userSelect = 'none';
			grabbedDiv.addEventListener('mousedown', mousedown);  // Phase 2 mousedown			
		}
	};

	document.addEventListener("keydown", keydown); // Phase 1 keydown

}
dragDivFun();

