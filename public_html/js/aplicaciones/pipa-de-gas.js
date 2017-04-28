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



(lib.pipaInterpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.2,17.4).curveTo(-19,15.5,-19,12.9).curveTo(-19,10.7,-17.6,9).curveTo(-16.2,7.2,-14.1,6.8).curveTo(-14.1,5.9,-13.9,5.2).curveTo(-14.8,3.7,-14.8,2).curveTo(-14.8,-0.2,-13.4,-1.8).curveTo(-12,-3.5,-9.9,-3.9).curveTo(-11.2,-6.4,-10.2,-9.1).curveTo(-9.2,-11.7,-6.7,-12.8).curveTo(-4.2,-14,-1.6,-13).curveTo(-0.8,-12.7,0,-12.2).curveTo(-0.2,-13.8,0.3,-15.2).curveTo(1.2,-17.5,3.4,-18.5).curveTo(5.7,-19.5,8,-18.7).curveTo(8.9,-18.4,9.9,-17.6).curveTo(10.9,-18.7,12.5,-19.1).curveTo(14.1,-19.5,15.6,-18.9).curveTo(17.6,-18.1,18.5,-16.1).curveTo(19.4,-14.2,18.7,-12.1).curveTo(18,-10.1,16.1,-9.2).curveTo(14.2,-8.3,12.1,-8.9).curveTo(12.4,-7.2,11.8,-5.7).curveTo(10.8,-3,8.2,-1.9).curveTo(9.8,0.8,8.7,3.7).curveTo(7.7,6.3,5.2,7.5).curveTo(2.7,8.6,0.1,7.7).lineTo(-0.8,7.3).curveTo(-0.9,9.7,-2.5,11.4).curveTo(-4.1,13.2,-6.4,13.5).curveTo(-6.6,16,-8.4,17.6).curveTo(-10.3,19.3,-12.7,19.3).curveTo(-15.3,19.3,-17.2,17.4).closePath();
	this.shape.setTransform(0.4,0.2,2.497,2.497,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-55.5,75.4,111);


