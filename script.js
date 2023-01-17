

    function validar() {
        var palabras = document.getElementById("palabra").value;
        var regex = /^[a-zA-Z0-9 ]+$/;
            if(!palabras.match(regex)) {
                alert("Por favor, ingrese letras sin acentos o caracteres especiales.");
                document.getElementById("palabra").value = "";                
            } else{
                encriptar();
            }
    }

    function encriptar() {
        var palabras = document.getElementById("palabra").value;
        var chars = palabras.split("");
        var resultadoEncriptado ="";
        var boton = document.getElementById("copiar");

        for (var i = 0; i < chars.length; i++) {
            if (chars[i] == "a") {
            chars[i] = "ai";
            } else if (chars[i] == "e") {
            chars[i] = "enter";
            } else if (chars[i] == "i") {
            chars[i] = "imes";
            } else if (chars[i] == "o") {
            chars[i] = "ober";
            } else if (chars[i] == "u") {
            chars[i] = "ufat";          
            }                    
        }
        document.getElementById("resultado").style.background = "white";
        mensaje1.style.display = "none";
        mensaje2.style.display = "none";
        resultadoEncriptado = chars.join(""); 
        document.getElementById("palabra").value = "";
        document.getElementById("resultado").innerHTML = resultadoEncriptado;
        boton.style.display = "inline-block";
                    
    }

    function desencriptar() {
        var palabras = document.getElementById("palabra").value;
        var chars = palabras.split("");
        var resultadoDesencriptado = "";
        var contador = 0;
        var nueva = [];

        for (var i = 0; i < chars.length; i++){
            if (chars[i] == "a"){
            contador = i + 1;
                if (chars[contador] == "i"){
                    nueva[i] = "a";
                    i = contador;              
                }
            } else if (chars[i] == "e"){
                contador = i + 1;
                if (chars[contador] == "n"){
                    contador ++;
                    if (chars[contador] == "t"){
                        contador++;
                        if(chars[contador] == "e"){
                            contador++
                            if(chars[contador] == "r"){
                                nueva[i] = "e";
                                i = contador; 
                            }
                        }
                    }
                }
            } else if (chars[i] == "i"){
                contador = i + 1;
                if (chars[contador] == "m"){
                    contador ++;
                    if (chars[contador] == "e"){
                        contador ++;
                        if (chars[contador] == "s"){
                            nueva[i] = "i";
                            i = contador; 
                        }
                    }
                }
            } else if (chars[i] == "o"){
                contador = i + 1;
                if (chars[contador] == "b"){
                    contador ++;
                    if (chars[contador] == "e"){
                        contador ++;
                        if (chars[contador] == "r"){
                            nueva[i] = "o";
                            i = contador; 
                        }
                    }
                }
            } else if (chars[i] == "u"){
                contador = i + 1;
                if (chars[contador] == "f"){
                    contador ++;
                    if (chars[contador] == "a"){
                        contador ++;
                        if (chars[contador] == "t"){
                            nueva[i] = "u";
                            i = contador; 
                        }
                    }
                }
            } else {
                nueva[i] = chars[i];
            }                        
        } 
        
        resultadoDesencriptado = nueva.join("");
        document.getElementById("palabra").value = ""; 
        document.getElementById("resultado").innerHTML = resultadoDesencriptado;                 
    }

    function copiar(){
        var texto = document.getElementById("resultado");
        texto.select();
        texto.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

