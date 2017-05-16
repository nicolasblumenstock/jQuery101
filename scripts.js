// console.dir(document);
// var dom = $(document);
// console.dir(dom);


// $(document).ready(function(){
// 	// wait until the document is fully ready;
// 	// once the DOM is loaded, run the anonymous function
// 	var thing = document.getElementById('thing');
// 	console.log(thing);

// 	var body = document.getElementsByTagName('body')
// 	console.log(body)
// 	body = $('body')
// 	console.log(body)

// });

//wait till window finishes loading
// $(window).on("load", function (){
// 	console.log("taco");
// })


$(document).ready(function(){
	$('button').click(function(){
		var whatToDo = $(this).attr('toDo');
		if (whatToDo == 'hide'){
			$('#thing').hide();
		}else if(whatToDo == 'show'){
			$('#thing').show();
		}else if(whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if(whatToDo == 'html'){
			$('#thing').html('<strong>am new strong html</strong>')
			//if you don't pass html an arg, it will simply return innerHTML
			//if you pass html an arg, it will change to that
		}else if(whatToDo == "text"){
			$('#thing').text('<strong>am new strong html</strong>')			
		}else if(whatToDo == "prepend"){
			$('#thing').prepend('<strong>am new strong html</strong>')			
		}else if(whatToDo == "append"){
			$('#thing').append('am appended')
		}else if(whatToDo == 'css'){
			$('#thing').css({
				'color': 'yellow',
				'font-size': '25px',
				'background-color': 'magenta',
				'border-radius': '10px',
				'text-shadow': '0px 0px 1px black, 0px 0px 1px black'
			})
			//this will take an argument, an object. it will apply the css as a style attr
		}else if(whatToDo == 'class'){
			$('#thing').addClass('crazy-css');
		}else if(whatToDo == 'removeclass'){
			$('#thing').removeClass('crazy-css');
		}else if(whatToDo == 'fadetoggle'){
			$('#thing').fadeToggle();
		}
	});
	$('#animation').click(function(){
		$('#thing').hide('slow')
		$('#thing').show('slow')		
		$('#thing').animate({
			width: '+=150',
			height: '+=150',
			'margin-left': '+=500',
			'border-radius': '50%'
		}, 5000, function(){})
		$('#thing').animate({
			width: '-=150',
			height: '-=150',
			'margin-left': '-=500',
			'border-radius': '8%'			
		}, 5000, function(){
			console.log('finished')
		})

	});
});