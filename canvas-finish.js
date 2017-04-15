// canvas. js
$(document).ready(function(){
	$('#button1').click(function(){
		$('#canvas1')
		.drawText({
			layer: true,
			fillStyle: '#9cf',
			strokeStyle: '#25a',
			strokeWidth: 2,
			x: 140,
			y: 50,
			fontSize: '18px',
			fontFamily: 'Verdana, sans-serif',
			text: 'MICKEY MOUSE',
		})
		.drawSlice({
			strokeStyle: 'black',
			strokeWidth: 5,
			fillStyle: 'yellow',
			x: 100,
			y: 110,
			radius: 40,
			start: -140, 
			end: 80,
			layer: true,
			draggable: true

		}) //end draw arc
		.drawSlice({
			strokeStyle: 'black',
			fillStyle: 'yellow',
			strokeWidth: 5,
			x: 200,
			y: 110,
			radius: 40,
			start: -80,
			end:140, 
			layer: true,
			draggable: true
		})
		.drawArc({
			fillStyle: 'black',
			x: 150,
			y: 200,
			radius: 100,
			layer: true,
			draggable: true
		}) //end draw arc; //end draw arc
	}); //end button1 click
	
	$('#clear').click(function(){
		$('#canvas1').clearCanvas();
	}); //end clear

	$('#button2').click(function(){
		$('#canvas2').drawRect({
			fillStyle: '#fc9',
			strokeStyle: '#963',
			strokeWidth: 5,
			x: 100,
			y: 60,
			width: 100,
			height: 60,
			layer: true,
			name: 'box',
			draggable: true
		}); //end rectangle
		$('#canvas2').animateLayer('box',{
				x: 220,
				y: 150
		},2500,'bounce');
	}); //end button2

	$('#button3').click(function(){
		$('#canvas3').drawText({
			layer: true,
			fillStyle: '#9cf',
			strokeStyle: '#25a',
			strokeWidth: 2,
			x: 200,
			y: 100,
			fontSize: '32px',
			fontFamily: 'Verdana, sans-serif',
			text: 'Click to zoom!',
			click: function(){
				$(this).animateLayer(0, {
					scale: '+=0.25',
					rotate: '+=10'
				}, 1000, 'swing');
			}
		}); //end text
	}); //end button 3
}); //end ready















