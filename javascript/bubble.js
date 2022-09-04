
async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        console.log('In ith loop');
        for (let j = 0; j < ele.length - i - 1; j++) {
            console.log('In jth loop');
            ele[j].style.background = 'red';
            ele[j + 1].style.background = 'red';
            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'gold';
            ele[j + 1].style.background = 'gold';
        }
        ele[ele.length - 1 - i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector("#bubble");
bubSortbtn.addEventListener('click', async function () {
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await bubble();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});