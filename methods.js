const student = {
    name: 'Nursat binte rahman',
    money: 500,
    study: 'English',
    subject: ['English 1st paper', 'English 2nd paper'],
    exam: function () {
        return this.name + ' is prepration in exam';

    }

}
// console.log(student);
const output = student.exam();
console.log(output);