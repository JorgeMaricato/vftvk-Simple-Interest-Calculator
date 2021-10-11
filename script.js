function compute()
{
    var principal = parseInt(document.getElementById("principal").value) || 0;

    if (principal <= 0 ) {
        alert("Insert a positive \"Amount\", please!");
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
    
        var amount = parseFloat(interest);
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>\<br\>You will receive an amount of \<mark\>"+amount+"\<\/mark\>,\<br\>in the year \<mark\>"+year+"\<\/mark\>\<br\>";
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}