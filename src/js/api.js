import BugIC_Big from '../img/BugIC_Big.png';
import DarkIC_Big from '../img/DarkIC_Big.png';
import DragonIC_Big from '../img/DragonIC_Big.png';
import ElectricIC_Big from '../img/ElectricIC_Big.png';
import FairyIC_Big from '../img/FairyIC_Big.png';
import FightingIC_Big from '../img/FightingIC_Big.png';
import FireIC_Big from '../img/FireIC_Big.png';
import FlyingIC_Big from '../img/FlyingIC_Big.png';
import GhostIC_Big from '../img/GhostIC_Big.png';
import GrassIC_Big from '../img/GrassIC_Big.png';
import GroundIC_Big from '../img/GroundIC_Big.png';
import IceIC_Big from '../img/IceIC_Big.png';
import NormalIC_Big from '../img/NormalIC_Big.png';
import PoisonIC_Big from '../img/PoisonIC_Big.png';
import PsychicIC_Big from '../img/PsychicIC_Big.png';
import RockIC_Big from '../img/RockIC_Big.png';
import SteelIC_Big from '../img/SteelIC_Big.png';
import UnknownIC_Big from '../img/UnknownIC_Big.png';
import WaterIC_Big from '../img/WaterIC_Big.png';




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



export async function cargarTodosPokemons () {
    var startNo = Math.floor(Math.random() * 898) + 1;
    /*https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0*/
    var bartxt = "https://pokeapi.co/api/v2/pokemon/?limit=10&offset="+startNo;
    await fetch(bartxt)
    .then(res => res.json())
    .then(response =>{
        console.log(startNo)
        console.log(response)
        console.log(response.results.length)
        var data = response.results;

        for(var i = 0; i <= response.results.length; i++){
            var temp_name = data[i].name;
            console.log(temp_name)
            dataPk(temp_name)
        }
        
        
        
    })
}

async function dataPk(name){
    await fetch("https://pokeapi.co/api/v2/pokemon/"+ name)
    .then(res => res.json() )
    .then(data => {

        /* Utilities */
        var bimg_path = "IC_Big"

        var type = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
        var typeRute = type + bimg_path;
        typeRute = verfType(typeRute)
        console.log(typeRute)
        

        /* Components */
        var home = document.getElementById("body-pokesearch-content");

        var principalDiv = document.createElement('div')
        principalDiv.setAttribute('class','pk')

        var nombre = document.createElement('p')
        nombre.setAttribute('class','pk-name')
        nombre.textContent=data.name

        var sprite = document.createElement('img')
        sprite.setAttribute('src',data.sprites.front_default)
        sprite.setAttribute('class','pk-sprite')


        
        var tp1 = document.createElement('img')
        tp1.setAttribute('src',typeRute)
        tp1.setAttribute('class','pk-type1')

        var tp2 = document.createElement('img')

        home.appendChild(principalDiv);
        principalDiv.appendChild(sprite);        
        principalDiv.appendChild(tp1);        


        if (data.types[1] != null && data.types[1] != "undefined"){
            var type2 = data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);
            typeRute = type2 + bimg_path;
            typeRute = verfType(typeRute)
            tp2.setAttribute('src',typeRute)
            tp2.setAttribute('class','pk-type2')

            principalDiv.appendChild(tp2);        


        }

        principalDiv.appendChild(nombre);        




    }) 
}


function verfType(ntype){
    if (ntype== 'BugIC_Big' ){
        ntype = BugIC_Big
    }
    if (ntype== 'DarkIC_Big' ){
        ntype = DarkIC_Big
    }if (ntype== 'DragonIC_Big' ){
        ntype = DragonIC_Big
    }if (ntype== 'ElectricIC_Big' ){
        ntype = ElectricIC_Big
    }if (ntype== 'FairyIC_Big' ){
        ntype = FairyIC_Big
    }if (ntype== 'FightingIC_Big' ){
        ntype = FightingIC_Big
    }if (ntype== 'FireIC_Big' ){
        ntype = FireIC_Big
    }if (ntype== 'FlyingIC_Big' ){
        ntype = FlyingIC_Big
    }if (ntype== 'GhostIC_Big' ){
        ntype = GhostIC_Big
    }if (ntype== 'GrassIC_Big' ){
        ntype = GrassIC_Big
    }if (ntype== 'IceIC_Big' ){
        ntype = IceIC_Big
    }if (ntype== 'NormalIC_Big' ){
        ntype = NormalIC_Big
    }if (ntype== 'PoisonIC_Big' ){
        ntype = PoisonIC_Big
    }if (ntype== 'PsychicIC_Big' ){
        ntype = PsychicIC_Big
    }if (ntype== 'RockIC_Big' ){
        ntype = RockIC_Big
    }if (ntype== 'SteelIC_Big' ){
        ntype = SteelIC_Big
    }if (ntype== 'UnknownIC_Big' ){
        ntype = UnknownIC_Big
    }if (ntype== 'WaterIC_Big' ){
        ntype = WaterIC_Big
    }if (ntype== 'GroundIC_Big' ){
        ntype = GroundIC_Big
    }

    return ntype
}