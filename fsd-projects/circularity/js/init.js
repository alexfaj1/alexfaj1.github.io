var init = function (window) {
    'use strict';

    var
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,

        app = window.opspark.makeApp(),
        canvas = app.canvas,
        view = app.view,
        fps = draw.fps('#000');

    window.opspark.makeGame = function () {

        window.opspark.game = {};
        var game = window.opspark.game;

        ///////////////////
        // PROGRAM SETUP //
        ///////////////////

        // Personalized variables
        var circle;
        var circles = [];

        // Create colorful moving circles
        function drawCircle() {
            circle = draw.randomCircleInArea(
                canvas,
                true,
                true,
                draw.randomColor(),
                3
            );

            physikz.addRandomVelocity(circle, canvas, 8, 8);

            view.addChild(circle);
            circles.push(circle);
        }

        // Create 75 colorful circles
        for (var i = 0; i < 75; i++) {
            drawCircle();
        }

        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////

        function update() {

            // Move and check every circle
            for (var i = 0; i < circles.length; i++) {
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }
        }

        game.checkCirclePosition = function (circle) {

            var leftEdge = circle.x - circle.radius;
            var rightEdge = circle.x + circle.radius;
            var topEdge = circle.y - circle.radius;
            var bottomEdge = circle.y + circle.radius;

            // Right to Left
            if (leftEdge > canvas.width) {
                circle.x = -circle.radius;
            }

            // Left to Right
            if (rightEdge < 0) {
                circle.x = canvas.width + circle.radius;
            }

            // Bottom to Top
            if (topEdge > canvas.height) {
                circle.y = -circle.radius;
            }

            // Top to Bottom
            if (bottomEdge < 0) {
                circle.y = canvas.height + circle.radius;
            }
        };

        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////

        view.addChild(fps);
        app.addUpdateable(fps);

        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;

        app.addUpdateable(window.opspark.game);
    };
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports = init;
}