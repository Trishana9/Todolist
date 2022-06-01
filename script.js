let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

inputField.addEventListener('click', function(){
    

})

addToDoButton.addEventListener('click', function(){

    if (inputField.value == null || inputField.value == "") return
      
    // creating checkbox element
    let checkbox = document.createElement('input');
    // creating label for checkbox
    let label = document.createElement('label');
    // creating new line after each item added to the list
    let br = document.createElement('br');

      
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";

    // appending the inputed value to the label tag 
    label.appendChild(document.createTextNode(inputField.value));
      
    // appending the checkbox and label to div
    toDoContainer.appendChild(checkbox);
    toDoContainer.appendChild(label);
    toDoContainer.appendChild(br);
    inputField.value = "";

    checkbox.addEventListener('click', function(){
        if(label.classList.contains('line-through')){
            label.classList.remove('line-through')
        }else{
            label.classList.add('line-through')
        }
    })

    label.addEventListener('click', function(){

        if(label.classList.contains('line-through')){
            checkbox.checked = false;
            label.classList.remove('line-through');
        }else{
            checkbox.checked = true;
            label.classList.add('line-through');
        }
    })
})





