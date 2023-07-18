var x=document.getElementById("input-value");
let answer=0;
let temp=0;
let f=0;
x.focus();

function sumFun(){
    let num1=parseFloat(x.value);   //pic first number
    answer+=num1;
    x.value="";
    x.focus();
    f=1;
}
function subtractionFun(){
    let num1=parseFloat(x.value);   //pic first number
    answer+=num1;
    x.value="";
    x.focus();
    f=2;
}
function multiplyFun(){
    let num1=parseFloat(x.value);   //pic first number
    answer+=num1;
    x.value="";
    x.focus();
    f=3;
}
function divisionFun(){
    let num1=parseFloat(x.value);   //pic first number
    answer+=num1;
    x.value="";
    x.focus();
    f=4;
}

function percentFun(){
    let num1=parseFloat(x.value);
    answer+=num1;
    // numberFun('%');
    // alert("go to equal fun");
    f=5;
    equalFun();
}

let f1=0;

function equalFun(){
    var inp=document.getElementById("input-value");
    let num2=parseFloat(inp.value);
    if(f===1)
    {
        answer+=num2;
    }
    else if(f===2)
    {
        answer-=num2;
    }
    else if(f===3)
    {
        answer*=num2;
    }
    else if(f===4)
    {
        answer/=num2;
    }
    else if(f===5)
    {
        answer/=100;
    }

    inp.value=answer;
    f1=1;
    // inp.value="ans=" + answer;
    // console.log("ans=",answer);
    // answer=0;
}

function acFun(){
    answer=0;
    x.value="";
    x.focus();
}

function numberFun(a)
{
    if(f1===0)
    {
        console.log(a);
        // pick the button element and add  
        // alert("add");
        x.value+=a;
        x.focus();
        return;
    }
    else if(f1===1)
    {
        // alert("hiii");
        x.value=""; 
        x.value+=a;  
        x.focus();
        f1=0;
    }
}

function signFun(){
    let num1=parseFloat(x.value);
    // answer+=num1;
    num1*=(-1);
    x.value=num1;
}