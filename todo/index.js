const inputValue = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById('taskList');

// DOM要素を作成して返す関数
const createElement = (tagName, className = '') => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};

// タスクを保存する関数
const saveTasks = () => {
  const taskElements = document.querySelectorAll('.list-type-01__item span');
  // タスクの配列を作成
  const taskListArray = Array.from(taskElements).map(taskElement => ({
    task: taskElement.textContent
  }));
  // 配列をJSON文字列に変換して保存
  const taskListString = JSON.stringify(taskListArray);
  localStorage.setItem('taskList', taskListString);
};

// タスクを追加して保存する関数
const addAndSaveTask = (task) => {
  // タスクを表示
  const listItem = createElement('li', 'list-type-01__item');
  const listText = createElement('span');
  listText.innerHTML = task;

  // 削除ボタンを作成
  const deleteBtn = createElement('button');
  deleteBtn.innerHTML = '削除';
  // 削除ボタンを押したときの処理
  deleteBtn.addEventListener('click', (event) => {
    event.preventDefault(); // ボタンのデフォルトの挙動をキャンセル
    event.target.parentNode.remove(); // 削除ボタンの親要素を削除

    saveTasks();
  });

  listItem.appendChild(listText);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  saveTasks();
};

// ページ読み込み時に保存されたタスクを表示
window.addEventListener('load', () => {
  const savedTaskList = localStorage.getItem('taskList');
  // 保存されたタスクがあれば表示
  if (savedTaskList) {
    const taskListArray = JSON.parse(savedTaskList); // JSON文字列を配列に変換
    // 配列の要素ごとにタスクを追加
    taskListArray.forEach(taskItem => {
      addAndSaveTask(taskItem.task);
    });
  }
});

// タスクを追加
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // ボタンのデフォルトの挙動をキャンセル
  const task = inputValue.value;
  addAndSaveTask(task);
  inputValue.value = ''; // 入力欄を空にする
});
