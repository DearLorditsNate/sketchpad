$(document).ready(function(){
    for (i = 1; i < 257; i++) {
        if (i % 16 === 0) {
            $("#grid").append('<div class="box"></div><br>');
        } else {
            $("#grid").append('<div class="box"></div>');
        }
    }
    
    $(".box").mouseenter(function() {
        $(this).addClass("hover");
    });
});