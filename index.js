function search(){
			/*alert("OK");*/
	var product = [
		{
			'name' : 'A',
			'size' : 40,
			'color' : ['red', 'green']
		},
		{
			'name' : 'B',
				'size' : 30,
				'color' : ['yellow', 'blue']
		}
	];
	var input = document.getElementById("productnameinput").value;
	for(var i = 0;i < product.length; i++){
		if(product[i].name === input){
			console.log('thisproduct',product[i]);
		}
	}
}