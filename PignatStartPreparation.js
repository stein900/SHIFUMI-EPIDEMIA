var PARTICLE_NUM = 500;
var PARTICLE_BASE_RADIUS = 0.5;
var FL = 500;
var DEFAULT_SPEED2 = 300;
var DEFAULT_SPEED = 2;
var BOOST_SPEED = 300;

var canvas;
var canvasWidth, canvasHeight;
var context;
var centerX, centerY;
var mouseX, mouseY;
var speed = DEFAULT_SPEED2;
var targetSpeed = DEFAULT_SPEED2;
var particles = [];

let red = 5;
let green = 51;
let blue = 101;

let redF = false;
let greenF = false;
let blueF = false;


function updateTimer() {
    if (seconds > 0) {
        targetSpeed = BOOST_SPEED;
        seconds--;
        setTimeout(updateTimer, 1000); // Appel récursif toutes les 1 seconde
    } else if (seconds <= 0) {
        targetSpeed = DEFAULT_SPEED;
    }
}

window.addEventListener('load', function() {
    canvas = document.getElementById('c');
    
    var resize = function() {
        canvasWidth  = canvas.width = window.innerWidth;
        canvasHeight = canvas.height = window.innerHeight;
        centerX = canvasWidth * 0.5;
        centerY = canvasHeight * 0.5;
        context = canvas.getContext('2d');
        context.fillStyle = 'rgb(255, 255, 255)';
    };
    
    document.addEventListener('resize', resize);
    resize();
    
    mouseX = centerX;
    mouseY = centerY;
    
    for (var i = 0, p; i < PARTICLE_NUM; i++) {
        particles[i] = randomizeParticle(new Particle());
        particles[i].z -= 500 * Math.random();
    }

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, false);
    
    document.addEventListener('mousedown', function(e) {
        targetSpeed = BOOST_SPEED;
    }, false);
    
    document.addEventListener('mouseup', function(d) {
        targetSpeed = DEFAULT_SPEED;
    }, false);
    
        seconds = 1; // Réinitialisez le compteur de temps
        updateTimer();
    
    setInterval(loop, 1000 / 60);
}, false);

var seconds = 2;
            
if (seconds > 0) {
    targetSpeed = BOOST_SPEED;
    seconds--;
    setTimeout(updateTimer, 1000); // Appel récursif toutes les 1 seconde
}
else if (seconds <= 0){
    targetSpeed = DEFAULT_SPEED2;
}
function loop() {


        // // Augmenter ou diminuer les valeurs des composantes
        // red += (0.9); // Variation aléatoire de la composante rouge
        // green += (0.6); // Variation aléatoire de la composante verte
        // blue += (0.4); // Variation aléatoire de la composante bleue

        if(!redF){
            red -= 0.5;
        }
        if(redF){
            red += 0.2;
        }
        if(red <= 4){
            redF = true;
        }
        if(red >= 150){
            redF = false;
        }

        if(!greenF){
            green -= 0.6;
        }
        if(greenF){
            green += 0.3;
        }
        if(green <= 4){
            greenF = true;
            green = 6;

        }
        if(green >= 150){
            greenF = false;
            green = 149;
        }
    
        if(!blueF){
            blue -= 0.4;
        }
        if(blueF){
            blue += 0.7;
        }
        if(blue <= 4){
            blueF = true;
        }
        if(blue >= 150){
            blueF = false;
        }

    context.save();
    context.fillStyle = `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.restore(); 
    speed += (targetSpeed - speed) * 0.01;
    
    var p;
    var cx, cy;
    var rx, ry;
    var f, x, y, r;
    var pf, px, py, pr;
    var a, a1, a2;
    
    var halfPi = Math.PI * 0.5;
    var atan2  = Math.atan2;
    var cos    = Math.cos;
    var sin    = Math.sin;
    
    context.beginPath();
    for (var i = 0; i < PARTICLE_NUM; i++) {
        p = particles[i];
        
        p.pastZ = p.z;
        p.z -= speed;
        
        if (p.z <= 0) {
            randomizeParticle(p);
            continue;
        }
        
        cx = centerX - (mouseX - centerX) * 1.25;
        cy = centerY - (mouseY - centerY) * 1.25;
        
        rx = p.x - cx;
        ry = p.y - cy;
        
        f = FL / p.z;
        x = cx + rx * f;
        y = cy + ry * f;
        r = PARTICLE_BASE_RADIUS * f;
        
        pf = FL / p.pastZ;
        px = cx + rx * pf;
        py = cy + ry * pf;
        pr = PARTICLE_BASE_RADIUS * pf;
        
        a  = atan2(py - y, px - x);
        a1 = a + halfPi;
        a2 = a - halfPi;
        
        context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
        context.arc(px, py, pr, a1, a2, true);
        context.lineTo(x + r * cos(a2), y + r * sin(a2));
        context.arc(x, y, r, a2, a1, true);
        context.closePath();
    }
    context.fill();
}

function randomizeParticle(p) {
    p.x = Math.random() * canvasWidth;
    p.y = Math.random() * canvasHeight;
    p.z = Math.random() * 1500 + 500;
    return p;
}


/**
 * Particle
 */
function Particle(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.pastZ = 0;
}

loop();