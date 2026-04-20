// js/main.js

document.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById("canvas");
  
  const gl = canvas.getContext("webgl");

  if (!gl) {
    alert("webgl not supported!");
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);
});