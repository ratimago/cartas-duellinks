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



(lib.nukarefresquera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.8,1.2).lineTo(-14.8,-1.2).lineTo(14.8,-1.2).lineTo(14.8,1.2).closePath();
	this.shape.setTransform(-14.7,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-14.8,3).lineTo(-14.8,-3).lineTo(14.8,-3).lineTo(14.8,3).closePath();
	this.shape_1.setTransform(-14.7,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#FFFFFF").moveTo(14.8,5.8).lineTo(-14.8,5.8).lineTo(-14.8,-5.8).lineTo(14.8,-5.8).closePath();
	this.shape_2.setTransform(-14.7,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#999999").beginStroke().moveTo(-1.8,3.3).curveTo(-2.8,3.1,-3.3,2.4).curveTo(-3.6,1.8,-3.3,1).curveTo(-2.6,-0.7,-3,-3.2).lineTo(-3,-3.4).lineTo(-2.9,-3.4).curveTo(-2.1,-3.3,-1.6,-2.9).curveTo(-1.1,-2.7,-0.5,-2).lineTo(-0.2,-1.7).curveTo(0.8,-0.6,2.3,-0.6).lineTo(2.8,-0.6).lineTo(2.9,-0.6).lineTo(2.9,-0.5).lineTo(3.3,1).curveTo(3.6,1.8,3.2,2.4).curveTo(2.8,3.1,1.8,3.3).lineTo(-0.3,3.4).closePath();
	this.shape_3.setTransform(-11.1,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#999999").beginStroke().moveTo(2.7,7.5).curveTo(1.3,7.2,0.4,6.2).curveTo(-0.6,4.8,-2.3,4.7).lineTo(-3,4.8).lineTo(-3.1,4.9).lineTo(-3.3,3.8).curveTo(-3.6,1.7,-2.8,-0.4).lineTo(-2.7,-0.8).lineTo(-1.9,-3.3).curveTo(-1.6,-4.7,-1.8,-6).curveTo(-2.1,-6.2,-2.1,-6.6).curveTo(-2.1,-6.9,-1.9,-7.2).curveTo(-1.6,-7.5,-1.2,-7.5).lineTo(1.2,-7.5).curveTo(1.6,-7.5,1.8,-7.2).curveTo(2.1,-6.9,2.1,-6.6).curveTo(2.1,-6.2,1.8,-6).curveTo(1.5,-4,2.7,-0.8).lineTo(2.8,-0.4).curveTo(3.6,1.7,3.2,3.8).lineTo(3.1,4.6).curveTo(2.8,6.3,2.8,7.4).lineTo(2.8,7.5).closePath().moveTo(1.9,0.9).lineTo(1.7,0.1).lineTo(1.5,-0.3).lineTo(1.5,-0.4).curveTo(0.3,-3.7,0.5,-5.6).lineTo(-0.5,-5.6).curveTo(-0.3,-3.7,-1.5,-0.4).lineTo(-1.5,-0.3).lineTo(-1.9,0.9).lineTo(1.9,0.9).closePath();
	this.shape_4.setTransform(-11.1,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#999999").beginStroke().moveTo(-1.8,3.3).curveTo(-2.8,3.1,-3.2,2.4).curveTo(-3.6,1.8,-3.3,1).curveTo(-2.6,-0.7,-3,-3.2).lineTo(-3,-3.4).lineTo(-2.9,-3.4).curveTo(-2.1,-3.3,-1.6,-2.9).curveTo(-1.1,-2.7,-0.5,-2).lineTo(-0.2,-1.7).curveTo(0.8,-0.6,2.3,-0.6).lineTo(2.8,-0.6).lineTo(2.9,-0.6).lineTo(2.9,-0.5).lineTo(3.3,1).curveTo(3.6,1.8,3.2,2.4).curveTo(2.8,3.1,1.8,3.3).lineTo(-0.3,3.4).closePath();
	this.shape_5.setTransform(-3.6,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#999999").beginStroke().moveTo(2.7,7.5).curveTo(1.3,7.2,0.4,6.2).curveTo(-0.6,4.8,-2.3,4.7).lineTo(-3,4.8).lineTo(-3.1,4.9).lineTo(-3.3,3.8).curveTo(-3.6,1.7,-2.8,-0.4).lineTo(-2.7,-0.8).lineTo(-1.9,-3.3).curveTo(-1.6,-4.7,-1.8,-6).curveTo(-2.1,-6.2,-2.1,-6.6).curveTo(-2.1,-6.9,-1.8,-7.2).curveTo(-1.6,-7.5,-1.2,-7.5).lineTo(1.2,-7.5).curveTo(1.6,-7.5,1.8,-7.2).curveTo(2.1,-6.9,2.1,-6.6).curveTo(2.1,-6.2,1.8,-6).curveTo(1.5,-4,2.7,-0.8).lineTo(2.8,-0.4).curveTo(3.6,1.7,3.2,3.8).lineTo(3.1,4.6).curveTo(2.8,6.3,2.8,7.4).lineTo(2.8,7.5).closePath().moveTo(1.9,0.9).lineTo(1.7,0.1).lineTo(1.5,-0.3).lineTo(1.5,-0.4).curveTo(0.3,-3.7,0.5,-5.6).lineTo(-0.5,-5.6).curveTo(-0.3,-3.7,-1.5,-0.4).lineTo(-1.5,-0.3).lineTo(-1.9,0.9).lineTo(1.9,0.9).closePath();
	this.shape_6.setTransform(-3.6,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#999999").beginStroke().moveTo(-1.8,3.3).curveTo(-2.9,3.1,-3.3,2.4).curveTo(-3.6,1.8,-3.3,1).curveTo(-2.6,-0.7,-3,-3.2).lineTo(-3,-3.4).lineTo(-2.9,-3.4).curveTo(-2.1,-3.3,-1.6,-2.9).curveTo(-1.1,-2.7,-0.5,-2).lineTo(-0.2,-1.7).curveTo(0.8,-0.6,2.3,-0.6).lineTo(2.8,-0.6).lineTo(2.9,-0.6).lineTo(2.9,-0.5).lineTo(3.3,1).curveTo(3.6,1.8,3.2,2.4).curveTo(2.8,3.1,1.8,3.3).lineTo(-0.3,3.4).closePath();
	this.shape_7.setTransform(-18.5,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#999999").beginStroke().moveTo(2.7,7.5).curveTo(1.3,7.3,0.4,6.2).curveTo(-0.6,4.8,-2.3,4.7).lineTo(-3,4.8).lineTo(-3.1,4.9).lineTo(-3.3,3.8).curveTo(-3.6,1.7,-2.8,-0.4).lineTo(-2.7,-0.8).lineTo(-1.9,-3.3).curveTo(-1.6,-4.7,-1.8,-6).curveTo(-2.1,-6.2,-2.1,-6.6).curveTo(-2.1,-6.9,-1.9,-7.2).curveTo(-1.6,-7.5,-1.2,-7.5).lineTo(1.2,-7.5).curveTo(1.6,-7.5,1.8,-7.2).curveTo(2.1,-6.9,2.1,-6.6).curveTo(2.1,-6.2,1.8,-6).curveTo(1.5,-4,2.7,-0.8).lineTo(2.8,-0.4).curveTo(3.6,1.7,3.2,3.8).lineTo(3.1,4.6).curveTo(2.8,6.3,2.8,7.4).lineTo(2.8,7.5).closePath().moveTo(1.9,0.9).lineTo(1.5,-0.3).lineTo(1.5,-0.4).curveTo(0.3,-3.7,0.5,-5.6).lineTo(-0.5,-5.6).curveTo(-0.3,-3.7,-1.5,-0.4).lineTo(-1.5,-0.3).lineTo(-1.9,0.9).lineTo(1.9,0.9).closePath();
	this.shape_8.setTransform(-18.5,7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#999999").beginStroke().moveTo(-1.8,3.3).curveTo(-2.9,3.1,-3.3,2.4).curveTo(-3.6,1.8,-3.3,1).curveTo(-2.6,-0.7,-3,-3.2).lineTo(-3,-3.4).lineTo(-2.9,-3.4).curveTo(-2.1,-3.3,-1.6,-2.9).curveTo(-1.1,-2.7,-0.5,-2).lineTo(-0.2,-1.7).curveTo(0.8,-0.6,2.3,-0.6).lineTo(2.8,-0.6).lineTo(2.9,-0.6).lineTo(2.9,-0.5).lineTo(3.3,1).curveTo(3.6,1.8,3.2,2.4).curveTo(2.8,3.1,1.8,3.3).lineTo(-0.3,3.4).closePath();
	this.shape_9.setTransform(-26,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#999999").beginStroke().moveTo(2.7,7.5).curveTo(1.3,7.3,0.4,6.2).curveTo(-0.6,4.8,-2.3,4.7).lineTo(-3,4.8).lineTo(-3.1,4.9).lineTo(-3.3,3.8).curveTo(-3.6,1.7,-2.8,-0.4).lineTo(-2.7,-0.8).lineTo(-1.9,-3.3).curveTo(-1.6,-4.7,-1.8,-6).curveTo(-2.1,-6.2,-2.1,-6.6).curveTo(-2.1,-6.9,-1.9,-7.2).curveTo(-1.6,-7.5,-1.2,-7.5).lineTo(1.2,-7.5).curveTo(1.6,-7.5,1.8,-7.2).curveTo(2.1,-6.9,2.1,-6.6).curveTo(2.1,-6.2,1.8,-6).curveTo(1.5,-4.7,1.9,-3.3).curveTo(2,-2.5,2.7,-0.8).lineTo(2.8,-0.4).curveTo(3.6,1.7,3.2,3.8).lineTo(3.1,4.6).curveTo(2.8,6.3,2.8,7.4).lineTo(2.8,7.5).closePath().moveTo(1.9,0.9).lineTo(1.5,-0.3).lineTo(1.5,-0.4).curveTo(0.3,-3.7,0.5,-5.6).lineTo(-0.5,-5.6).curveTo(-0.3,-3.7,-1.5,-0.4).lineTo(-1.5,-0.3).lineTo(-1.9,0.9).lineTo(1.9,0.9).closePath();
	this.shape_10.setTransform(-26,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,0,31.5,20.3);


(lib.nukapiso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape.setTransform(1996.2,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_1.setTransform(2541.3,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_2.setTransform(998,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_3.setTransform(1543.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_4.setTransform(-545.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-560.1,-7,3116.4,13);


(lib.nukallanta = function(mode,startPosition,loop) {
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


(lib.nukahandss = function(mode,startPosition,loop) {
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


(lib.nuka38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-7.6,39.3).curveTo(-18.3,28.6,-18.3,13.4).curveTo(-18.3,4,-13.8,-4.2).curveTo(-9.4,-12.2,-1.8,-17.2).curveTo(-4.3,-22.1,-4.3,-27.5).curveTo(-4.3,-36.8,2.4,-43.5).curveTo(9,-50.1,18.3,-50.1).lineTo(18.3,50.1).curveTo(3.1,50.1,-7.6,39.3).closePath();
	this.shape.setTransform(18.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,100.2);


(lib.nuka37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.2,23.7).lineTo(-2.2,-23.7).lineTo(2.2,-23.7).lineTo(2.2,23.7).closePath();
	this.shape.setTransform(2.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,47.5);


(lib.nuka36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(8.1,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.2,-10.8).lineTo(8.1,-10.8).lineTo(-8.2,10.8).closePath();
	this.shape.setTransform(8.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.1,-10.8).lineTo(8.1,-10.8).lineTo(-8.1,10.8).closePath();
	this.shape.setTransform(8.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.6);


(lib.nuka002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.1,1.8).curveTo(-7.3,1,-7.3,-0).curveTo(-7.3,-1,-5.1,-1.7).curveTo(-3,-2.5,0,-2.5).curveTo(3,-2.5,5.2,-1.7).curveTo(7.3,-1,7.3,-0).curveTo(7.3,1,5.2,1.8).curveTo(3,2.4,0,2.4).curveTo(-3,2.4,-5.1,1.8).closePath();
	this.shape.setTransform(7.3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,4.9);


(lib.nuka001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.1,1.8).curveTo(-7.3,1,-7.3,-0).curveTo(-7.3,-1,-5.1,-1.7).curveTo(-3,-2.5,0,-2.5).curveTo(3,-2.5,5.2,-1.7).curveTo(7.3,-1,7.3,-0).curveTo(7.3,1,5.2,1.8).curveTo(3,2.4,0,2.4).curveTo(-3,2.4,-5.1,1.8).closePath();
	this.shape.setTransform(7.3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,4.9);


(lib.nukaInterpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.nukarefresquera();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_1 = new lib.nukarefresquera();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.1,10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_2 = new lib.nukarefresquera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-84.2,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_3 = new lib.nukarefresquera();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-52.6,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_4 = new lib.nukarefresquera();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.6,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_5 = new lib.nukarefresquera();
	this.instance_5.parent = this;
	this.instance_5.setTransform(84.2,-10.3,1,1,0,0,0,-14.8,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.4,-20.2,198.9,40.4);


(lib.nukaInterpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.nukarefresquera();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_1 = new lib.nukarefresquera();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.1,10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_2 = new lib.nukarefresquera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.5,10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_3 = new lib.nukarefresquera();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.5,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_4 = new lib.nukarefresquera();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-84.2,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_5 = new lib.nukarefresquera();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-84.2,10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_6 = new lib.nukarefresquera();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-52.6,10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_7 = new lib.nukarefresquera();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-52.6,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_8 = new lib.nukarefresquera();
	this.instance_8.parent = this;
	this.instance_8.setTransform(52.6,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_9 = new lib.nukarefresquera();
	this.instance_9.parent = this;
	this.instance_9.setTransform(84.2,-10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_10 = new lib.nukarefresquera();
	this.instance_10.parent = this;
	this.instance_10.setTransform(52.6,10.3,1,1,0,0,0,-14.8,9.9);

	this.instance_11 = new lib.nukarefresquera();
	this.instance_11.parent = this;
	this.instance_11.setTransform(84.2,10.3,1,1,0,0,0,-14.8,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.4,-20.2,198.9,40.4);


(lib.nukaInterpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.nukarefresquera();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_1 = new lib.nukarefresquera();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.1,-22.1,1,1,0,0,0,-14.8,9.9);

	this.instance_2 = new lib.nukarefresquera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.5,-22.1,1,1,0,0,0,-14.8,9.9);

	this.instance_3 = new lib.nukarefresquera();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17.1,0,1,1,0,0,0,-14.8,9.9);

	this.instance_4 = new lib.nukarefresquera();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.5,0,1,1,0,0,0,-14.8,9.9);

	this.instance_5 = new lib.nukarefresquera();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-17.1,20.6,1,1,0,0,0,-14.8,9.9);

	this.instance_6 = new lib.nukarefresquera();
	this.instance_6.parent = this;
	this.instance_6.setTransform(14.5,20.6,1,1,0,0,0,-14.8,9.9);

	this.instance_7 = new lib.nukarefresquera();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-17.1,42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_8 = new lib.nukarefresquera();
	this.instance_8.parent = this;
	this.instance_8.setTransform(14.5,42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_9 = new lib.nukarefresquera();
	this.instance_9.parent = this;
	this.instance_9.setTransform(14.5,-42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_10 = new lib.nukarefresquera();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-84.2,-42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_11 = new lib.nukarefresquera();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-84.2,-22.1,1,1,0,0,0,-14.8,9.9);

	this.instance_12 = new lib.nukarefresquera();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-52.6,-22.1,1,1,0,0,0,-14.8,9.9);

	this.instance_13 = new lib.nukarefresquera();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-84.2,0,1,1,0,0,0,-14.8,9.9);

	this.instance_14 = new lib.nukarefresquera();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-52.6,0,1,1,0,0,0,-14.8,9.9);

	this.instance_15 = new lib.nukarefresquera();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-84.2,20.6,1,1,0,0,0,-14.8,9.9);

	this.instance_16 = new lib.nukarefresquera();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-52.6,20.6,1,1,0,0,0,-14.8,9.9);

	this.instance_17 = new lib.nukarefresquera();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-84.2,42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_18 = new lib.nukarefresquera();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-52.6,42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_19 = new lib.nukarefresquera();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-52.6,-42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_20 = new lib.nukarefresquera();
	this.instance_20.parent = this;
	this.instance_20.setTransform(52.6,-42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_21 = new lib.nukarefresquera();
	this.instance_21.parent = this;
	this.instance_21.setTransform(84.2,-42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_22 = new lib.nukarefresquera();
	this.instance_22.parent = this;
	this.instance_22.setTransform(52.6,-22.1,1,1,0,0,0,-14.8,9.9);

	this.instance_23 = new lib.nukarefresquera();
	this.instance_23.parent = this;
	this.instance_23.setTransform(84.2,-22.1,1,1,0,0,0,-14.8,9.9);

	this.instance_24 = new lib.nukarefresquera();
	this.instance_24.parent = this;
	this.instance_24.setTransform(52.6,0,1,1,0,0,0,-14.8,9.9);

	this.instance_25 = new lib.nukarefresquera();
	this.instance_25.parent = this;
	this.instance_25.setTransform(84.2,0,1,1,0,0,0,-14.8,9.9);

	this.instance_26 = new lib.nukarefresquera();
	this.instance_26.parent = this;
	this.instance_26.setTransform(52.6,20.6,1,1,0,0,0,-14.8,9.9);

	this.instance_27 = new lib.nukarefresquera();
	this.instance_27.parent = this;
	this.instance_27.setTransform(84.2,20.6,1,1,0,0,0,-14.8,9.9);

	this.instance_28 = new lib.nukarefresquera();
	this.instance_28.parent = this;
	this.instance_28.setTransform(52.6,42.7,1,1,0,0,0,-14.8,9.9);

	this.instance_29 = new lib.nukarefresquera();
	this.instance_29.parent = this;
	this.instance_29.setTransform(84.2,42.7,1,1,0,0,0,-14.8,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.4,-52.6,198.9,105.2);


(lib.nukafondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-45.7,4.1).lineTo(-45.7,-4.1).lineTo(45.7,-4.1).lineTo(45.7,4.1).closePath();
	this.shape.setTransform(-2804.1,175.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#777777").beginStroke().moveTo(-13.9,16.3).lineTo(-13.9,-3.9).curveTo(-13.9,-9.1,-9.8,-12.7).curveTo(-5.7,-16.3,0,-16.3).curveTo(5.8,-16.3,9.9,-12.7).curveTo(13.9,-9.1,13.9,-3.9).lineTo(13.9,16.3).closePath();
	this.shape_1.setTransform(-2806.4,300.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_2.setTransform(-2777.3,261.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.9,-11.9).lineTo(8.9,11.9).closePath();
	this.shape_3.setTransform(-2801.9,261.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.9,-11.9).lineTo(8.9,11.9).closePath();
	this.shape_4.setTransform(-2826.5,261.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-42.1,2.9).lineTo(-42.1,-2.9).lineTo(42.1,-2.9).lineTo(42.1,2.9).closePath();
	this.shape_5.setTransform(-2804,240.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_6.setTransform(-2776.8,216.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_7.setTransform(-2794.5,216.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_8.setTransform(-2812.2,216.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_9.setTransform(-2829.9,216.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_10.setTransform(-2776.8,198);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_11.setTransform(-2794.5,198);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_12.setTransform(-2812.2,198);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_13.setTransform(-2829.9,198);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-42.1,70.8).lineTo(-42.1,-70.8).lineTo(42.1,-70.8).lineTo(42.1,70.8).closePath();
	this.shape_14.setTransform(-2804,247.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_15.setTransform(-2676,249.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_16.setTransform(-2689.5,249.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_17.setTransform(-2703.1,249.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_18.setTransform(-2716.6,249.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.8,5.4).lineTo(-23.8,-5.3).lineTo(23.8,-5.3).lineTo(23.8,5.4).closePath();
	this.shape_19.setTransform(-2696.4,208.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-36.9,4.1).lineTo(-36.9,-4.1).lineTo(36.9,-4.1).lineTo(36.9,4.1).closePath();
	this.shape_20.setTransform(-2696.4,215.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#777777").beginStroke().moveTo(-6,7.5).lineTo(-6,-1.5).curveTo(-6,-3.9,-4.2,-5.7).curveTo(-2.5,-7.5,-0,-7.5).curveTo(2.5,-7.5,4.2,-5.7).curveTo(6,-3.9,6,-1.5).lineTo(6,7.5).closePath();
	this.shape_21.setTransform(-2716.6,308.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_22.setTransform(-2675.1,295.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_23.setTransform(-2689.3,295.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_24.setTransform(-2703.5,295.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_25.setTransform(-2717.6,295.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_26.setTransform(-2675.1,276.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_27.setTransform(-2689.3,276.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_28.setTransform(-2703.5,276.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_29.setTransform(-2717.6,276.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_30.setTransform(-2675.1,289.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_31.setTransform(-2689.3,289.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_32.setTransform(-2703.5,289.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_33.setTransform(-2717.6,289.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_34.setTransform(-2675.1,270.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_35.setTransform(-2689.3,270.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_36.setTransform(-2703.5,270.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_37.setTransform(-2717.6,270.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.3,1.4).lineTo(-26.3,-1.5).lineTo(26.3,-1.5).lineTo(26.3,1.4).closePath();
	this.shape_38.setTransform(-2696.4,256.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.3,1.4).lineTo(-26.3,-1.4).lineTo(26.3,-1.4).lineTo(26.3,1.4).closePath();
	this.shape_39.setTransform(-2696.4,242.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.7,-5.8).curveTo(-2.1,-6.4,-1.3,-6.5).lineTo(1.3,-6.5).curveTo(2.1,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.4).closePath();
	this.shape_40.setTransform(-2682.6,230.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.8,-5.8).curveTo(-2.2,-6.4,-1.3,-6.5).lineTo(1.3,-6.5).curveTo(2.2,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.4).closePath();
	this.shape_41.setTransform(-2691.8,230.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.7,-5.8).curveTo(-2.1,-6.4,-1.3,-6.5).lineTo(1.3,-6.5).curveTo(2.1,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.4).closePath();
	this.shape_42.setTransform(-2701,230.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.8,-5.8).curveTo(-2.1,-6.4,-1.3,-6.5).lineTo(1.3,-6.5).curveTo(2.1,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.4).closePath();
	this.shape_43.setTransform(-2710.1,230.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#494A4E").beginStroke().moveTo(-36.9,49.2).lineTo(-36.9,-49.2).lineTo(36.9,-49.2).lineTo(36.9,49.2).closePath();
	this.shape_44.setTransform(-2696.4,268.4);

	this.instance = new lib.nuka38();
	this.instance.parent = this;
	this.instance.setTransform(-2621.8,251.4,1,1,0,0,0,18.3,50.1);
	this.instance.alpha = 0.238;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-25.9,39.3).curveTo(-36.7,28.6,-36.7,13.4).curveTo(-36.7,4,-32.2,-4.2).curveTo(-27.8,-12.2,-20.2,-17.2).curveTo(-22.6,-22.1,-22.6,-27.5).curveTo(-22.6,-36.8,-16,-43.5).curveTo(-9.4,-50.1,-0,-50.1).curveTo(9.4,-50.1,16,-43.5).curveTo(22.6,-36.8,22.6,-27.5).curveTo(22.6,-22,20.1,-17.2).curveTo(27.7,-12.2,32.1,-4.2).curveTo(36.7,4,36.7,13.4).curveTo(36.7,28.6,25.9,39.3).curveTo(15.2,50.1,-0,50.1).curveTo(-15.2,50.1,-25.9,39.3).closePath();
	this.shape_45.setTransform(-2603.4,251.3);

	this.instance_1 = new lib.nuka37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2605.7,295.4,1,1,0,0,0,2.1,23.7);
	this.instance_1.alpha = 0.391;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-4.4,23.7).lineTo(-4.4,-23.7).lineTo(4.4,-23.7).lineTo(4.4,23.7).closePath();
	this.shape_46.setTransform(-2603.4,295.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_47.setTransform(-2415.5,286.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.5,-13).lineTo(4.5,13).closePath();
	this.shape_48.setTransform(-2429.6,286.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,13).lineTo(-4.5,-13).lineTo(4.5,-13).lineTo(4.5,13).closePath();
	this.shape_49.setTransform(-2518.6,286.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,13).lineTo(-4.5,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_50.setTransform(-2532.7,286.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#777777").beginStroke().moveTo(-28.5,2.9).lineTo(-28.5,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_51.setTransform(-2439.5,266);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#777777").beginStroke().moveTo(-28.5,2.9).lineTo(-28.5,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_52.setTransform(-2439.5,255.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#777777").beginStroke().moveTo(-28.5,2.9).lineTo(-28.5,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_53.setTransform(-2439.5,244.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#777777").beginStroke().moveTo(-28.5,2.9).lineTo(-28.5,-2.9).lineTo(28.5,-2.9).lineTo(28.5,2.9).closePath();
	this.shape_54.setTransform(-2508.7,266);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#777777").beginStroke().moveTo(-28.5,2.9).lineTo(-28.5,-2.9).lineTo(28.5,-2.9).lineTo(28.5,2.9).closePath();
	this.shape_55.setTransform(-2508.7,255.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#777777").beginStroke().moveTo(-28.5,2.9).lineTo(-28.5,-2.9).lineTo(28.5,-2.9).lineTo(28.5,2.9).closePath();
	this.shape_56.setTransform(-2508.7,244.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_57.setTransform(-2453.1,282.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_58.setTransform(-2463.6,282.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.7,4.7).lineTo(-2.7,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_59.setTransform(-2474.1,282.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_60.setTransform(-2484.7,282.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_61.setTransform(-2495.2,282.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.7,4.7).lineTo(-23.7,-4.7).lineTo(23.7,-4.7).lineTo(23.7,4.7).closePath();
	this.shape_62.setTransform(-2474.1,282.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#777777").beginStroke().moveTo(-19.1,15.1).lineTo(-19.1,-15.1).lineTo(19.1,-15.1).lineTo(19.1,15.1).closePath();
	this.shape_63.setTransform(-2474.1,299.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#494A4E").beginStroke().moveTo(-86.1,11.3).lineTo(-86.1,-11.3).lineTo(86.1,-11.3).lineTo(86.1,11.3).closePath();
	this.shape_64.setTransform(-2474.1,214.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-72.1,5.7).lineTo(-80,-5.7).lineTo(80,-5.7).lineTo(72,5.7).closePath();
	this.shape_65.setTransform(-2474.1,229.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#494A4E").beginStroke().moveTo(-72.5,42.3).lineTo(-72.5,-42.3).lineTo(72.5,-42.3).lineTo(72.5,42.3).closePath();
	this.shape_66.setTransform(-2474.1,275.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#999999").beginStroke().moveTo(-4.7,51.3).curveTo(-20.6,50.5,-27.3,49.4).curveTo(-35.4,48.1,-41,44.9).curveTo(-46.7,41.6,-49.6,36.6).curveTo(-54.7,27.8,-50,15.4).curveTo(-44.3,0.4,-43.7,-17.5).curveTo(-43.3,-30.7,-45.9,-49.2).lineTo(-46.2,-51.4).lineTo(-43.9,-51.3).curveTo(-32.7,-50.4,-24,-45.5).curveTo(-19.5,-42.9,-15.1,-38.7).curveTo(-12.5,-36.1,-7.9,-30.9).curveTo(-5,-27.4,-3.3,-25.7).curveTo(4.1,-17.8,14.4,-13.2).curveTo(24.7,-8.6,35,-8.6).curveTo(38.7,-8.6,42.3,-9.2).lineTo(44.2,-9.5).lineTo(44.4,-7.6).curveTo(45.9,4.6,50,15.4).curveTo(54.7,27.6,49.5,36.6).curveTo(46.6,41.6,41,44.9).curveTo(35.3,48.1,27.3,49.4).curveTo(20.5,50.5,4.7,51.3).lineTo(-0,51.4).lineTo(-4.7,51.3).closePath();
	this.shape_67.setTransform(-4416.4,256.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#999999").beginStroke().moveTo(41.5,114.5).curveTo(31.1,112.9,22.2,107.7).curveTo(13.3,102.5,6.6,94).curveTo(-0.9,84.4,-12.3,78.6).curveTo(-23.7,72.8,-35.2,72.8).curveTo(-40.5,72.8,-45.4,74.1).lineTo(-47.3,74.6).lineTo(-49.7,59.1).curveTo(-54.6,26.4,-43.3,-5).lineTo(-40.8,-12).curveTo(-31.4,-37.5,-28.6,-50.4).curveTo(-24,-71.8,-27.2,-90.8).curveTo(-29.5,-92.7,-30.8,-95.4).curveTo(-32,-98.1,-32,-101.2).curveTo(-32,-106.8,-28,-110.9).curveTo(-24,-114.9,-18.3,-114.9).lineTo(18.3,-114.9).curveTo(24,-114.9,28,-110.9).curveTo(32,-106.8,32,-101.2).curveTo(32,-98.1,30.8,-95.4).curveTo(29.5,-92.7,27.2,-90.8).curveTo(24,-71.8,28.6,-50.4).curveTo(31.4,-37.5,40.8,-12).lineTo(43.3,-5).curveTo(54.6,26.2,49.7,59.1).lineTo(48.1,69.6).curveTo(45.9,83.7,45,91.1).curveTo(43.6,103.2,43.6,112.8).lineTo(43.6,114.9).closePath().moveTo(29.1,13.9).curveTo(27.6,7.4,25.4,1.4).lineTo(22.9,-5.4).curveTo(13.8,-30.4,10.6,-43.6).curveTo(5.4,-65.7,7.3,-85.5).lineTo(-7.3,-85.5).curveTo(-5.5,-65.7,-10.7,-43.6).curveTo(-13.8,-30.5,-22.9,-5.4).lineTo(-25.4,1.4).curveTo(-27.6,7.6,-29.1,13.9).lineTo(29.1,13.9).lineTo(29.1,13.9).closePath();
	this.shape_68.setTransform(-4416.4,122.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-49.3,7.6).lineTo(-49.3,-7.6).lineTo(49.3,-7.6).lineTo(49.3,7.6).closePath();
	this.shape_69.setTransform(-4526.1,297.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-7.5,7.9).lineTo(-6.3,-7.9).lineTo(6.5,-7.9).lineTo(7.5,7.9).closePath();
	this.shape_70.setTransform(-4496.6,242.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-6.1,4.2).lineTo(-7.3,3.8).lineTo(-8.2,3.3).curveTo(-9.2,2.7,-9.7,2.1).curveTo(-10.2,1.6,-10.6,1).lineTo(-11.1,-0.1).lineTo(-10.9,-0.3).lineTo(-8.6,0.6).lineTo(-7.2,1.1).lineTo(-6.4,1.3).lineTo(-6,1.4).lineTo(-5.6,1.4).curveTo(-5.1,1.5,-4,1.4).lineTo(-3.2,1.1).lineTo(-2.4,0.7).lineTo(-1.6,0.2).lineTo(-0.6,-0.7).lineTo(-0.6,-0.6).lineTo(-0.5,-0.7).lineTo(-0.3,-0.8).lineTo(1.4,-2.4).lineTo(2.4,-3.1).lineTo(3.4,-3.9).curveTo(4.8,-4.6,6.1,-4.4).lineTo(6.7,-4.3).lineTo(7.2,-4.1).lineTo(8.2,-3.7).curveTo(9,-3.2,9.7,-2.5).lineTo(10.6,-1.4).lineTo(11,-0.6).lineTo(11.1,-0.3).lineTo(10.9,-0.1).lineTo(6.4,-1.8).lineTo(5.6,-2).curveTo(4.8,-2.3,3.8,-2.5).lineTo(2.8,-2.3).curveTo(1.9,-1.9,1.8,-1.7).lineTo(1.1,-0.8).lineTo(0.8,-0.3).lineTo(0.7,0.1).lineTo(0.7,0.1).lineTo(0.7,0.2).lineTo(0.6,0.3).lineTo(0.1,1.4).lineTo(-0.8,2.6).lineTo(-1.9,3.5).lineTo(-3.3,4.1).curveTo(-4.1,4.4,-4.9,4.4).curveTo(-5.5,4.4,-6.1,4.2).closePath();
	this.shape_71.setTransform(-4507.6,215.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-9.3,6.5).lineTo(9.3,-6.5).lineTo(9.3,6.5).closePath();
	this.shape_72.setTransform(-4540.1,248);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-9.2,6.5).lineTo(9.2,-6.5).lineTo(9.2,6.5).closePath();
	this.shape_73.setTransform(-4521.2,248);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-9.2,6.5).lineTo(9.2,-6.5).lineTo(9.2,6.5).closePath();
	this.shape_74.setTransform(-4559,248);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-49.3,46.9).lineTo(-49.3,23.4).lineTo(-42.6,23.4).lineTo(-42.6,-3.1).lineTo(-23.7,-16.4).lineTo(-23.7,-3.1).lineTo(-4.7,-16.4).lineTo(-4.7,-3.1).lineTo(14.2,-16.4).lineTo(14.2,9.8).lineTo(20.8,9.8).lineTo(24.3,-36.5).lineTo(35.2,-36.5).lineTo(38.2,9.8).lineTo(45.5,9.8).lineTo(45.5,23.4).lineTo(49.3,23.4).lineTo(49.3,46.9).closePath().moveTo(18.3,26.9).lineTo(33.3,26.9).lineTo(33.3,13.2).lineTo(18.3,13.2).closePath().moveTo(-7.6,26.9).lineTo(7.3,26.9).lineTo(7.3,13.2).lineTo(-7.6,13.2).closePath().moveTo(-33.3,26.9).lineTo(-18.4,26.9).lineTo(-18.4,13.2).lineTo(-33.3,13.2).closePath().moveTo(12.4,-38.2).lineTo(11.2,-38.6).lineTo(10.2,-39.1).curveTo(9.3,-39.7,8.8,-40.4).curveTo(8.3,-40.8,7.9,-41.5).lineTo(7.4,-42.6).lineTo(7.6,-42.7).lineTo(9.9,-41.8).lineTo(11.3,-41.4).lineTo(12.1,-41.2).lineTo(12.5,-41.1).lineTo(12.9,-41.1).curveTo(13.4,-41,14.5,-41.1).lineTo(15.3,-41.3).lineTo(16.1,-41.7).lineTo(16.9,-42.3).lineTo(17.9,-43.1).lineTo(17.9,-43.1).lineTo(18,-43.2).lineTo(18.2,-43.3).lineTo(19.9,-44.8).lineTo(20.9,-45.6).lineTo(21.9,-46.3).curveTo(23.3,-47,24.6,-46.9).lineTo(25.2,-46.8).lineTo(25.7,-46.6).lineTo(26.7,-46.1).curveTo(27.5,-45.6,28.2,-45).lineTo(29.1,-43.9).lineTo(29.5,-43.1).lineTo(29.6,-42.7).lineTo(29.4,-42.6).lineTo(25.7,-44).lineTo(24.1,-44.5).curveTo(23.3,-44.8,22.3,-44.9).lineTo(21.3,-44.7).curveTo(20.4,-44.3,20.3,-44.2).lineTo(19.6,-43.3).lineTo(19.3,-42.8).lineTo(19.2,-42.4).lineTo(19.2,-42.3).lineTo(19.2,-42.2).lineTo(19.1,-42.2).lineTo(18.6,-41).lineTo(17.7,-39.9).lineTo(16.6,-39).lineTo(15.2,-38.3).curveTo(14.4,-38,13.6,-38).curveTo(13,-38,12.4,-38.2).closePath();
	this.shape_75.setTransform(-4526.1,257.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-1.2,11).lineTo(-1.2,-11).lineTo(1.2,-11).lineTo(1.2,11).closePath();
	this.shape_76.setTransform(-4282.5,294.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,10.3).curveTo(-6.5,6,-6.5,0).curveTo(-6.5,-6,-4.6,-10.2).curveTo(-2.7,-14.5,0,-14.5).curveTo(2.7,-14.5,4.6,-10.2).curveTo(6.5,-6,6.5,0).curveTo(6.5,6,4.6,10.3).curveTo(2.7,14.5,0,14.5).curveTo(-2.7,14.5,-4.6,10.3).closePath();
	this.shape_77.setTransform(-4282.5,278);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-1.2,8.7).lineTo(-1.2,-8.7).lineTo(1.2,-8.7).lineTo(1.2,8.7).closePath();
	this.shape_78.setTransform(-4266.2,297);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-5.5,5.5).curveTo(-7.7,3.2,-7.7,0).curveTo(-7.7,-3.2,-5.5,-5.5).curveTo(-3.2,-7.7,0,-7.7).curveTo(3.2,-7.7,5.5,-5.5).curveTo(7.8,-3.2,7.7,0).curveTo(7.8,3.2,5.5,5.5).curveTo(3.2,7.7,0,7.7).curveTo(-3.2,7.7,-5.5,5.5).closePath();
	this.shape_79.setTransform(-4266.2,285.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#595959").beginStroke().moveTo(-1.2,9.3).lineTo(-1.2,-9.3).lineTo(1.2,-9.3).lineTo(1.2,9.3).closePath();
	this.shape_80.setTransform(-4250,297.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#595959").beginStroke().moveTo(-4.6,6).curveTo(-6.5,3.5,-6.5,0).curveTo(-6.5,-3.5,-4.6,-5.9).curveTo(-2.7,-8.4,0,-8.4).curveTo(2.7,-8.4,4.6,-5.9).curveTo(6.5,-3.5,6.5,0).curveTo(6.5,3.5,4.6,6).curveTo(2.7,8.4,0,8.4).curveTo(-2.7,8.4,-4.6,6).closePath();
	this.shape_81.setTransform(-4250.4,282.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-50.9,4.9).lineTo(-50.9,-4.9).lineTo(50.9,-4.9).lineTo(50.9,4.9).closePath();
	this.shape_82.setTransform(-3858.3,297.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.5,9.4).lineTo(12.5,-9.4).lineTo(12.5,9.4).closePath();
	this.shape_83.setTransform(-3870.8,248.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.7,12.6).lineTo(-12.7,-12.6).lineTo(12.7,-12.6).lineTo(12.7,12.6).closePath();
	this.shape_84.setTransform(-3896.5,245.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.5,9.4).lineTo(12.5,-9.4).lineTo(12.5,9.4).closePath();
	this.shape_85.setTransform(-3845.3,248.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.5,9.4).lineTo(12.5,-9.4).lineTo(12.5,9.4).closePath();
	this.shape_86.setTransform(-3819.9,248.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-50.9,35).lineTo(-50.9,-35).lineTo(-25.5,-35).lineTo(-25.5,-9.6).lineTo(-0,-28.6).lineTo(-0,-9.6).lineTo(25.5,-28.6).lineTo(25.5,-9.6).lineTo(50.9,-28.6).lineTo(50.9,35).closePath().moveTo(31.8,15.9).lineTo(44.5,15.9).lineTo(44.5,9.5).lineTo(31.8,9.5).closePath().moveTo(6.4,15.9).lineTo(19.1,15.9).lineTo(19.1,9.5).lineTo(6.4,9.5).closePath().moveTo(-19.1,15.9).lineTo(-6.4,15.9).lineTo(-6.4,9.5).lineTo(-19.1,9.5).closePath().moveTo(31.8,3.2).lineTo(44.5,3.2).lineTo(44.5,-3.2).lineTo(31.8,-3.2).closePath().moveTo(6.4,3.2).lineTo(19.1,3.2).lineTo(19.1,-3.2).lineTo(6.4,-3.2).closePath().moveTo(-19.1,3.2).lineTo(-6.4,3.2).lineTo(-6.4,-3.2).lineTo(-19.1,-3.2).closePath();
	this.shape_87.setTransform(-3858.3,267.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-12.7,6.4).lineTo(-12.7,-6.4).lineTo(12.7,-6.4).lineTo(12.7,6.4).closePath();
	this.shape_88.setTransform(-3896.5,207.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-12.7,3.2).lineTo(-12.7,-3.2).lineTo(12.7,-3.2).lineTo(12.7,3.2).closePath();
	this.shape_89.setTransform(-3896.5,223.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-10.4,16.3).lineTo(-10.4,-16.2).lineTo(10.5,-16.2).lineTo(10.5,16.3).closePath();
	this.shape_90.setTransform(-3896.4,225.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-20.5,12).lineTo(-20.5,11.9).lineTo(-27.4,11.9).lineTo(-17.1,-5.2).lineTo(-10.3,-5.2).lineTo(-10.3,-12).lineTo(0,-12).lineTo(0,-5.2).lineTo(17.1,-5.2).lineTo(27.4,11.9).lineTo(20.6,11.9).lineTo(20.6,12).closePath();
	this.shape_91.setTransform(-3643.3,262.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#575F66").beginStroke().moveTo(-27.4,1.9).lineTo(-27.4,-1.6).lineTo(-20.5,-1.6).lineTo(-20.5,-1.8).lineTo(3.4,-1.8).lineTo(3.4,-1.6).lineTo(13.7,-1.6).lineTo(13.7,-1.8).lineTo(20.6,-1.8).lineTo(20.6,-1.6).lineTo(27.4,-1.6).lineTo(27.4,1.9).closePath();
	this.shape_92.setTransform(-3643.3,303.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.4,27.4).lineTo(-27.4,24).lineTo(-20.5,24).lineTo(-20.5,-3.5).lineTo(-27.4,-3.5).lineTo(-17.1,-20.6).lineTo(-10.3,-20.6).lineTo(-10.3,-27.4).lineTo(0,-27.4).lineTo(0,-20.6).lineTo(17.1,-20.6).lineTo(27.4,-3.5).lineTo(20.6,-3.5).lineTo(20.6,24).lineTo(27.4,24).lineTo(27.4,27.4).closePath().moveTo(3.4,24).lineTo(13.7,24).lineTo(13.7,3.4).lineTo(3.4,3.4).closePath().moveTo(-13.7,10.2).lineTo(-3.4,10.2).lineTo(-3.4,-0).lineTo(-13.7,-0).closePath();
	this.shape_93.setTransform(-3643.3,278);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#BEC1C4").beginStroke().moveTo(-16.8,14).lineTo(-16.8,-13.9).lineTo(16.8,-13.9).lineTo(16.8,14).closePath();
	this.shape_94.setTransform(-3643.3,288.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-20.6,12).lineTo(-20.6,11.9).lineTo(-27.4,11.9).lineTo(-17.1,-5.2).lineTo(-10.3,-5.2).lineTo(-10.3,-12).lineTo(-0,-12).lineTo(-0,-5.2).lineTo(17.1,-5.2).lineTo(27.4,11.9).lineTo(20.6,11.9).lineTo(20.6,12).closePath();
	this.shape_95.setTransform(-3706,262.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#575F66").beginStroke().moveTo(-27.4,1.9).lineTo(-27.4,-1.6).lineTo(-20.6,-1.6).lineTo(-20.6,-1.8).lineTo(3.4,-1.8).lineTo(3.4,-1.6).lineTo(13.7,-1.6).lineTo(13.7,-1.8).lineTo(20.6,-1.8).lineTo(20.6,-1.6).lineTo(27.4,-1.6).lineTo(27.4,1.9).closePath();
	this.shape_96.setTransform(-3706,303.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.4,27.4).lineTo(-27.4,24).lineTo(-20.6,24).lineTo(-20.6,-3.5).lineTo(-27.4,-3.5).lineTo(-17.1,-20.6).lineTo(-10.3,-20.6).lineTo(-10.3,-27.4).lineTo(-0,-27.4).lineTo(-0,-20.6).lineTo(17.1,-20.6).lineTo(27.4,-3.5).lineTo(20.6,-3.5).lineTo(20.6,24).lineTo(27.4,24).lineTo(27.4,27.4).closePath().moveTo(3.4,24).lineTo(13.7,24).lineTo(13.7,3.4).lineTo(3.4,3.4).closePath().moveTo(-13.7,10.2).lineTo(-3.5,10.2).lineTo(-3.5,-0).lineTo(-13.7,-0).closePath();
	this.shape_97.setTransform(-3706,278);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#BEC1C4").beginStroke().moveTo(-16.8,14).lineTo(-16.8,-13.9).lineTo(16.8,-13.9).lineTo(16.8,14).closePath();
	this.shape_98.setTransform(-3706.1,288.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.9,8.1).lineTo(-16.9,-8.1).lineTo(16.9,-8.1).lineTo(16.9,8.1).closePath();
	this.shape_99.setTransform(-4334.3,201.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.8,13.7).lineTo(-4.8,-13.7).lineTo(4.8,-13.7).lineTo(4.8,13.7).closePath();
	this.shape_100.setTransform(-4241.4,249.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.8,13.7).lineTo(-4.8,-13.7).lineTo(4.8,-13.7).lineTo(4.8,13.7).closePath();
	this.shape_101.setTransform(-4255.6,249.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.8,13.7).lineTo(-4.8,-13.7).lineTo(4.8,-13.7).lineTo(4.8,13.7).closePath();
	this.shape_102.setTransform(-4270.3,249.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.3,10.8).curveTo(-23,6.3,-23,-0).curveTo(-23,-6.3,-16.3,-10.7).curveTo(-9.5,-15.2,-0,-15.2).curveTo(9.5,-15.2,16.3,-10.7).curveTo(23,-6.3,23,-0).curveTo(23,6.3,16.3,10.8).curveTo(9.5,15.2,-0,15.2).curveTo(-9.5,15.2,-16.3,10.8).closePath();
	this.shape_103.setTransform(-4254.4,222.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_104.setTransform(-4309.3,262.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_105.setTransform(-4309.3,252.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_106.setTransform(-4309.3,243.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_107.setTransform(-4309.3,234.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_108.setTransform(-4309.3,225.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_109.setTransform(-4309.3,216.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_110.setTransform(-4336.6,262.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_111.setTransform(-4336.6,252.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_112.setTransform(-4336.6,243.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_113.setTransform(-4336.6,234.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_114.setTransform(-4336.6,225.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_115.setTransform(-4336.6,216.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#494A4E").beginStroke().moveTo(-35.2,41.9).lineTo(-35.2,-41.8).lineTo(35.2,-41.8).lineTo(35.2,41.9).closePath();
	this.shape_116.setTransform(-4259.5,263.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-35.2,50.7).lineTo(-35.2,-50.7).lineTo(35.2,-50.7).lineTo(35.2,50.7).closePath();
	this.shape_117.setTransform(-4322.2,254.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-3.8,8.6).lineTo(-3.8,-8.6).lineTo(3.8,-8.6).lineTo(3.8,8.6).closePath();
	this.shape_118.setTransform(-4330.3,190.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-10.7,34.9).lineTo(-7.7,-34.9).lineTo(8.4,-34.9).lineTo(10.8,34.9).closePath();
	this.shape_119.setTransform(-4262.9,213.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,15.6).lineTo(-1.7,-15.6).lineTo(1.6,-15.6).lineTo(1.6,15.6).closePath();
	this.shape_120.setTransform(-3796.2,287);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.6,14.5).curveTo(-9.3,8.5,-9.3,0).curveTo(-9.3,-8.5,-6.6,-14.5).curveTo(-3.9,-20.5,-0,-20.5).curveTo(3.9,-20.5,6.6,-14.5).curveTo(9.3,-8.5,9.3,0).curveTo(9.3,8.5,6.6,14.5).curveTo(3.9,20.5,-0,20.5).curveTo(-3.9,20.5,-6.6,14.5).closePath();
	this.shape_121.setTransform(-3796.3,263.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-1.7,12.3).lineTo(-1.7,-12.3).lineTo(1.6,-12.3).lineTo(1.6,12.3).closePath();
	this.shape_122.setTransform(-3773.1,290.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-7.8,7.8).curveTo(-11,4.6,-11,0).curveTo(-11,-4.5,-7.8,-7.8).curveTo(-4.6,-11,-0,-11).curveTo(4.6,-11,7.8,-7.8).curveTo(11,-4.5,11,0).curveTo(11,4.6,7.8,7.8).curveTo(4.5,11,-0,11).curveTo(-4.6,11,-7.8,7.8).closePath();
	this.shape_123.setTransform(-3773.2,273.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#595959").beginStroke().moveTo(-1.6,13.1).lineTo(-1.6,-13.1).lineTo(1.6,-13.1).lineTo(1.6,13.1).closePath();
	this.shape_124.setTransform(-3750.1,291.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#595959").beginStroke().moveTo(-6.5,8.5).curveTo(-9.2,5,-9.2,0).curveTo(-9.2,-4.9,-6.5,-8.4).curveTo(-3.8,-11.9,-0,-11.9).curveTo(3.8,-11.9,6.5,-8.4).curveTo(9.2,-4.9,9.2,0).curveTo(9.2,5,6.5,8.5).curveTo(3.8,11.9,-0,11.9).curveTo(-3.8,11.9,-6.5,8.5).closePath();
	this.shape_125.setTransform(-3750.7,269.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-93.1,13.5).lineTo(-93.1,-13.5).lineTo(93,-13.5).lineTo(93,13.5).closePath();
	this.shape_126.setTransform(-4004,290.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-68.5,39.1).lineTo(-68.5,-39.1).lineTo(68.5,-39.1).lineTo(68.5,39.1).closePath();
	this.shape_127.setTransform(-4159.7,265);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#494A4E").beginStroke().moveTo(-44.3,1.8).lineTo(-44.3,-1.8).lineTo(44.3,-1.8).lineTo(44.3,1.8).closePath();
	this.shape_128.setTransform(-4036.2,276.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.4,1.8).lineTo(-16.4,-1.8).lineTo(16.4,-1.8).lineTo(16.4,1.8).closePath();
	this.shape_129.setTransform(-4035.8,149.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.4,1.8).lineTo(-16.4,-1.8).lineTo(16.4,-1.8).lineTo(16.4,1.8).closePath();
	this.shape_130.setTransform(-4035.8,143.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.5,3.2).lineTo(-17.5,-3.2).lineTo(17.5,-3.2).lineTo(17.5,3.2).closePath();
	this.shape_131.setTransform(-4036.2,136);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-41.8,70.7).curveTo(-36.9,66.1,-31.4,55).curveTo(-20.5,32.5,-17.8,-0.8).curveTo(-16.8,-11.2,-16.3,-42.1).lineTo(-16,-70.8).lineTo(15.2,-70.8).lineTo(14.5,-43.1).curveTo(13.9,-13.4,14.6,-2.6).curveTo(16.5,34.3,29.3,56.2).curveTo(35.8,67.2,41.8,70.7).closePath();
	this.shape_132.setTransform(-4035.5,207.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.2).lineTo(-17.8,-1.2).lineTo(17.8,-1.2).lineTo(17.8,1.2).closePath();
	this.shape_133.setTransform(-4127.2,209.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.6).lineTo(-17.8,-1.6).lineTo(17.8,-1.6).lineTo(17.8,1.6).closePath();
	this.shape_134.setTransform(-4127.2,205.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.5).lineTo(-2.8,-2.5).lineTo(2.8,-2.5).lineTo(2.8,2.5).closePath();
	this.shape_135.setTransform(-4127.2,176.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#39434B").beginStroke().moveTo(-31.7,2.1).lineTo(-31.7,-2.1).lineTo(31.7,-2.1).lineTo(31.7,2.1).closePath();
	this.shape_136.setTransform(-4127.3,258.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-19,3.5).lineTo(-19,-3.5).lineTo(18.9,-3.5).lineTo(18.9,3.5).closePath();
	this.shape_137.setTransform(-4127.3,223.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#39434B").beginStroke().moveTo(-1.5,12.5).curveTo(-5.9,7.3,-8.1,-1.7).curveTo(-9.4,-7.1,-9.8,-13.4).lineTo(-9.9,-18.9).lineTo(-7.1,-18.7).lineTo(-7,-13.6).curveTo(-6.6,-7.6,-5.4,-2.4).curveTo(-1.4,14,9.9,16.1).lineTo(9.4,18.8).curveTo(3,17.7,-1.5,12.5).closePath();
	this.shape_138.setTransform(-4108.2,241.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#39434B").beginStroke().moveTo(-9.9,16.1).curveTo(1.4,14,5.4,-2.4).curveTo(6.6,-7.6,7,-13.6).lineTo(7.1,-18.7).lineTo(9.9,-18.9).lineTo(9.8,-13.4).curveTo(9.4,-7.1,8.1,-1.7).curveTo(5.9,7.3,1.5,12.5).curveTo(-3,17.7,-9.4,18.8).closePath();
	this.shape_139.setTransform(-4145.6,241.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,27.6).curveTo(-17.4,22.6,-17.4,15.3).lineTo(-17.4,-15.3).curveTo(-17.4,-22.6,-12.3,-27.6).curveTo(-7.2,-32.8,0,-32.8).curveTo(7.2,-32.8,12.3,-27.6).curveTo(17.4,-22.6,17.4,-15.3).lineTo(17.4,15.3).curveTo(17.4,22.6,12.3,27.6).curveTo(7.2,32.7,0,32.7).curveTo(-7.2,32.7,-12.3,27.6).closePath();
	this.shape_140.setTransform(-4127.4,209.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.2).lineTo(-17.8,-1.2).lineTo(17.8,-1.2).lineTo(17.8,1.2).closePath();
	this.shape_141.setTransform(-4194.5,209.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.6).lineTo(-17.8,-1.6).lineTo(17.8,-1.6).lineTo(17.8,1.6).closePath();
	this.shape_142.setTransform(-4194.5,205.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.5).lineTo(-2.8,-2.5).lineTo(2.8,-2.5).lineTo(2.8,2.5).closePath();
	this.shape_143.setTransform(-4194.5,176.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#39434B").beginStroke().moveTo(-31.7,2.1).lineTo(-31.7,-2.1).lineTo(31.7,-2.1).lineTo(31.7,2.1).closePath();
	this.shape_144.setTransform(-4194.6,258.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-19,3.5).lineTo(-19,-3.5).lineTo(19,-3.5).lineTo(19,3.5).closePath();
	this.shape_145.setTransform(-4194.6,223.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#39434B").beginStroke().moveTo(-1.5,12.5).curveTo(-5.9,7.3,-8.1,-1.7).curveTo(-9.4,-7.1,-9.8,-13.4).lineTo(-9.9,-18.9).lineTo(-7.1,-18.7).lineTo(-7,-13.6).curveTo(-6.6,-7.6,-5.4,-2.4).curveTo(-1.4,14,9.9,16.1).lineTo(9.4,18.8).curveTo(3,17.7,-1.5,12.5).closePath();
	this.shape_146.setTransform(-4175.5,241.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#39434B").beginStroke().moveTo(-9.9,16.1).curveTo(1.4,14,5.4,-2.4).curveTo(6.7,-7.6,7,-13.6).lineTo(7.1,-18.7).lineTo(9.9,-18.9).lineTo(9.8,-13.4).curveTo(9.4,-7.1,8.1,-1.7).curveTo(6,7.3,1.4,12.5).curveTo(-3,17.7,-9.4,18.8).closePath();
	this.shape_147.setTransform(-4212.9,241.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,27.6).curveTo(-17.4,22.6,-17.4,15.3).lineTo(-17.4,-15.3).curveTo(-17.4,-22.6,-12.3,-27.6).curveTo(-7.2,-32.8,0,-32.8).curveTo(7.2,-32.8,12.3,-27.6).curveTo(17.4,-22.6,17.4,-15.3).lineTo(17.4,15.3).curveTo(17.4,22.6,12.3,27.6).curveTo(7.2,32.7,0,32.7).curveTo(-7.2,32.7,-12.3,27.6).closePath();
	this.shape_148.setTransform(-4194.7,209.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_149.setTransform(-3924.3,262.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_150.setTransform(-3938.6,262.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,4.5).lineTo(-4.6,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_151.setTransform(-3952.8,262.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_152.setTransform(-3967,262.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_153.setTransform(-3981.3,262.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_154.setTransform(-3995.5,262.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_155.setTransform(-3924.3,246.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_156.setTransform(-3938.6,246.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,4.5).lineTo(-4.6,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_157.setTransform(-3952.8,246.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_158.setTransform(-3967,246.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_159.setTransform(-3981.3,246.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_160.setTransform(-3995.5,246.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_161.setTransform(-3924.3,231.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_162.setTransform(-3938.6,231.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,4.6).lineTo(-4.6,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_163.setTransform(-3952.8,231.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_164.setTransform(-3967,231.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_165.setTransform(-3981.3,231.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_166.setTransform(-3995.5,231.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#494A4E").beginStroke().moveTo(-33,22).lineTo(-33,-22).lineTo(33,-22).lineTo(33,22).closePath();
	this.shape_167.setTransform(-3951.5,228.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#494A4E").beginStroke().moveTo(-47.9,30.4).lineTo(-47.9,-30.4).lineTo(47.9,-30.4).lineTo(47.9,30.4).closePath();
	this.shape_168.setTransform(-3958.6,248.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,16.5).curveTo(-25.2,9.6,-25.2,-0).curveTo(-25.2,-9.7,-17.8,-16.5).curveTo(-10.4,-23.3,0,-23.3).curveTo(10.5,-23.3,17.8,-16.5).curveTo(25.2,-9.7,25.2,-0).curveTo(25.2,9.6,17.8,16.5).curveTo(10.5,23.3,0,23.3).curveTo(-10.4,23.3,-17.8,16.5).closePath();
	this.shape_169.setTransform(-3950.2,215.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-7.6,1.1).curveTo(-8.1,1.1,-8.4,0.8).curveTo(-8.7,0.5,-8.7,0).curveTo(-8.7,-0.4,-8.4,-0.7).curveTo(-8.1,-1.1,-7.6,-1.1).lineTo(7.6,-1.1).curveTo(8.1,-1.1,8.4,-0.7).curveTo(8.7,-0.4,8.7,0).curveTo(8.7,0.5,8.4,0.8).curveTo(8.1,1.1,7.6,1.1).closePath();
	this.shape_170.setTransform(-3949.4,166.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,55.1).lineTo(-6.4,-55.1).lineTo(7,-55.1).lineTo(8.9,55.1).closePath();
	this.shape_171.setTransform(-3949.6,221.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill().beginStroke("#3E3E3F").setStrokeStyle(6).moveTo(-33.6,13.7).lineTo(-33.6,-12.3).lineTo(33.6,-12.3).lineTo(33.6,15.4);
	this.shape_172.setTransform(-4160.9,163);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill().beginStroke("#3E3E3F").setStrokeStyle(6).moveTo(26.6,30.7).lineTo(26.6,15.1).lineTo(13,15.1).lineTo(13,-0.5).lineTo(1.6,-0.5).lineTo(1.6,-14).lineTo(-10.2,-14).lineTo(-10.2,-27.7).lineTo(-29.6,-27.7);
	this.shape_173.setTransform(-4085.6,216.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-81.2,17.4).lineTo(-81.2,-17.4).lineTo(81.2,-17.4).lineTo(81.2,17.4).closePath();
	this.shape_174.setTransform(-4563.4,287);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-5.2,42.7).lineTo(-5.2,38.6).lineTo(-0.5,38.6).lineTo(-0.5,35.7).lineTo(4,35.7).lineTo(4,-15.9).lineTo(-1.7,-15.9).lineTo(-1.7,-19.4).lineTo(-52.8,-19.4).lineTo(-52.8,10).lineTo(-51.1,10).lineTo(-51.1,12.5).lineTo(-52.8,12.5).lineTo(-53.2,16.3).lineTo(-53.5,16.4).curveTo(-54.2,16.7,-54.8,17.3).curveTo(-55.7,18.1,-55.7,18.8).curveTo(-55.7,19.6,-54.3,20.5).curveTo(-52.7,21.4,-52.4,21.1).curveTo(-52.1,20.8,-52.2,19.8).curveTo(-52.3,18.8,-52.6,17.8).lineTo(-51.5,17.4).curveTo(-50.3,20.9,-51.6,22).curveTo(-52.1,22.3,-52.6,22.3).curveTo(-53.3,22.3,-54.9,21.5).curveTo(-56.9,20.2,-56.9,18.7).curveTo(-56.8,17,-54.3,15.5).lineTo(-54,12.5).lineTo(-56.2,12.5).lineTo(-56.2,10).lineTo(-53.9,10).lineTo(-53.9,-19.4).lineTo(-55.1,-19.4).lineTo(-55.1,-27.8).lineTo(21.1,-42.7).lineTo(56.9,-27.5).lineTo(56.9,-19.4).lineTo(55.7,-19.4).lineTo(55.7,-9).lineTo(45.3,-9).lineTo(45.3,-19.4).lineTo(28.2,-19.4).lineTo(28.2,35.7).lineTo(33.1,35.7).lineTo(33.1,38.6).lineTo(36.6,38.6).lineTo(36.6,42.7).closePath().moveTo(22.5,34.8).lineTo(15.3,28.2).lineTo(8.6,34.3).lineTo(8.6,34.8).lineTo(22.5,34.8).closePath().moveTo(16.1,27.4).lineTo(23.5,34.2).lineTo(23.5,20.5).closePath().moveTo(8.6,32.7).lineTo(14.4,27.4).lineTo(8.6,22).closePath().moveTo(8.6,18.9).lineTo(8.6,20.4).lineTo(15.3,26.6).lineTo(23.5,18.9).lineTo(23.5,18.7).closePath().moveTo(8.6,16.1).lineTo(8.6,17.7).lineTo(23.5,17.5).lineTo(23.5,17.1).lineTo(15.7,9).closePath().moveTo(16.5,8.2).lineTo(23.5,15.4).lineTo(23.5,1.1).closePath().moveTo(8.6,14.4).lineTo(14.8,8.2).lineTo(8.6,1.8).closePath().moveTo(-52.8,11.3).lineTo(-52.2,11.3).lineTo(-52.2,11.2).lineTo(-52.8,11.2).closePath().moveTo(-55.1,11.3).lineTo(-53.9,11.3).lineTo(-53.9,11.2).lineTo(-55.1,11.2).closePath().moveTo(8.6,0.2).lineTo(15.7,7.4).lineTo(23.5,-0.5).lineTo(23.5,-1.4).lineTo(8.6,-1.4).closePath().moveTo(8.6,-4.1).lineTo(8.6,-2.6).lineTo(23.5,-2.6).lineTo(23.5,-3.5).lineTo(16,-10.8).closePath().moveTo(16.8,-11.6).lineTo(23.5,-5.1).lineTo(23.5,-17.8).closePath().moveTo(8.6,-5.6).lineTo(15.1,-11.6).lineTo(8.6,-18).closePath().moveTo(16,-12.4).lineTo(22.9,-18.8).lineTo(9.5,-18.8).closePath().moveTo(27.6,-23.4).lineTo(28.2,-23.4).lineTo(28.2,-22.9).lineTo(53.4,-22.9).lineTo(53.4,-25).lineTo(27.6,-30.4).closePath().moveTo(-51.6,-24.8).lineTo(-51.6,-22.9).lineTo(4,-22.9).lineTo(4,-23.4).lineTo(4.1,-23.4).lineTo(4.1,-31.3).closePath().moveTo(7.4,-23.4).lineTo(24.1,-23.4).lineTo(24.1,-30.4).closePath().moveTo(5.2,-31.4).lineTo(5.2,-23.8).lineTo(23.3,-31.3).lineTo(16.8,-32.7).closePath().moveTo(37.8,-31.8).lineTo(21.6,-38.7).lineTo(19.7,-35.7).lineTo(37.8,-31.8).closePath().moveTo(-9.1,-33.3).lineTo(15.8,-36.1).lineTo(17.3,-38.4).closePath();
	this.shape_175.setTransform(-4594,229);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#434444").beginStroke().moveTo(-116.8,5.6).lineTo(-116.8,-5.6).lineTo(116.7,-5.6).lineTo(116.7,5.6).closePath();
	this.shape_176.setTransform(-3499.1,73.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_177.setTransform(-3440.2,112.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_178.setTransform(-3440.2,148.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_179.setTransform(-3440.2,184.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_180.setTransform(-3498.5,112.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_181.setTransform(-3498.5,148.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_182.setTransform(-3498.5,184.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_183.setTransform(-3556.9,112.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_184.setTransform(-3556.9,148.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_185.setTransform(-3556.9,184.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#434444").beginStroke().moveTo(-59.3,4.3).lineTo(-59.3,-4.3).lineTo(59.2,-4.3).lineTo(59.2,4.3).closePath();
	this.shape_186.setTransform(-3465.4,290.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#434444").beginStroke().moveTo(-84.3,3).lineTo(-84.3,-3).lineTo(84.3,-3).lineTo(84.3,3).closePath();
	this.shape_187.setTransform(-3466.7,246.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_188.setTransform(-3453.7,228.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_189.setTransform(-3468.3,228.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_190.setTransform(-3424.5,228.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_191.setTransform(-3409.9,228.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#28292B").beginStroke().moveTo(-10.1,15.3).lineTo(-10.1,-15.3).lineTo(-3.1,-15.3).lineTo(10.1,15.3).closePath();
	this.shape_192.setTransform(-3392.5,228.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_193.setTransform(-3439.1,228.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#28292B").beginStroke().moveTo(-8.5,15.3).lineTo(4.3,-15.3).lineTo(8.5,-15.3).lineTo(8.5,15.3).closePath();
	this.shape_194.setTransform(-3542.5,228.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_195.setTransform(-3526.8,228.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_196.setTransform(-3497.6,228.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_197.setTransform(-3512.2,228.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_198.setTransform(-3482.9,228.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#494A4E").beginStroke().moveTo(-53.6,21.4).lineTo(-53.6,-21.4).lineTo(53.7,-21.4).lineTo(53.7,21.4).closePath();
	this.shape_199.setTransform(-3465,265);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#434444").beginStroke().moveTo(-15,28.1).lineTo(-15,-28.1).lineTo(15,-28.1).lineTo(15,28.1).closePath();
	this.shape_200.setTransform(-3579.5,278.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#28292B").beginStroke().moveTo(-74.5,36.5).lineTo(-74.5,-36.5).lineTo(74.5,-36.5).lineTo(74.5,36.5).closePath();
	this.shape_201.setTransform(-3465.6,269.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#494A4E").beginStroke().moveTo(-108.6,114.5).lineTo(-108.6,-114.5).lineTo(108.6,-114.5).lineTo(108.6,114.5).closePath();
	this.shape_202.setTransform(-3499.5,193.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.3,2.9).lineTo(-21.3,-2.9).lineTo(21.3,-2.9).lineTo(21.3,2.9).closePath();
	this.shape_203.setTransform(-3310.4,304.9,0.562,0.562);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-18.8,2.9).lineTo(-18.8,-2.8).lineTo(18.9,-2.8).lineTo(18.9,2.9).closePath();
	this.shape_204.setTransform(-3310.4,301.7,0.562,0.562);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.3,0.6).curveTo(-3.8,0.6,-3.8,0).curveTo(-3.8,-0.6,-3.3,-0.6).lineTo(3.3,-0.6).curveTo(3.8,-0.6,3.8,0).curveTo(3.8,0.6,3.3,0.6).closePath();
	this.shape_205.setTransform(-3304.6,281,0.562,0.562);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.9,5.1).curveTo(-2.7,4.3,-2.7,3.1).lineTo(-2.7,-3.1).curveTo(-2.7,-4.3,-1.9,-5.1).curveTo(-1.1,-5.9,0,-5.9).curveTo(1.1,-5.9,1.9,-5.1).curveTo(2.7,-4.3,2.7,-3.1).lineTo(2.7,3.1).curveTo(2.7,4.3,1.9,5.1).curveTo(1.1,5.9,0,5.9).curveTo(-1.1,5.9,-1.9,5.1).closePath();
	this.shape_206.setTransform(-3306.1,280.9,0.562,0.562);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.2,33.7).lineTo(-13.2,-29.5).curveTo(-13.3,-31.2,-12,-32.5).curveTo(-10.7,-33.7,-8.9,-33.7).lineTo(8.9,-33.7).curveTo(10.7,-33.7,11.9,-32.5).curveTo(13.2,-31.2,13.2,-29.5).lineTo(13.2,33.7).closePath();
	this.shape_207.setTransform(-3310.5,282.1,0.562,0.562);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.2,35.3).lineTo(-16.2,-35.2).lineTo(16.2,-35.2).lineTo(16.2,35.3).closePath();
	this.shape_208.setTransform(-3310.4,281.2,0.562,0.562);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_209.setTransform(-3334.9,284.2,0.562,0.562);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_210.setTransform(-3334.9,276.7,0.562,0.562);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_211.setTransform(-3334.9,269.2,0.562,0.562);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_212.setTransform(-3327,276.7,0.562,0.562);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_213.setTransform(-3334.6,276.7,0.562,0.562);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_214.setTransform(-3342.4,276.7,0.562,0.562);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.4,14).lineTo(-14.4,-14).lineTo(14.3,-14).lineTo(14.3,14).closePath();
	this.shape_215.setTransform(-3334.7,276.7,0.562,0.562);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_216.setTransform(-3356.9,284.2,0.562,0.562);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_217.setTransform(-3356.9,276.7,0.562,0.562);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,0.6).lineTo(-14,-0.6).lineTo(13.9,-0.6).lineTo(13.9,0.6).closePath();
	this.shape_218.setTransform(-3356.9,269.2,0.562,0.562);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_219.setTransform(-3349,276.7,0.562,0.562);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_220.setTransform(-3356.6,276.7,0.562,0.562);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.6,14).lineTo(-0.6,-14).lineTo(0.6,-14).lineTo(0.6,14).closePath();
	this.shape_221.setTransform(-3364.4,276.7,0.562,0.562);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.4,14).lineTo(-14.4,-14).lineTo(14.3,-14).lineTo(14.3,14).closePath();
	this.shape_222.setTransform(-3356.7,276.7,0.562,0.562);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-11.2,1.9).curveTo(-12,1.9,-12.5,1.3).curveTo(-13,0.8,-13,-0).curveTo(-13,-0.8,-12.5,-1.3).curveTo(-12,-1.9,-11.2,-1.8).lineTo(11.1,-1.8).curveTo(11.9,-1.9,12.5,-1.3).curveTo(13,-0.8,13,-0).curveTo(13,0.8,12.5,1.3).curveTo(11.9,1.9,11.1,1.9).closePath();
	this.shape_223.setTransform(-3301.1,219.8,0.562,0.562);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-11.4,8.1).lineTo(-11.4,-8.1).lineTo(11.4,-8.1).lineTo(11.4,8.1).closePath();
	this.shape_224.setTransform(-3301.1,225.4,0.562,0.562);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-89.2,25.2).lineTo(-72.9,-25.2).lineTo(69,-25.2).lineTo(89.2,25.2).closePath();
	this.shape_225.setTransform(-3327.7,244.1,0.562,0.562);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#494A4E").beginStroke().moveTo(-77.6,43).lineTo(-77.6,-43).lineTo(77.6,-43).lineTo(77.6,43).closePath();
	this.shape_226.setTransform(-3327.3,282.4,0.562,0.562);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,1.4).lineTo(-23.3,-1.4).lineTo(23.3,-1.4).lineTo(20.5,1.4).closePath();
	this.shape_227.setTransform(-2982.6,270.1,0.562,0.562);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,31.7).lineTo(-1.4,-31.7).lineTo(1.4,-31.7).lineTo(1.4,31.7).closePath();
	this.shape_228.setTransform(-2970.3,287.1,0.562,0.562);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,31.7).lineTo(-23.3,-31.7).lineTo(23.3,-31.7).lineTo(23.3,31.7).closePath();
	this.shape_229.setTransform(-2982.6,287.1,0.562,0.562);

	this.instance_2 = new lib.nuka36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3007.9,147.1,0.562,0.562,0,0,0,7,10.6);
	this.instance_2.alpha = 0.699;

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_230.setTransform(-3007,154.4,0.562,0.562);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_231.setTransform(-3007,147.7,0.562,0.562);

	this.instance_3 = new lib.nuka35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2991.9,147.1,0.562,0.562,0,0,0,7,10.6);
	this.instance_3.alpha = 0.699;

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_232.setTransform(-2990.9,154.4,0.562,0.562);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_233.setTransform(-2990.9,147.7,0.562,0.562);

	this.instance_4 = new lib.nuka34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3007.9,173.7,0.562,0.562,0,0,0,7,11.8);
	this.instance_4.alpha = 0.699;

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_234.setTransform(-3007,181,0.562,0.562);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_235.setTransform(-3007,174.2,0.562,0.562);

	this.instance_5 = new lib.nuka33();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2991.9,173.7,0.562,0.562,0,0,0,7,11.8);
	this.instance_5.alpha = 0.699;

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_236.setTransform(-2990.9,181,0.562,0.562);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_237.setTransform(-2990.9,174.2,0.562,0.562);

	this.instance_6 = new lib.nuka32();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2976.6,173.7,0.562,0.562,0,0,0,6.4,11.8);
	this.instance_6.alpha = 0.699;

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_238.setTransform(-2975.5,181,0.562,0.562);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_239.setTransform(-2975.5,174.2,0.562,0.562);

	this.instance_7 = new lib.nuka31();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-2976.6,147.1,0.562,0.562,0,0,0,6.4,10.6);
	this.instance_7.alpha = 0.699;

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_240.setTransform(-2975.5,154.4,0.562,0.562);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_241.setTransform(-2975.5,147.7,0.562,0.562);

	this.instance_8 = new lib.nuka30();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3007.9,274.4,0.562,0.562,0,0,0,7,12);
	this.instance_8.alpha = 0.699;

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_242.setTransform(-3007,281.7,0.562,0.562);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_243.setTransform(-3007,275,0.562,0.562);

	this.instance_9 = new lib.nuka29();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-2960.4,274.4,0.562,0.562,0,0,0,6.5,12);
	this.instance_9.alpha = 0.699;

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_244.setTransform(-2959.3,281.7,0.562,0.562);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_245.setTransform(-2959.3,275,0.562,0.562);

	this.instance_10 = new lib.nuka28();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-3007.9,250.9,0.562,0.562,0,0,0,7,12);
	this.instance_10.alpha = 0.699;

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_246.setTransform(-3007,258.2,0.562,0.562);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_247.setTransform(-3007,251.4,0.562,0.562);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_248.setTransform(-2959.3,258.2,0.562,0.562);

	this.instance_11 = new lib.nuka7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-2960.4,250.9,0.562,0.562,0,0,0,6.6,12);
	this.instance_11.alpha = 0.699;

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_249.setTransform(-2959.3,251.4,0.562,0.562);

	this.instance_12 = new lib.nuka27();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-2991.9,250.9,0.562,0.562,0,0,0,7,12);
	this.instance_12.alpha = 0.699;

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-9.9,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-9.9,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_250.setTransform(-2990.8,258.2,0.562,0.562);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_251.setTransform(-2990.9,251.4,0.562,0.562);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(9.9,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(9.9,1,9.6,1).closePath();
	this.shape_252.setTransform(-2975.4,258.2,0.562,0.562);

	this.instance_13 = new lib.nuka6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-2976.6,250.9,0.562,0.562,0,0,0,6.4,12);
	this.instance_13.alpha = 0.699;

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_253.setTransform(-2975.5,251.4,0.562,0.562);

	this.instance_14 = new lib.nuka26();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-3007.9,225.2,0.562,0.562,0,0,0,7,11.8);
	this.instance_14.alpha = 0.699;

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_254.setTransform(-3007,232.5,0.562,0.562);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_255.setTransform(-3007,225.6,0.562,0.562);

	this.instance_15 = new lib.nuka25();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-2991.9,225.2,0.562,0.562,0,0,0,7,11.8);
	this.instance_15.alpha = 0.699;

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_256.setTransform(-2990.9,232.5,0.562,0.562);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_257.setTransform(-2990.9,225.6,0.562,0.562);

	this.instance_16 = new lib.nuka24();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-2976.6,225.2,0.562,0.562,0,0,0,6.4,11.8);
	this.instance_16.alpha = 0.699;

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_258.setTransform(-2975.5,232.5,0.562,0.562);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_259.setTransform(-2975.5,225.6,0.562,0.562);

	this.instance_17 = new lib.nuka23();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-2960.4,225.2,0.562,0.562,0,0,0,6.5,11.8);
	this.instance_17.alpha = 0.699;

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_260.setTransform(-2959.3,232.5,0.562,0.562);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_261.setTransform(-2959.3,225.6,0.562,0.562);

	this.instance_18 = new lib.nuka22();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-3007.9,199.4,0.562,0.562,0,0,0,7,11.8);
	this.instance_18.alpha = 0.699;

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_262.setTransform(-3007,206.8,0.562,0.562);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_263.setTransform(-3007,199.9,0.562,0.562);

	this.instance_19 = new lib.nuka21();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-2991.9,199.4,0.562,0.562,0,0,0,7,11.8);
	this.instance_19.alpha = 0.699;

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_264.setTransform(-2990.9,206.8,0.562,0.562);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_265.setTransform(-2990.9,199.9,0.562,0.562);

	this.instance_20 = new lib.nuka20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-2976.6,199.4,0.562,0.562,0,0,0,6.4,11.8);
	this.instance_20.alpha = 0.699;

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_266.setTransform(-2975.5,206.8,0.562,0.562);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_267.setTransform(-2975.5,199.9,0.562,0.562);

	this.instance_21 = new lib.nuka19();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-2960.4,199.4,0.562,0.562,0,0,0,6.5,11.8);
	this.instance_21.alpha = 0.699;

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_268.setTransform(-2959.3,206.8,0.562,0.562);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_269.setTransform(-2959.3,199.9,0.562,0.562);

	this.instance_22 = new lib.nuka18();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-2960.4,147.1,0.562,0.562,0,0,0,6.5,10.6);
	this.instance_22.alpha = 0.699;

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_270.setTransform(-2959.3,154.4,0.562,0.562);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_271.setTransform(-2959.3,147.7,0.562,0.562);

	this.instance_23 = new lib.nuka17();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-2960.4,173.7,0.562,0.562,0,0,0,6.5,11.8);
	this.instance_23.alpha = 0.699;

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_272.setTransform(-2959.3,181,0.562,0.562);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.4).lineTo(-8.9,-12.4).lineTo(8.9,-12.4).lineTo(8.9,12.4).closePath();
	this.shape_273.setTransform(-2959.3,174.2,0.562,0.562);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#28292B").beginStroke().moveTo(-65.3,4.6).curveTo(-67.1,4.6,-68.4,3.2).curveTo(-69.8,1.9,-69.8,-0).curveTo(-69.8,-1.9,-68.4,-3.2).curveTo(-67.1,-4.6,-65.3,-4.6).lineTo(65.2,-4.6).curveTo(67.2,-4.6,68.4,-3.2).curveTo(69.8,-1.9,69.8,-0).curveTo(69.8,1.9,68.4,3.2).curveTo(67.2,4.6,65.2,4.6).closePath();
	this.shape_274.setTransform(-2982.4,128.7,0.562,0.562);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.6,157.9).lineTo(-66.6,-157.9).lineTo(66.6,-157.9).lineTo(66.6,157.9).closePath();
	this.shape_275.setTransform(-2982.4,216.3,0.562,0.562);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.2).lineTo(-22.6,-12.2).lineTo(22.6,-12.2).lineTo(22.6,12.2).closePath();
	this.shape_276.setTransform(-2966.4,120.7,0.562,0.562);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_277.setTransform(-3191.4,267.4,0.562,0.562);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_278.setTransform(-3199.4,267.4,0.562,0.562);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_279.setTransform(-3207.5,267.4,0.562,0.562);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_280.setTransform(-3216.4,267.4,0.562,0.562);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_281.setTransform(-3224.9,267.4,0.562,0.562);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_282.setTransform(-3232.9,267.4,0.562,0.562);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_283.setTransform(-3241,267.4,0.562,0.562);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_284.setTransform(-3249,267.4,0.562,0.562);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,0,8.3).curveTo(-3.4,8.3,-5.9,5.9).closePath();
	this.shape_285.setTransform(-3257.1,267.4,0.562,0.562);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.5,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.5,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_286.setTransform(-3265.1,267.4,0.562,0.562);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.9,5.9).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.5,-5.9,-5.9).curveTo(-3.5,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.5,8.3,-0).curveTo(8.3,3.4,5.9,5.9).curveTo(3.4,8.3,-0,8.3).curveTo(-3.5,8.3,-5.9,5.9).closePath();
	this.shape_287.setTransform(-3273.1,267.4,0.562,0.562);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-81.1,18.2).lineTo(-66.8,-18.2).lineTo(66.7,-18.2).lineTo(81,18.2).closePath();
	this.shape_288.setTransform(-3232.2,256.3,0.562,0.562);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-66.8,4.4).lineTo(-66.8,-4.4).lineTo(66.8,-4.4).lineTo(66.8,4.4).closePath();
	this.shape_289.setTransform(-3232.3,243.6,0.562,0.562);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,0.6).curveTo(-4.1,0.6,-4.1,-0).curveTo(-4.1,-0.6,-3.5,-0.6).lineTo(3.6,-0.6).curveTo(4,-0.6,4,-0).curveTo(4,0.6,3.6,0.6).closePath();
	this.shape_290.setTransform(-3242.8,286.8,0.562,0.562);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.1,5.4).curveTo(-2.9,4.5,-2.9,3.3).lineTo(-2.9,-3.3).curveTo(-2.9,-4.5,-2.1,-5.4).curveTo(-1.2,-6.3,-0,-6.3).curveTo(1.2,-6.3,2.1,-5.4).curveTo(2.9,-4.5,2.9,-3.3).lineTo(2.9,3.3).curveTo(2.9,4.5,2.1,5.4).curveTo(1.2,6.2,-0,6.2).curveTo(-1.2,6.2,-2.1,5.4).closePath();
	this.shape_291.setTransform(-3244.5,286.6,0.562,0.562);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.1,38.3).lineTo(-14.1,-33.6).curveTo(-14.1,-35.5,-12.8,-36.9).curveTo(-11.4,-38.3,-9.5,-38.3).lineTo(9.5,-38.3).curveTo(11.4,-38.3,12.8,-36.9).curveTo(14.1,-35.5,14.1,-33.6).lineTo(14.1,38.3).closePath();
	this.shape_292.setTransform(-3249.1,286.6,0.562,0.562);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.2,37.6).lineTo(-17.2,-37.6).lineTo(17.2,-37.6).lineTo(17.2,37.6).closePath();
	this.shape_293.setTransform(-3249,287,0.562,0.562);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.2).lineTo(-27.6,-1.2).lineTo(27.6,-1.2).lineTo(27.6,1.2).closePath();
	this.shape_294.setTransform(-3212.7,298.6,0.562,0.562);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.2).lineTo(-27.6,-1.2).lineTo(27.6,-1.2).lineTo(27.6,1.2).closePath();
	this.shape_295.setTransform(-3212.7,287.7,0.562,0.562);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,1.1).lineTo(-27.6,-1.1).lineTo(27.6,-1.1).lineTo(27.6,1.1).closePath();
	this.shape_296.setTransform(-3212.7,276.9,0.562,0.562);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.1,20.5).lineTo(-1.1,-20.5).lineTo(1.1,-20.5).lineTo(1.1,20.5).closePath();
	this.shape_297.setTransform(-3197.9,287.7,0.562,0.562);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.1,20.5).lineTo(-1.1,-20.5).lineTo(1.1,-20.5).lineTo(1.1,20.5).closePath();
	this.shape_298.setTransform(-3212.7,287.7,0.562,0.562);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.2,20.5).lineTo(-1.2,-20.5).lineTo(1.1,-20.5).lineTo(1.1,20.5).closePath();
	this.shape_299.setTransform(-3227.6,287.7,0.562,0.562);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-27.6,20.5).lineTo(-27.6,-20.5).lineTo(27.6,-20.5).lineTo(27.6,20.5).closePath();
	this.shape_300.setTransform(-3212.7,287.7,0.562,0.562);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#494A4E").beginStroke().moveTo(-71.7,43).lineTo(-71.7,-43).lineTo(71.7,-43).lineTo(71.7,43).closePath();
	this.shape_301.setTransform(-3232.3,284,0.562,0.562);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,1.4).lineTo(-23.3,-1.4).lineTo(23.3,-1.4).lineTo(20.5,1.4).closePath();
	this.shape_302.setTransform(-2899.7,270.1,0.562,0.562);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,31.7).lineTo(-1.4,-31.7).lineTo(1.4,-31.7).lineTo(1.4,31.7).closePath();
	this.shape_303.setTransform(-2887.4,287.1,0.562,0.562);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-23.3,31.7).lineTo(-23.3,-31.7).lineTo(23.3,-31.7).lineTo(23.3,31.7).closePath();
	this.shape_304.setTransform(-2899.7,287.1,0.562,0.562);

	this.instance_24 = new lib.nuka16();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-2925.2,225.2,0.562,0.562,0,0,0,6.8,11.8);
	this.instance_24.alpha = 0.699;

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_305.setTransform(-2924.3,232.5,0.562,0.562);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_306.setTransform(-2924.3,225.6,0.562,0.562);

	this.instance_25 = new lib.nuka15();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-2909.3,225.2,0.562,0.562,0,0,0,6.7,11.8);
	this.instance_25.alpha = 0.699;

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_307.setTransform(-2908.2,232.5,0.562,0.562);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_308.setTransform(-2908.2,225.6,0.562,0.562);

	this.instance_26 = new lib.nuka14();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-2893.7,225.2,0.562,0.562,0,0,0,7,11.8);
	this.instance_26.alpha = 0.699;

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_309.setTransform(-2892.8,232.5,0.562,0.562);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_310.setTransform(-2892.8,225.6,0.562,0.562);

	this.instance_27 = new lib.nuka13();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-2925.2,250.9,0.562,0.562,0,0,0,6.8,12);
	this.instance_27.alpha = 0.699;

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_311.setTransform(-2924.3,258.2,0.562,0.562);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_312.setTransform(-2924.3,251.4,0.562,0.562);

	this.instance_28 = new lib.nuka12();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-2909.3,250.9,0.562,0.562,0,0,0,6.7,12);
	this.instance_28.alpha = 0.699;

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_313.setTransform(-2908.2,258.2,0.562,0.562);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_314.setTransform(-2908.2,251.4,0.562,0.562);

	this.instance_29 = new lib.nuka11();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-2893.7,250.9,0.562,0.562,0,0,0,7,12);
	this.instance_29.alpha = 0.699;

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_315.setTransform(-2892.8,258.2,0.562,0.562);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_316.setTransform(-2892.8,251.4,0.562,0.562);

	this.instance_30 = new lib.nuka10();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-2925.2,274.8,0.562,0.562,0,0,0,6.8,12);
	this.instance_30.alpha = 0.699;

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_317.setTransform(-2924.3,282,0.562,0.562);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_318.setTransform(-2924.3,275,0.562,0.562);

	this.instance_31 = new lib.nuka9();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-2877.7,274.8,0.562,0.562,0,0,0,6.9,12);
	this.instance_31.alpha = 0.699;

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_319.setTransform(-2876.7,282,0.562,0.562);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_320.setTransform(-2876.7,275,0.562,0.562);

	this.instance_32 = new lib.nuka8();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-2877.7,250.9,0.562,0.562,0,0,0,6.9,12);
	this.instance_32.alpha = 0.699;

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_321.setTransform(-2876.7,258.2,0.562,0.562);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_322.setTransform(-2876.7,251.4,0.562,0.562);

	this.instance_33 = new lib.nuka5();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-2877.7,225.2,0.562,0.562,0,0,0,6.9,11.8);
	this.instance_33.alpha = 0.699;

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,-0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,-0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_323.setTransform(-2876.7,232.5,0.562,0.562);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_324.setTransform(-2876.7,225.6,0.562,0.562);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#28292B").beginStroke().moveTo(-69,5).lineTo(-69,-5).lineTo(63.8,-5).curveTo(65.9,-5,67.5,-3.5).curveTo(69,-2.1,69,0).curveTo(69,2.1,67.5,3.6).curveTo(65.9,5,63.8,5).closePath();
	this.shape_325.setTransform(-2899.9,206.8,0.562,0.562);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.6,87.1).lineTo(-66.6,-87.1).lineTo(66.6,-87.1).lineTo(66.6,87.1).closePath();
	this.shape_326.setTransform(-2901.3,256,0.562,0.562);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.3).lineTo(-22.6,-12.3).lineTo(22.6,-12.3).lineTo(22.6,12.3).closePath();
	this.shape_327.setTransform(-2885.1,200.2,0.562,0.562);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_328.setTransform(-3052.8,152.8,0.562,0.562);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_329.setTransform(-3052.9,161.8,0.562,0.562);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_330.setTransform(-3083.3,152.8,0.562,0.562);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_331.setTransform(-3083.3,161.8,0.562,0.562);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_332.setTransform(-3113.9,152.8,0.562,0.562);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_333.setTransform(-3114,161.8,0.562,0.562);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_334.setTransform(-3052.8,184.2,0.562,0.562);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.9,-18.7,1.3).curveTo(-19.2,0.7,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.9,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.2,-1.9,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.9,17.4,1.8).closePath();
	this.shape_335.setTransform(-3052.9,193.1,0.562,0.562);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_336.setTransform(-3083.3,184.2,0.562,0.562);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.9,-18.7,1.3).curveTo(-19.2,0.7,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.9,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.1,-1.9,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.1,1.9,17.4,1.8).closePath();
	this.shape_337.setTransform(-3083.3,193.1,0.562,0.562);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_338.setTransform(-3113.8,184.2,0.562,0.562);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.9,-18.7,1.3).curveTo(-19.2,0.7,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.9,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.2,-1.9,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.9,17.4,1.8).closePath();
	this.shape_339.setTransform(-3113.9,193.1,0.562,0.562);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_340.setTransform(-3052.8,247,0.562,0.562);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_341.setTransform(-3052.9,255.9,0.562,0.562);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_342.setTransform(-3083.3,247,0.562,0.562);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_343.setTransform(-3083.3,255.9,0.562,0.562);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_344.setTransform(-3113.8,247,0.562,0.562);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_345.setTransform(-3113.8,255.9,0.562,0.562);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_346.setTransform(-3144.6,247,0.562,0.562);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_347.setTransform(-3144.6,255.9,0.562,0.562);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_348.setTransform(-3052.8,215.6,0.562,0.562);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_349.setTransform(-3052.9,224.5,0.562,0.562);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_350.setTransform(-3083.3,215.6,0.562,0.562);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.2,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.2,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.1,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.1,1.8,17.4,1.8).closePath();
	this.shape_351.setTransform(-3083.3,224.5,0.562,0.562);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_352.setTransform(-3113.8,215.6,0.562,0.562);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_353.setTransform(-3113.9,224.5,0.562,0.562);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_354.setTransform(-3144.6,215.6,0.562,0.562);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.7,-19.2,-0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,-0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_355.setTransform(-3144.6,224.5,0.562,0.562);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_356.setTransform(-3144.6,184.2,0.562,0.562);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.9,-18.7,1.3).curveTo(-19.2,0.7,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.9,-17.4,-1.9).lineTo(17.4,-1.9).curveTo(18.2,-1.9,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.7,18.7,1.3).curveTo(18.2,1.9,17.4,1.8).closePath();
	this.shape_357.setTransform(-3144.6,193.1,0.562,0.562);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_358.setTransform(-3144.6,152.8,0.562,0.562);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-17.4,1.8).curveTo(-18.1,1.8,-18.7,1.3).curveTo(-19.2,0.8,-19.2,0).curveTo(-19.2,-0.8,-18.7,-1.3).curveTo(-18.1,-1.8,-17.4,-1.8).lineTo(17.4,-1.8).curveTo(18.2,-1.8,18.7,-1.3).curveTo(19.2,-0.8,19.2,0).curveTo(19.2,0.8,18.7,1.3).curveTo(18.2,1.8,17.4,1.8).closePath();
	this.shape_359.setTransform(-3144.6,161.8,0.562,0.562);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_360.setTransform(-3052.9,152.8,0.562,0.562);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_361.setTransform(-3083.3,152.8,0.562,0.562);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_362.setTransform(-3114,152.8,0.562,0.562);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_363.setTransform(-3144.6,152.8,0.562,0.562);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_364.setTransform(-3052.9,184.2,0.562,0.562);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_365.setTransform(-3083.3,184.2,0.562,0.562);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_366.setTransform(-3114,184.2,0.562,0.562);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_367.setTransform(-3144.6,184.2,0.562,0.562);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_368.setTransform(-3052.9,215.6,0.562,0.562);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_369.setTransform(-3083.3,215.6,0.562,0.562);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_370.setTransform(-3114,215.6,0.562,0.562);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_371.setTransform(-3144.6,215.6,0.562,0.562);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_372.setTransform(-3052.9,247,0.562,0.562);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_373.setTransform(-3083.3,247,0.562,0.562);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_374.setTransform(-3114,247,0.562,0.562);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,16.3).lineTo(-16.9,-16.3).lineTo(16.9,-16.3).lineTo(16.9,16.3).closePath();
	this.shape_375.setTransform(-3144.6,247,0.562,0.562);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-47.7,1.4).lineTo(-47.7,-1.4).lineTo(47.7,-1.4).lineTo(44.9,1.4).closePath();
	this.shape_376.setTransform(-3101.8,272.8,0.562,0.562);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.4,32.1).lineTo(-1.4,-32.1).lineTo(1.4,-32.1).lineTo(1.4,32.1).closePath();
	this.shape_377.setTransform(-3075.8,290.1,0.562,0.562);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-47.6,32.1).lineTo(-47.6,-32.1).lineTo(47.6,-32.1).lineTo(47.6,32.1).closePath();
	this.shape_378.setTransform(-3101.8,290.1,0.562,0.562);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#28292B").beginStroke().moveTo(-121.9,4.6).curveTo(-123.8,4.6,-125.2,3.2).curveTo(-126.5,1.9,-126.5,-0).curveTo(-126.5,-1.9,-125.2,-3.2).curveTo(-123.8,-4.6,-121.9,-4.6).lineTo(121.9,-4.6).curveTo(123.8,-4.6,125.2,-3.2).curveTo(126.5,-1.9,126.5,-0).curveTo(126.5,1.9,125.2,3.2).curveTo(123.8,4.6,121.9,4.6).closePath();
	this.shape_379.setTransform(-3099.6,131.8,0.562,0.562);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#28292B").beginStroke().moveTo(-22.6,12.3).lineTo(-22.6,-12.3).lineTo(22.6,-12.3).lineTo(22.6,12.3).closePath();
	this.shape_380.setTransform(-3141.3,123.8,0.562,0.562);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#494A4E").beginStroke().moveTo(-123.3,158).lineTo(-123.3,-158).lineTo(123.2,-158).lineTo(123.2,158).closePath();
	this.shape_381.setTransform(-3100,219.4,0.562,0.562);

	this.instance_34 = new lib.nuka4();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-3183.2,229.1,0.562,0.562,0,0,0,6.7,12.1);
	this.instance_34.alpha = 0.699;

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_382.setTransform(-3182.8,236.3,0.562,0.562);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_383.setTransform(-3182.8,229.6,0.562,0.562);

	this.instance_35 = new lib.nuka003();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-3213.1,229.1,0.562,0.562,0,0,0,6.7,12.1);
	this.instance_35.alpha = 0.699;

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,1).curveTo(-10,1,-10.3,0.7).curveTo(-10.6,0.4,-10.6,0).curveTo(-10.6,-0.4,-10.3,-0.7).curveTo(-10,-1,-9.6,-1).lineTo(9.6,-1).curveTo(10,-1,10.3,-0.7).curveTo(10.6,-0.4,10.6,0).curveTo(10.6,0.4,10.3,0.7).curveTo(10,1,9.6,1).closePath();
	this.shape_384.setTransform(-3212.7,236.3,0.562,0.562);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.3).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.3).closePath();
	this.shape_385.setTransform(-3212.7,229.6,0.562,0.562);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.4,5.4).curveTo(-7.7,3.2,-7.7,-0).curveTo(-7.7,-3.2,-5.4,-5.4).curveTo(-3.2,-7.7,-0,-7.7).curveTo(3.2,-7.7,5.5,-5.4).curveTo(7.7,-3.2,7.7,-0).curveTo(7.7,3.2,5.5,5.4).curveTo(3.2,7.7,-0,7.7).curveTo(-3.2,7.7,-5.4,5.4).closePath();
	this.shape_386.setTransform(-3199.4,190.6,0.562,0.562);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#28292B").beginStroke().moveTo(-55.1,35.1).lineTo(0,-35.1).lineTo(55.1,35.1).closePath();
	this.shape_387.setTransform(-3198.4,190.1,0.562,0.562);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-110.7,30.1).lineTo(-81.3,-29.6).lineTo(93.9,-30.1).lineTo(110.8,30.1).closePath();
	this.shape_388.setTransform(-3170.7,192.9,0.562,0.562);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#494A4E").beginStroke().moveTo(-107.1,88.2).lineTo(-107.1,-88.2).lineTo(107.2,-88.2).lineTo(107.2,88.2).closePath();
	this.shape_389.setTransform(-3168.7,258.6,0.562,0.562);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1.1).lineTo(-0.5,-1.1).lineTo(0.5,-1.1).lineTo(0.5,1.1).closePath();
	this.shape_390.setTransform(-2378.8,207.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1.1).closePath();
	this.shape_391.setTransform(-2376.3,207.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#494A4E").beginStroke().moveTo(1.1,4).lineTo(-2.1,-4.1).lineTo(2.2,4).closePath();
	this.shape_392.setTransform(-2380.4,202.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_393.setTransform(-2378.9,202.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_394.setTransform(-2382.6,202.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_395.setTransform(-2376.4,215.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_396.setTransform(-2388.8,215.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1.1).closePath();
	this.shape_397.setTransform(-2382.6,207.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_398.setTransform(-2382.6,226.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_399.setTransform(-2382.6,223.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_400.setTransform(-2382.6,297.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,41.1).lineTo(-2.1,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_401.setTransform(-2382.6,264.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,6.9).lineTo(-0.8,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_402.setTransform(-2382.6,215.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-0.9,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_403.setTransform(-2382.6,215.7);

	this.instance_36 = new lib.nuka002();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-2382.7,305.8,1,1,0,0,0,7.2,2.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.8,8.7).curveTo(-12.4,5.2,-12.4,-0).curveTo(-12.4,-5.2,-8.8,-8.7).curveTo(-5.2,-12.4,-0,-12.4).curveTo(5.1,-12.4,8.8,-8.7).curveTo(12.4,-5.2,12.4,-0).curveTo(12.4,5.2,8.8,8.7).curveTo(5.1,12.4,-0,12.4).curveTo(-5.2,12.4,-8.8,8.7).closePath();
	this.shape_404.setTransform(-2257.4,194.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.9,9.3).curveTo(-19.8,9.3,-22.5,6.6).curveTo(-25.2,3.8,-25.2,0).curveTo(-25.2,-3.8,-22.5,-6.6).curveTo(-19.8,-9.3,-15.9,-9.3).lineTo(15.9,-9.3).curveTo(19.8,-9.3,22.5,-6.6).curveTo(25.2,-3.8,25.2,0).curveTo(25.2,3.8,22.5,6.6).curveTo(19.8,9.3,15.9,9.3).closePath();
	this.shape_405.setTransform(-2252.2,200.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_406.setTransform(-2053,206.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1).closePath();
	this.shape_407.setTransform(-2050.6,206.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.2,-4.1).lineTo(2.2,4).closePath();
	this.shape_408.setTransform(-2054.7,201.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_409.setTransform(-2053.1,201.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_410.setTransform(-2056.9,201.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_411.setTransform(-2050.7,214.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_412.setTransform(-2063.1,214.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1).closePath();
	this.shape_413.setTransform(-2056.9,206.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_414.setTransform(-2056.9,225.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_415.setTransform(-2056.9,222.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_416.setTransform(-2056.9,296.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.1,-41.1).lineTo(2.1,41.1).closePath();
	this.shape_417.setTransform(-2056.8,263.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_418.setTransform(-2056.9,214.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-1,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_419.setTransform(-2056.9,214.7);

	this.instance_37 = new lib.nuka001();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-2056.9,304.8,1,1,0,0,0,7.2,2.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_420.setTransform(-2117.8,233.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(-12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_421.setTransform(-2093.1,233.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.6,38.7).lineTo(0,-38.7).lineTo(24.6,38.7).closePath();
	this.shape_422.setTransform(-2105.5,233.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,24.1).lineTo(-2.4,-24.1).lineTo(2.4,-24.1).lineTo(2.4,24.1).closePath();
	this.shape_423.setTransform(-2105.4,278.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,47.4).curveTo(-8.2,46.8,-9.4,45.9).curveTo(-10.7,45,-12,43.6).curveTo(-13,42.3,-13.8,40.7).curveTo(-14.4,39.7,-14.8,37.4).curveTo(-14.9,36.6,-14.9,35.7).lineTo(-14.7,34).curveTo(-14.5,32.5,-13.7,31).lineTo(-12.8,29.4).curveTo(-11.7,27.5,-10.6,26).curveTo(-9.2,24.3,-7.4,22.5).lineTo(-7.7,21.5).curveTo(-9.6,20.9,-11.9,19.5).curveTo(-13.4,18.7,-15.2,17.4).lineTo(-16.7,16.2).curveTo(-19.3,14.2,-20.4,11).curveTo(-21.4,8,-20.9,4.8).curveTo(-20.4,1.7,-18.5,-0.9).curveTo(-16.6,-3.4,-13.6,-4.7).lineTo(-5,-8.3).lineTo(-4.2,-10.9).lineTo(-9.5,-18.5).curveTo(-11.3,-21.2,-11.5,-24.5).curveTo(-11.7,-27.5,-10.5,-30.4).curveTo(-9.2,-33.4,-6.8,-35.3).curveTo(-4.2,-37.3,-1.1,-37.9).lineTo(4.7,-38.6).lineTo(8,-38.8).curveTo(14.5,-48.1,21.1,-48).lineTo(21.1,44.5).curveTo(11.5,44.5,3.7,38.7).curveTo(4.8,39.6,6.4,40.5).curveTo(7,41,9.2,42).lineTo(10,42.5).lineTo(10.3,42.6).lineTo(8.9,43.5).lineTo(5.5,45.5).lineTo(1.9,47).lineTo(0.1,47.6).curveTo(-1.3,48.1,-3.1,48.1).curveTo(-4.8,48.1,-6.4,47.4).closePath();
	this.shape_424.setTransform(-2197.2,221.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,47.6).lineTo(-1.9,47).lineTo(-5.5,45.5).lineTo(-8.9,43.5).lineTo(-10.3,42.6).lineTo(-10,42.5).lineTo(-9.2,42).lineTo(-7.9,41.4).lineTo(-6.4,40.5).curveTo(-4.9,39.7,-3.5,38.6).curveTo(-11.4,44.5,-21.1,44.5).lineTo(-21.1,-48).curveTo(-14.5,-48.1,-8,-38.8).lineTo(-4.7,-38.6).lineTo(1.1,-37.9).curveTo(4.3,-37.3,6.8,-35.3).curveTo(9.2,-33.4,10.5,-30.4).curveTo(11.7,-27.5,11.5,-24.5).curveTo(11.3,-21.2,9.5,-18.5).lineTo(6.2,-13.7).lineTo(4.2,-10.9).lineTo(5,-8.3).lineTo(8.2,-7).lineTo(13.6,-4.7).curveTo(16.6,-3.4,18.5,-0.9).curveTo(20.4,1.7,20.9,4.8).curveTo(21.4,8,20.4,11).curveTo(19.3,14.2,16.7,16.2).curveTo(14.3,18.2,11.9,19.5).curveTo(10,20.6,7.7,21.6).lineTo(7.4,22.4).curveTo(9.6,24.7,10.6,26).curveTo(11.7,27.5,12.8,29.4).lineTo(13.7,31).curveTo(14.5,32.5,14.8,34).lineTo(14.9,35.7).curveTo(14.9,36.6,14.8,37.4).curveTo(14.4,39.7,13.8,40.7).curveTo(13,42.3,12,43.6).curveTo(10.7,45,9.5,45.9).curveTo(8.1,46.9,6.4,47.4).curveTo(4.9,48.1,3.2,48.1).curveTo(1.3,48.1,-0.1,47.6).closePath();
	this.shape_425.setTransform(-2155.1,221.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,5.4).curveTo(-10.8,2.7,-11,-0.6).curveTo(-11.2,-3.6,-10,-6.5).curveTo(-8.7,-9.5,-6.3,-11.4).curveTo(-3.7,-13.4,-0.6,-14).lineTo(5.2,-14.7).lineTo(11,-14.9).curveTo(9.8,-13.4,8.3,-10.7).curveTo(5.8,-6.5,3.3,-0.8).curveTo(1.3,3.9,-0.7,9.9).lineTo(-2.3,14.8).closePath();
	this.shape_426.setTransform(-2197.7,197.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,13.1).curveTo(-1.5,12.3,-3.3,11).lineTo(-4.8,9.8).curveTo(-7.4,7.8,-8.5,4.6).curveTo(-9.5,1.5,-9,-1.6).curveTo(-8.5,-4.8,-6.6,-7.3).curveTo(-4.7,-9.8,-1.7,-11.1).lineTo(3.7,-13.4).curveTo(6.4,-14.5,9.1,-15.5).lineTo(7.7,-10.4).curveTo(6.2,-4.6,5.4,0.7).curveTo(4.9,3.6,4.6,6.5).curveTo(4.4,9.1,4.6,11.1).lineTo(4.7,12.9).lineTo(5.1,15.5).curveTo(2.6,14.6,-0,13.1).closePath();
	this.shape_427.setTransform(-2209.1,228.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,12.5).curveTo(-5.9,11.8,-7.1,11).curveTo(-8.3,10,-9.7,8.6).curveTo(-10.7,7.3,-11.5,5.7).curveTo(-12.1,4.7,-12.5,2.4).curveTo(-12.6,1.6,-12.6,0.8).lineTo(-12.4,-0.9).curveTo(-12.2,-2.5,-11.4,-4).lineTo(-10.4,-5.6).curveTo(-9.4,-7.4,-8.3,-8.9).curveTo(-6.5,-11.3,-4.5,-13.1).lineTo(-3.3,-8.9).curveTo(-1.6,-4.3,1.5,-0.6).curveTo(4.6,3.2,8.8,5.6).curveTo(9.3,6,11.5,7.1).lineTo(12.3,7.5).lineTo(12.6,7.6).lineTo(11.2,8.5).lineTo(7.9,10.5).lineTo(4.2,12).lineTo(2.4,12.7).curveTo(1,13.1,-0.8,13.1).curveTo(-2.5,13.1,-4.1,12.5).closePath();
	this.shape_428.setTransform(-2199.5,256.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#494A4E").beginStroke().moveTo(0.7,9.9).curveTo(-1.3,4,-3.4,-0.7).curveTo(-5.9,-6.5,-8.4,-10.7).lineTo(-11,-14.8).lineTo(-9.2,-14.9).lineTo(0.5,-13.9).curveTo(3.7,-13.4,6.3,-11.4).curveTo(8.7,-9.4,9.9,-6.5).curveTo(11.2,-3.6,11,-0.5).curveTo(10.7,2.7,9,5.4).lineTo(5.7,10.2).lineTo(2.3,14.9).closePath();
	this.shape_429.setTransform(-2154.5,197.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.7,12.9).lineTo(-4.6,11.1).curveTo(-4.4,9.5,-4.7,6.5).curveTo(-4.9,3.9,-5.4,0.7).curveTo(-6.2,-4.2,-7.7,-10.4).lineTo(-9.1,-15.5).lineTo(-3.7,-13.4).lineTo(1.7,-11.1).curveTo(4.6,-9.8,6.6,-7.3).curveTo(8.4,-4.8,8.9,-1.6).curveTo(9.4,1.5,8.4,4.6).curveTo(7.3,7.8,4.8,9.8).curveTo(2.4,11.7,-0,13.1).curveTo(-1.6,14,-3.5,14.8).lineTo(-5.1,15.5).closePath();
	this.shape_430.setTransform(-2143.1,228.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,12.7).lineTo(-4.2,12).lineTo(-7.9,10.5).lineTo(-11.2,8.5).lineTo(-12.6,7.6).lineTo(-12.3,7.5).lineTo(-11.5,7.1).lineTo(-10.2,6.5).lineTo(-8.8,5.6).curveTo(-4.5,3.1,-1.4,-0.6).curveTo(1.6,-4.3,3.3,-8.9).lineTo(3.9,-10.6).lineTo(4.5,-13.1).lineTo(5.7,-11.9).curveTo(7.2,-10.4,8.2,-8.9).curveTo(9.4,-7.4,10.5,-5.6).lineTo(11.4,-4).curveTo(12.2,-2.5,12.5,-0.9).lineTo(12.6,0.8).curveTo(12.6,1.6,12.5,2.4).curveTo(12.1,4.7,11.5,5.7).curveTo(10.7,7.3,9.7,8.6).curveTo(8.4,10,7.1,11).curveTo(5.7,11.9,4.1,12.5).curveTo(2.5,13.1,0.8,13.1).curveTo(-1,13.1,-2.4,12.7).closePath();
	this.shape_431.setTransform(-2152.7,256.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginFill("#494A4E").beginStroke().moveTo(-21,37.3).curveTo(-29.7,28.3,-29.7,15.7).curveTo(-29.7,9.1,-27.3,-1.2).curveTo(-24.9,-11.9,-21,-21.7).curveTo(-11.1,-46.3,0,-46.3).curveTo(11.1,-46.3,21,-21.7).curveTo(24.9,-11.9,27.4,-1.2).curveTo(29.7,9.1,29.7,15.7).curveTo(29.7,28.3,21,37.3).curveTo(12.3,46.3,0,46.3).curveTo(-12.3,46.3,-21,37.3).closePath();
	this.shape_432.setTransform(-2176.1,219.9);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,28.8).lineTo(-2.9,-28.8).lineTo(2.9,-28.8).lineTo(2.9,28.8).closePath();
	this.shape_433.setTransform(-2176.1,268.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,23.8).curveTo(-11,17.5,-11,8.3).curveTo(-11,2.2,-7.8,-3.1).curveTo(-4.6,-8.2,0.6,-11).curveTo(-1.5,-14.2,-1.5,-17.9).curveTo(-1.5,-23,2.2,-26.7).curveTo(5.8,-30.3,11,-30.3).lineTo(11,30.3).curveTo(1.9,30.3,-4.6,23.8).closePath();
	this.shape_434.setTransform(-2002.9,253.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5.6).curveTo(-4,3.2,-3.9,-0).curveTo(-4,-3.3,-1.7,-5.6).curveTo(0.7,-7.9,3.9,-7.9).lineTo(3.9,7.9).curveTo(0.7,7.9,-1.7,5.6).closePath();
	this.shape_435.setTransform(-1995.9,213.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.5,15.5).curveTo(-22,9.1,-22,-0).curveTo(-22,-9.1,-15.5,-15.6).curveTo(-9.1,-21.9,-0,-22).curveTo(9.1,-21.9,15.5,-15.6).curveTo(21.9,-9.1,21.9,-0).curveTo(21.9,9.1,15.5,15.5).curveTo(9.1,21.9,-0,21.9).curveTo(-9.1,21.9,-15.5,15.5).closePath();
	this.shape_436.setTransform(-1991.9,261.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.6,5.6).curveTo(-7.9,3.2,-7.9,-0).curveTo(-7.9,-3.3,-5.6,-5.6).curveTo(-3.2,-7.9,0,-7.9).curveTo(3.3,-7.9,5.6,-5.6).curveTo(7.9,-3.3,7.9,-0).curveTo(7.9,3.2,5.6,5.6).curveTo(3.3,7.9,0,7.9).curveTo(-3.2,7.9,-5.6,5.6).closePath();
	this.shape_437.setTransform(-1992,213.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,-0).curveTo(-12.4,-5.2,-8.8,-8.8).curveTo(-5.1,-12.4,0,-12.4).curveTo(5.2,-12.4,8.8,-8.8).curveTo(12.4,-5.2,12.4,-0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.2,12.4,0,12.4).curveTo(-5.1,12.4,-8.8,8.8).closePath();
	this.shape_438.setTransform(-1992,235.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.7).lineTo(-1.8,-17.7).lineTo(1.8,-17.7).lineTo(1.8,17.7).closePath();
	this.shape_439.setTransform(-1991.9,280);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.9,21.8).lineTo(-0,-21.8).lineTo(13.9,21.8).closePath();
	this.shape_440.setTransform(-2334.1,257.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,13.6).lineTo(-1.4,-13.6).lineTo(1.4,-13.6).lineTo(1.4,13.6).closePath();
	this.shape_441.setTransform(-2334.1,282.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.3,26).curveTo(-21.7,19.6,-21.7,10.7).curveTo(-21.7,3.2,-10.8,-15.3).curveTo(-5.4,-24.6,-0,-32.3).lineTo(10.8,-15.3).curveTo(21.7,3.2,21.7,10.7).curveTo(21.7,19.6,15.3,26).curveTo(9,32.3,-0,32.3).curveTo(-9,32.3,-15.3,26).closePath();
	this.shape_442.setTransform(-2274.2,259.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.5).lineTo(-1.8,-17.5).lineTo(1.8,-17.5).lineTo(1.8,17.5).closePath();
	this.shape_443.setTransform(-2274.2,288.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_444.setTransform(-1542.7,280.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_445.setTransform(-1542.7,273.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_446.setTransform(-1542.7,266.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_447.setTransform(-1542.7,259.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_448.setTransform(-1542.7,252.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_449.setTransform(-1542.7,245.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_450.setTransform(-1542.7,238.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_451.setTransform(-1542.7,231.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_452.setTransform(-1542.7,224.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_453.setTransform(-1542.7,217.9);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_454.setTransform(-1534.7,280.9);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_455.setTransform(-1534.7,273.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_456.setTransform(-1534.7,266.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_457.setTransform(-1534.7,259.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_458.setTransform(-1534.7,252.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_459.setTransform(-1534.7,245.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_460.setTransform(-1534.7,238.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_461.setTransform(-1534.7,231.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_462.setTransform(-1534.7,224.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_463.setTransform(-1534.7,217.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,48).lineTo(-22,-35).lineTo(-11,-35).lineTo(-11,-48).lineTo(-6,-48).lineTo(-6,-35).lineTo(-3,-35).lineTo(-3,-43).lineTo(2,-43).lineTo(2,-35).lineTo(22,-35).lineTo(22,48).closePath().moveTo(6,41).lineTo(10,41).lineTo(10,36).lineTo(6,36).closePath().moveTo(-2,41).lineTo(2,41).lineTo(2,36).lineTo(-2,36).closePath().moveTo(6,34).lineTo(10,34).lineTo(10,29).lineTo(6,29).closePath().moveTo(-2,34).lineTo(2,34).lineTo(2,29).lineTo(-2,29).closePath().moveTo(6,27).lineTo(10,27).lineTo(10,22).lineTo(6,22).closePath().moveTo(-2,27).lineTo(2,27).lineTo(2,22).lineTo(-2,22).closePath().moveTo(6,20).lineTo(10,20).lineTo(10,15).lineTo(6,15).closePath().moveTo(-2,20).lineTo(2,20).lineTo(2,15).lineTo(-2,15).closePath().moveTo(6,13).lineTo(10,13).lineTo(10,8).lineTo(6,8).closePath().moveTo(-2,13).lineTo(2,13).lineTo(2,8).lineTo(-2,8).closePath().moveTo(6,6).lineTo(10,6).lineTo(10,1).lineTo(6,1).closePath().moveTo(-2,6).lineTo(2,6).lineTo(2,1).lineTo(-2,1).closePath().moveTo(6,-1).lineTo(10,-1).lineTo(10,-6).lineTo(6,-6).closePath().moveTo(-2,-1).lineTo(2,-1).lineTo(2,-6).lineTo(-2,-6).closePath().moveTo(6,-8).lineTo(10,-8).lineTo(10,-13).lineTo(6,-13).closePath().moveTo(-2,-8).lineTo(2,-8).lineTo(2,-13).lineTo(-2,-13).closePath().moveTo(6,-15).lineTo(10,-15).lineTo(10,-20).lineTo(6,-20).closePath().moveTo(-2,-15).lineTo(2,-15).lineTo(2,-20).lineTo(-2,-20).closePath().moveTo(6,-22).lineTo(10,-22).lineTo(10,-27).lineTo(6,-27).closePath().moveTo(-2,-22).lineTo(2,-22).lineTo(2,-27).lineTo(-2,-27).closePath();
	this.shape_464.setTransform(-1542.7,242.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_465.setTransform(-1893.2,203.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_466.setTransform(-1883.7,269.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_467.setTransform(-1883.7,261.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_468.setTransform(-1883.7,253.9);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_469.setTransform(-1883.7,245.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_470.setTransform(-1883.7,237.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_471.setTransform(-1883.7,229.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_472.setTransform(-1883.7,221.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_473.setTransform(-1883.7,213.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,41.5).lineTo(-18,-41.5).lineTo(-12,-41.5).lineTo(-12,-40.5).lineTo(-7,-40.5).lineTo(-7,-41.5).lineTo(18,-41.5).lineTo(18,41.5).closePath().moveTo(-14,22.5).lineTo(14,22.5).lineTo(14,19.5).lineTo(-14,19.5).closePath().moveTo(-14,14.5).lineTo(14,14.5).lineTo(14,11.5).lineTo(-14,11.5).closePath().moveTo(-14,6.5).lineTo(14,6.5).lineTo(14,3.5).lineTo(-14,3.5).closePath().moveTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,-4.5).lineTo(-14,-4.5).closePath().moveTo(-14,-9.5).lineTo(14,-9.5).lineTo(14,-12.5).lineTo(-14,-12.5).closePath().moveTo(-14,-17.5).lineTo(14,-17.5).lineTo(14,-20.5).lineTo(-14,-20.5).closePath().moveTo(-14,-25.5).lineTo(14,-25.5).lineTo(14,-28.5).lineTo(-14,-28.5).closePath().moveTo(-14,-33.5).lineTo(14,-33.5).lineTo(14,-36.5).lineTo(-14,-36.5).closePath();
	this.shape_474.setTransform(-1883.7,248.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_475.setTransform(-1923.9,277.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_476.setTransform(-1914.7,269.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_477.setTransform(-1914.7,261.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_478.setTransform(-1914.7,253.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_479.setTransform(-1914.7,237.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_480.setTransform(-1914.7,229.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_481.setTransform(-1933.7,277.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_482.setTransform(-1923.9,269.9);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_483.setTransform(-1933.7,269.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_484.setTransform(-1923.9,261.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_485.setTransform(-1923.9,253.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_486.setTransform(-1933.7,253.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_487.setTransform(-1923.9,245.9);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_488.setTransform(-1933.7,245.9);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_489.setTransform(-1923.9,237.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_490.setTransform(-1923.9,229.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_491.setTransform(-1933.7,229.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,36).lineTo(-18,-36).lineTo(18,-36).lineTo(18,36).closePath();
	this.shape_492.setTransform(-1923.9,259.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_493.setTransform(-1490.5,277.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_494.setTransform(-1506.9,277.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_495.setTransform(-1490.5,269.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_496.setTransform(-1506.9,269.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_497.setTransform(-1506.9,261.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_498.setTransform(-1490.5,261.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_499.setTransform(-1490.5,253.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_500.setTransform(-1506.9,253.9);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_501.setTransform(-1490.5,245.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_502.setTransform(-1506.9,245.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_503.setTransform(-1490.5,237.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_504.setTransform(-1506.9,237.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_505.setTransform(-1490.5,229.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_506.setTransform(-1506.9,229.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,36).lineTo(-18,-36).lineTo(18,-36).lineTo(18,36).closePath();
	this.shape_507.setTransform(-1498.9,259.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_508.setTransform(-1626.2,166.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_509.setTransform(-1635.2,166.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_510.setTransform(-1644.2,166.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_511.setTransform(-1617.2,273.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_512.setTransform(-1626.2,273.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_513.setTransform(-1635.2,273.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_514.setTransform(-1644.2,273.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_515.setTransform(-1653.2,273.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_516.setTransform(-1617.2,258.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_517.setTransform(-1626.2,258.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_518.setTransform(-1644.2,258.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_519.setTransform(-1653.2,258.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_520.setTransform(-1617.2,243.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_521.setTransform(-1626.2,243.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_522.setTransform(-1635.2,243.4);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_523.setTransform(-1653.2,243.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_524.setTransform(-1617.2,228.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_525.setTransform(-1626.2,228.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_526.setTransform(-1635.2,228.4);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_527.setTransform(-1644.2,228.4);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_528.setTransform(-1653.2,228.4);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_529.setTransform(-1617.2,213.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_530.setTransform(-1626.2,213.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_531.setTransform(-1635.2,213.4);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_532.setTransform(-1653.2,213.4);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_533.setTransform(-1617.2,198.4);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_534.setTransform(-1635.2,198.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_535.setTransform(-1644.2,198.4);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_536.setTransform(-1653.2,198.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_537.setTransform(-1617.2,183.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_538.setTransform(-1626.2,183.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_539.setTransform(-1635.2,183.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_540.setTransform(-1644.2,183.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_541.setTransform(-1653.2,183.4);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,79).lineTo(-24.5,-43).lineTo(-16.5,-43).lineTo(-16.5,-59).lineTo(-2.5,-59).lineTo(-2.5,-79).lineTo(2.5,-79).lineTo(2.5,-59).lineTo(17.5,-59).lineTo(17.5,-43).lineTo(24.5,-43).lineTo(24.5,79).closePath().moveTo(15.5,63).lineTo(20.5,63).lineTo(20.5,53).lineTo(15.5,53).closePath().moveTo(6.5,63).lineTo(11.5,63).lineTo(11.5,53).lineTo(6.5,53).closePath().moveTo(-2.5,63).lineTo(2.5,63).lineTo(2.5,53).lineTo(-2.5,53).closePath().moveTo(-11.5,63).lineTo(-6.5,63).lineTo(-6.5,53).lineTo(-11.5,53).closePath().moveTo(-20.5,63).lineTo(-15.5,63).lineTo(-15.5,53).lineTo(-20.5,53).closePath().moveTo(15.5,48).lineTo(20.5,48).lineTo(20.5,38).lineTo(15.5,38).closePath().moveTo(6.5,48).lineTo(11.5,48).lineTo(11.5,38).lineTo(6.5,38).closePath().moveTo(-11.5,48).lineTo(-6.5,48).lineTo(-6.5,38).lineTo(-11.5,38).closePath().moveTo(-20.5,48).lineTo(-15.5,48).lineTo(-15.5,38).lineTo(-20.5,38).closePath().moveTo(15.5,33).lineTo(20.5,33).lineTo(20.5,23).lineTo(15.5,23).closePath().moveTo(6.5,33).lineTo(11.5,33).lineTo(11.5,23).lineTo(6.5,23).closePath().moveTo(-2.5,33).lineTo(2.5,33).lineTo(2.5,23).lineTo(-2.5,23).closePath().moveTo(-20.5,33).lineTo(-15.5,33).lineTo(-15.5,23).lineTo(-20.5,23).closePath().moveTo(15.5,18).lineTo(20.5,18).lineTo(20.5,8).lineTo(15.5,8).closePath().moveTo(6.5,18).lineTo(11.5,18).lineTo(11.5,8).lineTo(6.5,8).closePath().moveTo(-2.5,18).lineTo(2.5,18).lineTo(2.5,8).lineTo(-2.5,8).closePath().moveTo(-11.5,18).lineTo(-6.5,18).lineTo(-6.5,8).lineTo(-11.5,8).closePath().moveTo(-20.5,18).lineTo(-15.5,18).lineTo(-15.5,8).lineTo(-20.5,8).closePath().moveTo(15.5,3).lineTo(20.5,3).lineTo(20.5,-7).lineTo(15.5,-7).closePath().moveTo(6.5,3).lineTo(11.5,3).lineTo(11.5,-7).lineTo(6.5,-7).closePath().moveTo(-2.5,3).lineTo(2.5,3).lineTo(2.5,-7).lineTo(-2.5,-7).closePath().moveTo(-20.5,3).lineTo(-15.5,3).lineTo(-15.5,-7).lineTo(-20.5,-7).closePath().moveTo(15.5,-12).lineTo(20.5,-12).lineTo(20.5,-22).lineTo(15.5,-22).closePath().moveTo(-2.5,-12).lineTo(2.5,-12).lineTo(2.5,-22).lineTo(-2.5,-22).closePath().moveTo(-11.5,-12).lineTo(-6.5,-12).lineTo(-6.5,-22).lineTo(-11.5,-22).closePath().moveTo(-20.5,-12).lineTo(-15.5,-12).lineTo(-15.5,-22).lineTo(-20.5,-22).closePath().moveTo(15.5,-27).lineTo(20.5,-27).lineTo(20.5,-37).lineTo(15.5,-37).closePath().moveTo(6.5,-27).lineTo(11.5,-27).lineTo(11.5,-37).lineTo(6.5,-37).closePath().moveTo(-2.5,-27).lineTo(2.5,-27).lineTo(2.5,-37).lineTo(-2.5,-37).closePath().moveTo(-11.5,-27).lineTo(-6.5,-27).lineTo(-6.5,-37).lineTo(-11.5,-37).closePath().moveTo(-20.5,-27).lineTo(-15.5,-27).lineTo(-15.5,-37).lineTo(-20.5,-37).closePath().moveTo(6.5,-44).lineTo(11.5,-44).lineTo(11.5,-54).lineTo(6.5,-54).closePath().moveTo(-2.5,-44).lineTo(2.5,-44).lineTo(2.5,-54).lineTo(-2.5,-54).closePath().moveTo(-11.5,-44).lineTo(-6.5,-44).lineTo(-6.5,-54).lineTo(-11.5,-54).closePath();
	this.shape_542.setTransform(-1635.2,215.4);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_543.setTransform(-1776.7,272.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_544.setTransform(-1786.7,272.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_545.setTransform(-1808.2,272.9);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_546.setTransform(-1786.7,262.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_547.setTransform(-1797.7,262.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_548.setTransform(-1808.2,262.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_549.setTransform(-1776.7,252.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_550.setTransform(-1786.7,252.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_551.setTransform(-1797.7,252.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_552.setTransform(-1776.7,242.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_553.setTransform(-1786.7,242.9);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_554.setTransform(-1797.7,242.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_555.setTransform(-1808.2,242.9);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_556.setTransform(-1776.7,232.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_557.setTransform(-1797.7,232.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_558.setTransform(-1808.2,232.9);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_559.setTransform(-1776.7,222.9);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_560.setTransform(-1786.7,222.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_561.setTransform(-1797.7,222.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_562.setTransform(-1808.2,222.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_563.setTransform(-1776.7,212.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_564.setTransform(-1786.7,212.9);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_565.setTransform(-1797.7,212.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_566.setTransform(-1808.2,212.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_567.setTransform(-1776.7,202.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_568.setTransform(-1786.7,202.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_569.setTransform(-1797.7,202.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_570.setTransform(-1776.7,192.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_571.setTransform(-1786.7,192.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_572.setTransform(-1797.7,192.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_573.setTransform(-1808.2,192.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_574.setTransform(-1786.7,182.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_575.setTransform(-1808.2,182.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_576.setTransform(-1776.7,172.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_577.setTransform(-1786.7,172.9);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_578.setTransform(-1797.7,172.9);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_579.setTransform(-1808.2,172.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,77).lineTo(-24.5,-65).lineTo(-19.5,-65).lineTo(-19.5,-77).lineTo(8.5,-77).lineTo(8.5,-65).lineTo(24.5,-65).lineTo(24.5,77).closePath().moveTo(12.5,59).lineTo(18.5,59).lineTo(18.5,52).lineTo(12.5,52).closePath().moveTo(2.5,59).lineTo(8.5,59).lineTo(8.5,52).lineTo(2.5,52).closePath().moveTo(-19.5,59).lineTo(-12.5,59).lineTo(-12.5,52).lineTo(-19.5,52).closePath().moveTo(2.5,49).lineTo(8.5,49).lineTo(8.5,42).lineTo(2.5,42).closePath().moveTo(-8.5,49).lineTo(-2.5,49).lineTo(-2.5,42).lineTo(-8.5,42).closePath().moveTo(-19.5,49).lineTo(-12.5,49).lineTo(-12.5,42).lineTo(-19.5,42).closePath().moveTo(12.5,39).lineTo(18.5,39).lineTo(18.5,32).lineTo(12.5,32).closePath().moveTo(2.5,39).lineTo(8.5,39).lineTo(8.5,32).lineTo(2.5,32).closePath().moveTo(-8.5,39).lineTo(-2.5,39).lineTo(-2.5,32).lineTo(-8.5,32).closePath().moveTo(12.5,29).lineTo(18.5,29).lineTo(18.5,22).lineTo(12.5,22).closePath().moveTo(2.5,29).lineTo(8.5,29).lineTo(8.5,22).lineTo(2.5,22).closePath().moveTo(-8.5,29).lineTo(-2.5,29).lineTo(-2.5,22).lineTo(-8.5,22).closePath().moveTo(-19.5,29).lineTo(-12.5,29).lineTo(-12.5,22).lineTo(-19.5,22).closePath().moveTo(12.5,19).lineTo(18.5,19).lineTo(18.5,12).lineTo(12.5,12).closePath().moveTo(-8.5,19).lineTo(-2.5,19).lineTo(-2.5,12).lineTo(-8.5,12).closePath().moveTo(-19.5,19).lineTo(-12.5,19).lineTo(-12.5,12).lineTo(-19.5,12).closePath().moveTo(12.5,9).lineTo(18.5,9).lineTo(18.5,2).lineTo(12.5,2).closePath().moveTo(2.5,9).lineTo(8.5,9).lineTo(8.5,2).lineTo(2.5,2).closePath().moveTo(-8.5,9).lineTo(-2.5,9).lineTo(-2.5,2).lineTo(-8.5,2).closePath().moveTo(-19.5,9).lineTo(-12.5,9).lineTo(-12.5,2).lineTo(-19.5,2).closePath().moveTo(12.5,-1).lineTo(18.5,-1).lineTo(18.5,-8).lineTo(12.5,-8).closePath().moveTo(2.5,-1).lineTo(8.5,-1).lineTo(8.5,-8).lineTo(2.5,-8).closePath().moveTo(-8.5,-1).lineTo(-2.5,-1).lineTo(-2.5,-8).lineTo(-8.5,-8).closePath().moveTo(-19.5,-1).lineTo(-12.5,-1).lineTo(-12.5,-8).lineTo(-19.5,-8).closePath().moveTo(12.5,-11).lineTo(18.5,-11).lineTo(18.5,-18).lineTo(12.5,-18).closePath().moveTo(2.5,-11).lineTo(8.5,-11).lineTo(8.5,-18).lineTo(2.5,-18).closePath().moveTo(-8.5,-11).lineTo(-2.5,-11).lineTo(-2.5,-18).lineTo(-8.5,-18).closePath().moveTo(12.5,-21).lineTo(18.5,-21).lineTo(18.5,-28).lineTo(12.5,-28).closePath().moveTo(2.5,-21).lineTo(8.5,-21).lineTo(8.5,-28).lineTo(2.5,-28).closePath().moveTo(-8.5,-21).lineTo(-2.5,-21).lineTo(-2.5,-28).lineTo(-8.5,-28).closePath().moveTo(-19.5,-21).lineTo(-12.5,-21).lineTo(-12.5,-28).lineTo(-19.5,-28).closePath().moveTo(2.5,-31).lineTo(8.5,-31).lineTo(8.5,-38).lineTo(2.5,-38).closePath().moveTo(-19.5,-31).lineTo(-12.5,-31).lineTo(-12.5,-38).lineTo(-19.5,-38).closePath().moveTo(12.5,-41).lineTo(18.5,-41).lineTo(18.5,-48).lineTo(12.5,-48).closePath().moveTo(2.5,-41).lineTo(8.5,-41).lineTo(8.5,-48).lineTo(2.5,-48).closePath().moveTo(-8.5,-41).lineTo(-2.5,-41).lineTo(-2.5,-48).lineTo(-8.5,-48).closePath().moveTo(-19.5,-41).lineTo(-12.5,-41).lineTo(-12.5,-48).lineTo(-19.5,-48).closePath();
	this.shape_580.setTransform(-1792.2,217.4);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_581.setTransform(-1587.7,278.9);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_582.setTransform(-1587.7,272.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_583.setTransform(-1587.7,266.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_584.setTransform(-1587.7,254.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_585.setTransform(-1587.7,248.9);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_586.setTransform(-1587.7,242.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_587.setTransform(-1587.7,236.9);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_588.setTransform(-1587.7,230.9);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_589.setTransform(-1587.7,224.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_590.setTransform(-1587.7,218.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_591.setTransform(-1587.7,212.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_592.setTransform(-1587.7,200.9);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_593.setTransform(-1587.7,194.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_594.setTransform(-1587.7,188.9);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_595.setTransform(-1587.7,182.9);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_596.setTransform(-1587.7,176.9);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_597.setTransform(-1587.7,170.9);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_598.setTransform(-1587.7,164.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_599.setTransform(-1587.7,158.9);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,80).lineTo(-19,-80).lineTo(19,-66).lineTo(19,80).closePath();
	this.shape_600.setTransform(-1587.7,214.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,9).lineTo(-2,-9).lineTo(2,-9).lineTo(2,9).closePath();
	this.shape_601.setTransform(-1724.7,272.4);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,9).lineTo(-2,-9).lineTo(2,-9).lineTo(2,9).closePath();
	this.shape_602.setTransform(-1740.7,272.4);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_603.setTransform(-1724.7,251.9);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_604.setTransform(-1740.7,251.9);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_605.setTransform(-1748.7,251.9);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_606.setTransform(-1724.7,230.9);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_607.setTransform(-1732.7,230.9);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_608.setTransform(-1748.7,230.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_609.setTransform(-1724.7,210.9);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_610.setTransform(-1740.7,210.9);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_611.setTransform(-1748.7,210.9);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_612.setTransform(-1724.7,189.9);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_613.setTransform(-1732.7,189.9);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_614.setTransform(-1748.7,189.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,64).lineTo(-22,-64).lineTo(22,-64).lineTo(22,64).closePath();
	this.shape_615.setTransform(-1740.7,230.4);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_616.setTransform(-1826.2,282.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_617.setTransform(-1840.7,282.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_618.setTransform(-1855.2,282.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4.5).lineTo(-1.5,-4.5).lineTo(1.5,-4.5).lineTo(1.5,4.5).closePath();
	this.shape_619.setTransform(-1826.2,272.9);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_620.setTransform(-1833.7,272.9);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_621.setTransform(-1840.7,272.9);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_622.setTransform(-1847.7,272.9);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4.5).lineTo(-2.5,-4.5).lineTo(2.5,-4.5).lineTo(2.5,4.5).closePath();
	this.shape_623.setTransform(-1855.2,272.9);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_624.setTransform(-1833.7,263.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_625.setTransform(-1840.7,263.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_626.setTransform(-1826.2,253.9);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_627.setTransform(-1840.7,253.9);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_628.setTransform(-1847.7,253.9);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_629.setTransform(-1855.2,253.9);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_630.setTransform(-1826.2,245.4);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_631.setTransform(-1833.7,245.4);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_632.setTransform(-1840.7,245.4);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_633.setTransform(-1855.2,245.4);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_634.setTransform(-1826.2,235.4);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_635.setTransform(-1840.7,235.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_636.setTransform(-1855.2,235.4);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_637.setTransform(-1826.2,226.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_638.setTransform(-1833.7,226.4);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_639.setTransform(-1840.7,226.4);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_640.setTransform(-1847.7,226.4);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_641.setTransform(-1855.2,226.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_642.setTransform(-1826.2,216.4);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_643.setTransform(-1833.7,216.4);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_644.setTransform(-1840.7,216.4);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_645.setTransform(-1855.2,216.4);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_646.setTransform(-1826.2,207.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_647.setTransform(-1840.7,207.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_648.setTransform(-1847.7,207.4);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_649.setTransform(-1855.2,207.4);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_650.setTransform(-1826.2,197.9);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_651.setTransform(-1833.7,197.9);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_652.setTransform(-1840.7,197.9);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_653.setTransform(-1855.2,197.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.5,56.5).lineTo(-19.5,-56.5).lineTo(19.5,-56.5).lineTo(19.5,56.5).closePath();
	this.shape_654.setTransform(-1841.2,237.9);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_655.setTransform(-1671.2,269.9);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_656.setTransform(-1689.2,269.9);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_657.setTransform(-1698.2,269.9);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_658.setTransform(-1707.2,269.9);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_659.setTransform(-1671.2,246.9);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_660.setTransform(-1680.2,246.9);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_661.setTransform(-1689.2,246.9);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_662.setTransform(-1707.2,246.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_663.setTransform(-1671.2,223.9);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_664.setTransform(-1680.2,223.9);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_665.setTransform(-1689.2,223.9);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_666.setTransform(-1698.2,223.9);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_667.setTransform(-1707.2,223.9);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_668.setTransform(-1680.2,200.9);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_669.setTransform(-1698.2,200.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_670.setTransform(-1707.2,200.9);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_671.setTransform(-1671.2,177.9);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_672.setTransform(-1680.2,177.9);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_673.setTransform(-1689.2,177.9);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_674.setTransform(-1698.2,177.9);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,71).lineTo(-24.5,-71).lineTo(24.5,-71).lineTo(24.5,71).closePath();
	this.shape_675.setTransform(-1689.2,223.4);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.beginFill("#494A4E").beginStroke().moveTo(-297,4.5).lineTo(-297,-4.5).lineTo(297,-4.5).lineTo(297,4.5).closePath();
	this.shape_676.setTransform(-1661.7,292.9);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.5,72).lineTo(-11,71.1).lineTo(-3.8,13.7).lineTo(-6.9,-27.9).curveTo(-9.5,-29,-11,-30.7).curveTo(-12.7,-32.6,-12.6,-34.8).curveTo(-12.7,-38,-9.3,-40.3).curveTo(-6.2,-42.7,-1.6,-43).lineTo(-1.6,-72).lineTo(1.4,-72).lineTo(1.4,-43).curveTo(6.5,-42.5,9.5,-40.2).curveTo(12.4,-38,12.4,-34.8).curveTo(12.4,-32.6,10.9,-30.7).curveTo(9.4,-29,6.8,-27.9).lineTo(3.8,13.7).lineTo(11,71.1).lineTo(13.5,72).closePath();
	this.shape_677.setTransform(-1114.1,219.4);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_678.setTransform(-1163.2,197.9);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_679.setTransform(-1172.2,197.9);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_680.setTransform(-1145.2,223.9);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_681.setTransform(-1154.2,223.9);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_682.setTransform(-1172.2,223.9);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_683.setTransform(-1145.2,249.9);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_684.setTransform(-1163.2,249.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_685.setTransform(-1172.2,249.9);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.2,67).lineTo(-23.2,-67).lineTo(-15.9,-62.9).curveTo(-7.3,-57.7,0,-51.4).curveTo(23.2,-31.7,23.2,-10.3).lineTo(23.2,67).closePath();
	this.shape_686.setTransform(-1158.4,223.4);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_687.setTransform(-1247.7,195.9);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_688.setTransform(-1255.7,195.9);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_689.setTransform(-1263.7,195.9);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_690.setTransform(-1247.7,218.9);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_691.setTransform(-1255.7,218.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_692.setTransform(-1263.7,218.9);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_693.setTransform(-1239.7,248.9);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_694.setTransform(-1247.7,248.9);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_695.setTransform(-1255.7,248.9);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_696.setTransform(-1263.7,248.9);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_697.setTransform(-1271.7,248.9);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.5,68).lineTo(-23.5,6).lineTo(-18.5,6).lineTo(-18.5,-40).lineTo(-12.5,-40).lineTo(-12.5,-52).lineTo(-3.5,-52).lineTo(-3.5,-68).lineTo(3.5,-68).lineTo(3.5,-52).lineTo(12.5,-52).lineTo(12.5,-40).lineTo(18.5,-40).lineTo(18.5,6).lineTo(23.5,6).lineTo(23.5,68).closePath().moveTo(13.5,38).lineTo(17.5,38).lineTo(17.5,17).lineTo(13.5,17).closePath().moveTo(5.5,38).lineTo(9.5,38).lineTo(9.5,17).lineTo(5.5,17).closePath().moveTo(-2.5,38).lineTo(1.5,38).lineTo(1.5,17).lineTo(-2.5,17).closePath().moveTo(-10.5,38).lineTo(-6.5,38).lineTo(-6.5,17).lineTo(-10.5,17).closePath().moveTo(-18.5,38).lineTo(-14.5,38).lineTo(-14.5,17).lineTo(-18.5,17).closePath().moveTo(5.5,6).lineTo(9.5,6).lineTo(9.5,-11).lineTo(5.5,-11).closePath().moveTo(-2.5,6).lineTo(1.5,6).lineTo(1.5,-11).lineTo(-2.5,-11).closePath().moveTo(-10.5,6).lineTo(-6.5,6).lineTo(-6.5,-11).lineTo(-10.5,-11).closePath().moveTo(5.5,-17).lineTo(9.5,-17).lineTo(9.5,-34).lineTo(5.5,-34).closePath().moveTo(-2.5,-17).lineTo(1.5,-17).lineTo(1.5,-34).lineTo(-2.5,-34).closePath().moveTo(-10.5,-17).lineTo(-6.5,-17).lineTo(-6.5,-34).lineTo(-10.5,-34).closePath();
	this.shape_698.setTransform(-1255.2,221.4);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_699.setTransform(-1450.7,272.9);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_700.setTransform(-1461.7,272.9);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_701.setTransform(-1450.7,259.9);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_702.setTransform(-1439.7,259.9);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_703.setTransform(-1461.7,259.9);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_704.setTransform(-1439.7,246.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_705.setTransform(-1461.7,246.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_706.setTransform(-1450.7,233.9);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_707.setTransform(-1439.7,233.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_708.setTransform(-1461.7,233.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_709.setTransform(-1450.7,220.9);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_710.setTransform(-1461.7,220.9);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_711.setTransform(-1450.7,207.9);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_712.setTransform(-1439.7,207.9);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_713.setTransform(-1450.7,194.9);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_714.setTransform(-1439.7,194.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_715.setTransform(-1461.7,194.9);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_716.setTransform(-1450.7,181.9);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_717.setTransform(-1461.7,181.9);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,64).lineTo(-18,-55).lineTo(7,-55).lineTo(7,-64).lineTo(14,-64).lineTo(14,-55).lineTo(18,-55).lineTo(18,64).closePath().moveTo(-4,51).lineTo(4,51).lineTo(4,42).lineTo(-4,42).closePath().moveTo(-15,51).lineTo(-7,51).lineTo(-7,42).lineTo(-15,42).closePath().moveTo(7,38).lineTo(15,38).lineTo(15,29).lineTo(7,29).closePath().moveTo(-4,38).lineTo(4,38).lineTo(4,29).lineTo(-4,29).closePath().moveTo(-15,38).lineTo(-7,38).lineTo(-7,29).lineTo(-15,29).closePath().moveTo(7,25).lineTo(15,25).lineTo(15,16).lineTo(7,16).closePath().moveTo(-15,25).lineTo(-7,25).lineTo(-7,16).lineTo(-15,16).closePath().moveTo(7,12).lineTo(15,12).lineTo(15,3).lineTo(7,3).closePath().moveTo(-4,12).lineTo(4,12).lineTo(4,3).lineTo(-4,3).closePath().moveTo(-15,12).lineTo(-7,12).lineTo(-7,3).lineTo(-15,3).closePath().moveTo(-4,-1).lineTo(4,-1).lineTo(4,-10).lineTo(-4,-10).closePath().moveTo(-15,-1).lineTo(-7,-1).lineTo(-7,-10).lineTo(-15,-10).closePath().moveTo(7,-14).lineTo(15,-14).lineTo(15,-23).lineTo(7,-23).closePath().moveTo(-4,-14).lineTo(4,-14).lineTo(4,-23).lineTo(-4,-23).closePath().moveTo(7,-27).lineTo(15,-27).lineTo(15,-36).lineTo(7,-36).closePath().moveTo(-4,-27).lineTo(4,-27).lineTo(4,-36).lineTo(-4,-36).closePath().moveTo(-15,-27).lineTo(-7,-27).lineTo(-7,-36).lineTo(-15,-36).closePath().moveTo(-4,-40).lineTo(4,-40).lineTo(4,-49).lineTo(-4,-49).closePath().moveTo(-15,-40).lineTo(-7,-40).lineTo(-7,-49).lineTo(-15,-49).closePath();
	this.shape_718.setTransform(-1450.7,226.4);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_719.setTransform(-1400.7,275.9);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_720.setTransform(-1414.7,275.9);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_721.setTransform(-1421.7,275.9);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_722.setTransform(-1400.7,263.9);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_723.setTransform(-1407.7,263.9);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_724.setTransform(-1421.7,263.9);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.5,18.5).lineTo(-16.5,-18.5).lineTo(16.5,-18.5).lineTo(16.5,18.5).closePath();
	this.shape_725.setTransform(-1411.2,272.9);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_726.setTransform(-1207.2,265.9);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_727.setTransform(-1207.2,255.9);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_728.setTransform(-1207.2,245.9);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_729.setTransform(-1207.2,235.9);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_730.setTransform(-1207.2,226.4);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_731.setTransform(-1207.2,216.4);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_732.setTransform(-1207.2,206.4);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_733.setTransform(-1207.2,196.4);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,51.5).lineTo(-19,-51.5).lineTo(19,-51.5).lineTo(19,51.5).closePath();
	this.shape_734.setTransform(-1206.7,239.9);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_735.setTransform(-1344.7,277.9);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_736.setTransform(-1355.2,277.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_737.setTransform(-1344.7,267.9);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_738.setTransform(-1344.7,257.9);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_739.setTransform(-1355.2,257.9);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_740.setTransform(-1344.7,247.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_741.setTransform(-1355.2,247.9);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_742.setTransform(-1344.7,237.9);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_743.setTransform(-1344.7,227.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_744.setTransform(-1355.2,227.9);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_745.setTransform(-1355.2,217.9);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_746.setTransform(-1344.7,207.9);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_747.setTransform(-1355.2,207.9);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_748.setTransform(-1344.7,197.9);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_749.setTransform(-1344.7,187.9);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_750.setTransform(-1355.2,187.9);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_751.setTransform(-1344.7,177.9);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_752.setTransform(-1365.7,277.9);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_753.setTransform(-1365.7,267.9);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_754.setTransform(-1376.2,267.9);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_755.setTransform(-1365.7,257.9);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_756.setTransform(-1365.7,247.9);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_757.setTransform(-1376.2,247.9);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_758.setTransform(-1365.7,237.9);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_759.setTransform(-1376.2,237.9);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_760.setTransform(-1365.7,227.9);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_761.setTransform(-1376.2,227.9);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_762.setTransform(-1365.7,217.9);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_763.setTransform(-1365.7,207.9);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_764.setTransform(-1376.2,207.9);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_765.setTransform(-1365.7,197.9);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_766.setTransform(-1376.2,197.9);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_767.setTransform(-1365.7,187.9);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_768.setTransform(-1365.7,177.9);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_769.setTransform(-1376.2,177.9);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,65.5).lineTo(-24.5,-65.5).lineTo(24.5,-65.5).lineTo(24.5,65.5).closePath();
	this.shape_770.setTransform(-1360.1,222.9);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_771.setTransform(-1290.7,258.9);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_772.setTransform(-1306.7,258.9);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_773.setTransform(-1314.7,258.9);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_774.setTransform(-1290.7,238.9);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_775.setTransform(-1298.7,238.9);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_776.setTransform(-1314.7,238.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_777.setTransform(-1298.7,198.9);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_778.setTransform(-1306.7,198.9);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_779.setTransform(-1314.7,198.9);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_780.setTransform(-1290.7,218.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_781.setTransform(-1298.7,218.9);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_782.setTransform(-1306.7,218.9);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,58.5).lineTo(-22,-58.5).lineTo(22,-58.5).lineTo(22,58.5).closePath();
	this.shape_783.setTransform(-1306.6,232.9);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_784.setTransform(-1083,281.6);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_785.setTransform(-1065.5,276.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_786.setTransform(-1083,276.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_787.setTransform(-1065.5,265.1);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_788.setTransform(-1083,259.6);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_789.setTransform(-1065.5,254.1);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_790.setTransform(-1083,254.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_791.setTransform(-1083,243.1);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_792.setTransform(-1065.5,237.6);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_793.setTransform(-1065.5,232.1);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_794.setTransform(-1083,232.1);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_795.setTransform(-1065.5,221.1);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_796.setTransform(-1083,221.1);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_797.setTransform(-1065.5,210.1);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_798.setTransform(-1065.5,204.6);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_799.setTransform(-1083,199.1);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_800.setTransform(-1065.5,199.1);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_801.setTransform(-1083,188.1);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_802.setTransform(-1065.5,182.6);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_803.setTransform(-1083,182.6);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.4,61.9).lineTo(-17.4,-61.9).lineTo(16.5,-61.9).lineTo(17.4,-61.6).lineTo(17.4,61.9).closePath();
	this.shape_804.setTransform(-1074.6,229.7);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.beginFill("#494A4E").beginStroke().moveTo(-309.5,4.5).lineTo(-309.5,-4.5).lineTo(309.5,-4.5).lineTo(309.5,4.5).closePath();
	this.shape_805.setTransform(-1338.2,292.9);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.beginFill("#999999").beginStroke().moveTo(-4.7,51.3).curveTo(-20.6,50.5,-27.3,49.4).curveTo(-35.4,48.1,-41,44.9).curveTo(-46.7,41.6,-49.6,36.6).curveTo(-54.7,27.8,-50,15.4).curveTo(-44.3,0.4,-43.7,-17.5).curveTo(-43.3,-30.7,-45.9,-49.2).lineTo(-46.2,-51.4).lineTo(-43.9,-51.3).curveTo(-32.7,-50.4,-24,-45.5).curveTo(-19.5,-42.9,-15.1,-38.7).curveTo(-12.5,-36.1,-7.9,-30.9).curveTo(-5,-27.4,-3.3,-25.7).curveTo(4.1,-17.8,14.4,-13.2).curveTo(24.7,-8.6,35,-8.6).curveTo(38.7,-8.6,42.3,-9.2).lineTo(44.2,-9.5).lineTo(44.4,-7.6).curveTo(45.9,4.6,50,15.4).curveTo(54.7,27.6,49.5,36.6).curveTo(46.6,41.6,41,44.9).curveTo(35.3,48.1,27.3,49.4).curveTo(20.5,50.5,4.7,51.3).lineTo(-0,51.4).lineTo(-4.7,51.3).closePath();
	this.shape_806.setTransform(-800.5,248.8);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.beginFill("#999999").beginStroke().moveTo(41.5,114.5).curveTo(31.1,112.9,22.2,107.7).curveTo(13.3,102.5,6.6,94).curveTo(-0.9,84.4,-12.3,78.6).curveTo(-23.7,72.8,-35.2,72.8).curveTo(-40.5,72.8,-45.4,74.1).lineTo(-47.3,74.6).lineTo(-49.7,59.1).curveTo(-54.6,26.4,-43.3,-5).lineTo(-40.8,-12).curveTo(-31.4,-37.5,-28.6,-50.4).curveTo(-24,-71.8,-27.2,-90.8).curveTo(-29.5,-92.7,-30.8,-95.4).curveTo(-32,-98.1,-32,-101.2).curveTo(-32,-106.8,-28,-110.9).curveTo(-24,-114.9,-18.3,-114.9).lineTo(18.3,-114.9).curveTo(24,-114.9,28,-110.9).curveTo(32,-106.8,32,-101.2).curveTo(32,-98.1,30.8,-95.4).curveTo(29.5,-92.7,27.2,-90.8).curveTo(24,-71.8,28.6,-50.4).curveTo(31.4,-37.5,40.8,-12).lineTo(43.3,-5).curveTo(54.6,26.2,49.7,59.1).lineTo(48.1,69.6).curveTo(45.9,83.7,45,91.1).curveTo(43.6,103.2,43.6,112.8).lineTo(43.6,114.9).closePath().moveTo(29.1,13.9).curveTo(27.6,7.4,25.4,1.4).lineTo(22.9,-5.4).curveTo(13.8,-30.4,10.6,-43.6).curveTo(5.4,-65.7,7.3,-85.5).lineTo(-7.3,-85.5).curveTo(-5.5,-65.7,-10.7,-43.6).curveTo(-13.8,-30.5,-22.9,-5.4).lineTo(-25.4,1.4).curveTo(-27.6,7.6,-29.1,13.9).lineTo(29.1,13.9).lineTo(29.1,13.9).closePath();
	this.shape_807.setTransform(-800.5,114.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-49.3,7.6).lineTo(-49.3,-7.6).lineTo(49.3,-7.6).lineTo(49.3,7.6).closePath();
	this.shape_808.setTransform(-910.2,289.2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-7.5,7.9).lineTo(-6.3,-7.9).lineTo(6.5,-7.9).lineTo(7.5,7.9).closePath();
	this.shape_809.setTransform(-880.7,234.9);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-6.1,4.2).lineTo(-7.3,3.8).lineTo(-8.2,3.3).curveTo(-9.2,2.7,-9.7,2.1).curveTo(-10.2,1.6,-10.6,1).lineTo(-11.1,-0.1).lineTo(-10.9,-0.3).lineTo(-8.6,0.6).lineTo(-7.2,1.1).lineTo(-6.4,1.3).lineTo(-6,1.4).lineTo(-5.6,1.4).curveTo(-5.1,1.5,-4,1.4).lineTo(-3.2,1.1).lineTo(-2.4,0.7).lineTo(-1.6,0.2).lineTo(-0.6,-0.7).lineTo(-0.6,-0.6).lineTo(-0.5,-0.7).lineTo(-0.3,-0.8).lineTo(1.4,-2.4).lineTo(2.4,-3.1).lineTo(3.4,-3.9).curveTo(4.8,-4.6,6.1,-4.4).lineTo(6.7,-4.3).lineTo(7.2,-4.1).lineTo(8.2,-3.7).curveTo(9,-3.2,9.7,-2.5).lineTo(10.6,-1.4).lineTo(11,-0.6).lineTo(11.1,-0.3).lineTo(10.9,-0.1).lineTo(6.4,-1.8).lineTo(5.6,-2).curveTo(4.8,-2.3,3.8,-2.5).lineTo(2.8,-2.3).curveTo(1.9,-1.9,1.8,-1.7).lineTo(1.1,-0.8).lineTo(0.8,-0.3).lineTo(0.7,0.1).lineTo(0.7,0.1).lineTo(0.7,0.2).lineTo(0.6,0.3).lineTo(0.1,1.4).lineTo(-0.8,2.6).lineTo(-1.9,3.5).lineTo(-3.3,4.1).curveTo(-4.1,4.4,-4.9,4.4).curveTo(-5.5,4.4,-6.1,4.2).closePath();
	this.shape_810.setTransform(-891.7,207.4);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-9.3,6.5).lineTo(9.3,-6.5).lineTo(9.3,6.5).closePath();
	this.shape_811.setTransform(-924.2,240);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-9.2,6.5).lineTo(9.2,-6.5).lineTo(9.2,6.5).closePath();
	this.shape_812.setTransform(-905.3,240);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-9.2,6.5).lineTo(9.2,-6.5).lineTo(9.2,6.5).closePath();
	this.shape_813.setTransform(-943.1,240);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-49.3,46.9).lineTo(-49.3,23.4).lineTo(-42.6,23.4).lineTo(-42.6,-3.1).lineTo(-23.7,-16.4).lineTo(-23.7,-3.1).lineTo(-4.7,-16.4).lineTo(-4.7,-3.1).lineTo(14.2,-16.4).lineTo(14.2,9.8).lineTo(20.8,9.8).lineTo(24.3,-36.5).lineTo(35.2,-36.5).lineTo(38.2,9.8).lineTo(45.5,9.8).lineTo(45.5,23.4).lineTo(49.3,23.4).lineTo(49.3,46.9).closePath().moveTo(18.3,26.9).lineTo(33.3,26.9).lineTo(33.3,13.2).lineTo(18.3,13.2).closePath().moveTo(-7.6,26.9).lineTo(7.3,26.9).lineTo(7.3,13.2).lineTo(-7.6,13.2).closePath().moveTo(-33.3,26.9).lineTo(-18.4,26.9).lineTo(-18.4,13.2).lineTo(-33.3,13.2).closePath().moveTo(12.4,-38.2).lineTo(11.2,-38.6).lineTo(10.2,-39.1).curveTo(9.3,-39.7,8.8,-40.4).curveTo(8.3,-40.8,7.9,-41.5).lineTo(7.4,-42.6).lineTo(7.6,-42.7).lineTo(9.9,-41.8).lineTo(11.3,-41.4).lineTo(12.1,-41.2).lineTo(12.5,-41.1).lineTo(12.9,-41.1).curveTo(13.4,-41,14.5,-41.1).lineTo(15.3,-41.3).lineTo(16.1,-41.7).lineTo(16.9,-42.3).lineTo(17.9,-43.1).lineTo(17.9,-43.1).lineTo(18,-43.2).lineTo(18.2,-43.3).lineTo(19.9,-44.8).lineTo(20.9,-45.6).lineTo(21.9,-46.3).curveTo(23.3,-47,24.6,-46.9).lineTo(25.2,-46.8).lineTo(25.7,-46.6).lineTo(26.7,-46.1).curveTo(27.5,-45.6,28.2,-45).lineTo(29.1,-43.9).lineTo(29.5,-43.1).lineTo(29.6,-42.7).lineTo(29.4,-42.6).lineTo(25.7,-44).lineTo(24.1,-44.5).curveTo(23.3,-44.8,22.3,-44.9).lineTo(21.3,-44.7).curveTo(20.4,-44.3,20.3,-44.2).lineTo(19.6,-43.3).lineTo(19.3,-42.8).lineTo(19.2,-42.4).lineTo(19.2,-42.3).lineTo(19.2,-42.2).lineTo(19.1,-42.2).lineTo(18.6,-41).lineTo(17.7,-39.9).lineTo(16.6,-39).lineTo(15.2,-38.3).curveTo(14.4,-38,13.6,-38).curveTo(13,-38,12.4,-38.2).closePath();
	this.shape_814.setTransform(-910.2,249.9);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-1.2,11).lineTo(-1.2,-11).lineTo(1.2,-11).lineTo(1.2,11).closePath();
	this.shape_815.setTransform(-666.6,286.7);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,10.3).curveTo(-6.5,6,-6.5,0).curveTo(-6.5,-6,-4.6,-10.2).curveTo(-2.7,-14.5,0,-14.5).curveTo(2.7,-14.5,4.6,-10.2).curveTo(6.5,-6,6.5,0).curveTo(6.5,6,4.6,10.3).curveTo(2.7,14.5,0,14.5).curveTo(-2.7,14.5,-4.6,10.3).closePath();
	this.shape_816.setTransform(-666.6,270);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-1.2,8.7).lineTo(-1.2,-8.7).lineTo(1.2,-8.7).lineTo(1.2,8.7).closePath();
	this.shape_817.setTransform(-650.3,289);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-5.5,5.5).curveTo(-7.7,3.2,-7.7,0).curveTo(-7.7,-3.2,-5.5,-5.5).curveTo(-3.2,-7.7,0,-7.7).curveTo(3.2,-7.7,5.5,-5.5).curveTo(7.8,-3.2,7.7,0).curveTo(7.8,3.2,5.5,5.5).curveTo(3.2,7.7,0,7.7).curveTo(-3.2,7.7,-5.5,5.5).closePath();
	this.shape_818.setTransform(-650.3,277.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.beginFill("#595959").beginStroke().moveTo(-1.2,9.3).lineTo(-1.2,-9.3).lineTo(1.2,-9.3).lineTo(1.2,9.3).closePath();
	this.shape_819.setTransform(-634.1,289.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.beginFill("#595959").beginStroke().moveTo(-4.6,6).curveTo(-6.5,3.5,-6.5,0).curveTo(-6.5,-3.5,-4.6,-5.9).curveTo(-2.7,-8.4,0,-8.4).curveTo(2.7,-8.4,4.6,-5.9).curveTo(6.5,-3.5,6.5,0).curveTo(6.5,3.5,4.6,6).curveTo(2.7,8.4,0,8.4).curveTo(-2.7,8.4,-4.6,6).closePath();
	this.shape_820.setTransform(-634.5,274.4);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-50.9,4.9).lineTo(-50.9,-4.9).lineTo(50.9,-4.9).lineTo(50.9,4.9).closePath();
	this.shape_821.setTransform(-242.4,289.8);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.5,9.4).lineTo(12.5,-9.4).lineTo(12.5,9.4).closePath();
	this.shape_822.setTransform(-254.9,240.5);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.7,12.6).lineTo(-12.7,-12.6).lineTo(12.7,-12.6).lineTo(12.7,12.6).closePath();
	this.shape_823.setTransform(-280.6,237.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.5,9.4).lineTo(12.5,-9.4).lineTo(12.5,9.4).closePath();
	this.shape_824.setTransform(-229.4,240.5);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-12.5,9.4).lineTo(12.5,-9.4).lineTo(12.5,9.4).closePath();
	this.shape_825.setTransform(-204,240.5);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-50.9,35).lineTo(-50.9,-35).lineTo(-25.5,-35).lineTo(-25.5,-9.6).lineTo(-0,-28.6).lineTo(-0,-9.6).lineTo(25.5,-28.6).lineTo(25.5,-9.6).lineTo(50.9,-28.6).lineTo(50.9,35).closePath().moveTo(31.8,15.9).lineTo(44.5,15.9).lineTo(44.5,9.5).lineTo(31.8,9.5).closePath().moveTo(6.4,15.9).lineTo(19.1,15.9).lineTo(19.1,9.5).lineTo(6.4,9.5).closePath().moveTo(-19.1,15.9).lineTo(-6.4,15.9).lineTo(-6.4,9.5).lineTo(-19.1,9.5).closePath().moveTo(31.8,3.2).lineTo(44.5,3.2).lineTo(44.5,-3.2).lineTo(31.8,-3.2).closePath().moveTo(6.4,3.2).lineTo(19.1,3.2).lineTo(19.1,-3.2).lineTo(6.4,-3.2).closePath().moveTo(-19.1,3.2).lineTo(-6.4,3.2).lineTo(-6.4,-3.2).lineTo(-19.1,-3.2).closePath();
	this.shape_826.setTransform(-242.4,259.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-12.7,6.4).lineTo(-12.7,-6.4).lineTo(12.7,-6.4).lineTo(12.7,6.4).closePath();
	this.shape_827.setTransform(-280.6,199.3);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-12.7,3.2).lineTo(-12.7,-3.2).lineTo(12.7,-3.2).lineTo(12.7,3.2).closePath();
	this.shape_828.setTransform(-280.6,215.2);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-10.4,16.3).lineTo(-10.4,-16.2).lineTo(10.5,-16.2).lineTo(10.5,16.3).closePath();
	this.shape_829.setTransform(-280.5,217.6);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-20.5,12).lineTo(-20.5,11.9).lineTo(-27.4,11.9).lineTo(-17.1,-5.2).lineTo(-10.3,-5.2).lineTo(-10.3,-12).lineTo(0,-12).lineTo(0,-5.2).lineTo(17.1,-5.2).lineTo(27.4,11.9).lineTo(20.6,11.9).lineTo(20.6,12).closePath();
	this.shape_830.setTransform(-27.4,254.6);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.beginFill("#575F66").beginStroke().moveTo(-27.4,1.9).lineTo(-27.4,-1.6).lineTo(-20.5,-1.6).lineTo(-20.5,-1.8).lineTo(3.4,-1.8).lineTo(3.4,-1.6).lineTo(13.7,-1.6).lineTo(13.7,-1.8).lineTo(20.6,-1.8).lineTo(20.6,-1.6).lineTo(27.4,-1.6).lineTo(27.4,1.9).closePath();
	this.shape_831.setTransform(-27.4,295.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.4,27.4).lineTo(-27.4,24).lineTo(-20.5,24).lineTo(-20.5,-3.5).lineTo(-27.4,-3.5).lineTo(-17.1,-20.6).lineTo(-10.3,-20.6).lineTo(-10.3,-27.4).lineTo(0,-27.4).lineTo(0,-20.6).lineTo(17.1,-20.6).lineTo(27.4,-3.5).lineTo(20.6,-3.5).lineTo(20.6,24).lineTo(27.4,24).lineTo(27.4,27.4).closePath().moveTo(3.4,24).lineTo(13.7,24).lineTo(13.7,3.4).lineTo(3.4,3.4).closePath().moveTo(-13.7,10.2).lineTo(-3.4,10.2).lineTo(-3.4,-0).lineTo(-13.7,-0).closePath();
	this.shape_832.setTransform(-27.4,270);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.beginFill("#BEC1C4").beginStroke().moveTo(-16.8,14).lineTo(-16.8,-13.9).lineTo(16.8,-13.9).lineTo(16.8,14).closePath();
	this.shape_833.setTransform(-27.4,280.6);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-20.6,12).lineTo(-20.6,11.9).lineTo(-27.4,11.9).lineTo(-17.1,-5.2).lineTo(-10.3,-5.2).lineTo(-10.3,-12).lineTo(-0,-12).lineTo(-0,-5.2).lineTo(17.1,-5.2).lineTo(27.4,11.9).lineTo(20.6,11.9).lineTo(20.6,12).closePath();
	this.shape_834.setTransform(-90.1,254.6);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.beginFill("#575F66").beginStroke().moveTo(-27.4,1.9).lineTo(-27.4,-1.6).lineTo(-20.6,-1.6).lineTo(-20.6,-1.8).lineTo(3.4,-1.8).lineTo(3.4,-1.6).lineTo(13.7,-1.6).lineTo(13.7,-1.8).lineTo(20.6,-1.8).lineTo(20.6,-1.6).lineTo(27.4,-1.6).lineTo(27.4,1.9).closePath();
	this.shape_835.setTransform(-90.1,295.5);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.4,27.4).lineTo(-27.4,24).lineTo(-20.6,24).lineTo(-20.6,-3.5).lineTo(-27.4,-3.5).lineTo(-17.1,-20.6).lineTo(-10.3,-20.6).lineTo(-10.3,-27.4).lineTo(-0,-27.4).lineTo(-0,-20.6).lineTo(17.1,-20.6).lineTo(27.4,-3.5).lineTo(20.6,-3.5).lineTo(20.6,24).lineTo(27.4,24).lineTo(27.4,27.4).closePath().moveTo(3.4,24).lineTo(13.7,24).lineTo(13.7,3.4).lineTo(3.4,3.4).closePath().moveTo(-13.7,10.2).lineTo(-3.5,10.2).lineTo(-3.5,-0).lineTo(-13.7,-0).closePath();
	this.shape_836.setTransform(-90.1,270);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.beginFill("#BEC1C4").beginStroke().moveTo(-16.8,14).lineTo(-16.8,-13.9).lineTo(16.8,-13.9).lineTo(16.8,14).closePath();
	this.shape_837.setTransform(-90.2,280.6);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.9,8.1).lineTo(-16.9,-8.1).lineTo(16.9,-8.1).lineTo(16.9,8.1).closePath();
	this.shape_838.setTransform(-718.4,193.9);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.8,13.7).lineTo(-4.8,-13.7).lineTo(4.8,-13.7).lineTo(4.8,13.7).closePath();
	this.shape_839.setTransform(-625.5,241.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.8,13.7).lineTo(-4.8,-13.7).lineTo(4.8,-13.7).lineTo(4.8,13.7).closePath();
	this.shape_840.setTransform(-639.7,241.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.8,13.7).lineTo(-4.8,-13.7).lineTo(4.8,-13.7).lineTo(4.8,13.7).closePath();
	this.shape_841.setTransform(-654.4,241.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.3,10.8).curveTo(-23,6.3,-23,-0).curveTo(-23,-6.3,-16.3,-10.7).curveTo(-9.5,-15.2,-0,-15.2).curveTo(9.5,-15.2,16.3,-10.7).curveTo(23,-6.3,23,-0).curveTo(23,6.3,16.3,10.8).curveTo(9.5,15.2,-0,15.2).curveTo(-9.5,15.2,-16.3,10.8).closePath();
	this.shape_842.setTransform(-638.5,214.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_843.setTransform(-693.4,254.1);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_844.setTransform(-693.4,244.9);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_845.setTransform(-693.4,235.8);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_846.setTransform(-693.4,226.7);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_847.setTransform(-693.4,217.5);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.2,-3.3).lineTo(11.2,3.3).closePath();
	this.shape_848.setTransform(-693.4,208.4);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_849.setTransform(-720.7,254.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_850.setTransform(-720.7,244.9);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_851.setTransform(-720.7,235.8);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_852.setTransform(-720.7,226.7);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_853.setTransform(-720.7,217.5);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-11.2,3.3).lineTo(-11.2,-3.3).lineTo(11.1,-3.3).lineTo(11.1,3.3).closePath();
	this.shape_854.setTransform(-720.7,208.4);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.beginFill("#494A4E").beginStroke().moveTo(-35.2,41.9).lineTo(-35.2,-41.8).lineTo(35.2,-41.8).lineTo(35.2,41.9).closePath();
	this.shape_855.setTransform(-643.6,255.5);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-35.2,50.7).lineTo(-35.2,-50.7).lineTo(35.2,-50.7).lineTo(35.2,50.7).closePath();
	this.shape_856.setTransform(-706.3,246.7);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-3.8,8.6).lineTo(-3.8,-8.6).lineTo(3.8,-8.6).lineTo(3.8,8.6).closePath();
	this.shape_857.setTransform(-714.4,182.3);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-10.7,34.9).lineTo(-7.7,-34.9).lineTo(8.4,-34.9).lineTo(10.8,34.9).closePath();
	this.shape_858.setTransform(-647,205.9);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,15.6).lineTo(-1.7,-15.6).lineTo(1.6,-15.6).lineTo(1.6,15.6).closePath();
	this.shape_859.setTransform(-180.3,279);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.6,14.5).curveTo(-9.3,8.5,-9.3,0).curveTo(-9.3,-8.5,-6.6,-14.5).curveTo(-3.9,-20.5,-0,-20.5).curveTo(3.9,-20.5,6.6,-14.5).curveTo(9.3,-8.5,9.3,0).curveTo(9.3,8.5,6.6,14.5).curveTo(3.9,20.5,-0,20.5).curveTo(-3.9,20.5,-6.6,14.5).closePath();
	this.shape_860.setTransform(-180.4,255.3);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-1.7,12.3).lineTo(-1.7,-12.3).lineTo(1.6,-12.3).lineTo(1.6,12.3).closePath();
	this.shape_861.setTransform(-157.2,282.3);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.beginFill("#B4B7BB").beginStroke().moveTo(-7.8,7.8).curveTo(-11,4.6,-11,0).curveTo(-11,-4.5,-7.8,-7.8).curveTo(-4.6,-11,-0,-11).curveTo(4.6,-11,7.8,-7.8).curveTo(11,-4.5,11,0).curveTo(11,4.6,7.8,7.8).curveTo(4.5,11,-0,11).curveTo(-4.6,11,-7.8,7.8).closePath();
	this.shape_862.setTransform(-157.3,265.5);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.beginFill("#595959").beginStroke().moveTo(-1.6,13.1).lineTo(-1.6,-13.1).lineTo(1.6,-13.1).lineTo(1.6,13.1).closePath();
	this.shape_863.setTransform(-134.2,283.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.beginFill("#595959").beginStroke().moveTo(-6.5,8.5).curveTo(-9.2,5,-9.2,0).curveTo(-9.2,-4.9,-6.5,-8.4).curveTo(-3.8,-11.9,-0,-11.9).curveTo(3.8,-11.9,6.5,-8.4).curveTo(9.2,-4.9,9.2,0).curveTo(9.2,5,6.5,8.5).curveTo(3.8,11.9,-0,11.9).curveTo(-3.8,11.9,-6.5,8.5).closePath();
	this.shape_864.setTransform(-134.8,261.5);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-93.1,13.5).lineTo(-93.1,-13.5).lineTo(93,-13.5).lineTo(93,13.5).closePath();
	this.shape_865.setTransform(-388.1,282.7);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-68.5,39.1).lineTo(-68.5,-39.1).lineTo(68.5,-39.1).lineTo(68.5,39.1).closePath();
	this.shape_866.setTransform(-543.8,257);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.beginFill("#494A4E").beginStroke().moveTo(-44.3,1.8).lineTo(-44.3,-1.8).lineTo(44.3,-1.8).lineTo(44.3,1.8).closePath();
	this.shape_867.setTransform(-420.3,268.9);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.4,1.8).lineTo(-16.4,-1.8).lineTo(16.4,-1.8).lineTo(16.4,1.8).closePath();
	this.shape_868.setTransform(-419.9,141.6);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.4,1.8).lineTo(-16.4,-1.8).lineTo(16.4,-1.8).lineTo(16.4,1.8).closePath();
	this.shape_869.setTransform(-419.9,135.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.5,3.2).lineTo(-17.5,-3.2).lineTo(17.5,-3.2).lineTo(17.5,3.2).closePath();
	this.shape_870.setTransform(-420.3,128);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-41.8,70.7).curveTo(-36.9,66.1,-31.4,55).curveTo(-20.5,32.5,-17.8,-0.8).curveTo(-16.8,-11.2,-16.3,-42.1).lineTo(-16,-70.8).lineTo(15.2,-70.8).lineTo(14.5,-43.1).curveTo(13.9,-13.4,14.6,-2.6).curveTo(16.5,34.3,29.3,56.2).curveTo(35.8,67.2,41.8,70.7).closePath();
	this.shape_871.setTransform(-419.6,199.2);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.2).lineTo(-17.8,-1.2).lineTo(17.8,-1.2).lineTo(17.8,1.2).closePath();
	this.shape_872.setTransform(-511.3,201.7);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.6).lineTo(-17.8,-1.6).lineTo(17.8,-1.6).lineTo(17.8,1.6).closePath();
	this.shape_873.setTransform(-511.3,197.4);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.5).lineTo(-2.8,-2.5).lineTo(2.8,-2.5).lineTo(2.8,2.5).closePath();
	this.shape_874.setTransform(-511.3,168.6);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.beginFill("#39434B").beginStroke().moveTo(-31.7,2.1).lineTo(-31.7,-2.1).lineTo(31.7,-2.1).lineTo(31.7,2.1).closePath();
	this.shape_875.setTransform(-511.4,250.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-19,3.5).lineTo(-19,-3.5).lineTo(18.9,-3.5).lineTo(18.9,3.5).closePath();
	this.shape_876.setTransform(-511.4,215.6);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.beginFill("#39434B").beginStroke().moveTo(-1.5,12.5).curveTo(-5.9,7.3,-8.1,-1.7).curveTo(-9.4,-7.1,-9.8,-13.4).lineTo(-9.9,-18.9).lineTo(-7.1,-18.7).lineTo(-7,-13.6).curveTo(-6.6,-7.6,-5.4,-2.4).curveTo(-1.4,14,9.9,16.1).lineTo(9.4,18.8).curveTo(3,17.7,-1.5,12.5).closePath();
	this.shape_877.setTransform(-492.3,233.7);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.beginFill("#39434B").beginStroke().moveTo(-9.9,16.1).curveTo(1.4,14,5.4,-2.4).curveTo(6.6,-7.6,7,-13.6).lineTo(7.1,-18.7).lineTo(9.9,-18.9).lineTo(9.8,-13.4).curveTo(9.4,-7.1,8.1,-1.7).curveTo(5.9,7.3,1.5,12.5).curveTo(-3,17.7,-9.4,18.8).closePath();
	this.shape_878.setTransform(-529.7,233.7);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,27.6).curveTo(-17.4,22.6,-17.4,15.3).lineTo(-17.4,-15.3).curveTo(-17.4,-22.6,-12.3,-27.6).curveTo(-7.2,-32.8,0,-32.8).curveTo(7.2,-32.8,12.3,-27.6).curveTo(17.4,-22.6,17.4,-15.3).lineTo(17.4,15.3).curveTo(17.4,22.6,12.3,27.6).curveTo(7.2,32.7,0,32.7).curveTo(-7.2,32.7,-12.3,27.6).closePath();
	this.shape_879.setTransform(-511.5,201.7);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.2).lineTo(-17.8,-1.2).lineTo(17.8,-1.2).lineTo(17.8,1.2).closePath();
	this.shape_880.setTransform(-578.6,201.7);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,1.6).lineTo(-17.8,-1.6).lineTo(17.8,-1.6).lineTo(17.8,1.6).closePath();
	this.shape_881.setTransform(-578.6,197.4);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.5).lineTo(-2.8,-2.5).lineTo(2.8,-2.5).lineTo(2.8,2.5).closePath();
	this.shape_882.setTransform(-578.6,168.6);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.beginFill("#39434B").beginStroke().moveTo(-31.7,2.1).lineTo(-31.7,-2.1).lineTo(31.7,-2.1).lineTo(31.7,2.1).closePath();
	this.shape_883.setTransform(-578.7,250.5);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-19,3.5).lineTo(-19,-3.5).lineTo(19,-3.5).lineTo(19,3.5).closePath();
	this.shape_884.setTransform(-578.7,215.6);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.beginFill("#39434B").beginStroke().moveTo(-1.5,12.5).curveTo(-5.9,7.3,-8.1,-1.7).curveTo(-9.4,-7.1,-9.8,-13.4).lineTo(-9.9,-18.9).lineTo(-7.1,-18.7).lineTo(-7,-13.6).curveTo(-6.6,-7.6,-5.4,-2.4).curveTo(-1.4,14,9.9,16.1).lineTo(9.4,18.8).curveTo(3,17.7,-1.5,12.5).closePath();
	this.shape_885.setTransform(-559.6,233.7);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.beginFill("#39434B").beginStroke().moveTo(-9.9,16.1).curveTo(1.4,14,5.4,-2.4).curveTo(6.7,-7.6,7,-13.6).lineTo(7.1,-18.7).lineTo(9.9,-18.9).lineTo(9.8,-13.4).curveTo(9.4,-7.1,8.1,-1.7).curveTo(6,7.3,1.4,12.5).curveTo(-3,17.7,-9.4,18.8).closePath();
	this.shape_886.setTransform(-597,233.7);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,27.6).curveTo(-17.4,22.6,-17.4,15.3).lineTo(-17.4,-15.3).curveTo(-17.4,-22.6,-12.3,-27.6).curveTo(-7.2,-32.8,0,-32.8).curveTo(7.2,-32.8,12.3,-27.6).curveTo(17.4,-22.6,17.4,-15.3).lineTo(17.4,15.3).curveTo(17.4,22.6,12.3,27.6).curveTo(7.2,32.7,0,32.7).curveTo(-7.2,32.7,-12.3,27.6).closePath();
	this.shape_887.setTransform(-578.8,201.7);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_888.setTransform(-308.4,254.5);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_889.setTransform(-322.7,254.5);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,4.5).lineTo(-4.6,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_890.setTransform(-336.9,254.5);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_891.setTransform(-351.1,254.5);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_892.setTransform(-365.4,254.5);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_893.setTransform(-379.6,254.5);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_894.setTransform(-308.4,238.9);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_895.setTransform(-322.7,238.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,4.5).lineTo(-4.6,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_896.setTransform(-336.9,238.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_897.setTransform(-351.1,238.9);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_898.setTransform(-365.4,238.9);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.5).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.5).closePath();
	this.shape_899.setTransform(-379.6,238.9);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_900.setTransform(-308.4,223.4);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_901.setTransform(-322.7,223.4);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.6,4.6).lineTo(-4.6,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_902.setTransform(-336.9,223.4);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_903.setTransform(-351.1,223.4);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_904.setTransform(-365.4,223.4);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.beginFill("#5E5E5E").beginStroke().moveTo(-4.5,4.6).lineTo(-4.5,-4.5).lineTo(4.5,-4.5).lineTo(4.5,4.6).closePath();
	this.shape_905.setTransform(-379.6,223.4);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.beginFill("#494A4E").beginStroke().moveTo(-33,22).lineTo(-33,-22).lineTo(33,-22).lineTo(33,22).closePath();
	this.shape_906.setTransform(-335.6,220.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.beginFill("#494A4E").beginStroke().moveTo(-47.9,30.4).lineTo(-47.9,-30.4).lineTo(47.9,-30.4).lineTo(47.9,30.4).closePath();
	this.shape_907.setTransform(-342.7,240.2);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-17.8,16.5).curveTo(-25.2,9.6,-25.2,-0).curveTo(-25.2,-9.7,-17.8,-16.5).curveTo(-10.4,-23.3,0,-23.3).curveTo(10.5,-23.3,17.8,-16.5).curveTo(25.2,-9.7,25.2,-0).curveTo(25.2,9.6,17.8,16.5).curveTo(10.5,23.3,0,23.3).curveTo(-10.4,23.3,-17.8,16.5).closePath();
	this.shape_908.setTransform(-334.3,207.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-7.6,1.1).curveTo(-8.1,1.1,-8.4,0.8).curveTo(-8.7,0.5,-8.7,0).curveTo(-8.7,-0.4,-8.4,-0.7).curveTo(-8.1,-1.1,-7.6,-1.1).lineTo(7.6,-1.1).curveTo(8.1,-1.1,8.4,-0.7).curveTo(8.7,-0.4,8.7,0).curveTo(8.7,0.5,8.4,0.8).curveTo(8.1,1.1,7.6,1.1).closePath();
	this.shape_909.setTransform(-333.5,158.4);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,55.1).lineTo(-6.4,-55.1).lineTo(7,-55.1).lineTo(8.9,55.1).closePath();
	this.shape_910.setTransform(-333.7,213.1);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.beginFill().beginStroke("#3E3E3F").setStrokeStyle(6).moveTo(-33.6,13.7).lineTo(-33.6,-12.3).lineTo(33.6,-12.3).lineTo(33.6,15.4);
	this.shape_911.setTransform(-545,155);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.beginFill().beginStroke("#3E3E3F").setStrokeStyle(6).moveTo(26.6,30.7).lineTo(26.6,15.1).lineTo(13,15.1).lineTo(13,-0.5).lineTo(1.6,-0.5).lineTo(1.6,-14).lineTo(-10.2,-14).lineTo(-10.2,-27.7).lineTo(-29.6,-27.7);
	this.shape_912.setTransform(-469.7,208.1);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.beginFill("#9A9FA3").beginStroke().moveTo(-81.2,17.4).lineTo(-81.2,-17.4).lineTo(81.2,-17.4).lineTo(81.2,17.4).closePath();
	this.shape_913.setTransform(-947.5,279);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-5.2,42.7).lineTo(-5.2,38.6).lineTo(-0.5,38.6).lineTo(-0.5,35.7).lineTo(4,35.7).lineTo(4,-15.9).lineTo(-1.7,-15.9).lineTo(-1.7,-19.4).lineTo(-52.8,-19.4).lineTo(-52.8,10).lineTo(-51.1,10).lineTo(-51.1,12.5).lineTo(-52.8,12.5).lineTo(-53.2,16.3).lineTo(-53.5,16.4).curveTo(-54.2,16.7,-54.8,17.3).curveTo(-55.7,18.1,-55.7,18.8).curveTo(-55.7,19.6,-54.3,20.5).curveTo(-52.7,21.4,-52.4,21.1).curveTo(-52.1,20.8,-52.2,19.8).curveTo(-52.3,18.8,-52.6,17.8).lineTo(-51.5,17.4).curveTo(-50.3,20.9,-51.6,22).curveTo(-52.1,22.3,-52.6,22.3).curveTo(-53.3,22.3,-54.9,21.5).curveTo(-56.9,20.2,-56.9,18.7).curveTo(-56.8,17,-54.3,15.5).lineTo(-54,12.5).lineTo(-56.2,12.5).lineTo(-56.2,10).lineTo(-53.9,10).lineTo(-53.9,-19.4).lineTo(-55.1,-19.4).lineTo(-55.1,-27.8).lineTo(21.1,-42.7).lineTo(56.9,-27.5).lineTo(56.9,-19.4).lineTo(55.7,-19.4).lineTo(55.7,-9).lineTo(45.3,-9).lineTo(45.3,-19.4).lineTo(28.2,-19.4).lineTo(28.2,35.7).lineTo(33.1,35.7).lineTo(33.1,38.6).lineTo(36.6,38.6).lineTo(36.6,42.7).closePath().moveTo(22.5,34.8).lineTo(15.3,28.2).lineTo(8.6,34.3).lineTo(8.6,34.8).lineTo(22.5,34.8).closePath().moveTo(16.1,27.4).lineTo(23.5,34.2).lineTo(23.5,20.5).closePath().moveTo(8.6,32.7).lineTo(14.4,27.4).lineTo(8.6,22).closePath().moveTo(8.6,18.9).lineTo(8.6,20.4).lineTo(15.3,26.6).lineTo(23.5,18.9).lineTo(23.5,18.7).closePath().moveTo(8.6,16.1).lineTo(8.6,17.7).lineTo(23.5,17.5).lineTo(23.5,17.1).lineTo(15.7,9).closePath().moveTo(16.5,8.2).lineTo(23.5,15.4).lineTo(23.5,1.1).closePath().moveTo(8.6,14.4).lineTo(14.8,8.2).lineTo(8.6,1.8).closePath().moveTo(-52.8,11.3).lineTo(-52.2,11.3).lineTo(-52.2,11.2).lineTo(-52.8,11.2).closePath().moveTo(-55.1,11.3).lineTo(-53.9,11.3).lineTo(-53.9,11.2).lineTo(-55.1,11.2).closePath().moveTo(8.6,0.2).lineTo(15.7,7.4).lineTo(23.5,-0.5).lineTo(23.5,-1.4).lineTo(8.6,-1.4).closePath().moveTo(8.6,-4.1).lineTo(8.6,-2.6).lineTo(23.5,-2.6).lineTo(23.5,-3.5).lineTo(16,-10.8).closePath().moveTo(16.8,-11.6).lineTo(23.5,-5.1).lineTo(23.5,-17.8).closePath().moveTo(8.6,-5.6).lineTo(15.1,-11.6).lineTo(8.6,-18).closePath().moveTo(16,-12.4).lineTo(22.9,-18.8).lineTo(9.5,-18.8).closePath().moveTo(27.6,-23.4).lineTo(28.2,-23.4).lineTo(28.2,-22.9).lineTo(53.4,-22.9).lineTo(53.4,-25).lineTo(27.6,-30.4).closePath().moveTo(-51.6,-24.8).lineTo(-51.6,-22.9).lineTo(4,-22.9).lineTo(4,-23.4).lineTo(4.1,-23.4).lineTo(4.1,-31.3).closePath().moveTo(7.4,-23.4).lineTo(24.1,-23.4).lineTo(24.1,-30.4).closePath().moveTo(5.2,-31.4).lineTo(5.2,-23.8).lineTo(23.3,-31.3).lineTo(16.8,-32.7).closePath().moveTo(37.8,-31.8).lineTo(21.6,-38.7).lineTo(19.7,-35.7).lineTo(37.8,-31.8).closePath().moveTo(-9.1,-33.3).lineTo(15.8,-36.1).lineTo(17.3,-38.4).closePath();
	this.shape_914.setTransform(-978.1,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.instance_37},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.instance_36},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.instance_35},{t:this.shape_383},{t:this.shape_382},{t:this.instance_34},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.instance_33},{t:this.shape_322},{t:this.shape_321},{t:this.instance_32},{t:this.shape_320},{t:this.shape_319},{t:this.instance_31},{t:this.shape_318},{t:this.shape_317},{t:this.instance_30},{t:this.shape_316},{t:this.shape_315},{t:this.instance_29},{t:this.shape_314},{t:this.shape_313},{t:this.instance_28},{t:this.shape_312},{t:this.shape_311},{t:this.instance_27},{t:this.shape_310},{t:this.shape_309},{t:this.instance_26},{t:this.shape_308},{t:this.shape_307},{t:this.instance_25},{t:this.shape_306},{t:this.shape_305},{t:this.instance_24},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.instance_23},{t:this.shape_271},{t:this.shape_270},{t:this.instance_22},{t:this.shape_269},{t:this.shape_268},{t:this.instance_21},{t:this.shape_267},{t:this.shape_266},{t:this.instance_20},{t:this.shape_265},{t:this.shape_264},{t:this.instance_19},{t:this.shape_263},{t:this.shape_262},{t:this.instance_18},{t:this.shape_261},{t:this.shape_260},{t:this.instance_17},{t:this.shape_259},{t:this.shape_258},{t:this.instance_16},{t:this.shape_257},{t:this.shape_256},{t:this.instance_15},{t:this.shape_255},{t:this.shape_254},{t:this.instance_14},{t:this.shape_253},{t:this.instance_13},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.instance_12},{t:this.shape_249},{t:this.instance_11},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.instance_10},{t:this.shape_245},{t:this.shape_244},{t:this.instance_9},{t:this.shape_243},{t:this.shape_242},{t:this.instance_8},{t:this.shape_241},{t:this.shape_240},{t:this.instance_7},{t:this.shape_239},{t:this.shape_238},{t:this.instance_6},{t:this.shape_237},{t:this.shape_236},{t:this.instance_5},{t:this.shape_235},{t:this.shape_234},{t:this.instance_4},{t:this.shape_233},{t:this.shape_232},{t:this.instance_3},{t:this.shape_231},{t:this.shape_230},{t:this.instance_2},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_1},{t:this.shape_45},{t:this.instance},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4650.9,0,4650.9,319.1);


(lib.nukaconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.nukahandss();
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


(lib.Interpolación8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.nukarefresquera();
	this.instance.parent = this;
	this.instance.setTransform(14.5,-21.3,1,1,0,0,0,-14.8,9.9);

	this.instance_1 = new lib.nukarefresquera();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.5,-0.7,1,1,0,0,0,-14.8,9.9);

	this.instance_2 = new lib.nukarefresquera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17.1,21.4,1,1,0,0,0,-14.8,9.9);

	this.instance_3 = new lib.nukarefresquera();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.5,21.4,1,1,0,0,0,-14.8,9.9);

	this.instance_4 = new lib.nukarefresquera();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-84.2,-0.7,1,1,0,0,0,-14.8,9.9);

	this.instance_5 = new lib.nukarefresquera();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-52.6,-0.7,1,1,0,0,0,-14.8,9.9);

	this.instance_6 = new lib.nukarefresquera();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-84.2,21.4,1,1,0,0,0,-14.8,9.9);

	this.instance_7 = new lib.nukarefresquera();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-52.6,21.4,1,1,0,0,0,-14.8,9.9);

	this.instance_8 = new lib.nukarefresquera();
	this.instance_8.parent = this;
	this.instance_8.setTransform(52.6,-0.7,1,1,0,0,0,-14.8,9.9);

	this.instance_9 = new lib.nukarefresquera();
	this.instance_9.parent = this;
	this.instance_9.setTransform(84.2,-0.7,1,1,0,0,0,-14.8,9.9);

	this.instance_10 = new lib.nukarefresquera();
	this.instance_10.parent = this;
	this.instance_10.setTransform(52.6,21.4,1,1,0,0,0,-14.8,9.9);

	this.instance_11 = new lib.nukarefresquera();
	this.instance_11.parent = this;
	this.instance_11.setTransform(84.2,21.4,1,1,0,0,0,-14.8,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.4,-31.2,198.9,62.5);


(lib.nukarefresquero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#999999").beginStroke().moveTo(-31.9,1.3).lineTo(-31.9,-1.4).lineTo(31.8,-1.4).lineTo(31.8,1.3).closePath();
	this.shape.setTransform(-183.9,121.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#999999").beginStroke().moveTo(-31.8,1.3).lineTo(-31.8,-1.4).lineTo(31.9,-1.4).lineTo(31.9,1.3).closePath();
	this.shape_1.setTransform(-115.9,121.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#999999").beginStroke().moveTo(-31.9,1.3).lineTo(-31.9,-1.4).lineTo(31.9,-1.4).lineTo(31.9,1.3).closePath();
	this.shape_2.setTransform(-47.8,121.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#999999").beginStroke().moveTo(-1.4,0.7).curveTo(-1.9,0.4,-1.9,0.1).lineTo(-1.9,-0.2).curveTo(-1.9,-0.4,-1.4,-0.6).curveTo(-0.8,-0.9,0,-0.9).curveTo(0.8,-0.9,1.4,-0.6).curveTo(1.9,-0.4,1.9,-0.2).lineTo(1.9,0.1).curveTo(1.9,0.4,1.4,0.7).curveTo(0.8,0.9,0,0.9).curveTo(-0.8,0.9,-1.4,0.7).closePath();
	this.shape_3.setTransform(-34.1,142.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#848484").beginStroke().moveTo(-17.8,1.4).lineTo(-17.8,-1.3).lineTo(17.8,-1.3).lineTo(17.8,1.4).closePath();
	this.shape_4.setTransform(-34.6,142.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#999999").beginStroke().moveTo(-17.7,9.8).lineTo(-17.7,-9.8).lineTo(17.7,-9.8).lineTo(17.7,9.8).closePath();
	this.shape_5.setTransform(-34.7,150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#999999").beginStroke().moveTo(-1.4,0.7).curveTo(-1.9,0.4,-1.9,0.1).lineTo(-1.9,-0.2).curveTo(-1.9,-0.4,-1.4,-0.6).curveTo(-0.8,-0.9,0,-0.9).curveTo(0.8,-0.9,1.4,-0.6).curveTo(1.9,-0.4,1.9,-0.2).lineTo(1.9,0.1).curveTo(1.9,0.4,1.4,0.7).curveTo(0.8,0.9,0,0.9).curveTo(-0.8,0.9,-1.4,0.7).closePath();
	this.shape_6.setTransform(-183.1,142.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#848484").beginStroke().moveTo(-29.1,1.4).lineTo(-29.1,-1.3).lineTo(29.1,-1.3).lineTo(29.1,1.4).closePath();
	this.shape_7.setTransform(-182.9,142.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#999999").beginStroke().moveTo(-31.9,1.4).lineTo(-31.9,-1.3).lineTo(31.9,-1.3).lineTo(31.9,1.4).closePath();
	this.shape_8.setTransform(-47.8,129.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#999999").beginStroke().moveTo(-31.9,1.4).lineTo(-31.9,-1.3).lineTo(31.9,-1.3).lineTo(31.9,1.4).closePath();
	this.shape_9.setTransform(-47.8,125.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-31.9,60.2).lineTo(-31.9,-60.2).lineTo(31.9,-60.2).lineTo(31.9,60.2).closePath();
	this.shape_10.setTransform(-47.9,70.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#999999").beginStroke().moveTo(-31.9,1.4).lineTo(-31.9,-1.3).lineTo(31.8,-1.3).lineTo(31.8,1.4).closePath();
	this.shape_11.setTransform(-115.8,129.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#999999").beginStroke().moveTo(-31.9,1.4).lineTo(-31.9,-1.3).lineTo(31.8,-1.3).lineTo(31.8,1.4).closePath();
	this.shape_12.setTransform(-115.8,125.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-31.9,60.2).lineTo(-31.9,-60.2).lineTo(31.9,-60.2).lineTo(31.9,60.2).closePath();
	this.shape_13.setTransform(-115.9,70.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#999999").beginStroke().moveTo(-0.5,79.7).lineTo(-0.5,-79.6).lineTo(0.6,-79.6).lineTo(0.6,79.7).closePath();
	this.shape_14.setTransform(-12.3,85.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#999999").beginStroke().moveTo(-1.1,79.7).lineTo(-1.1,-79.6).lineTo(1.1,-79.6).lineTo(1.1,79.7).closePath();
	this.shape_15.setTransform(-219.7,85.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#999999").beginStroke().moveTo(-31.8,1.4).lineTo(-31.8,-1.3).lineTo(31.9,-1.3).lineTo(31.9,1.4).closePath();
	this.shape_16.setTransform(-183.8,129.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#999999").beginStroke().moveTo(-31.8,1.4).lineTo(-31.8,-1.3).lineTo(31.9,-1.3).lineTo(31.9,1.4).closePath();
	this.shape_17.setTransform(-183.8,125.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#999999").beginStroke().moveTo(-104.4,1.1).lineTo(-104.4,-1.1).lineTo(104.4,-1.1).lineTo(104.4,1.1).closePath();
	this.shape_18.setTransform(-116.2,6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.7,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_19.setTransform(-260.4,166.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.4,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.3).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.8).curveTo(-2.3,1.6,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.4,2.6,1.9,1.8).curveTo(2.1,1.5,2.1,0.8).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2).curveTo(5,2.8,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_20.setTransform(-264.4,121.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.4,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.3).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.8).curveTo(-2.3,1.6,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.4,2.6,1.9,1.8).curveTo(2.1,1.5,2.1,0.8).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2).curveTo(5,2.8,4.6,3.4).curveTo(4,4.3,2.1,4.5).closePath();
	this.shape_21.setTransform(-288.6,121.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.6).curveTo(-5.5,2.2,-5.3,1.7).curveTo(-5.1,0.8,-4.2,0.4).lineTo(2,-1.9).curveTo(2.1,-2,2.1,-2).curveTo(2.2,-2,2.2,-2).curveTo(2.2,-2.1,2.3,-2.1).curveTo(2.3,-2.1,2.3,-2.2).curveTo(2.3,-2.2,2.3,-2.3).curveTo(2.2,-2.3,2.2,-2.4).curveTo(2.1,-2.4,2.1,-2.4).curveTo(2,-2.5,1.9,-2.5).lineTo(-4.7,-2.5).curveTo(-5.1,-2.4,-5.1,-2.9).lineTo(-5.1,-4).curveTo(-5.1,-4.3,-4.8,-4.4).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.5).lineTo(5.4,-1.6).curveTo(5.1,-0.5,4.1,-0.2).curveTo(-0.3,1.3,-1.6,1.9).curveTo(-2.3,2.2,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.5,2.4).lineTo(4.9,2.5).curveTo(5.2,2.6,5.2,2.9).lineTo(5.2,4).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_22.setTransform(-276.4,121.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.4).lineTo(1.7,2.4).curveTo(2.1,2.4,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.3,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.5).lineTo(-1.8,-2.5).curveTo(-2,-2.4,-2,-2.4).curveTo(-2.1,-2.4,-2.2,-2.3).curveTo(-2.2,-2.3,-2.2,-2.3).curveTo(-2.2,-2.2,-2.2,-2.2).curveTo(-2.2,-2.1,-2.2,-2.1).curveTo(-2.2,-2.1,-2.2,-2).curveTo(-2.1,-2,-2.1,-2).curveTo(-2,-1.9,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.5).curveTo(4.5,4.5,3.1,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_23.setTransform(-300.9,121.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_24.setTransform(-309.5,121.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#999999").beginStroke().moveTo(-22.5,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3.1,-4.6).curveTo(20.8,-6.7,22.6,-6.8).lineTo(22.7,-4).curveTo(19,-4.5,16.4,-4.3).curveTo(1.9,-2.4,-3.9,-1.8).curveTo(-8.8,-1.3,-18.5,-0.6).lineTo(-20.2,1.1).curveTo(-20.7,1.7,-20.7,3.2).lineTo(-20.9,5.9).lineTo(-22.5,6.8).curveTo(-22.8,3.1,-22.5,1.8).closePath();
	this.shape_25.setTransform(-292.5,49.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.4,1.9).closePath();
	this.shape_26.setTransform(-266.3,43.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.2,13.6).lineTo(-1.2,10.8).curveTo(-1.2,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.3,-14.1,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_27.setTransform(-313,95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_28.setTransform(-312.9,116.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0.1,0.5).lineTo(-0.8,0.5).curveTo(-2.1,0.5,-3,0.3).closePath();
	this.shape_29.setTransform(-313.1,109.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).lineTo(-3.1,-5).lineTo(2.4,-6.7).curveTo(2.9,-6.9,3.3,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,3.9,3.2,4.5).curveTo(2.2,5.1,-1.4,6.5).curveTo(-2,6.8,-2.6,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_30.setTransform(-313.1,111.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.6,-12.9,0.9,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.7,6.3,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_31.setTransform(-308.9,68.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.7,12.2,-5.7,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-7.1,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_32.setTransform(-310.1,68.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.7,-2.6,-1.4,-2.9).curveTo(-1.1,-3.1,1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.4,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1,4.2).lineTo(-0.4,4.4).lineTo(-0.3,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_33.setTransform(-331.5,94.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.1,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.7,-1.8,13).lineTo(-3.5,20.3).curveTo(-3.8,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_34.setTransform(-321.8,70.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.2,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(3,-16.1,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_35.setTransform(-331.3,131.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.4,1.8,0.6,1.5).closePath();
	this.shape_36.setTransform(-330.8,150.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.5,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_37.setTransform(-329.8,161.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.3,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_38.setTransform(-326.1,165.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.8,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_39.setTransform(-325.2,157.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.9).curveTo(-3.3,-6.6,-1.6,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.3,-6.5).curveTo(5.9,-6.2,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.3,-6.8,-8.5).lineTo(-5.9,-9.1).curveTo(-4.9,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.9).lineTo(-4.4,-6.9).closePath();
	this.shape_40.setTransform(-326.8,155.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.2,-1.5,1.9).curveTo(-2,-1.3,-2,-4.6).curveTo(-0.9,-3.3,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_41.setTransform(-333.2,156.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,4,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_42.setTransform(-251.3,112.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.3).curveTo(-3.9,8.3,-4.4,7.7).curveTo(-5,7.2,-5,6.3).curveTo(-5.4,2.2,-5.2,-2.4).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.4,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.5).curveTo(5.4,3.8,5.1,6.3).curveTo(5.1,7.2,4.6,7.7).curveTo(4,8.3,3.3,8.3).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.3).closePath();
	this.shape_43.setTransform(-251.4,112.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-46.8,64.9).curveTo(-48.7,64.1,-49.6,62).curveTo(-50,61.8,-50.6,61.2).curveTo(-51.6,60.2,-52.2,58.5).curveTo(-52.8,56.4,-53.2,53.3).lineTo(-53.6,48).curveTo(-53.9,44.9,-53,42.1).lineTo(-52,39.9).curveTo(-52.9,23.7,-52.9,18.3).curveTo(-52.9,14.9,-52.4,6.7).lineTo(-51.9,-0.9).lineTo(-47.7,-7.9).curveTo(-46.7,-12.9,-43.2,-27.3).curveTo(-39.7,-41.6,-32.6,-60.5).curveTo(-32.1,-61.4,-31.6,-61.8).curveTo(-30.9,-62.2,-29.3,-62.4).curveTo(-22.1,-63.3,5.7,-64.5).lineTo(32.1,-65.5).curveTo(35,-65.6,36.4,-65.3).curveTo(38.6,-64.9,40.5,-63.5).curveTo(42.3,-62.2,43.4,-61.2).lineTo(45.5,-59.2).curveTo(47.6,-57.3,49.7,-52.7).curveTo(50.8,-50.2,52,-44.6).curveTo(53.7,-36.9,53.7,-29.7).lineTo(53.7,-12.7).curveTo(53.7,-9.9,53,-8.8).curveTo(49.7,-2.2,49.7,-0.1).lineTo(49.7,6.5).curveTo(49.7,8,49.2,8.9).curveTo(48.7,9.7,48.7,10.5).lineTo(48.7,25.4).lineTo(38.8,25.7).lineTo(35.7,26).lineTo(35.7,28.3).curveTo(24.9,28.4,20,29.1).curveTo(13.4,29.9,10.6,31.3).curveTo(4.1,34.3,-1,42.9).curveTo(-3.2,46.8,-6.3,53.4).curveTo(-7.2,54.6,-8.7,54.6).lineTo(-16.8,54.6).lineTo(-18.3,54.2).lineTo(-21,54.6).lineTo(-39.3,54.6).lineTo(-39.3,61.9).curveTo(-39.3,65.5,-42.7,65.5).curveTo(-45.3,65.5,-46.8,64.9).closePath().moveTo(10.2,-55.4).curveTo(-9.3,-54.6,-15.7,-53.6).curveTo(-21.1,-52.8,-22.7,-51.9).curveTo(-23.9,-51.1,-25.2,-48.5).curveTo(-26.2,-46.5,-28.4,-36.4).curveTo(-30.7,-26.4,-31.1,-22.1).curveTo(-31.5,-18.1,-31.8,-10.8).curveTo(-32.2,-3.9,-32.2,-1.5).lineTo(-32,-0.4).lineTo(-30.8,-0.7).lineTo(9.7,-16.4).curveTo(14.4,-18.1,27,-20.3).lineTo(29.4,-20.8).curveTo(30.6,-21,31,-21.4).curveTo(31.2,-21.7,31.2,-22.3).lineTo(31.9,-51.8).curveTo(31.9,-54.1,31.1,-55).curveTo(30.4,-55.8,28.4,-56).curveTo(19.9,-55.8,10.2,-55.4).closePath();
	this.shape_44.setTransform(-282.1,103.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#999999").beginStroke().moveTo(-28.9,9.8).lineTo(-28.9,-9.8).lineTo(28.9,-9.8).lineTo(28.9,9.8).closePath();
	this.shape_45.setTransform(-183.1,150.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_46.setTransform(-81.4,166.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-31.9,60.2).lineTo(-31.9,-60.2).lineTo(31.9,-60.2).lineTo(31.9,60.2).closePath();
	this.shape_47.setTransform(-183.9,70.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-106.8,82.4).lineTo(-106.8,-82.4).lineTo(106.8,-82.4).lineTo(106.8,82.4).closePath().moveTo(63.5,78.4).curveTo(63.5,68.5,54.1,62).curveTo(45.6,56.2,34.8,56.2).curveTo(22.3,56.2,14,63.6).curveTo(7.3,69.6,5.2,78.3).lineTo(63.5,78.4).lineTo(63.5,78.4).closePath();
	this.shape_48.setTransform(-117.1,82.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#999999").beginStroke().moveTo(71.4,12.9).curveTo(69.6,11.7,67.3,10.5).curveTo(62.8,8.1,60.2,8.2).curveTo(29.5,15.2,19.4,16.2).curveTo(15.7,16.5,12.5,16.3).lineTo(6.3,16).curveTo(-9.8,15.8,-35.9,16.4).lineTo(-58.6,17).curveTo(-59.7,13.5,-60.9,13.3).lineTo(-67.2,12.7).curveTo(-68.2,12.5,-69.6,11.1).lineTo(-70.8,9.7).lineTo(-76.7,9.4).lineTo(-77.3,11.1).curveTo(-78.1,12.9,-79.3,12.9).curveTo(-81.6,13.1,-83.1,12.1).lineTo(-84,11.2).lineTo(-88,17.8).lineTo(-117.7,18.8).lineTo(-113.5,-9.5).lineTo(-112.8,-16.3).lineTo(78.5,-20.4).lineTo(97.4,-15.1).lineTo(107.1,-15.2).lineTo(102.9,2.3).lineTo(117.2,2.3).lineTo(117.7,9.7).lineTo(81.6,9.5).lineTo(72.7,9).lineTo(73.3,20).lineTo(72,20.4).closePath().moveTo(-74.9,-3.7).lineTo(-74.6,7.2).lineTo(-50.4,6.7).lineTo(-50.7,-4.3).closePath().moveTo(70.7,0.9).lineTo(70.5,-1.8).lineTo(66.9,-1.7).lineTo(65.6,0.8).lineTo(70.7,0.9).closePath().moveTo(-74.5,-7).curveTo(-75.4,-6.9,-75.4,-6.1).curveTo(-75.4,-5.3,-74.4,-5.3).lineTo(-51.2,-5.8).curveTo(-50.8,-5.8,-50.6,-6.1).curveTo(-50.3,-6.3,-50.3,-6.7).curveTo(-50.3,-7.5,-51.3,-7.5).closePath();
	this.shape_49.setTransform(-117.7,155.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#999999").beginStroke().moveTo(-51.2,24.4).lineTo(-51.2,22.7).lineTo(-55.2,22.9).lineTo(-55.2,17.3).lineTo(-104.2,17.3).lineTo(-104.2,21.2).lineTo(-119.1,19.4).lineTo(-130.7,5.5).lineTo(-126.6,-24.7).lineTo(-51.7,-24.7).lineTo(-49.9,-16.7).lineTo(104.8,-17.7).curveTo(100.8,-14.4,105.4,-10.4).curveTo(108.2,-8,117.2,-3.6).curveTo(126.3,0.9,128.7,2.8).curveTo(132.8,6.3,128.3,8.8).curveTo(128.1,8.9,127,12).lineTo(125.8,15.3).lineTo(100.1,13.1).lineTo(91.8,10.3).lineTo(54.8,10.3).curveTo(55.7,10.6,58.6,10.9).curveTo(56.1,11.5,55.3,13.9).curveTo(54.4,16.2,55.6,18.3).curveTo(46,18.8,35.8,15.6).curveTo(31.6,14.3,29,14.5).curveTo(25.4,14.8,23.6,18).curveTo(23.7,15.8,25,14.1).curveTo(24.6,13.5,24.5,12.8).lineTo(24.4,12.2).lineTo(23.2,11.3).lineTo(7.8,11.3).lineTo(7.8,13.4).lineTo(8.1,15.1).curveTo(8.3,16.3,7.9,16.3).lineTo(-18.3,16.3).curveTo(-18.7,16.3,-20,15.1).curveTo(-21.2,13.8,-21.2,13.4).lineTo(-21.2,12.3).lineTo(-22.6,12.3).lineTo(-22.9,16.3).lineTo(-26.2,16.3).lineTo(-26.4,12.3).lineTo(-30.7,12.3).lineTo(-32.1,13.1).curveTo(-33.6,14.1,-34.2,14.8).lineTo(-34.2,18.1).curveTo(-34.2,21.5,-37.8,21.9).curveTo(-38.7,22,-42.1,22.2).lineTo(-48.2,22.6).lineTo(-48.2,24.7).closePath().moveTo(33.5,11.2).lineTo(37.8,10.9).curveTo(40,10.7,40.9,10.3).lineTo(21.4,10.3).closePath();
	this.shape_50.setTransform(-182.5,148.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#999999").beginStroke().moveTo(-1.4,0.7).curveTo(-1.9,0.4,-1.9,0.1).lineTo(-1.9,-0.2).curveTo(-1.9,-0.4,-1.4,-0.6).curveTo(-0.8,-0.9,0,-0.9).curveTo(0.8,-0.9,1.4,-0.6).curveTo(1.9,-0.4,1.9,-0.2).lineTo(1.9,0.1).curveTo(1.9,0.4,1.4,0.7).curveTo(0.8,0.9,0,0.9).curveTo(-0.8,0.9,-1.4,0.7).closePath();
	this.shape_51.setTransform(-183.1,142.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#848484").beginStroke().moveTo(-29.1,1.4).lineTo(-29.1,-1.3).lineTo(29.1,-1.3).lineTo(29.1,1.4).closePath();
	this.shape_52.setTransform(-182.9,142.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#999999").beginStroke().moveTo(-28.9,9.8).lineTo(-28.9,-9.8).lineTo(28.9,-9.8).lineTo(28.9,9.8).closePath();
	this.shape_53.setTransform(-183.1,150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,-0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.4,-0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_54.setTransform(-149.4,194.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));

	// Capa 3
	this.instance = new lib.nukaconductor();
	this.instance.parent = this;
	this.instance.setTransform(-279.6,83.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.7,0,372.7,205.5);


(lib.nukaInterpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.nukarefresquero();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,-167.9,96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.4,0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape.setTransform(20.8,100.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa 3
	this.instance_1 = new lib.nukaconductor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-109.4,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.8,-96.3,375,207.9);


// stage content:
(lib.refresquera = function(mode,startPosition,loop) {
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

	// chexco2
	this.instance = new lib.nukaInterpolación7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(625.7,306.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({alpha:0},7).to({_off:true},1).wait(79));

	// xhezxo1
	this.instance_1 = new lib.nukaInterpolación4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(625.7,264);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).to({alpha:0},6).to({_off:true},1).wait(111));

	// llanta
	this.instance_2 = new lib.nukallanta();
	this.instance_2.parent = this;
	this.instance_2.setTransform(942.3,397.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({rotation:-360},10).to({rotation:-720,x:660.3},20).to({rotation:-1440},28).wait(21).to({rotation:-2160},21).wait(10).to({rotation:-3240},38).wait(1));

	// llanta
	this.instance_3 = new lib.nukallanta();
	this.instance_3.parent = this;
	this.instance_3.setTransform(762.3,397.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({rotation:-360},10).to({rotation:-720,x:481.3},20).to({rotation:-1440},28).wait(21).to({rotation:-2160},21).wait(10).to({rotation:-3240},38).wait(1));

	// refresquera
	this.instance_4 = new lib.nukarefresquera();
	this.instance_4.parent = this;
	this.instance_4.setTransform(823,253.7,1,1,0,0,0,-14.8,9.9);

	this.instance_5 = new lib.nukarefresquera();
	this.instance_5.parent = this;
	this.instance_5.setTransform(823,274.3,1,1,0,0,0,-14.8,9.9);

	this.instance_6 = new lib.nukarefresquera();
	this.instance_6.parent = this;
	this.instance_6.setTransform(854.6,274.3,1,1,0,0,0,-14.8,9.9);

	this.instance_7 = new lib.nukarefresquera();
	this.instance_7.parent = this;
	this.instance_7.setTransform(823,296.4,1,1,0,0,0,-14.8,9.9);

	this.instance_8 = new lib.nukarefresquera();
	this.instance_8.parent = this;
	this.instance_8.setTransform(854.6,296.4,1,1,0,0,0,-14.8,9.9);

	this.instance_9 = new lib.nukarefresquera();
	this.instance_9.parent = this;
	this.instance_9.setTransform(823,317,1,1,0,0,0,-14.8,9.9);

	this.instance_10 = new lib.nukarefresquera();
	this.instance_10.parent = this;
	this.instance_10.setTransform(854.6,317,1,1,0,0,0,-14.8,9.9);

	this.instance_11 = new lib.nukarefresquera();
	this.instance_11.parent = this;
	this.instance_11.setTransform(823,339.1,1,1,0,0,0,-14.8,9.9);

	this.instance_12 = new lib.nukarefresquera();
	this.instance_12.parent = this;
	this.instance_12.setTransform(854.6,339.1,1,1,0,0,0,-14.8,9.9);

	this.instance_13 = new lib.nukarefresquera();
	this.instance_13.parent = this;
	this.instance_13.setTransform(854.6,253.7,1,1,0,0,0,-14.8,9.9);

	this.instance_14 = new lib.nukarefresquera();
	this.instance_14.parent = this;
	this.instance_14.setTransform(959.8,253.7,1,1,0,0,0,-14.8,9.9);

	this.instance_15 = new lib.nukarefresquera();
	this.instance_15.parent = this;
	this.instance_15.setTransform(991.4,253.7,1,1,0,0,0,-14.8,9.9);

	this.instance_16 = new lib.nukarefresquera();
	this.instance_16.parent = this;
	this.instance_16.setTransform(959.8,274.3,1,1,0,0,0,-14.8,9.9);

	this.instance_17 = new lib.nukarefresquera();
	this.instance_17.parent = this;
	this.instance_17.setTransform(991.4,274.3,1,1,0,0,0,-14.8,9.9);

	this.instance_18 = new lib.nukarefresquera();
	this.instance_18.parent = this;
	this.instance_18.setTransform(959.8,296.4,1,1,0,0,0,-14.8,9.9);

	this.instance_19 = new lib.nukarefresquera();
	this.instance_19.parent = this;
	this.instance_19.setTransform(991.4,296.4,1,1,0,0,0,-14.8,9.9);

	this.instance_20 = new lib.nukarefresquera();
	this.instance_20.parent = this;
	this.instance_20.setTransform(959.8,317,1,1,0,0,0,-14.8,9.9);

	this.instance_21 = new lib.nukarefresquera();
	this.instance_21.parent = this;
	this.instance_21.setTransform(991.4,317,1,1,0,0,0,-14.8,9.9);

	this.instance_22 = new lib.nukarefresquera();
	this.instance_22.parent = this;
	this.instance_22.setTransform(959.8,339.1,1,1,0,0,0,-14.8,9.9);

	this.instance_23 = new lib.nukarefresquera();
	this.instance_23.parent = this;
	this.instance_23.setTransform(991.4,339.1,1,1,0,0,0,-14.8,9.9);

	this.instance_24 = new lib.nukaInterpolación1("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(907.2,296.4);
	this.instance_24._off = true;

	this.instance_25 = new lib.Interpolación8("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(625.7,317.7);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21,p:{x:991.4,y:317}},{t:this.instance_20,p:{x:959.8,y:317}},{t:this.instance_19,p:{x:991.4,y:296.4}},{t:this.instance_18,p:{x:959.8,y:296.4}},{t:this.instance_17,p:{x:991.4,y:274.3}},{t:this.instance_16,p:{x:959.8,y:274.3}},{t:this.instance_15,p:{x:991.4,y:253.7}},{t:this.instance_14,p:{x:959.8,y:253.7}},{t:this.instance_13,p:{x:854.6,y:253.7}},{t:this.instance_12,p:{x:854.6,y:339.1}},{t:this.instance_11,p:{x:823,y:339.1}},{t:this.instance_10,p:{x:854.6,y:317}},{t:this.instance_9,p:{x:823,y:317}},{t:this.instance_8,p:{x:854.6,y:296.4}},{t:this.instance_7,p:{x:823,y:296.4}},{t:this.instance_6,p:{x:854.6,y:274.3}},{t:this.instance_5,p:{x:823,y:274.3}},{t:this.instance_4,p:{x:823,y:253.7}}]}).to({state:[{t:this.instance_24}]},16).to({state:[{t:this.instance_24}]},20).to({state:[{t:this.instance_21,p:{x:709.9,y:339.1}},{t:this.instance_20,p:{x:678.3,y:339.1}},{t:this.instance_19,p:{x:709.9,y:317}},{t:this.instance_18,p:{x:678.3,y:317}},{t:this.instance_17,p:{x:709.9,y:296.4}},{t:this.instance_16,p:{x:678.3,y:296.4}},{t:this.instance_15,p:{x:573.1,y:339.1}},{t:this.instance_14,p:{x:541.5,y:339.1}},{t:this.instance_13,p:{x:573.1,y:317}},{t:this.instance_12,p:{x:541.5,y:317}},{t:this.instance_11,p:{x:573.1,y:296.4}},{t:this.instance_10,p:{x:541.5,y:296.4}},{t:this.instance_9,p:{x:640.2,y:339.1}},{t:this.instance_8,p:{x:608.6,y:339.1}},{t:this.instance_7,p:{x:640.2,y:317}},{t:this.instance_6,p:{x:608.6,y:317}},{t:this.instance_5,p:{x:640.2,y:296.4}},{t:this.instance_4,p:{x:608.6,y:296.4}}]},1).to({state:[{t:this.instance_15,p:{x:709.9,y:339.1}},{t:this.instance_14,p:{x:678.3,y:339.1}},{t:this.instance_13,p:{x:709.9,y:317}},{t:this.instance_12,p:{x:678.3,y:317}},{t:this.instance_11,p:{x:573.1,y:339.1}},{t:this.instance_10,p:{x:541.5,y:339.1}},{t:this.instance_9,p:{x:573.1,y:317}},{t:this.instance_8,p:{x:541.5,y:317}},{t:this.instance_7,p:{x:640.2,y:339.1}},{t:this.instance_6,p:{x:608.6,y:339.1}},{t:this.instance_5,p:{x:640.2,y:317}},{t:this.instance_4,p:{x:640.2,y:296.4}}]},31).to({state:[{t:this.instance_25}]},41).to({state:[{t:this.instance_25}]},6).to({state:[]},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(16).to({_off:false},0).to({x:625.7},20).to({_off:true,regX:-14.8,regY:9.9,x:608.6,mode:"independent"},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(109).to({_off:false},0).to({alpha:0},6).to({_off:true},1).wait(39));

	// refresquero
	this.instance_26 = new lib.nukarefresquera();
	this.instance_26.parent = this;
	this.instance_26.setTransform(891,253.7,1,1,0,0,0,-14.8,9.9);

	this.instance_27 = new lib.nukarefresquera();
	this.instance_27.parent = this;
	this.instance_27.setTransform(891,274.3,1,1,0,0,0,-14.8,9.9);

	this.instance_28 = new lib.nukarefresquera();
	this.instance_28.parent = this;
	this.instance_28.setTransform(922.6,274.3,1,1,0,0,0,-14.8,9.9);

	this.instance_29 = new lib.nukarefresquera();
	this.instance_29.parent = this;
	this.instance_29.setTransform(891,296.4,1,1,0,0,0,-14.8,9.9);

	this.instance_30 = new lib.nukarefresquera();
	this.instance_30.parent = this;
	this.instance_30.setTransform(922.6,296.4,1,1,0,0,0,-14.8,9.9);

	this.instance_31 = new lib.nukarefresquera();
	this.instance_31.parent = this;
	this.instance_31.setTransform(891,317,1,1,0,0,0,-14.8,9.9);

	this.instance_32 = new lib.nukarefresquera();
	this.instance_32.parent = this;
	this.instance_32.setTransform(922.6,317,1,1,0,0,0,-14.8,9.9);

	this.instance_33 = new lib.nukarefresquera();
	this.instance_33.parent = this;
	this.instance_33.setTransform(891,339.1,1,1,0,0,0,-14.8,9.9);

	this.instance_34 = new lib.nukarefresquera();
	this.instance_34.parent = this;
	this.instance_34.setTransform(922.6,339.1,1,1,0,0,0,-14.8,9.9);

	this.instance_35 = new lib.nukarefresquera();
	this.instance_35.parent = this;
	this.instance_35.setTransform(922.6,253.7,1,1,0,0,0,-14.8,9.9);

	this.instance_36 = new lib.nukarefresquero();
	this.instance_36.parent = this;
	this.instance_36.setTransform(855,326.7,1,1,0,0,0,-167.9,96.4);

	this.instance_37 = new lib.nukaInterpolación2("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(855,326.7);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).to({state:[{t:this.instance_37}]},16).to({state:[{t:this.instance_37}]},20).to({state:[{t:this.instance_37}]},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(16).to({_off:false},0).to({x:573.5},20).to({startPosition:0},1).wait(118));

	// fondo
	this.instance_38 = new lib.nukafondo();
	this.instance_38.parent = this;
	this.instance_38.setTransform(532.5,219,1,1,0,0,0,-517.5,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(6).to({x:1584.2},58).wait(21).to({x:2481.9},21).wait(16).to({x:4133.4},32).wait(1));

	// piso
	this.instance_39 = new lib.nukapiso();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-1506.3,438.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(6).to({x:-666.3},58).wait(21).to({x:-316.3},21).wait(16).to({x:560.1},32).wait(1));

	// Ambient
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape.setTransform(525,182.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_1.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3075.9,257.5,4660.8,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;