
$(document).ready(function() {
  $("form#triangles").submit(function(event) {
    event.preventDefault();
    $(".equilateral-list").empty()
    var inputtedSide1 = parseInt($("input#side1").val());
    var inputtedSide2 = parseInt($("input#side2").val());
    var inputtedSide3 = parseInt($("input#side3").val());
    var newTriangle = {side1: inputtedSide1, side2: inputtedSide2, side3: inputtedSide3,
                        type: function() {
                          if (this.side1 + this.side2 <= this.side3 || this.side2 + this.side3 <= this.side1 || this.side1 + this.side3 <= this.side2) {
                            return "not a triangle"
                          } else if (this.side1 === this.side2 && this.side1 === this.side3) {
                            return "equilateral"
                          } else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
                            return "isosceles"
                          } else {
                            return "scalene"
                          }
                        }
                    };


      var a = parseFloat(newTriangle.side1);
      var b = parseFloat(newTriangle.side2);
      var c = parseFloat(newTriangle.side3);
      var p = (a + b + c) / 2;
      var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      $(".equilateral-list").append("<li> S = " + s + "</li>")
   //
   //
   //
   // $("input#side1").val("");
   // $("input#side2").val("");
   // $("input#side3").val("");
  });

});
