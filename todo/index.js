const inputValue = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById('taskList');


// タスクを追加する関数
const addTasks = (task) => {
  // タスクを表示する要素を作成
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  // タスクを削除するボタンを作成
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '削除';
  showItem.appendChild(deleteBtn);
};

// タスクを追加
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const task = inputValue.value;
  addTasks(task);
  inputValue.value = '';
});
