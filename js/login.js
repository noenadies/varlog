$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});







//////////////7


 var config = {
    apiKey: "AIzaSyDDeEsPxBYxzisg4GDOpmYbHBLvIw6L_IY",
    authDomain: "mejorvargaslleras-4fd2e.firebaseapp.com",
    databaseURL: "https://mejorvargaslleras-4fd2e.firebaseio.com",
    projectId: "mejorvargaslleras-4fd2e",
    storageBucket: "mejorvargaslleras-4fd2e.appspot.com",
    messagingSenderId: "912759721594"
  };
  firebase.initializeApp(config);




var general;



unavesmensaje();


//subirdatos("user","cedula","33311111111");

unavesmensaje2("awebreg");

function login(){



//var nodo="user";





var celulard=document.getElementById("celular").value;

var noencontrado=true;

var cedulad=document.getElementById("cedula").value;
console.log(general);
for (var indice in general) {
	if(general[indice].cedula==cedulad &&  general[indice].whatsapp==celulard){
     
alert("encontrado");

//window.location.assign("https://www.w3schools.com")

window.location ="https://noenadies.github.io/titanic/";
//location.href = "http://www.webquequeremosver.com"; 
noencontrado=false;
	}
  //console.log("ind'" + indice + "'= " + general[indice]);
}
if(noencontrado){alert("no se  encontro registro");unavesmensaje2("webhome");}


}








function login2(){
//	unavesmensaje2("webhome");
registrar();
}




var urlregistrar="";
function registrar(){

unavesmensaje2("awebreg");
console.log("unre "+urlregistrar);
window.location=urlregistrar;
alert(urlregistrar);
}




function unavesmensaje()
{

//var c=String(cedu);
//var cl= String(celu);

  firebase.database().ref().child("user").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
var s=mi;// firebase.database().ref().child("user");

general=s;
console.log("un "+mi);
/*for (var indice in s) {
	if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
	}
  console.log("ind'" + indice + "'= " + s[indice]);
}
*/
 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}



function unavesmensaje2(id)
{

//var c=String(cedu);
//var cl= String(celu);

  firebase.database().ref().child(String(id)).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
//var s=mi;// firebase.database().ref().child("user");
urlregistrar=mi;
//general=s;

/*for (var indice in s) {
	if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
	}
  console.log("ind'" + indice + "'= " + s[indice]);
}
*/
 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}
