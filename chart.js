chart={
view:function(){},

pie:function(arr){
colors=['Red','Pink','Purple','Indigo','Blue','Cyan','Teal','Green','Lime','Yellow'];
total=arr.reduce((a, b) => a + (parseInt(b['isi']) || 0), 0);
var offset = 25;
y=6;
out=[];
out.svg ='<svg class="img" width="300" height="100%" viewBox="0 0 42 42">\
<circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>';
for(i in arr){ val1=arr[i].isi;
per1 = val1/total*100;
// out +='<circle  cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="'+arr[i].nama+'" stroke-width="3" stroke-dasharray="'+per1+' '+(100-per1)+'" stroke-dashoffset="'+offset+'"></circle>';
out.svg +='<circle  cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="'+colors[i]+'" stroke-width="3" stroke-dasharray="'+per1+' '+(100-per1)+'" stroke-dashoffset="'+offset+'"></circle>';
offset=100-per1+offset;


}
out.svg +='<g class="chart-pie-text"> \
<text x="50%" y="50%" class="chart-pie-number" id="totalValue">'+total+'</text>\
<text x="50%" y="50%" class="chart-pie-label">Total </text></g></svg>';

out.key ='<figcaption class="figure-key">\
<ul class="figure-key-list" aria-hidden="true" role="presentation">';
for(i in arr){
out.key +='<li><span class="shape-circle" style="background-color:'+colors[i]+'"></span>'+arr[i].nama+'('+arr[i].isi+')</li>';
}
out.key +='</ul>\
</figcaption>';

return out;
},

canvas:function(arr){
  out ='<g transform="translate(40,20)">';
  out +='<g class="chart-bar-x chart-bar-axis" transform="translate(0,250)">';
  x=30;
  for(i in arr){
  out +='<g class="tick" transform="translate('+x+',0)" style="opacity: 1;"><line y2="6" x2="0"></line>';
  out +='<text dy=".71em" y="9" x="0" style="text-anchor: middle;">'+i+'</text></g>';
  x+=20;
  }
  out +='<line x1="0" y1="0" x2="250" y2="0" stroke="black" />';
  out +='</g>';

  out +='<g class="chart-bar-y chart-bar-axis">';
  arr1=[10,9,8,7,6,5,4,3,2,1,0];
  x=40;
  for(i in arr1){
  out +='<g class="tick" transform="translate(0,'+x+')" style="opacity: 1;"><line x2="-6" y2="0"></line>';
  out +='<text dy=".32em" x="-9" y="0" style="text-anchor: end;">'+arr1[i]+'0%</text> </g>';
  x+=20;
  }
  out +='<line x1="0" y1="0" x2="0" y2="250" stroke="black" />';
  out +='<text transform="rotate(-90)" y="6" dy=".71em" style="text-anchor: end;"></text>';
  out +='</g>';
return out;
},

bar:function(arr){
out ='<svg class="img" width="100%" height="200" viewBox="0 0 300 350">';
out+=this.canvas(arr);

y=250;
x=20;
for(i in arr){
h=arr[i].isi;
y2=y-h;
out +='<rect class="chart-bar"  width="19" height="'+h+'" x="'+x+'" y="'+y2+'"></rect>';
x+=20;
h+=20;
}
out +='</svg>';
return out;
},

line:function(arr){
out ='<svg class="img" width="100%" height="200" viewBox="0 0 300 350">';
out+=this.canvas(arr);

out +='<linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">';
out +='<stop offset="0%" style="stop-color:rgba(99,224,238,.5);stop-opacity:1"></stop>';
out +='<stop offset="100%" style="stop-color:white;stop-opacity:0"></stop>';
out +='</linearGradient>';

a=30;
nah='';
for(i=0; i<arr.length; i++){
nah+= a+','+arr[i].isi+' ';
out +='<circle cx="'+a+'" cy="'+arr[i].isi+'" r="2"></circle>';
a +=20;
}

nah2='30,300 '+nah+ ' 210,300 ';
out +='<polyline fill="url(#grad)" stroke="#34becd" stroke-width="0" points="'+nah2+'"></polyline>';
out +='<polyline fill="none" stroke="#34becd" stroke-width="2" points="'+nah+'"></polyline>';
out +='</svg>';
return out;
},
}
