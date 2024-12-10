function setup() {
    createCanvas(600, 600);
  
    describe('A calm sea drawn in gray against a black sky.');
  }
  
  function draw() {
    background('#000000');
  
    // Set the noise level and scale.
    let noiseLevel = 700;
    let noiseScale = 0.006;
  
    // Iterate from left to right.
    for (let x = 0; x < 600; x += 1) {
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let nt = noiseScale * frameCount;
  
      // Compute the noise value.
      let y = noiseLevel * noise(nx, nt);
  
      // Draw the line.
      line(x, 300 , x, y);
     stroke('#007fbf');
  
     line (300, x, x, y);
     stroke('#001d54');
  
      line(y, 300 , x, y);
      stroke('#007fbf');
  
      line(300, y , x, y);
      stroke('#001d54');
    }
  }
