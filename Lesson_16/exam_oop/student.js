function student(studentID, firstName, lastName, className, mathMark, physicMark, chemisMark) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.className = className;
    this.mathMark = mathMark;
    this.physicMark = physicMark;
    this.chemisMark = chemisMark;

    this.getStudentID = function () {
        return this.studentID;
    }

    this.getAverageMark = function () {
        return (this.mathMark + this.physicMark + this.chemisMark) / 3;
    }

    this.show = function () {
        document.write("Họ tên:" + this.lastName + " " + this.firstName + " " + this.studentID + "<br>");
        document.write("Lớp:" + this.className + " " + "<br>");
        document.write("Điểm toán:" + this.mathMark + " " + "<br>");
        document.write("Điểm lý:" + this.physicMark + " " + "<br>");
        document.write("Điểm hóa:" + this.chemisMark + " " + "<br>");
        document.write("Điểm trung bình:" + this.getAverageMark() + " " + "<br><br><br>");
    }
}