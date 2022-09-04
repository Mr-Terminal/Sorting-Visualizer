const maxheapify = (arr, n, i) => {

    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; // right child index

    //if left child is smaller than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is smaller than smallest so far 
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    // If smallest is not root 
    if (largest != i) {
        
         swap(arr[i],arr[largest]);
        // Recursively heapify the affected sub-tree 
        maxheapify(arr, n, largest);
    }
}

// main function to do heap sort 
const heapSort = (arr, n) => {
    // Build heap (rearrange array) 
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
        maxheapify(arr, n, i);
    }

    // One by one extract an element from heap 
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end 
       swap(arr[0],arr[i]);

        // call max heapify on the reduced heap 
        maxheapify(arr, i, 0);
    }
} 
