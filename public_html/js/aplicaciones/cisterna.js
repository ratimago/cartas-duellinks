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



(lib.cisterna001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-38,80.8).lineTo(-38,-42).lineTo(-1,-80.8).lineTo(38,-42).lineTo(38,80.8).closePath();
	mask.setTransform(42,80.8);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.5,3.5).lineTo(-7.5,-3.5).lineTo(7.5,-3.5).lineTo(7.5,3.5).closePath();
	this.shape.setTransform(7.5,68.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.5,4.5).lineTo(-7.5,-4.5).lineTo(7.5,-4.5).lineTo(7.5,4.5).closePath();
	this.shape_1.setTransform(67.5,96.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.5,6).lineTo(-7.5,-6).lineTo(7.5,-6).lineTo(7.5,6).closePath();
	this.shape_2.setTransform(7.5,109.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-38,80.8).lineTo(-38,-42).lineTo(-1,-80.8).lineTo(38,-42).lineTo(38,80.8).closePath();
	this.shape_3.setTransform(42,80.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,0,76,161.7);


(lib.cisterna006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-532.9,106.3).lineTo(-345.9,-106.3).lineTo(-233.5,-13.6).lineTo(-146.3,-80.6).lineTo(0.5,37).lineTo(104.9,-41.1).lineTo(223.1,31.8).lineTo(343.6,-98.6).lineTo(532.9,106.3).closePath();
	this.shape.setTransform(532.9,106.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1065.8,212.7);


(lib.cisterna005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-23.1,16.6).curveTo(-25.6,16.6,-27.3,14.8).curveTo(-29.1,13.1,-29.1,10.7).curveTo(-29.1,8.2,-27.3,6.5).curveTo(-25.6,4.7,-23.1,4.7).curveTo(-23.2,0.3,-20,-2.8).curveTo(-16.9,-5.9,-12.5,-5.9).lineTo(-10.7,-5.8).lineTo(-10.7,-5.9).curveTo(-10.6,-10.3,-7.5,-13.5).curveTo(-4.4,-16.6,0,-16.6).curveTo(4.4,-16.6,7.6,-13.5).curveTo(10.7,-10.3,10.7,-5.9).lineTo(10.5,-4.4).lineTo(12.5,-4.6).curveTo(16.5,-4.6,19.6,-1.9).curveTo(22.6,0.8,23.1,4.8).lineTo(23.2,4.7).curveTo(25.6,4.7,27.3,6.5).curveTo(29,8.2,29.1,10.7).curveTo(29,13.1,27.3,14.8).curveTo(25.6,16.6,23.2,16.6).closePath();
	this.shape.setTransform(29.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,33.2);


(lib.cisterna004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13,9.3).curveTo(-14.3,9.3,-15.3,8.3).curveTo(-16.3,7.3,-16.3,6).curveTo(-16.3,4.6,-15.3,3.7).curveTo(-14.3,2.7,-13,2.7).curveTo(-13,0.2,-11.2,-1.6).curveTo(-9.4,-3.3,-7,-3.3).lineTo(-6,-3.2).lineTo(-6,-3.3).curveTo(-6,-5.8,-4.2,-7.6).curveTo(-2.4,-9.3,-0,-9.3).curveTo(2.5,-9.3,4.2,-7.6).curveTo(6,-5.7,6,-3.3).lineTo(5.9,-2.5).lineTo(7,-2.6).curveTo(9.3,-2.5,11,-1).curveTo(12.7,0.5,12.9,2.7).lineTo(13,2.7).curveTo(14.4,2.7,15.4,3.7).curveTo(16.3,4.6,16.3,6).curveTo(16.3,7.3,15.4,8.3).curveTo(14.4,9.3,13,9.3).closePath();
	this.shape.setTransform(16.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.6,18.6);


(lib.cisterna003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-17.1,12.3).curveTo(-18.9,12.3,-20.2,11).curveTo(-21.5,9.7,-21.5,7.9).curveTo(-21.5,6.1,-20.2,4.8).curveTo(-18.9,3.5,-17.1,3.5).curveTo(-17.1,0.3,-14.8,-2.1).curveTo(-12.5,-4.4,-9.2,-4.4).curveTo(-8.5,-4.4,-7.9,-4.2).lineTo(-7.9,-4.4).curveTo(-7.9,-7.6,-5.6,-10).curveTo(-3.3,-12.3,0,-12.3).curveTo(3.2,-12.3,5.6,-10).curveTo(7.9,-7.6,7.9,-4.4).lineTo(7.8,-3.3).lineTo(9.3,-3.4).curveTo(12.2,-3.4,14.5,-1.4).curveTo(16.7,0.6,17,3.5).lineTo(17.1,3.5).curveTo(19,3.5,20.3,4.8).curveTo(21.5,6.1,21.5,7.9).curveTo(21.5,9.7,20.3,11).curveTo(19,12.3,17.1,12.3).closePath();
	this.shape.setTransform(21.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,24.6);


(lib.cisterna002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.1,6.5).curveTo(-10.1,6.5,-10.7,5.8).curveTo(-11.4,5.2,-11.4,4.2).curveTo(-11.4,3.2,-10.7,2.6).curveTo(-10.1,1.8,-9.1,1.9).curveTo(-9.1,0.2,-7.9,-1.1).curveTo(-6.6,-2.4,-4.9,-2.4).lineTo(-4.2,-2.3).lineTo(-4.2,-2.4).curveTo(-4.2,-4,-2.9,-5.3).curveTo(-1.8,-6.5,0,-6.5).curveTo(1.8,-6.5,2.9,-5.3).curveTo(4.2,-4,4.2,-2.4).lineTo(4.2,-1.7).lineTo(4.9,-1.8).curveTo(6.5,-1.8,7.7,-0.7).curveTo(8.8,0.3,9,1.9).lineTo(9.1,1.9).curveTo(10,1.8,10.7,2.6).curveTo(11.4,3.2,11.4,4.2).curveTo(11.4,5.2,10.7,5.8).curveTo(10,6.5,9.1,6.5).closePath();
	this.shape.setTransform(11.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,13);


