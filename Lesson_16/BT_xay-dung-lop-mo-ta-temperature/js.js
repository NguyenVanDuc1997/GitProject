let Temperature = function (c) {

    this.c=c;
    this.cToF = function () {
        if (this.c > -273)
            return (this.c * 1.8) + 32 + 'F';
        else return "Nhiệt độ không đúng"
    }
    this.cToK = function () {
        if (this.c > -273)
            return this.c + 273.15 + 'K';
        else return "Nhiệt độ không đúng"
    }
}

let temperature = new Temperature(4);
console.log(temperature.cToF());
console.log(temperature.cToK());