function setup() {
    createCanvas(600, 600);
   
   }
   
   function draw() {
     background(0,30);
   
     // Set the noise level and scale.
     let noiseLevel = 800;
     let noiseScale = 0.006;
   
     // Iterate from left to right.
     for (let x = 0; x <800; x += 1) {
       // Scale the input coordinates.
       let nx = noiseScale * x;
       let nt = noiseScale * frameCount;
   
       // Compute the noise value.
       let y = noiseLevel * noise(nx, nt);
   
       // Draw the line.
       
      line (800, x, x, y);
      stroke('#CD80FFBA');
       
      line(x, 800 , x, y);
     stroke('#E381FFA8 ');
       
     line(800, y , x, y);
      stroke('#434A839E ');
   
       line(y, 800 , x, y);
       stroke('#99CFFF93 ');
   
   
     }
   }
   
