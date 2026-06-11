$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms


createPlatform(100, 500, 200, 30, "red");
createPlatform(400, 420, 120, 30, "yellow");
createPlatform(650, 350, 120, 30, "orange");
createPlatform(900, 280, 150, 30, "maroon");
createPlatform(1200, 200, 150, 30, "green");
createPlatform(1450, 320, 180, 30, "yellow");
createPlatform(1750, 220, 200, 30, "white");
createPlatform(400,700,200,40, "white");
createPlatform(100,600,250,40, "yellow");
    // TODO 3 - Create Collectables


createCollectable("diamond", 180, 440, 0);
createCollectable("diamond", 450, 360, 0);


createCollectable("diamond", 980, 180, 0);


createCollectable("diamond", 500, -5000, 0);

    
    // TODO 4 - Create Cannons

// Left side cannon (fast)
createCannon("left", 200, 1000);

// Right side cannon (medium)
createCannon("right", 300, 2000);

// Top side cannon (slow)
createCannon("top", 400, 3500);
    createCannon("right", 700, 1200);
    





createCollectable("diamond", canvas.width - 150, canvas.height - 80, 0);
createBadPlatform(canvas.width - 250, canvas.height - 20, 200, 20, "red");



createCollectable("diamond", 200, 150, 0, 1, 100, 300, 4);


createProjectile("left", 100, 1000, 8, 8);
createProjectile("right", 300, 1000, 40, 10);
createProjectile("top", 500, 1000, 60, 20);
function duckPlayer() {
    player.y += 10;   // move down
    player.height = 30; // shrink hitbox
}

function standPlayer() {
    player.y -= 10;   // move back up
    player.height = 50;
}

// =====================
// PLAYER SETUP
// =====================
let player = {
    x: 100,
    y: 100,
    width: 50,
    height: 60,
    vx: 0,
    vy: 0
};

const STAND_HEIGHT = 60;
const DUCK_HEIGHT = 35;

let isDucking = false;

// =====================
// DUCK SYSTEM (REAL HITBOX CHANGE)
// =====================
function duck() {
    if (isDucking) return;

    isDucking = true;

    // move player down so feet stay grounded
    player.y += (STAND_HEIGHT - DUCK_HEIGHT);
    player.height = DUCK_HEIGHT;
}

function standUp() {
    if (!isDucking) return;

    isDucking = false;

    // move player back up
    player.y -= (STAND_HEIGHT - DUCK_HEIGHT);
    player.height = STAND_HEIGHT;
}

// =====================
// INPUT CONTROLS
// =====================
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") duck();
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowDown") standUp();
});


// =====================
function checkCollision(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

// =====================
// EXAMPLE PLATFORM / HAZARD USE
// =====================

// safe platforms
createPlatform(100, 500, 200, 30, "green");
createPlatform(400, 420, 120, 30, "blue");
createPlatform(650, 350, 120, 30, "orange");

// bad platform (hazard)
createBadPlatform(900, 230, 150, 20, "red");

// cannons
createCannon("left", 200, 2000, 20, 10, 100, 400, 2);
createCannon("right", 500, 1500, 30, 15, 200, 600, 3);

// projectiles (sizes only work if engine supports it)
createProjectile("left", 100, 1000, 24, 24);
createProjectile("right", 300, 1200, 10, 5);

// collectables
createCollectable("diamond", 180, 440, 0);
createCollectable("diamond", 450, 360, 0);

// moving collectable
createCollectable("diamond", 200, 150, 0, 1, 100, 300, 2);




    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
