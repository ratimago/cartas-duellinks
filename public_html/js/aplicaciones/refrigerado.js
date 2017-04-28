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



(lib.refriyogut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(6.1,39.3).lineTo(-137.4,5.9).curveTo(-139.8,5.3,-141.4,3.4).curveTo(-143,1.5,-143.1,-1).curveTo(-143.2,-3.4,-141.8,-5.5).curveTo(-140.4,-7.5,-138.1,-8.3).lineTo(-54,-36.9).curveTo(-40.2,-41.5,-25.9,-41.5).curveTo(-15.9,-41.5,-6.1,-39.3).lineTo(137.4,-5.9).curveTo(139.8,-5.3,141.4,-3.4).curveTo(143,-1.5,143.1,1).curveTo(143.2,3.4,141.8,5.5).curveTo(140.4,7.5,138.1,8.3).lineTo(53.9,36.9).curveTo(40.4,41.5,25.9,41.5).curveTo(15.9,41.5,6.1,39.3).closePath();
	this.shape.setTransform(0,-104.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-71.4,95.2).curveTo(-101,86,-101,73.1).lineTo(-101,-104.4).lineTo(0.1,-80.9).curveTo(12.8,-77.9,25.9,-77.9).curveTo(44.7,-77.9,62.5,-83.9).lineTo(101,-97).lineTo(101,73.1).curveTo(101,86,71.4,95.2).curveTo(41.8,104.4,-0,104.4).curveTo(-41.9,104.4,-71.4,95.2).closePath();
	this.shape_1.setTransform(0,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-145.9,286.2,291.9);


(lib.refriqueso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(15.1,8.8).lineTo(9.1,8.4).lineTo(9.1,7.9).curveTo(9.1,6.8,8.3,6).curveTo(7.5,5.2,6.4,5.2).curveTo(5.3,5.2,4.5,6).curveTo(3.7,6.8,3.7,7.9).lineTo(3.8,8.1).lineTo(-15.5,7).curveTo(-16.2,6.9,-16.7,6.4).curveTo(-17.2,6,-17.3,5.3).lineTo(-17.6,2.6).curveTo(-16.8,3.1,-15.9,3.1).curveTo(-14.6,3.1,-13.6,2.2).curveTo(-12.7,1.3,-12.7,-0).curveTo(-12.7,-1.3,-13.6,-2.2).curveTo(-14.6,-3.1,-15.9,-3.1).curveTo(-17.3,-3.1,-18.2,-2.1).lineTo(-18.9,-8.8).lineTo(18.9,-2.7).lineTo(17,7.3).curveTo(16.9,7.9,16.4,8.4).curveTo(15.9,8.8,15.3,8.8).lineTo(15.1,8.8).closePath().moveTo(-9.6,2.5).curveTo(-9.8,2.8,-9.8,3.1).curveTo(-9.8,3.5,-9.6,3.8).curveTo(-9.3,4,-8.9,4).curveTo(-8.5,4,-8.3,3.8).curveTo(-8,3.5,-8,3.1).curveTo(-8,2.8,-8.3,2.5).curveTo(-8.5,2.2,-8.9,2.2).curveTo(-9.3,2.2,-9.6,2.5).closePath().moveTo(-6.5,-2.5).curveTo(-7,-2,-7,-1.2).curveTo(-7,-0.4,-6.5,0.2).curveTo(-5.9,0.7,-5.1,0.7).curveTo(-4.3,0.7,-3.8,0.2).curveTo(-3.3,-0.4,-3.3,-1.2).curveTo(-3.3,-2,-3.8,-2.5).curveTo(-4.3,-3.1,-5.1,-3.1).curveTo(-5.9,-3.1,-6.5,-2.5).closePath();
	this.shape.setTransform(0,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(17.7,8.9).lineTo(10,7.7).curveTo(10.7,6.8,10.7,5.8).curveTo(10.7,4.7,9.9,3.9).curveTo(9.2,3.1,8,3.1).curveTo(6.9,3.1,6.1,3.9).curveTo(5.3,4.7,5.3,5.8).curveTo(5.3,6.4,5.6,7).lineTo(-18,3.4).curveTo(-18.6,3.3,-18.7,3).curveTo(-18.7,2.7,-18.1,2.5).lineTo(-3.2,-3.8).curveTo(-2.9,-2.3,-1.7,-1.3).curveTo(-0.5,-0.2,1.1,-0.2).curveTo(2.9,-0.2,4.2,-1.5).curveTo(5.4,-2.8,5.4,-4.6).curveTo(5.4,-6,4.6,-7.1).lineTo(8.5,-8.8).curveTo(9.1,-9,9.8,-8.8).curveTo(10.4,-8.5,10.7,-7.9).lineTo(12.5,-4.4).curveTo(11.7,-4.1,11.2,-3.4).curveTo(10.7,-2.7,10.7,-1.8).curveTo(10.7,-0.7,11.5,0.1).curveTo(12.3,0.9,13.5,0.9).curveTo(14.3,0.9,14.9,0.4).lineTo(18.5,7.7).curveTo(18.8,8.3,18.6,8.6).curveTo(18.4,8.9,17.9,8.9).lineTo(17.7,8.9).closePath().moveTo(-6.9,0.3).curveTo(-7.1,0.5,-7.1,0.9).curveTo(-7.1,1.3,-6.9,1.5).curveTo(-6.6,1.8,-6.2,1.8).curveTo(-5.8,1.8,-5.6,1.5).curveTo(-5.3,1.3,-5.3,0.9).curveTo(-5.3,0.5,-5.6,0.3).curveTo(-5.9,-0,-6.2,-0).curveTo(-6.6,-0,-6.9,0.3).closePath();
	this.shape_1.setTransform(0.1,-6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-15.2,37.8,30.6);


(lib.refripaletas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.8,1.2).lineTo(-14.8,-1.2).lineTo(14.8,-1.2).lineTo(14.8,1.2).closePath();
	this.shape.setTransform(0,25.6,1.949,1.949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.8,3).lineTo(-14.8,-3).lineTo(14.8,-3).lineTo(14.8,3).closePath();
	this.shape_1.setTransform(0,14.9,1.949,1.949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#FFFFFF").moveTo(14.8,5.8).lineTo(-14.8,5.8).lineTo(-14.8,-5.8).lineTo(14.8,-5.8).closePath();
	this.shape_2.setTransform(0,15.6,1.949,1.949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#F5F5F5").beginStroke().moveTo(-5.7,90.3).curveTo(-8.1,88,-8.1,84.6).lineTo(-8.1,42.2).lineTo(-31.7,42.2).curveTo(-35.3,42.2,-37.8,39.7).curveTo(-40.4,37.1,-40.4,33.5).lineTo(-40.4,-52.3).curveTo(-40.4,-69,-28.5,-80.9).curveTo(-16.7,-92.7,0,-92.7).curveTo(16.7,-92.7,28.6,-80.9).curveTo(40.4,-69.1,40.4,-52.3).lineTo(40.4,33.5).curveTo(40.4,37.1,37.9,39.7).curveTo(35.3,42.2,31.8,42.2).lineTo(8.1,42.2).lineTo(8.1,84.6).curveTo(8.1,88,5.7,90.3).curveTo(3.4,92.7,0,92.7).curveTo(-3.3,92.7,-5.7,90.3).closePath();
	this.shape_3.setTransform(20.3,-8.4,0.21,0.21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#F5F5F5").beginStroke().moveTo(-5.7,90.3).curveTo(-8.1,88,-8.1,84.6).lineTo(-8.1,42.2).lineTo(-31.7,42.2).curveTo(-35.3,42.2,-37.8,39.7).curveTo(-40.4,37.1,-40.4,33.5).lineTo(-40.4,-52.3).curveTo(-40.4,-69,-28.5,-80.9).curveTo(-16.7,-92.7,0,-92.7).curveTo(16.7,-92.7,28.6,-80.9).curveTo(40.4,-69.1,40.4,-52.3).lineTo(40.4,33.5).curveTo(40.4,37.1,37.9,39.7).curveTo(35.3,42.2,31.8,42.2).lineTo(8.1,42.2).lineTo(8.1,84.6).curveTo(8.1,88,5.7,90.3).curveTo(3.4,92.7,0,92.7).curveTo(-3.3,92.7,-5.7,90.3).closePath();
	this.shape_4.setTransform(0.3,-8.4,0.21,0.21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F5F5F5").beginStroke().moveTo(-5.7,90.3).curveTo(-8.1,88,-8.1,84.6).lineTo(-8.1,42.2).lineTo(-31.7,42.2).curveTo(-35.3,42.2,-37.8,39.7).curveTo(-40.4,37.1,-40.4,33.5).lineTo(-40.4,-52.3).curveTo(-40.4,-69,-28.5,-80.9).curveTo(-16.7,-92.7,0,-92.7).curveTo(16.7,-92.7,28.6,-80.9).curveTo(40.4,-69.1,40.4,-52.3).lineTo(40.4,33.5).curveTo(40.4,37.1,37.9,39.7).curveTo(35.3,42.2,31.8,42.2).lineTo(8.1,42.2).lineTo(8.1,84.6).curveTo(8.1,88,5.7,90.3).curveTo(3.4,92.7,0,92.7).curveTo(-3.3,92.7,-5.7,90.3).closePath();
	this.shape_5.setTransform(-20.2,-8.4,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-27.9,59.5,55.9);


(lib.refrillanta = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-19.8,39.8,39.8);


(lib.refrihelados = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.8,1.2).lineTo(-14.8,-1.2).lineTo(14.8,-1.2).lineTo(14.8,1.2).closePath();
	this.shape.setTransform(-0.1,19.5,1.949,1.949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.8,3).lineTo(-14.8,-3).lineTo(14.8,-3).lineTo(14.8,3).closePath();
	this.shape_1.setTransform(-0.1,8.9,1.949,1.949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#FFFFFF").moveTo(14.8,5.8).lineTo(-14.8,5.8).lineTo(-14.8,-5.8).lineTo(14.8,-5.8).closePath();
	this.shape_2.setTransform(-0.1,9.5,1.949,1.949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#ECECEC").beginStroke().moveTo(-36.9,-12.4).curveTo(-40.8,-9,-45.9,-9).curveTo(-51.6,-9,-55.6,-13).curveTo(-59.6,-17.1,-59.6,-22.7).curveTo(-59.6,-28.1,-55.9,-32.1).curveTo(-52.2,-36,-46.8,-36.4).lineTo(-46.8,-36.5).lineTo(-47.6,-45.1).curveTo(-47.6,-64.8,-33.7,-78.8).curveTo(-19.7,-92.7,0,-92.7).curveTo(17,-92.7,30.1,-82).curveTo(43.1,-71.4,46.6,-55.2).lineTo(46.6,-55).lineTo(47.1,-52.5).lineTo(47.3,-50.7).lineTo(47.6,-42.4).lineTo(46.9,-36.4).curveTo(52.2,-36,55.9,-32.1).curveTo(59.6,-28.1,59.6,-22.7).curveTo(59.6,-17.1,55.6,-13).curveTo(51.6,-9,45.9,-9).curveTo(40.8,-9,36.9,-12.4).lineTo(0,92.7).closePath();
	this.shape_3.setTransform(0,-5.8,0.174,0.174);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#ECECEC").beginStroke().moveTo(-36.9,-12.4).curveTo(-40.8,-9,-45.9,-9).curveTo(-51.6,-9,-55.6,-13).curveTo(-59.6,-17.1,-59.6,-22.7).curveTo(-59.6,-28.1,-55.9,-32.1).curveTo(-52.2,-36,-46.8,-36.4).lineTo(-46.8,-36.5).lineTo(-47.6,-45.1).curveTo(-47.6,-64.8,-33.7,-78.8).curveTo(-19.7,-92.7,0,-92.7).curveTo(17,-92.7,30.1,-82).curveTo(43.1,-71.4,46.6,-55.2).lineTo(46.6,-55).lineTo(47.1,-52.5).lineTo(47.3,-50.7).lineTo(47.6,-42.4).lineTo(46.9,-36.4).curveTo(52.2,-36,55.9,-32.1).curveTo(59.6,-28.1,59.6,-22.7).curveTo(59.6,-17.1,55.6,-13).curveTo(51.6,-9,45.9,-9).curveTo(40.8,-9,36.9,-12.4).lineTo(0,92.7).closePath();
	this.shape_4.setTransform(22.1,-5.8,0.174,0.174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#ECECEC").beginStroke().moveTo(-36.9,-12.4).curveTo(-40.8,-9,-45.9,-9).curveTo(-51.6,-9,-55.6,-13).curveTo(-59.6,-17.1,-59.6,-22.7).curveTo(-59.6,-28.1,-55.9,-32.1).curveTo(-52.2,-36,-46.8,-36.4).lineTo(-46.8,-36.5).lineTo(-47.6,-45.1).curveTo(-47.6,-64.8,-33.7,-78.8).curveTo(-19.7,-92.7,0,-92.7).curveTo(17,-92.7,30.1,-82).curveTo(43.1,-71.4,46.6,-55.2).lineTo(46.6,-55).lineTo(47.1,-52.5).lineTo(47.3,-50.7).lineTo(47.6,-42.4).lineTo(46.9,-36.4).curveTo(52.2,-36,55.9,-32.1).curveTo(59.6,-28.1,59.6,-22.7).curveTo(59.6,-17.1,55.6,-13).curveTo(51.6,-9,45.9,-9).curveTo(40.8,-9,36.9,-12.4).lineTo(0,92.7).closePath();
	this.shape_5.setTransform(-22.1,-4.4,0.174,0.174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-21.8,65,43.8);


(lib.refrihandss = function(mode,startPosition,loop) {
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


(lib.refribox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-50.1,12.5).curveTo(-51.8,12.5,-53,11.3).curveTo(-54.2,10.1,-54.2,8.4).lineTo(-54.2,-8.3).curveTo(-54.2,-10,-53,-11.3).curveTo(-51.7,-12.5,-50.1,-12.5).lineTo(50,-12.5).curveTo(51.6,-12.5,53,-11.3).curveTo(54.2,-9.9,54.2,-8.3).lineTo(54.2,8.4).curveTo(54.2,10,53,11.3).curveTo(51.7,12.5,50,12.5).closePath();
	this.shape.setTransform(0,-13.8,0.369,0.369);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-45.9,35.5).curveTo(-47.5,35.5,-48.8,34.2).curveTo(-50.1,33,-50.1,31.3).lineTo(-50.1,-31.3).curveTo(-50.1,-33,-48.8,-34.2).curveTo(-47.5,-35.5,-45.9,-35.5).lineTo(45.9,-35.5).curveTo(47.5,-35.5,48.8,-34.2).curveTo(50,-33,50,-31.3).lineTo(50,31.3).curveTo(50,33,48.8,34.2).curveTo(47.5,35.5,45.9,35.5).closePath().moveTo(-11.3,-21.7).curveTo(-12.5,-20.5,-12.5,-18.8).curveTo(-12.5,-17.1,-11.3,-15.8).curveTo(-10,-14.6,-8.4,-14.6).lineTo(8.4,-14.6).curveTo(10,-14.6,11.3,-15.8).curveTo(12.5,-17.1,12.5,-18.8).curveTo(12.5,-20.5,11.3,-21.7).curveTo(10,-22.9,8.4,-22.9).lineTo(-8.4,-22.9).curveTo(-10,-22.9,-11.3,-21.7).closePath();
	this.shape_1.setTransform(0,5.4,0.369,0.369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-18.4,40,37);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape.setTransform(531.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_1.setTransform(-984.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_2.setTransform(-439.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-999.4,-6,1999,12);


(lib.refri72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(-8.2,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(-8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-16,22.8).lineTo(-16,-3.5).lineTo(-18.9,-1).lineTo(-24,-1).lineTo(0.3,-22.8).lineTo(24,-1).lineTo(19.4,-1).lineTo(16.6,-3.5).lineTo(16.6,22.8).closePath();
	this.shape.setTransform(24,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,45.5);


(lib.refri64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(-8.2,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(-8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.refri75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#BFBFBF").beginStroke().moveTo(-115.9,164.5).lineTo(-115.9,-164.5).lineTo(115.9,-164.5).lineTo(115.9,164.5).closePath();
	this.shape.setTransform(115.9,164.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231.9,329);


(lib.refri74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["rgba(255,255,255,0)","#FFFFFF"],[0.631,1],-143.9,171.5,0,-143.9,171.5,271.7).beginStroke().moveTo(-68.3,164.5).lineTo(19.2,-164.5).lineTo(68.4,-164.5).lineTo(-19.2,164.5).closePath();
	this.shape.setTransform(68.4,164.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.7,329);


(lib.refri73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["rgba(255,255,255,0)","#FFFFFF"],[0.631,1],-122.2,171.5,0,-122.2,171.5,230.9).beginStroke().moveTo(-58,164.5).lineTo(29.5,-164.5).lineTo(58,-164.5).lineTo(58,-87.1).lineTo(-8.9,164.5).closePath();
	this.shape.setTransform(58.1,164.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.1,329);


(lib.refripack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.refriyogut();
	this.instance.parent = this;
	this.instance.setTransform(19,0.1,0.074,0.074,0,0,0,0.7,0.7);

	this.instance_1 = new lib.refriyogut();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1,0.074,0.074,0,0,0,1.4,0.7);

	this.instance_2 = new lib.refriyogut();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-18.8,0.1,0.074,0.074,0,0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-10.8,59,21.6);


(lib.refrifondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-115.5,3.1).lineTo(-115.5,-3.1).lineTo(115.5,-3.1).lineTo(115.5,3.1).closePath();
	this.shape.setTransform(-828.1,145.7,0.266,0.405);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-115.5,3.1).lineTo(-115.5,-3.1).lineTo(115.5,-3.1).lineTo(115.5,3.1).closePath();
	this.shape_1.setTransform(-828.1,117.5,0.266,0.405);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-115.5,3.1).lineTo(-115.5,-3.1).lineTo(115.5,-3.1).lineTo(115.5,3.1).closePath();
	this.shape_2.setTransform(-828.1,97,0.266,0.405);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#2D2D2D","#101010"],[0,1],0,3,0,-0.7).beginStroke().moveTo(-125.3,2.6).lineTo(-125.3,-2.6).lineTo(125.3,-2.6).lineTo(125.3,2.6).closePath();
	this.shape_3.setTransform(-828.8,173.6,0.266,0.266);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["#2D2D2D","#101010"],[0,1],0,3,0,-0.7).beginStroke().moveTo(-125.3,2.6).lineTo(-125.3,-2.6).lineTo(125.3,-2.6).lineTo(125.3,2.6).closePath();
	this.shape_4.setTransform(-828.8,170.7,0.266,0.266);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#2D2D2D","#808285","#101010"],[0,0.533,1],-8.8,0,6.6,0).beginStroke().moveTo(-3.5,46.1).curveTo(-4.5,46.1,-5.2,45.5).curveTo(-5.9,45,-5.9,44.2).lineTo(-5.9,-44.2).curveTo(-5.9,-45,-5.2,-45.5).curveTo(-4.5,-46.1,-3.5,-46.1).lineTo(3.5,-46.1).curveTo(4.5,-46.1,5.2,-45.5).curveTo(5.9,-45,5.9,-44.2).lineTo(5.9,44.2).curveTo(5.9,45,5.2,45.5).curveTo(4.5,46.1,3.5,46.1).closePath();
	this.shape_5.setTransform(-935.8,109.4,0.265,0.265);

	this.instance = new lib.refri73();
	this.instance.parent = this;
	this.instance.setTransform(-888.2,117.3,0.265,0.265,0,0,0,52.2,162.1);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.refri74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-912.5,117.3,0.265,0.265,0,0,0,63.4,162.1);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.refri75();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-903.4,117.3,0.265,0.265,0,0,0,110.8,162.1);
	this.instance_2.alpha = 0.301;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-138.3,191.3).curveTo(-139.3,191.3,-140.1,190.6).curveTo(-140.8,189.9,-140.8,188.9).lineTo(-140.2,-188.9).curveTo(-140.2,-189.9,-139.4,-190.6).curveTo(-138.7,-191.3,-137.7,-191.3).lineTo(138.3,-191.3).curveTo(139.4,-191.3,140.1,-190.6).curveTo(140.8,-189.9,140.8,-188.9).lineTo(140.3,188.9).curveTo(140.3,189.9,139.5,190.6).curveTo(138.8,191.3,137.7,191.3).closePath();
	this.shape_6.setTransform(-901.9,119.1,0.265,0.265);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-115.5,3.1).lineTo(-115.5,-3.1).lineTo(115.5,-3.1).lineTo(115.5,3.1).closePath();
	this.shape_7.setTransform(-828.1,121.3,0.266,15.436);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#BFBFBF").beginStroke().moveTo(-121.2,-46.3).lineTo(120.9,-47).lineTo(121.2,46.3).lineTo(-120.9,46.9).closePath();
	this.shape_8.setTransform(-828.1,49.2,0.266,0.266);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginLinearGradientFill(["#2D2D2D","#101010"],[0,1],0,-29.1,0,-52.9).beginStroke().moveTo(-123.5,49.2).lineTo(-123.5,-49.2).lineTo(123.5,-49.2).lineTo(123.5,49.2).closePath();
	this.shape_9.setTransform(-828.1,49.3,0.266,0.266);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-138,31.5).curveTo(-139,31.5,-139.8,30.8).curveTo(-140.5,30.1,-140.5,29.1).lineTo(-140.5,-29.1).curveTo(-140.5,-30.1,-139.8,-30.8).curveTo(-139,-31.5,-138,-31.5).lineTo(138,-31.5).curveTo(139.1,-31.5,139.8,-30.8).curveTo(140.5,-30.1,140.5,-29.1).lineTo(140.5,29.1).curveTo(140.5,30.1,139.8,30.8).curveTo(139.1,31.5,138,31.5).closePath();
	this.shape_10.setTransform(-828,175.8,0.266,0.266);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-138,254.5).curveTo(-139,254.5,-139.8,251.6).curveTo(-140.5,248.7,-140.5,244.6).lineTo(-140.5,-244.6).curveTo(-140.5,-248.7,-139.8,-251.6).curveTo(-139,-254.5,-138,-254.5).lineTo(138,-254.5).curveTo(139.1,-254.5,139.8,-251.6).curveTo(140.5,-248.8,140.5,-244.6).lineTo(140.5,244.6).curveTo(140.5,248.8,139.8,251.6).curveTo(139.1,254.5,138,254.5).closePath();
	this.shape_11.setTransform(-828,100.6,0.266,0.266);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#28292B").beginStroke().moveTo(59,33.4).lineTo(-0,-20.1).lineTo(-59.1,33.4).lineTo(-74,33.4).lineTo(-0,-33.4).lineTo(74,33.4).closePath();
	this.shape_12.setTransform(-1142.4,-145.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,29.1).lineTo(-21.3,-29.2).lineTo(21.2,-29.2).lineTo(21.2,29.1).closePath();
	this.shape_13.setTransform(-1027.6,72.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,29.1).lineTo(-21.3,-29.1).lineTo(21.2,-29.1).lineTo(21.2,29.1).closePath();
	this.shape_14.setTransform(-1027.6,-39);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,29.1).lineTo(-21.3,-29.2).lineTo(21.3,-29.2).lineTo(21.3,29.1).closePath();
	this.shape_15.setTransform(-1257.9,72.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,29.1).lineTo(-21.3,-29.1).lineTo(21.3,-29.1).lineTo(21.3,29.1).closePath();
	this.shape_16.setTransform(-1257.9,-39);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-21.3,29.1).lineTo(-21.3,-29.1).lineTo(21.3,-29.1).lineTo(21.3,29.1).closePath();
	this.shape_17.setTransform(-1257.9,-39);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,29.2).lineTo(-21.3,-29.1).lineTo(21.2,-29.1).lineTo(21.2,29.2).closePath();
	this.shape_18.setTransform(-1142.4,-58.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-21.3,29.2).lineTo(-21.3,-29.1).lineTo(21.2,-29.1).lineTo(21.2,29.2).closePath();
	this.shape_19.setTransform(-1142.4,-58.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#1A1A1A").beginStroke().moveTo(-1.9,1.9).curveTo(-2.7,1.1,-2.7,-0).curveTo(-2.7,-1.1,-1.9,-1.9).curveTo(-1.1,-2.7,-0,-2.7).curveTo(1.1,-2.7,1.9,-1.9).curveTo(2.7,-1.1,2.7,-0).curveTo(2.7,1.1,1.9,1.9).curveTo(1.1,2.7,-0,2.7).curveTo(-1.1,2.7,-1.9,1.9).closePath();
	this.shape_20.setTransform(-1157.3,109.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#7B7189").beginStroke().moveTo(-16.1,20.2).lineTo(15.6,19.9).lineTo(15.4,-19.6).lineTo(-15.7,-19.7).lineTo(-16.1,20.2).lineTo(-16.5,-20.5).lineTo(16.5,-20.6).lineTo(16.3,20.6).closePath();
	this.shape_21.setTransform(-1142.3,137.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#7B7189").beginStroke().moveTo(-16.1,20.3).lineTo(15.6,19.9).lineTo(15.4,-19.6).lineTo(-15.7,-19.7).lineTo(-16.1,20.3).lineTo(-16.5,-20.5).lineTo(16.5,-20.6).lineTo(16.3,20.6).closePath();
	this.shape_22.setTransform(-1142.3,76.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#1A1A1A").beginStroke().moveTo(-30.4,5.3).lineTo(-30.4,-5.3).lineTo(30.5,-5.3).lineTo(30.5,5.3).closePath();
	this.shape_23.setTransform(-1142.4,173.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#434444").beginStroke().moveTo(-23.9,60.4).lineTo(-23.9,-60.4).lineTo(23.9,-60.4).lineTo(23.9,60.4).closePath();
	this.shape_24.setTransform(-1142.4,107.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#5B5C5E").beginStroke().moveTo(-58.8,167.6).lineTo(-58.8,-114.1).lineTo(-0,-167.6).lineTo(58.8,-114.1).lineTo(58.8,167.6).closePath();
	this.shape_25.setTransform(-1142.4,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#434444").beginStroke().moveTo(-184.9,28.5).lineTo(-184.9,-28.5).lineTo(184.9,-28.5).lineTo(184.9,28.5).closePath();
	this.shape_26.setTransform(-1142.4,-125.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-172.3,132.3).lineTo(-172.3,-132.3).lineTo(172.2,-132.3).lineTo(172.2,132.3).closePath();
	this.shape_27.setTransform(-1142.4,35.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#28292B").beginStroke().moveTo(-178.8,1.3).lineTo(-178.8,-1.3).lineTo(178.7,-1.3).lineTo(178.7,1.3).closePath();
	this.shape_28.setTransform(-1142.3,179.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#28292B").beginStroke().moveTo(-178.8,6.5).lineTo(-178.8,-0.5).curveTo(-178.8,-3,-176.8,-4.8).curveTo(-174.9,-6.5,-172.1,-6.5).lineTo(172.1,-6.5).curveTo(174.9,-6.5,176.8,-4.8).curveTo(178.7,-3,178.7,-0.5).lineTo(178.7,6.5).closePath();
	this.shape_29.setTransform(-1142.3,174.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,2.9).lineTo(-21.3,-2.9).lineTo(21.3,-2.9).lineTo(21.3,2.9).closePath();
	this.shape_30.setTransform(-1262.1,175.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-18.8,2.8).lineTo(-18.8,-2.8).lineTo(18.8,-2.8).lineTo(18.8,2.8).closePath();
	this.shape_31.setTransform(-1262,169.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.3,0.6).curveTo(-3.8,0.6,-3.8,0).curveTo(-3.8,-0.6,-3.3,-0.6).lineTo(3.3,-0.6).curveTo(3.8,-0.6,3.8,0).curveTo(3.8,0.6,3.3,0.6).closePath();
	this.shape_32.setTransform(-1251.7,132.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.9,5.1).curveTo(-2.7,4.3,-2.7,3.1).lineTo(-2.7,-3.1).curveTo(-2.7,-4.3,-1.9,-5.1).curveTo(-1.1,-5.9,0,-5.9).curveTo(1.1,-5.9,1.9,-5.1).curveTo(2.7,-4.3,2.7,-3.1).lineTo(2.7,3.1).curveTo(2.7,4.3,1.9,5.1).curveTo(1.1,5.9,0,5.9).curveTo(-1.1,5.9,-1.9,5.1).closePath();
	this.shape_33.setTransform(-1254.5,132.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.2,33.7).lineTo(-13.2,-29.5).curveTo(-13.2,-31.3,-12,-32.5).curveTo(-10.7,-33.7,-8.9,-33.7).lineTo(8.8,-33.7).curveTo(10.7,-33.7,12,-32.5).curveTo(13.3,-31.3,13.2,-29.5).lineTo(13.2,33.7).closePath();
	this.shape_34.setTransform(-1262.2,134.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.1,35.3).lineTo(-16.1,-35.3).lineTo(16.2,-35.3).lineTo(16.2,35.3).closePath();
	this.shape_35.setTransform(-1262,132.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_36.setTransform(-1305.8,138.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_37.setTransform(-1305.8,124.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_38.setTransform(-1305.8,111.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_39.setTransform(-1291.6,124.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_40.setTransform(-1305.2,124.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_41.setTransform(-1319.1,124.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.4,14).lineTo(-14.4,-14).lineTo(14.4,-14).lineTo(14.4,14).closePath();
	this.shape_42.setTransform(-1305.4,124.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.9,0.6).lineTo(-13.9,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_43.setTransform(-1344.9,138.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.9,0.6).lineTo(-13.9,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_44.setTransform(-1344.9,124.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.9,0.6).lineTo(-13.9,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_45.setTransform(-1344.9,111.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_46.setTransform(-1330.8,124.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_47.setTransform(-1344.3,124.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_48.setTransform(-1358.3,124.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.3,14).lineTo(-14.3,-14).lineTo(14.4,-14).lineTo(14.4,14).closePath();
	this.shape_49.setTransform(-1344.5,124.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-11.2,1.8).curveTo(-11.9,1.9,-12.4,1.3).curveTo(-13,0.7,-13,0).curveTo(-13,-0.8,-12.4,-1.3).curveTo(-11.9,-1.9,-11.2,-1.9).lineTo(11.2,-1.9).curveTo(11.9,-1.9,12.4,-1.3).curveTo(13,-0.8,13,0).curveTo(13,0.7,12.4,1.3).curveTo(11.9,1.9,11.2,1.8).closePath();
	this.shape_50.setTransform(-1245.5,23.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-11.4,8.2).lineTo(-11.4,-8.2).lineTo(11.4,-8.2).lineTo(11.4,8.2).closePath();
	this.shape_51.setTransform(-1245.5,33.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-89.2,25.2).lineTo(-72.9,-25.2).lineTo(69.1,-25.2).lineTo(89.2,25.2).closePath();
	this.shape_52.setTransform(-1292.9,66.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(-77.6,43).lineTo(-77.6,-43).lineTo(77.6,-43).lineTo(77.6,43).closePath();
	this.shape_53.setTransform(-1292.2,135);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,1.4).lineTo(-23.3,-1.4).lineTo(23.3,-1.4).lineTo(20.5,1.4).closePath();
	this.shape_54.setTransform(-298.3,113.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,31.7).lineTo(-1.4,-31.7).lineTo(1.4,-31.7).lineTo(1.4,31.7).closePath();
	this.shape_55.setTransform(-276.4,143.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,31.7).lineTo(-23.3,-31.7).lineTo(23.3,-31.7).lineTo(23.3,31.7).closePath();
	this.shape_56.setTransform(-298.3,143.4);

	this.instance_3 = new lib.refri72();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-342.4,-104.7,1,1,0,0,0,8.2,10.8);
	this.instance_3.alpha = 0.699;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_57.setTransform(-341.7,-92.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_58.setTransform(-341.7,-104.9);

	this.instance_4 = new lib.refri32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-313.7,-104.7,1,1,0,0,0,8.2,10.8);
	this.instance_4.alpha = 0.699;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_59.setTransform(-313,-92.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_60.setTransform(-313,-104.9);

	this.instance_5 = new lib.refri71();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-342.4,-57.4,1,1,0,0,0,8.2,10.8);
	this.instance_5.alpha = 0.699;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_61.setTransform(-341.7,-45.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_62.setTransform(-341.7,-57.7);

	this.instance_6 = new lib.refri30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-313.7,-57.4,1,1,0,0,0,8.2,10.8);
	this.instance_6.alpha = 0.699;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_63.setTransform(-313,-45.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_64.setTransform(-313,-57.7);

	this.instance_7 = new lib.refri31();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-286.2,-57.4,1,1,0,0,0,8.2,10.8);
	this.instance_7.alpha = 0.699;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_65.setTransform(-285.5,-45.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_66.setTransform(-285.5,-57.7);

	this.instance_8 = new lib.refri29();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-286.2,-104.7,1,1,0,0,0,8.2,10.8);
	this.instance_8.alpha = 0.699;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_67.setTransform(-285.5,-92.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_68.setTransform(-285.5,-104.9);

	this.instance_9 = new lib.refri28();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-342.4,121.9,1,1,0,0,0,8.2,10.8);
	this.instance_9.alpha = 0.699;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_69.setTransform(-341.7,133.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_70.setTransform(-341.7,121.9);

	this.instance_10 = new lib.refri70();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-257.5,121.9,1,1,0,0,0,8.2,10.8);
	this.instance_10.alpha = 0.699;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_71.setTransform(-256.8,133.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_72.setTransform(-256.8,121.9);

	this.instance_11 = new lib.refri27();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-342.4,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_11.alpha = 0.699;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_73.setTransform(-341.7,91.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_74.setTransform(-341.7,79.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_75.setTransform(-256.8,91.9);

	this.instance_12 = new lib.refri34();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-257.5,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_12.alpha = 0.699;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_76.setTransform(-256.8,79.7);

	this.instance_13 = new lib.refri11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-313.7,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_13.alpha = 0.699;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_77.setTransform(-312.9,91.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_78.setTransform(-313,79.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.5,1).closePath();
	this.shape_79.setTransform(-285.4,91.9);

	this.instance_14 = new lib.refri33();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-286.2,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_14.alpha = 0.699;

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_80.setTransform(-285.5,79.7);

	this.instance_15 = new lib.refri69();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-342.4,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_15.alpha = 0.699;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_81.setTransform(-341.7,46.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_82.setTransform(-341.7,33.9);

	this.instance_16 = new lib.refri10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-313.7,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_16.alpha = 0.699;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_83.setTransform(-313,46.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_84.setTransform(-313,33.9);

	this.instance_17 = new lib.refri26();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-286.2,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_17.alpha = 0.699;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_85.setTransform(-285.5,46.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_86.setTransform(-285.5,33.9);

	this.instance_18 = new lib.refri22();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-257.5,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_18.alpha = 0.699;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_87.setTransform(-256.8,46.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_88.setTransform(-256.8,33.9);

	this.instance_19 = new lib.refri7();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-342.4,-11.4,1,1,0,0,0,8.2,10.8);
	this.instance_19.alpha = 0.699;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_89.setTransform(-341.7,0.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_90.setTransform(-341.7,-11.9);

	this.instance_20 = new lib.refri20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-313.7,-11.4,1,1,0,0,0,8.2,10.8);
	this.instance_20.alpha = 0.699;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_91.setTransform(-313,0.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_92.setTransform(-313,-11.9);

	this.instance_21 = new lib.refri8();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-286.2,-11.4,1,1,0,0,0,8.2,10.8);
	this.instance_21.alpha = 0.699;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_93.setTransform(-285.5,0.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_94.setTransform(-285.5,-11.9);

	this.instance_22 = new lib.refri6();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-257.5,-11.4,1,1,0,0,0,8.2,10.8);
	this.instance_22.alpha = 0.699;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_95.setTransform(-256.8,0.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_96.setTransform(-256.8,-11.9);

	this.instance_23 = new lib.refri9();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-257.5,-104.7,1,1,0,0,0,8.2,10.8);
	this.instance_23.alpha = 0.699;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_97.setTransform(-256.8,-92.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_98.setTransform(-256.8,-104.9);

	this.instance_24 = new lib.refri5();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-257.5,-57.4,1,1,0,0,0,8.2,10.8);
	this.instance_24.alpha = 0.699;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_99.setTransform(-256.8,-45.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.3).closePath();
	this.shape_100.setTransform(-256.8,-57.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#28292B").beginStroke().moveTo(-65.2,4.6).curveTo(-67.2,4.6,-68.5,3.2).curveTo(-69.8,1.9,-69.8,-0).curveTo(-69.8,-1.9,-68.5,-3.2).curveTo(-67.1,-4.6,-65.2,-4.6).lineTo(65.3,-4.6).curveTo(67.1,-4.6,68.4,-3.2).curveTo(69.8,-1.9,69.8,-0).curveTo(69.8,1.9,68.4,3.2).curveTo(67.1,4.6,65.3,4.6).closePath();
	this.shape_101.setTransform(-297.9,-138.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.6,157.9).lineTo(-66.6,-157.9).lineTo(66.6,-157.9).lineTo(66.6,157.9).closePath();
	this.shape_102.setTransform(-297.9,17.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.2).lineTo(-22.6,-12.2).lineTo(22.6,-12.2).lineTo(22.6,12.2).closePath();
	this.shape_103.setTransform(-269.5,-152.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_104.setTransform(-612.5,33.1,2.084,2.084);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_105.setTransform(-642.3,33.1,2.084,2.084);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_106.setTransform(-672.2,33.1,2.084,2.084);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_107.setTransform(-705.2,33.1,2.084,2.084);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_108.setTransform(-736.7,33.1,2.084,2.084);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_109.setTransform(-766.6,33.1,2.084,2.084);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_110.setTransform(-796.5,33.1,2.084,2.084);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_111.setTransform(-826.3,33.1,2.084,2.084);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_112.setTransform(-856.2,33.1,2.084,2.084);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_113.setTransform(-886.1,33.1,2.084,2.084);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_114.setTransform(-915.9,33.1,2.084,2.084);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-81,18.2).lineTo(-66.9,-18.2).lineTo(66.8,-18.2).lineTo(81.1,18.2).closePath();
	this.shape_115.setTransform(-764,-8.2,2.084,2.084);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-66.8,4.4).lineTo(-66.8,-4.4).lineTo(66.8,-4.4).lineTo(66.8,4.4).closePath();
	this.shape_116.setTransform(-764.2,-55.3,2.084,2.084);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,0.6).curveTo(-4,0.6,-4,-0).curveTo(-4,-0.6,-3.6,-0.6).lineTo(3.5,-0.6).curveTo(4.1,-0.6,4.1,-0).curveTo(4.1,0.6,3.5,0.6).closePath();
	this.shape_117.setTransform(-803.3,104.8,2.084,2.084);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.1,5.4).curveTo(-2.9,4.5,-2.9,3.3).lineTo(-2.9,-3.4).curveTo(-2.9,-4.5,-2.1,-5.4).curveTo(-1.2,-6.3,-0,-6.3).curveTo(1.2,-6.3,2.1,-5.4).curveTo(2.9,-4.5,2.9,-3.4).lineTo(2.9,3.3).curveTo(2.9,4.5,2.1,5.4).curveTo(1.2,6.2,-0,6.2).curveTo(-1.2,6.2,-2.1,5.4).closePath();
	this.shape_118.setTransform(-809.4,104.4,2.084,2.084);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.1,38.3).lineTo(-14.1,-33.5).curveTo(-14.1,-35.5,-12.8,-36.9).curveTo(-11.4,-38.3,-9.5,-38.3).lineTo(9.5,-38.3).curveTo(11.4,-38.3,12.8,-36.9).curveTo(14.1,-35.5,14.1,-33.5).lineTo(14.1,38.3).closePath();
	this.shape_119.setTransform(-826.7,104.3,2.084,2.084);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.2,37.6).lineTo(-17.2,-37.6).lineTo(17.2,-37.6).lineTo(17.2,37.6).closePath();
	this.shape_120.setTransform(-826.3,105.8,2.084,2.084);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.2).lineTo(-27.6,-1.2).lineTo(27.6,-1.2).lineTo(27.6,1.2).closePath();
	this.shape_121.setTransform(-691.7,148.8,2.084,2.084);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.2).lineTo(-27.6,-1.2).lineTo(27.6,-1.2).lineTo(27.6,1.2).closePath();
	this.shape_122.setTransform(-691.7,108.5,2.084,2.084);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.1).lineTo(-27.6,-1.1).lineTo(27.6,-1.1).lineTo(27.6,1.1).closePath();
	this.shape_123.setTransform(-691.7,68.1,2.084,2.084);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.2,20.5).lineTo(-1.2,-20.5).lineTo(1.2,-20.5).lineTo(1.2,20.5).closePath();
	this.shape_124.setTransform(-636.5,108.5,2.084,2.084);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.2,20.5).lineTo(-1.2,-20.5).lineTo(1.1,-20.5).lineTo(1.1,20.5).closePath();
	this.shape_125.setTransform(-691.6,108.5,2.084,2.084);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.2,20.5).lineTo(-1.2,-20.5).lineTo(1.2,-20.5).lineTo(1.2,20.5).closePath();
	this.shape_126.setTransform(-746.9,108.5,2.084,2.084);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,20.5).lineTo(-27.6,-20.5).lineTo(27.6,-20.5).lineTo(27.6,20.5).closePath();
	this.shape_127.setTransform(-691.7,108.5,2.084,2.084);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#494A4E").beginStroke().moveTo(-71.7,43).lineTo(-71.7,-43).lineTo(71.7,-43).lineTo(71.7,43).closePath();
	this.shape_128.setTransform(-766.7,94.1,2.085,2.085);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,1.4).lineTo(-23.3,-1.4).lineTo(23.3,-1.4).lineTo(20.5,1.4).closePath();
	this.shape_129.setTransform(-150.7,113.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,31.7).lineTo(-1.4,-31.7).lineTo(1.4,-31.7).lineTo(1.4,31.7).closePath();
	this.shape_130.setTransform(-128.8,143.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,31.7).lineTo(-23.3,-31.7).lineTo(23.3,-31.7).lineTo(23.3,31.7).closePath();
	this.shape_131.setTransform(-150.7,143.3);

	this.instance_25 = new lib.refri21();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-195.2,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_25.alpha = 0.699;

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_132.setTransform(-194.5,46.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_133.setTransform(-194.5,33.9);

	this.instance_26 = new lib.refri19();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-166.5,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_26.alpha = 0.699;

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_134.setTransform(-165.8,46.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_135.setTransform(-165.8,33.9);

	this.instance_27 = new lib.refri23();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-139,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_27.alpha = 0.699;

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_136.setTransform(-138.3,46.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_137.setTransform(-138.3,33.9);

	this.instance_28 = new lib.refri18();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-195.2,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_28.alpha = 0.699;

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_138.setTransform(-194.5,91.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_139.setTransform(-194.5,79.7);

	this.instance_29 = new lib.refri25();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-166.5,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_29.alpha = 0.699;

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_140.setTransform(-165.8,91.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_141.setTransform(-165.8,79.7);

	this.instance_30 = new lib.refri15();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-139,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_30.alpha = 0.699;

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_142.setTransform(-138.3,91.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_143.setTransform(-138.3,79.7);

	this.instance_31 = new lib.refri13();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-195.2,122.4,1,1,0,0,0,8.2,10.8);
	this.instance_31.alpha = 0.699;

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_144.setTransform(-194.5,134.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_145.setTransform(-194.5,121.9);

	this.instance_32 = new lib.refri17();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-110.3,122.4,1,1,0,0,0,8.2,10.8);
	this.instance_32.alpha = 0.699;

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_146.setTransform(-109.6,134.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_147.setTransform(-109.6,121.9);

	this.instance_33 = new lib.refri14();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-110.3,80.1,1,1,0,0,0,8.2,10.8);
	this.instance_33.alpha = 0.699;

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_148.setTransform(-109.6,91.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_149.setTransform(-109.6,79.7);

	this.instance_34 = new lib.refri68();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-110.3,34.3,1,1,0,0,0,8.2,10.8);
	this.instance_34.alpha = 0.699;

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_150.setTransform(-109.6,46.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_151.setTransform(-109.6,33.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#28292B").beginStroke().moveTo(-69,5).lineTo(-69,-5).lineTo(63.8,-5).curveTo(65.9,-5,67.5,-3.5).curveTo(69,-2.1,69,0).curveTo(69,2.1,67.5,3.6).curveTo(65.9,5,63.8,5).closePath();
	this.shape_152.setTransform(-151,0.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.6,87.1).lineTo(-66.6,-87.1).lineTo(66.6,-87.1).lineTo(66.6,87.1).closePath();
	this.shape_153.setTransform(-153.4,87.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.3).lineTo(-22.6,-12.3).lineTo(22.6,-12.3).lineTo(22.6,12.3).closePath();
	this.shape_154.setTransform(-124.6,-11.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_155.setTransform(-423.3,-95.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_156.setTransform(-423.4,-79.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_157.setTransform(-477.6,-95.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_158.setTransform(-477.7,-79.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_159.setTransform(-532.1,-95.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_160.setTransform(-532.2,-79.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_161.setTransform(-423.3,-39.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.9,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.9,17.4,1.8).closePath();
	this.shape_162.setTransform(-423.4,-24);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_163.setTransform(-477.6,-39.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.9,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.9,17.4,1.8).closePath();
	this.shape_164.setTransform(-477.7,-24);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_165.setTransform(-532,-39.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.9,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.9,17.4,1.8).closePath();
	this.shape_166.setTransform(-532.1,-24);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_167.setTransform(-423.3,71.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_168.setTransform(-423.4,87.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_169.setTransform(-477.6,71.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_170.setTransform(-477.7,87.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_171.setTransform(-531.9,71.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_172.setTransform(-532,87.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_173.setTransform(-586.7,71.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_174.setTransform(-586.8,87.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_175.setTransform(-423.3,16);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_176.setTransform(-423.4,31.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_177.setTransform(-477.6,16);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_178.setTransform(-477.7,31.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_179.setTransform(-532,16);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_180.setTransform(-532.1,31.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_181.setTransform(-586.7,16);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_182.setTransform(-586.8,31.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_183.setTransform(-586.7,-39.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.9,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.9,17.4,1.8).closePath();
	this.shape_184.setTransform(-586.8,-24);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_185.setTransform(-586.7,-95.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.7,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_186.setTransform(-586.8,-79.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_187.setTransform(-423.4,-95.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_188.setTransform(-477.7,-95.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_189.setTransform(-532.2,-95.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_190.setTransform(-586.7,-95.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_191.setTransform(-423.4,-39.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_192.setTransform(-477.7,-39.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_193.setTransform(-532.2,-39.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_194.setTransform(-586.7,-39.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_195.setTransform(-423.4,16);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_196.setTransform(-477.7,16);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_197.setTransform(-532.2,16);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_198.setTransform(-586.7,16);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_199.setTransform(-423.4,71.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_200.setTransform(-477.7,71.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_201.setTransform(-532.2,71.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_202.setTransform(-586.7,71.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-47.7,1.4).lineTo(-47.7,-1.4).lineTo(47.7,-1.4).lineTo(44.9,1.4).closePath();
	this.shape_203.setTransform(-510.6,118);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,32.1).lineTo(-1.4,-32.1).lineTo(1.4,-32.1).lineTo(1.4,32.1).closePath();
	this.shape_204.setTransform(-464.3,148.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-47.6,32.1).lineTo(-47.6,-32.1).lineTo(47.6,-32.1).lineTo(47.6,32.1).closePath();
	this.shape_205.setTransform(-510.5,148.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#28292B").beginStroke().moveTo(-121.9,4.6).curveTo(-123.9,4.6,-125.2,3.2).curveTo(-126.5,1.9,-126.5,-0).curveTo(-126.5,-1.9,-125.2,-3.2).curveTo(-123.9,-4.6,-121.9,-4.6).lineTo(122,-4.6).curveTo(123.8,-4.6,125.2,-3.2).curveTo(126.6,-1.9,126.6,-0).curveTo(126.6,1.9,125.2,3.2).curveTo(123.8,4.6,122,4.6).closePath();
	this.shape_206.setTransform(-506.6,-133.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.3).lineTo(-22.6,-12.3).lineTo(22.6,-12.3).lineTo(22.6,12.3).closePath();
	this.shape_207.setTransform(-580.9,-147.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#494A4E").beginStroke().moveTo(-123.3,158).lineTo(-123.3,-158).lineTo(123.3,-158).lineTo(123.3,158).closePath();
	this.shape_208.setTransform(-507.4,22.8);

	this.instance_35 = new lib.refri67();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-1034.1,41.2,1,1,0,0,0,8.2,10.8);
	this.instance_35.alpha = 0.699;

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_209.setTransform(-1034.9,53);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_210.setTransform(-1034.9,40.9);

	this.instance_36 = new lib.refri66();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-1087.3,41.2,1,1,0,0,0,8.2,10.8);
	this.instance_36.alpha = 0.699;

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_211.setTransform(-1088.2,53);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_212.setTransform(-1088.2,40.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,5.5).curveTo(-7.7,3.2,-7.7,-0).curveTo(-7.7,-3.2,-5.5,-5.4).curveTo(-3.2,-7.7,-0,-7.7).curveTo(3.2,-7.7,5.5,-5.4).curveTo(7.7,-3.2,7.7,-0).curveTo(7.7,3.2,5.5,5.5).curveTo(3.2,7.7,-0,7.7).curveTo(-3.2,7.7,-5.5,5.5).closePath();
	this.shape_213.setTransform(-1064.5,-28.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#28292B").beginStroke().moveTo(-55,35).lineTo(0,-35.1).lineTo(55,35).closePath();
	this.shape_214.setTransform(-1062.6,-29.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-110.8,30.1).lineTo(-81.3,-29.6).lineTo(93.9,-30.1).lineTo(110.8,30.1).closePath();
	this.shape_215.setTransform(-1013.4,-24.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#494A4E").beginStroke().moveTo(-107.2,88.2).lineTo(-107.2,-88.2).lineTo(107.2,-88.2).lineTo(107.2,88.2).closePath();
	this.shape_216.setTransform(-1009.8,92.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,8.4).curveTo(-4.3,4.3,-3.6,0.3).curveTo(-2.4,-8,3.9,-8.4).curveTo(2.3,-7.5,0.8,-5).curveTo(-2.1,0.1,-1.5,8.4).closePath();
	this.shape_217.setTransform(795.2,4.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.2,0.7).curveTo(-8.5,0.7,-8.7,0.5).curveTo(-9,0.3,-9,-0).curveTo(-9,-0.7,-8.2,-0.7).lineTo(8.3,-0.7).curveTo(9,-0.7,9,-0).curveTo(9,0.7,8.3,0.7).closePath();
	this.shape_218.setTransform(799.2,14);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.6,8.4).lineTo(-7.6,1.2).curveTo(-7.6,-2.7,-5.3,-5.6).curveTo(-3.1,-8.4,-0,-8.4).curveTo(3.1,-8.4,5.3,-5.6).curveTo(7.6,-2.7,7.6,1.2).lineTo(7.6,8.4).closePath();
	this.shape_219.setTransform(799.2,4.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#494A4E").beginStroke().moveTo(19.4,10.9).lineTo(0.3,-5.7).lineTo(-18.9,10.9).lineTo(-24,10.9).lineTo(0.3,-10.9).lineTo(24,10.9).closePath();
	this.shape_220.setTransform(798.8,-10.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.3,20.2).lineTo(-16.3,-6.2).lineTo(-0,-20.2).lineTo(16.3,-6.2).lineTo(16.3,20.2).closePath();
	this.shape_221.setTransform(799.2,4.1);

	this.instance_37 = new lib.refri65();
	this.instance_37.parent = this;
	this.instance_37.setTransform(803.3,1.6,1,1,0,0,0,23.9,22.8);
	this.instance_37.alpha = 0.199;

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,2.9).lineTo(-21.3,-2.9).lineTo(21.3,-2.9).lineTo(21.3,2.9).closePath();
	this.shape_222.setTransform(31.5,166.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-18.9,2.8).lineTo(-18.9,-2.8).lineTo(18.8,-2.8).lineTo(18.8,2.8).closePath();
	this.shape_223.setTransform(31.5,160.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.3,0.6).curveTo(-3.8,0.6,-3.8,-0).curveTo(-3.8,-0.6,-3.3,-0.6).lineTo(3.3,-0.6).curveTo(3.8,-0.6,3.8,-0).curveTo(3.8,0.6,3.3,0.6).closePath();
	this.shape_224.setTransform(41.8,124);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.9,5.1).curveTo(-2.7,4.3,-2.7,3.1).lineTo(-2.7,-3.1).curveTo(-2.7,-4.3,-1.9,-5.1).curveTo(-1.1,-5.9,0,-5.9).curveTo(1.1,-5.9,1.9,-5.1).curveTo(2.7,-4.3,2.7,-3.1).lineTo(2.7,3.1).curveTo(2.7,4.3,1.9,5.1).curveTo(1.1,5.9,0,5.9).curveTo(-1.1,5.9,-1.9,5.1).closePath();
	this.shape_225.setTransform(39.1,123.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.3,33.7).lineTo(-13.3,-29.5).curveTo(-13.2,-31.2,-11.9,-32.5).curveTo(-10.7,-33.7,-8.9,-33.7).lineTo(8.9,-33.7).curveTo(10.7,-33.7,11.9,-32.5).curveTo(13.3,-31.2,13.3,-29.5).lineTo(13.3,33.7).closePath();
	this.shape_226.setTransform(31.3,125.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.2,35.2).lineTo(-16.2,-35.2).lineTo(16.1,-35.2).lineTo(16.1,35.2).closePath();
	this.shape_227.setTransform(31.5,124.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_228.setTransform(-12.2,129.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_229.setTransform(-12.2,116.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_230.setTransform(-12.2,103);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_231.setTransform(1.9,116.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_232.setTransform(-11.6,116.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_233.setTransform(-25.6,116.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.4,14).lineTo(-14.4,-14).lineTo(14.3,-14).lineTo(14.3,14).closePath();
	this.shape_234.setTransform(-11.8,116.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_235.setTransform(-51.4,129.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_236.setTransform(-51.4,116.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_237.setTransform(-51.4,103);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_238.setTransform(-37.2,116.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_239.setTransform(-50.8,116.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_240.setTransform(-64.7,116.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.4,14).lineTo(-14.4,-14).lineTo(14.3,-14).lineTo(14.3,14).closePath();
	this.shape_241.setTransform(-51,116.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-11.1,1.9).curveTo(-12,1.8,-12.5,1.3).curveTo(-13,0.7,-13,-0).curveTo(-13,-0.8,-12.5,-1.3).curveTo(-12,-1.8,-11.1,-1.8).lineTo(11.1,-1.8).curveTo(11.9,-1.8,12.5,-1.3).curveTo(13,-0.8,13,-0).curveTo(13,0.7,12.5,1.3).curveTo(11.9,1.8,11.1,1.9).closePath();
	this.shape_242.setTransform(48.1,15);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-11.4,8.1).lineTo(-11.4,-8.1).lineTo(11.4,-8.1).lineTo(11.4,8.1).closePath();
	this.shape_243.setTransform(48,24.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-89.2,25.2).lineTo(-72.9,-25.2).lineTo(69,-25.2).lineTo(89.2,25.2).closePath();
	this.shape_244.setTransform(0.6,58.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#494A4E").beginStroke().moveTo(-77.6,43).lineTo(-77.6,-43).lineTo(77.6,-43).lineTo(77.6,43).closePath();
	this.shape_245.setTransform(1.4,126.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,1.4).lineTo(-23.3,-1.4).lineTo(23.3,-1.4).lineTo(20.5,1.4).closePath();
	this.shape_246.setTransform(615.2,104.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,31.7).lineTo(-1.4,-31.7).lineTo(1.4,-31.7).lineTo(1.4,31.7).closePath();
	this.shape_247.setTransform(637.1,134.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,31.7).lineTo(-23.3,-31.7).lineTo(23.3,-31.7).lineTo(23.3,31.7).closePath();
	this.shape_248.setTransform(615.2,134.9);

	this.instance_38 = new lib.refri64();
	this.instance_38.parent = this;
	this.instance_38.setTransform(571,-113.2,1,1,0,0,0,8.1,10.8);
	this.instance_38.alpha = 0.699;

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_249.setTransform(571.8,-101.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_250.setTransform(571.8,-113.4);

	this.instance_39 = new lib.refri63();
	this.instance_39.parent = this;
	this.instance_39.setTransform(599.7,-113.2,1,1,0,0,0,8.1,10.8);
	this.instance_39.alpha = 0.699;

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_251.setTransform(600.5,-101.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_252.setTransform(600.5,-113.4);

	this.instance_40 = new lib.refri61();
	this.instance_40.parent = this;
	this.instance_40.setTransform(571,-65.9,1,1,0,0,0,8.1,10.8);
	this.instance_40.alpha = 0.699;

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_253.setTransform(571.8,-54.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_254.setTransform(571.8,-66.2);

	this.instance_41 = new lib.refri60();
	this.instance_41.parent = this;
	this.instance_41.setTransform(599.7,-65.9,1,1,0,0,0,8.1,10.8);
	this.instance_41.alpha = 0.699;

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_255.setTransform(600.5,-54.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_256.setTransform(600.5,-66.2);

	this.instance_42 = new lib.refri12();
	this.instance_42.parent = this;
	this.instance_42.setTransform(627.2,-65.9,1,1,0,0,0,8.1,10.8);
	this.instance_42.alpha = 0.699;

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_257.setTransform(628,-54.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_258.setTransform(628,-66.2);

	this.instance_43 = new lib.refri58();
	this.instance_43.parent = this;
	this.instance_43.setTransform(627.2,-113.2,1,1,0,0,0,8.1,10.8);
	this.instance_43.alpha = 0.699;

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_259.setTransform(628,-101.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_260.setTransform(628,-113.4);

	this.instance_44 = new lib.refri57();
	this.instance_44.parent = this;
	this.instance_44.setTransform(571,113.4,1,1,0,0,0,8.1,10.8);
	this.instance_44.alpha = 0.699;

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_261.setTransform(571.8,125.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_262.setTransform(571.8,113.4);

	this.instance_45 = new lib.refri55();
	this.instance_45.parent = this;
	this.instance_45.setTransform(656,113.4,1,1,0,0,0,8.2,10.8);
	this.instance_45.alpha = 0.699;

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_263.setTransform(656.7,125.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_264.setTransform(656.7,113.4);

	this.instance_46 = new lib.refri54();
	this.instance_46.parent = this;
	this.instance_46.setTransform(571,71.6,1,1,0,0,0,8.1,10.8);
	this.instance_46.alpha = 0.699;

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_265.setTransform(571.8,83.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_266.setTransform(571.8,71.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_267.setTransform(656.7,83.4);

	this.instance_47 = new lib.refri24();
	this.instance_47.parent = this;
	this.instance_47.setTransform(656,71.6,1,1,0,0,0,8.2,10.8);
	this.instance_47.alpha = 0.699;

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_268.setTransform(656.7,71.2);

	this.instance_48 = new lib.refri53();
	this.instance_48.parent = this;
	this.instance_48.setTransform(599.7,71.6,1,1,0,0,0,8.1,10.8);
	this.instance_48.alpha = 0.699;

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_269.setTransform(600.6,83.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_270.setTransform(600.5,71.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.5,1).closePath();
	this.shape_271.setTransform(628.1,83.4);

	this.instance_49 = new lib.refri4();
	this.instance_49.parent = this;
	this.instance_49.setTransform(627.2,71.6,1,1,0,0,0,8.1,10.8);
	this.instance_49.alpha = 0.699;

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_272.setTransform(628,71.2);

	this.instance_50 = new lib.refri52();
	this.instance_50.parent = this;
	this.instance_50.setTransform(571,25.8,1,1,0,0,0,8.1,10.8);
	this.instance_50.alpha = 0.699;

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_273.setTransform(571.8,37.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_274.setTransform(571.8,25.4);

	this.instance_51 = new lib.refri51();
	this.instance_51.parent = this;
	this.instance_51.setTransform(599.7,25.8,1,1,0,0,0,8.1,10.8);
	this.instance_51.alpha = 0.699;

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_275.setTransform(600.5,37.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_276.setTransform(600.5,25.4);

	this.instance_52 = new lib.refri50();
	this.instance_52.parent = this;
	this.instance_52.setTransform(627.2,25.8,1,1,0,0,0,8.1,10.8);
	this.instance_52.alpha = 0.699;

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_277.setTransform(628,37.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_278.setTransform(628,25.4);

	this.instance_53 = new lib.refri49();
	this.instance_53.parent = this;
	this.instance_53.setTransform(656,25.8,1,1,0,0,0,8.2,10.8);
	this.instance_53.alpha = 0.699;

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_279.setTransform(656.7,37.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_280.setTransform(656.7,25.4);

	this.instance_54 = new lib.refri48();
	this.instance_54.parent = this;
	this.instance_54.setTransform(571,-19.9,1,1,0,0,0,8.1,10.8);
	this.instance_54.alpha = 0.699;

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.5,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.5,1).closePath();
	this.shape_281.setTransform(571.8,-8.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_282.setTransform(571.8,-20.4);

	this.instance_55 = new lib.refri47();
	this.instance_55.parent = this;
	this.instance_55.setTransform(599.7,-19.9,1,1,0,0,0,8.1,10.8);
	this.instance_55.alpha = 0.699;

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_283.setTransform(600.5,-8.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_284.setTransform(600.5,-20.4);

	this.instance_56 = new lib.refri46();
	this.instance_56.parent = this;
	this.instance_56.setTransform(627.2,-19.9,1,1,0,0,0,8.1,10.8);
	this.instance_56.alpha = 0.699;

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_285.setTransform(628,-8.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_286.setTransform(628,-20.4);

	this.instance_57 = new lib.refri45();
	this.instance_57.parent = this;
	this.instance_57.setTransform(656,-19.9,1,1,0,0,0,8.2,10.8);
	this.instance_57.alpha = 0.699;

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_287.setTransform(656.7,-8.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_288.setTransform(656.7,-20.4);

	this.instance_58 = new lib.refri44();
	this.instance_58.parent = this;
	this.instance_58.setTransform(656,-113.2,1,1,0,0,0,8.2,10.8);
	this.instance_58.alpha = 0.699;

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_289.setTransform(656.7,-101.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.4).closePath();
	this.shape_290.setTransform(656.7,-113.4);

	this.instance_59 = new lib.refri43();
	this.instance_59.parent = this;
	this.instance_59.setTransform(656,-65.9,1,1,0,0,0,8.2,10.8);
	this.instance_59.alpha = 0.699;

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_291.setTransform(656.7,-54.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_292.setTransform(656.7,-66.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#28292B").beginStroke().moveTo(-65.2,4.6).curveTo(-67.2,4.6,-68.4,3.2).curveTo(-69.8,1.9,-69.8,-0).curveTo(-69.8,-1.9,-68.4,-3.2).curveTo(-67.1,-4.6,-65.2,-4.6).lineTo(65.3,-4.6).curveTo(67.1,-4.6,68.4,-3.2).curveTo(69.8,-1.9,69.8,-0).curveTo(69.8,1.9,68.4,3.2).curveTo(67.1,4.6,65.3,4.6).closePath();
	this.shape_293.setTransform(615.6,-147.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.6,157.9).lineTo(-66.6,-157.9).lineTo(66.6,-157.9).lineTo(66.6,157.9).closePath();
	this.shape_294.setTransform(615.6,8.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.3).lineTo(-22.6,-12.3).lineTo(22.6,-12.3).lineTo(22.6,12.3).closePath();
	this.shape_295.setTransform(644,-161.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_296.setTransform(243.4,99.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_297.setTransform(229.1,99.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_298.setTransform(214.7,99.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.8,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.8,-5.9).curveTo(-3.5,-8.3,0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,0,8.3).curveTo(-3.5,8.3,-5.8,5.9).closePath();
	this.shape_299.setTransform(198.9,99.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_300.setTransform(183.8,99.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_301.setTransform(169.4,99.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_302.setTransform(155.1,99.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_303.setTransform(140.8,99.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_304.setTransform(126.4,99.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,-0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,-0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_305.setTransform(112.1,99.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_306.setTransform(97.8,99.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-81.1,18.2).lineTo(-66.8,-18.2).lineTo(66.7,-18.2).lineTo(81,18.2).closePath();
	this.shape_307.setTransform(170.7,80);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-66.8,4.4).lineTo(-66.8,-4.4).lineTo(66.8,-4.4).lineTo(66.8,4.4).closePath();
	this.shape_308.setTransform(170.6,57.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,0.6).curveTo(-4.1,0.6,-4.1,-0).curveTo(-4.1,-0.6,-3.5,-0.6).lineTo(3.6,-0.6).curveTo(4,-0.6,4,-0).curveTo(4,0.6,3.6,0.6).closePath();
	this.shape_309.setTransform(151.8,134.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.1,5.4).curveTo(-2.9,4.6,-2.9,3.3).lineTo(-2.9,-3.4).curveTo(-2.9,-4.5,-2.1,-5.4).curveTo(-1.2,-6.2,-0,-6.2).curveTo(1.2,-6.2,2.1,-5.4).curveTo(2.9,-4.5,2.9,-3.4).lineTo(2.9,3.3).curveTo(2.9,4.6,2.1,5.4).curveTo(1.2,6.3,-0,6.3).curveTo(-1.2,6.3,-2.1,5.4).closePath();
	this.shape_310.setTransform(148.9,134);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.1,38.3).lineTo(-14.1,-33.6).curveTo(-14.1,-35.5,-12.8,-36.9).curveTo(-11.4,-38.3,-9.5,-38.3).lineTo(9.5,-38.3).curveTo(11.4,-38.3,12.8,-36.9).curveTo(14.1,-35.5,14.1,-33.6).lineTo(14.1,38.3).closePath();
	this.shape_311.setTransform(140.6,134);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.2,37.6).lineTo(-17.2,-37.6).lineTo(17.2,-37.6).lineTo(17.2,37.6).closePath();
	this.shape_312.setTransform(140.8,134.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.1).lineTo(-27.6,-1.1).lineTo(27.6,-1.1).lineTo(27.6,1.1).closePath();
	this.shape_313.setTransform(205.4,155.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.1).lineTo(-27.6,-1.1).lineTo(27.6,-1.1).lineTo(27.6,1.1).closePath();
	this.shape_314.setTransform(205.4,136);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.1).lineTo(-27.6,-1.1).lineTo(27.6,-1.1).lineTo(27.6,1.1).closePath();
	this.shape_315.setTransform(205.4,116.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.1,20.5).lineTo(-1.1,-20.5).lineTo(1.1,-20.5).lineTo(1.1,20.5).closePath();
	this.shape_316.setTransform(231.9,136);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.2,20.5).lineTo(-1.2,-20.5).lineTo(1.2,-20.5).lineTo(1.2,20.5).closePath();
	this.shape_317.setTransform(205.4,136);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.1,20.5).lineTo(-1.1,-20.5).lineTo(1.1,-20.5).lineTo(1.1,20.5).closePath();
	this.shape_318.setTransform(178.9,136);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,20.5).lineTo(-27.6,-20.5).lineTo(27.6,-20.5).lineTo(27.6,20.5).closePath();
	this.shape_319.setTransform(205.4,136);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#494A4E").beginStroke().moveTo(-71.7,43).lineTo(-71.7,-43).lineTo(71.7,-43).lineTo(71.7,43).closePath();
	this.shape_320.setTransform(170.6,129.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,1.4).lineTo(-23.3,-1.4).lineTo(23.3,-1.4).lineTo(20.5,1.4).closePath();
	this.shape_321.setTransform(762.8,104.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,31.7).lineTo(-1.4,-31.7).lineTo(1.4,-31.7).lineTo(1.4,31.7).closePath();
	this.shape_322.setTransform(784.7,134.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,31.7).lineTo(-23.3,-31.7).lineTo(23.3,-31.7).lineTo(23.3,31.7).closePath();
	this.shape_323.setTransform(762.8,134.8);

	this.instance_60 = new lib.refri42();
	this.instance_60.parent = this;
	this.instance_60.setTransform(718.3,25.8,1,1,0,0,0,8.2,10.8);
	this.instance_60.alpha = 0.699;

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_324.setTransform(719,37.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_325.setTransform(719,25.4);

	this.instance_61 = new lib.refri41();
	this.instance_61.parent = this;
	this.instance_61.setTransform(746.9,25.8,1,1,0,0,0,8.1,10.8);
	this.instance_61.alpha = 0.699;

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_326.setTransform(747.7,37.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_327.setTransform(747.7,25.4);

	this.instance_62 = new lib.refri40();
	this.instance_62.parent = this;
	this.instance_62.setTransform(774.5,25.8,1,1,0,0,0,8.2,10.8);
	this.instance_62.alpha = 0.699;

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_328.setTransform(775.2,37.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_329.setTransform(775.2,25.4);

	this.instance_63 = new lib.refri16();
	this.instance_63.parent = this;
	this.instance_63.setTransform(718.3,71.6,1,1,0,0,0,8.2,10.8);
	this.instance_63.alpha = 0.699;

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_330.setTransform(719,83.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_331.setTransform(719,71.2);

	this.instance_64 = new lib.refri39();
	this.instance_64.parent = this;
	this.instance_64.setTransform(746.9,71.6,1,1,0,0,0,8.1,10.8);
	this.instance_64.alpha = 0.699;

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_332.setTransform(747.7,83.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_333.setTransform(747.7,71.2);

	this.instance_65 = new lib.refri38();
	this.instance_65.parent = this;
	this.instance_65.setTransform(774.5,71.6,1,1,0,0,0,8.2,10.8);
	this.instance_65.alpha = 0.699;

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_334.setTransform(775.2,83.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_335.setTransform(775.2,71.2);

	this.instance_66 = new lib.refri37();
	this.instance_66.parent = this;
	this.instance_66.setTransform(718.3,113.9,1,1,0,0,0,8.2,10.8);
	this.instance_66.alpha = 0.699;

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_336.setTransform(719,125.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_337.setTransform(719,113.4);

	this.instance_67 = new lib.refri36();
	this.instance_67.parent = this;
	this.instance_67.setTransform(803.2,113.9,1,1,0,0,0,8.2,10.8);
	this.instance_67.alpha = 0.699;

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_338.setTransform(803.9,125.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_339.setTransform(803.9,113.4);

	this.instance_68 = new lib.refri35();
	this.instance_68.parent = this;
	this.instance_68.setTransform(803.2,71.6,1,1,0,0,0,8.2,10.8);
	this.instance_68.alpha = 0.699;

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_340.setTransform(803.9,83.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_341.setTransform(803.9,71.2);

	this.instance_69 = new lib.refri3();
	this.instance_69.parent = this;
	this.instance_69.setTransform(803.2,25.8,1,1,0,0,0,8.2,10.8);
	this.instance_69.alpha = 0.699;

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_342.setTransform(803.9,37.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_343.setTransform(803.9,25.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#28292B").beginStroke().moveTo(-69,5).lineTo(-69,-5).lineTo(63.8,-5).curveTo(65.9,-5,67.5,-3.5).curveTo(69,-2.1,69,0).curveTo(69,2.1,67.5,3.6).curveTo(65.9,5,63.8,5).closePath();
	this.shape_344.setTransform(762.5,-8.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.6,87.1).lineTo(-66.6,-87.1).lineTo(66.6,-87.1).lineTo(66.6,87.1).closePath();
	this.shape_345.setTransform(760.1,79.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.3).lineTo(-22.6,-12.3).lineTo(22.6,-12.3).lineTo(22.6,12.3).closePath();
	this.shape_346.setTransform(788.9,-20);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_347.setTransform(490.2,-104.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_348.setTransform(490.1,-88.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_349.setTransform(435.9,-104.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_350.setTransform(435.8,-88.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_351.setTransform(381.4,-104.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_352.setTransform(381.3,-88.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_353.setTransform(490.2,-48.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.9).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.9,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.9,18.7,-1.3).curveTo(19.2,-0.7,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.9).closePath();
	this.shape_354.setTransform(490.1,-32.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_355.setTransform(435.9,-48.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.9).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.2,-1.9,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.9,18.7,-1.3).curveTo(19.2,-0.7,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.1,1.8,17.4,1.9).closePath();
	this.shape_356.setTransform(435.8,-32.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_357.setTransform(381.5,-48.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.9).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.9,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.9,18.7,-1.3).curveTo(19.2,-0.7,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.9).closePath();
	this.shape_358.setTransform(381.4,-32.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_359.setTransform(490.2,63.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_360.setTransform(490.1,79.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_361.setTransform(435.9,63.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_362.setTransform(435.8,79.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_363.setTransform(381.6,63.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_364.setTransform(381.5,79.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_365.setTransform(326.8,63.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_366.setTransform(326.7,79.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_367.setTransform(490.2,7.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_368.setTransform(490.1,23.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_369.setTransform(435.9,7.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_370.setTransform(435.8,23.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_371.setTransform(381.5,7.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_372.setTransform(381.4,23.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_373.setTransform(326.8,7.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_374.setTransform(326.7,23.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_375.setTransform(326.8,-48.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.9).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.7,-18.7,-1.3).curveTo(-18.1,-1.9,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.9,18.7,-1.3).curveTo(19.2,-0.7,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.9).closePath();
	this.shape_376.setTransform(326.7,-32.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_377.setTransform(326.8,-104.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_378.setTransform(326.7,-88.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_379.setTransform(490.1,-104.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_380.setTransform(435.8,-104.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_381.setTransform(381.3,-104.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_382.setTransform(326.8,-104.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_383.setTransform(490.1,-48.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_384.setTransform(435.8,-48.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_385.setTransform(381.3,-48.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_386.setTransform(326.8,-48.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_387.setTransform(490.1,7.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_388.setTransform(435.8,7.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_389.setTransform(381.3,7.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_390.setTransform(326.8,7.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_391.setTransform(490.1,63.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_392.setTransform(435.8,63.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_393.setTransform(381.3,63.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_394.setTransform(326.8,63.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-47.7,1.4).lineTo(-47.7,-1.4).lineTo(47.7,-1.4).lineTo(44.9,1.4).closePath();
	this.shape_395.setTransform(402.9,109.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,32.1).lineTo(-1.4,-32.1).lineTo(1.4,-32.1).lineTo(1.4,32.1).closePath();
	this.shape_396.setTransform(449.2,140.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-47.6,32.1).lineTo(-47.6,-32.1).lineTo(47.6,-32.1).lineTo(47.6,32.1).closePath();
	this.shape_397.setTransform(403,140.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#28292B").beginStroke().moveTo(-121.9,4.6).curveTo(-123.8,4.6,-125.2,3.2).curveTo(-126.5,1.9,-126.5,-0).curveTo(-126.5,-1.9,-125.2,-3.2).curveTo(-123.8,-4.6,-121.9,-4.6).lineTo(121.9,-4.6).curveTo(123.8,-4.6,125.2,-3.2).curveTo(126.5,-1.9,126.5,-0).curveTo(126.5,1.9,125.2,3.2).curveTo(123.8,4.6,121.9,4.6).closePath();
	this.shape_398.setTransform(406.9,-141.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.3).lineTo(-22.6,-12.3).lineTo(22.6,-12.3).lineTo(22.6,12.3).closePath();
	this.shape_399.setTransform(332.6,-156);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#494A4E").beginStroke().moveTo(-123.3,158).lineTo(-123.3,-158).lineTo(123.2,-158).lineTo(123.2,158).closePath();
	this.shape_400.setTransform(406.1,14.3);

	this.instance_70 = new lib.refri2();
	this.instance_70.parent = this;
	this.instance_70.setTransform(259.5,32.7,1,1,0,0,0,8.2,10.8);
	this.instance_70.alpha = 0.699;

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_401.setTransform(258.6,44.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_402.setTransform(258.7,32.4);

	this.instance_71 = new lib.refri1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(206.2,32.7,1,1,0,0,0,8.2,10.8);
	this.instance_71.alpha = 0.699;

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_403.setTransform(205.4,44.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_404.setTransform(205.4,32.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,5.4).curveTo(-7.7,3.2,-7.7,0).curveTo(-7.7,-3.2,-5.5,-5.5).curveTo(-3.2,-7.7,0,-7.7).curveTo(3.2,-7.7,5.4,-5.5).curveTo(7.7,-3.2,7.7,0).curveTo(7.7,3.2,5.4,5.4).curveTo(3.2,7.7,0,7.7).curveTo(-3.2,7.7,-5.5,5.4).closePath();
	this.shape_405.setTransform(229.1,-36.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#28292B").beginStroke().moveTo(-55.1,35.1).lineTo(-0,-35.1).lineTo(55.1,35.1).closePath();
	this.shape_406.setTransform(230.9,-37.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-110.7,30.1).lineTo(-81.2,-29.6).lineTo(93.9,-30.1).lineTo(110.8,30.1).closePath();
	this.shape_407.setTransform(280.2,-33);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#494A4E").beginStroke().moveTo(-107.1,88.2).lineTo(-107.1,-88.2).lineTo(107.2,-88.2).lineTo(107.2,88.2).closePath();
	this.shape_408.setTransform(283.8,84.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#434444").beginStroke().moveTo(-12.2,9.9).curveTo(-14.5,9.9,-16,8.4).curveTo(-17.6,6.7,-17.6,4.5).lineTo(-17.6,-4.5).curveTo(-17.6,-6.7,-16,-8.3).curveTo(-14.5,-9.9,-12.2,-9.9).lineTo(12.2,-9.9).curveTo(14.4,-9.9,16,-8.3).curveTo(17.6,-6.7,17.6,-4.5).lineTo(17.6,4.5).curveTo(17.6,6.7,16,8.4).curveTo(14.4,9.9,12.2,9.9).closePath();
	this.shape_409.setTransform(1169.4,-98.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#434444").beginStroke().moveTo(114,70).lineTo(0,-40.7).lineTo(-114,70).lineTo(-140,70).lineTo(0,-70).lineTo(140,70).closePath();
	this.shape_410.setTransform(1241.7,-68.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#28292B").beginStroke().moveTo(-1.9,1.9).curveTo(-2.7,1.1,-2.7,-0).curveTo(-2.7,-1.1,-1.9,-1.9).curveTo(-1.1,-2.7,0,-2.7).curveTo(1.1,-2.7,1.8,-1.9).curveTo(2.7,-1.1,2.6,-0).curveTo(2.7,1.1,1.8,1.9).curveTo(1.1,2.7,0,2.7).curveTo(-1.1,2.7,-1.9,1.9).closePath();
	this.shape_411.setTransform(1304.3,92.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill().beginStroke("#7F7F7F").moveTo(16,20.1).lineTo(-16,20.1).lineTo(-16,-20.1).lineTo(16,-20.1).closePath();
	this.shape_412.setTransform(1289.4,120.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill().beginStroke("#7F7F7F").moveTo(16,20.1).lineTo(-16,20.1).lineTo(-16,-20.2).lineTo(16,-20.2).closePath();
	this.shape_413.setTransform(1289.4,60.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#434444").beginStroke().moveTo(-23.8,60.3).lineTo(-23.8,-60.3).lineTo(23.9,-60.3).lineTo(23.9,60.3).closePath();
	this.shape_414.setTransform(1289.5,90.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.6,20).lineTo(-14.6,-20).lineTo(14.6,-20).lineTo(14.6,20).closePath();
	this.shape_415.setTransform(1241.7,-28.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-14.6,20).lineTo(-14.6,-20).lineTo(14.6,-20).lineTo(14.6,20).closePath();
	this.shape_416.setTransform(1241.7,-28.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-20.3,27.9).lineTo(-20.3,-27.9).lineTo(20.3,-27.9).lineTo(20.3,27.9).closePath();
	this.shape_417.setTransform(1222.5,76.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-20.3,27.9).lineTo(-20.3,-27.9).lineTo(20.3,-27.9).lineTo(20.3,27.9).closePath();
	this.shape_418.setTransform(1222.5,76.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-20.4,27.9).lineTo(-20.4,-27.9).lineTo(20.4,-27.9).lineTo(20.4,27.9).closePath();
	this.shape_419.setTransform(1176.4,76.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-20.4,27.9).lineTo(-20.4,-27.9).lineTo(20.4,-27.9).lineTo(20.4,27.9).closePath();
	this.shape_420.setTransform(1176.4,76.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#434444").beginStroke().moveTo(-119.5,5.3).lineTo(-119.5,-0.4).curveTo(-119.5,-2.4,-117.9,-3.9).curveTo(-116.3,-5.3,-114.1,-5.3).lineTo(114.1,-5.3).curveTo(116.3,-5.3,117.9,-3.9).curveTo(119.5,-2.4,119.5,-0.4).lineTo(119.5,5.3).closePath();
	this.shape_421.setTransform(1241.7,156.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#494A4E").beginStroke().moveTo(-113.7,131.2).lineTo(-113.7,-20).lineTo(0,-131.2).lineTo(113.7,-20).lineTo(113.7,131.2).closePath();
	this.shape_422.setTransform(1241.7,19.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#5B5C5E").beginStroke().moveTo(-11.6,20.4).lineTo(-11.6,-20.4).lineTo(11.6,-20.4).lineTo(11.6,20.4).closePath();
	this.shape_423.setTransform(1169.4,-72.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#434444").beginStroke().moveTo(-24.9,24.9).curveTo(-35.3,14.6,-35.3,-0).curveTo(-35.3,-14.6,-24.9,-24.9).curveTo(-14.6,-35.3,0,-35.3).curveTo(14.6,-35.3,25,-24.9).curveTo(35.3,-14.6,35.3,-0).curveTo(35.3,14.6,25,24.9).curveTo(14.6,35.3,0,35.3).curveTo(-14.6,35.3,-24.9,24.9).closePath().moveTo(-21.1,-21.1).curveTo(-29.8,-12.4,-29.9,-0).curveTo(-29.8,12.3,-21.1,21.1).curveTo(-12.3,29.8,0,29.9).curveTo(12.4,29.8,21.1,21.1).curveTo(29.9,12.3,29.8,-0).curveTo(29.9,-12.4,21.1,-21.1).curveTo(12.4,-29.9,0,-29.9).curveTo(-12.3,-29.9,-21.1,-21.1).closePath();
	this.shape_424.setTransform(957.8,-25.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#434444").beginStroke().moveTo(-32.6,2.7).lineTo(-32.6,-2.7).lineTo(32.6,-2.7).lineTo(32.6,2.7).closePath();
	this.shape_425.setTransform(957.8,-25.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#434444").beginStroke().moveTo(-2.7,32.6).lineTo(-2.7,-32.6).lineTo(2.7,-32.6).lineTo(2.7,32.6).closePath();
	this.shape_426.setTransform(957.8,-25.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23,23).curveTo(-32.6,13.5,-32.6,-0).curveTo(-32.6,-13.5,-23,-23).curveTo(-13.5,-32.6,0,-32.6).curveTo(13.5,-32.6,23.1,-23).curveTo(32.6,-13.5,32.6,-0).curveTo(32.6,13.5,23.1,23).curveTo(13.5,32.6,0,32.6).curveTo(-13.5,32.6,-23,23).closePath();
	this.shape_427.setTransform(957.8,-25.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#434444").beginStroke().moveTo(-12.3,10).curveTo(-14.6,10,-16.2,8.4).curveTo(-17.8,6.8,-17.8,4.6).lineTo(-17.8,-4.5).curveTo(-17.8,-6.8,-16.2,-8.3).curveTo(-14.6,-10,-12.3,-9.9).lineTo(12.3,-9.9).curveTo(14.6,-10,16.1,-8.3).curveTo(17.7,-6.8,17.8,-4.5).lineTo(17.8,4.6).curveTo(17.7,6.8,16.1,8.4).curveTo(14.6,10,12.3,10).closePath();
	this.shape_428.setTransform(1030.6,-99);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#434444").beginStroke().moveTo(114.8,70.5).lineTo(0,-41).lineTo(-114.8,70.5).lineTo(-140.9,70.5).lineTo(0,-70.5).lineTo(140.9,70.5).closePath();
	this.shape_429.setTransform(957.8,-68.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.9,1.9).curveTo(-2.7,1.1,-2.7,-0).curveTo(-2.7,-1.1,-1.9,-1.9).curveTo(-1.1,-2.7,0,-2.7).curveTo(1.1,-2.7,1.9,-1.9).curveTo(2.7,-1.1,2.7,-0).curveTo(2.7,1.1,1.9,1.9).curveTo(1.1,2.7,0,2.7).curveTo(-1.1,2.7,-1.9,1.9).closePath();
	this.shape_430.setTransform(894.8,93.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill().beginStroke("#7F7F7F").moveTo(-16.1,20.3).lineTo(16.1,20.3).lineTo(16.1,-20.3).lineTo(-16.1,-20.3).closePath();
	this.shape_431.setTransform(909.8,121.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginFill().beginStroke("#7F7F7F").moveTo(-16.1,20.3).lineTo(16.1,20.3).lineTo(16.1,-20.3).lineTo(-16.1,-20.3).closePath();
	this.shape_432.setTransform(909.8,60.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.beginFill("#434444").beginStroke().moveTo(-30.6,5.4).lineTo(-30.6,-5.3).lineTo(30.6,-5.3).lineTo(30.6,5.4).closePath();
	this.shape_433.setTransform(909.8,157.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.beginFill("#434444").beginStroke().moveTo(-24,60.7).lineTo(-24,-60.7).lineTo(24,-60.7).lineTo(24,60.7).closePath();
	this.shape_434.setTransform(909.8,91.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.beginFill("#28292B").beginStroke().moveTo(-26,33.6).lineTo(-26,-33.6).lineTo(25.9,-33.6).lineTo(25.9,33.6).closePath().moveTo(-20.5,28.2).lineTo(20.5,28.2).lineTo(20.5,-28.1).lineTo(-20.5,-28.1).closePath();
	this.shape_435.setTransform(977.2,76.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-20.5,28.1).lineTo(-20.5,-28.1).lineTo(20.5,-28.1).lineTo(20.5,28.1).closePath();
	this.shape_436.setTransform(977.2,76.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.beginFill("#28292B").beginStroke().moveTo(-25.9,33.6).lineTo(-25.9,-33.6).lineTo(25.9,-33.6).lineTo(25.9,33.6).closePath().moveTo(-20.5,28.2).lineTo(20.5,28.2).lineTo(20.5,-28.1).lineTo(-20.5,-28.1).closePath();
	this.shape_437.setTransform(1023.6,76.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-20.5,28.1).lineTo(-20.5,-28.1).lineTo(20.5,-28.1).lineTo(20.5,28.1).closePath();
	this.shape_438.setTransform(1023.6,76.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.beginFill("#1A1A1A").beginStroke().moveTo(-120.3,1.1).lineTo(-120.3,-1.1).lineTo(120.3,-1.1).lineTo(120.3,1.1).closePath();
	this.shape_439.setTransform(957.8,161.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.beginFill("#28292B").beginStroke().moveTo(-120.3,5.4).lineTo(-120.3,-0.4).curveTo(-120.3,-2.5,-118.7,-3.9).curveTo(-117.2,-5.3,-114.9,-5.3).lineTo(114.9,-5.3).curveTo(117.1,-5.3,118.7,-3.9).curveTo(120.3,-2.5,120.3,-0.4).lineTo(120.3,5.4).closePath();
	this.shape_440.setTransform(957.8,157.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.beginFill("#5B5C5E").beginStroke().moveTo(-11.7,20.6).lineTo(-11.7,-20.6).lineTo(11.7,-20.6).lineTo(11.7,20.6).closePath();
	this.shape_441.setTransform(1030.6,-73);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.beginFill("#494A4E").beginStroke().moveTo(-114.4,132.1).lineTo(-114.4,-20.2).lineTo(0,-132.1).lineTo(114.4,-20.2).lineTo(114.4,132.1).closePath();
	this.shape_442.setTransform(957.8,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.instance_71},{t:this.shape_402},{t:this.shape_401},{t:this.instance_70},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.instance_69},{t:this.shape_341},{t:this.shape_340},{t:this.instance_68},{t:this.shape_339},{t:this.shape_338},{t:this.instance_67},{t:this.shape_337},{t:this.shape_336},{t:this.instance_66},{t:this.shape_335},{t:this.shape_334},{t:this.instance_65},{t:this.shape_333},{t:this.shape_332},{t:this.instance_64},{t:this.shape_331},{t:this.shape_330},{t:this.instance_63},{t:this.shape_329},{t:this.shape_328},{t:this.instance_62},{t:this.shape_327},{t:this.shape_326},{t:this.instance_61},{t:this.shape_325},{t:this.shape_324},{t:this.instance_60},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.instance_59},{t:this.shape_290},{t:this.shape_289},{t:this.instance_58},{t:this.shape_288},{t:this.shape_287},{t:this.instance_57},{t:this.shape_286},{t:this.shape_285},{t:this.instance_56},{t:this.shape_284},{t:this.shape_283},{t:this.instance_55},{t:this.shape_282},{t:this.shape_281},{t:this.instance_54},{t:this.shape_280},{t:this.shape_279},{t:this.instance_53},{t:this.shape_278},{t:this.shape_277},{t:this.instance_52},{t:this.shape_276},{t:this.shape_275},{t:this.instance_51},{t:this.shape_274},{t:this.shape_273},{t:this.instance_50},{t:this.shape_272},{t:this.instance_49},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.instance_48},{t:this.shape_268},{t:this.instance_47},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.instance_46},{t:this.shape_264},{t:this.shape_263},{t:this.instance_45},{t:this.shape_262},{t:this.shape_261},{t:this.instance_44},{t:this.shape_260},{t:this.shape_259},{t:this.instance_43},{t:this.shape_258},{t:this.shape_257},{t:this.instance_42},{t:this.shape_256},{t:this.shape_255},{t:this.instance_41},{t:this.shape_254},{t:this.shape_253},{t:this.instance_40},{t:this.shape_252},{t:this.shape_251},{t:this.instance_39},{t:this.shape_250},{t:this.shape_249},{t:this.instance_38},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.instance_37},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.instance_36},{t:this.shape_210},{t:this.shape_209},{t:this.instance_35},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.instance_34},{t:this.shape_149},{t:this.shape_148},{t:this.instance_33},{t:this.shape_147},{t:this.shape_146},{t:this.instance_32},{t:this.shape_145},{t:this.shape_144},{t:this.instance_31},{t:this.shape_143},{t:this.shape_142},{t:this.instance_30},{t:this.shape_141},{t:this.shape_140},{t:this.instance_29},{t:this.shape_139},{t:this.shape_138},{t:this.instance_28},{t:this.shape_137},{t:this.shape_136},{t:this.instance_27},{t:this.shape_135},{t:this.shape_134},{t:this.instance_26},{t:this.shape_133},{t:this.shape_132},{t:this.instance_25},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_24},{t:this.shape_98},{t:this.shape_97},{t:this.instance_23},{t:this.shape_96},{t:this.shape_95},{t:this.instance_22},{t:this.shape_94},{t:this.shape_93},{t:this.instance_21},{t:this.shape_92},{t:this.shape_91},{t:this.instance_20},{t:this.shape_90},{t:this.shape_89},{t:this.instance_19},{t:this.shape_88},{t:this.shape_87},{t:this.instance_18},{t:this.shape_86},{t:this.shape_85},{t:this.instance_17},{t:this.shape_84},{t:this.shape_83},{t:this.instance_16},{t:this.shape_82},{t:this.shape_81},{t:this.instance_15},{t:this.shape_80},{t:this.instance_14},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_13},{t:this.shape_76},{t:this.instance_12},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.instance_11},{t:this.shape_72},{t:this.shape_71},{t:this.instance_10},{t:this.shape_70},{t:this.shape_69},{t:this.instance_9},{t:this.shape_68},{t:this.shape_67},{t:this.instance_8},{t:this.shape_66},{t:this.shape_65},{t:this.instance_7},{t:this.shape_64},{t:this.shape_63},{t:this.instance_6},{t:this.shape_62},{t:this.shape_61},{t:this.instance_5},{t:this.shape_60},{t:this.shape_59},{t:this.instance_4},{t:this.shape_58},{t:this.shape_57},{t:this.instance_3},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1382.1,-178.7,2763.9,362.9);


(lib.refriconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.refrihandss();
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


(lib.refrichesee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.refriqueso();
	this.instance.parent = this;
	this.instance.setTransform(14.8,0.2,0.743,0.743,0,0,0,0.1,0.2);

	this.instance_1 = new lib.refriqueso();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.7,0.2,0.743,0.743,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-11.3,57.7,22.7);


(lib.refricamion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DF1421").beginStroke().moveTo(-6.3,13).curveTo(-9.6,13,-12.5,11).curveTo(-13.8,10,-14.5,7.6).lineTo(-14.9,5.3).lineTo(-14.9,-11.5).lineTo(-14.8,-12.2).curveTo(-14.5,-12.8,-13.5,-13).lineTo(-8,-13).curveTo(-6.9,-13,-6.6,-12.2).curveTo(-6.4,-11.8,-6.5,-11.5).lineTo(-6.5,2.2).curveTo(-6.5,4.8,-6,5.5).curveTo(-4.8,7.1,-0.2,7.1).curveTo(4.3,7.4,5.7,5.4).curveTo(6.3,4.5,6.3,2.2).lineTo(6.3,-11.3).curveTo(6.2,-11.7,6.4,-12.2).curveTo(6.6,-13,7.6,-13).lineTo(13.2,-13).curveTo(14.4,-13,14.8,-12.2).curveTo(15,-11.7,14.9,-11.3).lineTo(14.8,6).curveTo(14.5,8.3,13.4,9.8).curveTo(12.4,11.6,9.1,12.5).lineTo(6,13).closePath();
	this.shape.setTransform(120.6,-25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DF1421").beginStroke().moveTo(-6.3,13).curveTo(-9.6,13,-12.5,11).curveTo(-13.8,10,-14.5,7.6).lineTo(-14.9,5.3).lineTo(-14.9,-11.5).lineTo(-14.8,-12.2).curveTo(-14.4,-12.8,-13.5,-13).lineTo(-8,-13).curveTo(-6.9,-13,-6.6,-12.2).curveTo(-6.4,-11.8,-6.5,-11.5).lineTo(-6.5,2.2).curveTo(-6.5,4.8,-6,5.5).curveTo(-4.8,7.1,-0.2,7.1).curveTo(4.3,7.4,5.7,5.4).curveTo(6.3,4.5,6.3,2.2).lineTo(6.3,-11.3).curveTo(6.2,-11.7,6.4,-12.2).curveTo(6.7,-13,7.6,-13).lineTo(13.2,-13).curveTo(14.4,-13,14.8,-12.2).curveTo(14.9,-11.7,14.9,-11.3).lineTo(14.8,6).curveTo(14.5,8.3,13.4,9.8).curveTo(12.4,11.6,9.1,12.5).lineTo(6,13).closePath();
	this.shape_1.setTransform(50.4,-25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DF1421").beginStroke().moveTo(-8.8,13).curveTo(-12.8,13,-14.7,10.3).lineTo(-15.7,7.5).curveTo(-15.8,6.3,-15.5,4.9).curveTo(-14.8,2.1,-12.2,1.1).curveTo(-8.2,-0.8,5.8,-5.6).curveTo(6.5,-5.9,6.5,-6.3).curveTo(6.6,-6.9,5.4,-7.1).curveTo(4.1,-7.3,-4.9,-7.2).lineTo(-13.5,-7.1).curveTo(-13.9,-7.1,-14.2,-7.2).curveTo(-14.9,-7.6,-14.9,-8.5).lineTo(-14.9,-11.5).curveTo(-14.8,-12.7,-13.9,-12.9).curveTo(-13.5,-13,-13.1,-13).lineTo(-5.1,-13).curveTo(3.8,-13,8.4,-12.9).curveTo(13.1,-12.7,14.9,-10).curveTo(15.8,-8.7,15.7,-7.4).lineTo(15.5,-4.6).curveTo(14.7,-1.6,11.9,-0.6).curveTo(10.2,0.2,3.3,2.4).curveTo(-2.6,4.5,-4.7,5.4).curveTo(-6.8,6.3,-6.4,6.7).curveTo(-6.1,7.1,-4.9,7.1).lineTo(14.1,7.2).curveTo(15.1,7.4,15.1,8.3).lineTo(15.1,11.4).curveTo(15.1,12.5,14.4,12.9).lineTo(13.6,13).closePath();
	this.shape_2.setTransform(86,-25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-14.3,12.9).curveTo(-15.1,12.5,-15.1,11.4).lineTo(-15.1,8.3).curveTo(-15.1,7.3,-14,7.1).curveTo(-13.5,7,-13,7.1).lineTo(4.9,7.1).curveTo(6.1,7.1,6.4,6.7).curveTo(6.8,6.2,4.7,5.4).curveTo(2.6,4.5,-3.3,2.4).curveTo(-10.2,0.1,-11.9,-0.6).curveTo(-14.7,-1.6,-15.5,-4.6).lineTo(-15.7,-7.4).lineTo(-14.8,-10).curveTo(-13,-12.7,-8.4,-12.9).curveTo(-1.1,-13.1,13.1,-13).lineTo(13.9,-12.9).curveTo(14.8,-12.7,14.9,-11.6).lineTo(14.9,-8.5).curveTo(14.9,-7.6,14.2,-7.3).lineTo(13.5,-7.1).curveTo(-3.3,-7.5,-5.4,-7.1).curveTo(-6.6,-6.9,-6.5,-6.3).curveTo(-6.5,-5.9,-5.8,-5.6).lineTo(1.9,-2.9).curveTo(9.7,-0.1,12.2,1).curveTo(14.8,2.1,15.5,4.9).curveTo(15.8,6.3,15.7,7.4).curveTo(15.6,8.8,14.7,10.2).curveTo(12.8,13,8.8,13).lineTo(-13.6,13).lineTo(-13.8,13).lineTo(-14.3,12.9).closePath();
	this.shape_3.setTransform(15.1,-25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.8,13.1).curveTo(-4,13.1,-4.2,12.3).lineTo(-4.3,11.6).lineTo(-4.3,-11.8).curveTo(-4.3,-12.8,-3.4,-13).curveTo(-3.1,-13.1,-2.6,-13.1).lineTo(3,-13.1).lineTo(3.7,-12.9).curveTo(4.3,-12.6,4.3,-11.7).lineTo(4.3,11.7).curveTo(4.3,12.7,3.7,13).lineTo(3,13.1).closePath();
	this.shape_4.setTransform(-9.9,-25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.8).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,2,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4,4.4,2.1,4.5).closePath();
	this.shape_5.setTransform(-101.1,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.2,-4).lineTo(-2.2,0.8).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,2,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4,4.4,2.1,4.5).closePath();
	this.shape_6.setTransform(-125.3,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3.1,4.5).curveTo(-4.5,4.5,-5.1,3.5).lineTo(-5.4,2.6).lineTo(-5.4,1.7).curveTo(-5.1,0.7,-4.2,0.3).lineTo(-0.7,-1).lineTo(2,-1.9).curveTo(2,-1.9,2.1,-2).curveTo(2.1,-2,2.2,-2).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.2).curveTo(2.3,-2.4,1.8,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-2.9).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).curveTo(5.6,-0.8,4.1,-0.2).lineTo(-1.6,1.9).curveTo(-2.4,2.2,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.9).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_7.setTransform(-113,34.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,3.9).lineTo(-5.2,2.9).curveTo(-5.2,2.5,-4.8,2.4).lineTo(-4.5,2.4).lineTo(1.7,2.4).curveTo(2.1,2.4,2.2,2.3).curveTo(2.3,2.2,1.6,1.9).lineTo(-1.2,0.8).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.4,-1.6).lineTo(-5.4,-2.6).lineTo(-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.5).curveTo(5.1,-4.4,5.1,-4).lineTo(5.1,-2.9).curveTo(5.1,-2.4,4.7,-2.5).curveTo(-1.1,-2.6,-1.9,-2.5).curveTo(-2.3,-2.4,-2.3,-2.2).curveTo(-2.3,-2.1,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-1.9,-2,-1.9).lineTo(0.7,-1).lineTo(4.2,0.3).curveTo(5.6,1,5.4,2.6).curveTo(5.4,3.1,5.1,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.9,4.5).curveTo(-5.2,4.5,-5.2,3.9).closePath();
	this.shape_8.setTransform(-137.5,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DF1421").beginStroke().moveTo(1.1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.2,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4).curveTo(1.5,4.5,1.1,4.5).lineTo(1.1,4.5).closePath();
	this.shape_9.setTransform(-146.2,34.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#C4C4C4").beginStroke().moveTo(-111.8,3.3).lineTo(-111.8,-3.2).lineTo(111.7,-3.2).lineTo(111.7,3.3).closePath();
	this.shape_10.setTransform(56.8,43.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1.5,53.2).lineTo(-1.5,-53.2).lineTo(1.5,-53.2).lineTo(1.5,53.2).closePath();
	this.shape_11.setTransform(-56.7,-16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1.3,70.1).lineTo(-1.3,-70.1).lineTo(1.3,-70.1).lineTo(1.3,70.1).closePath();
	this.shape_12.setTransform(-48.2,-24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-70.1).lineTo(1.4,-68.5).lineTo(5.6,69.5).lineTo(-2.5,70.1).closePath();
	this.shape_13.setTransform(163.4,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-111.8,1.5).lineTo(-111.8,-1.5).lineTo(111.7,-1.5).lineTo(111.7,1.5).closePath();
	this.shape_14.setTransform(56.8,39.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-111,0.7).lineTo(-111,-0.7).lineTo(111,-0.7).lineTo(111,0.7).closePath();
	this.shape_15.setTransform(54.3,-93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-105.5,0.8).lineTo(-105.5,-0.8).lineTo(105.5,-0.8).lineTo(105.5,0.8).closePath();
	this.shape_16.setTransform(51.6,-100.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-112,-65).lineTo(-113,-66.9).lineTo(-113,-68.9).curveTo(-112.9,-71.1,-112.3,-71).lineTo(-109.2,-70.9).lineTo(-109.3,-73.6).lineTo(101.5,-74).lineTo(101.6,-71.9).lineTo(102.5,-71.9).lineTo(109.5,-70.3).lineTo(113,71.9).lineTo(-110.3,74).closePath();
	this.shape_17.setTransform(55.3,-27.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.7,-3.6).lineTo(-8,-11.7).lineTo(14.4,-11.9).lineTo(14.7,11.6).lineTo(-8,11.9).closePath();
	this.shape_18.setTransform(-71.1,-80.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_19.setTransform(-93.7,75.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_20.setTransform(88,75.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).lineTo(-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).curveTo(1.9,-2.4,-3.9,-1.8).curveTo(-8.7,-1.3,-18.6,-0.6).lineTo(-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.8).closePath();
	this.shape_21.setTransform(-125.7,-41.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.5,1.9).closePath();
	this.shape_22.setTransform(-99.5,-47.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_23.setTransform(-146.2,3.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).closePath();
	this.shape_24.setTransform(-146.2,25.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#999999").beginStroke().moveTo(-2.9,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0,0.5).lineTo(-0.8,0.5).curveTo(-2,0.5,-2.9,0.3).closePath();
	this.shape_25.setTransform(-146.3,18);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#999999").beginStroke().moveTo(-3.1,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).curveTo(-3.3,-4.9,-3.1,-5).lineTo(2.4,-6.7).curveTo(3,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,4,3.2,4.5).curveTo(2.4,5.1,-1.3,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.1,6.7).closePath();
	this.shape_26.setTransform(-146.4,20.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.5,-12.9,0.8,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.6,5,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_27.setTransform(-142.1,-22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.8,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-6.7,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.1,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_28.setTransform(-143.3,-22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).lineTo(-2.6,5.4).curveTo(-2.9,5.1,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).lineTo(-1.8,-2.2).curveTo(-1.6,-2.7,-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.4).lineTo(-0.4,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_29.setTransform(-164.7,3.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.2,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.8,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_30.setTransform(-155.1,-20.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_31.setTransform(-164.5,40.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_32.setTransform(-164.1,59.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.8,0.5,-4.8,-1.7).lineTo(4.8,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_33.setTransform(-163,70.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_34.setTransform(-159.3,74.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.4,-1.7).lineTo(-0.8,-8.3).lineTo(0.8,8.3).curveTo(-0.1,5.6,-0.4,-1.7).closePath();
	this.shape_35.setTransform(-158.5,66.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.2,-6.8).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.3,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.2,-6.8).lineTo(-4.4,-6.9).closePath();
	this.shape_36.setTransform(-160,64.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.2,3.2,-1.5,1.9).curveTo(-2,-1,-2,-4.6).lineTo(-1.4,-3.9).curveTo(-0.6,-3.2,-0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_37.setTransform(-166.4,65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,3.1,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.4,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.4,3.2,1.1,6.5).closePath();
	this.shape_38.setTransform(-84.5,21.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.3,-4.5,7.7).curveTo(-5,7.2,-5,6.3).curveTo(-5.5,2.3,-5.3,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.2,-8.2).curveTo(4,-8.2,4.5,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.2,4.5,7.7).curveTo(4,8.3,3.2,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_39.setTransform(-84.6,21.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-47,64.9).curveTo(-49.1,64.1,-50,62).curveTo(-50.4,61.8,-51,61.2).curveTo(-52,60.2,-52.5,58.5).curveTo(-53.2,56.4,-53.5,53.3).lineTo(-54,48).curveTo(-54.2,44.9,-53.3,42.1).lineTo(-52.4,39.9).curveTo(-53.3,23.7,-53.3,18.3).curveTo(-53.3,14.9,-52.8,6.7).lineTo(-52.3,-0.9).lineTo(-48.1,-7.9).curveTo(-47.1,-12.9,-43.6,-27.3).curveTo(-41.3,-36.4,-37.2,-48.8).curveTo(-33.9,-58.5,-32.9,-60.5).curveTo(-32.5,-61.4,-31.9,-61.8).curveTo(-31.3,-62.2,-29.7,-62.4).curveTo(-22.5,-63.3,5.4,-64.5).lineTo(31.8,-65.5).curveTo(34.7,-65.6,36.1,-65.3).curveTo(38.3,-64.9,40.2,-63.5).lineTo(43.2,-61.2).lineTo(45.3,-59.2).curveTo(46.4,-58.2,47.8,-56.1).curveTo(48.9,-54.3,49.7,-52.7).curveTo(50.9,-50.1,52.2,-44.6).curveTo(54,-36.9,54,-29.7).lineTo(54,-12.7).curveTo(54,-9.9,53.3,-8.8).curveTo(50,-2.2,50,-0.1).lineTo(50,6.5).curveTo(50,8,49.5,8.9).curveTo(49,9.7,49,10.5).lineTo(49,25.4).lineTo(39.1,25.7).lineTo(36,26).lineTo(36,28.3).curveTo(24.9,28.4,20,29).curveTo(13.2,29.9,10.4,31.2).curveTo(3.7,34.3,-1.3,42.9).curveTo(-2.7,45.3,-4.8,49.6).lineTo(-6.7,53.4).curveTo(-7.5,54.5,-9.1,54.5).lineTo(-17.2,54.5).lineTo(-18.7,54.1).lineTo(-21.4,54.5).lineTo(-39,54.5).lineTo(-39,61.9).curveTo(-39,63.3,-39.8,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-45.4,65.5,-47,64.9).closePath().moveTo(9.8,-55.4).curveTo(-9.6,-54.6,-16,-53.6).curveTo(-21.4,-52.8,-23,-51.9).curveTo(-24.2,-51.1,-25.6,-48.5).curveTo(-26.6,-46.5,-28.8,-36.4).curveTo(-31.1,-26.4,-31.5,-22.1).curveTo(-31.9,-18.2,-32.2,-10.8).curveTo(-32.5,-4,-32.5,-1.5).lineTo(-32.4,-0.4).lineTo(-31.2,-0.7).lineTo(9.3,-16.4).curveTo(14,-18.1,26.6,-20.3).lineTo(29.1,-20.8).curveTo(30.3,-21,30.6,-21.4).curveTo(30.8,-21.7,30.8,-22.3).lineTo(31.5,-51.8).curveTo(31.5,-54.2,30.7,-55).curveTo(30,-55.8,28,-56).curveTo(19.5,-55.8,9.8,-55.4).closePath();
	this.shape_40.setTransform(-114.9,12.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#969696").beginStroke().moveTo(-78.5,30).lineTo(-79.2,28).lineTo(-135,29.2).lineTo(-147.8,24.7).lineTo(-153.6,20).lineTo(-157.3,-3.8).lineTo(-135.9,-30.1).lineTo(-89.2,-28.5).lineTo(-78.2,-16).lineTo(-77.9,-8.8).lineTo(-79.9,-6.9).lineTo(-75.7,-0.5).lineTo(-74.3,-4.6).lineTo(-68.3,-4.6).lineTo(-67.6,-19.3).lineTo(151.7,-23.1).lineTo(157.3,15.7).curveTo(156.1,16.7,154.4,17.6).curveTo(150.9,19.5,148.4,19.6).curveTo(145.9,19.7,144.9,18.1).lineTo(144.4,16.4).lineTo(142.7,15.9).lineTo(134.4,7.7).lineTo(123.6,7.9).curveTo(122.9,9,121.7,10.2).curveTo(119.2,12.5,116.4,12.6).curveTo(113.6,12.6,111.8,10.4).lineTo(110.6,8.3).curveTo(110.1,8.3,107.1,9.6).lineTo(104.3,10.9).lineTo(104,26.6).lineTo(102.9,27.2).lineTo(102.9,11.5).lineTo(96.8,14.2).lineTo(45.4,28.4).curveTo(38.6,28.3,36,28).curveTo(34.7,27.8,-7.4,27.3).lineTo(-3.3,20.8).lineTo(-26.8,19).lineTo(-50.4,13.6).lineTo(-58.3,13.3).lineTo(-62.9,14.9).lineTo(-62.9,16.8).curveTo(-63,18.8,-63.2,19.8).curveTo(-63.8,22.2,-65.7,22.5).lineTo(-72.1,23).lineTo(-72.1,30).closePath();
	this.shape_41.setTransform(11.2,55.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.4,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.3,0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_42.setTransform(9.8,103.2,0.903,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

	// Capa 3
	this.instance = new lib.refriconductor();
	this.instance.parent = this;
	this.instance.setTransform(-111.4,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.9,-101.6,347.2,216.2);


// stage content:
(lib.refrigerado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_154 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(154).call(this.frame_154).wait(1));

	// llanta
	this.instance = new lib.refrillanta();
	this.instance.parent = this;
	this.instance.setTransform(712.3,400.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({rotation:-1080,x:287.3},50).wait(39).to({rotation:-1440,x:-92.7},13).wait(1));

	// llanta
	this.instance_1 = new lib.refrillanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(530.3,400.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({rotation:-1080,x:105.3},50).wait(39).to({rotation:-1440,x:-274.7},13).wait(1));

	// camionin
	this.instance_2 = new lib.refricamion();
	this.instance_2.parent = this;
	this.instance_2.setTransform(624,324.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({x:199},50).wait(39).to({x:-181},13).wait(1));

	// paletas
	this.instance_3 = new lib.refripaletas();
	this.instance_3.parent = this;
	this.instance_3.setTransform(321.1,305.9,0.378,0.378);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(122).to({_off:false},0).to({x:553.4,y:288.5},10).wait(23));

	// pack
	this.instance_4 = new lib.refripack();
	this.instance_4.parent = this;
	this.instance_4.setTransform(321.1,305.9,0.625,0.625,0,0,0,0.1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({_off:false},0).to({x:552.9,y:365},10).wait(30));

	// helados
	this.instance_5 = new lib.refrihelados();
	this.instance_5.parent = this;
	this.instance_5.setTransform(321.1,305.9,0.468,0.468);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(108).to({_off:false},0).to({x:552.8,y:337.5},10).wait(37));

	// chesee
	this.instance_6 = new lib.refrichesee();
	this.instance_6.parent = this;
	this.instance_6.setTransform(321.1,305.9,0.624,0.624);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(102).to({_off:false},0).to({x:552.8,y:312.2},10).wait(43));

	// box
	this.instance_7 = new lib.refribox();
	this.instance_7.parent = this;
	this.instance_7.setTransform(990.1,384.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({x:727.8,y:304.4},8).to({_off:true},13).wait(103));

	// box
	this.instance_8 = new lib.refribox();
	this.instance_8.parent = this;
	this.instance_8.setTransform(935.8,384.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({x:727.8,y:304.4},8).to({_off:true},18).wait(103));

	// box
	this.instance_9 = new lib.refribox();
	this.instance_9.parent = this;
	this.instance_9.setTransform(881.5,384.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({x:727.8,y:304.4},8).to({_off:true},23).wait(103));

	// helados
	this.instance_10 = new lib.refrihelados();
	this.instance_10.parent = this;
	this.instance_10.setTransform(977.6,340.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({x:727.8,y:304.4},8).to({_off:true},27).wait(103));

	// paletas
	this.instance_11 = new lib.refripaletas();
	this.instance_11.parent = this;
	this.instance_11.setTransform(901.5,335.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({x:727.8,y:304.4},8).to({_off:true},33).wait(103));

	// pack
	this.instance_12 = new lib.refripack();
	this.instance_12.parent = this;
	this.instance_12.setTransform(974.6,300.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({x:727.8,y:304.4},8).to({_off:true},37).wait(103));

	// chesee
	this.instance_13 = new lib.refrichesee();
	this.instance_13.parent = this;
	this.instance_13.setTransform(901.6,295.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({x:727.8,y:304.4},8).to({_off:true},41).wait(103));

	// fondo
	this.instance_14 = new lib.refrifondo();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-333.6,203.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52).to({x:1381.8},50).wait(53));

	// piso
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape.setTransform(582.3,438.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_1.setTransform(-934,438.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_2.setTransform(-388.8,438.5);

	this.instance_15 = new lib.Interpolación1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(50.5,438.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_15}]},52).to({state:[{t:this.instance_15}]},50).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(52).to({_off:false},0).to({x:999.5},50).wait(53));

	// Ambient
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],-0.1,182.5,-0.1,-182.4).beginStroke().moveTo(-525,182.5).lineTo(-525,-182.5).lineTo(525,-182.5).lineTo(525,182.5).closePath();
	this.shape_3.setTransform(525,182.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_4.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1190.7,257.5,2765.8,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;