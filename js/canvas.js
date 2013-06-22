
// Enviroment seguro
(function($, window, document){

  $(function(){
    var anonimos = $("#anonimo"),
        anonimoNormal = document.getElementById("anonimo"); // en caso de no usar jQuery

    // Usando jQuery
    anonimos.each(function() {
      var canvas = this.getContext("2d");

      canvas.beginPath();
      canvas.moveTo(0,240);
      canvas.lineTo(200,240);
      canvas.lineTo(100,500);
      canvas.lineTo(0,240);
      canvas.stroke();
      canvas.closePath();

      canvas.beginPath();
      canvas.arc(100, 240, 100, -1*Math.PI, 0 );
      canvas.stroke();
      canvas.closePath();

      canvas.beginPath();
      canvas.fillStyle = "#000";
      canvas.fillRect(20, 20, 150, 50);
      canvas.closePath();

      canvas.beginPath();
        canvas.strokeStyle = "#FF0000";
        canvas.arc(250, 100, 50, 0, 3*Math.PI/2);
        canvas.arc(450, 100, 50, 0, 2*Math.PI);
        canvas.rect(300, 300, 200, 200);
        canvas.rect(600, 300, 200, 200);
        canvas.lineWidth = "5";
        canvas.stroke();
        canvas.font = "60px Ubuntu";
        canvas.fillText("Hola amigos!!", 200, 200);
      canvas.closePath();


    });

  });

})(jQuery, window, document);