(lib.cisternaregadera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FAFAFA").beginStroke().moveTo(-3.2,-2.9).lineTo(3.9,-4.9).lineTo(-3.9,5).closePath();
	this.shape.setTransform(5.4,-31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FAFAFA").setStrokeStyle(2).moveTo(-1.9,35).curveTo(-4.3,17.7,-4.6,0.5).curveTo(-5.2,-34.1,5.6,-34.1);
	this.shape_1.setTransform(-2.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-36.2,17.8,73.1);


(lib.cisternallanta = function(mode,startPosition,loop) {
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


(lib.cisternalegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#383643").beginStroke().moveTo(6,-6.7).curveTo(-3.3,-18.7,-12.5,-33.3).curveTo(-31,-62.5,-31,-75.6).lineTo(20.4,-77.4).curveTo(29.3,-15.4,29.6,-14.5).lineTo(31,77.1).lineTo(6.9,77.4).closePath();
	this.shape.setTransform(0.3,-2.9,0.335,0.335,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#383643").beginStroke().moveTo(-28.9,73).lineTo(-14.1,-7.9).lineTo(-22.5,-77.6).lineTo(28.9,-77.6).lineTo(10,2.4).lineTo(-6.4,77.6).closePath();
	this.shape_1.setTransform(3.1,-2.9,0.335,0.335,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#383643").beginStroke().moveTo(-16.4,15.4).curveTo(-17.5,15.4,-18.3,14.7).curveTo(-19.1,14,-19.3,13).curveTo(-20.5,7.5,-18.4,3.2).lineTo(-16,0.1).lineTo(-16,-15.4).lineTo(5,-15.4).lineTo(5,0.1).curveTo(8.4,2.2,13.9,4.1).curveTo(17.7,5.3,18.9,7.6).curveTo(20.5,10.1,19,12.8).curveTo(17.6,15.4,14.7,15.4).closePath();
	this.shape_2.setTransform(-7.8,23.1,0.335,0.335,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#383643").beginStroke().moveTo(13.6,17.7).lineTo(-17.1,12.3).curveTo(-18.1,12.1,-18.8,11.3).curveTo(-19.4,10.5,-19.5,9.4).curveTo(-19.7,3.8,-16.9,0).lineTo(-14,-2.6).lineTo(-11.3,-17.8).lineTo(9.4,-14.2).lineTo(6.7,1).curveTo(10.3,4.7,14.9,7).curveTo(18.3,8.6,19.1,10.8).curveTo(20.2,13.5,18.3,15.9).curveTo(16.8,17.8,14.6,17.8).lineTo(13.6,17.7).closePath();
	this.shape_3.setTransform(7.9,23,0.335,0.335,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-28.8,28.9,57.8);


(lib.cisternahandss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#383643").beginStroke().moveTo(-9.9,4.9).curveTo(-3.2,1.1,2,-4.6).curveTo(2.7,-5.4,4.4,-6.3).curveTo(4.8,-6.6,5.1,-9.4).lineTo(9.9,-3.5).curveTo(9.6,-1,9.1,-0.9).curveTo(7.5,-0.5,5.2,2.1).curveTo(2.9,4.6,-0.7,6.3).lineTo(-7.4,9.4).closePath();
	this.shape.setTransform(-0.2,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DBDDDE").beginStroke().moveTo(4.5,2.9).lineTo(2.6,2.2).curveTo(0.6,1.4,-2.1,1.3).lineTo(-3.7,1.4).curveTo(-4.8,1.5,-5.3,1.4).curveTo(-6.2,1.1,-6.7,0.2).curveTo(-7.1,-0.6,-6.7,-1.5).curveTo(-6.4,-2.3,-5.6,-2.6).lineTo(-4.1,-2.9).curveTo(1.3,-3.4,5.8,-1).curveTo(6.7,-0.5,6.9,0.5).curveTo(7,1.6,6.3,2.3).curveTo(5.7,3,4.9,3).lineTo(4.5,2.9).closePath();
	this.shape_1.setTransform(-11,9,0.335,0.335,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBDDDE").beginStroke().moveTo(5.1,10.2).curveTo(3.1,9.8,0.4,8.3).lineTo(-4.1,5.6).curveTo(-8.7,3,-13,0.3).lineTo(-10,-4.8).curveTo(-8.1,-7.9,-6.7,-9.7).lineTo(-6.3,-10.2).curveTo(-6.3,-10.3,-6.3,-10.3).curveTo(-6.2,-10.3,-6.2,-10.4).curveTo(-6.2,-10.4,-6.1,-10.4).curveTo(-6,-10.4,-6,-10.4).curveTo(-5.4,-10.5,-3.7,-9.3).lineTo(-1.4,-7.6).curveTo(6.6,-3.1,9.3,-1.8).curveTo(14.4,0.7,12.5,6).curveTo(11,10.4,7,10.4).curveTo(6.1,10.4,5.1,10.2).closePath();
	this.shape_2.setTransform(-10.2,10.9,0.335,0.335,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-6.1,24.4,20.6);


(lib.cisternagota = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FAFAFA").beginStroke().moveTo(-1.3,2.2).curveTo(-1.8,1.7,-1.8,0.9).curveTo(-1.8,0.3,-0.9,-1.3).lineTo(0,-2.7).lineTo(0.9,-1.3).curveTo(1.8,0.3,1.8,0.9).curveTo(1.8,1.7,1.3,2.2).curveTo(0.8,2.7,0,2.7).curveTo(-0.8,2.7,-1.3,2.2).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-2.7,3.7,5.5);


(lib.cisternaespiga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#4F4F4F").setStrokeStyle(3,0,0,4).moveTo(0,-43.5).lineTo(0,43.5);
	this.shape.setTransform(0,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.2,-3.9,0.6).curveTo(-3.5,-1,-2.2,-2.2).curveTo(-1,-3.5,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.6).curveTo(3.5,1,2.3,2.3).curveTo(1,3.5,-0.6,3.9).curveTo(-1.5,4.1,-2.3,4.1).curveTo(-3.1,4.1,-3.9,3.9).closePath();
	this.shape_1.setTransform(4.3,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.5,-2.3,2.3).curveTo(-3.4,1,-3.9,-0.6).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.5,2.2,-2.2).curveTo(3.4,-1,3.9,0.6).curveTo(4.3,2.2,3.9,3.9).curveTo(3.1,4.1,2.3,4.1).curveTo(1.5,4.1,0.7,3.9).closePath();
	this.shape_2.setTransform(-4.3,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.3,-3.9,0.7).curveTo(-3.5,-1,-2.2,-2.3).curveTo(-1,-3.5,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.7).curveTo(3.5,1,2.3,2.2).curveTo(1,3.5,-0.6,3.9).curveTo(-1.5,4.1,-2.3,4.1).curveTo(-3.1,4.1,-3.9,3.9).closePath();
	this.shape_3.setTransform(4.3,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.5,-2.3,2.2).curveTo(-3.4,1,-3.9,-0.7).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.5,2.2,-2.3).curveTo(3.4,-1,3.9,0.7).curveTo(4.3,2.3,3.9,3.9).curveTo(3.1,4.1,2.3,4.1).curveTo(1.5,4.1,0.7,3.9).closePath();
	this.shape_4.setTransform(-4.3,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.3,-3.9,0.7).curveTo(-3.5,-1,-2.2,-2.2).curveTo(-1,-3.5,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.6).curveTo(3.5,1,2.3,2.3).curveTo(1,3.5,-0.6,3.9).curveTo(-1.5,4.1,-2.3,4.1).curveTo(-3.1,4.1,-3.9,3.9).closePath();
	this.shape_5.setTransform(4.3,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.5,-2.3,2.3).curveTo(-3.4,1,-3.9,-0.6).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.5,2.2,-2.2).curveTo(3.4,-1,3.9,0.7).curveTo(4.3,2.3,3.9,3.9).curveTo(3.1,4.1,2.3,4.1).curveTo(1.5,4.1,0.7,3.9).closePath();
	this.shape_6.setTransform(-4.3,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.3,-3.9,0.7).curveTo(-3.5,-1.1,-2.2,-2.3).curveTo(-1,-3.5,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.7).curveTo(3.5,1,2.3,2.2).curveTo(1,3.4,-0.6,3.9).curveTo(-1.5,4.1,-2.3,4.1).curveTo(-3.1,4.1,-3.9,3.9).closePath();
	this.shape_7.setTransform(4.3,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.4,-2.3,2.2).curveTo(-3.4,1,-3.9,-0.7).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.5,2.2,-2.3).curveTo(3.4,-1.1,3.9,0.7).curveTo(4.3,2.3,3.9,3.9).curveTo(3.1,4.1,2.3,4.1).curveTo(1.5,4.1,0.7,3.9).closePath();
	this.shape_8.setTransform(-4.3,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.3,-3.9,0.7).curveTo(-3.5,-1,-2.2,-2.2).curveTo(-1,-3.5,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.6).curveTo(3.5,1,2.3,2.3).curveTo(1,3.5,-0.6,3.9).curveTo(-1.5,4.1,-2.3,4.1).curveTo(-3.1,4.1,-3.9,3.9).closePath();
	this.shape_9.setTransform(4.3,-7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.5,-2.3,2.3).curveTo(-3.4,1,-3.9,-0.6).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.5,2.2,-2.2).curveTo(3.4,-1,3.9,0.7).curveTo(4.3,2.3,3.9,3.9).curveTo(3.1,4.1,2.3,4.1).curveTo(1.5,4.1,0.7,3.9).closePath();
	this.shape_10.setTransform(-4.3,-7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.3,-3.9,0.7).curveTo(-3.5,-1.1,-2.2,-2.2).curveTo(-1,-3.4,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.7).curveTo(3.5,1.1,2.3,2.3).curveTo(1,3.4,-0.6,3.9).curveTo(-1.5,4.1,-2.3,4.1).curveTo(-3.1,4.1,-3.9,3.9).closePath();
	this.shape_11.setTransform(4.3,-15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.4,-2.3,2.3).curveTo(-3.4,1.1,-3.9,-0.7).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.4,2.2,-2.2).curveTo(3.4,-1.1,3.9,0.7).curveTo(4.3,2.3,3.9,3.9).curveTo(3.1,4.1,2.3,4.1).curveTo(1.5,4.1,0.7,3.9).closePath();
	this.shape_12.setTransform(-4.3,-15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.3,-3.9,0.7).curveTo(-3.5,-1,-2.2,-2.3).curveTo(-1,-3.5,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.7).curveTo(3.5,1,2.3,2.3).curveTo(1,3.5,-0.6,3.9).curveTo(-1.4,4.1,-2.2,4.1).curveTo(-3,4.1,-3.9,3.9).closePath();
	this.shape_13.setTransform(4.3,-23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.5,-2.3,2.3).curveTo(-3.4,1,-3.9,-0.7).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.5,2.2,-2.3).curveTo(3.4,-1,3.9,0.7).curveTo(4.3,2.3,3.9,3.9).curveTo(3,4.1,2.2,4.1).curveTo(1.4,4.1,0.7,3.9).closePath();
	this.shape_14.setTransform(-4.3,-23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#545454").beginStroke().moveTo(-3.9,3.9).curveTo(-4.3,2.2,-3.9,0.6).curveTo(-3.5,-1,-2.2,-2.2).curveTo(-1,-3.4,0.7,-3.9).curveTo(2.3,-4.3,3.9,-3.9).curveTo(4.3,-2.3,3.9,-0.6).curveTo(3.5,1.1,2.3,2.3).curveTo(1,3.5,-0.6,3.9).curveTo(-1.5,4.1,-2.3,4.1).curveTo(-3.1,4.1,-3.9,3.9).closePath();
	this.shape_15.setTransform(4.3,-32.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#545454").beginStroke().moveTo(0.7,3.9).curveTo(-1.1,3.5,-2.3,2.3).curveTo(-3.4,1.1,-3.9,-0.6).curveTo(-4.3,-2.3,-3.9,-3.9).curveTo(-2.3,-4.3,-0.7,-3.9).curveTo(1.1,-3.4,2.2,-2.2).curveTo(3.4,-1,3.9,0.6).curveTo(4.3,2.2,3.9,3.9).curveTo(3.1,4.1,2.3,4.1).curveTo(1.5,4.1,0.7,3.9).closePath();
	this.shape_16.setTransform(-4.3,-32.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#545454").beginStroke().moveTo(-2.3,3.2).curveTo(-3.2,1.8,-3.2,0).curveTo(-3.2,-1.7,-2.3,-3.2).curveTo(-1.4,-4.7,0,-5.5).curveTo(1.5,-4.7,2.3,-3.2).curveTo(3.2,-1.7,3.2,0).curveTo(3.2,1.8,2.3,3.2).curveTo(1.5,4.7,0,5.5).curveTo(-1.4,4.7,-2.3,3.2).closePath();
	this.shape_17.setTransform(0,-40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-46.2,16.9,94.1);


(lib.cisternabodyrock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-3,5.3).curveTo(-4.3,4,-4.3,2.2).lineTo(-4.3,-2.2).curveTo(-4.3,-4,-3,-5.3).curveTo(-1.8,-6.5,-0,-6.5).curveTo(1.8,-6.5,3,-5.3).curveTo(4.3,-4,4.3,-2.2).lineTo(4.3,2.2).curveTo(4.3,4,3,5.3).curveTo(1.8,6.5,-0,6.5).curveTo(-1.8,6.5,-3,5.3).closePath();
	this.shape.setTransform(2.9,-18.4,0.335,0.335,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-4.1,30.5).curveTo(-12.2,30.1,-18.3,22.3).curveTo(-24,15,-25.5,4.5).curveTo(-27.2,-6.3,-23.5,-15.1).curveTo(-19.3,-24.9,-9.6,-28.8).curveTo(-6.8,-30.1,-1.3,-30.4).curveTo(5,-30.8,10.7,-29.6).curveTo(26.1,-26.3,26.1,-13.1).curveTo(26.1,-11.3,24.7,-10).curveTo(22.1,-7.7,15.9,-7.4).curveTo(14.8,-7.3,4.5,-7.4).curveTo(-2.3,-7.5,-2.7,11.6).curveTo(-2.9,16.4,-2.8,24.7).curveTo(-3,30.5,-4.1,30.5).lineTo(-4.1,30.5).closePath();
	this.shape_1.setTransform(1.5,-23.3,0.335,0.335,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-1.1,26.7).curveTo(-9.9,23.6,-13.3,21.2).curveTo(-18.4,17.6,-18.4,12).lineTo(-18.4,-16.5).curveTo(-18.8,-17.7,-18.9,-18.7).curveTo(-19,-20.6,-17.7,-22).curveTo(-13.5,-26.6,5,-27.3).curveTo(7.8,-27.4,10.3,-22.7).curveTo(12.5,-18.6,12.6,-15.1).lineTo(12.6,-5.6).curveTo(16,-0.2,18.8,7.5).curveTo(19.1,8.4,18.6,9.1).curveTo(18.1,9.8,17.2,9.8).lineTo(12.6,9.8).lineTo(12.6,17).curveTo(12.6,22.3,8.2,25.4).curveTo(5.5,27.3,2.5,27.3).curveTo(0.7,27.3,-1.1,26.7).closePath();
	this.shape_2.setTransform(-3.2,-18.6,0.335,0.335,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#383643").beginStroke().moveTo(-29.8,61.6).lineTo(-29.8,-15.7).curveTo(-29.8,-32.9,-23.3,-47.5).curveTo(-16.4,-62.9,-7.1,-62.9).lineTo(11.5,-57.7).curveTo(15.7,-52.2,22.9,-28.9).curveTo(29.6,-6.9,29.8,-1.1).lineTo(26.9,5.3).lineTo(27.7,61.6).curveTo(27.7,62.9,-1,62.9).curveTo(-29.8,62.9,-29.8,61.6).closePath();
	this.shape_3.setTransform(0.8,12.4,0.335,0.335,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DBDDDE").beginStroke().moveTo(-3.3,9.3).lineTo(-3.3,-5.5).lineTo(3.3,-9.3).lineTo(3.3,9.3).closePath();
	this.shape_4.setTransform(0.1,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-33.5,20.4,67);


(lib.cisternaaspas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,5.8).curveTo(-5,4.7,-6,2.3).curveTo(-6.9,-0.2,-5.8,-2.6).curveTo(-4.7,-5,-2.3,-6).curveTo(0.2,-6.9,2.6,-5.8).curveTo(5,-4.7,6,-2.3).curveTo(6.9,0.2,5.8,2.6).curveTo(4.8,5,2.3,6).curveTo(1.1,6.4,-0,6.4).curveTo(-1.3,6.4,-2.6,5.8).closePath();
	this.shape.setTransform(0.2,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-29.3,22.4).lineTo(14,-28.5).lineTo(29.3,-12.5).lineTo(-23.4,28.5).closePath();
	this.shape_1.setTransform(26.4,-26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-28.5,-23.4).lineTo(-22.3,-29.3).lineTo(28.5,14).lineTo(12.5,29.3).closePath();
	this.shape_2.setTransform(28.4,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-29.3,12.5).lineTo(23.4,-28.5).lineTo(29.3,-22.4).lineTo(-14,28.5).closePath();
	this.shape_3.setTransform(-27.6,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-28.5,-14).lineTo(-12.5,-29.3).lineTo(28.5,23.5).lineTo(22.3,29.3).closePath();
	this.shape_4.setTransform(-23.6,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-56.3,113.8,112.6);


(lib.cisternapersona = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cisternahandss();
	this.instance.parent = this;
	this.instance.setTransform(1.1,-23.9,1.437,1.437,30);

	this.instance_1 = new lib.cisternabodyrock();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.7,-26.5);

	this.instance_2 = new lib.cisternalegs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.9,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-60,45.8,120.1);


(lib.cisternaconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.cisternahandss();
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
p.nominalBounds = new cjs.Rectangle(-36.1,-33.5,59.5,67);


(lib.cisternacamion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,10.8).curveTo(-8,10.8,-10.3,9.1).curveTo(-11.5,8.3,-12.1,6.3).lineTo(-12.4,4.3).lineTo(-12.4,-9.6).lineTo(-12.3,-10.1).curveTo(-12,-10.7,-11.2,-10.8).lineTo(-6.6,-10.8).curveTo(-5.7,-10.8,-5.5,-10.1).curveTo(-5.3,-9.8,-5.4,-9.5).lineTo(-5.4,1.8).curveTo(-5.4,4,-5,4.6).curveTo(-4,5.9,-0.2,5.9).curveTo(3.5,6.1,4.7,4.5).curveTo(5.2,3.7,5.2,1.8).lineTo(5.2,-9.4).curveTo(5.2,-9.8,5.3,-10.1).curveTo(5.5,-10.8,6.3,-10.8).lineTo(11,-10.8).curveTo(12,-10.8,12.3,-10.1).curveTo(12.4,-9.8,12.4,-9.4).lineTo(12.4,3.4).curveTo(12.5,6,11.1,8.1).curveTo(10.3,9.6,7.5,10.4).lineTo(5,10.8).closePath();
	this.shape.setTransform(106.1,-41.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,10.8).curveTo(-8,10.8,-10.3,9.1).curveTo(-11.5,8.3,-12.1,6.3).lineTo(-12.4,4.3).lineTo(-12.4,-9.6).lineTo(-12.3,-10.1).curveTo(-12,-10.7,-11.2,-10.8).lineTo(-6.6,-10.8).curveTo(-5.7,-10.8,-5.5,-10.1).curveTo(-5.3,-9.8,-5.4,-9.5).lineTo(-5.4,1.8).curveTo(-5.4,4,-5,4.6).curveTo(-4,5.9,-0.2,5.9).curveTo(3.6,6.1,4.7,4.5).curveTo(5.2,3.7,5.2,1.8).lineTo(5.2,-9.4).curveTo(5.2,-9.8,5.3,-10.1).curveTo(5.5,-10.8,6.3,-10.8).lineTo(11,-10.8).curveTo(12,-10.8,12.3,-10.1).curveTo(12.4,-9.8,12.4,-9.4).lineTo(12.4,3.4).curveTo(12.5,6,11.2,8.1).curveTo(10.3,9.6,7.6,10.4).lineTo(5,10.8).closePath();
	this.shape_1.setTransform(47.8,-41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DF1421").beginStroke().moveTo(-7.3,10.8).curveTo(-10.7,10.8,-12.2,8.5).lineTo(-13,6.2).curveTo(-13.1,5.3,-12.9,4.1).curveTo(-12.3,1.8,-10.2,0.8).curveTo(-6.8,-0.6,4.8,-4.7).curveTo(5.4,-4.8,5.4,-5.3).curveTo(5.4,-5.7,4.4,-5.9).curveTo(3.3,-6.1,-4.1,-6).lineTo(-11.3,-5.9).curveTo(-12.4,-5.8,-12.4,-7.1).lineTo(-12.4,-9.6).curveTo(-12.3,-10.5,-11.6,-10.7).lineTo(-10.9,-10.8).lineTo(-4.2,-10.8).lineTo(7,-10.7).curveTo(10.8,-10.5,12.3,-8.3).curveTo(13,-7.2,13,-6.1).lineTo(12.8,-3.8).curveTo(12.2,-1.3,9.9,-0.4).curveTo(-0.9,3.1,-3.9,4.5).curveTo(-5.7,5.2,-5.4,5.6).curveTo(-5.1,5.9,-4.1,5.9).lineTo(11.6,6).curveTo(12.5,6.1,12.5,6.9).lineTo(12.5,9.5).curveTo(12.5,10.4,11.9,10.7).lineTo(11.2,10.8).closePath();
	this.shape_2.setTransform(77.4,-41.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-11.9,10.7).curveTo(-12.5,10.4,-12.6,9.5).lineTo(-12.6,6.9).curveTo(-12.5,6.1,-11.7,6).curveTo(-11.2,5.9,-10.8,5.9).lineTo(4.1,5.9).curveTo(5.1,5.9,5.3,5.6).curveTo(5.7,5.2,3.9,4.5).curveTo(2.1,3.7,-2.8,2.1).lineTo(-9.9,-0.4).curveTo(-12.2,-1.3,-12.8,-3.8).lineTo(-13,-6.1).lineTo(-12.3,-8.3).curveTo(-10.8,-10.5,-7,-10.7).curveTo(-0.9,-10.9,10.8,-10.7).lineTo(11.5,-10.7).curveTo(12.3,-10.5,12.4,-9.6).lineTo(12.4,-7).curveTo(12.4,-5.8,11.3,-5.9).curveTo(-2.7,-6.2,-4.5,-5.9).curveTo(-5.5,-5.7,-5.4,-5.2).curveTo(-5.4,-4.8,-4.8,-4.6).lineTo(1.6,-2.4).curveTo(8.1,-0.1,10.1,0.9).curveTo(12.3,1.8,12.8,4.1).curveTo(13.2,5.3,13,6.2).curveTo(13,7.4,12.2,8.5).curveTo(10.7,10.8,7.3,10.8).lineTo(-11.2,10.8).lineTo(-11.4,10.8).lineTo(-11.9,10.7).closePath();
	this.shape_3.setTransform(18.5,-41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(2.5,10.9).lineTo(-2.3,10.9).curveTo(-3.3,10.9,-3.5,10.2).lineTo(-3.6,9.6).lineTo(-3.6,-9.8).curveTo(-3.6,-10.6,-2.9,-10.8).lineTo(-2.2,-10.9).lineTo(2.5,-10.9).lineTo(3,-10.8).curveTo(3.6,-10.5,3.6,-9.8).lineTo(3.6,9.7).curveTo(3.6,10.9,2.7,10.9).lineTo(2.5,10.9).closePath();
	this.shape_4.setTransform(-2.3,-41.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.5,1.9,1.9).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_5.setTransform(-100.4,10.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.5,1.9,1.9).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_6.setTransform(-124.6,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.5).curveTo(-5.5,2.1,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).curveTo(-2.8,-0.3,2,-2).curveTo(2.1,-2,2.1,-2).curveTo(2.2,-2,2.2,-2.1).curveTo(2.3,-2.1,2.3,-2.1).curveTo(2.3,-2.2,2.3,-2.2).curveTo(2.3,-2.3,2.3,-2.3).curveTo(2.2,-2.3,2.2,-2.4).curveTo(2.1,-2.4,2.1,-2.4).curveTo(2,-2.4,1.9,-2.5).curveTo(1.4,-2.6,-1.7,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.5,-5.2,-3).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).lineTo(5.4,-1.6).curveTo(5.1,-0.6,4.1,-0.2).curveTo(-0.3,1.3,-1.6,1.8).curveTo(-2.3,2.1,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.8).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_7.setTransform(-112.4,10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.5).lineTo(1.7,2.5).curveTo(2.1,2.5,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.3,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.4).curveTo(-0.3,-4.5,4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.4).lineTo(1.7,-2.5).curveTo(-1.4,-2.5,-1.8,-2.4).curveTo(-1.9,-2.4,-2,-2.4).curveTo(-2.1,-2.4,-2.2,-2.4).curveTo(-2.2,-2.3,-2.2,-2.3).curveTo(-2.2,-2.2,-2.2,-2.2).curveTo(-2.2,-2.2,-2.2,-2.1).curveTo(-2.2,-2.1,-2.2,-2.1).curveTo(-2.1,-2,-2.1,-2).curveTo(-2.1,-2,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.6).curveTo(4.5,4.5,3.1,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_8.setTransform(-136.9,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.2,-1.5,-4.2).curveTo(-1.4,-4.3,-1.4,-4.3).curveTo(-1.4,-4.4,-1.3,-4.4).curveTo(-1.3,-4.5,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.4,1.4,-4.4).curveTo(1.4,-4.3,1.4,-4.3).curveTo(1.5,-4.2,1.5,-4.2).curveTo(1.5,-4.1,1.5,-4).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_9.setTransform(-145.5,10.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("#1D1D1B").setStrokeStyle(0.3,0,0,4).moveTo(3.1,-0.2).lineTo(-3.1,0.2);
	this.shape_10.setTransform(-54.3,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-10.3,-5.4).lineTo(10.1,-5.9).lineTo(10.4,5.4).lineTo(-10.1,5.9).closePath();
	this.shape_11.setTransform(137.1,-53.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-78.6,12.5).curveTo(-82.5,12.3,-83.1,12).curveTo(-84.4,11.4,-84.6,8.1).curveTo(-84.9,5.2,-85,1.7).lineTo(-85.1,-2.9).curveTo(-85.2,-5.2,-84.1,-6.1).curveTo(-83,-7,-79.9,-7.1).curveTo(68.7,-12.5,75.2,-12.5).curveTo(81.3,-12.5,82.5,-12.1).curveTo(84.8,-11.2,84.8,-7.3).lineTo(85,-2.8).curveTo(85.1,0.1,85.1,1.3).curveTo(84.9,5.6,83.6,5.6).lineTo(78.4,5.8).curveTo(75.2,5.8,75.3,4).curveTo(75.3,2.1,78.7,2.1).curveTo(80.5,1.9,80.7,0.6).curveTo(80.9,-0.2,80.8,-2).lineTo(80.7,-4.5).curveTo(80.8,-5.9,80.1,-6.5).curveTo(79.4,-7.1,77.4,-7.1).curveTo(73.5,-7.1,1.2,-4.6).curveTo(-72.5,-2,-76.8,-1.6).curveTo(-78.5,-1.5,-79,-0.3).curveTo(-79.4,0.6,-79.2,2.9).curveTo(-79,5.7,-78.9,6.2).curveTo(-78.5,7.3,-77,7.3).curveTo(-75.1,7.3,-75.4,10).curveTo(-75.6,12.5,-78.3,12.5).lineTo(-78.6,12.5).closePath();
	this.shape_12.setTransform(65.8,-9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-2.8,0.1).curveTo(-5.1,-1.2,-4.5,-4.4).curveTo(-3.9,-7.7,-0.7,-7.7).curveTo(3.4,-7.8,4.3,-4.2).curveTo(5.2,-0.9,3.1,-0.1).lineTo(3.4,7.3).lineTo(-3.1,7.8).closePath();
	this.shape_13.setTransform(46.6,19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-2.3,33.6).curveTo(-5.3,32.3,-6.9,27.6).curveTo(-7.6,25.5,-8,23.4).lineTo(-8.3,21.7).lineTo(-4.8,21.2).lineTo(-4.1,24.4).curveTo(-3.4,27.8,-3,28.9).curveTo(-2.5,30.5,1.3,31.1).curveTo(2.8,31.2,3.4,31.2).lineTo(5.4,30.8).curveTo(8.2,30.2,8.7,29.9).curveTo(10.2,28.7,10.2,24.1).curveTo(10.2,18.8,9.1,-1.5).curveTo(7.9,-21.9,7.4,-25.4).curveTo(6.9,-28.8,5.2,-30.1).curveTo(3.7,-31.2,0.8,-31.2).curveTo(-4.3,-31.2,-6.1,-31.1).curveTo(-7.4,-31,-8.7,-29.6).curveTo(-10.1,-28.2,-10,-26.7).curveTo(-9.8,-24.7,-9.8,-21.2).lineTo(-13.3,-21.6).lineTo(-13.3,-26.7).curveTo(-13.3,-28.8,-11.8,-31.1).curveTo(-9.8,-34,-6.6,-34.1).lineTo(0.8,-34.3).curveTo(4.9,-34.3,6.8,-33.2).curveTo(10.4,-31.3,10.7,-25.3).curveTo(11.2,-17.9,12.2,0.4).curveTo(13.2,19.3,13.3,23).curveTo(13.5,28.1,12.5,30.3).curveTo(11,34,6.1,34.2).lineTo(3.1,34.3).curveTo(-0.6,34.3,-2.3,33.6).closePath();
	this.shape_14.setTransform(155.2,-36);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-7.8,5.4).curveTo(-7.9,3.1,-6.7,3).curveTo(-5.7,2.8,-5.4,2.3).lineTo(-5.1,0.7).curveTo(-5,-0.2,-4.9,-3.8).lineTo(-4.9,-7.2).lineTo(-0.7,-7.6).lineTo(-0.6,0.5).curveTo(-0.5,1.7,-0.3,2).curveTo(0.1,2.5,1.3,2.5).lineTo(5.8,2.6).curveTo(7.9,2.6,7.8,4.9).curveTo(7.8,7.1,6.1,7.2).lineTo(-5.8,7.5).lineTo(-5.9,7.6).curveTo(-7.6,7.6,-7.8,5.4).closePath();
	this.shape_15.setTransform(18.6,-6.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-24,2.6).curveTo(-24.7,1.9,-24.7,0.9).curveTo(-24.8,-0.1,-24.2,-0.8).curveTo(-23.5,-1.5,-22.6,-1.6).lineTo(22.4,-3.2).curveTo(23.4,-3.2,24,-2.6).curveTo(24.7,-1.9,24.7,-0.9).curveTo(24.8,0.1,24.2,0.8).curveTo(23.5,1.5,22.6,1.6).lineTo(-22.4,3.2).lineTo(-22.6,3.2).curveTo(-23.4,3.2,-24,2.6).closePath();
	this.shape_16.setTransform(110.2,-4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-24,2.6).curveTo(-24.7,1.9,-24.7,0.9).curveTo(-24.8,-0.1,-24.1,-0.9).curveTo(-23.5,-1.6,-22.6,-1.6).lineTo(22.4,-3.2).curveTo(23.4,-3.3,24.1,-2.6).curveTo(24.7,-1.9,24.8,-0.9).curveTo(24.8,0.1,24.1,0.8).curveTo(23.5,1.5,22.6,1.6).lineTo(-22.4,3.2).lineTo(-22.7,3.2).curveTo(-23.4,3.2,-24,2.6).closePath();
	this.shape_17.setTransform(54.4,-2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-7.1,2).curveTo(-7.8,1.3,-7.9,0.3).curveTo(-7.9,-0.7,-7.3,-1.4).curveTo(-6.7,-2.1,-5.7,-2.2).lineTo(5.6,-2.6).curveTo(6.5,-2.6,7.2,-2).curveTo(7.8,-1.3,7.9,-0.3).curveTo(7.9,0.7,7.3,1.4).curveTo(6.7,2.2,5.7,2.2).lineTo(-5.5,2.6).lineTo(-5.6,2.6).curveTo(-6.5,2.6,-7.1,2).closePath();
	this.shape_18.setTransform(1.2,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-79.5,1.7).lineTo(79.4,-3.7).lineTo(79.5,-1.7).lineTo(-79.4,3.7).closePath();
	this.shape_19.setTransform(67.4,-3.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#1D1D1B").setStrokeStyle(0.3,0,0,4).moveTo(-1.9,2.2).lineTo(1.9,-2.2);
	this.shape_20.setTransform(147.9,-18.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-85.5,-9.3).lineTo(84.7,-14.7).lineTo(85.5,9.4).lineTo(52.1,10.4).curveTo(52,9.7,50.6,8.5).curveTo(49.1,7.4,48.7,6.9).curveTo(37.3,-5.1,20.9,-4.3).curveTo(17.2,-4,14.6,-3.4).curveTo(13,-2.9,8.6,-1.2).curveTo(3.5,0.6,-2.2,6.1).curveTo(-7.2,10.9,-7.5,12.3).lineTo(-84.7,14.8).closePath();
	this.shape_21.setTransform(67.5,14.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-87.5,-8.5).lineTo(87,-12.8).lineTo(87.4,8.5).lineTo(-86.9,12.8).closePath();
	this.shape_22.setTransform(64.5,-57);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-2.6,2.6).curveTo(-3.7,1.5,-3.7,0).curveTo(-3.7,-1.5,-2.6,-2.6).curveTo(-1.6,-3.7,-0,-3.7).curveTo(1.6,-3.7,2.6,-2.6).curveTo(3.7,-1.5,3.7,0).curveTo(3.7,1.5,2.6,2.6).curveTo(1.6,3.7,-0,3.7).curveTo(-1.6,3.7,-2.6,2.6).closePath();
	this.shape_23.setTransform(-30.7,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-4.1,4.1).curveTo(-5.8,2.4,-5.8,0).curveTo(-5.8,-2.4,-4.1,-4.1).curveTo(-2.4,-5.8,0,-5.8).curveTo(2.4,-5.8,4.1,-4.1).curveTo(5.8,-2.4,5.8,0).curveTo(5.8,2.4,4.1,4.1).curveTo(2.4,5.8,0,5.8).curveTo(-2.4,5.8,-4.1,4.1).closePath();
	this.shape_24.setTransform(-30.8,23.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19.2,-7.4).lineTo(19,-8.5).lineTo(19.3,7.4).lineTo(-19.1,8.5).closePath();
	this.shape_25.setTransform(-31.3,21.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.3,-2.5).lineTo(11.2,-3).lineTo(11.3,2.5).lineTo(-11.2,3).closePath();
	this.shape_26.setTransform(-39.2,12.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-7.9,-4.3).lineTo(7.8,-4.6).lineTo(7.9,4.3).lineTo(-7.8,4.6).closePath();
	this.shape_27.setTransform(-36.1,5.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#999999").beginStroke().moveTo(-7.3,19.4).lineTo(-8.9,-19.1).lineTo(-6.7,-22.6).lineTo(5,-23).lineTo(7.4,-19.1).lineTo(8.9,18.8).lineTo(7.3,22.4).lineTo(-4.9,23).closePath();
	this.shape_28.setTransform(-35.7,-20.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,6.6).curveTo(-3,5.7,-3,4.4).lineTo(-3,-4.5).curveTo(-3,-5.7,-2.1,-6.6).curveTo(-1.3,-7.5,-0,-7.5).curveTo(1.2,-7.5,2.1,-6.6).curveTo(3,-5.7,3,-4.5).lineTo(3,4.4).curveTo(3,5.7,2.1,6.6).curveTo(1.2,7.4,-0,7.5).curveTo(-1.3,7.4,-2.1,6.6).closePath();
	this.shape_29.setTransform(-54.1,15.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-0,40.6).curveTo(0.2,35.1,0.1,29.3).curveTo(0.1,17.6,-0.8,15.7).curveTo(-1.8,13.7,-2.1,11).lineTo(-2.6,4).curveTo(-3.5,-17.7,-2.8,-21.5).curveTo(-2.4,-23.9,-3.2,-32.4).curveTo(-4,-41.1,-3.9,-42.3).curveTo(-3.6,-44.7,-1.5,-44.8).curveTo(0.5,-45,0.4,-42.2).lineTo(1.4,-32.3).curveTo(2.2,-24.4,1.3,-20.6).curveTo(0.2,-16.3,0.9,-5.1).curveTo(1.5,4.8,2.4,8.1).curveTo(2.6,8.8,2.8,11.3).curveTo(3,13.8,3.5,15.7).curveTo(4.2,18.3,3.5,44.8).closePath();
	this.shape_30.setTransform(-56.4,-15.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-9,6.4).lineTo(-6.4,6.6).curveTo(-3.3,6.7,-0.8,6.4).curveTo(3,5.8,4.1,5.1).curveTo(5.9,3.9,6,0.1).curveTo(6.1,-3.3,7.3,-7.2).lineTo(8.5,-10.4).curveTo(9.1,-2.1,9,0.7).curveTo(9,3.7,7.7,5.9).curveTo(5.7,9.6,1.1,9.8).lineTo(-6.6,10.2).lineTo(-9,10.4).closePath();
	this.shape_31.setTransform(159.5,-1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-4.4,2.3).lineTo(-4.4,-2.3).lineTo(4.4,-2.3).lineTo(4.4,2.3).closePath();
	this.shape_32.setTransform(154.8,21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-1.5,1.8).curveTo(-2.3,1,-2.3,0).curveTo(-2.3,-1,-1.5,-1.7).curveTo(-0.8,-2.5,0.2,-2.5).curveTo(1.1,-2.5,2.2,-1.8).curveTo(2.8,-1.4,0.2,2.5).curveTo(-0.8,2.5,-1.5,1.8).closePath();
	this.shape_33.setTransform(163.2,2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-89.9,18.9).curveTo(-90.3,14.7,-91.1,0.2).curveTo(-91.6,-10.2,-90.6,-18.5).curveTo(-89.4,-29.1,-85.9,-32.7).lineTo(86.4,-34.5).curveTo(88.4,-31.4,89.9,-21.6).curveTo(91.4,-12.1,91.3,-3.4).curveTo(91.2,7.9,90.4,17.5).curveTo(89.2,30.2,87,33.5).lineTo(-86.1,34.5).curveTo(-88.7,29.9,-89.9,18.9).closePath();
	this.shape_34.setTransform(65.1,-24.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-6.2,2.7).curveTo(-7.3,1.5,-5.9,-0.5).curveTo(-4.7,-2.3,-1,-2.9).curveTo(-0.1,-3,6.2,-3.3).curveTo(6.8,-2.7,6.6,-2).curveTo(6,-0.6,1.7,-0.5).curveTo(-1.5,-0.4,-2.7,0.5).curveTo(-3.1,0.8,-4.2,2.6).curveTo(-4.6,3.3,-5.2,3.3).curveTo(-5.6,3.3,-6.2,2.7).closePath();
	this.shape_35.setTransform(-27.2,-50);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,-16.5).lineTo(4.5,-20.7).lineTo(4.8,20.6).lineTo(-4.8,20.7).closePath();
	this.shape_36.setTransform(-45.7,-9.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_37.setTransform(-88.2,50.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_38.setTransform(91.5,51.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#969696").beginStroke().moveTo(70.9,31.4).curveTo(64.5,29.2,60.4,29).curveTo(48.5,31.3,35.5,33.5).curveTo(9.4,37.9,3.9,37.5).curveTo(-12.7,36.4,-31.7,35.9).lineTo(-47.3,35.6).curveTo(-48.2,31.5,-49.5,31.2).curveTo(-55.4,30.3,-55.9,30.1).curveTo(-56.9,29.9,-58.2,28.2).lineTo(-59.4,26.5).lineTo(-65.4,25.8).lineTo(-66.1,27.7).curveTo(-67,29.6,-68.2,29.7).curveTo(-70.6,29.7,-72.1,28.5).lineTo(-73,27.4).lineTo(-77.5,34.6).lineTo(-107.9,33.8).lineTo(-112.2,38).lineTo(-117.7,38.1).lineTo(-119.2,35.7).lineTo(-108.1,-40).lineTo(-109.4,-6.6).lineTo(-107.9,1.6).lineTo(-101.6,2).lineTo(-98.8,-1.6).lineTo(81.7,5.1).lineTo(99.1,8.1).lineTo(109,8.5).lineTo(110.6,9.7).lineTo(119.2,10.4).lineTo(118.7,19).curveTo(113.4,17.7,99.5,18.7).lineTo(86.8,19.8).curveTo(83.9,24.6,81.8,25.1).curveTo(80.7,25.5,76.7,24.7).lineTo(72.9,23.9).lineTo(72.4,39.6).lineTo(71,40).closePath().moveTo(65.5,24.1).lineTo(70.6,24.5).lineTo(70.6,21.4).lineTo(67,21.4).closePath().moveTo(-63,23.4).lineTo(-38.3,24.4).lineTo(-37.8,11.9).lineTo(-62.5,10.9).closePath().moveTo(-62.9,8.2).curveTo(-62.9,9.1,-61.9,9.2).lineTo(-38.2,10.1).curveTo(-37.8,10.2,-37.5,9.9).curveTo(-37.2,9.6,-37.2,9.2).curveTo(-37.2,8.8,-37.4,8.5).curveTo(-37.8,8.2,-38.2,8.2).lineTo(-61.9,7.3).curveTo(-62.8,7.3,-62.9,8.2).closePath();
	this.shape_39.setTransform(48.5,7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.9).curveTo(-22.4,1.1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3.1,-4.6).curveTo(20.8,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20.1,-4.2).curveTo(17.9,-4.4,16.4,-4.3).lineTo(-3.9,-1.8).curveTo(-9.8,-1.1,-18.5,-0.5).lineTo(-20.2,1.1).curveTo(-20.6,1.7,-20.7,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.9).closePath();
	this.shape_40.setTransform(-125.3,-65.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.6).lineTo(-3.4,1.9).closePath();
	this.shape_41.setTransform(-99.1,-71.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.2,13.6).lineTo(-1.2,10.7).curveTo(-1.2,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-13.8,-1,-13.9).curveTo(-0.6,-14,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.3).lineTo(1.3,9.3).curveTo(1.3,10,0.7,10.6).lineTo(0.7,13.4).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_42.setTransform(-145.8,-20.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.3).curveTo(-2.9,0.6,-2,-0).closePath();
	this.shape_43.setTransform(-145.7,1.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.6).curveTo(2.9,0.3,0.1,0.5).lineTo(-0.8,0.6).curveTo(-2.1,0.6,-3,0.3).closePath();
	this.shape_44.setTransform(-145.9,-6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#999999").beginStroke().moveTo(-3.1,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.7,-4.6).lineTo(-3.1,-4.9).curveTo(1.8,-6.4,2.4,-6.7).curveTo(2.9,-6.9,3.3,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.3).curveTo(4.2,3.9,3.2,4.5).curveTo(0.9,5.7,-1.4,6.5).curveTo(-2.1,6.8,-2.6,6.8).lineTo(-3.1,6.7).closePath();
	this.shape_45.setTransform(-145.9,-3.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.6,-12.9,0.9,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.7,6.2,1.1,10.8).curveTo(1,11.9,0.4,12.9).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_46.setTransform(-141.6,-46.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.4).lineTo(0.1,14).lineTo(-2.1,13.7).curveTo(-3.7,13.6,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-7.1,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.4).closePath();
	this.shape_47.setTransform(-142.8,-46.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.4,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.7,-2.6,-1.4,-2.9).curveTo(-1.1,-3.2,1.5,-6.2).lineTo(2.1,-6).lineTo(3.3,-6.2).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1,4.2).lineTo(-0.4,4.3).lineTo(-0.4,4.6).curveTo(-0.4,5.1,-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_48.setTransform(-164.3,-21);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-4).curveTo(0.4,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.1,-25,7.8,-20.6).lineTo(4.7,-10.7).curveTo(2.1,-2.3,1,1.8).curveTo(-0,5.7,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.3,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-4).closePath();
	this.shape_49.setTransform(-154.6,-44.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(3,-16.1,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_50.setTransform(-164.1,16.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.6,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_51.setTransform(-163.6,35.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.8,0.4,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_52.setTransform(-162.6,46.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_53.setTransform(-158.9,50.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.8,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_54.setTransform(-158,42.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.8).curveTo(-3.4,-6.6,-1.6,-6.5).curveTo(0.6,-6.3,4.6,-6.5).lineTo(5.3,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.4,-6.8,-8.5).lineTo(-5.9,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.8).lineTo(-4.4,-6.9).closePath();
	this.shape_55.setTransform(-159.5,40.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.6).curveTo(-1.3,3.2,-1.5,1.8).lineTo(-1.8,-1).curveTo(-2,-3.1,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.5,4.6).lineTo(1,4.5).closePath();
	this.shape_56.setTransform(-166,41);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,2.5,-0.7,0.2).curveTo(-0.7,-1.7,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_57.setTransform(-84.1,-2.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.2,-4.4,7.7).curveTo(-5,7.1,-5,6.3).curveTo(-5.4,2.2,-5.2,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.4,-7.7).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.7).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.1,4.6,7.7).curveTo(4,8.2,3.3,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_58.setTransform(-84.2,-2.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-46.7,64.9).curveTo(-48.5,64.1,-49.5,62).curveTo(-49.9,61.8,-50.4,61.2).curveTo(-51.4,60.2,-52,58.5).curveTo(-52.6,56.4,-53,53.3).lineTo(-53.4,48).curveTo(-53.7,44.9,-52.8,42.1).lineTo(-51.9,39.9).curveTo(-52.7,23.7,-52.7,18.3).curveTo(-52.7,15,-52.2,6.7).lineTo(-51.7,-0.9).lineTo(-47.5,-7.8).curveTo(-46.5,-12.9,-43,-27.2).curveTo(-40.8,-36.4,-36.6,-48.7).curveTo(-33.3,-58.6,-32.4,-60.4).curveTo(-31.9,-61.4,-31.4,-61.8).curveTo(-30.7,-62.2,-29.1,-62.4).curveTo(-21.9,-63.3,5.9,-64.5).lineTo(32.3,-65.5).curveTo(35.2,-65.6,36.6,-65.3).curveTo(38.7,-64.9,40.7,-63.5).curveTo(42.4,-62.3,43.5,-61.2).lineTo(45.6,-59.2).curveTo(47.3,-57.6,49.7,-52.6).curveTo(50.8,-50.4,51.9,-44.6).curveTo(53.5,-36.9,53.5,-29.7).lineTo(53.4,-11.2).curveTo(53.2,-9.5,52.8,-8.7).curveTo(51.9,-7,50.9,-4.7).curveTo(49.5,-1.3,49.5,-0).lineTo(49.5,6.5).curveTo(49.5,8,49,8.9).curveTo(48.5,9.8,48.5,10.5).lineTo(48.5,25.4).lineTo(35.5,26).lineTo(35.5,28.3).curveTo(24.9,28.5,20,29.1).curveTo(13.5,29.9,10.6,31.3).curveTo(4.2,34.4,-0.8,43).curveTo(-3,46.9,-6.1,53.5).curveTo(-7.1,54.9,-8.5,54.9).lineTo(-16.6,54.9).lineTo(-18.2,54.4).lineTo(-20.8,54.9).lineTo(-39.5,54.9).lineTo(-39.5,61.9).curveTo(-39.5,65.5,-42.8,65.5).curveTo(-45.3,65.5,-46.7,64.9).closePath().moveTo(10.4,-55.4).curveTo(-9.1,-54.6,-15.5,-53.6).curveTo(-20.9,-52.8,-22.5,-51.9).curveTo(-23.7,-51.1,-25,-48.5).curveTo(-26,-46.5,-28.2,-36.4).curveTo(-30.5,-26.4,-30.9,-22.1).curveTo(-31.3,-18.1,-31.6,-10.8).curveTo(-32,-3.8,-32,-1.4).lineTo(-31.8,-0.4).lineTo(-30.6,-0.7).lineTo(9.9,-16.4).curveTo(14.6,-18.1,27.1,-20.3).lineTo(29.6,-20.7).curveTo(30.8,-21,31.2,-21.4).curveTo(31.4,-21.6,31.4,-22.3).lineTo(32.1,-51.8).curveTo(32.1,-54.2,31.3,-55).curveTo(30.6,-55.8,28.6,-55.9).lineTo(10.4,-55.4).closePath();
	this.shape_59.setTransform(-115,-12);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#969696").beginStroke().moveTo(-42.1,25.1).lineTo(-47.9,20.4).lineTo(-51.6,-3.4).lineTo(-30.2,-29.6).lineTo(16.5,-28.1).lineTo(27.5,-15.6).lineTo(27.7,-8.4).lineTo(25.8,-6.4).lineTo(29.9,-0.1).lineTo(31.3,-4.2).lineTo(37.4,-4.2).lineTo(38.1,-18.8).lineTo(51.6,-19.1).curveTo(41.2,1.5,23.2,22.2).curveTo(21.9,23.7,21.9,25.5).curveTo(21.9,27.1,22.8,28.5).lineTo(-29.3,29.7).closePath();
	this.shape_60.setTransform(-94,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.7,-8).curveTo(186.4,-4.7,186.4,0).curveTo(186.4,4.7,131.7,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_61.setTransform(4.8,69.2,0.903,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(1));

	// Capa 3
	this.instance = new lib.cisternaconductor();
	this.instance.parent = this;
	this.instance.setTransform(-118.4,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-77.5,341.7,158.1);


// stage content:
(lib.cisterna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_148 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(148).call(this.frame_148).wait(1));

	// aspas
	this.instance = new lib.cisternaaspas();
	this.instance.parent = this;
	this.instance.setTransform(980.9,208.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},148).wait(1));

	// llanta
	this.instance_1 = new lib.cisternallanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1314.3,427.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-720,x:438.3},35).wait(89).to({rotation:-1440,x:-83.7},24).wait(1));

	// llanta
	this.instance_2 = new lib.cisternallanta();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1134.3,425.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-720,x:258.3},35).wait(89).to({rotation:-1440,x:-263.7},24).wait(1));

	// camion
	this.instance_3 = new lib.cisternacamion();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1222.5,375.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:347},35).wait(89).to({x:-175},24).wait(1));

	// handss
	this.instance_4 = new lib.cisternapersona();
	this.instance_4.parent = this;
	this.instance_4.setTransform(474.3,359.2,0.832,0.833,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({x:474.6,y:296.7},13).wait(66).to({y:361.7},6).to({_off:true},1).wait(28));

	// regadera
	this.instance_5 = new lib.cisternaregadera();
	this.instance_5.parent = this;
	this.instance_5.setTransform(489.1,350.5,1,1,0,0,0,-0.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:501.2,y:279},13).wait(66).to({x:481.2,y:349},6).to({_off:true},1).wait(28));

	// tierra2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.6,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.6,-5.2).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(46.6,-5.2).lineTo(47.1,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.3,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape.setTransform(518.6,360.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.7,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(46.6,-5.2).lineTo(47,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.2,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_1.setTransform(685.9,360.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.6,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(47.1,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.3,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_2.setTransform(854.6,360.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(149));

	// gota
	this.instance_6 = new lib.cisternagota();
	this.instance_6.parent = this;
	this.instance_6.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:545.8,y:362.8},17).wait(84));

	// gota
	this.instance_7 = new lib.cisternagota();
	this.instance_7.parent = this;
	this.instance_7.setTransform(505,245.6,0.677,0.677,-15);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53).to({_off:false},0).to({scaleX:1,scaleY:1,x:535.2,y:362.8},17).wait(79));

	// gota
	this.instance_8 = new lib.cisternagota();
	this.instance_8.parent = this;
	this.instance_8.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(62).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:538.8,y:362.8},17).wait(70));

	// gota
	this.instance_9 = new lib.cisternagota();
	this.instance_9.parent = this;
	this.instance_9.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:528.2,y:362.8},17).wait(66));

	// gota
	this.instance_10 = new lib.cisternagota();
	this.instance_10.parent = this;
	this.instance_10.setTransform(505,245.6,0.677,0.677,-15);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70).to({_off:false},0).to({scaleX:1,scaleY:1,x:534,y:362.8},17).wait(62));

	// gota
	this.instance_11 = new lib.cisternagota();
	this.instance_11.parent = this;
	this.instance_11.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:523.4,y:362.8},17).wait(44));

	// gota
	this.instance_12 = new lib.cisternagota();
	this.instance_12.parent = this;
	this.instance_12.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:532.4,y:362.8},17).wait(53));

	// gota
	this.instance_13 = new lib.cisternagota();
	this.instance_13.parent = this;
	this.instance_13.setTransform(505,245.6,0.677,0.677,-15);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(82).to({_off:false},0).to({scaleX:1,scaleY:1,x:521.8,y:362.8},17).wait(50));

	// gota
	this.instance_14 = new lib.cisternagota();
	this.instance_14.parent = this;
	this.instance_14.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(73).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:525.5,y:362.8},17).wait(59));

	// gota
	this.instance_15 = new lib.cisternagota();
	this.instance_15.parent = this;
	this.instance_15.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(85).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:514.8,y:362.8},17).wait(47));

	// gota
	this.instance_16 = new lib.cisternagota();
	this.instance_16.parent = this;
	this.instance_16.setTransform(505,245.6,0.677,0.677,-15);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(79).to({_off:false},0).to({scaleX:1,scaleY:1,x:520.7,y:362.8},17).wait(53));

	// gota
	this.instance_17 = new lib.cisternagota();
	this.instance_17.parent = this;
	this.instance_17.setTransform(505.1,245.7,0.677,0.677,-15,0,0,0.1,0.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(77).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:510,y:362.8},17).wait(55));

	// espiga
	this.instance_18 = new lib.cisternaespiga();
	this.instance_18.parent = this;
	this.instance_18.setTransform(873.5,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(47).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(93));

	// espiga
	this.instance_19 = new lib.cisternaespiga();
	this.instance_19.parent = this;
	this.instance_19.setTransform(930.6,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(52).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(88));

	// espiga
	this.instance_20 = new lib.cisternaespiga();
	this.instance_20.parent = this;
	this.instance_20.setTransform(910.8,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(51).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(89));

	// espiga
	this.instance_21 = new lib.cisternaespiga();
	this.instance_21.parent = this;
	this.instance_21.setTransform(892.2,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(55).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(85));

	// espiga
	this.instance_22 = new lib.cisternaespiga();
	this.instance_22.parent = this;
	this.instance_22.setTransform(854.9,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(57).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(83));

	// espiga
	this.instance_23 = new lib.cisternaespiga();
	this.instance_23.parent = this;
	this.instance_23.setTransform(836.2,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(68).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(72));

	// espiga
	this.instance_24 = new lib.cisternaespiga();
	this.instance_24.parent = this;
	this.instance_24.setTransform(743,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(75).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(65));

	// espiga
	this.instance_25 = new lib.cisternaespiga();
	this.instance_25.parent = this;
	this.instance_25.setTransform(817.6,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(68).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(72));

	// espiga
	this.instance_26 = new lib.cisternaespiga();
	this.instance_26.parent = this;
	this.instance_26.setTransform(798.9,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(81).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(59));

	// espiga
	this.instance_27 = new lib.cisternaespiga();
	this.instance_27.parent = this;
	this.instance_27.setTransform(780.3,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(57).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(83));

	// espiga
	this.instance_28 = new lib.cisternaespiga();
	this.instance_28.parent = this;
	this.instance_28.setTransform(761.6,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(54).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(86));

	// espiga
	this.instance_29 = new lib.cisternaespiga();
	this.instance_29.parent = this;
	this.instance_29.setTransform(724.3,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(50).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(90));

	// espiga
	this.instance_30 = new lib.cisternaespiga();
	this.instance_30.parent = this;
	this.instance_30.setTransform(705.7,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(52).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(88));

	// espiga
	this.instance_31 = new lib.cisternaespiga();
	this.instance_31.parent = this;
	this.instance_31.setTransform(612.4,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(73).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(67));

	// espiga
	this.instance_32 = new lib.cisternaespiga();
	this.instance_32.parent = this;
	this.instance_32.setTransform(687,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(70).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(70));

	// espiga
	this.instance_33 = new lib.cisternaespiga();
	this.instance_33.parent = this;
	this.instance_33.setTransform(668.4,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(77).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(63));

	// espiga
	this.instance_34 = new lib.cisternaespiga();
	this.instance_34.parent = this;
	this.instance_34.setTransform(649.7,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(54).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(86));

	// espiga
	this.instance_35 = new lib.cisternaespiga();
	this.instance_35.parent = this;
	this.instance_35.setTransform(631.1,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(73).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(67));

	// espiga
	this.instance_36 = new lib.cisternaespiga();
	this.instance_36.parent = this;
	this.instance_36.setTransform(593.8,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(67).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(73));

	// espiga
	this.instance_37 = new lib.cisternaespiga();
	this.instance_37.parent = this;
	this.instance_37.setTransform(575.1,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(78).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(62));

	// espiga
	this.instance_38 = new lib.cisternaespiga();
	this.instance_38.parent = this;
	this.instance_38.setTransform(481.9,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(78).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(62));

	// espiga
	this.instance_39 = new lib.cisternaespiga();
	this.instance_39.parent = this;
	this.instance_39.setTransform(556.5,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(65).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(75));

	// espiga
	this.instance_40 = new lib.cisternaespiga();
	this.instance_40.parent = this;
	this.instance_40.setTransform(537.8,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(56).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(84));

	// espiga
	this.instance_41 = new lib.cisternaespiga();
	this.instance_41.parent = this;
	this.instance_41.setTransform(519.2,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(59).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(81));

	// espiga
	this.instance_42 = new lib.cisternaespiga();
	this.instance_42.parent = this;
	this.instance_42.setTransform(500.5,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(56).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(84));

	// espiga
	this.instance_43 = new lib.cisternaespiga();
	this.instance_43.parent = this;
	this.instance_43.setTransform(463.2,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(52).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(88));

	// espiga
	this.instance_44 = new lib.cisternaespiga();
	this.instance_44.parent = this;
	this.instance_44.setTransform(444.6,362.5,1,0.108,0,0,0,0,4.7);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(52).to({_off:false},0).to({regY:0.8,scaleY:1,y:315.9},9).wait(88));

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.6,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.6,-5.2).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(46.6,-5.2).lineTo(47.1,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.3,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_3.setTransform(518.6,360.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#28292B").beginStroke().moveTo(-84.6,5.2).lineTo(-84.6,0.4).lineTo(-84.4,0.7).curveTo(-83.1,-2,-80.6,-3.6).curveTo(-78,-5.2,-75,-5.2).curveTo(-72,-5.2,-69.5,-3.6).curveTo(-67,-2,-65.7,0.7).curveTo(-64.4,-2,-61.8,-3.6).curveTo(-59.3,-5.2,-56.3,-5.2).lineTo(-56.1,-5.2).curveTo(-53.1,-5.2,-50.6,-3.6).curveTo(-48.2,-2.1,-46.9,0.6).curveTo(-45.5,-2.1,-43.1,-3.6).curveTo(-40.5,-5.2,-37.5,-5.2).lineTo(-37.4,-5.2).curveTo(-34.4,-5.2,-31.8,-3.6).curveTo(-29.4,-2.1,-28.1,0.6).curveTo(-26.7,-2.1,-24.3,-3.6).curveTo(-21.7,-5.2,-18.8,-5.2).lineTo(-18.6,-5.2).curveTo(-15.6,-5.2,-13.1,-3.6).curveTo(-10.7,-2.1,-9.3,0.6).curveTo(-8,-2.1,-5.6,-3.6).curveTo(-3,-5.2,0,-5.2).lineTo(0.1,-5.2).curveTo(3.2,-5.2,5.7,-3.6).curveTo(8.2,-2,9.5,0.6).curveTo(10.8,-2.1,13.2,-3.6).curveTo(15.7,-5.2,18.7,-5.2).lineTo(18.9,-5.2).curveTo(21.9,-5.2,24.4,-3.6).curveTo(26.9,-2,28.2,0.6).curveTo(29.5,-2.1,32,-3.6).curveTo(34.5,-5.2,37.5,-5.2).lineTo(37.6,-5.2).curveTo(40.6,-5.2,43.2,-3.6).curveTo(45.6,-2,46.9,0.6).curveTo(48.2,-2,50.7,-3.6).curveTo(53.2,-5.2,56.2,-5.2).lineTo(56.2,-5.2).lineTo(56.4,-5.2).curveTo(59.5,-5.2,62,-3.6).curveTo(64.5,-2,65.7,0.7).curveTo(67,-2,69.6,-3.6).curveTo(72.1,-5.2,75.2,-5.2).curveTo(78.2,-5.2,80.7,-3.6).curveTo(83.2,-2,84.5,0.7).lineTo(84.5,5.2).closePath();
	this.shape_4.setTransform(518.7,356.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.7,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(46.6,-5.2).lineTo(47,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.2,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_5.setTransform(685.9,360.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#28292B").beginStroke().moveTo(-84.5,5.2).lineTo(-84.5,0.4).lineTo(-84.4,0.7).curveTo(-83.1,-2,-80.6,-3.6).curveTo(-78.1,-5.2,-75,-5.2).curveTo(-72,-5.2,-69.4,-3.6).curveTo(-66.9,-2,-65.6,0.7).curveTo(-64.4,-2,-61.9,-3.6).curveTo(-59.3,-5.2,-56.3,-5.2).lineTo(-56.1,-5.2).curveTo(-53.1,-5.2,-50.6,-3.6).curveTo(-48.1,-2.1,-46.8,0.6).curveTo(-45.5,-2,-43.1,-3.6).curveTo(-40.5,-5.2,-37.5,-5.2).lineTo(-37.4,-5.2).curveTo(-34.3,-5.2,-31.8,-3.6).curveTo(-29.4,-2.1,-28.1,0.6).curveTo(-26.8,-2,-24.3,-3.6).curveTo(-21.8,-5.2,-18.8,-5.2).lineTo(-18.6,-5.2).curveTo(-15.6,-5.2,-13.1,-3.6).curveTo(-10.6,-2.1,-9.3,0.6).curveTo(-8,-2.1,-5.5,-3.6).curveTo(-3,-5.2,0,-5.2).lineTo(0.1,-5.2).curveTo(3.2,-5.2,5.7,-3.6).curveTo(8.1,-2.1,9.4,0.6).curveTo(10.8,-2.1,13.2,-3.6).curveTo(15.8,-5.2,18.8,-5.2).lineTo(18.9,-5.2).curveTo(21.9,-5.2,24.4,-3.6).curveTo(26.9,-2.1,28.2,0.6).curveTo(29.5,-2.1,32,-3.6).curveTo(34.5,-5.2,37.5,-5.2).lineTo(37.7,-5.2).curveTo(40.7,-5.2,43.2,-3.6).curveTo(45.7,-2,47,0.6).curveTo(48.3,-2,50.7,-3.6).curveTo(53.2,-5.2,56.2,-5.2).lineTo(56.2,-5.2).lineTo(56.4,-5.2).curveTo(59.5,-5.2,62,-3.6).curveTo(64.5,-2,65.8,0.7).curveTo(67.1,-2,69.6,-3.6).curveTo(72.1,-5.2,75.2,-5.2).curveTo(78.2,-5.2,80.8,-3.6).curveTo(83.3,-2,84.5,0.7).lineTo(84.5,5.2).closePath();
	this.shape_6.setTransform(685.9,356.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.6,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(47.1,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.3,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_7.setTransform(854.6,360.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#28292B").beginStroke().moveTo(-84.5,5.2).lineTo(-84.5,0.4).lineTo(-84.4,0.7).curveTo(-83.2,-2,-80.7,-3.6).curveTo(-78,-5.2,-75.1,-5.2).curveTo(-72,-5.2,-69.5,-3.6).curveTo(-66.9,-2,-65.6,0.7).curveTo(-64.3,-2,-61.8,-3.6).curveTo(-59.3,-5.2,-56.3,-5.2).lineTo(-56.2,-5.2).curveTo(-53.1,-5.2,-50.6,-3.6).curveTo(-48.1,-2.1,-46.8,0.6).curveTo(-45.5,-2.1,-43,-3.6).curveTo(-40.5,-5.2,-37.5,-5.2).lineTo(-37.4,-5.2).curveTo(-34.4,-5.2,-31.9,-3.6).curveTo(-29.4,-2.1,-28.1,0.6).curveTo(-26.8,-2.1,-24.3,-3.6).curveTo(-21.7,-5.2,-18.7,-5.2).lineTo(-18.6,-5.2).curveTo(-15.6,-5.2,-13.1,-3.6).curveTo(-10.7,-2.1,-9.3,0.6).curveTo(-8,-2.1,-5.6,-3.6).curveTo(-3,-5.2,-0,-5.2).lineTo(0.2,-5.2).curveTo(3.2,-5.2,5.7,-3.6).curveTo(8.1,-2,9.4,0.6).curveTo(10.7,-2.1,13.2,-3.6).curveTo(15.7,-5.2,18.7,-5.2).lineTo(18.9,-5.2).curveTo(21.9,-5.2,24.5,-3.6).curveTo(26.9,-2,28.2,0.6).curveTo(29.5,-2.1,31.9,-3.6).curveTo(34.4,-5.2,37.5,-5.2).lineTo(37.6,-5.2).curveTo(40.7,-5.2,43.2,-3.6).curveTo(45.7,-2,47,0.6).curveTo(48.3,-2,50.7,-3.6).curveTo(53.2,-5.2,56.2,-5.2).lineTo(56.2,-5.2).lineTo(56.4,-5.2).curveTo(59.4,-5.2,62,-3.6).curveTo(64.5,-2,65.8,0.7).curveTo(67.1,-2,69.6,-3.6).curveTo(72.1,-5.2,75.1,-5.2).curveTo(78.2,-5.2,80.7,-3.6).curveTo(83.3,-2,84.6,0.7).lineTo(84.6,5.2).closePath();
	this.shape_8.setTransform(854.7,356.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.6,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.6,-5.2).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(46.6,-5.2).lineTo(47.1,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.3,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_9.setTransform(518.6,360.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#28292B").beginStroke().moveTo(-84.6,5.2).lineTo(-84.6,0.4).lineTo(-84.4,0.7).curveTo(-83.1,-2,-80.6,-3.6).curveTo(-78,-5.2,-75,-5.2).curveTo(-72,-5.2,-69.5,-3.6).curveTo(-67,-2,-65.7,0.7).curveTo(-64.4,-2,-61.8,-3.6).curveTo(-59.3,-5.2,-56.3,-5.2).lineTo(-56.1,-5.2).curveTo(-53.1,-5.2,-50.6,-3.6).curveTo(-48.2,-2.1,-46.9,0.6).curveTo(-45.5,-2.1,-43.1,-3.6).curveTo(-40.5,-5.2,-37.5,-5.2).lineTo(-37.4,-5.2).curveTo(-34.4,-5.2,-31.8,-3.6).curveTo(-29.4,-2.1,-28.1,0.6).curveTo(-26.7,-2.1,-24.3,-3.6).curveTo(-21.7,-5.2,-18.8,-5.2).lineTo(-18.6,-5.2).curveTo(-15.6,-5.2,-13.1,-3.6).curveTo(-10.7,-2.1,-9.3,0.6).curveTo(-8,-2.1,-5.6,-3.6).curveTo(-3,-5.2,0,-5.2).lineTo(0.1,-5.2).curveTo(3.2,-5.2,5.7,-3.6).curveTo(8.2,-2,9.5,0.6).curveTo(10.8,-2.1,13.2,-3.6).curveTo(15.7,-5.2,18.7,-5.2).lineTo(18.9,-5.2).curveTo(21.9,-5.2,24.4,-3.6).curveTo(26.9,-2,28.2,0.6).curveTo(29.5,-2.1,32,-3.6).curveTo(34.5,-5.2,37.5,-5.2).lineTo(37.6,-5.2).curveTo(40.6,-5.2,43.2,-3.6).curveTo(45.6,-2,46.9,0.6).curveTo(48.2,-2,50.7,-3.6).curveTo(53.2,-5.2,56.2,-5.2).lineTo(56.2,-5.2).lineTo(56.4,-5.2).curveTo(59.5,-5.2,62,-3.6).curveTo(64.5,-2,65.7,0.7).curveTo(67,-2,69.6,-3.6).curveTo(72.1,-5.2,75.2,-5.2).curveTo(78.2,-5.2,80.7,-3.6).curveTo(83.2,-2,84.5,0.7).lineTo(84.5,5.2).closePath();
	this.shape_10.setTransform(518.7,356.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.7,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(46.6,-5.2).lineTo(47,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.2,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_11.setTransform(685.9,360.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#28292B").beginStroke().moveTo(-84.5,5.2).lineTo(-84.5,0.4).lineTo(-84.4,0.7).curveTo(-83.1,-2,-80.6,-3.6).curveTo(-78.1,-5.2,-75,-5.2).curveTo(-72,-5.2,-69.4,-3.6).curveTo(-66.9,-2,-65.6,0.7).curveTo(-64.4,-2,-61.9,-3.6).curveTo(-59.3,-5.2,-56.3,-5.2).lineTo(-56.1,-5.2).curveTo(-53.1,-5.2,-50.6,-3.6).curveTo(-48.1,-2.1,-46.8,0.6).curveTo(-45.5,-2,-43.1,-3.6).curveTo(-40.5,-5.2,-37.5,-5.2).lineTo(-37.4,-5.2).curveTo(-34.3,-5.2,-31.8,-3.6).curveTo(-29.4,-2.1,-28.1,0.6).curveTo(-26.8,-2,-24.3,-3.6).curveTo(-21.8,-5.2,-18.8,-5.2).lineTo(-18.6,-5.2).curveTo(-15.6,-5.2,-13.1,-3.6).curveTo(-10.6,-2.1,-9.3,0.6).curveTo(-8,-2.1,-5.5,-3.6).curveTo(-3,-5.2,0,-5.2).lineTo(0.1,-5.2).curveTo(3.2,-5.2,5.7,-3.6).curveTo(8.1,-2.1,9.4,0.6).curveTo(10.8,-2.1,13.2,-3.6).curveTo(15.8,-5.2,18.8,-5.2).lineTo(18.9,-5.2).curveTo(21.9,-5.2,24.4,-3.6).curveTo(26.9,-2.1,28.2,0.6).curveTo(29.5,-2.1,32,-3.6).curveTo(34.5,-5.2,37.5,-5.2).lineTo(37.7,-5.2).curveTo(40.7,-5.2,43.2,-3.6).curveTo(45.7,-2,47,0.6).curveTo(48.3,-2,50.7,-3.6).curveTo(53.2,-5.2,56.2,-5.2).lineTo(56.2,-5.2).lineTo(56.4,-5.2).curveTo(59.5,-5.2,62,-3.6).curveTo(64.5,-2,65.8,0.7).curveTo(67.1,-2,69.6,-3.6).curveTo(72.1,-5.2,75.2,-5.2).curveTo(78.2,-5.2,80.8,-3.6).curveTo(83.3,-2,84.5,0.7).lineTo(84.5,5.2).closePath();
	this.shape_12.setTransform(685.9,356.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#28292B").beginStroke().moveTo(-93.5,5.2).curveTo(-93.5,0.9,-90.5,-2.2).curveTo(-87.4,-5.2,-83.2,-5.2).curveTo(-80.2,-5.2,-77.6,-3.5).curveTo(-75.2,-1.9,-73.9,0.7).curveTo(-72.7,-1.9,-70.2,-3.5).curveTo(-67.7,-5.2,-64.7,-5.2).curveTo(-61.7,-5.1,-59.2,-3.5).curveTo(-56.8,-2,-55.5,0.5).curveTo(-54.3,-1.8,-52.1,-3.4).curveTo(-49.8,-4.9,-47,-5.1).lineTo(-46.2,-5.2).curveTo(-43.2,-5.1,-40.7,-3.5).curveTo(-38.3,-2,-37,0.5).curveTo(-35.7,-2,-33.3,-3.5).curveTo(-30.8,-5.1,-27.8,-5.2).lineTo(-27.7,-5.2).curveTo(-24.7,-5.1,-22.2,-3.5).curveTo(-19.8,-2,-18.5,0.5).curveTo(-17.2,-2,-14.8,-3.5).curveTo(-12.3,-5.1,-9.3,-5.2).lineTo(-9.2,-5.2).curveTo(-6.2,-5.1,-3.7,-3.5).curveTo(-1.3,-2,0,0.5).curveTo(1.3,-2,3.7,-3.5).curveTo(6.2,-5.1,9.2,-5.2).lineTo(9.3,-5.2).curveTo(12.3,-5.1,14.8,-3.5).curveTo(17.2,-2,18.5,0.5).curveTo(19.8,-2,22.2,-3.5).curveTo(24.7,-5.1,27.7,-5.2).lineTo(27.8,-5.2).curveTo(30.8,-5.1,33.3,-3.5).curveTo(35.7,-2,37,0.5).curveTo(38.3,-2,40.7,-3.5).curveTo(43.2,-5.1,46.2,-5.2).lineTo(47.1,-5.1).curveTo(49.8,-4.9,52.1,-3.4).curveTo(54.3,-1.8,55.5,0.5).curveTo(56.8,-2,59.2,-3.5).curveTo(61.7,-5.1,64.7,-5.2).curveTo(67.7,-5.2,70.3,-3.5).curveTo(72.7,-1.9,74,0.7).curveTo(75.2,-1.9,77.7,-3.5).curveTo(80.2,-5.2,83.2,-5.2).curveTo(87.5,-5.2,90.5,-2.2).curveTo(93.5,0.9,93.5,5.2).closePath();
	this.shape_13.setTransform(854.6,360.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#28292B").beginStroke().moveTo(-84.5,5.2).lineTo(-84.5,0.4).lineTo(-84.4,0.7).curveTo(-83.2,-2,-80.7,-3.6).curveTo(-78,-5.2,-75.1,-5.2).curveTo(-72,-5.2,-69.5,-3.6).curveTo(-66.9,-2,-65.6,0.7).curveTo(-64.3,-2,-61.8,-3.6).curveTo(-59.3,-5.2,-56.3,-5.2).lineTo(-56.2,-5.2).curveTo(-53.1,-5.2,-50.6,-3.6).curveTo(-48.1,-2.1,-46.8,0.6).curveTo(-45.5,-2.1,-43,-3.6).curveTo(-40.5,-5.2,-37.5,-5.2).lineTo(-37.4,-5.2).curveTo(-34.4,-5.2,-31.9,-3.6).curveTo(-29.4,-2.1,-28.1,0.6).curveTo(-26.8,-2.1,-24.3,-3.6).curveTo(-21.7,-5.2,-18.7,-5.2).lineTo(-18.6,-5.2).curveTo(-15.6,-5.2,-13.1,-3.6).curveTo(-10.7,-2.1,-9.3,0.6).curveTo(-8,-2.1,-5.6,-3.6).curveTo(-3,-5.2,-0,-5.2).lineTo(0.2,-5.2).curveTo(3.2,-5.2,5.7,-3.6).curveTo(8.1,-2,9.4,0.6).curveTo(10.7,-2.1,13.2,-3.6).curveTo(15.7,-5.2,18.7,-5.2).lineTo(18.9,-5.2).curveTo(21.9,-5.2,24.5,-3.6).curveTo(26.9,-2,28.2,0.6).curveTo(29.5,-2.1,31.9,-3.6).curveTo(34.4,-5.2,37.5,-5.2).lineTo(37.6,-5.2).curveTo(40.7,-5.2,43.2,-3.6).curveTo(45.7,-2,47,0.6).curveTo(48.3,-2,50.7,-3.6).curveTo(53.2,-5.2,56.2,-5.2).lineTo(56.2,-5.2).lineTo(56.4,-5.2).curveTo(59.4,-5.2,62,-3.6).curveTo(64.5,-2,65.8,0.7).curveTo(67.1,-2,69.6,-3.6).curveTo(72.1,-5.2,75.1,-5.2).curveTo(78.2,-5.2,80.7,-3.6).curveTo(83.3,-2,84.6,0.7).lineTo(84.6,5.2).closePath();
	this.shape_14.setTransform(854.7,356.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(149));

	// FlashAICB
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(7.4,3.7).lineTo(-8.3,-0.3).curveTo(-9,-0.5,-9.4,-1.1).curveTo(-9.8,-1.7,-9.6,-2.4).curveTo(-9.4,-3.1,-8.8,-3.5).curveTo(-8.2,-3.9,-7.5,-3.7).lineTo(8.3,0.3).curveTo(9,0.5,9.4,1.1).curveTo(9.8,1.8,9.6,2.5).curveTo(9.3,3.8,7.9,3.8).closePath();
	this.shape_15.setTransform(398.2,355);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,3.2).curveTo(-4.4,1.8,-4.5,-0).curveTo(-4.4,-1.9,-3.1,-3.2).curveTo(-1.9,-4.5,0,-4.5).curveTo(1.9,-4.5,3.2,-3.2).curveTo(4.5,-1.9,4.4,-0).curveTo(4.5,1.8,3.2,3.2).curveTo(1.9,4.5,0,4.5).curveTo(-1.9,4.5,-3.1,3.2).closePath();
	this.shape_16.setTransform(406.1,357);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.5,5.5).curveTo(-7.7,3.2,-7.7,-0).curveTo(-7.7,-3.2,-5.5,-5.5).curveTo(-3.2,-7.8,0,-7.8).curveTo(3.2,-7.8,5.5,-5.5).curveTo(7.7,-3.2,7.8,-0).curveTo(7.7,3.2,5.5,5.5).curveTo(3.2,7.8,0,7.8).curveTo(-3.2,7.8,-5.5,5.5).closePath();
	this.shape_17.setTransform(406.1,357);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.4,8.4).curveTo(-11.8,4.9,-11.8,0).curveTo(-11.8,-4.9,-8.4,-8.4).curveTo(-4.9,-11.8,0,-11.8).curveTo(4.9,-11.8,8.4,-8.4).curveTo(11.9,-4.9,11.8,0).curveTo(11.9,4.9,8.4,8.4).curveTo(4.9,11.8,0,11.8).curveTo(-4.9,11.8,-8.4,8.4).closePath();
	this.shape_18.setTransform(406.1,357);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(29,5.2).lineTo(-29.4,-1.7).curveTo(-30.1,-1.8,-30.6,-2.3).curveTo(-31,-2.9,-31,-3.6).curveTo(-30.9,-4.3,-30.3,-4.8).curveTo(-29.7,-5.2,-29,-5.2).lineTo(29.4,1.7).curveTo(30.1,1.8,30.5,2.4).curveTo(31,2.9,30.9,3.7).curveTo(30.8,4.3,30.3,4.8).curveTo(29.8,5.2,29.2,5.2).closePath();
	this.shape_19.setTransform(366.9,336.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-24,1.1).curveTo(-24.5,1.1,-24.8,0.8).curveTo(-25.1,0.4,-25.1,-0).curveTo(-25.1,-0.5,-24.8,-0.8).curveTo(-24.5,-1.1,-24,-1.1).lineTo(24,-1.1).curveTo(24.4,-1.1,24.8,-0.8).curveTo(25.1,-0.5,25.1,-0).curveTo(25.1,0.4,24.8,0.8).curveTo(24.4,1.1,24,1.1).closePath();
	this.shape_20.setTransform(366.8,357);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,9.4).lineTo(-0.5,-9.3).lineTo(0.5,-9.2).lineTo(0.5,9.4).closePath();
	this.shape_21.setTransform(386,347.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,11.1).lineTo(-0.5,-11.1).lineTo(0.5,-11).lineTo(0.5,11.1).closePath();
	this.shape_22.setTransform(356.2,345.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,11.7).lineTo(-0.5,-11.7).lineTo(0.5,-11.6).lineTo(0.5,11.7).closePath();
	this.shape_23.setTransform(346.3,345.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,10.5).lineTo(-0.5,-10.5).lineTo(0.5,-10.4).lineTo(0.5,10.5).closePath();
	this.shape_24.setTransform(366.2,346.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,10).lineTo(-0.5,-10).lineTo(0.5,-9.8).lineTo(0.5,10).closePath();
	this.shape_25.setTransform(376.1,347.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.2,12.2).lineTo(-29.2,-12.2).lineTo(29.2,-5.3).lineTo(23.9,12.2).closePath();
	this.shape_26.setTransform(366.9,344.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,11).lineTo(-9.4,-11).lineTo(9.4,-11).lineTo(6.8,11).closePath().moveTo(-0.5,9.7).lineTo(5.7,9.7).lineTo(7.9,-9.7).lineTo(-7.5,-9.7).closePath();
	this.shape_27.setTransform(360.6,355.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#494A4E").beginStroke().moveTo(12.1,2.4).lineTo(-12.3,0.3).curveTo(-12.9,0.2,-13.2,-0.2).curveTo(-13.6,-0.6,-13.5,-1.1).curveTo(-13.5,-1.7,-13.1,-2).curveTo(-12.7,-2.4,-12.1,-2.3).lineTo(12.3,-0.2).curveTo(12.9,-0.2,13.2,0.2).curveTo(13.6,0.7,13.5,1.2).curveTo(13.5,1.7,13.1,2).curveTo(12.7,2.4,12.2,2.4).closePath();
	this.shape_28.setTransform(329.2,337.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.5,8.5).curveTo(-12,4.9,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,4.9,8.5,8.5).curveTo(5,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_29.setTransform(982.6,252.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,0).curveTo(-12,-4.9,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-4.9,12,0).curveTo(12,5,8.5,8.5).curveTo(5,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_30.setTransform(982.6,295.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12,18.9).lineTo(-12,-6.9).curveTo(-12,-11.9,-8.5,-15.4).curveTo(-5,-18.9,-0,-18.9).curveTo(5,-18.9,8.5,-15.4).curveTo(12,-11.9,12,-6.9).lineTo(12,18.9).closePath();
	this.shape_31.setTransform(982.6,347.5);

	this.instance_45 = new lib.cisterna001();
	this.instance_45.parent = this;
	this.instance_45.setTransform(980.9,284.7,1,1,0,0,0,40,80.8);

	this.instance_46 = new lib.cisterna002();
	this.instance_46.parent = this;
	this.instance_46.setTransform(454.1,203.4,1,1,0,0,0,11.4,6.5);
	this.instance_46.alpha = 0.391;

	this.instance_47 = new lib.cisterna003();
	this.instance_47.parent = this;
	this.instance_47.setTransform(561.4,88.4,1,1,0,0,0,21.5,12.2);
	this.instance_47.alpha = 0.289;

	this.instance_48 = new lib.cisterna004();
	this.instance_48.parent = this;
	this.instance_48.setTransform(347,161.8,1,1,0,0,0,16.3,9.3);
	this.instance_48.alpha = 0.289;

	this.instance_49 = new lib.cisterna005();
	this.instance_49.parent = this;
	this.instance_49.setTransform(269,145.5,1,1,0,0,0,29.1,16.6);
	this.instance_49.alpha = 0.391;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#494A4E").beginStroke().moveTo(-25.1,12.7).lineTo(-25.1,-12.7).lineTo(25.1,-12.7).lineTo(25.1,12.7).closePath();
	this.shape_32.setTransform(268.3,320.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#494A4E").beginStroke().moveTo(-25.1,12.7).lineTo(-25.1,-12.7).lineTo(25.1,-12.7).lineTo(25.1,12.7).closePath();
	this.shape_33.setTransform(268.3,320.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-34.3,21.5).lineTo(-34.3,-21.5).lineTo(34.3,-21.5).lineTo(34.3,21.5).closePath();
	this.shape_34.setTransform(128.5,258.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.3,21.5).lineTo(-34.3,-21.5).lineTo(34.3,-21.5).lineTo(34.3,21.5).closePath();
	this.shape_35.setTransform(128.5,258.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-34.3,30.8).lineTo(-34.3,-30.8).lineTo(34.3,-30.8).lineTo(34.3,30.8).closePath();
	this.shape_36.setTransform(128.5,334.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.3,30.8).lineTo(-34.3,-30.8).lineTo(34.3,-30.8).lineTo(34.3,30.8).closePath();
	this.shape_37.setTransform(128.5,334.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#494A4E").beginStroke().moveTo(78,57.7).lineTo(78,42.2).lineTo(59.4,-5.2).lineTo(-0,-39.7).lineTo(-59.4,-5.2).lineTo(-78,42.2).lineTo(-78,57.7).lineTo(-93.9,57.7).lineTo(-93.9,40.2).lineTo(-71.9,-15.9).lineTo(-0,-57.7).lineTo(71.9,-15.9).lineTo(93.9,40.2).lineTo(93.9,57.7).closePath();
	this.shape_38.setTransform(128.4,238.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(-78,84).lineTo(-78,-2.1).lineTo(-59.4,-49.5).lineTo(-0,-84).lineTo(59.4,-49.5).lineTo(78,-2.1).lineTo(78,84).closePath();
	this.shape_39.setTransform(128.4,281.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,16.3).lineTo(-0.7,-16.3).lineTo(0.7,-16.3).lineTo(0.7,16.3).closePath();
	this.shape_40.setTransform(52.5,349.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.7,0.7).lineTo(-66.7,-0.7).lineTo(66.2,-0.7).lineTo(66.7,0.7).closePath();
	this.shape_41.setTransform(254.1,275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(-67.8,0.7).lineTo(-67.8,-0.7).lineTo(67.3,-0.7).lineTo(67.8,0.7).closePath();
	this.shape_42.setTransform(255.2,280.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#494A4E").beginStroke().moveTo(-68.9,0.7).lineTo(-68.9,-0.7).lineTo(68.4,-0.7).lineTo(69,0.7).closePath();
	this.shape_43.setTransform(256.3,286.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#494A4E").beginStroke().moveTo(-70.1,0.7).lineTo(-70.1,-0.7).lineTo(69.5,-0.7).lineTo(70.1,0.7).closePath();
	this.shape_44.setTransform(257.4,292.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#494A4E").beginStroke().moveTo(-65.5,0.7).lineTo(-65.5,-0.7).lineTo(65.1,-0.7).lineTo(65.5,0.7).closePath();
	this.shape_45.setTransform(252.9,269.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#494A4E").beginStroke().moveTo(-63.3,0.7).lineTo(-63.3,-0.7).lineTo(62.7,-0.7).lineTo(63.3,0.7).closePath();
	this.shape_46.setTransform(250.7,257.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#494A4E").beginStroke().moveTo(-64.4,0.7).lineTo(-64.4,-0.7).lineTo(63.9,-0.7).lineTo(64.4,0.7).closePath();
	this.shape_47.setTransform(251.8,263.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-70.7,21.3).lineTo(-70.7,-21.3).lineTo(54.2,-21.3).lineTo(70.7,21.3).closePath();
	this.shape_48.setTransform(258.1,275.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,55.9).lineTo(-2.3,-55.9).lineTo(2.3,-55.9).lineTo(2.3,55.9).closePath();
	this.shape_49.setTransform(285.6,309.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,55.9).lineTo(-2.3,-55.9).lineTo(2.3,-55.9).lineTo(2.3,55.9).closePath();
	this.shape_50.setTransform(268.3,309.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,55.9).lineTo(-2.4,-55.9).lineTo(2.3,-55.9).lineTo(2.3,55.9).closePath();
	this.shape_51.setTransform(303,309.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,55.9).lineTo(-2.3,-55.9).lineTo(2.3,-55.9).lineTo(2.3,55.9).closePath();
	this.shape_52.setTransform(250.9,309.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,55.9).lineTo(-2.3,-55.9).lineTo(2.3,-55.9).lineTo(2.3,55.9).closePath();
	this.shape_53.setTransform(216.2,309.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,55.9).lineTo(-2.3,-55.9).lineTo(2.3,-55.9).lineTo(2.3,55.9).closePath();
	this.shape_54.setTransform(233.6,309.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#494A4E").beginStroke().moveTo(-66.2,55.9).lineTo(-66.2,-55.9).lineTo(66.2,-55.9).lineTo(66.2,55.9).closePath();
	this.shape_55.setTransform(246.1,309.7);

	this.instance_50 = new lib.cisterna006();
	this.instance_50.parent = this;
	this.instance_50.setTransform(532.9,258.2,1,1,0,0,0,532.9,106.3);
	this.instance_50.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_50},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(149));

	// piso
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill().beginStroke("#494A4E").moveTo(-12.6,4.7).curveTo(-12.6,1,-8.9,-1.6).curveTo(-5.2,-4.2,-0,-4.2).curveTo(5.2,-4.2,8.9,-1.6).curveTo(12.6,1,12.6,4.7);
	this.shape_56.setTransform(813.9,419.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill().beginStroke("#494A4E").moveTo(-31.1,11.3).curveTo(-31.1,2.1,-22,-4.3).curveTo(-12.9,-10.8,0,-10.8).curveTo(12.9,-10.8,22,-4.3).curveTo(31.1,2.1,31.1,11.3);
	this.shape_57.setTransform(138.1,493.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.9,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_58.setTransform(59.5,456.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.8,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_59.setTransform(407.5,466.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill().beginStroke("#494A4E").moveTo(-31.1,11.3).curveTo(-31.1,2.2,-22,-4.3).curveTo(-12.9,-10.8,-0,-10.8).curveTo(12.9,-10.8,22,-4.3).curveTo(31.1,2.2,31.1,11.3);
	this.shape_60.setTransform(930.5,415.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill().beginStroke("#494A4E").moveTo(-31.1,11.3).curveTo(-31.1,2.1,-22,-4.3).curveTo(-12.9,-10.8,0,-10.8).curveTo(12.9,-10.8,22,-4.3).curveTo(31.1,2.1,31.1,11.3);
	this.shape_61.setTransform(749.1,486.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.7).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-4,-3.1,0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.7);
	this.shape_62.setTransform(746.9,439.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.7).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-4,-3.1,-0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.7);
	this.shape_63.setTransform(509.1,454.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.7).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-4,-3.1,-0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.7);
	this.shape_64.setTransform(411.9,398.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill().beginStroke("#494A4E").moveTo(-9.6,3.7).curveTo(-9.6,0.9,-6.8,-1.1).curveTo(-4,-3.1,-0,-3.1).curveTo(4,-3.1,6.8,-1.1).curveTo(9.6,0.9,9.6,3.7);
	this.shape_65.setTransform(174.1,413.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.9,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_66.setTransform(693.5,420.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.5,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.8,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_67.setTransform(222.5,450.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.9,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_68.setTransform(990.5,459.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.5).curveTo(-7.9,-6.5,0,-6.5).curveTo(7.9,-6.5,13.4,-2.5).curveTo(19,1.4,19,7);
	this.shape_69.setTransform(519.5,489.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.4,-2.6).curveTo(-7.8,-6.5,0,-6.5).curveTo(7.9,-6.5,13.4,-2.6).curveTo(19,1.4,19,7);
	this.shape_70.setTransform(558.5,385);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill().beginStroke("#494A4E").moveTo(-19,7).curveTo(-19,1.4,-13.5,-2.6).curveTo(-7.8,-6.5,0,-6.5).curveTo(7.9,-6.5,13.4,-2.6).curveTo(19,1.4,19,7);
	this.shape_71.setTransform(87.5,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).wait(149));

	// Ambient
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_72.setTransform(525,182.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_73.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72}]}).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525,257.5,1395.6,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;