// JavaScript Document
//runs javascript as soon as the page loads
		$(document).ready(function(){
			var albums;
			var albumInfoTemplate = Handlebars.compile($("#albumInfo").html());
			var albumLinkTemplate = Handlebars.compile($("#albumHomeLinks").html());
			var contentDiv = $("#content");

			//when sub is clicked exposes the list
			$("#artist").click(function(){
				$("#artists").toggle('fast');
			});

			$.getJSON('json/data.json', function(data) {
				albums = data.albums
				$("#content").append(albumLinkTemplate(data));
			});
			$("#content").on("click", ".albumLink", function(){
					console.log(albums[$(this).data('title')]);
					var albumInfo = _.findWhere(albums, {id: $(this).data('id')})
					albumInfoDiv.html(albumInfoTemplate(albumInfo));
		});