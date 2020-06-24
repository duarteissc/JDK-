var misplatillospreparacion=[];
$(document).ready(function() {  
    var uid = localStorage.getItem("uid"); 
    db.collection("compras").where("estado", "==",2).where("uidrepartidor", "==",uid).onSnapshot(function(querySnapshot) { 
        misplatillospreparacion=[];
        misplatillospreparacion=querySnapshot  
        document.getElementById('listapedidospreparacion').innerHTML="";
        querySnapshot.forEach(function(doc) {    
            db.collection('Restauranes').doc(doc.data().docidrestaurante).get().then( restaurante => {   
                db.collection("Restauranes").doc(doc.data().docidrestaurante).collection("Platillos").doc(doc.data().docidplatillo).get()
                .then(platillo => { 
                    //console.log(restaurante.data());
                    //console.log(platillo.data()); 
                    var tr = document.createElement("tr"); 
                    tr.setAttribute("id", "tr" + platillo.id); 
                    document.getElementById('listapedidospreparacion').appendChild(tr); 
    
                    var tdnombreproducto = document.createElement("td");  
                    tdnombreproducto.textContent = platillo.data().nombre;
                    document.getElementById("tr" + platillo.id).appendChild(tdnombreproducto); 
    
                    var tdnombrerestaurante = document.createElement("td");  
                    tdnombrerestaurante.textContent = restaurante.data().nombre_restaurante;
                    document.getElementById("tr" + platillo.id).appendChild(tdnombrerestaurante);  

                    var tdplatillodescripcion = document.createElement("td");  
                    tdplatillodescripcion.textContent = platillo.data().descripcion;
                    document.getElementById("tr" + platillo.id).appendChild(tdplatillodescripcion); 

                    var tdplatilloprecio = document.createElement("td");  
                    tdplatilloprecio.textContent = "$"+platillo.data().precio;
                    document.getElementById("tr" + platillo.id).appendChild(tdplatilloprecio);  
                });
            });

        });
        
    }); 
});  
auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      db.collection('cuentasusuarios').doc(user.uid).get().then( doc =>{ 
        document.getElementById("username").innerHTML=doc.data().nombre +" "+doc.data().apellido;
        document.getElementById("welcometext").innerHTML="Bienvenid@  "+doc.data().nombre.toUpperCase();
     });  
    } else {
        // User is signed out.
        window.location.href = "registroRepartidor.html"; 
    }
});
function cerrarSesion(){
    var uid = localStorage.getItem("uid");
    auth.signOut().then(()=>{  
        localStorage.removeItem("uid");
        return db.collection('cuentasusuarios').doc(uid).update({ 
            "estado":parseInt(0)
        });  
    }).then(()=>{
        window.location.href = "login.html"; 
    });
}