/**
 * Created by MT-2016 on 05-Nov-16.
 */
//for(i = 0; i < 10 ; i++){
//    for(x = 0; x < i ; x++){
//        document.getElementById("demo").innerHTML += " X "
//    }
//    document.getElementById("demo").innerHTML +=  "<br>"
//    //write(" 0"+ "<br>")
//
//}
//for(i = 10; i > 0 ; i--){
//    for(x = 1; x < i ; x++){
//        //document.write(" X ")
//        document.getElementById("demo").innerHTML += " X "
//
//    }
//    document.getElementById("demo").innerHTML += " "+ "<br>"
//}

second = 0;
function time (){
    document.getElementById("demo").innerHTML = second++
}
setInterval(time , 1000);





milisec = 0;

setInterval(function(){
    document.getElementById("stopWatchTime").innerHTML = milisec++
} , 100);

