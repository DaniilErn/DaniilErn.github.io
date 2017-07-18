var start = document.querySelector('header button'),
$1 = document.querySelector('.example1 button'),
$2 = document.querySelector('.example-1'),
$3 = document.querySelector('.example-2'),
$4 = document.querySelector('.example-3');


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
    el: '.exq1',
    top: '50%',
    left: '50%',
    width: '50%',
    height: 'auto',
    hide: true,
    time: 20  
  });
});

$2.addEventListener('click', function() {
  modalWindow({
    el: '.alert',
    bottom: '50px',
    left: '50px',
    width: '200px',
    hise: true,
    time: 20,
  });
});


$3.addEventListener('click', function() {
  modalWindow({
    el: '.make',
    top: '0px',
    left: '0px',
    width: '100%',
    hise: true,
    time: 20
  });
});



$4.addEventListener('click', function() {
  modalWindow({
    el: '.choose',
    top: '50%',
    left: '50%',
    width: '50%',
    hise: true,
    time: 20
  });
});