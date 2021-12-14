function httpGetAsync(theUrl, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }


htmlstr=`<div class="sun"><div class="pinfo border border-white rounded">
<h6>El Sol</h6>
<img src="img/sun.png" alt="Imagen del Sol">
<p>El Sol es una estrella que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario.​ Es una esfera casi perfecta de plasma, con un movimiento convectivo interno que genera un campo magnético a través de un proceso de dinamo.</p>
</div></div>`;
cssstr="";
maxa=0;
maxp=0;
maxs=0;
maxm=0;
mina=9999999999;
minp=9999999999;
mins=9999999999;
minm=9999999999;
weird=[];
weird2=[];
weird3=[];
//https://api.le-systeme-solaire.net/rest
httpGetAsync("https://api.le-systeme-solaire.net/rest/bodies", function(result){
	JSON.parse(result).bodies.forEach(function(body){
		if (true){
		if(body.aphelion && body.aphelion > maxa){
			maxa=body.aphelion
		}
		if(body.aphelion && body.aphelion < mina){
			mina=body.aphelion
		}
		if(body.perihelion && body.perihelion > maxp){
			maxp=body.perihelion
		}
		if(body.perihelion && body.perihelion < minp){
			minp=body.perihelion
		}
		if(body.sideralOrbit && body.sideralOrbit > maxs){
			maxs=body.sideralOrbit
		}
		if (body.sideralOrbit<0){
			weird.push(body);
		} else 
		if (body.sideralOrbit<87){
			weird2.push(body);
		}
		if(body.sideralOrbit && body.sideralOrbit < mins){
			mins=body.sideralOrbit
			
		}
		if(body.equaRadius && body.equaRadius > maxm){
			maxm=body.equaRadius
		}
		if (body.equaRadius<1000 && body.meanRadius<1000){
			weird3.push(body);
		}
		if(body.equaRadius && body.equaRadius < minm){
			minm=body.equaRadius
			
			
		}

		console.log(body);}

		body.radius= body.equaRadius>body.meanRadius ? body.equaRadius : body.meanRadius;  
		body.className="p-"+body.englishName.replaceAll(' ', "-"); 
		if (body.isPlanet){
			temphtmlstr=`<div id="${body.className}-y">
						<div id="${body.className}"><div class="pinfo border border-white rounded">
							<h6>${body.englishName}</h6>
							<img src="" alt="Imagen de ${body.className}">
							<p>Venus es el segundo planeta del sistema solar en orden de distancia desde el Sol, el sexto en cuanto a tamaño, ordenados de mayor a menor. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (gr. Afrodita). Se trata de un planeta de tipo rocoso y terrestre, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas.</p>
						</div></div>
					</div>   `;

			tempcssstr=
			`#${body.className}-y {
			animation: ${body.className}-r-y ${8.355353975990727*Math.log(0.0146028196568156*body.sideralOrbit)}s;
			position:absolute;
			animation-iteration-count: infinite;
			animation-timing-function:ease-in-out;
			}
			#${body.className} {
			position: relative;
			width: ${6.323798797357731*Math.log(0.0016070470990978954*body.radius) > 0 ? 6.323798797357731*Math.log(0.0016070470990978954*body.radius) : 2}px;
			height: ${6.323798797357731*Math.log(0.0016070470990978954*body.radius) > 0 ? 6.323798797357731*Math.log(0.0016070470990978954*body.radius) : 2}px;
			border-radius: 50%;
			background-color: rgb(165, 165, 165);
			animation: ${body.className}-r-x ${8.355353975990727*Math.log(0.0146028196568156*body.sideralOrbit)}s;
			animation-iteration-count: infinite;
			animation-timing-function:ease-in-out;
			animation-delay: ${8.355353975990727*Math.log(0.0146028196568156*body.sideralOrbit)/4}s;
			/*box-shadow:  0 0 6px  rgb(165, 165, 165);*/
			} 
			@keyframes ${body.className}-r-y{
			0%{transform: translateY(-${97.29893962951623*Math.log(2.886872302997443e-8*body.perihelion)}px);}
			50%{transform: translateY(${97.29893962951623*Math.log(2.886872302997443e-8*body.perihelion)}px);}    
			100%{transform: translateY(-${97.29893962951623*Math.log(2.886872302997443e-8*body.perihelion)}px);}}
			@keyframes ${body.className}-r-x{
			0%{transform: translateX(-${97.29893962951623*Math.log(2.886872302997443e-8*body.perihelion)}px);}
			50%{transform: translateX(${97.29893962951623*Math.log(2.886872302997443e-8*body.perihelion)}px);}
			100%{transform: translateX(-${97.29893962951623*Math.log(2.886872302997443e-8*body.perihelion)}px);}}`;

			htmlstr+=temphtmlstr;
			cssstr+=tempcssstr;
		}
	});
	
//https://stackoverflow.com/questions/34035422/google-image-search-says-api-no-longer-available
//https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&titles=Neptune

//console.log(`max aphelion: ${maxa}  min aphelion: ${mina}  \nmax periphelion: ${maxp}  min periphelion: ${minp}  \nmax sideral Orbit: ${maxs}  min sideral Orbit: ${mins}  \nmax EQ Radius: ${maxm}  min EQ Radius: ${minm}\n`,weird,'\n',weird2,'\n',weird3);
document.getElementById('ssys').innerHTML=htmlstr;
var styleSheet = document.createElement("style");
styleSheet.innerHTML = cssstr;
document.head.appendChild(styleSheet);
});