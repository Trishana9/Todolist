let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

inputField.addEventListener('focus', function(){
    addToDoButton.classList.add('bg-emerald-600');

})

inputField.addEventListener('blur', function(){
    addToDoButton.classList.remove('bg-emerald-600');

})


addToDoButton.addEventListener('click', function(){
    addToDoButton.classList.remove('bg-emerald-600')

    if (inputField.value == null || inputField.value == "") {
        alert('Enter the item');
        return
    }

    if ( !isNaN(inputField.value)) {
        alert('Item name cant be a number');
        inputField.value = "";
        return;
    }

    //creating div section to put each todo item
    let divSection = document.createElement('div');
    // creating checkbox element
    let checkbox = document.createElement('input');
    // creating label for checkbox
    let label = document.createElement('label');

    // div section style
    divSection.classList.add('flex');
    divSection.classList.add('relative');

      
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.id = "checkbox";

    // added the classes to the checkbox
    checkbox.classList.add('mr-3');
    checkbox.classList.add('my-2');
    checkbox.classList.add('text-emerald-500');
    checkbox.classList.add('focus:ring-0');
    checkbox.classList.add('focus:ring-offset-0');
    checkbox.classList.add('rounded-full');
    checkbox.classList.add('border-slate-200');
    checkbox.classList.add('h-6');
    checkbox.classList.add('w-6');


    // appending the inputed value to the label tag 
    label.appendChild(document.createTextNode(inputField.value));

    // added the classes to the label
    label.classList.add('text-slate-700');
    label.classList.add('text-lg');

    // delete img create and style
    let deleteimg = document.createElement('img');
    deleteimg.src = "/images/delete.png";
    
    deleteimg.classList.add('h-6');
    deleteimg.classList.add('w-6');
    deleteimg.classList.add('absolute');
    deleteimg.classList.add('top-0');
    deleteimg.classList.add('right-0');
    deleteimg.classList.add('mr-5');
    deleteimg.classList.add('cursor-pointer');
    
      
    // appending the checkbox and label to div
    toDoContainer.appendChild(divSection);
    divSection.appendChild(checkbox);
    divSection.appendChild(label);
    divSection.appendChild(deleteimg);
    
    inputField.value = "";

    checkbox.addEventListener('click', function(){
        if(label.classList.contains('line-through')){
            label.classList.remove('line-through')
            label.classList.remove('text-slate-400');

        }else{
            label.classList.add('line-through')
            label.classList.add('text-slate-400');
            label.classList.add('transition-all');
            label.classList.add('duration-300');
            label.classList.add('ease-in-out');
        }
    })

    label.addEventListener('click', function(){

        if(label.classList.contains('line-through')){
            checkbox.checked = false;
            label.classList.remove('line-through');
            label.classList.remove('text-slate-400');
        }else{
            checkbox.checked = true;
            label.classList.add('line-through');
            label.classList.add('text-slate-400');
            label.classList.add('transition-all');
            label.classList.add('duration-300');
            label.classList.add('ease-in-out');
        }
    })

    deleteimg.addEventListener('click',()=>{
        toDoContainer.removeChild(divSection);
    })
})





