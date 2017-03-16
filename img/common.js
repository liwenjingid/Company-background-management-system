function swc(a,b){
	var V=b.split(':'),tit=V[0],tag1=V[1],tag2=V[2],t=$(tit+'_tit '+tag1),l=$(tit+'_lib '+tag2);
	for(var i=0;i<t.length;i++)t[i].className=(a==i)?'sel':'';
	$(tit+'_ctn').html($(l[a]).html());
}
