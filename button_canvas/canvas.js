const hello = () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // drawing rect
  ctx.fillRect(100, 100, 300, 300);
};

document.querySelector("#button").addEventListener("click", hello);
