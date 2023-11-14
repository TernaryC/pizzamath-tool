function makeOrder() {
	let sel = createSelect();
	sel.option('Medium 1-topping',     ['p', 1, 1]);
	sel.option('Medium 2-topping',     ['p', 1, 2]);
	sel.option('Medium 3-topping',     ['p', 1, 3]);
	sel.option('Medium Pan 5-topping', ['p', 1, 5]);
	sel.option('Medium Specialty',     ['p', 1, -1]);
	sel.option('Large 1-topping',      ['p', 2, 1]);
	sel.option('Large 2-topping',      ['p', 2, 2]);
	sel.option('Large 3-topping',      ['p', 2, 3]);
	sel.option('Large Specialty',      ['p', 2, -1]);
	sel.option('X-Large 1-topping',    ['p', 3, 1]);
	sel.option('16 Bread Bites',       ['b', 0]);
	sel.option('Bread Twists',         ['b', 1]);
	sel.option('Stuffed Cheesy Bread', ['b', 2]);
	sel.option('Baked Dip',            ['d', 1]);
	sel.option('Loaded Tots',          ['b', 3]);
	sel.option('8 Boneless Chicken',   ['c', 0]);
	sel.option('8 Bone-in Chicken',    ['c', 1]);
	sel.option('Specialty Chicken',    ['c', 2]);
	sel.option('Pasta',                ['s', 0]);
	sel.option('Sandwich',             ['s', 1]);
	sel.option('Salad',                ['s', 2]);
	sel.option('Dip Cup',              ['d', 0]);
	sel.option('20oz Drink',           ['l', 0]);
	sel.option('2L Drink',             ['l', 1]);
	sel.option('Lava Crunch Cakes',    ['s', 3]);
	return sel;
}
function makeSubtract() {
	let minus = createButton('-');
	minus.mousePressed(removeItem);
	return minus;
}
function makeAdd() {
	let plus = createButton('+');
	plus.mousePressed(newIng);
	return plus;
}
function makeOrderUnit() {
	let ing = createDiv();
	let ord = makeOrder();
	let minus = makeSubtract();
	ord.parent(ing);
	minus.parent(ing);
	return ing;
	
}
function removeIng() {
}
let ings = [];
function newIng() {
	let unit = makeOrderUnit();
	unit.parent('ingredientmenu');
	ings.push(unit);
}
function setup() {
	let ver = select('version');
	ver.html('Version 1.0.7');
	console.log('Version 1.0.7');
	let ingmenu = createDiv();
	ingmenu.id('ingredientmenu');
	let ingdiv = createDiv();
	let plusdiv = createDiv();
	ingdiv.parent(ingmenu);
	plusdiv.parent(ingmenu);
	let plus = makeAdd();
	plus.parent(plusdiv);
	newIng();
}
function draw() {
	
}