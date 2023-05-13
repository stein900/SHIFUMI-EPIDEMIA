

     //----------------------------------------------------------------NOT LOOP------------------------------------------------------------------

// window.addEventListener("load", () => {
//   class GameObject {
//     constructor(x, y, radius, image) {
//       this.x = x;
//       this.y = y;
//       this.radius = radius;
//       this.image = image;
//       this.vx = Math.random() * 4 - 2; // random horizontal velocity between -2 and 2      //----------slow-----
//       this.vy = Math.random() * 4 - 2; // random vertical velocity between -2 and 2
//       // this.vx = Math.random() * 4 - 2; // random horizontal velocity between -2 and 2   //----------fast-----
//       // this.vy = Math.random() * 4 - 2; // random vertical velocity between -2 and 2
//     }  // 6 3

//     update() {
//       if (checkWinner()) {
//         // tous les objets ont la même image, afficher un message indiquant qui a gagné
//         const winner = gameObjects[0].image;
//         switch (winner) {
//           case rockImg:
//             alert("Rock wins!"); window.location.reload();
//             break;
//           case paperImg:
//             alert("Paper wins!"); window.location.reload();
//             break;
//           case scissorsImg:
//             alert("Scissors win!"); window.location.reload();
//             break;
//         }
//         checkWinner = false;
//       }
//       // update position based on velocity
//       this.x += this.vx;
//       this.y += this.vy;
      
//       // keep object within canvas bounds
//       if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
//         this.vx *= -1;
//       }
//       if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
//         this.vy *= -1;
//       }
//     }
//   }

//   function checkWinner() {
//     const firstImage = gameObjects[0].image;
//     for (let i = 1; i < gameObjects.length; i++) {
//       if (gameObjects[i].image !== firstImage) {
//         return false; // s'il y a au moins une image différente, on renvoie false
//       }
//     }
//     return true; // si toutes les images sont les mêmes, on renvoie true
//   }
//   const canvas = document.getElementById("myCanvas");
//   const ctx = canvas.getContext("2d");
//   // load game images
//   const rockImg = new Image();
//   rockImg.src = "rock.png";
  
//   const paperImg = new Image();
//   paperImg.src = "paper.png";
  
//   const scissorsImg = new Image();
//   scissorsImg.src = "scissor.png";
  
//   // create game objects
//   const gameObjects = [
//     new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg),
//     new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg),
//     new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg)
//   ];
//   function getRandom(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//   const gameObject4 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject5 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject6 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject8 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject9 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject10 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject11 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject12 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject13 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject14 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject15 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject16 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject17 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject18 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject19 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject20 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject41 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject51 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject61 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject81 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject91 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject101 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject111 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject121 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject131 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject141 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject151 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject161 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject171 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject181 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject191 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject201 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
  
//   const gameObject42 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject52 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject62 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject82 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject92 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject102 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject112 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject122 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject132 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject142 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject152 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject162 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject172 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject182 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject192 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject202 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject412 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject512 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject612 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject812 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject912 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject1012 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1112 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1212 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1312 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1412 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1512 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1612 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1712 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1812 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject1912 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject2012 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);

