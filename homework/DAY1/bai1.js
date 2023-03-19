
let input = document.getElementById("input")


document.getElementById("submit").addEventListener("click", function(){
	document.getElementById("nation-view").innerHTML="You are viewing stats in " + input.value
	fetch("https://corona.lmao.ninja/v2/countries/" + input.value  )
	.then((response)=>{
		return response.json();
	})
	.then((data)=>{
		console.log(data)
		document.getElementById("case").innerHTML = data.cases
		document.getElementById("death").innerHTML = data.deaths
		document.getElementById("recover").innerHTML = data.recovered
	})

})


