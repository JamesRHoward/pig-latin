
// a = 0
// e = 4
// I = 8
// O = 14
// U = 21
//
// if(cons <=2)
//   $(output).text(answer);
//   output.push('ay');
//   });
// });
// $(document).ready(function(){
//   $('#oink').submit(function(event){
//     event.preventDefault();
//     var userinput = $('#pigtext').val();
//     var output = [];
//     var answer = output.join(' ');
//     debugger;
//     for ( var index = 0; index < 26; index++) {
//       if (userinput.startsWith(0) || userinput.startsWith(4) || userinput.startsWith(8) || userinput.startsWith(14) || userinput.startsWith(21) ) {
//         output.slice(userinput);
//         output.push("ay");
//       }
//     }
//     var userinput = $('#pigtext').val();
//     var output = [];
//     var answer = output.join(' ');
//     for (var index = 0; index < 26; index++) {
//       if (userinput.startsWith(1)) {
//         output.push("ay")
//       }
//
//         $('#results').text(answer)
//     }
//
//   })
// });
var userinput;
var pigay = "ay";
var output = userinput + pigay;

$(document).ready(function(){
  $("#oink").submit(function(event){
    event.preventDefault();
    userinput = $("#pigtext").val();

    if (userinput.length > 0 && userinput.match(/^[a-zA-Z][a-zA-Z]+$/) + (/^[\s][\s]+$/) ){
      // $(".results");
      var vowels = ["a", "e", "i", "o", "u"];
      var first = userinput.slice(0,1);
      var last = userinput.slice(1);

      if(first === "a" || first === "e" || first === "i" || first === "o" || first === "u" )
       {
        output = userinput + pigay;
        $(".results").text(output);
      }
      else { output = last + first + pigay;
      $(".results").text(output);
    }
    }
  });
});