//   const gameObject423 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject523 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject623 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject823 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject923 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject1023 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject1123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject1223 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject1323 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject1423 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject1523 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
//   const gameObject1623 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject1723 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject1823 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject1923 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject2023 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject4123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject5123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject6123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject8123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject9123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
//   const gameObject10123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject11123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject12123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject13123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject14123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject15123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject16123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject17123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject18123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject19123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
//   const gameObject20123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
  
  
//   gameObjects.push(gameObject4, gameObject5, gameObject6, gameObject8, gameObject9, gameObject10, gameObject11,
//        gameObject12, gameObject13, gameObject14, gameObject15, gameObject16, gameObject17, gameObject18, gameObject41, gameObject51, gameObject61, gameObject81, gameObject91, gameObject101, gameObject111,
//        gameObject121, gameObject131, gameObject141, gameObject151, gameObject161, gameObject171, gameObject181, gameObject191, gameObject201, gameObject19, gameObject20, gameObject42, gameObject52, gameObject62, gameObject82, gameObject92, gameObject102, gameObject112,
//        gameObject122, gameObject132, gameObject142, gameObject152, gameObject162, gameObject172, gameObject182, gameObject412, gameObject512, gameObject612, gameObject812, gameObject912, gameObject1012, gameObject1112,
//        gameObject1212, gameObject1312, gameObject1412, gameObject1512, gameObject1612, gameObject1712, gameObject1812, gameObject1912, gameObject2012, gameObject192, gameObject202, gameObject423, gameObject523, gameObject623, gameObject823, gameObject923, gameObject1023, gameObject1123,
//        gameObject1223, gameObject1323, gameObject1423, gameObject1523, gameObject1623, gameObject1723, gameObject1823, gameObject5123, gameObject6123, gameObject8123, gameObject9123, gameObject10123, gameObject11123,
//        gameObject12123, gameObject13123, gameObject14123, gameObject15123, gameObject16123, gameObject17123, gameObject18123, gameObject19123, gameObject20123, gameObject1923, gameObject2023) ;
  
//   function update() {
//     gameObjects.forEach(object => {
//       object.update();
//     });
//   }
  
//   function detectCollisions() {
//     for (let i = 0; i < gameObjects.length; i++) {
//       for (let j = i + 1; j < gameObjects.length; j++) {
//         const object1 = gameObjects[i];
//         const object2 = gameObjects[j];
//           // distance = √((x2 - x1)² + (y2 - y1)²)
//         const distance = Math.sqrt((object1.x - object2.x) ** 2 + (object1.y - object2.y) ** 2);
  
//         if (distance < object1.radius + object2.radius) {
//           // determine which object wins based on rock-paper-scissors rules
//           if ((object1.image === rockImg && object2.image === scissorsImg) ||
//             (object1.image === paperImg && object2.image === rockImg) ||
//             (object1.image === scissorsImg && object2.image === paperImg)) {
//             // object1 wins
//             object2.image = object1.image;
//             object2.radius = object1.radius;
//             object2.vx = object1.vx;
//             object2.vy = object1.vy;
//           } else if ((object2.image === rockImg && object1.image === scissorsImg) ||
//             (object2.image === paperImg && object1.image === rockImg) ||
//             (object2.image === scissorsImg && object1.image === paperImg)) {
//             // object2 wins
//             object1.image = object2.image;
//             object1.radius = object2.radius;
//             object1.vx = object2.vx;
//             object1.vy = object2.vy;
//           }
//         }
//       }
//     }
//   }
  
//   function draw() {
//     // clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//     // draw each game object
//     gameObjects.forEach(object => {
//       ctx.drawImage(object.image, object.x - object.radius, object.y - object.radius, object.radius * 2, object.radius * 2);
//     });
//   }
//   function checkCollisions() {
//       for (let i = 0; i < gameObjects.length; i++) {
//         for (let j = i + 1; j < gameObjects.length; j++) {
//           const dx = gameObjects[i].x - gameObjects[j].x;
//           const dy = gameObjects[i].y - gameObjects[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
    
//           if (distance < gameObjects[i].radius + gameObjects[j].radius) {
//             // collision detected
//             const angle = Math.atan2(dy, dx);
//             const sin = Math.sin(angle);
//             const cos = Math.cos(angle);
  
//             // rotate object velocities
//             const vx1 = gameObjects[i].vx * cos + gameObjects[i].vy * sin;
//             const vy1 = gameObjects[i].vy * cos - gameObjects[i].vx * sin;
//             const vx2 = gameObjects[j].vx * cos + gameObjects[j].vy * sin;
//             const vy2 = gameObjects[j].vy * cos - gameObjects[j].vx * sin;
    
//             // update velocities
//             gameObjects[i].vx = vx2;
//             gameObjects[i].vy = vy1;
//             gameObjects[j].vx = vx1;
//             gameObjects[j].vy = vy2;
//           }
//         }
//       }
//     }
  
//     function render() {
//       // clear canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//       // render game objects
//       gameObjects.forEach(obj => {
//         ctx.drawImage(obj.image, obj.x - obj.radius, obj.y - obj.radius, obj.radius * 2, obj.radius * 2);
//         obj.update();
//       });
    
//       // check for collisions
//       checkCollisions();
    
