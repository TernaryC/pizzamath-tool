function makeOrder() {
	let sel = createSelect();                        
	sel.option('Medium any-topping',   0b10100000);
	sel.option('Medium 1-topping',     0b10100001);
	sel.option('Medium 2-topping',     0b10100010);
	sel.option('Medium 3-topping',     0b10100011);
	sel.option('Medium Pan 5-topping', 0b10100101);
	sel.option('Medium Specialty',     0b10100111);
	sel.option('Large any-topping',    0b10101000);
	sel.option('Large 1-topping',      0b10101001);
	sel.option('Large 2-topping',      0b10101010);
	sel.option('Large 3-topping',      0b10101011);
	sel.option('Large Specialty',      0b10101111);
	sel.option('X-Large 1-topping',    0b10110001);
	sel.option('16 Bread Bites',       0b11000000);
	sel.option('Bread Twists',         0b11001000);
	sel.option('Stuffed Cheesy Bread', 0b11010000);
	sel.option('Loaded Tots',          0b11011000);
	sel.option('8 Boneless Chicken',   0b11100000);
	sel.option('Specialty Chicken',    0b11100111);
	sel.option('8 Bone-in Chicken',    0b11101000);
	sel.option('Salad',                0b10010000);
	sel.option('Sandwich',             0b10010001);
	sel.option('Pasta',                0b10010010);
	sel.option('Lava Crunch Cakes',    0b10010011);
	sel.option('Dip Cup',              0b10000000);
	sel.option('Baked Dip',            0b10000001);  
	sel.option('20oz Drink',           0b10011000);
	sel.option('2L Drink',             0b10011001);
	return sel;
}
function makeSubtract(id) {
	let minus = createButton('-');
	minus.mousePressed(() => removeIng(id));
	return minus;
}
function makeAdd() {
	let plus = createButton('+');
	plus.mousePressed(newIng);
	return plus;
}
function makeOrderUnit(id) {
	let ing = createDiv();
	let ord = makeOrder();
	let minus = makeSubtract(id);
	ord.parent(ing);
	minus.parent(ing);
	return ing;
	
}
function removeIng(id) {
	//console.log('FUCK INGREDIENT NUMBER '+id);
	let unit = ings[id];
	for (c of unit.child()) { c.remove() };
	unit.remove();
	ings[id] = null;
}
let ings = [];
function newIng() {
	let unit = makeOrderUnit(ings.length);
	unit.id('ingredient'+ings.length);
	unit.parent('ingredientmenu');
	ings.push(unit);
}
let version = '1.1.0';
function setup() {
	let ver = select('#version');
	ver.html(version);
	console.log(version);
	
	let ingmenu = createDiv();
	let ingdiv = createDiv();
	ingdiv.id('ingredientmenu');
	let plusdiv = createDiv();
	ingdiv.parent(ingmenu);
	plusdiv.parent(ingmenu);
	let plus = makeAdd();
	plus.parent(plusdiv);
	newIng();
	
	canvas = createCanvas();
	canvas.position(windowWidth, 10);
}
function draw() {
	
}