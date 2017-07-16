var start = document.querySelector('header button');
var $1 = document.querySelector('.example1 button');
var $2 = document.querySelector('.example-1');
var $3 = document.querySelector('.example-2');
var $4 = document.querySelector('.example-3');

start.addEventListener('click', function(){
  var art = document.querySelector('article');
  art.style.border =  "1px solid #CBCBCB";
  var timer = setInterval(function(){
    let height = getComputedStyle(art).height;
    if (parseInt(height) > 1600) {
      clearInterval(timer);
      art.style.height = 'auto';
      return;
    }
    art.style.height = parseInt(height) + 50 + 'px';
  }, 30);

});

$1.addEventListener('click', function(){
  modalWindow({
    class: 'mw1',
    top: '50%',
    left: '50%',
    width: '500px',
    height: '250px',
    header: {
      content: 'Это модальное окно!'
    },
    text: {
      content: 'В JS вы пишите лишь то, что в нем будет, каких оно будет размеров и где находиться, все остальное стилизуется в CSS',
      fontSize: '18px',
      fontWeight: '200' 
    },
    button : {
      content: 'click me!',
      event: 'click',
      eventFunc: function(event) {
        event = event || window.event;
        event.target.parentNode.remove();
      }
    }
  });
});

$2.addEventListener('click', function() {
  modalWindow({
    class: 'ex1',
    bottom: '50px',
    left: '25px',
    wodth: '60px',
    height: '40px',
    textAlign: 'center',
    text: {
      content: 'Спасибо, что вы с нами!',
      fontSize: '12px',
      fontWeight: '100'
    }
  });
});


$3.addEventListener('click', function() {
  modalWindow({
    class: 'ex2',
    top: '0',
    left: '0',
    width: '94%',
    height: '50px',
    textAlign: 'center',
    text: {
      content: 'Пожалуйста, оцените нас!',
      fontSize: '24px',
      fontWeight: '100'
    }
  });
});



$4.addEventListener('click', function() {
  modalWindow({
    class: 'ex3',
    top: '50%',
    left: '50%',
    width: '50%',
    height: '400px',
    textAlign: 'center',
    header: {
      content: ' '
    },
    title: {
      content: 'Статья #1',
      fontSize: '20px',
      fontWeight: '100'
    },
    text: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus diam id mauris euismod, quis aliquet metus porttitor. Nunc vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus diam id mauris euismod, quis aliquet metus porttitor. Nunc vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus diam id mauris euismod, quis aliquet metus porttitor. Nunc vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus diam id mauris euismod, quis aliquet metus porttitor. Nunc vulputate.',
      fontSize: '14px',
      fontWeight: '200'
    }
  });
});
