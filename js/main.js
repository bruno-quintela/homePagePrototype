$(".border, #content").hide();
    $("#topbar").show();
    $("#topbar").animate({width: "318px"},1000, function() {
      $("#rightbar").show();
      $("#rightbar").animate({height: "238px"},1000, function() {
        $("#bottombar").show();
        $("#bottombar").animate({width: "318px"},1000, function() {
          $("#leftbar").show();
          $("#leftbar").animate({height: "238px"},1000, function() {
            //$("#content").fadeIn(1000);
              $("#topbar").animate({ "border-width":"20px"},2000);
              $("#bottombar").animate({ "border-width":"20px"},2000);
              $("#rightbar").animate({ "border-width":"20px"},2000);
              $("#leftbar").animate({ "border-width":"20px"},2000);
          });
        });
      });
    });