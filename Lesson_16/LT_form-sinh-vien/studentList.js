const MAX = 10;

function StudentList() {
    this.studentList = new Array(MAX);

    this.initStudentList = function () {
        let studentID = Math.random().toString(36).substring(10);
        let studentName = document.getElementById('stuName').value;
        let studentBirth = document.getElementById('stuBirth').value;
        let studentAdress = document.getElementById('stuAdress').value;
        let studentLog = document.getElementById('stuLog').value;

        let stu = new student(studentID, studentName, studentBirth, studentAdress, studentLog);
        this.studentList = stu;
    }

    this.showStudentList = function () {
        this.studentList.show();
    }
}