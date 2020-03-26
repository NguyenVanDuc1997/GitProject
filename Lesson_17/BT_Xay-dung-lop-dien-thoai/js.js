class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.status = true;
        this.msg = "";
        this.inbox = [];
        this.outbox = [];
    }

    writeMsg(value) {
        this.msg = value;
    }

    receiveMsg(name, msg) {
        this.inbox.push(name + ":" + msg);
    }

    changeBattery() {
        this.battery--;
        console.log(this.battery);
        return this.battery;
    }


    sendMsg(mobile) {
        mobile.receiveMsg(this.name, this.msg);
        this.outbox.push(this.msg);
        this.changeBattery();
        document.getElementById('iphone-battery').innerHTML = mobile1.battery;
        document.getElementById('samsung-baterry').innerHTML = mobile2.battery;
    }


    changeStatus() {
        if (this.status == true) {
            this.status = false;
            alert("Máy " + this.name + " đã tắt!");
        } else {

            this.status = true;
            alert("Máy " + this.name + " đã bật!")
        }
    }


    charging(m, b, id) {
        if (b < 100)
            b++
        document.getElementById("'" + id + "'").innerHTML = b + "%";
        setTimeout(function () {
            m.charging(m, b, id);
        }, 5000)
    }
}


let mobile1 = new Mobile('iphone');
let mobile2 = new Mobile("SamSung");


function sendMess(m1, m2) {
    m1.sendMsg(m2);
    document.getElementById('iphone-inbox').innerHTML = mobile1.inbox;
    document.getElementById('iphone-outbox').innerHTML = mobile1.outbox;
    document.getElementById('samsung-inbox').innerHTML = mobile2.inbox;
    document.getElementById('samsung-outbox').innerHTML = mobile2.outbox;
    document.getElementById('iphone-msg').value = "";
    document.getElementById('samsung-msg').value = "";
}

function power(m) {
    m.changeStatus();
    if (this.status == true) {
        console.log("true")
    } else console.log("false");
}



