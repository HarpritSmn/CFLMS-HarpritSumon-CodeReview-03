function calc(){
    var name    =   document.getElementById("name").value;
    var ps      =   document.getElementById("horsePower").value;
    var age     =   document.getElementById("age").value;
    var select  =   document.getElementById("select").value;
    //console.log(select);


 switch(select){
            case 'Austria':
            var betrag = ps*100/age +50;
            break;
            case 'Hungary':
            var betrag = ps*120/age+100;
            break;
            case 'Greece':
            var betrag = ps*150/(age+3)+50;
            break;
            default:
            document.getElementById("result").style.color="blue";
        }
        document.getElementById("result").innerHTML="The insurance costs "+betrag +"€";

}
