function Siguiente1() //Muestra el segundo texto y esconde el primero del archivo "1.html"
{
    document.getElementById("primeraInfoProfesorFoto").style.display="block";
    document.getElementById("primeraInfoAgenteFoto").style.display="none";
    document.getElementById("primeraInfoProfesorTexto").style.display="block";
    document.getElementById("primeraInfoAgenteTexto").style.display="none";
    document.getElementById("continuar1").style.display="none";
    document.getElementById("continuar2").style.display="block";

};

function verificarA1() //Verifica que la clave del acertijo 1 sea la correcta
{ 

    var rta=document.getElementById("inputClave1").value;
    var clave=4458;
    console.log(rta);
    if(rta==clave)
    {
        document.getElementById("A1Incorrecto").style.display="none";
        document.getElementById("A1Correcto").style.display="block";

    }else
    {
        document.getElementById("A1Incorrecto").style.display="block";
        document.getElementById("A1Correcto").style.display="none";
        rta.innerHTML="";

    } ;


};

function comenzarA2() 
{
// esconde la advertencia y muestra el acertijo 2.
   

    document.getElementById("txtProfe3").style.display="none";
    document.getElementById("btnComenzarA2").style.display="none";
    document.getElementById("txtProfe32").style.display="block";
    document.getElementById("Acertijo2").style.display="block";
    document.getElementById("Clave2").style.display="block";
    document.getElementById("inputClave2").style.display="block";
    document.getElementById("verificarClave2").style.display="block";
    document.getElementById("aclaracionA2").style.display="block";
    document.getElementById("logoPistasA2").style.display="block";
    
    
   
};
function desaparecerProfeA32()
{
    document.getElementById("txtProfe32").style.display="none";
};

function verificarA2() //Verifica que la clave del acertijo 2 sea la correcta
{ 

    var rta=document.getElementById("inputClave2").value;
    var clave="a4b2c1d3";
    console.log(rta);
    if(rta==clave)
    {
        document.getElementById("A2Incorrecto").style.display="none";
        document.getElementById("A2Correcto").style.display="block";

    }else
    {
        document.getElementById("A2Incorrecto").style.display="block";
        document.getElementById("A2Correcto").style.display="none";
        rta.innerHTML="";

    } ;


};

function siguienteA3(){
    document.getElementById("txtProfe43").style.display="none";
    document.getElementById("txtProfe44").style.display="block";
    document.getElementById("btnSiguienteA3").style.display="none";
    document.getElementById("esconderA3").style.display="block";


};

function verificarA3() //Verifica que la clave del acertijo 2 sea la correcta
{ 

    var rta=document.getElementById("inputClave3").value;
    var clave="estante";
    console.log(rta);
    if(rta==clave)
    {
        document.getElementById("A2Incorrecto").style.display="none";
        document.getElementById("A2Correcto").style.display="block";

    }else
    {
        document.getElementById("A2Incorrecto").style.display="block";
        document.getElementById("A2Correcto").style.display="none";
        rta.innerHTML="";

    } 


};

function siguienteA4(){

    document.getElementById("txtProfe45").style.display="none";
    document.getElementById("txtProfe46").style.display="block";
    document.getElementById("btnSiguienteA4").style.display="none";
    document.getElementById("rtaFinal").style.display="block";


};

function verificarFinal(){
    var rta=document.getElementById("inputClaveFinal").value;
    var clave="gracias por jugar";
    console.log(rta);
    if(rta==clave)
    {
        document.getElementById("antesDelCertificado").style.display="none";
        document.getElementById("despDelCertificado").style.display="block";

    }else
    {
        document.getElementById("A2Incorrecto").style.display="block";
        document.getElementById("A2Correcto").style.display="none";
        rta.innerHTML="";

    } 
};

var pistas1=1;
var pistas2=1;
var pistas3=1;
var pistas4=1;
var pistas5=1;

