// function deretKaskus(){
//     var uwais = []
//         for(var i=0; i<10; i++);{

//             uwais.push(i)    
//         }
//         console.log(uwais)
//     }
//     deretKaskus();



//     function deretKaskus(){

//         var hasil=[];
//         for(var i=3; i<=30; i+=3){       
//         hasil.push(i);
//         }
//         return hasil;
//     }
//     console.log(deretKaskus());



//     function deretKaskus(){

//         var hasil=[];
//         for(var i=3; i<=30; i+=3){       
//         hasil.push(i);
//         }
//         return hasil;
//     }
//     //console.log(deretKaskus());
// var a= 30;

//     if(a%5 ==0){
//         console.log("KAS")
//     }else if(a%6 ==0){
//         console.log("KUS")
//     }else if(a%5 ==0 && a%6 ==0){
//         console.log("KASKUS")
//     }

// function deretKaskus(){

//     var hasil=[];
//     for(var i=3; i<=30; i+=3){

//     hasil.push(i);
//     }
//     return hasil;
// }
// //console.log(deretKaskus());
// var a= 30;


// if(a%5 ==0 && a%6 ==0){
// console.log("KASKUS")
// }else if(a%5 ==0){
//     console.log("KAS")
// }else if(a%6 ==0){
//     console.log("KUS")
// }



function deretKaskus() {

    var hasil = [];
    for (var i = 3; i <= 30; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) {
            console.log("KASKUS")
        } else if (i % 5 == 0) {
            console.log("KAS")
        } else if (i % 6 == 0) {
            console.log("KUS")
        }
        hasil.push(i);
    }
    return hasil;
}
//console.log(deretKaskus());



//     function deretKaskus(){

//         var hasil=[];
//         for(var i=3; i<=30; i+=3){
//                 if(i%5 ==0 && i%6 ==0){
//                     hasil.push("KASKUS")
//                 }else if(i%5 ==0){
//                     hasil.push("KAS")
//                 }else if(i%6 ==0){
//                     hasil.push("KUS")
//                 }else{
//                     hasil.push(i); 
//                 }
//         //hasil.push(i);
//         }
//         return hasil;
//     }
//     console.log(deretKaskus());