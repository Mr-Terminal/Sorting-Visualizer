async function insertion() {
    console.log('In Insertion()');
    const ele = document.querySelectorAll(".bar");

    ele[0].style.background = 'green';
    for (let i = 1; i < ele.length; i++) {

        console.log('In ith Loop');
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'red';

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {

            console.log('In While Loop');
            ele[j].style.background = 'red';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';

    }



}
const inSortbtn = document.querySelector("#insertion");
inSortbtn.addEventListener('click', async function () {

    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await insertion();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
})