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

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000100").beginStroke().moveTo(-2.9,2.8).curveTo(-4,1.7,-4,-0).lineTo(-4,-0.5).curveTo(-3.8,-2,-2.7,-2.9).curveTo(-1.5,-4,0,-4).curveTo(1.5,-4,2.6,-2.9).curveTo(3.7,-2,4,-0.5).lineTo(4,-0).curveTo(4,1.7,2.8,2.8).curveTo(1.6,4,0,4).curveTo(-1.7,4,-2.9,2.8).closePath();
	this.shape_11.setTransform(0.1,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#878787").beginStroke().moveTo(-14,14.1).curveTo(-19.9,8.2,-19.9,-0).lineTo(-19.7,-2.4).curveTo(-18.8,-9.8,-13.2,-14.8).curveTo(-7.6,-19.9,0,-19.9).curveTo(7.6,-19.9,13.2,-14.8).curveTo(18.8,-9.9,19.7,-2.4).curveTo(19.9,-1.2,19.9,-0).curveTo(19.9,8.2,14.1,14.1).curveTo(8.2,19.9,0,19.9).curveTo(-8.2,19.9,-14,14.1).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-19.8,39.8,39.8);


(lib.gruagancho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-0.9,0.9).curveTo(-1.2,0.5,-1.2,-0).curveTo(-1.2,-0.5,-0.9,-0.8).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.9,-0.8).curveTo(1.2,-0.5,1.2,-0).curveTo(1.2,0.5,0.9,0.9).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.9).closePath();
	this.shape.setTransform(-102.3,26.8,0.999,0.999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#969696").beginStroke().moveTo(-8.4,4.5).lineTo(-8.7,1.1).lineTo(1.2,-4.8).lineTo(7.7,-4.1).lineTo(8.6,1.5).lineTo(3.7,4.8).closePath();
	this.shape_1.setTransform(-104.6,27,0.999,0.999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-4.8,3.3).curveTo(-6.1,1.8,-5.9,-0.5).curveTo(-5.8,-2.4,-4,-3.8).curveTo(-2.4,-5,-1.1,-4.7).curveTo(0.5,-4.2,5.5,-3.6).lineTo(5.9,-2.2).curveTo(5.6,-1.5,3.2,-1.8).curveTo(1,-2,-0.5,-1.8).curveTo(-2.3,-1.6,-2.4,-0.7).curveTo(-2.7,1,-0.4,2).curveTo(1.2,2.6,1,3.7).curveTo(0.9,4.8,-1.1,4.8).curveTo(-3.5,4.8,-4.8,3.3).closePath();
	this.shape_2.setTransform(-115.4,32.7,0.999,0.999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-49.2,9.4).lineTo(46,-14).lineTo(49.2,-9.9).lineTo(-48.1,14).closePath();
	this.shape_3.setTransform(-49.1,14,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,0,121.3,37.5);


(lib.gruacargapilar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,34.1).lineTo(-2.3,-34).lineTo(2.3,-34).lineTo(2.3,34.1).closePath();
	this.shape.setTransform(-2.3,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,4.6,68.1);


(lib.gruacargahandss = function(mode,startPosition,loop) {
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


(lib.gruacargagruafondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.3,6.4).lineTo(-26.3,-6.3).lineTo(26.3,-6.3).lineTo(26.3,6.4).closePath();
	this.shape.setTransform(90.2,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.3,6.3).lineTo(-26.3,-6.4).lineTo(26.3,-6.4).lineTo(26.3,6.3).closePath();
	this.shape_1.setTransform(90.2,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.3,6.4).lineTo(-26.3,-6.3).lineTo(26.3,-6.3).lineTo(26.3,6.4).closePath();
	this.shape_2.setTransform(90.2,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.3,6.3).lineTo(-26.3,-6.4).lineTo(26.3,-6.4).lineTo(26.3,6.3).closePath();
	this.shape_3.setTransform(90.2,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,-47.1).lineTo(1.8,-47.1).lineTo(1.8,45.6).lineTo(-1.8,47.1).closePath();
	this.shape_4.setTransform(99.2,-3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,-47.2).lineTo(1.8,-47.2).lineTo(1.8,45.6).lineTo(-1.8,47.2).closePath();
	this.shape_5.setTransform(80.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,1.9).curveTo(-9.1,-0.8,-9.1,-4.6).lineTo(9.1,-4.6).curveTo(9.1,-0.8,6.4,1.9).curveTo(3.8,4.6,0,4.6).curveTo(-3.8,4.6,-6.4,1.9).closePath();
	this.shape_6.setTransform(-100.2,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-6,9.8).curveTo(-7.4,8.4,-7.8,6.5).curveTo(-8.2,4.5,-7.4,2.4).lineTo(-3.6,3.7).curveTo(-4.3,5.8,-3.2,6.7).curveTo(-2.4,7.5,-1,7.6).curveTo(0.4,7.7,1.7,7.2).curveTo(3.8,6.2,3.8,4.2).lineTo(3.8,-11.7).lineTo(7.9,-11.7).lineTo(7.9,4.2).curveTo(7.9,6.3,6.7,8.2).curveTo(5.5,9.9,3.4,10.8).curveTo(1.6,11.7,-0.5,11.7).curveTo(-3.8,11.6,-6,9.8).closePath();
	this.shape_7.setTransform(-105.1,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-11.2,3.3).curveTo(-15.8,-1.4,-15.8,-7.9).lineTo(15.8,-7.9).curveTo(15.8,-1.4,11.2,3.3).curveTo(6.6,7.9,0,7.9).curveTo(-6.5,7.9,-11.2,3.3).closePath();
	this.shape_8.setTransform(-100.6,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10.1,-7.6).lineTo(-7.6,10).closePath();
	this.shape_9.setTransform(18.2,-37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.6).lineTo(-7.6,-10).lineTo(10.1,7.5).lineTo(7.6,10).closePath();
	this.shape_10.setTransform(18.2,-37.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,8.6).lineTo(-1.7,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.6).closePath();
	this.shape_11.setTransform(8.1,-37.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.6,17.1).lineTo(17.1,-19.6).lineTo(19.6,-17.1).lineTo(-17.1,19.6).closePath();
	this.shape_12.setTransform(26.6,-28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.5).lineTo(-7.6,-10).lineTo(10.1,7.6).lineTo(7.6,10).closePath();
	this.shape_13.setTransform(36.2,-37.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,8.7).lineTo(-1.7,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_14.setTransform(26.1,-37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.5).lineTo(7.6,-10).lineTo(10,-7.5).lineTo(-7.5,10).closePath();
	this.shape_15.setTransform(90.8,-37.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.5).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.6,10).closePath();
	this.shape_16.setTransform(90.8,-37.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_17.setTransform(99.1,-36.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10,-7.5).lineTo(-7.5,10).closePath();
	this.shape_18.setTransform(72.5,-37.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.5).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.6,10).closePath();
	this.shape_19.setTransform(72.5,-37.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_20.setTransform(80.8,-36.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10.1,-7.5).lineTo(-7.6,10).closePath();
	this.shape_21.setTransform(54.2,-37.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.5).lineTo(-7.6,-10).lineTo(10.1,7.5).lineTo(7.6,10).closePath();
	this.shape_22.setTransform(54.2,-37.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_23.setTransform(62.4,-36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_24.setTransform(44.1,-36.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#494A4E").beginStroke().moveTo(-47.3,1.7).lineTo(-47.3,-1.8).lineTo(47.3,-1.8).lineTo(47.3,1.7).closePath();
	this.shape_25.setTransform(53.6,-28.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#494A4E").beginStroke().moveTo(-47.3,1.8).lineTo(-47.3,-1.8).lineTo(47.3,-1.8).lineTo(47.3,1.8).closePath();
	this.shape_26.setTransform(53.6,-46.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-5.8).lineTo(-5.8,-8.2).lineTo(8.2,5.8).lineTo(5.8,8.2).closePath();
	this.shape_27.setTransform(-1.2,-73);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.3,7.1).lineTo(8.3,-9.5).lineTo(8.3,-4.8).lineTo(-6,9.5).closePath();
	this.shape_28.setTransform(-2.1,-72.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.2,1.7).lineTo(-8.2,-1.7).lineTo(8.2,-1.7).lineTo(8.2,1.7).closePath();
	this.shape_29.setTransform(-1.1,-82.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.4,-7.1).lineTo(-7.1,-9.5).lineTo(9.4,7.1).lineTo(7.1,9.5).closePath();
	this.shape_30.setTransform(-1.1,-55.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.9,7.1).lineTo(6.6,-9.5).lineTo(9,-7.1).lineTo(-6.6,9.5).closePath();
	this.shape_31.setTransform(-1,-55.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.2,1.7).lineTo(-8.2,-1.7).lineTo(8.2,-1.7).lineTo(8.2,1.7).closePath();
	this.shape_32.setTransform(-1.9,-65.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,18.8).lineTo(-0.5,-18.8).lineTo(2.8,-18.8).lineTo(0.5,18.8).closePath();
	this.shape_33.setTransform(-8.9,-65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,18.4).lineTo(-2.7,-19.1).lineTo(0.8,-19.1).lineTo(2.6,19.1).closePath();
	this.shape_34.setTransform(6.3,-64.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,5.6).lineTo(5.6,-8.1).lineTo(8.1,-5.6).lineTo(-5.6,8.1).closePath();
	this.shape_35.setTransform(-90.3,-37.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#494A4E").beginStroke().moveTo(-8,-5.5).lineTo(-5.5,-8).lineTo(8,5.5).lineTo(5.5,8).closePath();
	this.shape_36.setTransform(-89.1,-36.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,6.2).lineTo(6.2,-8.7).lineTo(8.6,-6.2).lineTo(-6.2,8.7).closePath();
	this.shape_37.setTransform(-72.4,-37.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-8.8).lineTo(-5.1,-8.7).lineTo(10,6.3).lineTo(7.5,8.8).closePath();
	this.shape_38.setTransform(-72.1,-36.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,22.2).lineTo(-1.8,-22.9).lineTo(1.7,-22.9).lineTo(1.8,22.9).closePath();
	this.shape_39.setTransform(-101.9,-22.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.1).lineTo(-1.8,-8.1).lineTo(1.8,-8.1).lineTo(1.8,8.1).closePath();
	this.shape_40.setTransform(-82.2,-37.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.6).lineTo(7.5,-10.1).lineTo(10,-7.5).lineTo(-7.5,10).closePath();
	this.shape_41.setTransform(-54.2,-37.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7).lineTo(-7.5,-9.5).lineTo(10,7).lineTo(7.5,9.5).closePath();
	this.shape_42.setTransform(-54.2,-37.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_43.setTransform(-64.2,-36.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#494A4E").beginStroke().moveTo(-28.9,0.1).lineTo(-28.9,-3.4).lineTo(28.9,0).lineTo(28.8,3.4).closePath();
	this.shape_44.setTransform(-73,-29.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#494A4E").beginStroke().moveTo(-28.9,-0.3).lineTo(25.4,-3.3).lineTo(28.9,0.4).lineTo(-28.9,3.3).closePath();
	this.shape_45.setTransform(-73,-44.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.5).lineTo(7.5,-10).lineTo(10,-7.6).lineTo(-7.5,10).closePath();
	this.shape_46.setTransform(-35.8,-37.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.6).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.5,10).closePath();
	this.shape_47.setTransform(-35.8,-37.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.6).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.6).closePath();
	this.shape_48.setTransform(-45.9,-37.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.6).lineTo(7.5,-10).lineTo(10,-7.5).lineTo(-7.5,10).closePath();
	this.shape_49.setTransform(-17.8,-37.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.5).lineTo(-7.5,-10).lineTo(10,7.6).lineTo(7.5,10).closePath();
	this.shape_50.setTransform(-17.8,-37.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_51.setTransform(-27.9,-37);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10.1,-7.5).lineTo(-7.6,10).closePath();
	this.shape_52.setTransform(0.2,-37.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.5).lineTo(-7.6,-10).lineTo(10.1,7.5).lineTo(7.6,10).closePath();
	this.shape_53.setTransform(0.2,-37.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_54.setTransform(-9.9,-36.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.2,1.7).lineTo(-27.2,-1.8).lineTo(27.2,-1.8).lineTo(27.2,1.7).closePath();
	this.shape_55.setTransform(-17,-28.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#494A4E").beginStroke().moveTo(-28.9,1.8).lineTo(-28.9,-1.8).lineTo(28.9,-1.8).lineTo(28.9,1.8).closePath();
	this.shape_56.setTransform(-18.7,-46.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,-6.8).lineTo(-6.8,-9).lineTo(9,6.7).lineTo(6.7,9).closePath();
	this.shape_57.setTransform(-0.3,-19.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,6.7).lineTo(6.7,-9).lineTo(9,-6.8).lineTo(-6.8,9).closePath();
	this.shape_58.setTransform(-0.3,-19.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,-6.8).lineTo(-6.7,-9).lineTo(9,6.7).lineTo(6.7,9).closePath();
	this.shape_59.setTransform(-0.5,-1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,6.7).lineTo(6.7,-9).lineTo(9,-6.8).lineTo(-6.7,9).closePath();
	this.shape_60.setTransform(-0.5,-1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,-6.8).lineTo(-6.8,-9).lineTo(9,6.7).lineTo(6.7,9).closePath();
	this.shape_61.setTransform(-0.3,17.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,6.7).lineTo(6.7,-9).lineTo(9,-6.8).lineTo(-6.8,9).closePath();
	this.shape_62.setTransform(-0.3,17.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,-6.8).lineTo(-6.7,-9).lineTo(9,6.7).lineTo(6.8,9).closePath();
	this.shape_63.setTransform(-0.2,36.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,6.7).lineTo(6.8,-9).lineTo(9,-6.8).lineTo(-6.7,9).closePath();
	this.shape_64.setTransform(-0.2,36.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.8).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.8).closePath();
	this.shape_65.setTransform(-0.3,27.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.2,-6.3).lineTo(-7.1,-9).lineTo(8.2,6.3).lineTo(7.1,9).closePath();
	this.shape_66.setTransform(-0.2,55.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,6.5).lineTo(6.6,-8.7).lineTo(8.7,-6.6).lineTo(-6.5,8.7).closePath();
	this.shape_67.setTransform(0.3,55.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.8).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.8).closePath();
	this.shape_68.setTransform(-0.5,45.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.9,-6.7).lineTo(-6.7,-8.9).lineTo(8.9,6.7).lineTo(6.7,8.9).closePath();
	this.shape_69.setTransform(-0.3,73.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.9,6.7).lineTo(6.7,-8.9).lineTo(8.9,-6.7).lineTo(-6.7,8.9).closePath();
	this.shape_70.setTransform(-0.3,73.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.8).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.8).closePath();
	this.shape_71.setTransform(-0.6,63.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,29).lineTo(-1.8,-29).lineTo(1.8,-29).lineTo(1.8,29).closePath();
	this.shape_72.setTransform(-9.3,55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,29).lineTo(-1.8,-29).lineTo(1.8,-29).lineTo(1.8,29).closePath();
	this.shape_73.setTransform(8.9,55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.7).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.7).closePath();
	this.shape_74.setTransform(-0.3,-28.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.7).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.7).closePath();
	this.shape_75.setTransform(-0.5,-10.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.7).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.7).closePath();
	this.shape_76.setTransform(-0.6,7.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,28.9).lineTo(-1.8,-28.9).lineTo(1.8,-28.9).lineTo(1.8,28.9).closePath();
	this.shape_77.setTransform(-9.3,-1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,28.9).lineTo(-1.8,-28.9).lineTo(1.8,-28.9).lineTo(1.8,28.9).closePath();
	this.shape_78.setTransform(8.9,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-83.9,233,167.8);


(lib.gruacargacarga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(3).moveTo(-74.5,4).lineTo(3.5,-4).lineTo(74.5,4);
	this.shape.setTransform(0,-36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-3,24.3).lineTo(-3,-24.3).lineTo(3,-24.3).lineTo(3,24.3).closePath();
	this.shape_1.setTransform(74.5,-21.4,1,0.546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,24.3).lineTo(-3.5,-24.3).lineTo(3.5,-24.3).lineTo(3.5,24.3).closePath();
	this.shape_2.setTransform(-72,-20.8,1,0.546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-127.5,9).lineTo(-127.5,-9).lineTo(127.5,-9).lineTo(127.5,9).closePath();
	this.shape_3.setTransform(-0.8,-19,0.837,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-41.5,213.4,34);


(lib.gruacargabrazo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-6.8,6.6).curveTo(-7.5,6.5,-7.8,6.1).curveTo(-8.6,5,-10.6,-0.6).lineTo(-12.3,-5.9).lineTo(12.3,-6.6).lineTo(12.2,-4.5).curveTo(0.3,3.2,-4.8,6.1).curveTo(-5.6,6.6,-6.4,6.6).lineTo(-6.8,6.6).closePath();
	this.shape.setTransform(-149.7,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#757575").beginStroke().moveTo(-1.2,2.7).curveTo(-4.4,0.4,-4.4,-4.3).lineTo(-2.4,-4.3).curveTo(-2.3,-1.8,-0.5,-0.1).curveTo(1.3,1.8,4.3,1.8).lineTo(4.4,-1.4).lineTo(4.4,4.3).curveTo(1.2,4.3,-1.2,2.7).closePath();
	this.shape_1.setTransform(-105,10.4,0.997,0.997);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#757575").beginStroke().moveTo(-4.9,1).curveTo(-2.9,-1.7,-1.9,-2.4).curveTo(0.6,-4.2,3.1,-1.9).curveTo(6.1,0.8,5.9,2.4).curveTo(5.6,4,3.5,1.3).curveTo(1.6,-1.2,0.3,-1.5).curveTo(-1,-1.8,-2.1,-0.1).curveTo(-3.9,2.8,-5.3,3.1).lineTo(-5.6,3.2).curveTo(-6.5,3.2,-4.9,1).closePath();
	this.shape_2.setTransform(-138,6.8,0.997,0.997);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#757575").beginStroke().moveTo(1.6,9.8).lineTo(-4.5,7.1).lineTo(-5.4,-5.2).lineTo(-2.5,-7.9).lineTo(-2.4,-10.1).lineTo(3.3,-9.9).lineTo(4.3,-7.5).curveTo(5.5,6.1,5.3,7.8).curveTo(5.2,9.1,4.1,9.7).curveTo(3.5,10.1,2.8,10.1).curveTo(2.2,10.1,1.6,9.8).closePath();
	this.shape_3.setTransform(-5.4,13.3,0.997,0.997);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1,2.9).curveTo(-1.4,2.4,-1.4,1.9).lineTo(-1.4,-1.9).curveTo(-1.4,-2.5,-1,-2.9).curveTo(-0.6,-3.3,0,-3.3).curveTo(0.6,-3.3,1,-2.9).curveTo(1.4,-2.5,1.4,-1.9).lineTo(1.4,1.9).curveTo(1.4,2.4,1,2.9).curveTo(0.6,3.3,0,3.3).curveTo(-0.6,3.3,-1,2.9).closePath();
	this.shape_4.setTransform(-26.5,15.9,0.997,0.997);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1.9,1.9).curveTo(-2.6,1.1,-2.6,0).curveTo(-2.6,-1.1,-1.9,-1.9).curveTo(-1.1,-2.6,0,-2.6).curveTo(1.1,-2.6,1.9,-1.9).curveTo(2.6,-1.1,2.6,0).curveTo(2.6,1.1,1.9,1.9).curveTo(1.1,2.6,0,2.6).curveTo(-1.1,2.6,-1.9,1.9).closePath();
	this.shape_5.setTransform(-22.2,5.9,0.997,0.997);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#757575").beginStroke().moveTo(-9.3,-2.9).lineTo(9,-3.7).lineTo(9.3,3).lineTo(-9,3.6).closePath();
	this.shape_6.setTransform(-38.8,10.6,0.997,0.997);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#757575").beginStroke().moveTo(-6.9,-1.1).lineTo(6.8,-1.7).lineTo(6.9,1.1).lineTo(-6.8,1.7).closePath();
	this.shape_7.setTransform(-36,2.5,0.997,0.997);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#757575").beginStroke().moveTo(-14.1,-1.4).lineTo(-11,-4.9).lineTo(9,-5.4).lineTo(14.1,-0.6).lineTo(10.1,4.3).lineTo(-10.1,5.4).closePath();
	this.shape_8.setTransform(-72.3,10,0.997,0.997);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#757575").beginStroke().moveTo(-1.7,1.7).curveTo(-2.4,1,-2.4,-0).curveTo(-2.4,-1,-1.7,-1.7).curveTo(-1,-2.4,0,-2.4).curveTo(1,-2.4,1.7,-1.7).curveTo(2.4,-1,2.4,-0).curveTo(2.4,1,1.7,1.7).curveTo(1,2.4,0,2.4).curveTo(-1,2.4,-1.7,1.7).closePath();
	this.shape_9.setTransform(-157,13.1,0.997,0.997);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-14.3,-6.8).lineTo(-1.6,-7.1).lineTo(14.3,0.2).lineTo(14.1,6.6).lineTo(-9.6,7.1).closePath();
	this.shape_10.setTransform(-152.7,12.5,0.997,0.997);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#969696").beginStroke().moveTo(-89.4,3).lineTo(-87.4,-3.9).lineTo(87.1,-10.1).lineTo(89.4,-5.3).lineTo(89.1,3).lineTo(-88,10.1).closePath();
	this.shape_11.setTransform(-91.5,10.1,0.997,0.997);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#757575").beginStroke().moveTo(-68.4,-0.1).lineTo(69.5,-5).lineTo(69.5,-0.1).lineTo(-69.5,5).closePath();
	this.shape_12.setTransform(-78,16.4,0.997,0.997);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.5,0,180.5,32.3);


(lib.gruacargagancho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.gruacargapilar();
	this.instance.parent = this;
	this.instance.setTransform(-2.3,34,1,1,0,0,0,-2.3,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,4.6,68.1);


(lib.gruacargaconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.gruacargahandss();
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


(lib.gruacargacamion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-5.5,41.3).lineTo(-0.5,-41.3).lineTo(3.3,-41.5).lineTo(5.5,41.5).closePath();
	this.shape.setTransform(-244.2,63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-119.9,1.3).lineTo(119.8,-2.3).lineTo(119.9,-1.3).lineTo(-119.9,2.3).closePath();
	this.shape_1.setTransform(-120.3,96.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-119.9,1.3).lineTo(119.8,-2.3).lineTo(119.9,-1.3).lineTo(-119.9,2.3).closePath();
	this.shape_2.setTransform(-120.3,79.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.4,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.4,2.6,1.9,1.8).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4,4.4,2,4.5).closePath();
	this.shape_3.setTransform(-336,105.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.4,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.4,2.6,1.9,1.8).curveTo(2.1,1.6,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4,4.4,2,4.5).closePath();
	this.shape_4.setTransform(-360.2,105.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.6).curveTo(-5.5,2.2,-5.3,1.7).curveTo(-5.1,0.8,-4.2,0.4).lineTo(-0.7,-1).lineTo(2,-1.9).curveTo(2.1,-2,2.1,-2).curveTo(2.2,-2,2.2,-2).curveTo(2.3,-2.1,2.3,-2.1).curveTo(2.3,-2.1,2.3,-2.2).curveTo(2.3,-2.4,1.9,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-2.9).lineTo(-5.2,-4).curveTo(-5.1,-4.3,-4.8,-4.4).lineTo(-4.5,-4.5).lineTo(2.9,-4.4).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.5).lineTo(5.4,-1.6).curveTo(5.1,-0.5,4.1,-0.2).lineTo(-1.6,1.9).curveTo(-2.4,2.2,-2.2,2.3).lineTo(-1.7,2.4).lineTo(4.5,2.4).lineTo(4.9,2.5).curveTo(5.2,2.6,5.2,2.9).lineTo(5.2,4).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_5.setTransform(-348,105.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.4).lineTo(1.7,2.4).curveTo(2.1,2.4,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.3,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.4).curveTo(-0.4,-4.5,4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.5).lineTo(-1.8,-2.5).curveTo(-1.9,-2.4,-2,-2.4).curveTo(-2.1,-2.4,-2.2,-2.3).curveTo(-2.2,-2.3,-2.2,-2.3).curveTo(-2.2,-2.2,-2.2,-2.2).curveTo(-2.2,-2.1,-2.2,-2.1).curveTo(-2.2,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-1.9,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_6.setTransform(-372.5,105.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_7.setTransform(-381.1,105.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_8.setTransform(-330,146.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_9.setTransform(-108.3,144.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.5,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).curveTo(1.9,-2.4,-3.9,-1.8).curveTo(-8.5,-1.3,-18.5,-0.6).lineTo(-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.8).closePath();
	this.shape_10.setTransform(-362.1,28.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.5,1.9).closePath();
	this.shape_11.setTransform(-335.9,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_12.setTransform(-382.6,74.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_13.setTransform(-382.5,96);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#999999").beginStroke().moveTo(-2.9,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0,0.5).lineTo(-0.8,0.5).curveTo(-2,0.5,-2.9,0.3).closePath();
	this.shape_14.setTransform(-382.7,88.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#999999").beginStroke().moveTo(-3.1,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.7,-4.7).lineTo(-3.1,-5).lineTo(2.4,-6.7).curveTo(3,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,4,3.2,4.5).curveTo(2.3,5.1,-1.3,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.1,6.7).closePath();
	this.shape_15.setTransform(-382.7,91.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.5,-12.9,0.8,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.6,5,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_16.setTransform(-378.4,47.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.8,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-6.7,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.1,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_17.setTransform(-379.6,47.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill().beginStroke("#777777").setStrokeStyle(0.3,1,1).moveTo(35.2,43.7).lineTo(35.3,39.6).lineTo(34.9,38.3).curveTo(34,-25.8,33.3,-37.3).curveTo(33.2,-40.1,31.3,-41.8).curveTo(29.7,-43.3,27.1,-43.6).curveTo(24.9,-43.9,16.7,-43.7).curveTo(10.1,-43.5,3.6,-43.2).curveTo(-1.1,-43,-20.1,-41.4).curveTo(-27.2,-40.7,-30.8,-38).curveTo(-32.7,-36.6,-33.1,-35.4).curveTo(-33.8,-34.2,-35.3,-30.2);
	this.shape_18.setTransform(-347,64.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill().beginStroke("#A5A5A5").setStrokeStyle(0.3,1,1).moveTo(-1,45.9).curveTo(-2.7,15.8,-2.9,0.6).curveTo(-3.1,-10.9,-1.5,-23.4).curveTo(0,-36.1,2.9,-45.9);
	this.shape_19.setTransform(-388.7,91.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).lineTo(-1.8,-2.2).curveTo(-1.6,-2.7,-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.4).lineTo(-0.4,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_20.setTransform(-401.1,73.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.2,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.8,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_21.setTransform(-391.4,49.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_22.setTransform(-400.9,111.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_23.setTransform(-400.4,130);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.4,-4.8,-1.7).lineTo(4.8,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_24.setTransform(-399.4,141.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_25.setTransform(-395.7,145.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.4,-1.6).lineTo(-0.8,-8.4).lineTo(0.7,8.3).curveTo(-0.1,5.6,-0.4,-1.6).closePath();
	this.shape_26.setTransform(-394.8,137.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.9).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.5).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.4,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.9).lineTo(-4.4,-6.9).closePath();
	this.shape_27.setTransform(-396.4,135.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.2,3.2,-1.5,1.9).curveTo(-2,-1,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_28.setTransform(-402.8,135.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,3.1,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_29.setTransform(-320.9,91.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.3).curveTo(-3.9,8.2,-4.5,7.7).curveTo(-5,7.1,-5,6.4).curveTo(-5.5,2.2,-5.3,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.7).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.7).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.8,5.1,6.4).curveTo(5.1,7.1,4.6,7.7).curveTo(4,8.2,3.3,8.3).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.3).closePath();
	this.shape_30.setTransform(-321,91.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-50,62).curveTo(-50.4,61.8,-51,61.2).curveTo(-52,60.2,-52.5,58.5).curveTo(-53.2,56.4,-53.5,53.3).lineTo(-54,48).curveTo(-54.2,44.9,-53.3,42.1).lineTo(-52.4,39.9).curveTo(-53.3,23.7,-53.3,18.3).curveTo(-53.3,14.9,-52.8,6.7).lineTo(-52.3,-0.9).lineTo(-48.1,-7.9).curveTo(-47.1,-12.9,-43.6,-27.3).curveTo(-41.3,-36.4,-37.1,-48.8).curveTo(-34,-58,-32.9,-60.5).curveTo(-32.5,-61.4,-31.9,-61.8).curveTo(-31.3,-62.2,-29.7,-62.4).curveTo(-22.5,-63.3,5.4,-64.5).lineTo(31.8,-65.5).curveTo(34.7,-65.6,36.1,-65.3).curveTo(38.3,-64.9,40.2,-63.5).curveTo(42.1,-62.2,43.2,-61.2).lineTo(45.3,-59.2).curveTo(46.4,-58.2,47.8,-56.1).curveTo(48.9,-54.3,49.7,-52.7).curveTo(50.9,-50.1,52.2,-44.6).curveTo(54,-36.9,54,-29.7).lineTo(54,-12.7).curveTo(54,-9.9,53.3,-8.8).curveTo(50,-2.2,50,-0.1).lineTo(50,6.5).curveTo(50,8,49.5,8.9).curveTo(49,9.7,49,10.5).lineTo(49,25.4).lineTo(39.1,25.7).lineTo(36,26).lineTo(36,28.3).curveTo(24.9,28.4,20,29).curveTo(13.2,29.9,10.4,31.2).curveTo(3.7,34.3,-1.3,42.9).curveTo(-3.6,46.8,-6.7,53.4).curveTo(-7.5,54.5,-9.1,54.5).lineTo(-17.2,54.5).lineTo(-18.7,54.1).lineTo(-21.4,54.5).lineTo(-39,54.5).lineTo(-39,61.9).curveTo(-39,63.3,-39.8,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-48.5,65.5,-50,62).closePath().moveTo(9.8,-55.4).curveTo(-9.6,-54.6,-16,-53.6).curveTo(-21.4,-52.8,-23,-51.9).curveTo(-24.2,-51.1,-25.6,-48.5).curveTo(-26.6,-46.5,-28.8,-36.4).curveTo(-31.1,-26.4,-31.5,-22.1).curveTo(-31.9,-18.2,-32.2,-10.8).curveTo(-32.5,-4,-32.5,-1.5).lineTo(-32.4,-0.4).lineTo(-31.2,-0.7).lineTo(9.3,-16.4).curveTo(14,-18.1,26.6,-20.3).lineTo(29.1,-20.8).curveTo(30.3,-21,30.7,-21.4).curveTo(30.9,-21.7,30.9,-22.3).lineTo(31.5,-51.8).curveTo(31.5,-54.2,30.7,-55).curveTo(30,-55.8,28,-56).curveTo(19.5,-55.8,9.8,-55.4).closePath();
	this.shape_31.setTransform(-351.3,82.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.3,-0.2).lineTo(14.3,-1.2).lineTo(14.3,0.2).lineTo(-14.3,1.2).closePath();
	this.shape_32.setTransform(-252.9,127.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.4,-7.5).lineTo(13.8,-8.5).lineTo(14.4,7.5).lineTo(-13.9,8.5).closePath();
	this.shape_33.setTransform(-252.5,137.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#757575").beginStroke().moveTo(-23.5,4.6).curveTo(-44.1,1.7,-50.6,-5.4).lineTo(-41.5,-6.2).curveTo(-37.8,-2.1,-28.4,0).curveTo(-17.2,2.6,0.2,1.8).curveTo(18.1,1,30.3,-0.8).curveTo(41.3,-2.4,45.9,-4.5).curveTo(49.5,-6.1,50.3,-5.8).curveTo(50.8,-5.6,50.5,-5.1).lineTo(50.2,-2.2).curveTo(40.7,1.8,29.7,3.6).curveTo(20.6,5.1,3.7,6).curveTo(0.7,6.2,-2.4,6.2).curveTo(-12.3,6.2,-23.5,4.6).closePath();
	this.shape_34.setTransform(-112.9,134.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#757575").beginStroke().moveTo(-1,1).curveTo(-1.4,0.6,-1.4,-0).curveTo(-1.4,-0.5,-1,-0.9).curveTo(-0.5,-1.4,0,-1.4).curveTo(0.6,-1.4,1,-0.9).curveTo(1.4,-0.5,1.4,-0).curveTo(1.4,0.6,1,1).curveTo(0.6,1.3,0,1.3).curveTo(-0.5,1.3,-1,1).closePath();
	this.shape_35.setTransform(-268.4,19.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-12.5,-2.5).lineTo(12.4,-3).lineTo(12.5,2.5).lineTo(-12.4,3).closePath();
	this.shape_36.setTransform(-265.5,82.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#969696").beginStroke().moveTo(-3.4,1.6).lineTo(-3.4,-1.6).lineTo(3.4,-1.6).lineTo(3.4,1.6).closePath();
	this.shape_37.setTransform(-225.1,105.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-18.8,-7.2).lineTo(18.6,-8.2).lineTo(18.9,-2.2).lineTo(4,8.1).lineTo(-18.9,8.2).closePath();
	this.shape_38.setTransform(-231,110.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-38.7,9.4).lineTo(-22.8,-8.4).lineTo(19.6,-9.4).lineTo(38.7,7.3).lineTo(33.7,8.1).lineTo(16.2,-6.8).lineTo(-19.6,-5.9).lineTo(-33.8,9.4).closePath();
	this.shape_39.setTransform(-106.6,116.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#969696").beginStroke().moveTo(-120.9,-10.3).lineTo(120.3,-15.7).lineTo(120.9,10.3).lineTo(-120.3,15.7).closePath();
	this.shape_40.setTransform(-121.2,87.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#969696").beginStroke().moveTo(-3.9,-1.4).lineTo(3.8,-1.5).lineTo(3.9,1.5).lineTo(-3.8,1.5).closePath();
	this.shape_41.setTransform(-13.9,101.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#969696").beginStroke().moveTo(-3.9,-1.5).lineTo(3.8,-1.6).lineTo(3.9,1.5).lineTo(-3.9,1.6).closePath();
	this.shape_42.setTransform(-56.7,102);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#969696").beginStroke().moveTo(-3.9,-1.4).lineTo(3.8,-1.5).lineTo(3.9,1.4).lineTo(-3.8,1.5).closePath();
	this.shape_43.setTransform(-99.1,102.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#969696").beginStroke().moveTo(-3.9,-1.4).lineTo(3.8,-1.5).lineTo(3.9,1.5).lineTo(-3.8,1.5).closePath();
	this.shape_44.setTransform(-140.5,103.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#969696").beginStroke().moveTo(-3.9,-1.4).lineTo(3.8,-1.5).lineTo(3.9,1.4).lineTo(-3.8,1.5).closePath();
	this.shape_45.setTransform(-182.9,103.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-120.4,-3.2).lineTo(120.3,-6.7).lineTo(120.4,3.2).lineTo(-120.3,6.7).closePath();
	this.shape_46.setTransform(-120.5,103.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#757575").beginStroke().moveTo(-122.8,-3.7).lineTo(120.6,-8.4).lineTo(122.8,-2).lineTo(120.4,-0.9).lineTo(119.1,3.7).lineTo(-122.5,8.4).closePath();
	this.shape_47.setTransform(-127.4,112.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#757575").beginStroke().moveTo(-1.3,1.3).curveTo(-1.8,0.8,-1.8,0).curveTo(-1.8,-0.7,-1.3,-1.3).curveTo(-0.8,-1.8,0,-1.8).curveTo(0.8,-1.8,1.3,-1.3).curveTo(1.8,-0.7,1.8,0).curveTo(1.8,0.7,1.3,1.3).curveTo(0.8,1.8,0,1.8).curveTo(-0.7,1.8,-1.3,1.3).closePath();
	this.shape_48.setTransform(-284.4,7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#757575").beginStroke().moveTo(-3.4,3.4).curveTo(-4.8,2,-4.8,-0).curveTo(-4.8,-2,-3.4,-3.4).curveTo(-2,-4.9,0,-4.9).curveTo(2,-4.9,3.4,-3.4).curveTo(4.8,-2,4.8,-0).curveTo(4.8,2,3.4,3.4).curveTo(2,4.9,0,4.9).curveTo(-2,4.9,-3.4,3.4).closePath();
	this.shape_49.setTransform(-278.2,29.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#969696").beginStroke().moveTo(-1.3,40.2).lineTo(-13.7,-38.5).lineTo(-6,-40.2).lineTo(3.8,-24).lineTo(13.7,40.2).closePath();
	this.shape_50.setTransform(-276.2,40.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#757575").beginStroke().moveTo(-7.5,-12.6).lineTo(2.1,-15.2).lineTo(6.8,-4.1).curveTo(7.6,-2.5,7.5,-1.1).curveTo(7.5,0.4,6.4,2.6).lineTo(0.8,15.2).closePath();
	this.shape_51.setTransform(-273.1,20.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#757575").beginStroke().moveTo(-0.9,1).curveTo(-1.3,0.5,-1.4,-0).curveTo(-1.3,-0.5,-0.9,-1).curveTo(-0.6,-1.4,-0,-1.4).curveTo(0.6,-1.4,1,-1).curveTo(1.3,-0.5,1.3,-0).curveTo(1.3,0.5,1,1).curveTo(0.6,1.3,-0,1.4).curveTo(-0.6,1.3,-0.9,1).closePath();
	this.shape_52.setTransform(-259.6,17.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#757575").beginStroke().moveTo(-2.5,3.1).curveTo(-3.9,2,-4.1,0.4).curveTo(-4.3,-1.2,-3.2,-2.5).curveTo(-2.2,-3.7,-0.5,-3.9).curveTo(1.2,-4.1,2.6,-3.1).curveTo(3.9,-2.1,4,-0.5).curveTo(4.3,1.1,3.2,2.4).curveTo(2.1,3.7,0.4,3.9).lineTo(-0.2,3.9).curveTo(-1.5,3.9,-2.5,3.1).closePath();
	this.shape_53.setTransform(-262.5,79.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#969696").beginStroke().moveTo(-2.9,-16.5).lineTo(2.1,-16.6).lineTo(2.9,16.6).lineTo(-2.1,16.7).closePath();
	this.shape_54.setTransform(-274.2,118.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#969696").beginStroke().moveTo(-13.9,-4).lineTo(13.7,-4.5).lineTo(13.9,4).lineTo(-13.7,4.5).closePath();
	this.shape_55.setTransform(-263.9,116.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#757575").beginStroke().moveTo(-12.5,-6.7).lineTo(12.2,-7.2).lineTo(12.5,6.7).lineTo(-12.3,7.2).closePath();
	this.shape_56.setTransform(-265.2,105.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.3,-8).lineTo(11,-8.5).lineTo(11.2,8.1).lineTo(-10.9,8.4).closePath();
	this.shape_57.setTransform(-266.7,92.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#757575").beginStroke().moveTo(-1.8,1.8).curveTo(-2.5,1.1,-2.5,0).curveTo(-2.5,-1,-1.8,-1.8).curveTo(-1,-2.6,-0,-2.6).curveTo(1.1,-2.6,1.8,-1.8).curveTo(2.6,-1,2.5,0).curveTo(2.6,1.1,1.8,1.8).curveTo(1.1,2.6,-0,2.6).curveTo(-1.1,2.6,-1.8,1.8).closePath();
	this.shape_58.setTransform(-286.4,122.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#969696").beginStroke().moveTo(-5.2,5.2).curveTo(-7.4,3.1,-7.4,-0).curveTo(-7.4,-3.1,-5.2,-5.2).curveTo(-3.1,-7.4,-0,-7.4).curveTo(3.1,-7.4,5.2,-5.2).curveTo(7.4,-3.1,7.4,-0).curveTo(7.4,3.1,5.2,5.2).curveTo(3.1,7.4,-0,7.4).curveTo(-3.1,7.4,-5.2,5.2).closePath();
	this.shape_59.setTransform(-286.4,122.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-3.3,2.2).lineTo(-2.5,-2.2).lineTo(2.5,-2.2).lineTo(3.3,2.2).closePath();
	this.shape_60.setTransform(-293.3,112);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#969696").beginStroke().moveTo(2.3,18.4).lineTo(2.4,1.2).lineTo(-5.5,-18.4).lineTo(-1,-18.5).lineTo(5.3,0.7).lineTo(5.5,18.5).closePath();
	this.shape_61.setTransform(-299.1,133.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#969696").beginStroke().moveTo(-3.3,3.8).curveTo(-3.2,0.7,-2.6,-2.2).curveTo(-1.8,-6.4,-0.3,-6.1).lineTo(1.3,-3.6).curveTo(3.1,-0.4,3.2,2.9).curveTo(3.3,4.7,2.8,5.3).curveTo(2.3,5.8,0.5,6).lineTo(-0.6,6.1).curveTo(-3.3,6.1,-3.3,3.8).closePath();
	this.shape_62.setTransform(-294.9,39.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#757575").beginStroke().moveTo(-1.6,33.4).lineTo(-3.2,-32.2).curveTo(-3.2,-32.7,-2.6,-33.1).curveTo(-2.1,-33.5,-1.3,-33.5).curveTo(-0.5,-33.5,0.1,-33.1).curveTo(0.7,-32.6,0.7,-32.1).lineTo(1.1,8.2).lineTo(3.2,14).lineTo(3.2,33.5).closePath();
	this.shape_63.setTransform(-294.3,76.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,-0.5).lineTo(3,-0.7).lineTo(3,0.6).lineTo(-3,0.7).closePath();
	this.shape_64.setTransform(-273.7,136.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-2.1,-1.1).lineTo(1.9,-1.2).lineTo(2.1,1.1).lineTo(-2,1.2).closePath();
	this.shape_65.setTransform(-273.7,135.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#969696").beginStroke().moveTo(-3.8,-3.4).lineTo(3.7,-3.4).lineTo(3.8,3.4).lineTo(-3.6,3.5).closePath();
	this.shape_66.setTransform(-3.8,106.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#757575").beginStroke().moveTo(-5,1.1).curveTo(-5.9,-3.9,-7.2,-5.6).lineTo(4.1,-5.9).lineTo(4.1,-2.7).lineTo(6.6,-2.2).lineTo(7.2,5.2).lineTo(-4.4,5.9).curveTo(-4.6,3.7,-5,1.1).closePath();
	this.shape_67.setTransform(-294.2,140);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#757575").beginStroke().moveTo(44.1,6.9).lineTo(-0.7,-2.2).lineTo(-9.3,-3).lineTo(-15.6,-3).lineTo(-16.4,-1.6).lineTo(-36.2,-1.2).curveTo(-56,-0.8,-55.8,-1.3).curveTo(-55.5,-2.2,-55.8,-7.1).lineTo(-16.4,-7.1).lineTo(-9,-6.2).lineTo(4.7,-6.2).lineTo(44.4,1.2).lineTo(55.5,4.7).lineTo(55.8,6.9).lineTo(47.9,7.1).curveTo(45,7.1,44.1,6.9).closePath();
	this.shape_68.setTransform(-185.1,142.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-148.3,23.7).lineTo(-162.1,19.1).lineTo(-164.9,14).lineTo(-165.5,9.1).lineTo(-182.3,9.4).lineTo(-183.1,15.5).curveTo(-184,21.7,-184.9,21.7).lineTo(-199.1,21.7).curveTo(-200.7,21.7,-201.9,19.1).curveTo(-203,16.7,-202.3,16.2).curveTo(-201.9,15.9,-196.2,15.8).lineTo(-190.6,15.7).lineTo(-166.6,-9.7).lineTo(-167.2,-24.8).lineTo(-87.8,-28.6).lineTo(-83.3,-11.7).lineTo(-82.7,-5.7).lineTo(-78.1,-4.6).curveTo(-73.1,-3.5,-70.4,-3.5).lineTo(158.6,-9.2).lineTo(202.6,-9.2).lineTo(202.3,-2.6).lineTo(152,0.6).lineTo(151.2,2.6).lineTo(149.4,4).lineTo(149.7,7.1).lineTo(146,9.1).lineTo(144.9,10.8).lineTo(142.3,10.8).lineTo(140.9,8.6).lineTo(140.9,27.7).lineTo(139.4,27.4).lineTo(139.2,9.4).lineTo(138.3,5.2).lineTo(138.3,1.1).lineTo(82.6,5.2).lineTo(40.7,6.2).curveTo(39.7,8.3,38.8,11.3).curveTo(38.1,13.8,37.8,15.2).lineTo(36.1,24.2).lineTo(32.9,23.7).curveTo(32.5,20.1,36.1,6.3).lineTo(15.5,6.9).lineTo(15.3,17.7).lineTo(9.5,18).lineTo(9,7.4).lineTo(-63.8,9).lineTo(-64,11.1).lineTo(-74.1,11.6).lineTo(-74.3,9.7).lineTo(-75.3,9.8).lineTo(-75.2,10.9).curveTo(-75.3,12.1,-75.5,12.7).curveTo(-76,13.5,-77,13.4).lineTo(-75.8,22).lineTo(-85,25.4).lineTo(-85.8,28.6).closePath();
	this.shape_69.setTransform(-206.5,124.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("rgba(0,0,0,0.298)").beginStroke().moveTo(-144.5,11.5).curveTo(-204.4,6.8,-204.4,0).curveTo(-204.4,-6.8,-144.5,-11.5).curveTo(-84.7,-16.3,0,-16.3).curveTo(84.6,-16.3,144.5,-11.5).curveTo(204.3,-6.8,204.3,0).curveTo(204.3,6.8,144.5,11.5).curveTo(84.6,16.3,0,16.3).curveTo(-84.7,16.3,-144.5,11.5).closePath();
	this.shape_70.setTransform(-207.2,173.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(1));

	// Capa 3
	this.instance = new lib.gruacargaconductor();
	this.instance.parent = this;
	this.instance.setTransform(-349.4,62.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.5,0,411.6,189.6);


// stage content:
(lib.gruadecarga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_147 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(147).call(this.frame_147).wait(1));

	// carga
	this.instance = new lib.gruacargacarga();
	this.instance.parent = this;
	this.instance.setTransform(606.7,484.2,1,1,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({y:365.4},17).wait(15).to({x:-152.3},35).wait(1));

	// grua3
	this.instance_1 = new lib.gruacargabrazo3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1283.2,287,1,1,0,0,0,-90.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:535.2},28).wait(5).to({rotation:15,y:309},20).wait(27).to({regX:-90.3,regY:23.8,rotation:-24.7,x:539.5,y:259.6},17).to({rotation:-24.7},15).to({x:-219.5},35).wait(1));

	// grua-gancho
	this.instance_2 = new lib.gruagancho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1310.4,299.7,1,1,0,0,0,-60.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:562.4},28).wait(5).to({scaleX:1,scaleY:1,rotation:-26.8,x:578,y:331.9},9).to({regX:-60.9,scaleX:1,scaleY:1,rotation:-75,x:618,y:389.9},11).wait(27).to({x:616.9,y:271.1},17).wait(15).to({x:-142.1},35).wait(1));

	// gancho
	this.instance_3 = new lib.gruacargagancho();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1221,326.8,1,1,0,0,0,-2.3,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:473},28).wait(5).to({regX:-2.2,regY:34.2,scaleY:1.29,rotation:10,x:475.3,y:319.4},0).wait(79).to({x:-283.7},35).wait(1));

	// llanta
	this.instance_4 = new lib.llanta();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1376.9,426.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-720,x:628.7},28).wait(84).to({rotation:-1440,x:-130.4},35).wait(1));

	// llanta
	this.instance_5 = new lib.llanta();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1154.9,427.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-720,x:406.7},28).wait(84).to({rotation:-1440,x:-352.4},35).wait(1));

	// camion
	this.instance_6 = new lib.gruacargacamion();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1279.9,366.9,1,1,0,0,0,-204.6,86.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:1226.4},2).to({x:531.9},26).wait(84).to({x:-227.1},35).wait(1));

	// grua2
	this.instance_7 = new lib.gruacargagruafondo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(795.9,142.5,0.09,1,0,0,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({scaleX:1},20).wait(29).to({scaleX:0.09},17).to({_off:true},1).wait(48));

	// grua1
	this.instance_8 = new lib.gruacargagruafondo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(795.9,142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({scaleX:0.09},16).to({_off:true},1).wait(56).to({_off:false},0).to({scaleX:1},14).wait(44));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,3.6).curveTo(-5.1,2.1,-5,-0).curveTo(-5.1,-2.1,-3.5,-3.5).curveTo(-2.1,-5,-0,-5.1).curveTo(2.1,-5,3.6,-3.5).curveTo(5,-2.1,5,-0).curveTo(5,2.1,3.6,3.6).curveTo(2.1,5,-0,5).curveTo(-2.1,5,-3.5,3.6).closePath();
	this.shape.setTransform(334.9,306.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_1.setTransform(469.1,349.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_2.setTransform(472.8,346.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_3.setTransform(479.5,349.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_4.setTransform(483.3,346.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_5.setTransform(490,349.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_6.setTransform(500.4,349.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_7.setTransform(504.1,346.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_8.setTransform(510.8,349.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_9.setTransform(514.5,346.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_10.setTransform(521.2,349.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_11.setTransform(524.9,346.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_12.setTransform(531.7,349.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_13.setTransform(535.4,346.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_14.setTransform(542.1,349.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_15.setTransform(545.8,346.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_16.setTransform(556.2,346.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_17.setTransform(562.9,349.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_18.setTransform(566.6,346.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_19.setTransform(573.3,349.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_20.setTransform(577.1,346.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_21.setTransform(583.8,349.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_22.setTransform(587.5,346.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_23.setTransform(594.2,349.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_24.setTransform(597.9,346.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_25.setTransform(604.6,349.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_26.setTransform(608.3,346.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_27.setTransform(615,349.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_28.setTransform(618.7,346.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_29.setTransform(635.7,349.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_30.setTransform(639.4,346.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_31.setTransform(625.5,349.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_32.setTransform(629.2,346.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_33.setTransform(548.3,361.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_34.setTransform(548.3,353.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_35.setTransform(548.3,346.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_36.setTransform(548.3,338.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_37.setTransform(69.9,329.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_38.setTransform(69.9,335.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_39.setTransform(73,332.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.4).lineTo(-0.7,-7.4).lineTo(0.7,-7.4).lineTo(0.7,7.4).closePath();
	this.shape_40.setTransform(66.1,333.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_41.setTransform(69.2,351.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_42.setTransform(30.6,329.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_43.setTransform(30.6,335.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_44.setTransform(33.7,332.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.4).lineTo(-0.7,-7.4).lineTo(0.7,-7.4).lineTo(0.7,7.4).closePath();
	this.shape_45.setTransform(26.8,333.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_46.setTransform(29.9,351.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_47.setTransform(1020.8,329.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_48.setTransform(1020.8,335.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_49.setTransform(1023.9,332.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.4).lineTo(-0.7,-7.4).lineTo(0.7,-7.4).lineTo(0.7,7.4).closePath();
	this.shape_50.setTransform(1017.1,333.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_51.setTransform(1020.2,351.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_52.setTransform(948.3,329.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_53.setTransform(948.3,335.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_54.setTransform(951.4,332.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.4).lineTo(-0.7,-7.4).lineTo(0.7,-7.4).lineTo(0.7,7.4).closePath();
	this.shape_55.setTransform(944.6,333.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_56.setTransform(947.7,351.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_57.setTransform(967.2,329.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_58.setTransform(967.2,335.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_59.setTransform(970.3,332.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.4).lineTo(-0.7,-7.4).lineTo(0.7,-7.4).lineTo(0.7,7.4).closePath();
	this.shape_60.setTransform(963.4,333.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_61.setTransform(966.5,351.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,1.9).curveTo(-9.1,-0.8,-9.1,-4.6).lineTo(9.1,-4.6).curveTo(9.1,-0.8,6.4,1.9).curveTo(3.8,4.5,0,4.5).curveTo(-3.8,4.5,-6.4,1.9).closePath();
	this.shape_62.setTransform(417.4,222);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#494A4E").beginStroke().moveTo(-132.5,22.6).lineTo(-132.5,-22.5).lineTo(132.5,-22.5).lineTo(132.5,22.6).closePath().moveTo(-104,10.4).lineTo(-96.1,10.4).lineTo(-96.1,2.5).lineTo(-104,2.5).closePath().moveTo(-118.5,10.4).lineTo(-110.6,10.4).lineTo(-110.6,2.5).lineTo(-118.5,2.5).closePath().moveTo(-104,-2.5).lineTo(-96.1,-2.5).lineTo(-96.1,-10.4).lineTo(-104,-10.4).closePath().moveTo(-118.5,-2.5).lineTo(-110.6,-2.5).lineTo(-110.6,-10.4).lineTo(-118.5,-10.4).closePath();
	this.shape_63.setTransform(785.3,342.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#494A4E").beginStroke().moveTo(-28.8,25.5).lineTo(-28.8,-25.5).lineTo(28.8,-25.5).lineTo(28.8,25.5).closePath().moveTo(9.2,8.1).lineTo(17.1,8.1).lineTo(17.1,0.2).lineTo(9.2,0.2).closePath().moveTo(-5.3,8.1).lineTo(2.6,8.1).lineTo(2.6,0.2).lineTo(-5.3,0.2).closePath().moveTo(9.2,-4.8).lineTo(17.1,-4.8).lineTo(17.1,-12.7).lineTo(9.2,-12.7).closePath().moveTo(-5.3,-4.8).lineTo(2.6,-4.8).lineTo(2.6,-12.7).lineTo(-5.3,-12.7).closePath();
	this.shape_64.setTransform(889,307.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#494A4E").beginStroke().moveTo(-61.6,49.3).lineTo(-61.6,-49.3).lineTo(61.6,-49.3).lineTo(61.6,49.3).closePath().moveTo(19.1,21.3).lineTo(27,21.3).lineTo(27,13.4).lineTo(19.1,13.4).closePath().moveTo(4.6,21.3).lineTo(12.4,21.3).lineTo(12.4,13.4).lineTo(4.6,13.4).closePath().moveTo(-13.4,21.3).lineTo(-5.6,21.3).lineTo(-5.6,13.4).lineTo(-13.4,13.4).closePath().moveTo(-27.9,21.3).lineTo(-20,21.3).lineTo(-20,13.4).lineTo(-27.9,13.4).closePath().moveTo(19.1,8.5).lineTo(27,8.5).lineTo(27,0.6).lineTo(19.1,0.6).closePath().moveTo(4.6,8.5).lineTo(12.4,8.5).lineTo(12.4,0.6).lineTo(4.6,0.6).closePath().moveTo(-13.4,8.5).lineTo(-5.6,8.5).lineTo(-5.6,0.6).lineTo(-13.4,0.6).closePath().moveTo(-27.9,8.5).lineTo(-20,8.5).lineTo(-20,0.6).lineTo(-27.9,0.6).closePath().moveTo(19.9,-12).lineTo(27.8,-12).lineTo(27.8,-19.9).lineTo(19.9,-19.9).closePath().moveTo(5.4,-12).lineTo(13.3,-12).lineTo(13.3,-19.9).lineTo(5.4,-19.9).closePath().moveTo(-13.4,-12).lineTo(-5.6,-12).lineTo(-5.6,-19.9).lineTo(-13.4,-19.9).closePath().moveTo(-27.9,-12).lineTo(-20,-12).lineTo(-20,-19.9).lineTo(-27.9,-19.9).closePath().moveTo(19.9,-24.9).lineTo(27.8,-24.9).lineTo(27.8,-32.8).lineTo(19.9,-32.8).closePath().moveTo(5.4,-24.9).lineTo(13.3,-24.9).lineTo(13.3,-32.8).lineTo(5.4,-32.8).closePath().moveTo(-13.4,-24.9).lineTo(-5.6,-24.9).lineTo(-5.6,-32.8).lineTo(-13.4,-32.8).closePath().moveTo(-27.9,-24.9).lineTo(-20,-24.9).lineTo(-20,-32.8).lineTo(-27.9,-32.8).closePath();
	this.shape_65.setTransform(802.6,275.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_66.setTransform(670,287.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_67.setTransform(670,292.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.6,-8.1).lineTo(0.6,8.1).closePath();
	this.shape_68.setTransform(673.1,290.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.5).lineTo(-0.7,-7.5).lineTo(0.7,-7.5).lineTo(0.7,7.5).closePath();
	this.shape_69.setTransform(666.2,291.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_70.setTransform(669.3,309.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_71.setTransform(688.8,287.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_72.setTransform(688.8,292.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_73.setTransform(691.9,290.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,10.5).lineTo(-0.7,-10.5).lineTo(0.7,-10.5).lineTo(0.7,10.5).closePath();
	this.shape_74.setTransform(685.1,288.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_75.setTransform(688.2,309.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_76.setTransform(707.7,287.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_77.setTransform(707.7,292.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,10.2).lineTo(-0.6,-10.2).lineTo(0.6,-10.2).lineTo(0.6,10.2).closePath();
	this.shape_78.setTransform(710.8,288.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.5).lineTo(-0.7,-7.5).lineTo(0.7,-7.5).lineTo(0.7,7.5).closePath();
	this.shape_79.setTransform(688.8,294.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.4).lineTo(-0.7,-7.4).lineTo(0.7,-7.4).lineTo(0.7,7.4).closePath();
	this.shape_80.setTransform(707.7,294.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.5).lineTo(-0.7,-7.5).lineTo(0.7,-7.5).lineTo(0.7,7.5).closePath();
	this.shape_81.setTransform(703.9,291.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_82.setTransform(707,309.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_83.setTransform(726.5,287.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_84.setTransform(726.5,292.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_85.setTransform(729.6,290.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.1).lineTo(0.7,-8.1).lineTo(0.7,8.1).closePath();
	this.shape_86.setTransform(722.8,290.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_87.setTransform(725.9,309.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,10.9).curveTo(-5.5,9.9,-6.7,8.2).curveTo(-7.9,6.4,-7.9,4.1).lineTo(-7.9,-11.6).lineTo(-3.9,-11.6).lineTo(-3.9,4.1).curveTo(-3.9,6.2,-1.8,7.2).curveTo(-0.5,7.7,1,7.6).curveTo(2.4,7.5,3.2,6.7).curveTo(4.3,5.8,3.6,3.7).lineTo(7.4,2.3).curveTo(9,7,5.9,9.8).curveTo(3.9,11.6,0.5,11.7).curveTo(-1.6,11.6,-3.4,10.9).closePath();
	this.shape_88.setTransform(422.4,235.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#494A4E").beginStroke().moveTo(-11.2,3.3).curveTo(-15.8,-1.4,-15.8,-7.9).lineTo(15.8,-7.9).curveTo(15.8,-1.4,11.2,3.3).curveTo(6.5,7.9,-0,7.9).curveTo(-6.6,7.9,-11.2,3.3).closePath();
	this.shape_89.setTransform(417.9,220.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.6).lineTo(-7.6,-10).lineTo(10,7.5).lineTo(7.5,10.1).closePath();
	this.shape_90.setTransform(299.1,176.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10,-7.6).lineTo(-7.5,10).closePath();
	this.shape_91.setTransform(300,176.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.6).lineTo(-1.8,-8.6).lineTo(1.8,-8.6).lineTo(1.8,8.6).closePath();
	this.shape_92.setTransform(309.1,177.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#494A4E").beginStroke().moveTo(-28.3,-26).lineTo(-25.8,-28.5).lineTo(28.3,26).lineTo(25.8,28.5).closePath();
	this.shape_93.setTransform(299.4,195);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.6).lineTo(7.6,-10.1).lineTo(10.1,-7.6).lineTo(-7.6,10.1).closePath();
	this.shape_94.setTransform(281.8,177.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_95.setTransform(291.1,177.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.6).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.5,10).closePath();
	this.shape_96.setTransform(226.4,176.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.5,-10).lineTo(10.1,-7.6).lineTo(-7.6,10).closePath();
	this.shape_97.setTransform(227,176.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_98.setTransform(218.1,177.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.6).lineTo(-7.6,-10).lineTo(10,7.5).lineTo(7.5,10).closePath();
	this.shape_99.setTransform(244.8,176.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10.1,-7.6).lineTo(-7.6,10).closePath();
	this.shape_100.setTransform(245.4,176.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_101.setTransform(236.4,177.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.6).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.5,10).closePath();
	this.shape_102.setTransform(263.1,176.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.5).lineTo(7.6,-10).lineTo(10,-7.6).lineTo(-7.5,10).closePath();
	this.shape_103.setTransform(263.6,176.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_104.setTransform(254.8,177.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_105.setTransform(273.1,177.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#494A4E").beginStroke().moveTo(-47.3,1.7).lineTo(-47.3,-1.8).lineTo(47.3,-1.8).lineTo(47.3,1.7).closePath();
	this.shape_106.setTransform(263.6,186.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#494A4E").beginStroke().moveTo(-47.3,1.8).lineTo(-47.3,-1.8).lineTo(47.3,-1.8).lineTo(47.3,1.8).closePath();
	this.shape_107.setTransform(263.6,167.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.2,5.8).lineTo(5.8,-8.2).lineTo(8.2,-5.8).lineTo(-5.8,8.2).closePath();
	this.shape_108.setTransform(318.5,141.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.2,-4.8).lineTo(-8.3,-9.5).lineTo(8.3,7.1).lineTo(5.9,9.4).closePath();
	this.shape_109.setTransform(319.4,141.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.3,1.7).lineTo(-8.3,-1.7).lineTo(8.3,-1.7).lineTo(8.3,1.7).closePath();
	this.shape_110.setTransform(318.4,132);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.5,7.1).lineTo(7.1,-9.5).lineTo(9.5,-7.1).lineTo(-7.1,9.5).closePath();
	this.shape_111.setTransform(318.3,158.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,-7.1).lineTo(-6.6,-9.5).lineTo(9,7.1).lineTo(6.6,9.5).closePath();
	this.shape_112.setTransform(318.2,158.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.2,1.7).lineTo(-8.2,-1.7).lineTo(8.2,-1.7).lineTo(8.2,1.7).closePath();
	this.shape_113.setTransform(319.1,149);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,18.8).lineTo(-2.8,-18.8).lineTo(0.6,-18.8).lineTo(2.8,18.8).closePath();
	this.shape_114.setTransform(326.1,149.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,-19.1).lineTo(2.7,-19.1).lineTo(0.8,18.4).lineTo(-2.7,19.1).closePath();
	this.shape_115.setTransform(311,149.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-5.6).lineTo(-5.6,-8.1).lineTo(8.1,5.6).lineTo(5.6,8.1).closePath();
	this.shape_116.setTransform(407.6,176.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#494A4E").beginStroke().moveTo(-8,5.5).lineTo(5.5,-8).lineTo(8,-5.5).lineTo(-5.5,8).closePath();
	this.shape_117.setTransform(406.3,177.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,-6.1).lineTo(-6.1,-8.7).lineTo(8.6,6.2).lineTo(6.1,8.6).closePath();
	this.shape_118.setTransform(389.7,176.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,6.3).lineTo(5,-8.8).lineTo(10,-8.8).lineTo(-7.5,8.8).closePath();
	this.shape_119.setTransform(389.4,177.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,-22.9).lineTo(1.8,-22.9).lineTo(1.8,22.2).lineTo(-1.8,22.9).closePath();
	this.shape_120.setTransform(419.2,192.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.2).lineTo(-1.8,-8.1).lineTo(1.8,-8.1).lineTo(1.8,8.2).closePath();
	this.shape_121.setTransform(399.4,176.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.5).lineTo(-7.5,-10.1).lineTo(10,7.6).lineTo(7.5,10).closePath();
	this.shape_122.setTransform(371.4,176.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7).lineTo(7.5,-9.5).lineTo(10,-7).lineTo(-7.5,9.5).closePath();
	this.shape_123.setTransform(371.4,176.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_124.setTransform(381.4,177.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#494A4E").beginStroke().moveTo(-29,-0.1).lineTo(29,-3.5).lineTo(29,0).lineTo(-29,3.5).closePath();
	this.shape_125.setTransform(390.3,184.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#494A4E").beginStroke().moveTo(-29,0.4).lineTo(-25.4,-3.3).lineTo(29,-0.3).lineTo(29,3.3).closePath();
	this.shape_126.setTransform(390.3,169.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.6).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.6,10.1).closePath();
	this.shape_127.setTransform(353.1,176.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10,-7.6).lineTo(-7.5,10.1).closePath();
	this.shape_128.setTransform(353.1,176.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.6).lineTo(-1.8,-8.6).lineTo(1.8,-8.6).lineTo(1.8,8.6).closePath();
	this.shape_129.setTransform(363.1,177.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.5).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.6,10).closePath();
	this.shape_130.setTransform(335.1,176.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10,-7.5).lineTo(-7.5,10).closePath();
	this.shape_131.setTransform(335.1,176.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,8.7).lineTo(-1.8,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_132.setTransform(345.1,177.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,-7.6).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.6,10).closePath();
	this.shape_133.setTransform(317.1,176.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.1,7.5).lineTo(7.6,-10).lineTo(10,-7.6).lineTo(-7.5,10).closePath();
	this.shape_134.setTransform(317.1,176.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,8.7).lineTo(-1.7,-8.7).lineTo(1.8,-8.7).lineTo(1.8,8.7).closePath();
	this.shape_135.setTransform(327.1,177.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#494A4E").beginStroke().moveTo(-29,1.7).lineTo(-29,-1.8).lineTo(28.9,-1.8).lineTo(25.3,1.8).closePath();
	this.shape_136.setTransform(336,186.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#494A4E").beginStroke().moveTo(-29,1.8).lineTo(-29,-1.8).lineTo(28.9,-1.8).lineTo(28.9,1.8).closePath();
	this.shape_137.setTransform(336,167.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.5).lineTo(7.5,-10).lineTo(10,-7.6).lineTo(-7.6,10.1).closePath();
	this.shape_138.setTransform(316.8,196.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.6).lineTo(-7.6,-10).lineTo(10,7.5).lineTo(7.5,10.1).closePath();
	this.shape_139.setTransform(316.8,196.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.7).lineTo(-8.7,-1.8).lineTo(8.6,-1.8).lineTo(8.6,1.7).closePath();
	this.shape_140.setTransform(317.6,186.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.5).lineTo(7.5,-10).lineTo(10,-7.6).lineTo(-7.5,10.1).closePath();
	this.shape_141.setTransform(316.9,214.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.7).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.7).closePath();
	this.shape_142.setTransform(317.7,204.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,7.5).lineTo(7.5,-10).lineTo(10,-7.6).lineTo(-7.5,10.1).closePath();
	this.shape_143.setTransform(317,232.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#494A4E").beginStroke().moveTo(-10,-7.6).lineTo(-7.5,-10).lineTo(10,7.5).lineTo(7.5,10.1).closePath();
	this.shape_144.setTransform(317,232.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.8).lineTo(-8.7,-1.8).lineTo(8.7,-1.8).lineTo(8.7,1.8).closePath();
	this.shape_145.setTransform(317.8,222.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,29).lineTo(-1.8,-28.9).lineTo(1.7,-28.9).lineTo(1.7,29).closePath();
	this.shape_146.setTransform(326.5,213.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,29).lineTo(-1.8,-28.9).lineTo(1.8,-28.9).lineTo(1.8,29).closePath();
	this.shape_147.setTransform(308.3,213.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#494A4E").beginStroke().moveTo(-48.3,49.3).lineTo(-48.3,-49.3).lineTo(48.3,-49.3).lineTo(48.3,49.3).closePath().moveTo(32.3,21.3).lineTo(40.2,21.3).lineTo(40.2,13.4).lineTo(32.3,13.4).closePath().moveTo(17.9,21.3).lineTo(25.8,21.3).lineTo(25.8,13.4).lineTo(17.9,13.4).closePath().moveTo(-0.2,21.3).lineTo(7.8,21.3).lineTo(7.8,13.4).lineTo(-0.2,13.4).closePath().moveTo(-14.6,21.3).lineTo(-6.8,21.3).lineTo(-6.8,13.4).lineTo(-14.6,13.4).closePath().moveTo(-39.5,21.1).lineTo(-31.5,21.1).lineTo(-31.5,13.2).lineTo(-39.5,13.2).closePath().moveTo(32.3,8.5).lineTo(40.2,8.5).lineTo(40.2,0.5).lineTo(32.3,0.5).closePath().moveTo(17.9,8.5).lineTo(25.8,8.5).lineTo(25.8,0.5).lineTo(17.9,0.5).closePath().moveTo(-0.2,8.5).lineTo(7.8,8.5).lineTo(7.8,0.5).lineTo(-0.2,0.5).closePath().moveTo(-14.6,8.5).lineTo(-6.8,8.5).lineTo(-6.8,0.5).lineTo(-14.6,0.5).closePath().moveTo(-39.5,8.3).lineTo(-31.5,8.3).lineTo(-31.5,0.3).lineTo(-39.5,0.3).closePath().moveTo(33.2,-12.1).lineTo(41.1,-12.1).lineTo(41.1,-20).lineTo(33.2,-20).closePath().moveTo(18.7,-12.1).lineTo(26.6,-12.1).lineTo(26.6,-20).lineTo(18.7,-20).closePath().moveTo(-0.2,-12.1).lineTo(7.8,-12.1).lineTo(7.8,-20).lineTo(-0.2,-20).closePath().moveTo(-14.6,-12.1).lineTo(-6.8,-12.1).lineTo(-6.8,-20).lineTo(-14.6,-20).closePath().moveTo(-39.5,-12.2).lineTo(-31.5,-12.2).lineTo(-31.5,-20.2).lineTo(-39.5,-20.2).closePath().moveTo(33.2,-24.9).lineTo(41.1,-24.9).lineTo(41.1,-32.9).lineTo(33.2,-32.9).closePath().moveTo(18.7,-24.9).lineTo(26.6,-24.9).lineTo(26.6,-32.9).lineTo(18.7,-32.9).closePath().moveTo(-0.2,-24.9).lineTo(7.8,-24.9).lineTo(7.8,-32.9).lineTo(-0.2,-32.9).closePath().moveTo(-14.6,-24.9).lineTo(-6.8,-24.9).lineTo(-6.8,-32.9).lineTo(-14.6,-32.9).closePath().moveTo(-39.5,-25.1).lineTo(-31.5,-25.1).lineTo(-31.5,-33).lineTo(-39.5,-33).closePath();
	this.shape_148.setTransform(310.1,316.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.8,17.3).lineTo(-17.8,-17.3).lineTo(17.8,-17.3).lineTo(17.8,17.3).closePath();
	this.shape_149.setTransform(316.9,256.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_150.setTransform(374.1,291.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_151.setTransform(374.1,297);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.2).lineTo(0.7,-8.2).lineTo(0.7,8.1).closePath();
	this.shape_152.setTransform(377.1,294.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.5).lineTo(-0.7,-7.5).lineTo(0.7,-7.5).lineTo(0.7,7.5).closePath();
	this.shape_153.setTransform(370.3,295.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_154.setTransform(373.4,313.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_155.setTransform(392.9,291.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.7,-0.7).lineTo(3.7,0.7).closePath();
	this.shape_156.setTransform(392.9,297);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.2).lineTo(0.7,-8.2).lineTo(0.7,8.1).closePath();
	this.shape_157.setTransform(396,294.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.5).lineTo(-0.7,-7.5).lineTo(0.7,-7.5).lineTo(0.7,7.5).closePath();
	this.shape_158.setTransform(389.1,295.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_159.setTransform(392.2,313.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_160.setTransform(411.8,291.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,0.7).lineTo(-3.8,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_161.setTransform(411.8,297);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.2).lineTo(0.7,-8.2).lineTo(0.7,8.1).closePath();
	this.shape_162.setTransform(414.8,294.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.5).lineTo(-0.7,-7.5).lineTo(0.7,-7.5).lineTo(0.7,7.5).closePath();
	this.shape_163.setTransform(408,295.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_164.setTransform(411.1,313.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_165.setTransform(430.6,291.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.7).lineTo(-3.7,-0.7).lineTo(3.8,-0.7).lineTo(3.8,0.7).closePath();
	this.shape_166.setTransform(430.6,297);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,8.1).lineTo(-0.7,-8.2).lineTo(0.7,-8.2).lineTo(0.7,8.1).closePath();
	this.shape_167.setTransform(433.7,294.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.5).lineTo(-0.7,-7.5).lineTo(0.7,-7.5).lineTo(0.7,7.5).closePath();
	this.shape_168.setTransform(426.8,295.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,13.5).lineTo(-6.9,-13.5).lineTo(6.9,-13.5).lineTo(6.9,13.5).closePath();
	this.shape_169.setTransform(430,313.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#494A4E").beginStroke().moveTo(-44.6,22.6).lineTo(-44.6,-22.5).lineTo(44.6,-22.5).lineTo(44.6,22.6).closePath();
	this.shape_170.setTransform(397,342.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_171.setTransform(89.1,349.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_172.setTransform(92.8,346.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_173.setTransform(99.5,349.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_174.setTransform(103.3,346.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_175.setTransform(110,349.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_176.setTransform(120.4,349.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_177.setTransform(124.1,346.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_178.setTransform(130.8,349.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_179.setTransform(134.5,346.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_180.setTransform(141.2,349.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_181.setTransform(144.9,346.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_182.setTransform(151.7,349.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_183.setTransform(155.4,346.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_184.setTransform(162.1,349.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_185.setTransform(165.8,346.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_186.setTransform(176.2,346.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_187.setTransform(182.9,349.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_188.setTransform(186.6,346.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_189.setTransform(193.3,349.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_190.setTransform(197.1,346.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_191.setTransform(203.8,349.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_192.setTransform(207.5,346.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_193.setTransform(214.2,349.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_194.setTransform(217.9,346.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_195.setTransform(224.6,349.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_196.setTransform(228.3,346.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_197.setTransform(235,349.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_198.setTransform(238.7,346.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_199.setTransform(255.7,349.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_200.setTransform(259.4,346.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-15.5).lineTo(0,15.5);
	this.shape_201.setTransform(245.5,349.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill().beginStroke("#494A4E").moveTo(0,-18.5).lineTo(0,18.5);
	this.shape_202.setTransform(249.2,346.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_203.setTransform(168.3,361.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_204.setTransform(168.3,353.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_205.setTransform(168.3,346.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill().beginStroke("#494A4E").moveTo(-91.1,0).lineTo(91.1,0);
	this.shape_206.setTransform(168.3,338.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-431.8,131.3).lineTo(-431.8,-59.3).lineTo(-358.8,-59.3).lineTo(-358.8,33).lineTo(-346.5,33).lineTo(-346.5,-37).lineTo(-322.3,-37).lineTo(-322.3,33).lineTo(-285.8,33).lineTo(-285.8,-34.8).lineTo(-212.8,-34.8).lineTo(-212.8,47.6).lineTo(-172.2,47.6).lineTo(-172.2,-21.7).lineTo(-52.3,-21.7).lineTo(-52.3,47.6).lineTo(20.2,47.6).lineTo(20.2,-59.3).lineTo(49.9,-59.3).lineTo(49.9,-131.3).lineTo(63.4,-131.3).lineTo(63.4,-59.3).lineTo(93.1,-59.3).lineTo(93.1,-12.2).lineTo(239.8,-11.9).lineTo(239.8,-80.4).lineTo(264,-80.4).lineTo(264,-7.2).lineTo(295.1,-1.1).lineTo(295.1,-53.3).lineTo(319.2,-53.3).lineTo(319.2,3.6).lineTo(342.1,8.1).lineTo(342.1,-71.8).lineTo(391.9,-71.8).lineTo(391.9,17.9).lineTo(431.8,25.6).lineTo(431.7,131.3).closePath().moveTo(-184.1,91.2).lineTo(-174,91.2).lineTo(-174,81.1).lineTo(-184.1,81.1).closePath().moveTo(-202.6,91.2).lineTo(-192.5,91.2).lineTo(-192.5,81.1).lineTo(-202.6,81.1).closePath().moveTo(9.8,85.6).lineTo(19.9,85.6).lineTo(19.9,75.4).lineTo(9.8,75.4).closePath().moveTo(-8.7,85.6).lineTo(1.4,85.6).lineTo(1.4,75.4).lineTo(-8.7,75.4).closePath().moveTo(-184.1,74.8).lineTo(-174,74.8).lineTo(-174,64.7).lineTo(-184.1,64.7).closePath().moveTo(-202.6,74.8).lineTo(-192.5,74.8).lineTo(-192.5,64.7).lineTo(-202.6,64.7).closePath().moveTo(9.8,69.1).lineTo(19.9,69.1).lineTo(19.9,58.9).lineTo(9.8,58.9).closePath().moveTo(-8.7,69.1).lineTo(1.4,69.1).lineTo(1.4,58.9).lineTo(-8.7,58.9).closePath().moveTo(-338,68.8).lineTo(-327.9,68.8).lineTo(-327.9,58.7).lineTo(-338,58.7).closePath().moveTo(-356.6,68.8).lineTo(-346.4,68.8).lineTo(-346.4,58.7).lineTo(-356.6,58.7).closePath().moveTo(-338,52.3).lineTo(-327.9,52.3).lineTo(-327.9,42.3).lineTo(-338,42.3).closePath().moveTo(-356.6,52.3).lineTo(-346.4,52.3).lineTo(-346.4,42.3).lineTo(-356.6,42.3).closePath().moveTo(-403.5,46.8).lineTo(-393.4,46.8).lineTo(-393.4,36.6).lineTo(-403.5,36.6).closePath().moveTo(-422,46.8).lineTo(-411.9,46.8).lineTo(-411.9,36.6).lineTo(-422,36.6).closePath().moveTo(-77.1,45.5).lineTo(-66.3,45.5).lineTo(-66.3,34.6).lineTo(-77.1,34.6).closePath().moveTo(-98.7,45.5).lineTo(-87.9,45.5).lineTo(-87.9,34.6).lineTo(-98.7,34.6).closePath().moveTo(-120.3,45.5).lineTo(-109.5,45.5).lineTo(-109.5,34.6).lineTo(-120.3,34.6).closePath().moveTo(-141.9,45.5).lineTo(-131.1,45.5).lineTo(-131.1,34.6).lineTo(-141.9,34.6).closePath().moveTo(-163.5,45.5).lineTo(-152.6,45.5).lineTo(-152.6,34.6).lineTo(-163.5,34.6).closePath().moveTo(-403.5,30.3).lineTo(-393.4,30.3).lineTo(-393.4,20.1).lineTo(-403.5,20.1).closePath().moveTo(-422,30.3).lineTo(-411.9,30.3).lineTo(-411.9,20.1).lineTo(-422,20.1).closePath().moveTo(-77.1,23.5).lineTo(-66.3,23.5).lineTo(-66.3,12.7).lineTo(-77.1,12.7).closePath().moveTo(-98.7,23.5).lineTo(-87.9,23.5).lineTo(-87.9,12.7).lineTo(-98.7,12.7).closePath().moveTo(-120.3,23.5).lineTo(-109.5,23.5).lineTo(-109.5,12.7).lineTo(-120.3,12.7).closePath().moveTo(-141.9,23.5).lineTo(-131.1,23.5).lineTo(-131.1,12.7).lineTo(-141.9,12.7).closePath().moveTo(-163.5,23.5).lineTo(-152.6,23.5).lineTo(-152.6,12.7).lineTo(-163.5,12.7).closePath().moveTo(-77.1,1.6).lineTo(-66.3,1.6).lineTo(-66.3,-9.3).lineTo(-77.1,-9.3).closePath().moveTo(-98.7,1.6).lineTo(-87.9,1.6).lineTo(-87.9,-9.3).lineTo(-98.7,-9.3).closePath().moveTo(-120.3,1.6).lineTo(-109.5,1.6).lineTo(-109.5,-9.3).lineTo(-120.3,-9.3).closePath().moveTo(-141.9,1.6).lineTo(-131.1,1.6).lineTo(-131.1,-9.3).lineTo(-141.9,-9.3).closePath().moveTo(-163.5,1.6).lineTo(-152.6,1.6).lineTo(-152.6,-9.3).lineTo(-163.5,-9.3).closePath().moveTo(70,-20.2).lineTo(80.1,-20.2).lineTo(80.1,-30.3).lineTo(70,-30.3).closePath().moveTo(51.5,-20.2).lineTo(61.6,-20.2).lineTo(61.6,-30.3).lineTo(51.5,-30.3).closePath().moveTo(-379.1,-20.4).lineTo(-369,-20.4).lineTo(-369,-30.6).lineTo(-379.1,-30.6).closePath().moveTo(-397.6,-20.4).lineTo(-387.5,-20.4).lineTo(-387.5,-30.6).lineTo(-397.6,-30.6).closePath().moveTo(70,-36.7).lineTo(80.1,-36.7).lineTo(80.1,-46.8).lineTo(70,-46.8).closePath().moveTo(51.5,-36.7).lineTo(61.6,-36.7).lineTo(61.6,-46.8).lineTo(51.5,-46.8).closePath().moveTo(-379.1,-36.9).lineTo(-369,-36.9).lineTo(-369,-47).lineTo(-379.1,-47).closePath().moveTo(-397.6,-36.9).lineTo(-387.5,-36.9).lineTo(-387.5,-47).lineTo(-397.6,-47).closePath();
	this.shape_207.setTransform(565.8,234.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(148));

	// piso
	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill().beginStroke("#494A4E").moveTo(-12.6,4.7).curveTo(-12.6,1,-8.9,-1.6).curveTo(-5.2,-4.2,0,-4.2).curveTo(5.2,-4.2,8.9,-1.6).curveTo(12.6,1,12.6,4.7);
	this.shape_208.setTransform(236.1,419.9,1,1,0,0,180);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill().beginStroke("#494A4E").moveTo(-31.1,11.3).curveTo(-31.1,2.1,-22,-4.3).curveTo(-12.9,-10.8,-0,-10.8).curveTo(12.9,-10.8,22,-4.3).curveTo(31.1,2.1,31.1,11.3);
	this.shape_209.setTransform(911.9,494.5,1,1,0,0,180);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.5,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.8,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_210.setTransform(990.5,457.2,1,1,0,0,180);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.8,-6.5,0,-6.5).curveTo(7.9,-6.5,13.5,-2.5).curveTo(19,1.4,19,7);
	this.shape_211.setTransform(642.5,467.2,1,1,0,0,180);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill().beginStroke("#494A4E").moveTo(-31.1,11.3).curveTo(-31.1,2.1,-22,-4.3).curveTo(-12.9,-10.8,0,-10.8).curveTo(12.9,-10.8,22,-4.3).curveTo(31.1,2.1,31.1,11.3);
	this.shape_212.setTransform(119.5,416.3,1,1,0,0,180);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill().beginStroke("#494A4E").moveTo(-31.1,11.3).curveTo(-31.1,2.1,-22,-4.3).curveTo(-12.9,-10.8,-0,-10.8).curveTo(12.9,-10.8,22,-4.3).curveTo(31.1,2.1,31.1,11.3);
	this.shape_213.setTransform(300.9,487.5,1,1,0,0,180);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.6).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-4,-3.1,0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.6);
	this.shape_214.setTransform(303.1,440.4,1,1,0,0,180);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.7).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-4,-3.1,0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.7);
	this.shape_215.setTransform(540.9,455.5,1,1,0,0,180);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.6).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-4,-3.1,0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.6);
	this.shape_216.setTransform(638.1,399.4,1,1,0,0,180);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.7).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-3.9,-3.1,0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.7);
	this.shape_217.setTransform(875.9,414.5,1,1,0,0,180);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.9,-6.5,13.5,-2.5).curveTo(19,1.4,19,7);
	this.shape_218.setTransform(356.5,421.2,1,1,0,0,180);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.8,-6.5,0,-6.5).curveTo(7.9,-6.5,13.5,-2.5).curveTo(19,1.4,19,7);
	this.shape_219.setTransform(827.5,451.2,1,1,0,0,180);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.5,-2.5).curveTo(-7.9,-6.5,-0,-6.5).curveTo(7.8,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_220.setTransform(59.5,460.2,1,1,0,0,180);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.9,-6.5,13.5,-2.5).curveTo(19,1.4,19,7);
	this.shape_221.setTransform(530.5,490.2,1,1,0,0,180);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.9,-6.5,13.5,-2.5).curveTo(19,1.4,19,7);
	this.shape_222.setTransform(491.5,385.7,1,1,0,0,180);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.5,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.8,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_223.setTransform(962.5,415.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]}).wait(148));

	// Ambient
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_224.setTransform(525,182.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_225.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_225},{t:this.shape_224}]}).wait(148));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525,257.5,1484.5,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;