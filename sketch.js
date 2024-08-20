let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  createCanvas(600, 600);
  background(color(25, 25, 100));
  cor = color(random(0,255), random(0,255), random(0,255));

  circuloX = [random(height), random(height), random(height)];
  circuloY = [0, 0, 0];
}

function draw() {
  fill(cor);

  for (let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador],100);
    circuloX[contador] += random(0, 4);
    circuloY[contador] += random(-4, 4);

    if (circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }

  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
