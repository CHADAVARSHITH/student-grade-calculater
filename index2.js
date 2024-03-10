const gradeForm = document.getElementById('gradeForm');
        const gradeList = document.getElementById('gradeList');
        const averageGrade = document.getElementById('averageGrade');

        let grades = [];

        gradeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const assignment = document.getElementById('assignment').value;
            const grade = parseInt(document.getElementById('grade').value);

            const gradeItem = document.createElement('li');
            gradeItem.textContent = `${assignment}: ${grade}`;
            gradeList.appendChild(gradeItem);

            grades.push(grade);

            const average = calculateAverage(grades);
            averageGrade.textContent = `Average Grade: ${average}`;
        });

        function calculateAverage(array) {
            const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const average = sum / array.length;
            return average.toFixed(2);
        }