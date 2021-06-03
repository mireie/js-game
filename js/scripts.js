function addWidth(currentWidth, progress) {
  if ((currentWidth + progress)>100) {
    return currentWidth - (2 * progress);
  }
  else {
    return currentWidth + progress;
  }
}

function addWidth2(currentWidth2, progress2) {
  if ((currentWidth2 + progress2)>100) {
    return currentWidth2 - (2 * progress2);
  }
  else {
    return currentWidth2 + progress2;
  }
}

let currentWidth = 0;
let currentWidth2 = 0;

$(document).ready(function() {
  $("img#dice").click(function() {
    let progress = Math.floor(Math.random() * 20) + 1;
    let result = addWidth(currentWidth, progress);
    currentWidth = result;
    console.log(progress+", "+currentWidth);
    $("#myBar").width(result + "%");
    $("#coolplayer").text(progress);
    

    let progress2 = Math.floor(Math.random() * 20) + 1;
    let result2 = addWidth2(currentWidth2, progress2)
    currentWidth2 = result2
    console.log(progress2+", "+currentWidth);
    $("#enemyBar").width(result2 + "%");
    $("#enemyplayer").text(progress2);
    
    if (currentWidth === 100 || currentWidth2 === 100) {
      $(".hidden").show();
      $(".roll").slideToggle();
    }
    if (currentWidth === 100 ) {
      $("#winner").text("You Win!");
    }
    if (currentWidth2 === 100) {
      $(".hidden").show();
      $("#winner").text("Your Mortal Enemy Wins!");
    }
  });

  $("button#reset").click(function() {
    $(".hidden").hide();
    let currentWidth = 0;
    let currentWidth2 = 0;
    $("#myBar").width(currentWidth + "%");
    $("#enemyBar").width(currentWidth2 + "%");
    $(".roll").slideToggle();
  });
});