function mostrarPistasA1()
{
    pistas1 *= -1;
    if (pistas1 == -1)
    {
        document.getElementById("Sub1.1").style.display="block";
        document.getElementById("Sub1.2").style.display="block";
        document.getElementById("Sub1.3").style.display="block";
        document.getElementById("Sub1.4").style.display="block";
        document.getElementById("Sub1.5").style.display="block";
    } else {
        document.getElementById("Sub1.1").style.display="none";
        document.getElementById("Sub1.2").style.display="none";
        document.getElementById("Sub1.3").style.display="none";
        document.getElementById("Sub1.4").style.display="none";
        document.getElementById("Sub1.5").style.display="none";

    };
    

};

function mostrarPistasA2()
{
    pistas2 *= -1;

    if(pistas2==-1)
    {
        document.getElementById("Sub2.1").style.display="block";
        document.getElementById("Sub2.2").style.display="block";
        document.getElementById("Sub2.3").style.display="block";
        document.getElementById("Sub2.4").style.display="block";
        document.getElementById("Sub2.5").style.display="block";
        document.getElementById("Sub2.6").style.display="block";
    }else{
        document.getElementById("Sub2.1").style.display="none";
        document.getElementById("Sub2.2").style.display="none";
        document.getElementById("Sub2.3").style.display="none";
        document.getElementById("Sub2.4").style.display="none";
        document.getElementById("Sub2.5").style.display="none";
        document.getElementById("Sub2.6").style.display="none";
    }
    

};

function mostrarPistasA3()
{
    pistas3 *= -1;
    if(pistas3==-1)
    {
        document.getElementById("Sub3.1").style.display="block";
        document.getElementById("Sub3.2").style.display="block";
        document.getElementById("Sub3.3").style.display="block";
        document.getElementById("Sub3.4").style.display="block";
        document.getElementById("Sub3.5").style.display="block";
    }else{
        document.getElementById("Sub3.1").style.display="none";
        document.getElementById("Sub3.2").style.display="none";
        document.getElementById("Sub3.3").style.display="none";
        document.getElementById("Sub3.4").style.display="none";
        document.getElementById("Sub3.5").style.display="none";

    }
    

};

function mostrarPistasA4()
{
    pistas4 *= -1;

    if(pistas4==-1)
    {
        document.getElementById("Sub4.1").style.display="block";
        document.getElementById("Sub4.2").style.display="block";
        document.getElementById("Sub4.3").style.display="block";
        document.getElementById("Sub4.4").style.display="block";
        document.getElementById("Sub4.5").style.display="block";
    }else{
        document.getElementById("Sub4.1").style.display="none";
        document.getElementById("Sub4.2").style.display="none";
        document.getElementById("Sub4.3").style.display="none";
        document.getElementById("Sub4.4").style.display="none";
        document.getElementById("Sub4.5").style.display="none";

    }


}

function mostrarPistasA5()
{
    pistas5 *= -1;
    if(pistas5==-1)
    {
        document.getElementById("Sub5.1").style.display="block";
        document.getElementById("Sub5.2").style.display="block";
        document.getElementById("Sub5.3").style.display="block";
        document.getElementById("Sub5.4").style.display="block";
        document.getElementById("Sub5.5").style.display="block";
        document.getElementById("Sub5.6").style.display="block";
    }else{
        document.getElementById("Sub5.1").style.display="none";
        document.getElementById("Sub5.2").style.display="none";
        document.getElementById("Sub5.3").style.display="none";
        document.getElementById("Sub5.4").style.display="none";
        document.getElementById("Sub5.5").style.display="none";
        document.getElementById("Sub5.6").style.display="none";
    }

};

var infoPistas=1;
function mostrarInfoPistas(desdeDonde)
{
    infoPistas*=-1;
    if(infoPistas==-1)
    {
        document.getElementById(desdeDonde).style.display="block";
    }else document.getElementById(desdeDonde).style.display="none";
    


}
