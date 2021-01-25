window.onload = function(){
    let who = ['the dog ','my granma ','his turtle ','my bird '];
    let what = ['eat ','pissed ','crushed ','broked '];
    let when = ['before the class ','right in time ','when I finished ','during my lunch ','while I was praying ']; 
    let action = ['ate ','peed ','crushed ','broke ']; 
    var quien = Math.floor((Math.random() * who.length));
    var que = Math.floor((Math.random() * what.length));
    var cuando = Math.floor((Math.random() * when.length));
    var accion = Math.floor((Math.random() * action.length));
    document.querySelector("#excusa").innerHTML = who[quien]+what[que]+when[cuando]+action[accion]
}