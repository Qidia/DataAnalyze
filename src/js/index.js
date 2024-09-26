document.addEventListener('DOMContentLoaded', () => {
  const gradesForm = document.querySelector('#grades-form');
  const yourGrade = document.querySelector('#your-grade');
  const gradeList = document.querySelector('#grade-list');

  const grades = [14, 9, 13, 15, 18];

  /**
   * Функция нахождения общего количества оценок
   * @param {array} grades - массив оценок
   */
  function getNumberOfGrades(grades) {
    return grades.length;
  }

  /**
   * Функция нахождения первой оценки
   * @param {array} grades - массив оценок
   */
  function getFirstGrade(grades) {
    return grades[0];
  }

  /**
   * Функция нахождения последней оценки
   * @param {array} grades - массив оценок
   */
  function getLastGrade(grades) {
    return grades.at(-1);
  }

  /**
   * Функция нахождения средней оценки
   * @param {array} grades - массив оценок
   */
  function getAverageGrade(grades) {
    if (grades.length === 0) return 0;
    return grades.reduce((sum, num) => (sum += num), 0) / grades.length;
  }

  /**
   * Функция удаления оценки
   */
  function handleDeleteClick(event) {
    console.log(event);
    const index = event.currentTarget.dataset.index;
    console.log('index', index);

    grades.splice(index, 1); // удаляем оценку по индексу в кол-ве 1 оценки
    updateGradesHistory(grades); // Обновили историю
    renderTable(grades); // показываем в таблице актуальные данные
  }

  /**
   * Функция редактирования оценок
   */
  function handleEditClick(event) {
    const index = event.currentTarget.dataset.index;
    const newGrade = prompt('Enter you new grade:');

    if (newGrade !== null && newGrade !== '') {
      grades[index] = Number.parseInt(newGrade, 10);
      updateGradesHistory(grades); // Обновили историю
      renderTable(grades); // показываем в таблице актуальные данные
    }
  }

  /**
   * Функция для отрисовки истории оценок
   * @param {array} grades - массив оценок
   */
  function updateGradesHistory(grades) {
    if (gradeList) {
      gradeList.innerHTML = '';

      grades.forEach((grade, index) => {
        const listItemHTML = `
            <li>
                <span>${grade}</span>
    
                <!-- Кнопка редактирования -->
                <div class="btn-icon" data-variant="ghost" data-index="${index}">
                    <div data-icon="icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13H15V14H1V13ZM12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1L10.9 1.3C10.5 0.9 9.9 0.9 9.5 1.3L2 8.8V12H5.2L12.7 4.5ZM10.2 2L12 3.8L10.5 5.3L8.7 3.5L10.2 2ZM3 11V9.2L8 4.2L9.8 6L4.8 11H3Z" fill="#161616"/>
                        </svg>
                    </div>
                </div>
    
                <!-- Кнопка удаления -->
                <div class="btn-icon" data-variant="danger-ghost" data-index="${index}">
                    <div data-icon="icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1H6V2H10V1ZM2 3V4H3V14C3 14.6 3.4 15 4 15H12C12.6 15 13 14.6 13 14V4H14V3H2ZM4 14V4H12V14H4ZM6 6H7V12H6V6ZM10 6H9V12H10V6Z" fill="#161616"/>
                        </svg>
                    </div>
                </div>
            </li>`;

        gradeList.insertAdjacentHTML('beforeend', listItemHTML);

        const editButtons = document.querySelectorAll('[data-variant="ghost"'); // получение всех кнопок редактирования
        const deleteButtons = document.querySelectorAll('[data-variant="danger-ghost"'); // получение всех кнопок удаления

        deleteButtons.forEach((button) => {
          button.addEventListener('click', handleDeleteClick); // подписываемся на событие для каждой кнопки
        });

        editButtons.forEach((button) => {
          button.addEventListener('click', handleEditClick); // подписываемся на событие для каждой кнопки
        });
      });
    }
  }

  /**
   * Функция для отрисовки таблицы
   * @param {array} grades - массив оценок
   */
  function renderTable(grades) {
    const tbody = document.querySelector('#stats-table tbody');

    if (tbody) {
      tbody.innerHTML = `
            <tr>
                <td>${getNumberOfGrades(grades)}</td>
                <td>${getFirstGrade(grades)}</td>
                <td>${getLastGrade(grades)}</td>
                <td>${getAverageGrade(grades)}</td> 
           </tr>`;

      updateGradesHistory(grades);
    }
  }

  if (gradesForm) {
    gradesForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newGrade = Number.parseInt(yourGrade.value, 10);

      grades.push(newGrade);
      yourGrade.value = '';
      renderTable(grades);
    });
  }

  renderTable(grades);
});
