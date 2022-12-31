let arr = [];
let count = 0;
const highBtn = document.querySelector('.high');
const lowBtn = document.querySelector('.moderate');
const modBtn = document.querySelector('.low');
const addBtn = document.querySelector('.add_btn');
const ulList = document.querySelector('.unordered_list');
const editBtn = document.querySelector('.edit_btn');
const formInput = document.querySelector('.input')
const priorityBtn = document.querySelectorAll('.priority_btn');

// console.log(
//   ulList.children[0].children[0].children[1].children[0]
// );

//   e.preventDefault();
//   if (formInput.value == '') {
//     alert('please right something');
// } else {
//     let element = document.createElement('li');
//     element.setAttribute('class', 'list_item');

//     let div = document.createElement('div');
//     div.setAttribute('class', 'flex');

//     let para = document.createElement('p');
//     para.innerText = formInput.value;

//     let div2 = document.createElement('div');

//     let delBtn = document.createElement('button');
//     delBtn.setAttribute('class', 'delete_btn');
//     delBtn.innerText = 'Delete';

//     let editBtn = document.createElement('button');
//     editBtn.setAttribute('class', 'edit_btn');
//     editBtn.innerText = 'Edit';

//     // console.log(element)
//     div2.appendChild(delBtn);
//     div2.appendChild(editBtn);
//     div.appendChild(para);
//     div.appendChild(div2);
//     element.appendChild(div);
//     ulList.appendChild(element);
//     formInput.value = '';
//     formInput.focus();

//     ulList.innerHTML += `<li class="list_item">
//       <div class="flex">
//         <p>${formInput.value}</p>
//         <div>
//         <button class="delete_btn">Delete</button>
//         <button class="edit_btn">Edit</button>
//       </div>
//       </div>
//     </li>`;
//     formInput.value = '';
//     formInput.focus();
//   }
// });
// const deleteBtn = document.querySelector('.delete_btn');
// deleteBtn.addEventListener('click', () => {
  
//   console.log(deleteBtn)
// })


addBtn.addEventListener('click', addingList);

function addingList(event) {
  event.preventDefault();
  if (formInput.value == '') {
    alert('please right something');
  } else {
    const todo = {
      text: formInput.value,
      id: count++,
    }

    const li = `<li id="${todo.id}">
      <div class="flex">
        <p>${todo.text}</p>
        <div>
        <button class="delete_btn">Delete</button>
        <button class="edit_btn">Edit</button>
      </div>
      </div>
    </li>`;
    ulList.insertAdjacentHTML('beforeend', li);
    arr.push(todo);
    localStorage.setItem('todoValue',JSON.stringify(arr))
    formInput.value = '';
    formInput.focus();
  };
};

window.addEventListener('load', () => {
  arr = JSON.parse(localStorage.getItem('todoValue'));
    arr.map(element => {
      li = `<li id='${element.id}'>
        <div class="flex">
          <p>${element.text}</p>
          <div>
          <button class="delete_btn">Delete</button>
          <button class="edit_btn">Edit</button>
        </div>
      </div>
    </li>`;
    ulList.insertAdjacentHTML('beforeend', li);
      });
    });
