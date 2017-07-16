var modalWindow = function(obj) {
    var div = document.createElement('div');
    var exit = document.createElement('span');
    let exitext = document.createTextNode('X');
    exit.appendChild(exitext);
    exit.style.position = 'absolute';
    exit.style.right = '2%';
    exit.style.top = '2%';
    exit.addEventListener('click', function(event){
      event = event || window.event;
      event.target.parentNode.remove();
    });

    div.className = obj.class || 'modalWindow';
    // Position
    div.style.position = 'fixed';
    div.style.top = obj.top || null;
    div.style.right = obj.right || null;
    div.style.bottom = obj.bottom || null;
    div.style.left = obj.left || null;
    div.style.opacity = obj.opacity || 0;
    
    // Width and Height
    div.style.width = obj.width || "auto";
    div.style.height = obj.height || "auto";
    // Other options
    div.style.textAlign = obj.textAlign || 'left';

    if (!!obj.header) {
      const head = obj.header;
      var header = document.createElement('div');

      header.className = head.class || 'header';

      header.addEventListener(head.event, head.eventFunc);

      let textNode = document.createTextNode(head.content || "");
      header.appendChild(textNode);
      div.appendChild(header);
    }

    if (!!obj.title) {
      const title = obj.title;
      var title_ = document.createElement('h1');

      title_.className = title.class || 'title';
      // Font
      title_.style.fontFamily = title.fontFamily || 'Verdana';
      title_.style.fontWeight = title.fontWeight || '400';
      title_.style.fontSize = title.fontSize || '26px';

      title_.addEventListener(title.event, title.eventFunc);

      let textNode = document.createTextNode(title.content || "");
      title_.appendChild(textNode);
      div.appendChild(title_);

    }

    if (!!obj.text) {
      const text = obj.text;
      var text_ = document.createElement('p');

      text_.className = text.class || 'text';
      // Font
      text_.style.fontFamily = text.fontFamily || 'Verdana';
      text_.style.fontWeight = text.fontWeight || '400';
      text_.style.fontSize = text.fontSize || '26px';

      text_.addEventListener(text.event, text.eventFunc);

      let textNode = document.createTextNode(text.content || "");
      text_.appendChild(textNode);
      div.appendChild(text_);

    }

    if(!!obj.button) {
      const but = obj.button;
      let button = document.createElement('button');

      button.className = but.class || 'button';

      button.addEventListener(but.event, but.eventFunc);

      let textNode = document.createTextNode(but.content || "");
      button.appendChild(textNode);
      div.appendChild(button);
    }

    div.appendChild(exit);
    document.body.appendChild(div);
    
      var timer = setInterval(function(){
        var opacity = getComputedStyle(div).opacity;
        div.style.opacity = parseFloat(opacity) + 0.1;
        console.log(opacity);
        if (parseFloat(opacity) == 1.0) {
          clearInterval(timer);
          return;
        }
        
      }, obj.time || 50);
    

  }