// swap function utilised for different sorting algorithms takes input of two DOM elements with .style.height feature
function swap(x1, x2) {
    console.log('In Swap()');

    let temp = x1.style.height;
    x1.style.height = x2.style.height;
    x2.style.height = temp;
}

//disable other sorting buttons while a sorting process is going on 
function disableSortingButton() {

    document.querySelector("#bubble").disabled = true;
    document.querySelector("#selection").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
    
}

// enable sorting buttons after one sorting 
function enableSortingButton() {

    document.querySelector("#bubble").disabled = false;
    document.querySelector("#selection").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
   
}

//disable the size slider while a sorting process is going on
function disableSizeSlider() {
    document.querySelector("#myrange").disabled = true;
}

//enable the size slider after a sorting 
function enableSizeSlider() {
    document.querySelector("#myrange").disabled = false;
}

//disable the new array button while a sorting is going on
function disableNewArrayButton() {
    document.querySelector("#newArray").disabled = true;
}

//enable the new array button after a sorting
function enableNewArrayButton() {
    document.querySelector("#newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms 
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#myrange');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function () {
    console.log(arraySize.value, typeof (arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector("#newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingButton();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
