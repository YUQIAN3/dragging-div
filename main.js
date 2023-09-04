var div=document.createElement('div')
div.className='xxx'
div.style.top='auto'
document.body.appendChild(div)  
//鼠标点击div可以移动
// document.body.onclick=function(el){
//   console.log(el)
//   console.log(el.clientX)
//   console.log(el.clientY)
//   div.style.top=el.clientY+'px';
//   div.style.left=el.clientX+'px'
// }


//鼠标拖动div可以动
var lastX;
var lastY;
var dragging=false;
div.onmousedown=function(e){
  lastX=e.clientX;
  lastY=e.clientY; 
  dragging = true;
  console.log(dragging)
}
document.onmousemove=function(el){
  if(dragging===true){
   var deltaX=el.clientX-lastX;
   var deltaY=el.clientY-lastY;
   var top=parseInt(div.style.top)||0;
   var left=parseInt(div.style.left)||0;
    div.style.top=top+deltaY+'px';
    div.style.left=left+deltaX+'px';
    lastX=el.clientX;
     lastY=el.clientY;
  }
}
div.onmouseup=function(){
  dragging =false;
}