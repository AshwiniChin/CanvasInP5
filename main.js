
/**function setup is used to create a canvas on screen syntax- 
*createCanvas(width,height);
*/
function setup() {
  canvas = createCanvas(440, 440);

  //background function is used to give background color to canvas.
  background("cyan");
}

function DrawRectangle() {
  //stroke function is used for border color
  stroke("black");
  /** Fill method is used for filling color in shapes */
  fill("green");

  /**rect method is used for drawing rectangle syntax:
   * rect(x position, y position, width, height);
   */
  rect(50, 100, 300, 200);
}

function DrawEllipse() {
  stroke("black");
  fill("yellow");

  /**ellipse method is used for drawing ellipse- syntax:
   * ellipse(x position, y position, x-radius, y-radius);
   * to make a circle keep both radius same
   */
  ellipse(150, 150, 40, 40);
}

function DrawTriangle() {
  stroke("black");
  fill("brown");

  /**ellipse method is used for drawing triangle- syntax:
   * triangle(x1, y1, x2, y2, x3, y3);
   * to make a circle keep both radius same
   */
 triangle(30, 75, 58, 10, 86, 75);
 
}


