const inputValue = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById('taskList');

// ページ読み込み時に保存されたタスクを表示
window.addEventListener('load', () => {
  const savedTaskList = localStorage.getItem('taskList');
  if (savedTaskList) {
    const taskListArray = JSON.parse(savedTaskList);
    taskListArray.forEach(taskItem => {
      addTasks(taskItem.task);
    });
  }
});

// タスクを保存する関数
const saveTasks = () => {
  const taskList = document.querySelectorAll('.list-type-01__item span');

  // 各タスクのテキストを格納する配列
  let taskListArray = [];
  // 各タスクのテキストをオブジェクトとして格納
  taskList.forEach((task) => {
    const taskItem = {
      'task': task.textContent
    };
    taskListArray.push(taskItem);
  });

  // タスクリストをJSON文字列に変換してローカルストレージに保存
  const taskListString = JSON.stringify(taskListArray);
  localStorage.setItem('taskList', taskListString);
};

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

  // タスクが追加された後にタスクを保存
  saveTasks();
});
