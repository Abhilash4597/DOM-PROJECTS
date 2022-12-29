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

addBtn.addEventListener('click', addingList);

// function resetForm() {
//   formInput.value = '';
// }

function addingList(event) {
  event.preventDefault();
  if (formInput.value == '') {
    alert('please right something');
  } else {
    const todo = {
      text: formInput.value,
      id: count++,
    }
    arr.push(todo)
    const li = `<li>
      <div class="flex">
        <p>${todo.text}</p>
        <div>
        <button class="delete_btn">Delete</button>
        <button class="edit_btn">Edit</button>
      </div>
      </div>
    </li>`;
    ulList.insertAdjacentHTML('beforeend', li);
    formInput.value = '';
  }
  console.log(event.value);
}