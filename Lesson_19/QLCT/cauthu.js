let data=[];
function footballPlayer(fpID,fpName,fpBirth,fpLegs,fpPosition,fpPositionPlus,fpAvatar,fpHeight,fpWeight,fpInjury) {
    this.fpID=fpID;
    this.fpName=fpName;
    this.fpBirth=fpBirth;
    this.fpLegs=fpLegs;
    this.fpPosition=fpPosition;
    this.fpPositionPlus=fpPositionPlus;
    this.fpAvatar=fpAvatar;
    this.fpHeight=fpHeight;
    this.fpWeight=fpWeight;
    this.fpInjury=fpInjury;

    //let data=[];
    this.show=function () {
      //  let listplayer= this.data;
        let list="<tr><td>"+ this.fpID +"</td>"+"<td>"+ this.fpName+"</td>"+"<td>"+ this.fpLegs+"</td>"+"<td>"+ this.fpPosition+"</td>"
            +"<td>"+ this.fpHeight+"</td>"+"<td>"+ this.fpWeight+"</td>"+"<td>"+ this.fpInjury+"</td>"
       document.getElementById('tableList').innerHTML=list;
    }
}