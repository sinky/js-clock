function update_clock(width) {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var milseconds = now.getMilliseconds();
	
	hour_hand.rotate(30*hours+(minutes/2.5), width*.5, width*.5);
	minute_hand.rotate(6*minutes, width*.5, width*.5);
	second_hand.rotate(6*seconds, width*.5, width*.5);
}
        
function draw_clock(id, width, fillColor, strokeColor, pinColor, hourHandColor, minuteHandColor, secondHandColor)
{
	if( hourHandColor == null || hourHandColor == "" ) { hourHandColor = pinColor;}
	if( minuteHandColor == null || minuteHandColor == "" ) { minuteHandColor = pinColor;}
	if( secondHandColor == null || secondHandColor == "" ) { secondHandColor = pinColor;}

	canvas = Raphael(id,width, width);
	var clock = canvas.circle(width*.5,width*.5, width * .475);
	clock.attr({"fill":fillColor,"stroke":strokeColor,"stroke-width":(width*.025)})
	var minute_sign;
	

	for(i=0;i<60;i++){
		if(i % 5 == 0)
		{
			// Stunden
			var start_x = width*.5+Math.round((width*.38)*Math.cos(12*i*Math.PI/360));
			var start_y = width*.5+Math.round((width*.38)*Math.sin(12*i*Math.PI/360));
			var end_x = width*.5+Math.round((width*.45)*Math.cos(12*i*Math.PI/360));
			var end_y = width*.5+Math.round((width*.45)*Math.sin(12*i*Math.PI/360));
			minute_sign = canvas.path("M"+start_x+" "+start_y+"L"+end_x+" "+end_y);
			minute_sign.attr({"stroke": pinColor, "stroke-width": width*.025});    
		}else{
			// Minuten
			var start_x = width*.5+Math.round((width*.4)*Math.cos(12*i*Math.PI/360));
			var start_y = width*.5+Math.round((width*.4)*Math.sin(12*i*Math.PI/360));
			var end_x = width*.5+Math.round((width*.45)*Math.cos(12*i*Math.PI/360));
			var end_y = width*.5+Math.round((width*.45)*Math.sin(12*i*Math.PI/360));
			minute_sign = canvas.path("M"+start_x+" "+start_y+"L"+end_x+" "+end_y);
                        minute_sign.attr({"stroke": pinColor});

			  
		} 
	}

	hour_hand = canvas.path("M" + width*.5 + " " + width*.53 + "L" + width*.5 + " " + (width*.25) + "");
	hour_hand.attr({stroke: hourHandColor, "stroke-width": width*.03});
	minute_hand = canvas.path("M" + width*.5 + " " + width*.53 + "L" + width*.5 + " " + (width*.150) + "");
	minute_hand.attr({stroke: minuteHandColor, "stroke-width": width*.02});
	second_hand = canvas.path("M" + width*.5 + " " + (width*.53) + "L" + width*.5 + " " + (width*.155) + "");
	second_hand.attr({stroke: secondHandColor, "stroke-width": width*.01});

	update_clock(width);
	setInterval("update_clock("+width+")",1000);
}
