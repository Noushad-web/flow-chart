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
		const zoomWrapper = document.querySelector('.zoom-btn-wrapper');
		zoomWrapper.classList.remove('d-none');
		emptyBlog.classList.add('d-none');
		grabbedDiv.classList.remove('d-none');
		automationHorizontalNavbar.classList.remove('d-none');

	}

	// TRASH BTN FOR REMOVING ELEMENT
	const deleteElement = () => {
		const trashBtns = document.querySelectorAll('#trashBtn');
		trashBtns.forEach(trashBtn => {
			trashBtn.addEventListener('click', (e) => {
				e.target.parentElement.parentElement.remove();
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
		<span class="message" contenteditable="true">Gold Message</span>
		</div>	
		<button class="trash border-0" id="trashBtn">
		<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12">
			<g id="recycling-hand-trash" transform="translate(-0.399 -12.014)">
				<path class="trash-path" id="Path_25752" data-name="Path 25752" d="M12.4,23.264h-9l-.75-10.5h10.5Z" fill="none" stroke="#e3e3e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
				<line class="trash-path" id="Line_8693" data-name="Line 8693" x2="13.5" transform="translate(1.149 12.764)" fill="none" stroke="#e3e3e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
				<line class="trash-path" id="Line_8694" data-name="Line 8694" y2="4.5" transform="translate(6.399 15.764)" fill="none" stroke="#e3e3e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
				<line class="trash-path" id="Line_8695" data-name="Line 8695" y2="4.5" transform="translate(9.399 15.764)" fill="none" stroke="#e3e3e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
			</g>
		</svg>
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
				inputUl.style.top = e.target.getClientRects()[0].top + 38 + 'px';
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

	const selectedText = 'No action'; //for checking the selected text in select element and all condition works according to it. 
	const allActionDiv = document.querySelectorAll('.action');
	const leftElementsToBeHideShow = document.querySelectorAll('.left-grid');
	const rightElementsToBeHideShow = document.querySelectorAll('.right-grid');

	allActionDiv.forEach(eachActionDiv => {

		const articles = eachActionDiv.querySelector('article');
		const hr = eachActionDiv.querySelector('hr');
		const header = eachActionDiv.querySelector('header');

		window.addEventListener("load", function (event) {						
		
			const liUnderOptions = header.querySelectorAll('.options li');

			liUnderOptions.forEach((liElement)=>{
				liElement.addEventListener('click', (e)=>{								
					
					if (liElement.innerHTML == selectedText) {
						articles.classList.add('d-none');
						hr.classList.add('d-none');
						eachActionDiv.style.height = '63px';
						eachActionDiv.style.overflow = '';

						if (eachActionDiv.id === 'rightAction') {
							rightElementsToBeHideShow.forEach((rightElement)=>{
								rightElement.style.visibility = 'hidden';
							})
						} else if (eachActionDiv.id === 'leftAction') {
							leftElementsToBeHideShow.forEach((leftElement) => {
								leftElement.style.visibility = 'hidden';
							})
						}
						
					} else {
						articles.classList.remove('d-none');
						hr.classList.remove('d-none');
						eachActionDiv.style.height = '463px';
						eachActionDiv.style.overflow = 'auto';
						
						if (eachActionDiv.id === 'rightAction'){
							rightElementsToBeHideShow.forEach((rightElement) => {
								rightElement.style.visibility = 'visible';
							})
						}else if(eachActionDiv.id === 'leftAction'){
							leftElementsToBeHideShow.forEach((leftElement)=>{
								leftElement.style.visibility = 'visible';
							})
						}
					}
				})
			})
		});
	})
}
flowFun();


/* ------------- Zoom IN/OUT -------------*/
const zoomFun = () => {
	const zoomIn = document.querySelector('.zoom-in');
	const zoomOut = document.querySelector('.zoom-out');
	const componentWrapper = document.getElementById('component-wrapper');
	let scale = [1];

	const zoomInHandler = (e) => {
		if (scale.length - 1 < 1) {
			scale.push((scale[scale.length - 1]) * 1.5);
			componentWrapper.style.transform = `scale(${scale[scale.length - 1]})`;
		}
	}
	const zoomOutHandler = (e) => {
		if (scale.length - 1 > 0) {
			scale.pop(scale.length - 1);
			componentWrapper.style.transform = `scale(${scale})`;
		}
	}
	zoomIn.addEventListener('click', zoomInHandler);
	zoomOut.addEventListener('click', zoomOutHandler);
}
zoomFun();
