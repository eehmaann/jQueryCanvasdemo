$(document).ready(function(){
	$('.size').hide(1);
	$('.fill').hide(1);
	$(".color").hide(1);
	$('.height').hide(1);
	$('.width').hide(1);
	$('.radius').hide(1);
	$('.startX').hide(1);
	$('.startY').hide(1);
	$('.endX').hide(1);
	$('.endY').hide(1);
	$('.tall').hide(1);
	$('.long').hide(1);
	var theShape;
	var size;
	var fill;
	var color;
	var height;
	var width;
	var radius;
	var startX;
	var startY;
	var endX;
	var endY;
	var tall;
	var lg;

	$('#shape').change(function(){
		theShape = $('#shape').val();
		if(theShape=="line"){
			$('.size').show(1);
			$('.fill').hide(1);
			$(".color").show(1);
			$('.height').hide(1);
			$('.width').hide(1);
			$('.radius').hide(1);
			$('.startX').show(1);
			$('.startY').show(1);
			$('.endX').show(1);
			$('.endY').show(1);
			$('.tall').hide(1);
			$('.long').hide(1);
		}
		else if(theShape=="circle"){
			$('.size').show(1);
			$('.fill').show(1);
			$(".color").show(1);
			$('.height').show(1);
			$('.width').show(1);
			$('.radius').show(1);
			$('.startX').hide(1);
			$('.startY').hide(1);
			$('.endX').hide(1);
			$('.endY').hide(1);
			$('.tall').hide(1);
			$('.long').hide(1);	
		}
		else if (theShape=="rectangle") {
			$('.size').show(1);
			$('.fill').show(1);
			$(".color").show(1);
			$('.height').show(1);
			$('.width').show(1);
			$('.radius').hide(1);
			$('.startX').hide(1);
			$('.startY').hide(1);
			$('.endX').hide(1);
			$('.endY').hide(1);
			$('.tall').show(1);
			$('.long').show(1);
		}
		else{
			$('.size').hide(1);
			$('.fill').hide(1);
			$(".color").hide(1);
			$('.height').hide(1);
			$('.width').hide(1);
			$('.radius').hide(1);
			$('.startX').hide(1);
			$('.startY').hide(1);
			$('.endX').hide(1);
			$('.endY').hide(1);
			$('.tall').hide(1);
			$('.long').hide(1);
		}
	});

	$('#create').click(function(){
		if(theShape=="cat"){
			$('#canvas1').drawSlice( {
					strokeStyle: 'black',
					strokeWidth: 5,
					fillStyle: 'yellow',
					x: 250,
					y: 90,
					radius: 55,
					start: -140, 
					end: 70,
					layer: true,
					draggable: false

				}) //end draw slice
				.drawSlice( {
					strokeStyle: 'black',
					fillStyle: 'yellow',
					strokeWidth: 5,
					x: 380,
					y: 90,
					radius: 55,
					start: -80,
					end:140, 
					layer: true,
					draggable: false
				}) //end draw slice
		
				.drawArc( {
					fillStyle: 'black',
					x: 320,
					y: 220,
					radius: 150,
					layer: true,
					draggable: false
				}) //end draw arc;
					
				.drawArc( {
					fillStyle: 'yellow',
					x: 320,
					y: 220,
					radius: 25,
					layer:true,
					draggable:false
				}) // end draw arc
			}
				
			else if (theShape=="circle") {
				size = $('#size').val();
				fill = $('#fill').val();
				color =$('#color').val();
				height =$('#height').val();
				width =$('#width').val();
				rad = $('#radius').val();
				$('#canvas1').drawArc({
					 strokeWidth: size,
					 fillStyle: fill,
					 strokeStyle: color,
					 x: width,
					 y: height,
					 radius: rad,
					 layer: true,
					 draggable:true
				})			// draw circle
			}
			
			else if(theShape=="line") {
				size = $('#size').val();
				color =$('#color').val();
				startX= $('#startX').val();
				startY= $('#startY').val();
				endX= $('#endX').val();
				endY= $('#endY').val();
				$('#canvas1').drawLine({
  					strokeStyle: color,
  					strokeWidth: size,
 					x1: startX, y1: startY,
  					x2: endX, y2: endY,
  					layer: true,
  					draggable: true
				}) //draw line
			}
			else if(theShape=="rectangle") {
				size = $('#size').val();
				fill = $('#fill').val();
				color =$('#color').val();
				height =$('#height').val();
				width =$('#width').val();
				tall= $('#tall').val();
				lg= $('#long').val();
				$('#canvas1').drawRect({
					strokeWidth: size,
					fillStyle: fill,
					strokeStyle: color,
					x: width,
					y: height,
					width:lg,
					height:tall,
					draggable: true,
					layer: true
				}) // draw rectangle
			}
			else {
				$('#canvas1').drawText({
					fillStyle: 'red',
					strokeStyle: 'black',
					strokeWidth: 3,
					x: 310,
					y: 100,
					fontSize: '4.5em',
					fontFamily: 'Impact, sans-serif',
					text: "You tried drawing without using a shape.  Why?!"
				}) //write text
			}
			
		});
		$('#clear').click(function(){
		$('#canvas1').clearCanvas();
	});	
}); //end ready









