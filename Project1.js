function ne(){
var ip=document.getElementById('myInput');
var ul=document.getElementById('myUL');
var li=document.createElement('li');
var ans=ip.value;
li.setAttribute('id',ans);
var a=document.createTextNode(ans);
li.appendChild(a);
   
    var span=document.createElement('span');
    var txt=document.createTextNode("\u00D7");
    span.className='close';
    span.appendChild(txt);
    span.addEventListener('click',function(){
    li.remove();
    })
    if(ans === ''){
     alert("You should type something!");
    }
    else{
    li.appendChild(span);

ul.appendChild(li);
  }
}