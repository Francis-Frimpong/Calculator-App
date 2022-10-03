let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let outPut = document.getElementById("output")
const formField = document.querySelector("#formfield")
const addBtn = document.querySelector("#add")
const subtractBtn = document.querySelector("#subtract")
const multiplyBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")



// Operation and click functionallity
addBtn.addEventListener("click", () => {
   outPut.textContent = +input1.value + +input2.value;
   resetField()
   
})

subtractBtn.addEventListener("click", () => {
   outPut.textContent = +input1.value - +input2.value;
   resetField()
   
})

multiplyBtn.addEventListener("click", () => {
   outPut.textContent = +input1.value * +input2.value;
   resetField()

})

divideBtn.addEventListener("click", () => {
    outPut.textContent = +input1.value / +input2.value;
   resetField()
})



//function reset form field after button been clicked
const resetField = () =>{
   formField.reset()
}


 
 
