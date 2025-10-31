// https://css-tricks.com/working-with-javascript-media-queries/

// var mediaQuery = window.matchMedia("(width = 48rem)")
// // let myInputs = document.querySelector("form label input")

// if (mediaQuery.matches) {
//   // https://www.w3schools.com/jsreF/prop_checkbox_checked.asp
//   unCheck();
// }

// function unCheck() {
//   var myInput = document.querySelector("input");
//     myInput.checked = false; //test
//     document.querySelector("select option:checked").checked = false; //andere test
// }

// https://modx.com/blog/checking-and-unchecking-all-checkboxes-in-a-form
// function checkAll(checkEm) {
//     var cbs = document.querySelector("input");

//     for (var i = 0; i < cbs.length; i++) {
//         if (cbs[i].type == 'checkbox') {
//             if (cbs[i].name == 'my_form_tasks[]') {
//                 cbs[i].checked = checkEm;
//             }
//         }
//     }
// }

//Sanne's FIX:

const deRadios = document.querySelectorAll("[type='radio']"); // Radiobuttons selecteren en definen
const deSelect = document.querySelector("select"); // Select options selecteren en definen

deSelect.addEventListener("change", handleSelectChange); // Luisteren naar de select options 'verandering' voer dan de functie uit...

// als de slect wordt veranderd
// dan veranderen de checkboxen mee
function handleSelectChange(event) { // de functie*
  // de value van de select opzoeken	
	const selectValue = deSelect.value; // de constante staat gelijk aan de value=checked/unchecked
	
	// de radio met die value opzoeken
	const newRadio = document.querySelector("input[value='"+selectValue+"']"); // de value van de radio input staat gelijk aan de value van de select options
	
	// die radio checken
	newRadio.checked = true; // en als hij gelijk staat dan checked = true
}

deRadios.forEach(eenRadio => {
	eenRadio.addEventListener("change", handleRadioChange); // dan hetzelfde als voorheen, maar dan de radiobuttons
});

function handleRadioChange(event) { 
	// de value van de radio opzoeken	
	const radioValue = event.target.value;
	
	// de select die value geven
	deSelect.value = radioValue;
}