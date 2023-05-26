const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const image = document.querySelector("#img");

image.addEventListener("load", (e) => {
  const width = e.target.width;
  const height = e.target.height;
  ctx.drawImage(image, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, 120, 120);
  console.log(data);
  console.log(ctx);
  // console.log(ctx.canvas.width);
  // console.log(ctx.canvas.height);
});

function grayscale() {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  // ctx.drawImage(image, 0, 0, width, height);

  const data = ctx.getImageData(0, 0, width, height);
  console.log(data.data.length);

  for (let i = 0; i < data.data.length; i += 4) {
    const average = (data.data[i] + data.data[i + 1] + data.data[i + 2]) / 3;

    data.data[i] = average;
    data.data[i + 1] = average;
    data.data[i + 2] = average;

    // ctx.putImageData(data, 0, 0);

    // const data = ctx.getImageData(i, j, 1, 1).data;
    const r = data.data[i] * 0.3;
    const g = data.data[i + 1] * 0.59;
    const b = data.data[i + 2] * 0.11;
    const gs = r + g + b;

    ctx.fillStyle = `rgba(${gs},${gs},${gs},1)`;
    console.log("width", i, "height", Math.floor(i / width));
    ctx.fillRect(i, Math.floor(i / width), 1, 1);
  }
}

function normal() {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.drawImage(image, 0, 0, width, height);
}

function invert() {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.drawImage(image, 0, 0, width, height);

  const data = ctx.getImageData(0, 0, width, height);

  for (let i = 0; i < data.length; i += 4) {
    // const average = (data[i] + data[i + 1] + data[i + 2]) / 3

    data.data[i] ^= 255;
    data.data[i + 1] ^= 255;
    data.data[i + 2] ^= 255;

    ctx.putImageData(data, 1, 1);
    // ctx.fillStyle = `rgba(${r},${g},${b},1)`;
    // ctx.fillRect(i, j, 1, 1);
  }
}
