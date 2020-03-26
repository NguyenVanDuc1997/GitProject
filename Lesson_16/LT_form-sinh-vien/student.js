function student(studentID,studentName,studentBirth,studentAdress,studentLog) {
    this.studentID=studentID;
    this.studentName=studentName;
    this.studentBirth=studentBirth;
    this.studentAdress=studentAdress;
    this.studentLog=studentLog;

    this.show=function () {
        document.getElementById('num').innerHTML=this.studentID;
        document.getElementById('masv').innerHTML=this.studentID;
        document.getElementById('tensv').innerHTML=this.studentName;
        document.getElementById('namsinh').innerHTML=this.studentBirth;
        document.getElementById('quequan').innerHTML=this.studentAdress;
        document.getElementById('tendangnhap').innerHTML=this.studentLog;
    }
}