function printerrorform(nameinput,error){
    parentnode=document.getElementsByName(nameinput)[0].parentNode.classList;
    parentnodevalue=document.getElementsByName(nameinput)[0].parentNode.classList.value;
    ///sucess
    if(error=="has-success"){ 
    if(parentnodevalue=="form-group"){
        parentnode.toggle("has-success")
    }else if(parentnodevalue=="form-group has-warning"){
        parentnode.replace("has-warning", "has-success");
    }else if(parentnodevalue=="form-group has-error"){
        parentnode.replace("has-error", "has-success");
    }else if(parentnodevalue=="form-group has-default"){
        parentnode.replace("has-default", "has-success");
    }else if(parentnodevalue=="iti iti--allow-dropdown"){
        parentnode.toggle("has-success");
    }else if(parentnodevalue=="iti iti--allow-dropdown has-warning"){
        parentnode.replace("has-warning", "has-success");
    }else if(parentnodevalue=="iti iti--allow-dropdown has-error"){
        parentnode.replace("has-error", "has-success");
    }else if(parentnodevalue=="iti iti--allow-dropdown has-default"){
        parentnode.replace("has-default", "has-success");
    }
    }
    ///warning 
    if(error=="has-warning"){ 
        if(parentnodevalue=="form-group"){
            parentnode.toggle("has-warning")
        }else if(parentnodevalue=="form-group has-success"){
            parentnode.replace("has-success", "has-warning");
        }else if(parentnodevalue=="form-group has-error"){
            parentnode.replace("has-error", "has-warning");
        }else if(parentnodevalue=="form-group has-default"){
            parentnode.replace("has-default", "has-warning");
        }else if(parentnodevalue=="iti iti--allow-dropdown"){
            parentnode.toggle("has-warning");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-success"){
            parentnode.replace("has-success", "has-warning");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-error"){
            parentnode.replace("has-error", "has-warning");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-default"){
            parentnode.replace("has-default", "has-warning");
        }
    }
    ///danger
    if(error=="has-error"){ 
        if(parentnodevalue=="form-group"){
            parentnode.toggle("has-error")
        }else if(parentnodevalue=="form-group has-success"){
            parentnode.replace("has-success", "has-error");
        }else if(parentnodevalue=="form-group has-warning"){
            parentnode.replace("has-warning", "has-error");
        }else if(parentnodevalue=="form-group has-default"){
            parentnode.replace("has-default", "has-error");
        }else if(parentnodevalue=="iti iti--allow-dropdown"){
            parentnode.toggle("has-error");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-success"){
            parentnode.replace("has-success", "has-error");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-warning"){
            parentnode.replace("has-warning", "has-error");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-default"){
            parentnode.replace("has-default", "has-error");
        } 
    }
    ///default
    if(error=="has-default"){ 
        if(parentnodevalue=="form-group"){
            parentnode.toggle("has-default")
        }else if(parentnodevalue=="form-group has-success"){
            parentnode.replace("has-success", "has-default");
        }else if(parentnodevalue=="form-group has-warning"){
            parentnode.replace("has-warning", "has-default");
        }else if(parentnodevalue=="form-group has-error"){
            parentnode.replace("has-error", "has-default");
        }else if(parentnodevalue=="iti iti--allow-dropdown"){
            parentnode.toggle("has-default");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-success"){
            parentnode.replace("has-success", "has-default");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-warning"){
            parentnode.replace("has-warning", "has-default");
        }else if(parentnodevalue=="iti iti--allow-dropdown has-error"){
            parentnode.replace("has-error", "has-default");
        }  
    }

};
function reiniciarestilosform(){ 
    document.getElementById("error_nombre").innerHTML = ""; 
    printerrorform("nombre","has-default");
    document.getElementById("error_apellido").innerHTML = "";
    printerrorform("apellido","has-default"); 
    document.getElementById("error_correo").innerHTML = "";
    printerrorform("correo","has-default");
    document.getElementById("error_contrasena").innerHTML = "";
    printerrorform("contrasena","has-default");
    document.getElementById("error_rcontrasena").innerHTML = "";
    printerrorform("rcontrasena","has-default");
    document.getElementById("error_telefono").innerHTML = "";
    printerrorform("telefono","has-default");
    document.getElementById("error_direccion").innerHTML = "";
    printerrorform("direccion","has-default"); 
}