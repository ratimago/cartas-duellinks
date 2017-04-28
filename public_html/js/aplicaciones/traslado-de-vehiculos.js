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



(lib.vehillanta = function(mode,startPosition,loop) {
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


(lib.vehihandss = function(mode,startPosition,loop) {
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


(lib.vehifondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape.setTransform(-1880.3,64.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_1.setTransform(-1880.3,57.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_2.setTransform(-1880.3,50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_3.setTransform(-1880.3,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_4.setTransform(-1880.3,36.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_5.setTransform(-1880.3,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_6.setTransform(-1880.3,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_7.setTransform(-1880.3,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_8.setTransform(-1880.3,8.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_9.setTransform(-1880.3,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_10.setTransform(-1872.3,64.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_11.setTransform(-1872.3,57.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_12.setTransform(-1872.3,50.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_13.setTransform(-1872.3,43.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_14.setTransform(-1872.3,36.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_15.setTransform(-1872.3,29.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_16.setTransform(-1872.3,22.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_17.setTransform(-1872.3,15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_18.setTransform(-1872.3,8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_19.setTransform(-1872.3,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,48).lineTo(-22,-35).lineTo(-11,-35).lineTo(-11,-48).lineTo(-6,-48).lineTo(-6,-35).lineTo(-3,-35).lineTo(-3,-43).lineTo(2,-43).lineTo(2,-35).lineTo(22,-35).lineTo(22,48).closePath().moveTo(6,41).lineTo(10,41).lineTo(10,36).lineTo(6,36).closePath().moveTo(-2,41).lineTo(2,41).lineTo(2,36).lineTo(-2,36).closePath().moveTo(6,34).lineTo(10,34).lineTo(10,29).lineTo(6,29).closePath().moveTo(-2,34).lineTo(2,34).lineTo(2,29).lineTo(-2,29).closePath().moveTo(6,27).lineTo(10,27).lineTo(10,22).lineTo(6,22).closePath().moveTo(-2,27).lineTo(2,27).lineTo(2,22).lineTo(-2,22).closePath().moveTo(6,20).lineTo(10,20).lineTo(10,15).lineTo(6,15).closePath().moveTo(-2,20).lineTo(2,20).lineTo(2,15).lineTo(-2,15).closePath().moveTo(6,13).lineTo(10,13).lineTo(10,8).lineTo(6,8).closePath().moveTo(-2,13).lineTo(2,13).lineTo(2,8).lineTo(-2,8).closePath().moveTo(6,6).lineTo(10,6).lineTo(10,1).lineTo(6,1).closePath().moveTo(-2,6).lineTo(2,6).lineTo(2,1).lineTo(-2,1).closePath().moveTo(6,-1).lineTo(10,-1).lineTo(10,-6).lineTo(6,-6).closePath().moveTo(-2,-1).lineTo(2,-1).lineTo(2,-6).lineTo(-2,-6).closePath().moveTo(6,-8).lineTo(10,-8).lineTo(10,-13).lineTo(6,-13).closePath().moveTo(-2,-8).lineTo(2,-8).lineTo(2,-13).lineTo(-2,-13).closePath().moveTo(6,-15).lineTo(10,-15).lineTo(10,-20).lineTo(6,-20).closePath().moveTo(-2,-15).lineTo(2,-15).lineTo(2,-20).lineTo(-2,-20).closePath().moveTo(6,-22).lineTo(10,-22).lineTo(10,-27).lineTo(6,-27).closePath().moveTo(-2,-22).lineTo(2,-22).lineTo(2,-27).lineTo(-2,-27).closePath();
	this.shape_20.setTransform(-1880.3,26.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_21.setTransform(-2230.8,-12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_22.setTransform(-2221.3,53.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_23.setTransform(-2221.3,45.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_24.setTransform(-2221.3,37.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_25.setTransform(-2221.3,29.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_26.setTransform(-2221.3,21.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_27.setTransform(-2221.3,13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_28.setTransform(-2221.3,5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_29.setTransform(-2221.3,-2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,41.5).lineTo(-18,-41.5).lineTo(-12,-41.5).lineTo(-12,-40.5).lineTo(-7,-40.5).lineTo(-7,-41.5).lineTo(18,-41.5).lineTo(18,41.5).closePath().moveTo(-14,22.5).lineTo(14,22.5).lineTo(14,19.5).lineTo(-14,19.5).closePath().moveTo(-14,14.5).lineTo(14,14.5).lineTo(14,11.5).lineTo(-14,11.5).closePath().moveTo(-14,6.5).lineTo(14,6.5).lineTo(14,3.5).lineTo(-14,3.5).closePath().moveTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,-4.5).lineTo(-14,-4.5).closePath().moveTo(-14,-9.5).lineTo(14,-9.5).lineTo(14,-12.5).lineTo(-14,-12.5).closePath().moveTo(-14,-17.5).lineTo(14,-17.5).lineTo(14,-20.5).lineTo(-14,-20.5).closePath().moveTo(-14,-25.5).lineTo(14,-25.5).lineTo(14,-28.5).lineTo(-14,-28.5).closePath().moveTo(-14,-33.5).lineTo(14,-33.5).lineTo(14,-36.5).lineTo(-14,-36.5).closePath();
	this.shape_30.setTransform(-2221.3,32.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_31.setTransform(-2261.5,61.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_32.setTransform(-2252.3,53.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_33.setTransform(-2252.3,45.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_34.setTransform(-2252.3,37.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_35.setTransform(-2252.3,21.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_36.setTransform(-2252.3,13.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_37.setTransform(-2271.3,61.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_38.setTransform(-2261.5,53.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_39.setTransform(-2271.3,53.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_40.setTransform(-2261.5,45.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_41.setTransform(-2261.5,37.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_42.setTransform(-2271.3,37.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_43.setTransform(-2261.5,29.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_44.setTransform(-2271.3,29.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_45.setTransform(-2261.5,21.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_46.setTransform(-2261.5,13.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_47.setTransform(-2271.3,13.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,36).lineTo(-18,-36).lineTo(18,-36).lineTo(18,36).closePath();
	this.shape_48.setTransform(-2261.5,43.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_49.setTransform(-1828.2,61.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_50.setTransform(-1844.5,61.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_51.setTransform(-1828.2,53.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_52.setTransform(-1844.5,53.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_53.setTransform(-1844.5,45.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_54.setTransform(-1828.2,45.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_55.setTransform(-1828.2,37.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_56.setTransform(-1844.5,37.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_57.setTransform(-1828.2,29.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_58.setTransform(-1844.5,29.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_59.setTransform(-1828.2,21.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_60.setTransform(-1844.5,21.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_61.setTransform(-1828.2,13.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_62.setTransform(-1844.5,13.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,36).lineTo(-18,-36).lineTo(18,-36).lineTo(18,36).closePath();
	this.shape_63.setTransform(-1836.5,43.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_64.setTransform(-1963.8,-49.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_65.setTransform(-1972.8,-49.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_66.setTransform(-1981.8,-49.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_67.setTransform(-1954.8,57.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_68.setTransform(-1963.8,57.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_69.setTransform(-1972.8,57.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_70.setTransform(-1981.8,57.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_71.setTransform(-1990.8,57.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_72.setTransform(-1954.8,42.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_73.setTransform(-1963.8,42.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_74.setTransform(-1981.8,42.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_75.setTransform(-1990.8,42.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_76.setTransform(-1954.8,27.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_77.setTransform(-1963.8,27.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_78.setTransform(-1972.8,27.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_79.setTransform(-1990.8,27.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_80.setTransform(-1954.8,12.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_81.setTransform(-1963.8,12.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_82.setTransform(-1972.8,12.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_83.setTransform(-1981.8,12.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_84.setTransform(-1990.8,12.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_85.setTransform(-1954.8,-2.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_86.setTransform(-1963.8,-2.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_87.setTransform(-1972.8,-2.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_88.setTransform(-1990.8,-2.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_89.setTransform(-1954.8,-17.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_90.setTransform(-1972.8,-17.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_91.setTransform(-1981.8,-17.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_92.setTransform(-1990.8,-17.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_93.setTransform(-1954.8,-32.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_94.setTransform(-1963.8,-32.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_95.setTransform(-1972.8,-32.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_96.setTransform(-1981.8,-32.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_97.setTransform(-1990.8,-32.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,79).lineTo(-24.5,-43).lineTo(-16.5,-43).lineTo(-16.5,-59).lineTo(-2.5,-59).lineTo(-2.5,-79).lineTo(2.5,-79).lineTo(2.5,-59).lineTo(17.5,-59).lineTo(17.5,-43).lineTo(24.5,-43).lineTo(24.5,79).closePath().moveTo(15.5,63).lineTo(20.5,63).lineTo(20.5,53).lineTo(15.5,53).closePath().moveTo(6.5,63).lineTo(11.5,63).lineTo(11.5,53).lineTo(6.5,53).closePath().moveTo(-2.5,63).lineTo(2.5,63).lineTo(2.5,53).lineTo(-2.5,53).closePath().moveTo(-11.5,63).lineTo(-6.5,63).lineTo(-6.5,53).lineTo(-11.5,53).closePath().moveTo(-20.5,63).lineTo(-15.5,63).lineTo(-15.5,53).lineTo(-20.5,53).closePath().moveTo(15.5,48).lineTo(20.5,48).lineTo(20.5,38).lineTo(15.5,38).closePath().moveTo(6.5,48).lineTo(11.5,48).lineTo(11.5,38).lineTo(6.5,38).closePath().moveTo(-11.5,48).lineTo(-6.5,48).lineTo(-6.5,38).lineTo(-11.5,38).closePath().moveTo(-20.5,48).lineTo(-15.5,48).lineTo(-15.5,38).lineTo(-20.5,38).closePath().moveTo(15.5,33).lineTo(20.5,33).lineTo(20.5,23).lineTo(15.5,23).closePath().moveTo(6.5,33).lineTo(11.5,33).lineTo(11.5,23).lineTo(6.5,23).closePath().moveTo(-2.5,33).lineTo(2.5,33).lineTo(2.5,23).lineTo(-2.5,23).closePath().moveTo(-20.5,33).lineTo(-15.5,33).lineTo(-15.5,23).lineTo(-20.5,23).closePath().moveTo(15.5,18).lineTo(20.5,18).lineTo(20.5,8).lineTo(15.5,8).closePath().moveTo(6.5,18).lineTo(11.5,18).lineTo(11.5,8).lineTo(6.5,8).closePath().moveTo(-2.5,18).lineTo(2.5,18).lineTo(2.5,8).lineTo(-2.5,8).closePath().moveTo(-11.5,18).lineTo(-6.5,18).lineTo(-6.5,8).lineTo(-11.5,8).closePath().moveTo(-20.5,18).lineTo(-15.5,18).lineTo(-15.5,8).lineTo(-20.5,8).closePath().moveTo(15.5,3).lineTo(20.5,3).lineTo(20.5,-7).lineTo(15.5,-7).closePath().moveTo(6.5,3).lineTo(11.5,3).lineTo(11.5,-7).lineTo(6.5,-7).closePath().moveTo(-2.5,3).lineTo(2.5,3).lineTo(2.5,-7).lineTo(-2.5,-7).closePath().moveTo(-20.5,3).lineTo(-15.5,3).lineTo(-15.5,-7).lineTo(-20.5,-7).closePath().moveTo(15.5,-12).lineTo(20.5,-12).lineTo(20.5,-22).lineTo(15.5,-22).closePath().moveTo(-2.5,-12).lineTo(2.5,-12).lineTo(2.5,-22).lineTo(-2.5,-22).closePath().moveTo(-11.5,-12).lineTo(-6.5,-12).lineTo(-6.5,-22).lineTo(-11.5,-22).closePath().moveTo(-20.5,-12).lineTo(-15.5,-12).lineTo(-15.5,-22).lineTo(-20.5,-22).closePath().moveTo(15.5,-27).lineTo(20.5,-27).lineTo(20.5,-37).lineTo(15.5,-37).closePath().moveTo(6.5,-27).lineTo(11.5,-27).lineTo(11.5,-37).lineTo(6.5,-37).closePath().moveTo(-2.5,-27).lineTo(2.5,-27).lineTo(2.5,-37).lineTo(-2.5,-37).closePath().moveTo(-11.5,-27).lineTo(-6.5,-27).lineTo(-6.5,-37).lineTo(-11.5,-37).closePath().moveTo(-20.5,-27).lineTo(-15.5,-27).lineTo(-15.5,-37).lineTo(-20.5,-37).closePath().moveTo(6.5,-44).lineTo(11.5,-44).lineTo(11.5,-54).lineTo(6.5,-54).closePath().moveTo(-2.5,-44).lineTo(2.5,-44).lineTo(2.5,-54).lineTo(-2.5,-54).closePath().moveTo(-11.5,-44).lineTo(-6.5,-44).lineTo(-6.5,-54).lineTo(-11.5,-54).closePath();
	this.shape_98.setTransform(-1972.8,-0.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_99.setTransform(-2114.3,56.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_100.setTransform(-2124.3,56.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_101.setTransform(-2145.8,56.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_102.setTransform(-2124.3,46.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_103.setTransform(-2135.3,46.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_104.setTransform(-2145.8,46.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_105.setTransform(-2114.3,36.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_106.setTransform(-2124.3,36.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_107.setTransform(-2135.3,36.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_108.setTransform(-2114.3,26.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_109.setTransform(-2124.3,26.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_110.setTransform(-2135.3,26.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_111.setTransform(-2145.8,26.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_112.setTransform(-2114.3,16.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_113.setTransform(-2135.3,16.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_114.setTransform(-2145.8,16.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_115.setTransform(-2114.3,6.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_116.setTransform(-2124.3,6.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_117.setTransform(-2135.3,6.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_118.setTransform(-2145.8,6.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_119.setTransform(-2114.3,-3.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_120.setTransform(-2124.3,-3.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_121.setTransform(-2135.3,-3.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_122.setTransform(-2145.8,-3.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_123.setTransform(-2114.3,-13.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_124.setTransform(-2124.3,-13.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_125.setTransform(-2135.3,-13.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_126.setTransform(-2114.3,-23.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_127.setTransform(-2124.3,-23.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_128.setTransform(-2135.3,-23.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_129.setTransform(-2145.8,-23.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_130.setTransform(-2124.3,-33.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_131.setTransform(-2145.8,-33.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_132.setTransform(-2114.3,-43.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_133.setTransform(-2124.3,-43.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_134.setTransform(-2135.3,-43.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_135.setTransform(-2145.8,-43.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,77).lineTo(-24.5,-65).lineTo(-19.5,-65).lineTo(-19.5,-77).lineTo(8.5,-77).lineTo(8.5,-65).lineTo(24.5,-65).lineTo(24.5,77).closePath().moveTo(12.5,59).lineTo(18.5,59).lineTo(18.5,52).lineTo(12.5,52).closePath().moveTo(2.5,59).lineTo(8.5,59).lineTo(8.5,52).lineTo(2.5,52).closePath().moveTo(-19.5,59).lineTo(-12.5,59).lineTo(-12.5,52).lineTo(-19.5,52).closePath().moveTo(2.5,49).lineTo(8.5,49).lineTo(8.5,42).lineTo(2.5,42).closePath().moveTo(-8.5,49).lineTo(-2.5,49).lineTo(-2.5,42).lineTo(-8.5,42).closePath().moveTo(-19.5,49).lineTo(-12.5,49).lineTo(-12.5,42).lineTo(-19.5,42).closePath().moveTo(12.5,39).lineTo(18.5,39).lineTo(18.5,32).lineTo(12.5,32).closePath().moveTo(2.5,39).lineTo(8.5,39).lineTo(8.5,32).lineTo(2.5,32).closePath().moveTo(-8.5,39).lineTo(-2.5,39).lineTo(-2.5,32).lineTo(-8.5,32).closePath().moveTo(12.5,29).lineTo(18.5,29).lineTo(18.5,22).lineTo(12.5,22).closePath().moveTo(2.5,29).lineTo(8.5,29).lineTo(8.5,22).lineTo(2.5,22).closePath().moveTo(-8.5,29).lineTo(-2.5,29).lineTo(-2.5,22).lineTo(-8.5,22).closePath().moveTo(-19.5,29).lineTo(-12.5,29).lineTo(-12.5,22).lineTo(-19.5,22).closePath().moveTo(12.5,19).lineTo(18.5,19).lineTo(18.5,12).lineTo(12.5,12).closePath().moveTo(-8.5,19).lineTo(-2.5,19).lineTo(-2.5,12).lineTo(-8.5,12).closePath().moveTo(-19.5,19).lineTo(-12.5,19).lineTo(-12.5,12).lineTo(-19.5,12).closePath().moveTo(12.5,9).lineTo(18.5,9).lineTo(18.5,2).lineTo(12.5,2).closePath().moveTo(2.5,9).lineTo(8.5,9).lineTo(8.5,2).lineTo(2.5,2).closePath().moveTo(-8.5,9).lineTo(-2.5,9).lineTo(-2.5,2).lineTo(-8.5,2).closePath().moveTo(-19.5,9).lineTo(-12.5,9).lineTo(-12.5,2).lineTo(-19.5,2).closePath().moveTo(12.5,-1).lineTo(18.5,-1).lineTo(18.5,-8).lineTo(12.5,-8).closePath().moveTo(2.5,-1).lineTo(8.5,-1).lineTo(8.5,-8).lineTo(2.5,-8).closePath().moveTo(-8.5,-1).lineTo(-2.5,-1).lineTo(-2.5,-8).lineTo(-8.5,-8).closePath().moveTo(-19.5,-1).lineTo(-12.5,-1).lineTo(-12.5,-8).lineTo(-19.5,-8).closePath().moveTo(12.5,-11).lineTo(18.5,-11).lineTo(18.5,-18).lineTo(12.5,-18).closePath().moveTo(2.5,-11).lineTo(8.5,-11).lineTo(8.5,-18).lineTo(2.5,-18).closePath().moveTo(-8.5,-11).lineTo(-2.5,-11).lineTo(-2.5,-18).lineTo(-8.5,-18).closePath().moveTo(12.5,-21).lineTo(18.5,-21).lineTo(18.5,-28).lineTo(12.5,-28).closePath().moveTo(2.5,-21).lineTo(8.5,-21).lineTo(8.5,-28).lineTo(2.5,-28).closePath().moveTo(-8.5,-21).lineTo(-2.5,-21).lineTo(-2.5,-28).lineTo(-8.5,-28).closePath().moveTo(-19.5,-21).lineTo(-12.5,-21).lineTo(-12.5,-28).lineTo(-19.5,-28).closePath().moveTo(2.5,-31).lineTo(8.5,-31).lineTo(8.5,-38).lineTo(2.5,-38).closePath().moveTo(-19.5,-31).lineTo(-12.5,-31).lineTo(-12.5,-38).lineTo(-19.5,-38).closePath().moveTo(12.5,-41).lineTo(18.5,-41).lineTo(18.5,-48).lineTo(12.5,-48).closePath().moveTo(2.5,-41).lineTo(8.5,-41).lineTo(8.5,-48).lineTo(2.5,-48).closePath().moveTo(-8.5,-41).lineTo(-2.5,-41).lineTo(-2.5,-48).lineTo(-8.5,-48).closePath().moveTo(-19.5,-41).lineTo(-12.5,-41).lineTo(-12.5,-48).lineTo(-19.5,-48).closePath();
	this.shape_136.setTransform(-2129.8,1.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_137.setTransform(-1925.3,62.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_138.setTransform(-1925.3,56.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_139.setTransform(-1925.3,50.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_140.setTransform(-1925.3,38.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_141.setTransform(-1925.3,32.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_142.setTransform(-1925.3,26.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_143.setTransform(-1925.3,20.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_144.setTransform(-1925.3,14.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_145.setTransform(-1925.3,8.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_146.setTransform(-1925.3,2.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_147.setTransform(-1925.3,-3.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_148.setTransform(-1925.3,-15.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_149.setTransform(-1925.3,-21.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_150.setTransform(-1925.3,-27.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_151.setTransform(-1925.3,-33.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_152.setTransform(-1925.3,-39.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_153.setTransform(-1925.3,-45.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_154.setTransform(-1925.3,-51.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_155.setTransform(-1925.3,-57.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,80).lineTo(-19,-80).lineTo(19,-66).lineTo(19,80).closePath();
	this.shape_156.setTransform(-1925.3,-1.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,9).lineTo(-2,-9).lineTo(2,-9).lineTo(2,9).closePath();
	this.shape_157.setTransform(-2062.3,56.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,9).lineTo(-2,-9).lineTo(2,-9).lineTo(2,9).closePath();
	this.shape_158.setTransform(-2078.3,56.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_159.setTransform(-2062.3,35.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_160.setTransform(-2078.3,35.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_161.setTransform(-2086.3,35.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_162.setTransform(-2062.3,14.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_163.setTransform(-2070.3,14.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_164.setTransform(-2086.3,14.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_165.setTransform(-2062.3,-5.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_166.setTransform(-2078.3,-5.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_167.setTransform(-2086.3,-5.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_168.setTransform(-2062.3,-26.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_169.setTransform(-2070.3,-26.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_170.setTransform(-2086.3,-26.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,64).lineTo(-22,-64).lineTo(22,-64).lineTo(22,64).closePath();
	this.shape_171.setTransform(-2078.3,14.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_172.setTransform(-2163.8,66.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_173.setTransform(-2178.3,66.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_174.setTransform(-2192.8,66.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4.5).lineTo(-1.5,-4.5).lineTo(1.5,-4.5).lineTo(1.5,4.5).closePath();
	this.shape_175.setTransform(-2163.8,56.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_176.setTransform(-2171.3,56.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_177.setTransform(-2178.3,56.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_178.setTransform(-2185.3,56.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4.5).lineTo(-2.5,-4.5).lineTo(2.5,-4.5).lineTo(2.5,4.5).closePath();
	this.shape_179.setTransform(-2192.8,56.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_180.setTransform(-2171.3,47.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_181.setTransform(-2178.3,47.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_182.setTransform(-2163.8,37.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_183.setTransform(-2178.3,37.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_184.setTransform(-2185.3,37.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_185.setTransform(-2192.8,37.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_186.setTransform(-2163.8,29.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_187.setTransform(-2171.3,29.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_188.setTransform(-2178.3,29.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_189.setTransform(-2192.8,29.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_190.setTransform(-2163.8,19.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_191.setTransform(-2178.3,19.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_192.setTransform(-2192.8,19.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_193.setTransform(-2163.8,10.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_194.setTransform(-2171.3,10.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_195.setTransform(-2178.3,10.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_196.setTransform(-2185.3,10.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_197.setTransform(-2192.8,10.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_198.setTransform(-2163.8,0.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_199.setTransform(-2171.3,0.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_200.setTransform(-2178.3,0.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_201.setTransform(-2192.8,0.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_202.setTransform(-2163.8,-8.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_203.setTransform(-2178.3,-8.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_204.setTransform(-2185.3,-8.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_205.setTransform(-2192.8,-8.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_206.setTransform(-2163.8,-18.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_207.setTransform(-2171.3,-18.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_208.setTransform(-2178.3,-18.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_209.setTransform(-2192.8,-18.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.5,56.5).lineTo(-19.5,-56.5).lineTo(19.5,-56.5).lineTo(19.5,56.5).closePath();
	this.shape_210.setTransform(-2178.8,21.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_211.setTransform(-2008.8,53.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_212.setTransform(-2026.8,53.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_213.setTransform(-2035.8,53.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_214.setTransform(-2044.8,53.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_215.setTransform(-2008.8,30.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_216.setTransform(-2017.8,30.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_217.setTransform(-2026.8,30.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_218.setTransform(-2044.8,30.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_219.setTransform(-2008.8,7.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_220.setTransform(-2017.8,7.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_221.setTransform(-2026.8,7.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_222.setTransform(-2035.8,7.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_223.setTransform(-2044.8,7.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_224.setTransform(-2017.8,-15.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_225.setTransform(-2035.8,-15.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_226.setTransform(-2044.8,-15.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_227.setTransform(-2008.8,-38.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_228.setTransform(-2017.8,-38.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_229.setTransform(-2026.8,-38.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_230.setTransform(-2035.8,-38.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,71).lineTo(-24.5,-71).lineTo(24.5,-71).lineTo(24.5,71).closePath();
	this.shape_231.setTransform(-2026.8,7.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#494A4E").beginStroke().moveTo(-297,4.5).lineTo(-297,-4.5).lineTo(297,-4.5).lineTo(297,4.5).closePath();
	this.shape_232.setTransform(-1999.3,76.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.5,72).lineTo(-11,71.2).lineTo(-3.8,13.7).lineTo(-6.9,-27.8).curveTo(-9.5,-29,-11,-30.7).curveTo(-12.7,-32.6,-12.6,-34.8).curveTo(-12.6,-37.9,-9.4,-40.3).curveTo(-6.2,-42.6,-1.6,-42.9).lineTo(-1.6,-72).lineTo(1.4,-72).lineTo(1.4,-42.9).curveTo(6.5,-42.6,9.5,-40.2).curveTo(12.3,-38,12.3,-34.8).curveTo(12.3,-32.6,10.9,-30.7).curveTo(9.4,-29,6.8,-27.8).lineTo(3.8,13.7).lineTo(11,71.2).lineTo(13.5,72).closePath();
	this.shape_233.setTransform(-1451.7,3.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_234.setTransform(-1500.8,-18.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_235.setTransform(-1509.8,-18.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_236.setTransform(-1482.8,7.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_237.setTransform(-1491.8,7.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_238.setTransform(-1509.8,7.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_239.setTransform(-1482.8,33.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_240.setTransform(-1500.8,33.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_241.setTransform(-1509.8,33.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.2,67).lineTo(-23.2,-67).lineTo(-15.9,-62.9).curveTo(-7.3,-57.6,0,-51.4).curveTo(23.2,-31.7,23.2,-10.3).lineTo(23.2,67).closePath();
	this.shape_242.setTransform(-1496.1,7.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_243.setTransform(-1585.3,-20.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_244.setTransform(-1593.3,-20.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_245.setTransform(-1601.3,-20.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_246.setTransform(-1585.3,2.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_247.setTransform(-1593.3,2.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_248.setTransform(-1601.3,2.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_249.setTransform(-1577.3,32.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_250.setTransform(-1585.3,32.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_251.setTransform(-1593.3,32.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_252.setTransform(-1601.3,32.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_253.setTransform(-1609.3,32.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.5,68).lineTo(-23.5,6).lineTo(-18.5,6).lineTo(-18.5,-40).lineTo(-12.5,-40).lineTo(-12.5,-52).lineTo(-3.5,-52).lineTo(-3.5,-68).lineTo(3.5,-68).lineTo(3.5,-52).lineTo(12.5,-52).lineTo(12.5,-40).lineTo(18.5,-40).lineTo(18.5,6).lineTo(23.5,6).lineTo(23.5,68).closePath().moveTo(13.5,38).lineTo(17.5,38).lineTo(17.5,17).lineTo(13.5,17).closePath().moveTo(5.5,38).lineTo(9.5,38).lineTo(9.5,17).lineTo(5.5,17).closePath().moveTo(-2.5,38).lineTo(1.5,38).lineTo(1.5,17).lineTo(-2.5,17).closePath().moveTo(-10.5,38).lineTo(-6.5,38).lineTo(-6.5,17).lineTo(-10.5,17).closePath().moveTo(-18.5,38).lineTo(-14.5,38).lineTo(-14.5,17).lineTo(-18.5,17).closePath().moveTo(5.5,6).lineTo(9.5,6).lineTo(9.5,-11).lineTo(5.5,-11).closePath().moveTo(-2.5,6).lineTo(1.5,6).lineTo(1.5,-11).lineTo(-2.5,-11).closePath().moveTo(-10.5,6).lineTo(-6.5,6).lineTo(-6.5,-11).lineTo(-10.5,-11).closePath().moveTo(5.5,-17).lineTo(9.5,-17).lineTo(9.5,-34).lineTo(5.5,-34).closePath().moveTo(-2.5,-17).lineTo(1.5,-17).lineTo(1.5,-34).lineTo(-2.5,-34).closePath().moveTo(-10.5,-17).lineTo(-6.5,-17).lineTo(-6.5,-34).lineTo(-10.5,-34).closePath();
	this.shape_254.setTransform(-1592.8,5.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_255.setTransform(-1788.3,56.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_256.setTransform(-1799.3,56.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_257.setTransform(-1788.3,43.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_258.setTransform(-1777.3,43.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_259.setTransform(-1799.3,43.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_260.setTransform(-1777.3,30.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_261.setTransform(-1799.3,30.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_262.setTransform(-1788.3,17.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_263.setTransform(-1777.3,17.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_264.setTransform(-1799.3,17.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_265.setTransform(-1788.3,4.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_266.setTransform(-1799.3,4.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_267.setTransform(-1788.3,-8.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_268.setTransform(-1777.3,-8.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_269.setTransform(-1788.3,-21.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_270.setTransform(-1777.3,-21.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_271.setTransform(-1799.3,-21.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_272.setTransform(-1788.3,-34.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_273.setTransform(-1799.3,-34.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,64).lineTo(-18,-55).lineTo(7,-55).lineTo(7,-64).lineTo(14,-64).lineTo(14,-55).lineTo(18,-55).lineTo(18,64).closePath().moveTo(-4,51).lineTo(4,51).lineTo(4,42).lineTo(-4,42).closePath().moveTo(-15,51).lineTo(-7,51).lineTo(-7,42).lineTo(-15,42).closePath().moveTo(7,38).lineTo(15,38).lineTo(15,29).lineTo(7,29).closePath().moveTo(-4,38).lineTo(4,38).lineTo(4,29).lineTo(-4,29).closePath().moveTo(-15,38).lineTo(-7,38).lineTo(-7,29).lineTo(-15,29).closePath().moveTo(7,25).lineTo(15,25).lineTo(15,16).lineTo(7,16).closePath().moveTo(-15,25).lineTo(-7,25).lineTo(-7,16).lineTo(-15,16).closePath().moveTo(7,12).lineTo(15,12).lineTo(15,3).lineTo(7,3).closePath().moveTo(-4,12).lineTo(4,12).lineTo(4,3).lineTo(-4,3).closePath().moveTo(-15,12).lineTo(-7,12).lineTo(-7,3).lineTo(-15,3).closePath().moveTo(-4,-1).lineTo(4,-1).lineTo(4,-10).lineTo(-4,-10).closePath().moveTo(-15,-1).lineTo(-7,-1).lineTo(-7,-10).lineTo(-15,-10).closePath().moveTo(7,-14).lineTo(15,-14).lineTo(15,-23).lineTo(7,-23).closePath().moveTo(-4,-14).lineTo(4,-14).lineTo(4,-23).lineTo(-4,-23).closePath().moveTo(7,-27).lineTo(15,-27).lineTo(15,-36).lineTo(7,-36).closePath().moveTo(-4,-27).lineTo(4,-27).lineTo(4,-36).lineTo(-4,-36).closePath().moveTo(-15,-27).lineTo(-7,-27).lineTo(-7,-36).lineTo(-15,-36).closePath().moveTo(-4,-40).lineTo(4,-40).lineTo(4,-49).lineTo(-4,-49).closePath().moveTo(-15,-40).lineTo(-7,-40).lineTo(-7,-49).lineTo(-15,-49).closePath();
	this.shape_274.setTransform(-1788.3,10.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_275.setTransform(-1738.3,59.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_276.setTransform(-1752.3,59.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_277.setTransform(-1759.3,59.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_278.setTransform(-1738.3,47.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_279.setTransform(-1745.3,47.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_280.setTransform(-1759.3,47.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.5,18.5).lineTo(-16.5,-18.5).lineTo(16.5,-18.5).lineTo(16.5,18.5).closePath();
	this.shape_281.setTransform(-1748.8,56.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_282.setTransform(-1544.8,49.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_283.setTransform(-1544.8,39.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_284.setTransform(-1544.8,29.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_285.setTransform(-1544.8,19.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_286.setTransform(-1544.8,10.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_287.setTransform(-1544.8,0.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_288.setTransform(-1544.8,-9.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_289.setTransform(-1544.8,-19.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,51.5).lineTo(-19,-51.5).lineTo(19,-51.5).lineTo(19,51.5).closePath();
	this.shape_290.setTransform(-1544.3,23.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_291.setTransform(-1682.3,61.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_292.setTransform(-1692.8,61.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_293.setTransform(-1682.3,51.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_294.setTransform(-1682.3,41.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_295.setTransform(-1692.8,41.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_296.setTransform(-1682.3,31.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_297.setTransform(-1692.8,31.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_298.setTransform(-1682.3,21.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_299.setTransform(-1682.3,11.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_300.setTransform(-1692.8,11.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_301.setTransform(-1692.8,1.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_302.setTransform(-1682.3,-8.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_303.setTransform(-1692.8,-8.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_304.setTransform(-1682.3,-18.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_305.setTransform(-1682.3,-28.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_306.setTransform(-1692.8,-28.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_307.setTransform(-1682.3,-38.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_308.setTransform(-1703.3,61.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_309.setTransform(-1703.3,51.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_310.setTransform(-1713.8,51.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_311.setTransform(-1703.3,41.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_312.setTransform(-1703.3,31.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_313.setTransform(-1713.8,31.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_314.setTransform(-1703.3,21.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_315.setTransform(-1713.8,21.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_316.setTransform(-1703.3,11.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_317.setTransform(-1713.8,11.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_318.setTransform(-1703.3,1.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_319.setTransform(-1703.3,-8.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_320.setTransform(-1713.8,-8.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_321.setTransform(-1703.3,-18.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_322.setTransform(-1713.8,-18.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_323.setTransform(-1703.3,-28.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_324.setTransform(-1703.3,-38.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_325.setTransform(-1713.8,-38.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,65.5).lineTo(-24.5,-65.5).lineTo(24.5,-65.5).lineTo(24.5,65.5).closePath();
	this.shape_326.setTransform(-1697.7,6.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_327.setTransform(-1628.3,42.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_328.setTransform(-1644.3,42.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_329.setTransform(-1652.3,42.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_330.setTransform(-1628.3,22.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_331.setTransform(-1636.3,22.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_332.setTransform(-1652.3,22.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_333.setTransform(-1636.3,-17.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_334.setTransform(-1644.3,-17.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_335.setTransform(-1652.3,-17.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_336.setTransform(-1628.3,2.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_337.setTransform(-1636.3,2.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_338.setTransform(-1644.3,2.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,58.5).lineTo(-22,-58.5).lineTo(22,-58.5).lineTo(22,58.5).closePath();
	this.shape_339.setTransform(-1644.2,16.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_340.setTransform(-1420.6,65.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_341.setTransform(-1403.1,60);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_342.setTransform(-1420.6,60);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_343.setTransform(-1403.1,49);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_344.setTransform(-1420.6,43.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_345.setTransform(-1403.1,38);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_346.setTransform(-1420.6,38);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_347.setTransform(-1420.6,27);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_348.setTransform(-1403.1,21.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_349.setTransform(-1403.1,16);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_350.setTransform(-1420.6,16);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_351.setTransform(-1403.1,5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_352.setTransform(-1420.6,5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_353.setTransform(-1403.1,-6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_354.setTransform(-1403.1,-11.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_355.setTransform(-1420.6,-17);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_356.setTransform(-1403.1,-17);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_357.setTransform(-1420.6,-28);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_358.setTransform(-1403.1,-33.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_359.setTransform(-1420.6,-33.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.4,61.9).lineTo(-17.4,-61.9).lineTo(16.5,-61.9).lineTo(17.4,-61.6).lineTo(17.4,61.9).closePath();
	this.shape_360.setTransform(-1412.2,13.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#494A4E").beginStroke().moveTo(-309.5,4.5).lineTo(-309.5,-4.5).lineTo(309.5,-4.5).lineTo(309.5,4.5).closePath();
	this.shape_361.setTransform(-1675.8,76.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_362.setTransform(-1346,46.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_363.setTransform(-1353,46.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_364.setTransform(-1367,46.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_365.setTransform(-1346,29.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_366.setTransform(-1360,29.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_367.setTransform(-1367,29.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_368.setTransform(-1346,12.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_369.setTransform(-1353,12.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6).lineTo(-2,-6).lineTo(2,-6).lineTo(2,6).closePath();
	this.shape_370.setTransform(-1367,12.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,49).lineTo(-18,-34).lineTo(-2,-34).lineTo(-2,-49).lineTo(2,-49).lineTo(2,-34).lineTo(18,-34).lineTo(18,49).closePath().moveTo(8,24).lineTo(12,24).lineTo(12,12).lineTo(8,12).closePath().moveTo(1,24).lineTo(5,24).lineTo(5,12).lineTo(1,12).closePath().moveTo(-13,24).lineTo(-9,24).lineTo(-9,12).lineTo(-13,12).closePath().moveTo(8,7).lineTo(12,7).lineTo(12,-5).lineTo(8,-5).closePath().moveTo(-6,7).lineTo(-2,7).lineTo(-2,-5).lineTo(-6,-5).closePath().moveTo(-13,7).lineTo(-9,7).lineTo(-9,-5).lineTo(-13,-5).closePath().moveTo(8,-10).lineTo(12,-10).lineTo(12,-22).lineTo(8,-22).closePath().moveTo(1,-10).lineTo(5,-10).lineTo(5,-22).lineTo(1,-22).closePath().moveTo(-13,-10).lineTo(-9,-10).lineTo(-9,-22).lineTo(-13,-22).closePath();
	this.shape_371.setTransform(-1356,28.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.1,-3.4).curveTo(-0.1,-2.9,0.5,-2).curveTo(1.1,-1.1,1.1,0).curveTo(1.1,2.3,-1,3.4).closePath();
	this.shape_372.setTransform(-1275.2,-34.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.2,67).lineTo(-6.2,-19.5).curveTo(-9.4,-20.8,-11.4,-23.1).curveTo(-13.6,-25.7,-13.6,-28.5).curveTo(-13.6,-32.4,-9.9,-35.2).curveTo(-6.4,-38,-1.2,-38.4).lineTo(-1.1,-41.1).curveTo(-2.1,-41.5,-2.7,-42.4).curveTo(-3.3,-43.3,-3.3,-44.4).curveTo(-3.3,-45.5,-2.7,-46.4).curveTo(-2,-47.2,-1,-47.6).lineTo(-0.8,-67).lineTo(1.2,-67).lineTo(1.6,-38.4).curveTo(6.7,-38,10.1,-35.2).curveTo(13.6,-32.4,13.6,-28.5).curveTo(13.6,-25.5,11.6,-23.1).curveTo(9.5,-20.7,5.8,-19.5).lineTo(5.8,67).closePath();
	this.shape_373.setTransform(-1277.8,10.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_374.setTransform(-1145.7,61.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_375.setTransform(-1154.9,53.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_376.setTransform(-1154.9,45.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_377.setTransform(-1154.9,37.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_378.setTransform(-1154.9,21.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_379.setTransform(-1154.9,13.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_380.setTransform(-1145.7,53.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_381.setTransform(-1135.9,53.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_382.setTransform(-1145.7,45.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_383.setTransform(-1145.7,37.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_384.setTransform(-1135.9,37.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_385.setTransform(-1145.7,29.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_386.setTransform(-1135.9,29.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_387.setTransform(-1145.7,21.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_388.setTransform(-1135.9,13.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,40.7).lineTo(-18,-40.7).lineTo(18,-40.7).lineTo(18,40.7).closePath();
	this.shape_389.setTransform(-1145.7,38);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_390.setTransform(-1084.2,46.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_391.setTransform(-1100.6,46.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_392.setTransform(-1100.6,38.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_393.setTransform(-1100.6,30.8);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_394.setTransform(-1084.2,30.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_395.setTransform(-1084.2,22.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_396.setTransform(-1084.2,14.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_397.setTransform(-1100.6,14.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_398.setTransform(-1100.6,6.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_399.setTransform(-1084.2,-1.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_400.setTransform(-1100.6,-1.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,42.5).lineTo(-18,-42.5).lineTo(18,-42.5).lineTo(18,42.5).closePath();
	this.shape_401.setTransform(-1092.6,32.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_402.setTransform(-954.5,63.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_403.setTransform(-969,63.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_404.setTransform(-983.5,63.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4.5).lineTo(-1.5,-4.5).lineTo(1.5,-4.5).lineTo(1.5,4.5).closePath();
	this.shape_405.setTransform(-954.5,53.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_406.setTransform(-962,53.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_407.setTransform(-969,53.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_408.setTransform(-976,53.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4.5).lineTo(-2.5,-4.5).lineTo(2.5,-4.5).lineTo(2.5,4.5).closePath();
	this.shape_409.setTransform(-983.5,53.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_410.setTransform(-962,44.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_411.setTransform(-969,44.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_412.setTransform(-954.5,34.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_413.setTransform(-969,34.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_414.setTransform(-976,34.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_415.setTransform(-983.5,34.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_416.setTransform(-954.5,26.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_417.setTransform(-962,26.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_418.setTransform(-969,26.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_419.setTransform(-983.5,26.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_420.setTransform(-954.5,16.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_421.setTransform(-969,16.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_422.setTransform(-983.5,16.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.5,38.8).lineTo(-19.5,-38.7).lineTo(19.5,-38.7).lineTo(19.5,38.8).closePath();
	this.shape_423.setTransform(-969.1,36);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#494A4E").beginStroke().moveTo(-269.5,4.5).lineTo(-269.5,-4.5).lineTo(269.5,-4.5).lineTo(269.5,4.5).closePath();
	this.shape_424.setTransform(-1123.5,76.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_425.setTransform(-1056,58.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_426.setTransform(-1056,51.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_427.setTransform(-1056,45.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_428.setTransform(-1056,38.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_429.setTransform(-1056,32.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_430.setTransform(-1056,26.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_431.setTransform(-1056,19.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_432.setTransform(-1056,13.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_433.setTransform(-1049,58.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_434.setTransform(-1049,51.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_435.setTransform(-1049,45.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_436.setTransform(-1049,38.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_437.setTransform(-1049,32.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_438.setTransform(-1049,26.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_439.setTransform(-1049,19.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2).lineTo(-2,-2).lineTo(2,-2).lineTo(2,2).closePath();
	this.shape_440.setTransform(-1049,13.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.5,34.8).lineTo(-16.5,-34.8).lineTo(16.5,-34.8).lineTo(16.5,34.8).closePath();
	this.shape_441.setTransform(-1052.1,38);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_442.setTransform(-1250.5,59.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_443.setTransform(-1250.5,41.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_444.setTransform(-1250.5,23.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_445.setTransform(-1250.5,14.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_446.setTransform(-1250.5,-4.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_447.setTransform(-1250.5,-22.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_448.setTransform(-1250.5,-31.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_449.setTransform(-1240.5,50.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_450.setTransform(-1240.5,41.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_451.setTransform(-1240.5,32.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_452.setTransform(-1240.5,14.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_453.setTransform(-1240.5,4.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_454.setTransform(-1240.5,-4.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_455.setTransform(-1240.5,-13.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_456.setTransform(-1240.5,-22.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_457.setTransform(-1240.5,-31.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_458.setTransform(-1230.5,59.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_459.setTransform(-1230.5,41.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_460.setTransform(-1230.5,32.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_461.setTransform(-1230.5,23.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_462.setTransform(-1230.5,14.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_463.setTransform(-1230.5,-4.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_464.setTransform(-1230.5,-22.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_465.setTransform(-1230.5,-31.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_466.setTransform(-1220.5,59.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_467.setTransform(-1220.5,50.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_468.setTransform(-1220.5,32.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_469.setTransform(-1220.5,14.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_470.setTransform(-1220.5,4.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_471.setTransform(-1220.5,-4.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_472.setTransform(-1220.5,-13.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_473.setTransform(-1220.5,-22.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3).lineTo(-2.5,-3).lineTo(2.5,-3).lineTo(2.5,3).closePath();
	this.shape_474.setTransform(-1220.5,-31.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.4,61.9).lineTo(-23.4,-61.9).lineTo(23.4,-61.9).lineTo(23.4,61.9).closePath();
	this.shape_475.setTransform(-1235.2,12.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1).lineTo(-4.6,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_476.setTransform(-1002.2,62.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.9,-1).lineTo(4.9,1).closePath();
	this.shape_477.setTransform(-1019.7,62.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_478.setTransform(-1002.2,57.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_479.setTransform(-1019.7,57.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_480.setTransform(-1002.2,46.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_481.setTransform(-1019.7,46.3);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1).lineTo(-4.6,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_482.setTransform(-1002.2,40.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.9,-1).lineTo(4.9,1).closePath();
	this.shape_483.setTransform(-1019.7,40.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_484.setTransform(-1002.2,35.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_485.setTransform(-1019.7,35.3);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_486.setTransform(-1002.2,24.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_487.setTransform(-1019.7,24.3);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1).lineTo(-4.6,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_488.setTransform(-1002.2,18.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.9,-1).lineTo(4.9,1).closePath();
	this.shape_489.setTransform(-1019.7,18.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_490.setTransform(-1002.2,13.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_491.setTransform(-1019.7,13.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1).lineTo(-4.6,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_492.setTransform(-1002.2,7.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.9,-1).lineTo(4.9,1).closePath();
	this.shape_493.setTransform(-1019.7,7.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_494.setTransform(-1002.2,2.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_495.setTransform(-1019.7,2.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_496.setTransform(-1002.2,-8.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_497.setTransform(-1019.7,-8.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1).lineTo(-4.6,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_498.setTransform(-1002.2,-14.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.9,-1).lineTo(4.9,1).closePath();
	this.shape_499.setTransform(-1019.7,-14.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_500.setTransform(-1019.7,-19.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_501.setTransform(-1002.2,-19.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_502.setTransform(-1019.7,-30.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1.5).lineTo(-4.6,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_503.setTransform(-1002.2,-30.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.6,1).lineTo(-4.6,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_504.setTransform(-1002.2,-36.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.9,-1).lineTo(4.9,1).closePath();
	this.shape_505.setTransform(-1019.7,-36.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.4,68.2).lineTo(-17.4,-68.2).lineTo(17.4,-55.3).lineTo(17.4,68.2).closePath();
	this.shape_506.setTransform(-1011.3,4.6);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,8).lineTo(-1.5,-8).lineTo(1.5,-8).lineTo(1.5,8).closePath();
	this.shape_507.setTransform(-1326.5,44.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,8).lineTo(-1.5,-8).lineTo(1.5,-8).lineTo(1.5,8).closePath();
	this.shape_508.setTransform(-1326.5,25.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_509.setTransform(-1326.5,6.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_510.setTransform(-1326.5,-12.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,8).lineTo(-1.5,-8).lineTo(1.5,-8).lineTo(1.5,8).closePath();
	this.shape_511.setTransform(-1318.5,44.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,8).lineTo(-1.5,-8).lineTo(1.5,-8).lineTo(1.5,8).closePath();
	this.shape_512.setTransform(-1318.5,25.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_513.setTransform(-1318.5,-12.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,8).lineTo(-1.5,-8).lineTo(1.5,-8).lineTo(1.5,8).closePath();
	this.shape_514.setTransform(-1310.5,44.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_515.setTransform(-1310.5,6.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_516.setTransform(-1310.5,-12.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,8).lineTo(-1.5,-8).lineTo(1.5,-8).lineTo(1.5,8).closePath();
	this.shape_517.setTransform(-1302.5,44.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,8).lineTo(-1.5,-8).lineTo(1.5,-8).lineTo(1.5,8).closePath();
	this.shape_518.setTransform(-1302.5,25.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_519.setTransform(-1302.5,6.8);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_520.setTransform(-1302.5,-12.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.5,53.5).lineTo(-17.5,-53.5).lineTo(17.5,-53.5).lineTo(17.5,53.5).closePath();
	this.shape_521.setTransform(-1314.1,19.2);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6.5).lineTo(-2,-6.5).lineTo(2,-6.5).lineTo(2,6.5).closePath();
	this.shape_522.setTransform(-1182,45.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,6.5).lineTo(-2.5,-6.5).lineTo(2.5,-6.5).lineTo(2.5,6.5).closePath();
	this.shape_523.setTransform(-1188.5,45.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,6.5).lineTo(-2,-6.5).lineTo(2,-6.5).lineTo(2,6.5).closePath();
	this.shape_524.setTransform(-1202,45.8);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,7).lineTo(-2,-7).lineTo(2,-7).lineTo(2,7).closePath();
	this.shape_525.setTransform(-1175,28.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,7).lineTo(-2.5,-7).lineTo(2.5,-7).lineTo(2.5,7).closePath();
	this.shape_526.setTransform(-1188.5,28.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_527.setTransform(-1195.5,28.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,7).lineTo(-2,-7).lineTo(2,-7).lineTo(2,7).closePath();
	this.shape_528.setTransform(-1202,28.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,7).lineTo(-2,-7).lineTo(2,-7).lineTo(2,7).closePath();
	this.shape_529.setTransform(-1182,11.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,7).lineTo(-2.5,-7).lineTo(2.5,-7).lineTo(2.5,7).closePath();
	this.shape_530.setTransform(-1188.5,11.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,7).lineTo(-2,-7).lineTo(2,-7).lineTo(2,7).closePath();
	this.shape_531.setTransform(-1202,11.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,7).lineTo(-2,-7).lineTo(2,-7).lineTo(2,7).closePath();
	this.shape_532.setTransform(-1175,-5.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,7).lineTo(-2,-7).lineTo(2,-7).lineTo(2,7).closePath();
	this.shape_533.setTransform(-1182,-5.7);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_534.setTransform(-1195.5,-5.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,7).lineTo(-2,-7).lineTo(2,-7).lineTo(2,7).closePath();
	this.shape_535.setTransform(-1202,-5.7);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.beginFill("#494A4E").beginStroke().moveTo(-18.4,49.2).lineTo(-18.4,-49.2).lineTo(18.4,-49.2).lineTo(18.4,49.2).closePath();
	this.shape_536.setTransform(-1188.2,23.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.5,2).lineTo(-15.5,-2).lineTo(15.5,-2).lineTo(15.5,2).closePath();
	this.shape_537.setTransform(-476.5,18.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_538.setTransform(-442,50.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_539.setTransform(-492,35.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_540.setTransform(-462,50.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_541.setTransform(-462,35.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_542.setTransform(-472,50.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_543.setTransform(-482,50.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_544.setTransform(-502,50.3);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_545.setTransform(-512,50.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_546.setTransform(-442,35.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_547.setTransform(-452,35.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_548.setTransform(-482,35.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1,5).lineTo(-1,-5).lineTo(1,-5).lineTo(1,5).closePath();
	this.shape_549.setTransform(-512,35.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.beginFill("#494A4E").beginStroke().moveTo(-43.5,50.5).lineTo(-43.5,-3.5).lineTo(-24.5,-3.5).lineTo(-24.5,-8.5).lineTo(-27.1,-8.5).curveTo(-27,-18.9,-19.7,-26.9).curveTo(-12.4,-34.9,-2.5,-35.9).lineTo(-2.5,-50.5).lineTo(1.5,-50.5).lineTo(1.5,-35.9).curveTo(12.6,-35.4,20.3,-27.2).curveTo(27.8,-19.1,27.9,-8.5).lineTo(24.5,-8.5).lineTo(24.5,-3.5).lineTo(43.5,-3.5).lineTo(43.5,50.5).closePath().moveTo(33.5,31.5).lineTo(35.5,31.5).lineTo(35.5,21.5).lineTo(33.5,21.5).closePath().moveTo(13.5,31.5).lineTo(15.5,31.5).lineTo(15.5,21.5).lineTo(13.5,21.5).closePath().moveTo(3.5,31.5).lineTo(5.5,31.5).lineTo(5.5,21.5).lineTo(3.5,21.5).closePath().moveTo(-6.5,31.5).lineTo(-4.5,31.5).lineTo(-4.5,21.5).lineTo(-6.5,21.5).closePath().moveTo(-26.5,31.5).lineTo(-24.5,31.5).lineTo(-24.5,21.5).lineTo(-26.5,21.5).closePath().moveTo(-36.5,31.5).lineTo(-34.5,31.5).lineTo(-34.5,21.5).lineTo(-36.5,21.5).closePath().moveTo(33.5,16.5).lineTo(35.5,16.5).lineTo(35.5,6.5).lineTo(33.5,6.5).closePath().moveTo(23.5,16.5).lineTo(25.5,16.5).lineTo(25.5,6.5).lineTo(23.5,6.5).closePath().moveTo(13.5,16.5).lineTo(15.5,16.5).lineTo(15.5,6.5).lineTo(13.5,6.5).closePath().moveTo(-6.5,16.5).lineTo(-4.5,16.5).lineTo(-4.5,6.5).lineTo(-6.5,6.5).closePath().moveTo(-16.5,16.5).lineTo(-14.5,16.5).lineTo(-14.5,6.5).lineTo(-16.5,6.5).closePath().moveTo(-36.5,16.5).lineTo(-34.5,16.5).lineTo(-34.5,6.5).lineTo(-36.5,6.5).closePath().moveTo(-15.5,-3.5).lineTo(15.5,-3.5).lineTo(15.5,-7.5).lineTo(-15.5,-7.5).closePath();
	this.shape_550.setTransform(-476.5,23.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_551.setTransform(-421.5,51.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_552.setTransform(-409,51.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_553.setTransform(-402,51.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_554.setTransform(-421.5,41.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_555.setTransform(-415,41.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_556.setTransform(-402,41.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_557.setTransform(-415,30.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_558.setTransform(-409,30.8);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_559.setTransform(-402,30.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_560.setTransform(-421.5,20.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_561.setTransform(-415,20.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_562.setTransform(-402,20.8);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.beginFill("#494A4E").beginStroke().moveTo(-15,32.5).lineTo(-15,-32.5).lineTo(15,-32.5).lineTo(15,32.5).closePath();
	this.shape_563.setTransform(-412,41.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_564.setTransform(-916,49.8);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_565.setTransform(-930,49.8);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_566.setTransform(-937,49.8);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_567.setTransform(-916,38.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_568.setTransform(-923,38.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_569.setTransform(-937,38.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_570.setTransform(-923,26.8);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_571.setTransform(-930,26.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_572.setTransform(-937,26.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_573.setTransform(-916,15.8);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_574.setTransform(-923,15.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_575.setTransform(-937,15.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.5,35.5).lineTo(-16.5,-35.5).lineTo(16.5,-35.5).lineTo(16.5,35.5).closePath();
	this.shape_576.setTransform(-926.5,38.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_577.setTransform(-836.5,47.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_578.setTransform(-845.5,47.3);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_579.setTransform(-854.5,47.3);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_580.setTransform(-877.5,47.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_581.setTransform(-886.5,47.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_582.setTransform(-895.5,47.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_583.setTransform(-836.5,22.3);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_584.setTransform(-845.5,22.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_585.setTransform(-854.5,22.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_586.setTransform(-836.5,-2.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_587.setTransform(-845.5,-2.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7).lineTo(-1.5,-7).lineTo(1.5,-7).lineTo(1.5,7).closePath();
	this.shape_588.setTransform(-854.5,-2.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.beginFill("#494A4E").beginStroke().moveTo(-39.8,58.5).lineTo(-39.8,11.5).lineTo(-42.2,11.5).curveTo(-42.2,4.1,-37.4,-1.6).curveTo(-32.6,-7.2,-25.8,-8.1).lineTo(-25.8,-14.5).lineTo(-21.8,-14.5).lineTo(-21.8,-8.2).curveTo(-11.8,-7.5,-6.8,1).lineTo(-6.8,-12.5).lineTo(1.2,-12.5).lineTo(1.2,-29.5).lineTo(-1.2,-29.5).curveTo(-1.2,-37.5,4.1,-43.2).curveTo(9.2,-48.6,16.2,-49.3).lineTo(16.2,-58.5).lineTo(20.2,-58.5).lineTo(20.2,-49.2).curveTo(27.7,-48.2,32.6,-42.6).curveTo(37.5,-37,37.5,-29.5).lineTo(34.2,-29.5).lineTo(34.2,-12.5).lineTo(42.2,-12.5).lineTo(42.2,56.5).lineTo(-0.8,56.5).lineTo(-0.8,58.5).closePath().moveTo(25.2,36.5).lineTo(28.2,36.5).lineTo(28.2,22.5).lineTo(25.2,22.5).closePath().moveTo(16.2,36.5).lineTo(19.2,36.5).lineTo(19.2,22.5).lineTo(16.2,22.5).closePath().moveTo(7.2,36.5).lineTo(10.2,36.5).lineTo(10.2,22.5).lineTo(7.2,22.5).closePath().moveTo(-15.8,36.5).lineTo(-12.8,36.5).lineTo(-12.8,22.5).lineTo(-15.8,22.5).closePath().moveTo(-24.8,36.5).lineTo(-21.8,36.5).lineTo(-21.8,22.5).lineTo(-24.8,22.5).closePath().moveTo(-33.8,36.5).lineTo(-30.8,36.5).lineTo(-30.8,22.5).lineTo(-33.8,22.5).closePath().moveTo(25.2,11.5).lineTo(28.2,11.5).lineTo(28.2,-2.5).lineTo(25.2,-2.5).closePath().moveTo(16.2,11.5).lineTo(19.2,11.5).lineTo(19.2,-2.5).lineTo(16.2,-2.5).closePath().moveTo(7.2,11.5).lineTo(10.2,11.5).lineTo(10.2,-2.5).lineTo(7.2,-2.5).closePath().moveTo(25.2,-13.5).lineTo(28.2,-13.5).lineTo(28.2,-27.5).lineTo(25.2,-27.5).closePath().moveTo(16.2,-13.5).lineTo(19.2,-13.5).lineTo(19.2,-27.5).lineTo(16.2,-27.5).closePath().moveTo(7.2,-13.5).lineTo(10.2,-13.5).lineTo(10.2,-27.5).lineTo(7.2,-27.5).closePath();
	this.shape_589.setTransform(-863.2,17.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_590.setTransform(-785,-45.7);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_591.setTransform(-793,-45.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_592.setTransform(-801,-45.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_593.setTransform(-785,56.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_594.setTransform(-793,56.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_595.setTransform(-801,56.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_596.setTransform(-785,42.3);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_597.setTransform(-793,42.3);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_598.setTransform(-801,42.3);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_599.setTransform(-785,28.3);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_600.setTransform(-793,28.3);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_601.setTransform(-801,28.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_602.setTransform(-785,14.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_603.setTransform(-793,14.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_604.setTransform(-801,14.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_605.setTransform(-785,0.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_606.setTransform(-793,0.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_607.setTransform(-801,0.3);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_608.setTransform(-785,-13.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_609.setTransform(-793,-13.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_610.setTransform(-801,-13.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_611.setTransform(-785,-27.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_612.setTransform(-793,-27.7);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_613.setTransform(-801,-27.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.beginFill("#494A4E").beginStroke().moveTo(-21,72.5).lineTo(-21,-41.5).lineTo(-14,-41.5).lineTo(-14,-61.5).lineTo(-2,-61.5).lineTo(-2,-72.5).lineTo(2,-72.5).lineTo(2,-61.5).lineTo(15,-61.5).lineTo(15,-41.5).lineTo(21,-41.5).lineTo(21,72.5).closePath().moveTo(6,55.5).lineTo(10,55.5).lineTo(10,47.5).lineTo(6,47.5).closePath().moveTo(-2,55.5).lineTo(2,55.5).lineTo(2,47.5).lineTo(-2,47.5).closePath().moveTo(-10,55.5).lineTo(-6,55.5).lineTo(-6,47.5).lineTo(-10,47.5).closePath().moveTo(6,41.5).lineTo(10,41.5).lineTo(10,33.5).lineTo(6,33.5).closePath().moveTo(-2,41.5).lineTo(2,41.5).lineTo(2,33.5).lineTo(-2,33.5).closePath().moveTo(-10,41.5).lineTo(-6,41.5).lineTo(-6,33.5).lineTo(-10,33.5).closePath().moveTo(6,27.5).lineTo(10,27.5).lineTo(10,19.5).lineTo(6,19.5).closePath().moveTo(-2,27.5).lineTo(2,27.5).lineTo(2,19.5).lineTo(-2,19.5).closePath().moveTo(-10,27.5).lineTo(-6,27.5).lineTo(-6,19.5).lineTo(-10,19.5).closePath().moveTo(6,13.5).lineTo(10,13.5).lineTo(10,5.5).lineTo(6,5.5).closePath().moveTo(-2,13.5).lineTo(2,13.5).lineTo(2,5.5).lineTo(-2,5.5).closePath().moveTo(-10,13.5).lineTo(-6,13.5).lineTo(-6,5.5).lineTo(-10,5.5).closePath().moveTo(6,-0.5).lineTo(10,-0.5).lineTo(10,-8.5).lineTo(6,-8.5).closePath().moveTo(-2,-0.5).lineTo(2,-0.5).lineTo(2,-8.5).lineTo(-2,-8.5).closePath().moveTo(-10,-0.5).lineTo(-6,-0.5).lineTo(-6,-8.5).lineTo(-10,-8.5).closePath().moveTo(6,-14.5).lineTo(10,-14.5).lineTo(10,-22.5).lineTo(6,-22.5).closePath().moveTo(-2,-14.5).lineTo(2,-14.5).lineTo(2,-22.5).lineTo(-2,-22.5).closePath().moveTo(-10,-14.5).lineTo(-6,-14.5).lineTo(-6,-22.5).lineTo(-10,-22.5).closePath().moveTo(6,-28.5).lineTo(10,-28.5).lineTo(10,-36.5).lineTo(6,-36.5).closePath().moveTo(-2,-28.5).lineTo(2,-28.5).lineTo(2,-36.5).lineTo(-2,-36.5).closePath().moveTo(-10,-28.5).lineTo(-6,-28.5).lineTo(-6,-36.5).lineTo(-10,-36.5).closePath().moveTo(6,-46.5).lineTo(10,-46.5).lineTo(10,-54.5).lineTo(6,-54.5).closePath().moveTo(-2,-46.5).lineTo(2,-46.5).lineTo(2,-54.5).lineTo(-2,-54.5).closePath().moveTo(-10,-46.5).lineTo(-6,-46.5).lineTo(-6,-54.5).lineTo(-10,-54.5).closePath();
	this.shape_614.setTransform(-793,4.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_615.setTransform(-548,60.8);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_616.setTransform(-548,53.8);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_617.setTransform(-548,46.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_618.setTransform(-548,39.8);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_619.setTransform(-548,32.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_620.setTransform(-548,25.8);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_621.setTransform(-548,18.8);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_622.setTransform(-548,11.8);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_623.setTransform(-556,60.8);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_624.setTransform(-556,53.8);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_625.setTransform(-556,46.8);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_626.setTransform(-556,39.8);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_627.setTransform(-556,32.8);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_628.setTransform(-556,25.8);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_629.setTransform(-556,18.8);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_630.setTransform(-556,11.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_631.setTransform(-540,60.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_632.setTransform(-540,53.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_633.setTransform(-540,46.8);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_634.setTransform(-540,39.8);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_635.setTransform(-540,32.8);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_636.setTransform(-540,25.8);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_637.setTransform(-540,18.8);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_638.setTransform(-540,11.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,38).lineTo(-22,-38).lineTo(22,-38).lineTo(22,38).closePath();
	this.shape_639.setTransform(-547.6,38.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_640.setTransform(-806,54.8);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_641.setTransform(-726,34.8);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_642.setTransform(-736,34.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_643.setTransform(-747,34.8);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_644.setTransform(-757.5,34.8);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_645.setTransform(-726,24.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_646.setTransform(-736,24.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_647.setTransform(-757.5,24.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_648.setTransform(-726,14.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_649.setTransform(-736,14.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_650.setTransform(-747,14.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_651.setTransform(-726,4.8);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_652.setTransform(-736,4.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_653.setTransform(-747,4.8);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_654.setTransform(-757.5,4.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_655.setTransform(-726,-5.2);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_656.setTransform(-747,-5.2);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_657.setTransform(-757.5,-5.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_658.setTransform(-726,-15.2);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_659.setTransform(-736,-15.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_660.setTransform(-747,-15.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_661.setTransform(-726,-25.2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_662.setTransform(-736,-25.2);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_663.setTransform(-747,-25.2);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_664.setTransform(-757.5,-25.2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_665.setTransform(-726,-35.2);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_666.setTransform(-747,-35.2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_667.setTransform(-757.5,-35.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_668.setTransform(-585,60.3);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_669.setTransform(-600.6,60.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_670.setTransform(-585,54.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_671.setTransform(-600.6,54.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_672.setTransform(-585,48.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_673.setTransform(-600.6,48.3);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_674.setTransform(-585,36.3);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_675.setTransform(-600.6,36.3);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_676.setTransform(-585,30.3);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_677.setTransform(-600.6,30.3);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_678.setTransform(-585,24.3);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_679.setTransform(-600.6,24.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_680.setTransform(-600.6,12.3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_681.setTransform(-585,12.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_682.setTransform(-600.6,6.3);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_683.setTransform(-585,6.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_684.setTransform(-585,0.3);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_685.setTransform(-600.6,0.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_686.setTransform(-585,-5.7);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_687.setTransform(-600.6,-5.7);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_688.setTransform(-585,-11.7);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_689.setTransform(-600.6,-11.7);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_690.setTransform(-585,-17.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_691.setTransform(-600.6,-17.7);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_692.setTransform(-585,-23.7);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_693.setTransform(-600.6,-23.7);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_694.setTransform(-585,-29.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_695.setTransform(-600.6,-29.7);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_696.setTransform(-585,-41.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_697.setTransform(-600.6,-41.7);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.5,1.5).lineTo(-5.5,-1.5).lineTo(5.5,-1.5).lineTo(5.5,1.5).closePath();
	this.shape_698.setTransform(-600.6,-47.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.9,1.5).lineTo(-4.9,-1.5).lineTo(4.9,-1.5).lineTo(4.9,1.5).closePath();
	this.shape_699.setTransform(-585,-47.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,67).lineTo(-19,-67).lineTo(19,-67).lineTo(19,67).closePath();
	this.shape_700.setTransform(-593.1,9.8);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_701.setTransform(-681.5,49.8);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_702.setTransform(-688.5,49.8);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_703.setTransform(-695.5,49.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_704.setTransform(-702.5,49.8);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_705.setTransform(-681.5,30.8);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_706.setTransform(-688.5,30.8);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_707.setTransform(-695.5,30.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_708.setTransform(-702.5,30.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_709.setTransform(-681.5,13.8);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_710.setTransform(-688.5,13.8);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_711.setTransform(-695.5,13.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_712.setTransform(-702.5,13.8);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_713.setTransform(-681.5,-5.2);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_714.setTransform(-688.5,-5.2);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_715.setTransform(-695.5,-5.2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,7.5).lineTo(-1.5,-7.5).lineTo(1.5,-7.5).lineTo(1.5,7.5).closePath();
	this.shape_716.setTransform(-702.5,-5.2);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.3,51.4).lineTo(-19.3,-51.4).lineTo(19.4,-51.4).lineTo(19.4,51.4).closePath();
	this.shape_717.setTransform(-691.2,25.4);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,8.5).lineTo(-2.5,-8.5).lineTo(2.5,-8.5).lineTo(2.5,8.5).closePath();
	this.shape_718.setTransform(-624.5,42.8);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,8.5).lineTo(-2.5,-8.5).lineTo(2.5,-8.5).lineTo(2.5,8.5).closePath();
	this.shape_719.setTransform(-633.5,42.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,8.5).lineTo(-2.5,-8.5).lineTo(2.5,-8.5).lineTo(2.5,8.5).closePath();
	this.shape_720.setTransform(-641.5,42.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,8.5).lineTo(-2.5,-8.5).lineTo(2.5,-8.5).lineTo(2.5,8.5).closePath();
	this.shape_721.setTransform(-658.5,42.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_722.setTransform(-624.5,21.3);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_723.setTransform(-641.5,21.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_724.setTransform(-650.5,21.3);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_725.setTransform(-658.5,21.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_726.setTransform(-633.5,-0.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_727.setTransform(-641.5,-0.7);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_728.setTransform(-658.5,-0.7);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_729.setTransform(-624.5,-22.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_730.setTransform(-633.5,-22.7);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_731.setTransform(-650.5,-22.7);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,9).closePath();
	this.shape_732.setTransform(-658.5,-22.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.2,61.9).lineTo(-23.2,-61.9).lineTo(23.2,-61.9).lineTo(23.2,61.9).closePath();
	this.shape_733.setTransform(-641.4,14.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,65.5).lineTo(-24.5,-65.5).lineTo(24.5,-65.5).lineTo(24.5,65.5).closePath();
	this.shape_734.setTransform(-741.1,9.3);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.beginFill("#494A4E").beginStroke().moveTo(-334.5,4.5).lineTo(-334.5,-4.5).lineTo(334.5,-4.5).lineTo(334.5,4.5).closePath();
	this.shape_735.setTransform(-657.5,76.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_736.setTransform(12,64.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_737.setTransform(12,57.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_738.setTransform(12,50.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_739.setTransform(12,43.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_740.setTransform(12,36.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_741.setTransform(12,29.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_742.setTransform(12,22.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_743.setTransform(12,15.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_744.setTransform(12,8.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_745.setTransform(12,1.8);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_746.setTransform(20,64.8);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_747.setTransform(20,57.8);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_748.setTransform(20,50.8);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_749.setTransform(20,43.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_750.setTransform(20,36.8);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_751.setTransform(20,29.8);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_752.setTransform(20,22.8);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_753.setTransform(20,15.8);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_754.setTransform(20,8.8);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,2.5).lineTo(-2,-2.5).lineTo(2,-2.5).lineTo(2,2.5).closePath();
	this.shape_755.setTransform(20,1.8);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,48).lineTo(-22,-35).lineTo(-11,-35).lineTo(-11,-48).lineTo(-6,-48).lineTo(-6,-35).lineTo(-3,-35).lineTo(-3,-43).lineTo(2,-43).lineTo(2,-35).lineTo(22,-35).lineTo(22,48).closePath().moveTo(6,41).lineTo(10,41).lineTo(10,36).lineTo(6,36).closePath().moveTo(-2,41).lineTo(2,41).lineTo(2,36).lineTo(-2,36).closePath().moveTo(6,34).lineTo(10,34).lineTo(10,29).lineTo(6,29).closePath().moveTo(-2,34).lineTo(2,34).lineTo(2,29).lineTo(-2,29).closePath().moveTo(6,27).lineTo(10,27).lineTo(10,22).lineTo(6,22).closePath().moveTo(-2,27).lineTo(2,27).lineTo(2,22).lineTo(-2,22).closePath().moveTo(6,20).lineTo(10,20).lineTo(10,15).lineTo(6,15).closePath().moveTo(-2,20).lineTo(2,20).lineTo(2,15).lineTo(-2,15).closePath().moveTo(6,13).lineTo(10,13).lineTo(10,8).lineTo(6,8).closePath().moveTo(-2,13).lineTo(2,13).lineTo(2,8).lineTo(-2,8).closePath().moveTo(6,6).lineTo(10,6).lineTo(10,1).lineTo(6,1).closePath().moveTo(-2,6).lineTo(2,6).lineTo(2,1).lineTo(-2,1).closePath().moveTo(6,-1).lineTo(10,-1).lineTo(10,-6).lineTo(6,-6).closePath().moveTo(-2,-1).lineTo(2,-1).lineTo(2,-6).lineTo(-2,-6).closePath().moveTo(6,-8).lineTo(10,-8).lineTo(10,-13).lineTo(6,-13).closePath().moveTo(-2,-8).lineTo(2,-8).lineTo(2,-13).lineTo(-2,-13).closePath().moveTo(6,-15).lineTo(10,-15).lineTo(10,-20).lineTo(6,-20).closePath().moveTo(-2,-15).lineTo(2,-15).lineTo(2,-20).lineTo(-2,-20).closePath().moveTo(6,-22).lineTo(10,-22).lineTo(10,-27).lineTo(6,-27).closePath().moveTo(-2,-22).lineTo(2,-22).lineTo(2,-27).lineTo(-2,-27).closePath();
	this.shape_756.setTransform(12,26.3);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_757.setTransform(-338.5,-12.7);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_758.setTransform(-329,53.8);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_759.setTransform(-329,45.8);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_760.setTransform(-329,37.8);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_761.setTransform(-329,29.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_762.setTransform(-329,21.8);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_763.setTransform(-329,13.8);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_764.setTransform(-329,5.8);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14,1.5).lineTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,1.5).closePath();
	this.shape_765.setTransform(-329,-2.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,41.5).lineTo(-18,-41.5).lineTo(-12,-41.5).lineTo(-12,-40.5).lineTo(-7,-40.5).lineTo(-7,-41.5).lineTo(18,-41.5).lineTo(18,41.5).closePath().moveTo(-14,22.5).lineTo(14,22.5).lineTo(14,19.5).lineTo(-14,19.5).closePath().moveTo(-14,14.5).lineTo(14,14.5).lineTo(14,11.5).lineTo(-14,11.5).closePath().moveTo(-14,6.5).lineTo(14,6.5).lineTo(14,3.5).lineTo(-14,3.5).closePath().moveTo(-14,-1.5).lineTo(14,-1.5).lineTo(14,-4.5).lineTo(-14,-4.5).closePath().moveTo(-14,-9.5).lineTo(14,-9.5).lineTo(14,-12.5).lineTo(-14,-12.5).closePath().moveTo(-14,-17.5).lineTo(14,-17.5).lineTo(14,-20.5).lineTo(-14,-20.5).closePath().moveTo(-14,-25.5).lineTo(14,-25.5).lineTo(14,-28.5).lineTo(-14,-28.5).closePath().moveTo(-14,-33.5).lineTo(14,-33.5).lineTo(14,-36.5).lineTo(-14,-36.5).closePath();
	this.shape_766.setTransform(-329,32.8);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_767.setTransform(-369.2,61.8);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_768.setTransform(-360,53.8);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_769.setTransform(-360,45.8);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_770.setTransform(-360,37.8);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_771.setTransform(-360,21.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_772.setTransform(-360,13.8);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_773.setTransform(-379,61.8);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_774.setTransform(-369.2,53.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_775.setTransform(-379,53.8);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_776.setTransform(-369.2,45.8);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_777.setTransform(-369.2,37.8);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_778.setTransform(-379,37.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_779.setTransform(-369.2,29.8);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_780.setTransform(-379,29.8);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_781.setTransform(-369.2,21.8);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.4,1.5).lineTo(-3.4,-1.5).lineTo(3.4,-1.5).lineTo(3.4,1.5).closePath();
	this.shape_782.setTransform(-369.2,13.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.6,1.5).lineTo(-3.6,-1.5).lineTo(3.6,-1.5).lineTo(3.6,1.5).closePath();
	this.shape_783.setTransform(-379,13.8);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,36).lineTo(-18,-36).lineTo(18,-36).lineTo(18,36).closePath();
	this.shape_784.setTransform(-369.2,43.3);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_785.setTransform(64.1,61.8);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_786.setTransform(47.8,61.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_787.setTransform(64.1,53.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_788.setTransform(47.8,53.8);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_789.setTransform(47.8,45.8);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_790.setTransform(64.1,45.8);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_791.setTransform(64.1,37.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_792.setTransform(47.8,37.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_793.setTransform(64.1,29.8);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_794.setTransform(47.8,29.8);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_795.setTransform(64.1,21.8);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_796.setTransform(47.8,21.8);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.6,1.5).lineTo(-5.6,-1.5).lineTo(5.6,-1.5).lineTo(5.6,1.5).closePath();
	this.shape_797.setTransform(64.1,13.8);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6,1.5).lineTo(-6,-1.5).lineTo(6,-1.5).lineTo(6,1.5).closePath();
	this.shape_798.setTransform(47.8,13.8);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,36).lineTo(-18,-36).lineTo(18,-36).lineTo(18,36).closePath();
	this.shape_799.setTransform(55.8,43.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_800.setTransform(-71.5,-49.7);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_801.setTransform(-80.5,-49.7);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_802.setTransform(-89.5,-49.7);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_803.setTransform(-62.5,57.3);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_804.setTransform(-71.5,57.3);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_805.setTransform(-80.5,57.3);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_806.setTransform(-89.5,57.3);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_807.setTransform(-98.5,57.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_808.setTransform(-62.5,42.3);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_809.setTransform(-71.5,42.3);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_810.setTransform(-89.5,42.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_811.setTransform(-98.5,42.3);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_812.setTransform(-62.5,27.3);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_813.setTransform(-71.5,27.3);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_814.setTransform(-80.5,27.3);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_815.setTransform(-98.5,27.3);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_816.setTransform(-62.5,12.3);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_817.setTransform(-71.5,12.3);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_818.setTransform(-80.5,12.3);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_819.setTransform(-89.5,12.3);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_820.setTransform(-98.5,12.3);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_821.setTransform(-62.5,-2.7);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_822.setTransform(-71.5,-2.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_823.setTransform(-80.5,-2.7);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_824.setTransform(-98.5,-2.7);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_825.setTransform(-62.5,-17.7);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_826.setTransform(-80.5,-17.7);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_827.setTransform(-89.5,-17.7);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_828.setTransform(-98.5,-17.7);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_829.setTransform(-62.5,-32.7);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_830.setTransform(-71.5,-32.7);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_831.setTransform(-80.5,-32.7);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_832.setTransform(-89.5,-32.7);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,5).lineTo(-2.5,-5).lineTo(2.5,-5).lineTo(2.5,5).closePath();
	this.shape_833.setTransform(-98.5,-32.7);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,79).lineTo(-24.5,-43).lineTo(-16.5,-43).lineTo(-16.5,-59).lineTo(-2.5,-59).lineTo(-2.5,-79).lineTo(2.5,-79).lineTo(2.5,-59).lineTo(17.5,-59).lineTo(17.5,-43).lineTo(24.5,-43).lineTo(24.5,79).closePath().moveTo(15.5,63).lineTo(20.5,63).lineTo(20.5,53).lineTo(15.5,53).closePath().moveTo(6.5,63).lineTo(11.5,63).lineTo(11.5,53).lineTo(6.5,53).closePath().moveTo(-2.5,63).lineTo(2.5,63).lineTo(2.5,53).lineTo(-2.5,53).closePath().moveTo(-11.5,63).lineTo(-6.5,63).lineTo(-6.5,53).lineTo(-11.5,53).closePath().moveTo(-20.5,63).lineTo(-15.5,63).lineTo(-15.5,53).lineTo(-20.5,53).closePath().moveTo(15.5,48).lineTo(20.5,48).lineTo(20.5,38).lineTo(15.5,38).closePath().moveTo(6.5,48).lineTo(11.5,48).lineTo(11.5,38).lineTo(6.5,38).closePath().moveTo(-11.5,48).lineTo(-6.5,48).lineTo(-6.5,38).lineTo(-11.5,38).closePath().moveTo(-20.5,48).lineTo(-15.5,48).lineTo(-15.5,38).lineTo(-20.5,38).closePath().moveTo(15.5,33).lineTo(20.5,33).lineTo(20.5,23).lineTo(15.5,23).closePath().moveTo(6.5,33).lineTo(11.5,33).lineTo(11.5,23).lineTo(6.5,23).closePath().moveTo(-2.5,33).lineTo(2.5,33).lineTo(2.5,23).lineTo(-2.5,23).closePath().moveTo(-20.5,33).lineTo(-15.5,33).lineTo(-15.5,23).lineTo(-20.5,23).closePath().moveTo(15.5,18).lineTo(20.5,18).lineTo(20.5,8).lineTo(15.5,8).closePath().moveTo(6.5,18).lineTo(11.5,18).lineTo(11.5,8).lineTo(6.5,8).closePath().moveTo(-2.5,18).lineTo(2.5,18).lineTo(2.5,8).lineTo(-2.5,8).closePath().moveTo(-11.5,18).lineTo(-6.5,18).lineTo(-6.5,8).lineTo(-11.5,8).closePath().moveTo(-20.5,18).lineTo(-15.5,18).lineTo(-15.5,8).lineTo(-20.5,8).closePath().moveTo(15.5,3).lineTo(20.5,3).lineTo(20.5,-7).lineTo(15.5,-7).closePath().moveTo(6.5,3).lineTo(11.5,3).lineTo(11.5,-7).lineTo(6.5,-7).closePath().moveTo(-2.5,3).lineTo(2.5,3).lineTo(2.5,-7).lineTo(-2.5,-7).closePath().moveTo(-20.5,3).lineTo(-15.5,3).lineTo(-15.5,-7).lineTo(-20.5,-7).closePath().moveTo(15.5,-12).lineTo(20.5,-12).lineTo(20.5,-22).lineTo(15.5,-22).closePath().moveTo(-2.5,-12).lineTo(2.5,-12).lineTo(2.5,-22).lineTo(-2.5,-22).closePath().moveTo(-11.5,-12).lineTo(-6.5,-12).lineTo(-6.5,-22).lineTo(-11.5,-22).closePath().moveTo(-20.5,-12).lineTo(-15.5,-12).lineTo(-15.5,-22).lineTo(-20.5,-22).closePath().moveTo(15.5,-27).lineTo(20.5,-27).lineTo(20.5,-37).lineTo(15.5,-37).closePath().moveTo(6.5,-27).lineTo(11.5,-27).lineTo(11.5,-37).lineTo(6.5,-37).closePath().moveTo(-2.5,-27).lineTo(2.5,-27).lineTo(2.5,-37).lineTo(-2.5,-37).closePath().moveTo(-11.5,-27).lineTo(-6.5,-27).lineTo(-6.5,-37).lineTo(-11.5,-37).closePath().moveTo(-20.5,-27).lineTo(-15.5,-27).lineTo(-15.5,-37).lineTo(-20.5,-37).closePath().moveTo(6.5,-44).lineTo(11.5,-44).lineTo(11.5,-54).lineTo(6.5,-54).closePath().moveTo(-2.5,-44).lineTo(2.5,-44).lineTo(2.5,-54).lineTo(-2.5,-54).closePath().moveTo(-11.5,-44).lineTo(-6.5,-44).lineTo(-6.5,-54).lineTo(-11.5,-54).closePath();
	this.shape_834.setTransform(-80.5,-0.7);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_835.setTransform(-222,56.8);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_836.setTransform(-232,56.8);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_837.setTransform(-253.5,56.8);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_838.setTransform(-232,46.8);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_839.setTransform(-243,46.8);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_840.setTransform(-253.5,46.8);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_841.setTransform(-222,36.8);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_842.setTransform(-232,36.8);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_843.setTransform(-243,36.8);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_844.setTransform(-222,26.8);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_845.setTransform(-232,26.8);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_846.setTransform(-243,26.8);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_847.setTransform(-253.5,26.8);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_848.setTransform(-222,16.8);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_849.setTransform(-243,16.8);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_850.setTransform(-253.5,16.8);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_851.setTransform(-222,6.8);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_852.setTransform(-232,6.8);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_853.setTransform(-243,6.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_854.setTransform(-253.5,6.8);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_855.setTransform(-222,-3.2);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_856.setTransform(-232,-3.2);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_857.setTransform(-243,-3.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_858.setTransform(-253.5,-3.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_859.setTransform(-222,-13.2);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_860.setTransform(-232,-13.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_861.setTransform(-243,-13.2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_862.setTransform(-222,-23.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_863.setTransform(-232,-23.2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_864.setTransform(-243,-23.2);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_865.setTransform(-253.5,-23.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_866.setTransform(-232,-33.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_867.setTransform(-253.5,-33.2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_868.setTransform(-222,-43.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_869.setTransform(-232,-43.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_870.setTransform(-243,-43.2);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_871.setTransform(-253.5,-43.2);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,77).lineTo(-24.5,-65).lineTo(-19.5,-65).lineTo(-19.5,-77).lineTo(8.5,-77).lineTo(8.5,-65).lineTo(24.5,-65).lineTo(24.5,77).closePath().moveTo(12.5,59).lineTo(18.5,59).lineTo(18.5,52).lineTo(12.5,52).closePath().moveTo(2.5,59).lineTo(8.5,59).lineTo(8.5,52).lineTo(2.5,52).closePath().moveTo(-19.5,59).lineTo(-12.5,59).lineTo(-12.5,52).lineTo(-19.5,52).closePath().moveTo(2.5,49).lineTo(8.5,49).lineTo(8.5,42).lineTo(2.5,42).closePath().moveTo(-8.5,49).lineTo(-2.5,49).lineTo(-2.5,42).lineTo(-8.5,42).closePath().moveTo(-19.5,49).lineTo(-12.5,49).lineTo(-12.5,42).lineTo(-19.5,42).closePath().moveTo(12.5,39).lineTo(18.5,39).lineTo(18.5,32).lineTo(12.5,32).closePath().moveTo(2.5,39).lineTo(8.5,39).lineTo(8.5,32).lineTo(2.5,32).closePath().moveTo(-8.5,39).lineTo(-2.5,39).lineTo(-2.5,32).lineTo(-8.5,32).closePath().moveTo(12.5,29).lineTo(18.5,29).lineTo(18.5,22).lineTo(12.5,22).closePath().moveTo(2.5,29).lineTo(8.5,29).lineTo(8.5,22).lineTo(2.5,22).closePath().moveTo(-8.5,29).lineTo(-2.5,29).lineTo(-2.5,22).lineTo(-8.5,22).closePath().moveTo(-19.5,29).lineTo(-12.5,29).lineTo(-12.5,22).lineTo(-19.5,22).closePath().moveTo(12.5,19).lineTo(18.5,19).lineTo(18.5,12).lineTo(12.5,12).closePath().moveTo(-8.5,19).lineTo(-2.5,19).lineTo(-2.5,12).lineTo(-8.5,12).closePath().moveTo(-19.5,19).lineTo(-12.5,19).lineTo(-12.5,12).lineTo(-19.5,12).closePath().moveTo(12.5,9).lineTo(18.5,9).lineTo(18.5,2).lineTo(12.5,2).closePath().moveTo(2.5,9).lineTo(8.5,9).lineTo(8.5,2).lineTo(2.5,2).closePath().moveTo(-8.5,9).lineTo(-2.5,9).lineTo(-2.5,2).lineTo(-8.5,2).closePath().moveTo(-19.5,9).lineTo(-12.5,9).lineTo(-12.5,2).lineTo(-19.5,2).closePath().moveTo(12.5,-1).lineTo(18.5,-1).lineTo(18.5,-8).lineTo(12.5,-8).closePath().moveTo(2.5,-1).lineTo(8.5,-1).lineTo(8.5,-8).lineTo(2.5,-8).closePath().moveTo(-8.5,-1).lineTo(-2.5,-1).lineTo(-2.5,-8).lineTo(-8.5,-8).closePath().moveTo(-19.5,-1).lineTo(-12.5,-1).lineTo(-12.5,-8).lineTo(-19.5,-8).closePath().moveTo(12.5,-11).lineTo(18.5,-11).lineTo(18.5,-18).lineTo(12.5,-18).closePath().moveTo(2.5,-11).lineTo(8.5,-11).lineTo(8.5,-18).lineTo(2.5,-18).closePath().moveTo(-8.5,-11).lineTo(-2.5,-11).lineTo(-2.5,-18).lineTo(-8.5,-18).closePath().moveTo(12.5,-21).lineTo(18.5,-21).lineTo(18.5,-28).lineTo(12.5,-28).closePath().moveTo(2.5,-21).lineTo(8.5,-21).lineTo(8.5,-28).lineTo(2.5,-28).closePath().moveTo(-8.5,-21).lineTo(-2.5,-21).lineTo(-2.5,-28).lineTo(-8.5,-28).closePath().moveTo(-19.5,-21).lineTo(-12.5,-21).lineTo(-12.5,-28).lineTo(-19.5,-28).closePath().moveTo(2.5,-31).lineTo(8.5,-31).lineTo(8.5,-38).lineTo(2.5,-38).closePath().moveTo(-19.5,-31).lineTo(-12.5,-31).lineTo(-12.5,-38).lineTo(-19.5,-38).closePath().moveTo(12.5,-41).lineTo(18.5,-41).lineTo(18.5,-48).lineTo(12.5,-48).closePath().moveTo(2.5,-41).lineTo(8.5,-41).lineTo(8.5,-48).lineTo(2.5,-48).closePath().moveTo(-8.5,-41).lineTo(-2.5,-41).lineTo(-2.5,-48).lineTo(-8.5,-48).closePath().moveTo(-19.5,-41).lineTo(-12.5,-41).lineTo(-12.5,-48).lineTo(-19.5,-48).closePath();
	this.shape_872.setTransform(-237.5,1.3);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_873.setTransform(-33,62.8);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_874.setTransform(-33,56.8);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_875.setTransform(-33,50.8);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_876.setTransform(-33,38.8);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_877.setTransform(-33,32.8);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_878.setTransform(-33,26.8);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_879.setTransform(-33,20.8);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_880.setTransform(-33,14.8);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_881.setTransform(-33,8.8);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_882.setTransform(-33,2.8);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_883.setTransform(-33,-3.2);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_884.setTransform(-33,-15.2);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_885.setTransform(-33,-21.2);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_886.setTransform(-33,-27.2);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_887.setTransform(-33,-33.2);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_888.setTransform(-33,-39.2);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_889.setTransform(-33,-45.2);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_890.setTransform(-33,-51.2);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15,1.5).lineTo(-15,-1.5).lineTo(15,-1.5).lineTo(15,1.5).closePath();
	this.shape_891.setTransform(-33,-57.2);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,80).lineTo(-19,-80).lineTo(19,-66).lineTo(19,80).closePath();
	this.shape_892.setTransform(-33,-1.7);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,9).lineTo(-2,-9).lineTo(2,-9).lineTo(2,9).closePath();
	this.shape_893.setTransform(-170,56.3);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,9).lineTo(-2,-9).lineTo(2,-9).lineTo(2,9).closePath();
	this.shape_894.setTransform(-186,56.3);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_895.setTransform(-170,35.8);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_896.setTransform(-186,35.8);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_897.setTransform(-194,35.8);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_898.setTransform(-170,14.8);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_899.setTransform(-178,14.8);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_900.setTransform(-194,14.8);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_901.setTransform(-170,-5.2);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_902.setTransform(-186,-5.2);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_903.setTransform(-194,-5.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_904.setTransform(-170,-26.2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_905.setTransform(-178,-26.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_906.setTransform(-194,-26.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,64).lineTo(-22,-64).lineTo(22,-64).lineTo(22,64).closePath();
	this.shape_907.setTransform(-186,14.3);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_908.setTransform(-271.5,66.3);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_909.setTransform(-286,66.3);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_910.setTransform(-300.5,66.3);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4.5).lineTo(-1.5,-4.5).lineTo(1.5,-4.5).lineTo(1.5,4.5).closePath();
	this.shape_911.setTransform(-271.5,56.8);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_912.setTransform(-279,56.8);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_913.setTransform(-286,56.8);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_914.setTransform(-293,56.8);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4.5).lineTo(-2.5,-4.5).lineTo(2.5,-4.5).lineTo(2.5,4.5).closePath();
	this.shape_915.setTransform(-300.5,56.8);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_916.setTransform(-279,47.3);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_917.setTransform(-286,47.3);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_918.setTransform(-271.5,37.8);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_919.setTransform(-286,37.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_920.setTransform(-293,37.8);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_921.setTransform(-300.5,37.8);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_922.setTransform(-271.5,29.3);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_923.setTransform(-279,29.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_924.setTransform(-286,29.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_925.setTransform(-300.5,29.3);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_926.setTransform(-271.5,19.3);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_927.setTransform(-286,19.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_928.setTransform(-300.5,19.3);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_929.setTransform(-271.5,10.3);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_930.setTransform(-279,10.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_931.setTransform(-286,10.3);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_932.setTransform(-293,10.3);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_933.setTransform(-300.5,10.3);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_934.setTransform(-271.5,0.3);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_935.setTransform(-279,0.3);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_936.setTransform(-286,0.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_937.setTransform(-300.5,0.3);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,4).lineTo(-1.5,-4).lineTo(1.5,-4).lineTo(1.5,4).closePath();
	this.shape_938.setTransform(-271.5,-8.7);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_939.setTransform(-286,-8.7);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4).lineTo(-2,-4).lineTo(2,-4).lineTo(2,4).closePath();
	this.shape_940.setTransform(-293,-8.7);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,4).lineTo(-2.5,-4).lineTo(2.5,-4).lineTo(2.5,4).closePath();
	this.shape_941.setTransform(-300.5,-8.7);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-1.5,3.5).lineTo(-1.5,-3.5).lineTo(1.5,-3.5).lineTo(1.5,3.5).closePath();
	this.shape_942.setTransform(-271.5,-18.2);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_943.setTransform(-279,-18.2);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,3.5).lineTo(-2,-3.5).lineTo(2,-3.5).lineTo(2,3.5).closePath();
	this.shape_944.setTransform(-286,-18.2);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,3.5).lineTo(-2.5,-3.5).lineTo(2.5,-3.5).lineTo(2.5,3.5).closePath();
	this.shape_945.setTransform(-300.5,-18.2);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.5,56.5).lineTo(-19.5,-56.5).lineTo(19.5,-56.5).lineTo(19.5,56.5).closePath();
	this.shape_946.setTransform(-286.5,21.8);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_947.setTransform(-116.5,53.8);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_948.setTransform(-134.5,53.8);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_949.setTransform(-143.5,53.8);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_950.setTransform(-152.5,53.8);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_951.setTransform(-116.5,30.8);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_952.setTransform(-125.5,30.8);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_953.setTransform(-134.5,30.8);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_954.setTransform(-152.5,30.8);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_955.setTransform(-116.5,7.8);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_956.setTransform(-125.5,7.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_957.setTransform(-134.5,7.8);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_958.setTransform(-143.5,7.8);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_959.setTransform(-152.5,7.8);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_960.setTransform(-125.5,-15.2);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_961.setTransform(-143.5,-15.2);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_962.setTransform(-152.5,-15.2);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_963.setTransform(-116.5,-38.2);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_964.setTransform(-125.5,-38.2);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_965.setTransform(-134.5,-38.2);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_966.setTransform(-143.5,-38.2);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,71).lineTo(-24.5,-71).lineTo(24.5,-71).lineTo(24.5,71).closePath();
	this.shape_967.setTransform(-134.5,7.3);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.beginFill("#494A4E").beginStroke().moveTo(-297,4.5).lineTo(-297,-4.5).lineTo(297,-4.5).lineTo(297,4.5).closePath();
	this.shape_968.setTransform(-107,76.8);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.5,72).lineTo(-11,71.2).lineTo(-3.8,13.7).lineTo(-6.9,-27.8).curveTo(-9.5,-29,-11,-30.7).curveTo(-12.7,-32.6,-12.6,-34.8).curveTo(-12.6,-37.9,-9.4,-40.3).curveTo(-6.2,-42.6,-1.6,-42.9).lineTo(-1.6,-72).lineTo(1.4,-72).lineTo(1.4,-42.9).curveTo(6.5,-42.6,9.5,-40.2).curveTo(12.3,-38,12.3,-34.8).curveTo(12.3,-32.6,10.9,-30.7).curveTo(9.4,-29,6.8,-27.8).lineTo(3.8,13.7).lineTo(11,71.2).lineTo(13.5,72).closePath();
	this.shape_969.setTransform(440.6,3.3);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_970.setTransform(391.5,-18.2);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_971.setTransform(382.5,-18.2);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_972.setTransform(409.5,7.8);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_973.setTransform(400.5,7.8);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_974.setTransform(382.5,7.8);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_975.setTransform(409.5,33.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_976.setTransform(391.5,33.8);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.5,9.5).lineTo(-2.5,-9.5).lineTo(2.5,-9.5).lineTo(2.5,9.5).closePath();
	this.shape_977.setTransform(382.5,33.8);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.2,67).lineTo(-23.2,-67).lineTo(-15.9,-62.9).curveTo(-7.3,-57.6,0,-51.4).curveTo(23.2,-31.7,23.2,-10.3).lineTo(23.2,67).closePath();
	this.shape_978.setTransform(396.2,7.3);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_979.setTransform(307,-20.2);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_980.setTransform(299,-20.2);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_981.setTransform(291,-20.2);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_982.setTransform(307,2.8);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_983.setTransform(299,2.8);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_984.setTransform(291,2.8);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_985.setTransform(315,32.8);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_986.setTransform(307,32.8);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_987.setTransform(299,32.8);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_988.setTransform(291,32.8);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,10.5).lineTo(-2,-10.5).lineTo(2,-10.5).lineTo(2,10.5).closePath();
	this.shape_989.setTransform(283,32.8);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.5,68).lineTo(-23.5,6).lineTo(-18.5,6).lineTo(-18.5,-40).lineTo(-12.5,-40).lineTo(-12.5,-52).lineTo(-3.5,-52).lineTo(-3.5,-68).lineTo(3.5,-68).lineTo(3.5,-52).lineTo(12.5,-52).lineTo(12.5,-40).lineTo(18.5,-40).lineTo(18.5,6).lineTo(23.5,6).lineTo(23.5,68).closePath().moveTo(13.5,38).lineTo(17.5,38).lineTo(17.5,17).lineTo(13.5,17).closePath().moveTo(5.5,38).lineTo(9.5,38).lineTo(9.5,17).lineTo(5.5,17).closePath().moveTo(-2.5,38).lineTo(1.5,38).lineTo(1.5,17).lineTo(-2.5,17).closePath().moveTo(-10.5,38).lineTo(-6.5,38).lineTo(-6.5,17).lineTo(-10.5,17).closePath().moveTo(-18.5,38).lineTo(-14.5,38).lineTo(-14.5,17).lineTo(-18.5,17).closePath().moveTo(5.5,6).lineTo(9.5,6).lineTo(9.5,-11).lineTo(5.5,-11).closePath().moveTo(-2.5,6).lineTo(1.5,6).lineTo(1.5,-11).lineTo(-2.5,-11).closePath().moveTo(-10.5,6).lineTo(-6.5,6).lineTo(-6.5,-11).lineTo(-10.5,-11).closePath().moveTo(5.5,-17).lineTo(9.5,-17).lineTo(9.5,-34).lineTo(5.5,-34).closePath().moveTo(-2.5,-17).lineTo(1.5,-17).lineTo(1.5,-34).lineTo(-2.5,-34).closePath().moveTo(-10.5,-17).lineTo(-6.5,-17).lineTo(-6.5,-34).lineTo(-10.5,-34).closePath();
	this.shape_990.setTransform(299.5,5.3);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_991.setTransform(104,56.8);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_992.setTransform(93,56.8);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_993.setTransform(104,43.8);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_994.setTransform(115,43.8);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_995.setTransform(93,43.8);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_996.setTransform(115,30.8);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_997.setTransform(93,30.8);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_998.setTransform(104,17.8);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_999.setTransform(115,17.8);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1000.setTransform(93,17.8);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1001.setTransform(104,4.8);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1002.setTransform(93,4.8);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1003.setTransform(104,-8.2);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1004.setTransform(115,-8.2);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1005.setTransform(104,-21.2);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1006.setTransform(115,-21.2);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1007.setTransform(93,-21.2);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1008.setTransform(104,-34.2);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_1009.setTransform(93,-34.2);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,64).lineTo(-18,-55).lineTo(7,-55).lineTo(7,-64).lineTo(14,-64).lineTo(14,-55).lineTo(18,-55).lineTo(18,64).closePath().moveTo(-4,51).lineTo(4,51).lineTo(4,42).lineTo(-4,42).closePath().moveTo(-15,51).lineTo(-7,51).lineTo(-7,42).lineTo(-15,42).closePath().moveTo(7,38).lineTo(15,38).lineTo(15,29).lineTo(7,29).closePath().moveTo(-4,38).lineTo(4,38).lineTo(4,29).lineTo(-4,29).closePath().moveTo(-15,38).lineTo(-7,38).lineTo(-7,29).lineTo(-15,29).closePath().moveTo(7,25).lineTo(15,25).lineTo(15,16).lineTo(7,16).closePath().moveTo(-15,25).lineTo(-7,25).lineTo(-7,16).lineTo(-15,16).closePath().moveTo(7,12).lineTo(15,12).lineTo(15,3).lineTo(7,3).closePath().moveTo(-4,12).lineTo(4,12).lineTo(4,3).lineTo(-4,3).closePath().moveTo(-15,12).lineTo(-7,12).lineTo(-7,3).lineTo(-15,3).closePath().moveTo(-4,-1).lineTo(4,-1).lineTo(4,-10).lineTo(-4,-10).closePath().moveTo(-15,-1).lineTo(-7,-1).lineTo(-7,-10).lineTo(-15,-10).closePath().moveTo(7,-14).lineTo(15,-14).lineTo(15,-23).lineTo(7,-23).closePath().moveTo(-4,-14).lineTo(4,-14).lineTo(4,-23).lineTo(-4,-23).closePath().moveTo(7,-27).lineTo(15,-27).lineTo(15,-36).lineTo(7,-36).closePath().moveTo(-4,-27).lineTo(4,-27).lineTo(4,-36).lineTo(-4,-36).closePath().moveTo(-15,-27).lineTo(-7,-27).lineTo(-7,-36).lineTo(-15,-36).closePath().moveTo(-4,-40).lineTo(4,-40).lineTo(4,-49).lineTo(-4,-49).closePath().moveTo(-15,-40).lineTo(-7,-40).lineTo(-7,-49).lineTo(-15,-49).closePath();
	this.shape_1010.setTransform(104,10.3);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_1011.setTransform(154,59.8);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_1012.setTransform(140,59.8);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_1013.setTransform(133,59.8);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_1014.setTransform(154,47.8);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_1015.setTransform(147,47.8);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,4.5).lineTo(-2,-4.5).lineTo(2,-4.5).lineTo(2,4.5).closePath();
	this.shape_1016.setTransform(133,47.8);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.5,18.5).lineTo(-16.5,-18.5).lineTo(16.5,-18.5).lineTo(16.5,18.5).closePath();
	this.shape_1017.setTransform(143.5,56.8);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_1018.setTransform(347.5,49.8);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_1019.setTransform(347.5,39.8);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_1020.setTransform(347.5,29.8);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,1.5).lineTo(-14.5,-1.5).lineTo(14.5,-1.5).lineTo(14.5,1.5).closePath();
	this.shape_1021.setTransform(347.5,19.8);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_1022.setTransform(347.5,10.3);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_1023.setTransform(347.5,0.3);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_1024.setTransform(347.5,-9.7);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-14.5,2).lineTo(-14.5,-2).lineTo(14.5,-2).lineTo(14.5,2).closePath();
	this.shape_1025.setTransform(347.5,-19.7);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,51.5).lineTo(-19,-51.5).lineTo(19,-51.5).lineTo(19,51.5).closePath();
	this.shape_1026.setTransform(348,23.8);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1027.setTransform(210,61.8);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1028.setTransform(199.5,61.8);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1029.setTransform(210,51.8);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1030.setTransform(210,41.8);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1031.setTransform(199.5,41.8);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1032.setTransform(210,31.8);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1033.setTransform(199.5,31.8);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1034.setTransform(210,21.8);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1035.setTransform(210,11.8);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1036.setTransform(199.5,11.8);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1037.setTransform(199.5,1.8);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1038.setTransform(210,-8.2);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1039.setTransform(199.5,-8.2);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1040.setTransform(210,-18.2);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1041.setTransform(210,-28.2);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1042.setTransform(199.5,-28.2);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1043.setTransform(210,-38.2);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1044.setTransform(189,61.8);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1045.setTransform(189,51.8);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1046.setTransform(178.5,51.8);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1047.setTransform(189,41.8);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1048.setTransform(189,31.8);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1049.setTransform(178.5,31.8);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1050.setTransform(189,21.8);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1051.setTransform(178.5,21.8);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1052.setTransform(189,11.8);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1053.setTransform(178.5,11.8);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1054.setTransform(189,1.8);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1055.setTransform(189,-8.2);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1056.setTransform(178.5,-8.2);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1057.setTransform(189,-18.2);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1058.setTransform(178.5,-18.2);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1059.setTransform(189,-28.2);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3,3.5).lineTo(-3,-3.5).lineTo(3,-3.5).lineTo(3,3.5).closePath();
	this.shape_1060.setTransform(189,-38.2);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.5,3.5).lineTo(-3.5,-3.5).lineTo(3.5,-3.5).lineTo(3.5,3.5).closePath();
	this.shape_1061.setTransform(178.5,-38.2);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.5,65.5).lineTo(-24.5,-65.5).lineTo(24.5,-65.5).lineTo(24.5,65.5).closePath();
	this.shape_1062.setTransform(194.6,6.8);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1063.setTransform(264,42.8);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1064.setTransform(248,42.8);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1065.setTransform(240,42.8);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1066.setTransform(264,22.8);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1067.setTransform(256,22.8);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1068.setTransform(240,22.8);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1069.setTransform(256,-17.2);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1070.setTransform(248,-17.2);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1071.setTransform(240,-17.2);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1072.setTransform(264,2.8);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1073.setTransform(256,2.8);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2,8.5).lineTo(-2,-8.5).lineTo(2,-8.5).lineTo(2,8.5).closePath();
	this.shape_1074.setTransform(248,2.8);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,58.5).lineTo(-22,-58.5).lineTo(22,-58.5).lineTo(22,58.5).closePath();
	this.shape_1075.setTransform(248.1,16.8);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_1076.setTransform(471.7,65.5);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_1077.setTransform(489.2,60);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_1078.setTransform(471.7,60);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_1079.setTransform(489.2,49);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_1080.setTransform(471.7,43.5);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_1081.setTransform(489.2,38);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_1082.setTransform(471.7,38);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_1083.setTransform(471.7,27);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_1084.setTransform(489.2,21.5);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_1085.setTransform(489.2,16);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_1086.setTransform(471.7,16);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_1087.setTransform(489.2,5);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_1088.setTransform(471.7,5);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_1089.setTransform(489.2,-6);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_1090.setTransform(489.2,-11.5);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_1091.setTransform(471.7,-17);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,-1.5).lineTo(4.7,-1.5).lineTo(4.7,1.5).closePath();
	this.shape_1092.setTransform(489.2,-17);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1.5).lineTo(-4.8,-1.5).lineTo(4.8,-1.5).lineTo(4.8,1.5).closePath();
	this.shape_1093.setTransform(471.7,-28);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.7,1).lineTo(-4.7,-1).lineTo(4.7,-1).lineTo(4.7,1).closePath();
	this.shape_1094.setTransform(489.2,-33.5);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.8,1).lineTo(-4.8,-1).lineTo(4.8,-1).lineTo(4.8,1).closePath();
	this.shape_1095.setTransform(471.7,-33.5);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.4,61.9).lineTo(-17.4,-61.9).lineTo(16.5,-61.9).lineTo(17.4,-61.6).lineTo(17.4,61.9).closePath();
	this.shape_1096.setTransform(480.1,13.6);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.beginFill("#494A4E").beginStroke().moveTo(-309.5,4.5).lineTo(-309.5,-4.5).lineTo(309.5,-4.5).lineTo(309.5,4.5).closePath();
	this.shape_1097.setTransform(216.5,76.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2296.3,-81.7,2822.3,163);


(lib.vehiauto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.9,13.9).curveTo(-19.7,8.2,-19.7,0).curveTo(-19.7,-8.1,-13.9,-13.9).curveTo(-8.2,-19.6,-0,-19.6).curveTo(8.1,-19.6,13.9,-13.9).curveTo(19.7,-8.1,19.7,0).curveTo(19.7,8.2,13.9,13.9).curveTo(8.1,19.7,-0,19.6).curveTo(-8.2,19.7,-13.9,13.9).closePath();
	this.shape.setTransform(84,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.5,13.5).curveTo(-19.1,7.9,-19.1,0).curveTo(-19.1,-7.9,-13.5,-13.5).curveTo(-7.9,-19.1,0,-19.1).curveTo(7.9,-19.1,13.5,-13.5).curveTo(19.1,-7.9,19.1,0).curveTo(19.1,7.9,13.5,13.5).curveTo(7.9,19.1,0,19.1).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_1.setTransform(-76.1,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-51.4,44.9).lineTo(-51.7,44.8).lineTo(-52.3,44.8).lineTo(-52.5,44.8).lineTo(-53.1,44.8).lineTo(-53.3,44.7).lineTo(-53.3,44.3).lineTo(-53.3,44.2).lineTo(-53.4,44).lineTo(-53.4,43.7).lineTo(-53.4,43.5).lineTo(-53.4,43.3).lineTo(-53.5,43.1).lineTo(-53.7,40.9).lineTo(-53.7,40.8).curveTo(-54.3,35.1,-55.5,31.4).curveTo(-57.3,25.7,-60.8,22.1).lineTo(-61.3,21.7).curveTo(-66.5,16.6,-76,16).curveTo(-83.8,15.6,-90,20.3).curveTo(-98.9,27.1,-98.7,42.5).lineTo(-98.7,43.6).curveTo(-98.7,44.1,-99.6,44.2).curveTo(-100.4,44.4,-102.7,44.4).curveTo(-104.4,44.4,-107.3,43.5).lineTo(-111.3,42.2).curveTo(-112.8,41.6,-112.8,41.1).curveTo(-112.9,40.4,-111,38.9).curveTo(-110.6,38.6,-110.3,38.1).lineTo(-110,37.5).curveTo(-109.8,37.1,-109.8,36.5).lineTo(-109.9,35.8).lineTo(-109.9,35.7).lineTo(-109.9,35.4).lineTo(-110.7,32.9).curveTo(-111.3,31.1,-111.6,30.1).curveTo(-112.2,27.3,-111.5,23.3).curveTo(-110.9,19.4,-109.7,18.4).curveTo(-108.8,17.6,-107.8,15.4).lineTo(-106,11.2).lineTo(-105.6,10.3).lineTo(-105.5,10.3).curveTo(-102.1,3.7,-94.5,-0.1).curveTo(-90.4,-2.2,-83.8,-4.2).curveTo(-80.3,-5.5,-71,-7.6).lineTo(-65.3,-8.8).lineTo(-65.2,-8.8).lineTo(-64.7,-8.9).lineTo(-64.7,-9).lineTo(-64.5,-9).lineTo(-64.4,-9).lineTo(-64.3,-9).lineTo(-64.3,-9.1).curveTo(-64.3,-9.7,-63.8,-9.7).curveTo(-63.4,-9.7,-63.2,-9.2).lineTo(-63.1,-9.3).lineTo(-62.9,-9.3).lineTo(-62.8,-9.3).lineTo(-62.6,-9.3).lineTo(-62.6,-9.4).lineTo(-62.5,-9.4).curveTo(-51.4,-15.1,-33.3,-26.2).curveTo(-20.5,-34,-4.5,-36.5).curveTo(7.6,-38.4,33,-38.4).curveTo(51.2,-38.4,69.7,-36.6).lineTo(72.5,-39).curveTo(73.4,-39.9,76.9,-44.7).curveTo(77,-44.7,77,-44.8).curveTo(77.1,-44.9,77.1,-44.9).curveTo(77.2,-44.9,77.2,-44.9).curveTo(77.3,-44.9,77.4,-44.9).curveTo(77.4,-44.8,77.5,-44.7).curveTo(77.5,-44.7,77.5,-44.6).curveTo(77.5,-44.6,77.5,-44.5).curveTo(77.4,-44.5,77.4,-44.4).curveTo(73.7,-39,73.1,-38.4).curveTo(72.8,-38,72.9,-37.4).lineTo(73.1,-36.3).curveTo(79.8,-35.6,85.2,-34.9).curveTo(89.6,-34.3,90.4,-34).lineTo(92.6,-33.4).curveTo(93.4,-33.1,92.9,-32.7).curveTo(92.5,-32.4,91.7,-31).lineTo(90.9,-29.8).curveTo(100.5,-20,102.9,-11.9).curveTo(106.4,-0.6,106.5,5.8).lineTo(106.5,7.4).curveTo(106.4,8.4,106.7,9).lineTo(106.8,9.1).lineTo(106.9,9.3).lineTo(107.1,9.5).lineTo(107.1,9.6).lineTo(107.4,9.8).lineTo(107.5,9.8).lineTo(107.7,10).lineTo(107.8,10).lineTo(108.2,10.2).curveTo(109,10.5,109.8,11.6).lineTo(110.8,13.1).curveTo(111.8,14.6,111.8,15.8).lineTo(112,26.2).lineTo(112.1,26.4).lineTo(112.6,27.4).curveTo(112.9,28,112.8,28.8).curveTo(112.6,31.3,111.5,34.5).curveTo(110.5,37.6,109.6,38.4).lineTo(109.2,38.8).curveTo(108.5,39.3,106.3,40.2).curveTo(105.8,35.4,105.5,33.8).curveTo(104.7,29.4,103.1,26.1).lineTo(102.3,24.6).lineTo(100.6,22.2).curveTo(94.8,15.2,83.2,15.1).curveTo(72.7,15.1,66.9,22.2).lineTo(66.5,22.8).curveTo(65.1,24.6,64.3,26.4).curveTo(63.3,28.5,62.7,30.2).lineTo(62.3,31.5).curveTo(61.4,34.8,61,39.4).curveTo(60.7,41.8,60.7,43.8).lineTo(60.7,44.1).lineTo(60.7,44.2).lineTo(43.7,44.2).lineTo(43.3,44.1).lineTo(11.6,44.3).lineTo(11.3,44.3).lineTo(7.7,44.4).lineTo(7.4,44.4).lineTo(3.2,44.5).lineTo(3,44.5).lineTo(-19.6,44.8).lineTo(-19.8,44.9).closePath().moveTo(15.3,-31).curveTo(0.2,-30.2,-6.7,-29.4).curveTo(-13.3,-28.6,-26.6,-22.2).curveTo(-37.2,-17.2,-44.8,-12.4).curveTo(-45.8,-8.8,-46.6,-3.6).curveTo(-33.7,-4.3,-4,-6.2).curveTo(25,-8,33,-8.6).curveTo(34,-18.6,36.1,-31.9).curveTo(28.3,-31.7,15.3,-31).closePath().moveTo(45.2,-30.6).curveTo(44.1,-29.8,43.8,-28.5).curveTo(42.1,-21.3,41.7,-12.7).curveTo(41.6,-11,42.8,-9.9).curveTo(43.9,-8.7,45.6,-8.8).lineTo(66.7,-10.3).lineTo(78.1,-11).lineTo(80,-11.1).curveTo(80.3,-11.9,80.3,-13.3).curveTo(80.3,-15.8,77.4,-21).curveTo(75.2,-25.2,73.8,-26.9).lineTo(73.4,-27.4).curveTo(72.8,-28.2,72.4,-28.4).curveTo(71.8,-28.9,70.5,-29.2).curveTo(68.9,-29.6,61.3,-30.3).curveTo(53.5,-31.1,47.6,-31.3).lineTo(47.4,-31.3).curveTo(46.2,-31.3,45.2,-30.6).closePath();
	this.shape_2.setTransform(0,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-51.7,225.7,103.6);


(lib.vehiaplicacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.8,81).lineTo(-4.8,80).lineTo(-5.8,80).lineTo(-5.8,79).lineTo(-2.2,79).lineTo(-1.1,72.4).lineTo(-1.4,72.1).lineTo(-1.4,72).lineTo(-2.7,71.8).lineTo(-2.6,71.4).lineTo(-38.8,40.4).lineTo(-161.2,19.8).lineTo(-166.5,16.4).lineTo(-165.8,12).lineTo(-173.7,10.7).curveTo(-175.2,10.4,-175.7,9.7).curveTo(-176.1,9,-175.9,7.8).lineTo(-169.7,-29.4).curveTo(-169.5,-30.5,-168.3,-31).curveTo(-167.6,-31.2,-167.1,-31.2).lineTo(-161.3,-30.3).lineTo(-148.5,-63.7).lineTo(-150.5,-61.7).lineTo(-153.5,-62.2).lineTo(-146.4,-69.3).lineTo(-141.9,-81).lineTo(-134.2,-79.7).lineTo(-149.7,-28.2).lineTo(-153.9,-2.9).lineTo(-148.5,4.8).lineTo(51.7,38.4).lineTo(52.6,33.4).lineTo(59.5,34.5).curveTo(60.1,34.4,60.6,34.6).lineTo(61,34.8).lineTo(61.8,34.9).lineTo(61.7,35.7).lineTo(61.7,35.7).lineTo(96.7,49.1).lineTo(96.6,49.4).lineTo(97.2,49.6).lineTo(162.2,60.6).lineTo(176,66).lineTo(162.6,64.3).lineTo(97.5,52.7).lineTo(97.3,51.4).lineTo(96.1,50.9).lineTo(96,51.2).lineTo(61.3,38).lineTo(60.4,43).lineTo(63.6,46).lineTo(94.3,51.1).lineTo(93.1,58.6).lineTo(69.4,58.6).lineTo(9.8,48.7).lineTo(5.6,73.6).lineTo(4,73.6).lineTo(3.2,79).lineTo(5.2,79).lineTo(5.2,80).lineTo(6.2,80).lineTo(6.2,81).closePath().moveTo(-1.2,62.9).lineTo(-0.7,60.1).lineTo(-2.2,59.9).lineTo(-2.2,59.8).lineTo(-3.5,59.6).lineTo(-3.4,59).lineTo(-6.4,55.9).lineTo(-2.5,53.9).lineTo(-1.3,46.7).lineTo(-24.6,42.8).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-81,352,162.1);


(lib.vehipiso = function(mode,startPosition,loop) {
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


(lib.vehiconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.vehihandss();
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


(lib.vehicar = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#B60A14").beginStroke().moveTo(-16.9,35.1).curveTo(-21.4,35.1,-25.2,34).curveTo(-29.4,32.6,-33.6,29.6).curveTo(-37.4,27.1,-39.2,20.4).lineTo(-40.2,14.2).lineTo(-40.2,-31.1).lineTo(-39.9,-32.8).curveTo(-39,-34.6,-36.3,-34.9).lineTo(-21.6,-34.9).curveTo(-18.6,-34.9,-17.7,-32.9).curveTo(-17.3,-31.9,-17.5,-30.9).lineTo(-17.5,5.9).lineTo(-17.6,10.6).curveTo(-17.4,13.2,-16.2,14.8).curveTo(-13.1,19.1,-0.7,19.1).curveTo(11.4,19.9,15.1,14.5).curveTo(16.9,12,16.9,6).lineTo(16.9,-30.5).curveTo(16.8,-31.6,17.1,-32.8).curveTo(17.9,-35.1,20.4,-35.1).lineTo(35.5,-35.1).curveTo(38.8,-35.1,39.8,-32.8).curveTo(40.3,-31.7,40.1,-30.5).lineTo(40.1,11).lineTo(39.8,16.2).curveTo(38.9,22.2,36.1,26.5).curveTo(33.3,31.3,24.4,33.7).lineTo(16.1,35.1).closePath();
	this.shape.setTransform(-132.2,3.5,0.099,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#B60A14").beginStroke().moveTo(-16.9,35.1).curveTo(-21.4,35.1,-25.2,34).curveTo(-29.4,32.6,-33.6,29.6).curveTo(-37.4,27.1,-39.1,20.4).lineTo(-40.1,14.2).lineTo(-40.1,-31.1).lineTo(-39.8,-32.8).curveTo(-39,-34.6,-36.3,-34.9).lineTo(-21.5,-34.9).curveTo(-18.6,-34.9,-17.7,-32.9).curveTo(-17.3,-31.9,-17.5,-30.9).lineTo(-17.5,5.9).lineTo(-17.5,10.6).curveTo(-17.3,13.2,-16.1,14.8).curveTo(-13,19.1,-0.7,19.1).curveTo(11.4,19.9,15.2,14.5).curveTo(16.9,12,16.9,6).lineTo(16.9,-30.5).curveTo(16.8,-31.6,17.2,-32.8).curveTo(17.9,-35.1,20.4,-35.1).lineTo(35.5,-35.1).curveTo(38.8,-35.1,39.8,-32.8).curveTo(40.3,-31.7,40.1,-30.5).lineTo(40.1,11).lineTo(39.8,16.2).curveTo(39,22.2,36.2,26.5).curveTo(33.3,31.3,24.5,33.7).lineTo(16.2,35.1).closePath();
	this.shape_1.setTransform(-151,3.5,0.099,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#B60A14").beginStroke().moveTo(-23.7,35.1).curveTo(-34.7,35.1,-39.6,27.6).curveTo(-41.2,25.3,-41.9,22.5).lineTo(-42.3,20.1).curveTo(-42.7,17,-41.8,13.3).curveTo(-39.9,5.8,-33,2.8).curveTo(-22.1,-2,15.6,-15.1).curveTo(17.4,-15.8,17.5,-17).curveTo(17.7,-18.5,14.4,-19.2).curveTo(10.8,-19.8,-13.2,-19.5).lineTo(-36.6,-19.2).curveTo(-37.5,-19.1,-38.4,-19.5).curveTo(-40.3,-20.3,-40.3,-22.9).lineTo(-40.3,-31.1).curveTo(-39.9,-34.1,-37.6,-34.8).curveTo(-36.4,-35.1,-35.3,-34.9).lineTo(-13.7,-35).curveTo(10.3,-35.1,22.7,-34.7).curveTo(35.1,-34.3,39.9,-27).curveTo(42.3,-23.4,42.3,-19.8).curveTo(42.7,-16.4,41.7,-12.4).curveTo(39.5,-4.3,32.1,-1.5).curveTo(28.3,-0,8.9,6.6).curveTo(-7.1,12.1,-12.7,14.6).curveTo(-18.5,16.9,-17.3,18.2).curveTo(-16.4,19.1,-13.3,19.1).lineTo(37.8,19.3).curveTo(40.7,19.9,40.7,22.4).lineTo(40.7,30.9).curveTo(40.7,33.8,38.6,34.7).lineTo(36.5,35.1).closePath();
	this.shape_2.setTransform(-141.5,3.5,0.099,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#B60A14").beginStroke().moveTo(-38.6,34.7).curveTo(-40.7,33.8,-40.7,30.9).lineTo(-40.7,22.4).curveTo(-40.7,19.9,-37.8,19.3).curveTo(-36.3,18.9,-34.9,19.1).lineTo(13.3,19.1).curveTo(16.4,19.1,17.3,18.2).curveTo(18.5,16.9,12.6,14.6).curveTo(7,12,-8.9,6.6).curveTo(-28.5,-0.1,-32.1,-1.5).curveTo(-39.6,-4.3,-41.7,-12.4).curveTo(-42.3,-14.9,-42.4,-17.6).lineTo(-42.3,-19.8).curveTo(-42.3,-23.4,-39.9,-27).curveTo(-35.1,-34.3,-22.7,-34.7).curveTo(-2.8,-35.3,35.2,-34.9).lineTo(37.5,-34.8).curveTo(39.9,-34.1,40.3,-31.1).lineTo(40.3,-22.9).curveTo(40.3,-20.3,38.4,-19.5).lineTo(36.6,-19.2).curveTo(-8.7,-20.1,-14.4,-19.2).curveTo(-17.7,-18.5,-17.6,-17).curveTo(-17.5,-15.8,-15.7,-15.1).lineTo(5.3,-7.7).curveTo(26.2,-0.2,33,2.8).curveTo(39.8,5.8,41.7,13.3).curveTo(42.7,17,42.3,20.1).curveTo(42,23.9,39.6,27.6).curveTo(34.7,35.1,23.7,35.1).lineTo(-36.5,35.1).lineTo(-37,35.1).curveTo(-37.8,35.1,-38.6,34.7).closePath();
	this.shape_3.setTransform(-160.4,3.5,0.099,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#B60A14").beginStroke().moveTo(8.1,35.3).lineTo(-7.6,35.3).curveTo(-10.8,35.3,-11.5,33.2).lineTo(-11.6,-31.9).curveTo(-11.6,-34.4,-9.4,-35).curveTo(-8.2,-35.4,-7.1,-35.2).lineTo(8,-35.2).lineTo(9.8,-34.9).curveTo(11.6,-34.1,11.6,-31.6).lineTo(11.6,31.6).curveTo(11.6,34.1,9.8,35).curveTo(9.2,35.3,8.5,35.3).lineTo(8.1,35.3).closePath();
	this.shape_4.setTransform(-167.1,3.5,0.099,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_5.setTransform(-122.2,51.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_6.setTransform(141.5,51.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.5,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).curveTo(1.9,-2.4,-3.9,-1.8).curveTo(-8.5,-1.3,-18.5,-0.6).lineTo(-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.8).closePath();
	this.shape_7.setTransform(-154.3,-65.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.5,1.9).closePath();
	this.shape_8.setTransform(-128.1,-71.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_9.setTransform(-174.8,-20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_10.setTransform(-174.7,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0.1,0.5).lineTo(-0.8,0.5).curveTo(-2.1,0.5,-3,0.3).closePath();
	this.shape_11.setTransform(-174.9,-6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).lineTo(-3.1,-5).lineTo(2.4,-6.7).curveTo(2.9,-6.9,3.3,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,4,3.2,4.5).curveTo(2.4,5.1,-1.4,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_12.setTransform(-174.9,-3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.5,-12.9,0.8,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.6,5,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_13.setTransform(-170.6,-46.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.8,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-6.7,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.1,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_14.setTransform(-171.8,-46.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#777777").setStrokeStyle(0.3,1,1).moveTo(35.2,43.7).lineTo(35.3,39.6).lineTo(34.9,38.3).curveTo(34,-25.8,33.3,-37.3).curveTo(33.2,-40.1,31.3,-41.8).curveTo(29.7,-43.3,27.1,-43.6).curveTo(24.9,-43.9,16.7,-43.7).curveTo(10.1,-43.5,3.6,-43.2).curveTo(-1.1,-43,-20.1,-41.4).curveTo(-27.2,-40.7,-30.8,-38).curveTo(-32.7,-36.6,-33.1,-35.4).curveTo(-33.8,-34.2,-35.3,-30.2);
	this.shape_15.setTransform(-139.2,-30);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#A5A5A5").setStrokeStyle(0.3,1,1).moveTo(-1,46).curveTo(-2.7,15.8,-2.9,0.7).curveTo(-3.1,-10.8,-1.5,-23.3).curveTo(0,-36.1,2.9,-45.9);
	this.shape_16.setTransform(-180.9,-3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).lineTo(-1.8,-2.2).curveTo(-1.6,-2.7,-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.4).lineTo(-0.4,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_17.setTransform(-193.3,-21);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.2,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.8,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_18.setTransform(-183.6,-44.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_19.setTransform(-193.1,16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_20.setTransform(-192.6,35.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.5,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_21.setTransform(-191.6,46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_22.setTransform(-187.9,50.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.7).lineTo(-0.7,-8.3).lineTo(0.7,8.3).curveTo(-0.1,5.6,-0.5,-1.7).closePath();
	this.shape_23.setTransform(-187,42.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.8).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.3,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.8).lineTo(-4.4,-6.9).closePath();
	this.shape_24.setTransform(-188.6,40.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.2,3.2,-1.5,1.9).curveTo(-2,-1,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_25.setTransform(-195,41);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,3.1,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_26.setTransform(-113.1,-2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.3,-4.5,7.7).curveTo(-5,7.2,-5,6.3).curveTo(-5.5,2.3,-5.3,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.2,4.6,7.7).curveTo(4,8.3,3.3,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_27.setTransform(-113.2,-2.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-50,62).curveTo(-50.4,61.8,-51,61.2).curveTo(-52,60.2,-52.5,58.5).curveTo(-53.2,56.4,-53.5,53.3).lineTo(-54,48).curveTo(-54.2,44.9,-53.3,42.1).lineTo(-52.4,39.9).curveTo(-53.3,23.7,-53.3,18.3).curveTo(-53.3,14.9,-52.8,6.7).lineTo(-52.3,-0.9).lineTo(-48.1,-7.9).curveTo(-47.1,-12.9,-43.6,-27.3).curveTo(-41.3,-36.4,-37.1,-48.8).curveTo(-34,-58,-32.9,-60.5).curveTo(-32.5,-61.4,-31.9,-61.8).curveTo(-31.3,-62.2,-29.7,-62.4).curveTo(-22.5,-63.3,5.4,-64.5).lineTo(31.8,-65.5).curveTo(34.7,-65.6,36.1,-65.3).curveTo(38.3,-64.9,40.2,-63.5).curveTo(42.1,-62.2,43.2,-61.2).lineTo(45.3,-59.2).curveTo(46.4,-58.2,47.8,-56.1).curveTo(48.9,-54.3,49.7,-52.7).curveTo(50.9,-50.1,52.2,-44.6).curveTo(54,-36.9,54,-29.7).lineTo(53.9,-11.2).curveTo(53.7,-9.5,53.3,-8.8).curveTo(50,-2.2,50,-0.1).lineTo(50,6.5).curveTo(50,8,49.5,8.9).curveTo(49,9.7,49,10.5).lineTo(49,25.4).lineTo(39.1,25.7).lineTo(36,26).lineTo(36,28.3).curveTo(24.9,28.4,20,29).curveTo(13.2,29.9,10.4,31.2).curveTo(3.7,34.3,-1.3,42.9).curveTo(-3.6,46.8,-6.7,53.4).curveTo(-7.5,54.5,-9.1,54.5).lineTo(-17.2,54.5).lineTo(-18.7,54.1).lineTo(-21.4,54.5).lineTo(-39,54.5).lineTo(-39,61.9).curveTo(-39,63.3,-39.8,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-48.5,65.5,-50,62).closePath().moveTo(9.8,-55.4).curveTo(-9.6,-54.6,-16,-53.6).curveTo(-21.4,-52.8,-23,-51.9).curveTo(-24.2,-51.1,-25.6,-48.5).curveTo(-26.6,-46.5,-28.8,-36.4).curveTo(-31.1,-26.4,-31.5,-22.1).curveTo(-31.9,-18.2,-32.2,-10.8).curveTo(-32.5,-4,-32.5,-1.5).lineTo(-32.4,-0.4).lineTo(-31.2,-0.7).lineTo(9.3,-16.4).curveTo(14,-18.1,26.6,-20.3).lineTo(29.1,-20.8).curveTo(30.3,-21,30.7,-21.4).curveTo(30.9,-21.7,30.9,-22.3).lineTo(31.5,-51.8).curveTo(31.5,-54.2,30.7,-55).curveTo(30,-55.8,28,-56).curveTo(19.5,-55.8,9.8,-55.4).closePath();
	this.shape_28.setTransform(-143.5,-12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#C6C6C6").beginStroke().moveTo(38.5,25.2).curveTo(33.1,25,28.3,24.1).curveTo(23.6,23.2,23.1,18.4).curveTo(22.6,13.7,26.6,11.8).curveTo(28.3,11,33.7,10.6).curveTo(39.3,10.2,40.4,9.8).lineTo(20.9,9.8).curveTo(6.8,12.8,1.1,12.8).lineTo(-7.7,12.8).lineTo(-7.6,13.7).curveTo(-7.6,14.8,-7.9,14.8).lineTo(-22,14.8).curveTo(-22.5,14.8,-23.6,13.7).curveTo(-24.8,12.6,-24.8,12.2).lineTo(-24.8,12.8).lineTo(-25.2,12.8).lineTo(-25.4,14).curveTo(-26,15.2,-27.9,15.2).curveTo(-29.8,15.2,-30.7,13.4).lineTo(-31.2,11.6).lineTo(-32.4,10.8).lineTo(-47.8,10.8).lineTo(-47.8,12.9).lineTo(-47.5,14.5).curveTo(-47.3,15.8,-47.6,15.8).lineTo(-73.9,15.8).curveTo(-74.3,15.8,-75.5,14.5).curveTo(-76.8,13.3,-76.8,12.9).lineTo(-76.8,11.8).lineTo(-78.2,11.8).lineTo(-78.5,15.8).lineTo(-81.8,15.8).lineTo(-82,11.8).lineTo(-86.3,11.8).lineTo(-87.6,12.6).curveTo(-89.1,13.5,-89.8,14.3).lineTo(-89.8,17.6).curveTo(-89.8,20.9,-93.4,21.3).curveTo(-94.3,21.5,-97.6,21.7).lineTo(-103.8,22).lineTo(-103.8,24.1).lineTo(-106.8,23.8).lineTo(-106.8,22.2).lineTo(-110.8,22.3).lineTo(-110.8,16.8).lineTo(-159.8,16.8).lineTo(-159.8,20.6).lineTo(-174.7,18.8).lineTo(-186.2,4.9).lineTo(-182.2,-25.2).lineTo(-107.2,-25.2).lineTo(-105.4,-17.2).lineTo(172.2,-17.2).lineTo(172.2,-4.2).lineTo(178.6,-4.2).lineTo(186.2,-0.7).lineTo(186.2,5.9).lineTo(176.3,7.3).lineTo(176,10.5).curveTo(174.9,13.9,170.8,14.7).lineTo(154.4,17.8).lineTo(106.2,17.8).lineTo(99.6,12.6).lineTo(91.2,9.8).lineTo(54.3,9.8).curveTo(55.4,10.2,60.9,10.6).curveTo(66.3,11,68,11.8).curveTo(72.1,13.7,71.5,18.3).curveTo(71,23,66.3,23.9).curveTo(61.4,24.8,56.1,25.1).lineTo(47.3,25.2).lineTo(38.5,25.2).closePath();
	this.shape_29.setTransform(11.3,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.3,4.7,-186.4,0).curveTo(-186.3,-4.7,-131.8,-8).curveTo(-77.2,-11.3,0,-11.3).curveTo(77.2,-11.3,131.7,-8).curveTo(186.4,-4.7,186.3,0).curveTo(186.4,4.7,131.7,8).curveTo(77.2,11.3,0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_30.setTransform(-3.2,80.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Capa 3
	this.instance = new lib.vehiconductor();
	this.instance.parent = this;
	this.instance.setTransform(-141.4,-32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-77.5,395.1,169.1);


// stage content:
(lib.trasladodevehiculos = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_304 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(304).call(this.frame_304).wait(1));

	// llanta
	this.instance = new lib.vehillanta();
	this.instance.parent = this;
	this.instance.setTransform(1399.3,391.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121).to({_off:false},0).to({rotation:-360,x:398.3},28).wait(107).to({rotation:-720,x:525.3},26).to({rotation:-1080,x:-138.7},22).wait(1));

	// llanta
	this.instance_1 = new lib.vehillanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1135.3,390.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({rotation:-360,x:134.3},28).wait(107).to({rotation:-720,x:261.3},26).to({rotation:-1080,x:-402.7},22).wait(1));

	// aplicacion
	this.instance_2 = new lib.vehiaplicacion();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1341.8,279.8,1,1,-15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121).to({_off:false},0).to({x:341.3},28).to({regX:0.2,regY:0.1,rotation:-0.4,x:543.9,y:325.8},28).to({rotation:-0.4},28).to({regX:0,regY:0,rotation:-10.5,x:341.3,y:279.8},27).wait(24).to({x:466.3},26).to({x:-197.7},22).wait(1));

	// auto
	this.instance_3 = new lib.vehiauto();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1161.3,365);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:620.8},53).to({x:747.3},7).to({x:827.8},7).to({x:850.8},7).wait(102).to({rotation:8.2,x:514.7,y:298.5},28).to({rotation:-0.5,x:301.3,y:261.9},27).wait(24).to({x:426.3},26).to({x:-237.7},22).wait(1));

	// isuzu-car
	this.instance_4 = new lib.vehicar();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1257.4,339.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121).to({_off:false},0).to({x:256.9},28).wait(107).to({x:300.8},9).to({x:383.9},17).to({x:-280.1},22).wait(1));

	// fondo
	this.instance_5 = new lib.vehifondo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(525,284);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:1052},75).wait(181).to({x:732},0).to({x:2296.4},48).wait(1));

	// FlashAICB
	this.instance_6 = new lib.vehipiso();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1506.3,438.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-896.3},74).wait(182).to({x:560.1},48).wait(1));

	// Ambient
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape.setTransform(525,182.5,1.063,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-558,269.5).lineTo(-558,-269.5).lineTo(557.9,-269.5).lineTo(557.9,269.5).closePath();
	this.shape_1.setTransform(525.7,257.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(305));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1541.4,245.6,3150,539);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;