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



(lib.volteobrazo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-26.7,10.9).lineTo(19.3,-23.5).lineTo(26.6,-13.7).lineTo(-17.3,23.5).closePath();
	this.shape.setTransform(-2,1.5,0.354,0.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-2.2,5.1).curveTo(-2.9,5.1,-3.4,4.5).curveTo(-3.9,4,-3.9,3.2).curveTo(-3.9,2.3,-3,0.2).curveTo(-1.5,-2.9,1.1,-4.8).curveTo(1.6,-5.2,2.4,-5.1).curveTo(3.1,-5,3.5,-4.3).curveTo(4,-3.7,3.9,-3).curveTo(3.8,-2.2,3.2,-1.8).curveTo(1.4,-0.5,0.4,1.5).lineTo(-0.2,2.8).lineTo(-0.4,3.4).curveTo(-0.4,4.2,-0.9,4.7).curveTo(-1.4,5.1,-2,5.1).lineTo(-2.2,5.1).closePath();
	this.shape_1.setTransform(6.8,-8,0.354,0.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-10,0.1).lineTo(1.8,-8.5).curveTo(4.5,-10.4,8.6,-4.9).curveTo(10,-3,10,-1.9).curveTo(9.9,-0.7,8.3,0.5).lineTo(-3.5,9).closePath();
	this.shape_2.setTransform(8,-6.3,0.354,0.354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-9.7,23,19.6);


(lib.volteoantebrazo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-25.3,10.3).lineTo(-22.8,-10.9).lineTo(25.3,-5.1).lineTo(23.4,10.9).closePath();
	this.shape.setTransform(0,0,0.354,0.354);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-3.8,18,7.7);


