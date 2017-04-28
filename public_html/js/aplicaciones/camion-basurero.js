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


(lib.basurerotapa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-22.5,8).lineTo(-22.5,3.1).curveTo(-22.5,1.5,-21.3,0.2).curveTo(-20.1,-1,-18.5,-1).lineTo(-7.5,-1).lineTo(-7.5,-4.3).curveTo(-7.5,-5.7,-6.7,-6.9).curveTo(-5.8,-8,-4.4,-8).lineTo(4.7,-8).curveTo(6.1,-8,7.3,-6.9).curveTo(8.5,-5.6,8.5,-4.3).lineTo(8.5,-1).lineTo(18.6,-1).curveTo(20.1,-1,21.3,-0).curveTo(22.5,0.9,22.5,2.2).lineTo(22.5,8).closePath().moveTo(-5.5,-4.3).lineTo(-5.5,-1).lineTo(5.5,-1).lineTo(5.5,-4.3).curveTo(5.5,-4.8,5.3,-4.9).curveTo(5.1,-5,4.7,-5).lineTo(-4.4,-5).curveTo(-5.5,-5,-5.5,-4.3).closePath();
	this.shape.setTransform(-8.5,-3,0.622,0.622);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-8,28,10);


(lib.basurerolegs = function(mode,startPosition,loop) {
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


(lib.basurerohandss = function(mode,startPosition,loop) {
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


(lib.basurerofuente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#7F7F7F").setStrokeStyle(6).moveTo(-60.5,25).curveTo(-56.8,8.3,-43.9,-4.6).curveTo(-30,-18.5,-11.7,-21.8).curveTo(-6.1,-22.8,-0.1,-22.8).curveTo(6,-22.8,11.6,-21.8).curveTo(29.9,-18.5,43.8,-4.6).curveTo(56.8,8.3,60.5,25.1);
	this.shape.setTransform(0,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-65,127,53.9);


(lib.basurerobote2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-16,21).curveTo(-17.7,21,-18.9,19.7).curveTo(-20.2,18.5,-20.2,17).lineTo(-20.5,17).lineTo(-20.5,-21).lineTo(20.5,-21).lineTo(20.5,16.9).curveTo(20.5,18.6,19.2,19.8).curveTo(17.9,21,16.2,21).closePath();
	this.shape.setTransform(-0.3,8.8,0.634,0.635);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-4.5,26,26.7);


(lib.basurerobodyrock = function(mode,startPosition,loop) {
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


(lib.basurerobasura = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,8.1).curveTo(-5.1,7.7,-5.3,6.7).lineTo(-6.2,1.8).curveTo(-7.6,1.7,-8.4,1.3).curveTo(-9.6,0.6,-9.4,-0.6).curveTo(-9.3,-1.1,-8.6,-1.8).curveTo(-7.8,-2.6,-7.6,-3.1).curveTo(-7.4,-3.5,-7.5,-4.3).curveTo(-7.5,-5.2,-7.4,-5.5).curveTo(-7.2,-6.7,-5.6,-7.7).curveTo(-3.9,-8.6,-2.4,-8.2).curveTo(-1.6,-8,-1,-7.3).curveTo(-0.5,-6.6,-0.5,-5.8).curveTo(1,-6.2,1.7,-6.1).curveTo(2.3,-6,2.8,-5.6).curveTo(3.2,-5.2,3.3,-4.6).curveTo(5.7,-4.5,6.6,-3.6).curveTo(7.3,-3,7.2,-2).curveTo(7.1,-0.9,6.2,-0.7).curveTo(9,-0,9.4,1.5).curveTo(9.7,2.8,8.5,3.9).curveTo(7.9,4.5,6.2,5.2).curveTo(3,6.5,1.3,6.7).curveTo(-0.8,6.9,-1.5,7.3).lineTo(-3.1,8.1).curveTo(-3.6,8.3,-4,8.3).curveTo(-4.4,8.3,-4.6,8.1).closePath();
	this.shape.setTransform(38,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.6,9.7,18.9,16.7);


(lib.basureroconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.basurerohandss();
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


(lib.basurerocamion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.2,-4).lineTo(-2.2,0.8).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,2,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4,4.4,2.1,4.5).closePath();
	this.shape.setTransform(-116.2,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.2,-4).lineTo(-2.2,0.8).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,2,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.3,2.3,-4.4).curveTo(2.3,-4.4,2.4,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.6,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4.1,4.4,2.1,4.5).closePath();
	this.shape_1.setTransform(-140.5,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3.1,4.5).curveTo(-4.5,4.5,-5.1,3.5).lineTo(-5.4,2.6).curveTo(-5.5,2.2,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).curveTo(-2.8,-0.3,2,-1.9).curveTo(2,-1.9,2.1,-2).curveTo(2.1,-2,2.2,-2).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.2).curveTo(2.3,-2.4,1.8,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-2.9).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).lineTo(5.3,-1.6).curveTo(5.1,-0.6,4.1,-0.2).curveTo(-0.4,1.3,-1.6,1.9).curveTo(-2.4,2.2,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.9).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_2.setTransform(-128.2,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,3.9).lineTo(-5.2,2.9).curveTo(-5.2,2.5,-4.8,2.4).lineTo(-4.5,2.4).lineTo(1.7,2.4).curveTo(2.1,2.4,2.2,2.3).curveTo(2.3,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.6,-5.4,-1.6).lineTo(-5.4,-2.6).lineTo(-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.5).curveTo(5.1,-4.4,5.1,-4).lineTo(5.1,-2.9).curveTo(5.1,-2.4,4.7,-2.5).curveTo(-1.1,-2.6,-1.9,-2.5).curveTo(-2.3,-2.4,-2.3,-2.2).curveTo(-2.3,-2.1,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-1.9,-2,-1.9).lineTo(0.7,-1).lineTo(4.2,0.3).curveTo(5.6,1,5.4,2.6).curveTo(5.4,3.1,5.1,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.9,4.5).curveTo(-5.2,4.5,-5.2,3.9).closePath();
	this.shape_3.setTransform(-152.7,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-0.9,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.2,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_4.setTransform(-161.3,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#9E9E9E").beginStroke().moveTo(18.5,49.8).curveTo(16.8,49.4,15.4,45.5).curveTo(14.2,42.1,-4.1,3.4).lineTo(-24,-38.9).curveTo(-25.8,-42.9,-24,-46.2).curveTo(-22.7,-48.6,-20.6,-49.5).curveTo(-19,-50.2,-17.3,-49.7).curveTo(-15.3,-49.2,-14.8,-47.4).curveTo(-14.4,-46.1,-10.3,-37.8).curveTo(-6,-29.1,-5.2,-27).curveTo(-3.6,-22.8,-3.9,-22.2).curveTo(-2.8,-22,-2,-21).curveTo(-1.5,-20.3,-0.2,-17.5).lineTo(22,31.5).lineTo(24.8,37.4).curveTo(24.9,37.9,24.9,42.3).curveTo(24.9,46.5,24.2,47.7).curveTo(23.8,48.5,21.8,49.2).curveTo(19.7,49.9,18.8,49.9).lineTo(18.5,49.8).closePath();
	this.shape_5.setTransform(92.1,-29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#999999").beginStroke().moveTo(-4.5,3.9).curveTo(-5.3,3.2,-5.5,2.3).lineTo(-6.7,-2.3).curveTo(-7,-3.2,-6.5,-3.9).curveTo(-6.1,-4.5,-5.2,-4.5).lineTo(3.1,-4.5).curveTo(3.9,-4.5,4.7,-3.9).curveTo(5.5,-3.2,5.8,-2.3).lineTo(6.7,1.3).curveTo(7,2.2,6.5,2.9).curveTo(6.1,3.6,5.2,3.6).lineTo(-2.8,4.5).curveTo(-3.7,4.5,-4.5,3.9).closePath();
	this.shape_6.setTransform(82.7,-76.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#C6C6C6").beginStroke().moveTo(2.6,8.1).curveTo(1.9,7.9,1.6,7.2).lineTo(-4.6,-5.8).curveTo(-4.9,-6.4,-4.6,-7.1).curveTo(-4.5,-7.7,-3.8,-8).curveTo(-3.2,-8.3,-2.6,-8.1).curveTo(-1.9,-7.8,-1.6,-7.2).lineTo(4.6,5.8).curveTo(4.9,6.4,4.6,7.1).curveTo(4.4,7.7,3.8,8).curveTo(3.5,8.2,3.1,8.2).lineTo(2.6,8.1).closePath();
	this.shape_7.setTransform(84.8,-65.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,4).curveTo(-1.1,3.8,-1.2,3.2).lineTo(-3.1,-1.6).curveTo(-3.2,-2.1,-2.8,-2.7).curveTo(-2.4,-3.2,-1.8,-3.5).lineTo(0,-4).curveTo(0.7,-4.3,1.3,-4.1).curveTo(1.9,-3.9,2.1,-3.3).lineTo(3,1.9).curveTo(3.2,2.4,2.9,2.9).curveTo(2.6,3.4,2,3.6).lineTo(0.5,4.1).lineTo(0.1,4.2).lineTo(-0.5,4).closePath();
	this.shape_8.setTransform(87.2,-70);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-27.5,0.2).lineTo(-24.3,-5.2).lineTo(24.5,-5.2).lineTo(27.9,2.8).lineTo(-23.2,2.8).lineTo(-27.9,5.2).closePath();
	this.shape_9.setTransform(146.3,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.5,10.4).lineTo(-14.4,-10.4).lineTo(-5.5,-10.4).lineTo(14.4,10.4).closePath();
	this.shape_10.setTransform(155,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D9D9D9").beginStroke().moveTo(-4.9,-10.9).curveTo(-3.5,-9,0,-2).curveTo(1.3,0.7,3,5).curveTo(4.7,9.5,4.9,10.9).closePath();
	this.shape_11.setTransform(130.8,28.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1,7.4).lineTo(-7.8,-6.9).lineTo(-8.7,-9.1).curveTo(-9,-10.5,-8.2,-11).curveTo(-6.9,-11.7,-6.2,-10.9).lineTo(-5.2,-9).lineTo(-5.2,-8.8).curveTo(-3.5,-5.6,1,4.3).curveTo(2.7,7.7,5.4,7.7).curveTo(7.3,7.8,7.9,8.1).curveTo(8.8,8.4,8.8,9.4).curveTo(8.8,10.8,7.6,11.1).curveTo(7,11.3,4.6,11.3).curveTo(0.9,11.3,-1,7.4).closePath();
	this.shape_12.setTransform(127.5,31);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-15.5,2.6).curveTo(-16.2,2.6,-16.7,2).curveTo(-17.3,1.5,-17.3,0.7).lineTo(-17.3,-0.8).curveTo(-17.3,-1.5,-16.7,-2).curveTo(-16.2,-2.6,-15.5,-2.6).lineTo(15.5,-2.6).curveTo(16.2,-2.6,16.8,-2).curveTo(17.3,-1.5,17.3,-0.8).lineTo(17.3,0.7).curveTo(17.3,1.5,16.8,2).curveTo(16.2,2.6,15.5,2.6).closePath();
	this.shape_13.setTransform(153.7,40.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11,6.4).lineTo(-14,3.3).lineTo(-14.2,-3.3).lineTo(-10.9,-6.4).lineTo(10.4,-6.3).lineTo(14.2,-3.6).lineTo(14,3.3).lineTo(11.4,6.4).closePath();
	this.shape_14.setTransform(153.3,40.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#C6C6C6").beginStroke().moveTo(0.4,4.3).curveTo(-1.1,3.5,-2.3,1.7).curveTo(-3.6,-0.4,-3.8,-1.6).curveTo(-4,-3.2,-2.6,-4.2).curveTo(-0.8,-5.3,0.4,-4.3).curveTo(1.1,-3.8,2.6,-1.4).curveTo(3.8,0.4,3.8,2.2).curveTo(3.9,3.9,2.9,4.5).curveTo(2.5,4.8,2,4.8).curveTo(1.3,4.8,0.4,4.3).closePath();
	this.shape_15.setTransform(165.9,4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#C6C6C6").beginStroke().moveTo(0,3).lineTo(-2.9,0.4).curveTo(-3.4,-0.2,-3.3,-0.9).curveTo(-3.3,-1.7,-2.7,-2.2).lineTo(-1.9,-2.9).curveTo(-1.3,-3.4,-0.6,-3.4).curveTo(0.2,-3.3,0.7,-2.8).lineTo(2.9,-0.2).curveTo(3.4,0.4,3.4,1.1).curveTo(3.3,1.9,2.7,2.4).lineTo(2.2,3).curveTo(1.7,3.4,1.1,3.4).lineTo(0.9,3.4).curveTo(0.3,3.4,0,3).closePath();
	this.shape_16.setTransform(126.9,-12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#999999").beginStroke().moveTo(17.4,21.1).lineTo(16.4,19.9).lineTo(-19.3,-18.2).curveTo(-19.8,-18.8,-19.7,-19.5).curveTo(-19.7,-20.3,-19.2,-20.8).lineTo(-19,-20.9).curveTo(-18.5,-21.4,-17.8,-21.4).curveTo(-17,-21.4,-16.5,-20.9).lineTo(17.1,15.1).curveTo(18.1,16.2,18.9,17.3).curveTo(20.1,19,19.6,19.5).lineTo(18.4,21.3).curveTo(18.4,21.3,18.3,21.3).curveTo(18.3,21.4,18.2,21.4).curveTo(18.2,21.4,18.1,21.4).curveTo(18.1,21.4,18,21.4).curveTo(17.7,21.4,17.4,21.1).closePath();
	this.shape_17.setTransform(107.7,-33.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#999999").beginStroke().moveTo(10.1,25.6).lineTo(9.5,24.2).lineTo(-11.9,-23.5).curveTo(-12.2,-24.2,-11.9,-24.9).curveTo(-11.6,-25.6,-11,-25.9).lineTo(-10.8,-26).curveTo(-10.1,-26.3,-9.4,-26).curveTo(-8.7,-25.7,-8.4,-25.1).lineTo(11.7,19.8).curveTo(12.1,20.6,12,23.1).curveTo(11.8,25.7,11.2,26).lineTo(11,26.1).lineTo(10.7,26.2).curveTo(10.3,26.2,10.1,25.6).closePath();
	this.shape_18.setTransform(105,-21.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,12.2).lineTo(-8.3,-1.7).curveTo(2.4,-12.2,3.3,-13.2).curveTo(3.9,-13.9,6.1,-12.6).curveTo(8.1,-11.4,8.2,-10.8).curveTo(8.4,-10.4,8.1,-8.4).curveTo(7.9,-6.2,7.3,-3.8).curveTo(6.4,-0.1,3.2,10.7).curveTo(2.7,12.5,1.8,13.2).curveTo(1.5,13.5,1.1,13.5).curveTo(0.4,13.5,-0.4,12.2).closePath();
	this.shape_19.setTransform(121.2,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1.8,4.5).curveTo(-2.4,4.1,-2.5,3.3).lineTo(-3.3,-2.5).curveTo(-3.4,-3.2,-3,-3.8).curveTo(-2.5,-4.4,-1.8,-4.5).lineTo(0.4,-4.8).curveTo(1.1,-4.9,1.7,-4.5).curveTo(2.3,-4,2.4,-3.3).lineTo(3.3,2.5).curveTo(3.4,3.2,3,3.8).curveTo(2.5,4.4,1.8,4.5).lineTo(-0.4,4.8).lineTo(-0.7,4.8).curveTo(-1.3,4.8,-1.8,4.5).closePath();
	this.shape_20.setTransform(173.5,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-2,12).lineTo(-4.4,6.7).lineTo(-4.4,-8.7).lineTo(4.4,-12).lineTo(4.4,12).closePath();
	this.shape_21.setTransform(162.5,-27.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#999999").beginStroke().moveTo(34.1,35.3).lineTo(-37.8,-33.7).curveTo(-39.4,-35.1,-39,-36).curveTo(-38.8,-36.7,-37.8,-36.7).lineTo(-35.6,-36.9).curveTo(-33.7,-37,-32.2,-36.9).curveTo(-30.6,-36.9,-29,-35.4).curveTo(-28,-34.4,-26.3,-32.2).lineTo(37.6,32).curveTo(40.2,34.7,38.2,36.5).curveTo(37.6,37,37,37).curveTo(35.8,37,34.1,35.3).closePath();
	this.shape_22.setTransform(125.4,-34.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-7.9,3.6).lineTo(6.7,-5.6).lineTo(7.9,-3.5).lineTo(-6.6,5.6).closePath();
	this.shape_23.setTransform(169.3,-38.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.6,7.4).curveTo(1.9,7.2,1.6,6.6).lineTo(-4.7,-4.9).curveTo(-5,-5.5,-4.8,-6.2).curveTo(-4.6,-6.9,-4,-7.3).curveTo(-3.3,-7.6,-2.6,-7.4).curveTo(-1.9,-7.2,-1.6,-6.6).lineTo(4.7,4.9).curveTo(5,5.6,4.8,6.3).curveTo(4.6,6.9,4,7.3).curveTo(3.6,7.5,3.1,7.5).lineTo(2.6,7.4).closePath();
	this.shape_24.setTransform(117,8.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#F4F4F4").beginStroke().moveTo(3.7,61).lineTo(-56.9,-55.7).curveTo(-56.1,-59.2,-52.8,-61).curveTo(-49.9,-62.6,-45.8,-62.6).curveTo(-40.8,-62.6,-34.9,-60.6).curveTo(-26.8,-57.9,-17.7,-51.7).curveTo(4.7,-36.3,21.7,-21.5).curveTo(51.7,4.6,54.5,20.5).curveTo(56.1,29.6,56.5,36).curveTo(56.7,39.7,56.5,44.1).curveTo(56.9,44.7,56.9,46.9).curveTo(56.9,49.1,56.4,49.9).curveTo(53.5,50.7,50.5,52.7).curveTo(44.4,56.6,43.4,62.6).closePath();
	this.shape_25.setTransform(126.5,-20.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_26.setTransform(-107.1,56.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.7,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_27.setTransform(69.2,57.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).lineTo(-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3.1,-4.6).curveTo(20.8,-6.7,22.6,-6.8).lineTo(22.7,-4).curveTo(19,-4.5,16.4,-4.3).lineTo(7.4,-3.2).lineTo(-3.9,-1.8).curveTo(-8.5,-1.3,-18.5,-0.6).curveTo(-19.9,0.6,-20.2,1.1).curveTo(-20.7,1.7,-20.7,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.8).closePath();
	this.shape_28.setTransform(-140.2,-60.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.4,1.9).closePath();
	this.shape_29.setTransform(-114,-65.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.2,13.6).lineTo(-1.2,10.8).curveTo(-1.2,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_30.setTransform(-160.7,-14.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.2,-1.3,3.1,-1.2).lineTo(-3.1,1.2).closePath();
	this.shape_31.setTransform(-160.6,7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#999999").beginStroke().moveTo(-2.9,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0.1,0.5).lineTo(-0.8,0.5).curveTo(-2,0.5,-2.9,0.3).closePath();
	this.shape_32.setTransform(-160.8,-0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).curveTo(-3.3,-4.9,-3.1,-5).lineTo(2.4,-6.7).curveTo(3,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,3.9,3.3,4.5).curveTo(2.2,5.1,-1.4,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_33.setTransform(-160.8,2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.6,-12.9,0.9,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.7,6.3,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_34.setTransform(-156.5,-41.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(5.1,-14.4,5.6,-11.1).curveTo(6.2,-7.1,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_35.setTransform(-157.7,-41.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).lineTo(-2.6,5.4).curveTo(-2.9,5.1,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).lineTo(-1.8,-2.2).curveTo(-1.6,-2.7,-1.4,-2.9).curveTo(-1.1,-3.1,1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1,4.2).lineTo(-0.4,4.4).curveTo(-0.3,4.8,-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_36.setTransform(-179.2,-15.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.5,-25.5).curveTo(9.1,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0,5.7,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_37.setTransform(-169.5,-39.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(3,-16.1,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_38.setTransform(-179,22.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_39.setTransform(-178.5,40.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.8,0.5,-4.8,-1.7).lineTo(4.8,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_40.setTransform(-177.5,52.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_41.setTransform(-173.8,56.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.7).lineTo(-0.7,-8.4).lineTo(0.7,8.4).curveTo(-0,5.6,-0.5,-1.7).closePath();
	this.shape_42.setTransform(-172.9,48.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.8).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.5,-6.3,4.6,-6.6).lineTo(5.2,-6.5).curveTo(6,-6.3,6,-5.2).lineTo(6.8,9.7).closePath().moveTo(-4.5,-6.9).curveTo(-6.1,-7.4,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.9,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.8).lineTo(-4.5,-6.9).closePath();
	this.shape_43.setTransform(-174.4,46.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.2,-1.5,1.9).lineTo(-1.8,-0.9).curveTo(-2,-3.1,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_44.setTransform(-180.9,46.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,2.8,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_45.setTransform(-99,2.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.3,-4.4,7.7).curveTo(-5,7.2,-5,6.3).curveTo(-5.4,2.2,-5.2,-2.4).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.4,-7.6).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.5).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.2,4.6,7.7).curveTo(4,8.3,3.3,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_46.setTransform(-99.1,2.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-46.7,64.9).curveTo(-48.5,64.1,-49.5,62).curveTo(-49.9,61.8,-50.4,61.2).curveTo(-51.4,60.2,-52,58.5).curveTo(-52.6,56.4,-53,53.3).lineTo(-53.4,48).curveTo(-53.7,44.9,-52.8,42.1).lineTo(-51.9,39.9).curveTo(-52.7,23.7,-52.7,18.3).curveTo(-52.7,14.9,-52.2,6.7).lineTo(-51.7,-0.9).lineTo(-47.5,-7.9).curveTo(-46.5,-12.9,-43,-27.3).curveTo(-40.8,-36.4,-36.6,-48.8).curveTo(-33.3,-58.5,-32.4,-60.5).curveTo(-31.9,-61.4,-31.4,-61.8).curveTo(-30.7,-62.2,-29.1,-62.4).curveTo(-21.9,-63.3,5.9,-64.5).lineTo(32.3,-65.5).curveTo(35.1,-65.6,36.6,-65.3).curveTo(38.7,-65,40.7,-63.5).curveTo(42.4,-62.3,43.5,-61.2).lineTo(45.6,-59.2).curveTo(47.3,-57.6,49.7,-52.7).curveTo(50.8,-50.3,51.9,-44.6).curveTo(53.5,-36.9,53.5,-29.7).lineTo(53.5,-12.7).curveTo(53.4,-9.9,52.8,-8.8).curveTo(49.5,-2.2,49.5,-0.1).lineTo(49.5,6.5).curveTo(49.5,8,49,8.9).curveTo(48.5,9.7,48.5,10.5).lineTo(48.5,25.4).lineTo(38.5,25.7).lineTo(35.5,26).lineTo(35.5,28.3).curveTo(24.9,28.4,20,29).curveTo(13.4,29.9,10.6,31.2).curveTo(4.2,34.3,-0.8,42.9).curveTo(-3,46.8,-6.1,53.4).curveTo(-7,54.5,-8.5,54.5).lineTo(-16.6,54.5).lineTo(-18.2,54.1).lineTo(-20.8,54.5).lineTo(-39.5,54.5).lineTo(-39.5,61.9).curveTo(-39.5,65.5,-42.8,65.5).curveTo(-45.2,65.5,-46.7,64.9).closePath().moveTo(10.4,-55.4).curveTo(-9.1,-54.6,-15.5,-53.6).curveTo(-20.9,-52.8,-22.5,-51.9).curveTo(-23.7,-51.1,-25,-48.5).curveTo(-26,-46.5,-28.2,-36.4).curveTo(-30.5,-26.4,-30.9,-22.1).curveTo(-31.3,-18.1,-31.6,-10.8).curveTo(-32,-3.9,-32,-1.5).lineTo(-31.8,-0.4).lineTo(-30.6,-0.7).lineTo(9.9,-16.4).curveTo(14.6,-18.1,27.1,-20.3).lineTo(29.6,-20.8).curveTo(30.8,-21,31.2,-21.4).curveTo(31.4,-21.7,31.4,-22.3).lineTo(32.1,-51.8).curveTo(32.1,-54.1,31.3,-55).curveTo(30.6,-55.8,28.6,-56).curveTo(20.1,-55.8,10.4,-55.4).closePath();
	this.shape_47.setTransform(-129.9,-6.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#969696").beginStroke().moveTo(-32,25.1).lineTo(-37.7,20.4).lineTo(-41.4,-3.4).lineTo(-20,-29.6).lineTo(26.6,-28.1).lineTo(37.7,-15.6).lineTo(37.9,-8.4).lineTo(36,-6.5).lineTo(40.1,-0.1).lineTo(40.5,-1.3).curveTo(40,4.8,39.9,8.7).curveTo(39.9,11.1,41.5,12.4).curveTo(37.2,17.9,33.4,22.2).curveTo(32.1,23.7,32.1,25.5).curveTo(32,27.1,33,28.5).lineTo(-19.1,29.6).closePath();
	this.shape_48.setTransform(-119,36.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-4,18.5).lineTo(-4,-18.5).lineTo(4,-18.5).lineTo(4,18.5).closePath();
	this.shape_49.setTransform(-64.8,-7.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-2.7,-5.5).curveTo(-0.5,-5.5,1.2,-3.9).curveTo(2.8,-2.3,2.8,-0).curveTo(2.8,2.3,1.2,3.9).curveTo(-0.5,5.5,-2.7,5.5).closePath();
	this.shape_50.setTransform(-49.9,-5.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-78.8,-2).lineTo(78.1,-2.6).lineTo(78.8,2).lineTo(-78.8,2.6).closePath();
	this.shape_51.setTransform(26.1,-6.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#999999").beginStroke().moveTo(-78.9,-4.9).lineTo(78,-6.4).lineTo(78.9,4.9).lineTo(-78.9,6.4).closePath();
	this.shape_52.setTransform(26.3,-6.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-2.7,-5.5).curveTo(-0.5,-5.5,1.2,-3.9).curveTo(2.8,-2.3,2.8,0).curveTo(2.8,2.3,1.2,3.9).curveTo(-0.5,5.5,-2.7,5.5).closePath();
	this.shape_53.setTransform(-49.9,-39.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-76.4,-2).lineTo(75.8,-2.6).lineTo(76.4,2).lineTo(-76.4,2.6).closePath();
	this.shape_54.setTransform(23.8,-40.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#999999").beginStroke().moveTo(-0.7,44.9).lineTo(-2.6,-44.8).lineTo(1.2,-41.2).lineTo(2.7,44.9).closePath();
	this.shape_55.setTransform(-54.4,-28.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-74.9,2.5).curveTo(-76.6,1.4,-76.6,1).lineTo(-76.6,-0.1).lineTo(76,-3.5).lineTo(76.6,0.7).lineTo(-72.8,3.6).curveTo(-73.3,3.6,-74.9,2.5).closePath();
	this.shape_56.setTransform(19.5,-72.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(-1.8,4.5).curveTo(-0.2,4.5,0.9,3.3).curveTo(2,2.2,2,0.6).lineTo(2,-0.8).curveTo(1.9,-2.4,0.8,-3.5).curveTo(-0.4,-4.6,-2,-4.5).closePath();
	this.shape_57.setTransform(-50.8,-39.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,-4.5).curveTo(-0.4,-4.6,0.8,-3.5).curveTo(1.9,-2.4,2,-0.8).lineTo(2,0.6).curveTo(2,2.2,0.9,3.3).curveTo(-0.2,4.5,-1.8,4.5).closePath();
	this.shape_58.setTransform(-50.8,-39.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(-0.4,-18.2).lineTo(0.3,18.2);
	this.shape_59.setTransform(-61.2,-7.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(-0.3,-18.2).lineTo(0.4,18.2);
	this.shape_60.setTransform(-67.7,-7.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#999999").beginStroke().moveTo(-4.6,17).curveTo(-5.3,15.8,-5.3,14.7).lineTo(-5.8,-14.5).curveTo(-5.9,-15.5,-5.2,-16.8).curveTo(-4.5,-18.2,-3.7,-18.2).lineTo(2.9,-18.3).curveTo(3.8,-18.3,4.6,-17).curveTo(5.2,-15.8,5.3,-14.8).lineTo(5.9,14.5).curveTo(5.9,15.5,5.2,16.8).curveTo(4.5,18.1,3.6,18.2).lineTo(-2.9,18.3).curveTo(-3.8,18.3,-4.6,17).closePath();
	this.shape_61.setTransform(-64.4,-7.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#9E9E9E").beginStroke().moveTo(-71.6,33.2).lineTo(-72.9,29.8).lineTo(-125.7,31.8).lineTo(-143.4,27.4).lineTo(-148,21.8).lineTo(-150.1,-2.5).lineTo(-125.2,-32.5).lineTo(-70.3,-33.2).lineTo(-70.6,-25.8).lineTo(-68.8,-24.2).curveTo(-68.5,-23.9,-67.9,-20.4).curveTo(-67.9,-20.1,-66,-18.9).curveTo(-65.8,-18.8,-64.9,-9.6).lineTo(-63.9,-0.4).lineTo(-62.4,-0.4).lineTo(-62.6,-16.6).lineTo(-60.8,-19.7).lineTo(-61.3,-27.9).lineTo(-51.2,-26.9).lineTo(-49.4,-24.2).lineTo(-49.4,-18.2).lineTo(-45.8,-18.6).lineTo(-46.2,-24.5).lineTo(133,-25).lineTo(150.1,8.8).curveTo(147.3,9.1,144.1,9.2).curveTo(137.7,9.5,136.2,8.4).curveTo(135,7.4,133.8,4.2).curveTo(132.8,1.7,131.3,1.7).curveTo(130.6,1.7,129.4,2.6).lineTo(128.4,3.5).lineTo(128.4,7.4).lineTo(128.1,9).curveTo(127.4,10.7,125.6,11.5).curveTo(123.7,12.3,121.6,11.2).lineTo(119.8,9.9).curveTo(119.4,10.6,118.7,11.2).curveTo(117.2,12.5,116,12.6).curveTo(114.8,12.6,113.4,11.2).lineTo(112.3,9.8).curveTo(105.1,12.5,103.2,13).curveTo(102,13.2,76.4,21).curveTo(52.1,28.5,50.4,28.3).curveTo(47.1,28,38.9,27.4).curveTo(30.2,26.8,26.9,26.9).lineTo(12.9,27.5).curveTo(2.4,28.1,-0.6,28.1).curveTo(-2,28.1,-2.1,25.9).curveTo(-2.1,23.5,-4.1,23.4).curveTo(-5.8,23.9,-9.4,23.6).curveTo(-10.6,23.7,-10.8,22).curveTo(-11,20.3,-12.5,20.2).curveTo(-14.5,20.1,-14.4,16).curveTo(-14.4,15.1,-15.1,14.5).curveTo(-15.7,14,-16.8,14).lineTo(-27.7,14.3).curveTo(-28.4,14.3,-28.4,17.2).curveTo(-28.4,20.2,-29.8,20.2).lineTo(-48.3,20.8).curveTo(-49.1,20.6,-49.9,17.1).curveTo(-50.6,13.9,-52.8,15.2).curveTo(-53.4,15.5,-54,21.8).curveTo(-54.6,27.7,-56,27.7).curveTo(-57.5,27.5,-60.9,29.5).lineTo(-66.8,33.2).closePath().moveTo(-13.4,-4.7).lineTo(-12.6,18.6).lineTo(-10.1,18.5).lineTo(-10.8,-4.7).closePath().moveTo(-10,-4.8).lineTo(-9.3,18.5).lineTo(-6.7,18.4).lineTo(-7.4,-4.9).closePath().moveTo(-6.4,-5.1).lineTo(-5.9,18.2).lineTo(12,17.5).lineTo(11.5,-5.8).closePath().moveTo(15.5,-5.5).lineTo(16.3,17.8).lineTo(18.8,17.7).lineTo(18.1,-5.5).closePath().moveTo(12.2,-5.5).lineTo(13,17.8).lineTo(15.5,17.7).lineTo(14.8,-5.5).closePath().moveTo(-10.4,-6.7).lineTo(-8.6,-6.7).lineTo(-8.6,-10.1).lineTo(-10.4,-10.1).closePath().moveTo(2.2,-7.3).lineTo(3.7,-10.5).lineTo(0.2,-10.5).closePath();
	this.shape_62.setTransform(-8.2,34.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#999999").beginStroke().moveTo(-76.6,-4.9).lineTo(75.2,-6.5).lineTo(76.7,4.7).lineTo(-76.6,6.5).closePath();
	this.shape_63.setTransform(24,-40.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-81.9,-43.1).lineTo(70.7,-46.6).lineTo(81.9,43.1).lineTo(-80,46.6).closePath();
	this.shape_64.setTransform(24.8,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 3
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.4,0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_65.setTransform(2.8,86.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(1));

	// Capa 2
	this.instance = new lib.basureroconductor();
	this.instance.parent = this;
	this.instance.setTransform(-127.4,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-83.1,372.7,180.6);


// stage content:
(lib.camionbasurero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_124 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(1));

	// llanta
	this.instance = new lib.llanta();
	this.instance.parent = this;
	this.instance.setTransform(1306.3,399.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360,x:708.5},33).wait(52).to({rotation:-1440,x:-127.3},33).wait(7));

	// llanta
	this.instance_1 = new lib.llanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1129.3,397.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-1080,x:531.5},33).wait(52).to({rotation:-2160,x:-304.3},33).wait(7));

	// camion
	this.instance_2 = new lib.basurerocamion();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1236.6,341.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:638.9},33).wait(52).to({x:-196.6},33).wait(7));

	// Capa 11
	this.instance_3 = new lib.basurerobasura();
	this.instance_3.parent = this;
	this.instance_3.setTransform(822.3,258.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({x:772.3,y:308.4},9).to({_off:true},1).wait(44));

	// Capa 10
	this.instance_4 = new lib.basurerobasura();
	this.instance_4.parent = this;
	this.instance_4.setTransform(822.3,258.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({x:772.3,y:308.4},9).to({_off:true},1).wait(49));

	// Capa 9
	this.instance_5 = new lib.basurerobasura();
	this.instance_5.parent = this;
	this.instance_5.setTransform(822.3,258.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({x:772.3,y:308.4},9).to({_off:true},1).wait(56));

	// Capa 8
	this.instance_6 = new lib.basurerobasura();
	this.instance_6.parent = this;
	this.instance_6.setTransform(822.3,258.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({x:772.3,y:308.4},7).to({_off:true},1).wait(61));

	// handss
	this.instance_7 = new lib.basurerohandss();
	this.instance_7.parent = this;
	this.instance_7.setTransform(923.4,288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({regX:-0.1,regY:0.1,rotation:-41.7,x:916.1,y:303.1},6).to({regX:0.1,regY:0.2,rotation:72.5,x:884.2,y:276.8},6).wait(36).to({regX:-0.1,regY:0.1,rotation:-41.7,x:916.1,y:303.1},8).to({regX:0,regY:0,rotation:0,x:923.4,y:288.5},9).wait(27));

	// bodyrock
	this.instance_8 = new lib.basurerobodyrock();
	this.instance_8.parent = this;
	this.instance_8.setTransform(932.8,273.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({regX:-0.1,regY:0.1,rotation:-41.7,x:913.1,y:285.7},6).to({regX:0,rotation:-2.5,x:898.8,y:272.8},6).wait(36).to({regX:-0.1,rotation:-41.7,x:913.1,y:285.7},8).to({regX:0,regY:0,rotation:0,x:932.8,y:273.6},9).wait(27));

	// legs
	this.instance_9 = new lib.basurerolegs();
	this.instance_9.parent = this;
	this.instance_9.setTransform(931,331.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({x:899},6).wait(36).to({x:931},8).wait(36));

	// tapa
	this.instance_10 = new lib.basurerotapa();
	this.instance_10.parent = this;
	this.instance_10.setTransform(910.6,327);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33).to({alpha:0},6).wait(50).to({alpha:1},5).wait(31));

	// bote-2
	this.instance_11 = new lib.basurerobote2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(902.4,333.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(36).to({y:323.9},3).to({rotation:-105,x:854.4,y:277.8},6).wait(36).to({rotation:0,x:902.4,y:323.9},8).to({y:333.9},5).wait(31));

	// handss
	this.instance_12 = new lib.basurerohandss();
	this.instance_12.parent = this;
	this.instance_12.setTransform(927.9,291.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(33).to({regX:-0.1,regY:0.1,rotation:-41.7,x:917.6,y:305.8},6).to({regX:0.1,regY:0.2,rotation:72.5,x:884.2,y:272.9},6).wait(36).to({y:273.8},0).to({regX:-0.1,regY:0.1,rotation:-41.7,x:913.1,y:303.1},8).to({regX:0,regY:0,rotation:0,x:923.4,y:282.5},9).wait(27));

	// fonso
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-530,8).lineTo(-530,-8).lineTo(530,-8).lineTo(530,8).closePath();
	this.shape.setTransform(530,363.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.3).curveTo(-3.6,2.4,-3.9,0.8).curveTo(-4.2,-0.9,-3.3,-2.2).curveTo(-2.4,-3.6,-0.7,-3.9).curveTo(0.9,-4.2,2.3,-3.3).curveTo(3.6,-2.4,3.9,-0.8).curveTo(4.2,0.9,3.3,2.2).curveTo(2.4,3.6,0.8,3.9).lineTo(-0,4).curveTo(-1.2,4,-2.2,3.3).closePath();
	this.shape_1.setTransform(178.2,330);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,4.6).curveTo(-3.9,4.1,-3.5,2.4).curveTo(-3.1,0.7,-1.8,-1.2).curveTo(-0.5,-3.1,1,-4.1).curveTo(2.4,-5.2,3.2,-4.7).curveTo(3.9,-4.2,3.5,-2.5).curveTo(3.1,-0.7,1.8,1.2).curveTo(0.5,3.1,-1,4.1).curveTo(-1.9,4.8,-2.6,4.8).curveTo(-2.9,4.8,-3.1,4.6).closePath();
	this.shape_2.setTransform(181.4,325.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,4.7).curveTo(-3.9,4.2,-3.5,2.4).curveTo(-3.1,0.7,-1.8,-1.2).curveTo(-0.5,-3.1,1,-4.1).curveTo(2.4,-5.2,3.2,-4.7).curveTo(3.9,-4.1,3.5,-2.4).curveTo(3.1,-0.7,1.8,1.2).curveTo(0.5,3.1,-1,4.2).curveTo(-1.9,4.8,-2.6,4.8).curveTo(-2.9,4.8,-3.1,4.7).closePath();
	this.shape_3.setTransform(175.1,334.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(2.5,3.5).curveTo(0.7,3.1,-1.2,1.8).curveTo(-3.1,0.5,-4.2,-1).curveTo(-5.1,-2.4,-4.6,-3.2).curveTo(-4.2,-3.9,-2.5,-3.5).curveTo(-0.8,-3.1,1.2,-1.8).curveTo(3.1,-0.5,4.2,1).curveTo(5.1,2.4,4.6,3.1).curveTo(4.3,3.6,3.5,3.6).lineTo(2.5,3.5).closePath();
	this.shape_4.setTransform(182.9,333.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(2.4,3.5).curveTo(0.7,3.1,-1.2,1.8).curveTo(-3.1,0.5,-4.1,-1).curveTo(-5.2,-2.4,-4.7,-3.2).curveTo(-4.1,-3.9,-2.4,-3.5).curveTo(-0.7,-3.1,1.2,-1.8).curveTo(3.1,-0.5,4.2,1).curveTo(5.2,2.4,4.7,3.1).curveTo(4.3,3.6,3.5,3.6).lineTo(2.4,3.5).closePath();
	this.shape_5.setTransform(173.6,326.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,2.3).curveTo(-5.3,2,-5.5,1).curveTo(-5.7,0.2,-4.2,-0.8).curveTo(-2.7,-1.6,-0.4,-2.1).curveTo(1.9,-2.5,3.6,-2.2).curveTo(5.3,-2,5.5,-1.1).curveTo(5.7,-0.2,4.2,0.7).curveTo(2.7,1.7,0.4,2.1).curveTo(-1,2.4,-2.1,2.4).lineTo(-3.6,2.3).closePath();
	this.shape_6.setTransform(183.8,328.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,2.3).curveTo(-5.4,1.9,-5.5,1).curveTo(-5.7,0.2,-4.2,-0.8).curveTo(-2.7,-1.7,-0.4,-2.1).curveTo(1.9,-2.6,3.6,-2.2).curveTo(5.3,-1.9,5.5,-1.1).curveTo(5.7,-0.2,4.2,0.7).curveTo(2.7,1.7,0.4,2.1).curveTo(-1,2.4,-2.1,2.4).lineTo(-3.6,2.3).closePath();
	this.shape_7.setTransform(172.7,331.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,4.2).curveTo(-1.7,2.7,-2.1,0.4).curveTo(-2.5,-1.9,-2.3,-3.6).curveTo(-1.9,-5.3,-1,-5.5).curveTo(-0.2,-5.7,0.8,-4.2).curveTo(1.6,-2.7,2.1,-0.4).curveTo(2.6,1.9,2.2,3.6).curveTo(2,5.4,1,5.5).lineTo(0.8,5.5).curveTo(0.1,5.5,-0.8,4.2).closePath();
	this.shape_8.setTransform(179.3,335.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,4.2).curveTo(-1.6,2.7,-2.1,0.4).curveTo(-2.6,-1.8,-2.2,-3.6).curveTo(-1.9,-5.4,-1,-5.5).curveTo(-0.2,-5.7,0.8,-4.2).curveTo(1.7,-2.7,2.1,-0.4).curveTo(2.5,1.9,2.3,3.6).curveTo(1.9,5.4,1.1,5.5).lineTo(0.9,5.5).curveTo(0.1,5.5,-0.7,4.2).closePath();
	this.shape_9.setTransform(177.2,324.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,5.5).curveTo(-1.9,5.4,-2.2,3.6).curveTo(-2.5,1.9,-2.1,-0.4).curveTo(-1.7,-2.7,-0.7,-4.2).curveTo(0.1,-5.7,1,-5.5).curveTo(1.9,-5.4,2.2,-3.6).curveTo(2.5,-1.9,2.1,0.4).curveTo(1.7,2.7,0.8,4.2).curveTo(-0,5.5,-0.8,5.5).lineTo(-1,5.5).closePath();
	this.shape_10.setTransform(179.3,324.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,5.6).curveTo(-1.9,5.4,-2.2,3.7).curveTo(-2.5,1.9,-2.1,-0.4).curveTo(-1.7,-2.7,-0.8,-4.2).curveTo(0.1,-5.7,1,-5.6).curveTo(1.9,-5.3,2.2,-3.6).curveTo(2.5,-1.9,2.1,0.4).curveTo(1.7,2.7,0.8,4.2).curveTo(-0.1,5.6,-0.9,5.6).lineTo(-1,5.6).closePath();
	this.shape_11.setTransform(177.2,335.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,2.1).curveTo(-2.7,1.7,-4.2,0.8).curveTo(-5.7,-0.1,-5.5,-1).curveTo(-5.4,-1.9,-3.6,-2.2).curveTo(-1.9,-2.5,0.4,-2.1).curveTo(2.7,-1.7,4.2,-0.7).curveTo(5.7,0.2,5.5,1).curveTo(5.4,1.9,3.6,2.2).lineTo(2.1,2.3).curveTo(0.9,2.3,-0.4,2.1).closePath();
	this.shape_12.setTransform(183.8,331);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,2.1).curveTo(-2.7,1.7,-4.2,0.8).curveTo(-5.7,-0.1,-5.6,-1).curveTo(-5.3,-1.8,-3.6,-2.2).curveTo(-1.9,-2.5,0.4,-2.1).curveTo(2.7,-1.7,4.2,-0.8).curveTo(5.7,0.2,5.6,1).curveTo(5.4,1.9,3.7,2.2).lineTo(2,2.3).curveTo(0.9,2.3,-0.4,2.1).closePath();
	this.shape_13.setTransform(172.7,329);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,3.2).curveTo(-5.1,2.5,-4.1,1).curveTo(-3.1,-0.4,-1.2,-1.8).curveTo(0.7,-3.1,2.4,-3.5).curveTo(4.1,-3.9,4.6,-3.2).curveTo(5.1,-2.5,4.1,-1).curveTo(3.1,0.5,1.2,1.8).curveTo(-0.7,3.1,-2.4,3.5).lineTo(-3.5,3.7).curveTo(-4.3,3.7,-4.6,3.2).closePath();
	this.shape_14.setTransform(182.9,326.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,3.2).curveTo(-5.1,2.5,-4.1,1).curveTo(-3.1,-0.5,-1.2,-1.8).curveTo(0.7,-3.1,2.4,-3.5).curveTo(4.1,-3.9,4.6,-3.2).curveTo(5.1,-2.5,4.1,-1).curveTo(3.1,0.4,1.2,1.7).curveTo(-0.7,3.1,-2.4,3.5).lineTo(-3.5,3.7).curveTo(-4.3,3.7,-4.6,3.2).closePath();
	this.shape_15.setTransform(173.6,333.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(1,4.1).curveTo(-0.4,3.1,-1.8,1.2).curveTo(-3.1,-0.7,-3.5,-2.4).curveTo(-3.9,-4.2,-3.2,-4.7).curveTo(-2.5,-5.2,-1,-4.1).curveTo(0.5,-3.1,1.8,-1.2).curveTo(3.1,0.7,3.5,2.4).curveTo(3.9,4.1,3.2,4.6).curveTo(2.9,4.8,2.6,4.8).curveTo(2,4.8,1,4.1).closePath();
	this.shape_16.setTransform(181.4,334.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(1,4.1).curveTo(-0.4,3.2,-1.7,1.2).curveTo(-3.1,-0.7,-3.5,-2.4).curveTo(-3.9,-4.1,-3.2,-4.6).curveTo(-2.5,-5.1,-1,-4.1).curveTo(0.5,-3.1,1.8,-1.2).curveTo(3.1,0.7,3.5,2.4).curveTo(3.9,4.1,3.2,4.6).curveTo(2.9,4.8,2.6,4.8).curveTo(2,4.8,1,4.1).closePath();
	this.shape_17.setTransform(175.1,325.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,1.8).curveTo(-2.1,1.2,-2.8,-0.3).lineTo(-3.3,-1.7).lineTo(-1.9,-2.1).curveTo(-0.2,-2.4,0.9,-1.8).curveTo(2.8,-0.9,3.3,1.7).curveTo(2,2.2,0.9,2.2).curveTo(-0.1,2.2,-0.9,1.8).closePath();
	this.shape_18.setTransform(175,344.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.2).lineTo(-4.3,1.4).curveTo(-4,0.6,-3.4,-0.2).curveTo(-2.3,-2,-0.7,-2.4).curveTo(0.8,-2.9,2.7,-2.1).curveTo(3.7,-1.8,4.3,-1.3).lineTo(3.5,0.3).curveTo(2.3,1.9,0.8,2.4).curveTo(0.2,2.6,-0.5,2.6).curveTo(-1.5,2.6,-2.7,2.2).closePath();
	this.shape_19.setTransform(182.8,346);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,13.2).lineTo(-0.4,-13.2).lineTo(0.5,-13.2).lineTo(0.5,13.2).closePath();
	this.shape_20.setTransform(178.3,347);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.3).curveTo(-3.6,2.4,-3.9,0.8).curveTo(-4.2,-0.9,-3.3,-2.2).curveTo(-2.4,-3.6,-0.7,-3.9).curveTo(0.9,-4.2,2.3,-3.3).curveTo(3.6,-2.4,3.9,-0.8).curveTo(4.3,0.9,3.3,2.3).curveTo(2.4,3.6,0.8,3.9).lineTo(-0,4).curveTo(-1.2,4,-2.2,3.3).closePath();
	this.shape_21.setTransform(213.5,328.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,4.7).curveTo(-3.9,4.2,-3.5,2.4).curveTo(-3.1,0.7,-1.8,-1.2).curveTo(-0.5,-3.1,1,-4.1).curveTo(2.4,-5.2,3.2,-4.7).curveTo(3.9,-4.2,3.5,-2.5).curveTo(3.1,-0.7,1.8,1.2).curveTo(0.5,3.1,-1,4.1).curveTo(-2,4.8,-2.6,4.8).curveTo(-2.9,4.8,-3.1,4.7).closePath();
	this.shape_22.setTransform(216.7,323.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,4.6).curveTo(-3.9,4.2,-3.5,2.5).curveTo(-3.1,0.7,-1.8,-1.2).curveTo(-0.5,-3.1,1,-4.2).curveTo(2.4,-5.1,3.2,-4.6).curveTo(3.9,-4.2,3.5,-2.5).curveTo(3.1,-0.7,1.8,1.2).curveTo(0.5,3.1,-1,4.2).curveTo(-1.9,4.8,-2.6,4.8).curveTo(-2.9,4.8,-3.1,4.6).closePath();
	this.shape_23.setTransform(210.4,332.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(2.4,3.5).curveTo(0.7,3.1,-1.2,1.8).curveTo(-3.1,0.5,-4.1,-1).curveTo(-5.2,-2.4,-4.7,-3.1).curveTo(-4.2,-3.9,-2.5,-3.5).curveTo(-0.7,-3.1,1.2,-1.8).curveTo(3.1,-0.5,4.1,1).curveTo(5.1,2.4,4.6,3.1).curveTo(4.3,3.6,3.5,3.6).lineTo(2.4,3.5).closePath();
	this.shape_24.setTransform(218.2,331.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#494A4E").beginStroke().moveTo(2.5,3.5).curveTo(0.7,3.1,-1.2,1.8).curveTo(-3.1,0.5,-4.2,-1).curveTo(-5.2,-2.4,-4.6,-3.1).curveTo(-4.1,-3.9,-2.5,-3.5).curveTo(-0.8,-3.1,1.2,-1.8).curveTo(3.1,-0.5,4.1,1).curveTo(5.1,2.4,4.6,3.2).curveTo(4.3,3.6,3.5,3.6).lineTo(2.5,3.5).closePath();
	this.shape_25.setTransform(208.9,324.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,2.3).curveTo(-5.4,1.9,-5.5,1.1).curveTo(-5.7,0.2,-4.2,-0.7).curveTo(-2.7,-1.6,-0.4,-2.1).curveTo(1.8,-2.6,3.6,-2.2).curveTo(5.3,-1.9,5.5,-1.1).curveTo(5.7,-0.2,4.2,0.8).curveTo(2.7,1.7,0.4,2.1).curveTo(-1,2.4,-2.2,2.4).lineTo(-3.6,2.3).closePath();
	this.shape_26.setTransform(219.1,327);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,2.3).curveTo(-5.3,1.9,-5.5,1).curveTo(-5.7,0.2,-4.2,-0.8).curveTo(-2.7,-1.6,-0.4,-2.1).curveTo(1.9,-2.6,3.6,-2.2).curveTo(5.3,-2,5.5,-1).curveTo(5.7,-0.2,4.2,0.8).curveTo(2.7,1.7,0.4,2.1).curveTo(-0.9,2.4,-2.1,2.4).lineTo(-3.6,2.3).closePath();
	this.shape_27.setTransform(208,329.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,4.2).curveTo(-1.6,2.7,-2.1,0.4).curveTo(-2.6,-1.8,-2.2,-3.6).curveTo(-1.9,-5.3,-1.1,-5.5).curveTo(-0.2,-5.7,0.8,-4.2).curveTo(1.7,-2.7,2.1,-0.4).curveTo(2.5,1.9,2.3,3.6).curveTo(1.9,5.3,1.1,5.5).lineTo(0.9,5.5).curveTo(0.1,5.5,-0.7,4.2).closePath();
	this.shape_28.setTransform(214.6,333.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,4.2).curveTo(-1.7,2.7,-2.1,0.4).curveTo(-2.5,-1.9,-2.2,-3.6).curveTo(-1.9,-5.4,-1.1,-5.5).curveTo(-0.2,-5.7,0.7,-4.2).curveTo(1.7,-2.7,2.1,-0.4).curveTo(2.5,1.9,2.2,3.6).curveTo(1.9,5.3,1.1,5.5).lineTo(0.9,5.5).curveTo(0.1,5.5,-0.7,4.2).closePath();
	this.shape_29.setTransform(212.5,322.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,5.6).curveTo(-1.9,5.4,-2.2,3.7).curveTo(-2.5,1.9,-2.1,-0.4).curveTo(-1.7,-2.7,-0.7,-4.2).curveTo(0.1,-5.7,1,-5.5).curveTo(1.9,-5.3,2.2,-3.6).curveTo(2.5,-1.9,2.1,0.4).curveTo(1.7,2.7,0.8,4.2).curveTo(-0.1,5.6,-0.8,5.6).lineTo(-1,5.6).closePath();
	this.shape_30.setTransform(214.6,322.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,5.5).curveTo(-1.9,5.3,-2.2,3.6).curveTo(-2.5,1.9,-2.1,-0.4).curveTo(-1.7,-2.7,-0.8,-4.2).curveTo(0.2,-5.7,1,-5.5).curveTo(1.9,-5.4,2.2,-3.6).curveTo(2.5,-1.9,2.1,0.4).curveTo(1.7,2.7,0.8,4.2).curveTo(-0.1,5.5,-0.9,5.5).lineTo(-1,5.5).closePath();
	this.shape_31.setTransform(212.5,333.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,2.1).curveTo(-2.7,1.7,-4.2,0.8).curveTo(-5.7,-0.1,-5.5,-1).curveTo(-5.4,-1.9,-3.6,-2.2).curveTo(-1.9,-2.5,0.4,-2.1).curveTo(2.7,-1.7,4.2,-0.7).curveTo(5.7,0.2,5.5,1).curveTo(5.4,1.9,3.6,2.2).lineTo(2.1,2.3).curveTo(0.9,2.3,-0.4,2.1).closePath();
	this.shape_32.setTransform(219.1,329.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,2.1).curveTo(-2.7,1.7,-4.2,0.8).curveTo(-5.7,-0.2,-5.5,-1).curveTo(-5.4,-1.9,-3.6,-2.2).curveTo(-1.9,-2.5,0.4,-2.1).curveTo(2.7,-1.7,4.2,-0.8).curveTo(5.7,0.1,5.5,1).curveTo(5.4,1.9,3.6,2.2).lineTo(2.1,2.3).curveTo(1,2.3,-0.4,2.1).closePath();
	this.shape_33.setTransform(208,327.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,3.2).curveTo(-5.1,2.5,-4.1,1).curveTo(-3.2,-0.4,-1.2,-1.8).curveTo(0.7,-3.1,2.4,-3.5).curveTo(4.1,-3.9,4.6,-3.2).curveTo(5.1,-2.5,4.1,-1).curveTo(3.1,0.5,1.2,1.8).curveTo(-0.7,3.1,-2.4,3.5).lineTo(-3.5,3.7).curveTo(-4.3,3.7,-4.6,3.2).closePath();
	this.shape_34.setTransform(218.2,324.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,3.2).curveTo(-5.1,2.5,-4.1,1).curveTo(-3.1,-0.5,-1.2,-1.8).curveTo(0.7,-3.1,2.4,-3.5).curveTo(4.1,-3.9,4.6,-3.2).curveTo(5.1,-2.5,4.1,-1).curveTo(3.1,0.4,1.2,1.8).curveTo(-0.7,3.1,-2.4,3.5).lineTo(-3.5,3.7).curveTo(-4.3,3.7,-4.6,3.2).closePath();
	this.shape_35.setTransform(208.9,331.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#494A4E").beginStroke().moveTo(1,4.1).curveTo(-0.4,3.1,-1.8,1.2).curveTo(-3.1,-0.7,-3.5,-2.4).curveTo(-3.9,-4.1,-3.2,-4.6).curveTo(-2.5,-5.1,-1,-4.1).curveTo(0.5,-3.1,1.8,-1.2).curveTo(3.1,0.7,3.5,2.4).curveTo(3.9,4.1,3.2,4.6).curveTo(3,4.8,2.6,4.8).curveTo(2,4.8,1,4.1).closePath();
	this.shape_36.setTransform(216.7,332.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#494A4E").beginStroke().moveTo(1,4.1).curveTo(-0.5,3.1,-1.8,1.2).curveTo(-3.1,-0.7,-3.5,-2.4).curveTo(-3.9,-4.1,-3.2,-4.7).curveTo(-2.5,-5.2,-1,-4.1).curveTo(0.4,-3.1,1.8,-1.2).curveTo(3.1,0.7,3.5,2.4).curveTo(3.9,4.1,3.2,4.6).curveTo(2.9,4.8,2.6,4.8).curveTo(2,4.8,1,4.1).closePath();
	this.shape_37.setTransform(210.4,323.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,1.8).curveTo(-2.1,1.2,-2.8,-0.3).lineTo(-3.3,-1.7).lineTo(-1.9,-2.1).curveTo(-0.2,-2.4,0.9,-1.8).curveTo(2.1,-1.2,2.8,0.3).curveTo(3.2,1,3.3,1.6).curveTo(2,2.2,0.9,2.2).curveTo(-0.1,2.2,-0.9,1.8).closePath();
	this.shape_38.setTransform(210.3,342.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.2).lineTo(-4.3,1.4).curveTo(-4,0.6,-3.4,-0.2).curveTo(-2.3,-2,-0.7,-2.4).curveTo(0.8,-2.8,2.7,-2.1).curveTo(3.7,-1.8,4.3,-1.3).lineTo(3.5,0.2).curveTo(2.3,1.9,0.8,2.4).curveTo(0.2,2.6,-0.5,2.6).curveTo(-1.5,2.6,-2.7,2.2).closePath();
	this.shape_39.setTransform(218.1,344.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,13.2).lineTo(-0.4,-13.2).lineTo(0.4,-13.2).lineTo(0.4,13.2).closePath();
	this.shape_40.setTransform(213.6,345.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,3.1).curveTo(-3,1.7,-4.4,-1.4).lineTo(-5.4,-4.3).lineTo(-2.4,-4.3).curveTo(1,-4.1,3.1,-2.7).curveTo(5.5,-1,5.4,1.1).curveTo(5.3,2.2,4.8,2.9).curveTo(4.3,3.6,3.3,4).curveTo(2.7,4.3,2,4.3).curveTo(0.6,4.3,-1,3.1).closePath();
	this.shape_41.setTransform(144.7,328.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,4.9).lineTo(-3.7,4.1).curveTo(-4.4,3.5,-4.6,2.5).curveTo(-5.2,0.4,-3.2,-1.7).curveTo(-1.5,-3.5,1.8,-4.4).curveTo(3.5,-4.9,4.8,-5).lineTo(4.4,-2).curveTo(3.7,1.3,2,3.1).curveTo(0.3,5,-1.5,5).lineTo(-2,4.9).closePath();
	this.shape_42.setTransform(158.9,328.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,3.7).lineTo(-3.6,2.9).curveTo(-4,2.3,-4.2,1.5).curveTo(-4.4,-0.3,-2.6,-1.8).curveTo(-1,-3.1,1.7,-3.6).curveTo(3.1,-3.8,4.2,-3.8).lineTo(3.6,-1.4).curveTo(2.8,1.2,1.2,2.6).curveTo(-0.2,3.8,-1.5,3.8).lineTo(-2.2,3.7).closePath();
	this.shape_43.setTransform(158.2,341.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,2.6).curveTo(-2.5,1.4,-3.6,-1.2).lineTo(-4.4,-3.6).lineTo(-1.9,-3.6).curveTo(0.9,-3.3,2.5,-2.1).curveTo(4.5,-0.7,4.4,1).curveTo(4.3,1.9,3.9,2.5).curveTo(3.5,3.1,2.6,3.4).curveTo(2.1,3.6,1.6,3.6).curveTo(0.4,3.6,-0.9,2.6).closePath();
	this.shape_44.setTransform(145.9,337.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#494A4E").beginStroke().moveTo(-2,6.1).curveTo(-3.9,4.9,-3.9,1.7).curveTo(-3.9,-1,-1.9,-4.1).lineTo(0,-6.8).lineTo(1.9,-4.1).curveTo(3.8,-1,3.9,1.7).curveTo(3.9,4.9,1.9,6.1).curveTo(1,6.8,0,6.8).curveTo(-0.9,6.8,-2,6.1).closePath();
	this.shape_45.setTransform(152.2,319.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,2.5).lineTo(2.3,-3).lineTo(2.9,-2.5).lineTo(-2.3,3).closePath();
	this.shape_46.setTransform(154.7,332.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,2.5).lineTo(2.3,-3.1).lineTo(2.9,-2.4).lineTo(-2.3,3.1).closePath();
	this.shape_47.setTransform(154.9,343.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,-1.6).lineTo(-3,-2.3).lineTo(3.5,1.6).lineTo(3,2.4).closePath();
	this.shape_48.setTransform(148.9,330.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,-1.6).lineTo(-3,-2.3).lineTo(3.5,1.6).lineTo(3,2.3).closePath();
	this.shape_49.setTransform(149.1,339.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,18.4).lineTo(-0.6,-18.4).lineTo(0.6,-18.4).lineTo(0.6,18.4).closePath();
	this.shape_50.setTransform(152.2,341.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,3).curveTo(-2.9,1.7,-4.2,-1.3).lineTo(-5.1,-4).lineTo(-2.3,-4.1).curveTo(0.9,-3.8,2.9,-2.5).curveTo(5.2,-0.9,5.1,1.1).curveTo(5.1,2.1,4.6,2.8).curveTo(4.1,3.5,3.2,3.9).curveTo(2.6,4.1,1.9,4.1).curveTo(0.6,4.1,-1,3).closePath();
	this.shape_51.setTransform(903.5,326.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,4.7).lineTo(-3.6,3.9).curveTo(-4.2,3.3,-4.4,2.4).curveTo(-4.9,0.4,-3,-1.6).curveTo(-1.4,-3.3,1.7,-4.2).curveTo(3.3,-4.7,4.5,-4.8).lineTo(4.2,-1.9).curveTo(3.5,1.3,1.9,3).curveTo(0.3,4.8,-1.4,4.8).lineTo(-1.9,4.7).closePath();
	this.shape_52.setTransform(917,326.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,3.5).lineTo(-3.4,2.8).curveTo(-3.8,2.3,-4,1.4).curveTo(-4.2,-0.2,-2.5,-1.7).curveTo(-1,-3,1.6,-3.4).curveTo(3,-3.6,4,-3.6).lineTo(3.4,-1.3).curveTo(2.6,1.2,1.2,2.5).curveTo(-0.1,3.6,-1.4,3.6).lineTo(-2.1,3.5).closePath();
	this.shape_53.setTransform(916.4,339);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,2.5).curveTo(-2.4,1.3,-3.4,-1.1).lineTo(-4.2,-3.4).lineTo(-1.8,-3.4).curveTo(0.9,-3.1,2.4,-2).curveTo(4.3,-0.7,4.2,1).curveTo(4.1,1.8,3.7,2.4).curveTo(3.3,2.9,2.5,3.2).curveTo(2,3.4,1.5,3.4).curveTo(0.4,3.4,-0.8,2.5).closePath();
	this.shape_54.setTransform(904.6,335.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.9,5.9).curveTo(-3.7,4.7,-3.7,1.7).curveTo(-3.7,-0.9,-1.8,-4).curveTo(-0.9,-5.5,-0,-6.5).lineTo(1.8,-4).curveTo(3.7,-0.9,3.7,1.7).curveTo(3.7,4.7,1.8,5.9).lineTo(-0,6.5).curveTo(-0.9,6.5,-1.9,5.9).closePath();
	this.shape_55.setTransform(910.6,318.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.4).lineTo(2.2,-2.9).lineTo(2.8,-2.4).lineTo(-2.2,2.9).closePath();
	this.shape_56.setTransform(913,330.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.8,2.3).lineTo(2.2,-2.9).lineTo(2.8,-2.4).lineTo(-2.2,2.9).closePath();
	this.shape_57.setTransform(913.2,341.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.3,-1.5).lineTo(-2.9,-2.2).lineTo(3.3,1.5).lineTo(2.9,2.2).closePath();
	this.shape_58.setTransform(907.5,328.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.3,-1.5).lineTo(-2.9,-2.2).lineTo(3.3,1.5).lineTo(2.9,2.2).closePath();
	this.shape_59.setTransform(907.7,337.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,17.5).lineTo(-0.6,-17.5).lineTo(0.6,-17.5).lineTo(0.6,17.5).closePath();
	this.shape_60.setTransform(910.6,339.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,4.1).curveTo(-3.9,2.2,-5.7,-1.8).lineTo(-7,-5.5).lineTo(-3.1,-5.6).curveTo(1.3,-5.3,4,-3.5).curveTo(7.1,-1.3,7,1.5).curveTo(7,2.9,6.3,3.8).curveTo(5.6,4.8,4.3,5.3).curveTo(3.5,5.6,2.7,5.6).curveTo(0.8,5.6,-1.3,4.1).closePath();
	this.shape_61.setTransform(57.3,312.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,6.4).lineTo(-4.9,5.4).curveTo(-5.7,4.6,-6.1,3.3).curveTo(-6.7,0.6,-4.1,-2.2).curveTo(-1.9,-4.5,2.4,-5.7).curveTo(4.5,-6.3,6.2,-6.5).lineTo(5.7,-2.6).curveTo(4.8,1.8,2.6,4.1).curveTo(0.5,6.5,-1.9,6.5).lineTo(-2.7,6.4).closePath();
	this.shape_62.setTransform(75.8,312.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,4.8).lineTo(-4.6,3.8).curveTo(-5.2,3.1,-5.4,1.9).curveTo(-5.7,-0.3,-3.4,-2.3).curveTo(-1.3,-4,2.2,-4.7).curveTo(4,-5,5.4,-5).lineTo(4.7,-1.8).curveTo(3.6,1.6,1.6,3.4).curveTo(-0.2,5,-1.9,5).lineTo(-2.9,4.8).closePath();
	this.shape_63.setTransform(74.9,329.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,3.4).curveTo(-3.3,1.8,-4.7,-1.6).lineTo(-5.7,-4.6).lineTo(-2.5,-4.6).curveTo(1.1,-4.3,3.3,-2.7).curveTo(5.8,-0.9,5.7,1.4).curveTo(5.6,2.5,5.1,3.3).curveTo(4.5,4,3.4,4.4).curveTo(2.8,4.6,2.1,4.6).curveTo(0.5,4.6,-1.2,3.4).closePath();
	this.shape_64.setTransform(58.9,324.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,8.1).curveTo(-5.1,6.4,-5,2.3).curveTo(-5,-1.3,-2.5,-5.4).lineTo(0,-8.9).lineTo(2.5,-5.4).curveTo(5,-1.3,5.1,2.3).curveTo(5.1,6.4,2.5,8.1).curveTo(1.3,8.9,0,8.9).curveTo(-1.3,8.9,-2.6,8.1).closePath();
	this.shape_65.setTransform(67,301.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,3.2).lineTo(3,-4).lineTo(3.8,-3.2).lineTo(-3,4).closePath();
	this.shape_66.setTransform(70.3,318.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.8,3.2).lineTo(3,-4).lineTo(3.8,-3.2).lineTo(-3,4).closePath();
	this.shape_67.setTransform(70.6,332.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,-2.1).lineTo(-4,-3.1).lineTo(4.6,2.1).lineTo(4,3).closePath();
	this.shape_68.setTransform(62.8,315.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.5,-2.1).lineTo(-4,-3).lineTo(4.6,2.1).lineTo(3.9,3.1).closePath();
	this.shape_69.setTransform(63,327.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,23.9).lineTo(-0.8,-23.9).lineTo(0.8,-23.9).lineTo(0.8,23.9).closePath();
	this.shape_70.setTransform(67,329.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#494A4E").beginStroke().moveTo(43.3,5.9).curveTo(21.2,1.4,0,1.4).curveTo(-21.2,1.4,-43.3,5.9).curveTo(-44.9,6.2,-46.2,5.4).curveTo(-47.5,4.6,-47.9,3.1).curveTo(-48.3,1.6,-47.4,0.3).curveTo(-46.6,-1,-45,-1.4).curveTo(-22,-6,0,-6).curveTo(22,-6,45,-1.4).curveTo(46.6,-1,47.5,0.3).curveTo(48.3,1.6,47.9,3.1).curveTo(47.6,4.6,46.2,5.4).curveTo(45.3,6,44.2,6).lineTo(43.3,5.9).closePath();
	this.shape_71.setTransform(307.2,310.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_72.setTransform(343.5,319.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_73.setTransform(333.1,319.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_74.setTransform(322.8,319.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_75.setTransform(312.4,319.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_76.setTransform(302.1,319.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_77.setTransform(291.7,319.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_78.setTransform(281.4,319.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,10.4).lineTo(-2.2,-10.4).lineTo(2.2,-10.4).lineTo(2.2,10.4).closePath();
	this.shape_79.setTransform(271,319.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#494A4E").beginStroke().moveTo(-46.2,3.7).curveTo(-47.8,3.7,-48.9,2.6).curveTo(-50,1.5,-50,0).curveTo(-50,-1.5,-48.9,-2.7).curveTo(-47.8,-3.8,-46.2,-3.7).lineTo(46.3,-3.7).curveTo(47.8,-3.8,48.9,-2.7).curveTo(50,-1.5,50,0).curveTo(50,1.5,48.9,2.6).curveTo(47.8,3.7,46.3,3.7).closePath();
	this.shape_80.setTransform(307.2,333.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#494A4E").beginStroke().moveTo(31.5,9.6).lineTo(31.5,-0.1).lineTo(-31.5,-0.1).lineTo(-31.5,9.6).lineTo(-38.3,9.6).lineTo(-38.3,-9.6).lineTo(38.3,-9.6).lineTo(38.3,9.6).closePath();
	this.shape_81.setTransform(307.2,346.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,1.3).curveTo(-1.8,0.8,-1.8,-0).curveTo(-1.8,-0.8,-1.3,-1.3).curveTo(-0.8,-1.9,-0,-1.9).curveTo(0.8,-1.9,1.3,-1.3).curveTo(1.8,-0.8,1.8,-0).curveTo(1.8,0.8,1.3,1.3).curveTo(0.8,1.9,-0,1.9).curveTo(-0.8,1.9,-1.3,1.3).closePath();
	this.shape_82.setTransform(752.6,322.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,1.3).curveTo(-1.8,0.8,-1.8,-0).curveTo(-1.8,-0.8,-1.3,-1.3).curveTo(-0.8,-1.9,0,-1.9).curveTo(0.8,-1.9,1.3,-1.3).curveTo(1.8,-0.8,1.8,-0).curveTo(1.8,0.8,1.3,1.3).curveTo(0.8,1.9,0,1.9).curveTo(-0.8,1.9,-1.3,1.3).closePath();
	this.shape_83.setTransform(691.7,322.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#494A4E").beginStroke().moveTo(-43.3,3.8).curveTo(-44.9,3.8,-45.9,2.6).curveTo(-47,1.6,-47,-0).curveTo(-47,-1.6,-45.9,-2.6).curveTo(-44.9,-3.8,-43.3,-3.8).lineTo(43.2,-3.8).curveTo(44.8,-3.8,45.9,-2.6).curveTo(47,-1.6,47,-0).curveTo(47,1.6,45.9,2.6).curveTo(44.8,3.8,43.2,3.8).closePath();
	this.shape_84.setTransform(722.8,322.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,1.3).curveTo(-1.8,0.7,-1.8,0).curveTo(-1.8,-0.8,-1.3,-1.3).curveTo(-0.8,-1.8,-0,-1.9).curveTo(0.8,-1.8,1.3,-1.3).curveTo(1.8,-0.8,1.8,0).curveTo(1.8,0.7,1.3,1.3).curveTo(0.8,1.9,-0,1.8).curveTo(-0.8,1.9,-1.3,1.3).closePath();
	this.shape_85.setTransform(752.6,311.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,1.3).curveTo(-1.8,0.7,-1.8,0).curveTo(-1.8,-0.8,-1.3,-1.3).curveTo(-0.8,-1.8,0,-1.9).curveTo(0.8,-1.8,1.3,-1.3).curveTo(1.8,-0.8,1.8,0).curveTo(1.8,0.7,1.3,1.3).curveTo(0.8,1.9,0,1.8).curveTo(-0.8,1.9,-1.3,1.3).closePath();
	this.shape_86.setTransform(691.7,311.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#494A4E").beginStroke().moveTo(-43.3,3.7).curveTo(-44.9,3.7,-45.9,2.6).curveTo(-47,1.5,-47,0).curveTo(-47,-1.5,-45.9,-2.7).curveTo(-44.9,-3.8,-43.3,-3.8).lineTo(43.2,-3.8).curveTo(44.8,-3.7,45.9,-2.7).curveTo(47,-1.5,47,0).curveTo(47,1.5,45.9,2.6).curveTo(44.8,3.7,43.2,3.7).closePath();
	this.shape_87.setTransform(722.8,311.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#494A4E").beginStroke().moveTo(-46.3,3.7).curveTo(-47.9,3.7,-48.9,2.6).curveTo(-50,1.5,-50,0).curveTo(-50,-1.5,-48.9,-2.7).curveTo(-47.9,-3.8,-46.3,-3.7).lineTo(46.3,-3.7).curveTo(47.8,-3.8,48.9,-2.7).curveTo(50,-1.5,50,0).curveTo(50,1.5,48.9,2.6).curveTo(47.8,3.7,46.3,3.7).closePath();
	this.shape_88.setTransform(722.8,333.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#494A4E").beginStroke().moveTo(31.5,9.6).lineTo(31.5,-0.1).lineTo(-31.5,-0.1).lineTo(-31.5,9.6).lineTo(-38.3,9.6).lineTo(-38.3,-9.6).lineTo(38.3,-9.6).lineTo(38.3,9.6).closePath();
	this.shape_89.setTransform(722.7,346.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,17.5).lineTo(-3.7,-13.8).curveTo(-3.7,-15.4,-2.6,-16.4).curveTo(-1.6,-17.5,-0,-17.5).curveTo(1.5,-17.5,2.6,-16.4).curveTo(3.7,-15.4,3.7,-13.8).lineTo(3.7,17.5).closePath();
	this.shape_90.setTransform(752.6,320.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,17.5).lineTo(-3.7,-13.8).curveTo(-3.7,-15.4,-2.6,-16.4).curveTo(-1.5,-17.5,0,-17.5).curveTo(1.6,-17.5,2.6,-16.4).curveTo(3.7,-15.4,3.7,-13.8).lineTo(3.7,17.5).closePath();
	this.shape_91.setTransform(691.7,320.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.7,2.4).curveTo(-35.7,2.4,-36.4,1.7).curveTo(-37.1,1,-37.1,-0).curveTo(-37.1,-1,-36.4,-1.7).curveTo(-35.7,-2.4,-34.7,-2.4).lineTo(34.7,-2.4).curveTo(35.7,-2.4,36.4,-1.7).curveTo(37.1,-1,37.1,-0).curveTo(37.1,1,36.4,1.7).curveTo(35.7,2.4,34.7,2.4).closePath();
	this.shape_92.setTransform(515,288.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#494A4E").beginStroke().moveTo(-109.6,3.6).curveTo(-111.1,3.6,-112.2,2.5).curveTo(-113.2,1.5,-113.2,0).curveTo(-113.2,-1.5,-112.2,-2.5).curveTo(-111.1,-3.6,-109.6,-3.6).lineTo(109.6,-3.6).curveTo(111.1,-3.6,112.2,-2.5).curveTo(113.2,-1.5,113.2,0).curveTo(113.2,1.5,112.2,2.5).curveTo(111.1,3.6,109.6,3.6).closePath();
	this.shape_93.setTransform(515,303.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-3.1,3.1).curveTo(-4.4,1.8,-4.3,-0).curveTo(-4.4,-1.8,-3.1,-3.1).curveTo(-1.8,-4.4,-0,-4.3).curveTo(1.8,-4.4,3.1,-3.1).curveTo(4.4,-1.8,4.4,-0).curveTo(4.4,1.8,3.1,3.1).curveTo(1.8,4.3,-0,4.3).curveTo(-1.8,4.3,-3.1,3.1).closePath();
	this.shape_94.setTransform(502.3,154.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-2.2,2.2).curveTo(-3.1,1.3,-3.1,0).curveTo(-3.1,-1.3,-2.2,-2.2).curveTo(-1.3,-3.1,-0,-3.1).curveTo(1.3,-3.1,2.2,-2.2).curveTo(3.1,-1.3,3.1,0).curveTo(3.1,1.3,2.2,2.2).curveTo(1.3,3.1,-0,3.1).curveTo(-1.3,3.1,-2.2,2.2).closePath();
	this.shape_95.setTransform(518.8,148.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.1,4.1).curveTo(-5.7,2.4,-5.7,-0).curveTo(-5.7,-2.4,-4.1,-4.1).curveTo(-2.3,-5.7,-0,-5.8).curveTo(2.4,-5.7,4.1,-4.1).curveTo(5.7,-2.4,5.7,-0).curveTo(5.7,2.4,4.1,4.1).curveTo(2.4,5.7,-0,5.8).curveTo(-2.3,5.7,-4.1,4.1).closePath();
	this.shape_96.setTransform(515,160.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-21.2,50.3).lineTo(-21.2,-29.1).curveTo(-21.2,-37.9,-15,-44.1).curveTo(-8.8,-50.3,0,-50.3).curveTo(8.8,-50.3,15,-44.1).curveTo(21.2,-37.9,21.2,-29.1).lineTo(21.2,-26.4).lineTo(15.2,-26.4).lineTo(15.2,-29.1).curveTo(15.2,-35.4,10.8,-39.9).curveTo(6.3,-44.3,0,-44.3).curveTo(-6.3,-44.3,-10.7,-39.9).curveTo(-15.2,-35.4,-15.2,-29.1).lineTo(-15.2,50.3).closePath();
	this.shape_97.setTransform(465.6,250.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#7F7F7F").beginStroke().moveTo(15.2,50.3).lineTo(15.2,-29.1).curveTo(15.2,-35.4,10.8,-39.9).curveTo(6.3,-44.3,-0,-44.3).curveTo(-6.3,-44.3,-10.8,-39.9).curveTo(-15.2,-35.4,-15.2,-29.1).lineTo(-15.2,-26.4).lineTo(-21.2,-26.4).lineTo(-21.2,-29.1).curveTo(-21.2,-37.9,-15,-44.1).curveTo(-8.8,-50.3,-0,-50.3).curveTo(8.8,-50.3,15,-44.1).curveTo(21.2,-37.9,21.2,-29.1).lineTo(21.2,50.3).closePath();
	this.shape_98.setTransform(564.4,250.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#7F7F7F").beginStroke().moveTo(9.4,29.3).lineTo(9.4,-14).curveTo(9.4,-17.8,6.6,-20.6).curveTo(3.8,-23.3,0,-23.3).curveTo(-3.9,-23.3,-6.6,-20.6).curveTo(-9.4,-17.8,-9.3,-14).lineTo(-9.3,-9.7).lineTo(-15.4,-9.7).lineTo(-15.4,-14).curveTo(-15.3,-20.3,-10.9,-24.8).curveTo(-6.4,-29.3,0,-29.3).curveTo(6.3,-29.3,10.8,-24.8).curveTo(15.4,-20.3,15.3,-14).lineTo(15.3,29.3).closePath();
	this.shape_99.setTransform(527.4,195);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.4,29.3).lineTo(-15.4,-14).curveTo(-15.3,-20.3,-10.9,-24.8).curveTo(-6.4,-29.3,0,-29.3).curveTo(6.3,-29.3,10.8,-24.8).curveTo(15.4,-20.3,15.3,-14).lineTo(15.3,-9.7).lineTo(9.4,-9.7).lineTo(9.4,-14).curveTo(9.4,-17.8,6.6,-20.6).curveTo(3.9,-23.3,0,-23.3).curveTo(-3.9,-23.3,-6.6,-20.6).curveTo(-9.4,-17.8,-9.3,-14).lineTo(-9.3,29.3).closePath();
	this.shape_100.setTransform(502.6,195);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.7,2.2).lineTo(-17.7,-2.2).lineTo(17.7,-2.2).lineTo(17.7,2.2).closePath();
	this.shape_101.setTransform(515,191.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.5,3.6).curveTo(-13.5,3.6,-15.6,1.5).curveTo(-17.7,-0.6,-17.7,-3.6).lineTo(17.7,-3.6).curveTo(17.7,-0.6,15.6,1.5).curveTo(13.5,3.6,10.5,3.6).closePath();
	this.shape_102.setTransform(515,197.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#494A4E").beginStroke().moveTo(-40.7,2.2).lineTo(-40.7,-2.2).lineTo(40.7,-2.2).lineTo(40.7,2.2).closePath();
	this.shape_103.setTransform(515,230.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.1,6.8).curveTo(-32.7,6.8,-36.7,2.8).curveTo(-40.7,-1.2,-40.7,-6.8).lineTo(40.7,-6.8).curveTo(40.7,-1.2,36.7,2.8).curveTo(32.7,6.8,27.1,6.8).closePath();
	this.shape_104.setTransform(515,239.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.7,1.4).curveTo(-3.8,0,-4.3,-1.3).lineTo(4.3,-1.3).curveTo(3.8,0,3.7,1.4).closePath();
	this.shape_105.setTransform(515,204.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.5,7.8).lineTo(-6.5,5).curveTo(-3.5,1.4,-3.5,-3.3).curveTo(-3.5,-5.7,-4.3,-7.8).lineTo(4.3,-7.8).curveTo(3.5,-5.7,3.5,-3.3).curveTo(3.5,1.4,6.5,5).curveTo(8,6.9,9.5,7.8).closePath();
	this.shape_106.setTransform(515,211.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.6,1.3).lineTo(-6.6,-1.3).lineTo(6.6,-1.3).lineTo(6.6,1.3).closePath();
	this.shape_107.setTransform(515,202.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.4,2.6).lineTo(-9.4,-2.6).lineTo(9.4,-2.6).lineTo(9.4,2.6).closePath();
	this.shape_108.setTransform(515,221.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#494A4E").beginStroke().moveTo(-7,2.4).curveTo(-7.3,0.1,-8.2,-2.4).lineTo(8.2,-2.4).curveTo(7.3,0.1,7,2.4).closePath();
	this.shape_109.setTransform(515,252.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#494A4E").beginStroke().moveTo(-18,14.4).lineTo(-16.2,13).curveTo(-14.1,11.2,-12.3,8.9).curveTo(-6.7,1.7,-6.7,-6.4).curveTo(-6.7,-10.5,-8.2,-14.4).lineTo(8.2,-14.4).curveTo(6.7,-10.5,6.7,-6.4).curveTo(6.7,1.7,12.4,8.9).curveTo(15.2,12.5,18,14.4).closePath();
	this.shape_110.setTransform(515,264.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.5,2.2).lineTo(-12.5,-2.2).lineTo(12.5,-2.2).lineTo(12.5,2.2).closePath();
	this.shape_111.setTransform(515,248.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.8,3.7).lineTo(-17.8,-3.7).lineTo(17.8,-3.7).lineTo(17.8,3.7).closePath();
	this.shape_112.setTransform(515,282.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#494A4E").beginStroke().moveTo(-18.8,2).curveTo(-19.6,2,-20.2,1.4).curveTo(-20.8,0.9,-20.8,0).curveTo(-20.8,-0.8,-20.2,-1.4).curveTo(-19.6,-2,-18.8,-2).lineTo(18.8,-2).curveTo(19.6,-2,20.2,-1.4).curveTo(20.8,-0.8,20.8,0).curveTo(20.8,0.9,20.2,1.4).curveTo(19.6,2,18.8,2).closePath();
	this.shape_113.setTransform(515,187.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#494A4E").beginStroke().moveTo(-42.4,2).curveTo(-43.2,2,-43.8,1.4).curveTo(-44.4,0.8,-44.4,-0).curveTo(-44.4,-0.8,-43.8,-1.4).curveTo(-43.2,-2,-42.4,-2).lineTo(42.4,-2).curveTo(43.3,-2,43.8,-1.4).curveTo(44.4,-0.8,44.4,-0).curveTo(44.4,0.8,43.8,1.4).curveTo(43.2,2,42.4,2).closePath();
	this.shape_114.setTransform(515,226.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.4,4.9).lineTo(-34.4,-4.9).lineTo(34.4,-4.9).lineTo(34.4,4.9).closePath();
	this.shape_115.setTransform(515,296.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#494A4E").beginStroke().moveTo(-116.5,2.4).curveTo(-116.5,0.4,-115,-1).curveTo(-113.6,-2.4,-111.6,-2.4).lineTo(111.6,-2.4).curveTo(113.6,-2.4,115,-1).curveTo(116.5,0.4,116.5,2.4).closePath();
	this.shape_116.setTransform(515,327.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.7,-5.8,0,-5.8).curveTo(1.6,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_117.setTransform(609.2,319.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.7,-5.8,0,-5.8).curveTo(1.6,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_118.setTransform(592.1,319.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.6,-5.8,-0,-5.8).curveTo(1.6,-5.8,2.9,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_119.setTransform(574.9,319.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.6,-5.8,0,-5.8).curveTo(1.6,-5.8,2.9,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_120.setTransform(557.8,319.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.7,-5.8,-0,-5.8).curveTo(1.7,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_121.setTransform(540.7,319.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.7,-5.8,-0,-5.8).curveTo(1.7,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_122.setTransform(523.6,319.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.6,-5.8,0,-5.8).curveTo(1.7,-5.8,2.9,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_123.setTransform(506.4,319.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.6,-5.8,0,-5.8).curveTo(1.7,-5.8,2.9,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_124.setTransform(489.3,319.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.6,-5.8,-0,-5.8).curveTo(1.7,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_125.setTransform(472.2,319.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.7,-5.8,-0,-5.8).curveTo(1.7,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_126.setTransform(455.1,319.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.6,-5.8,0,-5.8).curveTo(1.7,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_127.setTransform(437.9,319.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,5.8).lineTo(-4,-1.8).curveTo(-4,-3.4,-2.8,-4.6).curveTo(-1.7,-5.8,0,-5.8).curveTo(1.7,-5.8,2.8,-4.6).curveTo(4,-3.4,4,-1.8).lineTo(4,5.8).closePath();
	this.shape_128.setTransform(420.8,319.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#494A4E").beginStroke().moveTo(-105.6,9.1).lineTo(-105.6,-9.1).lineTo(105.6,-9.1).lineTo(105.6,9.1).closePath();
	this.shape_129.setTransform(515,316.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_130.setTransform(644,339.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_131.setTransform(626.8,339.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_132.setTransform(609.6,339.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_133.setTransform(592.4,339.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_134.setTransform(575.2,339.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_135.setTransform(558,339.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_136.setTransform(540.8,339.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_137.setTransform(523.6,339.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_138.setTransform(506.4,339.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_139.setTransform(489.2,339.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_140.setTransform(472,339.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(-0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_141.setTransform(454.8,339.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_142.setTransform(437.6,339.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_143.setTransform(420.4,339.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_144.setTransform(403.2,339.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.6,4.1).lineTo(0,-4.1).lineTo(8.6,4.1).closePath();
	this.shape_145.setTransform(386,339.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#494A4E").beginStroke().moveTo(-139,6.4).lineTo(-139,6.3).curveTo(-139,1,-135.3,-2.7).curveTo(-131.5,-6.4,-126.2,-6.4).lineTo(126.2,-6.4).curveTo(131.5,-6.4,135.3,-2.7).curveTo(139,1,139,6.3).lineTo(139,6.4).closePath();
	this.shape_146.setTransform(515,336.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#494A4E").beginStroke().moveTo(-126.2,12.8).curveTo(-131.5,12.8,-135.3,9.1).curveTo(-139,5.4,-139,0.1).lineTo(-139,-0.1).curveTo(-139,-5.4,-135.3,-9.1).curveTo(-131.5,-12.9,-126.2,-12.8).lineTo(126.2,-12.8).curveTo(131.5,-12.9,135.3,-9.1).curveTo(139,-5.4,139,-0.1).lineTo(139,0.1).curveTo(139,5.4,135.3,9.1).curveTo(131.5,12.8,126.2,12.8).closePath();
	this.shape_147.setTransform(515,342.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.2,4.2).curveTo(-6,2.5,-6,-0).curveTo(-6,-2.5,-4.2,-4.3).curveTo(-2.4,-6,0,-6).curveTo(2.5,-6,4.2,-4.2).curveTo(6,-2.5,6,0).curveTo(6,2.5,4.2,4.2).curveTo(2.5,6,-0,6).curveTo(-2.5,6,-4.2,4.2).closePath();
	this.shape_148.setTransform(944.5,244.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,2.4).curveTo(-3.4,1.4,-3.4,-0).curveTo(-3.4,-1.4,-2.4,-2.4).curveTo(-1.4,-3.4,-0,-3.4).curveTo(1.5,-3.4,2.4,-2.4).curveTo(3.4,-1.4,3.4,0).curveTo(3.4,1.4,2.4,2.4).curveTo(1.4,3.4,-0,3.4).curveTo(-1.4,3.4,-2.4,2.4).closePath();
	this.shape_149.setTransform(1014.5,268.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#494A4E").beginStroke().moveTo(0,4.7).curveTo(-2,4.7,-3.4,3.3).curveTo(-4.8,1.9,-4.7,0).curveTo(-4.7,-2,-3.3,-3.3).curveTo(-2,-4.8,0,-4.7).curveTo(1.9,-4.7,3.4,-3.3).curveTo(4.7,-2,4.7,0).curveTo(4.7,1.9,3.4,3.3).curveTo(2,4.7,0.1,4.7).lineTo(0,4.7).closePath();
	this.shape_150.setTransform(1031.9,268.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,4.5).curveTo(-6.4,2.6,-6.4,-0).curveTo(-6.4,-2.7,-4.5,-4.6).curveTo(-2.6,-6.4,0,-6.4).curveTo(2.7,-6.4,4.6,-4.5).curveTo(6.4,-2.6,6.4,0).curveTo(6.4,2.7,4.5,4.6).curveTo(2.6,6.4,-0,6.4).curveTo(-2.7,6.4,-4.6,4.5).closePath();
	this.shape_151.setTransform(962.2,255.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.8,4.7).curveTo(-6.7,2.8,-6.7,-0.1).curveTo(-6.7,-2.8,-4.7,-4.8).curveTo(-2.7,-6.7,0,-6.7).curveTo(2.8,-6.7,4.8,-4.8).curveTo(6.7,-2.7,6.7,0).curveTo(6.7,2.8,4.7,4.8).curveTo(2.7,6.7,-0,6.7).curveTo(-2.8,6.7,-4.8,4.7).closePath();
	this.shape_152.setTransform(1021.6,285.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.2,6.2).curveTo(-8.8,3.7,-8.8,0).curveTo(-8.8,-3.6,-6.2,-6.2).curveTo(-3.6,-8.8,0,-8.8).curveTo(3.7,-8.8,6.2,-6.2).curveTo(8.8,-3.6,8.8,0).curveTo(8.8,3.7,6.2,6.2).curveTo(3.6,8.8,-0,8.8).curveTo(-3.7,8.8,-6.2,6.2).closePath();
	this.shape_153.setTransform(944.3,273.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.9,3.9).curveTo(-5.5,2.3,-5.5,-0).curveTo(-5.5,-2.3,-3.9,-3.9).curveTo(-2.3,-5.5,0,-5.5).curveTo(2.3,-5.5,3.9,-3.9).curveTo(5.5,-2.3,5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.5,-0,5.5).curveTo(-2.3,5.5,-3.9,3.9).closePath();
	this.shape_154.setTransform(1003.5,207.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.9,6.8).curveTo(-9.7,4,-9.7,-0).curveTo(-9.6,-4,-6.8,-6.8).curveTo(-4,-9.7,0,-9.6).curveTo(4,-9.6,6.9,-6.8).curveTo(9.7,-3.9,9.6,0.1).curveTo(9.6,4.1,6.8,6.9).curveTo(3.9,9.7,-0.1,9.7).curveTo(-4,9.7,-6.9,6.8).closePath();
	this.shape_155.setTransform(1003,240.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,7.7).curveTo(-3.2,7.7,-5.5,5.4).curveTo(-7.7,3.2,-7.7,-0).curveTo(-7.7,-3.2,-5.4,-5.5).curveTo(-3.2,-7.7,0,-7.7).curveTo(3.3,-7.7,5.4,-5.4).curveTo(7.7,-3.2,7.7,0).curveTo(7.7,3.2,5.4,5.5).curveTo(3.2,7.7,0.1,7.7).lineTo(-0.1,7.7).closePath();
	this.shape_156.setTransform(974.3,218.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,21.9).curveTo(-9.2,21.8,-15.6,15.4).curveTo(-22,8.9,-21.9,-0.1).curveTo(-21.9,-9.2,-15.4,-15.6).curveTo(-9,-21.9,0.1,-21.9).curveTo(9.2,-21.9,15.6,-15.4).curveTo(21.9,-9,21.9,0.1).curveTo(21.8,9.1,15.4,15.6).curveTo(9.1,21.9,0.1,21.9).lineTo(-0.1,21.9).closePath();
	this.shape_157.setTransform(1022.5,274.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,31.7).curveTo(-13.3,31.6,-22.5,22.3).curveTo(-31.7,13,-31.7,-0.1).curveTo(-31.6,-13.3,-22.3,-22.5).curveTo(-13,-31.7,0.1,-31.7).curveTo(13.2,-31.6,22.5,-22.3).curveTo(31.7,-13,31.7,0.1).curveTo(31.6,13.2,22.3,22.5).curveTo(13.1,31.7,0,31.7).lineTo(-0.1,31.7).closePath();
	this.shape_158.setTransform(952.8,259.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.2,40.3).curveTo(-16.9,40.3,-28.6,28.4).curveTo(-40.4,16.5,-40.3,-0.2).curveTo(-40.2,-16.9,-28.4,-28.6).curveTo(-16.5,-40.4,0.2,-40.3).curveTo(16.9,-40.3,28.6,-28.4).curveTo(40.4,-16.6,40.3,0.1).curveTo(40.3,16.9,28.4,28.6).curveTo(16.6,40.3,0.1,40.3).lineTo(-0.2,40.3).closePath();
	this.shape_159.setTransform(989.9,228);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.2,5.8).lineTo(14.5,-10.5).lineTo(17.2,-5.9).lineTo(-14.5,10.5).closePath();
	this.shape_160.setTransform(1005.5,290.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.1,-9).lineTo(-14,-13.3).lineTo(17.1,8.9).lineTo(14,13.3).closePath();
	this.shape_161.setTransform(975,281.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,58.2).lineTo(-2.7,-58.2).lineTo(2.7,-58.2).lineTo(2.7,58.2).closePath();
	this.shape_162.setTransform(989.9,306.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,1.8).curveTo(-2,1.2,-2.8,-0.3).lineTo(-3.3,-1.7).lineTo(-1.8,-2.1).curveTo(-0.2,-2.4,0.9,-1.8).curveTo(2.1,-1.2,2.8,0.3).curveTo(3.2,1,3.3,1.6).curveTo(2,2.2,0.9,2.2).curveTo(-0,2.2,-0.9,1.8).closePath();
	this.shape_163.setTransform(237.1,344.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.2).lineTo(-4.3,1.4).curveTo(-4,0.6,-3.5,-0.2).curveTo(-2.3,-1.9,-0.8,-2.4).curveTo(0.8,-2.8,2.7,-2.2).curveTo(3.7,-1.8,4.3,-1.4).lineTo(3.4,0.2).curveTo(2.3,1.9,0.7,2.4).curveTo(0.1,2.6,-0.6,2.6).curveTo(-1.6,2.6,-2.7,2.2).closePath();
	this.shape_164.setTransform(244.9,346.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.7,5.5).curveTo(-3.6,-0.8,1.2,-3.8).curveTo(2.7,-4.8,4.3,-5.2).lineTo(5.6,-5.5).curveTo(5.9,1.9,0.2,4.5).curveTo(-2.3,5.5,-4.8,5.5).lineTo(-5.7,5.5).closePath();
	this.shape_165.setTransform(245.9,335.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.2,4.5).curveTo(-5.9,1.9,-5.6,-5.5).lineTo(-1.2,-3.8).curveTo(3.6,-0.8,5.7,5.5).lineTo(4.8,5.5).curveTo(2.3,5.5,-0.2,4.5).closePath();
	this.shape_166.setTransform(235.1,335.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,7.1).curveTo(-5,4.1,-4.8,-0).curveTo(-4.7,-4.1,-2.3,-7.1).lineTo(0,-9.3).lineTo(2.4,-7.1).curveTo(4.7,-4.1,4.8,-0).curveTo(5,4.1,2.5,7.1).curveTo(1.3,8.7,0,9.3).curveTo(-1.2,8.7,-2.5,7.1).closePath();
	this.shape_167.setTransform(240.5,331.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,13.2).lineTo(-0.4,-13.2).lineTo(0.4,-13.2).lineTo(0.4,13.2).closePath();
	this.shape_168.setTransform(240.6,347.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,1.8).curveTo(-2.1,1.2,-2.7,-0.3).lineTo(-3.3,-1.7).lineTo(-1.8,-2.1).curveTo(-0.2,-2.4,0.9,-1.8).curveTo(2.8,-0.9,3.2,1.7).curveTo(2,2.2,0.9,2.2).curveTo(-0,2.2,-0.9,1.8).closePath();
	this.shape_169.setTransform(117,345.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.1).lineTo(-4.3,1.3).curveTo(-4,0.6,-3.5,-0.3).curveTo(-2.3,-1.9,-0.8,-2.4).curveTo(0.8,-2.8,2.7,-2.2).curveTo(3.7,-1.8,4.3,-1.4).lineTo(3.4,0.3).curveTo(2.3,1.9,0.7,2.4).curveTo(0.1,2.6,-0.5,2.6).curveTo(-1.5,2.6,-2.7,2.1).closePath();
	this.shape_170.setTransform(124.8,346.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.7,5.5).curveTo(-3.6,-0.9,1.2,-3.8).lineTo(5.6,-5.5).curveTo(5.9,1.9,0.2,4.4).curveTo(-2.3,5.5,-4.8,5.5).lineTo(-5.7,5.5).closePath();
	this.shape_171.setTransform(125.8,336);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.2,4.4).curveTo(-6,1.9,-5.7,-5.5).lineTo(-1.3,-3.8).curveTo(3.6,-0.9,5.7,5.5).lineTo(4.9,5.5).curveTo(2.3,5.5,-0.2,4.4).closePath();
	this.shape_172.setTransform(115.1,336);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,7.1).curveTo(-5,4.2,-4.8,0).curveTo(-4.7,-4.1,-2.3,-7.2).lineTo(0,-9.4).lineTo(2.4,-7.2).curveTo(4.7,-4.1,4.8,0).curveTo(5,4.2,2.5,7.1).curveTo(1.3,8.6,0,9.4).curveTo(-1.2,8.6,-2.5,7.1).closePath();
	this.shape_173.setTransform(120.4,332.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.4,13.2).lineTo(-0.4,-13.2).lineTo(0.5,-13.2).lineTo(0.5,13.2).closePath();
	this.shape_174.setTransform(120.5,347.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,1.8).curveTo(-2.1,1.2,-2.8,-0.3).lineTo(-3.3,-1.7).lineTo(-1.9,-2.1).curveTo(-0.2,-2.4,0.9,-1.8).curveTo(2.1,-1.2,2.8,0.3).curveTo(3.2,1,3.3,1.6).curveTo(2,2.2,0.9,2.2).curveTo(-0.1,2.2,-0.9,1.8).closePath();
	this.shape_175.setTransform(954.2,340.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.2).lineTo(-4.3,1.3).lineTo(-3.4,-0.2).curveTo(-2.3,-1.9,-0.7,-2.4).curveTo(0.8,-2.8,2.7,-2.2).curveTo(3.7,-1.8,4.3,-1.4).curveTo(4,-0.6,3.5,0.2).curveTo(2.3,1.9,0.8,2.4).curveTo(0.1,2.6,-0.6,2.6).curveTo(-1.6,2.6,-2.7,2.2).closePath();
	this.shape_176.setTransform(961.9,342.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,-3.8).curveTo(3.6,-5.3,5.6,-5.5).curveTo(6,1.9,0.2,4.5).curveTo(-1.6,5.3,-3.8,5.5).lineTo(-5.7,5.5).curveTo(-3.6,-0.8,1.2,-3.8).closePath();
	this.shape_177.setTransform(963,331.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.2,4.5).curveTo(-5.9,1.9,-5.6,-5.5).lineTo(-1.2,-3.8).curveTo(3.6,-0.8,5.7,5.5).lineTo(4.8,5.5).curveTo(2.3,5.5,-0.2,4.5).closePath();
	this.shape_178.setTransform(952.2,331.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,7.1).curveTo(-5,4.2,-4.9,0).curveTo(-4.7,-4.1,-2.4,-7.2).curveTo(-1.2,-8.7,-0,-9.3).lineTo(2.3,-7.2).curveTo(4.7,-4.1,4.8,0).curveTo(5,4.2,2.5,7.1).lineTo(-0,9.4).curveTo(-1.3,8.6,-2.5,7.1).closePath();
	this.shape_179.setTransform(957.6,327.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,13.2).lineTo(-0.5,-13.2).lineTo(0.4,-13.2).lineTo(0.4,13.2).closePath();
	this.shape_180.setTransform(957.6,343);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,2.7).curveTo(-3.9,1.6,-3.9,0).curveTo(-3.9,-1.6,-2.7,-2.7).curveTo(-1.6,-3.8,0,-3.8).curveTo(1.6,-3.8,2.7,-2.7).curveTo(3.9,-1.6,3.9,0).curveTo(3.9,1.6,2.7,2.7).curveTo(1.6,3.8,0,3.8).curveTo(-1.6,3.8,-2.7,2.7).closePath();
	this.shape_181.setTransform(233.7,283.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.9,3.9).curveTo(-5.5,2.3,-5.5,0).curveTo(-5.5,-2.3,-3.9,-3.9).curveTo(-2.3,-5.5,0,-5.5).curveTo(2.3,-5.5,3.9,-3.9).curveTo(5.5,-2.3,5.5,0).curveTo(5.5,2.3,3.9,3.9).curveTo(2.3,5.5,0,5.5).curveTo(-2.3,5.5,-3.9,3.9).closePath();
	this.shape_182.setTransform(220.3,287.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,2.6).curveTo(-3.6,1.5,-3.6,-0).curveTo(-3.6,-1.4,-2.5,-2.6).curveTo(-1.5,-3.6,0,-3.6).curveTo(1.5,-3.6,2.5,-2.6).curveTo(3.6,-1.4,3.6,-0).curveTo(3.6,1.5,2.5,2.6).curveTo(1.5,3.6,0,3.6).curveTo(-1.5,3.6,-2.5,2.6).closePath();
	this.shape_183.setTransform(223.8,274.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,3.5).curveTo(-5,2.1,-5,0).curveTo(-5,-2,-3.5,-3.5).curveTo(-2.1,-5,-0,-5).curveTo(2.1,-5,3.5,-3.5).curveTo(4.9,-2,5,0).curveTo(4.9,2.1,3.5,3.5).curveTo(2.1,5,-0,5).curveTo(-2.1,5,-3.5,3.5).closePath();
	this.shape_184.setTransform(165,264.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.4,7.4).curveTo(-10.5,4.3,-10.4,0).curveTo(-10.5,-4.3,-7.4,-7.4).curveTo(-4.3,-10.5,0,-10.5).curveTo(4.4,-10.5,7.4,-7.4).curveTo(10.4,-4.3,10.5,0).curveTo(10.4,4.3,7.4,7.4).curveTo(4.4,10.5,0,10.5).curveTo(-4.3,10.5,-7.4,7.4).closePath();
	this.shape_185.setTransform(157.2,288.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,5.3).curveTo(-7.5,3.1,-7.5,0).curveTo(-7.5,-3.1,-5.2,-5.3).curveTo(-3.1,-7.5,-0,-7.5).curveTo(3.1,-7.5,5.2,-5.3).curveTo(7.5,-3.1,7.5,0).curveTo(7.5,3.1,5.2,5.3).curveTo(3.1,7.5,-0,7.5).curveTo(-3.1,7.5,-5.2,5.3).closePath();
	this.shape_186.setTransform(141.2,264.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.8,12.8).curveTo(-18.1,7.5,-18.1,0).curveTo(-18.1,-7.5,-12.8,-12.8).curveTo(-7.5,-18.1,0,-18.1).curveTo(7.5,-18.1,12.8,-12.8).curveTo(18.1,-7.5,18.1,0).curveTo(18.1,7.5,12.8,12.8).curveTo(7.5,18.1,0,18.1).curveTo(-7.5,18.1,-12.8,12.8).closePath();
	this.shape_187.setTransform(224.5,281.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#494A4E").beginStroke().moveTo(-23,23).curveTo(-32.5,13.5,-32.5,0).curveTo(-32.5,-13.4,-23,-23).curveTo(-13.4,-32.5,0,-32.5).curveTo(13.5,-32.5,23,-23).curveTo(32.5,-13.4,32.5,0).curveTo(32.5,13.5,23,23).curveTo(13.5,32.5,0,32.5).curveTo(-13.4,32.5,-23,23).closePath();
	this.shape_188.setTransform(155.9,274.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.4,8.5).curveTo(-12,5,-11.9,0).curveTo(-12,-4.9,-8.4,-8.4).curveTo(-5,-12,0,-12).curveTo(4.9,-12,8.5,-8.4).curveTo(11.9,-4.9,11.9,0).curveTo(11.9,5,8.5,8.5).curveTo(4.9,12,0,12).curveTo(-5,12,-8.4,8.5).closePath();
	this.shape_189.setTransform(234,247.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.4,4.4).curveTo(-6.2,2.6,-6.2,0).curveTo(-6.2,-2.6,-4.4,-4.4).curveTo(-2.5,-6.2,0,-6.2).curveTo(2.5,-6.2,4.4,-4.4).curveTo(6.2,-2.6,6.2,0).curveTo(6.2,2.6,4.4,4.4).curveTo(2.5,6.2,0,6.2).curveTo(-2.5,6.2,-4.4,4.4).closePath();
	this.shape_190.setTransform(179,191.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,4.4).curveTo(-6.2,2.6,-6.2,0).curveTo(-6.2,-2.6,-4.3,-4.4).curveTo(-2.6,-6.2,-0,-6.2).curveTo(2.6,-6.2,4.4,-4.4).curveTo(6.2,-2.6,6.2,0).curveTo(6.2,2.6,4.4,4.4).curveTo(2.6,6.2,-0,6.2).curveTo(-2.6,6.2,-4.3,4.4).closePath();
	this.shape_191.setTransform(230.9,218.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.3,4.4).curveTo(-6.2,2.6,-6.2,0).curveTo(-6.2,-2.6,-4.3,-4.4).curveTo(-2.6,-6.2,-0,-6.2).curveTo(2.6,-6.2,4.4,-4.4).curveTo(6.2,-2.6,6.2,0).curveTo(6.2,2.6,4.4,4.4).curveTo(2.6,6.2,-0,6.2).curveTo(-2.6,6.2,-4.3,4.4).closePath();
	this.shape_192.setTransform(199.4,244.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.1,5.2).curveTo(-7.3,3,-7.3,0).curveTo(-7.3,-3,-5.1,-5.1).curveTo(-3,-7.2,-0,-7.3).curveTo(3,-7.2,5.1,-5.1).curveTo(7.3,-3,7.3,0).curveTo(7.3,3,5.1,5.2).curveTo(3,7.3,-0,7.2).curveTo(-3,7.3,-5.1,5.2).closePath();
	this.shape_193.setTransform(157.2,226.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.6,6.6).curveTo(-9.4,3.9,-9.4,0).curveTo(-9.4,-3.9,-6.6,-6.6).curveTo(-3.9,-9.4,0,-9.4).curveTo(3.9,-9.4,6.7,-6.6).curveTo(9.4,-3.9,9.4,0).curveTo(9.4,3.9,6.7,6.6).curveTo(3.9,9.4,0,9.4).curveTo(-3.9,9.4,-6.6,6.6).closePath();
	this.shape_194.setTransform(193.5,218.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.1,6.1).curveTo(-8.7,3.6,-8.7,-0).curveTo(-8.7,-3.6,-6.1,-6.1).curveTo(-3.6,-8.7,-0,-8.7).curveTo(3.6,-8.7,6.1,-6.1).curveTo(8.7,-3.6,8.7,-0).curveTo(8.7,3.6,6.1,6.1).curveTo(3.6,8.7,-0,8.7).curveTo(-3.6,8.7,-6.1,6.1).closePath();
	this.shape_195.setTransform(208.3,192);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.3,23.4).curveTo(-33,13.7,-33,-0).curveTo(-33,-13.7,-23.3,-23.3).curveTo(-13.7,-33,-0,-33).curveTo(13.7,-33,23.3,-23.3).curveTo(33,-13.7,33,-0).curveTo(33,13.7,23.3,23.4).curveTo(13.7,33,-0,33).curveTo(-13.7,33,-23.3,23.4).closePath();
	this.shape_196.setTransform(225.3,238);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.3,23.4).curveTo(-33,13.7,-33,-0).curveTo(-33,-13.7,-23.3,-23.3).curveTo(-13.7,-33,-0,-33).curveTo(13.7,-33,23.4,-23.3).curveTo(33,-13.7,33,-0).curveTo(33,13.7,23.4,23.4).curveTo(13.7,33,-0,33).curveTo(-13.7,33,-23.3,23.4).closePath();
	this.shape_197.setTransform(173.3,238);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#494A4E").beginStroke().moveTo(-23.3,23.3).curveTo(-33,13.7,-33,0).curveTo(-33,-13.7,-23.3,-23.3).curveTo(-13.7,-33,-0,-33).curveTo(13.7,-33,23.4,-23.3).curveTo(33,-13.7,33,0).curveTo(33,13.7,23.4,23.3).curveTo(13.7,33,-0,33).curveTo(-13.7,33,-23.3,23.3).closePath();
	this.shape_198.setTransform(199.3,200.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#494A4E").beginStroke().moveTo(-11.4,7.6).lineTo(7.6,-11.4).lineTo(11.4,-7.6).lineTo(-7.6,11.4).closePath();
	this.shape_199.setTransform(208.6,295.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.7,-12.9).lineTo(-12.9,-16.7).lineTo(16.7,12.9).lineTo(12.9,16.7).closePath();
	this.shape_200.setTransform(185.1,300.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.7,65.5).lineTo(-2.7,-65.5).lineTo(2.7,-65.5).lineTo(2.7,65.5).closePath();
	this.shape_201.setTransform(199.3,296.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#28292B").beginStroke().moveTo(-28.8,14.7).lineTo(-28.6,12.8).curveTo(-28.3,11,-27.2,10).lineTo(-25.8,9.1).curveTo(-24.9,8.6,-24.7,7.9).curveTo(-24.4,7.2,-24.8,6.2).lineTo(-25.4,4.6).curveTo(-25.8,3,-25.2,1.2).curveTo(-24,-2.3,-20.5,-3.1).lineTo(-18.9,-3.5).curveTo(-18.1,-3.7,-17.6,-4.3).curveTo(-17.3,-4.9,-17.2,-6).curveTo(-17.2,-7.3,-17.1,-7.7).curveTo(-16.7,-9.3,-15.1,-10.4).curveTo(-13.7,-11.3,-11.9,-11.5).curveTo(-10.2,-11.8,-9,-11.4).curveTo(-7.8,-11.1,-6.6,-10).lineTo(-5.4,-11.9).curveTo(-4.6,-13.1,-3.8,-13.7).curveTo(-2.5,-14.6,-0.8,-14.7).curveTo(0.9,-14.8,2.4,-14.1).curveTo(3.6,-13.5,4.6,-12.2).curveTo(5.4,-11.4,5.9,-11.2).curveTo(6.4,-11.1,7.5,-11.2).curveTo(10.2,-11.5,11.4,-11.5).curveTo(13.8,-11.4,15.1,-10.4).curveTo(16.4,-9.5,17.1,-7.7).lineTo(18.3,-4.6).curveTo(19,-3.6,21.1,-2.7).curveTo(23.2,-1.8,24,-0.7).curveTo(25.1,0.8,25,2.3).lineTo(24.2,5.4).curveTo(23.7,7.2,25.1,8.4).lineTo(27.6,10.6).curveTo(29,12.1,28.8,14.7).closePath();
	this.shape_202.setTransform(496,342.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#28292B").beginStroke().moveTo(-28.1,14.3).lineTo(-27.9,12.5).curveTo(-27.5,10.6,-26.5,9.7).lineTo(-25.1,8.8).curveTo(-24.3,8.3,-24.1,7.7).curveTo(-23.8,7,-24.2,6).lineTo(-24.8,4.5).curveTo(-25.2,2.9,-24.6,1.1).curveTo(-23.5,-2.3,-20,-3.1).lineTo(-18.5,-3.4).curveTo(-17.6,-3.7,-17.2,-4.3).curveTo(-16.8,-4.8,-16.8,-5.9).curveTo(-16.8,-7.3,-16.7,-7.6).curveTo(-16.3,-9.2,-14.7,-10.2).curveTo(-13.4,-11,-11.6,-11.3).curveTo(-9.9,-11.5,-8.7,-11.2).curveTo(-7.6,-10.8,-6.4,-9.8).lineTo(-5.2,-11.7).curveTo(-4.6,-12.8,-3.7,-13.4).curveTo(-2.5,-14.3,-0.7,-14.3).curveTo(0.9,-14.4,2.3,-13.8).curveTo(3.5,-13.2,4.5,-11.9).curveTo(5.2,-11.1,5.7,-11).curveTo(6.2,-10.9,7.3,-11).curveTo(10,-11.3,11.1,-11.2).curveTo(13.4,-11.2,14.7,-10.2).curveTo(16,-9.3,16.7,-7.5).lineTo(17.9,-4.6).curveTo(18.6,-3.5,20.6,-2.7).curveTo(22.7,-1.8,23.4,-0.8).curveTo(24.5,0.7,24.4,2.2).lineTo(23.6,5.3).curveTo(23.2,7,24.5,8.2).lineTo(26.9,10.3).curveTo(28.3,11.9,28.1,14.3).closePath();
	this.shape_203.setTransform(243.3,342.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#28292B").beginStroke().moveTo(-37.9,19.3).curveTo(-37.9,18.3,-37.6,16.8).curveTo(-37.1,14.3,-35.7,13.1).lineTo(-33.9,12).curveTo(-32.8,11.2,-32.5,10.4).curveTo(-32.1,9.5,-32.6,8.1).lineTo(-33.4,6).curveTo(-34,3.8,-33.2,1.5).curveTo(-31.6,-3,-26.9,-4.1).lineTo(-24.9,-4.6).curveTo(-23.8,-4.9,-23.2,-5.7).curveTo(-22.7,-6.5,-22.7,-7.9).curveTo(-22.7,-9.7,-22.5,-10.2).curveTo(-21.9,-12.3,-19.8,-13.7).curveTo(-18,-14.8,-15.7,-15.2).curveTo(-13.4,-15.5,-11.8,-15).curveTo(-10.3,-14.5,-8.7,-13.1).curveTo(-8.3,-13.6,-7.1,-15.7).curveTo(-6.2,-17.3,-5,-18.1).curveTo(-3.4,-19.2,-1.1,-19.3).curveTo(1.2,-19.4,3.1,-18.5).curveTo(4.6,-17.8,6.1,-16).curveTo(7,-15,7.7,-14.8).curveTo(8.3,-14.6,9.8,-14.7).curveTo(13.4,-15.1,15,-15.1).curveTo(18.1,-15,19.8,-13.7).curveTo(21.5,-12.5,22.4,-10.1).curveTo(23.8,-6.6,24.1,-6.1).curveTo(24.9,-4.7,27.7,-3.5).curveTo(30.5,-2.3,31.5,-1).curveTo(32.9,1,32.8,3).lineTo(31.8,7.1).curveTo(31.2,9.4,32.9,11).curveTo(33.9,12,36.2,13.9).curveTo(38.1,16,37.8,19.3).closePath();
	this.shape_204.setTransform(836.3,336.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#28292B").beginStroke().moveTo(-61,29.7).curveTo(-59.2,27.9,-59,26.8).curveTo(-58.9,25.6,-61.1,21.8).curveTo(-63.4,18.1,-63,16.8).curveTo(-62.6,15.5,-58.8,13.6).curveTo(-54.8,11.7,-54.3,10.5).curveTo(-53.7,9.3,-54.8,5.1).curveTo(-55.9,1,-55.2,-0.2).curveTo(-54.4,-1.3,-50.2,-2).curveTo(-45.9,-2.8,-45.1,-3.8).curveTo(-44.2,-4.7,-44.1,-9.1).curveTo(-44,-13.4,-43,-14.3).curveTo(-41.9,-15.2,-37.7,-14.7).curveTo(-33.3,-14.2,-32.2,-14.9).curveTo(-31.1,-15.6,-29.8,-19.8).curveTo(-28.5,-23.8,-27.2,-24.4).curveTo(-26,-25,-22.1,-23.3).curveTo(-18,-21.6,-16.8,-21.9).curveTo(-15.6,-22.3,-13.1,-26).curveTo(-10.7,-29.6,-9.3,-29.7).curveTo(-8,-29.7,-4.6,-27.1).curveTo(-1.3,-24.4,0,-24.4).curveTo(1.3,-24.4,4.7,-27.2).curveTo(8,-29.9,9.4,-29.7).curveTo(10.7,-29.5,13.1,-25.9).curveTo(15.6,-22.3,16.8,-21.9).curveTo(18.1,-21.6,22.1,-23.3).curveTo(26,-25,27.3,-24.4).curveTo(28.5,-23.8,29.9,-19.8).curveTo(31.2,-15.6,32.3,-14.9).curveTo(33.3,-14.2,37.7,-14.7).curveTo(41.9,-15.2,43,-14.3).curveTo(44,-13.4,44.2,-9.1).curveTo(44.3,-4.7,45.1,-3.8).curveTo(46,-2.8,50.3,-2).curveTo(54.5,-1.3,55.2,-0.2).curveTo(56,1,54.9,5.1).curveTo(53.7,9.4,54.3,10.5).curveTo(54.8,11.7,58.8,13.6).curveTo(62.6,15.5,63,16.8).curveTo(63.4,18.1,61.2,21.8).curveTo(58.9,25.5,59.1,26.8).curveTo(59.3,28,61.1,29.7).closePath();
	this.shape_205.setTransform(900.4,326.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#28292B").beginStroke().moveTo(-51.5,25.1).curveTo(-49.9,23.5,-49.8,22.6).curveTo(-49.7,21.5,-51.6,18.4).curveTo(-53.5,15.3,-53.1,14.2).curveTo(-52.8,13.1,-49.6,11.5).curveTo(-46.3,9.9,-45.8,8.9).curveTo(-45.4,7.9,-46.3,4.3).curveTo(-47.2,0.8,-46.6,-0.2).curveTo(-46,-1.2,-42.4,-1.7).curveTo(-38.8,-2.4,-38.1,-3.2).curveTo(-37.3,-4,-37.3,-7.7).curveTo(-37.2,-11.3,-36.3,-12.1).curveTo(-35.4,-12.8,-31.9,-12.4).curveTo(-28.2,-12,-27.3,-12.6).curveTo(-26.3,-13.2,-25.2,-16.7).curveTo(-24.1,-20.1,-23,-20.6).curveTo(-22,-21.1,-18.7,-19.7).curveTo(-15.3,-18.2,-14.2,-18.5).curveTo(-13.2,-18.8,-11.1,-22).curveTo(-9.1,-24.9,-7.9,-25).curveTo(-6.8,-25.1,-4,-22.9).curveTo(-1.2,-20.6,-0,-20.6).curveTo(1.1,-20.6,3.9,-22.9).curveTo(6.7,-25.2,7.8,-25).curveTo(9,-24.9,11,-21.9).curveTo(13.1,-18.8,14.1,-18.5).curveTo(15.2,-18.2,18.6,-19.7).curveTo(21.9,-21.1,23,-20.6).curveTo(24,-20.1,25.1,-16.7).curveTo(26.3,-13.2,27.2,-12.6).curveTo(28.1,-12,31.8,-12.4).curveTo(35.4,-12.8,36.2,-12.1).curveTo(37.1,-11.3,37.2,-7.7).curveTo(37.3,-4,38,-3.2).curveTo(38.7,-2.4,42.4,-1.7).curveTo(45.9,-1.2,46.5,-0.2).curveTo(47.2,0.8,46.3,4.3).curveTo(45.3,7.9,45.7,8.9).curveTo(46.2,9.9,49.5,11.5).curveTo(52.7,13.1,53.1,14.2).curveTo(53.4,15.3,51.6,18.4).curveTo(49.6,21.6,49.8,22.6).curveTo(49.9,23.6,51.5,25.1).closePath();
	this.shape_206.setTransform(54.8,332);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#28292B").beginStroke().moveTo(-47.2,23).curveTo(-45.8,21.6,-45.6,20.7).curveTo(-45.5,19.7,-47.3,16.8).curveTo(-49,14,-48.6,13).curveTo(-48.4,12,-45.4,10.5).curveTo(-42.3,9,-42,8.1).curveTo(-41.5,7.2,-42.4,3.9).curveTo(-43.3,0.8,-42.7,-0.1).curveTo(-42.1,-1,-38.9,-1.6).curveTo(-35.5,-2.2,-34.8,-2.9).curveTo(-34.2,-3.7,-34.1,-7).curveTo(-34,-10.3,-33.2,-11).curveTo(-32.4,-11.7,-29.1,-11.4).curveTo(-25.8,-11,-24.9,-11.5).curveTo(-24.1,-12,-23.1,-15.3).curveTo(-22.1,-18.4,-21.1,-18.8).curveTo(-20.1,-19.3,-17,-18).curveTo(-14,-16.7,-13,-17).curveTo(-12.1,-17.2,-10.2,-20.1).curveTo(-8.3,-22.8,-7.2,-22.9).curveTo(-6.2,-23,-3.6,-20.9).curveTo(-1,-18.8,-0,-18.8).curveTo(1,-18.8,3.6,-21).curveTo(6.1,-23.1,7.2,-22.9).curveTo(8.3,-22.8,10.2,-20).curveTo(12,-17.2,13,-17).curveTo(13.9,-16.7,17.1,-18).curveTo(20.1,-19.3,21,-18.8).curveTo(22,-18.4,23,-15.3).curveTo(24.1,-12.1,24.9,-11.5).curveTo(25.8,-11,29.2,-11.4).curveTo(32.4,-11.7,33.2,-11).curveTo(34.1,-10.3,34.1,-7).curveTo(34.2,-3.7,34.8,-2.9).curveTo(35.5,-2.2,38.9,-1.6).curveTo(42.1,-1,42.7,-0.1).curveTo(43.2,0.8,42.4,3.9).curveTo(41.6,7.2,41.9,8.1).curveTo(42.3,9,45.4,10.5).curveTo(48.3,12,48.7,13).curveTo(48.9,14,47.2,16.8).curveTo(45.5,19.7,45.6,20.7).curveTo(45.7,21.5,47.2,23).closePath();
	this.shape_207.setTransform(376.6,334.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(125));

	// fuetne
	this.instance_13 = new lib.basurerofuente();
	this.instance_13.parent = this;
	this.instance_13.setTransform(457,312,0.669,0.669,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-360},41).to({rotation:-720},41).to({rotation:-1080},42).wait(1));

	// fuente
	this.instance_14 = new lib.basurerofuente();
	this.instance_14.parent = this;
	this.instance_14.setTransform(567.1,312,0.669,0.669,-135,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:0,rotation:360,x:567},41).to({rotation:720},41).to({rotation:1080},42).wait(1));

	// piso
	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_208.setTransform(1531.2,438.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_209.setTransform(15,438.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_210.setTransform(560.1,438.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]}).wait(125));

	// Ambient
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_211.setTransform(525,182.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_212.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_212},{t:this.shape_211}]}).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525,257.5,1999,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;