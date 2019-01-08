
$("ul").on("click","li", function(){$(this).toggleClass("finished")});

$("ul").on("click", "span", function(event){$(this).parent().fadeOut(1000, function(){$(this).remove()});
										event.stopPropagation();
});

$("input[type='Text']").keypress(function(){
	if(event.which === 13){var add = $(this).val();
								$("ul").append("<li><span><i class= 'far fa-trash-alt'></i></span> " + add +"</li>");
								$("input").val("")

	}
});

$("h1").on("click",".fa-chevron-circle-down", function(){
	$("input[type='Text']").fadeToggle();
});