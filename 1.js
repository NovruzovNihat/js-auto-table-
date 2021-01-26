function cedvel(){
    let ss=Number(document.getElementById("yaz").value);
    let x="";
    let say=0;
    for(i=1;i<=ss;i++){
        x+=`<tr>`;
        for(j=1;j<=ss;j++){
         /*uld = i==j ? "*" : "";  diaqnal elementleri*/
           // uld = i+j==ss+1 ? "*" : ""; 
            x += `<td onclick=fun(${++say})>${say}</td>`;
        }
        x += `</tr>`;
    }
    document.getElementById("table").innerHTML = x;
}

function sel(){
    let y=document.getElementById("yaz").value;
    let opt= "";
    for(let  i=1; i<15; i+=2){
        opt+=`<option>${i}</option>`;
    }
    document.getElementById("yaz").innerHTML = opt;
}
sel();
function fun(u){
    alert(`siz ${u} sectiniz`)
}