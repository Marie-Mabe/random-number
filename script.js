console.log("Hi");

const randomNumberEl = document.querySelector("#random-number");

randomNumberEl.addEventListener("click", () => {    
    document.querySelector("#result").textContent = Math.random();
});