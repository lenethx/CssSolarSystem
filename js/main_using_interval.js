//este es el peor codigo que escribi en mi vida
var astcounter = 0;

console.log("js loaded")

function createasteroid(juampi){

    asteroidtime = Math.random() * (39 - 33) + 33;
    asteroidsize = Math.random() * (1 - 0.5) + 0.5;
    asteroidbrightness = Math.random() * (200 - 100) + 100;
    asteroiddistance = Math.random() * (180 - 150) + 150;
    var asteroidhtml = `<div id="asteroid-y`+ juampi.toString() +`"><div id="asteroid`+ juampi.toString() +`"></div></div>`;

    var asteroidcss = `
        #asteroid-y`+ juampi.toString() +`{
            position: absolute;
            animation: asteroid-r-y`+ juampi.toString() +` ` + asteroidtime.toString() + `s;
            animation-iteration-count: infinite;
            animation-timing-function:ease-in-out;
        }

        #asteroid`+ juampi.toString() +`{
            position: relative;
            width:` + asteroidsize.toString() + `px;
            height: ` + asteroidsize.toString() + `px;
            border-radius: 50%;
            background-color: rgb(0, ` + asteroidbrightness.toString() + `, ` + asteroidbrightness.toString() + `);
            animation: asteroid-r-x`+ juampi.toString() +` ` + asteroidtime.toString() + `s;
            animation-iteration-count: infinite;
            animation-timing-function:ease-in-out;
            animation-delay: ` + (asteroidtime/4).toString() + `s;
            box-shadow:  0 0 3px  rgb(0, 0, 255);
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
    document.getElementById("asteroidstyles").innerHTML += asteroidcss;
    astcounter += 1;

}

setInterval(createasteroid, 100, astcounter);


