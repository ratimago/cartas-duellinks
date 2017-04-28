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


(lib.barrena0030 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-64.3,89.7).lineTo(64.3,-89.7).lineTo(35.6,89.7).closePath();
	this.shape.setTransform(64.4,89.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.7,179.5);


(lib.barrena0029 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(11.2,77.2).lineTo(-50.9,-77.2).lineTo(50.9,77.2).closePath();
	this.shape.setTransform(50.9,77.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.9,154.4);


(lib.barrena0028 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(3.2,99.5).lineTo(-44.1,-99.5).lineTo(44.1,99.5).closePath();
	this.shape.setTransform(44.2,99.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.3,199.1);


(lib.barrena0027 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(21.8,91.4).lineTo(-86.6,-91.4).lineTo(86.6,91.4).closePath();
	this.shape.setTransform(86.6,91.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.2,182.8);


(lib.barrena0026 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(13.8,57.7).lineTo(-62.7,-57.8).lineTo(62.7,57.7).closePath();
	this.shape.setTransform(62.7,57.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,115.5);


(lib.barrena0025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-14.3,11.7).lineTo(-25.9,21.8).lineTo(-35.3,9.8).lineTo(-5.4,-32).lineTo(35.3,24.8).lineTo(11.2,12.3).lineTo(-1.2,32).closePath();
	this.shape.setTransform(35.3,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.7,64);


(lib.barrena0024 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-9,11.7).lineTo(-16.3,21.8).lineTo(-22.2,9.8).lineTo(-3.4,-32).lineTo(22.2,24.8).lineTo(7.1,12.3).lineTo(-0.7,32).closePath();
	this.shape.setTransform(22.2,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.4,64);


(lib.barrena0023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(14.2,89.7).lineTo(-64.3,-89.7).lineTo(64.3,89.7).closePath();
	this.shape.setTransform(64.3,89.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.7,179.5);


(lib.barrena0022 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-11.2,10).lineTo(-20.5,18.8).lineTo(-27.9,8.4).lineTo(-4.3,-27.5).lineTo(27.9,21.3).lineTo(8.9,10.6).lineTo(-0.9,27.5).closePath();
	this.shape.setTransform(28,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.9,55);


(lib.barrena0021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-9.8,13).lineTo(-17.8,24.2).lineTo(-24.2,10.9).lineTo(-3.6,-35.5).lineTo(24.3,27.5).lineTo(7.8,13.6).lineTo(-0.8,35.5).closePath();
	this.shape.setTransform(24.3,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,71);


(lib.barrena0020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-19.1,11.9).lineTo(-34.8,22.2).lineTo(-47.5,10).lineTo(-7.2,-32.6).lineTo(47.5,25.3).lineTo(15.2,12.5).lineTo(-1.6,32.6).closePath();
	this.shape.setTransform(47.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.1,65.2);


(lib.barrena0019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-13.9,7.5).lineTo(-25.2,14).lineTo(-34.4,6.3).lineTo(-5.2,-20.6).lineTo(34.4,16).lineTo(11,7.9).lineTo(-1.2,20.6).closePath();
	this.shape.setTransform(34.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,41.2);


(lib.barrena0018 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-19.7,11.6).lineTo(-35.9,21.6).lineTo(-49,9.7).lineTo(-7.4,-31.6).lineTo(49,24.5).lineTo(15.6,12.2).lineTo(-1.6,31.6).closePath();
	this.shape.setTransform(49,31.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,63.3);


(lib.barrena0017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(8.9,89.7).lineTo(-40.4,-89.7).lineTo(40.4,89.7).closePath();
	this.shape.setTransform(40.4,89.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.9,179.5);


(lib.barrena0016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(19.7,88.8).lineTo(-89.3,-88.8).lineTo(89.3,88.8).closePath();
	this.shape.setTransform(89.3,88.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.6,177.6);


(lib.barrena0015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-40.5,89.7).lineTo(40.5,-89.7).lineTo(22.4,89.7).closePath();
	this.shape.setTransform(40.5,89.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.9,179.5);


(lib.barrena0014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6.5,1).curveTo(-9.2,0.6,-9.2,0).curveTo(-9.2,-0.6,-6.5,-1).curveTo(-3.8,-1.4,0,-1.4).curveTo(3.8,-1.4,6.5,-1).curveTo(9.2,-0.6,9.2,0).curveTo(9.2,0.6,6.5,1).curveTo(3.8,1.4,0,1.4).curveTo(-3.8,1.4,-6.5,1).closePath();
	this.shape.setTransform(9.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,2.9);


(lib.barrena0013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6.5,1).curveTo(-9.2,0.6,-9.2,0).curveTo(-9.2,-0.6,-6.5,-1).curveTo(-3.8,-1.4,0,-1.4).curveTo(3.8,-1.4,6.5,-1).curveTo(9.2,-0.6,9.2,0).curveTo(9.2,0.6,6.5,1).curveTo(3.8,1.4,0,1.4).curveTo(-3.8,1.4,-6.5,1).closePath();
	this.shape.setTransform(9.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,2.9);


(lib.barrena0012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6,0.9).curveTo(-8.5,0.6,-8.5,-0).curveTo(-8.5,-0.5,-6,-0.9).curveTo(-3.5,-1.3,-0,-1.3).curveTo(3.5,-1.3,6,-0.9).curveTo(8.5,-0.5,8.5,-0).curveTo(8.5,0.6,6,0.9).curveTo(3.5,1.3,-0,1.3).curveTo(-3.5,1.3,-6,0.9).closePath();
	this.shape.setTransform(8.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,2.6);


(lib.barrena0011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-15.1,2.4).curveTo(-21.3,1.4,-21.4,0).curveTo(-21.3,-1.3,-15.1,-2.3).curveTo(-8.8,-3.3,-0,-3.3).curveTo(8.8,-3.3,15.1,-2.3).curveTo(21.4,-1.3,21.3,0).curveTo(21.4,1.4,15.1,2.4).curveTo(8.8,3.3,-0,3.3).curveTo(-8.8,3.3,-15.1,2.4).closePath();
	this.shape.setTransform(21.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,6.6);


(lib.barrena0010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-5,0.8).curveTo(-7.1,0.5,-7.1,-0).curveTo(-7.1,-0.4,-5,-0.7).curveTo(-3,-1.1,0,-1.1).curveTo(2.9,-1.1,5,-0.7).curveTo(7.1,-0.4,7.1,-0).curveTo(7.1,0.5,5,0.8).curveTo(2.9,1.1,0,1.1).curveTo(-3,1.1,-5,0.8).closePath();
	this.shape.setTransform(7.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,2.2);


(lib.barrena009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-15.1,2.3).curveTo(-21.3,1.4,-21.4,0).curveTo(-21.3,-1.4,-15.1,-2.3).curveTo(-8.8,-3.3,-0,-3.3).curveTo(8.9,-3.3,15.1,-2.3).curveTo(21.4,-1.4,21.3,0).curveTo(21.4,1.4,15.1,2.3).curveTo(8.8,3.3,-0,3.3).curveTo(-8.8,3.3,-15.1,2.3).closePath();
	this.shape.setTransform(21.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,6.6);


(lib.barrena008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6.5,1).curveTo(-9.2,0.6,-9.2,0).curveTo(-9.2,-0.6,-6.5,-1).curveTo(-3.8,-1.4,0,-1.4).curveTo(3.8,-1.4,6.5,-1).curveTo(9.2,-0.6,9.2,0).curveTo(9.2,0.6,6.5,1).curveTo(3.8,1.4,0,1.4).curveTo(-3.8,1.4,-6.5,1).closePath();
	this.shape.setTransform(9.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,2.8);


(lib.barrena007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,-0).curveTo(-3.5,-0.5,0,-0.5).curveTo(3.5,-0.5,3.5,-0).curveTo(3.5,0.5,0,0.5).curveTo(-3.5,0.5,-3.5,-0).closePath();
	this.shape.setTransform(3.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,1.1);


(lib.barrena006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,-0).curveTo(-3.5,-0.5,0,-0.5).curveTo(3.5,-0.5,3.5,-0).curveTo(3.5,0.5,0,0.5).curveTo(-3.5,0.5,-3.5,-0).closePath();
	this.shape.setTransform(3.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,1.1);


(lib.barrena005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.2,0).curveTo(-3.2,-0.5,-0,-0.5).curveTo(3.3,-0.5,3.2,0).curveTo(3.2,0.2,2.3,0.3).curveTo(1.3,0.5,-0,0.5).curveTo(-3.2,0.5,-3.2,0).closePath();
	this.shape.setTransform(3.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,1);


(lib.barrena004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-5.8,0.9).curveTo(-8.2,0.5,-8.2,0).curveTo(-8.2,-0.5,-5.8,-0.9).curveTo(-3.4,-1.2,0,-1.2).curveTo(3.4,-1.2,5.8,-0.9).curveTo(8.2,-0.5,8.2,0).curveTo(8.2,0.5,5.8,0.9).curveTo(3.4,1.2,0,1.3).curveTo(-3.4,1.2,-5.8,0.9).closePath();
	this.shape.setTransform(8.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,2.5);


(lib.barrena003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0).curveTo(-2.7,-0.4,-0,-0.4).curveTo(2.7,-0.4,2.7,0).curveTo(2.7,0.2,1.9,0.3).lineTo(-0,0.4).curveTo(-2.7,0.4,-2.7,0).closePath();
	this.shape.setTransform(2.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.5,0.9);


(lib.barrena002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-5.8,0.9).curveTo(-8.2,0.5,-8.2,-0).curveTo(-8.2,-0.5,-5.8,-0.9).curveTo(-3.4,-1.3,-0,-1.3).curveTo(3.3,-1.3,5.8,-0.9).curveTo(8.2,-0.5,8.2,-0).curveTo(8.2,0.5,5.8,0.9).curveTo(3.4,1.3,-0,1.3).curveTo(-3.4,1.3,-5.8,0.9).closePath();
	this.shape.setTransform(8.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,2.6);


(lib.barrena001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,-0).curveTo(-3.5,-0.5,0,-0.6).curveTo(3.5,-0.5,3.5,-0).curveTo(3.5,0.6,0,0.5).curveTo(-3.5,0.6,-3.5,-0).closePath();
	this.shape.setTransform(3.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,1.1);


(lib.barrenamolinoaspas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#556E79").beginStroke().moveTo(-1.2,5.3).curveTo(-3.3,4.8,-4.6,2.9).curveTo(-5.7,1,-5.2,-1.2).curveTo(-4.7,-3.3,-2.9,-4.6).curveTo(-0.9,-5.8,1.2,-5.3).curveTo(3.4,-4.8,4.6,-2.9).curveTo(5.7,-1,5.2,1.2).curveTo(4.8,3.4,2.9,4.6).curveTo(1.6,5.4,0.1,5.4).lineTo(-1.2,5.3).closePath();
	this.shape.setTransform(-65.2,82.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,8.1).curveTo(-5.2,7.4,-7,4.5).curveTo(-8.9,1.6,-8.1,-1.8).curveTo(-7.4,-5.2,-4.4,-7).curveTo(-1.5,-8.9,1.8,-8.1).curveTo(5.2,-7.4,7,-4.5).curveTo(8.8,-1.5,8.1,1.8).curveTo(7.4,5.2,4.4,7).curveTo(2.4,8.3,0.1,8.3).curveTo(-0.8,8.3,-1.8,8.1).closePath();
	this.shape_1.setTransform(-65.2,82.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-32.4,-27.7).lineTo(-30.1,-30.2).lineTo(32.4,22.4).lineTo(25.1,30.2).closePath();
	this.shape_2.setTransform(-32.4,113.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-39.9,5.3).lineTo(38.9,-15.5).lineTo(40,-12.3).lineTo(-36.8,15.5).closePath();
	this.shape_3.setTransform(-106.8,97.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.4,39.8).lineTo(1.9,-40.5).lineTo(12.4,-38.2).lineTo(-9,40.6).closePath();
	this.shape_4.setTransform(-54,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,0,146.8,143.6);


(lib.barrenahooyo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-2.8,0.7).curveTo(-4,0.4,-4,-0).curveTo(-4,-0.4,-2.8,-0.7).curveTo(-1.7,-1,0,-1).curveTo(1.7,-1,2.8,-0.7).curveTo(4,-0.4,4,-0).curveTo(4,0.4,2.8,0.7).curveTo(1.7,1,0,1).curveTo(-1.7,1,-2.8,0.7).closePath();
	this.shape.setTransform(-4,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,0,8,2);


(lib.barrenahandss = function(mode,startPosition,loop) {
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


(lib.barrenabrazo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-1.2,1.6).curveTo(-1.9,1.1,-2,0.3).curveTo(-2.1,-0.5,-1.6,-1.2).curveTo(-1.2,-1.9,-0.4,-2).curveTo(0.4,-2.1,1.1,-1.6).curveTo(1.8,-1.2,2,-0.3).curveTo(2.1,0.5,1.6,1.2).curveTo(1.1,1.8,0.3,2).lineTo(-0,2).curveTo(-0.6,2,-1.2,1.6).closePath();
	this.shape.setTransform(-29,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-10.6,4.6).curveTo(-11.1,4.2,-11.1,3.6).lineTo(-11.4,-2.4).curveTo(-11.5,-3,-11.1,-3.5).curveTo(-10.7,-3.8,-10.1,-3.9).lineTo(9.7,-5).curveTo(10.2,-5,10.7,-4.6).curveTo(11.1,-4.2,11.1,-3.6).lineTo(11.5,2.4).curveTo(11.5,3,11.1,3.5).curveTo(10.7,3.9,10.1,3.9).lineTo(-9.6,4.9).lineTo(-9.7,5).curveTo(-10.2,5,-10.6,4.6).closePath();
	this.shape_1.setTransform(-23,31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-2.6,2.5).curveTo(-3.1,2.1,-3.2,1.5).lineTo(-3.5,-0.4).curveTo(-3.6,-1,-3.3,-1.4).curveTo(-2.9,-1.9,-2.4,-2).lineTo(1.6,-2.7).curveTo(2.1,-2.7,2.6,-2.4).curveTo(3.1,-2.1,3.2,-1.5).lineTo(3.5,0.4).curveTo(3.6,1,3.3,1.5).curveTo(2.9,2,2.4,2).lineTo(-1.6,2.7).lineTo(-1.9,2.7).curveTo(-2.3,2.7,-2.6,2.5).closePath();
	this.shape_2.setTransform(-22.5,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#757575").beginStroke().moveTo(-3.7,4.6).curveTo(-5.3,3.9,-5.4,2.5).curveTo(-5.5,0.9,-3.7,0.4).curveTo(-2.8,0.1,-1.4,-0).lineTo(0.2,-0.3).curveTo(0.8,-0.5,1.1,-1.5).curveTo(1.5,-2.4,1.4,-3.2).curveTo(1.3,-3.9,2.3,-4.6).curveTo(3.4,-5.3,4.3,-4.7).curveTo(5,-4.3,5.3,-2.4).lineTo(5.4,0.9).curveTo(5.4,2.3,4.5,3.5).curveTo(3.5,4.7,2.1,4.7).lineTo(1.7,4.8).lineTo(-0.9,4.9).lineTo(-1.6,5).curveTo(-3,5,-3.7,4.6).closePath();
	this.shape_3.setTransform(-20.9,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.6,22.2).curveTo(-4.9,22.2,-5.8,20.8).lineTo(-8.3,14.6).lineTo(-10.7,4.2).lineTo(-8.6,-14.6).lineTo(-8.9,-15.5).curveTo(-9.2,-16.8,-8.6,-18.8).curveTo(-8,-20.6,-7.2,-21.8).curveTo(-6.9,-22.3,-5.3,-22.2).lineTo(-3.7,-22.1).lineTo(-2.6,-20.5).lineTo(4.7,-21.8).curveTo(6.2,-22,6.6,-21.6).curveTo(7.2,-21.1,7.5,-18.6).curveTo(7.9,-15.1,9.8,4.1).lineTo(10.7,11.2).lineTo(10.2,14.1).lineTo(8.9,16.3).curveTo(7.6,18.6,7.6,19.3).curveTo(7.4,21.7,5.8,21.8).lineTo(1.1,22).curveTo(-1.2,22.2,-2.9,22.2).lineTo(-3.6,22.2).closePath();
	this.shape_4.setTransform(-23.2,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.3,5).curveTo(-2.7,4.6,-2.7,4).lineTo(-2.8,-4).curveTo(-2.8,-4.5,-2.4,-5).curveTo(-1.9,-5.4,-1.4,-5.4).lineTo(1.3,-5.4).curveTo(1.8,-5.4,2.3,-5).curveTo(2.7,-4.6,2.7,-4).lineTo(2.8,3.9).curveTo(2.8,4.5,2.4,5).curveTo(1.9,5.4,1.4,5.4).lineTo(-1.3,5.4).lineTo(-1.4,5.4).curveTo(-1.9,5.4,-2.3,5).closePath();
	this.shape_5.setTransform(-7.8,79.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#757575").beginStroke().moveTo(-3,-1.5).lineTo(3,-2.1).lineTo(2.9,1.4).lineTo(-3,2.1).closePath();
	this.shape_6.setTransform(-21.5,86.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(12.2,4).curveTo(11.7,3.9,10.6,3.5).curveTo(9.2,2.9,8.7,2.4).curveTo(8.2,2,6.5,2).lineTo(4.3,2).lineTo(2.7,1.3).curveTo(1.4,0.8,0.7,1).curveTo(-0.1,1.2,-9,2.3).curveTo(-11.6,2.6,-12.7,1.9).curveTo(-13.9,1.2,-14.2,-0.9).curveTo(-14.4,-2.8,-13.4,-3.5).curveTo(-12.5,-4.1,-10.1,-4).lineTo(-3.8,-4).curveTo(1.4,-4.1,2.1,-3.9).curveTo(3.2,-3.5,5.2,-2.4).lineTo(6.7,-2).curveTo(8.4,-1.7,9.9,-1.9).curveTo(11.7,-2.2,13.1,-0.5).curveTo(14.5,1.1,14.2,2.5).curveTo(14,3.2,13.3,3.7).curveTo(12.7,4,12.4,4).lineTo(12.2,4).closePath();
	this.shape_7.setTransform(-14.2,77.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.5,82.9).lineTo(-3.7,-36.5).lineTo(-3,-37.6).lineTo(-3.1,-41.6).lineTo(-3.8,-42.2).lineTo(-4.2,-78.5).lineTo(-2.2,-84.3).lineTo(2.1,-83.7).lineTo(3.8,-78.1).lineTo(3.9,-43.2).lineTo(3.4,-42).lineTo(3.4,-38.9).lineTo(3.9,-37.9).lineTo(4.2,82.6).curveTo(3.5,84,1.2,84.2).lineTo(0.5,84.3).curveTo(-1.5,84.3,-2.5,82.9).closePath();
	this.shape_8.setTransform(-21.7,126.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#757575").beginStroke().moveTo(-0.1,5.8).curveTo(-2.7,5.5,-2.9,3.6).curveTo(-2.9,2.4,-2.5,1.4).lineTo(-2,0.6).lineTo(-2.1,-5.8).lineTo(1,-5.7).lineTo(1.4,0.3).lineTo(2.2,1).curveTo(3.1,2,2.9,3.3).curveTo(2.6,5.8,0.3,5.8).lineTo(-0.1,5.8).closePath();
	this.shape_9.setTransform(-20.9,215.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.7,3.2).curveTo(4.1,1.6,3.3,1.4).curveTo(2.6,1.2,0,1.3).curveTo(-2.8,1.4,-4.1,1.7).curveTo(-5.4,2,-6.8,2).curveTo(-8.6,2.1,-8.7,1.7).lineTo(-8.6,-0.3).curveTo(-8.8,-2.4,-8.7,-2.7).curveTo(-8.6,-3.2,-7.5,-3.3).lineTo(-6.6,-3.5).lineTo(-2,-3.3).curveTo(1.4,-3.1,5,-2).curveTo(6.8,-1.4,7.9,-0.9).lineTo(8.1,-0.7).lineTo(8.6,0.4).curveTo(8.8,1.1,8.6,2).curveTo(8.3,2.9,7.3,3.3).curveTo(6.9,3.5,6.5,3.5).curveTo(6.1,3.5,5.7,3.2).closePath();
	this.shape_10.setTransform(-9.1,81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,0,34.5,221.4);


(lib.barrena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-8.5,7.3).curveTo(-13.8,6.1,-13.9,5.6).lineTo(-14.4,4.2).curveTo(-14.5,3.6,-13.6,3.2).curveTo(-10.1,1.7,-1.2,-0.5).lineTo(11,-3.4).curveTo(12.8,-4,12.2,-4.6).curveTo(11.9,-4.9,10.7,-5.4).lineTo(3.6,-7.8).lineTo(3.6,-8.4).lineTo(8.3,-7.3).curveTo(11.8,-6.5,12.8,-6).curveTo(14.1,-5.6,14.3,-4).lineTo(14.4,-2.7).curveTo(13.3,-1.4,4.7,0.4).curveTo(1.5,1.1,-3.3,2.2).curveTo(-9.7,3.8,-11.9,4.8).curveTo(-13.2,5.3,-9.1,6.4).curveTo(-5.6,7.2,-3.3,7.5).lineTo(-3.3,8.4).lineTo(-8.5,7.3).closePath();
	this.shape.setTransform(-16,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#757575").beginStroke().moveTo(-8.4,7.1).curveTo(-13.7,5.7,-13.8,5.2).curveTo(-14.1,4.2,-14,3.9).curveTo(-13.9,3.2,-13,2.8).curveTo(-9.4,1.3,-1,-0.9).lineTo(10.9,-3.9).curveTo(13.6,-4.7,10.4,-5.7).lineTo(3.7,-7.7).lineTo(3.7,-8.4).lineTo(8.2,-7.4).curveTo(11.4,-6.7,12.5,-6.2).curveTo(13.8,-5.7,14,-4.5).curveTo(14.1,-3.9,13.9,-2.8).curveTo(13.7,-1.8,4.4,0.2).curveTo(-8.8,3,-12.3,4.5).curveTo(-13.6,5.1,-9.2,6.3).curveTo(-5.3,7.3,-3.1,7.4).lineTo(-3.1,8.4).lineTo(-8.4,7.1).closePath();
	this.shape_1.setTransform(-15.9,71.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#B6B7B8").beginStroke().moveTo(-8.5,7.3).curveTo(-13.8,6.1,-13.9,5.6).lineTo(-14.4,4.2).curveTo(-14.5,3.6,-13.6,3.1).curveTo(-10.1,1.7,-1.2,-0.5).lineTo(11,-3.4).curveTo(12.8,-4,12.2,-4.7).curveTo(11.8,-5,10.7,-5.4).lineTo(3.6,-7.8).lineTo(3.6,-8.4).lineTo(8.3,-7.3).curveTo(11.8,-6.5,12.8,-6).curveTo(14,-5.6,14.3,-4).lineTo(14.4,-2.7).curveTo(13.3,-1.4,4.7,0.4).curveTo(-8.6,3.2,-11.9,4.7).curveTo(-13.2,5.3,-9.1,6.4).curveTo(-5.7,7.2,-3.3,7.5).lineTo(-3.3,8.4).lineTo(-8.5,7.3).closePath();
	this.shape_2.setTransform(-15.9,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#B6B7B8").beginStroke().moveTo(-13.8,4.3).curveTo(-15.6,2.6,-13.1,1.8).curveTo(-8.7,0.5,-5,-0.2).curveTo(6.7,-2.3,10,-3.2).curveTo(11.5,-3.7,11.6,-3.9).curveTo(11.8,-4.1,10.9,-4.6).curveTo(10,-5,6.5,-6.3).curveTo(2.9,-7.5,2.2,-7.6).lineTo(2.2,-8.2).curveTo(7,-7.1,13.7,-4.7).curveTo(14.3,-4.5,14.5,-3.9).curveTo(14.7,-3.2,14.1,-2.5).curveTo(12.9,-1.4,7.1,0.1).curveTo(1.9,1.4,-2,1.9).curveTo(-4.6,2.2,-7.5,2.7).curveTo(-11.4,3.5,-12.3,4.2).curveTo(-12.7,4.6,-9.5,6).curveTo(-6.6,7.2,-4.9,7.7).lineTo(-5,8.2).curveTo(-12,5.9,-13.8,4.3).closePath();
	this.shape_3.setTransform(-14.6,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#757575").beginStroke().moveTo(-1.2,5.9).curveTo(-9.5,3.8,-10,3.1).curveTo(-10.5,2.5,-10.5,1.8).curveTo(-10.5,1,-9.4,0.5).curveTo(-7.9,-0.2,-4.7,-0.9).lineTo(1.6,-1.9).curveTo(3.3,-2.2,5.4,-2.7).curveTo(8,-3.3,8.7,-3.7).curveTo(9.6,-4.4,6.8,-5.4).lineTo(6.8,-6.1).curveTo(8.5,-5.7,9.7,-4.6).curveTo(10.8,-3.5,10.3,-2.8).curveTo(9.1,-1.3,4.8,-0.4).lineTo(-2.3,0.8).curveTo(-7.6,1.9,-8.9,2.3).curveTo(-9.6,2.5,-6.3,3.7).curveTo(-3,5,-0.5,5.4).lineTo(-0.5,6.1).closePath();
	this.shape_4.setTransform(-19.2,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#B6B7B8").beginStroke().moveTo(-6.2,7.5).lineTo(-6.1,6.2).curveTo(4.1,6.4,3.1,0.6).curveTo(2.7,-2.1,-0.6,-4).curveTo(-3.6,-5.7,-6.5,-5.7).lineTo(-6.4,-7.6).curveTo(-2.2,-6.4,1.4,-4.6).curveTo(6,-2.3,6.4,-0.4).curveTo(6.8,2.4,5.7,4).curveTo(5.2,4.8,3.5,5.8).curveTo(2.5,6.4,-1.4,7).curveTo(-4.6,7.6,-5.8,7.6).lineTo(-6.2,7.5).closePath();
	this.shape_5.setTransform(-6.6,86.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#B6B7B8").beginStroke().moveTo(-8.5,7.3).curveTo(-13.8,6.1,-13.9,5.6).lineTo(-14.4,4.2).curveTo(-14.5,3.6,-13.6,3.2).curveTo(-10.1,1.7,-1.2,-0.5).lineTo(11,-3.4).curveTo(12.8,-4,12.2,-4.6).curveTo(11.9,-4.9,10.7,-5.4).lineTo(3.6,-7.8).lineTo(3.6,-8.4).lineTo(8.3,-7.3).curveTo(11.8,-6.5,12.8,-6).curveTo(14.1,-5.6,14.3,-4).lineTo(14.4,-2.7).curveTo(13.3,-1.4,4.7,0.4).curveTo(1.5,1.1,-3.3,2.2).curveTo(-9.7,3.8,-11.9,4.8).curveTo(-13.2,5.3,-9.1,6.4).curveTo(-5.6,7.2,-3.3,7.5).lineTo(-3.3,8.4).lineTo(-8.5,7.3).closePath();
	this.shape_6.setTransform(-16,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#B6B7B8").beginStroke().moveTo(-8.4,7.1).curveTo(-13.7,5.7,-13.8,5.2).curveTo(-14.1,4.2,-14,3.9).curveTo(-13.9,3.2,-13,2.8).curveTo(-9.4,1.3,-1,-0.9).lineTo(10.9,-3.9).curveTo(13.6,-4.7,10.4,-5.7).lineTo(3.7,-7.7).lineTo(3.7,-8.4).lineTo(8.2,-7.4).curveTo(11.4,-6.7,12.5,-6.2).curveTo(13.8,-5.7,14,-4.5).curveTo(14.1,-3.9,13.9,-2.8).curveTo(13.7,-1.8,4.4,0.2).curveTo(-8.8,3,-12.3,4.5).curveTo(-13.6,5.1,-9.2,6.3).curveTo(-5.3,7.3,-3.1,7.4).lineTo(-3.1,8.4).lineTo(-8.4,7.1).closePath();
	this.shape_7.setTransform(-15.9,71.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#757575").beginStroke().moveTo(-8.5,7.3).curveTo(-13.8,6.1,-13.9,5.6).lineTo(-14.4,4.2).curveTo(-14.5,3.6,-13.6,3.1).curveTo(-10.1,1.7,-1.2,-0.5).lineTo(11,-3.4).curveTo(12.8,-4,12.2,-4.7).curveTo(11.8,-5,10.7,-5.4).lineTo(3.6,-7.8).lineTo(3.6,-8.4).lineTo(8.3,-7.3).curveTo(11.8,-6.5,12.8,-6).curveTo(14,-5.6,14.3,-4).lineTo(14.4,-2.7).curveTo(13.3,-1.4,4.7,0.4).curveTo(-8.6,3.2,-11.9,4.7).curveTo(-13.2,5.3,-9.1,6.4).curveTo(-5.7,7.2,-3.3,7.5).lineTo(-3.3,8.4).lineTo(-8.5,7.3).closePath();
	this.shape_8.setTransform(-15.9,55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#757575").beginStroke().moveTo(-13.8,4.3).curveTo(-15.6,2.6,-13.1,1.8).curveTo(-8.7,0.5,-5,-0.2).curveTo(6.7,-2.3,10,-3.2).curveTo(11.5,-3.7,11.6,-3.9).curveTo(11.8,-4.1,10.9,-4.6).curveTo(10,-5,6.5,-6.3).curveTo(2.9,-7.5,2.2,-7.6).lineTo(2.2,-8.2).curveTo(7,-7.1,13.7,-4.7).curveTo(14.3,-4.5,14.5,-3.9).curveTo(14.7,-3.2,14.1,-2.5).curveTo(12.9,-1.4,7.1,0.1).curveTo(1.9,1.4,-2,1.9).curveTo(-4.6,2.2,-7.5,2.7).curveTo(-11.4,3.5,-12.3,4.2).curveTo(-12.7,4.6,-9.5,6).curveTo(-6.6,7.2,-4.9,7.7).lineTo(-5,8.2).curveTo(-12,5.9,-13.8,4.3).closePath();
	this.shape_9.setTransform(-14.6,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#B6B7B8").beginStroke().moveTo(-1.2,5.9).curveTo(-9.5,3.8,-10,3.1).curveTo(-10.5,2.5,-10.5,1.8).curveTo(-10.5,1,-9.4,0.5).curveTo(-7.9,-0.2,-4.7,-0.9).lineTo(1.6,-1.9).curveTo(3.3,-2.2,5.4,-2.7).curveTo(8,-3.3,8.7,-3.7).curveTo(9.6,-4.4,6.8,-5.4).lineTo(6.8,-6.1).curveTo(8.5,-5.7,9.7,-4.6).curveTo(10.8,-3.5,10.3,-2.8).curveTo(9.1,-1.3,4.8,-0.4).lineTo(-2.3,0.8).curveTo(-7.6,1.9,-8.9,2.3).curveTo(-9.6,2.5,-6.3,3.7).curveTo(-3,5,-0.5,5.4).lineTo(-0.5,6.1).closePath();
	this.shape_10.setTransform(-19.2,6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#757575").beginStroke().moveTo(-6.2,7.5).lineTo(-6.1,6.2).curveTo(4.1,6.4,3.1,0.6).curveTo(2.7,-2.1,-0.6,-4).curveTo(-3.6,-5.7,-6.5,-5.7).lineTo(-6.4,-7.6).curveTo(-2.2,-6.4,1.4,-4.6).curveTo(6,-2.3,6.4,-0.4).curveTo(6.8,2.4,5.7,4).curveTo(5.2,4.8,3.5,5.8).curveTo(2.5,6.4,-1.4,7).curveTo(-4.6,7.6,-5.8,7.6).lineTo(-6.2,7.5).closePath();
	this.shape_11.setTransform(-6.6,86.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,0,30.5,93.6);


(lib.barrenamolino = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// molino-aspas
	this.instance = new lib.barrenamolinoaspas();
	this.instance.parent = this;
	this.instance.setTransform(-73.4,71.8,1,1,0,0,0,-73.4,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.2,118.2).lineTo(-2.3,-118.2).lineTo(2.3,-118.2).lineTo(7.2,118.2).closePath();
	this.shape.setTransform(-65.3,201.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,0,146.8,319.7);


(lib.barrenaconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.barrenahandss();
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


(lib.barrenacamion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-0.6,2.5).curveTo(-1.6,2.3,-2.1,1.3).curveTo(-2.6,0.5,-2.4,-0.6).curveTo(-2.2,-1.6,-1.3,-2.1).curveTo(-0.4,-2.8,0.6,-2.5).curveTo(1.6,-2.2,2.1,-1.4).curveTo(2.6,-0.4,2.4,0.6).curveTo(2.2,1.6,1.3,2.1).curveTo(0.7,2.6,-0,2.6).lineTo(-0.6,2.5).closePath();
	this.shape.setTransform(-60.7,69.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#757575").beginStroke().moveTo(-5.1,2.2).lineTo(-3.8,-4.1).lineTo(5.1,-2.2).lineTo(3.7,4.1).closePath();
	this.shape_1.setTransform(-71.6,84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#757575").beginStroke().moveTo(-0.3,1.3).curveTo(-0.8,1.2,-1.1,0.7).curveTo(-1.4,0.2,-1.2,-0.3).curveTo(-1.1,-0.8,-0.7,-1.1).curveTo(-0.2,-1.4,0.3,-1.3).curveTo(0.8,-1.2,1.1,-0.7).curveTo(1.4,-0.2,1.2,0.3).curveTo(1.1,0.8,0.7,1.1).curveTo(0.3,1.3,-0.1,1.3).lineTo(-0.3,1.3).closePath();
	this.shape_2.setTransform(-192.6,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#757575").beginStroke().moveTo(-0.5,2).curveTo(-1.3,1.8,-1.7,1.1).curveTo(-2.1,0.4,-1.9,-0.5).curveTo(-1.7,-1.3,-1,-1.8).curveTo(-0.3,-2.2,0.5,-2).curveTo(1.3,-1.8,1.7,-1.1).curveTo(2.1,-0.4,1.9,0.4).curveTo(1.7,1.3,1,1.7).curveTo(0.5,2.1,-0,2.1).lineTo(-0.5,2).closePath();
	this.shape_3.setTransform(-49.7,88.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-5.7,4.8).curveTo(-2.7,-1.6,-2.4,-2.6).curveTo(-1.6,-4.4,-2.1,-4.6).lineTo(-3.1,-4.9).lineTo(-2,-7.6).lineTo(5.7,-4.2).lineTo(0.5,7.6).closePath();
	this.shape_4.setTransform(-73.9,56.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#9E9E9E").beginStroke().moveTo(4.8,3.8).lineTo(-6,-1.4).curveTo(-6.4,-1.6,-6.4,-2).curveTo(-6.6,-2.5,-6.3,-3).lineTo(-6.3,-3.1).curveTo(-6.1,-3.6,-5.7,-3.8).curveTo(-5.3,-4,-4.9,-3.8).lineTo(5.9,1.3).curveTo(6.4,1.5,6.5,2).curveTo(6.5,2.5,6.4,3).lineTo(6.3,3).curveTo(6.1,3.5,5.6,3.8).lineTo(5.2,3.9).lineTo(4.8,3.8).closePath();
	this.shape_5.setTransform(-89.5,58.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#757575").beginStroke().moveTo(-1.1,4.7).curveTo(-2.9,4.2,-3.9,2.5).curveTo(-4.9,0.9,-4.5,-1.1).curveTo(-4,-2.9,-2.4,-4.1).curveTo(-0.8,-5.1,1.1,-4.7).curveTo(2.9,-4.2,3.9,-2.5).curveTo(4.9,-0.9,4.5,1.1).curveTo(4,2.9,2.4,4).curveTo(1.2,4.8,-0,4.8).lineTo(-1.1,4.7).closePath();
	this.shape_6.setTransform(-85.7,50.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-7.5,3).lineTo(-4.1,-5.2).curveTo(-3.5,-6.8,-1.3,-7.8).curveTo(1.2,-8.9,3.5,-8).curveTo(5.9,-7,6.9,-4.6).curveTo(7.9,-2.4,7.2,-0.3).curveTo(6.3,2.4,3.3,8.4).closePath();
	this.shape_7.setTransform(-86.9,52.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#757575").beginStroke().moveTo(-0.3,1.4).curveTo(-0.9,1.3,-1.2,0.8).curveTo(-1.5,0.2,-1.3,-0.3).curveTo(-1.2,-0.9,-0.7,-1.2).curveTo(-0.2,-1.5,0.3,-1.4).curveTo(0.9,-1.3,1.2,-0.8).curveTo(1.5,-0.3,1.3,0.3).curveTo(1.2,0.9,0.7,1.2).curveTo(0.4,1.4,0,1.4).lineTo(-0.3,1.4).closePath();
	this.shape_8.setTransform(-202.7,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#757575").beginStroke().moveTo(-8.3,0.8).lineTo(-4.8,-7).lineTo(8.3,-0.8).lineTo(4.8,7.1).closePath();
	this.shape_9.setTransform(-108.2,63.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#757575").beginStroke().moveTo(1.1,1.6).lineTo(-1.9,0.1).curveTo(-2.3,-0.1,-2.4,-0.4).curveTo(-2.5,-0.8,-2.3,-1.2).curveTo(-2.2,-1.5,-1.8,-1.6).curveTo(-1.5,-1.8,-1.1,-1.6).lineTo(1.9,-0.1).curveTo(2.3,0,2.4,0.4).curveTo(2.5,0.8,2.4,1.1).curveTo(2.1,1.7,1.6,1.7).lineTo(1.1,1.6).closePath();
	this.shape_10.setTransform(-203.7,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,3.9).lineTo(0.3,1.4).curveTo(-0.4,3,-1.4,3.7).curveTo(-1.8,3,-1.6,1.8).lineTo(-1.3,0.7).lineTo(-3,3.5).curveTo(-3.7,2.5,-2.8,-0.8).lineTo(-1.8,-4).lineTo(3.3,-1.7).lineTo(2.2,1.4).curveTo(1.1,4,-0.2,4).lineTo(-0.6,3.9).closePath();
	this.shape_11.setTransform(-206.2,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-8.4,11.8).lineTo(1.3,-14.4).lineTo(8.4,-11.3).lineTo(-1,14.4).closePath();
	this.shape_12.setTransform(-216.4,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-9.2,5.5).lineTo(-3.8,-9.9).lineTo(9.2,-5.1).lineTo(3.9,10).closePath();
	this.shape_13.setTransform(-196.1,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#757575").beginStroke().moveTo(-0.3,1.3).curveTo(-0.8,1.2,-1.1,0.7).curveTo(-1.4,0.3,-1.2,-0.3).curveTo(-1.1,-0.8,-0.7,-1.1).curveTo(-0.2,-1.4,0.3,-1.3).curveTo(0.8,-1.2,1.1,-0.7).curveTo(1.3,-0.3,1.2,0.3).curveTo(1.2,0.8,0.7,1.1).curveTo(0.4,1.3,-0,1.3).lineTo(-0.3,1.3).closePath();
	this.shape_14.setTransform(-236,23.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#757575").beginStroke().moveTo(-0.3,1.3).curveTo(-0.8,1.2,-1.1,0.8).curveTo(-1.4,0.3,-1.2,-0.3).curveTo(-1.1,-0.8,-0.7,-1.1).curveTo(-0.2,-1.4,0.3,-1.3).curveTo(0.8,-1.2,1.1,-0.7).curveTo(1.4,-0.2,1.2,0.3).curveTo(1.1,0.8,0.7,1.1).curveTo(0.3,1.3,-0.1,1.3).lineTo(-0.3,1.3).closePath();
	this.shape_15.setTransform(-222.6,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#757575").beginStroke().moveTo(-0.3,1.3).curveTo(-0.8,1.2,-1.1,0.7).curveTo(-1.4,0.2,-1.3,-0.3).curveTo(-1.2,-0.8,-0.7,-1.1).curveTo(-0.2,-1.4,0.3,-1.3).curveTo(0.8,-1.2,1.1,-0.7).curveTo(1.3,-0.3,1.2,0.3).curveTo(1.1,0.8,0.7,1.1).curveTo(0.4,1.3,0,1.3).lineTo(-0.3,1.3).closePath();
	this.shape_16.setTransform(-228,20.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#757575").beginStroke().moveTo(-0.3,1.3).curveTo(-0.8,1.2,-1.1,0.7).curveTo(-1.3,0.2,-1.2,-0.3).curveTo(-1.1,-0.8,-0.7,-1.1).curveTo(-0.2,-1.4,0.3,-1.3).curveTo(0.8,-1.2,1.1,-0.7).curveTo(1.4,-0.3,1.3,0.3).curveTo(1.1,0.9,0.7,1.1).curveTo(0.4,1.3,-0,1.3).lineTo(-0.3,1.3).closePath();
	this.shape_17.setTransform(-223.2,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-4.5,1.7).lineTo(-2.4,-4.3).lineTo(4.6,-1.7).lineTo(2.3,4.3).closePath();
	this.shape_18.setTransform(-222.7,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#757575").beginStroke().moveTo(-3.3,1).lineTo(3.5,-2.5).lineTo(3.1,-0.8).lineTo(-3.5,2.5).closePath();
	this.shape_19.setTransform(-241.4,23.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-9.7,13.8).curveTo(-12,13.3,-12.7,10.1).curveTo(-13.3,7,-12,5.2).curveTo(-10.7,3.3,-5.5,-3.1).curveTo(-0.1,-9.9,1.1,-11.1).curveTo(2.4,-12.5,3.9,-13.3).curveTo(5.6,-14.2,6.8,-13.8).curveTo(9,-13.1,10.5,-12.1).curveTo(12.9,-10.6,12.9,-8.8).lineTo(11.2,-4.3).curveTo(8.9,0.8,6.5,4.1).curveTo(3.4,8.2,0.6,9).curveTo(-1.9,9.1,-2.9,9.7).lineTo(-5.2,12.6).curveTo(-6.5,13.9,-8.4,13.9).lineTo(-9.7,13.8).closePath();
	this.shape_20.setTransform(-227.9,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-7.2,4.9).lineTo(-1.9,-8.2).lineTo(7.2,-4.1).lineTo(2.5,8.2).closePath();
	this.shape_21.setTransform(-206.4,11.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#757575").beginStroke().moveTo(-3,-0.1).lineTo(-0.6,-1.9).lineTo(3,-0.4).lineTo(2.3,1.8).closePath();
	this.shape_22.setTransform(-192.3,8.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#F4F4F4").beginStroke().moveTo(5.3,2).curveTo(-44.7,-19.7,-45.8,-20.3).curveTo(-48.4,-21.6,-50.4,-21).curveTo(-51.3,-20.7,-53.8,-20.7).lineTo(-56.2,-20.8).lineTo(-56.4,-21.9).lineTo(-50.6,-23.4).curveTo(-48.7,-23.8,-45.3,-22.4).lineTo(56.4,21.1).lineTo(55.2,23.5).lineTo(5.3,2).closePath();
	this.shape_23.setTransform(-146,26.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-56.2,-22.5).lineTo(-55.7,-26.8).lineTo(-46,-27.4).lineTo(56.2,21.4).lineTo(53.2,27.4).closePath();
	this.shape_24.setTransform(-147.4,32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(23.4,6.5).lineTo(-21.7,-11.7).lineTo(-23.2,-9.2).lineTo(21.9,11.6).closePath();
	this.shape_25.setTransform(-112.5,43.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-23.3,-9.1).lineTo(-21.8,-11.7).lineTo(23.3,6.6).lineTo(21.8,11.7).closePath();
	this.shape_26.setTransform(-112.4,43.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-6.6,-1.5).lineTo(-5.6,-4.1).lineTo(6.6,1.4).lineTo(5.5,4.1).closePath();
	this.shape_27.setTransform(-79.8,62.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-8.8,5.9).lineTo(-1.8,-10.8).lineTo(8.8,-6.1).lineTo(1.7,10.8).closePath();
	this.shape_28.setTransform(-80.6,54);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#757575").beginStroke().moveTo(-1.8,0.1).lineTo(-1,-1.5).lineTo(1.8,-0.3).lineTo(1,1.5).closePath();
	this.shape_29.setTransform(-76.7,45.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-25,-4.5).lineTo(-96.6,-21.7).lineTo(-95.2,-29.9).lineTo(-75.5,-47).lineTo(96.6,31.4).lineTo(95.1,37.2).lineTo(91.7,44.9).lineTo(87.4,47).closePath();
	this.shape_30.setTransform(-140.5,49.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,2.8).lineTo(0.1,-4.6).lineTo(3.1,-3).lineTo(0.2,4.6).closePath();
	this.shape_31.setTransform(-46.5,91.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#757575").beginStroke().moveTo(-9.8,-3.7).lineTo(2,-5.6).lineTo(8.3,-4.2).lineTo(9.8,5.6).closePath();
	this.shape_32.setTransform(-65.9,70.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.8).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,1.9,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4,4.4,2.1,4.5).closePath();
	this.shape_33.setTransform(-288.6,129.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.8).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,2,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4,4.4,2.1,4.5).closePath();
	this.shape_34.setTransform(-312.8,129.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3.1,4.5).curveTo(-4.5,4.5,-5.1,3.5).lineTo(-5.4,2.6).lineTo(-5.4,1.7).curveTo(-5.1,0.7,-4.3,0.3).lineTo(-0.7,-1).lineTo(2,-1.9).curveTo(2,-2,2.1,-2).curveTo(2.1,-2,2.2,-2).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.2).curveTo(2.3,-2.4,1.8,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-2.9).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).lineTo(5.3,-1.6).curveTo(5,-0.5,4.1,-0.2).curveTo(-0.4,1.3,-1.6,1.9).curveTo(-2.4,2.2,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.9).lineTo(5.2,4).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_35.setTransform(-300.5,129.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.5,-4.8,2.4).lineTo(-4.5,2.4).lineTo(1.7,2.4).curveTo(2.1,2.4,2.2,2.3).curveTo(2.3,2.2,1.6,1.9).lineTo(-1.2,0.8).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.4,-1.6).lineTo(-5.4,-2.6).lineTo(-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.5).curveTo(5.1,-4.4,5.1,-4).lineTo(5.1,-2.9).curveTo(5.1,-2.4,4.7,-2.5).curveTo(-1.1,-2.6,-1.9,-2.5).curveTo(-2.3,-2.4,-2.3,-2.2).curveTo(-2.3,-2.1,-2.3,-2.1).curveTo(-2.2,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-1.9,-2,-1.9).lineTo(0.7,-1).lineTo(4.2,0.3).curveTo(5.6,1,5.4,2.6).curveTo(5.4,3.1,5,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.9,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_36.setTransform(-325,129.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#DF1421").beginStroke().moveTo(1.1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4).curveTo(1.5,4.5,1.1,4.5).lineTo(1.1,4.5).closePath();
	this.shape_37.setTransform(-333.7,129.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_38.setTransform(-282.6,170.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.7,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_39.setTransform(-105.9,171.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#999999").beginStroke().moveTo(-22.5,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).lineTo(-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.3,-3.1,3.1,-4.6).lineTo(22.6,-6.8).lineTo(22.7,-4).curveTo(19,-4.5,16.4,-4.3).lineTo(-3.9,-1.8).curveTo(-8.8,-1.3,-18.5,-0.6).curveTo(-19.9,0.6,-20.2,1.1).curveTo(-20.7,1.7,-20.7,3.1).lineTo(-20.9,5.9).lineTo(-22.5,6.8).curveTo(-22.8,3.1,-22.5,1.8).closePath();
	this.shape_40.setTransform(-314.7,52.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.4,1.9).closePath();
	this.shape_41.setTransform(-288.5,47.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.2,13.6).lineTo(-1.2,10.8).curveTo(-1.2,10.4,-0.9,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.3,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.4).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_42.setTransform(-335.2,98.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).closePath();
	this.shape_43.setTransform(-335.1,120.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#999999").beginStroke().moveTo(-2.9,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0,0.5).lineTo(-0.8,0.5).curveTo(-2,0.5,-2.9,0.3).closePath();
	this.shape_44.setTransform(-335.3,112.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).curveTo(-3.4,-4.9,-3.1,-5).lineTo(2.4,-6.7).curveTo(2.9,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,3.9,3.2,4.5).curveTo(2,5.2,-1.4,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_45.setTransform(-335.3,115.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.6,-12.9,0.9,-10.8).curveTo(1.4,-7.4,1.6,1.1).curveTo(1.6,6.4,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.2,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_46.setTransform(-331,71.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.7,12.2,-5.7,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-7.1,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_47.setTransform(-332.2,71.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill().beginStroke("#777777").setStrokeStyle(0.3,1,1).moveTo(35.2,43.8).lineTo(35.2,39.6).lineTo(34.9,38.3).curveTo(33.9,-25.8,33.4,-37.2).curveTo(33.2,-40.1,31.3,-41.8).curveTo(29.6,-43.3,27.1,-43.6).curveTo(22.4,-44.1,3.6,-43.1).curveTo(-1.3,-42.9,-20.1,-41.3).curveTo(-27.1,-40.7,-30.8,-38).lineTo(-33.1,-35.3).curveTo(-33.6,-34.6,-34.4,-32.3).curveTo(-34.9,-31.2,-35.2,-30.2);
	this.shape_48.setTransform(-299.5,88.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill().beginStroke("#A5A5A5").setStrokeStyle(0.3,1,1).moveTo(-0.9,45.9).curveTo(-2.7,15.8,-2.9,0.7).curveTo(-3,-10.8,-1.5,-23.3).curveTo(0.1,-36.1,2.9,-45.9);
	this.shape_49.setTransform(-341.3,115.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).lineTo(-2.6,5.4).curveTo(-2.9,5.1,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-1.9,-1.8).lineTo(-1.8,-2.3).curveTo(-1.6,-2.7,-1.4,-2.9).curveTo(-1.1,-3.1,1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.4,-2.1).lineTo(-0.8,-1.2).lineTo(-0.7,3.2).lineTo(-1,4.2).lineTo(-0.4,4.4).lineTo(-0.3,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.2,6.1).closePath();
	this.shape_50.setTransform(-353.7,97.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.1,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.7,-1.8,13).lineTo(-3.5,20.3).curveTo(-3.8,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_51.setTransform(-344,73.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(3,-16.2,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_52.setTransform(-353.5,135.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_53.setTransform(-353,154);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.8,0.4,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_54.setTransform(-352,165.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.3,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_55.setTransform(-348.2,169.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.8,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_56.setTransform(-347.4,161.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.8).curveTo(-3.4,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.5).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.3,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.8).lineTo(-4.4,-6.9).closePath();
	this.shape_57.setTransform(-348.9,159.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.2,-1.5,1.9).curveTo(-2,-1.3,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(2,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_58.setTransform(-355.4,159.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,6.5).lineTo(-1.3,6.4).curveTo(-0.7,4,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.4,-6.5).lineTo(1,-6.5).lineTo(1.1,-4.3).curveTo(1.3,-1.6,1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_59.setTransform(-273.4,115.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.3,-4.4,7.7).curveTo(-5,7.1,-5,6.3).curveTo(-5.4,2.2,-5.2,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.4,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.1,4.6,7.7).curveTo(4,8.3,3.3,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_60.setTransform(-273.6,115.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-50.2,62).curveTo(-50.6,61.8,-51.1,61.2).curveTo(-52.2,60.2,-52.7,58.5).curveTo(-53.4,56.4,-53.7,53.3).lineTo(-54.1,48).curveTo(-54.4,44.9,-53.5,42.1).lineTo(-52.6,39.9).curveTo(-53.4,23.6,-53.4,18.3).curveTo(-53.4,14.9,-52.9,6.7).lineTo(-52.5,-0.9).lineTo(-48.3,-7.9).curveTo(-47.3,-12.9,-43.8,-27.3).curveTo(-41.5,-36.4,-37.3,-48.8).curveTo(-34,-58.5,-33.1,-60.5).curveTo(-32.6,-61.4,-32.1,-61.8).curveTo(-31.4,-62.2,-29.8,-62.4).curveTo(-22.6,-63.3,5.2,-64.5).lineTo(31.6,-65.5).curveTo(34.5,-65.6,36,-65.3).curveTo(38.1,-64.9,40.1,-63.5).curveTo(42,-62.2,43.1,-61.2).lineTo(45.2,-59.2).curveTo(46.4,-58.1,47.7,-56.1).curveTo(49,-54.2,49.7,-52.7).curveTo(51,-49.7,52.2,-44.7).curveTo(54.2,-36.9,54.2,-29.7).lineTo(54.2,-12.7).curveTo(54.1,-9.9,53.5,-8.8).curveTo(50.2,-2.2,50.2,-0.1).lineTo(50.2,6.5).curveTo(50.2,8,49.7,8.9).curveTo(49.2,9.7,49.2,10.4).lineTo(49.2,25.4).lineTo(39.2,25.7).lineTo(36.2,26).lineTo(36.2,28.3).curveTo(24.9,28.5,20,29.1).curveTo(13.2,30,10.3,31.4).curveTo(3.5,34.5,-1.5,43.1).curveTo(-2.9,45.5,-5,49.9).lineTo(-6.9,53.7).curveTo(-7.9,55.3,-9.2,55.3).lineTo(-17.4,55.3).lineTo(-18.9,54.9).lineTo(-21.6,55.3).lineTo(-38.8,55.3).lineTo(-38.8,61.9).curveTo(-38.8,63.2,-39.7,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-48.6,65.5,-50.2,62).closePath().moveTo(9.6,-55.4).curveTo(-9.8,-54.6,-16.2,-53.6).curveTo(-21.6,-52.8,-23.2,-51.9).curveTo(-24.4,-51.1,-25.7,-48.5).curveTo(-26.7,-46.5,-29,-36.4).curveTo(-31.3,-26.4,-31.7,-22.1).curveTo(-32,-18.1,-32.4,-10.8).curveTo(-32.7,-3.9,-32.7,-1.5).lineTo(-32.6,-0.4).lineTo(-31.4,-0.7).lineTo(9.2,-16.4).curveTo(13.9,-18.1,26.4,-20.3).lineTo(28.9,-20.8).curveTo(30.1,-21,30.5,-21.4).curveTo(30.7,-21.7,30.7,-22.3).lineTo(31.3,-51.8).curveTo(31.4,-54.2,30.5,-55).curveTo(29.8,-55.8,27.8,-56).curveTo(19.3,-55.8,9.6,-55.4).closePath();
	this.shape_61.setTransform(-303.7,106.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#757575").beginStroke().moveTo(-1.4,1.5).curveTo(-2.1,1,-2,0.1).curveTo(-2.1,-0.8,-1.5,-1.4).curveTo(-1,-2,-0.1,-2.1).curveTo(0.8,-2.1,1.4,-1.5).curveTo(2,-0.9,2,-0.1).curveTo(2.1,0.8,1.5,1.4).curveTo(0.9,2,0,2.1).lineTo(-0.1,2.1).curveTo(-0.9,2.1,-1.4,1.5).closePath();
	this.shape_62.setTransform(-177.8,47.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#757575").beginStroke().moveTo(-0.2,5.3).lineTo(-4,3.4).curveTo(-4.6,3.2,-4.7,2.7).curveTo(-4.9,2.2,-4.6,1.8).lineTo(-1.5,-4.7).curveTo(-1.2,-5.2,-0.8,-5.3).curveTo(-0.3,-5.5,0.2,-5.3).lineTo(4.1,-3.4).curveTo(4.6,-3.2,4.7,-2.7).curveTo(4.9,-2.2,4.6,-1.7).lineTo(1.5,4.7).curveTo(1.2,5.2,0.8,5.4).lineTo(0.4,5.4).lineTo(-0.2,5.3).closePath();
	this.shape_63.setTransform(-157.1,59.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-41.6,-22.1).lineTo(-37.8,-28.2).lineTo(41.6,22.1).lineTo(37.8,28.2).closePath();
	this.shape_64.setTransform(-117,84.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#F4F4F4").beginStroke().moveTo(2,8.1).lineTo(-11.1,-4).lineTo(-10.8,-8.6).lineTo(11.1,-1).lineTo(8,8.6).closePath();
	this.shape_65.setTransform(-183.6,42.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-10.7,-4.2).lineTo(-8.2,-8.1).lineTo(10.7,4.3).lineTo(8.1,8.1).closePath();
	this.shape_66.setTransform(-167.3,52.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,25).lineTo(-5.1,-25).lineTo(5.1,-25).lineTo(5.1,25).closePath();
	this.shape_67.setTransform(-209.2,96.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-5.5,25.1).lineTo(-5.5,-25.1).lineTo(5.5,-25.1).lineTo(5.5,25.1).closePath();
	this.shape_68.setTransform(-9.6,138.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-5.4,8.2).lineTo(-9.5,4.6).lineTo(-9.5,-5.2).lineTo(-5.4,-8.2).lineTo(5.7,-8.2).lineTo(9.5,-4.2).lineTo(9.5,6.1).lineTo(5.7,8.2).closePath();
	this.shape_69.setTransform(-9.5,132);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-7.9,-20.4).lineTo(-5.6,-25).lineTo(3.7,-25.2).lineTo(7.1,-21.1).lineTo(7.9,22.2).lineTo(5.5,25).lineTo(-7,25.2).closePath();
	this.shape_70.setTransform(-208.7,96.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-3.2,26.2).curveTo(-3.6,25.8,-3.7,25.2).lineTo(-4.5,-25).curveTo(-4.5,-25.6,-4.1,-26).curveTo(-3.7,-26.5,-3.1,-26.5).lineTo(2.2,-26.6).curveTo(2.8,-26.6,3.2,-26.2).curveTo(3.6,-25.7,3.6,-25.2).lineTo(4.5,25.1).curveTo(4.5,25.6,4.1,26.1).curveTo(3.7,26.5,3.1,26.5).lineTo(-2.2,26.6).curveTo(-2.8,26.6,-3.2,26.2).closePath();
	this.shape_71.setTransform(-210.7,140.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-4.6,1.8).lineTo(-4.6,-2.1).lineTo(4.6,-2.1).lineTo(4.6,2.1).closePath();
	this.shape_72.setTransform(-50.5,156);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.2,11).lineTo(-2.2,-11.1).lineTo(2.2,-11.1).lineTo(2.2,11).closePath().moveTo(-1.1,-3.7).curveTo(-1.4,-3.3,-1.5,-2.7).lineTo(-1.5,3).curveTo(-1.4,3.6,-1.1,4).curveTo(-0.6,4.4,-0,4.5).lineTo(0.1,4.5).curveTo(0.6,4.4,1.1,4).curveTo(1.4,3.6,1.4,3).lineTo(1.4,-2.7).curveTo(1.4,-3.3,1.1,-3.7).curveTo(0.6,-4.1,0.1,-4.2).lineTo(-0,-4.2).curveTo(-0.6,-4.1,-1.1,-3.7).closePath();
	this.shape_73.setTransform(-48.2,141.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.2,11).lineTo(-2.2,-11.1).lineTo(2.2,-11.1).lineTo(2.2,11).closePath().moveTo(-0.9,-3.7).curveTo(-1.4,-3.3,-1.4,-2.7).lineTo(-1.4,3).curveTo(-1.4,3.6,-0.9,4).curveTo(-0.5,4.4,0,4.5).lineTo(0.1,4.5).curveTo(0.7,4.4,1.1,4).curveTo(1.5,3.6,1.5,3).lineTo(1.5,-2.7).curveTo(1.5,-3.3,1.1,-3.7).curveTo(0.7,-4.1,0.1,-4.2).lineTo(0,-4.2).curveTo(-0.5,-4.1,-0.9,-3.7).closePath();
	this.shape_74.setTransform(-53.3,141.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-27.4,2).lineTo(-27.4,-2).lineTo(27.4,-2).lineTo(27.4,2).closePath();
	this.shape_75.setTransform(-171.6,129);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-26.8,2).lineTo(-26.8,-2).lineTo(26.8,-2).lineTo(26.8,2).closePath();
	this.shape_76.setTransform(-108,128.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#757575").beginStroke().moveTo(-1.2,1.3).curveTo(-1.8,0.8,-1.8,-0).curveTo(-1.8,-0.7,-1.2,-1.3).curveTo(-0.8,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.3).curveTo(1.8,-0.7,1.8,-0).curveTo(1.8,0.8,1.2,1.3).curveTo(0.7,1.7,0,1.7).curveTo(-0.8,1.7,-1.2,1.3).closePath();
	this.shape_77.setTransform(-81.5,106.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-27.6,29.3).curveTo(-26.6,28.6,-25,28.5).curveTo(-20.6,28.2,-20.8,24).curveTo(-21.2,23.1,-21.4,21.9).curveTo(-21.9,19.4,-20.9,17.3).curveTo(-20,15.6,-17.3,15.7).curveTo(-16,15.7,-14.9,16.1).lineTo(20.4,-31.8).lineTo(29.2,-31.6).lineTo(17.5,30.9).lineTo(-29.2,31.8).curveTo(-29.2,30.1,-27.6,29.3).closePath();
	this.shape_78.setTransform(-63.6,87.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-3.5,-5.9).lineTo(1,-6.8).lineTo(3.5,6.8).closePath();
	this.shape_79.setTransform(-81.2,138.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-0.6,-6.4).lineTo(3.9,-6.4).lineTo(-3.9,6.3).closePath();
	this.shape_80.setTransform(-128.6,138.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-26.5,2.2).curveTo(-26.9,1.8,-26.9,1.2).lineTo(-26.9,-0.3).curveTo(-26.9,-0.9,-26.5,-1.3).curveTo(-26.1,-1.7,-25.5,-1.7).lineTo(25.5,-2.6).curveTo(26.1,-2.6,26.5,-2.2).curveTo(26.9,-1.8,26.9,-1.2).lineTo(26.9,0.3).curveTo(27,0.9,26.6,1.3).curveTo(26.2,1.7,25.6,1.7).lineTo(-25.5,2.6).curveTo(-26,2.6,-26.5,2.2).closePath();
	this.shape_81.setTransform(-68.6,123);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#FFFFFF").beginStroke().moveTo(8.3,2.7).lineTo(8.3,-1.3).curveTo(8.3,-1.9,7.9,-1.9).lineTo(-9.2,-1.9).lineTo(-9.2,-2.8).lineTo(7.9,-2.8).curveTo(9,-2.7,9.1,-1.7).lineTo(9.2,2.7).closePath();
	this.shape_82.setTransform(-139.7,119.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-1.4,21.2).lineTo(-2,-12.3).curveTo(-2.7,-13.1,-3.3,-14.1).curveTo(-3.8,-15.1,-3.7,-15.5).curveTo(-3.4,-17.4,-2.2,-20).curveTo(-1,-22.7,0,-22.9).curveTo(1,-22.6,2.3,-19.9).curveTo(3.6,-17.3,3.7,-15.9).curveTo(3.8,-14.4,2.6,-12.8).lineTo(3,21.2).curveTo(3,21.7,2.7,22.3).curveTo(2.3,22.9,2,22.9).lineTo(-0.6,23).curveTo(-1.4,22.9,-1.4,21.2).closePath();
	this.shape_83.setTransform(-139.8,132.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-27,1.7).curveTo(-27.4,1.1,-27.4,0.4).curveTo(-27.4,-0.4,-27,-1.1).curveTo(-26.7,-1.6,-26.2,-1.6).lineTo(26.2,-2.3).curveTo(26.6,-2.3,27.1,-1.7).curveTo(27.4,-1.1,27.4,-0.4).curveTo(27.4,0.5,27.1,1.1).curveTo(26.6,1.6,26.2,1.6).lineTo(-26.2,2.3).curveTo(-26.7,2.3,-27,1.7).closePath();
	this.shape_84.setTransform(-107.5,106);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-7.5,7.1).curveTo(-7.9,6.7,-7.9,6.1).lineTo(-8.2,-3.4).curveTo(-8.3,-5.2,-7,-6.2).curveTo(-5.7,-7.3,-3.6,-7.3).lineTo(6.8,-7.5).curveTo(7.4,-7.5,7.8,-7.1).curveTo(8.2,-6.7,8.3,-6.1).curveTo(8.3,-5.5,7.9,-5).curveTo(7.4,-4.6,6.8,-4.6).lineTo(-2.1,-4.4).curveTo(-3.6,-4.4,-4.4,-3.7).curveTo(-5.2,-3,-5.2,-1.8).lineTo(-5,6).curveTo(-4.9,6.7,-5.4,7.1).curveTo(-5.8,7.5,-6.4,7.5).lineTo(-6.6,7.5).curveTo(-7.1,7.5,-7.5,7.1).closePath();
	this.shape_85.setTransform(-223.3,133.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-39.8,-24.7).lineTo(38.9,-23.5).lineTo(39.8,23.4).lineTo(-39,24.7).closePath();
	this.shape_86.setTransform(-65.2,94.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#757575").beginStroke().moveTo(-1.2,1.8).curveTo(-1.7,1.1,-1.7,0).curveTo(-1.7,-1,-1.2,-1.8).curveTo(-0.7,-2.5,-0,-2.5).curveTo(0.7,-2.5,1.2,-1.8).curveTo(1.7,-1.1,1.7,-0).curveTo(1.7,1.1,1.2,1.8).curveTo(0.7,2.5,0,2.5).curveTo(-0.7,2.5,-1.2,1.8).closePath();
	this.shape_87.setTransform(-175.4,112.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-21.6,1.4).curveTo(-22,0.9,-22.1,0.4).lineTo(-22.1,-0.1).curveTo(-22.1,-0.7,-21.6,-1.1).curveTo(-21.2,-1.6,-20.6,-1.6).lineTo(20.6,-1.8).curveTo(21.2,-1.8,21.6,-1.4).curveTo(22,-0.9,22,-0.4).lineTo(22,0.1).curveTo(22,0.7,21.7,1.2).curveTo(21.2,1.6,20.7,1.6).lineTo(-20.6,1.8).curveTo(-21.2,1.8,-21.6,1.4).closePath();
	this.shape_88.setTransform(-175.5,109.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-21,-9).lineTo(20.9,-9.2).lineTo(21,8.9).lineTo(-20.8,9.2).closePath();
	this.shape_89.setTransform(-175.7,118.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(-7.4,1.8).lineTo(-6.5,0.1).curveTo(-5.2,-1.7,-3.2,-1.7).lineTo(2.6,-1.8).curveTo(4.5,-1.8,6.2,-0.5).curveTo(7.6,0.7,7.7,1.7).closePath();
	this.shape_90.setTransform(-175.9,107.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.6,0.1).curveTo(-5.4,-1.7,-3.4,-1.7).lineTo(2.5,-1.8).curveTo(4.4,-1.8,6,-0.5).curveTo(7.5,0.7,7.5,1.7).lineTo(-7.5,1.8).closePath();
	this.shape_91.setTransform(-175.7,107.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-27,1.2).curveTo(-27.3,0.9,-27.3,0.5).curveTo(-27.3,0.1,-27,-0.3).curveTo(-26.7,-0.6,-26.3,-0.6).lineTo(26.2,-1.5).curveTo(26.6,-1.5,27,-1.2).curveTo(27.3,-0.9,27.3,-0.5).curveTo(27.3,-0.1,27,0.3).curveTo(26.7,0.6,26.2,0.6).lineTo(-26.2,1.5).lineTo(-26.4,1.5).curveTo(-26.7,1.5,-27,1.2).closePath();
	this.shape_92.setTransform(-69.3,119.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#000000").beginStroke().moveTo(-152,25.9).lineTo(-160.9,18.3).lineTo(-152.4,-17.8).lineTo(-83.1,-19.8).lineTo(-82.1,-9.1).lineTo(-77.2,-7.9).lineTo(-76.7,-3.4).lineTo(-75.3,-2).curveTo(-73.5,-0.6,-72.4,-0.2).curveTo(-71.3,0.1,-70.1,-0.3).lineTo(-68.7,-0.8).curveTo(-67.6,-0.8,-66.7,-0.5).lineTo(-64.7,-1.5).curveTo(-62.6,-2.8,-62.7,-4.6).lineTo(-62.8,-10.1).lineTo(-62.9,-13.8).curveTo(-62.9,-16.1,-61.8,-17.4).curveTo(-60.8,-18.6,-59.5,-18.7).curveTo(-55.7,-18.7,-29.8,-20.2).lineTo(-29.7,-16.9).lineTo(24.9,-17.2).lineTo(26.1,-27.5).lineTo(33.3,-27.5).lineTo(34.8,-17.3).curveTo(74.3,-17.1,73.9,-17.3).curveTo(72.6,-18.2,72.7,-20.8).curveTo(72.7,-23.4,73.9,-23.3).lineTo(127.4,-22.3).lineTo(127.4,-18).lineTo(160.9,-17.9).lineTo(160.1,12.6).lineTo(126.4,12.8).lineTo(126.3,14).lineTo(128.6,14.2).lineTo(128.5,17.7).lineTo(112.5,18.1).lineTo(106.2,18.4).curveTo(99.5,18.8,97.1,14.8).curveTo(95.7,10.7,94.4,10.3).curveTo(92.7,10,90,11.8).lineTo(87.8,13.8).lineTo(44.2,25.4).lineTo(-6.8,26.5).curveTo(-7.7,26.5,-8.6,25.2).lineTo(-9.2,23.9).lineTo(-25.8,24.6).lineTo(-26.7,22.2).lineTo(-32,21.7).lineTo(-32.5,24.4).lineTo(-35.1,26.4).lineTo(-42.6,26.9).lineTo(-43.4,25.6).lineTo(-67.3,26.5).lineTo(-68.5,27.3).lineTo(-139.9,27.5).closePath().moveTo(-7,24.3).curveTo(-7.6,24.3,-7.6,25).curveTo(-7.5,25.6,-7,25.6).lineTo(16,25.3).curveTo(16.7,25.4,16.7,24.6).curveTo(16.7,24,16,24).closePath().moveTo(10.4,-5.6).lineTo(-23.2,-5.2).curveTo(-24,-5.1,-24.6,-4.5).curveTo(-25.2,-3.9,-25.2,-3).lineTo(-24.9,20.5).curveTo(-24.9,21.3,-24.2,22).curveTo(-23.6,22.6,-22.7,22.6).lineTo(10.8,22.2).curveTo(11.6,22.1,12.3,21.5).curveTo(12.8,20.8,12.8,20).lineTo(12.5,-3.5).curveTo(12.5,-4.4,11.8,-5).curveTo(11.2,-5.6,10.5,-5.6).lineTo(10.4,-5.6).closePath().moveTo(90.1,9).curveTo(89.7,9,89.1,9.3).curveTo(88.6,9.6,88.3,9.9).curveTo(88,10.4,88.1,10.6).curveTo(88.4,11.1,89.7,10.3).curveTo(90.2,10.1,90.5,9.8).curveTo(90.8,9.4,90.7,9.1).curveTo(90.7,9.1,90.6,9.1).curveTo(90.6,9,90.6,9).curveTo(90.5,9,90.5,9).curveTo(90.4,9,90.3,9).lineTo(90.1,9).closePath();
	this.shape_93.setTransform(-169.3,144.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(4.6,-2).lineTo(4.6,2).lineTo(-4.6,2).lineTo(-4.6,-2).closePath();
	this.shape_94.setTransform(-50.5,162.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,2).lineTo(-4.6,-2).lineTo(4.6,-2).lineTo(4.6,2).closePath();
	this.shape_95.setTransform(-50.5,162.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#757575").beginStroke().moveTo(-5.1,-2.3).lineTo(-2.1,0.7).lineTo(1.8,0.6).lineTo(5.1,-2.4).lineTo(4.7,2.3).lineTo(-5,2.4).closePath();
	this.shape_96.setTransform(-139.5,111.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#DBD9D9").beginStroke().moveTo(0.4,12.1).curveTo(-0.5,11.2,-0.5,10.2).lineTo(-0.8,3.5).curveTo(-0.8,2.7,-1.5,1.4).curveTo(-2.2,-0.1,-2.2,-0.7).curveTo(-2.2,-1.9,-2.1,-2.5).curveTo(-1.9,-3.3,-1.4,-4.1).curveTo(-1,-4.6,-1,-6.3).lineTo(-1.2,-10.1).curveTo(-1.3,-11.5,0,-12.4).curveTo(1,-13.2,2,-13.2).lineTo(2.2,13.2).lineTo(0.4,12.1).closePath();
	this.shape_97.setTransform(-217.3,97.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-3.9,-38.4).lineTo(2.6,-38.5).lineTo(3.9,32.5).lineTo(1.1,38.4).lineTo(-2.5,38.5).closePath();
	this.shape_98.setTransform(-226.1,89.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(7.3,4.8).lineTo(7.1,-3.2).lineTo(-7.3,-5).lineTo(-7.1,5.1).closePath();
	this.shape_99.setTransform(-218.2,123.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.3,-5).lineTo(7.1,-3.2).lineTo(7.3,4.8).lineTo(-7.1,5.1).closePath();
	this.shape_100.setTransform(-218.2,123.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#757575").beginStroke().moveTo(-10.2,15.2).lineTo(-10.3,13).lineTo(-8.4,12.9).curveTo(-6.4,12.8,-5.5,12.6).curveTo(-4.3,12.3,-4.8,11.7).lineTo(-1.5,-14.6).lineTo(9.8,-15.2).lineTo(10.3,9.8).curveTo(10.3,13,10.1,13.4).curveTo(9.5,15.2,6.5,15.2).closePath();
	this.shape_101.setTransform(-10.3,151.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.4,-0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.3,-0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_102.setTransform(-171.2,198.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(1));

	// Capa 3
	this.instance = new lib.barrenaconductor();
	this.instance.parent = this;
	this.instance.setTransform(-301.4,87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.9,0,373,209.5);


// stage content:
(lib.barrenaparatierra = function(mode,startPosition,loop) {
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

	// barrena
	this.instance = new lib.barrena();
	this.instance.parent = this;
	this.instance.setTransform(1194,416.3,1,1,0,0,0,-15.2,46.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:739},18).to({y:441.3},15).to({y:416.3},9).to({x:316},17).to({y:446.3},13).to({y:417.3},8).wait(8).to({x:-249.5},35).wait(2));

	// barrena-brazo
	this.instance_1 = new lib.barrenabrazo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1197.3,365.1,1,1,0,0,0,-17.2,110.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:742.3},18).to({y:390.1},15).to({y:365.1},9).to({x:319.3},17).to({y:395.1},13).to({y:366.1},8).wait(8).to({x:-246.2},35).wait(2));

	// Capa 8
	this.instance_2 = new lib.barrenamolino();
	this.instance_2.parent = this;
	this.instance_2.setTransform(313.7,177.3,1,1,0,0,0,-73.4,159.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({y:337.3,alpha:1},7).to({scaleY:0.92,x:315.1,y:350.3},2).to({scaleY:1,x:313.7,y:337.3},2).wait(20));

	// Capa 6
	this.instance_3 = new lib.barrenamolino();
	this.instance_3.parent = this;
	this.instance_3.setTransform(731.3,177.3,1,1,0,0,0,-73.4,159.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61).to({_off:false},0).to({y:337.3,alpha:1},7).to({scaleY:0.92,y:350.3},2).to({scaleY:1,y:337.3},2).wait(54));

	// hoyo
	this.instance_4 = new lib.barrenahooyo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(318.7,490.7,1,1,0,0,0,-4,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({regY:1.4,scaleX:3.75,scaleY:3.75,x:317.3,y:503.3},15).wait(51));

	// hoyo
	this.instance_5 = new lib.barrenahooyo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(737.8,490.7,1,1,0,0,0,-4,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({regY:1.4,scaleX:3.75,scaleY:3.75,x:739.2,y:498.9},15).wait(92));

	// llanta
	this.instance_6 = new lib.llanta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1306.3,429.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({rotation:-360,x:851.3},18).wait(24).to({rotation:-720,x:428.3},17).wait(29).to({rotation:-1440,x:-137.7},35).wait(2));

	// llanta
	this.instance_7 = new lib.llanta();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1129.3,427.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({rotation:-360,x:674.3},18).wait(24).to({rotation:-720,x:251.3},17).wait(29).to({rotation:-1440,x:-314.7},35).wait(2));

	// camion
	this.instance_8 = new lib.barrenacamion();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1232.9,355.4,1,1,0,0,0,-179,98.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({x:777.9},18).wait(24).to({x:628.6},6).to({x:354.9},11).wait(29).to({x:-210.6},35).wait(2));

	// fondo
	this.instance_9 = new lib.barrenamolino();
	this.instance_9.parent = this;
	this.instance_9.setTransform(335.1,338,0.318,0.318,0,0,0,-73.1,160.2);

	this.instance_10 = new lib.barrenamolino();
	this.instance_10.parent = this;
	this.instance_10.setTransform(91.1,337.1,0.212,0.212,0,0,0,-73.4,160);

	this.instance_11 = new lib.barrenamolino();
	this.instance_11.parent = this;
	this.instance_11.setTransform(590,332.3,0.212,0.212,0,0,0,-73.4,160);

	this.instance_12 = new lib.barrenamolino();
	this.instance_12.parent = this;
	this.instance_12.setTransform(964.9,311.5,0.438,0.438,0,0,0,-73.4,159.8);

	this.instance_13 = new lib.barrenamolino();
	this.instance_13.parent = this;
	this.instance_13.setTransform(653,321.4,0.552,0.552,0,0,0,-73.4,159.8);

	this.instance_14 = new lib.barrena0030();
	this.instance_14.parent = this;
	this.instance_14.setTransform(854.8,276.4,1,1,0,0,0,64.3,89.7);

	this.instance_15 = new lib.barrena0023();
	this.instance_15.parent = this;
	this.instance_15.setTransform(983.5,276.4,1,1,0,0,0,64.3,89.7);
	this.instance_15.alpha = 0.609;

	this.instance_16 = new lib.barrena0025();
	this.instance_16.parent = this;
	this.instance_16.setTransform(924.6,218.6,1,1,0,0,0,35.3,31.9);
	this.instance_16.alpha = 0.289;

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-128.7,89.7).lineTo(0,-89.7).lineTo(128.7,89.7).closePath();
	this.shape.setTransform(919.2,276.4);

	this.instance_17 = new lib.barrena0029();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1085.4,289,1,1,0,0,0,50.9,77.2);
	this.instance_17.alpha = 0.609;

	this.instance_18 = new lib.barrena0022();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1038.7,239.3,1,1,0,0,0,27.9,27.5);
	this.instance_18.alpha = 0.289;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-101.8,77.2).lineTo(-0,-77.2).lineTo(101.8,77.2).closePath();
	this.shape_1.setTransform(1034.5,288.9);

	this.instance_19 = new lib.barrena0028();
	this.instance_19.parent = this;
	this.instance_19.setTransform(355.4,266.5,1,1,0,0,0,44.1,99.5);
	this.instance_19.alpha = 0.609;

	this.instance_20 = new lib.barrena0021();
	this.instance_20.parent = this;
	this.instance_20.setTransform(314.9,202.5,1,1,0,0,0,24.2,35.5);
	this.instance_20.alpha = 0.289;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-88.3,99.5).lineTo(0,-99.5).lineTo(88.3,99.5).closePath();
	this.shape_2.setTransform(311.3,266.6);

	this.instance_21 = new lib.barrena0027();
	this.instance_21.parent = this;
	this.instance_21.setTransform(259.7,274.7,1,1,0,0,0,86.5,91.4);
	this.instance_21.alpha = 0.609;

	this.instance_22 = new lib.barrena0020();
	this.instance_22.parent = this;
	this.instance_22.setTransform(180.4,215.8,1,1,0,0,0,47.5,32.5);
	this.instance_22.alpha = 0.289;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-173.2,91.4).lineTo(0,-91.4).lineTo(173.2,91.4).closePath();
	this.shape_3.setTransform(173.2,274.7);

	this.instance_23 = new lib.barrena0026();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1302.1,308.4,1,1,0,0,0,62.6,57.8);
	this.instance_23.alpha = 0.609;

	this.instance_24 = new lib.barrena0019();
	this.instance_24.parent = this;
	this.instance_24.setTransform(1244.8,271.2,1,1,0,0,0,34.4,20.6);
	this.instance_24.alpha = 0.289;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-125.3,57.7).lineTo(-0,-57.7).lineTo(125.3,57.7).closePath();
	this.shape_4.setTransform(1239.5,308.4);

	this.instance_25 = new lib.barrena0016();
	this.instance_25.parent = this;
	this.instance_25.setTransform(499.2,277.3,1,1,0,0,0,89.2,88.8);
	this.instance_25.alpha = 0.609;

	this.instance_26 = new lib.barrena0018();
	this.instance_26.parent = this;
	this.instance_26.setTransform(417.4,220.2,1,1,0,0,0,49,31.7);
	this.instance_26.alpha = 0.289;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-178.6,88.8).lineTo(0,-88.8).lineTo(178.6,88.8).closePath();
	this.shape_5.setTransform(409.9,277.3);

	this.instance_27 = new lib.barrena0015();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1079.3,276.4,1,1,0,0,0,40.5,89.7);
	this.instance_27.alpha = 0.18;

	this.instance_28 = new lib.barrena0017();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1160.1,276.4,1,1,0,0,0,40.4,89.7);
	this.instance_28.alpha = 0.609;

	this.instance_29 = new lib.barrena0024();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1123,218.6,1,1,0,0,0,22.2,31.9);
	this.instance_29.alpha = 0.289;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-80.9,89.7).lineTo(0,-89.7).lineTo(80.9,89.7).closePath();
	this.shape_6.setTransform(1119.6,276.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.shape_5},{t:this.instance_26},{t:this.instance_25},{t:this.shape_4},{t:this.instance_24},{t:this.instance_23},{t:this.shape_3},{t:this.instance_22},{t:this.instance_21},{t:this.shape_2},{t:this.instance_20},{t:this.instance_19},{t:this.shape_1},{t:this.instance_18},{t:this.instance_17},{t:this.shape},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(126));

	// pissp
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#666666").beginStroke().moveTo(0.7,5.9).curveTo(-1.4,5.8,-2.4,5.4).curveTo(-3,5.2,-5.7,5.4).curveTo(-8.8,5.7,-10,5.3).curveTo(-11.5,4.8,-9.9,4.9).curveTo(-8.8,5,-8.4,4.7).curveTo(-9.4,2.2,-10.6,1.6).lineTo(-11.7,1.4).curveTo(-9.4,1.2,-7.6,2.6).curveTo(-6.8,3.3,-6.4,4).curveTo(-6.6,1.6,-8,-0).lineTo(-9.3,-1.2).curveTo(-6.8,-0.1,-5.1,2).curveTo(-4.4,3.1,-4,3.9).curveTo(-3.6,1.8,-4.7,-0.7).lineTo(-5.9,-2.7).curveTo(-3,-1,-2.1,1.6).curveTo(-1.7,2.7,-1.7,3.6).curveTo(-1.4,-1.2,1.7,-4.2).lineTo(4.6,-6.1).curveTo(2.2,-4.4,1.4,-0.1).curveTo(0.9,2.1,1,3.9).curveTo(2.4,-1.1,6.2,-3.4).lineTo(9.6,-4.7).curveTo(6,-2.3,4.6,1.2).curveTo(4,2.9,4,4.2).curveTo(5.4,1.1,8.7,0.1).curveTo(10.3,-0.3,11.6,-0.2).curveTo(9.1,0.3,7.4,2.5).curveTo(6.4,3.6,6,4.5).curveTo(9.9,4.9,10.5,5.3).curveTo(11,5.6,9.6,5.6).lineTo(8.3,5.6).curveTo(7.5,5.6,6.3,5.9).lineTo(4.4,6.1).lineTo(0.7,5.9).closePath();
	this.shape_7.setTransform(58.9,459.3);

	this.instance_30 = new lib.barrena007();
	this.instance_30.parent = this;
	this.instance_30.setTransform(47.2,466.2,1,1,0,0,0,3.5,0.5);
	this.instance_30.alpha = 0.301;

	this.instance_31 = new lib.barrena0014();
	this.instance_31.parent = this;
	this.instance_31.setTransform(57.5,464,1,1,0,0,0,9.2,1.4);
	this.instance_31.alpha = 0.301;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#666666").beginStroke().moveTo(0.7,6).curveTo(-1.3,5.9,-2.4,5.5).curveTo(-3,5.3,-5.6,5.5).curveTo(-8.8,5.8,-10,5.4).curveTo(-11.5,4.8,-9.9,5).curveTo(-8.9,5.1,-8.3,4.8).curveTo(-9.4,2.3,-10.6,1.6).lineTo(-11.7,1.4).curveTo(-9.4,1.3,-7.7,2.7).curveTo(-6.8,3.4,-6.4,4.1).curveTo(-6.6,1.7,-8,0).lineTo(-9.3,-1.2).curveTo(-6.7,-0,-5.2,2.1).curveTo(-4.3,3.2,-4.1,4).curveTo(-3.6,1.9,-4.7,-0.6).lineTo(-5.9,-2.6).curveTo(-3,-0.9,-2,1.7).curveTo(-1.7,2.8,-1.7,3.7).curveTo(-1.4,-1.1,1.7,-4.1).curveTo(3.3,-5.6,4.8,-6.2).curveTo(2.2,-4.5,1.3,-0.1).curveTo(0.9,2.1,1,4).curveTo(2.5,-1,6.2,-3.3).curveTo(8.1,-4.5,9.6,-4.6).curveTo(6,-2.2,4.6,1.3).curveTo(3.9,3,3.9,4.3).curveTo(5.3,1.2,8.7,0.2).curveTo(10.3,-0.3,11.7,-0.1).curveTo(9.1,0.4,7.3,2.5).lineTo(6,4.6).curveTo(10,5,10.5,5.4).curveTo(10.9,5.7,9.6,5.7).lineTo(8.2,5.7).curveTo(7.6,5.7,6.3,5.9).lineTo(4.5,6.2).lineTo(0.7,6).closePath();
	this.shape_8.setTransform(747.9,451.2);

	this.instance_32 = new lib.barrena006();
	this.instance_32.parent = this;
	this.instance_32.setTransform(736.2,458.2,1,1,0,0,0,3.5,0.5);
	this.instance_32.alpha = 0.301;

	this.instance_33 = new lib.barrena0013();
	this.instance_33.parent = this;
	this.instance_33.setTransform(746.5,456,1,1,0,0,0,9.2,1.4);
	this.instance_33.alpha = 0.301;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#666666").beginStroke().moveTo(-5.5,5.4).lineTo(-7.4,5.2).lineTo(-8.6,5.2).curveTo(-9.9,5.2,-9.4,4.9).curveTo(-8.9,4.6,-5.3,4.1).curveTo(-5.7,3.2,-6.5,2.2).curveTo(-8.2,0.3,-10.5,-0.2).lineTo(-7.7,0.1).curveTo(-4.7,1,-3.4,3.9).curveTo(-3.3,2.7,-4,1.1).curveTo(-5.3,-2.1,-8.6,-4.3).lineTo(-5.5,-3.1).curveTo(-2,-1,-0.7,3.6).curveTo(-0.6,1.9,-1,-0.1).curveTo(-1.8,-4.1,-4,-5.7).lineTo(-1.3,-3.8).curveTo(1.6,-1.1,1.8,3.3).curveTo(1.8,2.5,2.2,1.5).curveTo(3.1,-0.9,5.7,-2.4).lineTo(4.6,-0.6).curveTo(3.6,1.6,4,3.6).lineTo(5.1,1.9).curveTo(6.6,-0.1,8.9,-1.2).curveTo(8.3,-0.8,7.7,-0.1).curveTo(6.4,1.5,6.2,3.7).lineTo(7.4,2.4).curveTo(8.8,1.4,10.5,1.3).lineTo(10.1,1.5).curveTo(9,2.1,8,4.3).lineTo(8.4,4.5).curveTo(8.8,4.6,9.4,4.6).curveTo(11,4.4,9.5,5).curveTo(8.4,5.4,5.5,5.1).curveTo(3,4.8,2.5,5).curveTo(1.5,5.4,-0.3,5.5).lineTo(-3.8,5.6).lineTo(-4,5.7).lineTo(-5.5,5.4).closePath();
	this.shape_9.setTransform(136.3,415.5);

	this.instance_34 = new lib.barrena005();
	this.instance_34.parent = this;
	this.instance_34.setTransform(147.4,421.9,1,1,0,0,0,3.2,0.5);
	this.instance_34.alpha = 0.301;

	this.instance_35 = new lib.barrena0012();
	this.instance_35.parent = this;
	this.instance_35.setTransform(137.9,419.9,1,1,0,0,0,8.4,1.3);
	this.instance_35.alpha = 0.301;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#666666").beginStroke().moveTo(1.6,13.9).curveTo(-3.2,13.7,-5.6,12.8).curveTo(-7,12.3,-13.2,12.9).curveTo(-20.5,13.6,-23.2,12.6).curveTo(-24.2,12.3,-24,11.9).curveTo(-23.9,11.5,-22.9,11.6).curveTo(-20.6,11.9,-19.4,11.1).curveTo(-21.8,5.4,-24.7,3.8).lineTo(-27.1,3.3).curveTo(-21.9,3,-17.8,6.2).curveTo(-15.8,7.8,-14.9,9.5).curveTo(-15.4,3.9,-18.6,0).lineTo(-21.7,-2.8).curveTo(-15.7,-0.1,-12,4.8).curveTo(-10.1,7.3,-9.4,9.2).curveTo(-8.3,4.3,-10.9,-1.4).lineTo(-13.7,-6).curveTo(-7.1,-2.1,-4.9,4).curveTo(-3.9,6.5,-3.9,8.5).curveTo(-3.2,-2.6,4,-9.5).curveTo(7.7,-13.1,11.2,-14.4).curveTo(5.1,-10.4,3.1,-0.2).curveTo(2.2,5,2.4,9.3).curveTo(5.8,-2.4,14.4,-7.7).curveTo(18.7,-10.4,22.4,-10.7).curveTo(14,-5.2,10.8,2.9).curveTo(9.1,7,9.2,9.9).curveTo(12.5,2.7,20.1,0.5).curveTo(24,-0.6,27.1,-0.3).curveTo(21.3,0.9,17.1,5.9).lineTo(14,10.6).curveTo(23.1,11.7,24.5,12.6).curveTo(25.5,13.2,22.4,13.3).lineTo(19.2,13.3).curveTo(17.6,13.2,14.6,13.8).curveTo(11.4,14.4,10.3,14.4).lineTo(1.6,13.9).closePath();
	this.shape_10.setTransform(979.3,466.8);

	this.instance_36 = new lib.barrena004();
	this.instance_36.parent = this;
	this.instance_36.setTransform(952.2,482.9,1,1,0,0,0,8.2,1.2);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.barrena0011();
	this.instance_37.parent = this;
	this.instance_37.setTransform(976.1,478,1,1,0,0,0,21.4,3.3);
	this.instance_37.alpha = 0.301;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#666666").beginStroke().moveTo(-4.7,4.5).curveTo(-5.5,4.4,-7.3,4.4).curveTo(-8.3,4.3,-8,4.1).curveTo(-7.5,3.8,-4.5,3.5).curveTo(-4.8,2.7,-5.5,1.9).curveTo(-6.9,0.2,-8.9,-0.2).lineTo(-6.5,0.1).curveTo(-4,0.8,-2.9,3.2).curveTo(-2.9,2.2,-3.4,0.9).curveTo(-4.5,-1.8,-7.3,-3.7).lineTo(-4.6,-2.7).curveTo(-1.7,-0.9,-0.6,3).curveTo(-0.5,1.5,-0.9,-0.2).curveTo(-1.5,-3.4,-3.4,-4.7).lineTo(-1.1,-3.3).curveTo(1.3,-0.9,1.5,2.9).curveTo(1.5,2.2,1.8,1.2).curveTo(2.6,-0.8,4.8,-2.1).curveTo(4.3,-1.5,3.8,-0.5).curveTo(3,1.3,3.3,3).lineTo(4.2,1.5).curveTo(5.4,-0.1,7.4,-1).curveTo(6.9,-0.7,6.4,-0.1).curveTo(5.3,1.2,5.1,3.1).lineTo(6.1,2).curveTo(7.3,1.1,8.9,1).lineTo(8.4,1.2).curveTo(7.5,1.7,6.7,3.6).lineTo(7,3.7).curveTo(7.3,3.8,7.8,3.8).curveTo(9,3.7,7.9,4.1).curveTo(7,4.5,4.6,4.2).curveTo(2.5,4,2,4.2).curveTo(1.2,4.5,-0.3,4.6).lineTo(-3.3,4.7).lineTo(-4.7,4.5).closePath();
	this.shape_11.setTransform(337.9,393.5);

	this.instance_38 = new lib.barrena003();
	this.instance_38.parent = this;
	this.instance_38.setTransform(347.1,398.8,1,1,0,0,0,2.7,0.4);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.barrena0010();
	this.instance_39.parent = this;
	this.instance_39.setTransform(339.2,397.1,1,1,0,0,0,7.1,1.1);
	this.instance_39.alpha = 0.301;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#666666").beginStroke().moveTo(-14.1,13.8).curveTo(-17,13.2,-18.6,13.3).lineTo(-21.7,13.3).curveTo(-24.8,13.2,-23.9,12.5).curveTo(-22.5,11.7,-13.3,10.6).curveTo(-14.3,8.3,-16.4,5.8).curveTo(-20.7,0.8,-26.5,-0.3).lineTo(-24.4,-0.4).curveTo(-21.9,-0.2,-19.5,0.5).curveTo(-11.9,2.7,-8.6,9.9).curveTo(-8.5,7,-10.1,2.9).curveTo(-13.4,-5.2,-21.7,-10.8).lineTo(-19.4,-10.3).curveTo(-16.5,-9.4,-13.8,-7.8).curveTo(-5.2,-2.4,-1.7,9.2).curveTo(-1.5,4.9,-2.5,-0.2).curveTo(-4.5,-10.4,-10.6,-14.4).lineTo(-8.3,-13.3).curveTo(-5.7,-11.8,-3.4,-9.6).curveTo(3.9,-2.6,4.6,8.7).curveTo(4.5,6.7,5.5,3.9).curveTo(7.7,-2.2,14.4,-6).lineTo(11.6,-1.4).curveTo(8.9,4.3,10,9.2).lineTo(12.6,4.8).curveTo(16.4,-0.1,22.3,-2.8).curveTo(20.8,-2,19.2,-0).curveTo(16.1,3.9,15.5,9.5).lineTo(18.5,6.2).curveTo(22,3.4,26.5,3.3).curveTo(26,3.5,25.4,3.8).curveTo(22.5,5.4,20,11).lineTo(20.9,11.4).curveTo(22.1,11.8,23.5,11.6).curveTo(24.5,11.5,24.6,11.9).curveTo(24.8,12.2,23.8,12.6).curveTo(21.1,13.6,13.8,12.9).curveTo(7.6,12.3,6.2,12.8).curveTo(3.7,13.7,-0.9,13.9).lineTo(-9.7,14.3).lineTo(-9.9,14.4).curveTo(-11.1,14.4,-14.1,13.8).closePath();
	this.shape_12.setTransform(286.1,486.8);

	this.instance_40 = new lib.barrena002();
	this.instance_40.parent = this;
	this.instance_40.setTransform(313.9,502.9,1,1,0,0,0,8.2,1.2);
	this.instance_40.alpha = 0.301;

	this.instance_41 = new lib.barrena009();
	this.instance_41.parent = this;
	this.instance_41.setTransform(290,497.9,1,1,0,0,0,21.4,3.2);
	this.instance_41.alpha = 0.301;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#666666").beginStroke().moveTo(-6,5.9).curveTo(-7.3,5.6,-8,5.6).curveTo(-8.7,5.7,-9.4,5.7).curveTo(-10.7,5.6,-10.3,5.3).curveTo(-9.7,5,-5.8,4.5).curveTo(-6.2,3.5,-7,2.4).curveTo(-8.9,0.3,-11.4,-0.2).lineTo(-8.4,0.1).curveTo(-5.1,1.1,-3.7,4.2).curveTo(-3.7,2.9,-4.3,1.2).curveTo(-5.8,-2.3,-9.4,-4.7).lineTo(-5.9,-3.4).curveTo(-2.2,-1.1,-0.7,3.9).curveTo(-0.7,2.1,-1.1,-0.1).curveTo(-1.9,-4.4,-4.3,-6.1).lineTo(-1.4,-4.2).curveTo(1.7,-1.2,2,3.6).curveTo(2,2.7,2.4,1.6).curveTo(3.3,-1,6.1,-2.6).lineTo(5,-0.6).curveTo(3.8,1.8,4.3,3.9).lineTo(5.4,2).curveTo(7.1,-0.1,9.6,-1.3).curveTo(9,-0.9,8.3,-0.1).curveTo(6.9,1.6,6.7,4).lineTo(7.9,2.6).curveTo(9.4,1.5,11.4,1.4).lineTo(10.9,1.6).curveTo(9.6,2.2,8.6,4.7).lineTo(9,4.8).curveTo(9.5,5,10.1,4.9).curveTo(11.8,4.8,10.3,5.3).curveTo(9.1,5.8,5.9,5.5).curveTo(3.3,5.2,2.6,5.4).curveTo(1.6,5.8,-0.4,5.9).lineTo(-4.2,6.1).lineTo(-4.4,6.1).lineTo(-6,5.9).closePath();
	this.shape_13.setTransform(907.6,417.1);

	this.instance_42 = new lib.barrena001();
	this.instance_42.parent = this;
	this.instance_42.setTransform(919.5,424.1,1,1,0,0,0,3.5,0.6);
	this.instance_42.alpha = 0.301;

	this.instance_43 = new lib.barrena008();
	this.instance_43.parent = this;
	this.instance_43.setTransform(909.3,421.9,1,1,0,0,0,9.2,1.4);
	this.instance_43.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43},{t:this.instance_42},{t:this.shape_13},{t:this.instance_41},{t:this.instance_40},{t:this.shape_12},{t:this.instance_39},{t:this.instance_38},{t:this.shape_11},{t:this.instance_37},{t:this.instance_36},{t:this.shape_10},{t:this.instance_35},{t:this.instance_34},{t:this.shape_9},{t:this.instance_33},{t:this.instance_32},{t:this.shape_8},{t:this.instance_31},{t:this.instance_30},{t:this.shape_7}]}).wait(126));

	// Ambient
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_14.setTransform(525,182.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_15.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525,257.5,1364.9,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;