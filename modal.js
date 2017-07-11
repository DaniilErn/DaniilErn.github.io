var Modal = function(obj) {
    var div = document.createElement('div');

    if (!!obj.design && obj.design == 'shadow') {
      div.style.boxShadow = '6px 6px 26px grey';
    }

    div.className = obj.class || 'modalWindow';
    // Position
    div.style.position = 'fixed';
    div.style.top = obj.top || null;
    div.style.right = obj.right || null;
    div.style.bottom = obj.bottom || null;
    div.style.left = obj.left || null;
    
    // Width and Height
    div.style.width = obj.width || "auto";
    div.style.height = obj.height || "auto";
    // Other options
    div.style.textAlign = obj.textAlign || 'left';

    if (!!obj.title) {
      const title = obj.title;
      var title_ = document.createElement('h1');
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

      button.addEventListener(but.event, but.eventFunc);

      let textNode = document.createTextNode(but.content || "");
      button.appendChild(textNode);
      div.appendChild(button);
    }

    document.body.appendChild(div);
  }