(lib.pipahandss = function(mode,startPosition,loop) {
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


(lib.pipachefsin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.3,17.8).lineTo(1.3,17.7).curveTo(1.3,17.4,1.1,17.2).curveTo(0.8,16.8,0.4,16.8).curveTo(0,16.8,-0.2,17.2).curveTo(-0.4,17.4,-0.5,17.7).lineTo(-0.5,17.8).lineTo(-2.4,17.8).lineTo(-2.4,17.7).curveTo(-2.4,17.4,-2.6,17.2).curveTo(-2.9,16.8,-3.3,16.8).curveTo(-3.6,16.8,-3.9,17.2).curveTo(-4.2,17.4,-4.2,17.7).lineTo(-4.2,17.8).lineTo(-5.6,17.8).lineTo(-5.6,3.5).lineTo(-0.6,0.2).lineTo(2.7,0.2).curveTo(4.9,0.2,6.4,1.7).curveTo(7.9,3.2,7.9,5.3).lineTo(7.9,9.5).lineTo(11.4,7.9).curveTo(11.1,7.7,10.9,7.3).lineTo(10.3,6.1).lineTo(10.7,6.1).curveTo(11.7,6.2,12.4,5.4).lineTo(12.6,5.3).lineTo(12.8,5.4).curveTo(13.4,6.2,14.5,6.1).curveTo(15.4,6.2,16.1,5.4).lineTo(16.3,5.3).lineTo(16.5,5.4).curveTo(17.1,6.2,18.2,6.1).curveTo(19.1,6.2,19.9,5.4).lineTo(20,5.3).lineTo(20.2,5.4).curveTo(20.9,6.2,21.9,6.1).curveTo(22.9,6.2,23.6,5.4).lineTo(23.7,5.3).lineTo(23.9,5.4).curveTo(24.6,6.2,25.6,6.1).lineTo(25.9,6.1).lineTo(25.5,7.3).curveTo(25.3,7.6,25,7.9).curveTo(24.7,8.1,24.2,8.1).lineTo(16.2,8.1).lineTo(16.3,8.3).curveTo(16.6,9,16.4,10).curveTo(16,10.8,15.1,11.2).lineTo(6.6,14.9).curveTo(6.1,15.1,5.5,15.1).curveTo(4.9,15.1,4.5,14.8).curveTo(4,14.5,3.8,14).curveTo(3.5,13.5,3.5,12.9).lineTo(3.5,5.3).curveTo(3.5,5,3.3,4.9).curveTo(3,4.6,2.6,4.6).lineTo(2.6,17.8).closePath().moveTo(-0.2,11.1).curveTo(-0.4,11.4,-0.5,11.7).curveTo(-0.4,12.1,-0.2,12.3).curveTo(0,12.6,0.4,12.6).curveTo(0.8,12.6,1.1,12.3).curveTo(1.3,12.1,1.3,11.7).curveTo(1.3,11.4,1.1,11.1).curveTo(0.8,10.9,0.4,10.9).curveTo(0,10.9,-0.2,11.1).closePath().moveTo(-3.9,11.1).curveTo(-4.2,11.4,-4.2,11.7).curveTo(-4.2,12.1,-3.9,12.3).curveTo(-3.6,12.6,-3.3,12.6).curveTo(-2.9,12.6,-2.6,12.3).curveTo(-2.4,12.1,-2.4,11.7).curveTo(-2.4,11.4,-2.6,11.1).curveTo(-2.9,10.9,-3.3,10.9).curveTo(-3.6,10.9,-3.9,11.1).closePath().moveTo(-0.2,5).curveTo(-0.4,5.3,-0.5,5.7).curveTo(-0.4,6.1,-0.2,6.3).curveTo(0,6.5,0.4,6.6).curveTo(0.8,6.5,1.1,6.3).curveTo(1.3,6.1,1.3,5.7).curveTo(1.3,5.3,1.1,5).curveTo(0.8,4.8,0.4,4.8).curveTo(0,4.8,-0.2,5).closePath().moveTo(-3.9,5).curveTo(-4.2,5.3,-4.2,5.7).curveTo(-4.2,6.1,-3.9,6.3).curveTo(-3.6,6.5,-3.3,6.6).curveTo(-2.9,6.5,-2.6,6.3).curveTo(-2.4,6.1,-2.4,5.7).curveTo(-2.4,5.3,-2.6,5).curveTo(-2.9,4.8,-3.3,4.8).curveTo(-3.6,4.8,-3.9,5).closePath().moveTo(-9.1,17.8).lineTo(-9.1,4.6).curveTo(-9.5,4.6,-9.7,4.9).curveTo(-9.9,5.1,-10,5.4).lineTo(-10,13).curveTo(-10,13.5,-10.3,14).curveTo(-10.7,14.6,-11.2,14.8).curveTo(-11.7,15.1,-12.3,15.1).curveTo(-12.9,15.1,-13.4,14.8).lineTo(-17.3,12.3).curveTo(-17.3,12.8,-17.6,13.2).curveTo(-17.9,13.7,-18.4,13.8).curveTo(-19.1,14,-19.6,13.7).curveTo(-20.3,13.3,-20.4,12.6).lineTo(-21,10).curveTo(-21.9,9.4,-22.1,8.4).curveTo(-22.3,7.4,-21.7,6.7).curveTo(-21.9,5.6,-22.3,4.5).curveTo(-23.7,3.4,-24.8,2.3).curveTo(-26.6,0.6,-26.8,-0.4).curveTo(-27.4,-1.9,-26.6,-3.3).curveTo(-25.9,-4.7,-24.4,-5.2).curveTo(-22.8,-5.7,-21.4,-5).curveTo(-20,-4.2,-19.5,-2.7).curveTo(-19.1,-1.6,-19.6,0.7).curveTo(-20,2.3,-20.4,3.9).lineTo(-19.9,5.8).curveTo(-19.3,5.8,-18.7,6.1).lineTo(-14.4,8.9).lineTo(-14.4,5.3).curveTo(-14.4,3.2,-12.9,1.7).curveTo(-11.3,0.2,-9.2,0.2).lineTo(-3.8,0.2).lineTo(-6.9,2.3).curveTo(-7.4,2.6,-7.4,3.1).lineTo(-7.4,17.8).closePath().moveTo(-23.4,1).lineTo(-24.6,-2.8).curveTo(-25,-2.5,-25,-2).curveTo(-25.1,-1.4,-25,-1).curveTo(-24.8,-0.4,-23.4,1).closePath().moveTo(-21.5,0.4).curveTo(-21.2,-1.6,-21.3,-2.1).curveTo(-21.5,-2.6,-21.9,-3).curveTo(-22.3,-3.3,-22.8,-3.4).closePath().moveTo(24.7,4).curveTo(24.3,3.7,23.7,3.7).curveTo(23.2,3.7,22.8,4).curveTo(22.4,4.4,21.9,4.4).curveTo(21.3,4.4,21,4).curveTo(20.5,3.7,20,3.7).curveTo(19.4,3.7,19.1,4).curveTo(18.7,4.4,18.2,4.4).curveTo(17.6,4.4,17.3,4).curveTo(16.9,3.7,16.3,3.7).curveTo(15.8,3.7,15.4,4).curveTo(15,4.4,14.5,4.4).curveTo(13.9,4.4,13.5,4).curveTo(13.1,3.7,12.6,3.7).curveTo(12.1,3.7,11.6,4).curveTo(11.3,4.4,10.7,4.4).curveTo(10.2,4.4,9.8,4).curveTo(9.2,3.5,9.3,2.8).curveTo(9.3,2,9.7,1.3).curveTo(10.8,-0.5,13.4,-1.7).curveTo(14.2,-2,15.6,-2.3).curveTo(17.1,-2.7,18.1,-2.7).lineTo(18.2,-2.7).curveTo(19.2,-2.7,20.8,-2.3).curveTo(22.1,-2,22.9,-1.7).curveTo(25.4,-0.6,26.5,1.3).curveTo(27,2,27.1,2.8).curveTo(27,3.5,26.5,4).lineTo(26.5,4).curveTo(26.1,4.4,25.6,4.4).curveTo(25,4.4,24.7,4).closePath().moveTo(17.6,-0.3).curveTo(17.5,0.4,17.5,0.7).curveTo(17.5,1.1,17.6,1.3).curveTo(17.8,1.4,18.2,1.4).curveTo(18.4,1.4,18.6,1.3).curveTo(18.9,1.1,18.9,0.7).curveTo(18.9,0.4,18.6,-0.3).curveTo(18.4,-1,18.2,-1).curveTo(17.9,-1,17.6,-0.3).closePath().moveTo(20.3,-1.4).curveTo(20.1,-1.2,20.4,-0.5).curveTo(20.7,0,21,0.3).curveTo(21.2,0.6,21.5,0.5).curveTo(21.8,0.6,22,0.3).curveTo(22.3,0.1,22.2,-0.2).curveTo(22.3,-0.5,22,-0.7).lineTo(21.1,-1.3).lineTo(20.5,-1.5).lineTo(20.3,-1.4).closePath().moveTo(15.2,-1.3).curveTo(14.5,-1,14.3,-0.7).curveTo(14.1,-0.5,14.1,-0.2).curveTo(14.1,0.1,14.3,0.3).curveTo(14.5,0.6,14.8,0.5).curveTo(15.1,0.6,15.3,0.3).curveTo(15.6,0,15.9,-0.5).curveTo(16.2,-1.2,16,-1.4).lineTo(15.8,-1.5).curveTo(15.6,-1.5,15.2,-1.3).closePath().moveTo(-7,-4.3).curveTo(-7.7,-6,-7.8,-7.7).lineTo(-7.8,-9.7).curveTo(-8.8,-9.7,-9.6,-10.4).curveTo(-10.2,-10.7,-10.5,-11.4).curveTo(-10.8,-12,-10.9,-12.8).curveTo(-10.8,-14,-10,-14.9).curveTo(-9.1,-15.8,-7.8,-15.8).curveTo(-7,-15.8,-6.2,-15.4).curveTo(-6,-16.5,-5.2,-17.1).curveTo(-4.3,-17.8,-3.3,-17.8).curveTo(-2.2,-17.8,-1.4,-17.1).curveTo(-0.5,-16.4,-0.3,-15.4).curveTo(0.4,-15.8,1.4,-15.8).curveTo(2.6,-15.8,3.5,-14.9).curveTo(4.4,-14,4.4,-12.8).curveTo(4.4,-12,4.1,-11.4).curveTo(3.7,-10.7,3.2,-10.4).curveTo(2.4,-9.7,1.4,-9.7).lineTo(1.3,-7.7).curveTo(1.2,-5.6,-0.1,-3.4).curveTo(-1.5,-1.1,-3.3,-1.1).curveTo(-5.7,-1.1,-7,-4.3).closePath().moveTo(-5.8,-5.5).curveTo(-5.8,-4.5,-5,-3.8).curveTo(-4.3,-3.1,-3.3,-3.1).curveTo(-2.2,-3.1,-1.6,-3.8).curveTo(-0.8,-4.5,-0.8,-5.5).lineTo(-0.8,-5.8).lineTo(-1.3,-5.3).curveTo(-2,-4.4,-3.3,-4.4).curveTo(-4.5,-4.4,-5.4,-5.3).lineTo(-5.8,-5.7).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-17.8,54.1,35.6);


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


(lib.pipa0012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-40.8,13.4).curveTo(-41.4,11.2,-41.4,9.4).curveTo(-41.4,-0,-29.3,-6.7).curveTo(-17.2,-13.4,-0,-13.4).curveTo(17.1,-13.4,29.3,-6.7).curveTo(41.4,-0,41.4,9.4).curveTo(41.4,11.2,40.8,13.4).closePath();
	this.shape.setTransform(41.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.9,26.8);


(lib.pipa0011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-40.8,13.4).curveTo(-41.4,11.2,-41.4,9.4).curveTo(-41.4,-0,-29.3,-6.7).curveTo(-17.2,-13.4,-0.1,-13.4).curveTo(17.1,-13.4,29.3,-6.7).curveTo(41.4,-0,41.4,9.4).curveTo(41.4,11.2,40.8,13.4).closePath();
	this.shape.setTransform(41.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.8,26.8);


(lib.pipa0010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C1C4CF").beginStroke().moveTo(-51.1,16.8).curveTo(-52,14.2,-52,11.7).curveTo(-52,-0.1,-36.8,-8.4).curveTo(-21.5,-16.8,-0,-16.8).curveTo(21.5,-16.8,36.7,-8.4).curveTo(52,-0.1,52,11.7).curveTo(52,14,51.1,16.8).closePath();
	this.shape.setTransform(52,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,33.6);


(lib.pipa009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-34.1,11.2).curveTo(-34.6,9.5,-34.6,7.8).curveTo(-34.7,-0.1,-24.5,-5.6).curveTo(-14.4,-11.2,-0,-11.2).curveTo(14.4,-11.2,24.5,-5.6).curveTo(34.7,-0.1,34.6,7.8).curveTo(34.6,9.5,34.1,11.2).closePath();
	this.shape.setTransform(34.7,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,22.4);


(lib.pipa008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-25.5,5.8).curveTo(-36.1,0,-36.1,-8.2).curveTo(-36.1,-9.8,-35.5,-11.7).lineTo(35.5,-11.7).curveTo(36.1,-9.8,36.1,-8.2).curveTo(36.1,0,25.5,5.8).curveTo(15,11.7,0,11.7).curveTo(-15,11.7,-25.5,5.8).closePath();
	this.shape.setTransform(36.1,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.3,23.3);


(lib.pipa007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C1C4CF").beginStroke().moveTo(-25.6,5.8).curveTo(-36.1,0,-36.1,-8.2).curveTo(-36.1,-10,-35.5,-11.7).lineTo(35.5,-11.7).curveTo(36.1,-10,36.1,-8.2).curveTo(36.1,0,25.5,5.8).curveTo(14.9,11.7,-0,11.7).curveTo(-15,11.7,-25.6,5.8).closePath();
	this.shape.setTransform(36.1,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.2,23.3);


(lib.pipa006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-15.2,8.4).curveTo(-21.5,4.9,-21.5,0).curveTo(-21.5,-4.9,-15.2,-8.4).curveTo(-8.9,-11.8,0,-11.8).curveTo(8.9,-11.8,15.2,-8.4).curveTo(21.5,-4.9,21.5,0).curveTo(21.5,4.9,15.2,8.4).curveTo(8.9,11.8,0,11.8).curveTo(-8.9,11.8,-15.2,8.4).closePath();
	this.shape.setTransform(21.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,23.7);


(lib.pipa005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-29,8.9).curveTo(-41.1,2.3,-41.1,-7).curveTo(-41.1,-11.5,-38,-15.5).lineTo(38,-15.5).curveTo(41.1,-11.5,41.1,-7).curveTo(41.1,2.3,29,8.9).curveTo(17,15.5,0,15.5).curveTo(-17,15.5,-29,8.9).closePath();
	this.shape.setTransform(41.1,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.2,31.1);


(lib.pipa004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C1C4CF").beginStroke().moveTo(-15.7,7.1).curveTo(-22.2,4.2,-22.1,0).curveTo(-22.2,-4.1,-15.7,-7.1).curveTo(-9.2,-10,-0,-9.9).curveTo(9.1,-10,15.6,-7.1).curveTo(22.2,-4.1,22.1,0).curveTo(22.2,4.1,15.6,7.1).curveTo(9.1,9.9,-0,9.9).curveTo(-9.2,9.9,-15.7,7.1).closePath();
	this.shape.setTransform(22.2,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.3,19.9);


(lib.pipa003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C1C4CF").beginStroke().moveTo(-15.7,7.1).curveTo(-22.2,4.2,-22.1,0).curveTo(-22.2,-4.1,-15.7,-7.1).curveTo(-9.2,-10,-0,-9.9).curveTo(9.1,-10,15.6,-7.1).curveTo(22.2,-4.1,22.1,0).curveTo(22.2,4.1,15.6,7.1).curveTo(9.1,9.9,-0,9.9).curveTo(-9.2,9.9,-15.7,7.1).closePath();
	this.shape.setTransform(22.2,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.3,19.9);


(lib.pipa002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C1C4CF").beginStroke().moveTo(-15.7,7.1).curveTo(-22.2,4.1,-22.2,0).curveTo(-22.2,-4.1,-15.7,-7.1).curveTo(-9.2,-10,0,-9.9).curveTo(9.2,-10,15.7,-7.1).curveTo(22.2,-4.1,22.2,0).curveTo(22.2,4.1,15.7,7.1).curveTo(9.2,9.9,0,9.9).curveTo(-9.2,9.9,-15.7,7.1).closePath();
	this.shape.setTransform(22.2,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.4,19.9);


(lib.pipa001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C1C4CF").beginStroke().moveTo(-16.6,7.4).curveTo(-23.4,4.3,-23.4,-0).curveTo(-23.4,-4.3,-16.6,-7.5).curveTo(-9.7,-10.6,-0,-10.6).curveTo(9.7,-10.6,16.6,-7.5).curveTo(23.4,-4.3,23.4,-0).curveTo(23.4,4.3,16.6,7.4).curveTo(9.7,10.5,-0,10.5).curveTo(-9.7,10.5,-16.6,7.4).closePath();
	this.shape.setTransform(23.4,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,21.1);


(lib.pipa0016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FC191D").beginStroke().moveTo(-22.5,5.4).lineTo(-22.7,3.9).curveTo(-22.3,3.5,-22.3,2).curveTo(-22.3,1.4,-21.6,0.9).lineTo(-21,0.4).curveTo(-21.2,1.9,-20.4,1.6).curveTo(-19.6,1.2,-20.4,-0.8).curveTo(-19.9,-0.5,-19.5,-0).curveTo(-19.1,0.4,-19.2,0.8).curveTo(-19.7,2.9,-18.8,2.7).curveTo(-18.2,2.6,-18.1,2.2).lineTo(-18.2,1).curveTo(-18.2,0.4,-17.6,0.1).curveTo(-17.4,-0,-17.1,-0).lineTo(-17.3,0.7).curveTo(-17.5,1.3,-17.2,1.5).curveTo(-16.7,1.8,-15.9,1.1).lineTo(-16.2,1.8).curveTo(-16.5,2.3,-15.7,2.5).curveTo(-14.9,2.6,-14.8,2.2).curveTo(-14.8,1.9,-15.1,0.7).curveTo(-15.3,-0.2,-14.8,-1.2).lineTo(-14.2,-2).curveTo(-14.8,-1.2,-14.1,0.2).curveTo(-13.5,1.6,-13.1,1.3).curveTo(-12.6,1,-13.2,-0).lineTo(-12.8,0.3).curveTo(-12.4,0.7,-12.4,1).curveTo(-12.2,1.5,-11.8,1.7).curveTo(-11.8,1,-12.1,0.2).curveTo(-12.3,-0.4,-12.2,-1).lineTo(-12.1,-1.6).lineTo(-12.1,-1).curveTo(-12,-0.3,-11.6,-0.1).curveTo(-11.1,0.2,-10.2,1.2).curveTo(-9.9,0.8,-10.1,-0.5).curveTo(-10.3,-1.8,-9.2,-4).curveTo(-9.2,-2.8,-7.8,-0.8).curveTo(-7.4,-0,-7.6,2.1).curveTo(-6.2,1.2,-6.5,0.4).curveTo(-6.2,1.2,-6.3,2.2).curveTo(-6.2,1.8,-5.9,1.5).lineTo(-5.5,1).curveTo(-5.7,2.5,-5,2.9).curveTo(-5,2.3,-5.1,1.8).curveTo(-5.2,1.4,-5.1,0.9).lineTo(-4.9,0.6).lineTo(-4.9,1).curveTo(-4.7,1.6,-4.4,1.8).curveTo(-3.9,2.1,-4.5,0.3).curveTo(-4.7,-0.1,-4.4,-0.8).lineTo(-4,-1.2).curveTo(-4.4,-0.4,-3.8,0.4).curveTo(-3.5,0.8,-3.1,1.1).lineTo(-3.1,0.6).curveTo(-3.1,0.1,-2.9,-0.3).curveTo(-2.6,-0.8,-2.7,-1.4).lineTo(-2.3,-0.8).curveTo(-2.1,-1.2,-2,-1.9).lineTo(-1.6,-1).curveTo(-1.4,-1,-1.8,-2.1).curveTo(-1.9,-2.5,-1.7,-3.3).lineTo(-1.7,-3.4).lineTo(-1.6,-3.1).curveTo(-1.4,-2.6,-1.2,-2.4).curveTo(-0.8,-2.1,-0.5,-1.4).curveTo(-0.4,-2,-0.6,-2.8).curveTo(-0.7,-3.7,0.4,-5.3).curveTo(0.3,-5.1,0.4,-4.6).curveTo(0.4,-3.7,1,-3).curveTo(1.9,-1.8,1.9,-0.8).curveTo(2.9,-1.3,2.7,-1.9).curveTo(2.9,-1.6,2.5,-0.5).curveTo(2.1,0.4,2.4,0.6).curveTo(2.8,0.9,3.1,0.5).curveTo(3.5,0.1,3.4,-0.5).curveTo(3.3,-0.9,3.9,-2.3).lineTo(4.4,-3.5).curveTo(4.3,-2.5,5.8,-0.6).curveTo(6.5,0.4,5.8,2.3).lineTo(6.5,1.7).curveTo(7.3,1.1,7.2,0.2).curveTo(7.5,0.7,7.5,1.8).lineTo(8.4,0.8).lineTo(8.2,1.1).curveTo(8.1,1.6,8.2,2).curveTo(8.2,2.6,8.4,2.6).curveTo(8.5,2.6,8.5,2.5).curveTo(8.5,2.5,8.6,2.5).curveTo(8.6,2.4,8.6,2.4).curveTo(8.6,2.3,8.6,2.2).lineTo(8.7,0.6).lineTo(8.9,1.1).curveTo(9.1,1.7,9.4,1.9).curveTo(10,2.2,9.2,-0).curveTo(9,-0.8,9.5,-1.2).curveTo(9.8,-1.5,10.1,-1.6).curveTo(9.5,-0.5,10.2,0.8).curveTo(10.9,1.9,11.7,1.5).curveTo(12.7,0.9,13.1,-1).curveTo(13.5,-0.5,13.4,0.7).lineTo(13.2,1.8).curveTo(13.2,1.9,13.2,2).curveTo(13.2,2,13.3,2.1).curveTo(13.3,2.1,13.3,2.1).curveTo(13.4,2.1,13.4,2).curveTo(13.6,1.9,13.5,1).curveTo(13.5,0.1,14.2,-0.7).lineTo(14.9,-1.4).curveTo(14.5,-0.1,15.3,0.8).curveTo(15.6,1.3,16.1,1.5).curveTo(16.4,1.2,16.6,-0).curveTo(16.7,-1.4,18.6,-1.8).curveTo(17.3,-0.9,17.6,0.8).curveTo(18,2.5,18.7,2).curveTo(19.4,1.7,19,0.3).curveTo(19.6,0.8,19.7,1.2).lineTo(19.6,2.5).curveTo(19.6,3.1,20.4,3.3).lineTo(21.9,3.4).curveTo(22.9,3.5,22.6,4.7).lineTo(22.7,5.4).closePath();
	this.shape.setTransform(22.5,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.5,45.4,10.7);


(lib.pipa0015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-119.5,3.3).curveTo(-119.5,-0.2,-118.9,-3.3).lineTo(118.9,-3.3).curveTo(119.5,-0.3,119.6,3.3).closePath();
	this.shape.setTransform(119.6,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.1,6.6);


(lib.pipa0014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-136.7,3.2).curveTo(-136.7,-0.4,-136,-3.2).lineTo(136,-3.2).curveTo(136.7,-0.4,136.7,3.2).closePath();
	this.shape.setTransform(136.7,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.5,6.4);


(lib.pipa0013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-35.7,1.4).lineTo(-35.7,-1.4).lineTo(35.7,-1.4).lineTo(35.7,1.4).closePath();
	this.shape.setTransform(35.7,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-35.7,4.6).lineTo(-35.7,-4.6).lineTo(35.7,-4.6).lineTo(35.7,4.6).closePath();
	this.shape_1.setTransform(35.7,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.4,9.3);


(lib.pipaconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.pipahandss();
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


(lib.pipagas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DF1421").beginStroke().moveTo(-4.3,9).curveTo(-6.6,9,-8.6,7.6).curveTo(-9.6,7,-10,5.2).lineTo(-10.3,3.6).lineTo(-10.3,-8).lineTo(-10.2,-8.4).curveTo(-10,-8.9,-9.3,-9).lineTo(-5.5,-9).curveTo(-4.3,-9,-4.5,-7.9).lineTo(-4.5,1.5).curveTo(-4.5,3.3,-4.1,3.8).curveTo(-3.3,4.9,-0.2,4.9).curveTo(2.9,5.1,3.9,3.7).curveTo(4.3,3.1,4.3,1.5).lineTo(4.3,-7.8).lineTo(4.4,-8.4).curveTo(4.6,-9,5.3,-9).lineTo(9.1,-9).curveTo(10,-9,10.2,-8.4).lineTo(10.3,-7.8).lineTo(10.3,2.8).curveTo(10.4,5,9.3,6.8).curveTo(8.6,8,6.3,8.7).lineTo(4.2,9).closePath();
	this.shape.setTransform(81.9,-51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DF1421").beginStroke().moveTo(-4.4,9).curveTo(-6.7,9,-8.7,7.6).curveTo(-9.6,7,-10.1,5.2).lineTo(-10.3,3.6).lineTo(-10.3,-8).lineTo(-10.2,-8.4).curveTo(-10,-8.9,-9.3,-9).lineTo(-5.6,-9).curveTo(-4.3,-9,-4.5,-7.9).lineTo(-4.5,1.5).curveTo(-4.5,3.3,-4.2,3.8).curveTo(-3.4,4.9,-0.2,4.9).curveTo(2.9,5.1,3.9,3.7).curveTo(4.3,3.1,4.3,1.5).lineTo(4.3,-7.8).curveTo(4.3,-8.1,4.4,-8.4).curveTo(4.6,-9,5.2,-9).lineTo(9.1,-9).curveTo(10.4,-9,10.3,-7.8).lineTo(10.3,2.8).curveTo(10.4,5,9.2,6.8).curveTo(8.5,8,6.2,8.7).lineTo(4.1,9).closePath();
	this.shape_1.setTransform(33.5,-51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DF1421").beginStroke().moveTo(9.4,9).lineTo(-6,9).curveTo(-8.8,9,-10.1,7.1).lineTo(-10.8,5.1).curveTo(-10.9,4.3,-10.7,3.4).curveTo(-10.2,1.5,-8.4,0.7).curveTo(-5.6,-0.5,4.1,-3.9).curveTo(4.5,-4.1,4.5,-4.4).curveTo(4.6,-4.8,3.7,-4.9).curveTo(2.8,-5.1,-3.3,-5).lineTo(-9.3,-4.9).curveTo(-10.3,-4.8,-10.3,-5.9).lineTo(-10.3,-8).curveTo(-10.2,-8.8,-9.6,-8.9).lineTo(-9,-9).lineTo(5.9,-8.9).curveTo(9.1,-8.8,10.3,-7).curveTo(10.9,-6,10.9,-5.1).lineTo(10.7,-3.2).curveTo(10.2,-1.1,8.3,-0.4).lineTo(2.3,1.7).curveTo(-1.8,3.1,-3.2,3.7).curveTo(-4.7,4.3,-4.4,4.6).curveTo(-4.2,4.9,-3.4,4.9).lineTo(9,4.9).lineTo(9.7,4.9).curveTo(10.5,5.1,10.5,5.7).lineTo(10.5,7.9).curveTo(10.5,9,9.6,9).lineTo(9.4,9).closePath();
	this.shape_2.setTransform(58,-51);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-10.5,7.9).lineTo(-10.5,5.7).curveTo(-10.5,5.1,-9.7,4.9).lineTo(-9,4.9).lineTo(3.4,4.9).curveTo(4.2,4.9,4.4,4.6).curveTo(4.7,4.3,3.2,3.7).curveTo(1.8,3.1,-2.3,1.7).lineTo(-8.2,-0.4).curveTo(-10.2,-1.1,-10.7,-3.2).lineTo(-10.9,-5.1).lineTo(-10.3,-7).curveTo(-9,-8.8,-5.8,-8.9).curveTo(-0.7,-9.1,9,-9).lineTo(9.6,-8.9).curveTo(10.2,-8.8,10.3,-8).lineTo(10.3,-5.9).curveTo(10.3,-4.8,9.4,-4.9).curveTo(-2.3,-5.2,-3.7,-4.9).curveTo(-4.6,-4.8,-4.5,-4.4).curveTo(-4.5,-4.1,-4,-3.9).lineTo(1.3,-2).lineTo(8.5,0.7).curveTo(10.2,1.5,10.7,3.4).curveTo(10.9,4.3,10.8,5.1).curveTo(10.8,6.1,10.1,7.1).curveTo(8.9,9,6.1,9).lineTo(-9.4,9).lineTo(-9.6,9).curveTo(-10.5,9,-10.5,7.9).closePath();
	this.shape_3.setTransform(9,-51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(2.1,9).lineTo(-1.9,9).curveTo(-2.7,9,-2.9,8.5).lineTo(-3,8).lineTo(-3,-8.2).curveTo(-3,-8.8,-2.4,-9).curveTo(-2.1,-9.1,-1.8,-9).lineTo(2.1,-9).lineTo(2.5,-8.9).curveTo(3,-8.7,3,-8.1).lineTo(3,8.1).curveTo(3,9,2.3,9).lineTo(2.1,9).closePath();
	this.shape_4.setTransform(-8.3,-51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.7).lineTo(-5.1,1.9).lineTo(-5.1,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.4).lineTo(-2.8,-4.4).curveTo(-2.1,-4.4,-2.2,-4).lineTo(-2.2,0.8).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.5).curveTo(1.5,2.5,2,1.9).curveTo(2.2,1.6,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4.1,4.4,2.1,4.5).closePath();
	this.shape_5.setTransform(-130.6,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.7).lineTo(-5.1,1.9).lineTo(-5.1,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.4).lineTo(-2.8,-4.4).curveTo(-2.1,-4.4,-2.2,-4).lineTo(-2.2,0.8).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.5,-0.1,2.5).curveTo(1.5,2.5,2,1.9).curveTo(2.2,1.6,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4.1,4.4,2.1,4.5).closePath();
	this.shape_6.setTransform(-154.8,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.5,4.5,-5.1,3.5).lineTo(-5.4,2.6).curveTo(-5.5,2.2,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).lineTo(-0.7,-1).lineTo(2,-1.9).curveTo(2.1,-1.9,2.1,-2).curveTo(2.1,-2,2.2,-2).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.2).curveTo(2.2,-2.2,2.2,-2.3).curveTo(2.2,-2.3,2.1,-2.4).curveTo(2.1,-2.4,2,-2.4).curveTo(1.9,-2.5,1.8,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-2.9).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).curveTo(5.6,-0.8,4.1,-0.2).curveTo(-0.4,1.3,-1.6,1.9).curveTo(-2.4,2.2,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.9).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_7.setTransform(-142.5,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,3.9).lineTo(-5.2,2.9).curveTo(-5.2,2.5,-4.8,2.4).lineTo(-4.5,2.4).lineTo(1.7,2.4).lineTo(2.2,2.3).curveTo(2.4,2.2,1.6,1.9).curveTo(0.9,1.5,-1.1,0.8).lineTo(-4.1,-0.2).curveTo(-5.1,-0.6,-5.4,-1.6).lineTo(-5.4,-2.6).lineTo(-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.5).curveTo(5.1,-4.4,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.5).curveTo(-1.1,-2.6,-1.9,-2.5).curveTo(-2,-2.5,-2.1,-2.4).curveTo(-2.1,-2.4,-2.2,-2.4).curveTo(-2.2,-2.3,-2.3,-2.3).curveTo(-2.3,-2.2,-2.3,-2.2).curveTo(-2.3,-2.1,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-1.9,-2,-1.9).lineTo(0.7,-1).lineTo(4.2,0.3).curveTo(5.6,1,5.4,2.6).curveTo(5.4,3.1,5.1,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,3.9).closePath();
	this.shape_8.setTransform(-167,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DF1421").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_9.setTransform(-175.7,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#DBD9D9").beginStroke().moveTo(0,4.1).lineTo(-1.1,4).curveTo(-1.3,4,-1.6,3.7).curveTo(-1.8,3.5,-1.8,3.3).curveTo(-1.8,3.2,-1.8,3.2).curveTo(-1.8,3.2,-1.7,3.1).curveTo(-1.7,3.1,-1.6,3.1).curveTo(-1.5,3.1,-1.4,3.1).lineTo(-1.1,3).lineTo(-1.1,3.8).lineTo(0.3,-4.1).lineTo(1.8,-4.1).curveTo(1.3,3.9,1.1,4.1).lineTo(0.6,4.1).lineTo(0,4.1).closePath();
	this.shape_10.setTransform(9.2,-9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.3,5).lineTo(-2.3,4.2).lineTo(-0.5,4.2).curveTo(0.4,3.9,0.6,3.1).curveTo(0.8,2.4,0.5,-5.2).lineTo(1.9,-5.2).lineTo(2.3,-4.5).lineTo(2.3,3.2).curveTo(2.3,3.6,1.7,4.1).curveTo(1.5,4.4,0.4,4.8).lineTo(-0.6,5.2).closePath();
	this.shape_11.setTransform(9.4,-25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#DBD9D9").beginStroke().moveTo(0,4.1).lineTo(-1.1,4).curveTo(-1.3,4,-1.5,3.7).curveTo(-1.8,3.5,-1.8,3.3).curveTo(-1.8,3.2,-1.8,3.2).curveTo(-1.8,3.2,-1.7,3.1).curveTo(-1.7,3.1,-1.6,3.1).curveTo(-1.5,3.1,-1.4,3.1).lineTo(-1.1,3).lineTo(-1.1,3.8).lineTo(0.3,-4.1).lineTo(1.8,-4.1).curveTo(1.3,3.9,1.1,4.1).lineTo(0.6,4.1).lineTo(0,4.1).closePath();
	this.shape_12.setTransform(100.2,-9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-2.3,5).lineTo(-2.3,4.2).lineTo(-0.5,4.2).curveTo(0.4,3.9,0.6,3.1).curveTo(0.8,2.4,0.5,-5.2).lineTo(1.9,-5.2).lineTo(2.3,-4.5).lineTo(2.3,3.2).curveTo(2.3,3.6,1.7,4.1).curveTo(1.5,4.4,0.4,4.8).lineTo(-0.6,5.2).closePath();
	this.shape_13.setTransform(100.4,-25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_14.setTransform(-47.4,-17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_15.setTransform(-31.2,-16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_16.setTransform(-14.7,-16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_17.setTransform(3,-17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_18.setTransform(19.4,-18);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_19.setTransform(36.9,-16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_20.setTransform(53.7,-17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_21.setTransform(70.9,-17.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_22.setTransform(138.1,-17.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_23.setTransform(121.2,-17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_24.setTransform(105.1,-17.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-0.9,10.1).lineTo(-0.9,-10.1).lineTo(0.9,-10.1).lineTo(0.9,10.1).closePath();
	this.shape_25.setTransform(88.6,-17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-102.3,0.9).lineTo(-102.3,-0.9).lineTo(102.3,-0.9).lineTo(102.3,0.9).closePath();
	this.shape_26.setTransform(44.6,-7.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#AFAFAF").beginStroke().moveTo(-102.3,0.9).lineTo(-102.3,-0.9).lineTo(102.3,-0.9).lineTo(102.3,0.9).closePath();
	this.shape_27.setTransform(44.6,-27.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#999999").beginStroke().moveTo(-0.6,12.2).lineTo(-1.3,-11).lineTo(-1.3,-11.9).curveTo(-1.2,-12.3,-0.7,-12.3).curveTo(0.1,-12.3,0.3,-11.3).lineTo(1.4,12.3).closePath();
	this.shape_28.setTransform(8.2,-18.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,-0.6).curveTo(-3.3,-0.9,-3.3,-1.7).curveTo(-3.3,-2.2,-2.9,-2.6).curveTo(-2.6,-3,-2.1,-3).curveTo(-1.6,-3,-0.6,-2).lineTo(3.3,0.9).curveTo(2.6,0.5,2.1,0.9).curveTo(1.5,1.7,1.7,2.4).lineTo(2,3).closePath();
	this.shape_29.setTransform(60.9,26.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,0.9).curveTo(-1.2,0.6,-1.1,-0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.4,-1.3,0,-1.3).curveTo(0.5,-1.3,0.8,-0.9).curveTo(1.1,-0.6,1.1,-0).curveTo(1.1,0.6,0.8,0.9).curveTo(0.5,1.3,0,1.3).curveTo(-0.4,1.3,-0.8,0.9).closePath();
	this.shape_30.setTransform(63.6,28.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-31,13.6).curveTo(-33,12.1,-33.5,11.6).curveTo(-34.1,10.8,-33.4,8.3).curveTo(-31.2,0.4,-27.4,-4.3).curveTo(-19.5,-14.2,-4.5,-14.4).curveTo(10.9,-14.7,22.8,-4).curveTo(27.1,-0.1,30,4.5).curveTo(32.5,8.4,32.8,10.6).lineTo(33.1,12.8).lineTo(32.6,12.7).curveTo(31.2,12.2,30.5,10.5).curveTo(28.2,5.1,22.4,-0.6).curveTo(13.2,-9.9,1.9,-9.9).curveTo(-4.7,-9.9,-9.2,-8.2).curveTo(-11.9,-7.1,-13.5,-5.6).curveTo(-14.2,-5,-20.3,3.9).lineTo(-26.3,12.6).curveTo(-27.1,13.6,-28,14.1).curveTo(-28.6,14.5,-29.2,14.5).curveTo(-30.1,14.5,-31,13.6).closePath().moveTo(33.1,12.8).curveTo(33.1,12,33.4,12.4).curveTo(34,12.9,33.6,12.9).lineTo(33.1,12.8).closePath();
	this.shape_31.setTransform(84.4,36.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#757575").beginStroke().moveTo(-15.3,-0.2).lineTo(13.9,-1.3).lineTo(15.3,0.2).lineTo(-12.7,1.3).closePath();
	this.shape_32.setTransform(113.6,27);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#1D1D1B").beginStroke().moveTo(-14.6,-0.6).lineTo(13.4,-1.6).lineTo(13.4,-0.2).lineTo(14.6,1.4).lineTo(-13,1.6).closePath();
	this.shape_33.setTransform(115.5,28.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#EAEAEA").beginStroke().moveTo(-5.5,4.9).lineTo(-8,0.2).lineTo(2.2,-8.8).lineTo(4.7,-5.2).curveTo(7.4,-1.4,8,-0.3).lineTo(3.1,3.7).curveTo(-1.9,7.9,-2.4,8.7).lineTo(-2.6,8.8).curveTo(-3.3,8.8,-5.5,4.9).closePath();
	this.shape_34.setTransform(-45,-50.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#EAEAEA").beginStroke().moveTo(-7.5,0.1).lineTo(-2.3,-8.3).lineTo(7.5,-0.2).lineTo(2.5,8.3).closePath();
	this.shape_35.setTransform(119.2,-49.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-4.7,1.5).lineTo(-4.7,1).lineTo(-4,0.3).curveTo(-3.3,-0.4,-2.6,-0.4).curveTo(-2.1,-0.4,-1.2,-1).curveTo(-0.3,-1.4,0.5,-1.4).curveTo(4.7,-1.4,4.7,1.5).closePath();
	this.shape_36.setTransform(5.1,-79.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#999999").beginStroke().moveTo(-0.6,12.2).lineTo(-1.3,-11).lineTo(-1.3,-11.9).curveTo(-1.2,-12.3,-0.7,-12.3).curveTo(0.1,-12.3,0.4,-11.3).lineTo(1.4,12.3).closePath();
	this.shape_37.setTransform(99.2,-18.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#757575").beginStroke().moveTo(-51.4,11.2).lineTo(-52,-3.2).lineTo(-100.4,-3.3).lineTo(-100.4,-8.1).lineTo(86.7,-7.8).lineTo(86.3,-8.7).lineTo(87.5,-8.8).curveTo(88.9,-9.1,91,-9.8).lineTo(95.9,-11.3).lineTo(95.8,-7.9).lineTo(99.8,-8).lineTo(100.5,-3.1).lineTo(-40.8,-3).lineTo(-41,9.3).curveTo(-41.1,10.5,-41.2,10.8).curveTo(-41.5,11.3,-42.8,11.3).closePath();
	this.shape_38.setTransform(19.7,29.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-1.7,20.1).lineTo(-6.7,10.9).lineTo(-4.2,-4).curveTo(-2.2,-7.8,-1,-12.1).curveTo(-0.3,-14.7,0,-18.9).lineTo(0.2,-22.6).lineTo(3.6,-23).lineTo(6.7,8.3).lineTo(6.1,23).closePath();
	this.shape_39.setTransform(133.7,14.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#DBD9D9").beginStroke().moveTo(6.5,20.3).lineTo(-28.6,20.3).lineTo(-28,5.8).lineTo(-30.9,-25.5).lineTo(-5.7,-25.8).lineTo(1.7,-22.1).curveTo(9.8,-17.9,12.8,-15.2).curveTo(17.1,-11.5,23,-4.7).curveTo(29.4,2.8,30,5.4).curveTo(30.9,9.2,29.8,23.8).lineTo(30.8,23.8).lineTo(30.9,25.2).lineTo(15.2,25.8).closePath();
	this.shape_40.setTransform(168.4,17.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0.9).lineTo(-1,0.7).lineTo(-0.9,-0.1).curveTo(-0.7,-1,-0.3,-1).curveTo(0.3,-1,0.6,-0.5).curveTo(1,-0,1,0.5).curveTo(1,1,0.3,1).lineTo(-0.5,0.9).closePath();
	this.shape_41.setTransform(119.5,-75.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.9,0.5).lineTo(-4,-0.9).lineTo(-2.9,-2.8).lineTo(-2.3,-3).curveTo(-1.7,-3.2,-1.2,-3.2).curveTo(-0.7,-3.2,0.2,-2.7).curveTo(1.1,-2.2,1.7,-1.6).curveTo(2.3,-1,3.1,0.7).curveTo(4,2.5,4,3.2).curveTo(1.6,1.5,-0.9,0.5).closePath();
	this.shape_42.setTransform(119.9,-75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#C6C6C6").beginStroke().moveTo(0.6,-1.2).curveTo(-6.8,-5.2,-11,-6.1).lineTo(-10.6,-6.5).curveTo(-10.2,-6.9,-9.8,-6.9).curveTo(-9.1,-6.9,-5.3,-5.5).curveTo(-1.2,-3.9,1.3,-2.3).curveTo(3.6,-0.9,6.1,1.1).lineTo(9.3,3.6).lineTo(10.8,4.9).curveTo(11,5.2,11,5.9).curveTo(11,6.7,10.8,6.9).curveTo(4.8,1.1,0.6,-1.2).closePath();
	this.shape_43.setTransform(121.2,-70.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1.6,1.9).lineTo(-2.2,1.3).curveTo(-2.7,0.5,-2.4,-0).curveTo(-1.8,-0.9,-0.7,-1.6).curveTo(0.1,-2.3,0.8,-1.5).curveTo(1.4,-1,1.9,0.2).curveTo(2.5,1.3,2.5,1.9).closePath();
	this.shape_44.setTransform(0.4,-80.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-61.6,50.9).curveTo(-82.4,50.9,-97,36).curveTo(-111.7,21.1,-111.7,0).curveTo(-111.7,-21.1,-97,-36).curveTo(-82.4,-50.9,-61.6,-50.9).lineTo(61.7,-50.9).curveTo(82.4,-50.9,97,-36).curveTo(111.6,-21.1,111.6,0).curveTo(111.6,21.1,97,36).curveTo(82.4,50.9,61.7,50.9).closePath();
	this.shape_45.setTransform(34.9,-27.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.9,1).curveTo(-1.3,0.6,-1.3,0).curveTo(-1.3,-0.6,-0.9,-1).curveTo(-0.6,-1.4,-0,-1.4).curveTo(0.5,-1.4,0.9,-1).curveTo(1.3,-0.6,1.3,0).curveTo(1.3,0.6,0.9,1).curveTo(0.5,1.4,-0,1.4).curveTo(-0.5,1.4,-0.9,1).closePath();
	this.shape_46.setTransform(-47.6,-76.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-4.7,1.6).curveTo(-4.7,1.2,-4,0.5).lineTo(-2.8,-0.9).curveTo(-1.8,-2.2,-0.7,-3.3).curveTo(0,-4.1,1,-4.3).curveTo(2.1,-4.6,2.8,-3.9).curveTo(3.9,-3,4.7,-0.7).curveTo(1.7,0.6,0.3,1.4).lineTo(-4.6,4.4).closePath();
	this.shape_47.setTransform(-48.9,-74.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#757575").beginStroke().moveTo(-17.9,2.8).lineTo(17.9,-7.9).lineTo(15.6,6.4).lineTo(-17.6,7.9).closePath();
	this.shape_48.setTransform(111.4,19.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#1D1D1B").beginStroke().moveTo(-1.4,0.7).curveTo(-2.1,0.5,-2,0.2).lineTo(-2,-0.1).curveTo(-2.1,-0.5,-1.4,-0.7).curveTo(-0.9,-1,0,-1).curveTo(0.8,-1,1.5,-0.7).curveTo(2,-0.5,2.1,-0.1).lineTo(2.1,0.2).curveTo(2,0.5,1.5,0.7).curveTo(0.8,1,0,1).curveTo(-0.9,1,-1.4,0.7).closePath();
	this.shape_49.setTransform(-28.5,24.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#F0D0DD").beginStroke().moveTo(-1.3,0.7).lineTo(-0.5,-0.7).lineTo(1.2,0.7).closePath();
	this.shape_50.setTransform(55.5,42.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,0.7).lineTo(-1,-0.8).lineTo(1.1,-0.7).lineTo(1,0.7).closePath();
	this.shape_51.setTransform(55.9,47);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.7,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.8,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_52.setTransform(-123.9,56.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.7,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_53.setTransform(85.8,56.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.9).curveTo(-22.4,1.1,-21.5,0).lineTo(-20.7,-0.9).lineTo(-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).lineTo(-4,-1.8).curveTo(-10.1,-1.1,-18.6,-0.5).curveTo(-19.9,0.6,-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.9).closePath();
	this.shape_54.setTransform(-155.9,-61);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.6).lineTo(-3.5,1.9).closePath();
	this.shape_55.setTransform(-129.7,-66.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.8).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,14,-0.2,14).curveTo(-0.6,14,-1,13.8).closePath();
	this.shape_56.setTransform(-176.4,-15.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.3).closePath();
	this.shape_57.setTransform(-176.4,6.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#999999").beginStroke().moveTo(-2.9,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.6).curveTo(2.9,0.4,0.1,0.5).lineTo(-1.1,0.6).curveTo(-2.1,0.5,-2.9,0.3).closePath();
	this.shape_58.setTransform(-176.5,-1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#999999").beginStroke().moveTo(-3.1,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.6).curveTo(-3.4,-4.9,-3.1,-4.9).lineTo(2.4,-6.7).curveTo(3,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.3).curveTo(4.2,4,3.2,4.5).curveTo(1.5,5.5,-1.3,6.5).curveTo(-2,6.8,-2.6,6.8).lineTo(-3.1,6.7).closePath();
	this.shape_59.setTransform(-176.6,1.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.3,-13.6).curveTo(0.6,-13,0.9,-10.8).curveTo(1.5,-6.9,1.6,1.1).curveTo(1.6,4.8,1.1,10.8).curveTo(1,11.9,0.4,12.9).curveTo(-0.2,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_60.setTransform(-172.3,-42);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#999999").beginStroke().moveTo(3.5,14.4).lineTo(-2.1,13.7).curveTo(-3.6,13.6,-4.4,13).curveTo(-5.7,12.2,-5.7,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6,-10.7,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.1,-7.5,6.3,1.1).curveTo(6.4,5.1,5.9,11.1).curveTo(5.7,12.3,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.5,14.4).closePath();
	this.shape_61.setTransform(-173.5,-42);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill().beginStroke("#777777").setStrokeStyle(0.3,1,1).moveTo(35.1,43.8).lineTo(35.3,39.6).lineTo(34.9,38.3).curveTo(34,-25.8,33.3,-37.3).curveTo(33.2,-40.1,31.3,-41.8).curveTo(29.6,-43.3,27.1,-43.6).curveTo(22.9,-44,3.6,-43.2).curveTo(-2,-42.9,-20.1,-41.3).curveTo(-27.2,-40.7,-30.8,-38).lineTo(-33.1,-35.3).curveTo(-33.6,-34.6,-34.5,-32.3).curveTo(-34.9,-31.2,-35.3,-30.2);
	this.shape_62.setTransform(-140.8,-25.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill().beginStroke("#A5A5A5").setStrokeStyle(0.3,1,1).moveTo(-1,46).curveTo(-2.7,15.8,-2.9,0.7).curveTo(-3.1,-10.8,-1.5,-23.3).curveTo(0,-36,2.9,-45.9);
	this.shape_63.setTransform(-182.5,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#999999").beginStroke().moveTo(-2.4,5.7).lineTo(-2.7,5.5).curveTo(-2.9,5.1,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).lineTo(-1.8,-2.3).lineTo(-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.7,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.2).lineTo(-0.8,-1.2).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.3).lineTo(-0.4,4.7).curveTo(-0.4,5.1,-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_64.setTransform(-194.9,-16.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-4).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.2,-25,7.8,-20.6).lineTo(4.7,-10.7).curveTo(2.1,-2.1,1,1.8).curveTo(-0.1,5.7,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.3,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-4).closePath();
	this.shape_65.setTransform(-185.3,-40);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.3,-0).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_66.setTransform(-194.7,21.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.6,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_67.setTransform(-194.3,40.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.4,-4.8,-1.7).lineTo(4.8,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_68.setTransform(-193.3,51.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_69.setTransform(-189.5,55.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.8,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_70.setTransform(-188.7,47.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.2,-6.8).curveTo(-3.4,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.5).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.4,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.2,-6.8).lineTo(-4.4,-6.9).closePath();
	this.shape_71.setTransform(-190.2,45.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.6).curveTo(-1.3,3.2,-1.5,1.8).curveTo(-2,-1,-2,-4.6).lineTo(-1.4,-3.9).curveTo(-0.6,-3.2,-0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.5,4.6).lineTo(1,4.5).closePath();
	this.shape_72.setTransform(-196.6,45.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,6.6).lineTo(-1.2,6.4).curveTo(-0.7,2.9,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.6).lineTo(1,-6.6).lineTo(1.2,-4.3).curveTo(1.3,-1.6,1.3,0.2).curveTo(1.3,3.2,1.1,6.6).closePath();
	this.shape_73.setTransform(-114.7,2.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.3).curveTo(-4,8.2,-4.5,7.7).curveTo(-5,7.1,-5,6.3).curveTo(-5.5,2.2,-5.3,-2.4).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.7).curveTo(-4,-8.2,-3.2,-8.3).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.2,-8.3).curveTo(4,-8.2,4.5,-7.7).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.5).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.1,4.5,7.7).curveTo(4,8.2,3.2,8.3).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.3).closePath();
	this.shape_74.setTransform(-114.8,2.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-46.9,64.9).curveTo(-48.9,64.1,-49.8,62).curveTo(-50.2,61.8,-50.8,61.2).curveTo(-51.8,60.2,-52.3,58.5).curveTo(-53,56.4,-53.3,53.3).lineTo(-53.8,48).curveTo(-54.1,44.9,-53.2,42.1).lineTo(-52.2,39.9).curveTo(-53.1,23.7,-53.1,18.3).curveTo(-53.1,15,-52.6,6.7).lineTo(-52.1,-0.9).lineTo(-47.9,-7.8).curveTo(-46.9,-12.9,-43.4,-27.2).curveTo(-41.1,-36.4,-37,-48.7).curveTo(-33.6,-58.6,-32.7,-60.4).curveTo(-32.3,-61.4,-31.7,-61.8).curveTo(-31.1,-62.2,-29.5,-62.4).curveTo(-22.3,-63.3,5.6,-64.5).lineTo(32,-65.5).curveTo(34.9,-65.6,36.3,-65.3).curveTo(38.5,-64.9,40.4,-63.5).curveTo(42.2,-62.2,43.3,-61.2).lineTo(45.4,-59.2).curveTo(47.6,-57.1,49.7,-52.6).curveTo(50.8,-50.3,52.1,-44.6).curveTo(53.8,-36.9,53.8,-29.7).lineTo(53.8,-12.7).curveTo(53.8,-9.9,53.1,-8.7).curveTo(52.2,-7,51.3,-4.7).curveTo(49.8,-1.3,49.8,-0.1).lineTo(49.8,6.5).curveTo(49.8,8,49.3,8.9).curveTo(48.8,9.8,48.8,10.5).lineTo(48.8,25.4).lineTo(35.8,26).lineTo(35.8,28.3).curveTo(24.9,28.5,20,29.1).curveTo(13.3,30,10.5,31.3).curveTo(3.9,34.4,-1.1,43).curveTo(-2.5,45.5,-4.6,49.8).lineTo(-6.5,53.6).curveTo(-7.4,55,-8.9,55).lineTo(-17,55).lineTo(-18.5,54.6).lineTo(-21.2,55).lineTo(-39.2,55).lineTo(-39.2,61.9).curveTo(-39.2,63.3,-39.9,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-45.4,65.5,-46.9,64.9).closePath().moveTo(10,-55.4).curveTo(-9.5,-54.6,-15.8,-53.6).curveTo(-21.2,-52.8,-22.8,-51.9).curveTo(-24,-51.1,-25.4,-48.5).curveTo(-26.4,-46.5,-28.6,-36.4).curveTo(-30.9,-26.4,-31.3,-22.1).curveTo(-31.7,-18.2,-32,-10.8).curveTo(-32.3,-4,-32.3,-1.4).lineTo(-32.2,-0.4).lineTo(-31,-0.7).lineTo(9.5,-16.4).curveTo(14.2,-18.1,26.8,-20.3).lineTo(29.3,-20.7).curveTo(30.5,-21,30.8,-21.4).curveTo(31,-21.6,31,-22.3).lineTo(31.7,-51.8).curveTo(31.7,-54.2,30.9,-55).curveTo(30.2,-55.8,28.2,-56).lineTo(10,-55.4).closePath();
	this.shape_75.setTransform(-145.3,-7.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-106.8,24.4).lineTo(-106.8,22.7).lineTo(-110.8,22.9).lineTo(-110.8,17.3).lineTo(-159.8,17.3).lineTo(-159.8,21.2).lineTo(-174.7,19.4).lineTo(-186.2,5.5).lineTo(-182.2,-24.7).lineTo(-107.2,-24.7).lineTo(-105.4,-16.7).lineTo(172.2,-16.7).lineTo(172.2,-3.7).lineTo(178.6,-3.7).lineTo(186.2,-0.1).lineTo(186.2,6.5).lineTo(176.3,7.8).lineTo(176.4,8.6).curveTo(176.4,9.6,176.2,10.4).curveTo(164.6,13.9,147.7,14).curveTo(128.3,13.4,118.7,13.3).curveTo(109.7,13.3,98.3,12.7).lineTo(91.2,10.3).lineTo(54.3,10.3).lineTo(54.7,10.4).lineTo(51,10.3).lineTo(42.2,10).curveTo(36.9,9.7,33.4,9.9).curveTo(29.8,10,27.3,10.3).lineTo(20.9,10.3).curveTo(6.8,13.3,1.2,13.3).lineTo(-7.7,13.3).curveTo(-7.5,15.3,-7.9,15.3).lineTo(-22,15.3).curveTo(-22.4,15.3,-23.6,14.3).curveTo(-24.8,13.2,-24.8,12.8).lineTo(-24.8,13.3).lineTo(-25.2,13.3).curveTo(-25.1,13.9,-25.4,14.5).curveTo(-26,15.7,-27.9,15.7).curveTo(-29.7,15.7,-30.6,14).lineTo(-31.2,12.2).lineTo(-32.4,11.3).lineTo(-47.8,11.3).lineTo(-47.8,13.4).lineTo(-47.5,15.1).curveTo(-47.2,16.3,-47.6,16.3).lineTo(-73.8,16.3).curveTo(-74.2,16.3,-75.5,15.1).curveTo(-76.8,13.9,-76.8,13.4).lineTo(-76.8,12.3).lineTo(-78.2,12.3).lineTo(-78.5,16.3).lineTo(-81.7,16.3).lineTo(-81.9,12.3).lineTo(-86.2,12.3).curveTo(-88.8,13.6,-89.8,14.8).lineTo(-89.8,18.1).curveTo(-89.8,21.5,-93.3,21.9).lineTo(-103.8,22.6).lineTo(-103.8,24.7).closePath();
	this.shape_76.setTransform(9.6,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.4,0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_77.setTransform(-9.2,87.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(1));

	// Capa 3
	this.instance = new lib.pipaconductor();
	this.instance.parent = this;
	this.instance.setTransform(-139.4,-23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.2,-82.3,398.5,180.9);


// stage content:
(lib.pipadegas = function(mode,startPosition,loop) {
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
	this.instance.setTransform(1346.4,416.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-720,x:629.4},48).wait(36).to({rotation:-1440,x:-125.6},42).wait(1));

	// llanta
	this.instance_1 = new lib.llanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1137.5,416.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-720,x:420.5},48).wait(36).to({rotation:-1440,x:-334.5},42).wait(1));

	// pipa
	this.instance_2 = new lib.pipagas_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1260.8,359.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:678.3},39).to({x:543.9},9).wait(36).to({x:-210.8},42).wait(1));

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.4,6.5).lineTo(-26.4,-6.5).lineTo(26.4,-6.5).lineTo(26.4,6.5).closePath();
	this.shape.setTransform(520,286.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(127));

	// fire
	this.instance_3 = new lib.pipa0016();
	this.instance_3.parent = this;
	this.instance_3.setTransform(516.9,274.6,0.859,0.859,0,0,0,22.7,5.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({alpha:1},14).wait(58));

	// chef
	this.instance_4 = new lib.pipachefsin();
	this.instance_4.parent = this;
	this.instance_4.setTransform(518.5,301.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).to({y:261.7,alpha:1},14).wait(50));

	// backs
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#434444").beginStroke().moveTo(-8.4,8.8).curveTo(-8.4,1.5,-6,-3.6).curveTo(-3.5,-8.8,-0,-8.8).curveTo(3.5,-8.8,5.9,-3.6).curveTo(8.4,1.5,8.4,8.8).closePath();
	this.shape_1.setTransform(340.3,276.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#434444").beginStroke().moveTo(-8.4,8.8).curveTo(-8.4,1.5,-5.9,-3.6).curveTo(-3.5,-8.8,0,-8.8).curveTo(3.5,-8.8,5.9,-3.6).curveTo(8.4,1.5,8.4,8.8).closePath();
	this.shape_2.setTransform(390.9,276.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#434444").beginStroke().moveTo(6.7,0.3).curveTo(4.1,-1.9,0.9,-2.3).curveTo(-2.6,-2.6,-5.7,-0.8).curveTo(-8.8,1,-11.1,4.6).lineTo(-14.4,2.5).curveTo(-11.6,-2,-7.4,-4.3).curveTo(-3.3,-6.6,1.2,-6.2).curveTo(5.7,-5.7,9.1,-2.8).curveTo(12.7,0.1,14.4,4.8).lineTo(10.8,6.2).curveTo(9.4,2.6,6.7,0.3).closePath();
	this.shape_3.setTransform(353.1,267.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#434444").beginStroke().moveTo(-14.4,4.8).curveTo(-12.6,0.1,-9.1,-2.8).curveTo(-5.6,-5.7,-1.2,-6.2).curveTo(3.3,-6.6,7.4,-4.3).curveTo(11.6,-2,14.4,2.5).lineTo(11.1,4.6).curveTo(8.8,1,5.7,-0.8).curveTo(2.6,-2.6,-0.8,-2.3).curveTo(-4.1,-1.9,-6.7,0.3).curveTo(-9.4,2.6,-10.8,6.2).closePath();
	this.shape_4.setTransform(378.1,267.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#434444").beginStroke().moveTo(-8,3).lineTo(-8,-3).lineTo(8,-3).lineTo(8,3).closePath();
	this.shape_5.setTransform(365.6,365);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#434444").beginStroke().moveTo(-2.1,56.4).lineTo(-2.1,-56.3).lineTo(2.1,-56.3).lineTo(2.1,56.4).closePath();
	this.shape_6.setTransform(365.6,311.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.1,26.6).lineTo(-9.1,-26.6).lineTo(9.1,-26.6).lineTo(9.1,26.6).closePath();
	this.shape_7.setTransform(314,297.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9,26.6).lineTo(-9,-26.6).lineTo(9,-26.6).lineTo(9,26.6).closePath();
	this.shape_8.setTransform(285.2,297.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9,26.6).lineTo(-9,-26.6).lineTo(9.1,-26.6).lineTo(9.1,26.6).closePath();
	this.shape_9.setTransform(103.5,297.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9,26.6).lineTo(-9,-26.6).lineTo(9.1,-26.6).lineTo(9.1,26.6).closePath();
	this.shape_10.setTransform(74.7,297.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-58.1,5.8).lineTo(-58.1,-5.9).lineTo(58.1,-5.9).lineTo(58.1,5.8).closePath();
	this.shape_11.setTransform(265,255.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-58.1,5.8).lineTo(-58.1,-5.9).lineTo(58.1,-5.9).lineTo(58.1,5.8).closePath();
	this.shape_12.setTransform(265,233.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-58.1,5.8).lineTo(-58.1,-5.9).lineTo(58.1,-5.9).lineTo(58.1,5.8).closePath();
	this.shape_13.setTransform(265,211.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-58,5.8).lineTo(-58,-5.9).lineTo(58.1,-5.9).lineTo(58.1,5.8).closePath();
	this.shape_14.setTransform(123.7,255.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-58,5.8).lineTo(-58,-5.9).lineTo(58.1,-5.9).lineTo(58.1,5.8).closePath();
	this.shape_15.setTransform(123.7,233.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-58,5.8).lineTo(-58,-5.9).lineTo(58.1,-5.9).lineTo(58.1,5.8).closePath();
	this.shape_16.setTransform(123.7,211.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#434444").beginStroke().moveTo(-5.4,9.6).lineTo(-5.4,-9.6).lineTo(5.4,-9.6).lineTo(5.4,9.6).closePath();
	this.shape_17.setTransform(237.3,289.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#434444").beginStroke().moveTo(-5.4,9.6).lineTo(-5.4,-9.6).lineTo(5.4,-9.6).lineTo(5.4,9.6).closePath();
	this.shape_18.setTransform(215.8,289.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#434444").beginStroke().moveTo(-5.4,9.6).lineTo(-5.4,-9.6).lineTo(5.4,-9.6).lineTo(5.4,9.6).closePath();
	this.shape_19.setTransform(194.3,289.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#434444").beginStroke().moveTo(-5.3,9.6).lineTo(-5.3,-9.6).lineTo(5.4,-9.6).lineTo(5.4,9.6).closePath();
	this.shape_20.setTransform(172.9,289.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#434444").beginStroke().moveTo(-5.4,9.6).lineTo(-5.4,-9.6).lineTo(5.4,-9.6).lineTo(5.4,9.6).closePath();
	this.shape_21.setTransform(151.4,289.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-48.3,9.6).lineTo(-48.3,-9.6).lineTo(48.3,-9.6).lineTo(48.3,9.6).closePath();
	this.shape_22.setTransform(194.3,289.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-38.9,30.8).lineTo(-38.9,-30.8).lineTo(38.9,-30.8).lineTo(38.9,30.8).closePath();
	this.shape_23.setTransform(194.3,324.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(-175.9,23).lineTo(-175.9,-23).lineTo(175.9,-23).lineTo(175.9,23).closePath();
	this.shape_24.setTransform(194.3,150.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-147.2,11.6).lineTo(-163.4,-11.6).lineTo(163.4,-11.6).lineTo(147.2,11.6).closePath();
	this.shape_25.setTransform(194.3,180.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#494A4E").beginStroke().moveTo(-148.2,86.5).lineTo(-148.2,-86.5).lineTo(148.2,-86.5).lineTo(148.2,86.5).closePath();
	this.shape_26.setTransform(194.4,274.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#434444").beginStroke().moveTo(-116.8,5.6).lineTo(-116.8,-5.6).lineTo(116.8,-5.6).lineTo(116.8,5.6).closePath();
	this.shape_27.setTransform(917.9,131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_28.setTransform(976.8,170.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_29.setTransform(976.8,206);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_30.setTransform(976.8,242);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_31.setTransform(918.5,170.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_32.setTransform(918.5,206);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_33.setTransform(918.5,242);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_34.setTransform(860.2,170.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_35.setTransform(860.2,206);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-22.3,13.5).lineTo(-22.3,-13.5).lineTo(22.3,-13.5).lineTo(22.3,13.5).closePath();
	this.shape_36.setTransform(860.2,242);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#434444").beginStroke().moveTo(-59.2,4.3).lineTo(-59.2,-4.3).lineTo(59.2,-4.3).lineTo(59.2,4.3).closePath();
	this.shape_37.setTransform(951.6,348.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#434444").beginStroke().moveTo(-84.3,3).lineTo(-84.3,-3).lineTo(84.3,-3).lineTo(84.3,3).closePath();
	this.shape_38.setTransform(950.4,304.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_39.setTransform(963.3,285.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_40.setTransform(948.7,285.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_41.setTransform(992.6,285.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_42.setTransform(1007.2,285.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#28292B").beginStroke().moveTo(-10.1,15.3).lineTo(-10.1,-15.3).lineTo(-3,-15.3).lineTo(10.1,15.3).closePath();
	this.shape_43.setTransform(1024.6,285.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_44.setTransform(977.9,285.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#28292B").beginStroke().moveTo(-8.5,15.3).lineTo(4.3,-15.3).lineTo(8.4,-15.3).lineTo(8.4,15.3).closePath();
	this.shape_45.setTransform(874.5,285.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_46.setTransform(890.3,285.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#434444").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_47.setTransform(919.5,285.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_48.setTransform(904.9,285.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#28292B").beginStroke().moveTo(-7.3,15.3).lineTo(-7.3,-15.3).lineTo(7.3,-15.3).lineTo(7.3,15.3).closePath();
	this.shape_49.setTransform(934.1,285.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#494A4E").beginStroke().moveTo(-53.6,21.4).lineTo(-53.6,-21.4).lineTo(53.6,-21.4).lineTo(53.6,21.4).closePath();
	this.shape_50.setTransform(952.1,322.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#434444").beginStroke().moveTo(-15,28.1).lineTo(-15,-28.1).lineTo(15,-28.1).lineTo(15,28.1).closePath();
	this.shape_51.setTransform(837.5,335.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#28292B").beginStroke().moveTo(-74.5,36.5).lineTo(-74.5,-36.5).lineTo(74.5,-36.5).lineTo(74.5,36.5).closePath();
	this.shape_52.setTransform(951.4,327.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(-108.6,114.5).lineTo(-108.6,-114.5).lineTo(108.6,-114.5).lineTo(108.6,114.5).closePath();
	this.shape_53.setTransform(917.5,251.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#494A4E").beginStroke().moveTo(-161.8,3.2).lineTo(-161.8,-3.2).lineTo(161.8,-3.2).lineTo(161.8,3.2).closePath();
	this.shape_54.setTransform(581.1,225.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.9).curveTo(-1.3,0.5,-1.3,0).curveTo(-1.3,-0.5,-0.9,-0.9).curveTo(-0.5,-1.3,0,-1.2).curveTo(0.5,-1.3,0.9,-0.9).curveTo(1.3,-0.5,1.3,0).curveTo(1.3,0.5,0.9,0.9).curveTo(0.5,1.3,0,1.3).curveTo(-0.5,1.3,-0.9,0.9).closePath();
	this.shape_55.setTransform(766.9,343.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.7).curveTo(-1,0.4,-1,-0).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,0,-1).curveTo(0.4,-1,0.7,-0.7).curveTo(1,-0.4,1,-0).curveTo(1,0.4,0.7,0.7).curveTo(0.4,1,0,1).curveTo(-0.4,1,-0.7,0.7).closePath();
	this.shape_56.setTransform(758.2,335.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.9,0.9).curveTo(-1.3,0.6,-1.2,0).curveTo(-1.3,-0.5,-0.9,-0.9).curveTo(-0.5,-1.3,0,-1.3).curveTo(0.5,-1.3,0.9,-0.9).curveTo(1.3,-0.5,1.3,0).curveTo(1.3,0.6,0.9,0.9).curveTo(0.5,1.3,0,1.3).curveTo(-0.5,1.3,-0.9,0.9).closePath();
	this.shape_57.setTransform(763.8,337.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,-0).curveTo(-0.8,-0.8,-0,-0.8).curveTo(0.3,-0.8,0.5,-0.5).curveTo(0.8,-0.3,0.8,-0).curveTo(0.8,0.3,0.5,0.5).curveTo(0.3,0.8,-0,0.8).curveTo(-0.8,0.8,-0.8,-0).closePath();
	this.shape_58.setTransform(764.5,311.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0).curveTo(-0.8,-0.8,-0,-0.8).curveTo(0.8,-0.8,0.8,0).curveTo(0.8,0.8,-0,0.8).curveTo(-0.8,0.8,-0.8,0).closePath();
	this.shape_59.setTransform(759,309.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0).curveTo(-0.8,-0.8,-0,-0.8).curveTo(0.8,-0.8,0.8,0).curveTo(0.8,0.8,-0,0.8).curveTo(-0.8,0.8,-0.8,0).closePath();
	this.shape_60.setTransform(763.8,352.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,-0).curveTo(-0.8,-0.8,-0,-0.8).curveTo(0.8,-0.8,0.8,-0).curveTo(0.8,0.8,-0,0.8).curveTo(-0.8,0.8,-0.8,-0).closePath();
	this.shape_61.setTransform(759.2,317);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.2).curveTo(-1.6,0.7,-1.7,-0).curveTo(-1.6,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.6).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.6,-0.7,1.6,-0).curveTo(1.6,0.7,1.2,1.2).curveTo(0.7,1.6,0,1.6).curveTo(-0.7,1.6,-1.2,1.2).closePath();
	this.shape_62.setTransform(757,327.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.8).curveTo(-1.1,0.4,-1.1,-0).curveTo(-1.1,-0.5,-0.7,-0.8).curveTo(-0.4,-1,-0,-1).curveTo(0.4,-1,0.7,-0.8).curveTo(1.1,-0.5,1.1,-0).curveTo(1.1,0.4,0.7,0.8).curveTo(0.4,1,-0,1).curveTo(-0.4,1,-0.7,0.8).closePath();
	this.shape_63.setTransform(764.9,329.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,1.6).curveTo(-2.4,1,-2.4,-0).curveTo(-2.4,-1,-1.6,-1.6).curveTo(-0.9,-2.4,-0,-2.4).curveTo(1,-2.4,1.7,-1.6).curveTo(2.3,-1,2.3,-0).curveTo(2.3,1,1.7,1.6).curveTo(1,2.4,-0,2.3).curveTo(-0.9,2.4,-1.6,1.6).closePath();
	this.shape_64.setTransform(758.4,349.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.1,1.2).curveTo(-1.6,0.6,-1.6,0).curveTo(-1.6,-0.7,-1.1,-1.2).curveTo(-0.7,-1.6,0,-1.6).curveTo(0.7,-1.6,1.1,-1.2).curveTo(1.6,-0.7,1.6,0).curveTo(1.6,0.6,1.1,1.2).curveTo(0.7,1.6,0,1.6).curveTo(-0.7,1.6,-1.1,1.2).closePath();
	this.shape_65.setTransform(761.2,303.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.1,1.1).curveTo(-1.6,0.7,-1.6,-0).curveTo(-1.6,-0.6,-1.1,-1.1).curveTo(-0.7,-1.6,-0,-1.6).curveTo(0.7,-1.6,1.1,-1.1).curveTo(1.6,-0.6,1.6,-0).curveTo(1.6,0.7,1.1,1.1).curveTo(0.7,1.6,-0,1.6).curveTo(-0.6,1.6,-1.1,1.1).closePath();
	this.shape_66.setTransform(763,321.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.1,1.2).curveTo(-1.6,0.7,-1.6,-0).curveTo(-1.6,-0.6,-1.1,-1.2).curveTo(-0.7,-1.6,-0,-1.6).curveTo(0.7,-1.6,1.1,-1.2).curveTo(1.6,-0.6,1.6,-0).curveTo(1.6,0.7,1.1,1.2).curveTo(0.7,1.6,-0,1.6).curveTo(-0.7,1.6,-1.1,1.2).closePath();
	this.shape_67.setTransform(756,341.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#494A4E").beginStroke().moveTo(-7,29.6).curveTo(-9.9,26.5,-9.9,15.7).curveTo(-9.9,3.6,-6.3,-13.8).curveTo(-2.6,-31.4,-0,-31.4).curveTo(2.6,-31.4,6.3,-13.8).curveTo(10,3.6,10,15.7).curveTo(10,26.5,7.1,29.6).curveTo(5.3,31.4,-0,31.4).curveTo(-5.3,31.4,-7,29.6).closePath();
	this.shape_68.setTransform(761,325.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#494A4E").beginStroke().moveTo(-6,1.6).lineTo(-6,-1.6).lineTo(6,-1.6).lineTo(6,1.6).closePath();
	this.shape_69.setTransform(761,363.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,7.2).lineTo(-1.2,-7.1).lineTo(1.1,-7.1).lineTo(1.1,7.2).closePath();
	this.shape_70.setTransform(761,356.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).curveTo(-1.6,0.7,-1.6,-0).curveTo(-1.6,-0.7,-1.2,-1.2).curveTo(-0.7,-1.6,-0,-1.6).curveTo(0.7,-1.6,1.1,-1.2).curveTo(1.6,-0.7,1.7,-0).curveTo(1.6,0.7,1.1,1.1).curveTo(0.7,1.6,-0,1.7).curveTo(-0.7,1.6,-1.2,1.1).closePath();
	this.shape_71.setTransform(21.3,335.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,0.9).curveTo(-1.3,0.5,-1.3,0).curveTo(-1.3,-0.5,-1,-1).curveTo(-0.6,-1.3,0,-1.3).curveTo(0.5,-1.3,0.9,-1).curveTo(1.4,-0.6,1.4,0).curveTo(1.4,0.5,0.9,0.9).curveTo(0.5,1.4,0,1.4).curveTo(-0.6,1.4,-1,0.9).closePath();
	this.shape_72.setTransform(9.9,324.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).curveTo(-1.7,0.7,-1.7,0).curveTo(-1.7,-0.7,-1.2,-1.1).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.1).curveTo(1.7,-0.7,1.7,0).curveTo(1.7,0.7,1.2,1.1).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.1).closePath();
	this.shape_73.setTransform(17.2,327.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.8).curveTo(-1,0.5,-1,0).curveTo(-1,-0.4,-0.7,-0.8).curveTo(-0.5,-1.1,-0,-1.1).curveTo(0.4,-1.1,0.8,-0.8).curveTo(1.1,-0.4,1,0).curveTo(1.1,0.5,0.8,0.8).curveTo(0.4,1,-0,1).curveTo(-0.5,1,-0.7,0.8).closePath();
	this.shape_74.setTransform(18.2,293.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1,0.5,-1,-0).curveTo(-1,-0.4,-0.8,-0.7).curveTo(-0.4,-1,-0,-1).curveTo(0.4,-1,0.8,-0.7).curveTo(1,-0.4,1,-0).curveTo(1,0.5,0.8,0.8).curveTo(0.4,1.1,-0,1.1).curveTo(-0.4,1.1,-0.8,0.8).closePath();
	this.shape_75.setTransform(11,290.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.8,0.8).curveTo(-1,0.4,-1,0).curveTo(-1,-0.4,-0.8,-0.8).curveTo(-0.5,-1.1,-0,-1.1).curveTo(0.4,-1.1,0.8,-0.8).curveTo(1,-0.4,1.1,0).curveTo(1,0.4,0.8,0.8).curveTo(0.4,1,-0,1).curveTo(-0.5,1,-0.8,0.8).closePath();
	this.shape_76.setTransform(17.3,347.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,0.7).curveTo(-1,0.4,-1.1,0).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,-0,-1).curveTo(0.4,-1,0.7,-0.7).curveTo(1.1,-0.4,1.1,0).curveTo(1.1,0.4,0.7,0.7).curveTo(0.4,1,-0,1).curveTo(-0.4,1,-0.7,0.7).closePath();
	this.shape_77.setTransform(11.2,300.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,1.6).curveTo(-2.2,0.9,-2.2,-0).curveTo(-2.2,-0.9,-1.5,-1.5).curveTo(-0.9,-2.2,-0,-2.1).curveTo(0.9,-2.2,1.5,-1.5).curveTo(2.2,-0.9,2.2,-0).curveTo(2.2,0.9,1.5,1.6).curveTo(0.9,2.1,-0,2.1).curveTo(-0.9,2.1,-1.5,1.6).closePath();
	this.shape_78.setTransform(8.3,314.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#494A4E").beginStroke().moveTo(-1,1).curveTo(-1.4,0.6,-1.4,0).curveTo(-1.4,-0.6,-1,-1).curveTo(-0.6,-1.4,-0,-1.4).curveTo(0.6,-1.4,1,-1).curveTo(1.4,-0.6,1.4,0).curveTo(1.4,0.6,1,1).curveTo(0.6,1.4,-0,1.4).curveTo(-0.6,1.4,-1,1).closePath();
	this.shape_79.setTransform(18.6,317.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,2.2).curveTo(-3.1,1.3,-3.1,-0).curveTo(-3.1,-1.3,-2.2,-2.2).curveTo(-1.3,-3.1,-0,-3.1).curveTo(1.3,-3.1,2.2,-2.2).curveTo(3.1,-1.3,3.1,-0).curveTo(3.1,1.3,2.2,2.2).curveTo(1.3,3.1,-0,3.1).curveTo(-1.2,3.1,-2.2,2.2).closePath();
	this.shape_80.setTransform(10.2,343.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,1.5).curveTo(-2.1,0.9,-2.1,0).curveTo(-2.1,-0.9,-1.5,-1.5).curveTo(-0.9,-2.1,0,-2.1).curveTo(0.9,-2.1,1.5,-1.5).curveTo(2.1,-0.9,2.1,0).curveTo(2.1,0.9,1.5,1.5).curveTo(0.9,2.1,0,2.1).curveTo(-0.9,2.1,-1.5,1.5).closePath();
	this.shape_81.setTransform(13.8,282.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,1.5).curveTo(-2.1,0.9,-2.1,0).curveTo(-2.1,-0.9,-1.5,-1.5).curveTo(-0.9,-2.1,0,-2.1).curveTo(0.8,-2.1,1.5,-1.5).curveTo(2.1,-0.9,2.1,0).curveTo(2.1,0.9,1.5,1.5).curveTo(0.8,2.1,0,2.1).curveTo(-0.9,2.1,-1.5,1.5).closePath();
	this.shape_82.setTransform(16.2,306.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,1.5).curveTo(-2.1,0.9,-2.1,-0).curveTo(-2.1,-0.9,-1.5,-1.5).curveTo(-0.8,-2.1,-0,-2.1).curveTo(0.9,-2.1,1.5,-1.5).curveTo(2.1,-0.9,2.1,-0).curveTo(2.1,0.9,1.5,1.5).curveTo(0.9,2.1,-0,2.1).curveTo(-0.8,2.1,-1.5,1.5).closePath();
	this.shape_83.setTransform(7,333);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.3,38.9).curveTo(-13.1,34.8,-13.1,20.7).curveTo(-13.1,4.8,-8.3,-18.2).curveTo(-3.4,-41.3,-0,-41.3).curveTo(3.4,-41.3,8.3,-18.2).curveTo(13.1,4.8,13.1,20.7).curveTo(13.1,34.8,9.2,38.9).curveTo(7,41.3,-0,41.3).curveTo(-7,41.3,-9.3,38.9).closePath();
	this.shape_84.setTransform(13.6,311.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.9,1.7).lineTo(-7.9,-1.7).lineTo(7.9,-1.7).lineTo(7.9,1.7).closePath();
	this.shape_85.setTransform(13.5,362.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.5,9.4).lineTo(-1.5,-9.4).lineTo(1.5,-9.4).lineTo(1.5,9.4).closePath();
	this.shape_86.setTransform(13.6,352.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_87.setTransform(755.2,218.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_88.setTransform(745.5,218.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_89.setTransform(735.9,218.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_90.setTransform(726.2,218.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_91.setTransform(716.5,218.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_92.setTransform(706.9,218.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_93.setTransform(697.2,218.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_94.setTransform(687.6,218.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_95.setTransform(677.9,218.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_96.setTransform(668.3,218.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_97.setTransform(658.6,218.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_98.setTransform(648.9,218.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_99.setTransform(639.3,218.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_100.setTransform(629.6,218.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_101.setTransform(620,218.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_102.setTransform(610.3,218.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_103.setTransform(600.7,218.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_104.setTransform(591,218.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_105.setTransform(581.3,218.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_106.setTransform(571.7,218.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_107.setTransform(562,218.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_108.setTransform(552.4,218.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_109.setTransform(542.7,218.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_110.setTransform(533.1,218.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_111.setTransform(523.4,218.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_112.setTransform(513.7,218.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_113.setTransform(504.1,218.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_114.setTransform(494.4,218.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_115.setTransform(484.8,218.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_116.setTransform(475.1,218.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_117.setTransform(465.5,218.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_118.setTransform(455.8,218.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_119.setTransform(446.1,218.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_120.setTransform(436.5,218.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_121.setTransform(426.8,218.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_122.setTransform(417.2,218.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#434444").beginStroke().moveTo(-1.2,1.2).curveTo(-1.7,0.7,-1.7,-0).curveTo(-1.7,-0.7,-1.2,-1.2).curveTo(-0.7,-1.7,-0,-1.7).curveTo(0.7,-1.7,1.2,-1.2).curveTo(1.7,-0.7,1.7,-0).curveTo(1.7,0.7,1.2,1.2).curveTo(0.7,1.7,-0,1.7).curveTo(-0.7,1.7,-1.2,1.2).closePath();
	this.shape_123.setTransform(407.5,218.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,-2.8).lineTo(5.2,-2.8).lineTo(0,2.8).closePath();
	this.shape_124.setTransform(592.5,185.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#494A4E").beginStroke().moveTo(-10.5,3).lineTo(-3.6,-3.1).lineTo(7.9,-3.1).curveTo(9,-3.1,9.7,-2.3).curveTo(10.5,-1.6,10.5,-0.6).lineTo(10.5,0.5).curveTo(10.5,1.6,9.7,2.3).curveTo(9,3,7.9,3).closePath();
	this.shape_125.setTransform(592.1,186);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.1,3).curveTo(-4.2,3,-4.9,2.3).curveTo(-5.7,1.6,-5.7,0.5).lineTo(-5.7,-0.6).curveTo(-5.7,-1.6,-4.9,-2.3).curveTo(-4.2,-3.1,-3.1,-3.1).lineTo(-0.4,-3.1).lineTo(5.7,3).closePath();
	this.shape_126.setTransform(565.8,186);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.5,2.6).curveTo(-16.5,2.6,-18.3,0).lineTo(-19.5,-2.6).lineTo(-8.6,-2.6).lineTo(-5.1,0.9).lineTo(-1.1,-2.6).lineTo(19.5,-2.6).curveTo(19.2,-1.3,18.3,0).curveTo(16.5,2.6,13.5,2.6).closePath();
	this.shape_127.setTransform(581.3,193.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.5,7).curveTo(-19.5,6.1,-19.2,4.8).curveTo(-18.6,2.2,-17.1,0).curveTo(-12.2,-6.9,-0,-7).lineTo(0.1,-7).curveTo(12.2,-6.9,17.1,0).curveTo(19.5,3.5,19.5,7).closePath().moveTo(-1.1,-1).curveTo(-1.3,-0.5,-1.3,0.1).curveTo(-1.3,0.7,-1,1.1).curveTo(-0.8,1.5,-0.4,1.5).curveTo(-0.1,1.5,0.1,1.1).curveTo(0.4,0.7,0.4,0.1).curveTo(0.4,-0.5,0.1,-1).curveTo(-0.1,-1.6,-0.5,-1.6).curveTo(-0.8,-1.6,-1.1,-1).closePath().moveTo(6.5,-1.4).curveTo(6.2,-1.3,6.1,-0.7).curveTo(6.1,-0.1,6.4,0.4).curveTo(6.6,0.9,7,1.2).curveTo(7.4,1.5,7.7,1.4).curveTo(8.4,1.1,7.9,-0.2).curveTo(7.7,-0.8,7.3,-1.2).curveTo(6.9,-1.5,6.7,-1.5).lineTo(6.5,-1.4).closePath().moveTo(-7.9,-1.6).curveTo(-8.4,-1.3,-8.7,-0.8).curveTo(-9,-0.2,-9,0.2).curveTo(-9,0.7,-8.6,0.9).curveTo(-8.3,1.1,-7.9,0.8).curveTo(-7.5,0.5,-7.2,0).curveTo(-6.9,-0.5,-6.9,-1.1).curveTo(-6.9,-1.7,-7.2,-1.8).lineTo(-7.4,-1.9).curveTo(-7.6,-1.9,-7.9,-1.6).closePath().moveTo(-12.2,-1.6).curveTo(-12.7,-1.3,-13,-0.8).curveTo(-13.2,-0.2,-13.2,0.2).curveTo(-13.2,0.7,-12.9,0.9).curveTo(-12.6,1.1,-12.2,0.8).curveTo(-11.8,0.6,-11.5,0).curveTo(-11.2,-0.5,-11.1,-1.1).curveTo(-11.1,-1.7,-11.4,-1.8).lineTo(-11.6,-1.9).curveTo(-11.9,-1.9,-12.2,-1.6).closePath().moveTo(10,-2.5).curveTo(9.7,-2.4,9.7,-1.8).curveTo(9.8,-1.2,10.1,-0.7).curveTo(10.4,-0.2,10.8,0.1).curveTo(11.2,0.3,11.5,0.2).curveTo(12.2,-0.3,11.5,-1.5).curveTo(11.2,-2,10.8,-2.4).curveTo(10.5,-2.6,10.2,-2.6).lineTo(10,-2.5).closePath().moveTo(2.6,-2.9).curveTo(2.3,-2.8,2.1,-2.2).curveTo(2,-1.7,2.1,-1.1).curveTo(2.3,-0.6,2.6,-0.2).curveTo(2.9,0.1,3.3,0).curveTo(3.6,-0.1,3.7,-0.5).curveTo(3.9,-1,3.7,-1.5).curveTo(3.6,-2.1,3.3,-2.5).curveTo(3,-2.9,2.6,-2.9).lineTo(2.6,-2.9).closePath().moveTo(-4,-2.8).curveTo(-4.4,-2.4,-4.7,-1.8).curveTo(-4.9,-1.3,-4.9,-0.8).curveTo(-4.9,-0.3,-4.6,-0.2).curveTo(-4.2,-0,-3.8,-0.3).curveTo(-3.4,-0.6,-3.2,-1.1).curveTo(-2.9,-1.7,-2.9,-2.2).curveTo(-2.9,-2.8,-3.2,-3).lineTo(-3.4,-3).curveTo(-3.7,-3,-4,-2.8).closePath().moveTo(-0.5,-5.5).curveTo(-0.8,-5.5,-0.9,-5).curveTo(-1.1,-4.6,-1,-4).curveTo(-0.8,-2.8,-0.1,-2.9).curveTo(0.2,-3,0.3,-3.3).curveTo(0.5,-3.7,0.4,-4.2).curveTo(0.3,-4.7,0.1,-5.1).curveTo(-0.2,-5.5,-0.4,-5.5).lineTo(-0.5,-5.5).closePath().moveTo(4.6,-5.5).curveTo(4.3,-5.4,4.3,-4.9).curveTo(4.3,-4.4,4.5,-3.9).curveTo(5,-2.8,5.6,-3).curveTo(5.9,-3.1,5.9,-3.5).curveTo(6,-3.9,5.7,-4.4).curveTo(5.5,-4.9,5.2,-5.3).curveTo(4.9,-5.5,4.7,-5.5).lineTo(4.6,-5.5).closePath().moveTo(-6.1,-5.2).curveTo(-6.5,-4.9,-6.7,-4.4).curveTo(-7.2,-3.4,-6.6,-3).curveTo(-6,-2.8,-5.4,-3.8).curveTo(-5.2,-4.3,-5.2,-4.8).curveTo(-5.2,-5.3,-5.5,-5.4).lineTo(-5.6,-5.4).curveTo(-5.8,-5.4,-6.1,-5.2).closePath();
	this.shape_128.setTransform(581.3,174.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.5,17).curveTo(-29.1,9.9,-29.1,0).curveTo(-29.1,-10,-20.5,-17).curveTo(-12.1,-24,-0,-24).curveTo(12,-24,20.5,-17).curveTo(29.1,-10,29.1,0).curveTo(29.1,9.9,20.5,17).curveTo(12,24.1,-0,24.1).curveTo(-12.1,24.1,-20.5,17).closePath().moveTo(-20,-16.4).curveTo(-28.3,-9.6,-28.3,0).curveTo(-28.3,9.6,-20,16.5).curveTo(-11.7,23.3,-0,23.2).curveTo(11.7,23.3,20,16.5).curveTo(28.3,9.6,28.3,0).curveTo(28.3,-9.6,20,-16.4).curveTo(11.7,-23.3,-0,-23.3).curveTo(-11.7,-23.3,-20,-16.4).closePath();
	this.shape_129.setTransform(581.4,182.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-25.3,20.8).curveTo(-35.8,12.3,-35.8,0).curveTo(-35.8,-12.3,-25.3,-20.9).curveTo(-14.8,-29.5,-0,-29.5).curveTo(14.8,-29.5,25.3,-20.9).curveTo(35.8,-12.2,35.8,0).curveTo(35.8,12.2,25.3,20.8).curveTo(14.8,29.5,-0,29.5).curveTo(-14.8,29.5,-25.3,20.8).closePath();
	this.shape_130.setTransform(581.4,182.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.2,22.4).curveTo(-38.4,13.2,-38.4,0).curveTo(-38.4,-13.1,-27.2,-22.4).curveTo(-15.9,-31.7,0,-31.7).curveTo(15.9,-31.7,27.2,-22.4).curveTo(38.4,-13.1,38.4,0).curveTo(38.4,13.2,27.2,22.4).curveTo(15.9,31.7,0,31.7).curveTo(-15.9,31.7,-27.2,22.4).closePath();
	this.shape_131.setTransform(581.3,182.9);

	this.instance_5 = new lib.pipa0015();
	this.instance_5.parent = this;
	this.instance_5.setTransform(581.3,160,1,1,0,0,0,119.5,3.2);
	this.instance_5.alpha = 0.102;

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#494A4E").beginStroke().moveTo(-119.5,10.2).curveTo(-119.5,1.3,-115.5,-3.8).curveTo(-110.5,-10.2,-99.6,-10.2).lineTo(99.6,-10.2).curveTo(110.5,-10.2,115.5,-3.8).curveTo(119.5,1.3,119.5,10.2).closePath();
	this.shape_132.setTransform(581.4,153.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,7.5).curveTo(-1.8,7,-1.8,6.2).lineTo(-1.8,-6.2).curveTo(-1.8,-7,-1.3,-7.5).curveTo(-0.8,-8,0,-8).curveTo(0.7,-8,1.3,-7.5).curveTo(1.8,-7,1.8,-6.2).lineTo(1.8,6.2).curveTo(1.8,7,1.3,7.5).curveTo(0.7,8,0,8).curveTo(-0.8,8,-1.3,7.5).closePath();
	this.shape_133.setTransform(587.5,280.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.3,7.5).curveTo(-1.8,7,-1.8,6.2).lineTo(-1.8,-6.2).curveTo(-1.8,-7,-1.3,-7.5).curveTo(-0.7,-8,-0,-8).curveTo(0.7,-8,1.3,-7.5).curveTo(1.8,-7,1.8,-6.2).lineTo(1.8,6.2).curveTo(1.8,7,1.3,7.5).curveTo(0.7,8,-0,8).curveTo(-0.7,8,-1.3,7.5).closePath();
	this.shape_134.setTransform(575.3,280.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.4,6.7).lineTo(3.5,-7.2).curveTo(4.7,-5.9,5.4,-3.9).lineTo(-1.6,7.1).lineTo(-2.7,7.2).curveTo(-4.1,7.2,-5.4,6.7).closePath();
	this.shape_135.setTransform(597.6,259.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,6.8).lineTo(4,-7.5).lineTo(5,-6.9).lineTo(-4.1,7.5).closePath();
	this.shape_136.setTransform(594.4,258.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,3.7).lineTo(1.5,-6.8).curveTo(2.3,-6.9,3.1,-6.9).curveTo(4.1,-6.9,5.1,-6.7).lineTo(-3.5,6.9).curveTo(-4.6,5.6,-5.2,3.7).closePath();
	this.shape_137.setTransform(591.8,256.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#494A4E").beginStroke().moveTo(-6,6).curveTo(-8.5,3.6,-8.5,-0).curveTo(-8.5,-3.5,-6,-6).curveTo(-3.5,-8.5,0,-8.5).curveTo(3.6,-8.5,6,-6).curveTo(8.5,-3.5,8.5,-0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.5).curveTo(-3.5,8.5,-6,6).closePath();
	this.shape_138.setTransform(594.9,258.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.3,7.3).curveTo(-10.3,4.3,-10.3,-0).curveTo(-10.3,-4.3,-7.3,-7.3).curveTo(-4.3,-10.3,0,-10.3).curveTo(4.3,-10.3,7.3,-7.3).curveTo(10.3,-4.3,10.3,-0).curveTo(10.3,4.3,7.3,7.3).curveTo(4.3,10.3,0,10.3).curveTo(-4.3,10.3,-7.3,7.3).closePath();
	this.shape_139.setTransform(594.9,258.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.4,6.7).lineTo(3.5,-7.2).curveTo(4.8,-5.7,5.4,-3.9).lineTo(-1.6,7.1).lineTo(-2.7,7.2).curveTo(-4.1,7.2,-5.4,6.7).closePath();
	this.shape_140.setTransform(570.5,259.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,6.8).lineTo(4,-7.5).lineTo(5,-6.9).lineTo(-4.1,7.5).closePath();
	this.shape_141.setTransform(567.3,258.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.1,3.7).lineTo(1.5,-6.8).curveTo(2.3,-6.9,3.1,-6.9).curveTo(4,-6.9,5.1,-6.7).lineTo(-3.5,6.9).curveTo(-4.7,5.6,-5.1,3.7).closePath();
	this.shape_142.setTransform(564.7,256.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#494A4E").beginStroke().moveTo(-6,6).curveTo(-8.5,3.5,-8.5,-0).curveTo(-8.5,-3.5,-6,-6).curveTo(-3.5,-8.5,0,-8.5).curveTo(3.6,-8.5,6,-6).curveTo(8.5,-3.5,8.5,-0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.5).curveTo(-3.5,8.5,-6,6).closePath();
	this.shape_143.setTransform(567.8,258.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.3,7.3).curveTo(-10.3,4.3,-10.3,-0).curveTo(-10.3,-4.3,-7.3,-7.3).curveTo(-4.3,-10.3,0,-10.3).curveTo(4.3,-10.3,7.2,-7.3).curveTo(10.3,-4.3,10.3,-0).curveTo(10.3,4.2,7.2,7.3).curveTo(4.3,10.3,0,10.3).curveTo(-4.3,10.3,-7.3,7.3).closePath();
	this.shape_144.setTransform(567.8,258.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.6,45.9).lineTo(-0.6,-45.9).lineTo(0.6,-45.9).lineTo(0.6,45.9).closePath();
	this.shape_145.setTransform(581.4,284.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#494A4E").beginStroke().moveTo(27.3,46.6).lineTo(27.3,-43.2).curveTo(27.4,-44,26.7,-44.6).curveTo(26.2,-45.2,25.3,-45.2).lineTo(-25.3,-45.2).curveTo(-26.2,-45.2,-26.7,-44.6).curveTo(-27.4,-44,-27.4,-43.2).lineTo(-27.4,46.6).lineTo(-28.7,46.6).lineTo(-28.7,-43.2).curveTo(-28.7,-44.6,-27.7,-45.6).curveTo(-26.7,-46.5,-25.3,-46.6).lineTo(25.3,-46.6).curveTo(26.7,-46.5,27.7,-45.6).curveTo(28.7,-44.6,28.7,-43.2).lineTo(28.7,46.6).closePath();
	this.shape_146.setTransform(581.4,283.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-28,46.2).lineTo(-28,-43.5).curveTo(-28,-44.6,-27.2,-45.4).curveTo(-26.4,-46.2,-25.3,-46.2).lineTo(25.3,-46.2).curveTo(26.5,-46.2,27.2,-45.4).curveTo(28,-44.6,28,-43.5).lineTo(28,46.2).closePath();
	this.shape_147.setTransform(581.3,283.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.9,17.5).lineTo(9.5,-17.6).lineTo(10.7,-17.6).curveTo(11.6,-17.6,12.2,-16.9).curveTo(12.9,-16.3,12.9,-15.4).lineTo(12.9,-10.9).lineTo(-5.2,17.5).closePath();
	this.shape_148.setTransform(707.3,258.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.4,17.5).lineTo(9.9,-17.6).lineTo(12.4,-17.6).lineTo(-9.9,17.5).closePath();
	this.shape_149.setTransform(699.6,258.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-10.6,5.9).lineTo(3.7,-16.6).lineTo(10.6,-16.6).lineTo(-10.6,16.6).closePath();
	this.shape_150.setTransform(695.6,257.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.4,17.5).curveTo(-16.3,17.5,-16.9,17).curveTo(-17.6,16.3,-17.6,15.4).lineTo(-17.6,-15.4).curveTo(-17.6,-16.3,-16.9,-16.9).curveTo(-16.3,-17.6,-15.4,-17.6).lineTo(15.4,-17.6).curveTo(16.3,-17.6,16.9,-16.9).curveTo(17.6,-16.3,17.5,-15.4).lineTo(17.5,15.4).curveTo(17.6,16.3,16.9,17).curveTo(16.3,17.5,15.4,17.5).closePath();
	this.shape_151.setTransform(702.6,258.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,19.2).curveTo(-17.8,19.2,-18.5,18.5).curveTo(-19.2,17.8,-19.2,16.9).lineTo(-19.2,-16.9).curveTo(-19.2,-17.8,-18.5,-18.5).curveTo(-17.8,-19.2,-16.9,-19.2).lineTo(16.9,-19.2).curveTo(17.8,-19.2,18.5,-18.5).curveTo(19.2,-17.8,19.2,-16.9).lineTo(19.2,16.9).curveTo(19.2,17.8,18.5,18.5).curveTo(17.8,19.2,16.9,19.2).closePath();
	this.shape_152.setTransform(702.6,258.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-18.8,21.4).curveTo(-19.9,21.4,-20.6,20.6).curveTo(-21.3,19.9,-21.4,18.8).lineTo(-21.4,-18.8).curveTo(-21.3,-19.9,-20.6,-20.6).curveTo(-19.9,-21.4,-18.8,-21.4).lineTo(18.7,-21.4).curveTo(19.8,-21.4,20.6,-20.6).curveTo(21.3,-19.9,21.4,-18.8).lineTo(21.4,18.8).curveTo(21.3,19.9,20.6,20.6).curveTo(19.8,21.4,18.7,21.4).closePath();
	this.shape_153.setTransform(702.6,258.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.9,17.5).lineTo(9.5,-17.6).lineTo(10.7,-17.6).curveTo(11.6,-17.6,12.3,-16.9).curveTo(12.9,-16.3,12.9,-15.4).lineTo(12.9,-10.9).lineTo(-5.3,17.5).closePath();
	this.shape_154.setTransform(650.8,258.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.4,17.5).lineTo(10,-17.6).lineTo(12.5,-17.6).lineTo(-9.9,17.5).closePath();
	this.shape_155.setTransform(643.1,258.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-10.6,16.4).lineTo(-10.6,5.9).lineTo(3.8,-16.6).lineTo(10.6,-16.6).lineTo(-10.5,16.6).closePath();
	this.shape_156.setTransform(639.1,257.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.4,17.5).curveTo(-16.3,17.5,-16.9,17).curveTo(-17.6,16.3,-17.5,15.4).lineTo(-17.5,-15.4).curveTo(-17.6,-16.3,-16.9,-16.9).curveTo(-16.3,-17.6,-15.4,-17.6).lineTo(15.4,-17.6).curveTo(16.3,-17.6,17,-16.9).curveTo(17.5,-16.3,17.6,-15.4).lineTo(17.6,15.4).curveTo(17.5,16.3,17,17).curveTo(16.3,17.5,15.4,17.5).closePath();
	this.shape_157.setTransform(646.1,258.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.9,19.2).curveTo(-17.8,19.2,-18.5,18.5).curveTo(-19.2,17.8,-19.2,16.9).lineTo(-19.2,-16.9).curveTo(-19.2,-17.8,-18.5,-18.5).curveTo(-17.8,-19.2,-16.9,-19.2).lineTo(16.9,-19.2).curveTo(17.8,-19.2,18.5,-18.5).curveTo(19.2,-17.8,19.2,-16.9).lineTo(19.2,16.9).curveTo(19.2,17.8,18.5,18.5).curveTo(17.8,19.2,16.9,19.2).closePath();
	this.shape_158.setTransform(646.1,258.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-18.8,21.4).curveTo(-19.9,21.4,-20.6,20.6).curveTo(-21.4,19.9,-21.4,18.8).lineTo(-21.4,-18.8).curveTo(-21.4,-19.9,-20.6,-20.6).curveTo(-19.9,-21.4,-18.8,-21.4).lineTo(18.8,-21.4).curveTo(19.9,-21.4,20.6,-20.6).curveTo(21.4,-19.9,21.4,-18.8).lineTo(21.4,18.8).curveTo(21.4,19.9,20.6,20.6).curveTo(19.9,21.4,18.8,21.4).closePath();
	this.shape_159.setTransform(646.1,258.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.9,17.5).lineTo(9.5,-17.6).lineTo(10.8,-17.6).curveTo(11.6,-17.6,12.3,-16.9).curveTo(12.9,-16.3,12.9,-15.4).lineTo(12.9,-10.9).lineTo(-5.2,17.5).closePath();
	this.shape_160.setTransform(521.2,258.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.4,17.5).lineTo(9.9,-17.6).lineTo(12.5,-17.6).lineTo(-9.9,17.5).closePath();
	this.shape_161.setTransform(513.6,258.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-10.6,5.9).lineTo(3.7,-16.6).lineTo(10.6,-16.6).lineTo(-10.6,16.6).closePath();
	this.shape_162.setTransform(509.6,257.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.4,17.5).curveTo(-16.3,17.5,-16.9,17).curveTo(-17.5,16.3,-17.5,15.4).lineTo(-17.5,-15.4).curveTo(-17.5,-16.3,-16.9,-16.9).curveTo(-16.3,-17.6,-15.4,-17.6).lineTo(15.4,-17.6).curveTo(16.3,-17.6,16.9,-16.9).curveTo(17.5,-16.3,17.5,-15.4).lineTo(17.5,15.4).curveTo(17.5,16.3,16.9,17).curveTo(16.3,17.5,15.4,17.5).closePath();
	this.shape_163.setTransform(516.6,258.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.8,19.2).curveTo(-17.8,19.2,-18.5,18.5).curveTo(-19.2,17.8,-19.2,16.9).lineTo(-19.2,-16.9).curveTo(-19.2,-17.8,-18.5,-18.5).curveTo(-17.8,-19.2,-16.8,-19.2).lineTo(16.8,-19.2).curveTo(17.8,-19.2,18.5,-18.5).curveTo(19.2,-17.8,19.2,-16.9).lineTo(19.2,16.9).curveTo(19.2,17.8,18.5,18.5).curveTo(17.8,19.2,16.8,19.2).closePath();
	this.shape_164.setTransform(516.6,258.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-18.8,21.4).curveTo(-19.9,21.4,-20.6,20.6).curveTo(-21.4,19.9,-21.4,18.8).lineTo(-21.4,-18.8).curveTo(-21.4,-19.9,-20.6,-20.6).curveTo(-19.8,-21.4,-18.8,-21.4).lineTo(18.7,-21.4).curveTo(19.8,-21.4,20.5,-20.6).curveTo(21.4,-19.9,21.4,-18.8).lineTo(21.4,18.8).curveTo(21.4,19.9,20.5,20.6).curveTo(19.8,21.4,18.7,21.4).closePath();
	this.shape_165.setTransform(516.6,258.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.9,17.5).lineTo(9.5,-17.6).lineTo(10.7,-17.6).curveTo(11.6,-17.6,12.3,-16.9).curveTo(12.9,-16.3,12.9,-15.4).lineTo(12.9,-10.9).lineTo(-5.3,17.5).closePath();
	this.shape_166.setTransform(464.8,258.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-12.5,17.5).lineTo(9.9,-17.6).lineTo(12.5,-17.6).lineTo(-9.9,17.5).closePath();
	this.shape_167.setTransform(457.1,258.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-10.6,5.9).lineTo(3.7,-16.6).lineTo(10.6,-16.6).lineTo(-10.6,16.6).closePath();
	this.shape_168.setTransform(453.1,257.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.4,17.5).curveTo(-16.3,17.5,-16.9,17).curveTo(-17.5,16.3,-17.5,15.4).lineTo(-17.5,-15.4).curveTo(-17.5,-16.3,-16.9,-16.9).curveTo(-16.3,-17.6,-15.4,-17.6).lineTo(15.4,-17.6).curveTo(16.3,-17.6,16.9,-16.9).curveTo(17.6,-16.3,17.6,-15.4).lineTo(17.6,15.4).curveTo(17.6,16.3,16.9,17).curveTo(16.3,17.5,15.4,17.5).closePath();
	this.shape_169.setTransform(460.1,258.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.8,19.2).curveTo(-17.8,19.2,-18.5,18.5).curveTo(-19.2,17.8,-19.2,16.9).lineTo(-19.2,-16.9).curveTo(-19.2,-17.8,-18.5,-18.5).curveTo(-17.8,-19.2,-16.8,-19.2).lineTo(16.8,-19.2).curveTo(17.9,-19.2,18.5,-18.5).curveTo(19.2,-17.8,19.2,-16.9).lineTo(19.2,16.9).curveTo(19.2,17.8,18.5,18.5).curveTo(17.9,19.2,16.8,19.2).closePath();
	this.shape_170.setTransform(460.1,258.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-18.7,21.4).curveTo(-19.8,21.4,-20.6,20.6).curveTo(-21.4,19.9,-21.3,18.8).lineTo(-21.3,-18.8).curveTo(-21.4,-19.9,-20.6,-20.6).curveTo(-19.8,-21.4,-18.7,-21.4).lineTo(18.7,-21.4).curveTo(19.8,-21.4,20.6,-20.6).curveTo(21.3,-19.9,21.3,-18.8).lineTo(21.3,18.8).curveTo(21.3,19.9,20.6,20.6).curveTo(19.8,21.4,18.7,21.4).closePath();
	this.shape_171.setTransform(460.1,258.2);

	this.instance_6 = new lib.pipa0013();
	this.instance_6.parent = this;
	this.instance_6.setTransform(581.4,334.6,1,1,0,0,0,35.7,4.6);
	this.instance_6.alpha = 0.102;

	this.instance_7 = new lib.pipa0014();
	this.instance_7.parent = this;
	this.instance_7.setTransform(582.7,179.5,1,1,0,0,0,136.7,3.2);
	this.instance_7.alpha = 0.102;

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#494A4E").beginStroke().moveTo(-136.7,9.7).curveTo(-136.7,1.2,-132.9,-3.6).curveTo(-128.1,-9.7,-117.8,-9.7).lineTo(117.7,-9.7).curveTo(128.1,-9.7,132.9,-3.6).curveTo(136.7,1.2,136.7,9.7).closePath();
	this.shape_172.setTransform(582.7,173);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#494A4E").beginStroke().moveTo(-177.8,3.7).curveTo(-178.9,3.7,-179.7,2.9).curveTo(-180.4,2.2,-180.4,1.1).lineTo(-180.4,-1.1).curveTo(-180.4,-2.2,-179.7,-2.9).curveTo(-178.9,-3.7,-177.8,-3.7).lineTo(177.8,-3.7).curveTo(178.9,-3.7,179.6,-2.9).curveTo(180.4,-2.2,180.4,-1.1).lineTo(180.4,1.1).curveTo(180.4,2.2,179.6,2.9).curveTo(178.9,3.7,177.8,3.7).closePath();
	this.shape_173.setTransform(581.4,218.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#494A4E").beginStroke().moveTo(-176.7,5.4).curveTo(-176.7,-0.3,-175.7,-5.4).lineTo(175.8,-5.4).curveTo(176.7,-0.6,176.7,5.4).closePath();
	this.shape_174.setTransform(581.3,216.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#494A4E").beginStroke().moveTo(-164.4,1.6).curveTo(-165.1,1.6,-165.5,1.2).curveTo(-166,0.6,-166,0).curveTo(-166,-0.7,-165.5,-1.2).curveTo(-165.1,-1.6,-164.4,-1.6).lineTo(164.4,-1.6).curveTo(165.1,-1.6,165.6,-1.2).curveTo(166,-0.7,166,0).curveTo(166,0.6,165.6,1.2).curveTo(165.1,1.6,164.4,1.6).closePath();
	this.shape_175.setTransform(581.4,204.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#494A4E").beginStroke().moveTo(-159.5,1.6).curveTo(-160.1,1.6,-160.6,1.2).curveTo(-161,0.7,-161,-0).curveTo(-161,-0.6,-160.6,-1.2).curveTo(-160.1,-1.6,-159.5,-1.6).lineTo(159.5,-1.6).curveTo(160.1,-1.6,160.6,-1.2).curveTo(161,-0.7,161,-0).curveTo(161,0.7,160.6,1.2).curveTo(160.1,1.6,159.5,1.6).closePath();
	this.shape_176.setTransform(581.3,196.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#494A4E").beginStroke().moveTo(-147.5,1.6).curveTo(-148.1,1.6,-148.6,1.1).curveTo(-149,0.7,-149,-0).curveTo(-149,-0.6,-148.6,-1.1).curveTo(-148.1,-1.6,-147.5,-1.6).lineTo(147.5,-1.6).curveTo(148.1,-1.6,148.6,-1.1).curveTo(149,-0.7,149,-0).curveTo(149,0.7,148.6,1.1).curveTo(148.1,1.6,147.5,1.6).closePath();
	this.shape_177.setTransform(581.3,188.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#494A4E").beginStroke().moveTo(-176.7,19.7).curveTo(-176.7,2.5,-168.8,-7.4).curveTo(-159.1,-19.7,-138.1,-19.7).lineTo(138.1,-19.7).curveTo(159.1,-19.7,168.8,-7.4).curveTo(176.7,2.5,176.7,19.7).closePath();
	this.shape_178.setTransform(581.3,202.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#494A4E").beginStroke().moveTo(-162.7,3.1).curveTo(-164,3.1,-164.9,2.2).curveTo(-165.8,1.3,-165.8,0).curveTo(-165.8,-1.3,-164.9,-2.2).curveTo(-164,-3.1,-162.7,-3.1).lineTo(162.7,-3.1).curveTo(164,-3.1,164.9,-2.2).curveTo(165.8,-1.3,165.8,0).curveTo(165.8,1.3,164.9,2.2).curveTo(164,3.1,162.7,3.1).closePath();
	this.shape_179.setTransform(581.4,284.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#494A4E").beginStroke().moveTo(-162.7,3.1).curveTo(-164,3.1,-164.9,2.2).curveTo(-165.8,1.3,-165.8,-0).curveTo(-165.8,-1.3,-164.9,-2.2).curveTo(-164,-3.1,-162.7,-3.1).lineTo(162.7,-3.1).curveTo(164,-3.1,164.9,-2.2).curveTo(165.8,-1.3,165.8,-0).curveTo(165.8,1.3,164.9,2.2).curveTo(164,3.1,162.7,3.1).closePath();
	this.shape_180.setTransform(581.4,274.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#494A4E").beginStroke().moveTo(-162.7,3.1).curveTo(-164,3.1,-164.9,2.2).curveTo(-165.8,1.3,-165.8,0).curveTo(-165.8,-1.3,-164.9,-2.2).curveTo(-164,-3.1,-162.7,-3.1).lineTo(162.7,-3.1).curveTo(164,-3.1,164.9,-2.2).curveTo(165.8,-1.2,165.8,0).curveTo(165.8,1.3,164.9,2.2).curveTo(164,3.1,162.7,3.1).closePath();
	this.shape_181.setTransform(581.4,263.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#494A4E").beginStroke().moveTo(-162.7,3.1).curveTo(-164,3.1,-164.9,2.2).curveTo(-165.8,1.3,-165.8,0).curveTo(-165.8,-1.3,-164.9,-2.2).curveTo(-164,-3.1,-162.7,-3.1).lineTo(162.7,-3.1).curveTo(164,-3.1,164.9,-2.2).curveTo(165.8,-1.2,165.8,0).curveTo(165.8,1.3,164.9,2.2).curveTo(164,3.1,162.7,3.1).closePath();
	this.shape_182.setTransform(581.4,252.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#494A4E").beginStroke().moveTo(-162.7,3.1).curveTo(-164,3.1,-164.9,2.2).curveTo(-165.8,1.3,-165.8,0).curveTo(-165.8,-1.3,-164.9,-2.2).curveTo(-164,-3.1,-162.7,-3.1).lineTo(162.7,-3.1).curveTo(164,-3.1,164.9,-2.2).curveTo(165.8,-1.2,165.8,0).curveTo(165.8,1.3,164.9,2.2).curveTo(164,3.1,162.7,3.1).closePath();
	this.shape_183.setTransform(581.4,242.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#494A4E").beginStroke().moveTo(-162.7,3.1).curveTo(-164,3.1,-164.9,2.2).curveTo(-165.8,1.3,-165.8,-0).curveTo(-165.8,-1.3,-164.9,-2.2).curveTo(-164,-3.1,-162.7,-3.1).lineTo(162.7,-3.1).curveTo(164,-3.1,164.9,-2.2).curveTo(165.8,-1.3,165.8,-0).curveTo(165.8,1.3,164.9,2.2).curveTo(164,3.1,162.7,3.1).closePath();
	this.shape_184.setTransform(581.4,231.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#494A4E").beginStroke().moveTo(-162,31.3).lineTo(-162,-31.3).lineTo(162.1,-31.3).lineTo(162.1,31.3).closePath();
	this.shape_185.setTransform(581.4,253.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#494A4E").beginStroke().moveTo(-162,3.1).lineTo(-162,-3.1).lineTo(162.1,-3.1).lineTo(162.1,3.1).closePath();
	this.shape_186.setTransform(581.4,290.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#494A4E").beginStroke().moveTo(-114.5,2.2).lineTo(-114.5,-2.2).lineTo(114.5,-2.2).lineTo(114.5,2.2).closePath();
	this.shape_187.setTransform(523.2,357);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#434444").beginStroke().moveTo(-165.2,1.1).lineTo(-165.2,-1.1).lineTo(165.1,-1.1).lineTo(165.1,1.1).closePath();
	this.shape_188.setTransform(581.4,328.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#434444").beginStroke().moveTo(-165.2,1.1).lineTo(-165.2,-1.1).lineTo(165.1,-1.1).lineTo(165.1,1.1).closePath();
	this.shape_189.setTransform(581.4,313.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_190.setTransform(742.9,318.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_191.setTransform(742.9,324.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_192.setTransform(735.7,324.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_193.setTransform(735.7,318.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_194.setTransform(728.6,318.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_195.setTransform(728.6,324.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_196.setTransform(721.4,324.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_197.setTransform(721.4,318.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_198.setTransform(714.2,318.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_199.setTransform(714.2,324.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_200.setTransform(707,324.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_201.setTransform(707,318.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_202.setTransform(699.8,318.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_203.setTransform(699.8,324.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_204.setTransform(692.7,324.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_205.setTransform(692.7,318.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_206.setTransform(685.5,318.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_207.setTransform(685.5,324.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_208.setTransform(678.3,324.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_209.setTransform(678.3,318.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_210.setTransform(671.1,318.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_211.setTransform(671.1,324.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_212.setTransform(663.9,324.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_213.setTransform(663.9,318.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_214.setTransform(656.8,318.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_215.setTransform(656.8,324.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_216.setTransform(649.6,324.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_217.setTransform(649.6,318.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_218.setTransform(642.4,318.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_219.setTransform(642.4,324.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_220.setTransform(635.2,324.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_221.setTransform(635.2,318.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_222.setTransform(628,318.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_223.setTransform(628,324.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_224.setTransform(620.9,324.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_225.setTransform(620.9,318.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_226.setTransform(613.7,318.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_227.setTransform(613.7,324.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_228.setTransform(606.5,324.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_229.setTransform(606.5,318.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_230.setTransform(599.3,318.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_231.setTransform(599.3,324.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_232.setTransform(592.1,324.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_233.setTransform(592.1,318.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_234.setTransform(584.9,318.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_235.setTransform(584.9,324.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_236.setTransform(577.8,324.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_237.setTransform(577.8,318.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_238.setTransform(570.6,318.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_239.setTransform(570.6,324.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_240.setTransform(563.4,324.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_241.setTransform(563.4,318.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_242.setTransform(556.2,318.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_243.setTransform(556.2,324.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_244.setTransform(549,324.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_245.setTransform(549,318.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_246.setTransform(541.9,318.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_247.setTransform(541.9,324.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_248.setTransform(534.7,324.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_249.setTransform(534.7,318.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_250.setTransform(527.5,318.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_251.setTransform(527.5,324.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_252.setTransform(520.3,324.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_253.setTransform(520.3,318.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_254.setTransform(513.1,318.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_255.setTransform(513.1,324.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_256.setTransform(506,324.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_257.setTransform(506,318.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_258.setTransform(498.8,318.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_259.setTransform(498.8,324.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_260.setTransform(491.6,324.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_261.setTransform(491.6,318.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_262.setTransform(484.4,318.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_263.setTransform(484.4,324.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_264.setTransform(477.2,324.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_265.setTransform(477.2,318.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_266.setTransform(470,318.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_267.setTransform(470,324.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_268.setTransform(462.9,324.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_269.setTransform(462.9,318.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_270.setTransform(455.7,318.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_271.setTransform(455.7,324.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_272.setTransform(448.5,324.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_273.setTransform(448.5,318.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_274.setTransform(441.3,318.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_275.setTransform(441.3,324.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_276.setTransform(434.1,324.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_277.setTransform(434.1,318.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_278.setTransform(427,318.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_279.setTransform(427,324.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_280.setTransform(419.8,324.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#434444").beginStroke().moveTo(-3.6,3.2).lineTo(-3.6,-3.2).lineTo(3.6,-3.2).lineTo(3.6,3.2).closePath();
	this.shape_281.setTransform(419.8,318.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-162.5,17.9).curveTo(-163.7,17.9,-164.4,17).curveTo(-165.1,16.3,-165.2,15.2).lineTo(-165.2,-15.3).curveTo(-165.1,-16.4,-164.4,-17.1).curveTo(-163.7,-17.9,-162.5,-17.9).lineTo(162.5,-17.9).curveTo(163.6,-17.9,164.4,-17.1).curveTo(165.1,-16.4,165.1,-15.3).lineTo(165.1,15.2).curveTo(165.1,16.3,164.4,17).curveTo(163.6,17.9,162.5,17.9).closePath();
	this.shape_282.setTransform(581.4,321.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#494A4E").beginStroke().moveTo(-162,36.5).lineTo(-162,-36.5).lineTo(162.1,-36.5).lineTo(162.1,36.5).closePath();
	this.shape_283.setTransform(581.4,321.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#494A4E").beginStroke().moveTo(-162,36.5).lineTo(-162,-36.5).lineTo(162.1,-36.5).lineTo(162.1,36.5).closePath();
	this.shape_284.setTransform(581.4,321.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#494A4E").beginStroke().moveTo(-11.3,11.3).curveTo(-16,6.6,-16,0).curveTo(-16,-6.6,-11.3,-11.3).curveTo(-6.6,-16,-0,-16).curveTo(6.6,-16,11.3,-11.3).curveTo(16,-6.6,16,0).curveTo(16,6.6,11.3,11.3).curveTo(6.6,16,-0,16).curveTo(-6.6,16,-11.3,11.3).closePath();
	this.shape_285.setTransform(745.8,272.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.6,12.6).curveTo(-17.8,7.4,-17.7,0).curveTo(-17.8,-7.4,-12.6,-12.6).curveTo(-7.4,-17.8,0,-17.8).curveTo(7.3,-17.8,12.5,-12.6).curveTo(17.8,-7.4,17.8,0).curveTo(17.8,7.4,12.5,12.6).curveTo(7.3,17.8,0,17.8).curveTo(-7.4,17.8,-12.6,12.6).closePath();
	this.shape_286.setTransform(745.8,272.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.6,16.5).curveTo(-23.4,9.7,-23.4,0).curveTo(-23.4,-9.7,-16.6,-16.5).curveTo(-9.7,-23.4,-0,-23.4).curveTo(9.7,-23.4,16.5,-16.5).curveTo(23.4,-9.7,23.4,0).curveTo(23.4,9.7,16.5,16.5).curveTo(9.7,23.4,-0,23.4).curveTo(-9.7,23.4,-16.6,16.5).closePath();
	this.shape_287.setTransform(773.6,253.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.2,6.1).lineTo(-16.2,-6.1).lineTo(16.2,-6.1).lineTo(16.2,6.1).closePath();
	this.shape_288.setTransform(744.7,253.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.1,14.1).curveTo(-33.5,10.8,-33.5,6.1).curveTo(-33.5,1.4,-30.1,-1.9).curveTo(-26.8,-5.2,-22.1,-5.2).curveTo(-20.2,-5.2,-18.8,-4.7).curveTo(-17.2,-8.5,-13.8,-10.8).curveTo(-10.4,-13.3,-6.2,-13.3).curveTo(-1.3,-13.2,2.4,-10.2).curveTo(4.3,-13.5,7.7,-15.4).curveTo(11.1,-17.5,15,-17.4).curveTo(21,-17.4,25.2,-13.2).curveTo(29.4,-9,29.4,-3).curveTo(29.5,-0.8,28.9,0.9).curveTo(31,2.1,32.2,4.2).curveTo(33.4,6.2,33.4,8.7).curveTo(33.4,12.1,31,14.7).curveTo(28.6,17.3,25.1,17.4).lineTo(-21.3,17.4).lineTo(-22.1,17.4).curveTo(-26.8,17.5,-30.1,14.1).closePath();
	this.shape_289.setTransform(345.3,50.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#494A4E").beginStroke().moveTo(-31.4,14.8).curveTo(-34.9,11.3,-34.9,6.4).curveTo(-34.9,1.5,-31.4,-2).curveTo(-28,-5.5,-23.1,-5.5).curveTo(-21.3,-5.5,-19.6,-4.9).curveTo(-17.9,-8.9,-14.4,-11.3).curveTo(-10.8,-13.8,-6.4,-13.8).curveTo(-1.3,-13.8,2.6,-10.6).curveTo(4.6,-14.1,8,-16.1).curveTo(11.5,-18.2,15.6,-18.2).curveTo(21.9,-18.2,26.3,-13.8).curveTo(30.7,-9.4,30.8,-3.1).curveTo(30.7,-1.1,30.2,1).curveTo(32.3,2.2,33.6,4.3).curveTo(34.9,6.5,34.9,9).curveTo(34.9,12.7,32.4,15.3).curveTo(29.9,18,26.2,18.2).lineTo(-23.1,18.2).curveTo(-28,18.2,-31.4,14.8).closePath();
	this.shape_290.setTransform(835.3,54.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.1,23.6).curveTo(-38.8,23.5,-42.1,19.9).curveTo(-45.4,16.5,-45.4,11.7).curveTo(-45.4,8.4,-43.7,5.6).curveTo(-42.1,2.8,-39.3,1.3).curveTo(-40,-1.3,-40,-4).curveTo(-40,-12.2,-34.3,-18).curveTo(-28.5,-23.7,-20.3,-23.7).curveTo(-15,-23.7,-10.3,-21).curveTo(-5.9,-18.4,-3.3,-13.8).curveTo(1.8,-18,8.3,-18).curveTo(14,-18,18.8,-14.7).curveTo(23.4,-11.6,25.4,-6.4).curveTo(27.7,-7.1,30.1,-7.1).curveTo(36.4,-7.1,40.9,-2.6).curveTo(45.4,1.9,45.4,8.3).curveTo(45.4,14.7,40.9,19.2).curveTo(36.4,23.7,30.1,23.7).closePath();
	this.shape_291.setTransform(92.7,94.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#D2D6E0").beginStroke().moveTo(-527,4.9).lineTo(-527,-5).lineTo(527,-5).lineTo(527,4.9).closePath();
	this.shape_292.setTransform(525,365.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.8,8).lineTo(-14.8,-8).lineTo(14.8,-8).lineTo(14.8,8).closePath();
	this.shape_293.setTransform(517.7,145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.instance_7},{t:this.instance_6},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.instance_5},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(127));

	// smooke
	this.instance_8 = new lib.pipaInterpolación1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(514.5,198.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({_off:false},0).to({x:544.5,y:78.5,alpha:1},14).wait(52));

	// piso
	this.instance_9 = new lib.pipa001();
	this.instance_9.parent = this;
	this.instance_9.setTransform(17.1,408.1,1,1,0,0,0,23.4,10.6);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.pipa002();
	this.instance_10.parent = this;
	this.instance_10.setTransform(257.8,469.3,1,1,0,0,0,22.2,10);
	this.instance_10.alpha = 0.602;

	this.instance_11 = new lib.pipa003();
	this.instance_11.parent = this;
	this.instance_11.setTransform(900.4,459.2,1,1,0,0,0,22.2,10);
	this.instance_11.alpha = 0.602;

	this.instance_12 = new lib.pipa004();
	this.instance_12.parent = this;
	this.instance_12.setTransform(433.8,423.6,1,1,0,0,0,22.2,10);
	this.instance_12.alpha = 0.602;

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-15.7,7.1).curveTo(-22.2,4.2,-22.1,-0).curveTo(-22.2,-4.1,-15.7,-7).curveTo(-9.2,-10,-0,-9.9).curveTo(9.2,-10,15.7,-7).curveTo(22.2,-4.1,22.1,-0).curveTo(22.2,4.2,15.7,7.1).curveTo(9.2,10,-0,10).curveTo(-9.2,10,-15.7,7.1).closePath();
	this.shape_294.setTransform(175.5,399.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#9EA0A8").beginStroke().moveTo(-15.7,7.1).curveTo(-22.2,4.1,-22.2,-0).curveTo(-22.2,-4.1,-15.7,-7.1).curveTo(-9.2,-9.9,0,-9.9).curveTo(9.2,-9.9,15.7,-7.1).curveTo(22.2,-4.1,22.2,-0).curveTo(22.2,4.1,15.7,7.1).curveTo(9.2,9.9,0,9.9).curveTo(-9.2,9.9,-15.7,7.1).closePath();
	this.shape_295.setTransform(859.4,408.5);

	this.instance_13 = new lib.pipa005();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1013.7,384.9,1,1,0,0,0,41.1,15.5);
	this.instance_13.alpha = 0.602;

	this.instance_14 = new lib.pipa006();
	this.instance_14.parent = this;
	this.instance_14.setTransform(588.6,400.4,1,1,0,0,0,21.5,11.8);
	this.instance_14.alpha = 0.602;

	this.instance_15 = new lib.pipa007();
	this.instance_15.parent = this;
	this.instance_15.setTransform(768.2,381.1,1,1,0,0,0,36.1,11.7);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.pipa008();
	this.instance_16.parent = this;
	this.instance_16.setTransform(396.8,381.1,1,1,0,0,0,36.1,11.7);
	this.instance_16.alpha = 0.602;

	this.instance_17 = new lib.pipa009();
	this.instance_17.parent = this;
	this.instance_17.setTransform(994.6,502.4,1,1,0,0,0,34.6,11.2);
	this.instance_17.alpha = 0.602;

	this.instance_18 = new lib.pipa0010();
	this.instance_18.parent = this;
	this.instance_18.setTransform(607.5,496.8,1,1,0,0,0,52,16.8);
	this.instance_18.alpha = 0.602;

	this.instance_19 = new lib.pipa0011();
	this.instance_19.parent = this;
	this.instance_19.setTransform(32.4,500.2,1,1,0,0,0,41.4,13.4);
	this.instance_19.alpha = 0.602;

	this.instance_20 = new lib.pipa0012();
	this.instance_20.parent = this;
	this.instance_20.setTransform(745.7,500.2,1,1,0,0,0,41.4,13.4);
	this.instance_20.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_295},{t:this.shape_294},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(127));

	// Ambient
	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_296.setTransform(525,182.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_297.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_297},{t:this.shape_296}]}).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(516,257.5,1469,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;