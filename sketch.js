function preload() {
  // put preload code here
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setup() {
  createCanvas(900, 900);
  background("#609980");
}

function draw() {

  strokeWeight(0.30);
  stroke("#4f524c");
  noFill();

  push();
  translate(width * 0.1, height * 0.12);
  rotate(PI / 2);
  // singular hexagon row(x1,y1,60,6)  even-numbers hexagon row(x2,y2,60,6)
  for (var x1 = 0; x1 <= 480 + 120 * Math.sqrt(3); x1 += 120 + 30 * Math.sqrt(3)) {
    for (var y1 = 60 * Math.sqrt(3); y1 >= -480 * Math.sqrt(3); y1 -= 60 * Math.sqrt(3)) {
      for (var x2 = -60 - 15 * Math.sqrt(3); x2 <= 540 + 135 * Math.sqrt(3); x2 += 120 + 30 * Math.sqrt(3)) {
        for (var y2 = 30 * Math.sqrt(3); y2 >= -510 * Math.sqrt(3); y2 -= 60 * Math.sqrt(3)) {
          polygon(x1, y1, 60, 6)
          polygon(x2, y2, 60, 6)
        }
      }
    }
  }

  frameRate(5)
  var i = frameCount
  if (frameCount == 6) {
    noLoop();
  }

  strokeWeight(0.4);
  stroke("#ebfce9");
  noFill();
  // lines inside singular hexagon rows
  for (var x1 = 0; x1 <= 480 + 120 * Math.sqrt(3); x1 += 120 + 30 * Math.sqrt(3)) {
    for (var y1 = 60 * Math.sqrt(3); y1 >= -480 * Math.sqrt(3); y1 -= 60 * Math.sqrt(3)) {
      line(x1 - 60, y1, x1 - 60 + 20 * i, y1)
      line(x1 - 60, y1, x1 - 60 + 15 * i, y1 + 5 * Math.sqrt(3) * i)
      line(x1 - 60, y1, x1 - 60 + 30 * Math.sqrt(3) / 2 * sin(15) * i, y1 - 5 * Math.sqrt(3) / 2 * tan(15) * i)
      line(x1 - 60, y1, x1 - 60 + 15 * i, y1 - 5 * Math.sqrt(3) * i)
      line(x1 - 60, y1, x1 - 60 + 30 * Math.sqrt(3) / 2 * sin(15) * i, y1 + 5 * Math.sqrt(3) / 2 * tan(15) * i)
    }
  }
  // lines inside even-numbers hexagon rows
  for (var x2 = -60 - 15 * Math.sqrt(3); x2 <= 540 + 135 * Math.sqrt(3); x2 += 120 + 30 * Math.sqrt(3)) {
    for (var y2 = 30 * Math.sqrt(3); y2 >= -510 * Math.sqrt(3); y2 -= 60 * Math.sqrt(3)) {
      line(x2 + 60, y2, x2 + 60 - 10 * 2 * i, y2)
      line(x2 + 60, y2, x2 + 60 - 15 * i, y2 + 5 * Math.sqrt(3) * i)
      line(x2 + 60, y2, x2 + 60 - 30 * Math.sqrt(3) / 2 * sin(15) * i, y2 + 5 * Math.sqrt(3) / 2 * tan(15) * i)
      line(x2 + 60, y2, x2 + 60 - 15 * i, y2 - 5 * Math.sqrt(3) * i)
      line(x2 + 60, y2, x2 + 60 - 30 * Math.sqrt(3) / 2 * sin(15) * i, y2 - 5 * Math.sqrt(3) / 2 * tan(15) * i)
    }
  }
  pop();
}