(lib.volteo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.2,5.7).lineTo(-4.2,-5.7).lineTo(4.2,-5.7).lineTo(4.2,5.7).closePath();
	this.shape.setTransform(-5.8,58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#999999").beginStroke().moveTo(-6,13.7).lineTo(-6,-13.7).lineTo(6,-13.7).lineTo(6,13.7).closePath();
	this.shape_1.setTransform(-6,78);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#999999").beginStroke().moveTo(-5,10).lineTo(-5,-10).lineTo(5,-10).lineTo(5,10).closePath();
	this.shape_2.setTransform(-54.3,77.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#999999").beginStroke().moveTo(-3.7,9).lineTo(-3.7,-9).lineTo(3.7,-9).lineTo(3.7,9).closePath();
	this.shape_3.setTransform(-99.7,77.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#999999").beginStroke().moveTo(-3.3,10.3).lineTo(-3.3,-10.3).lineTo(3.3,-10.3).lineTo(3.3,10.3).closePath();
	this.shape_4.setTransform(-145.3,78.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#999999").beginStroke().moveTo(-89.3,2.3).lineTo(-89.3,-2.3).lineTo(89.3,-2.3).lineTo(89.3,2.3).closePath();
	this.shape_5.setTransform(-101.3,68.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#999999").beginStroke().moveTo(-8.7,13).lineTo(-8.7,-13).lineTo(8.7,-13).lineTo(8.7,13).closePath();
	this.shape_6.setTransform(-197.3,78.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-9.5,-33.3).lineTo(-2.5,-33.3).lineTo(9.5,32.3).lineTo(-8.5,33.3).closePath();
	this.shape_7.setTransform(-198.1,33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-7,16).lineTo(-7,-16).lineTo(7,-16).lineTo(7,16).closePath();
	this.shape_8.setTransform(-213.6,81.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#999999").beginStroke().moveTo(-7,16).lineTo(-7,-16).lineTo(7,-16).lineTo(7,16).closePath();
	this.shape_9.setTransform(-213.6,56.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#999999").beginStroke().moveTo(-89.3,2.3).lineTo(-89.3,-2.3).lineTo(89.3,-2.3).lineTo(89.3,2.3).closePath();
	this.shape_10.setTransform(-101.3,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.6,0,220.7,97.7);


(lib.tabikitos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape.setTransform(-41.1,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_1.setTransform(-12.9,46.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_2.setTransform(-28.1,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_3.setTransform(-56.1,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_4.setTransform(-61.9,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_5.setTransform(-47.7,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_6.setTransform(-75.8,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_7.setTransform(-92.3,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_8.setTransform(-122.7,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-9.9,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-9.9,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_9.setTransform(-69.2,46.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_10.setTransform(-97.4,46.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_11.setTransform(-125.6,46.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_12.setTransform(-153.7,46.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_13.setTransform(-84.1,33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(9.9,-5.9,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape_14.setTransform(-112,33.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(9.9,-5.9,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape_15.setTransform(-140,33.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-9.9,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(9.9,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.9,7.9,5.9).closePath();
	this.shape_16.setTransform(-103.8,19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_17.setTransform(-131.9,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.6,0,166.7,52.5);


(lib.ta4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(9.9,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape.setTransform(-12.9,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_1.setTransform(-41,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(9.9,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape_2.setTransform(-69.1,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_3.setTransform(-97.3,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_4.setTransform(-125.4,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_5.setTransform(-153.5,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_6.setTransform(-181.7,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.8,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.8,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_7.setTransform(-209.8,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.8,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.8,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_8.setTransform(-237.9,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-9.9,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.8,-11.5,-4.4).curveTo(-9.9,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.4,-4.4).curveTo(12.9,-2.8,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_9.setTransform(-266,5.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_10.setTransform(-294.2,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_11.setTransform(-322.3,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_12.setTransform(-350.4,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.8,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.8,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_13.setTransform(-378.6,5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.8,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.8,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_14.setTransform(-406.7,5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.8,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.8,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_15.setTransform(-434.8,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447.7,0,447.8,11.9);


(lib.ta3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape.setTransform(-12.9,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_1.setTransform(-41.4,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_2.setTransform(-70,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_3.setTransform(-98.5,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_4.setTransform(-127,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_5.setTransform(-155.5,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_6.setTransform(-184.1,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_7.setTransform(-212.6,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_8.setTransform(-241.1,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_9.setTransform(-269.6,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_10.setTransform(-298.2,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_11.setTransform(-326.7,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_12.setTransform(-355.2,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_13.setTransform(-383.7,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_14.setTransform(-412.3,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_15.setTransform(-440.8,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(9.9,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape_16.setTransform(-469.3,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-482.2,0,482.2,11.9);


(lib.ta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(9.9,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape.setTransform(-12.9,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_1.setTransform(-41,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(9.9,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape_2.setTransform(-69.1,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_3.setTransform(-97.3,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_4.setTransform(-125.4,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_5.setTransform(-153.5,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_6.setTransform(-181.7,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_7.setTransform(-209.8,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_8.setTransform(-237.9,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-9.9,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_9.setTransform(-266,5.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_10.setTransform(-294.2,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_11.setTransform(-322.3,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_12.setTransform(-350.4,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_13.setTransform(-378.6,5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_14.setTransform(-406.7,5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.9).curveTo(-10,5.9,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.9,7.9,5.9).closePath();
	this.shape_15.setTransform(-434.8,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447.7,0,447.8,11.9);


(lib.ta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape.setTransform(-12.9,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_1.setTransform(-41.4,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_2.setTransform(-70,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_3.setTransform(-98.5,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_4.setTransform(-127,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_5.setTransform(-155.5,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_6.setTransform(-184.1,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_7.setTransform(-212.6,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_8.setTransform(-241.1,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_9.setTransform(-269.6,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_10.setTransform(-298.2,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_11.setTransform(-326.7,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.3).curveTo(-10,-5.9,-7.9,-5.9).lineTo(7.9,-5.9).curveTo(10,-5.9,11.5,-4.3).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_12.setTransform(-355.2,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.5,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.5,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_13.setTransform(-383.7,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_14.setTransform(-412.3,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-10,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-10,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(10,-5.8,11.5,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.5,4.4).curveTo(10,5.8,7.9,5.8).closePath();
	this.shape_15.setTransform(-440.8,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,5.8).curveTo(-9.9,5.8,-11.4,4.4).curveTo(-12.9,2.9,-12.9,0.8).lineTo(-12.9,-0.8).curveTo(-12.9,-2.9,-11.4,-4.4).curveTo(-9.9,-5.8,-7.9,-5.8).lineTo(7.9,-5.8).curveTo(9.9,-5.8,11.4,-4.4).curveTo(12.9,-2.9,12.9,-0.8).lineTo(12.9,0.8).curveTo(12.9,2.9,11.4,4.4).curveTo(9.9,5.8,7.9,5.8).closePath();
	this.shape_16.setTransform(-469.3,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-482.2,0,482.2,11.9);


(lib.mrshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-27.9,59.8).lineTo(-27.9,-31.4).lineTo(-32.8,-58.5).lineTo(-22.3,-59.8).lineTo(-16.8,-31.4).lineTo(16.8,-31.4).lineTo(22.3,-59.8).lineTo(32.8,-58.5).lineTo(27.9,-31.4).lineTo(28,-31.4).lineTo(28,59.8).closePath();
	this.shape.setTransform(3.5,-15.3,0.355,0.355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,49.8).lineTo(-7.3,61.8).lineTo(-41.6,61.8).curveTo(-40.9,51.4,-40.1,22.2).lineTo(-39.5,-4.9).curveTo(-40.8,-11.8,-41.8,-20.7).curveTo(-43.6,-38.5,-42,-48.2).curveTo(-40.9,-54.2,-35.9,-56.2).curveTo(-26.8,-58.7,-18.5,-61.8).lineTo(-4.7,-56).lineTo(9.1,-61.8).curveTo(13.9,-60,21.1,-58).curveTo(29.6,-55.7,31.4,-55.1).curveTo(41.4,-51.8,42.4,-45.9).curveTo(44,-36.2,38.1,-29.4).curveTo(35.2,-26,31.8,-24.6).lineTo(27.3,22.7).lineTo(28.7,39.1).lineTo(30.5,61.8).lineTo(-2.1,61.8).closePath();
	this.shape_1.setTransform(5.2,-16.1,0.354,0.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-10.3,6.1).curveTo(-15,4.7,-15,2.3).curveTo(-15,-2.5,-10.6,-5.1).curveTo(-6.6,-7.3,0,-7.3).curveTo(6.7,-7.3,10.6,-5.1).curveTo(15,-2.5,15,2.3).curveTo(15,4.7,10.3,6.1).curveTo(6.1,7.3,0,7.3).curveTo(-6.1,7.3,-10.3,6.1).closePath();
	this.shape_2.setTransform(10.3,60.1,0.354,0.354);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-10.3,6.1).curveTo(-15,4.7,-15,2.3).curveTo(-15,-2.5,-10.6,-5.1).curveTo(-6.7,-7.3,-0,-7.3).curveTo(6.6,-7.3,10.6,-5.1).curveTo(15,-2.5,15,2.3).curveTo(15,4.7,10.3,6.1).curveTo(6.1,7.3,-0,7.3).curveTo(-6.1,7.3,-10.3,6.1).closePath();
	this.shape_3.setTransform(-4.8,60.1,0.354,0.354);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(8.1,86.2).lineTo(4,-61.4).lineTo(-1.9,-61.4).lineTo(-10.3,86.2).lineTo(-32.8,86.2).lineTo(-30.7,-86.2).lineTo(32.8,-86.2).lineTo(30.7,86.2).closePath();
	this.shape_4.setTransform(3.1,28.9,0.354,0.354);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,1.4).curveTo(-2.5,0.7,-2.6,-0.4).curveTo(-2.7,-1.2,-2.3,-1.9).curveTo(-2.1,-1.2,-1.6,-0.8).curveTo(-0.8,-0.2,0.3,-0.3).curveTo(1.3,-0.4,1.9,-1.2).lineTo(2.3,-1.9).curveTo(2.5,-1.5,2.6,-1).curveTo(2.7,0.1,2,0.9).curveTo(1.3,1.8,0.3,1.9).lineTo(0,1.9).curveTo(-0.8,1.9,-1.6,1.4).closePath();
	this.shape_5.setTransform(3.7,-42.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,1.8).curveTo(-2.5,1,-2.5,-0).curveTo(-2.5,-1,-1.8,-1.7).curveTo(-1,-2.5,0,-2.5).curveTo(1.1,-2.5,1.8,-1.7).curveTo(2.5,-1,2.5,-0).curveTo(2.5,1,1.8,1.8).curveTo(1.1,2.5,0,2.5).curveTo(-1,2.5,-1.8,1.8).closePath();
	this.shape_6.setTransform(6.9,-48,0.53,0.53);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,1.8).curveTo(-2.5,1,-2.5,0).curveTo(-2.5,-1,-1.8,-1.8).curveTo(-1,-2.5,0,-2.5).curveTo(1,-2.5,1.7,-1.8).curveTo(2.5,-1,2.5,0).curveTo(2.5,1,1.7,1.8).curveTo(1,2.5,0,2.5).curveTo(-1,2.5,-1.8,1.8).closePath();
	this.shape_7.setTransform(0.1,-48,0.53,0.53);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-18.1,1.4).curveTo(-18.6,1.4,-19,1).curveTo(-19.4,0.6,-19.4,0).curveTo(-19.4,-0.6,-19,-1).curveTo(-18.6,-1.4,-18.1,-1.4).lineTo(18,-1.4).curveTo(18.6,-1.4,19,-1).curveTo(19.4,-0.6,19.4,0).curveTo(19.4,0.6,19,1).curveTo(18.6,1.4,18,1.4).closePath();
	this.shape_8.setTransform(3.7,-52.8,0.485,0.485);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-18.4,10.1).curveTo(-17,6.3,-17,4.8).curveTo(-17,-1.4,-12,-5.7).curveTo(-7,-10.1,0.1,-10.1).curveTo(7.2,-10.1,12.2,-5.7).curveTo(17.2,-1.4,17.2,4.8).curveTo(17.2,6,18.3,9.6).lineTo(18.4,10.1).closePath();
	this.shape_9.setTransform(3.7,-57.7,0.485,0.485);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-11.6,-3.4).curveTo(-6.7,-8.3,0.1,-8.3).curveTo(5.6,-8.3,10,-5).lineTo(11.1,-4.1).lineTo(13.1,-2.1).lineTo(13.2,-1.9).lineTo(13.9,-1).lineTo(14.7,0.3).lineTo(15.9,2.9).lineTo(16.7,5.8).curveTo(14.5,4.7,14,3.9).curveTo(13.2,2.6,11.8,2.3).curveTo(10.4,1.8,9.3,2.6).lineTo(8.4,3.1).lineTo(7.7,3.3).lineTo(7.6,3.3).lineTo(6.7,3.5).lineTo(5.2,3.5).lineTo(5,3.5).lineTo(4.3,3.4).lineTo(4,3.3).lineTo(3.6,3.3).lineTo(2.8,3.1).lineTo(2.7,3).lineTo(2.3,2.9).lineTo(2.1,2.8).lineTo(0.6,2.1).curveTo(-1.6,0.8,-3.2,-1).curveTo(-4.2,-2,-5.6,-2).curveTo(-7.1,-2,-8.1,-1).lineTo(-11.1,1.5).curveTo(-12.9,3,-13.9,4.2).curveTo(-14.5,4.8,-15.3,6.2).curveTo(-16.2,7.7,-16.7,8.3).curveTo(-16.5,1.3,-11.6,-3.4).closePath();
	this.shape_10.setTransform(3.3,-53.2,0.53,0.53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#666666").beginStroke().moveTo(-0.2,14.8).curveTo(-5.9,14.8,-10.4,11.3).curveTo(-14.8,7.8,-16.4,2.4).curveTo(-16.7,2.6,-16.9,2.6).curveTo(-17.7,2.6,-18.2,1.3).curveTo(-18.8,-0,-18.7,-1.9).curveTo(-18.8,-3.8,-18.2,-5.1).curveTo(-17.7,-6.5,-16.9,-6.5).lineTo(-16.6,-6.4).curveTo(-15.3,-12.2,-10.7,-16).curveTo(-6.2,-19.8,-0.2,-19.8).lineTo(1.2,-19.8).curveTo(3.7,-19.5,5.9,-18.6).lineTo(7.4,-18).lineTo(7.5,-18).lineTo(8.1,-17.6).lineTo(8.2,-17.6).lineTo(8.8,-17.2).lineTo(8.8,-17.1).lineTo(9.4,-16.7).lineTo(9.5,-16.7).lineTo(10.1,-16.2).lineTo(11.9,-14.6).lineTo(12,-14.5).lineTo(12.4,-14).lineTo(12.5,-13.9).lineTo(13.6,-12.6).lineTo(13.8,-12.1).lineTo(14,-11.9).lineTo(14.7,-10.7).lineTo(14.8,-10.4).lineTo(15.4,-9.2).lineTo(15.5,-8.8).lineTo(15.9,-7.6).lineTo(16.3,-6.1).curveTo(16.6,-6.5,16.9,-6.5).curveTo(17.7,-6.5,18.3,-5.1).curveTo(18.7,-3.8,18.7,-1.9).curveTo(18.7,-0,18.3,1.3).curveTo(17.7,2.6,16.9,2.6).curveTo(16.5,2.6,16.1,2).lineTo(15.7,3.4).lineTo(14.5,6.2).lineTo(13,8.3).lineTo(12.5,8.9).lineTo(12.4,9).lineTo(11.4,10.1).lineTo(11.3,10.2).lineTo(10.8,10.7).lineTo(10.7,10.7).lineTo(10.2,11.2).lineTo(10.1,11.2).lineTo(9.5,11.7).lineTo(9.4,11.7).lineTo(8.8,12.1).lineTo(8.8,12.2).lineTo(8.2,12.6).lineTo(8.1,12.6).lineTo(7.5,13).lineTo(7.4,13).lineTo(5.9,13.7).curveTo(3.8,14.5,1.2,14.8).curveTo(0.8,14.8,0.4,19.8).closePath();
	this.shape_11.setTransform(3.5,-47.1,0.53,0.53);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#666666").beginStroke().moveTo(-6,6.1).lineTo(-6,-6.1).lineTo(6,-6.1).lineTo(6,6.1).closePath();
	this.shape_12.setTransform(3.1,-39.4,0.53,0.935);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(-0.4,7.6).curveTo(-3.5,7.5,-5.6,5.1).curveTo(-7.8,2.8,-7.6,-0.4).curveTo(-7.5,-3.5,-5.1,-5.6).curveTo(-2.8,-7.8,0.4,-7.6).curveTo(3.5,-7.5,5.7,-5.1).curveTo(7.8,-2.8,7.6,0.4).curveTo(7.5,3.6,5.1,5.6).curveTo(3,7.6,0.2,7.6).lineTo(-0.4,7.6).closePath();
	this.shape_13.setTransform(-17.5,-22.7,0.354,0.354);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-23.1,12.7).lineTo(8.5,-24.4).lineTo(23.1,-8.9).lineTo(-12,24.4).closePath();
	this.shape_14.setTransform(-12.1,-27.6,0.354,0.354);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000000").beginStroke().moveTo(-7.3,28.5).lineTo(-7.9,-29).lineTo(7.9,-28.2).lineTo(5,29).closePath();
	this.shape_15.setTransform(-17.4,-12.5,0.354,0.354);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(1,5.5).curveTo(0.3,5.4,-0.2,4.9).curveTo(-0.7,4.3,-0.7,3.6).curveTo(-0.5,1.6,-1.4,-0.7).lineTo(-2.1,-2).lineTo(-2.4,-2.5).curveTo(-3,-3,-3,-3.7).curveTo(-3.1,-4.4,-2.6,-4.9).curveTo(-2.1,-5.5,-1.3,-5.5).curveTo(-0.5,-5.6,0,-5.1).curveTo(0.7,-4.6,1.7,-2.4).curveTo(3.2,0.7,3,3.9).curveTo(2.9,4.6,2.4,5.1).curveTo(1.9,5.5,1.3,5.5).lineTo(1,5.5).closePath();
	this.shape_16.setTransform(-16,0,0.354,0.354);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000000").beginStroke().moveTo(-2,9).curveTo(-4.4,8.9,-5.2,8.2).curveTo(-6.1,7.4,-6,5.3).lineTo(-5,-9.1).lineTo(6,-8.4).lineTo(5.1,6).curveTo(4.8,9.1,-0.5,9.1).lineTo(-2,9).closePath();
	this.shape_17.setTransform(-17.9,0.1,0.354,0.354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-62.6,40.6,125.3);


(lib.llanta = function(mode,startPosition,loop) {
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


(lib.handss = function(mode,startPosition,loop) {
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


(lib.volteo95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#28292B").beginStroke().moveTo(-388.7,2.4).lineTo(-388.7,-2.4).lineTo(388.7,-2.4).lineTo(388.7,2.4).closePath();
	this.shape.setTransform(388.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,777.4,4.8);


(lib.volteo94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-524.4,2.1).lineTo(-524.4,-2.1).lineTo(524.3,-2.1).lineTo(524.3,2.1).closePath();
	this.shape.setTransform(524.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1048.7,4.3);


(lib.volteo93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#28292B").beginStroke().moveTo(-524.9,2.8).lineTo(-524.9,-2.8).lineTo(524.9,-2.8).lineTo(524.9,2.8).closePath();
	this.shape.setTransform(524.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1049.9,5.6);


(lib.volteo92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-91,1.4).lineTo(-91,-1.4).lineTo(90.9,-1.4).lineTo(90.9,1.4).closePath();
	this.shape.setTransform(91,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.9,2.9);


(lib.volteo91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-3.8,2.4).lineTo(-3.8,-2.4).lineTo(3.7,-2.4).lineTo(3.7,2.4).closePath();
	this.shape.setTransform(3.8,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,4.8);


(lib.volteo90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-7.7,2.4).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,2.4).closePath();
	this.shape.setTransform(7.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,4.8);


(lib.volteo86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-3.9,2.4).lineTo(-3.9,-2.4).lineTo(3.9,-2.4).lineTo(3.9,2.4).closePath();
	this.shape.setTransform(3.9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,4.8);


(lib.volteo84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-2,2.4).lineTo(-2,-2.4).lineTo(2.1,-2.4).lineTo(2.1,2.4).closePath();
	this.shape.setTransform(2.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.1,4.8);


(lib.volteo83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-4.5,2.4).lineTo(-4.5,-2.4).lineTo(4.5,-2.4).lineTo(4.5,2.4).closePath();
	this.shape.setTransform(4.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,4.8);


(lib.volteo82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-91,1.4).lineTo(-91,-1.4).lineTo(90.9,-1.4).lineTo(90.9,1.4).closePath();
	this.shape.setTransform(91,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.9,2.9);


(lib.volteo79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-3.8,2.4).lineTo(-3.8,-2.4).lineTo(3.8,-2.4).lineTo(3.8,2.4).closePath();
	this.shape.setTransform(3.8,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,4.8);


(lib.volteo78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-82.7,1.5).lineTo(-82.7,-1.5).lineTo(82.7,-1.5).lineTo(82.7,1.5).closePath();
	this.shape.setTransform(82.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.3,3);


(lib.volteo75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-82.7,1.5).lineTo(-82.7,-1.5).lineTo(82.7,-1.5).lineTo(82.7,1.5).closePath();
	this.shape.setTransform(82.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.3,3);


(lib.volteo74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-7.7,2.4).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,2.4).closePath();
	this.shape.setTransform(7.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,4.8);


(lib.volteo73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-3.9,2.4).lineTo(-3.9,-2.4).lineTo(3.9,-2.4).lineTo(3.9,2.4).closePath();
	this.shape.setTransform(3.9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,4.9);


(lib.volteo72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-2.1,2.4).lineTo(-2.1,-2.4).lineTo(2.1,-2.4).lineTo(2.1,2.4).closePath();
	this.shape.setTransform(2.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.2,4.8);


(lib.volteo71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,0.9).lineTo(-19.4,-0.8).lineTo(19.4,-0.8).lineTo(19.4,0.9).closePath();
	this.shape.setTransform(19.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,1.7);


(lib.volteo70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,0.8).lineTo(-19.4,-0.8).lineTo(19.4,-0.8).lineTo(19.4,0.8).closePath();
	this.shape.setTransform(19.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,1.7);


(lib.volteo69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-4.5,2.4).lineTo(-4.5,-2.4).lineTo(4.5,-2.4).lineTo(4.5,2.4).closePath();
	this.shape.setTransform(4.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,4.8);


(lib.volteo68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,0.9).lineTo(-19.4,-0.8).lineTo(19.4,-0.8).lineTo(19.4,0.9).closePath();
	this.shape.setTransform(19.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,1.7);


(lib.volteo67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,0.8).lineTo(-19.4,-0.8).lineTo(19.4,-0.8).lineTo(19.4,0.8).closePath();
	this.shape.setTransform(19.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,1.7);


(lib.volteo66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-6.7,2.4).lineTo(-6.7,-2.4).lineTo(6.7,-2.4).lineTo(6.7,2.4).closePath();
	this.shape.setTransform(6.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,4.8);


(lib.volteo65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-4.2,2.4).lineTo(-4.2,-2.4).lineTo(4.1,-2.4).lineTo(4.1,2.4).closePath();
	this.shape.setTransform(4.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,4.8);


(lib.volteo64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-1.7,2.4).lineTo(-1.7,-2.4).lineTo(1.7,-2.4).lineTo(1.7,2.4).closePath();
	this.shape.setTransform(1.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.4,4.8);


(lib.volteo63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-6.7,2.4).lineTo(-6.7,-2.4).lineTo(6.7,-2.4).lineTo(6.7,2.4).closePath();
	this.shape.setTransform(6.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,4.8);


(lib.volteo57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-4.2,2.4).lineTo(-4.2,-2.4).lineTo(4.2,-2.4).lineTo(4.2,2.4).closePath();
	this.shape.setTransform(4.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,4.8);


(lib.volteo56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-1.7,2.4).lineTo(-1.7,-2.4).lineTo(1.7,-2.4).lineTo(1.7,2.4).closePath();
	this.shape.setTransform(1.7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.4,4.8);


(lib.volteo55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.9);


(lib.volteo54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.9);


(lib.volteo50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.9);


(lib.volteo49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9,2.4).lineTo(-9,-2.4).lineTo(9,-2.4).lineTo(9,2.4).closePath();
	this.shape.setTransform(9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,4.9);


(lib.volteo48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-4.2,2.4).lineTo(-4.2,-2.4).lineTo(4.1,-2.4).lineTo(4.1,2.4).closePath();
	this.shape.setTransform(4.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.3,4.9);


(lib.volteo46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-2.6,2.4).lineTo(-2.6,-2.4).lineTo(2.6,-2.4).lineTo(2.6,2.4).closePath();
	this.shape.setTransform(2.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.3,4.8);


(lib.volteo44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-7,2.4).lineTo(-7,-2.4).lineTo(6.9,-2.4).lineTo(6.9,2.4).closePath();
	this.shape.setTransform(7,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,4.8);


(lib.volteo43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-8.9,2.4).lineTo(-8.9,-2.4).lineTo(8.9,-2.4).lineTo(8.9,2.4).closePath();
	this.shape.setTransform(8.9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,4.8);


(lib.volteo42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-7.2,2.4).lineTo(-7.2,-2.4).lineTo(7.2,-2.4).lineTo(7.2,2.4).closePath();
	this.shape.setTransform(7.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,4.8);


(lib.volteo41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,0.9).lineTo(-19.4,-0.8).lineTo(19.4,-0.8).lineTo(19.4,0.9).closePath();
	this.shape.setTransform(19.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,1.7);


(lib.volteo37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9,2.4).lineTo(-9,-2.4).lineTo(9,-2.4).lineTo(9,2.4).closePath();
	this.shape.setTransform(9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,4.8);


(lib.volteo36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.9);


(lib.volteo35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.9);


(lib.volteo34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-2.6,2.4).lineTo(-2.6,-2.4).lineTo(2.6,-2.4).lineTo(2.6,2.4).closePath();
	this.shape.setTransform(2.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.3,4.8);


(lib.volteo33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-6.9,2.4).lineTo(-6.9,-2.4).lineTo(6.9,-2.4).lineTo(6.9,2.4).closePath();
	this.shape.setTransform(6.9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,4.9);


(lib.volteo32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-8.9,2.4).lineTo(-8.9,-2.4).lineTo(9,-2.4).lineTo(9,2.4).closePath();
	this.shape.setTransform(9,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,4.8);


(lib.volteo31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-7.2,2.4).lineTo(-7.2,-2.4).lineTo(7.2,-2.4).lineTo(7.2,2.4).closePath();
	this.shape.setTransform(7.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,4.8);


(lib.volteo30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.2,-2.4).lineTo(9.2,2.4).closePath();
	this.shape.setTransform(9.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteo27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,0.8).lineTo(-19.4,-0.8).lineTo(19.4,-0.8).lineTo(19.4,0.8).closePath();
	this.shape.setTransform(19.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.9,1.7);


(lib.volteo26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.9);


(lib.volteo25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.9);


(lib.volteo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape.setTransform(655.8,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_1.setTransform(600.8,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_2.setTransform(544.2,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_3.setTransform(487.6,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_4.setTransform(431.8,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_5.setTransform(375.2,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_6.setTransform(318.6,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_7.setTransform(273.3,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_8.setTransform(216.7,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_9.setTransform(160.2,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_10.setTransform(115.8,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_11.setTransform(59.2,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_12.setTransform(2.6,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658.4,25.6);


(lib.volteo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#28292B").beginStroke().moveTo(-27.9,73.2).lineTo(22.4,-75).lineTo(27.9,-73.2).lineTo(-22.3,75.1).closePath();
	this.shape.setTransform(209.1,75.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#28292B").beginStroke().moveTo(-2.4,75.5).lineTo(-2.4,-75.5).lineTo(2.4,-75.5).lineTo(2.4,75.5).closePath();
	this.shape_1.setTransform(233.1,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#28292B").beginStroke().moveTo(-2,45.6).curveTo(-2.8,44.8,-2.8,43.6).lineTo(-2.8,-43.7).curveTo(-2.8,-44.8,-2,-45.6).curveTo(-1.2,-46.5,-0,-46.5).curveTo(1.1,-46.5,2,-45.6).curveTo(2.8,-44.8,2.8,-43.7).lineTo(2.8,43.6).curveTo(2.8,44.8,2,45.6).curveTo(1.1,46.5,-0,46.4).curveTo(-1.2,46.5,-2,45.6).closePath();
	this.shape_2.setTransform(167.8,106.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#28292B").beginStroke().moveTo(-2,43.5).curveTo(-2.8,42.6,-2.8,41.5).lineTo(-2.8,-41.5).curveTo(-2.8,-42.6,-2,-43.5).curveTo(-1.2,-44.3,-0,-44.3).curveTo(1.1,-44.3,2,-43.5).curveTo(2.8,-42.6,2.8,-41.5).lineTo(2.8,41.5).curveTo(2.8,42.6,2,43.5).curveTo(1.1,44.3,-0,44.3).curveTo(-1.2,44.3,-2,43.5).closePath();
	this.shape_3.setTransform(126.7,108.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#28292B").beginStroke().moveTo(-2,46).curveTo(-2.8,45.2,-2.8,44).lineTo(-2.8,-44.1).curveTo(-2.8,-45.2,-2,-46.1).curveTo(-1.2,-46.9,-0,-46.9).curveTo(1.1,-46.9,2,-46.1).curveTo(2.8,-45.2,2.8,-44.1).lineTo(2.8,44).curveTo(2.8,45.2,2,46).curveTo(1.1,46.9,-0,46.8).curveTo(-1.2,46.9,-2,46).closePath();
	this.shape_4.setTransform(85.6,106.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#28292B").beginStroke().moveTo(-46.2,25.9).curveTo(-65,19.5,-81,9.5).curveTo(-97.5,-0.7,-107.6,-12.2).curveTo(-117.8,-23.8,-117.8,-32.3).curveTo(-117.8,-33.5,-117,-34.3).curveTo(-116.2,-35.1,-115,-35.1).curveTo(-113.9,-35.1,-113,-34.3).curveTo(-112.2,-33.5,-112.2,-32.3).curveTo(-112.2,-29.3,-110,-25).curveTo(-107.7,-20.7,-103.5,-15.9).curveTo(-94,-5.1,-78.1,4.9).curveTo(-62.6,14.5,-44.4,20.6).curveTo(-18.3,29.5,8.9,29.5).curveTo(57.1,29.5,86,10.2).curveTo(98.8,1.6,105.6,-9.7).curveTo(112.2,-20.6,112.2,-32.3).curveTo(112.2,-33.5,113,-34.3).curveTo(113.9,-35.1,115,-35.1).curveTo(116.2,-35.1,117,-34.3).curveTo(117.8,-33.5,117.8,-32.3).curveTo(117.8,-19.6,110.8,-7.7).curveTo(103.6,4.6,90.1,13.9).curveTo(59.6,35.1,8.9,35.1).curveTo(-19.2,35.1,-46.2,25.9).closePath();
	this.shape_5.setTransform(117.8,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,153.2);


(lib.volteo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#28292B").beginStroke().moveTo(-119.3,87.2).lineTo(-119.3,81.6).lineTo(-86,81.6).lineTo(-86,66.8).lineTo(-119.3,66.8).lineTo(-119.3,62).lineTo(-33.3,62).lineTo(-33.3,-22.7).curveTo(-58.5,-29.5,-79.5,-42.5).curveTo(-96,-52.8,-106,-64.3).curveTo(-116.2,-75.9,-116.2,-84.4).curveTo(-116.2,-85.6,-115.4,-86.4).curveTo(-114.6,-87.2,-113.4,-87.2).curveTo(-112.3,-87.2,-111.4,-86.4).curveTo(-110.7,-85.6,-110.6,-84.4).curveTo(-110.6,-81.3,-108.4,-77.1).curveTo(-106.1,-72.8,-102,-68).curveTo(-92.5,-57.2,-76.5,-47.2).curveTo(-61.1,-37.6,-42.9,-31.4).curveTo(-16.7,-22.5,10.5,-22.5).curveTo(58.6,-22.5,87.6,-41.9).curveTo(100.4,-50.5,107.2,-61.8).curveTo(113.8,-72.7,113.8,-84.4).curveTo(113.8,-85.6,114.6,-86.4).curveTo(115.4,-87.2,116.5,-87.2).curveTo(117.7,-87.2,118.5,-86.4).curveTo(119.4,-85.6,119.3,-84.4).curveTo(119.3,-64.2,103,-47.5).curveTo(85.3,-29.6,54.4,-21.9).lineTo(54.4,62).lineTo(114.9,62).lineTo(114.9,66.8).lineTo(32.4,66.8).lineTo(32.4,81.6).lineTo(110.7,81.6).lineTo(110.7,87.2).closePath().moveTo(-24.2,81.6).lineTo(27.3,81.6).lineTo(27.3,66.8).lineTo(-24.2,66.8).closePath().moveTo(-80.8,81.6).lineTo(-29.3,81.6).lineTo(-29.3,66.8).lineTo(-80.8,66.8).closePath().moveTo(13.3,-17).lineTo(13.3,62).lineTo(48.9,62).lineTo(48.9,-20.7).curveTo(31.9,-17.2,13.3,-17).closePath().moveTo(-27.8,62).lineTo(7.7,62).lineTo(7.7,-17).curveTo(-10.5,-17.3,-27.8,-21.4).closePath();
	this.shape.setTransform(119.4,87.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.7,174.4);


(lib.volteo_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-9.2,2.4).lineTo(-9.2,-2.4).lineTo(9.3,-2.4).lineTo(9.3,2.4).closePath();
	this.shape.setTransform(9.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,4.8);


(lib.volteoconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.handss();
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


(lib.volteocamion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.1,1.8).lineTo(-5.1,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.1,-4.5,-2.2,-4).lineTo(-2.2,0.7).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.5,2.5,2,1.9).curveTo(2.2,1.5,2.2,0.7).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.4,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4.1,4.4,2.1,4.5).closePath();
	this.shape.setTransform(-266.4,87.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.4,3.8).curveTo(-4.8,3.5,-5.1,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.2,-4.2).curveTo(-5.1,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.5,1.9,1.9).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4,4.4,2,4.5).closePath();
	this.shape_1.setTransform(-290.6,87.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.5).curveTo(-5.5,2.1,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).curveTo(-2.8,-0.3,2,-2).curveTo(2.1,-2,2.1,-2).curveTo(2.1,-2,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.2,2.2,-2.2).curveTo(2.2,-2.3,2.2,-2.3).curveTo(2.2,-2.3,2.1,-2.4).curveTo(2.1,-2.4,2,-2.4).curveTo(1.9,-2.4,1.8,-2.5).curveTo(1.4,-2.6,-1.7,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.5,-5.2,-3).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).curveTo(5.6,-0.8,4.1,-0.2).lineTo(-1.6,1.8).curveTo(-2.4,2.1,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.8).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_2.setTransform(-278.3,87.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.5).lineTo(1.7,2.5).curveTo(2.1,2.5,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.4,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.4).curveTo(-0.4,-4.5,4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.4).lineTo(1.7,-2.5).curveTo(-1.4,-2.5,-1.9,-2.4).curveTo(-2,-2.4,-2.1,-2.4).curveTo(-2.1,-2.4,-2.2,-2.4).curveTo(-2.2,-2.3,-2.3,-2.3).curveTo(-2.3,-2.2,-2.3,-2.2).curveTo(-2.3,-2.2,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2.1).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-2,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.6).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_3.setTransform(-302.8,87.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.4,1.4,-4.4).curveTo(1.4,-4.3,1.4,-4.3).curveTo(1.5,-4.2,1.5,-4.2).curveTo(1.5,-4.1,1.5,-4).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_4.setTransform(-311.5,87.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.7,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_5.setTransform(-262.2,129.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_6.setTransform(-80.5,129.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#999999").beginStroke().moveTo(-22.5,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).lineTo(-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3.1,-4.6).curveTo(20.8,-6.7,22.6,-6.8).lineTo(22.7,-4).curveTo(19,-4.5,16.4,-4.3).lineTo(7.4,-3.2).lineTo(-3.9,-1.8).curveTo(-8.8,-1.3,-18.5,-0.6).curveTo(-19.9,0.6,-20.2,1.1).curveTo(-20.7,1.7,-20.7,3.1).lineTo(-20.9,5.9).lineTo(-22.5,6.8).curveTo(-22.8,3.1,-22.5,1.8).closePath();
	this.shape_7.setTransform(-294.3,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.7).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.4,1.9).closePath();
	this.shape_8.setTransform(-268.1,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.2,13.6).lineTo(-1.2,10.8).curveTo(-1.2,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.3,-14.1,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_9.setTransform(-314.8,57.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_10.setTransform(-314.7,79);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0,0.5).lineTo(-0.8,0.5).curveTo(-2.1,0.5,-3,0.3).closePath();
	this.shape_11.setTransform(-314.9,71.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).lineTo(-3.1,-5).lineTo(2.4,-6.7).curveTo(2.9,-6.9,3.3,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,3.9,3.2,4.5).curveTo(2.2,5.1,-1.4,6.5).curveTo(-2,6.8,-2.6,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_12.setTransform(-314.9,74.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.6,-12.9,0.9,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.7,6.3,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_13.setTransform(-310.6,30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.7,12.2,-5.7,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-7.1,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_14.setTransform(-311.8,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.7,-2.6,-1.4,-2.9).curveTo(-1.1,-3.1,1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.4,-2.1).lineTo(-0.8,-1.2).lineTo(-0.7,3.2).lineTo(-1,4.2).lineTo(-0.4,4.4).lineTo(-0.3,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_15.setTransform(-333.3,56.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.1,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.7,-1.8,13).lineTo(-3.5,20.3).curveTo(-3.8,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_16.setTransform(-323.6,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.2,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(3,-16.1,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_17.setTransform(-333.1,94.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.4,1.8,0.6,1.5).closePath();
	this.shape_18.setTransform(-332.6,112.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.8,0.4,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_19.setTransform(-331.6,124.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.3,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_20.setTransform(-327.8,128.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.8,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_21.setTransform(-327,120.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.9).curveTo(-3.3,-6.6,-1.6,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.3,-6.5).curveTo(5.9,-6.2,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.4,-6.8,-8.6).lineTo(-5.9,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.9).lineTo(-4.4,-6.9).closePath();
	this.shape_22.setTransform(-328.5,118.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.2,-1.5,1.9).curveTo(-2,-1.3,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_23.setTransform(-335,118.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,4,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_24.setTransform(-253.1,74.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.3).curveTo(-3.9,8.3,-4.4,7.7).curveTo(-5,7.1,-5,6.4).curveTo(-5.4,2.2,-5.2,-2.4).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.4,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.5).curveTo(5.4,3.8,5.1,6.4).curveTo(5.1,7.1,4.6,7.7).curveTo(4,8.3,3.3,8.3).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.3).closePath();
	this.shape_25.setTransform(-253.2,74.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-50.5,62).curveTo(-50.9,61.8,-51.4,61.2).curveTo(-52.5,60.2,-53,58.5).curveTo(-53.7,56.4,-54,53.3).lineTo(-54.5,48).curveTo(-54.7,44.9,-53.8,42.1).lineTo(-52.9,39.9).curveTo(-53.7,23.7,-53.7,18.3).curveTo(-53.7,14.9,-53.2,6.7).lineTo(-52.8,-0.9).lineTo(-48.6,-7.9).curveTo(-47.6,-12.9,-44.1,-27.3).curveTo(-41.8,-36.4,-37.6,-48.8).curveTo(-34.3,-58.5,-33.4,-60.5).curveTo(-32.9,-61.4,-32.4,-61.8).curveTo(-31.7,-62.2,-30.1,-62.4).curveTo(-22.9,-63.3,5,-64.5).lineTo(31.4,-65.5).curveTo(34.3,-65.6,35.7,-65.3).curveTo(37.9,-64.9,39.9,-63.5).curveTo(42.3,-61.8,45,-59.2).curveTo(46.2,-58.1,47.7,-56.1).curveTo(49,-54.2,49.7,-52.7).curveTo(51.2,-49.5,52.4,-44.6).curveTo(54.5,-36.8,54.5,-29.7).lineTo(54.5,-12.7).curveTo(54.5,-9.9,53.8,-8.8).curveTo(50.5,-2.2,50.5,-0.1).lineTo(50.5,6.5).curveTo(50.5,8,50,8.9).curveTo(49.5,9.7,49.5,10.5).lineTo(49.5,25.4).lineTo(39.6,25.7).lineTo(36.5,26).lineTo(36.5,28.3).curveTo(24.9,28.5,20,29.1).curveTo(13,30,10.1,31.3).curveTo(3.2,34.4,-1.8,43).curveTo(-4.1,46.9,-7.2,53.6).curveTo(-8.2,55,-9.5,55).lineTo(-17.7,55).lineTo(-19.2,54.6).lineTo(-21.9,55).lineTo(-38.5,55).lineTo(-38.5,61.9).curveTo(-38.5,63.2,-39.5,64.3).curveTo(-40.7,65.5,-42.8,65.5).curveTo(-48.9,65.5,-50.5,62).closePath().moveTo(9.3,-55.4).curveTo(-10.1,-54.6,-16.5,-53.6).curveTo(-21.9,-52.8,-23.5,-51.9).curveTo(-24.7,-51.1,-26,-48.5).curveTo(-27,-46.5,-29.3,-36.4).curveTo(-31.6,-26.4,-32,-22.1).curveTo(-32.3,-18.1,-32.7,-10.8).curveTo(-33,-3.9,-33,-1.5).lineTo(-32.9,-0.4).lineTo(-31.7,-0.7).lineTo(8.8,-16.4).curveTo(13.6,-18.1,26.1,-20.3).lineTo(28.6,-20.8).curveTo(29.8,-21,30.2,-21.4).curveTo(30.4,-21.7,30.4,-22.3).lineTo(31,-51.8).curveTo(31.1,-54.1,30.2,-55).curveTo(29.5,-55.8,27.5,-56).curveTo(19,-55.8,9.3,-55.4).closePath();
	this.shape_26.setTransform(-283,65.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#7E7E7E").beginStroke().moveTo(-78.6,30.1).lineTo(-79.1,28).lineTo(-135,29.3).lineTo(-147.8,24.7).lineTo(-153.6,20).lineTo(-157.3,-3.8).lineTo(-135.9,-30).lineTo(-89.2,-28.5).lineTo(-78.2,-16).lineTo(-77.9,-8.8).lineTo(-79.8,-6.8).lineTo(-75.7,-0.5).lineTo(-74.3,-4.7).lineTo(-68.2,-4.7).lineTo(-67.6,-19.2).lineTo(151.6,-23.1).lineTo(157.3,15.8).curveTo(156,16.7,154.3,17.6).curveTo(150.8,19.5,148.3,19.6).curveTo(145.8,19.6,144.8,18).lineTo(144.4,16.4).lineTo(142.7,15.9).lineTo(134.5,7.8).lineTo(123.6,7.9).curveTo(122.9,9.1,121.7,10.2).curveTo(119.2,12.6,116.4,12.5).curveTo(113.6,12.5,111.8,10.5).lineTo(110.6,8.3).curveTo(110.1,8.3,107.2,9.6).lineTo(104.2,10.9).lineTo(104,26.7).lineTo(102.9,27.2).lineTo(102.9,11.5).lineTo(96.8,14.2).lineTo(45.4,28.4).curveTo(38.5,28.2,36.1,28).curveTo(34.7,27.8,-7.4,27.3).lineTo(-3.3,20.7).lineTo(-26.8,19).lineTo(-50.3,13.5).lineTo(-58.3,13.3).lineTo(-62.9,15).lineTo(-62.9,16.8).curveTo(-63.1,18.8,-63.3,19.7).curveTo(-63.8,22.1,-65.8,22.4).lineTo(-72.2,23.1).lineTo(-72.2,30.1).closePath();
	this.shape_27.setTransform(-157.3,108.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.3,4.7,-186.3,-0).curveTo(-186.3,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.7,-8).curveTo(186.4,-4.7,186.4,-0).curveTo(186.4,4.7,131.7,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_28.setTransform(-167.2,155.2,0.903,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Capa 3
	this.instance = new lib.volteoconductor();
	this.instance.parent = this;
	this.instance.setTransform(-282.4,47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.5,0,338.7,166.5);


(lib.volteo24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo81();
	this.instance.parent = this;
	this.instance.setTransform(29.9,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.8,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo59();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.2,11.1);


(lib.volteo23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo25();
	this.instance.parent = this;
	this.instance.setTransform(29.9,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.8,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo50();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.2,11.1);


(lib.volteo22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo82();
	this.instance.parent = this;
	this.instance.setTransform(29.9,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.7,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo60();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.2,11.1);


(lib.volteo21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo26();
	this.instance.parent = this;
	this.instance.setTransform(29.9,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.8,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo51();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.2,11.1);


(lib.volteo20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo83();
	this.instance.parent = this;
	this.instance.setTransform(25.2,2.4,1,1,0,0,0,4.5,2.4);

	this.instance_1 = new lib.volteo41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.8,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.8,11.1);


(lib.volteo19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo69();
	this.instance.parent = this;
	this.instance.setTransform(25.2,2.4,1,1,0,0,0,4.5,2.4);

	this.instance_1 = new lib.volteo30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.8,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.8,11.1);


(lib.volteo18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo84();
	this.instance.parent = this;
	this.instance.setTransform(22.7,2.4,1,1,0,0,0,2,2.4);

	this.instance_1 = new lib.volteo42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.7,8.7,1,1,0,0,0,7.2,2.4);

	this.instance_2 = new lib.volteo62();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,11.1);


(lib.volteo17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo72();
	this.instance.parent = this;
	this.instance.setTransform(22.7,2.4,1,1,0,0,0,2,2.4);

	this.instance_1 = new lib.volteo31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.8,8.7,1,1,0,0,0,7.2,2.4);

	this.instance_2 = new lib.volteo54();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,11.1);


(lib.volteo16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo85();
	this.instance.parent = this;
	this.instance.setTransform(24.6,2.4,1,1,0,0,0,3.9,2.4);

	this.instance_1 = new lib.volteo43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,8.7,1,1,0,0,0,8.9,2.4);

	this.instance_2 = new lib.volteo63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,11.1);


(lib.volteo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo73();
	this.instance.parent = this;
	this.instance.setTransform(24.6,2.4,1,1,0,0,0,3.9,2.4);

	this.instance_1 = new lib.volteo32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,8.7,1,1,0,0,0,9,2.4);

	this.instance_2 = new lib.volteo55();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,2.4,1,1,0,0,0,9.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,11.1);


(lib.volteo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo86();
	this.instance.parent = this;
	this.instance.setTransform(14.8,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,8.7,1,1,0,0,0,7,2.4);

	this.instance_2 = new lib.volteo64();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.7,2.4,1,1,0,0,0,1.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,11.1);


(lib.volteo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo_2();
	this.instance.parent = this;
	this.instance.setTransform(14.8,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.9,8.7,1,1,0,0,0,6.9,2.4);

	this.instance_2 = new lib.volteo56();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.7,2.4,1,1,0,0,0,1.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,11.1);


(lib.volteo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo87();
	this.instance.parent = this;
	this.instance.setTransform(7.7,2.4,1,1,0,0,0,7.7,2.4);

	this.instance_1 = new lib.volteo45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.6,8.7,1,1,0,0,0,2.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,11.1);


(lib.volteo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo74();
	this.instance.parent = this;
	this.instance.setTransform(7.7,2.4,1,1,0,0,0,7.7,2.4);

	this.instance_1 = new lib.volteo34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.6,8.7,1,1,0,0,0,2.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,11.1);


(lib.volteo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo88();
	this.instance.parent = this;
	this.instance.setTransform(19.8,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.6,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo65();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.2,2.4,1,1,0,0,0,4.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,11.1);


(lib.volteo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo77();
	this.instance.parent = this;
	this.instance.setTransform(19.8,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.6,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.2,2.4,1,1,0,0,0,4.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.1,11.1);


(lib.volteo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo89();
	this.instance.parent = this;
	this.instance.setTransform(9.6,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.2,2.4,1,1,0,0,0,4.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,11.1);


(lib.volteo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo90();
	this.instance.parent = this;
	this.instance.setTransform(24.8,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo66();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.7,2.4,1,1,0,0,0,6.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,11.1);


(lib.volteo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo78();
	this.instance.parent = this;
	this.instance.setTransform(24.8,2.4,1,1,0,0,0,9.2,2.4);

	this.instance_1 = new lib.volteo36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.6,8.7,1,1,0,0,0,9.2,2.4);

	this.instance_2 = new lib.volteo58();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.7,2.4,1,1,0,0,0,6.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,11.1);


(lib.volteo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo91();
	this.instance.parent = this;
	this.instance.setTransform(14.4,8.7,1,1,0,0,0,3.8,2.4);

	this.instance_1 = new lib.volteo49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,2.4,1,1,0,0,0,9,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,11.1);


(lib.volteo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.volteo79();
	this.instance.parent = this;
	this.instance.setTransform(14.3,8.7,1,1,0,0,0,3.8,2.4);

	this.instance_1 = new lib.volteo37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,2.4,1,1,0,0,0,9,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,11.1);


// stage content:
(lib.volteo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_125 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(125).call(this.frame_125).wait(1));

	// antebrazo
	this.instance = new lib.volteoantebrazo();
	this.instance.parent = this;
	this.instance.setTransform(463,387.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126));

	// brazo2
	this.instance_1 = new lib.volteobrazo2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(479.6,381.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({rotation:-45,x:471.1,y:377.2},7).to({rotation:0,x:479.6,y:381.3},8).wait(7).to({rotation:-45,x:471.1,y:377.2},9).to({rotation:0,x:479.6,y:381.3},8).wait(7).to({rotation:-45,x:471.1,y:377.2},6).to({rotation:0,x:479.6,y:381.3},8).wait(39));

	// mr-shadow
	this.instance_2 = new lib.mrshadow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(438.3,418.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(126));

	// llanta
	this.instance_3 = new lib.llanta();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1326.3,458.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({rotation:-360,x:567.3},28).wait(54).to({rotation:-1080,x:-99.7},42).wait(1));

	// llanta
	this.instance_4 = new lib.llanta();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1144.3,457.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({rotation:-360,x:385.3},28).wait(54).to({rotation:-1080,x:-281.7},42).wait(1));

	// volteo
	this.instance_5 = new lib.volteo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1291.3,375,1,1,0,0,0,-110.4,48.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:532.3},28).to({rotation:15,x:546.1,y:352.1},11).wait(14).to({rotation:0,x:532.3,y:375},8).wait(21).to({x:-134.7},42).wait(1));

	// volteo-camion
	this.instance_6 = new lib.volteocamion();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1237.7,406.1,1,1,0,0,0,-168.8,77.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:478.7},28).wait(54).to({x:-188.3},42).wait(1));

	// tab
	this.instance_7 = new lib.tabikitos();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1306.5,384.5,1,1,0,0,0,-83.4,26.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({x:547.5},28).to({regX:-83.3,rotation:15,x:558.4,y:365.2},11).to({x:730.9,y:434.2},9).to({rotation:0,x:765.4},5).wait(5).to({alpha:0},17).wait(50));

	// ta4
	this.instance_8 = new lib.ta4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(525.6,124,1,1,0,0,0,-223.9,5.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(68).to({_off:false},0).to({alpha:1},8).wait(50));

	// ta3
	this.instance_9 = new lib.ta3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(529.2,136.6,1,1,0,0,0,-241.1,5.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},0).to({alpha:1},8).wait(55));

	// ta2
	this.instance_10 = new lib.ta2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(525.6,150,1,1,0,0,0,-223.9,5.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(58).to({_off:false},0).to({alpha:1},8).wait(60));

	// ta1
	this.instance_11 = new lib.ta1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(529.2,162.6,1,1,0,0,0,-241.1,5.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({alpha:1},8).wait(64));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#454F58").beginStroke().moveTo(-2.7,2.7).curveTo(-3.8,1.6,-3.8,-0).curveTo(-3.8,-1.5,-2.7,-2.7).curveTo(-1.5,-3.8,0,-3.8).curveTo(1.6,-3.8,2.7,-2.7).curveTo(3.8,-1.5,3.8,-0).curveTo(3.8,1.6,2.7,2.7).curveTo(1.6,3.8,0,3.8).curveTo(-1.5,3.8,-2.7,2.7).closePath();
	this.shape.setTransform(191.3,170.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#454F58").beginStroke().moveTo(-1.7,8.5).lineTo(-1.7,-8.5).lineTo(1.7,-8.5).lineTo(1.7,8.5).closePath();
	this.shape_1.setTransform(191.2,178.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#454F58").beginStroke().moveTo(-6.6,2.2).lineTo(-6.6,-2.2).lineTo(6.6,-2.2).lineTo(6.6,2.2).closePath();
	this.shape_2.setTransform(191.2,189.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#454F58").beginStroke().moveTo(-2.7,2.7).curveTo(-3.8,1.6,-3.8,-0).curveTo(-3.8,-1.5,-2.7,-2.7).curveTo(-1.5,-3.8,0,-3.8).curveTo(1.6,-3.8,2.7,-2.7).curveTo(3.8,-1.5,3.8,-0).curveTo(3.8,1.6,2.7,2.7).curveTo(1.6,3.8,0,3.8).curveTo(-1.5,3.8,-2.7,2.7).closePath();
	this.shape_3.setTransform(12.8,170.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#454F58").beginStroke().moveTo(-1.7,8.5).lineTo(-1.7,-8.5).lineTo(1.7,-8.5).lineTo(1.7,8.5).closePath();
	this.shape_4.setTransform(12.8,178.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#454F58").beginStroke().moveTo(-6.6,2.2).lineTo(-6.6,-2.2).lineTo(6.6,-2.2).lineTo(6.6,2.2).closePath();
	this.shape_5.setTransform(12.8,189.4);

	this.instance_12 = new lib.volteo92();
	this.instance_12.parent = this;
	this.instance_12.setTransform(102.1,201.9,1,1,0,0,0,91,1.4);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.volteo4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(183.9,318.5,1,1,0,0,0,9,5.5);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.volteo6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(167.2,250.7,1,1,0,0,0,17.1,5.5);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.volteo7();
	this.instance_15.parent = this;
	this.instance_15.setTransform(90,318.5,1,1,0,0,0,9.4,5.5);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.volteo9();
	this.instance_16.parent = this;
	this.instance_16.setTransform(95.1,250.7,1,1,0,0,0,14.5,5.5);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.volteo11();
	this.instance_17.parent = this;
	this.instance_17.setTransform(18.8,317.8,1,1,0,0,0,7.7,5.5);
	this.instance_17.alpha = 0.5;

	this.instance_18 = new lib.volteo14();
	this.instance_18.parent = this;
	this.instance_18.setTransform(23.1,250.7,1,1,0,0,0,12,5.5);
	this.instance_18.alpha = 0.5;

	this.instance_19 = new lib.volteo16();
	this.instance_19.parent = this;
	this.instance_19.setTransform(178.8,213.2,1,1,0,0,0,14.2,5.5);
	this.instance_19.alpha = 0.5;

	this.instance_20 = new lib.volteo18();
	this.instance_20.parent = this;
	this.instance_20.setTransform(111.1,286.4,1,1,0,0,0,12.4,5.5);
	this.instance_20.alpha = 0.5;

	this.instance_21 = new lib.volteo20();
	this.instance_21.parent = this;
	this.instance_21.setTransform(39,286.4,1,1,0,0,0,14.9,5.5);
	this.instance_21.alpha = 0.5;

	this.instance_22 = new lib.volteo22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(109.7,213.2,1,1,0,0,0,19.6,5.5);
	this.instance_22.alpha = 0.5;

	this.instance_23 = new lib.volteo24();
	this.instance_23.parent = this;
	this.instance_23.setTransform(35.1,213.2,1,1,0,0,0,19.6,5.5);
	this.instance_23.alpha = 0.5;

	this.instance_24 = new lib.volteo38();
	this.instance_24.parent = this;
	this.instance_24.setTransform(157.5,181.9,1,1,0,0,0,19.4,0.8);
	this.instance_24.alpha = 0.5;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,2.8).lineTo(-19.4,-2.8).lineTo(19.4,-2.8).lineTo(19.4,2.8).closePath();
	this.shape_6.setTransform(157.5,179.9);

	this.instance_25 = new lib.volteo68();
	this.instance_25.parent = this;
	this.instance_25.setTransform(46.6,181.9,1,1,0,0,0,19.4,0.8);
	this.instance_25.alpha = 0.5;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,2.8).lineTo(-19.4,-2.8).lineTo(19.4,-2.8).lineTo(19.4,2.8).closePath();
	this.shape_7.setTransform(46.6,179.9);

	this.instance_26 = new lib.volteo71();
	this.instance_26.parent = this;
	this.instance_26.setTransform(102,181.9,1,1,0,0,0,19.4,0.8);
	this.instance_26.alpha = 0.5;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,2.8).lineTo(-19.4,-2.8).lineTo(19.4,-2.8).lineTo(19.4,2.8).closePath();
	this.shape_8.setTransform(102,179.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#C4C7C9").beginStroke().moveTo(48.1,67.9).lineTo(48.1,-35.6).curveTo(48.1,-41.2,44.2,-45.1).curveTo(40.2,-49,34.7,-49).curveTo(29.3,-49,25.4,-45.1).curveTo(21.4,-41.2,21.4,-35.6).lineTo(21.4,67.9).lineTo(-21.4,67.9).lineTo(-21.4,-35.6).curveTo(-21.5,-41.2,-25.4,-45.1).curveTo(-29.2,-49,-34.8,-49).curveTo(-40.3,-49,-44.1,-45.1).curveTo(-48,-41.2,-48.1,-35.6).lineTo(-48.1,67.9).lineTo(-90.9,67.9).lineTo(-90.9,-67.8).lineTo(91,-67.8).lineTo(91,67.9).closePath();
	this.shape_9.setTransform(102,268.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#7F858C").beginStroke().moveTo(13.3,13.8).curveTo(13.3,8.3,9.4,4.4).curveTo(5.5,0.5,-0,0.5).curveTo(-5.5,0.5,-9.5,4.4).curveTo(-13.4,8.3,-13.3,13.8).curveTo(-13.4,17.1,-15.3,12.4).curveTo(-17.4,7.7,-17.6,2.1).curveTo(-17.9,-5.2,-14.4,-9.6).curveTo(-9.9,-15.2,-0,-15.2).curveTo(10,-15.2,14.4,-9.6).curveTo(17.9,-5.2,17.6,2.1).curveTo(17.4,7.7,15.4,12.4).curveTo(14.1,15.2,13.6,15.2).curveTo(13.3,15.2,13.3,13.8).closePath();
	this.shape_10.setTransform(136.8,227.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#7F858C").beginStroke().moveTo(13.3,13.8).curveTo(13.3,8.3,9.4,4.4).curveTo(5.5,0.5,-0,0.5).curveTo(-5.5,0.5,-9.4,4.4).curveTo(-13.3,8.3,-13.3,13.8).curveTo(-13.3,17.1,-15.4,12.4).curveTo(-17.4,7.7,-17.6,2.1).curveTo(-17.9,-5.2,-14.4,-9.6).curveTo(-10,-15.2,-0,-15.2).curveTo(18.3,-15.2,17.6,2.1).curveTo(17.4,7.7,15.4,12.4).curveTo(14.2,15.2,13.7,15.2).curveTo(13.3,15.2,13.3,13.8).closePath();
	this.shape_11.setTransform(67.3,227.7);

	this.instance_27 = new lib.volteo76();
	this.instance_27.parent = this;
	this.instance_27.setTransform(102.1,190.1,1,1,0,0,0,82.7,1.4);
	this.instance_27.alpha = 0.5;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#7D868C").beginStroke().moveTo(-82.6,4.4).lineTo(-82.6,-4.4).lineTo(82.6,-4.4).lineTo(82.6,4.4).closePath();
	this.shape_12.setTransform(102,187.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#545D65").beginStroke().moveTo(-95.8,4.4).lineTo(-95.8,-4.4).lineTo(95.8,-4.4).lineTo(95.8,4.4).closePath();
	this.shape_13.setTransform(102,196);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#454F58").beginStroke().moveTo(-2.7,2.7).curveTo(-3.8,1.6,-3.8,0).curveTo(-3.8,-1.6,-2.7,-2.7).curveTo(-1.5,-3.8,0,-3.8).curveTo(1.6,-3.8,2.7,-2.7).curveTo(3.8,-1.6,3.8,0).curveTo(3.8,1.6,2.7,2.7).curveTo(1.6,3.8,0,3.8).curveTo(-1.5,3.8,-2.7,2.7).closePath();
	this.shape_14.setTransform(1042.8,170.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#454F58").beginStroke().moveTo(-1.7,8.5).lineTo(-1.7,-8.5).lineTo(1.7,-8.5).lineTo(1.7,8.5).closePath();
	this.shape_15.setTransform(1042.8,178.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#454F58").beginStroke().moveTo(-6.6,2.2).lineTo(-6.6,-2.2).lineTo(6.6,-2.2).lineTo(6.6,2.2).closePath();
	this.shape_16.setTransform(1042.8,189.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#454F58").beginStroke().moveTo(-2.7,2.7).curveTo(-3.8,1.6,-3.8,0).curveTo(-3.8,-1.6,-2.7,-2.7).curveTo(-1.5,-3.8,-0,-3.8).curveTo(1.6,-3.8,2.7,-2.7).curveTo(3.8,-1.6,3.8,0).curveTo(3.8,1.6,2.7,2.7).curveTo(1.6,3.8,-0,3.8).curveTo(-1.5,3.8,-2.7,2.7).closePath();
	this.shape_17.setTransform(864.3,170.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#454F58").beginStroke().moveTo(-1.7,8.5).lineTo(-1.7,-8.5).lineTo(1.7,-8.5).lineTo(1.7,8.5).closePath();
	this.shape_18.setTransform(864.3,178.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#454F58").beginStroke().moveTo(-6.6,2.2).lineTo(-6.6,-2.2).lineTo(6.6,-2.2).lineTo(6.6,2.2).closePath();
	this.shape_19.setTransform(864.3,189.3);

	this.instance_28 = new lib.volteo80();
	this.instance_28.parent = this;
	this.instance_28.setTransform(953.6,201.8,1,1,0,0,0,91,1.4);
	this.instance_28.alpha = 0.5;

	this.instance_29 = new lib.volteo3();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1035.5,318.5,1,1,0,0,0,9,5.5);
	this.instance_29.alpha = 0.5;

	this.instance_30 = new lib.volteo5();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1018.6,250.7,1,1,0,0,0,17,5.5);
	this.instance_30.alpha = 0.5;

	this.instance_31 = new lib.volteo8();
	this.instance_31.parent = this;
	this.instance_31.setTransform(946.6,250.7,1,1,0,0,0,14.5,5.5);
	this.instance_31.alpha = 0.5;

	this.instance_32 = new lib.volteo10();
	this.instance_32.parent = this;
	this.instance_32.setTransform(870.3,317.8,1,1,0,0,0,7.7,5.5);
	this.instance_32.alpha = 0.5;

	this.instance_33 = new lib.volteo13();
	this.instance_33.parent = this;
	this.instance_33.setTransform(874.6,250.7,1,1,0,0,0,12,5.5);
	this.instance_33.alpha = 0.5;

	this.instance_34 = new lib.volteo15();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1030.3,213.1,1,1,0,0,0,14.2,5.5);
	this.instance_34.alpha = 0.5;

	this.instance_35 = new lib.volteo17();
	this.instance_35.parent = this;
	this.instance_35.setTransform(962.6,286.3,1,1,0,0,0,12.4,5.5);
	this.instance_35.alpha = 0.5;

	this.instance_36 = new lib.volteo19();
	this.instance_36.parent = this;
	this.instance_36.setTransform(890.6,286.3,1,1,0,0,0,14.9,5.5);
	this.instance_36.alpha = 0.5;

	this.instance_37 = new lib.volteo21();
	this.instance_37.parent = this;
	this.instance_37.setTransform(961.2,213.1,1,1,0,0,0,19.6,5.5);
	this.instance_37.alpha = 0.5;

	this.instance_38 = new lib.volteo23();
	this.instance_38.parent = this;
	this.instance_38.setTransform(886.7,213.1,1,1,0,0,0,19.6,5.5);
	this.instance_38.alpha = 0.5;

	this.instance_39 = new lib.volteo27();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1009,181.8,1,1,0,0,0,19.4,0.8);
	this.instance_39.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,2.8).lineTo(-19.4,-2.8).lineTo(19.4,-2.8).lineTo(19.4,2.8).closePath();
	this.shape_20.setTransform(1009,179.9);

	this.instance_40 = new lib.volteo67();
	this.instance_40.parent = this;
	this.instance_40.setTransform(898.1,181.8,1,1,0,0,0,19.4,0.8);
	this.instance_40.alpha = 0.5;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,2.8).lineTo(-19.4,-2.8).lineTo(19.5,-2.8).lineTo(19.5,2.8).closePath();
	this.shape_21.setTransform(898.1,179.9);

	this.instance_41 = new lib.volteo70();
	this.instance_41.parent = this;
	this.instance_41.setTransform(953.5,181.8,1,1,0,0,0,19.4,0.8);
	this.instance_41.alpha = 0.5;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#AAB0B4").beginStroke().moveTo(-19.4,2.8).lineTo(-19.4,-2.8).lineTo(19.4,-2.8).lineTo(19.4,2.8).closePath();
	this.shape_22.setTransform(953.5,179.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#C4C7C9").beginStroke().moveTo(48.1,67.8).lineTo(48.1,-35.7).curveTo(48.1,-41.2,44.1,-45.1).curveTo(40.2,-49,34.8,-49).curveTo(29.2,-49,25.3,-45.1).curveTo(21.5,-41.2,21.4,-35.7).lineTo(21.4,67.8).lineTo(-21.5,67.8).lineTo(-21.5,-35.7).curveTo(-21.5,-41.2,-25.4,-45.1).curveTo(-29.3,-49,-34.7,-49).curveTo(-40.2,-49,-44.2,-45.1).curveTo(-48.1,-41.2,-48,-35.7).lineTo(-48,67.8).lineTo(-91,67.8).lineTo(-91,-67.8).lineTo(90.9,-67.8).lineTo(90.9,67.8).closePath();
	this.shape_23.setTransform(953.6,268.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#7F858C").beginStroke().moveTo(13.3,13.8).curveTo(13.3,8.3,9.4,4.4).curveTo(5.5,0.5,0,0.5).curveTo(-5.5,0.5,-9.4,4.4).curveTo(-13.3,8.3,-13.3,13.8).curveTo(-13.3,17.1,-15.4,12.4).curveTo(-17.4,7.7,-17.6,2.1).curveTo(-17.9,-5.2,-14.4,-9.6).curveTo(-10,-15.2,0,-15.2).curveTo(10,-15.2,14.4,-9.6).curveTo(17.9,-5.2,17.6,2.1).curveTo(17.4,7.7,15.4,12.4).curveTo(14.2,15.2,13.7,15.2).curveTo(13.3,15.2,13.3,13.8).closePath();
	this.shape_24.setTransform(988.3,227.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#7F858C").beginStroke().moveTo(13.3,13.8).curveTo(13.3,8.3,9.4,4.4).curveTo(5.5,0.5,-0,0.5).curveTo(-5.5,0.5,-9.4,4.4).curveTo(-13.3,8.3,-13.3,13.8).curveTo(-13.3,17.1,-15.4,12.4).curveTo(-17.4,7.7,-17.6,2.1).curveTo(-17.9,-5.2,-14.4,-9.6).curveTo(-10,-15.2,-0,-15.2).curveTo(18.3,-15.2,17.6,2.1).curveTo(17.4,7.7,15.3,12.4).curveTo(14.1,15.2,13.6,15.2).curveTo(13.3,15.2,13.3,13.8).closePath();
	this.shape_25.setTransform(918.8,227.6);

	this.instance_42 = new lib.volteo75();
	this.instance_42.parent = this;
	this.instance_42.setTransform(953.6,190,1,1,0,0,0,82.7,1.4);
	this.instance_42.alpha = 0.5;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#7D868C").beginStroke().moveTo(-82.7,4.5).lineTo(-82.7,-4.5).lineTo(82.6,-4.5).lineTo(82.6,4.5).closePath();
	this.shape_26.setTransform(953.6,187.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#545D65").beginStroke().moveTo(-95.8,4.4).lineTo(-95.8,-4.4).lineTo(95.8,-4.4).lineTo(95.8,4.4).closePath();
	this.shape_27.setTransform(953.6,196);

	this.instance_43 = new lib.volteo2();
	this.instance_43.parent = this;
	this.instance_43.setTransform(167.3,244,1,1,0,0,0,118.5,76.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#141414").beginStroke().moveTo(-27,-73.5).lineTo(-21.5,-75.3).lineTo(27,73.5).lineTo(21.4,75.3).closePath();
	this.shape_28.setTransform(798,243.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#141414").beginStroke().moveTo(-2.4,76.1).lineTo(-2.4,-76.1).lineTo(2.4,-76.1).lineTo(2.4,76.1).closePath();
	this.shape_29.setTransform(773,244.8);

	this.instance_44 = new lib.volteo1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(887.2,254.6,1,1,0,0,0,119.4,87.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_30.setTransform(917,329.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_31.setTransform(860.4,329.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#28292B").beginStroke().moveTo(-2.6,12.6).lineTo(-2.6,-12.6).lineTo(2.6,-12.6).lineTo(2.6,12.6).closePath();
	this.shape_32.setTransform(803.8,329.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#28292B").beginStroke().moveTo(-115,2.8).lineTo(-115,-2.8).lineTo(115,-2.8).lineTo(115,2.8).closePath();
	this.shape_33.setTransform(882.8,338.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#28292B").beginStroke().moveTo(-117.1,2.4).lineTo(-117.1,-2.4).lineTo(117.1,-2.4).lineTo(117.1,2.4).closePath();
	this.shape_34.setTransform(884.9,318.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#28292B").beginStroke().moveTo(-2,45.6).curveTo(-2.8,44.8,-2.8,43.6).lineTo(-2.8,-43.7).curveTo(-2.8,-44.8,-2,-45.6).curveTo(-1.2,-46.5,-0,-46.5).curveTo(1.1,-46.5,2,-45.6).curveTo(2.8,-44.8,2.8,-43.7).lineTo(2.8,43.6).curveTo(2.8,44.8,2,45.6).curveTo(1.1,46.5,-0,46.4).curveTo(-1.2,46.5,-2,45.6).closePath();
	this.shape_35.setTransform(938.8,274.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#28292B").beginStroke().moveTo(-2,43.5).curveTo(-2.8,42.6,-2.8,41.5).lineTo(-2.8,-41.5).curveTo(-2.8,-42.6,-2,-43.5).curveTo(-1.2,-44.3,-0,-44.3).curveTo(1.1,-44.3,2,-43.5).curveTo(2.8,-42.6,2.8,-41.5).lineTo(2.8,41.5).curveTo(2.8,42.6,2,43.5).curveTo(1.1,44.3,-0,44.3).curveTo(-1.2,44.3,-2,43.5).closePath();
	this.shape_36.setTransform(897.7,276.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#28292B").beginStroke().moveTo(-2,46).curveTo(-2.8,45.2,-2.8,44).lineTo(-2.8,-44.1).curveTo(-2.8,-45.2,-2,-46.1).curveTo(-1.2,-46.9,-0,-46.9).curveTo(1.1,-46.9,2,-46.1).curveTo(2.8,-45.2,2.8,-44.1).lineTo(2.8,44).curveTo(2.8,45.2,2,46).curveTo(1.1,46.9,-0,46.8).curveTo(-1.2,46.9,-2,46).closePath();
	this.shape_37.setTransform(856.6,273.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#28292B").beginStroke().moveTo(-46.2,25.9).curveTo(-65,19.5,-81,9.5).curveTo(-97.5,-0.7,-107.6,-12.2).curveTo(-117.8,-23.8,-117.8,-32.3).curveTo(-117.8,-33.5,-117,-34.3).curveTo(-116.2,-35.1,-115,-35.1).curveTo(-113.9,-35.1,-113,-34.3).curveTo(-112.2,-33.5,-112.2,-32.3).curveTo(-112.2,-29.3,-110,-25).curveTo(-107.7,-20.7,-103.5,-15.9).curveTo(-94.1,-5.1,-78.1,4.9).curveTo(-62.7,14.5,-44.5,20.6).curveTo(-18.3,29.5,8.9,29.5).curveTo(57,29.5,86,10.2).curveTo(98.8,1.6,105.6,-9.7).curveTo(112.2,-20.6,112.2,-32.3).curveTo(112.2,-33.5,113,-34.3).curveTo(113.8,-35.1,115,-35.1).curveTo(116.1,-35.1,117,-34.3).curveTo(117.8,-33.5,117.8,-32.3).curveTo(117.8,-19.6,110.8,-7.6).curveTo(103.6,4.6,90.1,13.9).curveTo(59.6,35.1,8.9,35.1).curveTo(-19.2,35.1,-46.2,25.9).closePath();
	this.shape_38.setTransform(888.7,202.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_39.setTransform(999.1,361.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.2,2.1).curveTo(-3.1,1.3,-3.1,0).curveTo(-3.1,-1.2,-2.2,-2.1).curveTo(-1.2,-3,-0,-3).curveTo(1.2,-3,2.2,-2.1).curveTo(3.1,-1.2,3.1,0).curveTo(3.1,1.3,2.2,2.1).curveTo(1.2,3,-0,3).curveTo(-1.2,3,-2.2,2.1).closePath();
	this.shape_40.setTransform(970.9,361.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_41.setTransform(942.6,361.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_42.setTransform(914.4,361.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.2,2.1).curveTo(-3,1.3,-3.1,0).curveTo(-3,-1.2,-2.2,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3.1,-1.2,3.1,0).curveTo(3.1,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.2,2.1).closePath();
	this.shape_43.setTransform(885.9,361.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_44.setTransform(857.7,361.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_45.setTransform(829.5,361.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_46.setTransform(801.2,361.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_47.setTransform(773,361.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.2,2.1).curveTo(-3,1.3,-3.1,0).curveTo(-3,-1.2,-2.2,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3.1,-1.2,3,0).curveTo(3.1,1.3,2.1,2.1).curveTo(1.3,3,-0,3).curveTo(-1.3,3,-2.2,2.1).closePath();
	this.shape_48.setTransform(744.8,361.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_49.setTransform(716.6,361.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.2,2.1).curveTo(-3,1.3,-3.1,0).curveTo(-3,-1.2,-2.2,-2.1).curveTo(-1.2,-3,-0,-3).curveTo(1.3,-3,2.2,-2.1).curveTo(3.1,-1.2,3,0).curveTo(3.1,1.3,2.2,2.1).curveTo(1.2,3,-0,3).curveTo(-1.2,3,-2.2,2.1).closePath();
	this.shape_50.setTransform(688.4,361.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_51.setTransform(660.1,361.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_52.setTransform(631.9,361.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_53.setTransform(603.7,361.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_54.setTransform(575.5,361.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.2,2.1).curveTo(-3,1.3,-3.1,0).curveTo(-3,-1.2,-2.2,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3.1,-1.2,3,0).curveTo(3.1,1.3,2.1,2.1).curveTo(1.3,3,-0,3).curveTo(-1.3,3,-2.2,2.1).closePath();
	this.shape_55.setTransform(547.3,361.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_56.setTransform(519,361.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.2,2.1).curveTo(-3,1.3,-3.1,0).curveTo(-3,-1.2,-2.2,-2.1).curveTo(-1.2,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3.1,-1.2,3.1,0).curveTo(3.1,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.2,3,-2.2,2.1).closePath();
	this.shape_57.setTransform(490.8,361.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_58.setTransform(461.2,361.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_59.setTransform(433,361.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_60.setTransform(404.7,361.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_61.setTransform(376.5,361.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3.1,1.3,-3,0).curveTo(-3.1,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.2,-2.1).curveTo(3,-1.2,3.1,0).curveTo(3,1.3,2.2,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_62.setTransform(348.3,361.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_63.setTransform(320.1,361.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_64.setTransform(291.9,361.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_65.setTransform(263.6,361.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_66.setTransform(235.4,361.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_67.setTransform(207.2,361.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_68.setTransform(179,361.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3.1,1.3,-3,0).curveTo(-3.1,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.2,-2.1).curveTo(3,-1.2,3.1,0).curveTo(3,1.3,2.2,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_69.setTransform(150.8,361.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_70.setTransform(122.5,361.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.3,-3,-0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.2,3,-0,3).curveTo(-1.3,3,-2.1,2.1).closePath();
	this.shape_71.setTransform(94.3,361.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#AAA7A7").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.3,-3,0).curveTo(-3,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-3).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,0).curveTo(3,1.3,2.1,2.1).curveTo(1.3,3,0,3).curveTo(-1.2,3,-2.1,2.1).closePath();
	this.shape_72.setTransform(66.1,361.3);

	this.instance_45 = new lib.volteo12();
	this.instance_45.parent = this;
	this.instance_45.setTransform(418.2,328.9,1,1,0,0,0,329.2,12.8);

	this.instance_46 = new lib.volteo93();
	this.instance_46.parent = this;
	this.instance_46.setTransform(523.8,338.9,1,1,0,0,0,524.9,2.8);

	this.instance_47 = new lib.volteo94();
	this.instance_47.parent = this;
	this.instance_47.setTransform(524.4,343.8,1,1,0,0,0,524.4,2.1);
	this.instance_47.alpha = 0.5;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#C4C7C9").beginStroke().moveTo(-524.3,6.9).lineTo(-524.3,-6.9).lineTo(524.3,-6.9).lineTo(524.3,6.9).closePath();
	this.shape_73.setTransform(524.4,348.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#28292B").beginStroke().moveTo(-524.3,5.9).lineTo(-524.3,-5.9).lineTo(524.3,-5.9).lineTo(524.3,5.9).closePath();
	this.shape_74.setTransform(524.4,361.4);

	this.instance_48 = new lib.volteo95();
	this.instance_48.parent = this;
	this.instance_48.setTransform(431.9,318.9,1,1,0,0,0,388.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48},{t:this.shape_74},{t:this.shape_73},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_44},{t:this.shape_29},{t:this.shape_28},{t:this.instance_43},{t:this.shape_27},{t:this.shape_26},{t:this.instance_42},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_41},{t:this.shape_21},{t:this.instance_40},{t:this.shape_20},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_27},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_26},{t:this.shape_7},{t:this.instance_25},{t:this.shape_6},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(126));

	// piso
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_75.setTransform(-20.1,489.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_76.setTransform(525,489.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_77.setTransform(1070.1,489.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]}).wait(126));

	// Ambient
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_78.setTransform(525,182.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_79.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78}]}).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(489.9,257.5,1120.2,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;