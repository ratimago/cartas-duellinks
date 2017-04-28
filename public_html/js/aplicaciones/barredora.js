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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-19.8,39.8,39.8);


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


(lib.barredora0011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-19.2,10.9).lineTo(-21.8,-2.7).lineTo(-21.8,-7.1).curveTo(-21.7,-8.7,-20.8,-9.8).curveTo(-19.7,-10.9,-18.3,-10.9).lineTo(18.3,-10.9).curveTo(19.7,-10.9,20.8,-9.8).curveTo(21.7,-8.7,21.8,-7.1).lineTo(21.8,-2.4).lineTo(19.7,10.9).closePath();
	mask.setTransform(24.3,13.9);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,5.6).lineTo(-2,-5.6).lineTo(2,-5.6).lineTo(2,5.6).closePath();
	this.shape.setTransform(45.4,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_1.setTransform(41.6,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_2.setTransform(37.9,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_3.setTransform(34,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,5.6).lineTo(-2,-5.6).lineTo(2,-5.6).lineTo(2,5.6).closePath();
	this.shape_4.setTransform(30.3,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_5.setTransform(26.5,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_6.setTransform(22.7,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_7.setTransform(18.9,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_8.setTransform(15.1,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_9.setTransform(11.3,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.6).lineTo(-1.9,-5.6).lineTo(1.9,-5.6).lineTo(1.9,5.6).closePath();
	this.shape_10.setTransform(7.5,5.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,5.6).lineTo(-1.5,-5.6).lineTo(1.5,-5.6).lineTo(1.5,5.6).closePath();
	this.shape_11.setTransform(4.1,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,12.4).lineTo(-0.6,-12.4).lineTo(3.4,-12.4).lineTo(-0,12.4).closePath();
	this.shape_12.setTransform(45.1,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,12.4).lineTo(-1.4,-12.4).lineTo(2.6,-12.4).lineTo(0.7,12.4).closePath();
	this.shape_13.setTransform(37.8,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,12.4).lineTo(-2,-12.4).lineTo(2,-12.4).lineTo(1.4,12.4).closePath();
	this.shape_14.setTransform(30.3,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,12.4).lineTo(-2.4,-12.4).lineTo(1.7,-12.4).lineTo(2.4,12.4).closePath();
	this.shape_15.setTransform(22.6,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,12.4).lineTo(-3,-12.4).lineTo(1,-12.4).lineTo(3,12.4).closePath();
	this.shape_16.setTransform(15.1,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(0.2,12.4).lineTo(-3.6,-12.4).lineTo(0.4,-12.4).lineTo(3.6,12.4).closePath();
	this.shape_17.setTransform(7.7,13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,12.4).lineTo(-1,-12.4).lineTo(3.1,-12.4).lineTo(0.4,12.4).closePath();
	this.shape_18.setTransform(41.4,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,12.4).lineTo(-1.7,-12.4).lineTo(2.3,-12.4).lineTo(1.2,12.4).closePath();
	this.shape_19.setTransform(34.1,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,12.4).lineTo(-2.1,-12.4).lineTo(2,-12.4).lineTo(2.1,12.4).closePath();
	this.shape_20.setTransform(26.3,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,12.4).lineTo(-2.7,-12.4).lineTo(1.4,-12.4).lineTo(2.7,12.4).closePath();
	this.shape_21.setTransform(18.8,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,12.4).lineTo(-3.3,-12.4).lineTo(0.7,-12.4).lineTo(3.3,12.4).closePath();
	this.shape_22.setTransform(11.4,13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,12.4).lineTo(-3.9,-12.4).lineTo(0.1,-12.4).lineTo(3.9,12.4).closePath();
	this.shape_23.setTransform(3.9,13.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.2,10.9).lineTo(-21.8,-2.7).lineTo(-21.8,-7.1).curveTo(-21.7,-8.7,-20.8,-9.8).curveTo(-19.7,-10.9,-18.3,-10.9).lineTo(18.3,-10.9).curveTo(19.7,-10.9,20.8,-9.8).curveTo(21.7,-8.7,21.8,-7.1).lineTo(21.8,-2.4).lineTo(19.7,10.9).closePath();
	this.shape_24.setTransform(24.3,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,3,43.5,21.9);


(lib.barredora0010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-34,24.3).lineTo(-37.2,-24.3).lineTo(37.2,-24.3).lineTo(34,24.3).closePath();
	mask.setTransform(37.2,24.3);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,21.3).lineTo(-1.9,-21.3).lineTo(1.9,-21.3).lineTo(1.9,21.3).closePath();
	this.shape.setTransform(65.2,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,21.3).lineTo(-1.9,-21.3).lineTo(1.9,-21.3).lineTo(1.9,21.3).closePath();
	this.shape_1.setTransform(57.1,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,21.3).lineTo(-2,-21.3).lineTo(2,-21.3).lineTo(2,21.3).closePath();
	this.shape_2.setTransform(49,28.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,21.3).lineTo(-2,-21.3).lineTo(2,-21.3).lineTo(2,21.3).closePath();
	this.shape_3.setTransform(40.9,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,21.3).lineTo(-2,-21.3).lineTo(2,-21.3).lineTo(2,21.3).closePath();
	this.shape_4.setTransform(32.8,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,21.3).lineTo(-2,-21.3).lineTo(2,-21.3).lineTo(2,21.3).closePath();
	this.shape_5.setTransform(24.7,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,21.3).lineTo(-2,-21.3).lineTo(2,-21.3).lineTo(2,21.3).closePath();
	this.shape_6.setTransform(16.6,28.8);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-34,24.3).lineTo(-37.2,-24.3).lineTo(37.2,-24.3).lineTo(34,24.3).closePath();
	this.shape_7.setTransform(37.2,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,48.6);


(lib.barredora009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-11.8,13.8).curveTo(-18.8,5.1,-18.8,-3.8).curveTo(-18.8,-12.7,-13.3,-17.5).curveTo(-8.3,-21.9,-0,-21.9).curveTo(8.3,-21.9,13.3,-17.5).curveTo(18.8,-12.8,18.8,-3.8).curveTo(18.8,5.1,12,13.8).curveTo(5.6,21.9,0.1,21.9).curveTo(-5.3,21.9,-11.8,13.8).closePath();
	mask.setTransform(21.1,21.9);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-21.6,-0.1).curveTo(-5.4,-7.2,9.4,-4.4).curveTo(16.9,-3,21.6,0.1).lineTo(18.4,4.9).curveTo(14.7,2.4,8.1,1.3).curveTo(-5,-1.1,-19.3,5.2).closePath();
	this.shape.setTransform(21.6,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-21.6,-0.1).curveTo(-5.4,-7.2,9.4,-4.4).curveTo(16.9,-3,21.6,0.1).lineTo(18.4,4.9).curveTo(14.7,2.4,8.1,1.3).curveTo(-5,-1.1,-19.3,5.2).closePath();
	this.shape_1.setTransform(21.6,37.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-11.8,13.8).curveTo(-18.8,5.1,-18.8,-3.8).curveTo(-18.8,-12.7,-13.3,-17.5).curveTo(-8.3,-21.9,-0,-21.9).curveTo(8.3,-21.9,13.3,-17.5).curveTo(18.8,-12.8,18.8,-3.8).curveTo(18.8,5.1,12,13.8).curveTo(5.6,21.9,0.1,21.9).curveTo(-5.3,21.9,-11.8,13.8).closePath();
	this.shape_2.setTransform(21.1,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,0,37.7,43.8);


(lib.barredora008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-7.9,9).curveTo(-12.3,3.3,-12.3,-2.5).curveTo(-12.3,-8.3,-8.7,-11.4).curveTo(-5.4,-14.3,-0,-14.3).curveTo(5.4,-14.3,8.7,-11.4).curveTo(12.3,-8.3,12.3,-2.5).curveTo(12.3,3.3,7.7,9).curveTo(3.4,14.3,-0.1,14.3).curveTo(-3.7,14.3,-7.9,9).closePath();
	mask.setTransform(12.3,15.7);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,2.1).lineTo(-0.4,0.3).lineTo(-0.3,-3.2).lineTo(-0.3,-3.5).lineTo(-0.8,-8.1).lineTo(-2.6,-15.5).lineTo(-1.9,-14.9).lineTo(-0.9,-13.9).lineTo(-0.3,-13.2).lineTo(0.4,-12.4).lineTo(1.1,-11.4).curveTo(1.7,-10.6,2.4,-9.1).curveTo(3,-7.8,3.5,-6.2).curveTo(3.8,-5.1,4.1,-3).lineTo(4.1,-0.1).lineTo(3.5,3.6).lineTo(3.1,5.2).lineTo(2.5,6.7).lineTo(1.9,8.1).lineTo(0.4,10.5).lineTo(-0.3,11.5).curveTo(-0.8,12.2,-1.7,13.3).lineTo(-3.4,14.9).lineTo(-4.1,15.5).closePath();
	this.shape.setTransform(16.6,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(1.7,13.4).lineTo(0.3,11.6).lineTo(-0.8,10).lineTo(-2.5,6.7).lineTo(-3.5,3.7).lineTo(-4,0.3).lineTo(-4,-0.1).lineTo(-4.1,-0.3).lineTo(-4.1,-1.4).lineTo(-4,-3.1).curveTo(-3.8,-4.6,-3.4,-6.2).curveTo(-3,-7.8,-2.4,-9.1).curveTo(-1.8,-10.4,-1.1,-11.5).lineTo(-0.1,-12.9).lineTo(2.3,-15.3).lineTo(2.6,-15.5).lineTo(0.8,-8.1).lineTo(0.5,-5.5).lineTo(0.4,-4.9).lineTo(0.4,0.3).lineTo(0.6,2.1).lineTo(1.1,4.8).lineTo(1.9,8.2).lineTo(4.1,15.5).closePath();
	this.shape_1.setTransform(8.2,15.6);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.9,9).curveTo(-12.3,3.3,-12.3,-2.5).curveTo(-12.3,-8.3,-8.7,-11.4).curveTo(-5.4,-14.3,-0,-14.3).curveTo(5.4,-14.3,8.7,-11.4).curveTo(12.3,-8.3,12.3,-2.5).curveTo(12.3,3.3,7.7,9).curveTo(3.4,14.3,-0.1,14.3).curveTo(-3.7,14.3,-7.9,9).closePath();
	this.shape_2.setTransform(12.3,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.5,24.7,28.6);


(lib.barredora007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-7.2,-7.1).lineTo(7.2,-7.7).lineTo(0.5,7.7).closePath();
	mask.setTransform(7.2,7.7);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.1).lineTo(7.2,-7.7).lineTo(0.5,7.7).closePath();
	this.shape.setTransform(7.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,15.5);


(lib.barredora006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-17.4,9.7).lineTo(-19.2,-2.1).lineTo(-19.2,-6.4).curveTo(-19.2,-7.7,-18.3,-8.6).curveTo(-17.3,-9.7,-16.1,-9.7).lineTo(16.1,-9.7).curveTo(17.4,-9.7,18.3,-8.6).curveTo(19.2,-7.7,19.2,-6.4).lineTo(19.2,-2.4).lineTo(16.9,9.7).closePath();
	mask.setTransform(21.4,12.3);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,5).lineTo(-1.8,-5).lineTo(1.8,-5).lineTo(1.8,5).closePath();
	this.shape.setTransform(2.9,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_1.setTransform(6.2,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_2.setTransform(9.5,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_3.setTransform(12.9,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_4.setTransform(16.2,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_5.setTransform(19.5,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_6.setTransform(22.9,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_7.setTransform(26.3,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_8.setTransform(29.6,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,5).lineTo(-1.6,-5).lineTo(1.6,-5).lineTo(1.6,5).closePath();
	this.shape_9.setTransform(33,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5).lineTo(-1.7,-5).lineTo(1.7,-5).lineTo(1.7,5).closePath();
	this.shape_10.setTransform(36.3,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,5).lineTo(-1.3,-5).lineTo(1.3,-5).lineTo(1.3,5).closePath();
	this.shape_11.setTransform(39.3,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(0,10.9).lineTo(-3.1,-10.9).lineTo(0.5,-10.9).lineTo(3.1,10.9).closePath();
	this.shape_12.setTransform(3.1,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,10.9).lineTo(-2.4,-10.9).lineTo(1.2,-10.9).lineTo(2.4,10.9).closePath();
	this.shape_13.setTransform(9.5,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,10.9).lineTo(-1.8,-10.9).lineTo(1.8,-10.9).lineTo(1.8,10.9).closePath();
	this.shape_14.setTransform(16.1,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,10.9).lineTo(-1.5,-10.9).lineTo(2.1,-10.9).lineTo(0.9,10.9).closePath();
	this.shape_15.setTransform(23,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,10.9).lineTo(-1,-10.9).lineTo(2.6,-10.9).lineTo(0.4,10.9).closePath();
	this.shape_16.setTransform(29.6,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.2,10.9).lineTo(-0.4,-10.9).lineTo(3.2,-10.9).lineTo(-0.2,10.9).closePath();
	this.shape_17.setTransform(36.2,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,10.9).lineTo(-2.7,-10.9).lineTo(0.8,-10.9).lineTo(2.7,10.9).closePath();
	this.shape_18.setTransform(6.3,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.1,10.9).lineTo(-2.1,-10.9).lineTo(1.5,-10.9).lineTo(2.1,10.9).closePath();
	this.shape_19.setTransform(12.8,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,10.9).lineTo(-1.7,-10.9).lineTo(1.8,-10.9).lineTo(1.3,10.9).closePath();
	this.shape_20.setTransform(19.6,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,10.9).lineTo(-1.2,-10.9).lineTo(2.4,-10.9).lineTo(0.7,10.9).closePath();
	this.shape_21.setTransform(26.3,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,10.9).lineTo(-0.6,-10.9).lineTo(2.9,-10.9).lineTo(0.6,10.9).closePath();
	this.shape_22.setTransform(32.9,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,10.9).lineTo(-0.1,-10.9).lineTo(3.5,-10.9).lineTo(0.1,10.9).closePath();
	this.shape_23.setTransform(39.4,12);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.4,9.7).lineTo(-19.2,-2.1).lineTo(-19.2,-6.4).curveTo(-19.2,-7.7,-18.3,-8.6).curveTo(-17.3,-9.7,-16.1,-9.7).lineTo(16.1,-9.7).curveTo(17.4,-9.7,18.3,-8.6).curveTo(19.2,-7.7,19.2,-6.4).lineTo(19.2,-2.4).lineTo(16.9,9.7).closePath();
	this.shape_24.setTransform(21.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,2.7,38.4,19.3);


(lib.barredora005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-16.5,9.7).curveTo(-18.8,4.6,-18.8,-0.2).curveTo(-18.8,-9.2,-13.3,-14).curveTo(-8.3,-18.3,-0,-18.3).curveTo(8.3,-18.3,13.3,-14).curveTo(18.8,-9.2,18.8,-0.2).curveTo(18.8,4.4,16.7,9.4).curveTo(14.8,13.9,11.6,17.8).curveTo(1.4,15.8,-11,18.3).curveTo(-14.5,14.4,-16.5,9.7).closePath();
	mask.setTransform(18.8,20.8);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.2,19.8).curveTo(-0.3,11.9,-0.2,-4.7).lineTo(-0.1,-19.8).lineTo(0.2,-19.8).lineTo(0.1,-4.7).curveTo(-0.1,10.3,0.1,19.8).closePath();
	this.shape.setTransform(18.8,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,19.9).curveTo(-2.1,12.7,-2.3,3.7).curveTo(-2.4,-3.8,-1.3,-9.9).curveTo(-0.1,-16.2,2.1,-19.9).lineTo(2.3,-19.8).curveTo(-1.4,-13.4,-1.9,-1.1).curveTo(-2.4,10.3,-0,19.9).closePath();
	this.shape_1.setTransform(16.7,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,9.7).curveTo(-5.3,3.8,-4.8,-1.8).curveTo(-4.3,-8.1,-1.8,-12.8).curveTo(0.7,-17.5,4.8,-20.1).lineTo(4.9,-19.9).curveTo(0.8,-17.3,-1.6,-12.7).curveTo(-4,-8,-4.5,-1.8).curveTo(-5,3.9,-3.7,9.7).curveTo(-2.5,15.4,0,20.1).lineTo(-0.3,20.1).curveTo(-2.8,15.4,-4,9.7).closePath();
	this.shape_2.setTransform(14,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.5,9.2).curveTo(-7.9,2.6,-7.2,-3.3).curveTo(-6.6,-8.3,-3.7,-12.3).curveTo(-0,-17.4,7.3,-20.2).lineTo(7.4,-19.9).curveTo(1.1,-17.6,-2.6,-13.3).curveTo(-6.2,-9.1,-6.9,-3.3).curveTo(-7.6,2.7,-5.2,9.2).curveTo(-3.1,15.1,1.1,20.2).lineTo(0.7,20.2).curveTo(-3.4,15,-5.5,9.2).closePath();
	this.shape_3.setTransform(11.3,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(0.1,19.8).curveTo(2.4,10.2,1.9,-1.1).curveTo(1.3,-13.3,-2.3,-19.7).lineTo(-2.1,-19.8).curveTo(0.1,-16,1.2,-9.8).curveTo(2.4,-3.6,2.3,3.8).curveTo(2.1,12.5,0.4,19.8).closePath();
	this.shape_4.setTransform(21.1,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(0.2,19.9).curveTo(2.7,15.4,3.8,9.7).curveTo(5,4,4.6,-1.7).curveTo(4.1,-7.8,1.6,-12.6).curveTo(-0.8,-17.2,-4.9,-19.8).lineTo(-4.8,-20).curveTo(-0.6,-17.4,1.9,-12.7).curveTo(4.3,-7.9,4.8,-1.7).curveTo(5.3,4,4.1,9.7).curveTo(2.9,15.4,0.5,20).closePath();
	this.shape_5.setTransform(23.7,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,20.2).curveTo(3.3,14.9,5.4,8.7).curveTo(7.6,2.3,6.9,-3.3).curveTo(6.3,-9.1,2.6,-13.4).curveTo(-1,-17.6,-7.4,-20).lineTo(-7.3,-20.3).curveTo(0,-17.5,3.8,-12.3).curveTo(6.6,-8.4,7.2,-3.3).curveTo(7.9,2.3,5.7,8.8).curveTo(3.6,15,-0.7,20.3).closePath();
	this.shape_6.setTransform(26.3,20.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.5,9.7).curveTo(-18.8,4.6,-18.8,-0.2).curveTo(-18.8,-9.2,-13.3,-14).curveTo(-8.3,-18.3,-0,-18.3).curveTo(8.3,-18.3,13.3,-14).curveTo(18.8,-9.2,18.8,-0.2).curveTo(18.8,4.4,16.7,9.4).curveTo(14.8,13.9,11.6,17.8).curveTo(1.4,15.8,-11,18.3).curveTo(-14.5,14.4,-16.5,9.7).closePath();
	this.shape_7.setTransform(18.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.5,37.7,36.7);


(lib.barredora004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-7.2,-7.7).lineTo(7.2,-7.3).lineTo(-0.5,7.7).closePath();
	mask.setTransform(7.2,7.7);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.7).lineTo(7.2,-7.3).lineTo(-0.5,7.7).closePath();
	this.shape.setTransform(7.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,15.3);


(lib.barredora003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-6.4,-6.5).lineTo(6.4,-6.8).lineTo(0.4,6.8).closePath();
	mask.setTransform(6.4,6.8);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.5).lineTo(6.4,-6.8).lineTo(0.4,6.8).closePath();
	this.shape.setTransform(6.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,13.5);


(lib.barredora002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-8,27.9).curveTo(-12.6,24.7,-16.8,19.5).curveTo(-26.8,7.2,-26.8,-5.4).curveTo(-26.8,-18.1,-18.9,-24.9).curveTo(-11.8,-31.1,0,-31.1).curveTo(11.8,-31.1,18.9,-24.9).curveTo(26.8,-18.1,26.8,-5.4).curveTo(26.8,7.2,17,19.5).curveTo(7.9,31.1,0.2,31.1).curveTo(-3.3,31.1,-8,27.9).closePath();
	mask.setTransform(26.8,34.3);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(6.4,31.6).lineTo(3.8,28.9).curveTo(1.9,26.7,0.7,25.1).lineTo(-1.8,21.6).lineTo(-4.8,16.1).lineTo(-6.7,11.3).lineTo(-7.7,7.9).lineTo(-8.4,4.4).lineTo(-8.9,-0.2).lineTo(-9,-2.9).curveTo(-9,-4.8,-8.8,-6.6).curveTo(-8.4,-10.5,-7.5,-13.5).curveTo(-6.5,-17,-5.2,-19.7).curveTo(-3.9,-22.6,-2.4,-24.8).lineTo(0.6,-28.8).lineTo(5.7,-33.7).lineTo(2.8,-22.7).curveTo(2.4,-21,1.7,-17.6).curveTo(1.3,-15.1,1,-12).lineTo(0.7,-7.6).lineTo(0.9,0.8).lineTo(2.2,9.1).lineTo(9,33.7).closePath();
	this.shape.setTransform(17.5,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,16.3).lineTo(-1.4,4.5).lineTo(-0.9,-0.1).lineTo(-0.7,-9.2).lineTo(-1,-12.1).curveTo(-1.3,-15.1,-1.7,-17.7).lineTo(-5.6,-33.8).lineTo(-1.9,-30.4).lineTo(0.9,-27.1).lineTo(1.6,-26.1).lineTo(2.3,-24.9).curveTo(3.8,-22.7,5.2,-19.9).curveTo(6.6,-16.6,7.4,-13.7).curveTo(8.4,-10.4,8.7,-6.6).curveTo(8.9,-5,8.9,-3).lineTo(8.8,-0.2).lineTo(8.3,4.3).lineTo(7.1,9.6).lineTo(4.7,16.1).lineTo(1.7,21.7).lineTo(-0.7,25.2).lineTo(-3.7,29).lineTo(-6.4,31.6).lineTo(-7.4,32.6).lineTo(-8.9,33.8).closePath();
	this.shape_1.setTransform(35.7,34);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-8,27.9).curveTo(-12.6,24.7,-16.8,19.5).curveTo(-26.8,7.2,-26.8,-5.4).curveTo(-26.8,-18.1,-18.9,-24.9).curveTo(-11.8,-31.1,0,-31.1).curveTo(11.8,-31.1,18.9,-24.9).curveTo(26.8,-18.1,26.8,-5.4).curveTo(26.8,7.2,17,19.5).curveTo(7.9,31.1,0.2,31.1).curveTo(-3.3,31.1,-8,27.9).closePath();
	this.shape_2.setTransform(26.8,34.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.2,53.6,62.1);


(lib.barredora001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-6.4,-6.8).lineTo(6.4,-6.3).lineTo(-0.4,6.8).closePath();
	mask.setTransform(6.4,6.8);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.8).lineTo(6.4,-6.3).lineTo(-0.4,6.8).closePath();
	this.shape.setTransform(6.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,13.7);


(lib.barredorsin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-9.3,-6.6).lineTo(-5.5,-7).lineTo(9.3,6.4).lineTo(1,7).closePath();
	this.shape.setTransform(18.7,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-5.4,-7).lineTo(-2.3,-7.2).lineTo(5.4,6.8).lineTo(-0.7,7.3).closePath();
	this.shape_1.setTransform(8.2,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-2.3,-7.3).lineTo(0.2,-7.4).lineTo(2.9,7).lineTo(-2.9,7.4).closePath();
	this.shape_2.setTransform(-0.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#9E9E9E").beginStroke().moveTo(1.4,-7.3).lineTo(4,-7.5).lineTo(1.5,7.1).lineTo(-4,7.5).closePath();
	this.shape_3.setTransform(-9.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#9E9E9E").beginStroke().moveTo(5.1,-7.8).lineTo(8.3,-8).lineTo(-0.9,7.3).lineTo(-8.3,8).closePath();
	this.shape_4.setTransform(-19.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-3.7,-6.8).lineTo(-1,-7.2).lineTo(3.7,7).lineTo(-1.3,7.2).closePath();
	this.shape_5.setTransform(3.8,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-6.9,-6.9).lineTo(-3.4,-7.1).lineTo(6.9,6.5).lineTo(0.7,7.1).closePath();
	this.shape_6.setTransform(12.8,-1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-0.1,-7.2).lineTo(2.6,-7.5).lineTo(2,7.3).lineTo(-2.6,7.5).closePath();
	this.shape_7.setTransform(-5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#D9D9D9").beginStroke().moveTo(2.8,-7.4).lineTo(6.4,-7.8).lineTo(1,7).lineTo(-6.4,7.8).closePath();
	this.shape_8.setTransform(-14.1,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-9.3,-6.6).lineTo(-5.5,-7).lineTo(9.3,6.4).lineTo(1,7).closePath();
	this.shape_9.setTransform(18.7,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-5.4,-7).lineTo(-2.3,-7.2).lineTo(5.4,6.8).lineTo(-0.7,7.3).closePath();
	this.shape_10.setTransform(8.2,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-2.3,-7.3).lineTo(0.2,-7.4).lineTo(2.9,7).lineTo(-2.9,7.4).closePath();
	this.shape_11.setTransform(-0.1,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#D9D9D9").beginStroke().moveTo(1.4,-7.3).lineTo(4,-7.5).lineTo(1.5,7.1).lineTo(-4,7.5).closePath();
	this.shape_12.setTransform(-9.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#D9D9D9").beginStroke().moveTo(5.1,-7.8).lineTo(8.3,-8).lineTo(-0.9,7.3).lineTo(-8.3,8).closePath();
	this.shape_13.setTransform(-19.6,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-3.7,-6.8).lineTo(-1,-7.2).lineTo(3.7,7).lineTo(-1.3,7.2).closePath();
	this.shape_14.setTransform(3.8,-0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-6.9,-6.9).lineTo(-3.4,-7.1).lineTo(6.9,6.5).lineTo(0.7,7.1).closePath();
	this.shape_15.setTransform(12.8,-1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-0.1,-7.2).lineTo(2.6,-7.5).lineTo(2,7.3).lineTo(-2.6,7.5).closePath();
	this.shape_16.setTransform(-5,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#9E9E9E").beginStroke().moveTo(2.8,-7.4).lineTo(6.4,-7.8).lineTo(1,7).lineTo(-6.4,7.8).closePath();
	this.shape_17.setTransform(-14.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},3).wait(3));

	// Capa 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#999999").beginStroke().moveTo(-14.6,-6.8).lineTo(13.1,-9).lineTo(28,4.5).lineTo(-28,9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-9,56,18.1);


(lib.barredora00handss = function(mode,startPosition,loop) {
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


(lib.barredorarueda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-31.3,23.4).lineTo(30.1,-25).lineTo(31.3,-23.4).lineTo(-30,25).closePath();
	this.shape.setTransform(-16.8,36.7,0.997,0.997,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-31.1,-24).lineTo(-29.8,-25.6).lineTo(31.1,24.1).lineTo(29.8,25.6).closePath();
	this.shape_1.setTransform(30.4,24.8,0.999,0.999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.5,41.6).lineTo(-17.5,-41.6).lineTo(17.5,33.7).lineTo(15.7,34.6).lineTo(-15.5,-32.4).lineTo(-15.5,41.6).closePath();
	this.shape_2.setTransform(16.5,36.9,0.999,0.999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-31.3,23.4).lineTo(30.1,-25).lineTo(31.3,-23.4).lineTo(-30,25).closePath();
	this.shape_3.setTransform(-30.6,24.1,0.999,0.999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,-8).lineTo(-76.3,9.6).lineTo(-76.8,7.7).lineTo(-0.3,-10.1).lineTo(76.8,8.1).lineTo(76.3,10.1).closePath();
	this.shape_4.setTransform(0.3,8.4,0.999,0.999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(-39.9,6.7).lineTo(-39.4,4.8).lineTo(31.7,22.1).lineTo(-25.5,-24.7).lineTo(-24.2,-26.3).lineTo(39.9,26.3).closePath();
	this.shape_5.setTransform(-36.8,-24.2,0.999,0.999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.1,-35.1).lineTo(-15.3,-36).lineTo(17.1,35.2).lineTo(15.3,36).closePath();
	this.shape_6.setTransform(-17.3,-35.6,0.999,0.999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(23.7,-26.2).lineTo(25,-24.7).lineTo(-32.2,22.2).lineTo(39.9,4.8).lineTo(40.4,6.7).lineTo(-40.4,26.2).closePath();
	this.shape_7.setTransform(36.3,-24.2,0.999,0.999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.2,-41.6).lineTo(-15.2,-41.6).lineTo(-15.2,32.3).lineTo(15.4,-34.7).lineTo(17.2,-33.8).lineTo(-17.2,41.6).closePath();
	this.shape_8.setTransform(16.2,-36.9,0.999,0.999);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-25.8,22.6).lineTo(-37.6,10.7).lineTo(-32.2,-5.3).lineTo(-30.4,-22).lineTo(-14.5,-27.8).lineTo(-0.2,-36.7).lineTo(14.1,-27.9).lineTo(29.9,-22.3).lineTo(32,-5.7).lineTo(37.6,10.2).lineTo(25.9,22.3).lineTo(16.9,36.5).lineTo(0.2,34.9).lineTo(-16.6,36.7).closePath().moveTo(-13.7,-25.9).lineTo(-28.5,-20.5).lineTo(-30.3,-4.8).lineTo(-35.3,10.1).lineTo(-24.1,21.4).lineTo(-15.6,34.6).lineTo(0.1,32.8).lineTo(0.2,32.8).lineTo(15.8,34.4).lineTo(24.4,21).lineTo(35.2,9.7).lineTo(30.1,-5.3).lineTo(28.1,-20.9).lineTo(13.1,-26.2).lineTo(-0.2,-34.3).closePath();
	this.shape_9.setTransform(-0.4,-1.9,0.999,0.999);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-29.6,26).lineTo(-43.3,12.3).lineTo(-37.1,-6.1).lineTo(-35,-25.4).lineTo(-16.8,-32).lineTo(-0.3,-42.3).lineTo(16.3,-32.2).lineTo(34.5,-25.7).lineTo(37,-6.5).lineTo(43.3,11.8).lineTo(29.8,25.7).lineTo(19.4,42.1).lineTo(0.2,40.1).lineTo(-19.1,42.3).closePath().moveTo(-15.9,-30).lineTo(-32.9,-23.8).lineTo(-35,-5.5).lineTo(-40.8,11.7).lineTo(-27.8,24.7).lineTo(-18,40).lineTo(0.2,38).lineTo(0.2,38).lineTo(18.3,39.8).lineTo(28.1,24.2).lineTo(40.8,11.2).lineTo(34.8,-6.1).lineTo(32.5,-24.1).lineTo(15.2,-30.3).lineTo(-0.3,-39.7).closePath();
	this.shape_10.setTransform(-0.4,-1.9,0.999,0.999);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.5,6.5).curveTo(-9.2,3.8,-9.2,-0).curveTo(-9.2,-3.8,-6.5,-6.5).curveTo(-3.8,-9.2,-0,-9.2).curveTo(3.8,-9.2,6.5,-6.5).curveTo(9.2,-3.8,9.2,-0).curveTo(9.2,3.8,6.5,6.5).curveTo(3.8,9.2,-0,9.2).curveTo(-3.8,9.2,-6.5,6.5).closePath();
	this.shape_11.setTransform(0,0,0.999,0.999);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-31,73.3).curveTo(-45.2,67.3,-56.2,56.2).curveTo(-67.3,45.2,-73.3,31).curveTo(-79.6,16.2,-79.6,-0).curveTo(-79.6,-16.2,-73.3,-31).curveTo(-67.3,-45.2,-56.2,-56.2).curveTo(-45.2,-67.3,-31,-73.3).curveTo(-16.2,-79.6,-0,-79.6).curveTo(16.1,-79.6,30.9,-73.3).curveTo(45.2,-67.3,56.2,-56.2).curveTo(67.3,-45.2,73.3,-31).curveTo(79.6,-16.2,79.6,-0).curveTo(79.6,16.2,73.3,31).curveTo(67.3,45.2,56.2,56.2).curveTo(45.2,67.3,30.9,73.3).curveTo(16.1,79.6,-0,79.6).curveTo(-16.2,79.6,-31,73.3).closePath().moveTo(-30.2,-71.5).curveTo(-44.1,-65.6,-54.8,-54.8).curveTo(-65.6,-44,-71.5,-30.1).curveTo(-77.6,-15.7,-77.6,-0).curveTo(-77.6,15.7,-71.5,30.1).curveTo(-65.6,44,-54.8,54.8).curveTo(-44.1,65.6,-30.2,71.5).curveTo(-15.8,77.5,-0,77.6).curveTo(15.7,77.5,30.1,71.5).curveTo(44.1,65.6,54.8,54.8).curveTo(65.5,44,71.4,30.1).curveTo(77.5,15.7,77.5,-0).curveTo(77.5,-15.7,71.4,-30.1).curveTo(65.5,-44,54.8,-54.8).curveTo(44.1,-65.6,30.1,-71.5).curveTo(15.7,-77.5,-0,-77.6).curveTo(-15.8,-77.5,-30.2,-71.5).closePath();
	this.shape_12.setTransform(-1,-0.4,0.998,0.998,50.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-32.9,77.9).curveTo(-48.1,71.5,-59.8,59.8).curveTo(-71.5,48.1,-78,32.9).curveTo(-84.6,17.2,-84.6,-0).curveTo(-84.6,-17.2,-78,-32.9).curveTo(-71.5,-48.1,-59.8,-59.8).curveTo(-48.1,-71.5,-32.9,-77.9).curveTo(-17.2,-84.6,-0,-84.6).curveTo(17.2,-84.6,32.9,-77.9).curveTo(48.1,-71.5,59.8,-59.8).curveTo(71.5,-48.1,78,-32.9).curveTo(84.6,-17.2,84.6,-0).curveTo(84.6,17.2,78,32.9).curveTo(71.5,48.1,59.8,59.8).curveTo(48.1,71.5,32.9,77.9).curveTo(17.2,84.6,-0,84.6).curveTo(-17.2,84.6,-32.9,77.9).closePath().moveTo(-31.3,-74.2).curveTo(-45.8,-68.1,-56.9,-57).curveTo(-68.1,-45.8,-74.2,-31.3).curveTo(-80.6,-16.3,-80.6,-0).curveTo(-80.6,16.3,-74.2,31.3).curveTo(-68.1,45.8,-56.9,57).curveTo(-45.8,68.1,-31.3,74.2).curveTo(-16.4,80.6,-0,80.5).curveTo(16.4,80.6,31.3,74.2).curveTo(45.8,68.1,56.9,57).curveTo(68.1,45.8,74.2,31.3).curveTo(80.6,16.3,80.6,-0).curveTo(80.6,-16.3,74.2,-31.3).curveTo(68.1,-45.8,56.9,-57).curveTo(45.8,-68.1,31.3,-74.2).curveTo(16.3,-80.6,-0,-80.6).curveTo(-16.4,-80.6,-31.3,-74.2).closePath();
	this.shape_13.setTransform(0,0,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-84.5,169.1,169);


(lib.barredoraconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.barredora00handss();
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


(lib.barredora_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.barredorsin();
	this.instance.parent = this;
	this.instance.setTransform(-32,79.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DF1421").beginStroke().moveTo(-4.6,9.5).curveTo(-7.1,9.6,-9.2,8.1).curveTo(-10.2,7.3,-10.6,5.6).lineTo(-10.9,3.9).lineTo(-10.9,-8.5).lineTo(-10.8,-8.9).curveTo(-10.6,-9.5,-9.9,-9.5).lineTo(-5.9,-9.5).curveTo(-4.6,-9.5,-4.8,-8.4).lineTo(-4.8,1.6).curveTo(-4.8,3.5,-4.4,4).curveTo(-3.5,5.2,-0.2,5.2).curveTo(3.1,5.4,4.2,3.9).curveTo(4.6,3.3,4.6,1.6).lineTo(4.6,-8.3).lineTo(4.7,-8.9).curveTo(4.9,-9.5,5.6,-9.6).lineTo(9.7,-9.6).curveTo(10.6,-9.6,10.8,-8.9).curveTo(11,-8.7,10.9,-8.4).lineTo(10.9,3).curveTo(11.1,5.4,9.9,7.2).curveTo(9.1,8.5,6.7,9.2).lineTo(4.4,9.5).closePath();
	this.shape.setTransform(52,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DF1421").beginStroke().moveTo(-4.6,9.5).curveTo(-7.1,9.6,-9.2,8.1).curveTo(-10.2,7.3,-10.7,5.6).lineTo(-11,3.9).lineTo(-11,-8.5).lineTo(-10.9,-8.9).curveTo(-10.6,-9.5,-9.9,-9.5).lineTo(-5.9,-9.5).curveTo(-4.6,-9.5,-4.8,-8.4).lineTo(-4.8,1.6).curveTo(-4.8,3.5,-4.4,4).curveTo(-3.6,5.2,-0.2,5.2).curveTo(3.1,5.4,4.1,3.9).curveTo(4.6,3.3,4.6,1.6).lineTo(4.6,-8.3).lineTo(4.7,-8.9).curveTo(4.9,-9.5,5.5,-9.6).lineTo(9.7,-9.6).curveTo(10.6,-9.6,10.8,-8.9).curveTo(11,-8.7,10.9,-8.4).lineTo(10.9,3).curveTo(11.1,5.4,9.8,7.2).curveTo(9.1,8.5,6.7,9.2).lineTo(4.4,9.5).closePath();
	this.shape_1.setTransform(0.5,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DF1421").beginStroke().moveTo(9.9,9.6).lineTo(-6.5,9.6).curveTo(-9.5,9.6,-10.8,7.5).lineTo(-11.5,5.5).curveTo(-11.6,4.6,-11.4,3.6).curveTo(-10.8,1.6,-9,0.8).curveTo(-6,-0.5,4.3,-4.1).curveTo(4.8,-4.3,4.8,-4.6).curveTo(4.8,-5.1,3.9,-5.2).curveTo(3,-5.4,-3.6,-5.3).lineTo(-10,-5.2).curveTo(-11,-5.1,-11,-6.2).lineTo(-11,-8.5).curveTo(-10.9,-9.3,-10.2,-9.5).curveTo(-9.9,-9.6,-9.6,-9.5).lineTo(-3.7,-9.5).lineTo(6.2,-9.4).curveTo(9.6,-9.3,10.9,-7.4).curveTo(11.5,-6.4,11.5,-5.4).lineTo(11.3,-3.4).curveTo(10.8,-1.2,8.7,-0.4).curveTo(-0.8,2.8,-3.4,4).curveTo(-5,4.6,-4.7,5).curveTo(-4.5,5.2,-3.6,5.2).lineTo(10.3,5.3).curveTo(11.1,5.4,11.1,6.1).lineTo(11.1,8.4).curveTo(11.1,9.6,10.1,9.6).lineTo(9.9,9.6).closePath();
	this.shape_2.setTransform(26.6,-4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-11.1,8.4).lineTo(-11.1,6.1).curveTo(-11.1,5.4,-10.3,5.3).lineTo(-9.5,5.2).lineTo(3.6,5.2).curveTo(4.4,5.2,4.7,5).curveTo(5,4.6,3.4,4).curveTo(1.9,3.3,-2.5,1.8).lineTo(-8.8,-0.4).curveTo(-10.8,-1.2,-11.4,-3.4).lineTo(-11.5,-5.4).lineTo(-10.9,-7.4).curveTo(-9.6,-9.3,-6.2,-9.4).curveTo(-0.8,-9.6,9.6,-9.5).lineTo(10.2,-9.5).curveTo(10.9,-9.3,11,-8.5).lineTo(11,-6.2).curveTo(11,-5.1,9.9,-5.2).lineTo(3.6,-5.3).curveTo(-3,-5.4,-3.9,-5.2).curveTo(-4.8,-5.1,-4.8,-4.6).curveTo(-4.8,-4.3,-4.3,-4.1).lineTo(1.4,-2.1).curveTo(7.1,-0,9,0.8).curveTo(10.8,1.6,11.4,3.6).curveTo(11.6,4.6,11.5,5.5).curveTo(11.5,6.5,10.8,7.5).curveTo(9.4,9.6,6.4,9.6).lineTo(-10,9.6).lineTo(-10.2,9.6).curveTo(-11.1,9.6,-11.1,8.4).closePath();
	this.shape_3.setTransform(-25.5,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(2.2,9.6).lineTo(-2.1,9.6).curveTo(-2.9,9.6,-3.1,9.1).lineTo(-3.2,8.5).lineTo(-3.2,-8.7).curveTo(-3.2,-9.4,-2.5,-9.5).lineTo(-1.9,-9.6).lineTo(2.2,-9.6).lineTo(2.7,-9.5).curveTo(3.2,-9.3,3.1,-8.6).lineTo(3.1,8.6).curveTo(3.1,9.6,2.4,9.6).lineTo(2.2,9.6).closePath();
	this.shape_4.setTransform(-43.9,-4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.8).curveTo(-2.3,1.6,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.6,1.9,1.9).curveTo(2.1,1.5,2.1,0.8).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-4).lineTo(5.1,1.4).lineTo(5.1,2).curveTo(5,2.9,4.6,3.4).curveTo(4,4.4,2,4.5).closePath();
	this.shape_5.setTransform(-104.3,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.8).curveTo(-2.3,1.6,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.6,1.9,1.9).curveTo(2.1,1.5,2.1,0.8).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-4).lineTo(5.1,1.4).lineTo(5.1,2).curveTo(5,2.9,4.6,3.4).curveTo(4,4.4,2,4.5).closePath();
	this.shape_6.setTransform(-128.6,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.5).curveTo(-5.5,2.1,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).lineTo(2,-2).lineTo(2.3,-2.2).curveTo(2.3,-2.3,2.3,-2.3).curveTo(2.2,-2.3,2.2,-2.4).curveTo(2.1,-2.4,2.1,-2.4).curveTo(2,-2.4,1.9,-2.5).curveTo(1.4,-2.6,-1.7,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.5,-5.2,-3).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).lineTo(5.4,-1.6).curveTo(5.1,-0.6,4.1,-0.2).lineTo(-1.6,1.8).curveTo(-2.4,2.1,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.8).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_7.setTransform(-116.3,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.5).lineTo(1.7,2.5).curveTo(2.1,2.5,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.3,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.4).curveTo(-0.4,-4.5,4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.4).lineTo(1.7,-2.5).curveTo(-1.4,-2.5,-1.8,-2.4).curveTo(-1.9,-2.4,-2,-2.4).curveTo(-2.1,-2.4,-2.2,-2.4).curveTo(-2.2,-2.3,-2.2,-2.3).curveTo(-2.2,-2.2,-2.2,-2.2).curveTo(-2.2,-2.2,-2.2,-2.1).curveTo(-2.2,-2.1,-2.2,-2.1).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-2,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.6).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_8.setTransform(-140.8,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.4,1.4,-4.4).curveTo(1.4,-4.3,1.4,-4.3).curveTo(1.5,-4.2,1.5,-4.2).curveTo(1.5,-4.1,1.5,-4).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_9.setTransform(-149.5,22.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#757575").beginStroke().moveTo(-14.2,-0.5).lineTo(13.4,-2.8).lineTo(14.2,0.6).lineTo(-13.4,2.8).closePath();
	this.shape_10.setTransform(-32.6,69.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#757575").beginStroke().moveTo(-15.9,4.2).curveTo(-22.3,3.5,-23.2,-0).curveTo(-22,-2.7,-15.8,-3.7).curveTo(-10.8,-4.5,-0,-4.5).curveTo(13.7,-4.5,15.7,-4.2).curveTo(22.1,-3.6,23.1,-0).curveTo(21.7,3.1,15.6,4).curveTo(11.9,4.5,-0,4.5).curveTo(-13.4,4.5,-15.9,4.2).closePath();
	this.shape_11.setTransform(24.5,83.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#757575").beginStroke().moveTo(-19.2,4.5).curveTo(-19.9,4.5,-20.5,4.1).curveTo(-21,3.5,-21,2.8).lineTo(-21,-2.7).curveTo(-21,-3.5,-20.5,-4).curveTo(-19.9,-4.5,-19.2,-4.6).lineTo(19.2,-4.6).curveTo(20,-4.5,20.5,-4).curveTo(21,-3.5,21,-2.7).lineTo(21,2.8).curveTo(21,3.5,20.5,4.1).curveTo(20,4.5,19.2,4.5).closePath();
	this.shape_12.setTransform(22.3,78.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#D9D9D9").beginStroke().moveTo(6.4,4.1).lineTo(-8.2,0.3).curveTo(-9.5,-0.2,-8.8,-2.8).curveTo(-8.5,-3.6,-7.8,-3.9).curveTo(-7.1,-4.3,-6.3,-4.1).lineTo(7.6,0.3).curveTo(8.4,0.5,8.8,1.2).curveTo(9.2,2,8.9,2.8).curveTo(8.7,3.6,7.9,4).curveTo(7.5,4.2,7.1,4.2).lineTo(6.4,4.1).closePath();
	this.shape_13.setTransform(18.4,72.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,3.3).curveTo(-4.3,3.1,-4.6,2.5).lineTo(-4.8,2.1).curveTo(-5.1,1.4,-4.9,0.7).curveTo(-4.6,0.1,-4,-0.3).lineTo(2.3,-3.3).curveTo(3,-3.6,3.7,-3.3).curveTo(4.4,-3.1,4.7,-2.4).lineTo(4.8,-2.1).curveTo(5.2,-1.5,4.9,-0.7).curveTo(4.7,-0.1,4,0.3).lineTo(-2.3,3.3).curveTo(-2.7,3.5,-3,3.5).lineTo(-3.6,3.3).closePath();
	this.shape_14.setTransform(170.2,47.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#999999").beginStroke().moveTo(5.4,37).curveTo(4.8,36.7,4.6,36).lineTo(-10.3,-34.8).curveTo(-10.5,-35.5,-10.1,-36.1).curveTo(-9.7,-36.6,-9,-36.8).lineTo(-6.7,-37.3).curveTo(-6,-37.4,-5.4,-37).curveTo(-4.8,-36.6,-4.6,-36).lineTo(10.3,34.8).curveTo(10.5,35.5,10.1,36).curveTo(9.7,36.7,9,36.8).lineTo(6.7,37.3).lineTo(6.3,37.3).curveTo(5.8,37.3,5.4,37).closePath();
	this.shape_15.setTransform(163.6,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-2.4,-4.5).curveTo(-1,-3.6,0.5,-0.7).curveTo(2.1,2.2,2.4,4.5).closePath();
	this.shape_16.setTransform(149.5,-59.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#9E9E9E").beginStroke().moveTo(7,2.9).lineTo(-7.7,0).curveTo(-8.2,-0.1,-8.5,-0.6).curveTo(-8.8,-1.1,-8.6,-1.7).curveTo(-8.5,-2.3,-8.1,-2.7).curveTo(-7.6,-3,-7.1,-3).lineTo(7.6,-0).curveTo(8.2,0,8.5,0.6).curveTo(8.7,1.1,8.6,1.7).curveTo(8.5,2.3,8,2.7).curveTo(7.7,3,7.3,3).lineTo(7,2.9).closePath();
	this.shape_17.setTransform(20.2,68.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-6.9,1.3).curveTo(-7.3,0.9,-7.3,0.2).curveTo(-7.3,-0.4,-6.9,-0.8).curveTo(-6.5,-1.3,-6,-1.3).lineTo(5.9,-1.7).curveTo(6.5,-1.7,6.9,-1.3).curveTo(7.3,-0.8,7.3,-0.2).curveTo(7.3,0.4,6.9,0.9).curveTo(6.5,1.3,6,1.3).lineTo(-5.9,1.7).curveTo(-6.5,1.7,-6.9,1.3).closePath();
	this.shape_18.setTransform(24.1,53);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#9E9E9E").beginStroke().moveTo(7.1,3).lineTo(-7.7,0).curveTo(-8.2,-0.1,-8.5,-0.6).curveTo(-8.7,-1.1,-8.6,-1.7).curveTo(-8.5,-2.3,-8.1,-2.7).curveTo(-7.6,-3,-7.1,-2.9).lineTo(7.7,-0).curveTo(8.2,0.1,8.5,0.6).curveTo(8.8,1.1,8.6,1.7).curveTo(8.5,2.3,8.1,2.7).curveTo(7.7,3,7.3,3).lineTo(7.1,3).closePath();
	this.shape_19.setTransform(21.6,65.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#9E9E9E").beginStroke().moveTo(6.6,2.8).lineTo(-7.3,0.2).curveTo(-7.8,0.1,-8.1,-0.4).curveTo(-8.4,-0.9,-8.3,-1.5).curveTo(-8.2,-2.2,-7.7,-2.5).curveTo(-7.2,-2.9,-6.7,-2.8).lineTo(7.3,-0.2).curveTo(7.8,-0.1,8.1,0.4).curveTo(8.3,0.9,8.2,1.5).curveTo(8.1,2.1,7.7,2.5).curveTo(7.3,2.8,6.9,2.8).lineTo(6.6,2.8).closePath();
	this.shape_20.setTransform(23.4,59.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-5.9,1.3).curveTo(-6.3,0.9,-6.3,0.2).curveTo(-6.3,-0.4,-6,-0.8).curveTo(-5.7,-1.3,-5.2,-1.3).lineTo(5.1,-1.7).curveTo(5.6,-1.8,5.9,-1.3).curveTo(6.2,-0.9,6.3,-0.3).curveTo(6.3,0.4,6,0.8).curveTo(5.7,1.3,5.2,1.3).lineTo(-5.1,1.7).curveTo(-5.6,1.7,-5.9,1.3).closePath();
	this.shape_21.setTransform(29.5,46.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-6.1,1.3).curveTo(-6.6,1.3,-7,0.9).curveTo(-7.3,0.4,-7.3,-0.2).curveTo(-7.2,-0.9,-6.8,-1.3).curveTo(-6.4,-1.7,-5.9,-1.7).lineTo(6,-1.4).curveTo(6.6,-1.3,6.9,-0.9).curveTo(7.3,-0.4,7.3,0.2).curveTo(7.2,0.8,6.8,1.2).curveTo(6.5,1.7,5.9,1.7).closePath();
	this.shape_22.setTransform(23.3,61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#9E9E9E").beginStroke().moveTo(6.6,3.8).lineTo(-7.7,-0.2).curveTo(-8.3,-0.4,-8.6,-1).curveTo(-8.9,-1.7,-8.7,-2.5).curveTo(-8.4,-3.2,-7.9,-3.6).curveTo(-7.3,-4,-6.6,-3.8).lineTo(7.7,0.2).curveTo(8.3,0.4,8.6,1).curveTo(8.9,1.7,8.7,2.5).curveTo(8.4,3.2,7.9,3.6).curveTo(7.5,3.9,7,3.9).lineTo(6.6,3.8).closePath();
	this.shape_23.setTransform(26,51.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#9E9E9E").beginStroke().moveTo(5.4,3.1).lineTo(-6.2,-0.2).curveTo(-6.7,-0.3,-7,-0.8).curveTo(-7.2,-1.4,-7,-2).curveTo(-6.8,-2.6,-6.3,-2.9).curveTo(-5.8,-3.2,-5.3,-3.1).lineTo(6.2,0.2).curveTo(6.7,0.3,7,0.9).curveTo(7.2,1.4,7,2).curveTo(6.8,2.6,6.4,2.9).curveTo(6,3.1,5.7,3.1).lineTo(5.4,3.1).closePath();
	this.shape_24.setTransform(26,55.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#D9D9D9").beginStroke().moveTo(6.8,2.7).lineTo(-7.3,0.4).curveTo(-8,0.3,-8.3,-0.3).curveTo(-8.7,-0.8,-8.6,-1.4).curveTo(-8.5,-2.1,-8,-2.4).curveTo(-7.5,-2.8,-6.8,-2.7).lineTo(7.3,-0.4).curveTo(7.9,-0.3,8.3,0.3).curveTo(8.7,0.8,8.6,1.4).curveTo(8.5,2.1,8,2.4).curveTo(7.6,2.7,7.1,2.7).lineTo(6.8,2.7).closePath();
	this.shape_25.setTransform(26.4,47.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#757575").beginStroke().moveTo(-0.9,4.3).curveTo(-1.4,4,-1.4,3.5).lineTo(-1.4,-3.5).curveTo(-1.4,-4,-0.9,-4.3).curveTo(-0.5,-4.7,-0,-4.7).curveTo(0.5,-4.7,1,-4.3).curveTo(1.3,-4,1.3,-3.5).lineTo(1.3,3.5).curveTo(1.3,4,1,4.3).curveTo(0.5,4.7,-0,4.7).curveTo(-0.5,4.7,-0.9,4.3).closePath();
	this.shape_26.setTransform(-29,62.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#D9D9D9").beginStroke().moveTo(15.7,3).lineTo(-16,0.3).curveTo(-16.7,0.3,-17.1,-0.3).curveTo(-17.6,-0.8,-17.5,-1.5).curveTo(-17.5,-2.1,-16.9,-2.6).curveTo(-16.4,-3,-15.8,-3).lineTo(16,-0.3).curveTo(16.7,-0.3,17.1,0.2).curveTo(17.6,0.8,17.5,1.4).curveTo(17.4,2.1,16.9,2.6).curveTo(16.5,3,15.9,3).lineTo(15.7,3).closePath();
	this.shape_27.setTransform(-9.9,66.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#757575").beginStroke().moveTo(-9.1,6.1).curveTo(-9.5,6,-9.3,4.9).lineTo(-9.1,3.3).curveTo(-9.3,-0.4,-6.9,-3.1).curveTo(-4.4,-5.9,-0.8,-6.1).curveTo(2.9,-6.3,5.7,-3.9).curveTo(8.5,-1.5,8.7,2.2).lineTo(9.2,3.5).curveTo(9.5,4.5,9.2,4.5).curveTo(-5.1,6.1,-8.4,6.1).lineTo(-9.1,6.1).closePath();
	this.shape_28.setTransform(-33.4,63.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.7,0.3).lineTo(-6.7,-17.8).lineTo(-3,-18.5).lineTo(6.3,-1.7).lineTo(6.7,18.3).lineTo(2.2,18.5).closePath();
	this.shape_29.setTransform(-71.1,58.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(10.7,-4).lineTo(-13.4,-4).lineTo(-27.2,4.9).lineTo(-29.7,4.5).lineTo(-14.8,-5.4).curveTo(10.8,-6.8,11.3,-6.2).curveTo(11.6,-5.8,20.6,0).lineTo(29.6,5.8).lineTo(27.8,6.4).closePath();
	this.shape_30.setTransform(81.1,38.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,2.6).curveTo(-2.3,1.4,-3.5,-0.2).curveTo(-4.7,-1.8,-0.7,-3).curveTo(1.4,-3.5,3.7,-3.8).curveTo(3.9,-2.1,3.7,0.2).curveTo(3.4,3.3,2.2,3.7).lineTo(1.7,3.8).curveTo(0.6,3.8,-0.9,2.6).closePath();
	this.shape_31.setTransform(159.1,66.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,1.4).curveTo(-1.9,1,-1.7,0.3).curveTo(-1.5,-0.4,-0.9,-0.9).curveTo(-0.2,-1.5,0.5,-1.7).curveTo(1.2,-1.8,1.6,-1.4).curveTo(1.9,-1,1.7,-0.3).curveTo(1.5,0.4,0.9,1).curveTo(0.2,1.6,-0.5,1.7).lineTo(-0.8,1.7).curveTo(-1.3,1.7,-1.6,1.4).closePath();
	this.shape_32.setTransform(165.1,58.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,1.8).curveTo(-2.4,1.3,-2.1,0.4).curveTo(-1.9,-0.5,-1.1,-1.2).curveTo(-0.2,-1.9,0.6,-2.1).curveTo(1.5,-2.3,2,-1.8).curveTo(2.4,-1.3,2.2,-0.4).curveTo(1.9,0.5,1.1,1.2).curveTo(0.3,1.9,-0.6,2.1).lineTo(-1.1,2.1).curveTo(-1.7,2.1,-2,1.8).closePath();
	this.shape_33.setTransform(163.9,55.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,-1.6).lineTo(2.2,-1.7).lineTo(2.2,1.6).lineTo(-2.3,1.7).closePath();
	this.shape_34.setTransform(96.9,-8.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-42.5,-11.6).lineTo(42.2,-12.8).lineTo(42.5,11.6).lineTo(-42.2,12.8).closePath();
	this.shape_35.setTransform(117.1,-8.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,5).lineTo(-3.6,3.5).curveTo(-4.3,3.4,-4.7,2.7).curveTo(-5,2.1,-4.8,1.4).lineTo(-3.3,-3.8).curveTo(-3.1,-4.4,-2.5,-4.8).curveTo(-1.9,-5.1,-1.2,-4.9).lineTo(3.6,-3.6).curveTo(4.3,-3.4,4.6,-2.8).curveTo(5,-2.2,4.8,-1.4).lineTo(3.3,3.7).curveTo(3.1,4.4,2.5,4.8).curveTo(2.1,5,1.7,5).lineTo(1.2,5).closePath();
	this.shape_36.setTransform(158.7,-15.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-4.1,4.1).curveTo(-5.8,2.4,-5.8,-0).curveTo(-5.8,-2.5,-4.1,-4.2).curveTo(-2.5,-5.8,0,-5.9).curveTo(2.4,-5.8,4.1,-4.2).curveTo(5.8,-2.5,5.9,-0).curveTo(5.8,2.4,4.1,4.1).curveTo(2.4,5.9,0,5.8).curveTo(-2.5,5.9,-4.1,4.1).closePath();
	this.shape_37.setTransform(33.2,-9.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-116.9,-46.7).lineTo(99.6,-49.6).lineTo(116.9,46.2).lineTo(60.1,47.8).lineTo(39.8,35.8).lineTo(14.4,35.8).lineTo(-4.8,48.2).lineTo(-115.5,49.6).closePath();
	this.shape_38.setTransform(52.3,-5.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,-34.3).lineTo(-3.8,-37.1).curveTo(-2.2,-35.6,-1,-33.6).curveTo(0.3,-31.5,2.4,-26.9).curveTo(4.4,-22.5,5,-4.1).curveTo(5.5,8.1,5.3,21.7).curveTo(5.2,29.6,2.8,33.9).curveTo(1.5,36,0.1,36.9).curveTo(-0.1,37.1,-1.2,37.1).closePath();
	this.shape_39.setTransform(-70.8,-16);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3,3).curveTo(-4.2,1.7,-4.2,0).curveTo(-4.2,-1.8,-3,-3).curveTo(-1.7,-4.2,-0,-4.2).curveTo(1.7,-4.2,3,-3).curveTo(4.2,-1.8,4.2,0).curveTo(4.2,1.7,3,3).curveTo(1.7,4.2,-0,4.2).curveTo(-1.7,4.2,-3,3).closePath();
	this.shape_40.setTransform(-50.4,-49.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.5,5.5).curveTo(-7.8,3.2,-7.8,0).curveTo(-7.8,-3.2,-5.5,-5.5).curveTo(-3.2,-7.8,-0,-7.8).curveTo(3.2,-7.8,5.5,-5.5).curveTo(7.8,-3.2,7.8,0).curveTo(7.8,3.2,5.5,5.5).curveTo(3.2,7.8,-0,7.8).curveTo(-3.2,7.8,-5.5,5.5).closePath();
	this.shape_41.setTransform(-50.4,-49.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-2.4,4.8).lineTo(-2.6,0.1).curveTo(-4.8,-0.6,-4.4,-2.5).curveTo(-3.9,-4.5,0.1,-5.3).curveTo(4,-4.5,4.4,-2.5).curveTo(4.7,-0.8,2.3,0.1).lineTo(2.6,5.3).closePath();
	this.shape_42.setTransform(-50,-60.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#757575").beginStroke().moveTo(-5.9,16.9).lineTo(-13.8,16).lineTo(-13.9,15.8).curveTo(-13.7,15.4,-12.4,14.4).curveTo(-11,13.3,-8.6,7.1).curveTo(-6.7,2.6,-5.6,-1.3).curveTo(-1.4,-14.5,-1.6,-17.1).lineTo(13.9,-17.1).curveTo(13.7,-10.9,10.1,1.1).curveTo(6.4,13.3,3.8,16).curveTo(2.8,17.1,-1.9,17.1).lineTo(-5.9,16.9).closePath();
	this.shape_43.setTransform(21.4,58.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-13.5,19.2).lineTo(-7.9,14).lineTo(9,-20).lineTo(13.5,-17.8).lineTo(-2.2,13.9).lineTo(-1.6,20).closePath();
	this.shape_44.setTransform(-27.5,-70.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#999999").beginStroke().moveTo(-91,7.7).lineTo(-66.1,-3.5).lineTo(83.6,-6).lineTo(89.4,-8.9).lineTo(91,-4.8).lineTo(86.1,8.9).closePath();
	this.shape_45.setTransform(63.5,-58);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-6.4,7.2).curveTo(-6.4,-0.7,-2.6,-4.8).curveTo(0.6,-8,5.6,-8.1).lineTo(6.4,8).closePath();
	this.shape_46.setTransform(49.3,-67.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-1.3,8.8).curveTo(-2,8.8,-2.5,8.3).curveTo(-3,7.8,-3,7.1).lineTo(-3,-7.1).curveTo(-3,-7.8,-2.5,-8.3).curveTo(-2,-8.8,-1.3,-8.8).lineTo(1.3,-8.8).curveTo(2,-8.8,2.5,-8.3).curveTo(3,-7.8,3,-7.1).lineTo(3,7.1).curveTo(3,7.8,2.5,8.3).curveTo(2,8.8,1.3,8.8).closePath();
	this.shape_47.setTransform(-26.4,-55.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.1,5.6).lineTo(-5.1,-5.6).lineTo(5.1,-5.6).lineTo(5.1,5.6).closePath();
	this.shape_48.setTransform(133.7,-67.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,13.7).curveTo(1,13.3,0.9,12.7).lineTo(-3.9,-12.1).curveTo(-4.1,-12.7,-3.7,-13.2).curveTo(-3.3,-13.8,-2.7,-13.9).curveTo(-2.1,-14,-1.6,-13.7).curveTo(-1,-13.3,-0.9,-12.7).lineTo(4,12.1).curveTo(4.1,12.7,3.7,13.2).curveTo(3.4,13.8,2.7,13.9).lineTo(2.3,13.9).curveTo(1.9,13.9,1.6,13.7).closePath();
	this.shape_49.setTransform(155.4,-50.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,19.8).curveTo(1.3,19.4,1.1,18.7).lineTo(-6.4,-17.6).curveTo(-6.5,-18.3,-6.2,-18.9).curveTo(-5.8,-19.5,-5.1,-19.7).lineTo(-3.2,-20).curveTo(-2.5,-20.2,-1.8,-19.8).curveTo(-1.3,-19.4,-1.1,-18.7).lineTo(6.4,17.6).curveTo(6.6,18.3,6.2,18.9).curveTo(5.7,19.5,5.1,19.6).lineTo(3.2,20).lineTo(2.8,20.1).curveTo(2.3,20.1,1.9,19.8).closePath();
	this.shape_50.setTransform(154.8,-39.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.6,-9.2).lineTo(-1.2,-14.3).lineTo(5.5,-5.1).curveTo(9.2,0,4.8,4).lineTo(-7.2,14.4).closePath();
	this.shape_51.setTransform(168.3,47.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,-6).lineTo(-0.1,-7.9).lineTo(4.1,7.2).lineTo(1.1,7.9).closePath();
	this.shape_52.setTransform(166.9,63.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_53.setTransform(-100.2,64.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_54.setTransform(81.5,64.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.5,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).curveTo(1.9,-2.4,-3.9,-1.8).curveTo(-8.5,-1.3,-18.5,-0.6).lineTo(-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.8).closePath();
	this.shape_55.setTransform(-132.3,-53);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.5,1.9).closePath();
	this.shape_56.setTransform(-106.1,-58.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_57.setTransform(-152.8,-7.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_58.setTransform(-152.7,14.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0.1,0.5).lineTo(-0.8,0.5).curveTo(-2.1,0.5,-3,0.3).closePath();
	this.shape_59.setTransform(-152.9,6.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).lineTo(-3.1,-5).lineTo(2.4,-6.7).curveTo(2.9,-6.9,3.3,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,4,3.2,4.5).curveTo(2.4,5.1,-1.4,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_60.setTransform(-152.9,9.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.5,-12.9,0.8,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.6,5,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_61.setTransform(-148.6,-34);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.8,-14.4).curveTo(5.1,-14.4,5.6,-11.1).curveTo(6.2,-6.7,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.1,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_62.setTransform(-149.8,-34);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.8,-2.6,-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.4).lineTo(-0.4,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_63.setTransform(-171.3,-8.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(1.3,-11.7,6.4,-25.5).curveTo(9.2,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.8,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_64.setTransform(-161.6,-32);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_65.setTransform(-171.1,29.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_66.setTransform(-170.6,48.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.5,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_67.setTransform(-169.6,59.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_68.setTransform(-165.9,63.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.7).lineTo(-0.7,-8.3).lineTo(0.7,8.3).curveTo(-0.1,5.6,-0.5,-1.7).closePath();
	this.shape_69.setTransform(-165,55.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.8).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.3,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.8).lineTo(-4.4,-6.9).closePath();
	this.shape_70.setTransform(-166.6,53.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.2,3.2,-1.5,1.9).curveTo(-2,-1,-2,-4.6).curveTo(-1,-3.3,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_71.setTransform(-173,53.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,3.1,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_72.setTransform(-91.1,10.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.3,-4.5,7.7).curveTo(-5,7.2,-5,6.3).curveTo(-5.5,2.3,-5.3,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.2,4.6,7.7).curveTo(4,8.3,3.3,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_73.setTransform(-91.2,10.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-50,62).curveTo(-50.4,61.8,-51,61.2).curveTo(-52,60.2,-52.5,58.5).curveTo(-53.2,56.4,-53.5,53.3).lineTo(-54,48).curveTo(-54.2,44.9,-53.3,42.1).lineTo(-52.4,39.9).curveTo(-53.3,23.7,-53.3,18.3).curveTo(-53.3,14.9,-52.8,6.7).lineTo(-52.3,-0.9).lineTo(-48.1,-7.9).curveTo(-47.1,-12.9,-43.6,-27.3).curveTo(-40.1,-41.6,-32.9,-60.5).curveTo(-32.5,-61.4,-31.9,-61.8).curveTo(-31.3,-62.2,-29.7,-62.4).curveTo(-22.5,-63.3,5.4,-64.5).lineTo(31.8,-65.5).curveTo(34.7,-65.6,36.1,-65.3).curveTo(38.3,-64.9,40.2,-63.5).curveTo(42.1,-62.2,43.2,-61.2).lineTo(45.3,-59.2).curveTo(46.4,-58.2,47.8,-56.1).curveTo(48.9,-54.3,49.7,-52.7).curveTo(50.9,-50.1,52.2,-44.6).curveTo(54,-36.9,54,-29.7).lineTo(54,-12.7).curveTo(54,-9.9,53.3,-8.8).curveTo(50,-2.2,50,-0.1).lineTo(50,6.5).curveTo(50,8,49.5,8.9).curveTo(49,9.7,49,10.5).lineTo(49,25.4).lineTo(39.1,25.7).lineTo(36,26).lineTo(36,28.3).curveTo(24.9,28.4,20,29).curveTo(13.2,29.9,10.4,31.2).curveTo(3.7,34.3,-1.3,42.9).curveTo(-3.6,46.8,-6.7,53.4).curveTo(-7.5,54.5,-9.1,54.5).lineTo(-17.2,54.5).lineTo(-18.7,54.1).lineTo(-21.4,54.5).lineTo(-39,54.5).lineTo(-39,61.9).curveTo(-39,63.3,-39.8,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-48.5,65.5,-50,62).closePath().moveTo(9.8,-55.4).curveTo(-9.6,-54.6,-16,-53.6).curveTo(-21.4,-52.8,-23,-51.9).curveTo(-24.2,-51.1,-25.6,-48.5).curveTo(-26.6,-46.5,-28.8,-36.4).curveTo(-31.1,-26.4,-31.5,-22.1).curveTo(-31.9,-18.2,-32.2,-10.8).curveTo(-32.5,-4,-32.5,-1.5).lineTo(-32.4,-0.4).lineTo(-31.2,-0.7).lineTo(9.3,-16.4).curveTo(14,-18.1,26.6,-20.3).lineTo(29.1,-20.8).curveTo(30.3,-21,30.7,-21.4).curveTo(30.9,-21.7,30.9,-22.3).lineTo(31.5,-51.8).curveTo(31.5,-54.2,30.7,-55).curveTo(30,-55.8,28,-56).curveTo(19.5,-55.8,9.8,-55.4).closePath();
	this.shape_74.setTransform(-121.5,0.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#969696").beginStroke().moveTo(-78.5,30).lineTo(-79.2,28).lineTo(-135,29.2).lineTo(-147.8,24.7).lineTo(-153.6,20).lineTo(-157.3,-3.9).lineTo(-135.9,-30.1).lineTo(-89.2,-28.5).lineTo(-78.2,-16).lineTo(-77.9,-8.8).lineTo(-79.8,-6.9).lineTo(-75.7,-0.5).lineTo(-74.3,-4.6).lineTo(-68.3,-4.6).lineTo(-67.6,-19.3).lineTo(151.7,-23.1).lineTo(157.3,15.7).curveTo(156.1,16.7,154.4,17.6).curveTo(150.9,19.5,148.4,19.6).curveTo(145.9,19.7,144.9,18.1).lineTo(144.4,16.4).lineTo(142.7,15.9).lineTo(134.4,7.7).lineTo(123.6,7.8).curveTo(122.9,9,121.7,10.2).curveTo(119.2,12.5,116.4,12.6).curveTo(113.6,12.6,111.8,10.4).lineTo(110.6,8.3).curveTo(110.1,8.3,107.1,9.6).lineTo(104.3,10.9).lineTo(104,26.6).lineTo(102.9,27.2).lineTo(102.9,11.4).lineTo(96.8,14.2).lineTo(45.4,28.4).curveTo(38.6,28.3,36.1,28).curveTo(34.7,27.8,-7.4,27.3).lineTo(-3.3,20.8).lineTo(-26.8,19.1).lineTo(-50.4,13.6).lineTo(-58.3,13.2).lineTo(-62.9,14.9).lineTo(-62.9,16.8).curveTo(-63,18.8,-63.2,19.8).curveTo(-63.8,22.1,-65.7,22.5).lineTo(-72.1,23).lineTo(-72.1,30).closePath();
	this.shape_75.setTransform(4.7,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(30));

	// Capa 2
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.4,-0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.4,-0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_76.setTransform(1.8,90.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(30));

	// Capa 3
	this.instance_1 = new lib.barredoraconductor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127.4,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.5,-90.3,372.7,191.9);


// stage content:
(lib.barredora = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_126 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(126).call(this.frame_126).wait(1));

	// llanta
	this.instance = new lib.llanta();
	this.instance.parent = this;
	this.instance.setTransform(1313.3,399.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2160,x:-99.7},126).wait(1));

	// llanta
	this.instance_1 = new lib.llanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1131.3,399.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2160,x:-281.7},126).wait(1));

	// don barredora
	this.instance_2 = new lib.barredora_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1231,335.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-181.4},126).wait(1));

	// basuritas
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.8,13).lineTo(-10.4,10).lineTo(-10.9,2.5).lineTo(-16.7,-1).lineTo(-25.9,-5.4).lineTo(-23.5,-6.4).lineTo(-22.7,-7.7).curveTo(-21.6,-8.8,-20.1,-7.9).curveTo(-17.7,-6.4,-10,-6.4).lineTo(-13.3,-10.8).lineTo(-1.1,-12.6).curveTo(10.3,-13.8,6.1,-10.8).curveTo(-2.2,-4.9,-2.9,-4.1).curveTo(-5.1,-1.3,5.5,-3.5).curveTo(15.9,-5.6,21.9,-3.6).curveTo(25,-2.6,25.9,-1.1).lineTo(24.9,7.1).lineTo(3.6,9.1).lineTo(-1.7,13).closePath();
	this.shape.setTransform(192,396.7,0.863,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.9,5.5).lineTo(-3.5,2.5).lineTo(-4,-5).lineTo(-9.8,-8.5).lineTo(-31.7,-10.4).lineTo(-16.5,-13.9).lineTo(-15.7,-15.2).curveTo(-14.7,-16.3,-13.2,-15.4).curveTo(-10.7,-13.9,-3,-13.9).lineTo(-6.4,-18.3).lineTo(5.8,-20.1).curveTo(17.2,-21.3,13,-18.3).curveTo(9,-15.5,31.7,-0.4).lineTo(10.5,1.6).lineTo(24.4,20.5).closePath();
	this.shape_1.setTransform(685.5,385.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.8,14.5).lineTo(-18,-11.6).lineTo(-7.5,-17.3).curveTo(-6.1,-15.5,-5,-13.4).curveTo(-3.1,-9.2,-5.3,-7.5).curveTo(-7,-6,-10.8,-5.2).curveTo(-11.7,-5,-11.4,-5).lineTo(-8.8,-4.6).curveTo(-5.7,-4.3,-4.9,-2.4).curveTo(-4.6,-1.8,-2.5,-3.9).curveTo(-0.3,-6,-0.6,-6.8).curveTo(-0.7,-7.1,1.7,-8.1).curveTo(4.2,-9.2,7.1,-12.6).curveTo(7.9,-13.5,7.8,-13.2).lineTo(6.7,-10.3).lineTo(3.9,-3.2).curveTo(2.1,-2.2,1.4,-1.3).curveTo(-0.1,0.6,5.2,-0.4).curveTo(9.5,-1,11.1,-2.6).curveTo(11.7,-3.2,13.8,-1.8).lineTo(18,1.1).lineTo(3.1,17.3).closePath();
	this.shape_2.setTransform(468.7,394.2,0.786,0.266,-165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.2,11.6).curveTo(-8.6,11,-9.9,9.4).lineTo(-12,6.6).curveTo(-13.2,5.2,-14.1,4.9).lineTo(-16,4.3).curveTo(-17.2,4,-17.5,3.4).curveTo(-17.8,2.7,-17.1,2.3).curveTo(-16.5,2,-15.1,1.8).lineTo(-12.8,1.6).curveTo(-8.8,1.4,-7,2.6).lineTo(-6.9,2.6).curveTo(-7,0.4,-7.2,-0.3).curveTo(-7.5,-1.8,-8.5,-3.3).lineTo(-10.2,-5.6).curveTo(-10.6,-6.3,-10.6,-7).curveTo(-3.6,-3.8,-3.2,-3).lineTo(-2.1,-0.1).curveTo(-1.7,-2.3,-0.4,-3.6).curveTo(0.3,-4.3,1.6,-5).lineTo(3.7,-6.1).curveTo(5.8,-7.5,7,-9.2).lineTo(8.2,-11.2).lineTo(8.4,-11.6).lineTo(8.5,-11.7).lineTo(8.7,-11.9).lineTo(9.5,-11.9).curveTo(10.9,-11.8,11.7,-11.2).lineTo(11.7,-11.2).curveTo(12.4,-10.7,12.5,-9.9).curveTo(12.7,-9,11.9,-8.3).lineTo(10,-6.7).curveTo(6.6,-4.3,7.5,-2.2).lineTo(8.3,-0.8).lineTo(8.9,0.6).curveTo(9.2,2,9.4,3.7).curveTo(10.3,3,12.5,0.6).curveTo(14.4,-1.5,16,-2.2).curveTo(16.5,-2.4,17.6,1.3).curveTo(16,2.3,14.7,4.7).curveTo(12.6,8.5,11.6,9.4).curveTo(9.5,11.2,6.8,10.6).curveTo(3.7,10,3.2,7.5).curveTo(2.8,8.5,2.4,9).curveTo(1.1,10.8,-1.6,10.5).lineTo(-2.5,10.3).curveTo(-2.8,11.4,-4.6,11.7).lineTo(-5.8,11.9).curveTo(-6.6,11.9,-7.2,11.6).closePath();
	this.shape_3.setTransform(898.8,394.8,1,1,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.8,14.5).lineTo(-18,-11.6).lineTo(-7.5,-17.3).curveTo(-6.1,-15.5,-5,-13.4).curveTo(-3.1,-9.2,-5.3,-7.5).curveTo(-7,-6,-10.8,-5.2).curveTo(-11.7,-5,-11.4,-5).lineTo(-8.8,-4.6).curveTo(-5.7,-4.3,-4.9,-2.4).curveTo(-4.6,-1.8,-2.5,-3.9).curveTo(-0.3,-6,-0.6,-6.8).curveTo(-0.7,-7.1,1.7,-8.1).curveTo(4.2,-9.2,7.1,-12.6).curveTo(7.9,-13.5,7.8,-13.2).lineTo(6.7,-10.3).lineTo(3.9,-3.2).curveTo(2.1,-2.2,1.4,-1.3).curveTo(-0.1,0.6,5.2,-0.4).curveTo(9.5,-1,11.1,-2.6).curveTo(11.7,-3.2,13.8,-1.8).lineTo(18,1.1).lineTo(3.1,17.3).closePath();
	this.shape_4.setTransform(96.9,389.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.5,11.6).curveTo(-9.9,11,-11.2,9.4).lineTo(-13.3,6.6).curveTo(-14.5,5.2,-15.4,4.9).lineTo(-17.3,4.3).curveTo(-18.5,4,-18.8,3.4).curveTo(-19.1,2.7,-18.4,2.3).curveTo(-17.8,2,-16.4,1.8).lineTo(-14.1,1.6).curveTo(-10.1,1.4,-8.3,2.6).lineTo(-8.2,2.6).curveTo(-8.3,0.4,-8.5,-0.3).curveTo(-8.8,-1.8,-9.8,-3.3).lineTo(-11.5,-5.6).curveTo(-12.2,-6.8,-11.6,-7.7).curveTo(-11,-8.5,-9.7,-8.4).curveTo(-8.8,-8.2,-7.8,-7.6).curveTo(-6,-6.5,-4.5,-3).lineTo(-3.4,-0.1).curveTo(-3,-2.3,-1.7,-3.6).curveTo(-1,-4.3,0.3,-5).lineTo(2.4,-6.1).curveTo(4.5,-7.5,5.7,-9.2).lineTo(6.9,-11.2).lineTo(7.1,-11.6).lineTo(7.2,-11.7).lineTo(7.4,-11.9).lineTo(8.2,-11.9).curveTo(9.6,-11.8,10.4,-11.2).lineTo(10.4,-11.2).curveTo(11.1,-10.7,11.2,-9.9).curveTo(11.4,-9,10.6,-8.3).lineTo(8.7,-6.7).curveTo(5.3,-4.3,6.2,-2.2).lineTo(7,-0.8).lineTo(7.6,0.6).curveTo(7.9,2,8.1,3.7).curveTo(9,3,11.2,0.6).curveTo(13.1,-1.5,14.7,-2.2).curveTo(16.8,-3.2,18.3,-1.5).curveTo(19.2,-0.5,18.8,0.1).curveTo(18.6,0.4,17.2,0.8).curveTo(15,1.6,13.4,4.7).curveTo(11.3,8.5,10.3,9.4).curveTo(8.2,11.2,5.5,10.6).curveTo(2.4,10,1.9,7.5).curveTo(1.5,8.5,1.1,9).curveTo(-0.2,10.8,-2.9,10.5).lineTo(-3.8,10.3).curveTo(-4.1,11.4,-5.9,11.7).lineTo(-7.1,11.9).curveTo(-7.9,11.9,-8.5,11.6).closePath();
	this.shape_5.setTransform(281.7,401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.786,scaleY:0.266,rotation:-165,x:468.7,y:394.2}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_1},{t:this.shape_2,p:{scaleX:0.786,scaleY:0.266,rotation:-165,x:468.7,y:394.2}},{t:this.shape}]},28).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_2,p:{scaleX:0.786,scaleY:0.266,rotation:-165,x:468.7,y:394.2}},{t:this.shape}]},18).to({state:[{t:this.shape_5},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:96.9,y:389.4}},{t:this.shape}]},19).to({state:[{t:this.shape},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:96.9,y:389.4}}]},17).to({state:[{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:0,x:96.9,y:389.4}}]},7).to({state:[]},11).wait(27));

	// rueda
	this.instance_3 = new lib.barredorarueda();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.4,231.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:360},126).wait(1));

	// fondo
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.1,14.7,-8.8,13.1).curveTo(-10.4,11.5,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.2,5).lineTo(-10.2,-8).lineTo(-12.1,-8).curveTo(-11.8,-10.1,-8.7,-11.7).curveTo(-5.5,-13.2,-1,-13.4).lineTo(-1.2,-13.7).curveTo(-1.1,-14.1,-0.8,-14.4).curveTo(-0.6,-14.7,-0.1,-14.7).curveTo(0.3,-14.7,0.5,-14.4).curveTo(0.8,-14.1,0.8,-13.7).lineTo(0.8,-13.4).curveTo(5.3,-13.3,8.5,-11.7).curveTo(11.8,-10.2,12,-8).lineTo(9.9,-8).lineTo(9.9,5).lineTo(10.7,5).lineTo(10.7,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.5,8.4,13.1).curveTo(6.9,14.7,4.5,14.7).closePath().moveTo(3.2,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.2,6).closePath().moveTo(2.1,9.3).lineTo(2.8,9.3).lineTo(2.8,6).lineTo(2.1,6).closePath().moveTo(1.1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1.1,6).closePath().moveTo(-0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(-0,6).closePath().moveTo(-1,9.3).lineTo(-0.5,9.3).lineTo(-0.5,6).lineTo(-1,6).closePath().moveTo(-2.2,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.2,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.3,9.3).lineTo(-3.6,9.3).lineTo(-3.6,6).lineTo(-4.3,6).closePath().moveTo(0.6,5.5).lineTo(3.8,5.5).lineTo(3.8,5).lineTo(9.3,5).lineTo(9.3,-8).lineTo(1.1,-8).closePath().moveTo(-0.8,5.5).lineTo(-1.2,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.3,5).lineTo(-4.3,5.5).lineTo(-0.8,5.5).closePath();
	this.shape_6.setTransform(38.5,254.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_7.setTransform(34.5,262.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_8.setTransform(38.8,262.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_9.setTransform(42,262.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_10.setTransform(37.7,262.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,6.7).lineTo(-3.9,-6.8).lineTo(4.3,-6.8).lineTo(4.3,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_11.setTransform(43.5,253.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_12.setTransform(36.6,262.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.8).lineTo(4,-6.8).lineTo(4.4,6.7).closePath();
	this.shape_13.setTransform(33.2,253.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_14.setTransform(35.6,262.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_15.setTransform(40.9,262.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_16.setTransform(39.9,262.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.1,14.7,-8.8,13.1).curveTo(-10.4,11.4,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.2,5).lineTo(-10.2,-8).lineTo(-12.1,-8).curveTo(-11.8,-10.2,-8.7,-11.7).curveTo(-5.5,-13.2,-1,-13.4).lineTo(-1.1,-13.7).curveTo(-1.1,-14.7,-0.1,-14.7).curveTo(0.3,-14.7,0.5,-14.5).curveTo(0.9,-14.2,0.9,-13.7).lineTo(0.8,-13.4).curveTo(5.3,-13.3,8.6,-11.8).curveTo(11.8,-10.2,12,-8).lineTo(9.9,-8).lineTo(9.9,5).lineTo(10.7,5).lineTo(10.7,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.4,8.4,13.1).curveTo(6.9,14.7,4.5,14.7).closePath().moveTo(3.2,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.2,6).closePath().moveTo(2.1,9.3).lineTo(2.8,9.3).lineTo(2.8,6).lineTo(2.1,6).closePath().moveTo(1.1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1.1,6).closePath().moveTo(-0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(-0,6).closePath().moveTo(-1,9.3).lineTo(-0.5,9.3).lineTo(-0.5,6).lineTo(-1,6).closePath().moveTo(-2.1,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.1,6).closePath().moveTo(-3.2,9.3).lineTo(-2.5,9.3).lineTo(-2.5,6).lineTo(-3.2,6).closePath().moveTo(-4.2,9.3).lineTo(-3.6,9.3).lineTo(-3.6,6).lineTo(-4.2,6).closePath().moveTo(0.6,5.4).lineTo(3.8,5.4).lineTo(3.8,5).lineTo(9.3,5).lineTo(9.3,-8).lineTo(1.2,-8).closePath().moveTo(-0.8,5.4).lineTo(-1.2,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.2,5).lineTo(-4.2,5.4).lineTo(-0.8,5.4).closePath();
	this.shape_17.setTransform(146.5,309.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_18.setTransform(142.5,317.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_19.setTransform(146.8,317.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_20.setTransform(150,317.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_21.setTransform(145.7,317.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,6.7).lineTo(-3.8,-6.7).lineTo(4.3,-6.7).lineTo(4.3,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_22.setTransform(151.5,308.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_23.setTransform(144.7,317.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4.1,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_24.setTransform(141.2,308.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_25.setTransform(143.6,317.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_26.setTransform(148.9,317.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_27.setTransform(147.9,317.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.1,14.7,-8.7,13.1).curveTo(-10.4,11.4,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.2,5).lineTo(-10.2,-8).lineTo(-12.1,-8).curveTo(-11.8,-10.2,-8.7,-11.7).curveTo(-5.5,-13.2,-1.1,-13.4).lineTo(-1.1,-13.7).curveTo(-1.1,-14.7,-0.2,-14.7).curveTo(0.8,-14.7,0.8,-13.7).lineTo(0.7,-13.4).curveTo(5.3,-13.3,8.6,-11.8).curveTo(11.8,-10.2,12,-8).lineTo(9.9,-8).lineTo(9.9,5).lineTo(10.7,5).lineTo(10.7,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.4,8.5,13.1).curveTo(6.9,14.7,4.5,14.7).closePath().moveTo(3.2,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.2,6).closePath().moveTo(2.1,9.3).lineTo(2.8,9.3).lineTo(2.8,6).lineTo(2.1,6).closePath().moveTo(1.1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1.1,6).closePath().moveTo(-0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(-0,6).closePath().moveTo(-1.1,9.3).lineTo(-0.5,9.3).lineTo(-0.5,6).lineTo(-1.1,6).closePath().moveTo(-2.1,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.1,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.2,9.3).lineTo(-3.6,9.3).lineTo(-3.6,6).lineTo(-4.2,6).closePath().moveTo(0.6,5.4).lineTo(3.8,5.4).lineTo(3.8,5).lineTo(9.4,5).lineTo(9.4,-8).lineTo(1.2,-8).closePath().moveTo(-0.8,5.4).lineTo(-1.2,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.2,5).lineTo(-4.2,5.4).lineTo(-0.8,5.4).closePath();
	this.shape_28.setTransform(80.2,309.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_29.setTransform(76.3,317.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_30.setTransform(80.5,317.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_31.setTransform(83.7,317.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_32.setTransform(79.5,317.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,6.7).lineTo(-3.8,-6.7).lineTo(4.4,-6.7).lineTo(4.4,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_33.setTransform(85.2,308.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_34.setTransform(78.4,317.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4.1,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_35.setTransform(75,308.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_36.setTransform(77.3,317.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_37.setTransform(82.7,317.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_38.setTransform(81.6,317.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.1,14.7,-8.7,13.1).curveTo(-10.4,11.5,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.2,5).lineTo(-10.2,-8).lineTo(-12,-8).curveTo(-11.8,-10.1,-8.6,-11.7).curveTo(-5.5,-13.2,-1.1,-13.4).lineTo(-1.2,-13.7).curveTo(-1.2,-14.1,-0.9,-14.4).curveTo(-0.5,-14.7,-0.2,-14.7).curveTo(0.2,-14.7,0.6,-14.4).curveTo(0.8,-14.1,0.8,-13.7).lineTo(0.7,-13.4).curveTo(5.4,-13.3,8.6,-11.7).curveTo(11.9,-10.2,12.1,-8).lineTo(9.8,-8).lineTo(9.8,5).lineTo(10.6,5).lineTo(10.6,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.5,8.5,13.1).curveTo(6.8,14.7,4.5,14.7).closePath().moveTo(3.2,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.2,6).closePath().moveTo(2.2,9.3).lineTo(2.7,9.3).lineTo(2.7,6).lineTo(2.2,6).closePath().moveTo(1.1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1.1,6).closePath().moveTo(0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(0,6).closePath().moveTo(-1.1,9.3).lineTo(-0.4,9.3).lineTo(-0.4,6).lineTo(-1.1,6).closePath().moveTo(-2.1,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.1,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.2,9.3).lineTo(-3.7,9.3).lineTo(-3.7,6).lineTo(-4.2,6).closePath().moveTo(0.7,5.4).lineTo(3.8,5.4).lineTo(3.8,5).lineTo(9.4,5).lineTo(9.4,-8).lineTo(1.2,-8).closePath().moveTo(-0.9,5.4).lineTo(-1.2,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.2,5).lineTo(-4.2,5.4).lineTo(-0.9,5.4).closePath();
	this.shape_39.setTransform(53.4,284.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_40.setTransform(49.4,292.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_41.setTransform(53.7,292.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_42.setTransform(56.9,292.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_43.setTransform(52.6,292.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,6.7).lineTo(-3.8,-6.7).lineTo(4.4,-6.7).lineTo(4.4,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_44.setTransform(58.4,283.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_45.setTransform(51.5,292.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4.1,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_46.setTransform(48.1,283.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_47.setTransform(50.5,292.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_48.setTransform(55.8,292.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.7).closePath();
	this.shape_49.setTransform(54.8,292.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.1,14.7,-8.8,13.1).curveTo(-10.4,11.4,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.1,5).lineTo(-10.1,-8).lineTo(-12,-8).curveTo(-11.8,-10.2,-8.7,-11.7).curveTo(-5.5,-13.2,-1,-13.4).lineTo(-1.1,-13.8).curveTo(-1.1,-14.7,-0.1,-14.7).curveTo(0.2,-14.7,0.6,-14.5).curveTo(0.8,-14.2,0.8,-13.8).lineTo(0.8,-13.4).curveTo(5.4,-13.3,8.6,-11.7).curveTo(11.9,-10.2,12,-8).lineTo(9.9,-8).lineTo(9.9,5).lineTo(10.7,5).lineTo(10.7,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.4,8.4,13.1).curveTo(6.8,14.7,4.5,14.7).closePath().moveTo(3.3,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.3,6).closePath().moveTo(2.1,9.3).lineTo(2.7,9.3).lineTo(2.7,6).lineTo(2.1,6).closePath().moveTo(1.1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1.1,6).closePath().moveTo(0,9.3).lineTo(0.7,9.3).lineTo(0.7,6).lineTo(0,6).closePath().moveTo(-1,9.3).lineTo(-0.4,9.3).lineTo(-0.4,6).lineTo(-1,6).closePath().moveTo(-2.1,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.1,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.2,9.3).lineTo(-3.7,9.3).lineTo(-3.7,6).lineTo(-4.2,6).closePath().moveTo(0.7,5.4).lineTo(3.8,5.4).lineTo(3.8,5).lineTo(9.3,5).lineTo(9.3,-8).lineTo(1.2,-8).closePath().moveTo(-0.9,5.4).lineTo(-1.1,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.2,5).lineTo(-4.2,5.4).lineTo(-0.9,5.4).closePath();
	this.shape_50.setTransform(175.1,289.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_51.setTransform(171.2,297);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_52.setTransform(175.4,297);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_53.setTransform(178.6,297);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_54.setTransform(174.4,297);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,6.7).lineTo(-3.8,-6.7).lineTo(4.3,-6.7).lineTo(4.3,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_55.setTransform(180.1,288.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_56.setTransform(173.3,297);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4.1,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_57.setTransform(169.9,288.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_58.setTransform(172.2,297);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_59.setTransform(177.6,297);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_60.setTransform(176.5,297);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.9,14.7).curveTo(-7.2,14.7,-8.8,13.1).curveTo(-10.4,11.5,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.2,8.2).lineTo(-11.2,5).lineTo(-10.2,5).lineTo(-10.2,-8).lineTo(-12.1,-8).curveTo(-11.8,-10.2,-8.7,-11.7).curveTo(-5.6,-13.2,-1.1,-13.4).lineTo(-1.2,-13.7).curveTo(-1.2,-14.1,-0.8,-14.4).curveTo(-0.6,-14.7,-0.2,-14.7).curveTo(0.2,-14.7,0.5,-14.4).curveTo(0.8,-14.1,0.8,-13.7).lineTo(0.7,-13.4).curveTo(5.3,-13.3,8.6,-11.7).curveTo(11.8,-10.2,12.1,-8).lineTo(9.8,-8).lineTo(9.8,5).lineTo(10.6,5).lineTo(10.6,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.5,8.4,13.1).curveTo(6.8,14.7,4.4,14.7).closePath().moveTo(3.2,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.2,6).closePath().moveTo(2.2,9.3).lineTo(2.8,9.3).lineTo(2.8,6).lineTo(2.2,6).closePath().moveTo(1.1,9.3).lineTo(1.6,9.3).lineTo(1.6,6).lineTo(1.1,6).closePath().moveTo(0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(0,6).closePath().moveTo(-1.1,9.3).lineTo(-0.4,9.3).lineTo(-0.4,6).lineTo(-1.1,6).closePath().moveTo(-2.2,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.2,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.2,9.3).lineTo(-3.7,9.3).lineTo(-3.7,6).lineTo(-4.2,6).closePath().moveTo(0.6,5.4).lineTo(3.8,5.4).lineTo(3.8,5).lineTo(9.3,5).lineTo(9.3,-8).lineTo(1.2,-8).closePath().moveTo(-0.8,5.4).lineTo(-1.2,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.2,5).lineTo(-4.2,5.4).lineTo(-0.8,5.4).closePath();
	this.shape_61.setTransform(191.3,256.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_62.setTransform(187.3,264.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_63.setTransform(191.6,264.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_64.setTransform(194.7,264.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_65.setTransform(190.5,264.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,6.7).lineTo(-3.8,-6.7).lineTo(4.3,-6.7).lineTo(4.3,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_66.setTransform(196.2,255.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_67.setTransform(189.4,264.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4.1,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_68.setTransform(186,255.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_69.setTransform(188.4,264.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_70.setTransform(193.7,264.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.6).lineTo(-0.3,-1.6).lineTo(0.3,-1.6).lineTo(0.3,1.6).closePath();
	this.shape_71.setTransform(192.6,264.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.1,14.7,-8.7,13.1).curveTo(-10.4,11.5,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.2,5).lineTo(-10.2,-8).lineTo(-12.1,-8).curveTo(-11.8,-10.1,-8.6,-11.7).curveTo(-5.5,-13.2,-1.1,-13.4).lineTo(-1.2,-13.7).curveTo(-1.2,-14.1,-0.8,-14.4).curveTo(-0.5,-14.7,-0.2,-14.7).curveTo(0.3,-14.7,0.5,-14.4).curveTo(0.8,-14.1,0.8,-13.7).lineTo(0.7,-13.4).curveTo(5.3,-13.3,8.5,-11.7).curveTo(11.8,-10.2,12,-8).lineTo(9.9,-8).lineTo(9.9,5).lineTo(10.6,5).lineTo(10.6,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.5,8.5,13.1).curveTo(6.9,14.7,4.5,14.7).closePath().moveTo(3.2,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.2,6).closePath().moveTo(2.1,9.3).lineTo(2.8,9.3).lineTo(2.8,6).lineTo(2.1,6).closePath().moveTo(1.1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1.1,6).closePath().moveTo(-0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(-0,6).closePath().moveTo(-1.1,9.3).lineTo(-0.5,9.3).lineTo(-0.5,6).lineTo(-1.1,6).closePath().moveTo(-2.2,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.2,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.2,9.3).lineTo(-3.6,9.3).lineTo(-3.6,6).lineTo(-4.2,6).closePath().moveTo(0.6,5.4).lineTo(3.8,5.4).lineTo(3.8,5).lineTo(9.4,5).lineTo(9.4,-8).lineTo(1.2,-8).closePath().moveTo(-0.8,5.4).lineTo(-1.2,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.2,5).lineTo(-4.2,5.4).lineTo(-0.8,5.4).closePath();
	this.shape_72.setTransform(38.8,219.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_73.setTransform(34.9,227.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_74.setTransform(39.1,227.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_75.setTransform(42.3,227.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_76.setTransform(38.1,227.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,6.7).lineTo(-3.8,-6.7).lineTo(4.4,-6.7).lineTo(4.4,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_77.setTransform(43.8,218.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_78.setTransform(37,227.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4.1,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_79.setTransform(33.6,218.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_80.setTransform(35.9,227.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_81.setTransform(41.3,227.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_82.setTransform(40.2,227.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.2,14.7,-8.8,13.1).curveTo(-10.4,11.5,-10.5,9.1).lineTo(-10.5,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.1,5).lineTo(-10.1,-8).lineTo(-12,-8).curveTo(-11.8,-10.1,-8.7,-11.7).curveTo(-5.6,-13.2,-1.1,-13.4).lineTo(-1.1,-13.7).curveTo(-1.1,-14.1,-0.9,-14.4).curveTo(-0.6,-14.7,-0.2,-14.7).curveTo(0.2,-14.7,0.5,-14.4).curveTo(0.8,-14.1,0.8,-13.7).lineTo(0.7,-13.4).curveTo(5.3,-13.3,8.6,-11.7).curveTo(11.8,-10.2,12,-8).lineTo(9.8,-8).lineTo(9.8,5).lineTo(10.7,5).lineTo(10.7,8.2).lineTo(10,8.2).lineTo(10,9.1).curveTo(10,11.5,8.4,13.1).curveTo(6.8,14.7,4.4,14.7).closePath().moveTo(3.2,9.3).lineTo(3.7,9.3).lineTo(3.7,6).lineTo(3.2,6).closePath().moveTo(2.1,9.3).lineTo(2.7,9.3).lineTo(2.7,6).lineTo(2.1,6).closePath().moveTo(1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1,6).closePath().moveTo(0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(0,6).closePath().moveTo(-1.1,9.3).lineTo(-0.4,9.3).lineTo(-0.4,6).lineTo(-1.1,6).closePath().moveTo(-2.1,9.3).lineTo(-1.6,9.3).lineTo(-1.6,6).lineTo(-2.1,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.3,9.3).lineTo(-3.7,9.3).lineTo(-3.7,6).lineTo(-4.3,6).closePath().moveTo(0.6,5.4).lineTo(3.7,5.4).lineTo(3.7,5).lineTo(9.3,5).lineTo(9.3,-8).lineTo(1.1,-8).closePath().moveTo(-0.9,5.4).lineTo(-1.2,-8).lineTo(-9.7,-8).lineTo(-9.7,5).lineTo(-4.3,5).lineTo(-4.3,5.4).lineTo(-0.9,5.4).closePath();
	this.shape_83.setTransform(191.8,219.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_84.setTransform(187.8,227.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_85.setTransform(192.1,227.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_86.setTransform(195.2,227.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_87.setTransform(191,227.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,6.7).lineTo(-3.8,-6.7).lineTo(4.4,-6.7).lineTo(4.4,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_88.setTransform(196.7,218.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_89.setTransform(189.9,227.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_90.setTransform(186.5,218.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_91.setTransform(188.9,227.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_92.setTransform(194.2,227.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_93.setTransform(193.1,227.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,14.7).curveTo(-7.1,14.7,-8.8,13).curveTo(-10.4,11.4,-10.4,9.1).lineTo(-10.4,8.2).lineTo(-11.1,8.2).lineTo(-11.1,5).lineTo(-10.2,5).lineTo(-10.2,-8).lineTo(-12.1,-8).curveTo(-11.8,-10.1,-8.7,-11.6).curveTo(-5.5,-13.2,-1.1,-13.4).lineTo(-1.1,-13.7).curveTo(-1.1,-14.7,-0.2,-14.7).curveTo(0.2,-14.7,0.5,-14.4).curveTo(0.8,-14.2,0.8,-13.7).lineTo(0.7,-13.4).curveTo(5.3,-13.2,8.6,-11.7).curveTo(11.8,-10.2,12.1,-8).lineTo(9.9,-8).lineTo(9.9,5).lineTo(10.7,5).lineTo(10.7,8.2).lineTo(10.1,8.2).lineTo(10.1,9.1).curveTo(10.1,11.4,8.4,13).curveTo(6.8,14.7,4.5,14.7).closePath().moveTo(3.2,9.3).lineTo(3.8,9.3).lineTo(3.8,6).lineTo(3.2,6).closePath().moveTo(2.1,9.3).lineTo(2.7,9.3).lineTo(2.7,6).lineTo(2.1,6).closePath().moveTo(1.1,9.3).lineTo(1.7,9.3).lineTo(1.7,6).lineTo(1.1,6).closePath().moveTo(-0,9.3).lineTo(0.6,9.3).lineTo(0.6,6).lineTo(-0,6).closePath().moveTo(-1.1,9.3).lineTo(-0.5,9.3).lineTo(-0.5,6).lineTo(-1.1,6).closePath().moveTo(-2.1,9.3).lineTo(-1.5,9.3).lineTo(-1.5,6).lineTo(-2.1,6).closePath().moveTo(-3.2,9.3).lineTo(-2.6,9.3).lineTo(-2.6,6).lineTo(-3.2,6).closePath().moveTo(-4.2,9.3).lineTo(-3.7,9.3).lineTo(-3.7,6).lineTo(-4.2,6).closePath().moveTo(0.6,5.5).lineTo(3.8,5.5).lineTo(3.8,5).lineTo(9.3,5).lineTo(9.3,-8).lineTo(1.2,-8).closePath().moveTo(-0.9,5.5).lineTo(-1.2,-8).lineTo(-9.6,-8).lineTo(-9.6,5).lineTo(-4.2,5).lineTo(-4.2,5.5).lineTo(-0.9,5.5).closePath();
	this.shape_94.setTransform(115.3,319.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_95.setTransform(111.3,326.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_96.setTransform(115.6,326.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_97.setTransform(118.8,326.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_98.setTransform(114.5,326.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,6.7).lineTo(-3.8,-6.7).lineTo(4.3,-6.7).lineTo(4.3,6.3).lineTo(-1.2,6.3).lineTo(-1.2,6.7).closePath();
	this.shape_99.setTransform(120.3,317.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_100.setTransform(113.5,326.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#494A4E").beginStroke().moveTo(1,6.7).lineTo(1,6.3).lineTo(-4.4,6.3).lineTo(-4.4,-6.7).lineTo(4.1,-6.7).lineTo(4.4,6.7).closePath();
	this.shape_101.setTransform(110,317.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_102.setTransform(112.4,326.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_103.setTransform(117.7,326.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,1.7).lineTo(-0.3,-1.7).lineTo(0.3,-1.7).lineTo(0.3,1.7).closePath();
	this.shape_104.setTransform(116.7,326.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,54.6).lineTo(-11.4,-6.1).curveTo(-12.1,-6.2,-12.7,-6.8).curveTo(-13.3,-7.5,-13.5,-8.5).curveTo(-13.8,-9.8,-13.3,-10.7).lineTo(-18.4,-19.8).lineTo(-18,-2.1).lineTo(-17.9,-1.9).lineTo(-17.2,1.4).curveTo(-17.1,2,-17.7,2.1).lineTo(-22.1,2.9).curveTo(-22.6,3,-22.8,2.5).lineTo(-23.4,-0.9).curveTo(-23.4,-0.9,-23.4,-1).curveTo(-23.4,-1.1,-23.4,-1.1).curveTo(-23.4,-1.2,-23.3,-1.2).curveTo(-23.3,-1.3,-23.3,-1.3).lineTo(-23.3,-1.4).lineTo(-19.9,-20.3).curveTo(-25.1,-20.8,-28.7,-20.4).lineTo(-29.7,5).lineTo(-29,8.5).curveTo(-28.9,9.1,-29.5,9.2).lineTo(-33.9,10).curveTo(-34,10.1,-34,10.1).curveTo(-34.1,10.1,-34.1,10.1).curveTo(-34.2,10.1,-34.3,10).curveTo(-34.3,10,-34.4,10).curveTo(-34.4,9.9,-34.5,9.9).curveTo(-34.5,9.9,-34.5,9.8).curveTo(-34.6,9.8,-34.6,9.7).curveTo(-34.6,9.6,-34.6,9.6).lineTo(-35.2,6.2).curveTo(-35.3,5.9,-35.1,5.7).lineTo(-35.1,5.7).lineTo(-30.4,-20.3).curveTo(-33.4,-21.5,-37.7,-22.1).lineTo(-40,10.2).lineTo(-39.9,10.5).lineTo(-39.2,14.2).curveTo(-39.1,14.8,-39.7,15).lineTo(-44.5,15.9).curveTo(-45.2,16,-45.3,15.3).lineTo(-46,11.7).curveTo(-46.1,11.2,-45.6,11).lineTo(-39,-22.3).lineTo(-45.1,-23).lineTo(-50.7,15.8).curveTo(-50.5,16,-50.4,16.3).lineTo(-49.4,21.7).curveTo(-49.2,22.6,-50.1,22.8).lineTo(-57.2,24.1).curveTo(-57.5,24.2,-57.9,24).curveTo(-58.2,23.8,-58.3,23.4).lineTo(-59.3,18).curveTo(-59.4,17,-58.5,16.9).lineTo(-58.4,16.9).lineTo(-46.3,-23.1).lineTo(-52.2,-23.3).lineTo(-54.8,-33.6).lineTo(-49.3,-36.4).curveTo(-41.5,-39.8,-29.8,-42.8).curveTo(-27,-46,-23.6,-48.7).curveTo(-17.8,-53.2,-12.3,-54.3).curveTo(-6.1,-55.5,2.3,-52.7).curveTo(6.5,-51.3,9.4,-49.7).curveTo(20.7,-50.8,29.9,-50.5).curveTo(34.5,-50.3,36.9,-49.9).lineTo(38.2,-39.4).lineTo(38.2,-39.4).lineTo(38.3,-39.3).lineTo(35.1,-38.2).lineTo(57.5,-7.7).lineTo(57.6,-7.7).curveTo(58.2,-7.5,58.3,-6.9).lineTo(59.3,-1.5).curveTo(59.4,-1.2,59.2,-0.8).curveTo(59,-0.5,58.6,-0.4).lineTo(51.5,0.9).curveTo(51.2,1,50.8,0.8).curveTo(50.5,0.6,50.4,0.2).lineTo(49.4,-5.2).curveTo(49.3,-5.8,49.7,-6.1).lineTo(34,-37.8).lineTo(24.7,-34.3).lineTo(41.1,-10).curveTo(41.5,-9.9,41.6,-9.5).lineTo(42.3,-5.9).curveTo(42.4,-5.2,41.7,-5.1).lineTo(36.9,-4.2).curveTo(36.3,-4.1,36.2,-4.7).lineTo(35.5,-8.4).lineTo(35.5,-8.7).lineTo(23.2,-33.8).curveTo(18.9,-32,17.5,-28.9).lineTo(29.5,-11.3).curveTo(29.8,-11.2,29.9,-10.8).lineTo(30.5,-7.5).curveTo(30.6,-6.9,30,-6.8).lineTo(25.6,-5.9).curveTo(25,-5.8,24.9,-6.4).lineTo(24.3,-9.8).lineTo(24.4,-10.2).lineTo(15.7,-27.9).curveTo(11.4,-26.5,8.4,-25.3).lineTo(15.8,-16.1).curveTo(16.3,-16,16.3,-15.6).lineTo(17,-12.2).curveTo(17.1,-11.7,16.5,-11.6).lineTo(12.1,-10.8).curveTo(11.5,-10.7,11.4,-11.2).lineTo(10.8,-14.6).lineTo(10.8,-14.9).lineTo(6.5,-24.5).lineTo(5.2,-23.9).lineTo(3.4,-14.1).curveTo(4.7,-13.7,5.1,-11.8).curveTo(5.3,-10.6,4.9,-9.7).curveTo(4.6,-8.8,3.8,-8.7).lineTo(3.1,-8.7).lineTo(14.4,52.7).lineTo(15.2,54.6).closePath().moveTo(-57.7,17.1).curveTo(-57.5,17.4,-57.4,17.6).lineTo(-56.6,22.1).lineTo(-51.4,21.1).lineTo(-52.2,16.7).curveTo(-52.3,16.3,-52.1,15.9).curveTo(-51.9,15.6,-51.5,15.5).lineTo(-51.4,15.5).lineTo(-46.1,-21.5).closePath().moveTo(-44.9,11.1).lineTo(-44.7,11.4).lineTo(-44.1,14.5).lineTo(-40.6,13.8).lineTo(-41.2,10.8).curveTo(-41.3,10.3,-40.8,10.1).lineTo(-38.5,-20.7).closePath().moveTo(-29.6,-20.3).lineTo(-34.3,5.6).lineTo(-34.1,6).lineTo(-33.6,8.8).lineTo(-30.3,8.2).lineTo(-30.8,5.4).curveTo(-30.9,4.9,-30.5,4.7).lineTo(-29.4,-20.4).closePath().moveTo(-22.5,-1.4).lineTo(-22.3,-1.1).lineTo(-21.8,1.7).lineTo(-18.4,1.1).lineTo(-19,-1.7).curveTo(-19,-2.1,-18.7,-2.3).lineTo(-19.2,-20.1).closePath().moveTo(50.5,-6.3).curveTo(51.1,-6.2,51.3,-5.6).lineTo(52.1,-1.1).lineTo(57.3,-2.1).lineTo(56.5,-6.6).curveTo(56.3,-7.1,56.8,-7.5).lineTo(35.6,-36.2).closePath().moveTo(23.9,-34).lineTo(36.1,-9.2).curveTo(36.6,-9.2,36.7,-8.6).lineTo(37.3,-5.6).lineTo(40.9,-6.3).lineTo(40.3,-9.3).lineTo(40.4,-9.8).lineTo(24,-34.1).closePath().moveTo(16.4,-28.2).lineTo(25.1,-10.5).curveTo(25.4,-10.3,25.5,-10).lineTo(26,-7.2).lineTo(29.2,-7.8).lineTo(28.7,-10.6).lineTo(28.8,-11).lineTo(17,-28.4).closePath().moveTo(7.2,-24.8).lineTo(11.5,-15.2).curveTo(11.9,-15,11.9,-14.8).lineTo(12.4,-12).lineTo(15.8,-12.6).lineTo(15.2,-15.4).lineTo(15.2,-15.6).lineTo(7.7,-25).closePath().moveTo(-43.6,-35.1).curveTo(-44.9,-34.9,-45.6,-33.8).curveTo(-46.3,-32.8,-46,-31.5).curveTo(-45.8,-30.3,-44.7,-29.5).curveTo(-43.7,-28.8,-42.4,-29).curveTo(-41.2,-29.2,-40.5,-30.3).curveTo(-39.7,-31.4,-40,-32.6).curveTo(-40.2,-33.9,-41.3,-34.6).curveTo(-42.1,-35.2,-43,-35.2).lineTo(-43.6,-35.1).closePath().moveTo(-33,-38.6).curveTo(-34.2,-38.3,-35,-37.3).curveTo(-35.7,-36.3,-35.5,-35).curveTo(-35.2,-33.7,-34.2,-33).curveTo(-33.1,-32.3,-31.8,-32.5).curveTo(-30.6,-32.7,-29.9,-33.8).curveTo(-29.1,-34.9,-29.4,-36.1).curveTo(-29.6,-37.4,-30.7,-38.1).curveTo(-31.5,-38.6,-32.3,-38.6).lineTo(-33,-38.6).closePath().moveTo(-21.1,-41.8).curveTo(-22.4,-41.6,-23.1,-40.5).curveTo(-23.8,-39.5,-23.6,-38.2).curveTo(-23.4,-37,-22.3,-36.2).curveTo(-21.3,-35.5,-20,-35.7).curveTo(-18.8,-36,-18,-37).curveTo(-17.3,-38.1,-17.5,-39.3).curveTo(-17.8,-40.6,-18.8,-41.3).curveTo(-19.7,-41.9,-20.6,-41.9).lineTo(-21.1,-41.8).closePath().moveTo(-9.4,-44).curveTo(-10.7,-43.8,-11.4,-42.7).curveTo(-12.1,-41.7,-11.9,-40.4).curveTo(-11.6,-39.2,-10.6,-38.4).curveTo(-9.6,-37.7,-8.3,-37.9).curveTo(-7,-38.2,-6.3,-39.2).curveTo(-5.6,-40.3,-5.8,-41.5).curveTo(-6,-42.8,-7.1,-43.5).curveTo(-7.9,-44.1,-8.8,-44.1).lineTo(-9.4,-44).closePath().moveTo(1.8,-45.8).curveTo(0.6,-45.6,-0.1,-44.5).curveTo(-0.8,-43.5,-0.6,-42.2).curveTo(-0.4,-41,0.7,-40.2).curveTo(1.7,-39.5,3,-39.8).curveTo(4.3,-40,5,-41).curveTo(5.7,-42.1,5.4,-43.4).curveTo(5.2,-44.6,4.2,-45.3).curveTo(3.3,-45.9,2.4,-45.9).lineTo(1.8,-45.8).closePath().moveTo(13.3,-47).curveTo(12,-46.8,11.3,-45.7).curveTo(10.6,-44.7,10.8,-43.4).curveTo(11,-42.2,12.1,-41.4).curveTo(13.2,-40.7,14.4,-40.9).curveTo(15.7,-41.2,16.4,-42.2).curveTo(17.2,-43.3,16.9,-44.5).curveTo(16.7,-45.8,15.6,-46.5).curveTo(14.8,-47.1,13.8,-47.1).lineTo(13.3,-47).closePath().moveTo(25.1,-47.4).curveTo(23.9,-47.1,23.2,-46.1).curveTo(22.5,-45,22.7,-43.8).curveTo(22.9,-42.5,24,-41.8).curveTo(25,-41,26.3,-41.3).curveTo(27.5,-41.5,28.3,-42.6).curveTo(29,-43.6,28.8,-44.9).curveTo(28.5,-46.1,27.5,-46.9).curveTo(26.6,-47.4,25.7,-47.4).lineTo(25.1,-47.4).closePath();
	this.shape_105.setTransform(261.8,310.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,-0).curveTo(-0.7,-0.7,-0,-0.7).curveTo(0.7,-0.7,0.7,-0).curveTo(0.7,0.7,-0,0.7).curveTo(-0.7,0.7,-0.7,-0).closePath();
	this.shape_106.setTransform(338.3,352.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,-0).curveTo(-0.7,-0.7,-0,-0.7).curveTo(0.7,-0.7,0.7,-0).curveTo(0.7,0.7,-0,0.7).curveTo(-0.7,0.7,-0.7,-0).closePath();
	this.shape_107.setTransform(308.9,352.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.4,1.4).curveTo(-19.9,1.4,-20.4,1).curveTo(-20.8,0.6,-20.8,-0).curveTo(-20.8,-0.6,-20.4,-1).curveTo(-19.9,-1.4,-19.4,-1.4).lineTo(19.4,-1.4).curveTo(20,-1.4,20.4,-1).curveTo(20.8,-0.6,20.8,-0).curveTo(20.8,0.6,20.4,1).curveTo(20,1.4,19.4,1.4).closePath();
	this.shape_108.setTransform(323.8,352.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0).curveTo(-0.7,-0.7,-0,-0.7).curveTo(0.7,-0.7,0.7,0).curveTo(0.7,0.7,-0,0.7).curveTo(-0.7,0.7,-0.7,0).closePath();
	this.shape_109.setTransform(338.3,348.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0).curveTo(-0.7,-0.7,-0,-0.7).curveTo(0.7,-0.7,0.7,0).curveTo(0.7,0.7,-0,0.7).curveTo(-0.7,0.7,-0.7,0).closePath();
	this.shape_110.setTransform(308.9,348.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.4,1.4).curveTo(-19.9,1.4,-20.4,1).curveTo(-20.8,0.6,-20.8,0).curveTo(-20.8,-0.6,-20.4,-1).curveTo(-19.9,-1.4,-19.4,-1.4).lineTo(19.4,-1.4).curveTo(20,-1.4,20.4,-1).curveTo(20.8,-0.6,20.8,0).curveTo(20.8,0.6,20.4,1).curveTo(20,1.4,19.4,1.4).closePath();
	this.shape_111.setTransform(323.8,348.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.5,1.4).curveTo(-21,1.4,-21.5,1).curveTo(-21.9,0.6,-21.9,-0).curveTo(-21.9,-0.6,-21.5,-1).curveTo(-21,-1.4,-20.5,-1.4).lineTo(20.5,-1.4).curveTo(21.1,-1.4,21.4,-1).curveTo(21.8,-0.6,21.9,-0).curveTo(21.8,0.6,21.4,1).curveTo(21.1,1.4,20.5,1.4).closePath();
	this.shape_112.setTransform(323.8,356.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#494A4E").beginStroke().moveTo(15.1,3.5).lineTo(15.1,-0).lineTo(-15.1,-0).lineTo(-15.1,3.5).lineTo(-17.6,3.5).lineTo(-17.6,-3.5).lineTo(17.6,-3.5).lineTo(17.6,3.5).closePath();
	this.shape_113.setTransform(323.8,361.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,6.4).lineTo(-1.4,-5.1).curveTo(-1.4,-5.6,-1,-6).curveTo(-0.6,-6.4,-0,-6.4).curveTo(0.5,-6.4,1,-6).curveTo(1.4,-5.6,1.4,-5.1).lineTo(1.4,6.4).closePath();
	this.shape_114.setTransform(338.3,352);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,6.4).lineTo(-1.4,-5.1).curveTo(-1.4,-5.6,-1,-6).curveTo(-0.6,-6.4,-0,-6.4).curveTo(0.6,-6.4,1,-6).curveTo(1.4,-5.6,1.4,-5.1).lineTo(1.4,6.4).closePath();
	this.shape_115.setTransform(308.9,352);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,0.5).curveTo(-4.3,0.5,-4.3,0).curveTo(-4.3,-0.5,-3.7,-0.5).lineTo(3.7,-0.5).curveTo(4.3,-0.5,4.3,0).curveTo(4.3,0.5,3.7,0.5).closePath();
	this.shape_116.setTransform(8.3,318.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,0.6).lineTo(-2.1,-0.6).lineTo(2.1,-0.6).lineTo(2.1,0.6).closePath();
	this.shape_117.setTransform(8.3,325.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,3.2).lineTo(0.3,-3.2).lineTo(0.9,-3.2).lineTo(-0.3,3.2).closePath();
	this.shape_118.setTransform(9.6,321.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#494A4E").beginStroke().moveTo(0.3,3.2).lineTo(-0.9,-3.2).lineTo(-0.3,-3.2).lineTo(0.9,3.2).closePath();
	this.shape_119.setTransform(6.9,321.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,3.2).lineTo(-3.5,-3.2).lineTo(3.5,-3.2).lineTo(1.8,3.2).closePath();
	this.shape_120.setTransform(8.3,321.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,0.7).curveTo(-4.1,0.1,-3.7,-0.3).curveTo(-3.3,-0.7,-2.7,-0.7).lineTo(2.7,-0.7).curveTo(3.3,-0.7,3.7,-0.3).curveTo(4.1,0.1,4.1,0.7).closePath();
	this.shape_121.setTransform(8.3,364.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,0.9).lineTo(-2.1,-1).lineTo(2.1,-1).lineTo(2.1,0.9).closePath();
	this.shape_122.setTransform(8.3,332.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,1.5).lineTo(-2.4,-1.5).lineTo(2.4,-1.5).lineTo(2.4,1.5).closePath();
	this.shape_123.setTransform(8.3,356.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,3).lineTo(-0.6,-3).lineTo(0.6,-3).lineTo(0.6,3).closePath();
	this.shape_124.setTransform(8.3,328.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,12.7).lineTo(-1.3,-12.7).lineTo(1.3,-12.7).lineTo(1.3,12.7).closePath();
	this.shape_125.setTransform(8.3,345);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,3.1).lineTo(-2.4,-3.1).lineTo(2.4,-3.1).lineTo(2.4,3.1).closePath();
	this.shape_126.setTransform(8.3,360.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,3.2).lineTo(-3.2,-3.2).lineTo(3.2,-3.2).lineTo(1.6,3.2).closePath();
	this.shape_127.setTransform(8.3,321.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,1.7).curveTo(-3.4,0.3,-2.4,-0.7).curveTo(-1.4,-1.7,-0,-1.7).curveTo(1.4,-1.7,2.4,-0.7).curveTo(3.4,0.3,3.4,1.7).closePath();
	this.shape_128.setTransform(8.3,316.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.9).curveTo(-1.3,0.5,-1.3,-0).curveTo(-1.3,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.3,-0.5,1.3,-0).curveTo(1.3,0.5,0.9,0.9).curveTo(0.5,1.3,-0,1.2).curveTo(-0.5,1.3,-0.9,0.9).closePath();
	this.shape_129.setTransform(8.3,314.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,2.7).lineTo(-8.1,-2.7).lineTo(4.7,-2.7).lineTo(8.1,-0.2).lineTo(4.7,2.7).closePath();
	this.shape_130.setTransform(32.2,316.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.5,2.7).lineTo(-8.8,0.2).lineTo(-5.5,-2.7).lineTo(8.8,-2.7).lineTo(8.8,2.7).closePath();
	this.shape_131.setTransform(15.9,308.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,32).curveTo(-1.3,31.6,-1.3,31).lineTo(-1.3,-31.1).curveTo(-1.3,-31.6,-1,-32).curveTo(-0.5,-32.4,0,-32.4).curveTo(0.5,-32.4,0.9,-32).curveTo(1.4,-31.6,1.4,-31.1).lineTo(1.4,31).curveTo(1.4,31.6,0.9,32).curveTo(0.5,32.4,0,32.4).curveTo(-0.5,32.4,-1,32).closePath();
	this.shape_132.setTransform(24.3,332.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#494A4E").beginStroke().moveTo(-86.3,2.7).lineTo(-86.3,-2.7).lineTo(86.3,-2.7).lineTo(86.3,2.7).closePath();
	this.shape_133.setTransform(115.9,362.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#494A4E").beginStroke().moveTo(-76.2,2.7).lineTo(-76.2,-2.7).lineTo(76.2,-2.7).lineTo(76.2,2.7).closePath();
	this.shape_134.setTransform(115.9,358.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#494A4E").beginStroke().moveTo(-76.2,2.7).lineTo(-76.2,-2.7).lineTo(76.2,-2.7).lineTo(76.2,2.7).closePath();
	this.shape_135.setTransform(115.9,358.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_136.setTransform(158.2,348.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,7.2).lineTo(-0.6,-7.2).lineTo(0.6,-7.2).lineTo(0.6,7.2).closePath();
	this.shape_137.setTransform(152.5,348.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_138.setTransform(146.7,348.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_139.setTransform(141,348.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_140.setTransform(135.3,348.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_141.setTransform(129.6,348.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_142.setTransform(123.9,348.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_143.setTransform(118.2,348.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_144.setTransform(112.5,348.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_145.setTransform(106.8,348.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_146.setTransform(101.1,348.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_147.setTransform(95.4,348.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_148.setTransform(89.7,348.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_149.setTransform(84,348.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_150.setTransform(78.3,348.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,7.2).lineTo(-0.7,-7.2).lineTo(0.7,-7.2).lineTo(0.7,7.2).closePath();
	this.shape_151.setTransform(72.5,348.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#494A4E").beginStroke().moveTo(-59.8,1).lineTo(-59.8,-1).lineTo(59.7,-1).lineTo(59.7,1).closePath();
	this.shape_152.setTransform(116.9,356);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#494A4E").beginStroke().moveTo(-59.8,1).lineTo(-59.8,-1).lineTo(59.7,-1).lineTo(59.7,1).closePath();
	this.shape_153.setTransform(116.9,341.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.1,11.1).lineTo(-12.1,-11.1).lineTo(12.1,-11.1).lineTo(12.1,11.1).closePath();
	this.shape_154.setTransform(175.3,345.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.1,11.1).lineTo(-12.1,-11.1).lineTo(12.1,-11.1).lineTo(12.1,11.1).closePath();
	this.shape_155.setTransform(55.1,345.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#494A4E").beginStroke().moveTo(-35.3,-47.7).lineTo(-31.9,-49).lineTo(35.3,48.4).lineTo(11.1,49).closePath();
	this.shape_156.setTransform(152.1,287.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#494A4E").beginStroke().moveTo(-35.2,48.4).lineTo(31.9,-49).lineTo(35.2,-47.6).lineTo(-11.1,49).closePath();
	this.shape_157.setTransform(78.3,286.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#494A4E").beginStroke().moveTo(4.2,0.5).curveTo(3.9,-2.3,2,-3.8).curveTo(0.2,-5.1,-2.3,-4.9).curveTo(-4.3,-4.6,-5.6,-3.6).curveTo(-4.3,-6.4,-1,-6.7).curveTo(1.5,-6.9,3.3,-5.6).curveTo(5.2,-4.1,5.5,-1.3).curveTo(5.7,0.9,5,3.1).curveTo(4.3,5.4,2.9,6.7).curveTo(4.5,3.8,4.2,0.5).closePath();
	this.shape_158.setTransform(823.2,340.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#494A4E").beginStroke().moveTo(0.1,6.5).curveTo(-2,6.2,-3.8,3.7).curveTo(-5.5,1.3,-5.8,-1.5).curveTo(-6.1,-4.3,-4.6,-6.1).curveTo(-3.2,-7.8,-0.7,-8).curveTo(1.8,-8.3,3.5,-6.9).curveTo(5.4,-5.5,5.7,-2.7).curveTo(6,0.2,4.8,2.9).curveTo(3.5,5.8,1.4,6.4).lineTo(2.1,7.8).lineTo(-0.2,8.1).closePath();
	this.shape_159.setTransform(823,341.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#494A4E").beginStroke().moveTo(1.4,10.5).curveTo(1.4,10.5,1.3,10.4).curveTo(1.3,10.4,1.2,10.4).curveTo(1.2,10.4,1.2,10.3).curveTo(1.2,10.3,1.2,10.2).lineTo(-1.7,-10.1).curveTo(-1.7,-10.2,-1.7,-10.3).curveTo(-1.7,-10.3,-1.7,-10.4).curveTo(-1.6,-10.4,-1.6,-10.4).curveTo(-1.5,-10.4,-1.5,-10.4).curveTo(-1.4,-10.5,-1.3,-10.5).curveTo(-1.3,-10.5,-1.2,-10.4).curveTo(-1.2,-10.4,-1.2,-10.4).curveTo(-1.2,-10.3,-1.2,-10.2).lineTo(1.7,10.2).curveTo(1.7,10.2,1.7,10.3).curveTo(1.7,10.3,1.7,10.3).curveTo(1.6,10.4,1.6,10.4).curveTo(1.5,10.4,1.5,10.5).closePath();
	this.shape_160.setTransform(824.4,353.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#494A4E").beginStroke().moveTo(4.2,1.4).curveTo(4.6,-2,2.7,-4.2).curveTo(1,-6.3,-2.1,-6.6).curveTo(-4.5,-6.9,-6.3,-5.9).curveTo(-4.2,-8.8,-0,-8.4).curveTo(3,-8.1,4.7,-6).curveTo(6.6,-3.8,6.2,-0.4).curveTo(5.9,2.2,4.5,4.7).curveTo(3,7.2,1.1,8.4).curveTo(3.8,5.3,4.2,1.4).closePath();
	this.shape_161.setTransform(835.8,328.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,9.4).lineTo(-2,7.7).curveTo(-4.5,6.8,-5.9,3.4).curveTo(-7.3,0.1,-6.9,-3.3).curveTo(-6.6,-6.7,-4.4,-8.4).curveTo(-2.3,-10,0.7,-9.7).curveTo(3.7,-9.4,5.5,-7.3).curveTo(7.3,-5.1,7,-1.7).curveTo(6.6,1.7,4.4,4.7).curveTo(2.2,7.7,-0.4,7.9).lineTo(-0,9.7).closePath();
	this.shape_162.setTransform(835.1,329.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#494A4E").beginStroke().moveTo(3.9,0.9).curveTo(3.9,-2,2.2,-3.7).curveTo(0.5,-5.3,-2,-5.4).curveTo(-4.1,-5.4,-5.5,-4.4).curveTo(-3.9,-7.1,-0.5,-7).curveTo(2.1,-7,3.8,-5.4).curveTo(5.5,-3.7,5.5,-0.8).curveTo(5.4,1.4,4.4,3.7).curveTo(3.4,5.9,1.8,7.1).curveTo(3.8,4.2,3.9,0.9).closePath();
	this.shape_163.setTransform(825.1,317.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,8.2).lineTo(-1,6.7).curveTo(-3,6.1,-4.5,3.4).curveTo(-6,0.7,-5.9,-2.1).curveTo(-5.9,-5,-4.2,-6.7).curveTo(-2.6,-8.2,-0,-8.2).curveTo(2.6,-8.1,4.2,-6.5).curveTo(6,-4.8,5.9,-1.9).curveTo(5.8,1,4.3,3.6).curveTo(2.6,6.4,0.4,6.7).lineTo(0.9,8.2).closePath();
	this.shape_164.setTransform(824.6,318.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#494A4E").beginStroke().moveTo(4.5,0.2).curveTo(3.8,-2.6,1.7,-3.8).curveTo(-0.3,-5,-2.8,-4.4).curveTo(-4.7,-3.9,-5.9,-2.6).curveTo(-5,-5.6,-1.7,-6.4).curveTo(0.8,-7,2.8,-5.9).curveTo(4.9,-4.6,5.6,-1.8).curveTo(6.1,0.3,5.7,2.7).curveTo(5.2,5.2,4,6.7).curveTo(5.3,3.5,4.5,0.2).closePath();
	this.shape_165.setTransform(813.3,326);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.6).curveTo(-0.9,6.6,-3.1,4.3).curveTo(-5.1,2.1,-5.8,-0.7).curveTo(-6.5,-3.5,-5.2,-5.5).curveTo(-4,-7.4,-1.5,-8).curveTo(1,-8.6,3,-7.5).curveTo(5.1,-6.2,5.7,-3.4).curveTo(6.4,-0.6,5.5,2.4).curveTo(4.6,5.5,2.6,6.4).lineTo(3.4,7.7).lineTo(1.1,8.2).closePath();
	this.shape_166.setTransform(813.2,327.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,22.5).lineTo(0.6,22.5).lineTo(0.6,22.5).lineTo(0.5,22.4).lineTo(-10,-8.2).curveTo(-10,-8.3,-10,-8.3).curveTo(-10,-8.4,-10,-8.4).curveTo(-10,-8.5,-9.9,-8.5).curveTo(-9.9,-8.5,-9.8,-8.5).curveTo(-9.8,-8.6,-9.7,-8.6).curveTo(-9.7,-8.6,-9.6,-8.5).curveTo(-9.6,-8.5,-9.5,-8.5).curveTo(-9.5,-8.4,-9.5,-8.3).lineTo(0.5,20.7).lineTo(-0.7,-22.3).curveTo(-0.7,-22.4,-0.7,-22.4).curveTo(-0.7,-22.5,-0.7,-22.5).curveTo(-0.6,-22.5,-0.6,-22.5).curveTo(-0.5,-22.6,-0.5,-22.6).curveTo(-0.4,-22.6,-0.4,-22.5).curveTo(-0.3,-22.5,-0.3,-22.5).curveTo(-0.2,-22.4,-0.2,-22.4).curveTo(-0.2,-22.3,-0.2,-22.3).lineTo(1.1,20.1).lineTo(9.5,-9).curveTo(9.5,-9.1,9.5,-9.1).curveTo(9.6,-9.1,9.6,-9.2).curveTo(9.6,-9.2,9.7,-9.2).curveTo(9.8,-9.2,9.8,-9.2).curveTo(9.9,-9.2,9.9,-9.1).curveTo(9.9,-9.1,10,-9.1).curveTo(10,-9,10,-9).curveTo(10,-8.9,10,-8.8).lineTo(1,22.3).lineTo(1,22.4).lineTo(0.9,22.5).lineTo(0.8,22.5).closePath();
	this.shape_167.setTransform(825.1,342.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#494A4E").beginStroke().moveTo(4.2,0.5).curveTo(3.9,-2.3,2,-3.8).curveTo(0.2,-5.1,-2.3,-4.9).curveTo(-4.3,-4.6,-5.6,-3.6).curveTo(-4.3,-6.4,-1,-6.7).curveTo(1.5,-6.9,3.3,-5.6).curveTo(5.2,-4.1,5.5,-1.3).curveTo(5.8,0.8,5,3.1).curveTo(4.3,5.4,2.9,6.7).curveTo(4.5,3.9,4.2,0.5).closePath();
	this.shape_168.setTransform(926.2,340.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#494A4E").beginStroke().moveTo(0.1,6.5).curveTo(-2,6.2,-3.8,3.7).curveTo(-5.5,1.3,-5.8,-1.5).curveTo(-6.1,-4.3,-4.6,-6.1).curveTo(-3.2,-7.8,-0.7,-8).curveTo(1.8,-8.3,3.6,-6.9).curveTo(5.5,-5.5,5.8,-2.7).curveTo(6.1,0.2,4.8,2.9).curveTo(3.5,5.8,1.4,6.4).lineTo(2.1,7.8).lineTo(-0.2,8.1).closePath();
	this.shape_169.setTransform(926,341.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#494A4E").beginStroke().moveTo(1.4,10.5).curveTo(1.4,10.5,1.3,10.4).curveTo(1.3,10.4,1.2,10.4).curveTo(1.2,10.4,1.2,10.3).curveTo(1.2,10.3,1.2,10.2).lineTo(-1.7,-10.1).curveTo(-1.7,-10.2,-1.7,-10.3).curveTo(-1.6,-10.3,-1.6,-10.4).curveTo(-1.6,-10.4,-1.5,-10.4).curveTo(-1.5,-10.4,-1.4,-10.4).curveTo(-1.4,-10.5,-1.3,-10.5).curveTo(-1.3,-10.5,-1.3,-10.4).curveTo(-1.2,-10.4,-1.2,-10.4).curveTo(-1.2,-10.3,-1.1,-10.2).lineTo(1.7,10.2).curveTo(1.7,10.2,1.7,10.3).curveTo(1.7,10.3,1.6,10.3).curveTo(1.6,10.4,1.6,10.4).curveTo(1.5,10.4,1.5,10.5).closePath();
	this.shape_170.setTransform(927.4,353.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#494A4E").beginStroke().moveTo(4.2,1.4).curveTo(4.6,-2,2.7,-4.2).curveTo(1,-6.3,-2.1,-6.6).curveTo(-4.4,-6.8,-6.3,-5.9).curveTo(-4.1,-8.8,-0,-8.4).curveTo(3,-8.1,4.8,-6).curveTo(6.6,-3.8,6.2,-0.4).curveTo(6,2.2,4.5,4.7).curveTo(3.1,7.2,1.1,8.4).curveTo(3.8,5.3,4.2,1.4).closePath();
	this.shape_171.setTransform(938.8,328.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,9.4).lineTo(-2,7.7).curveTo(-4.4,6.8,-5.9,3.4).curveTo(-7.3,0.1,-6.9,-3.3).curveTo(-6.6,-6.7,-4.4,-8.4).curveTo(-2.3,-10,0.7,-9.7).curveTo(3.8,-9.4,5.5,-7.3).curveTo(7.4,-5.1,7,-1.7).curveTo(6.6,1.7,4.4,4.7).curveTo(2.2,7.7,-0.4,7.9).lineTo(0,9.7).closePath();
	this.shape_172.setTransform(938.1,329.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#494A4E").beginStroke().moveTo(3.9,0.9).curveTo(3.9,-2,2.2,-3.7).curveTo(0.5,-5.3,-2,-5.4).curveTo(-4.1,-5.4,-5.5,-4.4).curveTo(-3.9,-7.1,-0.4,-7).curveTo(2.1,-7,3.8,-5.4).curveTo(5.5,-3.7,5.5,-0.8).curveTo(5.4,1.4,4.4,3.7).curveTo(3.4,5.9,1.8,7.1).curveTo(3.8,4.3,3.9,0.9).closePath();
	this.shape_173.setTransform(928.1,317.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,8.2).lineTo(-0.9,6.7).curveTo(-3,6.1,-4.5,3.4).curveTo(-6,0.7,-5.9,-2.1).curveTo(-5.9,-5,-4.2,-6.7).curveTo(-2.5,-8.2,0,-8.2).curveTo(2.6,-8.1,4.2,-6.5).curveTo(6,-4.8,5.9,-1.9).curveTo(5.8,1,4.3,3.6).curveTo(2.6,6.4,0.4,6.7).lineTo(0.9,8.2).closePath();
	this.shape_174.setTransform(927.6,318.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#494A4E").beginStroke().moveTo(4.5,0.2).curveTo(3.8,-2.6,1.7,-3.8).curveTo(-0.3,-5,-2.8,-4.4).curveTo(-4.7,-3.9,-5.9,-2.6).curveTo(-5,-5.6,-1.7,-6.4).curveTo(0.8,-7,2.8,-5.9).curveTo(4.9,-4.6,5.6,-1.8).curveTo(6.1,0.3,5.7,2.7).curveTo(5.2,5.2,4,6.7).curveTo(5.3,3.5,4.5,0.2).closePath();
	this.shape_175.setTransform(916.3,326);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.6).curveTo(-0.9,6.6,-3.1,4.3).curveTo(-5.1,2.1,-5.8,-0.7).curveTo(-6.4,-3.5,-5.2,-5.5).curveTo(-4,-7.4,-1.5,-8).curveTo(1,-8.6,3,-7.5).curveTo(5.1,-6.2,5.7,-3.4).curveTo(6.4,-0.6,5.5,2.4).curveTo(4.6,5.5,2.6,6.4).lineTo(3.4,7.7).lineTo(1.1,8.2).closePath();
	this.shape_176.setTransform(916.2,327.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,22.5).lineTo(0.6,22.5).lineTo(0.6,22.5).lineTo(0.5,22.4).lineTo(0.5,22.4).lineTo(0.5,22.4).lineTo(-10,-8.2).curveTo(-10,-8.3,-10,-8.3).curveTo(-10,-8.4,-10,-8.4).curveTo(-10,-8.5,-10,-8.5).curveTo(-9.9,-8.5,-9.8,-8.5).curveTo(-9.8,-8.6,-9.7,-8.6).curveTo(-9.7,-8.6,-9.6,-8.5).curveTo(-9.6,-8.5,-9.6,-8.5).curveTo(-9.5,-8.4,-9.5,-8.3).lineTo(0.5,20.7).lineTo(-0.7,-22.3).curveTo(-0.7,-22.4,-0.7,-22.4).curveTo(-0.7,-22.5,-0.7,-22.5).curveTo(-0.6,-22.5,-0.6,-22.5).curveTo(-0.5,-22.6,-0.4,-22.6).curveTo(-0.4,-22.6,-0.3,-22.5).curveTo(-0.3,-22.5,-0.3,-22.5).curveTo(-0.2,-22.4,-0.2,-22.4).curveTo(-0.2,-22.3,-0.2,-22.3).lineTo(1.1,20.1).lineTo(9.5,-9).curveTo(9.5,-9.1,9.5,-9.1).curveTo(9.5,-9.1,9.6,-9.2).curveTo(9.6,-9.2,9.7,-9.2).curveTo(9.7,-9.2,9.8,-9.2).curveTo(9.9,-9.2,9.9,-9.1).curveTo(10,-9.1,10,-9.1).curveTo(10,-9,10,-9).curveTo(10,-8.9,10,-8.8).lineTo(1,22.3).lineTo(1,22.4).lineTo(0.9,22.5).closePath();
	this.shape_177.setTransform(928.1,342.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,1.5).lineTo(-4.4,-1.5).lineTo(4.4,-1.5).lineTo(4.4,1.5).closePath();
	this.shape_178.setTransform(750.3,349.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,1.5).lineTo(-4.4,-1.5).lineTo(4.4,-1.5).lineTo(4.4,1.5).closePath();
	this.shape_179.setTransform(729.2,349.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.5,1.5).lineTo(-6.5,-1.5).lineTo(6.5,-1.5).lineTo(6.5,1.5).closePath();
	this.shape_180.setTransform(713.6,349.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.7).curveTo(-0.9,0.4,-0.9,0).curveTo(-1,-1,-0,-1).curveTo(0.4,-0.9,0.6,-0.7).curveTo(1,-0.4,1,0).curveTo(1,0.4,0.6,0.7).curveTo(0.4,0.9,-0,0.9).curveTo(-0.4,0.9,-0.7,0.7).closePath();
	this.shape_181.setTransform(740.5,329);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,0).curveTo(-0.9,-0.4,-0.7,-0.7).curveTo(-0.4,-1,0,-1).curveTo(0.4,-1,0.7,-0.7).curveTo(0.9,-0.4,0.9,0).curveTo(0.9,0.4,0.7,0.7).curveTo(0.4,1,0,0.9).curveTo(-1,0.9,-1,0).closePath();
	this.shape_182.setTransform(746.3,336.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.7).curveTo(-0.9,0.4,-0.9,-0).curveTo(-0.9,-0.3,-0.7,-0.6).curveTo(-0.4,-0.9,-0,-0.9).curveTo(0.4,-0.9,0.7,-0.6).curveTo(0.9,-0.4,1,-0).curveTo(1,1,-0,1).curveTo(-0.4,1,-0.7,0.7).closePath();
	this.shape_183.setTransform(740,337);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,0.7).curveTo(-1,0.4,-1,0).curveTo(-1,-0.3,-0.6,-0.6).curveTo(-0.3,-1,0,-1).curveTo(0.4,-1,0.7,-0.6).curveTo(0.9,-0.4,0.9,0).curveTo(0.9,1,0,0.9).curveTo(-0.4,0.9,-0.6,0.7).closePath();
	this.shape_184.setTransform(716.2,335.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.7).curveTo(-1,0.4,-1,0).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,0,-1).curveTo(0.4,-1,0.6,-0.7).curveTo(0.9,-0.4,0.9,0).curveTo(0.9,0.4,0.6,0.7).curveTo(0.4,1,0,1).curveTo(-0.4,1,-0.7,0.7).closePath();
	this.shape_185.setTransform(715,342.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,-0).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-0.9,-0,-0.9).curveTo(0.4,-0.9,0.7,-0.7).curveTo(0.9,-0.4,0.9,-0).curveTo(0.9,0.9,-0,0.9).curveTo(-0.9,0.9,-0.9,-0).closePath();
	this.shape_186.setTransform(722.7,336.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_187.setTransform(745.8,337.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.7).curveTo(-3.8,1.6,-3.8,-0).curveTo(-3.8,-1.6,-2.7,-2.7).curveTo(-1.6,-3.9,0,-3.8).curveTo(1.6,-3.9,2.7,-2.7).curveTo(3.8,-1.6,3.8,-0).curveTo(3.8,1.6,2.7,2.7).curveTo(1.6,3.8,0,3.8).curveTo(-1.6,3.8,-2.7,2.7).closePath();
	this.shape_188.setTransform(745.7,337.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,4).curveTo(-5.7,2.4,-5.7,-0).curveTo(-5.7,-2.3,-4,-4.1).curveTo(-2.3,-5.7,0,-5.7).curveTo(2.4,-5.7,4.1,-4.1).curveTo(5.7,-2.3,5.7,-0).curveTo(5.7,2.4,4.1,4).curveTo(2.4,5.7,0,5.7).curveTo(-2.3,5.7,-4,4).closePath();
	this.shape_189.setTransform(745.7,337.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.8,5.8).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.4,-5.8,-5.9).curveTo(-3.4,-8.3,0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.4,8.3,-0).curveTo(8.3,3.4,5.9,5.8).curveTo(3.4,8.3,0,8.3).curveTo(-3.4,8.3,-5.8,5.8).closePath();
	this.shape_190.setTransform(745.7,337.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_191.setTransform(717.2,337.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.7).curveTo(-3.8,1.6,-3.8,-0).curveTo(-3.8,-1.6,-2.7,-2.7).curveTo(-1.6,-3.9,-0,-3.8).curveTo(1.6,-3.9,2.7,-2.7).curveTo(3.8,-1.6,3.8,-0).curveTo(3.8,1.6,2.7,2.7).curveTo(1.6,3.8,-0,3.8).curveTo(-1.6,3.8,-2.7,2.7).closePath();
	this.shape_192.setTransform(717.2,337.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,4).curveTo(-5.7,2.4,-5.7,-0).curveTo(-5.7,-2.3,-4.1,-4.1).curveTo(-2.4,-5.7,-0,-5.7).curveTo(2.4,-5.7,4.1,-4.1).curveTo(5.7,-2.3,5.7,-0).curveTo(5.7,2.4,4.1,4).curveTo(2.4,5.7,-0,5.7).curveTo(-2.4,5.7,-4.1,4).closePath();
	this.shape_193.setTransform(717.2,337.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.9,5.8).curveTo(-8.3,3.4,-8.3,-0).curveTo(-8.3,-3.4,-5.9,-5.9).curveTo(-3.4,-8.3,-0,-8.3).curveTo(3.4,-8.3,5.9,-5.9).curveTo(8.3,-3.4,8.3,-0).curveTo(8.3,3.4,5.9,5.8).curveTo(3.4,8.3,-0,8.3).curveTo(-3.4,8.3,-5.9,5.8).closePath();
	this.shape_194.setTransform(717.2,337.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.3,7.1).lineTo(-31.1,-7.1).lineTo(31.1,-7.1).lineTo(30.2,7.1).closePath();
	this.shape_195.setTransform(730.8,357.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#494A4E").beginStroke().moveTo(-39.5,3).lineTo(-39.5,-3).lineTo(39.5,-3).lineTo(39.5,3).closePath();
	this.shape_196.setTransform(730.5,319.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,2.6).curveTo(-3.2,1.5,-3.2,0).curveTo(-3.2,-1.5,-2.2,-2.6).curveTo(-1.3,-3.6,0,-3.6).curveTo(1.3,-3.6,2.3,-2.6).curveTo(3.2,-1.5,3.2,0).curveTo(3.2,1.5,2.3,2.6).curveTo(1.3,3.6,0,3.6).curveTo(-1.3,3.6,-2.2,2.6).closePath();
	this.shape_197.setTransform(730.4,265.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,11).lineTo(-0.5,-11).lineTo(0.5,-11).lineTo(0.5,11).closePath();
	this.shape_198.setTransform(730.7,256.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,5.4).lineTo(-8.5,3.8).lineTo(-8.5,-5.7).lineTo(-1.4,-4.6).curveTo(6.1,-3.9,8.4,-5.7).curveTo(8.5,-3.2,6.2,-1.2).lineTo(3.9,0.3).lineTo(4.7,1.4).curveTo(6,2.7,8.4,3.8).curveTo(6.9,5.7,2.5,5.7).curveTo(0.8,5.7,-1.3,5.4).closePath();
	this.shape_199.setTransform(739.6,251.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.9,26.8).curveTo(-9.1,16.9,-4.2,-5.8).curveTo(-2.7,-12.8,-1.6,-20.4).lineTo(-0.8,-26.8).lineTo(-0.1,-20.2).curveTo(1,-12.3,2.6,-4.9).curveTo(7.9,18.6,16.9,26.8).closePath();
	this.shape_200.setTransform(731.1,290);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.4,26.3).curveTo(-14.9,16.1,-17.4,0.9).curveTo(-19.2,-9.9,-19.7,-26.3).curveTo(-18.6,-8.6,0.7,10.6).curveTo(10.3,20.2,19.7,26.3).closePath();
	this.shape_201.setTransform(750.3,290.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.6,26.4).lineTo(-14.1,22.2).curveTo(-7.6,16.9,-1.8,10.9).curveTo(16.5,-8.2,19.6,-26.4).curveTo(18.6,-9.7,16.7,1.1).curveTo(14.1,15.9,8.6,26.4).closePath();
	this.shape_202.setTransform(710.7,290.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,21.6).lineTo(-0.6,-21.6).lineTo(3.5,-21.6).lineTo(0.6,21.6).closePath();
	this.shape_203.setTransform(760.4,343.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,21.6).lineTo(-3.5,-21.6).lineTo(0.6,-21.6).lineTo(3.5,21.6).closePath();
	this.shape_204.setTransform(701.2,343.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.3,21.6).lineTo(-33.1,-21.6).lineTo(33.1,-21.6).lineTo(30.2,21.6).closePath();
	this.shape_205.setTransform(730.8,343.4);

	this.instance_4 = new lib.barredora0011();
	this.instance_4.parent = this;
	this.instance_4.setTransform(786.6,353.2,1,1,0,0,0,24.2,13);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,3.6).curveTo(-3.9,2.1,-3.9,-0).curveTo(-3.9,-2.1,-2.7,-3.5).curveTo(-1.6,-5.1,0,-5.1).lineTo(1.7,-3.5).curveTo(3.9,-1.7,3.9,-0).curveTo(3.9,2.1,2.8,3.6).curveTo(1.6,5.1,0,5.1).curveTo(-1.6,5.1,-2.7,3.6).closePath();
	this.shape_206.setTransform(804.5,324.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,3.6).curveTo(-3.9,2.1,-3.9,-0).curveTo(-3.9,-2.1,-2.8,-3.5).curveTo(-1.6,-5.1,0,-5.1).curveTo(1.6,-5.1,2.7,-3.5).curveTo(3.9,-2.1,3.9,-0).curveTo(3.9,2.1,2.7,3.6).curveTo(1.6,5.1,0,5.1).curveTo(-1.6,5.1,-2.8,3.6).closePath();
	this.shape_207.setTransform(790.3,324.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,3.6).curveTo(-3.9,2.1,-3.9,-0).curveTo(-3.9,-2.1,-2.8,-3.5).curveTo(-1.6,-5.1,0,-5.1).curveTo(1.6,-5.1,2.7,-3.5).curveTo(3.9,-2.1,3.9,-0).curveTo(3.9,2.1,2.7,3.6).curveTo(1.6,5.1,0,5.1).curveTo(-1.6,5.1,-2.8,3.6).closePath();
	this.shape_208.setTransform(776,324.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.9,2.7).lineTo(-3.9,-2.7).lineTo(2.9,-2.7).lineTo(3.9,2.7).closePath();
	this.shape_209.setTransform(804.5,321.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.9,2.7).lineTo(-3.9,-2.7).lineTo(3.9,-2.7).lineTo(3.9,2.7).closePath();
	this.shape_210.setTransform(790.3,321.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.9,2.7).lineTo(-3.9,-2.7).lineTo(3.9,-2.7).lineTo(3.9,2.7).closePath();
	this.shape_211.setTransform(776,321.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,3.6).curveTo(-3.9,2.1,-3.9,-0).curveTo(-3.9,-2.1,-2.8,-3.5).curveTo(-1.6,-5.1,-0,-5.1).curveTo(1.6,-5.1,2.8,-3.5).curveTo(3.9,-2.1,3.9,-0).curveTo(3.9,2.1,2.8,3.6).curveTo(1.6,5.1,-0,5.1).curveTo(-1.6,5.1,-2.8,3.6).closePath();
	this.shape_212.setTransform(797.4,324.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,3.6).curveTo(-3.9,2.1,-3.9,-0).curveTo(-3.9,-2.1,-2.7,-3.5).curveTo(-1.6,-5.1,-0,-5.1).curveTo(1.6,-5.1,2.8,-3.5).curveTo(3.9,-2.1,3.9,-0).curveTo(3.9,2.1,2.8,3.6).curveTo(1.6,5.1,-0,5.1).curveTo(-1.6,5.1,-2.7,3.6).closePath();
	this.shape_213.setTransform(783.1,324.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,3.6).curveTo(-3.9,2.1,-3.9,-0).curveTo(-3.9,-1.7,-1.7,-3.5).lineTo(-0,-5.1).curveTo(1.6,-5.1,2.8,-3.5).curveTo(3.9,-2.1,3.9,-0).curveTo(3.9,2.1,2.8,3.6).curveTo(1.6,5.1,-0,5.1).curveTo(-1.6,5.1,-2.7,3.6).closePath();
	this.shape_214.setTransform(768.8,324.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,2.7).lineTo(-3.6,-2.7).lineTo(3.6,-2.7).lineTo(3.6,2.7).closePath();
	this.shape_215.setTransform(797.4,321.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,2.7).lineTo(-3.6,-2.7).lineTo(3.6,-2.7).lineTo(3.6,2.7).closePath();
	this.shape_216.setTransform(783.1,321.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,2.7).lineTo(-2.8,-2.7).lineTo(3.8,-2.7).lineTo(3.8,2.7).closePath();
	this.shape_217.setTransform(768.7,321.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,14.2).lineTo(-0.6,-14.2).lineTo(0.6,-12.5).lineTo(0.6,14.2).closePath();
	this.shape_218.setTransform(807.8,336.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,14.1).lineTo(-0.7,-11.4).lineTo(0.7,-14.2).lineTo(0.7,14.1).closePath();
	this.shape_219.setTransform(765.6,335.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.1,10).curveTo(-20.1,1.7,-14.2,-4.1).curveTo(-8.3,-10,-0,-10).curveTo(8.3,-10,14.1,-4.1).curveTo(20.1,1.7,20,10).closePath();
	this.shape_220.setTransform(886.7,355);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.2,0.3).lineTo(-0.3,0.2).lineTo(0.3,-0.3).lineTo(0.3,0.3).closePath();
	this.shape_221.setTransform(887.8,364.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.6,-10.9).curveTo(-9.9,-16.1,-1.6,-18.9).curveTo(6.9,-21.8,16.2,-21.8).lineTo(16.6,-21.8).lineTo(16.6,21.2).lineTo(16.1,21.8).closePath();
	this.shape_222.setTransform(871.4,343.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.9,16.4).curveTo(-24.8,6.7,-20.2,-1.9).curveTo(-15.8,-10.3,-7.8,-16.4).lineTo(24.9,16.3).lineTo(24.8,16.4).closePath();
	this.shape_223.setTransform(862.6,348.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.7,16.4).lineTo(-24.7,15.8).lineTo(7.5,-16.4).curveTo(15.6,-10.3,20,-1.9).curveTo(24.7,6.7,24.7,16.4).closePath();
	this.shape_224.setTransform(912.8,348.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.1,-21.5).curveTo(-7,-21.4,1.4,-18.6).curveTo(9.5,-15.8,16.1,-10.7).lineTo(-16.1,21.5).closePath();
	this.shape_225.setTransform(904.2,342.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,3).curveTo(-4.6,1.1,-4.6,-0.7).curveTo(-4.6,-3.1,-3.1,-4.6).curveTo(-1.7,-5.9,0.4,-5.9).curveTo(3.4,-5.9,4.6,-3.6).curveTo(3.5,-4.4,1.8,-4.4).curveTo(-0.4,-4.4,-1.8,-3.1).curveTo(-3.3,-1.7,-3.3,0.7).curveTo(-3.3,3.5,-1.7,5.9).curveTo(-2.9,4.9,-3.8,3).closePath();
	this.shape_226.setTransform(768.5,263.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,6.8).lineTo(-0.5,5.7).curveTo(-2.2,5.3,-3.6,3).curveTo(-4.9,0.7,-5,-1.7).curveTo(-5,-4.1,-3.4,-5.5).curveTo(-2,-6.8,0.1,-6.9).curveTo(2.2,-6.8,3.6,-5.5).curveTo(5,-4.1,4.9,-1.7).curveTo(4.9,0.7,3.7,2.9).curveTo(2.5,5.2,0.6,5.6).lineTo(1.1,6.8).closePath();
	this.shape_227.setTransform(768.8,264.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#494A4E").beginStroke().moveTo(1.1,8.8).curveTo(0,7.6,-0.7,5.8).curveTo(-2.1,2.2,-0.5,-1.3).curveTo(1,-4.7,0.9,-7).lineTo(0.6,-8.6).curveTo(0.5,-8.6,0.5,-8.6).curveTo(0.5,-8.7,0.5,-8.7).curveTo(0.6,-8.7,0.6,-8.8).curveTo(0.6,-8.8,0.6,-8.8).curveTo(0.7,-8.8,0.7,-8.8).curveTo(0.7,-8.8,0.8,-8.8).curveTo(0.8,-8.8,0.8,-8.8).curveTo(0.8,-8.8,0.9,-8.8).lineTo(1.3,-7.1).curveTo(1.3,-4.8,-0.2,-1.2).curveTo(-1.6,2.2,-0.3,5.7).curveTo(0.3,7.4,1.3,8.5).curveTo(1.3,8.6,1.3,8.6).curveTo(1.4,8.7,1.4,8.7).curveTo(1.4,8.7,1.3,8.7).curveTo(1.3,8.8,1.3,8.8).lineTo(1.2,8.8).closePath();
	this.shape_228.setTransform(768.1,279.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#494A4E").beginStroke().moveTo(-7,5.5).curveTo(-8.5,2.1,-8.5,-1.4).curveTo(-8.5,-5.8,-5.8,-8.4).curveTo(-3.1,-10.8,0.8,-10.8).curveTo(3.3,-10.8,5.3,-9.8).curveTo(7.3,-8.7,8.5,-6.7).curveTo(6.2,-8.2,3.2,-8.2).curveTo(-0.8,-8.2,-3.3,-5.8).curveTo(-6.1,-3.2,-6.1,1.2).curveTo(-6.1,3.7,-5.3,6.3).curveTo(-4.5,8.8,-3.1,10.8).curveTo(-5.4,9,-7,5.5).closePath();
	this.shape_229.setTransform(873.8,281.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,12.6).lineTo(-0.9,10.4).curveTo(-4.2,9.8,-6.7,5.5).curveTo(-9.1,1.3,-9.1,-3.2).curveTo(-9.1,-7.6,-6.4,-10.2).curveTo(-3.8,-12.6,0.2,-12.6).curveTo(4.1,-12.6,6.5,-10.2).curveTo(9.1,-7.6,9.1,-3.2).curveTo(9.1,1.2,6.8,5.3).curveTo(4.5,9.5,1.2,10.3).lineTo(2,12.6).closePath();
	this.shape_230.setTransform(874.4,283.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#494A4E").beginStroke().moveTo(1.9,16.2).curveTo(0,14.1,-1.3,10.8).curveTo(-3.8,4.1,-1,-2.5).curveTo(1.7,-8.7,1.6,-12.9).lineTo(1,-15.8).curveTo(1,-15.9,1,-15.9).curveTo(0.9,-16,1,-16).curveTo(1,-16.1,1,-16.2).curveTo(1.1,-16.2,1.1,-16.3).curveTo(1.2,-16.3,1.3,-16.3).curveTo(1.3,-16.3,1.4,-16.3).curveTo(1.5,-16.3,1.5,-16.3).curveTo(1.5,-16.3,1.6,-16.2).lineTo(2.3,-13.1).curveTo(2.4,-8.8,-0.4,-2.2).curveTo(-3.1,4.1,-0.7,10.5).curveTo(0.6,13.7,2.4,15.7).curveTo(2.4,15.8,2.5,15.9).curveTo(2.5,15.9,2.5,16).curveTo(2.5,16,2.5,16.1).curveTo(2.4,16.2,2.4,16.2).lineTo(2.1,16.3).closePath();
	this.shape_231.setTransform(873.1,310.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.6,6).curveTo(-9.3,2.2,-9.3,-1.5).curveTo(-9.3,-6.4,-6.3,-9.2).curveTo(-3.5,-11.9,0.8,-11.9).curveTo(3.7,-11.9,5.8,-10.7).curveTo(8.1,-9.5,9.3,-7.3).curveTo(6.8,-9,3.5,-9).curveTo(-0.9,-9,-3.7,-6.4).curveTo(-6.6,-3.5,-6.6,1.4).curveTo(-6.7,4,-5.7,6.9).curveTo(-4.9,9.7,-3.4,11.9).curveTo(-6,9.9,-7.6,6).closePath();
	this.shape_232.setTransform(1056.4,259.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,13.8).lineTo(-0.9,11.3).curveTo(-4.7,10.7,-7.4,6).curveTo(-10,1.5,-10,-3.5).curveTo(-10,-8.3,-7,-11.2).curveTo(-4.2,-13.9,0.1,-13.9).curveTo(4.5,-13.9,7.2,-11.2).curveTo(10,-8.4,10,-3.5).curveTo(10,1.3,7.5,5.8).curveTo(4.9,10.4,1.3,11.3).lineTo(2.2,13.8).closePath();
	this.shape_233.setTransform(1057.1,261.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#494A4E").beginStroke().moveTo(2.1,17.8).curveTo(-0,15.5,-1.4,11.9).curveTo(-4.2,4.5,-1.1,-2.7).curveTo(1.9,-9.6,1.8,-14.1).lineTo(1.1,-17.3).curveTo(0.9,-17.6,1.2,-17.8).curveTo(1.5,-18.1,1.7,-17.8).lineTo(2.5,-14.3).curveTo(2.7,-9.6,-0.4,-2.4).curveTo(-3.4,4.5,-0.7,11.6).curveTo(0.6,15.1,2.6,17.3).curveTo(2.8,17.6,2.6,17.8).lineTo(2.3,17.9).closePath();
	this.shape_234.setTransform(1055.7,291);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.2,-3.1).curveTo(-1.4,-4.5,0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,0,4.5).curveTo(-1.4,4.5,-2.2,3.2).closePath();
	this.shape_235.setTransform(1061.4,317.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.4,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.2,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.2,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.4,4.5,-2.3,3.2).closePath();
	this.shape_236.setTransform(1049.6,317.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.2,-3.1).curveTo(-1.4,-4.5,0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,0,4.5).curveTo(-1.4,4.5,-2.2,3.2).closePath();
	this.shape_237.setTransform(1037.9,317.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.2,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.2,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_238.setTransform(1026.1,317.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.4,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.2,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.2,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.4,4.5,-2.3,3.2).closePath();
	this.shape_239.setTransform(1014.4,317.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.2,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.2,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_240.setTransform(1002.6,317.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.4,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.2,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.2,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.4,4.5,-2.3,3.2).closePath();
	this.shape_241.setTransform(990.9,317.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.2,-3.1).curveTo(-1.3,-4.5,0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,0,4.5).curveTo(-1.3,4.5,-2.2,3.2).closePath();
	this.shape_242.setTransform(979.1,317.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_243.setTransform(1055.5,317.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_244.setTransform(1043.7,317.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_245.setTransform(1032,317.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_246.setTransform(1020.2,317.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.4,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.4,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_247.setTransform(1008.5,317.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.3,-3.1).curveTo(-1.3,-4.5,-0,-4.5).curveTo(1.3,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.3,3.2).closePath();
	this.shape_248.setTransform(996.7,317.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3.2,1.9,-3.2,0).curveTo(-3.2,-1.8,-2.2,-3.1).curveTo(-1.3,-4.5,0,-4.5).curveTo(1.4,-4.5,2.3,-3.1).curveTo(3.2,-1.8,3.2,0).curveTo(3.2,1.9,2.3,3.2).curveTo(1.4,4.5,0,4.5).curveTo(-1.3,4.5,-2.2,3.2).closePath();
	this.shape_249.setTransform(985,317.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#494A4E").beginStroke().moveTo(-44.3,3.4).lineTo(-44.3,-3.4).lineTo(44.3,-3.4).lineTo(44.3,3.4).closePath();
	this.shape_250.setTransform(1020.2,314.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#494A4E").beginStroke().moveTo(22.8,24.3).curveTo(18.1,18.6,13,10.4).curveTo(2.6,-6.2,-0.1,-19.3).curveTo(-2.5,-6,-13,10.5).curveTo(-16.2,15.6,-19.9,20.5).lineTo(-22.9,24.3).lineTo(-33.9,24.3).lineTo(-37.2,-24.3).lineTo(37.2,-24.3).lineTo(33.9,24.3).closePath();
	this.shape_251.setTransform(1020.5,340.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,2.9).curveTo(-3.6,1.7,-3.6,0).curveTo(-3.6,-1.7,-2.5,-2.9).curveTo(-1.5,-4.1,0,-4.1).curveTo(1.5,-4.1,2.5,-2.9).curveTo(3.6,-1.7,3.6,0).curveTo(3.6,1.7,2.5,2.9).curveTo(1.5,4.1,0,4.1).curveTo(-1.5,4.1,-2.5,2.9).closePath();
	this.shape_252.setTransform(1020.1,253.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,12.3).lineTo(-0.6,-12.3).lineTo(0.6,-12.3).lineTo(0.6,12.3).closePath();
	this.shape_253.setTransform(1020.4,243.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.5,4.3).curveTo(-6.7,3.1,-5.3,1.6).curveTo(-4.6,0.9,-4.5,0.4).curveTo(-5.7,-0.2,-7,-1.3).curveTo(-9.5,-3.6,-9.5,-6.4).curveTo(-6.8,-4.3,1.6,-5.1).curveTo(5.8,-5.5,9.5,-6.4).lineTo(9.5,4.3).curveTo(5.7,5.5,1.5,6.1).curveTo(-1,6.4,-2.9,6.4).curveTo(-7.7,6.4,-9.5,4.3).closePath();
	this.shape_254.setTransform(1010.3,237.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,30.1).curveTo(-10.2,18.9,-4.7,-6.5).curveTo(-3,-14.4,-1.8,-23).lineTo(-0.9,-30.2).lineTo(-0,-22.8).curveTo(1.1,-13.7,3,-5.4).curveTo(9,20.9,19,30.1).closePath();
	this.shape_255.setTransform(1020.8,280.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.6,29.5).curveTo(-16.7,18.2,-19.5,1.1).curveTo(-21.5,-11,-22.1,-29.5).curveTo(-20.9,-9.6,0.7,11.9).curveTo(11.5,22.7,22.1,29.5).closePath();
	this.shape_256.setTransform(1042.4,281.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#494A4E").beginStroke().moveTo(-22,29.6).lineTo(-15.9,25).curveTo(-8.5,19,-2.1,12.3).curveTo(18.5,-9.3,22,-29.7).curveTo(20.9,-11,18.7,1.3).curveTo(15.8,17.8,9.7,29.6).closePath();
	this.shape_257.setTransform(997.9,281.3);

	this.instance_5 = new lib.barredora0010();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1020.5,341.6,1,1,0,0,0,37.2,25.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#494A4E").beginStroke().moveTo(-33.9,24.3).lineTo(-37.2,-24.3).lineTo(37.2,-24.3).lineTo(33.9,24.3).closePath();
	this.shape_258.setTransform(1020.5,340.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#494A4E").beginStroke().moveTo(-39.5,3).lineTo(-39.5,-3).lineTo(39.5,-3).lineTo(39.5,3).closePath();
	this.shape_259.setTransform(964.8,319.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#494A4E").beginStroke().moveTo(20.2,21.6).curveTo(16.2,16.6,11.5,9.2).curveTo(2.3,-5.5,-0.1,-17.2).curveTo(-2.2,-5.3,-11.5,9.3).curveTo(-14.5,13.9,-17.7,18.2).lineTo(-20.4,21.6).lineTo(-30.3,21.6).lineTo(-33.1,-21.6).lineTo(33.2,-21.6).lineTo(30.2,21.6).closePath();
	this.shape_260.setTransform(965.1,343.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,2.6).curveTo(-3.2,1.5,-3.2,0).curveTo(-3.2,-1.5,-2.3,-2.6).curveTo(-1.3,-3.6,-0,-3.6).curveTo(1.3,-3.6,2.2,-2.6).curveTo(3.2,-1.5,3.2,0).curveTo(3.2,1.5,2.2,2.6).curveTo(1.3,3.6,-0,3.6).curveTo(-1.3,3.6,-2.3,2.6).closePath();
	this.shape_261.setTransform(964.8,265.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,11).lineTo(-0.6,-11).lineTo(0.5,-11).lineTo(0.5,11).closePath();
	this.shape_262.setTransform(965,256.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,5.4).lineTo(-8.5,3.8).lineTo(-8.5,-5.7).lineTo(-1.4,-4.6).curveTo(6.1,-3.9,8.5,-5.7).curveTo(8.5,-3.2,6.2,-1.2).lineTo(3.9,0.3).lineTo(4.7,1.4).curveTo(6,2.7,8.5,3.8).curveTo(6.9,5.7,2.5,5.7).curveTo(0.8,5.7,-1.3,5.4).closePath();
	this.shape_263.setTransform(973.9,251.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.9,26.8).curveTo(-9.1,16.8,-4.2,-5.8).curveTo(-2.7,-12.9,-1.6,-20.4).lineTo(-0.8,-26.8).lineTo(-0.1,-20.2).curveTo(1,-12.2,2.7,-4.9).curveTo(8,18.6,16.9,26.8).closePath();
	this.shape_264.setTransform(965.4,290);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.4,26.3).curveTo(-14.9,16.1,-17.4,0.9).curveTo(-19.1,-9.6,-19.7,-26.3).curveTo(-18.6,-8.6,0.6,10.6).curveTo(10.3,20.2,19.7,26.3).closePath();
	this.shape_265.setTransform(984.6,290.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.6,26.4).lineTo(-14.2,22.2).curveTo(-7.6,16.9,-1.8,10.9).curveTo(16.6,-8.2,19.6,-26.4).curveTo(18.7,-9.8,16.8,1.1).curveTo(14.1,15.9,8.7,26.4).closePath();
	this.shape_266.setTransform(945,290.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.3,21.6).lineTo(-33.1,-21.6).lineTo(33.2,-21.6).lineTo(30.2,21.6).closePath();
	this.shape_267.setTransform(965.1,343.4);

	this.instance_6 = new lib.barredora009();
	this.instance_6.parent = this;
	this.instance_6.setTransform(917.2,246.7,1,1,0,0,0,21.6,21.9);

	this.instance_7 = new lib.barredora005();
	this.instance_7.parent = this;
	this.instance_7.setTransform(916.7,242.6,1,1,0,0,0,18.8,20.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.5,2.3).curveTo(-8.5,0.4,-11.3,-2.8).curveTo(1.1,-5.4,11.3,-3.4).curveTo(8.4,0.1,5.4,2.2).curveTo(2.2,4.3,-0.2,4.3).curveTo(-2.4,4.3,-5.5,2.3).closePath();
	this.shape_268.setTransform(917,264.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.5,9.7).curveTo(-18.8,4.6,-18.8,-0.2).curveTo(-18.8,-9.2,-13.3,-14).curveTo(-8.3,-18.3,-0,-18.3).curveTo(8.3,-18.3,13.3,-14).curveTo(18.8,-9.2,18.8,-0.2).curveTo(18.8,4.4,16.7,9.4).curveTo(14.8,13.9,11.6,17.8).curveTo(1.4,15.8,-11,18.3).curveTo(-14.5,14.4,-16.5,9.7).closePath();
	this.shape_269.setTransform(916.7,243.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,8.6).lineTo(-0.9,-8.5).lineTo(0.3,-8.5).lineTo(0.9,8.6).closePath();
	this.shape_270.setTransform(912.6,273.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,8.6).lineTo(-0.3,-8.5).lineTo(0.9,-8.5).lineTo(0.3,8.6).closePath();
	this.shape_271.setTransform(920,273.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.4,5.6).curveTo(-5.8,5.6,-6.1,5.2).curveTo(-6.4,4.9,-6.4,4.6).lineTo(-6.9,-4.5).curveTo(-6.9,-5,-6.6,-5.2).curveTo(-6.4,-5.5,-6,-5.6).lineTo(6,-5.6).curveTo(6.4,-5.5,6.6,-5.2).curveTo(6.9,-5,6.9,-4.5).lineTo(6.4,4.6).curveTo(6.4,4.9,6.1,5.2).curveTo(5.8,5.6,5.4,5.6).closePath();
	this.shape_272.setTransform(916.4,276.7);

	this.instance_8 = new lib.barredora008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(812,262.8,1,1,0,0,0,12.3,15.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.9,9).curveTo(-12.3,3.3,-12.3,-2.5).curveTo(-12.3,-8.3,-8.7,-11.4).curveTo(-5.4,-14.3,-0,-14.3).curveTo(5.4,-14.3,8.7,-11.4).curveTo(12.3,-8.3,12.3,-2.5).curveTo(12.3,3.3,7.7,9).curveTo(3.4,14.3,-0.1,14.3).curveTo(-3.7,14.3,-7.9,9).closePath();
	this.shape_273.setTransform(812,262.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,5.5).lineTo(-0.2,-5.5).lineTo(0.6,-5.5).lineTo(0.2,5.5).closePath();
	this.shape_274.setTransform(814.6,280.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.2,5.5).lineTo(-0.6,-5.5).lineTo(0.2,-5.5).lineTo(0.6,5.5).closePath();
	this.shape_275.setTransform(809.8,280.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,3.5).curveTo(-4.2,3.5,-4.2,2.9).lineTo(-4.5,-2.9).curveTo(-4.5,-3.5,-3.9,-3.5).lineTo(3.9,-3.5).curveTo(4.5,-3.5,4.5,-2.9).lineTo(4.2,2.9).curveTo(4.2,3.5,3.5,3.5).closePath();
	this.shape_276.setTransform(812.2,282.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.7).lineTo(7.2,-7.3).lineTo(-0.5,7.6).closePath();
	this.shape_277.setTransform(831.9,302.2);

	this.instance_9 = new lib.barredora007();
	this.instance_9.parent = this;
	this.instance_9.setTransform(882.2,301.6,1,1,0,0,0,7.2,7.7);

	this.instance_10 = new lib.barredora004();
	this.instance_10.parent = this;
	this.instance_10.setTransform(831.9,302.3,1,1,0,0,0,7.2,7.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-6.7).lineTo(7.2,-7.8).lineTo(1.1,7.8).closePath();
	this.shape_278.setTransform(915.7,299.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.1).lineTo(7.2,-7.7).lineTo(0.5,7.7).closePath();
	this.shape_279.setTransform(882.2,301.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.5).lineTo(7.3,-7.6).lineTo(-0.2,7.6).closePath();
	this.shape_280.setTransform(848.8,302.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.7).lineTo(7.2,-7).lineTo(-0.9,7.8).closePath();
	this.shape_281.setTransform(815,301.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.9).lineTo(7.2,-6.3).lineTo(-1.8,7.9).closePath();
	this.shape_282.setTransform(782.6,298.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-6.4).lineTo(7.2,-7.9).lineTo(1.4,7.9).closePath();
	this.shape_283.setTransform(932.7,297.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-6.9).lineTo(7.2,-7.8).lineTo(0.8,7.8).closePath();
	this.shape_284.setTransform(899.2,300.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.3).lineTo(7.2,-7.7).lineTo(0.2,7.6).closePath();
	this.shape_285.setTransform(865.2,302.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-7.8).lineTo(7.2,-6.7).lineTo(-1.4,7.8).closePath();
	this.shape_286.setTransform(798.5,300.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.2,-8).lineTo(7.1,-5.8).lineTo(-2.5,8).closePath();
	this.shape_287.setTransform(766.1,296.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#494A4E").beginStroke().moveTo(-6,6.6).curveTo(-25.5,6.4,-44.6,5.1).curveTo(-67.2,3.5,-84.8,0.3).curveTo(-97.1,-1.9,-111.7,-5.9).lineTo(-111.5,-6.6).curveTo(-96.8,-2.6,-84.6,-0.4).curveTo(-67,2.7,-44.5,4.3).curveTo(-4,7.3,43.8,4.6).curveTo(74.6,2.9,111.6,-1.5).lineTo(111.7,-0.8).curveTo(75.1,3.6,43.9,5.4).curveTo(21.3,6.6,-0.1,6.6).lineTo(-6,6.6).closePath();
	this.shape_288.setTransform(846.7,289.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.5,1).lineTo(-12.5,-1).lineTo(12.5,-1).lineTo(12.5,1).closePath();
	this.shape_289.setTransform(834.5,347.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.3,8.2).lineTo(-12.5,-8.2).lineTo(12.5,-8.2).lineTo(9.2,8.2).closePath();
	this.shape_290.setTransform(834.5,356.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,-5.9).lineTo(3.7,-5.9).lineTo(-0,5.9).closePath();
	this.shape_291.setTransform(948.9,351.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,-5.9).lineTo(3.8,-5.9).lineTo(-0,5.9).closePath();
	this.shape_292.setTransform(941.4,351.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,-5.9).lineTo(3.7,-5.9).lineTo(0,5.9).closePath();
	this.shape_293.setTransform(933.9,351.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.3,9.6).lineTo(-11.2,-9.6).lineTo(11.2,-9.6).lineTo(8.3,9.6).closePath();
	this.shape_294.setTransform(941.4,355.4);

	this.instance_11 = new lib.barredora006();
	this.instance_11.parent = this;
	this.instance_11.setTransform(530.3,354.4,1,1,0,0,0,21.4,11.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,3.2).curveTo(-3.4,1.8,-3.5,-0).curveTo(-3.4,-1.5,-1.5,-3.1).lineTo(0,-4.4).curveTo(1.4,-4.4,2.5,-3.1).curveTo(3.5,-1.8,3.5,-0).curveTo(3.5,1.8,2.5,3.2).curveTo(1.4,4.4,0,4.4).curveTo(-1.4,4.4,-2.5,3.2).closePath();
	this.shape_295.setTransform(514.5,328.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,3.2).curveTo(-3.4,1.8,-3.4,-0).curveTo(-3.4,-1.8,-2.4,-3.1).curveTo(-1.4,-4.4,-0,-4.4).curveTo(1.4,-4.4,2.4,-3.1).curveTo(3.4,-1.8,3.4,-0).curveTo(3.4,1.8,2.4,3.2).curveTo(1.4,4.4,-0,4.4).curveTo(-1.4,4.4,-2.4,3.2).closePath();
	this.shape_296.setTransform(527.1,328.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,3.2).curveTo(-3.4,1.8,-3.4,-0).curveTo(-3.4,-1.8,-2.4,-3.1).curveTo(-1.4,-4.4,0,-4.4).curveTo(1.4,-4.4,2.4,-3.1).curveTo(3.4,-1.8,3.4,-0).curveTo(3.4,1.8,2.4,3.2).curveTo(1.4,4.4,0,4.4).curveTo(-1.4,4.4,-2.4,3.2).closePath();
	this.shape_297.setTransform(539.7,328.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,2.4).lineTo(-2.5,-2.4).lineTo(3.5,-2.4).lineTo(3.5,2.4).closePath();
	this.shape_298.setTransform(514.5,326.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,2.4).lineTo(-3.4,-2.4).lineTo(3.4,-2.4).lineTo(3.4,2.4).closePath();
	this.shape_299.setTransform(527.1,326.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,2.4).lineTo(-3.4,-2.4).lineTo(3.4,-2.4).lineTo(3.4,2.4).closePath();
	this.shape_300.setTransform(539.7,326.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,3.2).curveTo(-3.4,1.8,-3.5,-0).curveTo(-3.4,-1.8,-2.5,-3.1).curveTo(-1.4,-4.4,0,-4.4).curveTo(1.4,-4.4,2.5,-3.1).curveTo(3.5,-1.8,3.5,-0).curveTo(3.5,1.8,2.5,3.2).curveTo(1.4,4.4,0,4.4).curveTo(-1.4,4.4,-2.5,3.2).closePath();
	this.shape_301.setTransform(520.8,328.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,3.2).curveTo(-3.4,1.8,-3.4,-0).curveTo(-3.4,-1.8,-2.4,-3.1).curveTo(-1.4,-4.4,-0,-4.4).curveTo(1.4,-4.4,2.4,-3.1).curveTo(3.4,-1.8,3.4,-0).curveTo(3.4,1.8,2.4,3.2).curveTo(1.4,4.4,-0,4.4).curveTo(-1.4,4.4,-2.4,3.2).closePath();
	this.shape_302.setTransform(533.4,328.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,3.2).curveTo(-3.4,1.8,-3.4,-0).curveTo(-3.4,-1.8,-2.4,-3.1).curveTo(-1.4,-4.4,0,-4.4).curveTo(-0.2,-4.4,1.5,-3.1).curveTo(3.4,-1.5,3.4,-0).curveTo(3.4,1.8,2.4,3.2).curveTo(1.4,4.4,0,4.4).curveTo(-1.4,4.4,-2.4,3.2).closePath();
	this.shape_303.setTransform(546,328.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,2.4).lineTo(-3.1,-2.4).lineTo(3.2,-2.4).lineTo(3.2,2.4).closePath();
	this.shape_304.setTransform(520.8,326.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.2,2.4).lineTo(-3.2,-2.4).lineTo(3.1,-2.4).lineTo(3.1,2.4).closePath();
	this.shape_305.setTransform(533.5,326.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.3,2.4).lineTo(-3.3,-2.4).lineTo(2.4,-2.4).lineTo(3.4,2.4).closePath();
	this.shape_306.setTransform(546.1,326.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,12.5).lineTo(-0.6,-11).lineTo(0.6,-12.5).lineTo(0.6,12.5).closePath();
	this.shape_307.setTransform(511.7,339.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,12.5).lineTo(-0.6,-12.5).lineTo(0.6,-10).lineTo(0.6,12.5).closePath();
	this.shape_308.setTransform(548.9,339);

	this.instance_12 = new lib.barredora002();
	this.instance_12.parent = this;
	this.instance_12.setTransform(483.2,314.5,1,1,0,0,0,26.8,33.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.8,19.5).curveTo(-26.8,7.2,-26.8,-5.4).curveTo(-26.8,-18.1,-18.9,-24.9).curveTo(-11.8,-31.1,0,-31.1).curveTo(11.8,-31.1,18.9,-24.9).curveTo(26.8,-18.1,26.8,-5.4).curveTo(26.8,7.2,17,19.5).curveTo(7.9,31.1,0.2,31.1).curveTo(-7.5,31.1,-16.8,19.5).closePath();
	this.shape_309.setTransform(483.1,314.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,12).lineTo(-1.3,-12).lineTo(0.5,-12).lineTo(1.3,12).closePath();
	this.shape_310.setTransform(477.4,353);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,12).lineTo(-0.5,-12).lineTo(1.2,-12).lineTo(0.5,12).closePath();
	this.shape_311.setTransform(487.9,353);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.7,7.7).curveTo(-8.3,7.7,-8.7,7.2).curveTo(-9,6.9,-9,6.2).lineTo(-9.8,-6.3).curveTo(-9.8,-6.9,-9.5,-7.3).curveTo(-9,-7.6,-8.5,-7.6).lineTo(8.4,-7.6).curveTo(9.1,-7.6,9.4,-7.3).curveTo(9.9,-6.9,9.9,-6.3).lineTo(9.1,6.2).curveTo(9.1,6.9,8.6,7.2).curveTo(8.2,7.7,7.7,7.7).closePath();
	this.shape_312.setTransform(482.7,357.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.9,3).curveTo(-5.6,0.8,-5.4,-1.3).curveTo(-5.1,-4.1,-3.2,-5.5).curveTo(-1.5,-6.8,1,-6.6).curveTo(4.3,-6.2,5.5,-3.5).curveTo(4.2,-4.6,2.3,-4.8).curveTo(-0.2,-5,-1.9,-3.7).curveTo(-3.8,-2.3,-4.1,0.5).curveTo(-4.4,3.7,-2.8,6.6).curveTo(-4.2,5.3,-4.9,3).closePath();
	this.shape_313.setTransform(434.9,340.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,7.7).lineTo(-1.5,6.3).curveTo(-3.5,5.7,-4.8,2.9).curveTo(-5.9,0.2,-5.7,-2.6).curveTo(-5.4,-5.4,-3.5,-6.8).curveTo(-1.8,-8.1,0.7,-7.9).curveTo(3.1,-7.6,4.5,-5.9).curveTo(5.9,-4.2,5.6,-1.4).curveTo(5.4,1.3,3.7,3.7).curveTo(1.9,6.1,-0.1,6.4).lineTo(0.2,7.9).closePath();
	this.shape_314.setTransform(435.2,341.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,9.9).lineTo(1.1,-10).curveTo(1.1,-10,1.2,-10.1).curveTo(1.2,-10.1,1.2,-10.2).curveTo(1.3,-10.2,1.3,-10.2).curveTo(1.4,-10.2,1.4,-10.2).curveTo(1.5,-10.2,1.6,-10.2).curveTo(1.6,-10.1,1.6,-10.1).curveTo(1.6,-10.1,1.7,-10).curveTo(1.7,-10,1.6,-9.9).lineTo(-1.2,10).curveTo(-1.2,10.1,-1.2,10.1).curveTo(-1.2,10.2,-1.2,10.2).curveTo(-1.2,10.2,-1.3,10.2).curveTo(-1.3,10.2,-1.4,10.2).curveTo(-1.5,10.2,-1.5,10.2).curveTo(-1.6,10.2,-1.6,10.2).curveTo(-1.6,10.1,-1.6,10.1).curveTo(-1.7,10,-1.7,9.9).closePath();
	this.shape_315.setTransform(433.8,353.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,4.6).curveTo(-5.8,2.2,-6.1,-0.4).curveTo(-6.4,-3.7,-4.6,-5.9).curveTo(-2.9,-7.9,0.1,-8.2).curveTo(4,-8.7,6.2,-5.8).curveTo(4.4,-6.7,2.1,-6.5).curveTo(-0.9,-6.2,-2.6,-4.1).curveTo(-4.4,-1.9,-4.1,1.4).curveTo(-3.6,5.3,-1.1,8.3).curveTo(-3,7.1,-4.4,4.6).closePath();
	this.shape_316.setTransform(422.6,328.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#494A4E").beginStroke().moveTo(0.4,7.8).curveTo(-2.1,7.6,-4.3,4.6).curveTo(-6.4,1.7,-6.8,-1.7).curveTo(-7.2,-5,-5.3,-7.1).curveTo(-3.6,-9.2,-0.7,-9.5).curveTo(2.3,-9.8,4.3,-8.2).curveTo(6.4,-6.5,6.8,-3.2).curveTo(7.2,0.1,5.8,3.3).curveTo(4.4,6.7,2,7.5).lineTo(2.8,9.2).lineTo(0,9.5).closePath();
	this.shape_317.setTransform(423.3,329.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,3.6).curveTo(-5.3,1.4,-5.3,-0.8).curveTo(-5.4,-3.6,-3.7,-5.3).curveTo(-2.1,-6.9,0.4,-6.9).curveTo(3.9,-6.9,5.4,-4.3).curveTo(4,-5.2,2,-5.2).curveTo(-0.5,-5.2,-2.1,-3.7).curveTo(-3.8,-1.9,-3.8,0.8).curveTo(-3.8,4,-1.8,6.9).curveTo(-3.3,5.8,-4.3,3.6).closePath();
	this.shape_318.setTransform(433.1,318.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,6.6).curveTo(-2.6,6.3,-4.2,3.6).curveTo(-5.7,1,-5.8,-1.9).curveTo(-5.8,-4.7,-4.1,-6.4).curveTo(-2.5,-8,-0,-8).curveTo(2.5,-8.1,4.1,-6.6).curveTo(5.7,-5,5.8,-2.1).curveTo(5.9,0.7,4.4,3.3).curveTo(3,6,0.9,6.5).lineTo(1.5,8).lineTo(-0.9,8.1).closePath();
	this.shape_319.setTransform(433.6,319.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.5,2.7).curveTo(-6,0.4,-5.5,-1.8).curveTo(-4.8,-4.5,-2.7,-5.7).curveTo(-0.8,-6.9,1.6,-6.3).curveTo(4.9,-5.5,5.8,-2.6).curveTo(4.6,-3.9,2.7,-4.3).curveTo(0.3,-4.9,-1.6,-3.8).curveTo(-3.7,-2.6,-4.4,0.2).curveTo(-5.1,3.5,-3.9,6.5).curveTo(-5.1,5.1,-5.5,2.7).closePath();
	this.shape_320.setTransform(444.6,326.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,7.5).lineTo(-2.5,6.2).curveTo(-4.5,5.4,-5.4,2.4).curveTo(-6.3,-0.6,-5.6,-3.3).curveTo(-5,-6.1,-2.9,-7.3).curveTo(-1,-8.4,1.5,-7.8).curveTo(3.9,-7.2,5.1,-5.4).curveTo(6.3,-3.4,5.7,-0.7).curveTo(5,2,3,4.2).curveTo(0.9,6.5,-1.2,6.5).lineTo(-1,8.1).closePath();
	this.shape_321.setTransform(444.8,328.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,22.1).lineTo(-0.8,22).lineTo(-0.9,22).lineTo(-1,21.9).lineTo(-1,21.9).lineTo(-9.8,-8.7).curveTo(-9.8,-8.7,-9.8,-8.8).curveTo(-9.8,-8.8,-9.8,-8.9).curveTo(-9.8,-8.9,-9.7,-8.9).curveTo(-9.7,-9,-9.6,-9).curveTo(-9.5,-9,-9.5,-9).curveTo(-9.4,-9,-9.4,-9).curveTo(-9.3,-8.9,-9.3,-8.9).curveTo(-9.3,-8.8,-9.3,-8.8).lineTo(-1.1,19.7).lineTo(0.2,-21.8).curveTo(0.2,-21.9,0.2,-21.9).curveTo(0.2,-22,0.2,-22).curveTo(0.3,-22.1,0.3,-22.1).curveTo(0.4,-22.1,0.4,-22.1).curveTo(0.5,-22.1,0.6,-22.1).curveTo(0.6,-22.1,0.7,-22).curveTo(0.7,-22,0.7,-21.9).curveTo(0.7,-21.9,0.7,-21.8).lineTo(-0.5,20.2).lineTo(9.3,-8.2).curveTo(9.3,-8.3,9.3,-8.3).curveTo(9.4,-8.3,9.4,-8.4).curveTo(9.5,-8.4,9.5,-8.4).curveTo(9.6,-8.4,9.6,-8.3).curveTo(9.7,-8.3,9.7,-8.3).curveTo(9.8,-8.3,9.8,-8.2).curveTo(9.8,-8.2,9.8,-8.1).curveTo(9.8,-8.1,9.8,-8).lineTo(-0.5,21.9).lineTo(-0.5,22).lineTo(-0.6,22).lineTo(-0.6,22).lineTo(-0.7,22.1).closePath();
	this.shape_322.setTransform(433.1,342.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#494A4E").beginStroke().moveTo(5.1,6).curveTo(5.9,3.5,5.9,1.2).curveTo(5.9,-3.1,3.2,-5.6).curveTo(0.8,-8,-3.1,-7.9).curveTo(-6,-8,-8.2,-6.5).curveTo(-7.1,-8.4,-5.1,-9.5).curveTo(-3.2,-10.5,-0.8,-10.5).curveTo(3.1,-10.5,5.6,-8.1).curveTo(8.2,-5.7,8.2,-1.4).curveTo(8.2,2,6.8,5.4).curveTo(5.3,8.7,3,10.5).curveTo(4.3,8.5,5.1,6).closePath();
	this.shape_323.setTransform(348.7,227.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,12.3).lineTo(-1.2,9.9).curveTo(-4.3,9.3,-6.6,5.1).curveTo(-8.8,1.2,-8.8,-3.1).curveTo(-8.8,-7.4,-6.3,-9.9).curveTo(-4,-12.3,-0.2,-12.3).curveTo(3.7,-12.3,6.2,-9.9).curveTo(8.8,-7.4,8.8,-3.1).curveTo(8.8,1.3,6.5,5.3).curveTo(4.1,9.5,0.8,10).lineTo(1.6,12.3).closePath();
	this.shape_324.setTransform(348.1,229);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,15.7).curveTo(-2.3,15.7,-2.4,15.6).curveTo(-2.4,15.6,-2.4,15.5).curveTo(-2.4,15.5,-2.4,15.4).curveTo(-2.4,15.4,-2.3,15.3).curveTo(-0.5,13.3,0.6,10.2).curveTo(3,4,0.4,-2.1).curveTo(-2.4,-8.5,-2.2,-12.6).lineTo(-1.5,-15.7).curveTo(-1.5,-15.7,-1.4,-15.8).curveTo(-1.4,-15.8,-1.3,-15.8).curveTo(-1.2,-15.8,-1.2,-15.8).curveTo(-1.1,-15.8,-1.1,-15.8).curveTo(-1,-15.7,-0.9,-15.6).curveTo(-0.9,-15.6,-0.9,-15.5).curveTo(-0.9,-15.4,-0.9,-15.4).curveTo(-1,-15.3,-1,-15.3).lineTo(-1.6,-12.5).curveTo(-1.6,-8.4,1,-2.4).curveTo(3.7,4,1.2,10.4).curveTo(0,13.7,-1.8,15.7).lineTo(-2.1,15.8).closePath();
	this.shape_325.setTransform(349.3,255);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#494A4E").beginStroke().moveTo(5.1,6.1).curveTo(5.9,3.6,5.9,1.2).curveTo(5.9,-3.1,3.3,-5.6).curveTo(0.8,-7.9,-3.1,-7.9).curveTo(-6,-7.9,-8.2,-6.4).curveTo(-7.1,-8.4,-5.1,-9.4).curveTo(-3.2,-10.5,-0.8,-10.5).curveTo(3.1,-10.5,5.6,-8.1).curveTo(8.2,-5.6,8.2,-1.3).curveTo(8.2,2,6.8,5.3).curveTo(5.3,8.7,3,10.5).curveTo(4.4,8.5,5.1,6.1).closePath();
	this.shape_326.setTransform(677.6,247.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,12.2).lineTo(-1.2,10).curveTo(-4.3,9.2,-6.6,5.1).curveTo(-8.8,1.2,-8.8,-3.1).curveTo(-8.8,-7.4,-6.3,-9.9).curveTo(-4,-12.2,-0.2,-12.2).curveTo(3.7,-12.2,6.2,-9.9).curveTo(8.8,-7.4,8.8,-3.1).curveTo(8.8,1.3,6.5,5.3).curveTo(4.1,9.5,0.9,10).lineTo(1.7,12.2).closePath();
	this.shape_327.setTransform(677,248.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,15.8).curveTo(-2.4,15.7,-2.4,15.6).curveTo(-2.4,15.6,-2.4,15.5).curveTo(-2.4,15.4,-2.4,15.4).curveTo(-2.4,15.3,-2.3,15.3).curveTo(-0.6,13.4,0.6,10.2).curveTo(3,4,0.4,-2.1).curveTo(-2.4,-8.4,-2.3,-12.6).lineTo(-1.6,-15.7).curveTo(-1.5,-15.7,-1.5,-15.8).curveTo(-1.4,-15.8,-1.3,-15.8).curveTo(-1.3,-15.8,-1.2,-15.8).curveTo(-1.2,-15.8,-1.1,-15.7).curveTo(-1,-15.7,-1,-15.6).curveTo(-0.9,-15.6,-0.9,-15.5).curveTo(-0.9,-15.5,-0.9,-15.4).curveTo(-1,-15.4,-1,-15.3).lineTo(-1.6,-12.4).curveTo(-1.7,-8.4,1,-2.3).curveTo(3.7,4,1.2,10.5).curveTo(-0,13.7,-1.9,15.7).lineTo(-2.1,15.8).closePath();
	this.shape_328.setTransform(678.3,275);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#494A4E").beginStroke().moveTo(2,3.9).lineTo(1.7,3.7).lineTo(3,1.3).curveTo(-0.8,1.4,-3.8,-0.4).lineTo(-6.2,-2).lineTo(-6.2,-2.8).curveTo(-1.3,0.9,3.3,0.7).lineTo(5.6,-4).lineTo(5.8,-4).lineTo(6.2,-3.8).lineTo(2.7,3.9).lineTo(2.3,4).lineTo(2,3.9).closePath();
	this.shape_329.setTransform(587.2,311.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,2.1).curveTo(-3.1,1.1,-3.1,-1).lineTo(-3,-3).curveTo(-0.5,-2.7,2.4,-3).curveTo(3.3,-2.1,3,1.1).curveTo(2.9,2.4,0.7,2.8).lineTo(-0.4,3).curveTo(-1.8,3,-2.4,2.1).closePath();
	this.shape_330.setTransform(572.4,320.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.3,2.9).curveTo(-3.8,1.7,-3.9,-0.5).curveTo(-4,-2.5,-3.6,-3.8).lineTo(-1.1,-3.7).curveTo(1.6,-3.6,2.7,-4).lineTo(3.4,-2.4).curveTo(4.1,-0.4,3.8,1.5).curveTo(3.4,3.6,0.4,4).lineTo(-0.6,4).curveTo(-2.7,4,-3.3,2.9).closePath();
	this.shape_331.setTransform(572.4,320.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,1.8).curveTo(-0.5,1.6,-0.7,1).curveTo(-0.9,0.6,-0.8,-0.6).lineTo(-0.6,-1.8).lineTo(0.2,-1).curveTo(1,-0,0.8,1).curveTo(0.6,1.8,0.2,1.8).lineTo(-0,1.8).closePath();
	this.shape_332.setTransform(581.4,304.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,2.9).curveTo(-1.1,2.5,-1.4,1.4).curveTo(-1.8,0.2,-1.4,-1.5).lineTo(-1,-3).lineTo(0.7,-1.4).curveTo(1.7,-0.4,1.6,1.2).curveTo(1.6,1.9,1.3,2.5).curveTo(0.8,3,0.3,3).lineTo(-0.3,2.9).closePath();
	this.shape_333.setTransform(581.3,304.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.7).curveTo(-1,0.4,-1,0).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,-0,-1).curveTo(0.4,-1,0.7,-0.7).curveTo(1,-0.4,1,0).curveTo(1,0.4,0.7,0.7).curveTo(0.4,1,-0,1).curveTo(-0.4,1,-0.7,0.7).closePath();
	this.shape_334.setTransform(587.5,308.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,-0.1).curveTo(-0.4,-0.7,0.1,-0.9).curveTo(0.6,-0.7,0.4,0.1).curveTo(0.3,0.8,-0.1,0.9).curveTo(-0.6,0.8,-0.5,-0.1).closePath();
	this.shape_335.setTransform(595.3,311);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,0.2).curveTo(-6.5,-2.7,-5.2,-4.8).curveTo(-3.3,-7.7,2,-5.9).curveTo(3.7,-5.3,4.5,-6.9).curveTo(4.9,-6.4,4.6,-5.6).curveTo(4.3,-4.8,3.8,-4.8).curveTo(5.3,-4.7,5.9,-5.5).curveTo(6.3,-6.1,6.2,-6.9).curveTo(7.6,-5.8,6.6,-4.1).curveTo(5.6,-2.4,3.8,-2).curveTo(2.4,-1.7,0.6,-2.2).lineTo(-0.9,-2.7).curveTo(-2.6,-3,-2.9,-1.6).curveTo(-3.1,-0.7,-3.1,1.9).curveTo(-3.3,3.3,-3.9,4.3).curveTo(-4.6,5.5,-6.5,6.9).curveTo(-7.3,3.5,-6.9,0.2).closePath();
	this.shape_336.setTransform(584.2,308.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,1.2).lineTo(-1.3,0.8).lineTo(-1.1,-0.2).curveTo(-0.9,-1.2,-0.6,-1.5).curveTo(0.3,-0.8,1.1,-1).curveTo(1.5,-0.2,1,1.3).lineTo(0.4,1.5).curveTo(-0,1.5,-0.6,1.2).closePath();
	this.shape_337.setTransform(560.4,336.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).curveTo(-1.4,0.1,-1.2,-1).lineTo(-0.5,-1).curveTo(0.2,-1,0.6,-1.3).lineTo(0.9,-0.7).curveTo(1.2,0.1,1.3,0.7).curveTo(1.1,1,0.3,1.2).lineTo(-0.4,1.3).curveTo(-0.8,1.3,-1.2,1.1).closePath();
	this.shape_338.setTransform(584.5,336.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,5.8).lineTo(-1.8,5.8).lineTo(-1.8,5.7).lineTo(-2,5.7).lineTo(-2,5.7).lineTo(-2.1,5.7).lineTo(-2.7,5.2).curveTo(-2.2,5.3,-1.7,5).curveTo(-1.1,4.6,-1.1,4.2).curveTo(-1.8,5,-2.7,5).curveTo(-3.5,4.9,-3.5,4.3).curveTo(-3.5,3.8,-3.2,3.8).lineTo(-2.9,3.8).curveTo(-2.9,3.8,-3,3.8).curveTo(-3,3.8,-3,3.8).curveTo(-3,3.8,-3,3.9).curveTo(-3,3.9,-3,4).lineTo(-3,4.1).curveTo(-1.3,4.7,-2.7,-0.3).curveTo(-3.5,-2.9,-2.7,-4.3).curveTo(-1.9,-5.8,0.4,-5.8).lineTo(0.9,-5.8).lineTo(0.9,-5.7).lineTo(1.1,-5.7).lineTo(1.6,-5.7).curveTo(2.8,-5.3,3.3,-4.2).curveTo(3.5,-3.7,3.5,-3.2).curveTo(3.2,-2,2.2,-2.1).curveTo(1.9,-2,1.6,-0.2).lineTo(1.4,1.5).lineTo(1.3,2.3).curveTo(1.1,3.3,0.6,4.4).lineTo(0.4,4.8).lineTo(0.3,5).lineTo(0.2,5).lineTo(0.1,5.2).lineTo(-0.1,5.4).lineTo(-0.2,5.4).lineTo(-0.3,5.6).lineTo(-0.4,5.6).lineTo(-0.6,5.7).lineTo(-0.6,5.7).lineTo(-0.8,5.8).lineTo(-0.9,5.8).lineTo(-1.1,5.8).closePath();
	this.shape_339.setTransform(557.8,322);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#494A4E").beginStroke().moveTo(5.3,15.6).curveTo(5.3,14.4,3.2,10.1).lineTo(1.2,6).curveTo(-0.8,6.6,-3.5,7.1).curveTo(-8.8,8,-12,6.8).curveTo(-12.5,8.9,-16.7,15).curveTo(-17.1,15.4,-18.1,15.1).curveTo(-18.4,14.3,-17.6,10.4).curveTo(-16.7,6.5,-17.7,4.6).curveTo(-19.1,1.9,-18.7,-0.7).curveTo(-18.2,-3.4,-15.9,-3.8).lineTo(-6.5,-3.7).curveTo(-0.9,-3.6,0.7,-6.7).curveTo(2.3,-9.5,2,-12.1).curveTo(1.9,-13.5,3,-14.8).curveTo(4.3,-16.1,5.7,-15.9).curveTo(7.1,-15.7,9.2,-14.9).curveTo(11.3,-14.2,12.4,-13.6).curveTo(13.9,-12.7,15.8,-12.5).curveTo(19.4,-11.3,18.6,-8).curveTo(18,-5.7,16.7,-4.7).curveTo(15.9,-4.1,11.8,-4.9).lineTo(8.8,-5.4).lineTo(7.7,-5.4).lineTo(6.8,-0.2).curveTo(6,6.8,7.1,15.8).curveTo(6.8,15.9,6.5,15.9).curveTo(6,15.9,5.3,15.6).closePath();
	this.shape_340.setTransform(578.1,320.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).lineTo(-1.5,0.1).lineTo(-0.9,-0.6).curveTo(-0.3,-1.4,0,-1.6).curveTo(0.6,-0.7,1.5,-0.5).lineTo(1.2,0.3).curveTo(1.1,0.8,0.5,1.5).lineTo(0.4,1.6).curveTo(-0.3,1.6,-0.9,0.8).closePath();
	this.shape_341.setTransform(557.6,334.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.1,0.9).curveTo(-1.2,-0.1,-0.9,-1).lineTo(-0.3,-0.9).curveTo(0.5,-1,0.8,-1.2).lineTo(1,-0.5).curveTo(1.2,0.3,1.1,0.8).curveTo(1,1.1,0.2,1.2).lineTo(-0.1,1.2).curveTo(-0.8,1.2,-1.1,0.9).closePath();
	this.shape_342.setTransform(582.1,335.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,4.6).curveTo(-3.6,3.9,-1.9,0.4).curveTo(-0.2,-3.1,-0.6,-4.9).curveTo(-0,-4.4,1.6,-3.6).curveTo(2.7,-3,3.4,-2).curveTo(2.7,-0.1,-2,4.8).lineTo(-2.4,4.9).curveTo(-2.8,4.9,-3.4,4.6).closePath();
	this.shape_343.setTransform(561,329.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#494A4E").beginStroke().moveTo(1.5,4.1).curveTo(1.5,3.5,-0.9,0.3).curveTo(-3.2,-3,-3.3,-3.7).curveTo(-0.6,-4.2,0.5,-4.3).curveTo(0.3,-3.4,2,-0.2).curveTo(3.6,3,3.2,4.1).curveTo(2.9,4.3,2.5,4.3).curveTo(2,4.3,1.5,4.1).closePath();
	this.shape_344.setTransform(579.6,330.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,6.6).curveTo(-4.1,5,-5.5,-3.7).lineTo(-4.8,-3.8).lineTo(-3.8,0.3).curveTo(-2.3,4.7,0.1,5.8).lineTo(1.8,6).curveTo(3.7,5.6,4.2,3.3).curveTo(4.7,0.7,4.8,-2.3).curveTo(4.9,-5,4.6,-6.8).lineTo(5.4,-6.7).lineTo(5.5,-3.1).curveTo(5.5,1,4.7,3.8).curveTo(4.2,5.6,2.9,6.4).curveTo(2.1,6.8,1.3,6.8).curveTo(0.6,6.8,-0,6.6).closePath();
	this.shape_345.setTransform(582.7,316.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#494A4E").beginStroke().moveTo(2,3.9).lineTo(1.7,3.7).lineTo(3,1.3).curveTo(-0.7,1.4,-3.9,-0.4).lineTo(-6.2,-2).lineTo(-6.2,-2.8).curveTo(-1.3,0.9,3.3,0.7).lineTo(5.6,-4).lineTo(5.8,-4).lineTo(6.2,-3.8).lineTo(4.1,1.2).lineTo(2.7,3.9).lineTo(2.3,4).lineTo(2,3.9).closePath();
	this.shape_346.setTransform(656.7,311.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,2.1).curveTo(-3,1.1,-3.1,-1).lineTo(-3,-3).curveTo(-0.5,-2.7,2.4,-3).curveTo(3.3,-2.1,3,1.1).curveTo(2.9,2.4,0.7,2.8).lineTo(-0.4,3).curveTo(-1.8,3,-2.4,2.1).closePath();
	this.shape_347.setTransform(641.8,320.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.3,2.9).curveTo(-3.8,1.7,-3.9,-0.5).curveTo(-3.9,-2.6,-3.6,-3.8).lineTo(-1.1,-3.7).curveTo(1.6,-3.6,2.7,-4).lineTo(3.4,-2.4).curveTo(4.1,-0.4,3.8,1.5).curveTo(3.4,3.6,0.4,4).lineTo(-0.6,4).curveTo(-2.7,4,-3.3,2.9).closePath();
	this.shape_348.setTransform(641.8,320.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#494A4E").beginStroke().moveTo(0,1.8).curveTo(-0.5,1.6,-0.8,1).curveTo(-0.9,0.6,-0.8,-0.6).lineTo(-0.6,-1.8).lineTo(0.2,-1).curveTo(1,-0,0.8,1).curveTo(0.7,1.8,0.2,1.8).lineTo(0,1.8).closePath();
	this.shape_349.setTransform(650.9,304.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,2.9).curveTo(-1.1,2.5,-1.4,1.4).curveTo(-1.8,0.2,-1.4,-1.5).lineTo(-1,-3).lineTo(0.7,-1.4).curveTo(1.8,-0.4,1.6,1.2).curveTo(1.6,1.9,1.3,2.5).curveTo(0.8,3,0.3,3).lineTo(-0.3,2.9).closePath();
	this.shape_350.setTransform(650.8,304.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.7).curveTo(-1,0.4,-1,0).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,0,-1).curveTo(0.4,-1,0.7,-0.7).curveTo(1,-0.4,1,0).curveTo(1,0.4,0.7,0.7).curveTo(0.4,1,0,1).curveTo(-0.4,1,-0.7,0.7).closePath();
	this.shape_351.setTransform(656.9,308.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,-0.1).curveTo(-0.4,-0.7,0.1,-0.9).curveTo(0.6,-0.7,0.4,0.1).curveTo(0.4,0.7,-0.1,0.9).curveTo(-0.6,0.8,-0.5,-0.1).closePath();
	this.shape_352.setTransform(664.7,311);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,0.2).curveTo(-6.5,-2.7,-5.1,-4.8).curveTo(-3.3,-7.7,2,-5.9).curveTo(3.7,-5.4,4.5,-6.9).curveTo(4.9,-6.4,4.6,-5.6).curveTo(4.3,-4.8,3.8,-4.8).curveTo(5.3,-4.7,5.9,-5.5).curveTo(6.3,-6.1,6.2,-6.9).curveTo(7.6,-5.8,6.6,-4.1).curveTo(5.6,-2.4,3.8,-2).curveTo(2.5,-1.7,0.6,-2.2).lineTo(-0.9,-2.7).curveTo(-2.6,-3,-2.9,-1.6).curveTo(-3.1,-0.7,-3.1,1.9).curveTo(-3.3,3.3,-3.9,4.3).curveTo(-4.6,5.5,-6.5,6.9).curveTo(-7.4,3.5,-6.9,0.2).closePath();
	this.shape_353.setTransform(653.6,308.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,1.2).lineTo(-1.3,0.8).lineTo(-1.1,-0.2).curveTo(-0.9,-1.2,-0.6,-1.5).curveTo(0.3,-0.8,1.1,-1).curveTo(1.6,-0.2,1,1.3).lineTo(0.4,1.5).curveTo(-0.1,1.5,-0.6,1.2).closePath();
	this.shape_354.setTransform(629.9,336.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).curveTo(-1.4,0.1,-1.2,-1).lineTo(-0.5,-1).curveTo(0.2,-1,0.6,-1.3).lineTo(0.9,-0.7).curveTo(1.3,0.1,1.3,0.7).curveTo(1.1,1,0.3,1.2).lineTo(-0.4,1.3).curveTo(-0.8,1.3,-1.2,1.1).closePath();
	this.shape_355.setTransform(654,336.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,5.8).lineTo(-1.8,5.8).lineTo(-1.8,5.7).lineTo(-2,5.7).lineTo(-2,5.7).lineTo(-2.1,5.7).lineTo(-2.7,5.2).curveTo(-2.2,5.3,-1.7,5).curveTo(-1.1,4.6,-1.1,4.2).curveTo(-1.8,5,-2.7,5).curveTo(-3.5,4.9,-3.5,4.3).curveTo(-3.5,3.8,-3.2,3.8).lineTo(-2.9,3.8).curveTo(-2.9,3.8,-3,3.8).curveTo(-3,3.8,-3,3.8).curveTo(-3,3.8,-3,3.9).curveTo(-3,3.9,-3,4).lineTo(-3,4.1).curveTo(-1.3,4.6,-2.7,-0.3).curveTo(-3.5,-2.9,-2.7,-4.3).curveTo(-1.9,-5.8,0.4,-5.8).lineTo(0.9,-5.8).lineTo(0.9,-5.7).lineTo(1.2,-5.7).lineTo(1.6,-5.7).curveTo(2.8,-5.3,3.3,-4.2).curveTo(3.5,-3.7,3.5,-3.2).curveTo(3.2,-2,2.2,-2.1).curveTo(1.9,-2,1.6,-0.2).lineTo(1.4,1.5).lineTo(1.3,2.3).curveTo(1.1,3.3,0.6,4.4).lineTo(0.3,5).lineTo(0.2,5).lineTo(0.1,5.2).lineTo(-0.1,5.4).lineTo(-0.2,5.4).lineTo(-0.3,5.6).lineTo(-0.4,5.6).lineTo(-0.6,5.7).lineTo(-0.6,5.7).lineTo(-0.8,5.8).lineTo(-0.9,5.8).lineTo(-1.1,5.8).closePath();
	this.shape_356.setTransform(627.2,322);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#494A4E").beginStroke().moveTo(5.3,15.6).curveTo(5.3,14.4,3.2,10.1).lineTo(1.2,6).curveTo(-0.8,6.6,-3.5,7.1).curveTo(-8.8,8,-12,6.8).curveTo(-12.5,8.9,-16.7,15).curveTo(-17.1,15.4,-18.1,15.1).curveTo(-18.4,14.3,-17.6,10.4).curveTo(-16.7,6.5,-17.7,4.6).curveTo(-19.1,1.9,-18.7,-0.7).curveTo(-18.2,-3.4,-15.9,-3.8).lineTo(-6.5,-3.7).curveTo(-0.9,-3.6,0.7,-6.7).curveTo(2.3,-9.5,2,-12.1).curveTo(1.9,-13.5,3.1,-14.8).curveTo(4.3,-16.1,5.7,-15.9).curveTo(7.1,-15.7,9.2,-14.9).curveTo(11.3,-14.2,12.4,-13.6).curveTo(13.9,-12.7,15.8,-12.5).curveTo(19.4,-11.3,18.6,-8).curveTo(18,-5.7,16.7,-4.7).curveTo(15.9,-4.1,11.8,-4.9).lineTo(8.9,-5.4).lineTo(7.7,-5.4).lineTo(6.8,-0.2).curveTo(6,6.8,7.1,15.8).curveTo(6.8,15.9,6.5,15.9).curveTo(6,15.9,5.3,15.6).closePath();
	this.shape_357.setTransform(647.5,320.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).lineTo(-1.5,0.1).lineTo(-0.9,-0.6).curveTo(-0.3,-1.4,0,-1.6).curveTo(0.6,-0.7,1.5,-0.5).lineTo(1.3,0.3).curveTo(1.1,0.8,0.5,1.5).lineTo(0.4,1.6).curveTo(-0.3,1.6,-0.9,0.8).closePath();
	this.shape_358.setTransform(627.1,334.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.1,0.9).curveTo(-1.2,-0.1,-0.9,-1).lineTo(-0.3,-0.9).curveTo(0.5,-1,0.8,-1.2).lineTo(1,-0.5).curveTo(1.2,0.3,1.1,0.8).curveTo(1,1.1,0.2,1.2).lineTo(-0.1,1.2).curveTo(-0.8,1.2,-1.1,0.9).closePath();
	this.shape_359.setTransform(651.5,335.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,4.6).curveTo(-3.6,3.9,-1.9,0.4).curveTo(-0.2,-3.1,-0.6,-4.9).curveTo(-0,-4.4,1.6,-3.6).curveTo(2.7,-3,3.4,-2).curveTo(2.7,-0.1,-2,4.8).lineTo(-2.4,4.9).curveTo(-2.8,4.9,-3.4,4.6).closePath();
	this.shape_360.setTransform(630.4,329.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#494A4E").beginStroke().moveTo(1.5,4.1).curveTo(1.5,3.5,-0.8,0.3).curveTo(-3.2,-3,-3.3,-3.7).curveTo(-0.6,-4.2,0.5,-4.3).curveTo(0.3,-3.5,2,-0.2).curveTo(3.6,3,3.2,4.1).curveTo(2.9,4.3,2.5,4.3).curveTo(2,4.3,1.5,4.1).closePath();
	this.shape_361.setTransform(649.1,330.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,6.6).curveTo(-4.1,5,-5.5,-3.7).lineTo(-4.8,-3.8).lineTo(-3.8,0.3).curveTo(-2.3,4.7,0.1,5.8).lineTo(1.8,6).curveTo(3.7,5.6,4.1,3.3).curveTo(4.7,0.7,4.8,-2.3).curveTo(4.9,-5,4.6,-6.8).lineTo(5.3,-6.7).lineTo(5.5,-3.1).curveTo(5.4,1,4.7,3.8).curveTo(4.3,5.6,2.9,6.4).curveTo(2.1,6.8,1.3,6.8).curveTo(0.6,6.8,-0.1,6.6).closePath();
	this.shape_362.setTransform(652.2,316.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.3,2.6).curveTo(-4.4,2.6,-5.2,1.8).curveTo(-5.9,1.1,-5.9,-0).curveTo(-5.9,-1.1,-5.2,-1.8).curveTo(-4.4,-2.6,-3.3,-2.6).lineTo(3.3,-2.6).curveTo(4.4,-2.6,5.2,-1.8).curveTo(5.9,-1.1,5.9,-0).curveTo(5.9,1.1,5.2,1.8).curveTo(4.4,2.6,3.3,2.6).closePath();
	this.shape_363.setTransform(607.4,231.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,2.3).curveTo(-1.9,1.4,-1.9,-0).curveTo(-1.9,-1.3,-1.3,-2.3).curveTo(-0.8,-3.3,-0,-3.3).curveTo(0.8,-3.3,1.3,-2.3).curveTo(1.9,-1.4,1.9,-0).curveTo(1.9,1.4,1.3,2.3).curveTo(0.8,3.3,-0,3.3).curveTo(-0.8,3.3,-1.3,2.3).closePath();
	this.shape_364.setTransform(559.8,284.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,4.8).curveTo(-3.8,2.8,-3.8,-0).curveTo(-3.8,-2.8,-2.7,-4.8).curveTo(-1.6,-6.8,-0,-6.8).curveTo(1.6,-6.8,2.7,-4.8).curveTo(3.8,-2.8,3.8,-0).curveTo(3.8,2.8,2.7,4.8).curveTo(1.6,6.7,-0,6.7).curveTo(-1.6,6.7,-2.7,4.8).closePath();
	this.shape_365.setTransform(559.8,284.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,2.3).curveTo(-1.9,1.4,-1.9,-0).curveTo(-1.9,-1.3,-1.3,-2.3).curveTo(-0.8,-3.3,-0,-3.3).curveTo(0.8,-3.3,1.3,-2.3).curveTo(1.9,-1.4,1.9,-0).curveTo(1.9,1.4,1.3,2.3).curveTo(0.8,3.3,-0,3.3).curveTo(-0.8,3.3,-1.3,2.3).closePath();
	this.shape_366.setTransform(591.9,284.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,4.8).curveTo(-3.8,2.8,-3.8,-0).curveTo(-3.8,-2.8,-2.7,-4.8).curveTo(-1.6,-6.8,-0,-6.8).curveTo(1.6,-6.8,2.7,-4.8).curveTo(3.8,-2.8,3.8,-0).curveTo(3.8,2.8,2.7,4.8).curveTo(1.6,6.7,-0,6.7).curveTo(-1.6,6.7,-2.7,4.8).closePath();
	this.shape_367.setTransform(591.9,284.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,2.3).curveTo(-1.9,1.4,-1.9,-0).curveTo(-1.9,-1.4,-1.3,-2.3).curveTo(-0.8,-3.3,0,-3.3).curveTo(0.8,-3.3,1.3,-2.3).curveTo(1.9,-1.4,1.9,-0).curveTo(1.9,1.4,1.3,2.3).curveTo(0.8,3.3,0,3.3).curveTo(-0.8,3.3,-1.3,2.3).closePath();
	this.shape_368.setTransform(654.8,284.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,4.8).curveTo(-3.8,2.8,-3.8,-0).curveTo(-3.8,-2.8,-2.7,-4.8).curveTo(-1.6,-6.8,0,-6.8).curveTo(1.6,-6.8,2.7,-4.8).curveTo(3.8,-2.8,3.8,-0).curveTo(3.8,2.8,2.7,4.8).curveTo(1.6,6.7,0,6.7).curveTo(-1.6,6.7,-2.7,4.8).closePath();
	this.shape_369.setTransform(654.8,284.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,2.3).curveTo(-1.9,1.4,-1.9,-0).curveTo(-1.9,-1.4,-1.3,-2.3).curveTo(-0.8,-3.3,0,-3.3).curveTo(0.8,-3.3,1.3,-2.3).curveTo(1.9,-1.3,1.9,-0).curveTo(1.9,1.4,1.3,2.3).curveTo(0.8,3.3,0,3.3).curveTo(-0.8,3.3,-1.3,2.3).closePath();
	this.shape_370.setTransform(623.1,284.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,4.8).curveTo(-3.8,2.8,-3.8,-0).curveTo(-3.8,-2.8,-2.7,-4.8).curveTo(-1.6,-6.8,0,-6.8).curveTo(1.6,-6.8,2.7,-4.8).curveTo(3.8,-2.8,3.8,-0).curveTo(3.8,2.8,2.7,4.8).curveTo(1.6,6.7,0,6.7).curveTo(-1.6,6.7,-2.7,4.8).closePath();
	this.shape_371.setTransform(623.1,284.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#494A4E").beginStroke().moveTo(15.6,2.6).curveTo(6.9,-1.8,-1.7,-1.1).curveTo(-7.9,-0.6,-14.8,2.7).lineTo(-15.2,2.8).lineTo(-15.5,2.7).curveTo(-27.5,-2.6,-38.2,-0.6).curveTo(-41.7,0.1,-44.5,1.4).lineTo(-46.8,2.6).lineTo(-47.8,1.2).curveTo(-47.1,0.6,-45.2,-0.2).curveTo(-42.3,-1.6,-38.7,-2.3).curveTo(-27.7,-4.4,-15.2,1).curveTo(-8.3,-2.2,-1.9,-2.7).curveTo(7.1,-3.5,16,1).curveTo(26.7,-4,38.3,-1.9).curveTo(44,-0.9,47.7,1.2).lineTo(46.9,2.6).curveTo(43.3,0.6,37.7,-0.3).curveTo(26.7,-2.2,16.3,2.7).lineTo(16,2.8).closePath();
	this.shape_372.setTransform(607.1,284);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#494A4E").beginStroke().moveTo(15,4.1).curveTo(6.7,-0.1,-1.5,0.5).curveTo(-7.3,1,-14,4.1).lineTo(-15.1,4.6).lineTo(-16.1,4.1).curveTo(-27.5,-0.9,-37.5,0.9).curveTo(-40.7,1.5,-43.4,2.7).curveTo(-44.8,3.3,-45.7,3.9).lineTo(-48.6,-0.2).curveTo(-47.4,-1,-46,-1.7).curveTo(-42.9,-3.1,-39.3,-3.9).curveTo(-27.8,-6.2,-15.1,-0.9).curveTo(-8.1,-4,-1.8,-4.5).curveTo(7.3,-5.1,16.1,-0.9).curveTo(27.2,-5.8,38.8,-3.6).curveTo(44.6,-2.6,48.6,-0.3).lineTo(46.2,4).curveTo(42.8,2.2,37.6,1.3).curveTo(27,-0.5,17.1,4.1).lineTo(16.1,4.6).closePath();
	this.shape_373.setTransform(607,284.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#494A4E").beginStroke().moveTo(-47.5,8.5).lineTo(-47.5,0.7).lineTo(-47.4,0.7).curveTo(-47.4,-3.1,-42.5,-5.8).curveTo(-37.7,-8.5,-31,-8.5).curveTo(-25.7,-8.5,-21.3,-6.7).curveTo(-17.1,-4.9,-15.5,-2.1).curveTo(-13.8,-4.9,-9.5,-6.7).curveTo(-5.2,-8.5,0.1,-8.5).curveTo(5.4,-8.5,9.7,-6.8).curveTo(13.9,-5.1,15.6,-2.3).curveTo(17.3,-5.1,21.5,-6.8).curveTo(25.8,-8.5,31.1,-8.5).curveTo(37.9,-8.5,42.7,-5.8).curveTo(47.5,-3,47.5,0.9).lineTo(47.5,8.5).closePath();
	this.shape_374.setTransform(607.3,282.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.7).curveTo(-4,1.5,-4,-0).curveTo(-4,-1.5,-2.8,-2.6).curveTo(-1.6,-3.7,-0,-3.7).curveTo(1.6,-3.7,2.8,-2.6).curveTo(4,-1.5,4,-0).curveTo(4,1.5,2.8,2.7).curveTo(1.6,3.7,-0,3.8).curveTo(-1.6,3.7,-2.8,2.7).closePath();
	this.shape_375.setTransform(607.1,227.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,11.3).lineTo(-0.7,-11.3).lineTo(0.7,-11.3).lineTo(0.7,11.3).closePath();
	this.shape_376.setTransform(606.8,218.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.5,4).curveTo(-7.5,2.9,-5.9,1.5).curveTo(-5.1,0.8,-4.9,0.4).curveTo(-6.3,-0.2,-7.7,-1.2).curveTo(-10.5,-3.3,-10.5,-5.9).curveTo(-7.6,-4,1.8,-4.7).curveTo(6.5,-5.1,10.5,-5.9).lineTo(10.5,4).curveTo(6.3,5,1.6,5.6).curveTo(-1.1,5.9,-3.2,5.9).curveTo(-8.6,5.9,-10.5,4).closePath();
	this.shape_377.setTransform(595.8,212.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#494A4E").beginStroke().moveTo(-21.1,27.7).curveTo(-9.9,19.3,-3.3,-5).curveTo(-0.1,-17.1,1,-27.7).lineTo(2,-21.1).curveTo(3.3,-13.3,5.2,-5.9).curveTo(11.3,17.4,21.1,27.7).closePath();
	this.shape_378.setTransform(606.4,252.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.6,27.1).lineTo(-17.2,22.7).curveTo(-8.3,17.2,-0.8,11).curveTo(23.2,-8.8,24.6,-27.1).curveTo(23.8,-10,21.7,1).curveTo(18.5,16.7,11.8,27.1).closePath();
	this.shape_379.setTransform(582.4,253.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.8,27.2).curveTo(-17.5,16.3,-20.8,1.1).curveTo(-23.2,-10.1,-24.4,-27.2).curveTo(-20.6,-8.5,2.2,11.2).curveTo(13.7,21.1,24.4,27.2).closePath();
	this.shape_380.setTransform(631.8,253.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#494A4E").beginStroke().moveTo(-48.1,1.6).lineTo(-48.1,-1.6).lineTo(48.2,-1.6).lineTo(48.2,1.6).closePath();
	this.shape_381.setTransform(607.3,292.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_382.setTransform(555.1,351.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_383.setTransform(560.3,351.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.8,0.8).closePath();
	this.shape_384.setTransform(565.5,351.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.8,0.8).closePath();
	this.shape_385.setTransform(570.7,351.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.8,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.8,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_386.setTransform(575.9,351.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.8,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.8,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_387.setTransform(581.1,351.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_388.setTransform(586.3,351.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_389.setTransform(591.5,351.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.8,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.8,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_390.setTransform(596.8,351.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.8,0.8).closePath();
	this.shape_391.setTransform(602,351.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.8,0.8).closePath();
	this.shape_392.setTransform(607.2,351.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.8,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.8,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_393.setTransform(612.4,351.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_394.setTransform(617.6,351.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_395.setTransform(622.8,351.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.8,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.8,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_396.setTransform(628,351.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.8,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.8,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_397.setTransform(633.2,351.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.8,0.8).closePath();
	this.shape_398.setTransform(638.4,351.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.8,0.8).closePath();
	this.shape_399.setTransform(643.6,351.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_400.setTransform(648.8,351.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.9,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.8).closePath();
	this.shape_401.setTransform(654,351.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1.2,0.5,-1.2,0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,0,-1.2).curveTo(0.5,-1.2,0.8,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.8,0.8).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.8,0.8).closePath();
	this.shape_402.setTransform(659.3,351.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#494A4E").beginStroke().moveTo(-55.3,2.4).lineTo(-55.3,-2.4).lineTo(55.3,-2.4).lineTo(55.3,2.4).closePath();
	this.shape_403.setTransform(607.3,351.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#494A4E").beginStroke().moveTo(-50.2,2.3).lineTo(-50.2,-2.3).lineTo(50.1,-2.3).lineTo(50.1,2.3).closePath();
	this.shape_404.setTransform(607.3,347.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#494A4E").beginStroke().moveTo(-52.6,5.4).lineTo(-55.3,-5.4).lineTo(55.3,-5.4).lineTo(51.9,5.4).closePath();
	this.shape_405.setTransform(607.3,359.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#494A4E").beginStroke().moveTo(12.2,22.3).lineTo(-15.1,-5).lineTo(-15.1,-22.3).lineTo(15.1,7.8).lineTo(15.1,22.3).closePath();
	this.shape_406.setTransform(607.3,323.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,4.3).lineTo(-4.3,-4.4).lineTo(4.3,4.3).closePath();
	this.shape_407.setTransform(596.6,341.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.9,13.6).lineTo(-13.6,4.9).lineTo(-13.6,-13.6).lineTo(13.6,13.6).closePath();
	this.shape_408.setTransform(605.9,331.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.1,-7.4).lineTo(-15.1,-22.7).lineTo(-13.3,-22.7).lineTo(15.1,5.7).lineTo(15.1,22.7).closePath();
	this.shape_409.setTransform(607.3,308.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.2,-14.2).lineTo(2.5,-14.2).lineTo(14.2,-2.6).lineTo(14.2,14.2).closePath();
	this.shape_410.setTransform(608.2,299.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.8,-5.8).lineTo(5.8,-5.8).lineTo(5.8,5.8).closePath();
	this.shape_411.setTransform(616.6,291.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,27).lineTo(-1.3,-27).lineTo(1.3,-27).lineTo(1.3,27).closePath();
	this.shape_412.setTransform(573.4,319.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,27).lineTo(-1.3,-27).lineTo(1.3,-27).lineTo(1.3,27).closePath();
	this.shape_413.setTransform(641.2,319.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,2.8).curveTo(-4.1,1.7,-4.1,-0).curveTo(-4.1,-1.7,-2.9,-2.8).curveTo(-1.7,-4.1,-0,-4.1).curveTo(1.7,-4.1,2.9,-2.8).curveTo(4.1,-1.7,4.1,-0).curveTo(4.1,1.7,2.9,2.8).curveTo(1.7,4,-0,4).curveTo(-1.7,4,-2.9,2.8).closePath();
	this.shape_414.setTransform(390.3,253.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#494A4E").beginStroke().moveTo(-50.3,2.1).lineTo(-50.3,-2.2).lineTo(50.3,-2.2).lineTo(50.3,2.1).closePath();
	this.shape_415.setTransform(390.2,313.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3.1,1.9,-3.1,0).curveTo(-3.1,-1.9,-2.2,-3.2).curveTo(-1.2,-4.6,0,-4.6).curveTo(1.2,-4.6,2.2,-3.2).curveTo(3,-1.9,3.1,0).curveTo(3,1.8,2.2,3.2).curveTo(1.2,4.5,0,4.5).curveTo(-1.2,4.5,-2.2,3.2).closePath();
	this.shape_416.setTransform(342.8,316.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_417.setTransform(354,316.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_418.setTransform(365.2,316.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_419.setTransform(376.3,316.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_420.setTransform(387.5,316.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_421.setTransform(398.6,316.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_422.setTransform(409.8,316.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_423.setTransform(420.9,316.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_424.setTransform(432.1,316.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3.1,1.9,-3,0).curveTo(-3.1,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,0,-4.6).curveTo(1.3,-4.6,2.2,-3.2).curveTo(3,-1.9,3.1,0).curveTo(3,1.9,2.2,3.2).curveTo(1.3,4.5,0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_425.setTransform(348.5,316.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.2,4.5,0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_426.setTransform(359.6,316.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3,1.9,-3,0).curveTo(-3,-1.9,-2.1,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.3,-4.6,2.1,-3.2).curveTo(3,-1.9,3,0).curveTo(3,1.9,2.1,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.1,3.2).closePath();
	this.shape_427.setTransform(370.8,316.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3,1.9,-3.1,0).curveTo(-3,-1.9,-2.2,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.3,-4.6,2.1,-3.2).curveTo(3.1,-1.9,3,0).curveTo(3.1,1.9,2.1,3.2).curveTo(1.3,4.5,-0,4.5).curveTo(-1.3,4.5,-2.2,3.2).closePath();
	this.shape_428.setTransform(381.9,316.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3,1.9,-3.1,0).curveTo(-3,-1.9,-2.2,-3.2).curveTo(-1.3,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.1,-3.2).curveTo(3.1,-1.9,3,0).curveTo(3.1,1.9,2.1,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.3,4.5,-2.2,3.2).closePath();
	this.shape_429.setTransform(393.1,316.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3,1.9,-3.1,0).curveTo(-3,-1.9,-2.2,-3.2).curveTo(-1.2,-4.6,-0,-4.6).curveTo(1.2,-4.6,2.2,-3.2).curveTo(3.1,-1.9,3.1,0).curveTo(3.1,1.9,2.2,3.2).curveTo(1.2,4.5,-0,4.5).curveTo(-1.2,4.5,-2.2,3.2).closePath();
	this.shape_430.setTransform(404.2,316.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.2).curveTo(-3.1,1.9,-3.1,0).curveTo(-3.1,-1.9,-2.2,-3.2).curveTo(-1.2,-4.6,0,-4.6).curveTo(1.2,-4.6,2.2,-3.2).curveTo(3.1,-1.9,3.1,0).curveTo(3.1,1.9,2.2,3.2).curveTo(1.2,4.5,0,4.5).curveTo(-1.2,4.5,-2.2,3.2).closePath();
	this.shape_431.setTransform(415.4,316.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3.1,1.9,-3.1,0).curveTo(-3.1,-1.9,-2.1,-3.2).curveTo(-1.2,-4.6,0,-4.6).curveTo(1.2,-4.6,2.2,-3.2).curveTo(3,-1.9,3.1,0).curveTo(3,1.9,2.2,3.2).curveTo(1.2,4.5,0,4.5).curveTo(-1.2,4.5,-2.1,3.2).closePath();
	this.shape_432.setTransform(426.5,316.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.2).curveTo(-3.1,1.9,-3,0).curveTo(-3.1,-1.9,-2.1,-3.2).curveTo(-1.2,-4.6,0,-4.6).curveTo(1.3,-4.6,2.2,-3.2).curveTo(3,-1.9,3.1,0).curveTo(3,1.9,2.2,3.2).curveTo(1.3,4.5,0,4.5).curveTo(-1.2,4.5,-2.1,3.2).closePath();
	this.shape_433.setTransform(437.7,316.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.beginFill("#494A4E").beginStroke().moveTo(-50.3,30.5).lineTo(-42.4,25.6).curveTo(-32.9,19.3,-25.1,12.3).curveTo(0.2,-10.1,-0,-30.5).curveTo(2.9,-9.6,26.9,12.5).curveTo(38.9,23.6,50.3,30.5).closePath();
	this.shape_434.setTransform(390.2,280.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,12.2).lineTo(-0.7,-12.2).lineTo(0.7,-12.2).lineTo(0.7,12.2).closePath();
	this.shape_435.setTransform(390,243.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.8,4.3).curveTo(-7.6,3.1,-6,1.6).curveTo(-5.2,0.9,-5,0.4).curveTo(-6.4,-0.2,-7.9,-1.3).curveTo(-10.8,-3.6,-10.8,-6.3).curveTo(-7.8,-4.3,1.8,-5.1).curveTo(6.6,-5.5,10.8,-6.3).lineTo(10.8,4.3).curveTo(6.5,5.4,1.7,6).curveTo(-1.1,6.3,-3.3,6.3).curveTo(-8.8,6.3,-10.8,4.3).closePath();
	this.shape_436.setTransform(378.7,237.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.beginFill("#494A4E").beginStroke().moveTo(5.8,24.1).curveTo(6.1,22.5,7,18.8).curveTo(8.9,11.3,12.3,0.5).curveTo(12.1,0.3,8.4,-0.4).curveTo(3.9,-1.2,0.3,-2.8).curveTo(-12.4,-8.3,-22.1,-24.1).lineTo(22,-24.1).lineTo(19.3,24.1).closePath();
	this.shape_437.setTransform(411.8,340.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.3,24.1).lineTo(-22.1,-24.1).lineTo(22,-24.1).curveTo(12.3,-8.3,-0.2,-2.8).curveTo(-3.9,-1.2,-8.3,-0.4).curveTo(-12.1,0.3,-12.4,0.5).curveTo(-6.8,17.7,-5.8,24.1).closePath();
	this.shape_438.setTransform(368,340.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.beginFill("#494A4E").beginStroke().moveTo(-38.9,24.1).lineTo(-42.2,-24.1).lineTo(42.2,-24.1).lineTo(38.9,24.1).closePath();
	this.shape_439.setTransform(389.8,340.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.5).lineTo(6.4,-6.7).lineTo(0.4,6.8).closePath();
	this.shape_440.setTransform(504.6,274.6);

	this.instance_13 = new lib.barredora001();
	this.instance_13.parent = this;
	this.instance_13.setTransform(460.2,274,1,1,0,0,0,6.4,6.8);

	this.instance_14 = new lib.barredora003();
	this.instance_14.parent = this;
	this.instance_14.setTransform(504.7,274.7,1,1,0,0,0,6.4,6.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.3,-6.9).lineTo(6.3,-5.8).lineTo(-1,6.9).closePath();
	this.shape_441.setTransform(430.6,271.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.8).lineTo(6.4,-6.3).lineTo(-0.4,6.8).closePath();
	this.shape_442.setTransform(460.2,274);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.7).lineTo(6.4,-6.6).lineTo(0.1,6.7).closePath();
	this.shape_443.setTransform(489.7,274.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.2).lineTo(6.4,-6.8).lineTo(0.8,6.8).closePath();
	this.shape_444.setTransform(519.5,274);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.3,-5.6).lineTo(6.3,-7).lineTo(1.6,7).closePath();
	this.shape_445.setTransform(548.1,271.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.3,-7).lineTo(6.4,-5.7).lineTo(-1.2,7).closePath();
	this.shape_446.setTransform(415.7,270.4);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.9).lineTo(6.4,-6.1).lineTo(-0.7,6.9).closePath();
	this.shape_447.setTransform(445.2,273.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,-6.7).lineTo(6.4,-6.5).lineTo(-0.2,6.8).closePath();
	this.shape_448.setTransform(475.2,274.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.3,-5.9).lineTo(6.4,-6.9).lineTo(1.2,6.9).closePath();
	this.shape_449.setTransform(534.1,272.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.3,-5.1).lineTo(6.3,-7.1).lineTo(2.2,7.1).closePath();
	this.shape_450.setTransform(562.7,269.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.beginFill("#494A4E").beginStroke().moveTo(-38.7,4.7).curveTo(-66.1,3.2,-98.6,-0.7).lineTo(-98.5,-1.4).curveTo(-66.5,2.5,-38.6,4.1).curveTo(3.7,6.4,39.3,3.8).curveTo(59.1,2.4,74.8,-0.4).curveTo(85.5,-2.3,98.4,-5.9).lineTo(98.5,-5.2).curveTo(85.7,-1.7,74.9,0.2).curveTo(59.3,3.1,39.4,4.5).curveTo(22.8,5.6,5.3,5.8).lineTo(-0.4,5.9).curveTo(-18.9,5.9,-38.7,4.7).closePath();
	this.shape_451.setTransform(491.5,263);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.2,1.8).lineTo(-24.2,-1.8).lineTo(24.2,-1.8).lineTo(24.2,1.8).closePath();
	this.shape_452.setTransform(450,337.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.beginFill("#494A4E").beginStroke().moveTo(12.5,13.2).curveTo(9.9,10.2,7.1,5.7).curveTo(1.4,-3.3,0.1,-10.5).curveTo(-1.4,-3.4,-7.1,5.7).lineTo(-12.4,13.2).lineTo(-18.5,13.2).lineTo(-20.3,-13.2).lineTo(20.3,-13.2).lineTo(18.5,13.2).closePath();
	this.shape_453.setTransform(449.8,351.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,1.6).curveTo(-1.9,0.9,-1.9,0).curveTo(-1.9,-0.9,-1.4,-1.6).curveTo(-0.8,-2.2,0,-2.2).curveTo(0.8,-2.2,1.4,-1.6).curveTo(1.9,-0.9,1.9,0).curveTo(1.9,0.9,1.4,1.6).curveTo(0.8,2.2,0,2.2).curveTo(-0.8,2.2,-1.4,1.6).closePath();
	this.shape_454.setTransform(450.1,303.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.3,6.7).lineTo(-0.3,-6.7).lineTo(0.3,-6.7).lineTo(0.3,6.7).closePath();
	this.shape_455.setTransform(449.9,298.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,2.4).curveTo(-2.8,1.3,-2.4,0.2).curveTo(-3.1,-0.1,-3.8,-0.7).curveTo(-5.2,-2,-5.2,-3.5).curveTo(-3.7,-2.3,0.9,-2.8).curveTo(3.2,-3,5.2,-3.5).lineTo(5.2,2.4).curveTo(3.1,3,0.8,3.3).lineTo(-1.6,3.5).curveTo(-4.2,3.5,-5.2,2.4).closePath();
	this.shape_456.setTransform(444.5,295.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.4,16.4).curveTo(-4.8,11.4,-1.6,-3).lineTo(0.5,-16.4).lineTo(2.6,-3.5).curveTo(5.6,10.3,10.3,16.4).closePath();
	this.shape_457.setTransform(449.7,318.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.1,16.1).lineTo(-8.4,13.5).curveTo(-4.1,10.2,-0.4,6.5).curveTo(11.4,-5.2,12.1,-16.1).curveTo(11.7,-6,10.6,0.5).curveTo(9.1,9.9,5.8,16.1).closePath();
	this.shape_458.setTransform(437.9,319.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.3,16.1).curveTo(-8.6,9.7,-10.2,0.6).curveTo(-11.4,-5.9,-12,-16.2).curveTo(-10.1,-5,1.2,6.7).curveTo(6.7,12.5,12,16.1).closePath();
	this.shape_459.setTransform(462.2,319.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.beginFill("#494A4E").beginStroke().moveTo(-18.5,13.2).lineTo(-20.3,-13.2).lineTo(20.3,-13.2).lineTo(18.5,13.2).closePath();
	this.shape_460.setTransform(449.8,351.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.beginFill("#494A4E").beginStroke().moveTo(2.6,0.9).curveTo(2.8,-1.2,1.7,-2.6).curveTo(0.6,-3.8,-1.3,-4.1).curveTo(-2.7,-4.2,-3.9,-3.6).curveTo(-2.5,-5.4,-0,-5.2).curveTo(1.9,-5,2.9,-3.7).curveTo(4.1,-2.3,3.9,-0.2).curveTo(3.7,1.4,2.8,2.9).curveTo(1.9,4.5,0.7,5.2).curveTo(2.3,3.3,2.6,0.9).closePath();
	this.shape_461.setTransform(519.1,306.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,5.8).lineTo(-1.3,4.8).curveTo(-2.8,4.2,-3.7,2.1).curveTo(-4.5,0.1,-4.3,-2).curveTo(-4.1,-4.1,-2.7,-5.2).curveTo(-1.4,-6.2,0.4,-6).curveTo(2.3,-5.8,3.4,-4.5).curveTo(4.5,-3.1,4.3,-1).curveTo(4.1,1.1,2.7,2.9).curveTo(1.3,4.8,-0.3,4.9).lineTo(-0,6).closePath();
	this.shape_462.setTransform(518.7,307);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.beginFill("#494A4E").beginStroke().moveTo(2.4,0.5).curveTo(2.5,-1.2,1.4,-2.3).curveTo(0.4,-3.3,-1.2,-3.3).curveTo(-2.5,-3.3,-3.4,-2.7).curveTo(-2.4,-4.4,-0.3,-4.3).curveTo(1.3,-4.3,2.3,-3.3).curveTo(3.4,-2.3,3.4,-0.5).curveTo(3.4,0.9,2.7,2.3).curveTo(2.1,3.7,1.2,4.4).curveTo(2.3,2.7,2.4,0.5).closePath();
	this.shape_463.setTransform(512.5,299.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,5.1).lineTo(-0.5,4.1).curveTo(-1.8,3.8,-2.8,2.1).curveTo(-3.7,0.5,-3.6,-1.3).curveTo(-3.6,-3.1,-2.5,-4.1).curveTo(-1.6,-5.1,0,-5).curveTo(1.6,-5,2.6,-4).curveTo(3.7,-3,3.7,-1.2).curveTo(3.7,0.6,2.7,2.3).curveTo(1.7,4,0.3,4.2).lineTo(0.6,5.1).closePath();
	this.shape_464.setTransform(512.2,300.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.beginFill("#494A4E").beginStroke().moveTo(2.8,0.1).curveTo(2.4,-1.6,1.1,-2.4).curveTo(-0.2,-3.1,-1.7,-2.7).curveTo(-3,-2.4,-3.6,-1.6).curveTo(-3.1,-3.5,-1,-4).curveTo(0.5,-4.3,1.8,-3.6).curveTo(3.1,-2.9,3.5,-1.1).curveTo(3.8,0.2,3.5,1.7).curveTo(3.3,3.2,2.5,4.1).curveTo(3.3,2.2,2.8,0.1).closePath();
	this.shape_465.setTransform(505.2,304.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.beginFill("#494A4E").beginStroke().moveTo(0.7,4.1).curveTo(-0.6,4.1,-1.9,2.6).curveTo(-3.2,1.3,-3.6,-0.5).curveTo(-4,-2.2,-3.2,-3.4).curveTo(-2.5,-4.6,-1,-5).curveTo(0.6,-5.3,1.8,-4.6).curveTo(3.1,-3.9,3.5,-2.1).curveTo(4,-0.4,3.4,1.5).curveTo(2.8,3.4,1.6,3.9).lineTo(2.1,4.7).lineTo(0.6,5.1).closePath();
	this.shape_466.setTransform(505.2,305.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.beginFill("#494A4E").beginStroke().moveTo(0.4,13.9).lineTo(0.3,13.8).lineTo(-6.2,-5).curveTo(-6.2,-5.1,-6.2,-5.1).curveTo(-6.2,-5.1,-6.2,-5.2).curveTo(-6.2,-5.2,-6.1,-5.2).curveTo(-6.1,-5.3,-6.1,-5.3).lineTo(-5.9,-5.2).lineTo(0.3,12.8).lineTo(-0.5,-13.7).curveTo(-0.5,-13.8,-0.4,-13.8).curveTo(-0.4,-13.9,-0.4,-13.9).curveTo(-0.4,-13.9,-0.4,-13.9).curveTo(-0.3,-13.9,-0.3,-13.9).curveTo(-0.3,-13.9,-0.2,-13.9).curveTo(-0.2,-13.9,-0.2,-13.9).curveTo(-0.1,-13.9,-0.1,-13.8).curveTo(-0.1,-13.8,-0.1,-13.7).lineTo(0.6,12.4).lineTo(5.8,-5.5).curveTo(5.8,-5.6,5.9,-5.6).curveTo(5.9,-5.6,5.9,-5.7).curveTo(5.9,-5.7,6,-5.7).curveTo(6,-5.7,6,-5.6).curveTo(6.1,-5.6,6.1,-5.6).curveTo(6.1,-5.6,6.2,-5.6).curveTo(6.2,-5.5,6.2,-5.5).curveTo(6.2,-5.5,6.2,-5.4).lineTo(0.6,13.8).lineTo(0.5,13.9).closePath();
	this.shape_467.setTransform(512.5,315);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.beginFill("#494A4E").beginStroke().moveTo(2.6,0.9).curveTo(2.8,-1.2,1.6,-2.6).curveTo(0.6,-3.9,-1.3,-4.1).curveTo(-2.7,-4.2,-3.9,-3.6).curveTo(-2.6,-5.4,-0,-5.2).curveTo(1.8,-5,2.9,-3.7).curveTo(4.1,-2.3,3.8,-0.2).curveTo(3.6,1.4,2.8,2.9).curveTo(1.9,4.5,0.7,5.2).curveTo(2.2,3.4,2.6,0.9).closePath();
	this.shape_468.setTransform(554.5,309.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,5.8).lineTo(-1.2,4.8).curveTo(-2.7,4.2,-3.6,2.1).curveTo(-4.5,0.1,-4.3,-2).curveTo(-4,-4.1,-2.7,-5.2).curveTo(-1.4,-6.2,0.5,-6).curveTo(2.3,-5.8,3.4,-4.5).curveTo(4.6,-3.1,4.3,-1).curveTo(4.1,1.1,2.8,2.9).curveTo(1.4,4.8,-0.3,4.9).lineTo(0,6).closePath();
	this.shape_469.setTransform(554,309.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.beginFill("#494A4E").beginStroke().moveTo(2.4,0.5).curveTo(2.4,-1.2,1.3,-2.3).curveTo(0.3,-3.3,-1.3,-3.3).curveTo(-2.5,-3.3,-3.4,-2.7).curveTo(-2.5,-4.4,-0.3,-4.3).curveTo(1.3,-4.3,2.3,-3.3).curveTo(3.4,-2.3,3.4,-0.5).curveTo(3.3,0.9,2.7,2.3).curveTo(2.1,3.7,1.1,4.4).curveTo(2.4,2.6,2.4,0.5).closePath();
	this.shape_470.setTransform(547.9,302.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,5.1).lineTo(-0.6,4.1).curveTo(-1.9,3.8,-2.8,2.1).curveTo(-3.7,0.4,-3.6,-1.3).curveTo(-3.6,-3.1,-2.5,-4.1).curveTo(-1.5,-5.1,-0,-5).curveTo(1.6,-5,2.6,-4).curveTo(3.7,-3,3.7,-1.2).curveTo(3.6,0.6,2.7,2.3).curveTo(1.6,4,0.3,4.2).lineTo(0.6,5.1).closePath();
	this.shape_471.setTransform(547.6,303.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.beginFill("#494A4E").beginStroke().moveTo(2.8,0.1).curveTo(2.4,-1.6,1.1,-2.4).curveTo(-0.1,-3.1,-1.7,-2.7).curveTo(-2.9,-2.4,-3.6,-1.6).curveTo(-3.1,-3.5,-1,-4).curveTo(0.6,-4.3,1.8,-3.6).curveTo(3.1,-2.9,3.5,-1.1).curveTo(3.8,0.2,3.5,1.7).curveTo(3.3,3.2,2.5,4.1).curveTo(3.3,2.1,2.8,0.1).closePath();
	this.shape_472.setTransform(540.6,307.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.beginFill("#494A4E").beginStroke().moveTo(0.8,4.1).curveTo(-0.6,4.1,-1.9,2.6).curveTo(-3.1,1.3,-3.6,-0.5).curveTo(-4,-2.2,-3.2,-3.4).curveTo(-2.5,-4.6,-0.9,-5).curveTo(0.6,-5.3,1.8,-4.6).curveTo(3.1,-3.9,3.5,-2.1).curveTo(4,-0.4,3.4,1.5).curveTo(2.8,3.4,1.6,3.9).lineTo(2.1,4.7).lineTo(0.7,5.1).closePath();
	this.shape_473.setTransform(540.5,308.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.beginFill("#494A4E").beginStroke().moveTo(0.4,13.9).lineTo(0.3,13.9).lineTo(0.3,13.8).lineTo(-6.2,-5).lineTo(-6.1,-5.3).lineTo(-5.8,-5.2).lineTo(0.3,12.8).lineTo(-0.5,-13.7).curveTo(-0.5,-13.8,-0.5,-13.8).curveTo(-0.5,-13.8,-0.4,-13.9).curveTo(-0.4,-13.9,-0.4,-13.9).curveTo(-0.3,-13.9,-0.3,-13.9).curveTo(-0.3,-13.9,-0.2,-13.9).curveTo(-0.2,-13.9,-0.2,-13.9).curveTo(-0.2,-13.8,-0.2,-13.8).curveTo(-0.1,-13.8,-0.1,-13.7).lineTo(0.7,12.4).lineTo(5.8,-5.5).curveTo(5.8,-5.6,5.9,-5.6).curveTo(5.9,-5.6,5.9,-5.6).curveTo(6,-5.7,6,-5.7).curveTo(6,-5.7,6.1,-5.7).curveTo(6.1,-5.7,6.1,-5.6).curveTo(6.2,-5.6,6.2,-5.6).curveTo(6.2,-5.5,6.2,-5.5).curveTo(6.2,-5.5,6.2,-5.4).lineTo(0.6,13.8).lineTo(0.6,13.9).lineTo(0.6,13.9).closePath();
	this.shape_474.setTransform(547.9,317.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.instance_14},{t:this.instance_13},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.instance_12},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.instance_11},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.instance_10},{t:this.instance_9},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.instance_8},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.instance_7},{t:this.instance_6},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.instance_5},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.instance_4},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(127));

	// piso
	this.instance_15 = new lib.Interpolación1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(50.5,438.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(127));

	// Ambient
	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_475.setTransform(525,182.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_476.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_476},{t:this.shape_475}]}).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-423.9,257.5,2368.1,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;