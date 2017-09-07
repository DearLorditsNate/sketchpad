$(document).ready(function(){
    
    // Create initial grid
    for (i = 1; i < 257; i++) {
            $("#grid").append('<div class="box"></div>'); 
    };
    
    //Determine box size
    var gridSize = $(".wrapper").width();
    var boxSize = gridSize / 16;
        $(".box").css({"width": boxSize, "height": boxSize});
    
    //Color change
    $(".box").mouseenter(function() {
        $(this).addClass("hover");
    });
    
    //Create new grid size
    $("#prompt").click(function() {
        var num = prompt("Please enter a grid size", "Ex: 25");
        
        $("#grid").replaceWith('<div id="grid" class="wrapper"></div>');
        
        for (i = 1; i < num * num + 1; i++) {
                $("#grid").append('<div class="box"></div>');
        };
        
        $(".box").mouseenter(function() {
            $(this).addClass("hover");
        });
        
        //Determine box size
        var gridSize = $(".wrapper").width();
        var boxSize = gridSize / num;
            $(".box").css({"width": boxSize, "height": boxSize});
    });
    
});