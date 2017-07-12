let delay = 200;
class Resource {
	constructor(name, total, max, increment, specialchance, effect, exp, maxexp, lvl) {
		this.name = name;
		this.total = total;
		this.max = max;
		this.increment = increment;
		this.specialchance = specialchance;
		this.effect = effect;
		this.exp = exp;
		this.maxexp = maxexp;
		this.lvl = lvl;
		this.basemaxexp = maxexp;
	}
} 
let food = new Resource('food',0,100,1,1,1,0,100,1);
let wood = new Resource('wood',0,100,1,1,1,0,100,1);
let stone = new Resource('stone',0,100,1,1,1,0,100,1);



//fixa detta!
class Building {
	constructor(name, total, cost=food) {
		this.name = name;
		this.total = total;
		this.cost.food = cost.food;
	}
}
let woodhouse = new Building('woodhouse',0,);

document.getElementById('gatherfood').addEventListener('click', function(){gather(food)});
document.getElementById('gatherwood').addEventListener('click', function(){gather(wood)});
document.getElementById('gatherstone').addEventListener('click', function(){gather(stone)});
function gather(resource) {
	resource.total += resource.increment;
	resource.exp += resource.increment;
	
	if (resource.exp >= resource.maxexp) {
		lvlup(resource);
	}

	if (resource.total >= resource.max) {
		resource.total = resource.max;
	}

}

function progressbar(progressbar, number, maxnumber) {
	let procent = (number / maxnumber) * 100;
	progressbar.style.width = procent + '%';
}

function lvlup(resource) {
	resource.lvl ++;
	resource.exp = 0;
	resource.maxexp = resource.basemaxexp * Math.pow(3, resource.lvl - 1);
	resource.increment = 1 * Math.pow(2, resource.lvl - 1);
}

function round(input) {
    var output = Math.round(input * 100) / 100;
    return output;
}


function build(building) {

}




function updatetext() {
	document.getElementById('foodtext').innerHTML = "Mat: "+ food.total + "/" + food.max;
	document.getElementById('woodtext').innerHTML = "Trä: "+ wood.total + "/" + wood.max;
	document.getElementById('stonetext').innerHTML = "Sten: "+ stone.total + "/" + stone.max;

	document.getElementById('foodexptext').innerHTML = "Exp: " + food.exp + "/" + food.maxexp + " (" + round((food.exp / food.maxexp) * 100)  + "%) " + "Level: " + food.lvl;
	document.getElementById('woodexptext').innerHTML = "Exp: " + wood.exp + "/" + wood.maxexp + " (" + round((wood.exp / wood.maxexp) * 100) + "%) " + "Level: " + wood.lvl;
	document.getElementById('stoneexptext').innerHTML = "Exp: " + stone.exp + "/" + stone.maxexp + " (" + round((stone.exp / stone.maxexp)) * 100 + "%) " + "Level: " + stone.lvl;
}
function updateprogressbars() {
	progressbar(document.getElementById('foodexpbar'),food.exp,food.maxexp);
	progressbar(document.getElementById('woodexpbar'),wood.exp,wood.maxexp);
	progressbar(document.getElementById('stoneexpbar'),stone.exp,stone.maxexp);
}



document.getElementById('buildingbutton').addEventListener('click', function(){paneselect(buildingspane)});
document.getElementById('upgradebutton').addEventListener('click', function(){paneselect(upgradespane)});
document.getElementById('workbutton').addEventListener('click', function(){paneselect(workspane)});
function paneselect(name) {
	if (name == buildingspane) {
		document.getElementById('buildingbutton').className = "panebutton selected"
		document.getElementById('upgradebutton').className = "panebutton"
		document.getElementById('workbutton').className = "panebutton"
		
		document.getElementById('buildingspane').style.display = "block";
		document.getElementById('upgradespane').style.display = "none";
		document.getElementById('workspane').style.display = "none";
	}
	if (name == upgradespane) {
		document.getElementById('buildingbutton').className = "panebutton"
		document.getElementById('upgradebutton').className = "panebutton selected"
		document.getElementById('workbutton').className = "panebutton"
				
		document.getElementById('buildingspane').style.display = "none";
		document.getElementById('upgradespane').style.display = "block";
		document.getElementById('workspane').style.display = "none";
	}
	if (name == workspane) {
		document.getElementById('buildingbutton').className = "panebutton"
		document.getElementById('upgradebutton').className = "panebutton"
		document.getElementById('workbutton').className = "panebutton selected"
				
		document.getElementById('buildingspane').style.display = "none";
		document.getElementById('upgradespane').style.display = "none";
		document.getElementById('workspane').style.display = "block";
	}

}


function update() {
	updatetext();
	updateprogressbars();
}


setInterval(update,delay);