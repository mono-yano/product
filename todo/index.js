const inputValue = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById('taskList');


// タスクを追加する関数
const addTasks = (task) => {
  // タスクを表示する要素を作成
  const listItem = document.createElement('li');
  listItem.className = 'list-type-01__item';
  const listText = document.createElement('span');
  const showItem = taskList.appendChild(listItem).appendChild(listText);
  showItem.innerHTML = task;

  // タスクを削除するボタンを作成
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '削除';
  listItem.appendChild(deleteBtn);

  // タスクを削除
  deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.parentNode.remove();
  });
};

// タスクを追加
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const task = inputValue.value;
  addTasks(task);
  inputValue.value = '';
});
