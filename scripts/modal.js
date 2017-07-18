function modalWindow(obj) {
  if (typeof obj == 'object') {
    obj.hide = obj.hide || false;
    obj.fast = obj.fast || false;
    var elems = document.querySelectorAll(obj.el||null);
    for(var i=0;i<elems.length;i++) {
      elem = elems[i];
      elem.style.position = 'fixed';
      elem.style.top = obj.top || '';
      elem.style.right = obj.right || '';
      elem.style.bottom = obj.bottom || '';
      elem.style.left = obj.left || '';
      elem.style.width = obj.width || 'auto';
      elem.style.height = obj.height || 'auto';
      elem.style.opacity = 0;
      elem.style.display = 'block';
     
      for(var i=0;i<elem.children.length;i++) {
        if (elem.children[i].className == 'exit') {
          elem.children[i].addEventListener('click', function(event){
            event = event || window.event;
            if (!!obj.hide) {
              event.target.parentNode.style.display = 'none';
            } else {
              event.target.parentNode.remove();
            }
          });
        }
      }

    if (!!obj.fast) {
      elem.style.opacity = 1;
    } else {
      var timer = setInterval(function(){
        var opacity = getComputedStyle(elem).opacity;
        elem.style.opacity = parseFloat(opacity)+0.01;
        if (parseFloat(opacity) >= 1.0) {
          clearInterval(timer);
          return;
        } 
      }, obj.time || 50);
    }

    }
  } else {
    throw ("modalWindow() arguments should typeof Object");
  }
}