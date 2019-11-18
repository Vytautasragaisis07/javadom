function find() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var str = "<table>";
    for (var i=0; i<x; i++){
        str +="<tr>";
        for (var j=0; j<y; j++) {
            str +="<td>"+j+"</td>";
        }
        str+="</tr>";
    }
    str+="</table>";
    document.getElementById("msg").innerHTML=str;
}