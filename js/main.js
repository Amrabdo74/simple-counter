let increase =document.querySelector("#increment");
let decrease =document.querySelector("#decrement");
let rest =document.querySelector("#rest");
let count =document.querySelector("#count");
count.innerHTML =0
 // Get the count from local storage if available and update the displayed count
 const storedCount = localStorage.getItem('count');
console.log(storedCount);
 if (storedCount !== null) {
   count.innerHTML = storedCount;
 }

 // Increment button click event
 increase.addEventListener("click", () => {
   count.innerHTML = parseInt(count.innerHTML) + 1;
   saveCountToLocalStorage();
 });

 // Reset button click event
 rest.addEventListener("click", () => {
   count.innerHTML = 0;
   saveCountToLocalStorage();
 });

 // Decrement button click event
 decrease.addEventListener("click", () => {
   count.innerHTML = parseInt(count.innerHTML) - 1;
   saveCountToLocalStorage();
 });

 // Function to save the count to local storage
 function saveCountToLocalStorage() {
   localStorage.setItem('count', count.innerHTML);
 }