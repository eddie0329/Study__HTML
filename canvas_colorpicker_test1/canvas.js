window.addEventListener("load", () => {
  const canvas1 = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //resizing
  canvas1.height = window.innerHeight;
  canvas1.width = window.innerWidth;
  
  
  // drawing rect
  ctx.fillRect(150, 150, 300, 300);
});


function getPosition(obj) {
  var curleft = 0,
    curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return { x: curleft, y: curtop };
  }
  return undefined;
}

function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}

function drawImageFromWebUrl(sourceurl) {
  var img = new Image();

  img.addEventListener("load", function() {
    // The image can be drawn from any source
    canvas
      .getContext("2d")
      .drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
  });

  img.setAttribute("src", sourceurl);
}
// Draw a base64 image because this is a fiddle, and if we try with an image from URL we'll get tainted canvas error
// Read more about here : http://ourcodeworld.com/articles/read/182/the-canvas-has-been-tainted-by-cross-origin-data-and-tainted-canvases-may-not-be-exported
drawImageFromWebUrl("naver.com");

canvas.addEventListener(
  "mousemove",
  function(e) {
    var pos = getPosition(this);
    var x = e.pageX - pos.x;
    var y = e.pageY - pos.y;
    var coord = "x=" + x + ", y=" + y;
    var c = this.getContext("2d");
    var p = c.getImageData(x, y, 1, 1).data;

    // If transparency on the image
    if (p[0] == 0 && p[1] == 0 && p[2] == 0 && p[3] == 0) {
      coord += " (Transparent color detected, cannot be converted to HEX)";
    }

    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);

    document.getElementById("status").innerHTML = coord;
    document.getElementById("color").style.backgroundColor = hex;
  },
  false
);
