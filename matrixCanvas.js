//Forked from: http://devpost.com/software/the-rainbow-matrix
function matrix()
{ document.body.scrollTop = document.documentElement.scrollTop = 0;
  var d=document,a=255/2,el=d.createElement('canvas');
  el.setAttribute("id", "matrixcanvas");
  el.width=$(window).width();el.height=$(window).height();
  $('body').prepend(el)
  var columns=Array(300).join().split(','),draw=requestAnimationFrame;
  var ctx=el.getContext('2d'),random=Math.random,
  s=Math.sin,p=parseInt;ctx.translate(el.width, 0);
  ctx.scale(-1,1);
  // thanks to http://krazydad.com/tutorials/makecolors.php for some colour theory
  function getColour(f){
    return 'rgb('+[p(s(3*f)*a+a),p(s(3*f+2)*a+a),p(s(3*f+4)*a+a)].join(',')+')';
  }
  // Apparently this algorithm is quite popular out there on the Internet
  function fill(now) {
    ctx.fillStyle='rgba(0,0,0,.05)';
    ctx.fillRect(0,0,el.width,el.height);
    ctx.fillStyle=getColour(now);
    columns.map(function(y, index){
      text = String.fromCharCode(12448+random()*96);
      ctx.fillText(text, (index * 10)+10, (y||0));
      columns[index]=(y||0) > 100 + random()*1e4? 0 : y+10;
    });
    draw(fill);
  }
  draw(fill);
}

$(window).resize(function() {
  var el = document.getElementById('matrixcanvas');
  el.width=$(window).width();el.height=$(window).height();
});

if(!document.getElementById("matrixcanvas"))
  matrix();