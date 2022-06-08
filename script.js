let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let errorMsg = document.getElementById('inputSection');
let emsg = document.createElement('p');
showData();

// inputField.addEventListener('focus',()=>{
//     addToDoButton.classList.add('bg-emerald-600');
    
// }) 

inputField.addEventListener('input',()=>{
    addToDoButton.classList.add('bg-emerald-600');
    // addToDoButton.disabled = false
    let item = inputField.value;

    if(item.length > 0){
        errorMsg.removeChild(emsg);
        addToDoButton.classList.add('bg-emerald-600');

    }
    else{
        addToDoButton.classList.remove('bg-emerald-600');
    }
    
})

addToDoButton.addEventListener('click', () => {
    addToDoButton.classList.remove('bg-emerald-600');

    if (inputField.value == null || inputField.value == "") {
        // alert('Enter the item');
        emsg.innerHTML="enter the item";
        emsg.style.color = "#ff2204";
        emsg.classList.add('text-red','text-sm','ml-4');
        errorMsg.appendChild(emsg);
        return
    }
    
      let itemList = new Array();
      let inputItem = inputField.value;
      // checks if the local storage has any data or not
      itemList=JSON.parse(localStorage.getItem("todolist"))?JSON.parse(localStorage.getItem("todolist")):[]
      itemList.push({
          "todo": inputItem
      })
      // set the items to the local storage
      localStorage.setItem("todolist",JSON.stringify(itemList));
      inputField.value = "";
      showData(); 
        

})

function showData(){
    document.getElementById("toDoContainer").innerHTML="";
    let inputItem = inputField.value;
    itemList=JSON.parse(localStorage.getItem("todolist"))
  if(itemList)
  {
    for(let i=0;i<itemList.length;i++)
    {
        //creating div section to put each todo item
        let divSection = document.createElement('div');
        // creating checkbox element
        let checkbox = document.createElement('input');
        // creating label for checkbox
        let label = document.createElement('label');

        // div section style
        divSection.classList.add('flex');
        // divSection.classList.add('relative');

        
        // Assigning the attributes
        // to created checkbox
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.id = "checkbox";

        // added the classes to the checkbox
        checkbox.classList.add('mr-3','my-2','text-emerald-500','focus:ring-0','focus:ring-offset-0','rounded-full','border-slate-200','h-6','w-6');


        // appending the inputed value to the label tag 
        label.appendChild(document.createTextNode(itemList[i].todo));

        // added the classes to the label
        label.classList.add('text-slate-700');
        label.classList.add('text-lg');
        
      
        // appending the checkbox and label to div
        toDoContainer.appendChild(divSection);
        divSection.appendChild(checkbox);
        divSection.appendChild(label);


        checkbox.addEventListener('click', function(){
            if(label.classList.contains('line-through')){
                label.classList.remove('line-through','text-slate-400');
        
            }else{
                label.classList.add('line-through','text-slate-400','transition-all','duration-300','ease-in-out');
            }
        })

        
        label.addEventListener('click', function(){
        
            if(label.classList.contains('line-through')){
                checkbox.checked = false;
                label.classList.remove('line-through','text-slate-400');
            }else{
                checkbox.checked = true;
                label.classList.add('line-through','text-slate-400','transition-all','duration-300','ease-in-out');
            }
        })

    }
  }

  
}

