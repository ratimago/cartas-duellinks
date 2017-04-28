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



(lib.teleInterpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-4.5,20.7).lineTo(-4.5,-20.6).lineTo(4.5,-20.6).lineTo(4.5,20.7).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-20.6,9,41.3);


(lib.teleInterpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-4.5,20.7).lineTo(-4.5,-20.6).lineTo(4.5,-20.6).lineTo(4.5,20.7).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-20.6,9,41.3);


(lib.teleInterpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-29.4,-11.6).lineTo(-26.7,-16.9).lineTo(29.3,11.6).lineTo(26.6,16.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-16.9,58.7,33.8);


(lib.teleInterpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-29.4,-11.6).lineTo(-26.7,-16.9).lineTo(29.3,11.6).lineTo(26.6,16.9).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-16.9,58.7,33.8);


(lib.telehandss = function(mode,startPosition,loop) {
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


(lib.telegrua3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-0.6,7.4).lineTo(-5.7,4.3).curveTo(-6.5,3.9,-6.8,3).curveTo(-7.1,2.2,-6.7,1.3).lineTo(-2.5,-6.4).curveTo(-2.1,-7.2,-1.2,-7.5).curveTo(-0.3,-7.8,0.5,-7.4).lineTo(5.6,-4.4).curveTo(6.5,-3.9,6.8,-3).curveTo(7.1,-2.2,6.7,-1.3).lineTo(2.4,6.3).curveTo(2,7.2,1.1,7.5).lineTo(0.4,7.6).curveTo(-0.1,7.6,-0.6,7.4).closePath();
	this.shape.setTransform(-65.4,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-32.1,-10.4).lineTo(-27.1,-20.3).lineTo(32.1,10.4).lineTo(27.1,20.4).closePath();
	this.shape_1.setTransform(-32.1,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-12,-2.9).lineTo(-9.3,-7.9).lineTo(12,2.9).lineTo(9.2,7.9).closePath();
	this.shape_2.setTransform(-79.5,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,0,91.6,53.4);


(lib.telegrua2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBD9D9").beginStroke().moveTo(0.3,3).curveTo(-2,2.9,-4.4,2.2).lineTo(-6.4,1.4).curveTo(-7.3,1.8,-8.3,1.7).curveTo(-10.2,1.6,-10.1,-0.3).curveTo(-9.9,-2.1,-8.2,-2.2).curveTo(-7.4,-2.2,-6.5,-1.8).curveTo(-6,-2.3,-4.7,-2.6).curveTo(-2.6,-3.2,0.6,-3).curveTo(3.7,-2.9,5.4,-2).curveTo(6.3,-1.6,6.5,-1.2).lineTo(8.4,-0.9).curveTo(10.2,-0.4,10.1,0.9).curveTo(9.9,2.9,8.2,2.9).lineTo(6.5,2.5).curveTo(4.7,3.1,1.7,3.1).lineTo(0.3,3).closePath();
	this.shape.setTransform(-33.4,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#969696").beginStroke().moveTo(-18.2,7.4).lineTo(-42.8,-7.6).lineTo(-42,-10.9).lineTo(41.5,-3.8).lineTo(42.7,1.4).lineTo(41.5,6.4).lineTo(36.7,10.9).closePath();
	this.shape_1.setTransform(-47.9,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1.7,1.8).curveTo(-2.5,1,-2.5,-0).curveTo(-2.5,-1.1,-1.7,-1.8).curveTo(-1.1,-2.5,-0,-2.5).curveTo(1.1,-2.5,1.8,-1.8).curveTo(2.5,-1.1,2.5,-0).curveTo(2.5,1,1.8,1.8).curveTo(1.1,2.5,-0,2.5).curveTo(-1.1,2.5,-1.7,1.8).closePath();
	this.shape_2.setTransform(-31.8,67.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-7.3,8.7).lineTo(7.1,-9).lineTo(7.3,-6).lineTo(-4.3,9).closePath();
	this.shape_3.setTransform(-37.3,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#969696").beginStroke().moveTo(-27.8,30.7).curveTo(-27.8,28.3,-27.7,27.8).curveTo(-27.4,25.9,-25.9,24.4).curveTo(-24.4,22.9,-2.5,-4.2).lineTo(19,-31.1).lineTo(27.8,-31.5).lineTo(14.8,30.7).curveTo(4.2,31.2,-6.5,31.4).lineTo(-17.1,31.5).curveTo(-27.8,31.5,-27.8,30.7).closePath();
	this.shape_4.setTransform(-37.9,50.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-11.3,25.9).lineTo(-9.1,17.9).lineTo(-4.3,15).lineTo(-2.1,12.7).lineTo(1.7,-6).lineTo(0.9,-6.5).lineTo(2.1,-11.4).lineTo(3.5,-11.3).lineTo(6.8,-26.4).lineTo(5,-26.9).lineTo(6.3,-33.1).curveTo(8.4,-32.7,10.5,-31.9).curveTo(11.7,-31.5,12,-30.2).curveTo(12.4,-28.6,11,-26.3).lineTo(8.1,-10.5).lineTo(9.2,-10).lineTo(8.6,-5.5).lineTo(7.2,-5).lineTo(6.4,-1.5).curveTo(3.8,12.4,3.4,13.7).lineTo(2.7,16.3).curveTo(2.1,17.9,1,18.2).lineTo(-0.2,21.4).curveTo(-2,24,-4.3,26.8).curveTo(-8.9,32.4,-11,33.1).lineTo(-11.3,33.1).curveTo(-12.9,33.1,-11.3,25.9).closePath();
	this.shape_5.setTransform(-12.1,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,0,90.7,82.2);


(lib.telegruabrazo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-6.4,13.6).curveTo(-8.7,13.4,-9.2,11).curveTo(-9.6,8.9,-8.5,6.4).curveTo(-7.5,4.3,-0.4,-13.6).lineTo(9.3,-12.2).lineTo(6.3,-4.5).curveTo(2.9,4,1.4,7.5).curveTo(-0.4,11.7,-1.8,12.8).curveTo(-2.9,13.6,-5.4,13.6).lineTo(-6.4,13.6).closePath();
	this.shape.setTransform(-275.4,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-6.9,14.9).curveTo(-9.3,14.7,-9.8,12.3).curveTo(-10.2,10.2,-9,7.7).curveTo(-8.1,5.6,-0.3,-14.9).lineTo(9.9,-14.4).lineTo(6.3,-4.9).curveTo(2.4,5.3,0.8,8.8).curveTo(-1,13,-2.4,14.1).curveTo(-3.5,14.9,-5.9,14.9).lineTo(-6.9,14.9).closePath();
	this.shape_1.setTransform(-285.1,42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-140.9,-4).lineTo(-134.3,-19.1).lineTo(137.7,5.2).lineTo(140.9,19.1).closePath();
	this.shape_2.setTransform(-140.9,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(-5,-0.6).lineTo(5,0.7);
	this.shape_3.setTransform(-282,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#757575").beginStroke().moveTo(-1.6,1.6).curveTo(-2.2,0.9,-2.2,-0).curveTo(-2.2,-1,-1.6,-1.6).curveTo(-0.9,-2.2,0,-2.2).curveTo(0.9,-2.2,1.6,-1.6).curveTo(2.2,-1,2.2,-0).curveTo(2.2,0.9,1.6,1.6).curveTo(0.9,2.2,0,2.2).curveTo(-0.9,2.2,-1.6,1.6).closePath();
	this.shape_4.setTransform(-135.6,73.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-0.9,12.3).curveTo(-4.7,11.4,-8.1,5.3).curveTo(-9.2,3.3,-13,-2.6).curveTo(-16.5,-8,-17.3,-9.6).curveTo(-18.4,-11.8,-16.6,-12.3).curveTo(-15.1,-12.7,-11.5,-12).lineTo(15.6,-10).curveTo(17.2,-9.8,17.6,-8.9).curveTo(17.9,-8.1,17.2,-7).lineTo(13.2,-0.6).curveTo(9.5,5.1,6.5,8.8).curveTo(3.5,12.4,0.4,12.4).lineTo(-0.9,12.3).closePath();
	this.shape_5.setTransform(-135.8,66.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DBD9D9").beginStroke().moveTo(12.5,6.4).curveTo(12.5,2.1,12.7,0.9).lineTo(13,-0.9).curveTo(12.8,-1.7,11.1,-1.9).lineTo(-7.8,-3.3).curveTo(-9.8,-3.4,-10.3,-3.3).curveTo(-11.4,-3.1,-11.8,-1.9).curveTo(-12.4,-0.1,-13,4).lineTo(-15.9,4).curveTo(-15.9,-0.7,-15.5,-2.2).curveTo(-14.2,-6.9,-9.2,-6.6).curveTo(-3.5,-6.3,8.6,-5.1).curveTo(12.9,-4.6,13.6,-4.3).curveTo(16.1,-3.2,15.9,0.3).lineTo(15.5,6.6).closePath();
	this.shape_6.setTransform(-234,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CECECE").beginStroke().moveTo(-135.8,-10).lineTo(-134.3,-13.9).lineTo(133.8,7.6).lineTo(135.8,13.9).closePath();
	this.shape_7.setTransform(-139,38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-7.3,11.4).lineTo(-5.9,7.5).lineTo(-8.5,3.7).lineTo(-2,-11.5).lineTo(8.5,-10.4).lineTo(8.3,7.8).curveTo(8.3,10.1,7.1,11).curveTo(6.2,11.5,4.1,11.6).closePath();
	this.shape_8.setTransform(-306.6,41.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-8.8,-11).lineTo(0.9,-10.8).lineTo(8.8,7.2).lineTo(3.9,10.2).lineTo(-8.2,10.9).closePath();
	this.shape_9.setTransform(-309.7,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-10,25.8).lineTo(-10.6,-26.4).lineTo(4.1,-26).lineTo(9.6,0.7).lineTo(6.6,0.5).lineTo(10.6,19.6).lineTo(-1.1,26.4).closePath();
	this.shape_10.setTransform(-314.4,26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CECECE").beginStroke().moveTo(-119.5,-0.2).lineTo(-132.5,-5.1).lineTo(-141.6,-4.1).lineTo(-154.3,-8.9).lineTo(-154.9,-22.5).lineTo(-131.9,-20.1).lineTo(-129.4,-22.1).lineTo(151.4,1.6).lineTo(154.9,17.4).lineTo(148.2,22.5).closePath();
	this.shape_11.setTransform(-154.9,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.9,0,325,78.7);


(lib.telecable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-91.9,1).lineTo(-91.9,-1).lineTo(91.9,-1).lineTo(91.9,1).closePath();
	this.shape.setTransform(-91.9,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.8,0,183.9,2);


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


(lib.tele0021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#202724").beginStroke().moveTo(-9.9,4.6).lineTo(-9.9,-4.6).lineTo(9.9,-4.6).lineTo(9.9,4.6).closePath();
	this.shape.setTransform(10,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,9.2);


(lib.tele0020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-23.1,16.6).curveTo(-25.6,16.6,-27.3,14.8).curveTo(-29.1,13.1,-29.1,10.7).curveTo(-29.1,8.2,-27.3,6.5).curveTo(-25.6,4.8,-23.1,4.8).curveTo(-23.2,0.4,-20,-2.8).curveTo(-16.9,-5.9,-12.5,-5.9).curveTo(-11.4,-5.9,-10.7,-5.7).lineTo(-10.7,-5.9).curveTo(-10.6,-10.3,-7.5,-13.5).curveTo(-4.4,-16.6,0,-16.6).curveTo(4.4,-16.6,7.6,-13.5).curveTo(10.7,-10.3,10.7,-5.9).lineTo(10.5,-4.4).lineTo(12.5,-4.6).curveTo(16.5,-4.6,19.6,-1.9).curveTo(22.6,0.8,23.1,4.8).lineTo(23.2,4.8).curveTo(25.6,4.8,27.3,6.5).curveTo(29,8.2,29.1,10.7).curveTo(29,13.1,27.3,14.8).curveTo(25.6,16.6,23.2,16.6).closePath();
	this.shape.setTransform(29.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,33.2);


(lib.tele0019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13,9.3).curveTo(-14.3,9.3,-15.3,8.3).curveTo(-16.3,7.4,-16.3,6).curveTo(-16.3,4.6,-15.3,3.6).curveTo(-14.3,2.7,-13,2.7).curveTo(-13,0.2,-11.2,-1.6).curveTo(-9.4,-3.3,-7,-3.3).lineTo(-6,-3.2).lineTo(-6,-3.3).curveTo(-6,-5.8,-4.2,-7.5).curveTo(-2.5,-9.3,0,-9.3).curveTo(2.5,-9.3,4.2,-7.5).curveTo(6,-5.8,6,-3.3).lineTo(5.9,-2.5).lineTo(7,-2.6).curveTo(9.3,-2.6,11,-1.1).curveTo(12.7,0.4,12.9,2.7).lineTo(13,2.7).curveTo(14.4,2.7,15.3,3.6).curveTo(16.3,4.6,16.3,6).curveTo(16.3,7.4,15.3,8.3).curveTo(14.4,9.3,13,9.3).closePath();
	this.shape.setTransform(16.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.6,18.6);


(lib.tele0018 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-23.1,16.6).curveTo(-25.6,16.6,-27.3,14.8).curveTo(-29.1,13.1,-29.1,10.7).curveTo(-29.1,8.2,-27.3,6.5).curveTo(-25.6,4.8,-23.1,4.8).curveTo(-23.1,0.3,-20.1,-2.8).curveTo(-16.9,-5.9,-12.5,-5.9).lineTo(-10.7,-5.7).lineTo(-10.7,-5.9).curveTo(-10.7,-10.3,-7.5,-13.4).curveTo(-4.4,-16.6,0,-16.6).curveTo(4.4,-16.6,7.6,-13.4).curveTo(10.6,-10.3,10.6,-5.9).lineTo(10.5,-4.4).lineTo(12.5,-4.6).curveTo(16.5,-4.6,19.6,-1.9).curveTo(22.6,0.8,23.1,4.8).lineTo(23.2,4.8).curveTo(25.6,4.8,27.3,6.5).curveTo(29,8.2,29.1,10.7).curveTo(29,13.1,27.3,14.8).curveTo(25.6,16.6,23.2,16.6).closePath();
	this.shape.setTransform(29.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,33.2);


(lib.tele0017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13,9.3).curveTo(-14.3,9.3,-15.3,8.3).curveTo(-16.3,7.4,-16.3,6).curveTo(-16.3,4.6,-15.3,3.6).curveTo(-14.3,2.7,-13,2.7).curveTo(-13,0.2,-11.2,-1.6).curveTo(-9.4,-3.3,-7,-3.3).lineTo(-6,-3.2).lineTo(-6,-3.3).curveTo(-6,-5.8,-4.2,-7.5).curveTo(-2.5,-9.3,-0,-9.3).curveTo(2.5,-9.3,4.2,-7.5).curveTo(6,-5.8,6,-3.3).lineTo(5.9,-2.5).lineTo(7,-2.6).curveTo(9.3,-2.6,11,-1.1).curveTo(12.6,0.4,12.9,2.7).lineTo(12.9,2.7).curveTo(14.3,2.7,15.3,3.6).curveTo(16.3,4.6,16.3,6).curveTo(16.3,7.4,15.3,8.3).curveTo(14.3,9.3,12.9,9.3).closePath();
	this.shape.setTransform(16.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.6,18.6);


(lib.tele0016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-23.1,16.6).curveTo(-25.6,16.6,-27.3,14.8).curveTo(-29.1,13.1,-29.1,10.7).curveTo(-29.1,8.3,-27.3,6.5).curveTo(-25.6,4.7,-23.1,4.7).curveTo(-23.1,0.3,-20.1,-2.7).curveTo(-16.9,-5.9,-12.5,-5.9).lineTo(-10.7,-5.7).lineTo(-10.7,-5.9).curveTo(-10.6,-10.3,-7.5,-13.5).curveTo(-4.4,-16.6,0,-16.6).curveTo(4.4,-16.6,7.6,-13.5).curveTo(10.6,-10.3,10.6,-5.9).lineTo(10.5,-4.4).lineTo(12.5,-4.6).curveTo(16.5,-4.6,19.6,-1.9).curveTo(22.6,0.8,23.1,4.8).lineTo(23.2,4.7).curveTo(25.6,4.7,27.3,6.5).curveTo(29,8.3,29.1,10.7).curveTo(29,13.1,27.3,14.8).curveTo(25.6,16.6,23.2,16.6).closePath();
	this.shape.setTransform(29.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,33.2);


(lib.tele0015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13,9.3).curveTo(-14.3,9.3,-15.3,8.3).curveTo(-16.3,7.3,-16.3,6).curveTo(-16.3,4.6,-15.3,3.7).curveTo(-14.3,2.6,-13,2.7).curveTo(-13,0.2,-11.2,-1.6).curveTo(-9.4,-3.3,-7,-3.3).lineTo(-6,-3.2).lineTo(-6,-3.3).curveTo(-6,-5.7,-4.2,-7.6).curveTo(-2.5,-9.3,-0,-9.3).curveTo(2.5,-9.3,4.2,-7.6).curveTo(6,-5.7,6,-3.3).lineTo(5.9,-2.5).lineTo(7,-2.6).curveTo(9.3,-2.6,11,-1.1).curveTo(12.7,0.4,12.9,2.7).lineTo(13,2.7).curveTo(14.4,2.6,15.4,3.7).curveTo(16.3,4.6,16.3,6).curveTo(16.3,7.3,15.4,8.3).curveTo(14.4,9.3,13,9.3).closePath();
	this.shape.setTransform(16.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.6,18.6);


(lib.tele0014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6.5,1).curveTo(-9.2,0.6,-9.2,0).curveTo(-9.2,-0.6,-6.5,-1).curveTo(-3.8,-1.4,0,-1.4).curveTo(3.8,-1.4,6.5,-1).curveTo(9.2,-0.6,9.2,0).curveTo(9.2,0.6,6.5,1).curveTo(3.8,1.4,0,1.4).curveTo(-3.8,1.4,-6.5,1).closePath();
	this.shape.setTransform(9.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,2.9);


(lib.tele0013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6.5,1).curveTo(-9.2,0.6,-9.2,0).curveTo(-9.2,-0.6,-6.5,-1).curveTo(-3.8,-1.4,0,-1.4).curveTo(3.8,-1.4,6.5,-1).curveTo(9.2,-0.6,9.2,0).curveTo(9.2,0.6,6.5,1).curveTo(3.8,1.4,0,1.4).curveTo(-3.8,1.4,-6.5,1).closePath();
	this.shape.setTransform(9.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,2.9);


(lib.tele0012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6,0.9).curveTo(-8.5,0.6,-8.5,-0).curveTo(-8.5,-0.5,-6,-0.9).curveTo(-3.5,-1.3,-0,-1.3).curveTo(3.5,-1.3,6,-0.9).curveTo(8.5,-0.5,8.5,-0).curveTo(8.5,0.6,6,0.9).curveTo(3.5,1.3,-0,1.3).curveTo(-3.5,1.3,-6,0.9).closePath();
	this.shape.setTransform(8.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,2.6);


(lib.tele0011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-15.1,2.4).curveTo(-21.3,1.4,-21.4,0).curveTo(-21.3,-1.3,-15.1,-2.3).curveTo(-8.8,-3.3,-0,-3.3).curveTo(8.8,-3.3,15.1,-2.3).curveTo(21.4,-1.3,21.3,0).curveTo(21.4,1.4,15.1,2.4).curveTo(8.8,3.3,-0,3.3).curveTo(-8.8,3.3,-15.1,2.4).closePath();
	this.shape.setTransform(21.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,6.6);


(lib.tele0010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-5,0.8).curveTo(-7.1,0.5,-7.1,-0).curveTo(-7.1,-0.4,-5,-0.7).curveTo(-3,-1.1,0,-1.1).curveTo(2.9,-1.1,5,-0.7).curveTo(7.1,-0.4,7.1,-0).curveTo(7.1,0.5,5,0.8).curveTo(2.9,1.1,0,1.1).curveTo(-3,1.1,-5,0.8).closePath();
	this.shape.setTransform(7.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,2.2);


(lib.tele009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-15.1,2.3).curveTo(-21.3,1.4,-21.4,0).curveTo(-21.3,-1.4,-15.1,-2.3).curveTo(-8.8,-3.3,-0,-3.3).curveTo(8.9,-3.3,15.1,-2.3).curveTo(21.4,-1.4,21.3,0).curveTo(21.4,1.4,15.1,2.3).curveTo(8.8,3.3,-0,3.3).curveTo(-8.8,3.3,-15.1,2.3).closePath();
	this.shape.setTransform(21.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,6.6);


(lib.tele008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-6.5,1).curveTo(-9.2,0.6,-9.2,0).curveTo(-9.2,-0.6,-6.5,-1).curveTo(-3.8,-1.4,0,-1.4).curveTo(3.8,-1.4,6.5,-1).curveTo(9.2,-0.6,9.2,0).curveTo(9.2,0.6,6.5,1).curveTo(3.8,1.4,0,1.4).curveTo(-3.8,1.4,-6.5,1).closePath();
	this.shape.setTransform(9.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,2.8);


(lib.tele007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,-0).curveTo(-3.5,-0.5,0,-0.5).curveTo(3.5,-0.5,3.5,-0).curveTo(3.5,0.5,0,0.5).curveTo(-3.5,0.5,-3.5,-0).closePath();
	this.shape.setTransform(3.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,1.1);


(lib.tele006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,-0).curveTo(-3.5,-0.5,0,-0.5).curveTo(3.5,-0.5,3.5,-0).curveTo(3.5,0.5,0,0.5).curveTo(-3.5,0.5,-3.5,-0).closePath();
	this.shape.setTransform(3.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,1.1);


(lib.tele005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.2,0).curveTo(-3.2,-0.5,-0,-0.5).curveTo(3.3,-0.5,3.2,0).curveTo(3.2,0.2,2.3,0.3).curveTo(1.3,0.5,-0,0.5).curveTo(-3.2,0.5,-3.2,0).closePath();
	this.shape.setTransform(3.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,1);


(lib.tele004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-5.8,0.9).curveTo(-8.2,0.5,-8.2,0).curveTo(-8.2,-0.5,-5.8,-0.9).curveTo(-3.4,-1.2,0,-1.2).curveTo(3.4,-1.2,5.8,-0.9).curveTo(8.2,-0.5,8.2,0).curveTo(8.2,0.5,5.8,0.9).curveTo(3.4,1.2,0,1.3).curveTo(-3.4,1.2,-5.8,0.9).closePath();
	this.shape.setTransform(8.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,2.5);


(lib.tele003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-5.8,0.9).curveTo(-8.2,0.5,-8.2,-0).curveTo(-8.2,-0.5,-5.8,-0.9).curveTo(-3.4,-1.3,-0,-1.3).curveTo(3.3,-1.3,5.8,-0.9).curveTo(8.2,-0.5,8.2,-0).curveTo(8.2,0.5,5.8,0.9).curveTo(3.4,1.3,-0,1.3).curveTo(-3.4,1.3,-5.8,0.9).closePath();
	this.shape.setTransform(8.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,2.6);


(lib.tele002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0).curveTo(-2.7,-0.4,-0,-0.4).curveTo(2.7,-0.4,2.7,0).curveTo(2.7,0.2,1.9,0.3).lineTo(-0,0.4).curveTo(-2.7,0.4,-2.7,0).closePath();
	this.shape.setTransform(2.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.5,0.9);


(lib.tele001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,-0).curveTo(-3.5,-0.5,0,-0.6).curveTo(3.5,-0.5,3.5,-0).curveTo(3.5,0.6,0,0.5).curveTo(-3.5,0.6,-3.5,-0).closePath();
	this.shape.setTransform(3.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,1.1);


(lib.telegruacanasta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-27.2,1.2).lineTo(-27.2,-1.2).lineTo(27.3,-1.2).lineTo(27.3,1.2).closePath();
	this.shape.setTransform(-45.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-23.6,33.8).curveTo(-24.5,33.8,-25.1,33.2).curveTo(-25.8,32.5,-25.7,31.6).lineTo(-25.7,-31.6).curveTo(-25.8,-32.5,-25.1,-33.2).curveTo(-24.5,-33.8,-23.6,-33.8).lineTo(23.5,-33.8).curveTo(24.5,-33.8,25.1,-33.2).curveTo(25.7,-32.5,25.8,-31.6).lineTo(25.8,31.6).curveTo(25.7,32.5,25.1,33.2).curveTo(24.5,33.8,23.5,33.8).closePath();
	this.shape_1.setTransform(-44.3,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#757575").beginStroke().moveTo(-5.6,2).lineTo(-5.6,-2).lineTo(3.7,-2).curveTo(4.5,-2,5,-1.4).curveTo(5.6,-0.8,5.6,-0).curveTo(5.6,0.8,5,1.4).curveTo(4.4,2,3.7,2).closePath();
	this.shape_2.setTransform(-8.4,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-2.1,1.1).curveTo(-2.6,1.1,-2.9,0.8).curveTo(-3.1,0.4,-3.1,0).curveTo(-3.1,-0.4,-2.9,-0.8).curveTo(-2.6,-1.1,-2.1,-1.1).lineTo(2,-1.1).curveTo(2.5,-1.1,2.8,-0.8).curveTo(3.2,-0.4,3.2,0).curveTo(3.2,0.4,2.8,0.8).curveTo(2.5,1.1,2,1.1).closePath();
	this.shape_3.setTransform(-8.9,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-4.2,-1.1).lineTo(-3.3,-3.2).lineTo(4.2,-2.8).lineTo(-4.2,3.2).closePath();
	this.shape_4.setTransform(-9.6,40.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-3.8,1.1).lineTo(-3.8,-1.1).lineTo(3.7,-1.1).lineTo(3.7,1.1).closePath();
	this.shape_5.setTransform(-9.7,51.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-2.4,10.1).lineTo(-2.4,-10.1).lineTo(2.4,-10.1).lineTo(2.4,10.1).closePath();
	this.shape_6.setTransform(-9.7,49.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CECECE").beginStroke().moveTo(-11.4,-32.7).lineTo(11.1,-32.7).lineTo(11.4,29.3).lineTo(0.4,29.3).lineTo(-2.1,28.2).lineTo(-11.4,32.7).closePath();
	this.shape_7.setTransform(-11.3,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,1.4).curveTo(-2.5,0.7,-2.6,-0.4).curveTo(-2.7,-1.2,-2.3,-1.9).curveTo(-2.1,-1.2,-1.6,-0.8).curveTo(-0.8,-0.2,0.3,-0.3).curveTo(1.3,-0.4,1.9,-1.2).lineTo(2.3,-1.9).curveTo(2.5,-1.5,2.6,-1).curveTo(2.7,0.1,2,0.9).curveTo(1.3,1.8,0.3,1.9).lineTo(0,1.9).curveTo(-0.8,1.9,-1.6,1.4).closePath();
	this.shape_8.setTransform(-45.3,-26.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,1.8).curveTo(-2.5,1,-2.5,-0).curveTo(-2.5,-1,-1.8,-1.7).curveTo(-1,-2.5,0,-2.5).curveTo(1.1,-2.5,1.8,-1.7).curveTo(2.5,-1,2.5,-0).curveTo(2.5,1,1.8,1.8).curveTo(1.1,2.5,0,2.5).curveTo(-1,2.5,-1.8,1.8).closePath();
	this.shape_9.setTransform(-42.1,-32,0.53,0.53);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,1.8).curveTo(-2.5,1,-2.5,0).curveTo(-2.5,-1,-1.8,-1.8).curveTo(-1,-2.5,0,-2.5).curveTo(1,-2.5,1.7,-1.8).curveTo(2.5,-1,2.5,0).curveTo(2.5,1,1.7,1.8).curveTo(1,2.5,0,2.5).curveTo(-1,2.5,-1.8,1.8).closePath();
	this.shape_10.setTransform(-48.9,-32,0.53,0.53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#E01721").beginStroke().moveTo(-18.1,1.4).curveTo(-18.6,1.4,-19,1).curveTo(-19.4,0.6,-19.4,0).curveTo(-19.4,-0.6,-19,-1).curveTo(-18.6,-1.4,-18.1,-1.4).lineTo(18,-1.4).curveTo(18.6,-1.4,19,-1).curveTo(19.4,-0.6,19.4,0).curveTo(19.4,0.6,19,1).curveTo(18.6,1.4,18,1.4).closePath();
	this.shape_11.setTransform(-45.3,-36.7,0.485,0.485);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#E01721").beginStroke().moveTo(-1.9,7).curveTo(-2.7,6.3,-2.7,5.1).lineTo(-2.7,-6.7).curveTo(-2.7,-7.2,-2.4,-7.8).curveTo(0.3,-7.2,2.7,-5.8).lineTo(2.7,5.1).curveTo(2.7,6.2,1.9,7).curveTo(1.1,7.8,0,7.8).curveTo(-1.1,7.8,-1.9,7).closePath();
	this.shape_12.setTransform(-41.9,-42.5,0.485,0.485);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#E01721").beginStroke().moveTo(-1.9,7).curveTo(-2.6,6.2,-2.7,5.1).lineTo(-2.7,-5.5).curveTo(-0.3,-7,2.5,-7.8).lineTo(2.6,-6.8).lineTo(2.6,5.1).curveTo(2.6,6.2,1.9,7).curveTo(1.1,7.8,0,7.8).curveTo(-1.1,7.8,-1.9,7).closePath();
	this.shape_13.setTransform(-48.9,-42.5,0.485,0.485);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#E01721").beginStroke().moveTo(-3.1,3.1).curveTo(-4.4,1.8,-4.4,0).curveTo(-4.4,-1.8,-3.1,-3.1).curveTo(-1.8,-4.4,-0,-4.4).curveTo(1.8,-4.4,3.1,-3.1).curveTo(4.4,-1.8,4.4,0).curveTo(4.4,1.8,3.1,3.1).curveTo(1.8,4.4,-0,4.4).curveTo(-1.8,4.4,-3.1,3.1).closePath();
	this.shape_14.setTransform(-45.4,-46.1,0.485,0.485);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#E01721").beginStroke().moveTo(-18.4,10.1).curveTo(-17,6.3,-17,4.8).curveTo(-17,-1.4,-12,-5.7).curveTo(-7,-10.1,0.1,-10.1).curveTo(7.2,-10.1,12.2,-5.7).curveTo(17.2,-1.4,17.2,4.8).curveTo(17.2,6,18.3,9.6).lineTo(18.4,10.1).closePath();
	this.shape_15.setTransform(-45.3,-41.7,0.485,0.485);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#4F4C4D").beginStroke().moveTo(-5.1,1.6).curveTo(-7.1,0,-7.1,-2.2).lineTo(-7.2,-2.7).curveTo(-7,-2.8,-4.5,-3).curveTo(-1.5,-3.2,0.8,-3.1).lineTo(7.2,-2.7).lineTo(7.2,-2.2).lineTo(7.2,-2).lineTo(6.9,-1.1).lineTo(6.8,-0.9).lineTo(6.6,-0.6).lineTo(6.5,-0.4).lineTo(6.4,-0.1).lineTo(5.7,0.8).lineTo(5.4,1).lineTo(4.9,1.4).lineTo(4.8,1.5).lineTo(4.5,1.8).lineTo(4.4,1.9).lineTo(3.9,2.1).lineTo(3.9,2.2).curveTo(2.5,3,0.9,3.1).lineTo(-0,3.2).curveTo(-2.9,3.2,-5.1,1.6).closePath();
	this.shape_16.setTransform(-45.9,-19.4,0.53,0.53);

	this.instance = new lib.tele0021();
	this.instance.parent = this;
	this.instance.setTransform(-46,-0.1,0.53,0.53,0,0,0,9.9,4.6);
	this.instance.alpha = 0.398;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#E01721").beginStroke().moveTo(-13.9,21.6).lineTo(-13.9,-2.7).lineTo(-13.8,-2.7).lineTo(-16.2,-21).lineTo(-11,-21.7).lineTo(-8.3,-2.7).lineTo(8.3,-2.7).lineTo(11,-21.7).lineTo(16.2,-21).lineTo(13.8,-2.7).lineTo(13.8,-2.7).lineTo(13.8,21.6).closePath();
	this.shape_17.setTransform(-46,-9.1,0.53,0.53);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-11.6,-3.4).curveTo(-6.7,-8.3,0.1,-8.3).curveTo(5.6,-8.3,10,-5).lineTo(11.1,-4.1).lineTo(13.1,-2.1).lineTo(13.2,-1.9).lineTo(13.9,-1).lineTo(14.7,0.3).lineTo(15.9,2.9).lineTo(16.7,5.8).curveTo(14.5,4.7,14,3.9).curveTo(13.2,2.6,11.8,2.3).curveTo(10.4,1.8,9.3,2.6).lineTo(8.4,3.1).lineTo(7.7,3.3).lineTo(7.6,3.3).lineTo(6.7,3.5).lineTo(5.2,3.5).lineTo(5,3.5).lineTo(4.3,3.4).lineTo(4,3.3).lineTo(3.6,3.3).lineTo(2.8,3.1).lineTo(2.7,3).lineTo(2.3,2.9).lineTo(2.1,2.8).lineTo(0.6,2.1).curveTo(-1.6,0.8,-3.2,-1).curveTo(-4.2,-2,-5.6,-2).curveTo(-7.1,-2,-8.1,-1).lineTo(-11.1,1.5).curveTo(-12.9,3,-13.9,4.2).curveTo(-14.5,4.8,-15.3,6.2).curveTo(-16.2,7.7,-16.7,8.3).curveTo(-16.5,1.3,-11.6,-3.4).closePath();
	this.shape_18.setTransform(-45.7,-37.1,0.53,0.53);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#202724").beginStroke().moveTo(25,21.9).lineTo(25,17.8).curveTo(25,7.8,19.7,-0.4).lineTo(19.7,21.9).lineTo(-19.9,21.9).lineTo(-19.9,-1.1).curveTo(-25,6.9,-25,17.8).lineTo(-25,21.9).lineTo(-39.2,21.9).lineTo(-39.2,17.8).curveTo(-39.2,6.3,-35.7,-3.3).curveTo(-32,-13.3,-26.1,-16.8).curveTo(-22.4,-19.2,-15.9,-20.5).curveTo(-8.9,-22,-0,-22).curveTo(8.9,-22,15.9,-20.5).curveTo(22.5,-19.1,26.2,-16.7).curveTo(32,-13.3,35.7,-3.3).curveTo(39.2,6.4,39.2,17.8).lineTo(39.2,21.9).closePath();
	this.shape_19.setTransform(-45.8,-9.3,0.53,0.53);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#4F4C4D").beginStroke().moveTo(-0.2,17.3).curveTo(-5.9,17.3,-10.4,13.8).curveTo(-14.8,10.3,-16.4,4.9).curveTo(-16.7,5.1,-16.9,5.1).curveTo(-17.7,5.1,-18.2,3.8).curveTo(-18.8,2.5,-18.7,0.6).curveTo(-18.8,-1.3,-18.2,-2.6).curveTo(-17.7,-4,-16.9,-4).lineTo(-16.6,-3.9).curveTo(-15.3,-9.7,-10.7,-13.5).curveTo(-6.2,-17.3,-0.2,-17.3).lineTo(1.2,-17.3).curveTo(3.7,-17,5.9,-16.1).lineTo(7.4,-15.5).lineTo(7.5,-15.5).lineTo(8.1,-15.1).lineTo(8.2,-15.1).lineTo(8.8,-14.7).lineTo(8.8,-14.6).lineTo(9.4,-14.2).lineTo(9.5,-14.2).lineTo(10.1,-13.7).lineTo(10.2,-13.7).lineTo(11.3,-12.7).lineTo(11.9,-12.1).lineTo(12,-12).lineTo(12.4,-11.5).lineTo(12.5,-11.4).lineTo(13.6,-10.1).lineTo(13.8,-9.6).lineTo(14,-9.4).lineTo(14.7,-8.2).lineTo(14.8,-7.9).lineTo(15.4,-6.7).lineTo(15.5,-6.3).lineTo(15.9,-5.1).lineTo(16.3,-3.6).curveTo(16.6,-4,16.9,-4).curveTo(17.7,-4,18.3,-2.6).curveTo(18.7,-1.3,18.7,0.6).curveTo(18.7,2.5,18.3,3.8).curveTo(17.7,5.1,16.9,5.1).curveTo(16.5,5.1,16.1,4.5).lineTo(15.9,5.1).lineTo(15.7,5.9).lineTo(14.5,8.7).lineTo(13,10.8).lineTo(12.5,11.4).lineTo(12.4,11.5).lineTo(11.4,12.6).lineTo(11.3,12.7).lineTo(10.8,13.2).lineTo(10.7,13.2).lineTo(10.2,13.7).lineTo(10.1,13.7).lineTo(9.5,14.2).lineTo(9.4,14.2).lineTo(8.8,14.6).lineTo(8.8,14.7).lineTo(8.2,15.1).lineTo(8.1,15.1).lineTo(7.5,15.5).lineTo(7.4,15.5).lineTo(5.9,16.2).curveTo(3.8,17,1.2,17.3).lineTo(0.3,17.3).closePath();
	this.shape_20.setTransform(-45.5,-32.4,0.53,0.53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#4F4C4D").beginStroke().moveTo(-6,6.1).lineTo(-6,-6.1).lineTo(6,-6.1).lineTo(6,6.1).closePath();
	this.shape_21.setTransform(-45.9,-23.4,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-48.2,72.5,116.4);


(lib.telefondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-51.3,0.9).lineTo(-51.3,-0.9).lineTo(51.3,-0.9).lineTo(51.3,0.9).closePath();
	this.shape.setTransform(-999.2,119.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-51.3,0.9).lineTo(-51.3,-0.9).lineTo(51.3,-0.9).lineTo(51.3,0.9).closePath();
	this.shape_1.setTransform(-998.8,111.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-118,0.9).lineTo(-118,-0.9).lineTo(118,-0.9).lineTo(118,0.9).closePath();
	this.shape_2.setTransform(-119.1,118.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-118.1,0.9).lineTo(-118.1,-0.9).lineTo(118.1,-0.9).lineTo(118.1,0.9).closePath();
	this.shape_3.setTransform(-118,111.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-105.8,0.9).lineTo(-105.8,-0.9).lineTo(105.8,-0.9).lineTo(105.8,0.9).closePath();
	this.shape_4.setTransform(-436.6,118.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-105.8,0.9).lineTo(-105.8,-0.9).lineTo(105.7,-0.9).lineTo(105.7,0.9).closePath();
	this.shape_5.setTransform(-435.6,114.1);

	this.instance = new lib.tele0015();
	this.instance.parent = this;
	this.instance.setTransform(-55.1,58.2,1,1,0,0,0,16.3,9.3);
	this.instance.alpha = 0.289;

	this.instance_1 = new lib.tele0016();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-187.5,41.6,1,1,0,0,0,29.1,16.6);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.tele0017();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-385.1,44.7,1,1,0,0,0,16.3,9.2);
	this.instance_2.alpha = 0.289;

	this.instance_3 = new lib.tele0018();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-530.7,23.6,1,1,0,0,0,29.1,16.6);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.tele0019();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-713,32.8,1,1,0,0,0,16.2,9.2);
	this.instance_4.alpha = 0.289;

	this.instance_5 = new lib.tele0020();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-842,16.6,1,1,0,0,0,29.1,16.6);
	this.instance_5.alpha = 0.391;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#28292B").beginStroke().moveTo(-22.5,11).curveTo(-21.9,10.3,-21.8,9.9).curveTo(-21.8,9.4,-22.6,8.1).curveTo(-23.4,6.7,-23.3,6.2).curveTo(-23.1,5.7,-21.7,5.1).curveTo(-20.2,4.4,-20,3.9).curveTo(-19.8,3.5,-20.2,1.9).curveTo(-20.7,0.4,-20.3,-0).curveTo(-20.1,-0.5,-18.5,-0.7).curveTo(-17,-1,-16.6,-1.4).curveTo(-16.3,-1.7,-16.3,-3.3).curveTo(-16.3,-4.9,-15.8,-5.2).curveTo(-15.4,-5.6,-13.9,-5.4).curveTo(-12.3,-5.2,-11.9,-5.5).curveTo(-11.5,-5.7,-11,-7.3).curveTo(-10.5,-8.8,-10,-9).curveTo(-9.6,-9.2,-8.2,-8.6).curveTo(-6.7,-7.9,-6.2,-8.1).curveTo(-5.8,-8.2,-4.8,-9.6).curveTo(-4,-10.9,-3.5,-10.9).curveTo(-2.9,-10.9,-1.7,-10).curveTo(-0.5,-9,0,-9).curveTo(0.5,-9,1.7,-10).curveTo(3,-11,3.5,-10.9).curveTo(3.9,-10.8,4.9,-9.5).curveTo(5.7,-8.2,6.2,-8.1).curveTo(6.6,-7.9,8.1,-8.6).curveTo(9.6,-9.2,10,-9).curveTo(10.5,-8.8,11,-7.3).curveTo(11.5,-5.7,11.9,-5.5).curveTo(12.3,-5.2,13.9,-5.4).curveTo(15.4,-5.6,15.9,-5.2).curveTo(16.3,-4.9,16.3,-3.3).curveTo(16.3,-1.7,16.7,-1.4).curveTo(17,-1,18.6,-0.7).curveTo(20.1,-0.5,20.4,-0).curveTo(20.6,0.4,20.3,1.9).curveTo(19.8,3.5,20,3.9).curveTo(20.2,4.4,21.7,5.1).curveTo(23.1,5.7,23.2,6.2).curveTo(23.4,6.7,22.5,8.1).curveTo(21.8,9.4,21.8,9.9).curveTo(21.8,10.3,22.5,11).closePath();
	this.shape_6.setTransform(-158,315.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#28292B").beginStroke().moveTo(-22.5,11).curveTo(-21.8,10.3,-21.8,9.9).curveTo(-21.8,9.4,-22.5,8.1).curveTo(-23.4,6.7,-23.2,6.2).curveTo(-23.1,5.7,-21.7,5.1).curveTo(-20.2,4.4,-20,3.9).curveTo(-19.8,3.5,-20.3,1.9).curveTo(-20.6,0.4,-20.4,-0).curveTo(-20.1,-0.5,-18.6,-0.7).curveTo(-17,-1,-16.7,-1.4).curveTo(-16.4,-1.7,-16.3,-3.4).curveTo(-16.2,-4.9,-15.9,-5.2).curveTo(-15.4,-5.6,-13.9,-5.4).curveTo(-12.3,-5.2,-11.9,-5.5).curveTo(-11.5,-5.7,-11,-7.3).curveTo(-10.5,-8.8,-10.1,-9).curveTo(-9.6,-9.2,-8.1,-8.6).curveTo(-6.6,-7.9,-6.2,-8.1).curveTo(-5.7,-8.2,-4.9,-9.6).curveTo(-4,-10.9,-3.4,-10.9).curveTo(-3,-10.9,-1.7,-10).curveTo(-0.5,-9,-0,-9).curveTo(0.5,-9,1.8,-10).curveTo(2.9,-11,3.4,-10.9).curveTo(3.9,-10.8,4.9,-9.5).curveTo(5.8,-8.2,6.2,-8.1).curveTo(6.6,-7.9,8.2,-8.6).curveTo(9.6,-9.2,10.1,-9).curveTo(10.5,-8.8,11,-7.3).curveTo(11.5,-5.7,11.9,-5.5).curveTo(12.3,-5.2,13.9,-5.4).curveTo(15.5,-5.6,15.8,-5.2).curveTo(16.3,-4.9,16.3,-3.4).curveTo(16.3,-1.7,16.6,-1.4).curveTo(16.9,-1,18.5,-0.7).curveTo(20.1,-0.5,20.3,-0).curveTo(20.6,0.4,20.2,1.9).curveTo(19.8,3.5,20,3.9).curveTo(20.2,4.4,21.7,5.1).curveTo(23.1,5.7,23.2,6.2).curveTo(23.4,6.7,22.6,8.1).curveTo(21.7,9.4,21.8,9.9).curveTo(21.9,10.3,22.5,11).closePath();
	this.shape_7.setTransform(-775,317.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.7).curveTo(-3.8,1.5,-3.8,-0).curveTo(-3.7,-1.6,-2.6,-2.6).curveTo(-1.5,-3.7,0,-3.7).curveTo(1.6,-3.7,2.7,-2.6).curveTo(3.8,-1.5,3.8,-0).curveTo(3.8,1.5,2.7,2.7).curveTo(1.6,3.7,-0,3.8).curveTo(-1.6,3.7,-2.7,2.7).closePath();
	this.shape_8.setTransform(-451.3,253.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,1.5).curveTo(-2.2,0.9,-2.2,-0).curveTo(-2.1,-0.9,-1.5,-1.5).curveTo(-0.8,-2.2,-0,-2.1).curveTo(0.9,-2.1,1.5,-1.5).curveTo(2.2,-0.9,2.1,-0).curveTo(2.1,0.9,1.5,1.5).curveTo(0.8,2.1,-0,2.1).curveTo(-0.9,2.1,-1.5,1.5).closePath();
	this.shape_9.setTransform(-407.3,267.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,2.1).curveTo(-3,1.2,-3,-0).curveTo(-2.9,-1.2,-2.1,-2.1).curveTo(-1.2,-3,0,-2.9).curveTo(1.3,-3,2.1,-2.1).curveTo(3,-1.2,3,-0).curveTo(3,1.2,2.1,2.1).curveTo(1.2,2.9,-0,2.9).curveTo(-1.2,2.9,-2.1,2.1).closePath();
	this.shape_10.setTransform(-396.4,268.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.8).curveTo(-4,1.7,-4.1,-0).curveTo(-4,-1.7,-2.8,-2.8).curveTo(-1.7,-4.1,-0,-4.1).curveTo(1.7,-4,2.9,-2.8).curveTo(4,-1.6,4,-0).curveTo(4,1.7,2.9,2.8).curveTo(1.6,4,-0,4).curveTo(-1.7,4,-2.8,2.8).closePath();
	this.shape_11.setTransform(-440.1,259.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-3,3).curveTo(-4.2,1.7,-4.2,-0).curveTo(-4.2,-1.8,-3,-3).curveTo(-1.7,-4.2,0,-4.2).curveTo(1.8,-4.2,3,-3).curveTo(4.2,-1.7,4.2,0).curveTo(4.2,1.8,3,3).curveTo(1.7,4.2,-0,4.2).curveTo(-1.8,4.2,-3,3).closePath();
	this.shape_12.setTransform(-402.8,278.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.9,3.9).curveTo(-5.6,2.3,-5.5,-0).curveTo(-5.5,-2.3,-3.9,-3.9).curveTo(-2.3,-5.5,-0,-5.5).curveTo(2.3,-5.5,3.9,-3.9).curveTo(5.5,-2.3,5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.5,-0,5.5).curveTo(-2.3,5.5,-3.9,3.9).closePath();
	this.shape_13.setTransform(-451.4,271.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,2.5).curveTo(-3.4,1.4,-3.5,-0).curveTo(-3.4,-1.4,-2.5,-2.5).curveTo(-1.4,-3.5,0,-3.5).curveTo(1.5,-3.5,2.5,-2.4).curveTo(3.5,-1.4,3.5,0).curveTo(3.5,1.5,2.5,2.5).curveTo(1.5,3.5,0,3.5).curveTo(-1.5,3.5,-2.5,2.5).closePath();
	this.shape_14.setTransform(-414.2,229.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,6.1).curveTo(-2.5,6,-4.3,4.2).curveTo(-6.1,2.5,-6.1,-0.1).curveTo(-6,-2.6,-4.3,-4.3).curveTo(-2.5,-6.1,0,-6).curveTo(2.5,-6,4.3,-4.3).curveTo(6.1,-2.5,6.1,0).curveTo(6.1,2.5,4.3,4.3).curveTo(2.5,6.1,0.1,6.1).lineTo(-0,6.1).closePath();
	this.shape_15.setTransform(-414.5,250.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,3.4).curveTo(-4.9,2,-4.8,-0).curveTo(-4.8,-2,-3.4,-3.4).curveTo(-2,-4.8,0,-4.8).curveTo(2,-4.8,3.5,-3.4).curveTo(4.9,-2,4.9,0).curveTo(4.8,2,3.4,3.4).curveTo(2,4.8,-0.1,4.8).curveTo(-2,4.8,-3.5,3.4).closePath();
	this.shape_16.setTransform(-432.5,236.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,13.8).curveTo(-5.8,13.8,-9.8,9.7).curveTo(-13.8,5.7,-13.8,-0).curveTo(-13.7,-5.8,-9.7,-9.7).curveTo(-5.7,-13.8,0,-13.8).curveTo(5.8,-13.7,9.7,-9.7).curveTo(13.8,-5.7,13.8,0.1).curveTo(13.8,5.7,9.7,9.7).curveTo(5.7,13.8,0.1,13.8).lineTo(-0.1,13.8).closePath();
	this.shape_17.setTransform(-402.3,271.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,19.9).curveTo(-8.3,19.8,-14.1,14).curveTo(-19.9,8.2,-19.9,-0).curveTo(-19.9,-8.3,-14,-14.1).curveTo(-8.2,-20,0.1,-19.9).curveTo(8.3,-19.8,14.1,-14).curveTo(20,-8.2,19.9,0.1).curveTo(19.9,8.3,14,14.2).curveTo(8.2,19.9,0.1,19.9).lineTo(-0.1,19.9).closePath();
	this.shape_18.setTransform(-446.1,262.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,25.3).curveTo(-10.6,25.3,-18,17.9).curveTo(-25.4,10.4,-25.3,-0.1).curveTo(-25.3,-10.6,-17.9,-18).curveTo(-10.4,-25.4,0.1,-25.3).curveTo(10.6,-25.3,18,-17.9).curveTo(25.4,-10.4,25.3,0.1).curveTo(25.3,10.6,17.9,18).curveTo(10.4,25.4,0,25.4).lineTo(-0.1,25.3).closePath();
	this.shape_19.setTransform(-422.7,242.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.8,3.7).lineTo(9.1,-6.6).lineTo(10.8,-3.7).lineTo(-9.1,6.6).closePath();
	this.shape_20.setTransform(-413,281.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.8,-5.6).lineTo(-8.8,-8.4).lineTo(10.7,5.6).lineTo(8.8,8.4).closePath();
	this.shape_21.setTransform(-432.1,276.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,36.5).lineTo(-1.7,-36.5).lineTo(1.7,-36.5).lineTo(1.7,36.5).closePath();
	this.shape_22.setTransform(-422.7,291.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,1.4).curveTo(-2,0.8,-2,-0).curveTo(-2,-0.8,-1.4,-1.4).curveTo(-0.8,-2,-0,-2).curveTo(0.8,-2,1.4,-1.4).curveTo(2,-0.8,2,-0).curveTo(2,0.8,1.4,1.4).curveTo(0.8,2,-0,2).curveTo(-0.8,2,-1.4,1.4).closePath();
	this.shape_23.setTransform(-711.5,288.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,2).curveTo(-2.8,1.2,-2.8,0).curveTo(-2.8,-1.1,-2,-2).curveTo(-1.1,-2.8,0,-2.8).curveTo(1.2,-2.8,2,-2).curveTo(2.8,-1.1,2.8,0).curveTo(2.8,1.2,2,2).curveTo(1.2,2.8,0,2.8).curveTo(-1.1,2.8,-2,2).closePath();
	this.shape_24.setTransform(-718.4,290.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,1.3).curveTo(-1.9,0.8,-1.8,-0).curveTo(-1.9,-0.7,-1.3,-1.3).curveTo(-0.8,-1.9,-0,-1.8).curveTo(0.8,-1.9,1.3,-1.3).curveTo(1.9,-0.7,1.9,-0).curveTo(1.9,0.8,1.3,1.3).curveTo(0.8,1.8,-0,1.9).curveTo(-0.8,1.8,-1.3,1.3).closePath();
	this.shape_25.setTransform(-716.5,284.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,1.8).curveTo(-2.6,1.1,-2.5,0).curveTo(-2.6,-1.1,-1.8,-1.8).curveTo(-1.1,-2.6,0,-2.6).curveTo(1,-2.6,1.8,-1.8).curveTo(2.5,-1.1,2.5,0).curveTo(2.5,1.1,1.8,1.8).curveTo(1,2.5,0,2.5).curveTo(-1.1,2.5,-1.8,1.8).closePath();
	this.shape_26.setTransform(-746.9,278.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,3.8).curveTo(-5.4,2.2,-5.4,0).curveTo(-5.4,-2.2,-3.8,-3.8).curveTo(-2.2,-5.4,-0,-5.4).curveTo(2.3,-5.4,3.8,-3.8).curveTo(5.4,-2.2,5.4,0).curveTo(5.4,2.2,3.8,3.8).curveTo(2.3,5.4,-0,5.4).curveTo(-2.2,5.4,-3.8,3.8).closePath();
	this.shape_27.setTransform(-750.9,291.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.8).curveTo(-3.9,1.6,-3.9,-0).curveTo(-3.9,-1.5,-2.7,-2.7).curveTo(-1.5,-3.9,0,-3.9).curveTo(1.6,-3.9,2.7,-2.7).curveTo(3.9,-1.6,3.9,-0).curveTo(3.9,1.6,2.7,2.8).curveTo(1.6,3.9,0,3.8).curveTo(-1.6,3.9,-2.7,2.8).closePath();
	this.shape_28.setTransform(-759.1,279.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.6,6.6).curveTo(-9.3,3.8,-9.3,-0).curveTo(-9.3,-3.9,-6.6,-6.6).curveTo(-3.8,-9.3,0,-9.3).curveTo(3.9,-9.3,6.6,-6.6).curveTo(9.3,-3.9,9.3,-0).curveTo(9.3,3.8,6.6,6.6).curveTo(3.9,9.3,0,9.3).curveTo(-3.8,9.3,-6.6,6.6).closePath();
	this.shape_29.setTransform(-716.2,287.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#494A4E").beginStroke().moveTo(-11.8,11.9).curveTo(-16.7,6.9,-16.7,0).curveTo(-16.7,-6.9,-11.8,-11.9).curveTo(-6.9,-16.7,-0,-16.7).curveTo(6.9,-16.7,11.8,-11.9).curveTo(16.7,-6.9,16.7,0).curveTo(16.7,6.9,11.8,11.9).curveTo(6.9,16.7,-0,16.7).curveTo(-6.9,16.7,-11.8,11.9).closePath();
	this.shape_30.setTransform(-751.6,284.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,4.4).curveTo(-6.2,2.5,-6.1,0).curveTo(-6.2,-2.5,-4.3,-4.4).curveTo(-2.6,-6.1,0,-6.2).curveTo(2.6,-6.1,4.3,-4.4).curveTo(6.2,-2.5,6.1,0).curveTo(6.2,2.5,4.3,4.4).curveTo(2.6,6.1,0,6.2).curveTo(-2.6,6.1,-4.3,4.4).closePath();
	this.shape_31.setTransform(-711.3,270.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,2.3).curveTo(-3.2,1.3,-3.2,0).curveTo(-3.2,-1.3,-2.3,-2.2).curveTo(-1.3,-3.2,-0,-3.2).curveTo(1.3,-3.2,2.2,-2.2).curveTo(3.2,-1.3,3.2,0).curveTo(3.2,1.3,2.2,2.3).curveTo(1.3,3.2,-0,3.2).curveTo(-1.3,3.2,-2.3,2.3).closePath();
	this.shape_32.setTransform(-739.7,241.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,2.3).curveTo(-3.2,1.3,-3.2,-0).curveTo(-3.2,-1.3,-2.3,-2.3).curveTo(-1.3,-3.2,-0,-3.2).curveTo(1.3,-3.2,2.2,-2.3).curveTo(3.2,-1.3,3.2,-0).curveTo(3.2,1.3,2.2,2.3).curveTo(1.3,3.2,-0,3.2).curveTo(-1.3,3.2,-2.3,2.3).closePath();
	this.shape_33.setTransform(-712.9,255.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.3,2.2).curveTo(-3.2,1.3,-3.2,-0).curveTo(-3.2,-1.3,-2.3,-2.3).curveTo(-1.3,-3.2,-0,-3.2).curveTo(1.3,-3.2,2.3,-2.3).curveTo(3.2,-1.3,3.2,-0).curveTo(3.2,1.3,2.3,2.2).curveTo(1.3,3.2,-0,3.2).curveTo(-1.3,3.2,-2.3,2.2).closePath();
	this.shape_34.setTransform(-729.2,268.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,2.6).curveTo(-3.8,1.6,-3.7,0).curveTo(-3.8,-1.5,-2.6,-2.7).curveTo(-1.5,-3.7,-0,-3.8).curveTo(1.6,-3.7,2.7,-2.7).curveTo(3.8,-1.5,3.7,0).curveTo(3.8,1.6,2.7,2.6).curveTo(1.6,3.8,-0,3.8).curveTo(-1.5,3.8,-2.6,2.6).closePath();
	this.shape_35.setTransform(-750.9,259.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,3.4).curveTo(-4.8,2,-4.8,-0).curveTo(-4.8,-2,-3.4,-3.4).curveTo(-2,-4.8,0,-4.8).curveTo(2,-4.8,3.4,-3.4).curveTo(4.8,-2,4.8,-0).curveTo(4.8,2,3.4,3.4).curveTo(2,4.8,0,4.8).curveTo(-2,4.8,-3.4,3.4).closePath();
	this.shape_36.setTransform(-732.2,255.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.2,3.2).curveTo(-4.5,1.9,-4.5,0).curveTo(-4.5,-1.8,-3.2,-3.1).curveTo(-1.9,-4.5,-0,-4.5).curveTo(1.8,-4.5,3.2,-3.1).curveTo(4.5,-1.8,4.5,0).curveTo(4.5,1.9,3.2,3.2).curveTo(1.8,4.5,-0,4.5).curveTo(-1.9,4.5,-3.2,3.2).closePath();
	this.shape_37.setTransform(-724.6,241.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#494A4E").beginStroke().moveTo(-12,12).curveTo(-17,7,-17,-0).curveTo(-17,-7,-12,-12).curveTo(-7,-17,-0,-17).curveTo(7,-17,12,-12).curveTo(17,-7,17,-0).curveTo(17,7,12,12).curveTo(7,17,-0,17).curveTo(-7,17,-12,12).closePath();
	this.shape_38.setTransform(-715.8,265.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(-12,12).curveTo(-17,7,-17,-0).curveTo(-17,-7,-12,-12).curveTo(-7,-17,-0,-17).curveTo(7,-17,12,-12).curveTo(17,-7,17,-0).curveTo(17,7,12,12).curveTo(7,17,-0,17).curveTo(-7,17,-12,12).closePath();
	this.shape_39.setTransform(-742.6,265.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#494A4E").beginStroke().moveTo(-12,12).curveTo(-17,7.1,-17,-0).curveTo(-17,-7,-12,-12).curveTo(-7,-17,-0,-17).curveTo(7,-17,12,-12).curveTo(17,-7,17,-0).curveTo(17,7.1,12,12).curveTo(7,17,-0,17).curveTo(-7,17,-12,12).closePath();
	this.shape_40.setTransform(-729.2,246);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.9,3.9).lineTo(3.9,-5.9).lineTo(5.9,-3.9).lineTo(-3.9,5.8).closePath();
	this.shape_41.setTransform(-724.4,295.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,-6.7).lineTo(-6.7,-8.6).lineTo(8.6,6.7).lineTo(6.6,8.6).closePath();
	this.shape_42.setTransform(-736.5,297.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,33.7).lineTo(-1.4,-33.8).lineTo(1.4,-33.8).lineTo(1.4,33.7).closePath();
	this.shape_43.setTransform(-729.2,295.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-4.7,3.8).curveTo(-5.3,3.8,-5.8,3.1).curveTo(-6.3,2.4,-6.3,1.4).lineTo(-6.3,-1.3).curveTo(-6.3,-2.3,-5.8,-3.1).curveTo(-5.3,-3.8,-4.7,-3.8).lineTo(4.7,-3.8).curveTo(5.4,-3.8,5.8,-3.1).curveTo(6.3,-2.3,6.3,-1.3).lineTo(6.3,1.4).curveTo(6.3,2.4,5.8,3.1).curveTo(5.4,3.8,4.7,3.8).closePath();
	this.shape_44.setTransform(-853.1,322.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-4.7,3.8).curveTo(-5.3,3.8,-5.8,3.1).curveTo(-6.3,2.4,-6.3,1.4).lineTo(-6.3,-1.3).curveTo(-6.3,-2.3,-5.8,-3.1).curveTo(-5.3,-3.8,-4.7,-3.8).lineTo(4.7,-3.8).curveTo(5.3,-3.8,5.8,-3.1).curveTo(6.3,-2.3,6.3,-1.3).lineTo(6.3,1.4).curveTo(6.3,2.4,5.8,3.1).curveTo(5.3,3.8,4.7,3.8).closePath();
	this.shape_45.setTransform(-944.9,322.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.3,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_46.setTransform(-853.1,119.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.3,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_47.setTransform(-853.1,112.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2,11).lineTo(-2,-11).curveTo(-2,-13.9,0,-13.9).curveTo(2,-13.9,2,-11).lineTo(2,11).curveTo(2,13.9,0,13.9).curveTo(-2,13.9,-2,11).closePath();
	this.shape_48.setTransform(-853.1,113.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_49.setTransform(-944.9,119.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_50.setTransform(-944.9,112.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2,11).lineTo(-2,-11).curveTo(-2,-13.9,0,-13.9).curveTo(2,-13.9,2,-11).lineTo(2,11).curveTo(2,13.9,0,13.9).curveTo(-2,13.9,-2,11).closePath();
	this.shape_51.setTransform(-944.9,113.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#CCCCCC").beginStroke().moveTo(49.1,14.5).lineTo(-49.5,14.5).curveTo(-50.6,14.5,-50.8,12.9).curveTo(-51.1,11.2,-50.2,10.3).lineTo(-39,-1.2).curveTo(-32.3,-8.1,-27.7,-12.5).curveTo(-25.4,-14.8,-20.8,-14.7).curveTo(-18.2,-14.6,-13.4,-14.1).lineTo(17,-14.1).curveTo(18.3,-14.1,21.1,-14.4).curveTo(23.6,-14.5,25.2,-14.1).curveTo(26.4,-13.8,27.7,-12.6).lineTo(30,-10.2).lineTo(50.2,10.3).curveTo(50.6,10.7,50.8,11.2).lineTo(50.9,12.3).lineTo(50.9,12.6).curveTo(50.8,13.9,50.2,14.3).curveTo(49.9,14.7,49.5,14.7).lineTo(49.1,14.5).closePath().moveTo(44.6,10).lineTo(26.8,-8).lineTo(25.4,-9.2).curveTo(25,-9.6,25.2,-9.7).lineTo(24.6,-9.7).lineTo(23.6,-9.6).lineTo(-16.3,-9.6).lineTo(-20.6,-9.7).curveTo(-23.3,-9.7,-25,-9.6).lineTo(-25.2,-9.6).lineTo(-25.5,-9.4).lineTo(-44.6,10).lineTo(44.6,10).closePath();
	this.shape_52.setTransform(-899,90.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-34.7,34.2).curveTo(-35.4,32.2,-34.2,31).lineTo(32.7,-34.9).curveTo(33.9,-36.1,34.7,-34.2).curveTo(35.4,-32.2,34.2,-31).lineTo(-32.7,34.9).curveTo(-33.2,35.4,-33.6,35.4).curveTo(-34.2,35.4,-34.7,34.2).closePath();
	this.shape_53.setTransform(-904.8,255.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#CCCCCC").beginStroke().moveTo(33.1,34.9).lineTo(-34.5,-31).curveTo(-35.8,-32.2,-35,-34.2).curveTo(-34.3,-36.1,-33.1,-34.9).lineTo(34.6,31).curveTo(35.8,32.2,35,34.2).curveTo(34.6,35.4,33.9,35.4).curveTo(33.5,35.4,33.1,34.9).closePath();
	this.shape_54.setTransform(-893.5,255.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-10.3,25).curveTo(-11.6,23.8,-10.9,21.9).lineTo(8.3,-24.2).curveTo(9,-26.1,10.3,-25).curveTo(11.6,-23.8,10.8,-22).lineTo(-8.3,24.3).curveTo(-8.8,25.4,-9.4,25.4).curveTo(-9.8,25.4,-10.3,25).closePath();
	this.shape_55.setTransform(-902,125.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#CCCCCC").beginStroke().moveTo(8.1,24.3).lineTo(-10.6,-22).curveTo(-11.4,-23.8,-10.1,-25).curveTo(-8.8,-26.1,-8.1,-24.2).lineTo(10.6,21.9).curveTo(11.4,23.8,10.1,25).curveTo(9.6,25.4,9.2,25.4).curveTo(8.5,25.4,8.1,24.3).closePath();
	this.shape_56.setTransform(-896.1,125.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-21.2,38.3).curveTo(-22.2,36.7,-21.3,35.1).lineTo(19.2,-38.3).curveTo(20.2,-39.9,21.2,-38.3).curveTo(22.2,-36.7,21.3,-35.1).lineTo(-19.3,38.3).curveTo(-19.7,39.1,-20.2,39.1).curveTo(-20.7,39.1,-21.2,38.3).closePath();
	this.shape_57.setTransform(-907,185.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#CCCCCC").beginStroke().moveTo(19.1,38.3).lineTo(-21.2,-35.1).curveTo(-22.1,-36.7,-21,-38.3).curveTo(-20,-40,-19.1,-38.3).lineTo(21.2,35.1).curveTo(22.1,36.7,21.1,38.3).curveTo(20.5,39.1,20.1,39.1).curveTo(19.6,39.1,19.1,38.3).closePath();
	this.shape_58.setTransform(-891.4,185.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-36,2.4).lineTo(-36,-2.4).lineTo(36,-2.4).lineTo(36,2.4).closePath();
	this.shape_59.setTransform(-899,222.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-23.6,2.4).lineTo(-23.6,-2.4).lineTo(23.6,-2.4).lineTo(23.6,2.4).closePath();
	this.shape_60.setTransform(-899,146.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-24.3,-122).lineTo(-20.8,-123.5).lineTo(24.3,122).lineTo(20.7,123.5).closePath();
	this.shape_61.setTransform(-875.2,201.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-24.3,122).lineTo(20.8,-123.5).lineTo(24.3,-122).lineTo(-20.8,123.5).closePath();
	this.shape_62.setTransform(-922.7,201.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-4.7,3.7).curveTo(-5.4,3.7,-5.8,3.1).curveTo(-6.3,2.3,-6.3,1.4).lineTo(-6.3,-1.3).curveTo(-6.3,-2.4,-5.8,-3).curveTo(-5.4,-3.8,-4.7,-3.8).lineTo(4.7,-3.8).curveTo(5.4,-3.8,5.8,-3).curveTo(6.3,-2.4,6.3,-1.3).lineTo(6.3,1.4).curveTo(6.3,2.3,5.8,3.1).curveTo(5.4,3.7,4.7,3.7).closePath();
	this.shape_63.setTransform(-237.1,321.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-4.7,3.7).curveTo(-5.3,3.7,-5.8,3.1).curveTo(-6.3,2.3,-6.3,1.4).lineTo(-6.3,-1.3).curveTo(-6.3,-2.4,-5.8,-3).curveTo(-5.3,-3.8,-4.7,-3.8).lineTo(4.7,-3.8).curveTo(5.3,-3.8,5.8,-3).curveTo(6.3,-2.4,6.3,-1.3).lineTo(6.3,1.4).curveTo(6.3,2.3,5.8,3.1).curveTo(5.3,3.7,4.7,3.7).closePath();
	this.shape_64.setTransform(-328.9,321.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_65.setTransform(-237.1,119);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_66.setTransform(-237.1,111.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2,11).lineTo(-2,-11).curveTo(-2,-13.9,0,-13.9).curveTo(2,-13.9,2,-11).lineTo(2,11).curveTo(2,13.9,0,13.9).curveTo(-2,13.9,-2,11).closePath();
	this.shape_67.setTransform(-237.1,113);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.3,1.5,-6.3,0).curveTo(-6.3,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_68.setTransform(-328.9,119);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.3,1.5,-6.3,0).curveTo(-6.3,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_69.setTransform(-328.9,111.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2,11).lineTo(-2,-11).curveTo(-2,-13.9,0,-13.9).curveTo(2,-13.9,2,-11).lineTo(2,11).curveTo(2,13.9,0,13.9).curveTo(-2,13.9,-2,11).closePath();
	this.shape_70.setTransform(-328.9,113);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#CCCCCC").beginStroke().moveTo(49.1,14.6).lineTo(-49.4,14.6).curveTo(-50.6,14.6,-50.8,12.9).curveTo(-51.1,11.3,-50.2,10.4).lineTo(-39,-1.1).lineTo(-27.7,-12.5).curveTo(-25.4,-14.8,-20.7,-14.7).curveTo(-18.2,-14.6,-13.4,-14.1).lineTo(17,-14.1).lineTo(21.1,-14.3).curveTo(23.6,-14.5,25.2,-14.1).curveTo(26.4,-13.8,27.7,-12.6).lineTo(30,-10.2).lineTo(50.2,10.4).curveTo(50.8,11,50.9,11.8).lineTo(50.9,12.1).lineTo(50.9,12.1).lineTo(50.9,12.3).curveTo(50.9,14,50.1,14.4).curveTo(49.8,14.7,49.5,14.7).lineTo(49.1,14.6).closePath().moveTo(44.6,10).lineTo(26.8,-8).lineTo(25.5,-9.2).curveTo(24.8,-9.8,25.6,-9.6).curveTo(25.2,-9.7,24.6,-9.7).lineTo(23.6,-9.6).lineTo(-20.6,-9.7).curveTo(-23.2,-9.7,-25,-9.6).lineTo(-25.2,-9.6).lineTo(-25.5,-9.3).lineTo(-44.6,10).lineTo(44.6,10).closePath();
	this.shape_71.setTransform(-283,89.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-34.6,34.1).curveTo(-35.4,32.2,-34.2,31.1).lineTo(32.7,-35).curveTo(33.9,-36.1,34.7,-34.2).curveTo(35.4,-32.2,34.2,-31).lineTo(-32.8,34.9).curveTo(-33.2,35.4,-33.6,35.4).curveTo(-34.2,35.4,-34.6,34.1).closePath();
	this.shape_72.setTransform(-288.8,254.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#CCCCCC").beginStroke().moveTo(33.1,34.9).lineTo(-34.6,-31).curveTo(-35.8,-32.2,-35,-34.2).curveTo(-34.3,-36.1,-33.1,-35).lineTo(34.6,31.1).curveTo(35.8,32.2,35,34.1).curveTo(34.6,35.4,33.9,35.4).curveTo(33.5,35.4,33.1,34.9).closePath();
	this.shape_73.setTransform(-277.5,254.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-10.3,24.9).curveTo(-11.6,23.8,-10.9,22).lineTo(8.3,-24.2).curveTo(9,-26.1,10.3,-24.9).curveTo(11.6,-23.8,10.8,-22).lineTo(-8.3,24.2).curveTo(-8.8,25.4,-9.4,25.4).curveTo(-9.8,25.4,-10.3,24.9).closePath();
	this.shape_74.setTransform(-286,125.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#CCCCCC").beginStroke().moveTo(8,24.2).lineTo(-10.7,-22).curveTo(-11.4,-23.8,-10.1,-25).curveTo(-8.8,-26.1,-8.1,-24.2).lineTo(10.7,22).curveTo(11.4,23.8,10.1,25).curveTo(9.6,25.4,9.2,25.4).curveTo(8.5,25.4,8,24.2).closePath();
	this.shape_75.setTransform(-280.1,125.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-21.2,38.3).curveTo(-22.2,36.8,-21.3,35).lineTo(19.2,-38.2).curveTo(20.2,-39.9,21.2,-38.3).curveTo(22.2,-36.7,21.3,-35.1).lineTo(-19.2,38.3).curveTo(-19.7,39.1,-20.2,39.1).curveTo(-20.7,39.1,-21.2,38.3).closePath();
	this.shape_76.setTransform(-291,184.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#CCCCCC").beginStroke().moveTo(19.1,38.3).lineTo(-21.2,-35.1).curveTo(-22.1,-36.7,-21.1,-38.3).curveTo(-20,-39.9,-19.1,-38.2).lineTo(21.2,35).curveTo(22.1,36.8,21.1,38.3).curveTo(20.6,39.1,20.1,39.1).curveTo(19.6,39.1,19.1,38.3).closePath();
	this.shape_77.setTransform(-275.5,184.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-36,2.4).lineTo(-36,-2.4).lineTo(36,-2.4).lineTo(36,2.4).closePath();
	this.shape_78.setTransform(-283,221.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-23.6,2.4).lineTo(-23.6,-2.4).lineTo(23.6,-2.4).lineTo(23.6,2.4).closePath();
	this.shape_79.setTransform(-283,145.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-24.3,-122).lineTo(-20.8,-123.5).lineTo(24.3,122.1).lineTo(20.8,123.5).closePath();
	this.shape_80.setTransform(-259.3,201.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-24.3,122.1).lineTo(20.8,-123.5).lineTo(24.3,-122).lineTo(-20.8,123.5).closePath();
	this.shape_81.setTransform(-306.7,201.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-4.7,3.8).curveTo(-5.4,3.8,-5.8,3).curveTo(-6.3,2.4,-6.3,1.3).lineTo(-6.3,-1.4).curveTo(-6.3,-2.4,-5.8,-3.1).curveTo(-5.4,-3.7,-4.7,-3.7).lineTo(4.7,-3.7).curveTo(5.4,-3.7,5.8,-3.1).curveTo(6.3,-2.4,6.3,-1.4).lineTo(6.3,1.3).curveTo(6.3,2.4,5.8,3).curveTo(5.3,3.8,4.7,3.8).closePath();
	this.shape_82.setTransform(-546.4,322);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-4.7,3.8).curveTo(-5.3,3.8,-5.8,3).curveTo(-6.3,2.3,-6.3,1.3).lineTo(-6.3,-1.4).curveTo(-6.3,-2.4,-5.8,-3.1).curveTo(-5.3,-3.7,-4.7,-3.7).lineTo(4.7,-3.7).curveTo(5.3,-3.7,5.8,-3.1).curveTo(6.3,-2.4,6.3,-1.4).lineTo(6.3,1.3).curveTo(6.3,2.3,5.8,3).curveTo(5.3,3.8,4.7,3.8).closePath();
	this.shape_83.setTransform(-638.1,322);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,-0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,-0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_84.setTransform(-546.4,119);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.4,1.5,-6.4,-0).curveTo(-6.4,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,-0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_85.setTransform(-546.4,111.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2,10.9).lineTo(-2,-11).curveTo(-2,-13.9,0,-13.9).curveTo(2,-13.9,2,-11).lineTo(2,10.9).curveTo(2,13.9,0,13.9).curveTo(-2,13.9,-2,10.9).closePath();
	this.shape_86.setTransform(-546.4,113);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.3,1.5,-6.3,-0).curveTo(-6.3,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,-0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_87.setTransform(-638.1,119);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-5.4,1.5).curveTo(-6.3,1.5,-6.3,-0).curveTo(-6.3,-1.5,-5.4,-1.5).lineTo(5.4,-1.5).curveTo(6.4,-1.5,6.4,-0).curveTo(6.4,1.5,5.4,1.5).closePath();
	this.shape_88.setTransform(-638.1,111.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2,10.9).lineTo(-2,-11).curveTo(-2,-13.9,0,-13.9).curveTo(2,-13.9,2,-11).lineTo(2,10.9).curveTo(2,13.9,0,13.9).curveTo(-2,13.9,-2,10.9).closePath();
	this.shape_89.setTransform(-638.2,113);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#CCCCCC").beginStroke().moveTo(49,14.5).lineTo(-49.4,14.5).curveTo(-50.6,14.5,-50.8,12.9).curveTo(-51.1,11.2,-50.2,10.3).lineTo(-39,-1.2).curveTo(-32.4,-8,-27.7,-12.5).curveTo(-25.4,-14.8,-20.7,-14.7).curveTo(-18.2,-14.6,-13.4,-14.1).lineTo(17,-14.1).curveTo(18.3,-14.1,21.1,-14.4).curveTo(23.6,-14.5,25.2,-14.1).curveTo(26.4,-13.8,27.7,-12.6).lineTo(30,-10.2).lineTo(49.9,10.1).curveTo(50.9,10.4,50.9,12.3).curveTo(50.9,13.9,50.1,14.3).curveTo(49.8,14.7,49.5,14.7).curveTo(49.3,14.7,49,14.5).closePath().moveTo(44.6,10).lineTo(26.8,-8).lineTo(25.5,-9.2).curveTo(25,-9.6,25.2,-9.7).lineTo(24.6,-9.7).lineTo(23.6,-9.6).lineTo(-20.6,-9.7).curveTo(-23.2,-9.7,-25,-9.6).lineTo(-25.3,-9.6).lineTo(-25.5,-9.4).lineTo(-44.6,10).lineTo(44.6,10).closePath();
	this.shape_90.setTransform(-592.3,89.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-34.6,34.2).curveTo(-35.4,32.2,-34.2,31).lineTo(32.7,-34.9).curveTo(33.9,-36.1,34.7,-34.2).curveTo(35.4,-32.2,34.2,-31).lineTo(-32.7,34.9).curveTo(-33.2,35.4,-33.6,35.4).curveTo(-34.2,35.4,-34.6,34.2).closePath();
	this.shape_91.setTransform(-598,254.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#CCCCCC").beginStroke().moveTo(33.1,34.9).lineTo(-34.6,-31).curveTo(-35.8,-32.2,-35,-34.1).curveTo(-34.3,-36.1,-33.1,-34.9).lineTo(34.6,31).curveTo(35.8,32.2,35,34.2).curveTo(34.6,35.4,33.9,35.4).curveTo(33.5,35.4,33.1,34.9).closePath();
	this.shape_92.setTransform(-586.7,254.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-10.3,24.9).curveTo(-11.6,23.8,-10.8,22).lineTo(8.3,-24.2).curveTo(9.1,-26.1,10.4,-24.9).curveTo(11.6,-23.8,10.9,-22).lineTo(-8.3,24.2).curveTo(-8.8,25.4,-9.4,25.4).curveTo(-9.8,25.4,-10.3,24.9).closePath();
	this.shape_93.setTransform(-595.3,125.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#CCCCCC").beginStroke().moveTo(8.1,24.2).lineTo(-10.7,-22).curveTo(-11.4,-23.8,-10.1,-24.9).curveTo(-8.8,-26.1,-8.1,-24.2).lineTo(10.7,22).curveTo(11.4,23.8,10.1,24.9).curveTo(9.6,25.4,9.2,25.4).curveTo(8.5,25.4,8.1,24.2).closePath();
	this.shape_94.setTransform(-589.3,125.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-21.2,38.3).curveTo(-22.2,36.7,-21.3,35.1).lineTo(19.2,-38.3).curveTo(20.2,-39.9,21.2,-38.3).curveTo(22.2,-36.7,21.3,-35.1).lineTo(-19.2,38.3).curveTo(-19.7,39.1,-20.2,39.1).curveTo(-20.7,39.1,-21.2,38.3).closePath();
	this.shape_95.setTransform(-600.3,184.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#CCCCCC").beginStroke().moveTo(19.1,38.3).lineTo(-21.2,-35.1).curveTo(-22.1,-36.7,-21.1,-38.3).curveTo(-20,-39.9,-19.1,-38.3).lineTo(21.2,35.1).curveTo(22.1,36.7,21.1,38.3).curveTo(20.6,39.1,20.1,39.1).curveTo(19.6,39.1,19.1,38.3).closePath();
	this.shape_96.setTransform(-584.7,184.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-36,2.4).lineTo(-36,-2.4).lineTo(36,-2.4).lineTo(36,2.4).closePath();
	this.shape_97.setTransform(-592.2,221.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-23.6,2.4).lineTo(-23.6,-2.4).lineTo(23.6,-2.4).lineTo(23.6,2.4).closePath();
	this.shape_98.setTransform(-592.3,145.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-24.3,-122).lineTo(-20.8,-123.5).lineTo(24.3,122).lineTo(20.8,123.5).closePath();
	this.shape_99.setTransform(-568.5,201.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-24.3,122).lineTo(20.8,-123.5).lineTo(24.3,-122).lineTo(-20.8,123.5).closePath();
	this.shape_100.setTransform(-616,201.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1050.5,0,1050.6,329.1);


(lib.teleconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.telehandss();
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


(lib.telecabletelex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.telecable();
	this.instance.parent = this;
	this.instance.setTransform(-109.9,1,1.197,1,0,0,0,-91.9,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,0,220,2);


(lib.telebrazitos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.telecable();
	this.instance.parent = this;
	this.instance.setTransform(0.1,13.7,0.435,1,0,0,0,-91.7,1);

	this.instance_1 = new lib.telecable();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,6.2,0.435,1,0,0,0,-91.7,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#202724").beginStroke().moveTo(-17.1,18.1).lineTo(3.9,-18.1).lineTo(17.1,-9.3).lineTo(1,18.1).closePath();
	this.shape.setTransform(-23,14.8,0.53,0.53,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4F4C4D").beginStroke().moveTo(-5.1,5.1).curveTo(-7.2,3,-7.2,0).curveTo(-7.2,-3,-5.1,-5.1).curveTo(-3,-7.2,-0,-7.2).curveTo(3,-7.2,5.1,-5.1).curveTo(7.2,-3,7.2,0).curveTo(7.2,3,5.1,5.1).curveTo(3,7.2,-0,7.2).curveTo(-3,7.2,-5.1,5.1).closePath();
	this.shape_1.setTransform(-28.9,7.1,0.53,0.53,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#202724").beginStroke().moveTo(-17.1,18.1).lineTo(3.9,-18.1).lineTo(17.1,-9.3).lineTo(1,18.1).closePath();
	this.shape_2.setTransform(22,14.8,0.53,0.53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#4F4C4D").beginStroke().moveTo(-5.1,5.1).curveTo(-7.2,3,-7.2,0).curveTo(-7.2,-3,-5.1,-5.1).curveTo(-3,-7.2,-0,-7.2).curveTo(3,-7.2,5.1,-5.1).curveTo(7.2,-3,7.2,0).curveTo(7.2,3,5.1,5.1).curveTo(3,7.2,-0,7.2).curveTo(-3,7.2,-5.1,5.1).closePath();
	this.shape_3.setTransform(27.9,7.1,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,3.3,80,21.2);


(lib.telegrua1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#757575").beginStroke().moveTo(-0.7,0).curveTo(-0.7,-0.7,-0,-0.7).curveTo(0.7,-0.7,0.7,0).curveTo(0.7,0.7,-0,0.7).curveTo(-0.7,0.7,-0.7,0).closePath();
	this.shape.setTransform(-66.4,130.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.9,6.9).lineTo(-3.1,1.5).lineTo(-2.6,1.1).curveTo(-2.3,0.9,-2.5,-0.4).curveTo(-2.5,-3.2,-2.2,-4.6).curveTo(-1.6,-7.1,0.2,-7.1).curveTo(2.2,-7.1,2.7,-4.6).curveTo(3.2,-2.8,3.1,2.4).curveTo(3,6.4,1.2,7).lineTo(0.9,7.1).lineTo(-2.9,6.9).closePath();
	this.shape_1.setTransform(-60.5,127.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-27.9,2.7).lineTo(-27.9,-2.8).lineTo(27.9,-2.8).lineTo(27.9,2.7).closePath();
	this.shape_2.setTransform(-55.5,94.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-25.8,2).lineTo(-25.8,-2).lineTo(24,-2).lineTo(25.7,2).closePath();
	this.shape_3.setTransform(-54.5,97.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#757575").beginStroke().moveTo(-8.8,7.8).lineTo(-8.8,-7.8).lineTo(8.8,-7.8).lineTo(8.8,7.8).closePath().moveTo(-5.2,-4.9).curveTo(-5.7,-4.4,-5.7,-3.6).lineTo(-5.7,1.6).curveTo(-5.7,2.4,-5.2,3).curveTo(-4.6,3.5,-3.8,3.5).lineTo(-2.6,3.5).curveTo(-1.8,3.5,-1.2,3).curveTo(-0.7,2.4,-0.7,1.6).lineTo(-0.7,-3.6).curveTo(-0.7,-4.4,-1.2,-4.9).curveTo(-1.8,-5.5,-2.6,-5.5).lineTo(-3.8,-5.5).curveTo(-4.6,-5.5,-5.2,-4.9).closePath();
	this.shape_4.setTransform(-63.3,131.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-27.5,1.1).lineTo(-27.5,-1).lineTo(27.5,-1).lineTo(27.5,1.1).closePath();
	this.shape_5.setTransform(-167.3,81.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#757575").beginStroke().moveTo(-13.8,1.9).lineTo(-13.8,-1.8).lineTo(13.8,-1.8).lineTo(13.8,1.9).closePath();
	this.shape_6.setTransform(-229.9,39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-2.4,-29.5).lineTo(2.1,-29.5).lineTo(2.4,26.6).lineTo(-2.4,29.5).closePath();
	this.shape_7.setTransform(-241.3,69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-12.2,1).lineTo(-12.2,-1.1).lineTo(12.2,-1.1).lineTo(12.2,1).closePath();
	this.shape_8.setTransform(-223.8,142.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CECECE").beginStroke().moveTo(-5.4,25.8).lineTo(-5.4,-25.8).lineTo(5.4,-25.8).lineTo(5.4,25.8).closePath();
	this.shape_9.setTransform(-223,116.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#757575").beginStroke().moveTo(-3.2,2.4).curveTo(-4.1,2.4,-4.7,1.7).curveTo(-5.4,1.1,-5.4,0.2).lineTo(-5.4,-0.1).curveTo(-5.4,-1.1,-4.7,-1.7).curveTo(-4.1,-2.4,-3.2,-2.4).lineTo(3.1,-2.4).curveTo(4.1,-2.4,4.7,-1.7).curveTo(5.4,-1.1,5.4,-0.1).lineTo(5.4,0.2).curveTo(5.4,1.1,4.7,1.7).curveTo(4.1,2.4,3.1,2.4).closePath();
	this.shape_10.setTransform(-232.5,13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-4.4,18.6).lineTo(-4.4,-18.6).lineTo(4.5,-18.6).lineTo(4.5,18.6).closePath();
	this.shape_11.setTransform(-232.6,18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#757575").beginStroke().moveTo(-1.3,1.2).curveTo(-1.8,1.2,-2.1,0.8).curveTo(-2.5,0.5,-2.5,-0).curveTo(-2.5,-0.5,-2.1,-0.8).curveTo(-1.8,-1.2,-1.3,-1.2).lineTo(1.3,-1.2).curveTo(1.8,-1.2,2.1,-0.8).curveTo(2.5,-0.5,2.5,-0).curveTo(2.5,0.5,2.1,0.8).curveTo(1.8,1.2,1.3,1.2).closePath();
	this.shape_12.setTransform(-40.5,112.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#757575").beginStroke().moveTo(-10.5,1.3).curveTo(-11,1.3,-11.4,0.9).curveTo(-11.7,0.6,-11.7,-0).curveTo(-11.7,-0.5,-11.4,-0.9).curveTo(-11,-1.3,-10.5,-1.3).lineTo(10.4,-1.3).curveTo(11,-1.3,11.3,-0.9).curveTo(11.8,-0.5,11.8,-0).curveTo(11.8,0.6,11.3,0.9).curveTo(11,1.3,10.4,1.3).closePath();
	this.shape_13.setTransform(-40.6,115);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#757575").beginStroke().moveTo(5.9,1.7).curveTo(5,1,3.8,1).curveTo(3.1,1,2.3,1.3).lineTo(1.7,1.7).lineTo(-15.1,1.7).curveTo(-16.2,0.5,-16.2,-0).curveTo(-16.2,-0.7,-15.1,-1.7).lineTo(15.1,-1.7).curveTo(16.2,-0.7,16.2,-0).curveTo(16.2,0.5,15.1,1.7).closePath();
	this.shape_14.setTransform(-40.6,118);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.5,8.9).lineTo(-2.5,-9).lineTo(2.5,-9).lineTo(2.5,8.9).closePath();
	this.shape_15.setTransform(-32,128.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-6.4,8.9).lineTo(-6.4,-9).lineTo(6.5,-9).lineTo(6.5,8.9).closePath();
	this.shape_16.setTransform(-45.4,128.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#757575").beginStroke().moveTo(-13.3,12.8).lineTo(-13.3,-7.4).lineTo(-4.4,-12.8).lineTo(3.3,-12.8).lineTo(13.3,-7.6).lineTo(13.3,12.8).closePath();
	this.shape_17.setTransform(-41.2,126.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#757575").beginStroke().moveTo(-0.4,11.2).lineTo(-2.8,8).lineTo(-2.9,-11.2).lineTo(2.9,-11.2).lineTo(2.9,11.2).closePath();
	this.shape_18.setTransform(-25.4,131.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#CECECE").beginStroke().moveTo(-4.2,25.8).lineTo(-4.2,-25.8).lineTo(4.2,-25.8).lineTo(4.2,25.8).closePath();
	this.shape_19.setTransform(-7.6,116.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#757575").beginStroke().moveTo(-3.9,-9.7).lineTo(3.4,-9.4).lineTo(3.9,9.7).closePath();
	this.shape_20.setTransform(-76.6,116.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#EDEBEB").beginStroke().moveTo(-62.4,2.9).lineTo(-62.4,-2.9).lineTo(62.4,-2.9).lineTo(62.4,2.9).closePath();
	this.shape_21.setTransform(-136,102.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#999999").beginStroke().moveTo(-25.7,9.1).lineTo(-25.7,-9.1).lineTo(25.7,-9.1).lineTo(25.7,9.1).closePath();
	this.shape_22.setTransform(-167.5,90.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-15.4,12.6).lineTo(-15.2,-6.3).curveTo(-15.2,-8.8,-13.1,-11.1).curveTo(-10.9,-13.4,-8,-13.4).lineTo(15.4,-13.4).lineTo(15.4,-10.5).lineTo(-6,-10.3).curveTo(-9.8,-10.3,-11.2,-7.9).curveTo(-12.5,-5.7,-12.5,0).lineTo(-12.3,13.4).closePath();
	this.shape_23.setTransform(-210.9,82.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#CECECE").beginStroke().moveTo(-7.4,12.5).lineTo(-7.4,-12.5).lineTo(7.4,-12.5).lineTo(7.4,12.5).closePath();
	this.shape_24.setTransform(-234.2,81.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#CECECE").beginStroke().moveTo(-8.6,14.6).lineTo(-8.6,-14.6).lineTo(8.6,-14.6).lineTo(8.6,14.6).closePath();
	this.shape_25.setTransform(-233.1,54.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.6,-0.6).lineTo(11.6,0.6).closePath();
	this.shape_26.setTransform(-314.7,11.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-56.1,0.5).lineTo(-55.9,-4).lineTo(11.5,-0.3).lineTo(12.3,1.2).lineTo(56.1,0.8).lineTo(56.1,2.6).lineTo(-3.2,4).closePath();
	this.shape_27.setTransform(-311.3,11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,40.9).lineTo(-5.8,40.2).lineTo(-3.7,22.3).curveTo(2.9,-16.4,4.7,-28.3).curveTo(6,-36.2,3.1,-37.8).curveTo(1.9,-38.5,-6.6,-38.5).curveTo(-8.7,-38.5,-8.4,-39.6).lineTo(-7.7,-40.6).curveTo(-5.8,-40.5,-1.8,-41.1).curveTo(2.3,-41.2,6.8,-39.3).curveTo(9.2,-38.3,8.1,-29.5).curveTo(7.9,-27.7,6,-17.5).lineTo(-1.6,22.8).lineTo(-1.4,24.8).lineTo(-1.6,27.8).curveTo(-1.8,30.1,-2.4,32).lineTo(-3.2,34.1).curveTo(-3.3,34.7,-2.1,37.1).curveTo(-0.8,39.7,-0.8,40.4).curveTo(-0.8,41.1,-1.9,41.1).lineTo(-3.3,40.9).closePath();
	this.shape_28.setTransform(-252.9,54.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(1.7,16.6).lineTo(1.7,-16.6).lineTo(-1.7,-16.6).lineTo(-1.7,16.6).closePath();
	this.shape_29.setTransform(-202.3,87.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.7,16.6).lineTo(-1.7,-16.6).lineTo(1.7,-16.6).lineTo(1.7,16.6).closePath();
	this.shape_30.setTransform(-202.3,87.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#757575").beginStroke().moveTo(-7.1,21.1).lineTo(-5.2,-24.9).lineTo(3.1,-24.8).curveTo(6,-24.2,6,-20.3).curveTo(6,-16.9,6.6,-0.6).lineTo(7.1,17.4).curveTo(7.1,21.3,6.4,22.7).curveTo(5.4,24.9,1.8,24.9).closePath();
	this.shape_31.setTransform(-222.1,68.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-2.9,21.3).lineTo(-2.9,-22.6).curveTo(0.4,-21,1.3,-19.5).curveTo(2.3,-18,2.3,-14.5).lineTo(2.6,0.4).lineTo(2.9,15.8).curveTo(2.9,18.2,2.1,20.3).curveTo(1.3,22.4,0.3,22.6).closePath();
	this.shape_32.setTransform(-215.3,68.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-20,2.1).lineTo(-20,-2.1).lineTo(20,-2.1).lineTo(16.7,2.1).closePath();
	this.shape_33.setTransform(-52.1,141.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.8,28.5).lineTo(-0.5,-24.4).lineTo(-8.6,-27.8).lineTo(-8.1,-29.6).lineTo(5.6,-28).lineTo(4.8,-26.5).lineTo(3.5,-25).lineTo(4.1,-24.2).curveTo(4.7,-22.9,5.1,-20.2).curveTo(5.6,-17.1,5.9,-12.1).curveTo(6.1,-7.1,5.8,-5.3).curveTo(5.7,-4.7,7.3,9.1).curveTo(8.9,23.2,8.6,27.2).lineTo(8.2,29.6).closePath();
	this.shape_34.setTransform(-262.9,42.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.4,4.4).lineTo(-5.4,-4.4).lineTo(5.4,-4.4).lineTo(5.4,4.4).closePath();
	this.shape_35.setTransform(-17.2,138.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,4.1).lineTo(-5.1,-4.1).lineTo(5.1,-4.1).lineTo(5.1,4.1).closePath();
	this.shape_36.setTransform(-16.9,95.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1.5,13.1).curveTo(-2.1,12.5,-2.1,11.6).lineTo(-2.1,-11.6).curveTo(-2.1,-12.5,-1.5,-13.1).curveTo(-0.9,-13.7,-0,-13.7).curveTo(0.8,-13.7,1.5,-13.1).curveTo(2.1,-12.5,2.1,-11.6).lineTo(2.1,11.6).curveTo(2.1,12.5,1.5,13.1).curveTo(0.8,13.7,-0,13.7).curveTo(-0.9,13.7,-1.5,13.1).closePath();
	this.shape_37.setTransform(-180.2,125.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1.5,13.1).curveTo(-2.1,12.5,-2.1,11.6).lineTo(-2.1,-11.6).curveTo(-2.1,-12.5,-1.5,-13.1).curveTo(-0.8,-13.7,0,-13.7).curveTo(0.9,-13.7,1.5,-13.1).curveTo(2.1,-12.5,2.1,-11.6).lineTo(2.1,11.6).curveTo(2.1,12.5,1.5,13.1).curveTo(0.9,13.7,0,13.7).curveTo(-0.8,13.7,-1.5,13.1).closePath();
	this.shape_38.setTransform(-203.4,125.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-15.3,13.1).curveTo(-16.3,13.1,-16.9,12.5).curveTo(-17.6,11.8,-17.6,10.9).lineTo(-17.6,-10.9).curveTo(-17.6,-11.8,-16.9,-12.5).curveTo(-16.3,-13.1,-15.3,-13.1).lineTo(15.3,-13.1).curveTo(16.3,-13.1,16.9,-12.5).curveTo(17.6,-11.8,17.6,-10.9).lineTo(17.6,10.9).curveTo(17.6,11.8,16.9,12.5).curveTo(16.3,13.1,15.3,13.1).closePath();
	this.shape_39.setTransform(-191.9,127);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.8,2.4).lineTo(-3.8,-2.4).lineTo(3.8,-2.4).lineTo(3.8,2.4).closePath();
	this.shape_40.setTransform(-179.6,141);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.8,2.4).lineTo(-3.8,-2.4).lineTo(3.8,-2.4).lineTo(3.8,2.4).closePath();
	this.shape_41.setTransform(-202.1,141);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-4.5,10.4).lineTo(-4.5,-10.4).lineTo(4.5,-10.4).lineTo(4.5,4).lineTo(3.6,4.8).lineTo(3.6,10.4).closePath();
	this.shape_42.setTransform(-250.7,105.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-0.8,22).curveTo(-0.4,20.1,-0.1,17.5).curveTo(0.3,12.4,-0.8,9.2).curveTo(-1.9,6,-2.5,0).lineTo(-2.8,-5.2).lineTo(-1.8,-19.2).lineTo(1.2,-22.2).lineTo(0.6,-11.2).curveTo(0.1,0.1,0.6,1.9).curveTo(1.3,4.8,2,10.2).curveTo(2.9,16.5,2.7,20.2).lineTo(2.7,22.2).closePath();
	this.shape_43.setTransform(-251.3,73.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.5,1.9,1.9).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-4).lineTo(5.1,1.4).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_44.setTransform(-297.8,103);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.5,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.4).curveTo(1.4,2.5,1.9,1.9).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-4).lineTo(5.1,1.4).lineTo(5.1,2.1).curveTo(5,2.8,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_45.setTransform(-322,103);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.5).curveTo(-5.5,2.1,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).lineTo(2,-2).curveTo(2.1,-2,2.1,-2).curveTo(2.2,-2,2.2,-2.1).curveTo(2.3,-2.1,2.3,-2.1).curveTo(2.3,-2.2,2.3,-2.2).curveTo(2.3,-2.3,2.3,-2.3).curveTo(2.2,-2.3,2.2,-2.4).curveTo(2.1,-2.4,2.1,-2.4).curveTo(2,-2.4,1.9,-2.5).curveTo(1.4,-2.6,-1.7,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.5,-5.2,-3).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).lineTo(5.4,-1.6).curveTo(5.1,-0.6,4.1,-0.2).lineTo(-1.6,1.8).curveTo(-2.4,2.1,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.8).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_46.setTransform(-309.8,103);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.5).lineTo(1.7,2.5).curveTo(2.1,2.5,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.3,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.4).curveTo(-0.4,-4.5,4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.4).lineTo(1.7,-2.5).curveTo(-1.4,-2.5,-1.8,-2.4).curveTo(-2,-2.4,-2,-2.4).curveTo(-2.1,-2.4,-2.2,-2.4).curveTo(-2.2,-2.3,-2.2,-2.3).curveTo(-2.3,-2.2,-2.2,-2.2).curveTo(-2.2,-2.2,-2.2,-2.1).curveTo(-2.2,-2.1,-2.2,-2.1).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-2,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.6).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_47.setTransform(-334.3,103);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.2,-1.5,-4.2).curveTo(-1.4,-4.3,-1.4,-4.3).curveTo(-1.4,-4.4,-1.3,-4.4).curveTo(-1.2,-4.5,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.4,1.4,-4.4).curveTo(1.4,-4.3,1.4,-4.3).curveTo(1.4,-4.2,1.5,-4.2).curveTo(1.5,-4.1,1.5,-4).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_48.setTransform(-342.9,103);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,-0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,-0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_49.setTransform(-291.8,143.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_50.setTransform(-122.1,142.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.9).curveTo(-22.4,1.1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.5,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).lineTo(-3.9,-1.8).lineTo(-18.5,-0.5).lineTo(-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.9).closePath();
	this.shape_51.setTransform(-323.9,26.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.5,1.9).closePath();
	this.shape_52.setTransform(-297.7,20.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_53.setTransform(-344.4,72.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_54.setTransform(-344.3,93.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#999999").beginStroke().moveTo(-2.9,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.6).curveTo(2.9,0.4,0,0.5).lineTo(-1.1,0.5).curveTo(-2.1,0.5,-2.9,0.3).closePath();
	this.shape_55.setTransform(-344.5,86.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.6).lineTo(-3.1,-4.9).curveTo(1.8,-6.4,2.4,-6.7).curveTo(3,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,3.9,3.2,4.5).curveTo(2.1,5.2,-1.4,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_56.setTransform(-344.5,88.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.5,-12.9,0.8,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.6,4.8,1.1,10.8).curveTo(1,11.9,0.4,12.9).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_57.setTransform(-340.2,45.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.4).lineTo(-2.1,13.7).curveTo(-3.7,13.6,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.8,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.2,-6.7,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.3,5.1,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.4).closePath();
	this.shape_58.setTransform(-341.4,45.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill().beginStroke("#777777").setStrokeStyle(0.3,1,1).moveTo(35.2,43.8).lineTo(35.3,39.6).lineTo(34.9,38.3).curveTo(34,-25.8,33.3,-37.3).curveTo(33.2,-40.1,31.3,-41.8).curveTo(29.7,-43.3,27.1,-43.6).curveTo(24.9,-43.9,16.7,-43.7).curveTo(10.1,-43.5,3.6,-43.2).curveTo(-1.1,-43,-20.1,-41.4).curveTo(-27.2,-40.7,-30.8,-38).curveTo(-32.7,-36.6,-33.1,-35.3).curveTo(-33.8,-34.2,-35.3,-30.2);
	this.shape_59.setTransform(-308.8,62.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill().beginStroke("#A5A5A5").setStrokeStyle(0.3,1,1).moveTo(-1,45.9).curveTo(-2.7,15.8,-2.9,0.7).curveTo(-3.1,-10.8,-1.5,-23.3).curveTo(0,-36.1,2.9,-46);
	this.shape_60.setTransform(-350.5,88.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.6).curveTo(-3,5.4,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.8,-2.6,-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.2).lineTo(-0.8,-1.2).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.4).lineTo(-0.4,4.7).curveTo(-0.4,5,-0.5,5.4).curveTo(-0.7,5.9,-1.3,6.2).closePath();
	this.shape_61.setTransform(-362.9,71.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.2,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.2,1,1.8).curveTo(-0.1,5.7,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.9,-1,-3.9).closePath();
	this.shape_62.setTransform(-353.2,47.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_63.setTransform(-362.7,108.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.6,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_64.setTransform(-362.2,127.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.8,0.4,-4.8,-1.7).lineTo(4.8,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_65.setTransform(-361.2,138.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_66.setTransform(-357.5,142.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.8,8.4).curveTo(-0,5.6,-0.5,-1.6).closePath();
	this.shape_67.setTransform(-356.6,134.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.9).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.4,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.9).lineTo(-4.4,-6.9).closePath();
	this.shape_68.setTransform(-358.2,132.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.2,-1.5,1.9).curveTo(-2,-1,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.5,4.6).lineTo(1,4.5).closePath();
	this.shape_69.setTransform(-364.6,133.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,3.1,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.4,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.4,3.2,1.1,6.5).closePath();
	this.shape_70.setTransform(-282.7,89.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.2,-4.5,7.6).curveTo(-5,7.1,-5,6.3).curveTo(-5.5,2.2,-5.3,-2.5).lineTo(-5,-6.4).curveTo(-5,-7.1,-4.5,-7.7).curveTo(-3.9,-8.3,-3.2,-8.3).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.3).curveTo(4,-8.3,4.6,-7.7).curveTo(5.1,-7.1,5.1,-6.4).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.1,4.6,7.6).curveTo(4,8.2,3.3,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_71.setTransform(-282.8,89.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-46.8,64.9).curveTo(-48.9,64.1,-49.8,62).curveTo(-50.2,61.8,-50.7,61.2).curveTo(-51.7,60.2,-52.3,58.5).curveTo(-52.9,56.4,-53.3,53.3).lineTo(-53.7,48).curveTo(-54,44.9,-53.1,42.1).lineTo(-52.2,39.9).curveTo(-53,23.7,-53,18.3).curveTo(-53,14.9,-52.5,6.7).lineTo(-52.1,-0.9).lineTo(-47.8,-7.9).curveTo(-46.8,-12.9,-43.3,-27.2).curveTo(-41.1,-36.4,-36.9,-48.8).curveTo(-33.6,-58.6,-32.7,-60.4).curveTo(-32.2,-61.4,-31.7,-61.8).curveTo(-31,-62.2,-29.4,-62.4).curveTo(-22.2,-63.3,5.6,-64.5).lineTo(32,-65.5).curveTo(34.9,-65.6,36.3,-65.3).curveTo(38.5,-64.9,40.4,-63.5).curveTo(42.2,-62.2,43.3,-61.2).lineTo(45.4,-59.2).curveTo(47.6,-57.2,49.7,-52.6).curveTo(50.8,-50.3,52.1,-44.6).curveTo(53.8,-36.9,53.8,-29.7).lineTo(53.8,-12.7).curveTo(53.7,-9.9,53.1,-8.7).curveTo(52.2,-7,51.2,-4.7).curveTo(49.8,-1.3,49.8,-0.1).lineTo(49.8,6.5).curveTo(49.8,8,49.3,8.9).curveTo(48.8,9.7,48.8,10.5).lineTo(48.8,25.4).lineTo(35.8,26).lineTo(35.8,28.3).curveTo(24.9,28.5,20,29.2).curveTo(13.4,30,10.5,31.4).curveTo(3.9,34.6,-1.1,43.2).curveTo(-3.3,47,-6.4,53.9).curveTo(-7.7,55.5,-8.8,55.5).lineTo(-17,55.5).lineTo(-18.5,55.1).lineTo(-21.1,55.5).lineTo(-39.2,55.5).lineTo(-39.2,61.9).curveTo(-39.2,63.3,-39.9,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-45.3,65.5,-46.8,64.9).closePath().moveTo(10,-55.4).curveTo(-9.4,-54.6,-15.8,-53.6).curveTo(-21.2,-52.8,-22.8,-51.9).curveTo(-24,-51.1,-25.3,-48.5).curveTo(-26.3,-46.5,-28.6,-36.4).curveTo(-30.8,-26.4,-31.2,-22.1).curveTo(-31.6,-18.2,-32,-10.8).curveTo(-32.3,-4,-32.3,-1.5).lineTo(-32.1,-0.4).lineTo(-31,-0.7).lineTo(9.6,-16.4).curveTo(14.3,-18.1,26.8,-20.3).lineTo(29.3,-20.7).curveTo(30.5,-21,30.9,-21.4).curveTo(31.1,-21.7,31.1,-22.3).lineTo(31.7,-51.8).curveTo(31.8,-54.2,31,-55).curveTo(30.3,-55.8,28.2,-56).lineTo(10,-55.4).closePath();
	this.shape_72.setTransform(-313.3,80.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#999999").beginStroke().moveTo(16.2,26.1).lineTo(14.2,23.4).lineTo(-23.3,19.4).lineTo(-43,10.7).lineTo(-99.9,10.3).lineTo(-143.7,25.3).lineTo(-162.7,24.2).lineTo(-168.2,19).lineTo(-167.8,-21.3).lineTo(-94.4,-25.7).lineTo(-88.5,-17.8).lineTo(-87.3,-5.9).lineTo(-82.5,-4.3).lineTo(-75.4,-4.3).lineTo(-77.8,-10.6).lineTo(-77.8,-13).lineTo(-79,-13.8).lineTo(-79.8,-27.2).lineTo(-54.9,-26).lineTo(-49.7,-24.1).lineTo(-49.7,-19.3).lineTo(168.2,-19.3).lineTo(168.2,-2.4).lineTo(164.7,-2.7).lineTo(164.3,8.3).lineTo(161.9,14.3).lineTo(142.9,15.1).lineTo(136.4,7.5).lineTo(108.2,16.1).lineTo(94.9,17.7).lineTo(94,6.2).lineTo(85.3,5.2).lineTo(72.3,4.7).lineTo(71.3,7).lineTo(74,24).lineTo(18,27.2).closePath().moveTo(2.8,15.4).lineTo(-1.2,13.5).curveTo(-2.6,12.7,-3.2,11).lineTo(-3.5,9.5).lineTo(-8.7,10.7).lineTo(-9.1,13.8).lineTo(2.8,15.4).closePath();
	this.shape_73.setTransform(-168.2,123.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#999999").beginStroke().moveTo(-5.9,1.4).lineTo(-5.5,-1.8).lineTo(-0.4,-3).lineTo(-0.1,-1.4).curveTo(0.5,0.3,2,1).lineTo(5.9,3).closePath();
	this.shape_74.setTransform(-171.4,135.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.4,0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_75.setTransform(-179.2,170.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(1));

	// Capa 3
	this.instance = new lib.teleconductor();
	this.instance.parent = this;
	this.instance.setTransform(-309.4,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.4,0,374.6,181.5);


// stage content:
(lib.gruatelescopica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(101.5,84.5).lineTo(101.5,30.7).lineTo(187.6,30.7).lineTo(187.6,84.5).closePath();
	mask.setTransform(187.6,84.5);

	// Capa 1
	this.instance = new lib.telebrazitos();
	this.instance.parent = this;
	this.instance.setTransform(329.7,165.4,0.633,1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({scaleX:1,y:144.4},9).wait(25).to({alpha:0},6).to({_off:true},1).wait(48));

	// grua-canasta
	this.instance_1 = new lib.telegruacanasta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1098.1,270.8,1,1,0,0,0,-36.2,34);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:318.1},30).wait(7).to({x:324.1,y:248.5},1).to({x:339.1,y:202.9},21).wait(41).to({x:318.1,y:270.8},12).wait(8).to({x:-381.9},27).wait(1));

	// brazo
	this.instance_2 = new lib.telegruabrazo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1295.8,293.6,1,1,0,0,0,-162.5,39.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:515.8},30).wait(7).to({regY:39.2,rotation:4.8,x:516.3,y:282.7},1).to({regY:39.4,rotation:17,x:517.7,y:251.8},21).wait(41).to({regY:39.3,rotation:0,x:515.8,y:293.6},12).wait(8).to({x:-184.2},27).wait(1));

	// grua3
	this.instance_3 = new lib.telegrua3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1374.1,351.3,1,1,0,0,0,-45.8,26.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:594.1},30).wait(7).to({rotation:4.3},1).to({rotation:15,y:347.3},21).wait(41).to({rotation:0,y:351.3},12).wait(8).to({x:-105.9},27).wait(1));

	// grua2
	this.instance_4 = new lib.telegrua2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1419.2,354.3,1,1,0,0,0,-45.4,41.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({x:639.2},30).wait(8).to({y:350.3},21).wait(41).to({y:354.3},12).wait(8).to({x:-60.8},27).wait(1));

	// llanta
	this.instance_5 = new lib.llanta();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1354.4,445.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({rotation:-720,x:574.4,y:440.2},30).wait(90).to({rotation:-1080,x:-126.6},27).wait(1));

	// llanta
	this.instance_6 = new lib.llanta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1184.5,446.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({rotation:-720,x:404.5,y:441.8},30).wait(90).to({rotation:-1080,x:-296.5},27).wait(1));

	// grua-1
	this.instance_7 = new lib.telegrua1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1292.2,387.4,1,1,0,0,0,-183.8,84.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:512.2,y:383.4},30).wait(90).to({x:-188.8},27).wait(1));

	// Capa 9
	this.instance_8 = new lib.teleInterpolación3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(463.3,320.4);
	this.instance_8._off = true;

	this.instance_9 = new lib.teleInterpolación4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(463.3,296.4,1,2.508);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({startPosition:0},7).to({scaleY:1.43,y:314.7},1).to({_off:true,scaleY:2.51,y:296.4},21).wait(41).to({_off:false,scaleY:1,y:320.4},12).to({startPosition:0},8).to({x:-236.7},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},21).wait(41).to({startPosition:0},0).to({_off:true,scaleY:1,y:320.4},12).wait(36));

	// Capa 7
	this.instance_10 = new lib.teleInterpolación1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(559.5,332.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.teleInterpolación2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(552.5,307.8,1,1,15);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({startPosition:0},7).to({rotation:4.3,x:557.5,y:326.5},1).to({_off:true,rotation:15,x:552.5,y:307.8},21).wait(41).to({_off:false,rotation:0,x:559.5,y:332.4},12).to({startPosition:0},8).to({x:-140.5},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},21).wait(41).to({startPosition:0},0).to({_off:true,rotation:0,x:559.5,y:332.4},12).wait(36));

	// Capa 10 copia
	this.instance_12 = new lib.telecabletelex();
	this.instance_12.parent = this;
	this.instance_12.setTransform(328.1,158.2,0.005,1,0,0,0,-110,1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70).to({_off:false},0).to({scaleX:1,x:301.8,y:157.8},31).wait(49));

	// Capa 10
	this.instance_13 = new lib.telecabletelex();
	this.instance_13.parent = this;
	this.instance_13.setTransform(328.1,151.4,0.005,1,0,0,0,-110,1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70).to({_off:false},0).to({scaleX:1,x:301.8},31).wait(49));

	// fondo
	this.instance_14 = new lib.telefondo();
	this.instance_14.parent = this;
	this.instance_14.setTransform(525,203.5,1,1,0,0,0,-525.3,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(150));

	// Capa 5
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#666666").beginStroke().moveTo(0.7,5.9).curveTo(-1.4,5.8,-2.4,5.4).curveTo(-3,5.2,-5.7,5.4).curveTo(-8.8,5.7,-10,5.3).curveTo(-11.5,4.8,-9.9,4.9).curveTo(-8.8,5,-8.4,4.7).curveTo(-9.4,2.2,-10.6,1.6).lineTo(-11.7,1.4).curveTo(-9.4,1.2,-7.6,2.6).curveTo(-6.8,3.3,-6.4,4).curveTo(-6.6,1.6,-8,-0).lineTo(-9.3,-1.2).curveTo(-6.8,-0.1,-5.1,2).curveTo(-4.4,3.1,-4,3.9).curveTo(-3.6,1.8,-4.7,-0.7).lineTo(-5.9,-2.7).curveTo(-3,-1,-2.1,1.6).curveTo(-1.7,2.7,-1.7,3.6).curveTo(-1.4,-1.2,1.7,-4.2).lineTo(4.6,-6.1).curveTo(2.2,-4.4,1.4,-0.1).curveTo(0.9,2.1,1,3.9).curveTo(2.4,-1.1,6.2,-3.4).lineTo(9.6,-4.7).curveTo(6,-2.3,4.6,1.2).curveTo(4,2.9,4,4.2).curveTo(5.4,1.1,8.7,0.1).curveTo(10.3,-0.3,11.6,-0.2).curveTo(9.1,0.3,7.4,2.5).curveTo(6.4,3.6,6,4.5).curveTo(9.9,4.9,10.5,5.3).curveTo(11,5.6,9.6,5.6).lineTo(8.3,5.6).curveTo(7.5,5.6,6.3,5.9).lineTo(4.4,6.1).lineTo(0.7,5.9).closePath();
	this.shape.setTransform(58.9,459.3);

	this.instance_15 = new lib.tele007();
	this.instance_15.parent = this;
	this.instance_15.setTransform(47.2,466.2,1,1,0,0,0,3.5,0.5);
	this.instance_15.alpha = 0.301;

	this.instance_16 = new lib.tele0014();
	this.instance_16.parent = this;
	this.instance_16.setTransform(57.5,464,1,1,0,0,0,9.2,1.4);
	this.instance_16.alpha = 0.301;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#666666").beginStroke().moveTo(0.7,6).curveTo(-1.3,5.9,-2.4,5.5).curveTo(-3,5.3,-5.6,5.5).curveTo(-8.8,5.8,-10,5.4).curveTo(-11.5,4.8,-9.9,5).curveTo(-8.9,5.1,-8.3,4.8).curveTo(-9.4,2.3,-10.6,1.6).lineTo(-11.7,1.4).curveTo(-9.4,1.3,-7.7,2.7).curveTo(-6.8,3.4,-6.4,4.1).curveTo(-6.6,1.7,-8,0).lineTo(-9.3,-1.2).curveTo(-6.7,-0,-5.2,2.1).curveTo(-4.3,3.2,-4.1,4).curveTo(-3.6,1.9,-4.7,-0.6).lineTo(-5.9,-2.6).curveTo(-3,-0.9,-2,1.7).curveTo(-1.7,2.8,-1.7,3.7).curveTo(-1.4,-1.1,1.7,-4.1).curveTo(3.3,-5.6,4.8,-6.2).curveTo(2.2,-4.5,1.3,-0.1).curveTo(0.9,2.1,1,4).curveTo(2.5,-1,6.2,-3.3).curveTo(8.1,-4.5,9.6,-4.6).curveTo(6,-2.2,4.6,1.3).curveTo(3.9,3,3.9,4.3).curveTo(5.3,1.2,8.7,0.2).curveTo(10.3,-0.3,11.7,-0.1).curveTo(9.1,0.4,7.3,2.5).lineTo(6,4.6).curveTo(10,5,10.5,5.4).curveTo(10.9,5.7,9.6,5.7).lineTo(8.2,5.7).curveTo(7.6,5.7,6.3,5.9).lineTo(4.5,6.2).lineTo(0.7,6).closePath();
	this.shape_1.setTransform(747.9,451.2);

	this.instance_17 = new lib.tele006();
	this.instance_17.parent = this;
	this.instance_17.setTransform(736.2,458.2,1,1,0,0,0,3.5,0.5);
	this.instance_17.alpha = 0.301;

	this.instance_18 = new lib.tele0013();
	this.instance_18.parent = this;
	this.instance_18.setTransform(746.5,456,1,1,0,0,0,9.2,1.4);
	this.instance_18.alpha = 0.301;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#666666").beginStroke().moveTo(-5.5,5.4).lineTo(-7.4,5.2).lineTo(-8.6,5.2).curveTo(-9.9,5.2,-9.4,4.9).curveTo(-8.9,4.6,-5.3,4.1).curveTo(-5.7,3.2,-6.5,2.2).curveTo(-8.2,0.3,-10.5,-0.2).lineTo(-7.7,0.1).curveTo(-4.7,1,-3.4,3.9).curveTo(-3.3,2.7,-4,1.1).curveTo(-5.3,-2.1,-8.6,-4.3).lineTo(-5.5,-3.1).curveTo(-2,-1,-0.7,3.6).curveTo(-0.6,1.9,-1,-0.1).curveTo(-1.8,-4.1,-4,-5.7).lineTo(-1.3,-3.8).curveTo(1.6,-1.1,1.8,3.3).curveTo(1.8,2.5,2.2,1.5).curveTo(3.1,-0.9,5.7,-2.4).lineTo(4.6,-0.6).curveTo(3.6,1.6,4,3.6).lineTo(5.1,1.9).curveTo(6.6,-0.1,8.9,-1.2).curveTo(8.3,-0.8,7.7,-0.1).curveTo(6.4,1.5,6.2,3.7).lineTo(7.4,2.4).curveTo(8.8,1.4,10.5,1.3).lineTo(10.1,1.5).curveTo(9,2.1,8,4.3).lineTo(8.4,4.5).curveTo(8.8,4.6,9.4,4.6).curveTo(11,4.4,9.5,5).curveTo(8.4,5.4,5.5,5.1).curveTo(3,4.8,2.5,5).curveTo(1.5,5.4,-0.3,5.5).lineTo(-3.8,5.6).lineTo(-4,5.7).lineTo(-5.5,5.4).closePath();
	this.shape_2.setTransform(136.3,415.5);

	this.instance_19 = new lib.tele005();
	this.instance_19.parent = this;
	this.instance_19.setTransform(147.4,421.9,1,1,0,0,0,3.2,0.5);
	this.instance_19.alpha = 0.301;

	this.instance_20 = new lib.tele0012();
	this.instance_20.parent = this;
	this.instance_20.setTransform(137.9,419.9,1,1,0,0,0,8.4,1.3);
	this.instance_20.alpha = 0.301;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#666666").beginStroke().moveTo(1.6,13.9).curveTo(-3.2,13.7,-5.6,12.8).curveTo(-7,12.3,-13.2,12.9).curveTo(-20.5,13.6,-23.2,12.6).curveTo(-24.2,12.3,-24,11.9).curveTo(-23.9,11.5,-22.9,11.6).curveTo(-20.6,11.9,-19.4,11.1).curveTo(-21.8,5.4,-24.7,3.8).lineTo(-27.1,3.3).curveTo(-21.9,3,-17.8,6.2).curveTo(-15.8,7.8,-14.9,9.5).curveTo(-15.4,3.9,-18.6,0).lineTo(-21.7,-2.8).curveTo(-15.7,-0.1,-12,4.8).curveTo(-10.1,7.3,-9.4,9.2).curveTo(-8.3,4.3,-10.9,-1.4).lineTo(-13.7,-6).curveTo(-7.1,-2.1,-4.9,4).curveTo(-3.9,6.5,-3.9,8.5).curveTo(-3.2,-2.6,4,-9.5).curveTo(7.7,-13.1,11.2,-14.4).curveTo(5.1,-10.4,3.1,-0.2).curveTo(2.2,5,2.4,9.3).curveTo(5.8,-2.4,14.4,-7.7).curveTo(18.7,-10.4,22.4,-10.7).curveTo(14,-5.2,10.8,2.9).curveTo(9.1,7,9.2,9.9).curveTo(12.5,2.7,20.1,0.5).curveTo(24,-0.6,27.1,-0.3).curveTo(21.3,0.9,17.1,5.9).lineTo(14,10.6).curveTo(23.1,11.7,24.5,12.6).curveTo(25.5,13.2,22.4,13.3).lineTo(19.2,13.3).curveTo(17.6,13.2,14.6,13.8).curveTo(11.4,14.4,10.3,14.4).lineTo(1.6,13.9).closePath();
	this.shape_3.setTransform(979.3,466.8);

	this.instance_21 = new lib.tele004();
	this.instance_21.parent = this;
	this.instance_21.setTransform(952.2,482.9,1,1,0,0,0,8.2,1.2);
	this.instance_21.alpha = 0.301;

	this.instance_22 = new lib.tele0011();
	this.instance_22.parent = this;
	this.instance_22.setTransform(976.1,478,1,1,0,0,0,21.4,3.3);
	this.instance_22.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#666666").beginStroke().moveTo(-4.7,4.5).curveTo(-5.5,4.4,-7.3,4.4).curveTo(-8.3,4.3,-8,4.1).curveTo(-7.5,3.8,-4.5,3.5).curveTo(-4.8,2.7,-5.5,1.9).curveTo(-6.9,0.2,-8.9,-0.2).lineTo(-6.5,0.1).curveTo(-4,0.8,-2.9,3.2).curveTo(-2.9,2.2,-3.4,0.9).curveTo(-4.5,-1.8,-7.3,-3.7).lineTo(-4.6,-2.7).curveTo(-1.7,-0.9,-0.6,3).curveTo(-0.5,1.5,-0.9,-0.2).curveTo(-1.5,-3.4,-3.4,-4.7).lineTo(-1.1,-3.3).curveTo(1.3,-0.9,1.5,2.9).curveTo(1.5,2.2,1.8,1.2).curveTo(2.6,-0.8,4.8,-2.1).curveTo(4.3,-1.5,3.8,-0.5).curveTo(3,1.3,3.3,3).lineTo(4.2,1.5).curveTo(5.4,-0.1,7.4,-1).curveTo(6.9,-0.7,6.4,-0.1).curveTo(5.3,1.2,5.1,3.1).lineTo(6.1,2).curveTo(7.3,1.1,8.9,1).lineTo(8.4,1.2).curveTo(7.5,1.7,6.7,3.6).lineTo(7,3.7).curveTo(7.3,3.8,7.8,3.8).curveTo(9,3.7,7.9,4.1).curveTo(7,4.5,4.6,4.2).curveTo(2.5,4,2,4.2).curveTo(1.2,4.5,-0.3,4.6).lineTo(-3.3,4.7).lineTo(-4.7,4.5).closePath();
	this.shape_4.setTransform(337.9,393.5);

	this.instance_23 = new lib.tele002();
	this.instance_23.parent = this;
	this.instance_23.setTransform(347.1,398.8,1,1,0,0,0,2.7,0.4);
	this.instance_23.alpha = 0.301;

	this.instance_24 = new lib.tele0010();
	this.instance_24.parent = this;
	this.instance_24.setTransform(339.2,397.1,1,1,0,0,0,7.1,1.1);
	this.instance_24.alpha = 0.301;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#666666").beginStroke().moveTo(-14.1,13.8).curveTo(-17,13.2,-18.6,13.3).lineTo(-21.7,13.3).curveTo(-24.8,13.2,-23.9,12.5).curveTo(-22.5,11.7,-13.3,10.6).curveTo(-14.3,8.3,-16.4,5.8).curveTo(-20.7,0.8,-26.5,-0.3).lineTo(-24.4,-0.4).curveTo(-21.9,-0.2,-19.5,0.5).curveTo(-11.9,2.7,-8.6,9.9).curveTo(-8.5,7,-10.1,2.9).curveTo(-13.4,-5.2,-21.7,-10.8).lineTo(-19.4,-10.3).curveTo(-16.5,-9.4,-13.8,-7.8).curveTo(-5.2,-2.4,-1.7,9.2).curveTo(-1.5,4.9,-2.5,-0.2).curveTo(-4.5,-10.4,-10.6,-14.4).lineTo(-8.3,-13.3).curveTo(-5.7,-11.8,-3.4,-9.6).curveTo(3.9,-2.6,4.6,8.7).curveTo(4.5,6.7,5.5,3.9).curveTo(7.7,-2.2,14.4,-6).lineTo(11.6,-1.4).curveTo(8.9,4.3,10,9.2).lineTo(12.6,4.8).curveTo(16.4,-0.1,22.3,-2.8).curveTo(20.8,-2,19.2,-0).curveTo(16.1,3.9,15.5,9.5).lineTo(18.5,6.2).curveTo(22,3.4,26.5,3.3).curveTo(26,3.5,25.4,3.8).curveTo(22.5,5.4,20,11).lineTo(20.9,11.4).curveTo(22.1,11.8,23.5,11.6).curveTo(24.5,11.5,24.6,11.9).curveTo(24.8,12.2,23.8,12.6).curveTo(21.1,13.6,13.8,12.9).curveTo(7.6,12.3,6.2,12.8).curveTo(3.7,13.7,-0.9,13.9).lineTo(-9.7,14.3).lineTo(-9.9,14.4).curveTo(-11.1,14.4,-14.1,13.8).closePath();
	this.shape_5.setTransform(286.1,486.8);

	this.instance_25 = new lib.tele003();
	this.instance_25.parent = this;
	this.instance_25.setTransform(313.9,502.9,1,1,0,0,0,8.2,1.2);
	this.instance_25.alpha = 0.301;

	this.instance_26 = new lib.tele009();
	this.instance_26.parent = this;
	this.instance_26.setTransform(290,497.9,1,1,0,0,0,21.4,3.2);
	this.instance_26.alpha = 0.301;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#666666").beginStroke().moveTo(-6,5.9).curveTo(-7.3,5.6,-8,5.6).curveTo(-8.7,5.7,-9.4,5.7).curveTo(-10.7,5.6,-10.3,5.3).curveTo(-9.7,5,-5.8,4.5).curveTo(-6.2,3.5,-7,2.4).curveTo(-8.9,0.3,-11.4,-0.2).lineTo(-8.4,0.1).curveTo(-5.1,1.1,-3.7,4.2).curveTo(-3.7,2.9,-4.3,1.2).curveTo(-5.8,-2.3,-9.4,-4.7).lineTo(-5.9,-3.4).curveTo(-2.2,-1.1,-0.7,3.9).curveTo(-0.7,2.1,-1.1,-0.1).curveTo(-1.9,-4.4,-4.3,-6.1).lineTo(-1.4,-4.2).curveTo(1.7,-1.2,2,3.6).curveTo(2,2.7,2.4,1.6).curveTo(3.3,-1,6.1,-2.6).lineTo(5,-0.6).curveTo(3.8,1.8,4.3,3.9).lineTo(5.4,2).curveTo(7.1,-0.1,9.6,-1.3).curveTo(9,-0.9,8.3,-0.1).curveTo(6.9,1.6,6.7,4).lineTo(7.9,2.6).curveTo(9.4,1.5,11.4,1.4).lineTo(10.9,1.6).curveTo(9.6,2.2,8.6,4.7).lineTo(9,4.8).curveTo(9.5,5,10.1,4.9).curveTo(11.8,4.8,10.3,5.3).curveTo(9.1,5.8,5.9,5.5).curveTo(3.3,5.2,2.6,5.4).curveTo(1.6,5.8,-0.4,5.9).lineTo(-4.2,6.1).lineTo(-4.4,6.1).lineTo(-6,5.9).closePath();
	this.shape_6.setTransform(907.6,417.1);

	this.instance_27 = new lib.tele001();
	this.instance_27.parent = this;
	this.instance_27.setTransform(919.5,424.1,1,1,0,0,0,3.5,0.6);
	this.instance_27.alpha = 0.301;

	this.instance_28 = new lib.tele008();
	this.instance_28.parent = this;
	this.instance_28.setTransform(909.3,421.9,1,1,0,0,0,9.2,1.4);
	this.instance_28.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.shape_6},{t:this.instance_26},{t:this.instance_25},{t:this.shape_5},{t:this.instance_24},{t:this.instance_23},{t:this.shape_4},{t:this.instance_22},{t:this.instance_21},{t:this.shape_3},{t:this.instance_20},{t:this.instance_19},{t:this.shape_2},{t:this.instance_18},{t:this.instance_17},{t:this.shape_1},{t:this.instance_16},{t:this.instance_15},{t:this.shape}]}).wait(150));

	// Ambient
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_7.setTransform(525,182.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_8.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(524.8,257.5,1050.6,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;