//       // request next frame
//       requestAnimationFrame(render);
//     }
    
//     // start rendering
//     requestAnimationFrame(render);
  
//     function resolveCollision(obj1, obj2) {
//       const dx = obj2.x - obj1.x;
//       const dy = obj2.y - obj1.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);
    
//       const minDistance = obj1.radius + obj2.radius;
    
//       if (distance < minDistance) {
//         // calculate angle and direction of collision
//         const angle = Math.atan2(dy, dx);
//         const sin = Math.sin(angle);
//         const cos = Math.cos(angle);
    
//         // rotate object positions
//         const x1 = obj1.x * cos + obj1.y * sin;
//         const y1 = obj1.y * cos - obj1.x * sin;
//         const x2 = obj2.x * cos + obj2.y * sin;
//         const y2 = obj2.y * cos - obj2.x * sin;
    
//         // calculate new velocities
//         const vx1 = obj1.vx * cos + obj1.vy * sin;
//         const vy1 = obj1.vy * cos - obj1.vx * sin;
//         const vx2 = obj2.vx * cos + obj2.vy * sin;
//         const vy2 = obj2.vy * cos - obj2.vx * sin;
    
//         // calculate new positions
//         const newX1 = ((obj1.radius - obj2.radius) * x1 + 2 * obj2.radius * x2) / (obj1.radius + obj2.radius);
//         const newY1 = y1;
//         const newX2 = ((obj2.radius - obj1.radius) * x2 + 2 * obj1.radius * x1) / (obj1.radius + obj2.radius);
//         const newY2 = y2;
    
//         // rotate positions back
//         const finalX1 = newX1 * cos - newY1 * sin;
//         const finalY1 = newY1 * cos + newX1 * sin;
//         const finalX2 = newX2 * cos - newY2 * sin;
//         const finalY2 = newY2 * cos + newX2 * sin;
    
//         // set new positions and velocities
//         obj1.x = finalX1;
//         obj1.y = finalY1;
//         obj2.x = finalX2;
//         obj2.y = finalY2;
    
//         obj1.vx = vx2 * cos - vy1 * sin;
//         obj1.vy = vy1 * cos + vx2 * sin;
//         obj2.vx = vx1 * cos - vy2 * sin;
//         obj2.vy = vy2 * cos + vx1 * sin;
//       }
//     }
  
//     function checkCollisions() {
//       for (let i = 0; i < gameObjects.length; i++) {
//         for (let j = i + 1; j < gameObjects.length; j++) {
//           resolveCollision(gameObjects[i], gameObjects[j]);
//         }
//       }
//     } 
  
