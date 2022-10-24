export function cargarPokemons (){
    var bartxt = document.getElementById('body-pokesearch-bar').value;
    console.log(bartxt);
    if(bartxt != null && bartxt != ""){
        fetch('https://pokeapi.co/api/v2/pokemon/'+bartxt)
        .then(res => res.json())
        .then(response =>{

            console.log(response)
        })
    }
}



export function cargarTodosPokemons () {
    var startNo = Math.floor(Math.random() * 898) + 1;
    /*https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0*/
    var bartxt = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset="+startNo;
    fetch(bartxt)
    .then(res => res.json())
    .then(response =>{
        console.log(startNo)
        console.log(response)
        console.log(response.results.length)
        var data = response.results;

        for(var i = 0; i <= response.results.length; i++){
            var temp_name = data[i].name;
            dataPk(temp_name)
        }
        /*var PrincipalDiv = document.getElementsByClassName("body-pokesearch-content");*/
        
        
    })
}

function dataPk(name){
    console.log(name)
    fetch("https://pokeapi.co/api/v2/pokemon/"+ name)
    .then(res => res.json() )
    .then(response => {
        console.log(response.types[0].type.name)
    }) 
}