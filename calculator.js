

function ADD()
{
    const num1 = parseInt(document.getElementById("FN").value) || 0;
    const num2 = parseInt(document.getElementById("SN").value) || 0;
    document.getElementById("result").innerHTML=num1+num2;
}
function SUB()
{
    const num1 = parseInt(document.getElementById("FN").value) || 0;
    const num2 = parseInt(document.getElementById("SN").value) || 0;
    document.getElementById("result").innerHTML=num1-num2;
}
function MUL()
{
    const num1 = parseInt(document.getElementById("FN").value) || 0;
    const num2 = parseInt(document.getElementById("SN").value) || 0;
    document.getElementById("result").innerHTML=num1*num2;
}
function DIV()
{
    const num1 = parseInt(document.getElementById("FN").value) || 0;
    const num2 = parseInt(document.getElementById("SN").value) || 0;
    document.getElementById("result").innerHTML=num1/num2;
}
