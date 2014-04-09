function translate(string){
	
	var array = string.split(" ");
	for (var i = 0; i < array.length; i++){
			if (/[aeiouAEIOU]/.test(array[i][0])){
			 array[i] = array[i].concat("ay")
			}
		}
	string = array.join(" ");

	return string.replace(/\b([b-df-hj-np-tv-z(qu)]+)(\w+)\b/g, '$2$1ay');


}
