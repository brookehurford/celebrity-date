$(document).ready(function() {
  $("#celebrityDate").submit(function(event) {
    var age = parseInt($("input#age").val());
    var type = $("select#type").val();

    $("#rodS").hide();
    $("#jt").hide();

    if (age) {
      if (type === 'musician' && age >=50) {
        // you get older guy rod stewart
        var oneVariable = "Rod Stewart";
        $("#rodS").show();
      }
      else if (type === 'musician' && age <50) {
        //print to the screen justin timberlake
        var oneVariable = "Justin Timberlake";
        $("#jt").show();
      }
      else if (type === 'tv' && age >=50) {
        //print to the screen justin timberlake
        var oneVariable = "Rob Lowe";
      }
      else if (type === 'tv' && age <50) {
        //print to the screen justin timberlake
        var oneVariable = "Jimmy Fallon";
      }
      else if (type === 'movie' && age >=50) {
        //print to the screen justin timberlake
        var oneVariable = "George Clooney";
      }
      else if (type === 'movie' && age <50) {
        //print to the screen justin timberlake
        var oneVariable = "Taylor Lautner";
      }


      $("#celebName").text(oneVariable);
      $("#printToScreen").show();
      }
      else {
          alert('Please enter your age!');
        }
      event.preventDefault();
      })
    });
