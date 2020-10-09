(function() {
    "use strict";

    // create a circle object
    // TODO: complete this method
    // hint: area = pi * radius^2
    // TODO: return the proper value
    // TODO: complete this method.
    // If doRounding is true, round the result to the nearest integer.
    // Otherwise, output the complete value

    var circle = {
        radius: 3,
        getArea: function (area) {
            var area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },
        logInfo: function (doRounding) {
                    if(doRounding){
                        console.log("Area of a circle with radius: " + circle.radius + ", is: " + Math.round(circle.getArea()));
                    } else {
                        console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea());
                    }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();