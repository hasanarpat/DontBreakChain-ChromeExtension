
const button = document.querySelector(".count");
const b = document.querySelector("b");
let counter ;
chrome.storage.sync.get("count", ({ count }) => {
  counter = count;
  b.innerHTML = counter;
});
button.addEventListener("click",()=>{
  counter++;
  chrome.storage.sync.set({ count: counter });
  b.innerHTML=counter;
});