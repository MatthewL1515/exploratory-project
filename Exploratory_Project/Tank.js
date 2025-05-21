class Tank {
  constructor(x, y, controls, color) {
    this.pos = createVector(x, y)
    this.controls = controls
    this.color = color
    this.size = 30
  }
  
  update() {
    //______________________________________________________________________
    // CONTROLS
    if (keyIsDown(this.controls.up)) {
      this.pos.y -= 2
    }
    
    if (keyIsDown(this.controls.down)) {
      this.pos.y += 2
    }
    
    if (keyIsDown(this.controls.left)) {
      this.pos.x -= 2
    }
    
    if (keyIsDown(this.controls.right)) {
      this.pos.x += 2
    }
    // CONTROLS END
    //____________________________________________________________________

  }
}