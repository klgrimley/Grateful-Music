// JavaScript Document
//runs javascript as soon as the page loads
	var albums;
	var albumInfoTemplate = Handlebars.compile($("#albumInfo").html());
		$(document).ready(function(){
			var contentDiv = $("#content");

			//when sub is clicked exposes the list
			$("#artist").click(function(){
				$("#artists").toggle('fast');
			});

			$.getJSON('json/data.json', function(data) {
				$("#content").append
			});
		});