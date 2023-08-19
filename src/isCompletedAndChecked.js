const isCompletedAndChecked = (checkbox, i) => {
    if (this.taskList[i].completed) {
      checkbox.checked = true;
      document.querySelector(`.content${i}`).classList.add('completed');
    }

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.querySelector(`.content${i}`).classList.add('completed');
        this.taskList[i].completed = true;
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
      } else {
        document.querySelector(`.content${i}`).classList.remove('completed');
        this.taskList[i].completed = false;
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
      }
    });
  }
export default isCompletedAndChecked;