
// var total = box1roll1 + box2roll2;
var makechancenumber;
function getnumber(){

    // var winnumber = document.getElementById("winnumberchecked");
    // for (var i = 0; i<=12; i++){
    //     var count = 0;
    //     var winmath = Math.floor(Math.random() *11 +2);
    //     for(var j=0; j<winmath; j++){
    //         count++
    //     }
    // }
    // winnumber.innerHTML = " "+count;

    makechancenumber = Math.floor(Math.random()*12 +1);
    var winnumber =document.getElementById("winnumberchecked");
    // console.log(makechancenumber);
    if(makechancenumber >=2 && makechancenumber <=12){
        winnumber.innerHTML = " "+makechancenumber;
        document.getElementById("winnumber").disabled=true;
        document.getElementById("winnumber").style = "background-color: #black; color: red";
    }
 
}


var reamingchancenumber = 10;
function diceroll(){    
    // var box1roll1 = Math.floor(Math.random() *6 +1);
    // var box2roll2 = Math.floor(Math.random() *6 +1);
    // box1.style = "background-image: url(Dice"+box1roll1+".jpg)"
    // console.log(box1);
    // box2.style = "background-image: url(Dice"+box2roll2+".jpg)"
    // console.log(box2);
    // var total = box1roll1 + box2roll2;
   
    // result.innerHTML = total;
    
     var box1 = document.getElementById("imgbox1");
     var box2 = document.getElementById("imgbox2");
     var youwon = document.getElementById("wonresult");
     var reamingchance = document.getElementById("reaming");
     var e = document.getElementById("winnumberchecked").innerText;
    // console.log(e);
    if(isNaN(e)){
        alert("Please Click on Win Number");
    }else{
        var box1roll1 = Math.floor(Math.random() *6 +1);
        var box2roll2 = Math.floor(Math.random() *6 +1);
        box1.style = "background-image: url(Dice"+box1roll1+".jpg)"
        // console.log(box1);
        box2.style = "background-image: url(Dice"+box2roll2+".jpg)"
    //  console.log(box2);
        var total = box1roll1 + box2roll2;
        // console.log(total);
        if(makechancenumber == total){
            youwon.innerHTML = "You Won";
            document.getElementById("rollbtn").disabled=true;
            document.getElementById("rollbtn").style = "background-color: #black; color: red";
            document.getElementById("wongame").style = "background-image: url(giphy.gif);";
        }
        else{
            youwon.innerHTML = " ";
            if(reamingchancenumber>0){
                reamingchancenumber--;
                reamingchance.innerHTML = reamingchancenumber;
                // console.log(reamingchancenumber);
             }else{
                document.getElementById("rollbtn").disabled=true;
                document.getElementById("rollbtn").style = "background-color: #black; color: red";
             }
        }

    }
}

function resetbtn(){
    document.getElementById("winnumberchecked").innerHTML= " &ndash;";
    document.getElementById("reaming").innerHTML= " &ndash;";
    document.getElementById("rollbtn").disabled=false;
    document.getElementById("winnumber").disabled=false;
    reamingchancenumber = 10;
    document.getElementById("wongame").style = " ";
    document.getElementById("wonresult").innerHTML = " ";
    var box1 = document.getElementById("imgbox1");
    var box2 = document.getElementById("imgbox2");
    box1.style = "background-image: url(Dice1.jpg);";
    box2.style = "background-image: url(Dice1.jpg);";
    document.getElementById("rollbtn").style = "background-color: to left,rgba(0, 128, 0, 0.527),rgba(255, 0, 0, 0.55),rgba(0, 0, 255, 0.486); color: white";
    document.getElementById("winnumber").style = "background-color: to left,rgba(0, 128, 0, 0.527),rgba(255, 0, 0, 0.55),rgba(0, 0, 255, 0.486); color: white";
}