//   setInterval(() => {
//     update();
//     detectCollisions();
//     draw();
//   }, 1000 / 60);
//   });




  //----------------------------------------------------------------LOOP------------------------------------------------------------------

  window.addEventListener("load", () => {
    class GameObject {
      constructor(x, y, radius, image) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = image;
        this.vx = Math.random() * 4 - 2; // random horizontal velocity between -2 and 2      //----------slow-----
        this.vy = Math.random() * 4 - 2; // random vertical velocity between -2 and 2
        // this.vx = Math.random() * 4 - 2; // random horizontal velocity between -2 and 2   //----------fast-----
        // this.vy = Math.random() * 4 - 2; // random vertical velocity between -2 and 2
      }  // 6 3
  
      update() {
        if (checkWinner()) {
          // tous les objets ont la même image, afficher un message indiquant qui a gagné
          const winner = gameObjects[0].image;
          if(winner) {
            window.location.reload();
          }
          checkWinner = false;
        }
        // update position based on velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // keep object within canvas bounds
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.vx *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.vy *= -1;
        }
      }
    }
  
    function checkWinner() {
      const firstImage = gameObjects[0].image;
      for (let i = 1; i < gameObjects.length; i++) {
        if (gameObjects[i].image !== firstImage) {
          return false; // s'il y a au moins une image différente, on renvoie false
        }
      }
      return true; // si toutes les images sont les mêmes, on renvoie true
    }
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    // load game images
    const rockImg = new Image();
    rockImg.src = "rock.png";
    
    const paperImg = new Image();
    paperImg.src = "paper.png";
    
    const scissorsImg = new Image();
    scissorsImg.src = "scissor.png";
    
    // create game objects
    const gameObjects = [
      new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg),
      new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg),
      new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg)
    ];
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
    const gameObject4 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject5 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject6 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject8 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject9 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject10 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject11 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject12 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject13 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject14 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject15 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject16 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject17 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject18 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject19 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject20 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject41 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject51 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject61 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject81 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject91 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject101 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject111 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject121 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject131 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject141 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject151 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject161 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject171 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject181 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject191 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject201 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    
    const gameObject42 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject52 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject62 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject82 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject92 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject102 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject112 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject122 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject132 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject142 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject152 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject162 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject172 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject182 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject192 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject202 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject412 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject512 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject612 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject812 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject912 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject1012 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1112 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1212 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1312 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1412 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1512 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1612 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1712 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1812 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject1912 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject2012 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
  
    const gameObject423 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject523 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject623 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject823 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject923 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject1023 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject1123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject1223 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject1323 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject1423 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject1523 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, rockImg);
    const gameObject1623 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject1723 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject1823 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject1923 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject2023 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject4123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject5123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject6123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject8123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject9123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, scissorsImg);
    const gameObject10123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject11123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject12123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject13123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject14123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject15123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject16123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject17123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject18123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject19123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    const gameObject20123 = new GameObject(getRandom(0, canvas.width), getRandom(0, canvas.height), 20, paperImg);
    
    
    gameObjects.push(gameObject4, gameObject5, gameObject6, gameObject8, gameObject9, gameObject10, gameObject11,
         gameObject12, gameObject13, gameObject14, gameObject15, gameObject16, gameObject17, gameObject18, gameObject41, gameObject51, gameObject61, gameObject81, gameObject91, gameObject101, gameObject111,
         gameObject121, gameObject131, gameObject141, gameObject151, gameObject161, gameObject171, gameObject181, gameObject191, gameObject201, gameObject19, gameObject20, gameObject42, gameObject52, gameObject62, gameObject82, gameObject92, gameObject102, gameObject112,
         gameObject122, gameObject132, gameObject142, gameObject152, gameObject162, gameObject172, gameObject182, gameObject412, gameObject512, gameObject612, gameObject812, gameObject912, gameObject1012, gameObject1112,
         gameObject1212, gameObject1312, gameObject1412, gameObject1512, gameObject1612, gameObject1712, gameObject1812, gameObject1912, gameObject2012, gameObject192, gameObject202, gameObject423, gameObject523, gameObject623, gameObject823, gameObject923, gameObject1023, gameObject1123,
         gameObject1223, gameObject1323, gameObject1423, gameObject1523, gameObject1623, gameObject1723, gameObject1823, gameObject5123, gameObject6123, gameObject8123, gameObject9123, gameObject10123, gameObject11123,
         gameObject12123, gameObject13123, gameObject14123, gameObject15123, gameObject16123, gameObject17123, gameObject18123, gameObject19123, gameObject20123, gameObject1923, gameObject2023) ;
    
    function update() {
      gameObjects.forEach(object => {
        object.update();
      });
    }
    
    function detectCollisions() {
      for (let i = 0; i < gameObjects.length; i++) {
        for (let j = i + 1; j < gameObjects.length; j++) {
          const object1 = gameObjects[i];
          const object2 = gameObjects[j];
            // distance = √((x2 - x1)² + (y2 - y1)²)
          const distance = Math.sqrt((object1.x - object2.x) ** 2 + (object1.y - object2.y) ** 2);
    
          if (distance < object1.radius + object2.radius) {
            // determine which object wins based on rock-paper-scissors rules
            if ((object1.image === rockImg && object2.image === scissorsImg) ||
              (object1.image === paperImg && object2.image === rockImg) ||
              (object1.image === scissorsImg && object2.image === paperImg)) {
              // object1 wins
              object2.image = object1.image;
              object2.radius = object1.radius;
              object2.vx = object1.vx;
              object2.vy = object1.vy;
            } else if ((object2.image === rockImg && object1.image === scissorsImg) ||
              (object2.image === paperImg && object1.image === rockImg) ||
              (object2.image === scissorsImg && object1.image === paperImg)) {
              // object2 wins
              object1.image = object2.image;
              object1.radius = object2.radius;
              object1.vx = object2.vx;
              object1.vy = object2.vy;
            }
          }
        }
      }
    }
    
    function draw() {
      // clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // draw each game object
      gameObjects.forEach(object => {
        ctx.drawImage(object.image, object.x - object.radius, object.y - object.radius, object.radius * 2, object.radius * 2);
      });
    }
    function checkCollisions() {
        for (let i = 0; i < gameObjects.length; i++) {
          for (let j = i + 1; j < gameObjects.length; j++) {
            const dx = gameObjects[i].x - gameObjects[j].x;
            const dy = gameObjects[i].y - gameObjects[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < gameObjects[i].radius + gameObjects[j].radius) {
              // collision detected
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);
    
              // rotate object velocities
              const vx1 = gameObjects[i].vx * cos + gameObjects[i].vy * sin;
              const vy1 = gameObjects[i].vy * cos - gameObjects[i].vx * sin;
              const vx2 = gameObjects[j].vx * cos + gameObjects[j].vy * sin;
              const vy2 = gameObjects[j].vy * cos - gameObjects[j].vx * sin;
      
              // update velocities
              gameObjects[i].vx = vx2;
              gameObjects[i].vy = vy1;
              gameObjects[j].vx = vx1;
              gameObjects[j].vy = vy2;
            }
          }
        }
      }
    
      function render() {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        // render game objects
        gameObjects.forEach(obj => {
          ctx.drawImage(obj.image, obj.x - obj.radius, obj.y - obj.radius, obj.radius * 2, obj.radius * 2);
          obj.update();
        });
      
        // check for collisions
        checkCollisions();
      
        // request next frame
        requestAnimationFrame(render);
      }
      
      // start rendering
      requestAnimationFrame(render);
    
      function resolveCollision(obj1, obj2) {
        const dx = obj2.x - obj1.x;
        const dy = obj2.y - obj1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
      
        const minDistance = obj1.radius + obj2.radius;
      
        if (distance < minDistance) {
          // calculate angle and direction of collision
          const angle = Math.atan2(dy, dx);
          const sin = Math.sin(angle);
          const cos = Math.cos(angle);
      
          // rotate object positions
          const x1 = obj1.x * cos + obj1.y * sin;
          const y1 = obj1.y * cos - obj1.x * sin;
          const x2 = obj2.x * cos + obj2.y * sin;
          const y2 = obj2.y * cos - obj2.x * sin;
      
          // calculate new velocities
          const vx1 = obj1.vx * cos + obj1.vy * sin;
          const vy1 = obj1.vy * cos - obj1.vx * sin;
          const vx2 = obj2.vx * cos + obj2.vy * sin;
          const vy2 = obj2.vy * cos - obj2.vx * sin;
      
          // calculate new positions
          const newX1 = ((obj1.radius - obj2.radius) * x1 + 2 * obj2.radius * x2) / (obj1.radius + obj2.radius);
          const newY1 = y1;
          const newX2 = ((obj2.radius - obj1.radius) * x2 + 2 * obj1.radius * x1) / (obj1.radius + obj2.radius);
          const newY2 = y2;
      
          // rotate positions back
          const finalX1 = newX1 * cos - newY1 * sin;
          const finalY1 = newY1 * cos + newX1 * sin;
          const finalX2 = newX2 * cos - newY2 * sin;
          const finalY2 = newY2 * cos + newX2 * sin;
      
          // set new positions and velocities
          obj1.x = finalX1;
          obj1.y = finalY1;
          obj2.x = finalX2;
          obj2.y = finalY2;
      
          obj1.vx = vx2 * cos - vy1 * sin;
          obj1.vy = vy1 * cos + vx2 * sin;
          obj2.vx = vx1 * cos - vy2 * sin;
          obj2.vy = vy2 * cos + vx1 * sin;
        }
      }
    
      function checkCollisions() {
        for (let i = 0; i < gameObjects.length; i++) {
          for (let j = i + 1; j < gameObjects.length; j++) {
            resolveCollision(gameObjects[i], gameObjects[j]);
          }
        }
      } 
    
    setInterval(() => {
      update();
      detectCollisions();
      draw();
    }, 1000 / 60);
    });