let radius;
let number_of_points = 0;
let step = 2.0;

function setup() {
  createCanvas(400, 400);
  radius = (width / 2) * 0.9;
}

function draw() {
  background(180);
  translate(width / 2, height / 2);
  Draw_Circle_Outline(1);
  Draw_Points();
  Draw_Connections();
  number_of_points += 0.1;
  step += 0.001;
}

function Draw_Circle_Outline(thickness) {
  noFill();
  stroke(0);
  strokeWeight(thickness);
  circle(0, 0, radius * 2);
}

function Draw_Points() {
  strokeWeight(3);
  stroke(0);
  for (let i = 0; i < number_of_points; i++) {
    position = Polar_to_Cartesian(radius, i * (TWO_PI / number_of_points) + PI);
    point(position.x, position.y);
  }
}

function Draw_Connections() {
  strokeWeight(1);
  for (let i = 0; i < number_of_points; i++) {
    r = map(i, 0, number_of_points, 0, 255);
    b = map(i, 0, number_of_points, 255, 0);
    stroke(r, 0, b);
    from_position = Polar_to_Cartesian(radius, i * (TWO_PI / number_of_points) + PI);
    to_position = Polar_to_Cartesian(radius,
      ((i * step) % number_of_points) * (TWO_PI / number_of_points) + PI);
    line(from_position.x, from_position.y, to_position.x, to_position.y);
  }
}

function Polar_to_Cartesian(r, theta) {
  x = r * cos(theta);
  y = r * sin(theta);
  return createVector(x, y);
}
