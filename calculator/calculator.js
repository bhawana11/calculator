let total=0;
let opval='';
function calculate(num)
{
    let result=document.getElementById("txtDisplay");
    result.value=result.value+num;
}
function clearData(){
    document.getElementById("txtDisplay").value='';
}
function operator(optr){
    opval=optr;
    total=document.getElementById("txtDisplay").value;
    clearData();
    console.log(opval,total);
}
function equal(){
    let result=0;
    let cvalue=eval(document.getElementById("txtDisplay").value);
    let pvalue=eval(total);
    switch(opval){
        case '+':
                result=cvalue+pvalue;
        break;
        case '-':
            result=cvalue-pvalue;
        break;
        case '*':
            result=cvalue*pvalue;
        break;
        case '/':
            if(!(cvalue<=0))
                result=eval(pvalue/cvalue);
            else
                alert("Please prevent divide by zero");
        break;
        default:
            result="Invalid operation";
        }
        document.getElementById("txtDisplay").value=result;
}
function factorial()
{
    let num=document.getElementById("txtDisplay").value;
    let f=1;
    for(let i=1;i<=num;i++)
    {
        f=eval(f*i);
    }
    document.getElementById("txtDisplay").value=f;
}
function back()
{
    var result=document.getElementById("txtDisplay").value;
    document.getElementById("txtDisplay").value=result.substr(0,result.length-1);
}
function squareRoot()
{
    let result=eval(document.getElementById("txtDisplay").value);
    document.getElementById("txtDisplay").value=Math.sqrt(result);
}
function checkNum(evt)
			{
				var charcode=evt.which;
                alert(charcode);
				if (charcode > 31 && (charcode < 48 || charcode > 57))
				{
					alert("Enter numerals only in this field.");
					return false;
				}
				return true;
				
			}