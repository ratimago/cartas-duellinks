(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1050,
	height: 515,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.foodtruckllanta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000100").beginStroke().moveTo(-2.9,2.8).curveTo(-4,1.7,-4,-0).lineTo(-4,-0.5).curveTo(-3.8,-2,-2.7,-2.9).curveTo(-1.5,-4,0,-4).curveTo(1.5,-4,2.6,-2.9).curveTo(3.7,-2,4,-0.5).lineTo(4,-0).curveTo(4,1.7,2.8,2.8).curveTo(1.6,4,0,4).curveTo(-1.7,4,-2.9,2.8).closePath();
	this.shape.setTransform(0.1,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#878787").beginStroke().moveTo(-1.1,19.1).lineTo(-1.1,5.9).curveTo(-1.1,5,-1.9,4.7).curveTo(-2.8,4.3,-3.4,5).lineTo(-12.7,14.3).lineTo(-14.3,12.8).lineTo(-4.9,3.4).curveTo(-4.3,2.8,-4.6,1.9).curveTo(-5,1.1,-5.9,1.1).lineTo(-19.1,1.1).lineTo(-19.1,-1.1).lineTo(-5.9,-1.1).curveTo(-5,-1.1,-4.6,-1.9).curveTo(-4.3,-2.8,-4.9,-3.4).lineTo(-14.3,-12.8).lineTo(-12.7,-14.3).lineTo(-3.4,-5).curveTo(-2.8,-4.3,-1.9,-4.7).curveTo(-1.1,-5,-1.1,-5.9).lineTo(-1.1,-19.1).lineTo(1.1,-19.1).lineTo(1.1,-5.9).curveTo(1.1,-5,1.9,-4.7).curveTo(2.8,-4.3,3.4,-5).lineTo(12.8,-14.3).lineTo(14.3,-12.8).lineTo(5,-3.4).curveTo(4.3,-2.8,4.7,-1.9).curveTo(5,-1.1,6,-1.1).lineTo(19.1,-1.1).lineTo(19.1,1.1).lineTo(6,1.1).curveTo(5,1.1,4.7,1.9).curveTo(4.3,2.8,5,3.4).lineTo(14.3,12.8).lineTo(12.8,14.3).lineTo(3.4,5).curveTo(2.8,4.3,1.9,4.7).curveTo(1.1,5,1.1,5.9).lineTo(1.1,19.1).closePath();
	this.shape_1.setTransform(0,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#C9C9C9").beginStroke().moveTo(2.7,6.2).lineTo(-4.6,-1.1).curveTo(-5.1,-1.6,-5,-2.2).curveTo(-5,-2.8,-4.5,-3.2).curveTo(-1,-6,3.5,-6.6).curveTo(4.1,-6.7,4.6,-6.3).curveTo(5.1,-5.9,5.1,-5.3).lineTo(5.1,5.3).curveTo(5.1,6.2,4.2,6.5).lineTo(3.6,6.6).curveTo(3.1,6.6,2.7,6.2).closePath();
	this.shape_2.setTransform(-6.1,-10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,6.5).curveTo(-5.1,6.2,-5.1,5.3).lineTo(-5.1,-5.3).curveTo(-5.1,-5.9,-4.6,-6.3).curveTo(-4.1,-6.7,-3.4,-6.6).curveTo(1,-5.9,4.5,-3.2).curveTo(5,-2.8,5,-2.2).curveTo(5.1,-1.6,4.6,-1.1).lineTo(-2.7,6.2).curveTo(-3.1,6.6,-3.6,6.6).lineTo(-4.2,6.5).closePath();
	this.shape_3.setTransform(6.2,-10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EDECEC").beginStroke().moveTo(-5,5).curveTo(-5.9,5,-6.3,4.2).curveTo(-6.6,3.3,-6,2.7).lineTo(1.3,-4.6).curveTo(1.7,-5,2.4,-5).curveTo(3,-4.9,3.4,-4.4).curveTo(5.8,-0.8,6.3,3.3).lineTo(6.4,5).closePath();
	this.shape_4.setTransform(11,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#C9C9C9").beginStroke().moveTo(-4.2,5.6).curveTo(-4.7,5.2,-4.7,4.5).lineTo(-4.7,-4.6).curveTo(-4.7,-5.5,-3.8,-5.8).curveTo(-3,-6.2,-2.3,-5.5).lineTo(4.2,1).curveTo(4.7,1.5,4.6,2.1).curveTo(4.6,2.8,4,3.1).curveTo(1,5.2,-3,5.9).lineTo(-3.2,5.9).curveTo(-3.7,5.9,-4.2,5.6).closePath();
	this.shape_5.setTransform(5.8,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.4,5).lineTo(-6.3,3.3).curveTo(-5.8,-0.8,-3.4,-4.4).curveTo(-3,-4.9,-2.4,-5).curveTo(-1.8,-5,-1.3,-4.6).lineTo(6,2.7).curveTo(6.6,3.3,6.3,4.2).curveTo(5.9,5,5,5).closePath();
	this.shape_6.setTransform(-10.9,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#EDECEC").beginStroke().moveTo(-1.9,4.7).curveTo(-2.5,4.6,-2.9,4.1).curveTo(-5.5,0.8,-6.2,-3).curveTo(-6.4,-3.7,-6,-4.2).curveTo(-5.6,-4.7,-4.9,-4.7).lineTo(4.8,-4.7).curveTo(5.8,-4.7,6.1,-3.9).curveTo(6.5,-3,5.8,-2.4).lineTo(-0.8,4.3).curveTo(-1.2,4.7,-1.8,4.7).lineTo(-1.9,4.7).closePath();
	this.shape_7.setTransform(-10.7,6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.1,5.9).curveTo(-0.7,5.3,-4,3.1).curveTo(-4.5,2.8,-4.6,2.1).curveTo(-4.7,1.5,-4.2,1).lineTo(2.3,-5.5).curveTo(3,-6.2,3.8,-5.8).curveTo(4.7,-5.5,4.7,-4.6).lineTo(4.7,4.5).curveTo(4.7,5.2,4.2,5.6).curveTo(3.8,5.9,3.3,5.9).lineTo(3.1,5.9).closePath();
	this.shape_8.setTransform(-5.7,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,4.3).lineTo(-5.8,-2.4).curveTo(-6.5,-3,-6.1,-3.9).curveTo(-5.8,-4.7,-4.8,-4.7).lineTo(4.8,-4.7).curveTo(5.5,-4.7,5.9,-4.2).curveTo(6.3,-3.7,6.2,-3).curveTo(5.4,0.9,2.9,4.1).curveTo(2.5,4.6,1.9,4.7).lineTo(1.8,4.7).curveTo(1.2,4.7,0.8,4.3).closePath();
	this.shape_9.setTransform(10.8,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#878787").beginStroke().moveTo(-14,14.1).curveTo(-19.9,8.2,-19.9,-0).lineTo(-19.7,-2.4).curveTo(-18.8,-9.8,-13.2,-14.8).curveTo(-7.6,-19.9,0,-19.9).curveTo(7.6,-19.9,13.2,-14.8).curveTo(18.8,-9.9,19.7,-2.4).curveTo(19.9,-1.2,19.9,-0).curveTo(19.9,8.2,14.1,14.1).curveTo(8.2,19.9,0,19.9).curveTo(-8.2,19.9,-14,14.1).closePath();

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000100").beginStroke().moveTo(-2.9,2.8).curveTo(-4,1.7,-4,-0).lineTo(-4,-0.5).curveTo(-3.8,-2,-2.7,-2.9).curveTo(-1.5,-4,0,-4).curveTo(1.5,-4,2.6,-2.9).curveTo(3.7,-2,4,-0.5).lineTo(4,-0).curveTo(4,1.7,2.8,2.8).curveTo(1.6,4,0,4).curveTo(-1.7,4,-2.9,2.8).closePath();
	this.shape_11.setTransform(0.1,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#878787").beginStroke().moveTo(-14,14.1).curveTo(-19.9,8.2,-19.9,-0).lineTo(-19.7,-2.4).curveTo(-18.8,-9.8,-13.2,-14.8).curveTo(-7.6,-19.9,0,-19.9).curveTo(7.6,-19.9,13.2,-14.8).curveTo(18.8,-9.9,19.7,-2.4).curveTo(19.9,-1.2,19.9,-0).curveTo(19.9,8.2,14.1,14.1).curveTo(8.2,19.9,0,19.9).curveTo(-8.2,19.9,-14,14.1).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-19.8,39.8,39.8);


(lib.foodtruckhandss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBDDDE").beginStroke().moveTo(4.5,2.9).lineTo(2.6,2.2).curveTo(0.6,1.4,-2.1,1.3).lineTo(-3.7,1.4).curveTo(-4.8,1.5,-5.3,1.4).curveTo(-6.2,1.1,-6.7,0.2).curveTo(-7.1,-0.6,-6.7,-1.5).curveTo(-6.4,-2.3,-5.6,-2.6).lineTo(-4.1,-2.9).curveTo(1.3,-3.4,5.8,-1).curveTo(6.7,-0.5,6.9,0.5).curveTo(7,1.6,6.3,2.3).curveTo(5.7,3,4.9,3).lineTo(4.5,2.9).closePath();
	this.shape.setTransform(-11,9,0.335,0.335,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DBDDDE").beginStroke().moveTo(5.1,10.2).curveTo(3.1,9.8,0.4,8.3).lineTo(-4.1,5.6).curveTo(-8.7,3,-13,0.3).lineTo(-10,-4.8).curveTo(-8.1,-7.9,-6.7,-9.7).lineTo(-6.3,-10.2).curveTo(-6.3,-10.3,-6.3,-10.3).curveTo(-6.2,-10.3,-6.2,-10.4).curveTo(-6.2,-10.4,-6.1,-10.4).curveTo(-6,-10.4,-6,-10.4).curveTo(-5.4,-10.5,-3.7,-9.3).lineTo(-1.4,-7.6).curveTo(6.6,-3.1,9.3,-1.8).curveTo(14.4,0.7,12.5,6).curveTo(11,10.4,7,10.4).curveTo(6.1,10.4,5.1,10.2).closePath();
	this.shape_1.setTransform(-10.2,10.9,0.335,0.335,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#383643").beginStroke().moveTo(-11.3,8.2).curveTo(-4.5,4.4,0.6,-1.2).curveTo(2.6,-3.5,3.6,-6.4).curveTo(4.4,-8.8,4.9,-12.8).lineTo(11.3,-10.9).curveTo(10.8,-6.7,9.7,-4.4).curveTo(8.4,-1.2,5,2.5).curveTo(0.5,7.6,-8.8,12.7).closePath();
	this.shape_2.setTransform(1.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-13,27.3,27.5);


(lib.foodtruckbags = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-8.1,12.6).curveTo(-8.3,1.5,-9.2,-5.2).lineTo(-10.3,-12.5).curveTo(-10.7,-15,-10.4,-15).lineTo(7.1,-14.9).curveTo(9.3,-5.2,10,2.2).curveTo(10.5,8.2,10.5,10.1).curveTo(10.6,12.3,10.4,12.8).lineTo(-7.9,15).curveTo(-8.1,15,-8.1,12.6).closePath().moveTo(-4.1,-12.3).curveTo(-4.1,-12.2,-4.1,-12.1).curveTo(-4.1,-12.1,-4.1,-12).curveTo(-4.1,-12,-4.1,-11.9).curveTo(-4.1,-11.9,-4.1,-11.8).lineTo(-3.5,-10.3).curveTo(-3.4,-9.6,-2.7,-9.6).lineTo(3.9,-9.6).curveTo(4.6,-9.6,4.3,-10.3).lineTo(3.8,-11.8).curveTo(3.6,-12.4,2.9,-12.4).lineTo(-3.7,-12.4).curveTo(-3.8,-12.4,-3.8,-12.4).curveTo(-3.9,-12.4,-3.9,-12.4).curveTo(-4,-12.4,-4,-12.3).curveTo(-4.1,-12.3,-4.1,-12.3).closePath();
	this.shape.setTransform(1.8,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#1D1D1D").beginStroke().moveTo(-3,-0.6).lineTo(1.8,-1.9).lineTo(3,2).closePath();
	this.shape_1.setTransform(-9.1,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#333333").beginStroke().moveTo(-0.5,7.6).lineTo(-1,-11.5).curveTo(-0.2,-9.6,0.3,-5.8).curveTo(1.5,1.7,0.7,11.5).closePath();
	this.shape_2.setTransform(-6.8,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#7E7E7E").beginStroke().moveTo(3.1,14.9).curveTo(-2.5,12.8,-2.9,12.4).curveTo(-3.5,11.9,-2.3,1.3).lineTo(-0.6,-13.9).curveTo(-0.6,-14.5,0.5,-14.9).curveTo(1.6,-14.3,2.5,0.4).curveTo(3.4,14.9,3.1,14.9).lineTo(3.1,14.9).closePath();
	this.shape_3.setTransform(-9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-12.7,24.7,30);


(lib.foodtruck004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-51.4,20.9).curveTo(-51.4,14,-46.7,9).curveTo(-42.2,3.9,-35.4,3.3).lineTo(-35.4,2.4).curveTo(-35.4,-2.6,-31.8,-6.1).curveTo(-28.2,-9.8,-23.1,-9.7).curveTo(-20.5,-9.8,-17.9,-8.6).curveTo(-15.6,-14,-10.7,-17.5).curveTo(-5.7,-20.9,0.4,-20.9).curveTo(6.7,-20.9,11.9,-17.2).curveTo(16.8,-13.7,19,-7.9).curveTo(21.7,-8.5,24.3,-8.5).curveTo(35.5,-8.5,43.5,-0.5).curveTo(51.4,7.5,51.4,18.7).lineTo(51.4,20.9).closePath();
	this.shape.setTransform(51.4,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.8,41.8);


(lib.foodtruck003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-42,17.1).curveTo(-42,11.4,-38.2,7.3).curveTo(-34.4,3.2,-28.8,2.7).lineTo(-28.9,2).curveTo(-28.9,-2.1,-26,-5.1).curveTo(-23,-8,-18.9,-8).curveTo(-16.7,-8,-14.6,-7).curveTo(-12.8,-11.5,-8.8,-14.3).curveTo(-4.7,-17.1,0.3,-17.1).curveTo(5.5,-17,9.7,-14.1).curveTo(13.8,-11.1,15.5,-6.5).curveTo(17.6,-6.9,19.8,-7).curveTo(29,-6.9,35.5,-0.5).curveTo(42,6,42,15.3).lineTo(41.9,17.1).closePath();
	this.shape.setTransform(42,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,34.1);


(lib.foodtruck002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-36.4,14.8).curveTo(-36.4,9.9,-33.1,6.3).curveTo(-29.8,2.8,-25,2.4).lineTo(-25.1,1.7).curveTo(-25.1,-1.8,-22.5,-4.4).curveTo(-20,-6.9,-16.4,-6.9).curveTo(-14.6,-6.9,-12.7,-6.1).curveTo(-11.1,-9.9,-7.6,-12.3).curveTo(-4.1,-14.8,0.3,-14.8).curveTo(4.8,-14.8,8.4,-12.2).curveTo(11.9,-9.7,13.4,-5.6).curveTo(15.3,-6,17.2,-6).curveTo(25.2,-6,30.8,-0.4).curveTo(36.4,5.3,36.4,13.2).lineTo(36.3,14.8).closePath();
	this.shape.setTransform(36.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.9,29.6);


(lib.foodtruck001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-33.4,13.6).lineTo(-33.5,12.1).curveTo(-33.5,4.9,-28.3,-0.4).curveTo(-23.1,-5.6,-15.8,-5.6).curveTo(-14.2,-5.6,-12.3,-5.2).curveTo(-11,-8.9,-7.7,-11.3).curveTo(-4.4,-13.6,-0.3,-13.6).curveTo(3.7,-13.6,7,-11.3).curveTo(10.2,-9.1,11.7,-5.6).curveTo(13.4,-6.3,15.1,-6.3).curveTo(18.4,-6.3,20.7,-4).curveTo(23,-1.7,23,1.6).lineTo(23,2.2).curveTo(27.4,2.6,30.4,5.8).curveTo(33.5,9.1,33.5,13.6).closePath();
	this.shape.setTransform(33.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,27.2);


(lib.foodtruck006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#231C1C").beginStroke().moveTo(-0.8,-1.7).lineTo(0.6,-1.4).lineTo(1.2,-0.2).curveTo(0.7,-0,0.6,0.7).curveTo(0.6,1.6,0.5,1.6).curveTo(0.3,1.7,-0,1.3).curveTo(-0.3,0.8,-0.4,0.8).curveTo(-0.7,0.8,-1.1,1.7).curveTo(-1.2,-0.1,-0.8,-1.7).closePath();
	this.shape.setTransform(1.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.3,3.5);


(lib.foodtruck005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#231C1C").beginStroke().moveTo(-0.2,0.5).curveTo(-0.4,0,-0.7,0.1).curveTo(-1.1,0.1,-1.5,-0.4).lineTo(-0.1,-1.3).lineTo(1.5,-0.5).curveTo(1,0.4,0,1.3).lineTo(-0.2,0.5).closePath();
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,2.7);


(lib.foodtruckconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.foodtruckhandss();
	this.instance.parent = this;
	this.instance.setTransform(1.9,0.8,1.215,1.215,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-3,5.3).curveTo(-4.3,4,-4.3,2.2).lineTo(-4.3,-2.2).curveTo(-4.3,-4,-3,-5.3).curveTo(-1.8,-6.5,-0,-6.5).curveTo(1.8,-6.5,3,-5.3).curveTo(4.3,-4,4.3,-2.2).lineTo(4.3,2.2).curveTo(4.3,4,3,5.3).curveTo(1.8,6.5,-0,6.5).curveTo(-1.8,6.5,-3,5.3).closePath();
	this.shape.setTransform(15.5,-18.4,0.335,0.335,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-4.1,30.5).curveTo(-12.2,30.1,-18.3,22.3).curveTo(-24,15,-25.5,4.5).curveTo(-27.2,-6.3,-23.5,-15.1).curveTo(-19.3,-24.9,-9.6,-28.8).curveTo(-6.8,-30.1,-1.3,-30.4).curveTo(5,-30.8,10.7,-29.6).curveTo(26.1,-26.3,26.1,-13.1).curveTo(26.1,-11.3,24.7,-10).curveTo(22.1,-7.7,15.9,-7.4).curveTo(14.8,-7.3,4.5,-7.4).curveTo(-2.3,-7.5,-2.7,11.6).curveTo(-2.9,16.4,-2.8,24.7).curveTo(-3,30.5,-4.1,30.5).lineTo(-4.1,30.5).closePath();
	this.shape_1.setTransform(14.1,-23.3,0.335,0.335,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-1.1,26.7).curveTo(-9.9,23.6,-13.3,21.2).curveTo(-18.4,17.6,-18.4,12).lineTo(-18.4,-16.5).curveTo(-18.8,-17.7,-18.9,-18.7).curveTo(-19,-20.6,-17.7,-22).curveTo(-13.5,-26.6,5,-27.3).curveTo(7.8,-27.4,10.3,-22.7).curveTo(12.5,-18.6,12.6,-15.1).lineTo(12.6,-5.6).curveTo(16,-0.2,18.8,7.5).curveTo(19.1,8.4,18.6,9.1).curveTo(18.1,9.8,17.2,9.8).lineTo(12.6,9.8).lineTo(12.6,17).curveTo(12.6,22.3,8.2,25.4).curveTo(5.5,27.3,2.5,27.3).curveTo(0.7,27.3,-1.1,26.7).closePath();
	this.shape_2.setTransform(9.4,-18.6,0.335,0.335,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#383643").beginStroke().moveTo(-28.7,61.6).lineTo(-28.7,-15.7).curveTo(-28.7,-32.9,-22.2,-47.5).curveTo(-15.3,-62.9,-6.1,-62.9).lineTo(12.5,-57.7).curveTo(16.6,-52.4,21.3,-32.2).curveTo(25.5,-14.2,25.7,-7.5).lineTo(27.9,5.3).lineTo(28.7,61.6).curveTo(28.7,62.9,0,62.9).curveTo(-28.7,62.9,-28.7,61.6).closePath();
	this.shape_3.setTransform(13.8,12.4,0.335,0.335,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-3.3,9.3).lineTo(-3.3,-5.5).lineTo(3.3,-9.3).lineTo(3.3,9.3).closePath();
	this.shape_4.setTransform(12.7,-8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#3F3F3F").setStrokeStyle(3.4,1,1).moveTo(7.3,5.8).curveTo(7.1,6.1,5.7,5.6).curveTo(5.2,5.5,4.5,5.1).curveTo(4.2,4.9,3.8,4.7).curveTo(2.8,4,1.6,3.1).curveTo(1.4,2.9,1.2,2.8).curveTo(-1.8,0.3,-4.6,-2.7).curveTo(-7.4,-5.7,-7.3,-5.9).curveTo(-7.1,-6.1,-4.8,-4.6).curveTo(-2.6,-3,0.4,-0.6).curveTo(1,-0.1,1.6,0.4).curveTo(3.2,1.7,4.5,2.8).curveTo(5,3.3,5.5,3.7).curveTo(6,4.3,6.5,4.7).curveTo(7.4,5.7,7.3,5.8).closePath();
	this.shape_5.setTransform(-19,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#292929").beginStroke().moveTo(-11.7,7.9).curveTo(-11.8,7.8,-10.9,-5.5).curveTo(-11,-5.6,0.2,-7.9).lineTo(11.8,1.3).lineTo(7.8,4.2).lineTo(3.7,7.1).lineTo(-4,7.5).lineTo(-11.6,7.9).lineTo(-11.7,7.9).closePath();
	this.shape_6.setTransform(-24.4,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#212026").beginStroke().moveTo(-12.1,9.4).curveTo(-22.8,-2.5,-29,-14.7).curveTo(-35.2,-26.7,-36.6,-38).lineTo(-16.2,-39.9).curveTo(-14.8,-29.3,-10,-18.9).curveTo(-5.5,-9.1,1,-1.8).curveTo(16.4,15.3,36.6,26.5).lineTo(29.1,40).curveTo(1.5,24.6,-12.1,9.4).closePath();
	this.shape_7.setTransform(1.5,4.8,0.407,0.407,0,42,-138);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DBDDDE").beginStroke().moveTo(4.5,2.9).lineTo(2.6,2.2).curveTo(0.6,1.4,-2.1,1.3).lineTo(-3.7,1.4).curveTo(-4.8,1.5,-5.3,1.4).curveTo(-6.2,1.1,-6.7,0.2).curveTo(-7.1,-0.6,-6.7,-1.5).curveTo(-6.4,-2.3,-5.6,-2.6).lineTo(-4.1,-2.9).curveTo(1.3,-3.4,5.8,-1).curveTo(6.7,-0.5,6.9,0.5).curveTo(7,1.6,6.3,2.3).curveTo(5.7,3,4.9,3).lineTo(4.5,2.9).closePath();
	this.shape_8.setTransform(-17.9,2.9,0.406,0.406,0,42,-138);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DBDDDE").beginStroke().moveTo(5.1,10.2).curveTo(3.1,9.8,0.4,8.3).lineTo(-4.1,5.6).curveTo(-8.7,3,-13,0.3).lineTo(-10,-4.8).curveTo(-8.1,-7.9,-6.7,-9.7).lineTo(-6.3,-10.2).curveTo(-6.3,-10.3,-6.3,-10.3).curveTo(-6.2,-10.3,-6.2,-10.4).curveTo(-6.2,-10.4,-6.1,-10.4).curveTo(-6,-10.4,-6,-10.4).curveTo(-5.4,-10.5,-3.7,-9.3).lineTo(-1.4,-7.6).curveTo(6.6,-3.1,9.3,-1.8).curveTo(14.4,0.7,12.5,6).curveTo(11,10.4,7,10.4).curveTo(6.1,10.4,5.1,10.2).closePath();
	this.shape_9.setTransform(-18.8,5.2,0.406,0.406,0,42,-138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-33.5,60.1,67);


(lib.foodtruckbaksies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-62.7,5).lineTo(-62.7,-4.9).lineTo(62.8,-4.9).lineTo(62.8,5).closePath();
	this.shape.setTransform(220.1,136.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-11.4,11.4).lineTo(-11.4,-11.4).lineTo(11.4,-11.4).lineTo(11.4,11.4).closePath().moveTo(-8.4,8.3).lineTo(8.4,8.3).lineTo(8.4,-8.3).lineTo(-8.4,-8.3).closePath();
	this.shape_1.setTransform(220.1,112.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-9.9,9.9).lineTo(-9.9,-9.8).lineTo(9.8,-9.8).lineTo(9.8,9.9).closePath();
	this.shape_2.setTransform(220.1,112.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-11.4,11.4).lineTo(-11.4,-11.4).lineTo(11.4,-11.4).lineTo(11.4,11.4).closePath().moveTo(-8.3,8.3).lineTo(8.3,8.3).lineTo(8.3,-8.3).lineTo(-8.3,-8.3).closePath();
	this.shape_3.setTransform(258.7,112.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-9.9,9.9).lineTo(-9.9,-9.8).lineTo(9.9,-9.8).lineTo(9.9,9.9).closePath();
	this.shape_4.setTransform(258.7,112.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-11.4,11.4).lineTo(-11.4,-11.4).lineTo(11.4,-11.4).lineTo(11.4,11.4).closePath().moveTo(-8.3,8.3).lineTo(8.3,8.3).lineTo(8.3,-8.3).lineTo(-8.3,-8.3).closePath();
	this.shape_5.setTransform(181.4,112.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-9.8,9.9).lineTo(-9.8,-9.8).lineTo(9.9,-9.8).lineTo(9.9,9.9).closePath();
	this.shape_6.setTransform(181.4,112.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-11.4,11.4).lineTo(-11.4,-11.4).lineTo(11.4,-11.4).lineTo(11.4,11.4).closePath().moveTo(-8.4,8.3).lineTo(8.4,8.3).lineTo(8.4,-8.3).lineTo(-8.4,-8.3).closePath();
	this.shape_7.setTransform(220.1,85.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-9.9,9.8).lineTo(-9.9,-9.9).lineTo(9.8,-9.9).lineTo(9.8,9.8).closePath();
	this.shape_8.setTransform(220.1,85.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-11.4,11.4).lineTo(-11.4,-11.4).lineTo(11.4,-11.4).lineTo(11.4,11.4).closePath().moveTo(-8.3,8.3).lineTo(8.3,8.3).lineTo(8.3,-8.3).lineTo(-8.3,-8.3).closePath();
	this.shape_9.setTransform(258.7,85.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-9.9,9.8).lineTo(-9.9,-9.9).lineTo(9.9,-9.9).lineTo(9.9,9.8).closePath();
	this.shape_10.setTransform(258.7,85.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-11.4,11.4).lineTo(-11.4,-11.4).lineTo(11.4,-11.4).lineTo(11.4,11.4).closePath().moveTo(-8.3,8.3).lineTo(8.3,8.3).lineTo(8.3,-8.3).lineTo(-8.3,-8.3).closePath();
	this.shape_11.setTransform(181.4,85.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-9.8,9.8).lineTo(-9.8,-9.9).lineTo(9.9,-9.9).lineTo(9.9,9.8).closePath();
	this.shape_12.setTransform(181.4,85.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-19.4,16.8).lineTo(0,-16.8).lineTo(19.4,16.8).closePath().moveTo(14.1,13.7).lineTo(0,-10.7).lineTo(-14.1,13.7).lineTo(14.1,13.7).closePath();
	this.shape_13.setTransform(258.7,49.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-16.7,14.5).lineTo(0,-14.5).lineTo(16.7,14.5).closePath();
	this.shape_14.setTransform(258.7,50.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-19.4,16.8).lineTo(0,-16.8).lineTo(19.4,16.8).closePath().moveTo(14.1,13.7).lineTo(0,-10.7).lineTo(-14.1,13.7).lineTo(14.1,13.7).closePath();
	this.shape_15.setTransform(220,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-16.7,14.5).lineTo(0,-14.5).lineTo(16.8,14.5).closePath();
	this.shape_16.setTransform(220.1,50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-19.4,16.8).lineTo(-0,-16.8).lineTo(19.4,16.8).closePath().moveTo(14.1,13.7).lineTo(-0,-10.7).lineTo(-14.1,13.7).lineTo(14.1,13.7).closePath();
	this.shape_17.setTransform(181.4,49.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-16.7,14.5).lineTo(-0,-14.5).lineTo(16.7,14.5).closePath();
	this.shape_18.setTransform(181.4,50.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#333333").beginStroke().moveTo(-70.9,10.2).lineTo(-64.8,-10.3).lineTo(64.8,-10.3).lineTo(70.9,10.2).closePath();
	this.shape_19.setTransform(220.1,59.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-62.7,32.1).lineTo(-62.7,-32.1).lineTo(62.8,-32.1).lineTo(62.8,32.1).closePath();
	this.shape_20.setTransform(220.1,99.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#333333").beginStroke().moveTo(-21.2,1.7).lineTo(-21.2,1.7).curveTo(-21.2,0.3,-20.1,-0.7).curveTo(-19.1,-1.8,-17.7,-1.8).lineTo(17.7,-1.8).curveTo(19.2,-1.8,20.1,-0.7).curveTo(21.1,0.3,21.1,1.7).lineTo(21.1,1.7).closePath();
	this.shape_21.setTransform(503.3,-32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#333333").beginStroke().moveTo(-52.9,6.7).lineTo(-52.9,-6.7).lineTo(52.9,-6.7).lineTo(52.9,6.7).closePath();
	this.shape_22.setTransform(476.2,134.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#333333").beginStroke().moveTo(-60.2,4.6).lineTo(-60.2,-4.6).lineTo(60.2,-4.6).lineTo(60.2,4.6).closePath();
	this.shape_23.setTransform(476.1,-9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#333333").beginStroke().moveTo(-55.6,2.8).lineTo(-55.6,-2.8).lineTo(55.6,-2.8).lineTo(55.6,2.8).closePath();
	this.shape_24.setTransform(476.1,-2.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,5.9).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,5.9).closePath();
	this.shape_25.setTransform(503.1,114.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,5.9).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,5.9).closePath();
	this.shape_26.setTransform(449,114.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.2,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_27.setTransform(512.2,103.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.3,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_28.setTransform(494.1,103.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#808080").beginStroke().moveTo(-1.3,9.9).curveTo(-2.5,9.9,-3.4,9).curveTo(-4.3,8.2,-4.3,6.9).lineTo(-4.3,-6.8).curveTo(-4.3,-8.1,-3.4,-9).curveTo(-2.5,-9.9,-1.3,-9.9).lineTo(1.3,-9.9).curveTo(2.5,-9.9,3.4,-9).curveTo(4.3,-8.1,4.3,-6.8).lineTo(4.3,6.9).curveTo(4.3,8.1,3.4,9).curveTo(2.5,9.9,1.3,9.9).closePath();
	this.shape_29.setTransform(476.1,108.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.3,-4.9).curveTo(2.6,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_30.setTransform(458,103.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.2,-4.9).lineTo(1.3,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_31.setTransform(440,103.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,6).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,6).closePath();
	this.shape_32.setTransform(503.1,85.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,6).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,6).closePath();
	this.shape_33.setTransform(449,85.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.2,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_34.setTransform(512.2,74.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.3,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_35.setTransform(494.1,74.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#808080").beginStroke().moveTo(-1.3,9.9).curveTo(-2.5,9.9,-3.4,9).curveTo(-4.3,8.2,-4.3,6.9).lineTo(-4.3,-6.8).curveTo(-4.3,-8.1,-3.4,-9).curveTo(-2.5,-9.9,-1.3,-9.9).lineTo(1.3,-9.9).curveTo(2.5,-9.9,3.4,-9).curveTo(4.3,-8.1,4.3,-6.8).lineTo(4.3,6.9).curveTo(4.3,8.1,3.4,9).curveTo(2.5,9.9,1.3,9.9).closePath();
	this.shape_36.setTransform(476.1,79.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.3,-4.9).curveTo(2.6,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_37.setTransform(458,74.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.2,-4.9).lineTo(1.3,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_38.setTransform(440,74.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,6).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,6).closePath();
	this.shape_39.setTransform(503.1,55.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,6).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,6).closePath();
	this.shape_40.setTransform(449,55.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.2,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_41.setTransform(512.2,44.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.3,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_42.setTransform(494.1,44.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#808080").beginStroke().moveTo(-1.3,9.9).curveTo(-2.5,9.9,-3.4,9).curveTo(-4.3,8.1,-4.3,6.9).lineTo(-4.3,-6.9).curveTo(-4.3,-8.1,-3.4,-9).curveTo(-2.5,-9.9,-1.3,-9.9).lineTo(1.3,-9.9).curveTo(2.5,-9.9,3.4,-9).curveTo(4.3,-8.1,4.3,-6.9).lineTo(4.3,6.9).curveTo(4.3,8.1,3.4,9).curveTo(2.5,9.9,1.3,9.9).closePath();
	this.shape_43.setTransform(476.1,49.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.3,-4.9).lineTo(1.3,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_44.setTransform(458,44.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,5).lineTo(-4.3,-1.9).curveTo(-4.3,-3.2,-3.4,-4).curveTo(-2.5,-4.9,-1.2,-4.9).lineTo(1.3,-4.9).curveTo(2.5,-4.9,3.4,-4).curveTo(4.3,-3.2,4.3,-1.9).lineTo(4.3,5).closePath();
	this.shape_45.setTransform(440,44.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,5.9).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,5.9).closePath();
	this.shape_46.setTransform(503.1,26.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#4D4D4D").beginStroke().moveTo(-17.8,5.9).lineTo(-17.8,-5.9).lineTo(17.8,-5.9).lineTo(17.8,5.9).closePath();
	this.shape_47.setTransform(449,26.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,4.9).lineTo(-4.3,-1.9).curveTo(-4.3,-3.1,-3.4,-4.1).curveTo(-2.5,-4.9,-1.3,-5).lineTo(1.2,-5).curveTo(2.5,-4.9,3.4,-4.1).curveTo(4.3,-3.1,4.3,-1.9).lineTo(4.3,4.9).closePath();
	this.shape_48.setTransform(512.2,15.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,4.9).lineTo(-4.3,-1.9).curveTo(-4.3,-3.1,-3.4,-4.1).curveTo(-2.5,-4.9,-1.3,-5).lineTo(1.3,-5).curveTo(2.5,-4.9,3.4,-4.1).curveTo(4.3,-3.1,4.3,-1.9).lineTo(4.3,4.9).closePath();
	this.shape_49.setTransform(494.1,15.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#808080").beginStroke().moveTo(-1.3,9.9).curveTo(-2.5,9.9,-3.4,9).curveTo(-4.3,8.2,-4.3,6.8).lineTo(-4.3,-6.9).curveTo(-4.3,-8.1,-3.4,-9).curveTo(-2.5,-9.9,-1.3,-9.9).lineTo(1.3,-9.9).curveTo(2.5,-9.9,3.4,-9).curveTo(4.3,-8.1,4.3,-6.9).lineTo(4.3,6.8).curveTo(4.3,8.1,3.4,9).curveTo(2.5,9.9,1.3,9.9).closePath();
	this.shape_50.setTransform(476.1,20.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,4.9).lineTo(-4.3,-1.9).curveTo(-4.3,-3.1,-3.4,-4.1).curveTo(-2.5,-4.9,-1.3,-5).lineTo(1.3,-5).curveTo(2.6,-4.9,3.4,-4.1).curveTo(4.3,-3.1,4.3,-1.9).lineTo(4.3,4.9).closePath();
	this.shape_51.setTransform(458,15.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#808080").beginStroke().moveTo(-4.3,4.9).lineTo(-4.3,-1.9).curveTo(-4.3,-3.1,-3.4,-4.1).curveTo(-2.5,-4.9,-1.2,-5).lineTo(1.3,-5).curveTo(2.5,-4.9,3.4,-4.1).curveTo(4.3,-3.1,4.3,-1.9).lineTo(4.3,4.9).closePath();
	this.shape_52.setTransform(440,15.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-52.9,68.6).lineTo(-52.9,-65.6).curveTo(-52.9,-66.8,-52,-67.7).curveTo(-51.1,-68.6,-49.9,-68.6).lineTo(49.9,-68.6).curveTo(51.2,-68.6,52,-67.7).curveTo(52.9,-66.8,52.9,-65.6).lineTo(52.9,68.6).closePath();
	this.shape_53.setTransform(476.2,59.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-18.3,10.4).lineTo(-18.3,-10.4).lineTo(18.3,-10.4).lineTo(18.3,10.4).closePath();
	this.shape_54.setTransform(503.3,-20.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#808080").beginStroke().moveTo(-59.4,10.7).lineTo(-59.4,-10.7).lineTo(59.4,-10.7).lineTo(59.4,10.7).closePath();
	this.shape_55.setTransform(353.3,130.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_56.setTransform(391.9,94.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-22.6,9.5).lineTo(-22.6,-9.5).lineTo(22.6,-9.5).lineTo(22.6,9.5).closePath();
	this.shape_57.setTransform(352.6,94.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_58.setTransform(313.4,94.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_59.setTransform(391.9,68.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-22.6,9.5).lineTo(-22.6,-9.5).lineTo(22.6,-9.5).lineTo(22.6,9.5).closePath();
	this.shape_60.setTransform(352.6,68.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_61.setTransform(313.4,68.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_62.setTransform(391.9,42.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-22.6,9.5).lineTo(-22.6,-9.5).lineTo(22.6,-9.5).lineTo(22.6,9.5).closePath();
	this.shape_63.setTransform(352.6,42.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_64.setTransform(313.4,42.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_65.setTransform(391.9,16.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-22.6,9.5).lineTo(-22.6,-9.5).lineTo(22.6,-9.5).lineTo(22.6,9.5).closePath();
	this.shape_66.setTransform(352.6,16.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_67.setTransform(313.4,16.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_68.setTransform(391.9,-9.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-22.6,9.5).lineTo(-22.6,-9.5).lineTo(22.6,-9.5).lineTo(22.6,9.5).closePath();
	this.shape_69.setTransform(352.6,-9.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_70.setTransform(313.4,-9.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_71.setTransform(391.9,-35.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-22.6,9.5).lineTo(-22.6,-9.5).lineTo(22.6,-9.5).lineTo(22.6,9.5).closePath();
	this.shape_72.setTransform(352.6,-35.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-9.5,9.5).lineTo(-9.5,-9.5).lineTo(9.5,-9.5).lineTo(9.5,9.5).closePath();
	this.shape_73.setTransform(313.4,-35.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#333333").beginStroke().moveTo(-59.4,90.5).lineTo(-59.4,-87.5).curveTo(-59.4,-88.7,-58.5,-89.6).curveTo(-57.6,-90.5,-56.4,-90.5).lineTo(56.4,-90.5).curveTo(57.6,-90.5,58.5,-89.6).curveTo(59.4,-88.7,59.4,-87.5).lineTo(59.4,90.5).closePath();
	this.shape_74.setTransform(353.3,29.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#808080").beginStroke().moveTo(-44.4,22.6).lineTo(-44.5,21.8).curveTo(-44.5,3.5,-31.4,-9.6).curveTo(-18.4,-22.6,0,-22.6).curveTo(18.4,-22.6,31.5,-9.6).curveTo(44.5,3.5,44.5,21.8).lineTo(44.4,22.6).closePath();
	this.shape_75.setTransform(352.6,-76.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#808080").beginStroke().moveTo(-0.6,46.9).lineTo(-0.6,-46.9).lineTo(0.6,-46.9).lineTo(0.6,46.9).closePath();
	this.shape_76.setTransform(352.6,-94.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#333333").beginStroke().moveTo(-8.6,3.3).lineTo(-8.6,-3.4).lineTo(8.6,-3.4).lineTo(8.6,3.3).closePath();
	this.shape_77.setTransform(-14.2,40.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#333333").beginStroke().moveTo(-5.2,11.2).lineTo(-5.2,-11.2).lineTo(5.2,-11.2).lineTo(5.2,11.2).closePath();
	this.shape_78.setTransform(-14.1,51.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#333333").beginStroke().moveTo(-54.8,2.4).lineTo(-54.8,0.8).curveTo(-54.8,-0.5,-54.1,-1.5).curveTo(-53.3,-2.3,-52.3,-2.4).lineTo(52.3,-2.4).curveTo(53.3,-2.3,54,-1.5).curveTo(54.8,-0.5,54.8,0.8).lineTo(54.8,2.4).closePath();
	this.shape_79.setTransform(-40.4,139.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-10,12.4).lineTo(-10,-12.4).lineTo(9.9,-12.4).lineTo(9.9,12.4).closePath();
	this.shape_80.setTransform(-15.5,107.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#333333").beginStroke().moveTo(-14.8,12.4).lineTo(-14.8,-12.4).lineTo(14.8,-12.4).lineTo(14.8,12.4).closePath();
	this.shape_81.setTransform(-15.5,107.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-10,12.4).lineTo(-10,-12.4).lineTo(9.9,-12.4).lineTo(9.9,12.4).closePath();
	this.shape_82.setTransform(-65.3,107.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#333333").beginStroke().moveTo(-14.8,12.4).lineTo(-14.8,-12.4).lineTo(14.8,-12.4).lineTo(14.8,12.4).closePath();
	this.shape_83.setTransform(-65.4,107.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-50.8,29.7).lineTo(-50.8,-29.7).lineTo(50.8,-29.7).lineTo(50.8,29.7).closePath();
	this.shape_84.setTransform(-40.4,107.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#333333").beginStroke().moveTo(-56.1,24.2).lineTo(-0,-24.2).lineTo(56.1,24.2).closePath();
	this.shape_85.setTransform(-40.4,53.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#333333").beginStroke().moveTo(-66.6,2.9).lineTo(-66.6,0.9).curveTo(-66.6,-0.6,-65.7,-1.8).curveTo(-64.8,-2.8,-63.6,-2.9).lineTo(63.5,-2.9).curveTo(64.8,-2.8,65.7,-1.8).curveTo(66.6,-0.6,66.6,0.9).lineTo(66.6,2.9).closePath();
	this.shape_86.setTransform(82.4,138.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-17.4,2.4).lineTo(-17.4,-2.4).lineTo(17.4,-2.4).lineTo(17.4,2.4).closePath();
	this.shape_87.setTransform(134.7,95.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#333333").beginStroke().moveTo(-17.4,2.4).lineTo(-17.4,-2.4).lineTo(17.5,-2.4).lineTo(17.5,2.4).closePath();
	this.shape_88.setTransform(99.8,95.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-17.5,2.4).lineTo(-17.5,-2.4).lineTo(17.5,-2.4).lineTo(17.5,2.4).closePath();
	this.shape_89.setTransform(64.9,95.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#333333").beginStroke().moveTo(-17.5,2.4).lineTo(-17.5,-2.4).lineTo(17.4,-2.4).lineTo(17.4,2.4).closePath();
	this.shape_90.setTransform(30,95.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-13.4,9.2).lineTo(-21.4,-9.2).lineTo(5.4,-9.2).lineTo(21.4,9.2).closePath();
	this.shape_91.setTransform(130.7,83.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#333333").beginStroke().moveTo(-17.4,9.2).lineTo(-17.4,-9.2).lineTo(9.5,-9.2).lineTo(17.5,9.2).closePath();
	this.shape_92.setTransform(99.8,83.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-17.5,9.2).lineTo(-9.4,-9.2).lineTo(17.5,-9.2).lineTo(17.5,9.2).closePath();
	this.shape_93.setTransform(64.9,83.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#333333").beginStroke().moveTo(-21.5,9.2).lineTo(-5.4,-9.2).lineTo(21.5,-9.2).lineTo(13.4,9.2).closePath();
	this.shape_94.setTransform(34,83.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-23.1,12.6).lineTo(-23.1,-12.6).lineTo(23.1,-12.6).lineTo(23.1,12.6).closePath();
	this.shape_95.setTransform(60.8,105.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#333333").beginStroke().moveTo(-25.9,15.1).lineTo(-25.9,-15.1).lineTo(25.9,-15.1).lineTo(25.9,15.1).closePath();
	this.shape_96.setTransform(60.8,105.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-1,1).curveTo(-1.5,0.6,-1.5,0).curveTo(-1.5,-0.6,-1,-1).curveTo(-0.6,-1.5,0,-1.4).curveTo(0.6,-1.5,1.1,-1).curveTo(1.5,-0.6,1.5,0).curveTo(1.5,0.6,1.1,1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1).closePath();
	this.shape_97.setTransform(123.7,122);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-10.4,10.4).lineTo(-10.4,-10.4).lineTo(10.4,-10.4).lineTo(10.4,10.4).closePath();
	this.shape_98.setTransform(115.1,105.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#333333").beginStroke().moveTo(-12.2,21.5).lineTo(-12.2,-21.5).lineTo(12.2,-21.5).lineTo(12.2,21.5).closePath();
	this.shape_99.setTransform(115.1,114.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-61.7,62.7).lineTo(-61.7,-9.5).lineTo(-61.7,-9.5).lineTo(-0,-62.7).lineTo(61.6,-9.5).lineTo(61.7,-9.5).lineTo(61.7,62.7).closePath();
	this.shape_100.setTransform(82.4,73.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#333333").beginStroke().moveTo(-68.1,29.4).lineTo(0,-29.4).lineTo(68.2,29.4).closePath();
	this.shape_101.setTransform(82.4,34.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#333333").beginStroke().moveTo(-57.3,3.2).lineTo(-57.3,-3.2).lineTo(57.3,-3.2).lineTo(57.3,3.2).closePath();
	this.shape_102.setTransform(-260.7,-4.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-53.8,2.5).lineTo(-53.8,-2.5).lineTo(53.8,-2.5).lineTo(53.8,2.5).closePath();
	this.shape_103.setTransform(-260.7,1.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.4,1.3).lineTo(-11.4,-1.3).lineTo(11.4,-1.3).lineTo(11.4,1.3).closePath();
	this.shape_104.setTransform(-260.7,117);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.4,1.3).lineTo(-11.4,-1.3).lineTo(11.4,-1.3).lineTo(11.4,1.3).closePath();
	this.shape_105.setTransform(-260.7,95.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.4,1.3).lineTo(-11.4,-1.3).lineTo(11.4,-1.3).lineTo(11.4,1.3).closePath();
	this.shape_106.setTransform(-260.7,73.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.4,1.3).lineTo(-11.4,-1.3).lineTo(11.4,-1.3).lineTo(11.4,1.3).closePath();
	this.shape_107.setTransform(-260.7,52.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.4,1.3).lineTo(-11.4,-1.3).lineTo(11.4,-1.3).lineTo(11.4,1.3).closePath();
	this.shape_108.setTransform(-260.7,30.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-51.1,4.4).lineTo(-51.1,-4.4).lineTo(51.1,-4.4).lineTo(51.1,4.4).closePath();
	this.shape_109.setTransform(-260.7,137.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.4,66.6).lineTo(-11.4,-66.6).lineTo(11.4,-66.6).lineTo(11.4,66.6).closePath();
	this.shape_110.setTransform(-260.7,67.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#333333").beginStroke().moveTo(-1.6,7.4).lineTo(-1.6,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_111.setTransform(-231.2,108.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_112.setTransform(-231.2,108.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#333333").beginStroke().moveTo(-1.6,7.4).lineTo(-1.6,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_113.setTransform(-231.2,86.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_114.setTransform(-231.2,86.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#333333").beginStroke().moveTo(-1.6,7.4).lineTo(-1.6,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_115.setTransform(-231.2,65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_116.setTransform(-231.2,65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#333333").beginStroke().moveTo(-1.6,7.4).lineTo(-1.6,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_117.setTransform(-231.2,43.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_118.setTransform(-231.2,43.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#333333").beginStroke().moveTo(-1.6,7.4).lineTo(-1.6,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_119.setTransform(-231.2,21.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_120.setTransform(-231.2,21.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#333333").beginStroke().moveTo(-1.7,7.4).lineTo(-1.7,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_121.setTransform(-290.2,108.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_122.setTransform(-290.3,108.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#333333").beginStroke().moveTo(-1.7,7.4).lineTo(-1.7,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_123.setTransform(-290.2,86.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_124.setTransform(-290.3,86.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#333333").beginStroke().moveTo(-1.7,7.4).lineTo(-1.7,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_125.setTransform(-290.2,65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_126.setTransform(-290.3,65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#333333").beginStroke().moveTo(-1.7,7.4).lineTo(-1.7,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_127.setTransform(-290.2,43.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_128.setTransform(-290.3,43.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#333333").beginStroke().moveTo(-1.7,7.4).lineTo(-1.7,-7.4).lineTo(1.6,-7.4).lineTo(1.6,7.4).closePath();
	this.shape_129.setTransform(-290.2,21.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-11.3,7.4).curveTo(-12.5,7.4,-13.4,6.5).curveTo(-14.3,5.6,-14.3,4.4).lineTo(-14.3,-4.4).curveTo(-14.3,-5.6,-13.4,-6.5).curveTo(-12.5,-7.4,-11.3,-7.4).lineTo(11.3,-7.4).curveTo(12.6,-7.4,13.4,-6.5).curveTo(14.3,-5.6,14.3,-4.4).lineTo(14.3,4.4).curveTo(14.3,5.7,13.4,6.5).curveTo(12.6,7.4,11.3,7.4).closePath();
	this.shape_130.setTransform(-290.3,21.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#333333").beginStroke().moveTo(-51.1,70.2).lineTo(-51.1,-70.2).lineTo(51.1,-70.2).lineTo(51.1,70.2).closePath();
	this.shape_131.setTransform(-260.7,71.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-41.8,3).lineTo(-41.8,-3).lineTo(41.8,-3).lineTo(41.8,3).closePath();
	this.shape_132.setTransform(-364.1,109.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-39,6.7).lineTo(-39,-6.7).lineTo(39,-6.7).lineTo(39,6.7).closePath();
	this.shape_133.setTransform(-366.9,100.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_134.setTransform(-426.6,100.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-41.8,3).lineTo(-41.8,-3).lineTo(41.8,-3).lineTo(41.8,3).closePath();
	this.shape_135.setTransform(-364.1,81.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-39,6.7).lineTo(-39,-6.7).lineTo(39,-6.7).lineTo(39,6.7).closePath();
	this.shape_136.setTransform(-366.9,72);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_137.setTransform(-426.6,72);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-41.8,3).lineTo(-41.8,-3).lineTo(41.8,-3).lineTo(41.8,3).closePath();
	this.shape_138.setTransform(-364.1,53.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-39,6.7).lineTo(-39,-6.7).lineTo(39,-6.7).lineTo(39,6.7).closePath();
	this.shape_139.setTransform(-366.9,43.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_140.setTransform(-426.6,43.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-41.8,3).lineTo(-41.8,-3).lineTo(41.8,-3).lineTo(41.8,3).closePath();
	this.shape_141.setTransform(-364.1,25.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-39,6.7).lineTo(-39,-6.7).lineTo(39,-6.7).lineTo(39,6.7).closePath();
	this.shape_142.setTransform(-366.9,15.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_143.setTransform(-426.6,15.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#333333").beginStroke().moveTo(-56.9,11.3).lineTo(-56.9,-11.3).lineTo(56.9,-11.3).lineTo(56.9,11.3).closePath();
	this.shape_144.setTransform(-384.8,130.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#999999").beginStroke().moveTo(-56.9,59.8).lineTo(-56.9,-59.8).lineTo(56.9,-59.8).lineTo(56.9,59.8).closePath();
	this.shape_145.setTransform(-384.8,59.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_146.setTransform(-177.2,106.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_147.setTransform(-177.2,97.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_148.setTransform(-149.8,106.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_149.setTransform(-149.8,97.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_150.setTransform(-122.4,106.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_151.setTransform(-122.5,97.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_152.setTransform(-177.2,81.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_153.setTransform(-177.2,71.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_154.setTransform(-149.8,81.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_155.setTransform(-149.8,71.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_156.setTransform(-122.4,81.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_157.setTransform(-122.5,71.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_158.setTransform(-177.2,56.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_159.setTransform(-177.2,46.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_160.setTransform(-149.8,56.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_161.setTransform(-149.8,46.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_162.setTransform(-122.4,56.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_163.setTransform(-122.5,46.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_164.setTransform(-177.2,31.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_165.setTransform(-177.2,21.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_166.setTransform(-149.8,31.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_167.setTransform(-149.8,21.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_168.setTransform(-122.4,31.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_169.setTransform(-122.5,21.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_170.setTransform(-177.2,6.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_171.setTransform(-177.2,-3.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_172.setTransform(-149.8,6.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_173.setTransform(-149.8,-3.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_174.setTransform(-122.4,6.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_175.setTransform(-122.5,-3.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_176.setTransform(-177.2,-19.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_177.setTransform(-177.2,-28.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_178.setTransform(-149.8,-19.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_179.setTransform(-149.8,-28.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_180.setTransform(-122.4,-19.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_181.setTransform(-122.5,-28.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_182.setTransform(-177.2,-44.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_183.setTransform(-177.2,-54);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_184.setTransform(-149.8,-44.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_185.setTransform(-149.8,-54);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_186.setTransform(-122.4,-44.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_187.setTransform(-122.5,-54);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_188.setTransform(-177.2,-69.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_189.setTransform(-177.2,-79.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_190.setTransform(-149.8,-69.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_191.setTransform(-149.8,-79.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_192.setTransform(-122.4,-69.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_193.setTransform(-122.5,-79.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#333333").beginStroke().moveTo(-41.8,11.4).lineTo(-41.8,-11.4).lineTo(41.9,-11.4).lineTo(41.9,11.4).closePath();
	this.shape_194.setTransform(-149.8,130.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#999999").beginStroke().moveTo(-41.8,106.8).lineTo(-41.8,-106.8).lineTo(41.9,-106.8).lineTo(41.9,106.8).closePath();
	this.shape_195.setTransform(-149.8,12);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_196.setTransform(-521.7,106.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_197.setTransform(-521.7,97.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_198.setTransform(-494.4,106.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_199.setTransform(-494.4,97.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_200.setTransform(-467,106.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_201.setTransform(-467,97.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_202.setTransform(-521.7,81.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_203.setTransform(-521.7,71.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_204.setTransform(-494.4,81.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_205.setTransform(-494.4,71.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_206.setTransform(-467,81.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_207.setTransform(-467,71.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_208.setTransform(-521.7,56.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_209.setTransform(-521.7,46.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_210.setTransform(-494.4,56.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_211.setTransform(-494.4,46.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_212.setTransform(-467,56.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_213.setTransform(-467,46.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_214.setTransform(-521.7,31.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_215.setTransform(-521.7,21.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_216.setTransform(-494.4,31.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_217.setTransform(-494.4,21.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_218.setTransform(-467,31.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_219.setTransform(-467,21.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_220.setTransform(-521.7,6.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_221.setTransform(-521.7,-3.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_222.setTransform(-494.4,6.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_223.setTransform(-494.4,-3.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_224.setTransform(-467,6.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_225.setTransform(-467,-3.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_226.setTransform(-521.7,-19.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_227.setTransform(-521.7,-28.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_228.setTransform(-494.4,-19.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_229.setTransform(-494.4,-28.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_230.setTransform(-467,-19.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_231.setTransform(-467,-28.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_232.setTransform(-521.7,-44.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_233.setTransform(-521.7,-54);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_234.setTransform(-494.4,-44.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_235.setTransform(-494.4,-54);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_236.setTransform(-467,-44.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_237.setTransform(-467,-54);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.7,-3).lineTo(10.7,3).closePath();
	this.shape_238.setTransform(-521.7,-69.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_239.setTransform(-521.7,-79.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.8,3).lineTo(-10.8,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_240.setTransform(-494.4,-69.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_241.setTransform(-494.4,-79.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#F2F2F2").beginStroke().moveTo(-10.7,3).lineTo(-10.7,-3).lineTo(10.8,-3).lineTo(10.8,3).closePath();
	this.shape_242.setTransform(-467,-69.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#E6E6E6").beginStroke().moveTo(-6.7,6.7).lineTo(-6.7,-6.7).lineTo(6.7,-6.7).lineTo(6.7,6.7).closePath();
	this.shape_243.setTransform(-467,-79.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#333333").beginStroke().moveTo(-41.8,11.4).lineTo(-41.8,-11.4).lineTo(41.8,-11.4).lineTo(41.8,11.4).closePath();
	this.shape_244.setTransform(-494.4,130.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#999999").beginStroke().moveTo(-41.8,106.8).lineTo(-41.8,-106.8).lineTo(41.8,-106.8).lineTo(41.8,106.8).closePath();
	this.shape_245.setTransform(-494.4,12);

	this.instance = new lib.foodtruck001();
	this.instance.parent = this;
	this.instance.setTransform(-178.3,-121,1,1,0,0,0,33.5,13.6);
	this.instance.alpha = 0.559;

	this.instance_1 = new lib.foodtruck002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(388.3,-122.3,1,1,0,0,0,36.4,14.8);
	this.instance_1.alpha = 0.559;

	this.instance_2 = new lib.foodtruck003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-392.6,-100.1,1,1,0,0,0,42,17.1);
	this.instance_2.alpha = 0.559;

	this.instance_3 = new lib.foodtruck004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94.8,-98.7,1,1,0,0,0,51.4,20.9);
	this.instance_3.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.2,-141.5,1072.5,283.1);


(lib.foodtruck_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape.setTransform(86.4,64.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1.1).curveTo(-1.5,0.6,-1.5,-0).curveTo(-1.5,-0.6,-1,-1.1).curveTo(-0.6,-1.5,-0,-1.5).curveTo(0.7,-1.5,1,-1.1).curveTo(1.5,-0.6,1.5,-0).curveTo(1.5,0.6,1,1.1).curveTo(0.7,1.5,-0,1.5).curveTo(-0.6,1.5,-1,1.1).closePath();
	this.shape_1.setTransform(15.6,-46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,1.1).curveTo(-1.5,0.6,-1.5,-0).curveTo(-1.5,-0.6,-1.1,-1.1).curveTo(-0.6,-1.5,-0,-1.5).curveTo(0.6,-1.5,1.1,-1.1).curveTo(1.5,-0.6,1.5,-0).curveTo(1.5,0.6,1.1,1.1).curveTo(0.6,1.5,-0,1.5).curveTo(-0.6,1.5,-1.1,1.1).closePath();
	this.shape_2.setTransform(20.7,-45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-10.1,5).curveTo(-11.7,4.2,-13.3,4).lineTo(-14.6,3.8).curveTo(-13.9,3,-7.3,-5.8).curveTo(-8.2,-6.9,-8.7,-8.3).curveTo(-9.9,-11.1,-8.2,-12.6).curveTo(-5.3,-15.1,-2.5,-12.5).curveTo(-1.1,-11.2,-0.3,-9.4).lineTo(1.3,-12.2).curveTo(3.4,-14.7,5.9,-13.4).curveTo(9.1,-11.7,8.3,-8.6).curveTo(7.9,-7,6.8,-5.8).lineTo(10.3,-7.6).curveTo(13.9,-8.6,14.5,-4.9).curveTo(15,-2.3,12.1,-0.8).lineTo(9.2,0.2).lineTo(11.1,1.1).curveTo(12.7,2.5,11.8,5.3).curveTo(11.2,7.1,8.5,6.2).lineTo(6,4.9).curveTo(3.3,5.6,0.5,9.7).lineTo(-1.7,13.8).curveTo(-5,7.5,-10.1,5).closePath();
	this.shape_3.setTransform(30.9,-59);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#231C1C").beginStroke().moveTo(-5.5,2.3).lineTo(-3.2,0.4).curveTo(-0.1,-1.7,3.7,-2.8).lineTo(4.9,-1.7).curveTo(6,-0.4,5.1,0.6).curveTo(3.7,1.5,1.7,2.1).curveTo(-0.5,2.8,-2.4,2.8).curveTo(-4,2.8,-5.5,2.3).closePath();
	this.shape_4.setTransform(17.8,-16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#231C1C").beginStroke().moveTo(-0.8,1.8).lineTo(-1.6,1).curveTo(-1.9,-0.1,-0.7,-1.6).curveTo(-0.2,-2.3,0.5,-2.8).curveTo(1.5,-1.7,1.7,0.7).curveTo(1.7,1.9,1.6,2.8).curveTo(0.4,2.6,-0.8,1.8).closePath();
	this.shape_5.setTransform(11.2,-17.4);

	this.instance = new lib.foodtruck005();
	this.instance.parent = this;
	this.instance.setTransform(12.2,-13.9,1,1,0,0,0,1.5,1.3);
	this.instance.alpha = 0.699;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#231C1C").beginStroke().moveTo(-1,-1.1).curveTo(1.2,-2.9,3.4,-4.4).lineTo(5,-3.5).curveTo(3.8,-1.5,-0.7,1.6).lineTo(-5,4.4).curveTo(-5.4,2.5,-1,-1.1).closePath();
	this.shape_6.setTransform(8.7,-10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#231C1C").beginStroke().moveTo(-1.1,2).curveTo(-2.1,-3,-1.4,-6.3).lineTo(0,-6.1).lineTo(1.5,-1.9).curveTo(2.4,2.9,0,6.4).curveTo(-0.6,4.5,-1.1,2).closePath();
	this.shape_7.setTransform(13.5,-8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#231C1C").beginStroke().moveTo(-0.8,1.8).lineTo(-1.6,1).curveTo(-1.9,-0.2,-0.7,-1.6).curveTo(-0.2,-2.3,0.5,-2.8).curveTo(1.6,-1.7,1.7,0.7).curveTo(1.7,1.9,1.6,2.8).curveTo(0.4,2.5,-0.8,1.8).closePath();
	this.shape_8.setTransform(12.9,-12.5);

	this.instance_1 = new lib.foodtruck006();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.8,-8.6,1,1,0,0,0,1.2,1.7);
	this.instance_1.alpha = 0.699;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(4,12.8).curveTo(5.2,11.3,5.9,5.8).curveTo(3.6,4.7,2.7,1.3).lineTo(2.2,-2).curveTo(-0.9,-0.5,-4.7,-1.6).curveTo(-9.1,-2.8,-9.3,-6.8).curveTo(-9.4,-10.5,-6.8,-12.2).curveTo(-5.5,-13,-4.1,-13.1).curveTo(-7.4,-10.5,-5.9,-7.3).curveTo(-5.1,-5.6,-3.7,-4.6).lineTo(-1.9,-5.7).curveTo(0.6,-6.5,3.9,-5.2).curveTo(7.2,-3.9,8.6,0.2).curveTo(9.3,2.2,9.3,4).curveTo(9,8.2,8.2,11.4).curveTo(8,12.5,7.6,13.1).closePath();
	this.shape_9.setTransform(20,-50.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-2.7,2.3).curveTo(-4.8,1.7,-5.1,0.4).lineTo(-5.1,-0.7).lineTo(-4.3,-1.4).curveTo(-3.4,-2.1,-2.1,-1.8).curveTo(-0.2,-1.3,2.3,-1.3).curveTo(4.1,-1.3,5.1,-2.6).curveTo(4.8,-0.9,3.6,0.5).curveTo(1.9,2.6,-0.6,2.6).curveTo(-1.6,2.6,-2.7,2.3).closePath();
	this.shape_10.setTransform(15.3,-36.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#545454").beginStroke().moveTo(-4.9,17.7).lineTo(-3.9,13.1).curveTo(-7,12.2,-8.2,9).lineTo(-8.8,6).curveTo(-3.2,5.3,0.4,2).curveTo(2.1,0.4,2.8,-1.2).curveTo(0.7,0.7,-4.8,1.6).lineTo(-9.9,2.1).curveTo(-8.3,1.2,-7.3,-3.3).curveTo(-9.1,-2.4,-12.4,-2.5).lineTo(-15.4,-2.8).curveTo(-9.4,-5.5,-5.9,-10.5).curveTo(-3.6,-13.8,-2.7,-17.6).lineTo(-2.3,-19.6).curveTo(5.3,-22.3,9.5,-17.5).curveTo(11.6,-15.1,12.1,-12.2).lineTo(11.1,-4.7).lineTo(13.4,-4.7).curveTo(15.6,-4.2,15.4,-2.1).curveTo(15.1,0.4,12.3,0.9).lineTo(9.5,0.9).curveTo(8.4,5.1,6,8.6).lineTo(3.1,12.4).curveTo(2.5,13.3,2.1,15.5).lineTo(1.8,17.4).lineTo(-4.8,20.5).closePath();
	this.shape_11.setTransform(17.2,-34.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.4,10.7).curveTo(-11.7,8.9,-12.5,-1.3).curveTo(-12.8,-4.5,-12.5,-8.2).lineTo(-12.2,-11.2).curveTo(-10.4,-10.7,-6.9,-11.9).curveTo(-8.3,-9,-8,-3.3).curveTo(-7.6,4,-3.2,5.5).curveTo(1.1,7,5.9,4.8).curveTo(8.4,3.7,10.8,1.9).curveTo(11.3,1.6,12.4,1.5).lineTo(12.6,2.3).curveTo(12.7,4.9,11.5,8.1).curveTo(10.9,9.6,10.2,10.7).curveTo(8.2,11.4,5.1,11.7).curveTo(3.4,11.9,1.7,11.9).curveTo(-2.6,11.9,-6.4,10.7).closePath();
	this.shape_12.setTransform(-3.1,-15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#545454").beginStroke().moveTo(2.5,7.1).curveTo(2.2,6.1,2,5.7).curveTo(1.6,4.9,0.3,3.6).curveTo(-0.7,2.7,-5,1.4).curveTo(-8.8,0.3,-8.7,-0.1).curveTo(-8.3,-0.8,-3,0.6).lineTo(-7,-2.5).curveTo(-8.8,-3.9,-8.6,-4.1).curveTo(-7.8,-5,-4.5,-2.5).curveTo(-2.9,-1.3,-1.4,0.1).lineTo(-3.9,-3.6).curveTo(-6.3,-7.2,-5.9,-7.4).curveTo(-5,-7.7,-2.4,-4.5).curveTo(-1.1,-2.9,0,-1.2).curveTo(-0.1,-2.1,0.2,-2.9).curveTo(0.7,-4.7,2.3,-4.8).curveTo(3.2,-4.8,3.8,-4.4).lineTo(3.9,-4.4).lineTo(4.2,-4.1).curveTo(4.6,-3.6,4.6,-3.2).lineTo(4.5,-3).curveTo(3.3,-3.3,2.5,-3.2).curveTo(0.9,-3.1,1.8,-0.7).curveTo(2.6,1.2,3.9,1.5).curveTo(5,1.7,6.1,0.6).curveTo(7.2,-0.6,6.1,-1.6).curveTo(4.9,-2.4,5,-2.6).curveTo(5.1,-2.8,5.5,-2.9).curveTo(6.1,-3.2,7.1,-2.8).lineTo(7.2,-2.7).lineTo(7.3,-2.7).lineTo(7.3,-2.6).curveTo(8.3,-2.1,8.6,-0.9).curveTo(9.1,0.8,7.4,2.4).lineTo(5.7,3.7).curveTo(5.6,3.9,5.6,5.7).lineTo(5.7,7.4).closePath();
	this.shape_13.setTransform(-16.9,-33.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#545454").beginStroke().moveTo(-0.2,0.9).curveTo(-0.7,0.9,-0.4,-0.1).curveTo(-0.1,-1,0.3,-0.9).curveTo(0.6,-0.8,0.5,0.1).curveTo(0.3,0.9,-0.2,0.9).lineTo(-0.2,0.9).closePath();
	this.shape_14.setTransform(2.5,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#545454").beginStroke().moveTo(-0.2,1).curveTo(-0.7,0.9,-0.4,-0.1).curveTo(-0.1,-1,0.3,-0.9).curveTo(0.6,-0.8,0.5,0.1).curveTo(0.3,1,-0.2,1).lineTo(-0.2,1).closePath();
	this.shape_15.setTransform(3.8,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#545454").beginStroke().moveTo(-0.2,0.9).curveTo(-0.7,0.9,-0.4,-0.1).curveTo(-0.1,-1.1,0.3,-0.9).curveTo(0.6,-0.8,0.5,0.1).curveTo(0.3,0.9,-0.2,0.9).lineTo(-0.2,0.9).closePath();
	this.shape_16.setTransform(5.6,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#545454").beginStroke().moveTo(-0.2,0.9).curveTo(-0.7,0.9,-0.4,-0.1).curveTo(-0.1,-1,0.3,-0.9).curveTo(0.6,-0.8,0.5,0.1).curveTo(0.3,0.9,-0.1,0.9).lineTo(-0.2,0.9).closePath();
	this.shape_17.setTransform(7.7,-3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#545454").beginStroke().moveTo(-0.2,0.9).curveTo(-0.7,0.9,-0.4,-0.1).curveTo(-0.1,-1.1,0.3,-0.9).curveTo(0.6,-0.8,0.5,0.1).curveTo(0.3,0.9,-0.1,0.9).lineTo(-0.2,0.9).closePath();
	this.shape_18.setTransform(9.6,-8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#545454").beginStroke().moveTo(-6,19.8).curveTo(-5.3,11,-0.9,-2.8).curveTo(1.8,-11.1,5.3,-19.8).lineTo(6,-19.3).curveTo(2.6,-10.9,0.1,-3.1).curveTo(-4.3,10.8,-4.9,19.8).closePath();
	this.shape_19.setTransform(5.1,2.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7,19.8).curveTo(-5.5,5.3,0.9,-8.7).curveTo(2.9,-13.1,5.2,-16.9).lineTo(7,-19.9).lineTo(7,-19.8).curveTo(3.5,-11.1,0.9,-2.8).curveTo(-3.5,11,-4.2,19.8).closePath();
	this.shape_20.setTransform(3.4,2.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.1,20).curveTo(-11.5,11,-7.1,-2.8).curveTo(-4.6,-10.7,-1.2,-19).lineTo(-1,-18.9).lineTo(-0.9,-18.8).lineTo(-0.8,-18.8).lineTo(-0.7,-18.8).lineTo(-0.6,-18.8).lineTo(-0.5,-18.7).lineTo(-0.4,-18.7).lineTo(-0.3,-18.6).lineTo(-0.2,-18.6).lineTo(-0.1,-18.5).lineTo(-0,-18.5).lineTo(0.2,-18.5).lineTo(0.2,-18.4).lineTo(0.4,-18.3).lineTo(0.4,-18.3).lineTo(0.6,-18.3).lineTo(0.6,-18.3).lineTo(0.8,-18.2).curveTo(1.9,-18.1,2.8,-18.1).lineTo(3.1,-18.1).lineTo(3.3,-18.2).lineTo(3.5,-18.2).lineTo(3.7,-18.2).lineTo(4,-18.2).lineTo(4.2,-18.3).curveTo(5.3,-18.5,6.5,-18.8).lineTo(6.9,-18.9).lineTo(6.9,-18.9).lineTo(7.1,-19).lineTo(7.1,-19).lineTo(7.3,-19).lineTo(7.3,-19.1).lineTo(7.4,-19.1).lineTo(7.5,-19.1).lineTo(7.8,-19.2).lineTo(7.9,-19.3).lineTo(8.9,-19.7).lineTo(9.3,-19.9).lineTo(9.4,-19.9).lineTo(9.4,-19.9).lineTo(9.5,-19.9).lineTo(9.5,-20).lineTo(9.6,-20).lineTo(9.6,-20).lineTo(9.7,-20).curveTo(11.3,-18.7,12.1,-15.1).curveTo(11.6,-13.3,11.4,-8.1).curveTo(8.5,9.2,7.9,20).closePath();
	this.shape_21.setTransform(12.3,2.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.9,10).curveTo(-0.7,9.3,-5.6,7.5).curveTo(-8.3,6.5,-11.2,5.1).lineTo(-12.9,-3.1).lineTo(-10.7,-1.7).curveTo(-8.1,-0,-5.9,1.1).curveTo(3.1,5.8,5.8,4.3).curveTo(8.4,3,8.1,-3.8).lineTo(7.2,-10.3).lineTo(8.7,-9.2).curveTo(10.6,-8.1,12.7,-8.3).lineTo(12.9,0.3).curveTo(12.7,9,10.9,9.8).curveTo(9.8,10.3,7.7,10.3).curveTo(6.1,10.3,3.9,10).closePath();
	this.shape_22.setTransform(34.9,-8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#545454").beginStroke().moveTo(-2.7,6.1).lineTo(-2.7,6).lineTo(-3.1,5.9).lineTo(-3.3,5.9).lineTo(-3.8,6.5).lineTo(-3.7,5.8).curveTo(-5,5.3,-5.7,4.2).lineTo(-6,3.3).curveTo(-4.7,3.2,-3.5,3.5).curveTo(-3.5,1.9,-3.7,1.5).curveTo(-4.1,0.3,-4.1,-1).curveTo(-4.1,-2.6,-3.2,-3.2).curveTo(-2.8,-3.4,-1.2,-5.1).curveTo(0.1,-6.4,0.8,-6.5).lineTo(1,-6.5).curveTo(1.3,-6.4,0.9,-5.3).curveTo(0.6,-4.3,-0.1,-3.1).lineTo(0.5,-3.1).lineTo(1.4,-3.2).curveTo(2.9,-3.5,3.9,-3.4).curveTo(5.3,-3.3,5.5,-2.5).curveTo(5.6,-1.9,4.1,-1.5).lineTo(4.1,-1.3).curveTo(5.9,-1.2,6,-0.5).curveTo(6.1,0.2,3.9,0.6).lineTo(3.9,0.8).curveTo(5.3,0.8,5.4,1.3).curveTo(5.5,1.6,4.9,2).curveTo(4.3,2.5,3.4,2.7).curveTo(2.8,3,1,3.1).lineTo(-1,3.1).lineTo(-1.1,4.7).lineTo(-0.5,5.3).curveTo(-0.6,5.6,-0.9,5.9).lineTo(-0.7,6.5).closePath();
	this.shape_23.setTransform(48.1,-22.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#999999").beginStroke().moveTo(-3.3,10.3).lineTo(-3.3,-10.3).lineTo(3.3,-10.3).lineTo(3.3,10.3).closePath();
	this.shape_24.setTransform(16.8,12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.1,1.8).lineTo(-5.1,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.1,-4.5,-2.2,-4).lineTo(-2.2,0.7).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.5,2.5,2,1.9).curveTo(2.2,1.5,2.2,0.7).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.4,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4.1,4.3,2.1,4.5).closePath();
	this.shape_25.setTransform(-99.5,22.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.4,3.8).curveTo(-4.8,3.5,-5.1,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.2,-4.2).curveTo(-5.1,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.5,1.9,1.9).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_26.setTransform(-123.7,22.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.5).curveTo(-5.5,2.1,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).curveTo(-2.8,-0.3,2,-2).curveTo(2.1,-2,2.1,-2).curveTo(2.1,-2,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.2,2.2,-2.2).curveTo(2.2,-2.3,2.2,-2.3).curveTo(2.2,-2.3,2.1,-2.4).curveTo(2.1,-2.4,2,-2.4).curveTo(1.9,-2.4,1.8,-2.5).curveTo(1.4,-2.6,-1.7,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.5,-5.2,-3).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).curveTo(5.6,-0.8,4.1,-0.2).lineTo(-1.6,1.8).curveTo(-2.4,2.1,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.8).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_27.setTransform(-111.4,22.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.5).lineTo(1.7,2.5).curveTo(2.1,2.5,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.4,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.4).curveTo(-0.4,-4.5,4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.4).lineTo(1.7,-2.5).curveTo(-1.4,-2.5,-1.9,-2.4).curveTo(-2,-2.4,-2.1,-2.4).curveTo(-2.1,-2.4,-2.2,-2.4).curveTo(-2.2,-2.3,-2.3,-2.3).curveTo(-2.3,-2.2,-2.3,-2.2).curveTo(-2.3,-2.2,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2.1).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-2,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.6).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_28.setTransform(-135.9,22.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#DF1421").beginStroke().moveTo(1.1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1.1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.4,1.4,-4.4).curveTo(1.4,-4.3,1.5,-4.3).curveTo(1.5,-4.2,1.5,-4.2).curveTo(1.5,-4.1,1.5,-4).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1.1,4.5).closePath();
	this.shape_29.setTransform(-144.6,22.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-7,16).lineTo(-7,-16).lineTo(7,-16).lineTo(7,16).closePath();
	this.shape_30.setTransform(-51.5,14.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#999999").beginStroke().moveTo(-7,16).lineTo(-7,-16).lineTo(7,-16).lineTo(7,16).closePath();
	this.shape_31.setTransform(-51.5,-10.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_32.setTransform(120.1,10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_33.setTransform(112.1,10.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_34.setTransform(120.1,2.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_35.setTransform(112.1,2.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_36.setTransform(120.1,-3.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_37.setTransform(112.1,-3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_38.setTransform(120.1,-9.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_39.setTransform(112.1,-9.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_40.setTransform(120.1,-15.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_41.setTransform(112.1,-15.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_42.setTransform(120.1,-23.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_43.setTransform(112.1,-23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_44.setTransform(120.1,-27.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_45.setTransform(112.1,-27.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_46.setTransform(120.1,-35.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1,1).lineTo(-1,-1).lineTo(1,-1).lineTo(1,1).closePath();
	this.shape_47.setTransform(112.1,-35.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.6).lineTo(-25.6,-0.6).lineTo(25.7,-0.6).lineTo(25.7,0.6).closePath();
	this.shape_48.setTransform(80.1,9.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.7).lineTo(-25.6,-0.7).lineTo(25.7,-0.7).lineTo(25.7,0.7).closePath();
	this.shape_49.setTransform(80.1,3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.7).lineTo(-25.6,-0.7).lineTo(25.7,-0.7).lineTo(25.7,0.7).closePath();
	this.shape_50.setTransform(80.1,-3.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.7).lineTo(-25.6,-0.7).lineTo(25.7,-0.7).lineTo(25.7,0.7).closePath();
	this.shape_51.setTransform(80.1,-9.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.7).lineTo(-25.6,-0.7).lineTo(25.7,-0.7).lineTo(25.7,0.7).closePath();
	this.shape_52.setTransform(80.1,-15.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.7).lineTo(-25.6,-0.7).lineTo(25.7,-0.7).lineTo(25.7,0.7).closePath();
	this.shape_53.setTransform(80.1,-22.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.6).lineTo(-25.6,-0.6).lineTo(25.7,-0.6).lineTo(25.7,0.6).closePath();
	this.shape_54.setTransform(80.1,-28.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-25.6,0.6).lineTo(-25.6,-0.6).lineTo(25.7,-0.6).lineTo(25.7,0.6).closePath();
	this.shape_55.setTransform(80.1,-34.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-4.2,12).lineTo(-8.4,-12).lineTo(4.2,-12).lineTo(8.4,12).closePath();
	this.shape_56.setTransform(74.6,-57.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-8.2,12).lineTo(-4.4,-12).lineTo(8.2,-12).lineTo(4.4,12).closePath();
	this.shape_57.setTransform(35.4,-57.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-3.8,12).lineTo(-8.9,-12).lineTo(3.8,-12).lineTo(8.9,12).closePath();
	this.shape_58.setTransform(99.7,-57.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-3.8,12).lineTo(-8.9,-12).lineTo(3.8,-12).lineTo(8.9,12).closePath();
	this.shape_59.setTransform(124.9,-57.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-8.9,12).lineTo(-3.8,-12).lineTo(8.9,-12).lineTo(3.8,12).closePath();
	this.shape_60.setTransform(9.5,-57.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-8.9,12).lineTo(-3.8,-12).lineTo(8.9,-12).lineTo(3.8,12).closePath();
	this.shape_61.setTransform(-13.1,-57.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#E2E2E2").beginStroke().moveTo(-90.6,12).lineTo(-84.6,-12).lineTo(84.8,-12).lineTo(90.6,12).closePath();
	this.shape_62.setTransform(56.1,-57.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#757576").beginStroke().moveTo(-39.5,36.6).lineTo(-39.5,-36.6).lineTo(39.5,-36.6).lineTo(39.5,36.6).closePath();
	this.shape_63.setTransform(89.1,-18.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#E0E0E0").beginStroke().moveTo(-44.7,41.3).lineTo(-44.7,-41.3).lineTo(44.7,-41.3).lineTo(44.7,41.3).closePath();
	this.shape_64.setTransform(89.1,-18.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#757576").beginStroke().moveTo(-32,41.3).lineTo(-32,-41.3).lineTo(32,-41.3).lineTo(32,41.3).closePath();
	this.shape_65.setTransform(13.4,-18.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#D0D8DC").beginStroke().moveTo(-2,52.4).lineTo(-2,-52.5).lineTo(2,-52.5).lineTo(2,52.4).closePath();
	this.shape_66.setTransform(-52.3,-13.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-112.5,3.6).lineTo(-120.3,-3.6).lineTo(120.3,-3.6).lineTo(120.3,3.6).closePath();
	this.shape_67.setTransform(50.4,-86.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#AAAAAA").beginStroke().moveTo(-105.5,73.1).lineTo(-105.5,-73.1).lineTo(105.5,-73.1).lineTo(105.5,73.1).closePath();
	this.shape_68.setTransform(57.8,-10.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.7,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_69.setTransform(-95.3,64.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#999999").beginStroke().moveTo(-22.5,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3.1,-4.6).curveTo(20.8,-6.7,22.6,-6.8).lineTo(22.7,-4).curveTo(19,-4.5,16.4,-4.3).curveTo(1.9,-2.4,-3.9,-1.8).curveTo(-8.8,-1.3,-18.5,-0.6).lineTo(-20.2,1.1).curveTo(-20.7,1.7,-20.7,3.1).lineTo(-20.9,5.9).lineTo(-22.5,6.8).curveTo(-22.8,3.1,-22.5,1.8).closePath();
	this.shape_70.setTransform(-127.4,-52.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.4,1.9).closePath();
	this.shape_71.setTransform(-101.2,-58.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.2,13.6).lineTo(-1.2,10.8).curveTo(-1.2,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.3,-14.1,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_72.setTransform(-147.9,-7.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_73.setTransform(-147.8,14.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0.1,0.5).lineTo(-0.8,0.5).curveTo(-2.1,0.5,-3,0.3).closePath();
	this.shape_74.setTransform(-148,6.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).lineTo(-3.1,-5).lineTo(2.4,-6.7).curveTo(2.9,-6.9,3.3,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,3.9,3.2,4.5).curveTo(2.2,5.1,-1.4,6.5).curveTo(-2,6.8,-2.6,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_75.setTransform(-148,9.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.6,-12.9,0.9,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.7,6.3,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_76.setTransform(-143.7,-33.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.7,12.2,-5.7,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-7.1,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_77.setTransform(-144.9,-33.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.7,-2.6,-1.4,-2.9).curveTo(-1.1,-3.1,1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.4,-2.1).lineTo(-0.8,-1.2).lineTo(-0.7,3.2).lineTo(-1,4.2).lineTo(-0.4,4.4).lineTo(-0.3,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_78.setTransform(-166.4,-8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(1.3,-11.7,6.4,-25.5).curveTo(9.1,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.7,-1.8,13).lineTo(-3.5,20.3).curveTo(-3.8,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_79.setTransform(-156.7,-31.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.2,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(3,-16.1,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_80.setTransform(-166.2,29.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.4,1.8,0.6,1.5).closePath();
	this.shape_81.setTransform(-165.7,48.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.5,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_82.setTransform(-164.7,59.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.3,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_83.setTransform(-160.9,63.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.8,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_84.setTransform(-160.1,55.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.9).curveTo(-3.3,-6.6,-1.6,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.3,-6.5).curveTo(5.9,-6.2,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.3,-6.8,-8.6).lineTo(-5.9,-9.1).curveTo(-4.9,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.9).lineTo(-4.4,-6.9).closePath();
	this.shape_85.setTransform(-161.6,53.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.2,-1.5,1.9).curveTo(-2,-1.3,-2,-4.6).curveTo(-0.9,-3.3,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_86.setTransform(-168.1,53.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,4,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_87.setTransform(-86.2,10.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.3).curveTo(-3.9,8.3,-4.4,7.7).curveTo(-5,7.2,-5,6.3).curveTo(-5.4,2.2,-5.2,-2.4).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.4,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.5).curveTo(5.4,3.8,5.1,6.3).curveTo(5.1,7.2,4.6,7.7).curveTo(4,8.3,3.3,8.3).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.3).closePath();
	this.shape_88.setTransform(-86.3,10.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-50.5,62).curveTo(-50.9,61.8,-51.4,61.2).curveTo(-52.5,60.2,-53,58.5).curveTo(-53.7,56.4,-54,53.3).lineTo(-54.5,48).curveTo(-54.7,44.9,-53.8,42.1).lineTo(-52.9,39.9).curveTo(-53.7,23.7,-53.7,18.3).curveTo(-53.7,14.9,-53.2,6.7).lineTo(-52.8,-0.9).lineTo(-48.6,-7.9).curveTo(-47.6,-12.9,-44.1,-27.3).curveTo(-41.8,-36.4,-37.6,-48.8).curveTo(-34.3,-58.5,-33.4,-60.5).curveTo(-32.9,-61.4,-32.4,-61.8).curveTo(-31.7,-62.2,-30.1,-62.4).curveTo(-22.9,-63.3,5,-64.5).lineTo(31.4,-65.5).curveTo(34.3,-65.6,35.7,-65.3).curveTo(37.9,-64.9,39.9,-63.5).curveTo(42.3,-61.8,45,-59.2).curveTo(46.2,-58.1,47.7,-56.1).curveTo(49,-54.2,49.7,-52.7).curveTo(51.2,-49.5,52.4,-44.6).curveTo(54.5,-36.8,54.5,-29.7).lineTo(54.5,-12.7).curveTo(54.5,-9.9,53.8,-8.8).curveTo(50.5,-2.2,50.5,-0.1).lineTo(50.5,6.5).curveTo(50.5,8,50,8.9).curveTo(49.5,9.7,49.5,10.5).lineTo(49.5,25.4).lineTo(39.6,25.7).lineTo(36.5,26).lineTo(36.5,28.3).curveTo(24.9,28.5,20,29.1).curveTo(13,30,10.1,31.3).curveTo(3.2,34.4,-1.8,43).curveTo(-4.1,46.9,-7.2,53.6).curveTo(-8.2,55,-9.5,55).lineTo(-17.7,55).lineTo(-19.2,54.6).lineTo(-21.9,55).lineTo(-38.5,55).lineTo(-38.5,61.9).curveTo(-38.5,63.2,-39.5,64.3).curveTo(-40.7,65.5,-42.8,65.5).curveTo(-48.9,65.5,-50.5,62).closePath().moveTo(9.3,-55.4).curveTo(-10.1,-54.6,-16.5,-53.6).curveTo(-21.9,-52.8,-23.5,-51.9).curveTo(-24.7,-51.1,-26,-48.5).curveTo(-27,-46.5,-29.3,-36.4).curveTo(-31.6,-26.4,-32,-22.1).curveTo(-32.3,-18.1,-32.7,-10.8).curveTo(-33,-3.9,-33,-1.5).lineTo(-32.9,-0.4).lineTo(-31.7,-0.7).lineTo(8.8,-16.4).curveTo(13.6,-18.1,26.1,-20.3).lineTo(28.6,-20.8).curveTo(29.8,-21,30.2,-21.4).curveTo(30.4,-21.7,30.4,-22.3).lineTo(31,-51.8).curveTo(31.1,-54.1,30.2,-55).curveTo(29.5,-55.8,27.5,-56).curveTo(19,-55.8,9.3,-55.4).closePath();
	this.shape_89.setTransform(-116.1,1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-78.5,30).lineTo(-79.2,28).lineTo(-135,29.2).lineTo(-147.8,24.7).lineTo(-153.6,20).lineTo(-157.3,-3.8).lineTo(-135.9,-30).lineTo(-89.2,-28.5).lineTo(-78.2,-16).lineTo(-77.9,-8.8).lineTo(-79.8,-6.9).lineTo(-75.7,-0.5).lineTo(-74.3,-4.6).lineTo(-68.3,-4.6).lineTo(-67.6,-19.2).lineTo(151.7,-23.1).lineTo(157.3,15.7).curveTo(156.1,16.7,154.4,17.6).curveTo(150.8,19.5,148.3,19.6).curveTo(145.8,19.6,144.8,18).lineTo(144.4,16.4).lineTo(142.7,15.9).lineTo(134.5,7.8).lineTo(123.6,7.9).curveTo(122.9,9.1,121.7,10.2).curveTo(119.2,12.6,116.4,12.6).curveTo(113.5,12.5,111.8,10.5).lineTo(110.6,8.3).curveTo(110.1,8.3,107.1,9.6).lineTo(104.2,10.9).lineTo(104,26.7).lineTo(102.9,27.2).lineTo(102.9,11.5).lineTo(96.8,14.2).lineTo(45.4,28.4).curveTo(38.5,28.3,36,28).curveTo(34.7,27.8,-7.4,27.3).lineTo(-3.3,20.7).lineTo(-26.8,19).lineTo(-50.4,13.5).lineTo(-58.4,13.3).lineTo(-62.9,15).lineTo(-63,16.8).curveTo(-63.1,18.8,-63.3,19.7).curveTo(-63.8,22.2,-65.8,22.5).lineTo(-72.2,23.1).lineTo(-72.2,30).closePath();
	this.shape_90.setTransform(5.6,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 5
	this.instance_2 = new lib.foodtruckconductor();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-119.4,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa 2
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("rgba(0,0,0,0.298)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.4,0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_91.setTransform(-1.2,86.2,0.941,1.442);

	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-90.5,350.7,193.1);


// stage content:
(lib.foodtruck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_146 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(146).call(this.frame_146).wait(1));

	// Capa 9
	this.instance = new lib.foodtruckbags();
	this.instance.parent = this;
	this.instance.setTransform(1301.4,345.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:460},35).wait(89).to({x:464},3).to({x:460},3).to({x:-152.5},16).wait(1));

	// bags
	this.instance_1 = new lib.foodtruckbags();
	this.instance_1.parent = this;
	this.instance_1.setTransform(460,345.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({x:520.3,y:316.4,alpha:1},3,cjs.Ease.get(1)).to({x:553.3,y:302.5},4).to({x:622.7,y:363},5,cjs.Ease.get(1)).to({x:646.5,y:390},5).wait(33));

	// bags
	this.instance_2 = new lib.foodtruckbags();
	this.instance_2.parent = this;
	this.instance_2.setTransform(460,345.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({x:496.6,y:316.4,alpha:1},3,cjs.Ease.get(1)).to({x:518,y:302.5},4).to({x:563.1,y:363},5,cjs.Ease.get(1)).to({x:576,y:390},5).wait(58));

	// bags
	this.instance_3 = new lib.foodtruckbags();
	this.instance_3.parent = this;
	this.instance_3.setTransform(460,345.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({x:477.1,y:319.8,alpha:1},3,cjs.Ease.get(1)).to({x:489,y:307.6},4).to({x:514.1,y:371.5},5,cjs.Ease.get(1)).to({x:518,y:400},5).wait(87));

	// ppl
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#0D0C0C").beginStroke().moveTo(10.6,7.5).lineTo(8.2,0.3).curveTo(4.4,1.1,-0,1.3).curveTo(-2.8,1.2,-5.8,0.8).lineTo(-8.3,0.3).lineTo(-10.7,7.5).lineTo(-10.7,11.7).curveTo(-11.9,8.9,-12.1,8.1).curveTo(-13.9,0.6,-11.6,-4.7).curveTo(-10.9,-6.5,-9.2,-8.2).curveTo(-5.6,-11.6,-0,-11.7).lineTo(0.5,-11.7).curveTo(3.8,-11.7,6.3,-10.4).lineTo(7.9,-9.9).curveTo(9.8,-9.5,11.2,-10.1).lineTo(11.4,-10).curveTo(11.2,-9.2,10.8,-8.6).curveTo(12,-8.6,12.7,-8.8).lineTo(12.8,-8.8).lineTo(12.8,-8.7).curveTo(12.8,-6.8,11.6,-4.7).curveTo(13.8,0.6,12,8.1).curveTo(11.7,9.6,10.7,11.7).closePath();
	this.shape.setTransform(516.7,319.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-6.8,12.9).curveTo(-10.7,9.3,-10.7,5.4).curveTo(-11.6,5.4,-12.2,4.8).curveTo(-12.8,4.1,-12.8,3.2).lineTo(-12.8,1).curveTo(-12.8,-0,-12,-0.6).curveTo(-11.6,-0.9,-11.2,-1).lineTo(-11.6,-5.6).curveTo(-11.6,-9.9,-8,-13.1).curveTo(-4.5,-16.2,0,-16.2).curveTo(4.5,-16.2,8,-13.1).curveTo(11.5,-9.9,11.5,-5.6).lineTo(11.2,-1).curveTo(11.9,-0.9,12.4,-0.3).curveTo(12.8,0.3,12.8,1).lineTo(12.8,3.2).curveTo(12.8,4.1,12.2,4.8).curveTo(11.5,5.4,10.7,5.4).curveTo(10.7,9.3,6.9,12.9).curveTo(3.2,16.2,0,16.2).curveTo(-3.3,16.2,-6.8,12.9).closePath();
	this.shape_1.setTransform(516.6,328.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-2.7,18.1).lineTo(-1.5,-21.1).lineTo(1.5,-21.1).lineTo(2.7,18.1).lineTo(0,21.1).closePath();
	this.shape_2.setTransform(516.6,377);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,0.7).lineTo(0.5,-4).lineTo(4.6,-2.2).lineTo(-1.5,4.1).closePath();
	this.shape_3.setTransform(521.2,350.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,-2.2).lineTo(-0.5,-4).lineTo(4.7,0.7).lineTo(1.5,4.1).closePath();
	this.shape_4.setTransform(511.9,350.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-1.5,2).lineTo(-2.5,0.1).lineTo(0,-1.9).lineTo(2.5,0.1).lineTo(1.5,2).closePath();
	this.shape_5.setTransform(516.5,353.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(14.6,26.9).curveTo(16,22.7,17,17.8).curveTo(18.3,11.2,17.9,5.3).lineTo(16.9,-4.7).curveTo(16.7,22.1,15.6,22.1).lineTo(-13.3,22.1).curveTo(-12.6,24.6,-11.9,26.9).lineTo(-19.2,29.3).curveTo(-20.7,24.6,-21.8,19.3).lineTo(-25,7.5).curveTo(-26.8,0.5,-26.2,-4.1).curveTo(-25.4,-10,-24.6,-13.4).curveTo(-23.6,-17.6,-22,-21.3).curveTo(-20.7,-23.9,-16.7,-25.7).lineTo(-7.3,-29).lineTo(-6.4,-29.3).lineTo(-6.4,-29.2).curveTo(-5.3,-22.9,-0.1,-22.3).curveTo(5,-22.9,6.2,-29.2).lineTo(6.2,-29.3).lineTo(7,-29).lineTo(16.5,-25.7).curveTo(20.5,-23.9,21.7,-21.3).curveTo(23.3,-17.6,24.3,-13.4).curveTo(25.2,-9.9,25.9,-4.1).curveTo(27.3,6.1,24.5,19.3).curveTo(23.4,24.8,21.9,29.3).closePath();
	this.shape_6.setTransform(516.7,376.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.7,3.1).curveTo(-2.2,3.1,-2.5,2.6).curveTo(-2.7,2.2,-2.6,1.7).curveTo(-1.7,-0.7,0.5,-2.6).curveTo(1.5,-3.3,2,-3.1).curveTo(2.5,-2.9,2.6,-2.3).curveTo(2.7,-1.8,2.4,-1.4).curveTo(2.2,-1,1.2,-0.3).curveTo(0.2,0.7,-0.2,1.7).lineTo(-0.7,2.7).curveTo(-1,3.1,-1.6,3.1).lineTo(-1.7,3.1).closePath();
	this.shape_7.setTransform(531.2,406.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,6.3).curveTo(-5.5,4.8,-4.4,2.2).curveTo(-3.6,0.1,-2.3,-4).lineTo(-1.8,-5.4).curveTo(-1.6,-6.6,-1.4,-6.8).lineTo(-0.9,-6.7).curveTo(0.2,-6.5,1.9,-6).lineTo(4.8,-5.1).lineTo(3,0.5).lineTo(2.2,3).curveTo(1.7,4.5,1.1,5.4).curveTo(-0,6.8,-1.4,6.8).curveTo(-2.2,6.8,-3.1,6.3).closePath();
	this.shape_8.setTransform(534.1,408);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.7,2.7).lineTo(0.2,1.7).curveTo(-0.3,0.7,-1.2,-0.3).curveTo(-2.2,-1,-2.5,-1.4).curveTo(-2.7,-1.8,-2.6,-2.3).curveTo(-2.5,-2.9,-2,-3.1).curveTo(-1.6,-3.3,-1.2,-3.1).lineTo(-0.5,-2.6).curveTo(1.6,-0.8,2.5,1.7).lineTo(2.6,1.7).curveTo(2.7,2.2,2.5,2.6).curveTo(2.2,3.1,1.6,3.1).lineTo(1.5,3.2).curveTo(1.1,3.2,0.7,2.7).closePath();
	this.shape_9.setTransform(504.9,406.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,5.4).curveTo(-1.7,4.5,-2.2,3).lineTo(-3,0.5).curveTo(-3.7,-1.6,-4.7,-5.1).lineTo(-1.9,-6).curveTo(-0.2,-6.5,0.9,-6.7).lineTo(1.5,-6.8).curveTo(1.6,-6.6,1.8,-5.4).lineTo(2.3,-4).curveTo(3.4,-0.6,4.4,2.2).curveTo(5.5,4.8,3.1,6.3).curveTo(2.2,6.8,1.3,6.8).curveTo(0,6.8,-1,5.4).closePath();
	this.shape_10.setTransform(501.9,408);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-1.4,2.5).curveTo(-2.1,2.6,-2.7,2).curveTo(-3.3,1.4,-3.2,0.7).lineTo(-3.2,-0.6).curveTo(-3.3,-1.5,-2.7,-2).curveTo(-2.1,-2.6,-1.4,-2.5).lineTo(1.4,-2.5).curveTo(2.1,-2.6,2.7,-2).curveTo(3.2,-1.5,3.3,-0.6).lineTo(3.3,0.7).curveTo(3.2,1.4,2.7,2).curveTo(2.1,2.6,1.4,2.5).closePath().moveTo(-2,-1.3).curveTo(-2.3,-1.1,-2.3,-0.6).lineTo(-2.3,0.7).curveTo(-2.3,1.1,-2,1.4).curveTo(-1.7,1.6,-1.4,1.6).lineTo(1.4,1.6).curveTo(1.7,1.6,2,1.4).curveTo(2.3,1.1,2.3,0.7).lineTo(2.3,-0.6).curveTo(2.3,-1.6,1.4,-1.6).lineTo(-1.4,-1.6).curveTo(-1.8,-1.6,-2,-1.3).closePath();
	this.shape_11.setTransform(516.6,400.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-15.8,1.6).lineTo(-15.8,-1.6).lineTo(15.8,-1.6).lineTo(15.8,1.6).closePath();
	this.shape_12.setTransform(516.5,400.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-7.5,1.2).curveTo(-7.5,-1.3,-5.3,-2.5).curveTo(-3.3,-3.7,-0,-3.7).curveTo(3.3,-3.7,5.3,-2.5).curveTo(7.5,-1.3,7.5,1.2).curveTo(7.5,3.7,0,3.6).curveTo(-7.5,3.7,-7.5,1.2).closePath();
	this.shape_13.setTransform(526.1,485.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-7.5,1.2).curveTo(-7.4,-1.3,-5.3,-2.5).curveTo(-3.3,-3.7,-0,-3.7).curveTo(3.3,-3.7,5.3,-2.5).curveTo(7.4,-1.3,7.5,1.2).curveTo(7.5,3.7,-0,3.6).curveTo(-7.5,3.7,-7.5,1.2).closePath();
	this.shape_14.setTransform(507,485.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#0D0C0C").beginStroke().moveTo(3.5,42.9).lineTo(1.5,-30.6).lineTo(-1.4,-30.6).lineTo(-3.5,42.9).lineTo(-14.7,42.9).lineTo(-15.8,-42.9).lineTo(15.8,-42.9).lineTo(14.8,42.9).closePath();
	this.shape_15.setTransform(516.5,441.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-5.1,11.2).lineTo(-5.1,9).lineTo(-6.3,9).lineTo(-6.7,-5.4).lineTo(-5.1,-6.1).lineTo(-5.1,-11.2).lineTo(5.1,-11.2).lineTo(5.1,-6.1).lineTo(6.7,-5.4).lineTo(6.3,9).lineTo(5.1,9).lineTo(5.1,11.2).closePath();
	this.shape_16.setTransform(516.5,353.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#0D0C0C").beginStroke().moveTo(7.8,7.5).curveTo(6.4,6.2,5.6,4.9).curveTo(6.3,7.2,7.5,8.2).curveTo(3.2,7.1,0.3,3.7).curveTo(0.6,5.4,2.2,6.9).curveTo(1.1,6.4,-0.1,5.6).curveTo(-2.3,4.1,-4.2,1.5).curveTo(-5.6,4.4,-7.5,6.7).curveTo(-9.7,9.2,-11.2,9.3).curveTo(-14.1,4,-11.4,-2.4).curveTo(-8.3,-9.7,-0.1,-9.6).curveTo(8.1,-9.6,11.2,-2.6).curveTo(14,3.6,11.4,9.6).curveTo(9.8,9.3,7.8,7.5).closePath();
	this.shape_17.setTransform(576.4,326.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.5,12.6).curveTo(-9.7,8.9,-9.8,5.4).curveTo(-10.6,5.4,-11.3,4.8).curveTo(-11.9,4.1,-11.9,3.2).lineTo(-11.9,1).curveTo(-11.9,0.1,-11.3,-0.5).curveTo(-10.6,-1.1,-9.8,-1.1).lineTo(-9.8,-5.6).curveTo(-9.7,-9.1,-6.5,-12.7).curveTo(-3.2,-16.2,0,-16.2).curveTo(3.3,-16.2,6.5,-12.7).curveTo(9.8,-9.1,9.8,-5.6).lineTo(9.8,-1.1).curveTo(10.7,-1.1,11.4,-0.5).curveTo(11.9,0.1,11.9,1).lineTo(11.9,3.2).curveTo(11.9,4.1,11.4,4.8).curveTo(10.7,5.4,9.8,5.4).curveTo(9.8,8.9,6.5,12.6).curveTo(3.3,16.2,0,16.2).curveTo(-3.2,16.2,-6.5,12.6).closePath();
	this.shape_18.setTransform(576.3,336);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#0D0C0C").beginStroke().moveTo(3,9.4).lineTo(0.9,8.1).lineTo(1.4,9.8).curveTo(-0.6,9,-2.3,6.6).curveTo(-5.7,1.7,-5.2,-5.3).curveTo(-5.1,-6.9,-4.6,-8.1).curveTo(-4.2,-9.1,-3.4,-9.8).curveTo(-2.8,-10.3,-2.2,-10.4).curveTo(-1.5,-10.6,-0.5,-10.1).curveTo(1,-9.2,2,-6.8).curveTo(2.9,-4.4,3.2,-0.6).lineTo(3.7,5.8).curveTo(4.1,8.9,5.2,10.5).curveTo(4.4,10.3,3,9.4).closePath();
	this.shape_19.setTransform(588.3,346.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-2.1,14.6).curveTo(-1.1,13.3,0.1,11.3).lineTo(2.1,7.4).curveTo(3.6,4.3,4.1,2.6).curveTo(4.4,1.5,3.7,-0.3).curveTo(2.8,-2.3,1.3,-4).lineTo(-2,-7.3).curveTo(-5.9,-11.1,-8.5,-11.2).lineTo(-10.7,-19.5).curveTo(-4.1,-19.5,2.6,-12.7).curveTo(7.7,-7.6,9.6,-2.9).curveTo(11.3,1,10.4,4.4).curveTo(9.7,6.7,7.9,10.4).curveTo(4.6,16.7,1.3,19.5).closePath();
	this.shape_20.setTransform(591.3,374.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-3.5,3.2).curveTo(-4.7,2.3,-4.9,1).curveTo(-5,-0,-3.6,-0.9).curveTo(-2.5,-1.7,-1.2,-1.8).curveTo(-0.3,-1.9,1.3,-3).lineTo(2.7,-4).curveTo(5,-0.4,4.8,-0).curveTo(4.7,0.4,2.4,2.1).curveTo(-0.1,3.9,-1.2,4).lineTo(-1.4,4).curveTo(-2.5,4,-3.5,3.2).closePath();
	this.shape_21.setTransform(589.2,392.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#E6E7E8").beginStroke().moveTo(0.7,1).lineTo(-0.7,0.4).lineTo(-1.6,0.4).curveTo(-2.1,0.3,-2.3,-0).curveTo(-2.6,-0.4,-2.4,-0.8).curveTo(-2.2,-1.3,-1.7,-1.3).curveTo(3.9,-0.2,2,1.2).lineTo(1.6,1.3).curveTo(1.3,1.3,0.7,1).closePath();
	this.shape_22.setTransform(590,390.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-7.8,10.4).curveTo(-9.5,7.2,-10.3,4.4).curveTo(-11.3,0.9,-9.6,-2.9).curveTo(-7.6,-7.6,-2.6,-12.7).curveTo(4.1,-19.5,10.7,-19.5).lineTo(8.6,-11.2).curveTo(5.9,-11.1,2.1,-7.3).lineTo(-1.2,-4).curveTo(-2.7,-2.3,-3.6,-0.3).curveTo(-4.4,1.4,-4.1,2.6).curveTo(-3.4,4.8,-2,7.4).curveTo(0.8,12.9,2.1,14.6).lineTo(-1.3,19.5).curveTo(-4.6,16.7,-7.8,10.4).closePath();
	this.shape_23.setTransform(561.3,374.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#E6E7E8").beginStroke().moveTo(1.2,4).curveTo(0.1,3.9,-2.4,2.1).curveTo(-4.7,0.4,-4.8,-0).curveTo(-4.9,-0.3,-3.9,-2.2).lineTo(-2.8,-4).curveTo(-2.7,-4.1,-1.3,-3).curveTo(0.3,-1.9,1.2,-1.8).curveTo(2.5,-1.7,3.7,-0.9).curveTo(5,-0,4.9,1).curveTo(4.7,2.3,3.5,3.2).curveTo(2.5,4,1.4,4).lineTo(1.2,4).closePath();
	this.shape_24.setTransform(563.4,392.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-2.1,1.2).curveTo(-3.2,0.3,-1.1,-0.6).curveTo(0.7,-1.2,1.7,-1.3).lineTo(1.7,-1.3).curveTo(2.2,-1.3,2.4,-0.8).curveTo(2.6,-0.4,2.3,-0).curveTo(2.1,0.3,1.6,0.4).lineTo(0.7,0.4).lineTo(-0.7,1).curveTo(-1.3,1.3,-1.7,1.3).lineTo(-2.1,1.2).closePath();
	this.shape_25.setTransform(562.6,390.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-5.4,22.3).lineTo(-5.4,-22.3).curveTo(2.4,-20.8,4.2,-13.3).curveTo(5.9,-5.9,0.8,-0.5).lineTo(1.7,6.7).curveTo(3,15.3,5.4,22.3).closePath();
	this.shape_26.setTransform(585.9,377.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-5.4,22.5).curveTo(-3,15.5,-1.6,6.9).lineTo(-0.8,-0.4).curveTo(-5.8,-5.7,-4.1,-13.2).curveTo(-2.4,-21.1,5.4,-22.5).lineTo(5.4,22.5).closePath();
	this.shape_27.setTransform(566.7,377.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-12.1,18.1).curveTo(-12.4,18,-12.5,17.7).curveTo(-16.3,1.2,-14.7,-10.1).curveTo(-14.2,-13.6,-13.2,-16.2).lineTo(-12.4,-18.1).lineTo(12.4,-18.1).lineTo(13.3,-16.2).curveTo(14.2,-13.6,14.7,-10.1).curveTo(16.3,1.2,12.5,17.7).curveTo(12.5,18,12.1,18.1).closePath();
	this.shape_28.setTransform(576.3,411.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-8.6,15.1).lineTo(-8.6,-15.1).lineTo(8.6,-15.1).lineTo(8.6,15.1).closePath();
	this.shape_29.setTransform(576.3,380.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-0.3,3.9).curveTo(-3.6,3.6,-3.3,-0.5).curveTo(-3.2,-1.3,-2.8,-2.7).lineTo(-2.4,-3.9).lineTo(-2,-2.1).curveTo(-1.3,-0.2,0,-0.1).curveTo(1.3,0.1,2.3,-1.7).lineTo(3.1,-3.5).lineTo(3.3,-2.2).curveTo(3.4,-0.8,3.3,0.1).curveTo(3,3.9,0.1,3.9).lineTo(-0.3,3.9).closePath();
	this.shape_30.setTransform(567.8,485.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-3.3,-0.3).curveTo(-3.3,-1.1,-3,-2.5).lineTo(-2.8,-3.8).lineTo(-2.2,-1.9).curveTo(-1.3,-0.1,-0,-0.1).curveTo(1.3,-0.1,2.2,-1.9).lineTo(2.7,-3.8).lineTo(3,-2.5).curveTo(3.3,-1.1,3.3,-0.3).curveTo(3.3,3.8,-0,3.8).curveTo(-3.3,3.8,-3.3,-0.3).closePath();
	this.shape_31.setTransform(580.6,485.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,45.5).lineTo(0.5,-31).lineTo(0,-28.9).lineTo(-0.4,-28.9).lineTo(-2,9.6).lineTo(-5.7,45.5).lineTo(-11.3,45.5).lineTo(-10.4,37).lineTo(-9.4,21.2).curveTo(-8.7,12.2,-9,9.7).curveTo(-9.9,0.2,-11.6,-10.7).curveTo(-13.4,-21.6,-14,-25.9).curveTo(-15.9,-39.6,-12.4,-45.5).lineTo(12.5,-45.5).curveTo(14.9,-41.3,14.6,-35.1).curveTo(14.4,-31.1,12.4,-19.9).curveTo(7,9.7,7.1,37).lineTo(7.1,45.5).closePath();
	this.shape_32.setTransform(576.3,440.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,9.7).lineTo(-6.4,-3.4).lineTo(-4.3,-4.3).lineTo(-4.3,-9.7).lineTo(4.2,-9.7).lineTo(4.2,-4.3).lineTo(6.4,-3.4).lineTo(4.2,9.7).closePath();
	this.shape_33.setTransform(576.4,359.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-12,-1.7).curveTo(-8.8,-10.5,1.4,-10.2).curveTo(9.9,-10,12.5,-2.4).curveTo(14.6,4,11.8,9.5).curveTo(9,8.1,7.3,5.5).curveTo(5.9,3.4,5,0.1).lineTo(3.4,2.3).curveTo(2.4,3.4,1.3,4.2).curveTo(0.3,5,-0.9,5.5).curveTo(0.7,3.9,1,2.3).curveTo(-2,5.7,-6.2,6.8).curveTo(-5.1,5.8,-4.4,3.6).curveTo(-5.2,4.8,-7.6,6.9).curveTo(-10.6,9.6,-12.8,10.3).curveTo(-14.3,4.5,-12,-1.7).closePath();
	this.shape_34.setTransform(647,325.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#0D0C0C").beginStroke().moveTo(0.6,-0.6).lineTo(0.6,-1.2).curveTo(0.5,-1.5,-0,-1.5).curveTo(-0.5,-1.5,-0.6,-1.2).lineTo(-0.6,-0.6).curveTo(-1.6,4,-5.9,4).curveTo(-8.3,4,-9.5,2.2).curveTo(-10.6,0.7,-10.6,-1.5).lineTo(-11.2,-1.8).lineTo(-11.2,-3.4).lineTo(-9.7,-3.4).curveTo(-8.9,-4,-5.9,-4).curveTo(-2.3,-4,-1.1,-2.6).curveTo(-0.7,-2.8,-0,-2.8).curveTo(0.7,-2.8,1.1,-2.6).curveTo(2.3,-4,5.9,-4).curveTo(8.9,-4,9.7,-3.4).lineTo(11.2,-3.4).lineTo(11.2,-1.8).lineTo(10.6,-1.5).curveTo(10.5,0.8,9.5,2.2).curveTo(8.2,4,5.9,4).curveTo(1.6,4,0.6,-0.6).closePath().moveTo(1.7,-2.1).curveTo(1.2,-1.5,1.4,-0.7).curveTo(2.2,3.2,5.9,3.2).curveTo(8.3,3.2,9.2,1.2).curveTo(9.8,-0,9.8,-1.5).curveTo(9.8,-2.3,9.4,-2.7).curveTo(8.9,-3.2,5.9,-3.2).curveTo(2.6,-3.2,1.7,-2.1).closePath().moveTo(-9.4,-2.7).curveTo(-9.8,-2.2,-9.8,-1.5).curveTo(-9.8,-0,-9.3,1.2).curveTo(-8.3,3.2,-5.9,3.2).curveTo(-2.3,3.2,-1.4,-0.7).curveTo(-1.2,-1.5,-1.7,-2.1).curveTo(-2.6,-3.2,-5.9,-3.2).curveTo(-8.9,-3.2,-9.4,-2.7).closePath();
	this.shape_35.setTransform(647,336.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-4.2,4.3).curveTo(-6,2.5,-6,-0).curveTo(-6,-2.5,-4.2,-4.3).curveTo(-2.5,-6,-0,-6).curveTo(2.5,-6,4.2,-4.3).curveTo(6,-2.4,6,-0).curveTo(6,2.5,4.2,4.3).curveTo(2.5,6,-0,6).curveTo(-2.5,6,-4.2,4.3).closePath();
	this.shape_36.setTransform(654.1,318.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.5,12.6).curveTo(-9.8,9,-9.8,5.4).curveTo(-10.7,5.4,-11.3,4.8).curveTo(-12,4.1,-12,3.3).lineTo(-12,1).curveTo(-12,0.2,-11.3,-0.5).curveTo(-10.7,-1.1,-9.8,-1.1).lineTo(-9.8,-5.5).curveTo(-9.8,-9.1,-6.5,-12.6).curveTo(-3.2,-16.2,-0,-16.2).curveTo(3.2,-16.2,6.5,-12.6).curveTo(9.8,-9.1,9.8,-5.5).lineTo(9.8,-1.1).curveTo(10.7,-1.1,11.3,-0.5).curveTo(12,0.2,12,1).lineTo(12,3.3).curveTo(12,4.1,11.3,4.8).curveTo(10.7,5.4,9.8,5.4).curveTo(9.8,9,6.5,12.6).curveTo(3.2,16.2,-0,16.2).curveTo(-3.2,16.2,-6.5,12.6).closePath();
	this.shape_37.setTransform(647,334.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-1,-6.8).lineTo(4,-3.4).lineTo(-0.8,-1.6).lineTo(1.1,0.9).lineTo(-4,6.9).closePath();
	this.shape_38.setTransform(653.1,359.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-1.1,0.9).lineTo(0.8,-1.6).lineTo(-4,-3.4).lineTo(1,-6.8).lineTo(4,6.9).closePath();
	this.shape_39.setTransform(640.9,359.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-2.4,14.6).curveTo(-1.4,13.3,-0.3,11.3).lineTo(1.7,7.3).curveTo(3.3,4.2,3.7,2.6).curveTo(4,1.4,3.3,-0.3).curveTo(2.4,-2.4,0.9,-4).lineTo(-2.4,-7.4).curveTo(-6.2,-11.1,-8.9,-11.2).lineTo(-10.4,-19.5).curveTo(-3.8,-19.5,2.6,-12.7).curveTo(7.2,-7.9,9.3,-3).curveTo(11,1,10,4.4).curveTo(9.2,7.2,7.5,10.4).curveTo(4.3,16.6,1,19.5).closePath();
	this.shape_40.setTransform(662.3,372.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-3.5,3.2).curveTo(-4.7,2.3,-4.9,1).curveTo(-5,-0,-3.6,-0.9).curveTo(-2.5,-1.7,-1.2,-1.9).curveTo(-0.3,-1.9,1.3,-3).lineTo(2.7,-4).curveTo(5,-0.4,4.8,-0).curveTo(4.7,0.4,2.4,2.1).curveTo(-0.1,3.9,-1.2,4).lineTo(-1.4,4).curveTo(-2.5,4,-3.5,3.2).closePath();
	this.shape_41.setTransform(659.9,390.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#E6E7E8").beginStroke().moveTo(0.7,1).lineTo(-0.7,0.4).lineTo(-1.6,0.4).curveTo(-2.1,0.3,-2.3,-0).curveTo(-2.6,-0.4,-2.4,-0.8).curveTo(-2.2,-1.3,-1.7,-1.3).curveTo(3.9,-0.2,2.1,1.1).curveTo(2,1.2,2,1.2).curveTo(1.9,1.2,1.9,1.2).curveTo(1.8,1.3,1.7,1.3).curveTo(1.7,1.3,1.6,1.3).curveTo(1.2,1.3,0.7,1).closePath();
	this.shape_42.setTransform(660.7,388.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-8,25.8).lineTo(-8,9.5).curveTo(-7.9,-7.4,-7.6,-10.1).curveTo(-6.6,-18.4,-2.6,-22.3).curveTo(1.1,-25.8,7.3,-25.8).lineTo(8,-19.6).lineTo(7.9,-19.6).curveTo(3,-19.6,1.7,-18.3).curveTo(0.4,-17.1,-0.3,-14.4).curveTo(-0.6,-12.9,-1.1,-9.4).curveTo(-1.4,-6.9,-1.6,9.7).lineTo(-1.9,25.8).closePath();
	this.shape_43.setTransform(634.7,379.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#E6E7E8").beginStroke().moveTo(0.1,2.8).curveTo(-0.1,2.5,-0.1,2.1).curveTo(-0.1,1.1,-0.5,-0.3).lineTo(-0.9,-1.3).curveTo(-1.5,-1.9,-1,-2.6).curveTo(-0.6,-3.3,-0,-2.8).lineTo(0.6,-1.4).curveTo(1.3,0.3,1.3,2.1).curveTo(1.3,3.1,0.6,3.1).curveTo(0.3,3.1,0.1,2.8).closePath();
	this.shape_44.setTransform(631.5,406.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1.8,2.8).curveTo(-2.8,-1,-1.5,-5).curveTo(-1,-6.5,0.7,-5.9).curveTo(1.5,-5.6,2.3,-5).lineTo(2.3,3.1).curveTo(2.3,4.4,1.7,5.2).curveTo(1,6.1,0.2,6.1).curveTo(-1,6.1,-1.8,2.8).closePath();
	this.shape_45.setTransform(629.3,406.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-6.7,22.7).curveTo(-4.3,15.7,-2.7,6.6).lineTo(-1.7,-1).curveTo(-6.7,-6.5,-5.3,-13.7).curveTo(-3.9,-21.3,3.8,-22.7).lineTo(6.6,-9.8).lineTo(6.6,22.7).closePath();
	this.shape_46.setTransform(638.2,376.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-6.7,22.7).lineTo(-6.7,-9.8).lineTo(-3.8,-22.7).curveTo(3.8,-21.3,5.4,-13.7).curveTo(6.7,-6.5,1.7,-1).lineTo(2.7,6.6).curveTo(4.2,15.7,6.6,22.7).closePath();
	this.shape_47.setTransform(655.8,376.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-8.6,15.1).lineTo(-8.6,-15.1).lineTo(8.6,-15.1).lineTo(8.6,15.1).closePath();
	this.shape_48.setTransform(647,378.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-8.6,15.1).lineTo(-8.6,-15.1).lineTo(8.6,-15.1).lineTo(8.6,15.1).closePath();
	this.shape_49.setTransform(647,378.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-8.5,42.5).curveTo(-11.5,42.5,-11.5,42.4).curveTo(-11.4,39,-10.4,24.8).curveTo(-9.6,13.4,-10.1,8.8).curveTo(-11,-0.7,-12.6,-11).lineTo(-14.9,-24.9).curveTo(-16.6,-36.7,-12.9,-42.6).lineTo(12.9,-42.6).curveTo(15.4,-38.3,15.4,-31.9).curveTo(15.4,-27.5,13.8,-16.3).curveTo(9.4,15.1,9.7,42.4).curveTo(9.7,42.6,3.7,42.4).lineTo(0.4,-28.1).lineTo(-0.5,-28.1).lineTo(-2,11).lineTo(-5.5,42.5).lineTo(-7,42.6).lineTo(-8.5,42.5).closePath();
	this.shape_50.setTransform(647.1,436.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-0.4,3.9).curveTo(-3.7,3.6,-3.3,-0.4).curveTo(-3.3,-1.3,-2.9,-2.7).lineTo(-2.5,-3.9).lineTo(-2,-2).curveTo(-1.3,-0.1,-0,-0).curveTo(1.3,0.1,2.3,-1.7).lineTo(3,-3.4).lineTo(3.2,-2.2).curveTo(3.4,-0.7,3.3,0.1).curveTo(3,3.9,0.1,3.9).lineTo(-0.4,3.9).closePath();
	this.shape_51.setTransform(638.2,483.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-3,4).lineTo(-2.5,-4.4).lineTo(3,-4).lineTo(2.1,4.4).closePath();
	this.shape_52.setTransform(638.6,480.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-3.3,-0.3).curveTo(-3.3,-1.1,-3,-2.5).lineTo(-2.8,-3.8).lineTo(-2.2,-2).curveTo(-1.3,-0.1,-0,-0.2).curveTo(1.3,-0.1,2.2,-2).lineTo(2.8,-3.8).lineTo(3.1,-2.5).curveTo(3.3,-1.1,3.3,-0.3).curveTo(3.3,3.8,-0,3.8).curveTo(-3.3,3.8,-3.3,-0.3).closePath();
	this.shape_53.setTransform(653.7,483.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-2.6,4.2).lineTo(-2.8,-4.2).lineTo(2.8,-4.2).lineTo(2.6,4.2).closePath();
	this.shape_54.setTransform(653.7,480.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,9.7).lineTo(-6.4,-3.8).lineTo(-4.3,-4.2).lineTo(-4.3,-9.7).lineTo(4.3,-9.7).lineTo(4.3,-4.2).lineTo(6.4,-3.8).lineTo(4.3,9.7).closePath();
	this.shape_55.setTransform(647,357.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-5,1.9).lineTo(-5.1,-1.9).lineTo(5.1,-1.9).lineTo(5,1.9).closePath();
	this.shape_56.setTransform(647,354.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(147));

	// llanta
	this.instance_4 = new lib.foodtruckllanta();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1356.3,402.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-720,x:518.3},35).wait(89).to({rotation:-690,x:520.7},3).to({rotation:-720,x:518.5},3).to({rotation:-1080,x:-94.7},16).wait(1));

	// llanta
	this.instance_5 = new lib.foodtruckllanta();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1174.3,402.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-720,x:336.3},35).wait(89).to({rotation:-690,x:338.7},3).to({rotation:-720,x:336.6},3).to({rotation:-1080,x:-276.7},16).wait(1));

	// truck
	this.instance_6 = new lib.foodtruck_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1269.4,338.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:431.5},35).wait(89).to({x:434},3).to({x:431.5},3).to({x:-181},16).wait(1));

	// fondo
	this.instance_7 = new lib.foodtruckbaksies();
	this.instance_7.parent = this;
	this.instance_7.setTransform(525,223.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147));

	// pisp
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.6,8.6,-29.5,6.1).curveTo(-31.3,3.5,-31.3,-0).curveTo(-31.3,-3.5,-29.5,-6.1).curveTo(-27.6,-8.6,-25,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.5,-6.1).curveTo(31.3,-3.5,31.3,-0).curveTo(31.3,3.5,29.5,6.1).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_57.setTransform(992.3,419.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#28292B").beginStroke().moveTo(-24.9,8.6).curveTo(-27.6,8.6,-29.4,6).curveTo(-31.3,3.5,-31.3,0).curveTo(-31.3,-3.6,-29.4,-6.1).curveTo(-27.6,-8.6,-24.9,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.4,-6.1).curveTo(31.3,-3.6,31.3,0).curveTo(31.3,3.5,29.4,6).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_58.setTransform(819,466);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#28292B").beginStroke().moveTo(-23.8,8.6).curveTo(-26.4,8.6,-28.3,6).curveTo(-30.2,3.5,-30.2,0).curveTo(-30.2,-3.6,-28.3,-6.1).curveTo(-26.4,-8.6,-23.8,-8.6).lineTo(23.8,-8.6).curveTo(26.5,-8.6,28.3,-6.1).curveTo(30.2,-3.6,30.2,0).curveTo(30.2,3.5,28.3,6).curveTo(26.4,8.6,23.8,8.6).closePath();
	this.shape_59.setTransform(893.1,466);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#28292B").beginStroke().moveTo(-57.1,14.4).curveTo(-61.5,14.4,-64.6,10.2).curveTo(-67.7,6,-67.7,0).curveTo(-67.7,-5.9,-64.6,-10.2).curveTo(-61.5,-14.4,-57.1,-14.4).lineTo(57.1,-14.4).curveTo(61.5,-14.4,64.6,-10.2).curveTo(67.7,-5.9,67.7,0).curveTo(67.7,5.9,64.6,10.2).curveTo(61.5,14.4,57.1,14.4).closePath();
	this.shape_60.setTransform(1007.3,461.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#28292B").beginStroke().moveTo(-58.8,21.1).curveTo(-65.2,21.1,-69.7,14.9).curveTo(-74.3,8.7,-74.3,-0).curveTo(-74.3,-8.7,-69.7,-14.9).curveTo(-65.2,-21.1,-58.8,-21.1).lineTo(58.8,-21.1).curveTo(65.2,-21.1,69.8,-14.9).curveTo(74.3,-8.7,74.3,-0).curveTo(74.3,8.7,69.8,14.9).curveTo(65.2,21.1,58.8,21.1).closePath();
	this.shape_61.setTransform(856.5,424.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#28292B").beginStroke().moveTo(-68.7,21.1).curveTo(-71,21.1,-72.6,19.4).curveTo(-74.3,17.8,-74.3,15.5).lineTo(-74.3,-15.5).curveTo(-74.3,-17.8,-72.6,-19.4).curveTo(-71,-21.1,-68.7,-21.1).lineTo(68.7,-21.1).curveTo(71,-21.1,72.6,-19.4).curveTo(74.3,-17.8,74.3,-15.5).lineTo(74.3,15.5).curveTo(74.3,17.8,72.6,19.4).curveTo(71,21.1,68.7,21.1).closePath();
	this.shape_62.setTransform(546.1,455.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#28292B").beginStroke().moveTo(-63.5,14.5).curveTo(-65.1,14.5,-66.2,13.3).curveTo(-67.3,12.2,-67.3,10.7).lineTo(-67.3,-10.6).curveTo(-67.3,-12.2,-66.2,-13.3).curveTo(-65.1,-14.4,-63.5,-14.4).lineTo(63.5,-14.4).curveTo(65,-14.4,66.2,-13.3).curveTo(67.3,-12.2,67.3,-10.6).lineTo(67.3,10.7).curveTo(67.3,12.2,66.2,13.3).curveTo(65,14.5,63.5,14.5).closePath();
	this.shape_63.setTransform(687.7,415.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#28292B").beginStroke().moveTo(-87.3,14.4).curveTo(-91.7,14.4,-94.8,10.2).curveTo(-97.9,5.9,-97.9,-0).curveTo(-97.9,-6,-94.8,-10.2).curveTo(-91.7,-14.4,-87.3,-14.4).lineTo(87.3,-14.4).curveTo(91.7,-14.4,94.8,-10.2).curveTo(97.9,-6,97.9,-0).curveTo(97.9,5.9,94.8,10.2).curveTo(91.7,14.4,87.3,14.4).closePath();
	this.shape_64.setTransform(365.8,421.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#28292B").beginStroke().moveTo(-45.2,8.6).curveTo(-47.8,8.6,-49.7,6.1).curveTo(-51.5,3.6,-51.5,0).curveTo(-51.5,-3.6,-49.7,-6).curveTo(-47.8,-8.6,-45.2,-8.6).lineTo(45.2,-8.6).curveTo(47.8,-8.6,49.7,-6).curveTo(51.5,-3.6,51.5,0).curveTo(51.5,3.6,49.7,6.1).curveTo(47.8,8.6,45.2,8.6).closePath();
	this.shape_65.setTransform(696,457.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#28292B").beginStroke().moveTo(-11.3,8.6).curveTo(-12.3,8.6,-12.9,8).curveTo(-13.6,7.3,-13.6,6.4).lineTo(-13.6,-6.3).curveTo(-13.6,-7.3,-12.9,-8).curveTo(-12.3,-8.6,-11.3,-8.6).lineTo(11.4,-8.6).curveTo(12.3,-8.6,13,-8).curveTo(13.6,-7.3,13.6,-6.3).lineTo(13.6,6.4).curveTo(13.6,7.3,13,8).curveTo(12.3,8.6,11.4,8.6).closePath();
	this.shape_66.setTransform(579.7,415.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#28292B").beginStroke().moveTo(-31.8,8.6).curveTo(-32.7,8.6,-33.4,8).curveTo(-34,7.3,-34,6.4).lineTo(-34,-6.3).curveTo(-34,-7.3,-33.4,-8).curveTo(-32.7,-8.6,-31.8,-8.6).lineTo(31.8,-8.6).curveTo(32.7,-8.6,33.4,-8).curveTo(34,-7.3,34,-6.3).lineTo(34,6.4).curveTo(34,7.3,33.4,8).curveTo(32.7,8.6,31.8,8.6).closePath();
	this.shape_67.setTransform(521.8,415.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.6,8.6,-29.4,6.1).curveTo(-31.3,3.5,-31.3,-0).curveTo(-31.3,-3.5,-29.4,-6.1).curveTo(-27.6,-8.6,-25,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.4,-6.1).curveTo(31.3,-3.5,31.3,-0).curveTo(31.3,3.5,29.4,6.1).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_68.setTransform(212,419.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#28292B").beginStroke().moveTo(-37.3,8.6).curveTo(-39.9,8.6,-41.8,6).curveTo(-43.6,3.5,-43.6,0).curveTo(-43.6,-3.6,-41.8,-6.1).curveTo(-39.9,-8.6,-37.3,-8.6).lineTo(37.3,-8.6).curveTo(39.9,-8.6,41.8,-6.1).curveTo(43.6,-3.6,43.6,0).curveTo(43.6,3.5,41.8,6).curveTo(39.8,8.6,37.3,8.6).closePath();
	this.shape_69.setTransform(99.4,466);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#28292B").beginStroke().moveTo(-49.8,8.6).curveTo(-52.4,8.6,-54.2,6.1).curveTo(-56.1,3.6,-56.1,0).curveTo(-56.1,-3.5,-54.2,-6.1).curveTo(-52.4,-8.6,-49.8,-8.6).lineTo(49.7,-8.6).curveTo(52.3,-8.6,54.2,-6.1).curveTo(56.1,-3.5,56.1,0).curveTo(56.1,3.6,54.2,6.1).curveTo(52.3,8.6,49.7,8.6).closePath();
	this.shape_70.setTransform(383.6,461.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#28292B").beginStroke().moveTo(-57.1,14.4).curveTo(-61.5,14.4,-64.6,10.2).curveTo(-67.7,6,-67.7,0).curveTo(-67.7,-5.9,-64.6,-10.2).curveTo(-61.5,-14.4,-57.1,-14.4).lineTo(57.1,-14.4).curveTo(61.4,-14.4,64.6,-10.2).curveTo(67.7,-5.9,67.7,0).curveTo(67.7,5.9,64.6,10.2).curveTo(61.4,14.4,57.1,14.4).closePath();
	this.shape_71.setTransform(227,461.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#28292B").beginStroke().moveTo(-72.2,21.1).curveTo(-78.6,21.1,-83.2,14.9).curveTo(-87.7,8.7,-87.7,-0).curveTo(-87.7,-8.7,-83.2,-14.9).curveTo(-78.6,-21.1,-72.2,-21.1).lineTo(72.2,-21.1).curveTo(78.6,-21.1,83.2,-14.9).curveTo(87.7,-8.7,87.7,-0).curveTo(87.7,8.7,83.2,14.9).curveTo(78.6,21.1,72.2,21.1).closePath();
	this.shape_72.setTransform(62.7,424.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(147));

	// Ambient
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_73.setTransform(525,182.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_74.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73}]}).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,257.5,1468.6,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;