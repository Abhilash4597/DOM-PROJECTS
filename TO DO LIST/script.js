let arr = [];
let count = 0;
const highBtn = document.querySelector('.high');
const lowBtn = document.querySelector('.moderate');
const modBtn = document.querySelector('.low');
const addBtn = document.querySelector('.add_btn');
const ulList = document.querySelector('.unordered_list');
const deleteBtn = document.querySelector('.delete_btn');
const editBtn = document.querySelector('.edit_btn');
const formInput = document.querySelector('.input')
const priorityBtn = document.querySelectorAll('.priority_btn');

// console.log(
//   ulList.children[0].children[0].children[1].children[0]
// );
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (formInput.value == '') {
    alert('please right something');
  } else {
    // let element = document.createElement('li');
    // element.setAttribute('class', 'list_item');

    // let div = document.createElement('div');
    // div.setAttribute('class', 'flex');

    // let para = document.createElement('p');
    // para.innerText = formInput.value;

    // let div2 = document.createElement('div');

    // let delBtn = document.createElement('button');
    // delBtn.setAttribute('class', 'delete_btn');
    // delBtn.innerText = 'Delete';

    // let editBtn = document.createElement('button');
    // editBtn.setAttribute('class', 'edit_btn');
    // editBtn.innerText = 'Edit';

    // // console.log(element)
    // div2.appendChild(delBtn);
    // div2.appendChild(editBtn);
    // div.appendChild(para);
    // div.appendChild(div2);
    // element.appendChild(div);
    // ulList.appendChild(element);
    // formInput.value = '';
    // formInput.focus();

    ulList.innerHTML += `<li class="list_item">
      <div class="flex">
        <p>${formInput.value}</p>
        <div>
        <button class="delete_btn">Delete</button>
        <button class="edit_btn">Edit</button>
      </div>
      </div>
    </li>`;
    formInput.value = '';
    formInput.focus();
  }
});

// ulList.children[0].children[0].children[1].children[0].addEventListener('click',deletingList);

// function addingList(event) {
//   event.preventDefault();
//   if (formInput.value == '') {
//     alert('please right something');
//   } else {
//     const todo = {
//       text: formInput.value,
//       id: count++,
//     }
//     arr.push(todo)
    
//     const li = `<li>
//       <div class="flex">
//         <p>${todo.text}</p>
//         <div>
//         <button class="delete_btn">Delete</button>
//         <button class="edit_btn">Edit</button>
//       </div>
//       </div>
//     </li>`;
//     ulList.insertAdjacentHTML('beforeend', li);
//     formInput.value = '';
//     formInput.focus();
//   }
// };

function deletingList(event) {
  // event.path[3].remove();
  // event.target.classlist.con()
  // event.path[0].remove()
  ulList.children[0].remove();
  if (event.target.classList.contains('delete_btn')) {
    event.target.parentElement.parentElement.remove();
  }
  console.log(event);
}