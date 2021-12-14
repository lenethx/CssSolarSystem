//este es el peor codigo que escribi en mi vida

// this can all probably be replaced with this for better performance https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice

//also add this to randomizer to get fewer asteroids oj the edge of the belt https://en.wikipedia.org/wiki/Bell_shaped_function

console.log("js loaded")
for(var juampi = 0; juampi<300; juampi++){
    asteroidtime = Math.random() * (39 - 33) + 33;
    asteroidsize = Math.random() * (1 - 0.5) + 0.5;
    asteroidbrightness = Math.random() * (200 - 100) + 100;
    asteroiddistance = Math.random() * (180 - 150) + 300;
    asteroiddelay = Math.random() * (39 - 0) + 0;
    var asteroidhtml = `<div id="asteroid-y`+ juampi.toString() +`"><div id="asteroid`+ juampi.toString() +`"></div></div>`;

    var asteroidcss = `
        #asteroid-y`+ juampi.toString() +`{
            position: absolute;
            animation: asteroid-r-y`+ juampi.toString() +` ` + asteroidtime.toString() + `s;
            animation-iteration-count: infinite;
            animation-timing-function:ease-in-out;
            animation-delay:` + asteroiddelay.toString() + `s;
        }

        #asteroid`+ juampi.toString() +`{
            position: relative;
            width:` + asteroidsize.toString() + `px;
            height: ` + asteroidsize.toString() + `px;
            border-radius: 50%;
            background-color: rgb(` + asteroidbrightness.toString() + `, 100, 100);
            animation: asteroid-r-x`+ juampi.toString() +` ` + asteroidtime.toString() + `s;
            animation-iteration-count: infinite;
            animation-timing-function:ease-in-out;
            animation-delay: ` + (asteroidtime/4+asteroiddelay).toString() + `s;
            box-shadow:  0 0 3px  rgb(255, 100, 100);
        }

        @keyframes asteroid-r-y`+ juampi.toString() +`{
            0%{transform: translateY(-` + asteroiddistance.toString() + `px);}
            50%{transform: translateY(` + asteroiddistance.toString() + `px);}    
            100%{transform: translateY(-` + asteroiddistance.toString() + `px);}}
        @keyframes asteroid-r-x`+ juampi.toString() +`{
            0%{transform: translateX(-` + asteroiddistance.toString() + `px);}
            50%{transform: translateX(` + asteroiddistance.toString() + `px);}
            100%{transform: translateX(-` + asteroiddistance.toString() + `px);}}
    `;
    
    console.log(asteroidhtml)
    document.getElementById("ssys").innerHTML += asteroidhtml;

    var element = document.getElementById("ssys2");


    if(typeof(element) != 'undefined' && element != null){
        document.getElementById("ssys2").innerHTML += asteroidhtml;
    }
    document.getElementById("asteroidstyles").innerHTML += asteroidcss;


}



