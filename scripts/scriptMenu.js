// https://css-tricks.com/working-with-javascript-media-queries/

var mediaQuery = window.matchMedia("(width = 48rem)")
// let myInputs = document.querySelector("form label input")

if (mediaQuery.matches) {
  // https://www.w3schools.com/jsreF/prop_checkbox_checked.asp
  unCheck();
}

function unCheck() {
  var myInput = document.querySelector("input");
    myInput.checked = false; //test
    document.querySelector("select option:checked").checked = false; //andere test
}

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