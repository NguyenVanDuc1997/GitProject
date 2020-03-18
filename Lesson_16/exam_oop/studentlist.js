const MAX = 10;


function StudentList() {
    this.studentList = new Array(MAX);

    this.initStudentList = function () {
        for (let i = 0; i < MAX; i++) {
            let studentID = 'CG_' + i;
            let firstName = Math.random().toString(36).substring(10);
            let lastName = Math.random().toString(36).substring(10);
            let className = 'c0220' + Math.random().toString(36).substring(2);
            let mathMark = Math.floor(Math.random() * 10);
            let physicMark = Math.floor(Math.random() * 10);
            let chemisMark = Math.floor(Math.random() * 10);

            let sv = new student(studentID, firstName, lastName, className, mathMark, physicMark, chemisMark);

            this.studentList[i] = sv;
        }

    }

    this.showStudentList = function () {
        for (let i = 0; i < MAX; i++) {
            this.studentList[i].show();
        }
    }

    this.sortStudentList = function () {
        this.studentList.sort(function (sv1, sv2) {
            return sv1.getAverageMark() - sv2.getAverageMark();
        })
    }

}
