// JavaScript Document
//runs javascript as soon as the page loads
		$(document).ready(function(){
			$('.sub').hide();

			//when sub is clicked exposes the list
			$("#artist").click(function(){
				$("#artists").toggle('fast');
			});
		});