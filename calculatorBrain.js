var result = document.getElementById("result");
var operacao
var n1 = 0, n2 = 0

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked(){
    result.innerHTML = "0";
    n1=0;
    n2=0;
}

function onEqualsClicked(){
    n2 = result.innerHTML
    if(operacao == "/" && n2>0){
        result.innerHTML = n1 / n2
    }
    else{
        (result.innerHTML = "Erro")
        if(operacao == "+"){
            result.innerHTML = parseFloat(n1) + parseFloat(n2)
        }
        else{
            if(operacao == "-"){
                result.innerHTML = n1 - n2
            }else{
                if(operacao == "*"){
                    result.innerHTML = n1 * n2
                }
            }
        }
    }    
}

function onDivideClicked(){
    n1 = result.innerHTML
    operacao = "/"
    result.innerHTML = " "
}

function onAddClicked()
{
    n1 = result.innerHTML
    operacao = "+"
    result.innerHTML = " "
}

function onSubtractClicked(){
    n1 = result.innerHTML
    operacao = "-"
    result.innerHTML = " "
}

function onMultiplyCliked(){
    n1 = result.innerHTML
    operacao = "*"
    result.innerHTML = " "
}

