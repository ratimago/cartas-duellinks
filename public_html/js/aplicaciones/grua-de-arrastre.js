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


(lib.arrastrehandss = function(mode,startPosition,loop) {
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


(lib.arrastreplataforma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#999999").beginStroke().moveTo(-6.8,0.9).curveTo(-6.7,-1.3,-4.3,-3).curveTo(-1.9,-4.6,1.4,-4.7).curveTo(4.4,-4.8,5.6,-3.7).curveTo(6.6,-2.9,6.7,-1.1).lineTo(6.9,4).lineTo(-6.9,4.8).closePath();
	this.shape.setTransform(35.6,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#999999").beginStroke().moveTo(-9.1,-3.6).lineTo(8.9,-3.9).lineTo(9.1,3.5).lineTo(-9,4).closePath();
	this.shape_1.setTransform(33.6,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-35.9,-5.3).lineTo(35.6,-6.1).lineTo(35.9,5.3).lineTo(-35.6,6.1).closePath();
	this.shape_2.setTransform(-6.8,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-10.7,85.4,21.6);


(lib.arrastrepiso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.6,8.6,-29.5,6.1).curveTo(-31.3,3.5,-31.3,0).curveTo(-31.3,-3.6,-29.5,-6).curveTo(-27.6,-8.6,-25,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.4,-6).curveTo(31.3,-3.6,31.3,0).curveTo(31.3,3.5,29.4,6.1).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape.setTransform(1020.8,-22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.6,8.6,-29.5,6).curveTo(-31.3,3.5,-31.3,-0).curveTo(-31.3,-3.6,-29.5,-6.1).curveTo(-27.6,-8.6,-25,-8.6).lineTo(24.9,-8.6).curveTo(27.6,-8.6,29.4,-6.1).curveTo(31.3,-3.6,31.3,-0).curveTo(31.3,3.5,29.4,6).curveTo(27.5,8.6,24.9,8.6).closePath();
	this.shape_1.setTransform(847.6,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#28292B").beginStroke().moveTo(-23.8,8.6).curveTo(-26.5,8.6,-28.3,6).curveTo(-30.1,3.5,-30.1,-0).curveTo(-30.1,-3.6,-28.3,-6.1).curveTo(-26.5,-8.6,-23.8,-8.6).lineTo(23.8,-8.6).curveTo(26.5,-8.6,28.3,-6.1).curveTo(30.1,-3.6,30.2,-0).curveTo(30.1,3.5,28.3,6).curveTo(26.4,8.6,23.8,8.6).closePath();
	this.shape_2.setTransform(921.7,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#28292B").beginStroke().moveTo(-57.1,14.4).curveTo(-61.5,14.4,-64.5,10.2).curveTo(-67.7,5.9,-67.7,-0).curveTo(-67.7,-5.9,-64.5,-10.2).curveTo(-61.5,-14.4,-57.1,-14.4).lineTo(57.1,-14.4).curveTo(61.5,-14.4,64.6,-10.2).curveTo(67.7,-6,67.7,-0).curveTo(67.7,5.9,64.6,10.2).curveTo(61.5,14.4,57.1,14.4).closePath();
	this.shape_3.setTransform(1035.8,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#28292B").beginStroke().moveTo(-58.8,21.1).curveTo(-65.2,21.1,-69.7,14.9).curveTo(-74.3,8.7,-74.3,0).curveTo(-74.3,-8.7,-69.7,-14.9).curveTo(-65.2,-21.1,-58.8,-21.1).lineTo(58.8,-21.1).curveTo(65.2,-21.1,69.8,-14.9).curveTo(74.3,-8.7,74.3,0).curveTo(74.3,8.7,69.8,14.9).curveTo(65.2,21.1,58.8,21.1).closePath();
	this.shape_4.setTransform(885.1,-17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#28292B").beginStroke().moveTo(-68.7,21.1).curveTo(-71,21.1,-72.6,19.5).curveTo(-74.3,17.8,-74.3,15.5).lineTo(-74.3,-15.5).curveTo(-74.3,-17.8,-72.6,-19.5).curveTo(-71,-21.1,-68.7,-21.1).lineTo(68.7,-21.1).curveTo(71,-21.1,72.6,-19.5).curveTo(74.3,-17.8,74.3,-15.5).lineTo(74.3,15.5).curveTo(74.3,17.8,72.6,19.5).curveTo(71,21.1,68.7,21.1).closePath();
	this.shape_5.setTransform(574.6,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#28292B").beginStroke().moveTo(-63.5,14.4).curveTo(-65.1,14.4,-66.2,13.3).curveTo(-67.3,12.2,-67.3,10.6).lineTo(-67.3,-10.6).curveTo(-67.3,-12.2,-66.2,-13.3).curveTo(-65.1,-14.5,-63.5,-14.5).lineTo(63.5,-14.5).curveTo(65.1,-14.5,66.2,-13.3).curveTo(67.3,-12.1,67.3,-10.6).lineTo(67.3,10.6).curveTo(67.3,12.2,66.2,13.3).curveTo(65.1,14.4,63.5,14.4).closePath();
	this.shape_6.setTransform(716.2,-26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#28292B").beginStroke().moveTo(-87.3,14.4).curveTo(-91.7,14.4,-94.8,10.2).curveTo(-97.9,5.9,-97.9,-0).curveTo(-97.9,-6,-94.8,-10.2).curveTo(-91.7,-14.4,-87.3,-14.4).lineTo(87.3,-14.4).curveTo(91.7,-14.4,94.8,-10.2).curveTo(97.9,-6,97.9,-0).curveTo(97.9,5.9,94.8,10.2).curveTo(91.7,14.4,87.3,14.4).closePath();
	this.shape_7.setTransform(394.3,-19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#28292B").beginStroke().moveTo(-45.2,8.6).curveTo(-47.8,8.6,-49.7,6.1).curveTo(-51.5,3.5,-51.5,-0).curveTo(-51.5,-3.5,-49.7,-6.1).curveTo(-47.8,-8.6,-45.2,-8.6).lineTo(45.2,-8.6).curveTo(47.8,-8.6,49.7,-6.1).curveTo(51.5,-3.5,51.5,-0).curveTo(51.5,3.5,49.7,6.1).curveTo(47.8,8.6,45.2,8.6).closePath();
	this.shape_8.setTransform(724.5,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#28292B").beginStroke().moveTo(-11.3,8.6).curveTo(-12.3,8.6,-12.9,7.9).curveTo(-13.6,7.3,-13.6,6.3).lineTo(-13.6,-6.4).curveTo(-13.6,-7.3,-12.9,-8).curveTo(-12.3,-8.6,-11.3,-8.6).lineTo(11.3,-8.6).curveTo(12.3,-8.6,12.9,-8).curveTo(13.6,-7.3,13.6,-6.4).lineTo(13.6,6.3).curveTo(13.6,7.3,12.9,7.9).curveTo(12.3,8.6,11.3,8.6).closePath();
	this.shape_9.setTransform(608.2,-26.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#28292B").beginStroke().moveTo(-31.8,8.6).curveTo(-32.8,8.6,-33.4,7.9).curveTo(-34.1,7.3,-34,6.3).lineTo(-34,-6.4).curveTo(-34.1,-7.3,-33.4,-8).curveTo(-32.8,-8.6,-31.8,-8.6).lineTo(31.8,-8.6).curveTo(32.7,-8.6,33.4,-8).curveTo(34,-7.3,34,-6.4).lineTo(34,6.3).curveTo(34,7.3,33.4,7.9).curveTo(32.7,8.6,31.8,8.6).closePath();
	this.shape_10.setTransform(550.4,-26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.5,8.6,-29.5,6.1).curveTo(-31.3,3.5,-31.3,0).curveTo(-31.3,-3.6,-29.5,-6).curveTo(-27.5,-8.6,-25,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.5,-6).curveTo(31.3,-3.6,31.3,0).curveTo(31.3,3.5,29.5,6.1).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_11.setTransform(219.1,-22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#28292B").beginStroke().moveTo(-24.9,8.6).curveTo(-27.5,8.6,-29.4,6).curveTo(-31.3,3.5,-31.3,-0).curveTo(-31.3,-3.6,-29.4,-6.1).curveTo(-27.5,-8.6,-24.9,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.5,-6.1).curveTo(31.3,-3.6,31.3,-0).curveTo(31.3,3.5,29.5,6).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_12.setTransform(40.3,24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#28292B").beginStroke().moveTo(-37.3,8.6).curveTo(-39.9,8.6,-41.7,6).curveTo(-43.6,3.5,-43.6,-0).curveTo(-43.6,-3.6,-41.7,-6.1).curveTo(-39.9,-8.6,-37.3,-8.6).lineTo(37.2,-8.6).curveTo(39.9,-8.6,41.7,-6.1).curveTo(43.6,-3.6,43.6,-0).curveTo(43.6,3.5,41.7,6).curveTo(39.8,8.6,37.2,8.6).closePath();
	this.shape_13.setTransform(127.9,24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#28292B").beginStroke().moveTo(-49.8,8.6).curveTo(-52.4,8.6,-54.2,6.1).curveTo(-56.1,3.5,-56.1,-0).curveTo(-56.1,-3.5,-54.2,-6.1).curveTo(-52.4,-8.6,-49.8,-8.6).lineTo(49.8,-8.6).curveTo(52.4,-8.6,54.2,-6.1).curveTo(56.1,-3.5,56.1,-0).curveTo(56.1,3.5,54.2,6.1).curveTo(52.4,8.6,49.8,8.6).closePath();
	this.shape_14.setTransform(412.1,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#28292B").beginStroke().moveTo(-57.1,14.4).curveTo(-61.5,14.4,-64.6,10.2).curveTo(-67.7,5.9,-67.7,-0).curveTo(-67.7,-5.9,-64.6,-10.2).curveTo(-61.5,-14.4,-57.1,-14.4).lineTo(57.1,-14.4).curveTo(61.5,-14.4,64.6,-10.2).curveTo(67.7,-6,67.7,-0).curveTo(67.7,5.9,64.6,10.2).curveTo(61.5,14.4,57.1,14.4).closePath();
	this.shape_15.setTransform(255.5,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#28292B").beginStroke().moveTo(-72.3,21.1).curveTo(-78.7,21.1,-83.2,14.9).curveTo(-87.7,8.7,-87.7,0).curveTo(-87.7,-8.7,-83.2,-14.9).curveTo(-78.7,-21.1,-72.3,-21.1).lineTo(72.3,-21.1).curveTo(78.6,-21.1,83.2,-14.9).curveTo(87.8,-8.7,87.8,0).curveTo(87.8,8.7,83.2,14.9).curveTo(78.6,21.1,72.3,21.1).closePath();
	this.shape_16.setTransform(55.3,-17.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.6,8.6,-29.5,6.1).curveTo(-31.3,3.5,-31.3,0).curveTo(-31.3,-3.6,-29.5,-6).curveTo(-27.6,-8.6,-25,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.4,-6).curveTo(31.3,-3.6,31.3,0).curveTo(31.3,3.5,29.4,6.1).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_17.setTransform(-86.2,-16.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.6,8.6,-29.5,6).curveTo(-31.3,3.5,-31.3,-0).curveTo(-31.3,-3.6,-29.5,-6.1).curveTo(-27.6,-8.6,-25,-8.6).lineTo(24.9,-8.6).curveTo(27.6,-8.6,29.4,-6.1).curveTo(31.3,-3.6,31.3,-0).curveTo(31.3,3.5,29.4,6).curveTo(27.5,8.6,24.9,8.6).closePath();
	this.shape_18.setTransform(-259.4,30.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#28292B").beginStroke().moveTo(-23.8,8.6).curveTo(-26.5,8.6,-28.3,6).curveTo(-30.1,3.5,-30.1,-0).curveTo(-30.1,-3.6,-28.3,-6.1).curveTo(-26.5,-8.6,-23.8,-8.6).lineTo(23.8,-8.6).curveTo(26.5,-8.6,28.3,-6.1).curveTo(30.1,-3.6,30.2,-0).curveTo(30.1,3.5,28.3,6).curveTo(26.4,8.6,23.8,8.6).closePath();
	this.shape_19.setTransform(-185.3,30.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#28292B").beginStroke().moveTo(-57.1,14.4).curveTo(-61.5,14.4,-64.5,10.2).curveTo(-67.7,5.9,-67.7,-0).curveTo(-67.7,-5.9,-64.5,-10.2).curveTo(-61.5,-14.4,-57.1,-14.4).lineTo(57.1,-14.4).curveTo(61.5,-14.4,64.6,-10.2).curveTo(67.7,-6,67.7,-0).curveTo(67.7,5.9,64.6,10.2).curveTo(61.5,14.4,57.1,14.4).closePath();
	this.shape_20.setTransform(-71.2,26.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#28292B").beginStroke().moveTo(-58.8,21.1).curveTo(-65.2,21.1,-69.7,14.9).curveTo(-74.3,8.7,-74.3,0).curveTo(-74.3,-8.7,-69.7,-14.9).curveTo(-65.2,-21.1,-58.8,-21.1).lineTo(58.8,-21.1).curveTo(65.2,-21.1,69.8,-14.9).curveTo(74.3,-8.7,74.3,0).curveTo(74.3,8.7,69.8,14.9).curveTo(65.2,21.1,58.8,21.1).closePath();
	this.shape_21.setTransform(-221.9,-11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#28292B").beginStroke().moveTo(-68.7,21.1).curveTo(-71,21.1,-72.6,19.5).curveTo(-74.3,17.8,-74.3,15.5).lineTo(-74.3,-15.5).curveTo(-74.3,-17.8,-72.6,-19.5).curveTo(-71,-21.1,-68.7,-21.1).lineTo(68.7,-21.1).curveTo(71,-21.1,72.6,-19.5).curveTo(74.3,-17.8,74.3,-15.5).lineTo(74.3,15.5).curveTo(74.3,17.8,72.6,19.5).curveTo(71,21.1,68.7,21.1).closePath();
	this.shape_22.setTransform(-532.4,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#28292B").beginStroke().moveTo(-63.5,14.4).curveTo(-65.1,14.4,-66.2,13.3).curveTo(-67.3,12.2,-67.3,10.6).lineTo(-67.3,-10.6).curveTo(-67.3,-12.2,-66.2,-13.3).curveTo(-65.1,-14.5,-63.5,-14.5).lineTo(63.5,-14.5).curveTo(65.1,-14.5,66.2,-13.3).curveTo(67.3,-12.1,67.3,-10.6).lineTo(67.3,10.6).curveTo(67.3,12.2,66.2,13.3).curveTo(65.1,14.4,63.5,14.4).closePath();
	this.shape_23.setTransform(-390.8,-20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#28292B").beginStroke().moveTo(-87.3,14.4).curveTo(-91.7,14.4,-94.8,10.2).curveTo(-97.9,5.9,-97.9,-0).curveTo(-97.9,-6,-94.8,-10.2).curveTo(-91.7,-14.4,-87.3,-14.4).lineTo(87.3,-14.4).curveTo(91.7,-14.4,94.8,-10.2).curveTo(97.9,-6,97.9,-0).curveTo(97.9,5.9,94.8,10.2).curveTo(91.7,14.4,87.3,14.4).closePath();
	this.shape_24.setTransform(-712.7,-13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#28292B").beginStroke().moveTo(-45.2,8.6).curveTo(-47.8,8.6,-49.7,6.1).curveTo(-51.5,3.5,-51.5,-0).curveTo(-51.5,-3.5,-49.7,-6.1).curveTo(-47.8,-8.6,-45.2,-8.6).lineTo(45.2,-8.6).curveTo(47.8,-8.6,49.7,-6.1).curveTo(51.5,-3.5,51.5,-0).curveTo(51.5,3.5,49.7,6.1).curveTo(47.8,8.6,45.2,8.6).closePath();
	this.shape_25.setTransform(-382.5,22.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#28292B").beginStroke().moveTo(-11.3,8.6).curveTo(-12.3,8.6,-12.9,7.9).curveTo(-13.6,7.3,-13.6,6.3).lineTo(-13.6,-6.4).curveTo(-13.6,-7.3,-12.9,-8).curveTo(-12.3,-8.6,-11.3,-8.6).lineTo(11.3,-8.6).curveTo(12.3,-8.6,12.9,-8).curveTo(13.6,-7.3,13.6,-6.4).lineTo(13.6,6.3).curveTo(13.6,7.3,12.9,7.9).curveTo(12.3,8.6,11.3,8.6).closePath();
	this.shape_26.setTransform(-498.8,-20.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#28292B").beginStroke().moveTo(-31.8,8.6).curveTo(-32.8,8.6,-33.4,7.9).curveTo(-34.1,7.3,-34,6.3).lineTo(-34,-6.4).curveTo(-34.1,-7.3,-33.4,-8).curveTo(-32.8,-8.6,-31.8,-8.6).lineTo(31.8,-8.6).curveTo(32.7,-8.6,33.4,-8).curveTo(34,-7.3,34,-6.4).lineTo(34,6.3).curveTo(34,7.3,33.4,7.9).curveTo(32.7,8.6,31.8,8.6).closePath();
	this.shape_27.setTransform(-556.6,-20.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#28292B").beginStroke().moveTo(-25,8.6).curveTo(-27.5,8.6,-29.5,6.1).curveTo(-31.3,3.5,-31.3,0).curveTo(-31.3,-3.6,-29.5,-6).curveTo(-27.5,-8.6,-25,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.5,-6).curveTo(31.3,-3.6,31.3,0).curveTo(31.3,3.5,29.5,6.1).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_28.setTransform(-866.5,-16.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#28292B").beginStroke().moveTo(-24.9,8.6).curveTo(-27.5,8.6,-29.4,6).curveTo(-31.3,3.5,-31.3,-0).curveTo(-31.3,-3.6,-29.4,-6.1).curveTo(-27.5,-8.6,-24.9,-8.6).lineTo(25,-8.6).curveTo(27.6,-8.6,29.5,-6.1).curveTo(31.3,-3.6,31.3,-0).curveTo(31.3,3.5,29.5,6).curveTo(27.6,8.6,25,8.6).closePath();
	this.shape_29.setTransform(-1066.7,30.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#28292B").beginStroke().moveTo(-37.3,8.6).curveTo(-39.9,8.6,-41.7,6).curveTo(-43.6,3.5,-43.6,-0).curveTo(-43.6,-3.6,-41.7,-6.1).curveTo(-39.9,-8.6,-37.3,-8.6).lineTo(37.2,-8.6).curveTo(39.9,-8.6,41.7,-6.1).curveTo(43.6,-3.6,43.6,-0).curveTo(43.6,3.5,41.7,6).curveTo(39.8,8.6,37.2,8.6).closePath();
	this.shape_30.setTransform(-979.1,30.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#28292B").beginStroke().moveTo(-49.8,8.6).curveTo(-52.4,8.6,-54.2,6.1).curveTo(-56.1,3.5,-56.1,-0).curveTo(-56.1,-3.5,-54.2,-6.1).curveTo(-52.4,-8.6,-49.8,-8.6).lineTo(49.8,-8.6).curveTo(52.4,-8.6,54.2,-6.1).curveTo(56.1,-3.5,56.1,-0).curveTo(56.1,3.5,54.2,6.1).curveTo(52.4,8.6,49.8,8.6).closePath();
	this.shape_31.setTransform(-694.9,26.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#28292B").beginStroke().moveTo(-57.1,14.4).curveTo(-61.5,14.4,-64.6,10.2).curveTo(-67.7,5.9,-67.7,-0).curveTo(-67.7,-5.9,-64.6,-10.2).curveTo(-61.5,-14.4,-57.1,-14.4).lineTo(57.1,-14.4).curveTo(61.5,-14.4,64.6,-10.2).curveTo(67.7,-6,67.7,-0).curveTo(67.7,5.9,64.6,10.2).curveTo(61.5,14.4,57.1,14.4).closePath();
	this.shape_32.setTransform(-851.5,26.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#28292B").beginStroke().moveTo(-72.3,21.1).curveTo(-78.7,21.1,-83.2,14.9).curveTo(-87.7,8.7,-87.7,0).curveTo(-87.7,-8.7,-83.2,-14.9).curveTo(-78.7,-21.1,-72.3,-21.1).lineTo(72.3,-21.1).curveTo(78.6,-21.1,83.2,-14.9).curveTo(87.8,-8.7,87.8,0).curveTo(87.8,8.7,83.2,14.9).curveTo(78.6,21.1,72.3,21.1).closePath();
	this.shape_33.setTransform(-1015.7,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1103.5,-40.6,2207,81.4);


(lib.arrastreotraceurda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(9.5,-37.2).lineTo(-9.5,37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-38.2,21.1,76.4);


(lib.arrastrejeep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(113.2,39.2).lineTo(99,14.8).curveTo(98.3,13.5,97.1,12.8).curveTo(95.9,12.1,94.4,12.1).lineTo(67.5,12.1).curveTo(66.1,12.1,64.9,12.8).curveTo(63.6,13.5,62.9,14.7).lineTo(48.4,39.1).lineTo(-54.7,39.1).lineTo(-74.5,13.2).curveTo(-76,11.1,-78.7,11.1).lineTo(-108,11.1).curveTo(-109.7,11.1,-111.1,12.1).curveTo(-112.5,13.1,-113,14.6).lineTo(-121.4,37.8).lineTo(-124.7,37.8).curveTo(-127.2,37.8,-129,36.1).curveTo(-130.8,34.3,-130.8,31.7).lineTo(-130.8,22.7).curveTo(-130.8,20.7,-129.3,19.2).curveTo(-127.9,17.8,-125.9,17.8).lineTo(-121.1,17.8).lineTo(-121.1,12.8).curveTo(-122.5,12.8,-123.1,11.6).curveTo(-123.8,10.4,-122.9,9.2).curveTo(-120.4,4.9,-119.1,3.8).curveTo(-118.2,3,-115,1.8).lineTo(-112.1,0.6).lineTo(-108.9,-4.1).curveTo(-107.6,-6.1,-105.5,-7.2).curveTo(-103.5,-8.4,-101.2,-8.5).lineTo(-43.8,-12.1).lineTo(-26.3,-34.6).curveTo(-24.4,-37.1,-21.1,-37.2).lineTo(111,-39.2).curveTo(113.1,-39.2,114.7,-37.8).curveTo(116.3,-36.4,116.5,-34.2).lineTo(121.2,17.1).lineTo(125.8,17.1).curveTo(128.2,17.1,129.6,19).curveTo(131.2,20.7,130.7,23.1).lineTo(129.3,30.1).curveTo(128.5,34.1,125.4,36.6).curveTo(122.3,39.2,118.3,39.2).closePath().moveTo(108,-6.9).lineTo(106.4,-30.2).curveTo(106.3,-31.2,105.3,-31.2).lineTo(71.3,-30.7).lineTo(71.3,-6.9).lineTo(108,-6.9).closePath().moveTo(21.5,-29.9).lineTo(21.5,-6.9).lineTo(54.3,-6.9).lineTo(61.1,-13.7).lineTo(61.1,-30.5).closePath().moveTo(-21.7,-29.3).curveTo(-22.8,-29.3,-23.3,-28.4).lineTo(-32.6,-16.3).lineTo(-26.4,-16.3).lineTo(-26.4,-6.9).lineTo(4,-6.9).lineTo(9.2,-16.3).lineTo(9.2,-29.7).closePath();
	this.shape.setTransform(0,-9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-44.1,4).curveTo(-45.9,4.1,-47,2.9).curveTo(-48.2,1.7,-48.2,-0).curveTo(-48.2,-1.7,-47,-2.9).curveTo(-45.9,-4,-44.1,-4.1).lineTo(44.2,-4.1).curveTo(45.9,-4,47,-2.9).curveTo(48.2,-1.7,48.2,-0).curveTo(48.2,1.7,47,2.9).curveTo(45.9,4.1,44.2,4).closePath();
	this.shape_1.setTransform(-4.1,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-40.3,3.3).curveTo(-41.4,2.2,-41.5,0.5).curveTo(-41.5,-1.2,-40.3,-2.4).curveTo(-39.2,-3.6,-37.4,-3.6).lineTo(37.4,-4.5).curveTo(38.9,-4.6,40.2,-3.4).curveTo(41.4,-2.2,41.4,-0.5).curveTo(41.5,1.2,40.3,2.4).curveTo(39.2,3.5,37.5,3.6).lineTo(-37.4,4.5).curveTo(-39.1,4.5,-40.3,3.3).closePath();
	this.shape_2.setTransform(32.3,-57.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-18.5,20.8).curveTo(-26.3,13.9,-27.6,3.5).curveTo(-27.9,1.6,-27.9,-0).curveTo(-27.9,-11.6,-19.7,-19.7).curveTo(-11.5,-27.9,0,-27.9).curveTo(11.5,-27.9,19.7,-19.7).curveTo(27.9,-11.6,27.9,-0).lineTo(27.8,2.4).curveTo(26.9,13.1,18.9,20.5).curveTo(10.9,27.9,0,27.9).curveTo(-10.6,27.9,-18.5,20.8).closePath().moveTo(1.8,6.9).lineTo(1.8,13).curveTo(5.2,12.5,7.9,10.5).lineTo(3.6,6.2).curveTo(2.7,6.7,1.8,6.9).closePath().moveTo(-7.9,10.5).curveTo(-5.1,12.5,-1.8,13).lineTo(-1.8,6.9).curveTo(-2.7,6.7,-3.6,6.2).closePath().moveTo(6.2,3.6).lineTo(10.5,7.9).curveTo(12.5,5.4,13,1.8).lineTo(7,1.8).curveTo(6.8,2.7,6.2,3.6).closePath().moveTo(-10.5,7.9).lineTo(-6.2,3.6).curveTo(-6.7,2.8,-6.9,1.8).lineTo(-13,1.8).curveTo(-12.5,5.3,-10.5,7.9).closePath().moveTo(13,-1.8).curveTo(12.5,-5.2,10.5,-7.9).lineTo(6.2,-3.6).curveTo(6.7,-2.8,7,-1.8).lineTo(13,-1.8).lineTo(13,-1.8).closePath().moveTo(-13,-1.8).lineTo(-7,-1.8).curveTo(-6.6,-2.9,-6.2,-3.6).lineTo(-10.5,-7.9).curveTo(-12.5,-5.3,-13,-1.8).closePath().moveTo(1.8,-7).curveTo(2.6,-6.8,3.7,-6.2).lineTo(7.9,-10.5).curveTo(5.3,-12.5,1.8,-13).closePath().moveTo(-7.9,-10.5).lineTo(-3.7,-6.2).curveTo(-2.5,-6.8,-1.8,-7).lineTo(-1.8,-13).curveTo(-5.3,-12.5,-7.9,-10.5).closePath();
	this.shape_3.setTransform(81.2,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-18.5,20.8).curveTo(-26.3,13.9,-27.6,3.5).curveTo(-27.9,1.6,-27.9,-0).curveTo(-27.9,-11.6,-19.7,-19.7).curveTo(-11.5,-27.9,0,-27.9).curveTo(11.6,-27.9,19.7,-19.7).curveTo(27.9,-11.6,27.9,-0).lineTo(27.8,2.4).curveTo(26.9,13.1,18.9,20.5).curveTo(10.9,27.9,0,27.9).curveTo(-10.6,27.9,-18.5,20.8).closePath().moveTo(1.8,6.9).lineTo(1.8,13).curveTo(5.2,12.5,7.9,10.5).lineTo(3.7,6.2).curveTo(2.7,6.7,1.8,6.9).closePath().moveTo(-7.9,10.5).curveTo(-5.1,12.5,-1.8,13).lineTo(-1.8,6.9).curveTo(-2.6,6.7,-3.6,6.2).closePath().moveTo(6.2,3.6).lineTo(10.5,7.9).curveTo(12.5,5.4,13,1.8).lineTo(7,1.8).curveTo(6.8,2.6,6.2,3.6).closePath().moveTo(-10.4,7.9).lineTo(-6.2,3.6).curveTo(-6.7,2.8,-6.9,1.8).lineTo(-13,1.8).curveTo(-12.5,5.2,-10.4,7.9).closePath().moveTo(13,-1.8).curveTo(12.6,-5.1,10.5,-7.9).lineTo(6.2,-3.6).curveTo(6.7,-2.8,7,-1.8).lineTo(13,-1.8).lineTo(13,-1.8).closePath().moveTo(-13,-1.8).lineTo(-7,-1.8).curveTo(-6.6,-2.9,-6.2,-3.6).lineTo(-10.5,-7.9).curveTo(-12.5,-5.2,-13,-1.8).closePath().moveTo(1.8,-7).curveTo(2.6,-6.8,3.7,-6.2).lineTo(7.9,-10.5).curveTo(5.3,-12.5,1.8,-13).closePath().moveTo(-7.9,-10.5).lineTo(-3.6,-6.2).curveTo(-2.6,-6.8,-1.8,-7).lineTo(-1.8,-13).curveTo(-5.3,-12.5,-7.9,-10.5).closePath();
	this.shape_4.setTransform(-91,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-79.4,8).curveTo(-112.3,4.7,-112.3,-0).curveTo(-112.3,-4.7,-79.4,-8).curveTo(-46.5,-11.3,0,-11.3).curveTo(46.5,-11.3,79.4,-8).curveTo(112.3,-4.7,112.3,-0).curveTo(112.3,4.7,79.4,8).curveTo(46.5,11.3,0,11.3).curveTo(-46.5,11.3,-79.4,8).closePath();
	this.shape_5.setTransform(0.5,62);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.7,-61.6,261.6,134.9);


(lib.arrastrefondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1.1).lineTo(0.5,-1.1).lineTo(0.5,1).closePath();
	this.shape.setTransform(-4069.5,-32.7,1.14,1.14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1).closePath();
	this.shape_1.setTransform(-4066.7,-32.7,1.14,1.14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.2,-4.1).lineTo(2.1,4).closePath();
	this.shape_2.setTransform(-4071.4,-38.5,1.14,1.14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_3.setTransform(-4069.6,-38.5,1.14,1.14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_4.setTransform(-4073.9,-38.5,1.14,1.14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_5.setTransform(-4066.8,-23.6,1.14,1.14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_6.setTransform(-4081,-23.6,1.14,1.14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1).closePath();
	this.shape_7.setTransform(-4073.9,-32.7,1.14,1.14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_8.setTransform(-4073.9,-11.6,1.14,1.14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_9.setTransform(-4073.9,-14.7,1.14,1.14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_10.setTransform(-4073.9,69.8,1.14,1.14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.1,-41.1).lineTo(2.1,41.1).closePath();
	this.shape_11.setTransform(-4073.9,32.1,1.14,1.14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.8,-6.9).lineTo(0.8,6.9).closePath();
	this.shape_12.setTransform(-4073.9,-23.6,1.14,1.14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-0.9,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_13.setTransform(-4073.9,-23.6,1.14,1.14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,0).curveTo(-12.4,-5.2,-8.8,-8.7).curveTo(-5.2,-12.4,-0,-12.4).curveTo(5.1,-12.4,8.8,-8.7).curveTo(12.4,-5.2,12.4,0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.1,12.4,-0,12.4).curveTo(-5.2,12.4,-8.8,8.8).closePath();
	this.shape_14.setTransform(-3931.1,-47.4,1.14,1.14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.9,9.3).curveTo(-19.8,9.3,-22.5,6.6).curveTo(-25.2,3.9,-25.2,0).curveTo(-25.2,-3.9,-22.5,-6.6).curveTo(-19.8,-9.3,-15.9,-9.3).lineTo(15.9,-9.3).curveTo(19.8,-9.3,22.5,-6.6).curveTo(25.2,-3.9,25.2,0).curveTo(25.2,3.9,22.5,6.6).curveTo(19.8,9.3,15.9,9.3).closePath();
	this.shape_15.setTransform(-3925.3,-40.8,1.14,1.14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.2,4.2).curveTo(-5.9,2.5,-5.9,0).curveTo(-5.9,-2.4,-4.2,-4.2).curveTo(-2.4,-5.9,0,-5.9).curveTo(2.5,-5.9,4.2,-4.2).curveTo(5.9,-2.4,5.9,0).curveTo(5.9,2.5,4.2,4.2).curveTo(2.5,5.9,0,5.9).curveTo(-2.4,5.9,-4.2,4.2).closePath();
	this.shape_16.setTransform(-3168.6,-110.9,1.14,1.14);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-7.1,7.2).curveTo(-10.1,4.2,-10.1,0).curveTo(-10.1,-4.2,-7.1,-7.1).curveTo(-4.2,-10.1,0,-10.1).curveTo(4.2,-10.1,7.2,-7.1).curveTo(10.1,-4.2,10.1,0).curveTo(10.1,4.2,7.2,7.2).curveTo(4.2,10.1,0,10.1).curveTo(-4.2,10.1,-7.1,7.2).closePath();
	this.shape_17.setTransform(-3153.9,-109,1.14,1.14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.5,7.9).curveTo(-16.8,7.9,-19.1,5.6).curveTo(-21.4,3.3,-21.4,-0).curveTo(-21.4,-3.3,-19.1,-5.6).curveTo(-16.8,-7.9,-13.5,-7.9).lineTo(13.5,-7.9).curveTo(16.8,-7.9,19.1,-5.6).curveTo(21.4,-3.3,21.4,-0).curveTo(21.4,3.3,19.1,5.6).curveTo(16.8,7.9,13.5,7.9).closePath();
	this.shape_18.setTransform(-3159.7,-101.9,1.14,1.14);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.2,5.2).curveTo(-7.3,3,-7.3,-0).curveTo(-7.3,-3,-5.2,-5.2).curveTo(-3,-7.3,0,-7.3).curveTo(3,-7.3,5.2,-5.2).curveTo(7.3,-3,7.3,-0).curveTo(7.3,3,5.2,5.2).curveTo(3,7.3,0,7.3).curveTo(-3,7.3,-5.2,5.2).closePath();
	this.shape_19.setTransform(-3708.2,-95.6,1.14,1.14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,8.9).curveTo(-12.5,5.2,-12.5,0).curveTo(-12.5,-5.2,-8.9,-8.9).curveTo(-5.2,-12.5,0,-12.5).curveTo(5.2,-12.5,8.9,-8.9).curveTo(12.5,-5.2,12.5,0).curveTo(12.5,5.2,8.9,8.9).curveTo(5.2,12.5,0,12.5).curveTo(-5.2,12.5,-8.9,8.9).closePath();
	this.shape_20.setTransform(-3726.4,-93.3,1.14,1.14);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.7,9.7).curveTo(-20.8,9.7,-23.6,6.9).curveTo(-26.4,4.1,-26.4,0).curveTo(-26.4,-4,-23.6,-6.9).curveTo(-20.8,-9.8,-16.7,-9.8).lineTo(16.7,-9.8).curveTo(20.8,-9.8,23.6,-6.9).curveTo(26.4,-4,26.4,0).curveTo(26.4,4.1,23.6,6.9).curveTo(20.8,9.7,16.7,9.7).closePath();
	this.shape_21.setTransform(-3719.1,-84.5,1.14,1.14);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_22.setTransform(-3698.3,-33.8,1.14,1.14);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1).lineTo(1.2,-1).lineTo(1.2,1).closePath();
	this.shape_23.setTransform(-3695.5,-33.8,1.14,1.14);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(1.1,4.1).lineTo(-2.1,-4).lineTo(2.1,4.1).closePath();
	this.shape_24.setTransform(-3700.2,-39.6,1.14,1.14);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4.1).lineTo(-3.7,-4).lineTo(3.7,4.1).closePath();
	this.shape_25.setTransform(-3698.4,-39.6,1.14,1.14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4.1).lineTo(0,-4).lineTo(8.8,4.1).closePath();
	this.shape_26.setTransform(-3702.6,-39.6,1.14,1.14);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_27.setTransform(-3695.6,-24.8,1.14,1.14);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_28.setTransform(-3709.7,-24.8,1.14,1.14);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1).lineTo(8.7,-1).lineTo(8.7,1).closePath();
	this.shape_29.setTransform(-3702.6,-33.8,1.14,1.14);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_30.setTransform(-3702.6,-12.7,1.14,1.14);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_31.setTransform(-3702.6,-15.9,1.14,1.14);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_32.setTransform(-3702.6,68.6,1.14,1.14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,41.1).lineTo(-2.1,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_33.setTransform(-3702.6,31,1.14,1.14);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_34.setTransform(-3702.6,-24.8,1.14,1.14);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-1,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_35.setTransform(-3702.6,-24.8,1.14,1.14);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_36.setTransform(-3338,-31.7,1.14,1.14);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1.1).closePath();
	this.shape_37.setTransform(-3335.3,-31.7,1.14,1.14);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.1,-4.1).lineTo(2.2,4).closePath();
	this.shape_38.setTransform(-3339.9,-37.5,1.14,1.14);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(1.4,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_39.setTransform(-3338.1,-37.5,1.14,1.14);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_40.setTransform(-3342.4,-37.5,1.14,1.14);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_41.setTransform(-3335.3,-22.7,1.14,1.14);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_42.setTransform(-3349.4,-22.7,1.14,1.14);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1.1).closePath();
	this.shape_43.setTransform(-3342.4,-31.7,1.14,1.14);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_44.setTransform(-3342.4,-10.7,1.14,1.14);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_45.setTransform(-3342.4,-13.8,1.14,1.14);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.5).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.5).closePath();
	this.shape_46.setTransform(-3342.4,70.7,1.14,1.14);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_47.setTransform(-3342.4,33.1,1.14,1.14);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_48.setTransform(-3342.4,-22.7,1.14,1.14);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-4.4,-7.6,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_49.setTransform(-3342.4,-22.7,1.14,1.14);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,5.4).curveTo(-4.1,5.5,-4.6,4.8).curveTo(-4.9,4.3,-4.9,3.5).curveTo(-5,1.8,-3.6,-0.4).curveTo(-2.1,-2.8,-0.3,-4.1).curveTo(1.5,-5.5,2.9,-5.5).lineTo(3.4,-5.5).curveTo(4.2,-5.4,4.5,-4.8).curveTo(4.9,-4.3,4.9,-3.5).curveTo(4.9,-1.8,3.6,0.4).curveTo(2.1,3,0.4,4.2).curveTo(-1.5,5.4,-2.9,5.4).closePath();
	this.shape_50.setTransform(-3232.7,74.5,1.14,1.14);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,4).curveTo(-0.1,4,-1.3,2.7).curveTo(-2.4,1.3,-2.8,-0.2).curveTo(-3.1,-1.6,-3.1,-2.6).curveTo(-2.9,-4,-1.8,-4).lineTo(-0.6,-4).curveTo(0.2,-4,1.3,-2.7).curveTo(2.3,-1.3,2.8,0.3).curveTo(3.7,4,1.8,4).closePath();
	this.shape_51.setTransform(-3164.4,69.9,1.14,1.14);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#494A4E").beginStroke().moveTo(0.2,7.5).curveTo(-1.4,6.8,-2.3,4.5).curveTo(-3.6,1.6,-3.6,-1.1).lineTo(-3.6,-1.7).curveTo(-3.6,-4.9,-2.7,-6.3).curveTo(-2.3,-7,-1.7,-7.4).curveTo(-1,-7.8,-0.3,-7.5).curveTo(1.2,-6.9,2.3,-4.5).curveTo(3.6,-1.6,3.6,1.1).lineTo(3.6,1.7).curveTo(3.6,4.9,2.7,6.4).curveTo(2.3,7.1,1.7,7.4).curveTo(1.3,7.7,0.9,7.7).lineTo(0.2,7.5).closePath();
	this.shape_52.setTransform(-3082.7,66.3,1.14,1.14);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#494A4E").beginStroke().moveTo(0.1,8.1).curveTo(-1.4,8.1,-2.7,5.9).curveTo(-4,3.5,-4.1,0.2).curveTo(-4.2,-3.7,-3.3,-5.6).curveTo(-2.1,-8.2,-0.8,-8.2).lineTo(-0.1,-8.2).curveTo(1.5,-8.1,2.7,-5.9).curveTo(4,-3.5,4.1,-0.2).curveTo(4.2,3.7,3.3,5.6).curveTo(2.2,8.1,0.8,8.1).closePath();
	this.shape_53.setTransform(-3058.9,56,1.14,1.14);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_54.setTransform(-3772,-2.8,1.14,1.14);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(-12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_55.setTransform(-3744,-2.8,1.14,1.14);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.6,38.7).lineTo(0,-38.7).lineTo(24.6,38.7).closePath();
	this.shape_56.setTransform(-3758,-2.8,1.14,1.14);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.1).lineTo(-2.5,-24.1).lineTo(2.5,-24.1).lineTo(2.5,24.1).closePath();
	this.shape_57.setTransform(-3758,48.3,1.14,1.14);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.3).lineTo(-9,-5.2).curveTo(-6,-10.3,0,-10.3).curveTo(6,-10.3,9,-5.2).lineTo(17.9,10.3).closePath();
	this.shape_58.setTransform(-3812.7,57.9,1.14,1.14);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.7).lineTo(-8.4,-5.8).curveTo(-5.6,-10.7,-0,-10.7).curveTo(5.6,-10.7,8.4,-5.8).lineTo(17.9,10.7).closePath();
	this.shape_59.setTransform(-3089.9,57.5,1.14,1.14);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,-53.3).lineTo(-12.3,-45).curveTo(-5.6,-34.8,-0,-25.3).curveTo(17.9,5.2,17.9,17.6).curveTo(17.8,32.4,7.4,42.9).curveTo(-3.1,53.3,-17.9,53.3).closePath();
	this.shape_60.setTransform(-3464.9,-18.4,1.14,1.14);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.4,42.9).curveTo(-17.9,32.4,-17.9,17.6).curveTo(-17.9,5.2,0,-25.3).curveTo(8.9,-40.5,17.9,-53.3).lineTo(17.9,53.3).curveTo(3.1,53.3,-7.4,42.9).closePath();
	this.shape_61.setTransform(-3505.6,-18.4,1.14,1.14);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,28.8).lineTo(-2.9,-28.8).lineTo(2.9,-28.8).lineTo(2.9,28.8).closePath();
	this.shape_62.setTransform(-3485.2,36.1,1.14,1.14);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.6,4.9).curveTo(-13.5,5,-16.2,2.2).curveTo(-19,-0.5,-19,-4.4).lineTo(-18.9,-5).lineTo(19,-5).lineTo(19,-4.4).curveTo(19,-0.5,16.3,2.2).curveTo(13.5,5,9.6,4.9).closePath();
	this.shape_63.setTransform(-3281.4,-1.3,1.14,1.14);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#494A4E").beginStroke().moveTo(-18.9,4.4).curveTo(-18.8,0.7,-16.1,-1.9).curveTo(-13.3,-4.5,-9.6,-4.5).lineTo(9.6,-4.5).curveTo(13.4,-4.5,16.1,-1.9).curveTo(18.8,0.7,19,4.4).closePath();
	this.shape_64.setTransform(-3281.4,-12.1,1.14,1.14);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.1,3.7).curveTo(-9.9,3.7,-12,1.7).curveTo(-14,-0.4,-14.1,-3.3).lineTo(-14.1,-3.7).lineTo(14.1,-3.7).lineTo(14.1,-3.3).curveTo(14,-0.4,12,1.7).curveTo(10,3.7,7.1,3.7).closePath();
	this.shape_65.setTransform(-3254.5,-66.4,1.14,1.14);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.1,3.3).curveTo(-13.8,0.6,-11.8,-1.3).curveTo(-9.9,-3.3,-7.1,-3.3).lineTo(7.1,-3.3).curveTo(9.8,-3.3,11.8,-1.3).curveTo(13.9,0.6,14.1,3.3).closePath();
	this.shape_66.setTransform(-3254.5,-74.3,1.14,1.14);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.3,7.5).curveTo(-19.3,7.5,-23.5,3.3).curveTo(-27.7,-0.9,-27.8,-6.9).lineTo(-27.7,-7.5).lineTo(27.7,-7.5).lineTo(27.8,-6.9).curveTo(27.8,-0.9,23.5,3.3).curveTo(19.2,7.5,13.3,7.5).closePath();
	this.shape_67.setTransform(-3293.2,-30.5,1.14,1.14);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.7,6.9).curveTo(-27.4,1.1,-23.3,-2.9).curveTo(-19.1,-6.9,-13.3,-6.9).lineTo(13.3,-6.9).curveTo(19.1,-6.9,23.3,-2.9).curveTo(27.5,1.1,27.7,6.9).closePath();
	this.shape_68.setTransform(-3293.2,-46.9,1.14,1.14);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.1,5.2).curveTo(-24.4,5.2,-27.5,2.2).curveTo(-30.6,-0.9,-30.7,-5.2).lineTo(30.6,-5.2).curveTo(30.6,-0.9,27.6,2.2).curveTo(24.5,5.2,20.2,5.2).closePath();
	this.shape_69.setTransform(-3238.5,-42.1,1.14,1.14);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.7,5.3).lineTo(-30.7,5.2).curveTo(-30.7,0.9,-27.5,-2.2).curveTo(-24.5,-5.3,-20.1,-5.3).lineTo(20.2,-5.3).curveTo(24.5,-5.3,27.6,-2.2).curveTo(30.7,0.9,30.6,5.2).lineTo(30.6,5.3).closePath();
	this.shape_70.setTransform(-3238.5,-54,1.14,1.14);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.7,6.6).curveTo(-34.1,1,-30,-2.8).curveTo(-25.8,-6.6,-20.2,-6.6).lineTo(20.2,-6.6).curveTo(25.8,-6.6,30,-2.8).curveTo(34.1,1,34.7,6.6).closePath();
	this.shape_71.setTransform(-3219.3,-26.1,1.14,1.14);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.2,8).curveTo(-26.2,8,-30.5,3.7).curveTo(-34.7,-0.6,-34.7,-6.6).lineTo(-34.7,-8).lineTo(34.7,-8).lineTo(34.7,-6.6).curveTo(34.7,-0.6,30.5,3.7).curveTo(26.2,8,20.2,8).closePath();
	this.shape_72.setTransform(-3219.3,-9.5,1.14,1.14);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,17.6).lineTo(-2.4,-17.6).lineTo(2.4,-17.6).lineTo(2.4,17.6).closePath();
	this.shape_73.setTransform(-3247.6,56,1.14,1.14);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#494A4E").beginStroke().moveTo(-29.6,-29.8).lineTo(-25.6,-32.4).lineTo(9.2,22.3).lineTo(25.2,-13.2).lineTo(29.6,-11.3).lineTo(10,32.4).closePath();
	this.shape_74.setTransform(-3258.6,4.7,1.14,1.14);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,47.5).curveTo(-8.2,46.8,-9.4,45.9).curveTo(-10.7,45,-12,43.6).curveTo(-13,42.3,-13.8,40.6).curveTo(-14.4,39.7,-14.8,37.4).curveTo(-14.9,36.6,-14.9,35.8).lineTo(-14.7,34).curveTo(-14.5,32.5,-13.7,31).lineTo(-12.8,29.4).curveTo(-11.7,27.5,-10.6,26).curveTo(-9.2,24.3,-7.4,22.5).lineTo(-7.7,21.5).curveTo(-9.6,20.9,-11.9,19.6).curveTo(-13.4,18.7,-15.2,17.4).lineTo(-16.7,16.2).curveTo(-19.3,14.2,-20.4,11).curveTo(-21.4,7.9,-20.9,4.8).curveTo(-20.4,1.7,-18.5,-0.9).curveTo(-16.6,-3.4,-13.6,-4.7).lineTo(-5,-8.3).lineTo(-4.2,-10.9).lineTo(-9.5,-18.5).curveTo(-11.3,-21.2,-11.5,-24.5).curveTo(-11.7,-27.5,-10.5,-30.5).curveTo(-9.2,-33.3,-6.8,-35.3).curveTo(-4.2,-37.4,-1.1,-37.9).lineTo(4.7,-38.6).lineTo(8,-38.8).curveTo(14.5,-48.1,21.1,-48).lineTo(21.1,44.5).curveTo(11.5,44.5,3.7,38.7).curveTo(4.8,39.6,6.4,40.5).curveTo(7,41,9.2,42.1).lineTo(10,42.4).lineTo(10.3,42.5).lineTo(8.9,43.5).lineTo(5.5,45.5).lineTo(1.9,47).lineTo(0.1,47.6).curveTo(-1.3,48,-3.1,48.1).curveTo(-4.8,48,-6.4,47.5).closePath();
	this.shape_75.setTransform(-3862.6,-16.8,1.14,1.14);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,47.6).lineTo(-1.9,47).lineTo(-5.5,45.5).lineTo(-8.9,43.5).lineTo(-10.3,42.5).lineTo(-10,42.4).lineTo(-9.2,42.1).lineTo(-7.9,41.4).lineTo(-6.4,40.5).curveTo(-4.9,39.7,-3.5,38.6).curveTo(-11.4,44.5,-21.1,44.5).lineTo(-21.1,-48).curveTo(-14.5,-48.1,-8,-38.8).lineTo(-4.7,-38.6).lineTo(1.1,-37.9).curveTo(4.3,-37.4,6.8,-35.3).curveTo(9.2,-33.3,10.5,-30.5).curveTo(11.7,-27.6,11.5,-24.5).curveTo(11.3,-21.3,9.5,-18.5).lineTo(6.2,-13.7).lineTo(4.2,-10.9).lineTo(5,-8.3).lineTo(8.2,-7).lineTo(13.6,-4.7).curveTo(16.6,-3.4,18.5,-0.9).curveTo(20.4,1.7,20.9,4.8).curveTo(21.4,7.9,20.4,11).curveTo(19.3,14.2,16.7,16.2).curveTo(14.3,18.2,11.9,19.6).curveTo(10,20.6,7.7,21.6).lineTo(7.4,22.4).curveTo(9.6,24.8,10.6,26).curveTo(11.7,27.5,12.8,29.4).lineTo(13.7,31).curveTo(14.5,32.5,14.8,34).curveTo(14.9,34.9,14.9,35.8).curveTo(14.9,36.6,14.8,37.4).curveTo(14.4,39.7,13.8,40.6).curveTo(13,42.3,12,43.6).curveTo(10.7,44.9,9.5,45.9).curveTo(8.1,46.9,6.4,47.5).curveTo(4.9,48,3.2,48.1).curveTo(1.3,48,-0.1,47.6).closePath();
	this.shape_76.setTransform(-3814.6,-16.8,1.14,1.14);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,5.4).curveTo(-10.8,2.7,-11,-0.5).curveTo(-11.2,-3.6,-10,-6.5).curveTo(-8.7,-9.4,-6.3,-11.4).curveTo(-3.7,-13.4,-0.6,-13.9).lineTo(9.2,-14.9).lineTo(11,-14.8).curveTo(9.8,-13.3,8.3,-10.7).curveTo(5.8,-6.5,3.3,-0.7).curveTo(1.3,4,-0.7,9.9).lineTo(-2.3,14.9).closePath();
	this.shape_77.setTransform(-3863.2,-44,1.14,1.14);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,13.1).curveTo(-1.5,12.3,-3.3,11).lineTo(-4.8,9.8).curveTo(-7.4,7.8,-8.5,4.6).curveTo(-9.5,1.5,-9,-1.6).curveTo(-8.5,-4.8,-6.6,-7.3).curveTo(-4.7,-9.8,-1.7,-11.1).lineTo(3.7,-13.4).curveTo(6.4,-14.5,9.1,-15.5).lineTo(7.7,-10.4).curveTo(6.2,-4.6,5.4,0.7).curveTo(4.9,3.6,4.6,6.5).curveTo(4.4,9.1,4.6,11.1).lineTo(4.7,12.9).lineTo(5.1,15.5).curveTo(2.6,14.6,-0,13.1).closePath();
	this.shape_78.setTransform(-3876.2,-9.5,1.14,1.14);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,12.5).curveTo(-5.9,11.8,-7.1,11).curveTo(-8.4,10,-9.7,8.6).curveTo(-10.7,7.3,-11.5,5.7).curveTo(-12,4.7,-12.4,2.4).curveTo(-12.6,1.6,-12.6,0.8).lineTo(-12.4,-0.9).curveTo(-12.2,-2.5,-11.4,-4).lineTo(-10.5,-5.6).curveTo(-9.4,-7.4,-8.3,-8.9).curveTo(-6.4,-11.3,-4.5,-13.1).lineTo(-3.3,-8.9).curveTo(-1.6,-4.3,1.4,-0.6).curveTo(4.7,3.2,8.7,5.6).curveTo(9.3,6,11.5,7.1).lineTo(12.3,7.5).lineTo(12.6,7.6).lineTo(11.2,8.5).lineTo(7.8,10.5).lineTo(4.2,12).lineTo(2.4,12.7).curveTo(1,13.1,-0.8,13.1).curveTo(-2.5,13.1,-4.1,12.5).closePath();
	this.shape_79.setTransform(-3865.2,23.1,1.14,1.14);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#494A4E").beginStroke().moveTo(0.7,9.9).curveTo(-1.3,4,-3.4,-0.7).curveTo(-5.9,-6.5,-8.4,-10.7).lineTo(-11,-14.8).lineTo(-9.2,-14.9).lineTo(0.5,-13.9).curveTo(3.7,-13.4,6.3,-11.4).curveTo(8.7,-9.4,9.9,-6.5).curveTo(11.2,-3.6,11,-0.5).curveTo(10.7,2.7,9,5.4).lineTo(5.7,10.2).lineTo(2.3,14.9).closePath();
	this.shape_80.setTransform(-3813.9,-44,1.14,1.14);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.7,12.9).lineTo(-4.6,11.1).curveTo(-4.4,9.5,-4.7,6.5).curveTo(-4.9,3.9,-5.4,0.7).curveTo(-6.2,-4.2,-7.7,-10.4).lineTo(-9.1,-15.5).lineTo(-3.7,-13.4).lineTo(1.7,-11.1).curveTo(4.6,-9.8,6.6,-7.3).curveTo(8.4,-4.8,8.9,-1.6).curveTo(9.4,1.5,8.4,4.6).curveTo(7.3,7.8,4.8,9.8).curveTo(2.4,11.7,-0,13.1).curveTo(-1.6,14,-3.5,14.8).lineTo(-5.1,15.5).closePath();
	this.shape_81.setTransform(-3801,-9.5,1.14,1.14);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,12.7).lineTo(-4.2,12).lineTo(-7.8,10.5).lineTo(-11.2,8.5).lineTo(-12.6,7.6).lineTo(-12.3,7.5).lineTo(-11.5,7.1).lineTo(-10.3,6.5).lineTo(-8.7,5.6).curveTo(-4.5,3.1,-1.5,-0.6).curveTo(1.6,-4.3,3.3,-8.9).lineTo(3.9,-10.6).lineTo(4.5,-13.1).lineTo(5.7,-11.9).curveTo(7.2,-10.4,8.3,-8.9).curveTo(9.4,-7.4,10.4,-5.6).lineTo(11.4,-4).curveTo(12.1,-2.5,12.4,-0.9).curveTo(12.6,-0.1,12.6,0.8).curveTo(12.6,1.6,12.4,2.4).curveTo(12,4.7,11.5,5.7).curveTo(10.7,7.3,9.7,8.6).curveTo(8.4,10,7.2,11).curveTo(5.8,11.9,4.1,12.5).curveTo(2.6,13.1,0.9,13.1).curveTo(-1,13.1,-2.4,12.7).closePath();
	this.shape_82.setTransform(-3811.9,23.1,1.14,1.14);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#494A4E").beginStroke().moveTo(-21,37.3).curveTo(-29.7,28.3,-29.7,15.7).curveTo(-29.7,9.1,-27.4,-1.2).curveTo(-24.9,-11.9,-21,-21.7).curveTo(-11.1,-46.3,-0,-46.3).curveTo(11.1,-46.3,21,-21.7).curveTo(24.9,-11.9,27.4,-1.2).curveTo(29.7,9.1,29.7,15.7).curveTo(29.7,28.3,21,37.3).curveTo(12.3,46.3,-0,46.3).curveTo(-12.3,46.3,-21,37.3).closePath();
	this.shape_83.setTransform(-3838.6,-18.8,1.14,1.14);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#494A4E").beginStroke().moveTo(-3,28.8).lineTo(-3,-28.8).lineTo(3,-28.8).lineTo(3,28.8).closePath();
	this.shape_84.setTransform(-3838.6,36.1,1.14,1.14);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,23.8).curveTo(-11,17.4,-11,8.4).curveTo(-11,2.1,-7.8,-3.1).curveTo(-4.6,-8.2,0.6,-11).curveTo(-1.5,-14.3,-1.5,-17.9).curveTo(-1.5,-23.1,2.2,-26.7).curveTo(5.8,-30.3,11,-30.3).lineTo(11,30.3).curveTo(1.9,30.3,-4.6,23.8).closePath();
	this.shape_85.setTransform(-3641.1,19.1,1.14,1.14);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,5.6).curveTo(-4,3.2,-4,-0).curveTo(-4,-3.3,-1.6,-5.6).curveTo(0.7,-7.9,4,-7.9).lineTo(4,7.9).curveTo(0.7,7.9,-1.6,5.6).closePath();
	this.shape_86.setTransform(-3633.1,-25.9,1.14,1.14);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.6,15.5).curveTo(-22,9.1,-21.9,0).curveTo(-22,-9.1,-15.6,-15.6).curveTo(-9.1,-22,0,-21.9).curveTo(9.1,-22,15.5,-15.6).curveTo(22,-9.1,22,0).curveTo(22,9.1,15.5,15.5).curveTo(9.1,22,0,22).curveTo(-9.1,22,-15.6,15.5).closePath();
	this.shape_87.setTransform(-3628.6,28.6,1.14,1.14);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.6,5.6).curveTo(-7.9,3.2,-7.9,-0).curveTo(-7.9,-3.3,-5.6,-5.6).curveTo(-3.2,-7.9,0,-7.9).curveTo(3.3,-7.9,5.6,-5.6).curveTo(7.9,-3.3,7.9,-0).curveTo(7.9,3.2,5.6,5.6).curveTo(3.3,7.9,0,7.9).curveTo(-3.2,7.9,-5.6,5.6).closePath();
	this.shape_88.setTransform(-3628.7,-25.9,1.14,1.14);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,-0).curveTo(-12.4,-5.2,-8.8,-8.8).curveTo(-5.1,-12.4,0,-12.4).curveTo(5.2,-12.4,8.8,-8.8).curveTo(12.4,-5.2,12.4,-0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.2,12.4,0,12.4).curveTo(-5.1,12.4,-8.8,8.8).closePath();
	this.shape_89.setTransform(-3628.7,-1.3,1.14,1.14);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.7).lineTo(-1.8,-17.7).lineTo(1.8,-17.7).lineTo(1.8,17.7).closePath();
	this.shape_90.setTransform(-3628.6,49.7,1.14,1.14);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#494A4E").beginStroke().moveTo(-523.2,5).curveTo(-525.9,5,-527.7,3.6).curveTo(-529.6,2.1,-529.6,-0).curveTo(-529.6,-2.1,-527.7,-3.5).curveTo(-525.9,-5,-523.2,-5.1).lineTo(523.2,-5.1).curveTo(525.9,-5,527.7,-3.5).curveTo(529.6,-2.1,529.6,-0).curveTo(529.6,2.1,527.7,3.6).curveTo(525.9,5,523.2,5).closePath();
	this.shape_91.setTransform(-3502.9,75.8,1.14,1.14);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.5,12.5).curveTo(-17.7,7.3,-17.7,-0).curveTo(-17.7,-7.3,-12.5,-12.5).curveTo(-7.3,-17.7,-0,-17.7).curveTo(7.4,-17.7,12.6,-12.5).curveTo(17.7,-7.3,17.7,-0).curveTo(17.7,7.3,12.6,12.5).curveTo(7.4,17.7,-0,17.7).curveTo(-7.3,17.7,-12.5,12.5).closePath();
	this.shape_92.setTransform(-3426.2,56.2,1.14,1.14);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.7,5.3,-12.7,-0).curveTo(-12.7,-5.3,-9,-9).curveTo(-5.3,-12.8,-0,-12.8).curveTo(5.3,-12.8,9,-9).curveTo(12.7,-5.3,12.7,-0).curveTo(12.7,5.3,9,9).curveTo(5.3,12.8,-0,12.8).curveTo(-5.3,12.8,-9,9).closePath();
	this.shape_93.setTransform(-3371.1,56.5,1.14,1.14);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.6,16.6).curveTo(-23.5,9.8,-23.6,-0).curveTo(-23.5,-9.8,-16.6,-16.7).curveTo(-9.8,-23.5,0,-23.5).curveTo(9.8,-23.5,16.7,-16.7).curveTo(23.5,-9.8,23.5,-0).curveTo(23.5,9.8,16.7,16.6).curveTo(9.8,23.5,0,23.6).curveTo(-9.8,23.5,-16.6,16.6).closePath();
	this.shape_94.setTransform(-3398,49.5,1.14,1.14);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,-0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,-0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_95.setTransform(-3206.7,62.4,1.14,1.14);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_96.setTransform(-3175.8,58.6,1.14,1.14);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_97.setTransform(-3315.7,62.4,1.14,1.14);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_98.setTransform(-3284.7,58.6,1.14,1.14);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.9,21.9).lineTo(0,-21.9).lineTo(13.9,21.9).closePath();
	this.shape_99.setTransform(-4018.6,23.7,1.14,1.14);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,13.6).lineTo(-1.4,-13.6).lineTo(1.4,-13.6).lineTo(1.4,13.6).closePath();
	this.shape_100.setTransform(-4018.6,52.5,1.14,1.14);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,3.1).curveTo(-6.2,1.5,-6.3,-0.3).curveTo(-6.4,-2.1,-5.7,-3.7).curveTo(-5,-5.4,-3.6,-6.5).curveTo(-2.2,-7.7,-0.3,-8).lineTo(5.3,-8.5).lineTo(6.3,-8.5).curveTo(5.6,-7.6,4.8,-6.1).curveTo(3.2,-3.4,1.9,-0.4).curveTo(0.5,2.8,-0.4,5.7).lineTo(-1.3,8.5).closePath();
	this.shape_101.setTransform(-3039.3,5.4,1.14,1.14);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#494A4E").beginStroke().moveTo(0,7.5).lineTo(-2.8,5.6).curveTo(-4.2,4.5,-4.8,2.6).curveTo(-5.4,0.9,-5.1,-0.9).curveTo(-4.8,-2.7,-3.8,-4.2).curveTo(-2.7,-5.6,-1,-6.4).lineTo(5.2,-8.9).lineTo(4.4,-6).curveTo(3.7,-3,3.1,0.4).lineTo(2.7,3.7).curveTo(2.5,5.1,2.6,6.4).lineTo(2.7,7.4).lineTo(2.9,8.9).curveTo(1.5,8.3,0,7.5).closePath();
	this.shape_102.setTransform(-3046.7,25.2,1.14,1.14);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,7.5).curveTo(-1.4,7.5,-2.3,7.2).curveTo(-3.6,6.6,-4.1,6.3).curveTo(-4.8,5.8,-5.5,5).curveTo(-6.2,4.1,-6.6,3.3).curveTo(-6.9,2.5,-7.1,1.4).lineTo(-7.2,0.4).lineTo(-7.1,-0.5).curveTo(-7,-1.5,-6.5,-2.3).lineTo(-6,-3.2).curveTo(-5.5,-4.2,-4.7,-5.1).curveTo(-3.7,-6.4,-2.6,-7.5).lineTo(-1.9,-5.1).curveTo(-1,-2.5,0.8,-0.4).curveTo(2.5,1.7,5,3.2).lineTo(6.6,4.1).lineTo(7.1,4.3).lineTo(7.2,4.3).lineTo(4.5,6).curveTo(3.5,6.5,2.4,6.9).lineTo(1.4,7.3).curveTo(0.5,7.5,-0.2,7.5).lineTo(-0.5,7.5).closePath();
	this.shape_103.setTransform(-3040.5,43.8,1.14,1.14);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#494A4E").beginStroke().moveTo(0.4,5.7).curveTo(-0.7,2.3,-1.9,-0.4).curveTo(-3.4,-3.9,-4.8,-6.2).lineTo(-6.3,-8.5).lineTo(-5.3,-8.5).lineTo(0.3,-8).curveTo(2.1,-7.7,3.6,-6.6).curveTo(5,-5.4,5.7,-3.8).curveTo(6.4,-2.1,6.3,-0.3).curveTo(6.2,1.5,5.1,3.1).lineTo(1.9,7.7).lineTo(1.3,8.5).lineTo(0.4,5.7).closePath();
	this.shape_104.setTransform(-3011.1,5.4,1.14,1.14);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,6.4).curveTo(-2.5,5.5,-2.7,3.7).curveTo(-2.7,2.3,-3.1,0.4).curveTo(-3.5,-2.3,-4.4,-6).lineTo(-5.2,-8.9).lineTo(-2.1,-7.7).lineTo(1,-6.4).curveTo(2.7,-5.6,3.8,-4.2).curveTo(4.9,-2.7,5.1,-0.9).curveTo(5.4,0.9,4.9,2.6).curveTo(4.2,4.5,2.8,5.6).curveTo(1.4,6.7,0,7.5).lineTo(-2.9,8.9).closePath();
	this.shape_105.setTransform(-3003.7,25.2,1.14,1.14);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,7.3).lineTo(-4.5,6).lineTo(-6.4,4.9).lineTo(-7.2,4.3).lineTo(-7,4.3).lineTo(-5,3.2).curveTo(-2.3,1.5,-0.8,-0.4).curveTo(0.9,-2.4,1.9,-5.1).lineTo(2.2,-6.1).lineTo(2.6,-7.5).lineTo(4.7,-5.1).lineTo(6.6,-2.3).curveTo(7,-1.4,7.1,-0.5).lineTo(7.2,0.4).lineTo(7.2,1.4).curveTo(6.8,2.9,6.6,3.3).curveTo(6.2,4.1,5.6,5).lineTo(4.1,6.3).curveTo(3.6,6.7,2.4,7.2).curveTo(1.5,7.5,0.5,7.5).lineTo(0.2,7.5).curveTo(-0.5,7.5,-1.4,7.3).closePath();
	this.shape_106.setTransform(-3009.9,43.8,1.14,1.14);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#494A4E").beginStroke().moveTo(-12,21.4).curveTo(-17,16.2,-17,9).curveTo(-17,-0,-12,-12.4).curveTo(-6.3,-26.5,0,-26.5).curveTo(6.4,-26.5,12.1,-12.4).curveTo(17,-0,17,9).curveTo(17,16.3,12.1,21.4).curveTo(7.1,26.5,0,26.5).curveTo(-7,26.5,-12,21.4).closePath();
	this.shape_107.setTransform(-3025.2,19.8,1.14,1.14);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,16.5).lineTo(-1.7,-16.5).lineTo(1.7,-16.5).lineTo(1.7,16.5).closePath();
	this.shape_108.setTransform(-3025.2,51.3,1.14,1.14);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,8.4).curveTo(-1.2,3.2,-2.9,-0.6).curveTo(-4.9,-5.2,-7.1,-9.1).lineTo(-9.4,-12.7).lineTo(-7.9,-12.7).lineTo(0.4,-11.9).curveTo(3.1,-11.5,5.3,-9.7).curveTo(7.4,-8,8.4,-5.6).curveTo(9.5,-3.1,9.3,-0.4).curveTo(9.1,2.3,7.6,4.6).lineTo(4.8,8.7).lineTo(1.9,12.7).closePath();
	this.shape_109.setTransform(-2931.1,-22.3,1.14,1.14);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,11).lineTo(-3.9,9.5).curveTo(-3.8,8.2,-4,5.5).lineTo(-4.6,0.5).curveTo(-5.4,-4.2,-6.6,-8.9).lineTo(-7.8,-13.2).lineTo(1.4,-9.5).curveTo(3.9,-8.4,5.6,-6.2).curveTo(7.2,-4.1,7.6,-1.4).curveTo(8,1.3,7.2,3.9).curveTo(6.2,6.7,4.1,8.4).curveTo(2,10,-0,11.2).curveTo(-1.4,11.9,-3,12.7).lineTo(-4.3,13.2).closePath();
	this.shape_110.setTransform(-2920.1,7.2,1.14,1.14);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,10.8).lineTo(-3.6,10.2).curveTo(-5.1,9.7,-6.7,8.9).lineTo(-9.5,7.3).lineTo(-10.7,6.4).lineTo(-9.8,6).lineTo(-7.4,4.8).curveTo(-3.8,2.6,-1.2,-0.5).curveTo(1.3,-3.6,2.8,-7.6).lineTo(3.3,-9).lineTo(3.9,-11.1).lineTo(4.9,-10.1).lineTo(7,-7.6).lineTo(9.5,-3.8).lineTo(9.7,-3.4).curveTo(10.4,-2,10.6,-0.8).lineTo(10.7,0.6).lineTo(10.6,2.1).curveTo(10.3,3.9,9.8,4.8).curveTo(9.1,6.3,8.3,7.4).curveTo(6.9,8.8,6.1,9.3).curveTo(5,10.1,3.5,10.6).curveTo(2.3,11.1,0.7,11.1).lineTo(0.2,11.1).curveTo(-1,11.1,-2.1,10.8).closePath();
	this.shape_111.setTransform(-2929.4,34.9,1.14,1.14);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.7,4.6).curveTo(-9.2,2.3,-9.4,-0.4).curveTo(-9.5,-3.1,-8.5,-5.6).curveTo(-7.4,-8,-5.3,-9.7).curveTo(-3.2,-11.5,-0.5,-11.9).lineTo(7.8,-12.7).lineTo(9.4,-12.7).curveTo(8.4,-11.3,7.1,-9.1).curveTo(5.1,-5.7,2.9,-0.6).curveTo(1,3.7,-0.6,8.4).lineTo(-1.9,12.7).closePath();
	this.shape_112.setTransform(-2973.1,-22.3,1.14,1.14);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,11.2).lineTo(-2.8,9.4).lineTo(-4.1,8.4).curveTo(-6.3,6.7,-7.2,3.9).curveTo(-8.1,1.3,-7.6,-1.4).curveTo(-7.2,-4.1,-5.6,-6.2).curveTo(-4,-8.4,-1.5,-9.5).lineTo(7.8,-13.2).lineTo(6.6,-8.9).curveTo(5.4,-4.7,4.6,0.5).curveTo(4.1,3.2,4,5.5).curveTo(3.7,7.9,3.9,9.5).lineTo(4.3,13.2).curveTo(2.2,12.4,-0,11.2).closePath();
	this.shape_113.setTransform(-2984.2,7.2,1.14,1.14);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,11.1).curveTo(-2.2,11.1,-3.5,10.6).curveTo(-5,10.1,-6.1,9.3).curveTo(-7.2,8.5,-8.3,7.4).curveTo(-9.2,6.2,-9.8,4.8).curveTo(-10.3,3.9,-10.6,2.1).lineTo(-10.8,0.6).lineTo(-10.6,-0.8).curveTo(-10.4,-2,-9.8,-3.4).lineTo(-9,-4.8).lineTo(-7.1,-7.6).curveTo(-5.5,-9.6,-3.8,-11.1).lineTo(-3.3,-9).lineTo(-2.8,-7.6).curveTo(-1.3,-3.6,1.3,-0.5).curveTo(3.9,2.7,7.4,4.8).curveTo(8.3,5.4,9.8,6).lineTo(10.7,6.4).lineTo(9.6,7.3).lineTo(6.7,8.9).curveTo(5.2,9.7,3.5,10.2).lineTo(2,10.8).curveTo(1,11.1,-0.2,11.1).lineTo(-0.7,11.1).closePath();
	this.shape_114.setTransform(-2974.9,34.9,1.14,1.14);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,31.8).curveTo(-25.3,24.2,-25.3,13.4).curveTo(-25.3,7.7,-23.3,-0.9).curveTo(-21.2,-10.2,-17.9,-18.5).curveTo(-9.4,-39.4,-0,-39.4).curveTo(9.4,-39.4,17.9,-18.5).curveTo(21.2,-10.2,23.3,-0.9).curveTo(25.3,7.7,25.3,13.4).curveTo(25.3,24.2,17.9,31.8).curveTo(10.5,39.4,-0,39.5).curveTo(-10.5,39.4,-17.9,31.8).closePath();
	this.shape_115.setTransform(-2952.1,-0.8,1.14,1.14);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.6).lineTo(-2.5,-24.6).lineTo(2.5,-24.6).lineTo(2.5,24.6).closePath();
	this.shape_116.setTransform(-2952.1,46,1.14,1.14);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.3,26).curveTo(-21.7,19.6,-21.7,10.7).curveTo(-21.7,3.2,-10.8,-15.3).curveTo(-5.4,-24.6,-0,-32.3).lineTo(10.8,-15.3).curveTo(21.7,3.2,21.7,10.7).curveTo(21.7,19.6,15.3,26).curveTo(9,32.3,-0,32.3).curveTo(-9,32.3,-15.3,26).closePath();
	this.shape_117.setTransform(-3950.3,26,1.14,1.14);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.5).lineTo(-1.8,-17.5).lineTo(1.8,-17.5).lineTo(1.8,17.5).closePath();
	this.shape_118.setTransform(-3950.3,59.1,1.14,1.14);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1.1).lineTo(0.5,-1.1).lineTo(0.5,1).closePath();
	this.shape_119.setTransform(-2907,-32.7,1.14,1.14);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1).closePath();
	this.shape_120.setTransform(-2904.2,-32.7,1.14,1.14);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.2,-4.1).lineTo(2.1,4).closePath();
	this.shape_121.setTransform(-2908.9,-38.5,1.14,1.14);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_122.setTransform(-2907.1,-38.5,1.14,1.14);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_123.setTransform(-2911.4,-38.5,1.14,1.14);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_124.setTransform(-2904.3,-23.6,1.14,1.14);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_125.setTransform(-2918.5,-23.6,1.14,1.14);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1).closePath();
	this.shape_126.setTransform(-2911.4,-32.7,1.14,1.14);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_127.setTransform(-2911.4,-11.6,1.14,1.14);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_128.setTransform(-2911.4,-14.7,1.14,1.14);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_129.setTransform(-2911.4,69.8,1.14,1.14);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.1,-41.1).lineTo(2.1,41.1).closePath();
	this.shape_130.setTransform(-2911.4,32.1,1.14,1.14);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.8,-6.9).lineTo(0.8,6.9).closePath();
	this.shape_131.setTransform(-2911.4,-23.6,1.14,1.14);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-0.9,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_132.setTransform(-2911.4,-23.6,1.14,1.14);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,0).curveTo(-12.4,-5.2,-8.8,-8.7).curveTo(-5.2,-12.4,-0,-12.4).curveTo(5.1,-12.4,8.8,-8.7).curveTo(12.4,-5.2,12.4,0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.1,12.4,-0,12.4).curveTo(-5.2,12.4,-8.8,8.8).closePath();
	this.shape_133.setTransform(-2768.6,-47.4,1.14,1.14);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.9,9.3).curveTo(-19.8,9.3,-22.5,6.6).curveTo(-25.2,3.9,-25.2,0).curveTo(-25.2,-3.9,-22.5,-6.6).curveTo(-19.8,-9.3,-15.9,-9.3).lineTo(15.9,-9.3).curveTo(19.8,-9.3,22.5,-6.6).curveTo(25.2,-3.9,25.2,0).curveTo(25.2,3.9,22.5,6.6).curveTo(19.8,9.3,15.9,9.3).closePath();
	this.shape_134.setTransform(-2762.8,-40.8,1.14,1.14);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.2,4.2).curveTo(-5.9,2.5,-5.9,0).curveTo(-5.9,-2.4,-4.2,-4.2).curveTo(-2.4,-5.9,0,-5.9).curveTo(2.5,-5.9,4.2,-4.2).curveTo(5.9,-2.4,5.9,0).curveTo(5.9,2.5,4.2,4.2).curveTo(2.5,5.9,0,5.9).curveTo(-2.4,5.9,-4.2,4.2).closePath();
	this.shape_135.setTransform(-2006.1,-110.9,1.14,1.14);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-7.1,7.2).curveTo(-10.1,4.2,-10.1,0).curveTo(-10.1,-4.2,-7.1,-7.1).curveTo(-4.2,-10.1,0,-10.1).curveTo(4.2,-10.1,7.2,-7.1).curveTo(10.1,-4.2,10.1,0).curveTo(10.1,4.2,7.2,7.2).curveTo(4.2,10.1,0,10.1).curveTo(-4.2,10.1,-7.1,7.2).closePath();
	this.shape_136.setTransform(-1991.4,-109,1.14,1.14);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.5,7.9).curveTo(-16.8,7.9,-19.1,5.6).curveTo(-21.4,3.3,-21.4,-0).curveTo(-21.4,-3.3,-19.1,-5.6).curveTo(-16.8,-7.9,-13.5,-7.9).lineTo(13.5,-7.9).curveTo(16.8,-7.9,19.1,-5.6).curveTo(21.4,-3.3,21.4,-0).curveTo(21.4,3.3,19.1,5.6).curveTo(16.8,7.9,13.5,7.9).closePath();
	this.shape_137.setTransform(-1997.2,-101.9,1.14,1.14);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.2,5.2).curveTo(-7.3,3,-7.3,-0).curveTo(-7.3,-3,-5.2,-5.2).curveTo(-3,-7.3,0,-7.3).curveTo(3,-7.3,5.2,-5.2).curveTo(7.3,-3,7.3,-0).curveTo(7.3,3,5.2,5.2).curveTo(3,7.3,0,7.3).curveTo(-3,7.3,-5.2,5.2).closePath();
	this.shape_138.setTransform(-2545.7,-95.6,1.14,1.14);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,8.9).curveTo(-12.5,5.2,-12.5,0).curveTo(-12.5,-5.2,-8.9,-8.9).curveTo(-5.2,-12.5,0,-12.5).curveTo(5.2,-12.5,8.9,-8.9).curveTo(12.5,-5.2,12.5,0).curveTo(12.5,5.2,8.9,8.9).curveTo(5.2,12.5,0,12.5).curveTo(-5.2,12.5,-8.9,8.9).closePath();
	this.shape_139.setTransform(-2563.9,-93.3,1.14,1.14);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.7,9.7).curveTo(-20.8,9.7,-23.6,6.9).curveTo(-26.4,4.1,-26.4,0).curveTo(-26.4,-4,-23.6,-6.9).curveTo(-20.8,-9.8,-16.7,-9.8).lineTo(16.7,-9.8).curveTo(20.8,-9.8,23.6,-6.9).curveTo(26.4,-4,26.4,0).curveTo(26.4,4.1,23.6,6.9).curveTo(20.8,9.7,16.7,9.7).closePath();
	this.shape_140.setTransform(-2556.6,-84.5,1.14,1.14);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_141.setTransform(-2535.8,-33.8,1.14,1.14);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1).lineTo(1.2,-1).lineTo(1.2,1).closePath();
	this.shape_142.setTransform(-2533,-33.8,1.14,1.14);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#494A4E").beginStroke().moveTo(1.1,4.1).lineTo(-2.1,-4).lineTo(2.1,4.1).closePath();
	this.shape_143.setTransform(-2537.7,-39.6,1.14,1.14);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4.1).lineTo(-3.7,-4).lineTo(3.7,4.1).closePath();
	this.shape_144.setTransform(-2535.9,-39.6,1.14,1.14);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4.1).lineTo(0,-4).lineTo(8.8,4.1).closePath();
	this.shape_145.setTransform(-2540.1,-39.6,1.14,1.14);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_146.setTransform(-2533.1,-24.8,1.14,1.14);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_147.setTransform(-2547.2,-24.8,1.14,1.14);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1).lineTo(8.7,-1).lineTo(8.7,1).closePath();
	this.shape_148.setTransform(-2540.1,-33.8,1.14,1.14);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_149.setTransform(-2540.1,-12.7,1.14,1.14);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_150.setTransform(-2540.1,-15.9,1.14,1.14);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_151.setTransform(-2540.1,68.6,1.14,1.14);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,41.1).lineTo(-2.1,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_152.setTransform(-2540.1,31,1.14,1.14);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_153.setTransform(-2540.1,-24.8,1.14,1.14);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-1,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_154.setTransform(-2540.1,-24.8,1.14,1.14);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_155.setTransform(-2175.5,-31.7,1.14,1.14);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1.1).closePath();
	this.shape_156.setTransform(-2172.8,-31.7,1.14,1.14);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.1,-4.1).lineTo(2.2,4).closePath();
	this.shape_157.setTransform(-2177.4,-37.5,1.14,1.14);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#494A4E").beginStroke().moveTo(1.4,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_158.setTransform(-2175.6,-37.5,1.14,1.14);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_159.setTransform(-2179.9,-37.5,1.14,1.14);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_160.setTransform(-2172.8,-22.7,1.14,1.14);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_161.setTransform(-2186.9,-22.7,1.14,1.14);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1.1).closePath();
	this.shape_162.setTransform(-2179.9,-31.7,1.14,1.14);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_163.setTransform(-2179.9,-10.7,1.14,1.14);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_164.setTransform(-2179.9,-13.8,1.14,1.14);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.5).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.5).closePath();
	this.shape_165.setTransform(-2179.9,70.7,1.14,1.14);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_166.setTransform(-2179.9,33.1,1.14,1.14);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_167.setTransform(-2179.9,-22.7,1.14,1.14);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-4.4,-7.6,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_168.setTransform(-2179.9,-22.7,1.14,1.14);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,5.4).curveTo(-4.1,5.5,-4.6,4.8).curveTo(-4.9,4.3,-4.9,3.5).curveTo(-5,1.8,-3.6,-0.4).curveTo(-2.1,-2.8,-0.3,-4.1).curveTo(1.5,-5.5,2.9,-5.5).lineTo(3.4,-5.5).curveTo(4.2,-5.4,4.5,-4.8).curveTo(4.9,-4.3,4.9,-3.5).curveTo(4.9,-1.8,3.6,0.4).curveTo(2.1,3,0.4,4.2).curveTo(-1.5,5.4,-2.9,5.4).closePath();
	this.shape_169.setTransform(-2070.2,74.5,1.14,1.14);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,4).curveTo(-0.1,4,-1.3,2.7).curveTo(-2.4,1.3,-2.8,-0.2).curveTo(-3.1,-1.6,-3.1,-2.6).curveTo(-2.9,-4,-1.8,-4).lineTo(-0.6,-4).curveTo(0.2,-4,1.3,-2.7).curveTo(2.3,-1.3,2.8,0.3).curveTo(3.7,4,1.8,4).closePath();
	this.shape_170.setTransform(-2001.9,69.9,1.14,1.14);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#494A4E").beginStroke().moveTo(0.2,7.5).curveTo(-1.4,6.8,-2.3,4.5).curveTo(-3.6,1.6,-3.6,-1.1).lineTo(-3.6,-1.7).curveTo(-3.6,-4.9,-2.7,-6.3).curveTo(-2.3,-7,-1.7,-7.4).curveTo(-1,-7.8,-0.3,-7.5).curveTo(1.2,-6.9,2.3,-4.5).curveTo(3.6,-1.6,3.6,1.1).lineTo(3.6,1.7).curveTo(3.6,4.9,2.7,6.4).curveTo(2.3,7.1,1.7,7.4).curveTo(1.3,7.7,0.9,7.7).lineTo(0.2,7.5).closePath();
	this.shape_171.setTransform(-1920.2,66.3,1.14,1.14);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#494A4E").beginStroke().moveTo(0.1,8.1).curveTo(-1.4,8.1,-2.7,5.9).curveTo(-4,3.5,-4.1,0.2).curveTo(-4.2,-3.7,-3.3,-5.6).curveTo(-2.1,-8.2,-0.8,-8.2).lineTo(-0.1,-8.2).curveTo(1.5,-8.1,2.7,-5.9).curveTo(4,-3.5,4.1,-0.2).curveTo(4.2,3.7,3.3,5.6).curveTo(2.2,8.1,0.8,8.1).closePath();
	this.shape_172.setTransform(-1896.4,56,1.14,1.14);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_173.setTransform(-2609.5,-2.8,1.14,1.14);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(-12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_174.setTransform(-2581.5,-2.8,1.14,1.14);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.6,38.7).lineTo(0,-38.7).lineTo(24.6,38.7).closePath();
	this.shape_175.setTransform(-2595.5,-2.8,1.14,1.14);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.1).lineTo(-2.5,-24.1).lineTo(2.5,-24.1).lineTo(2.5,24.1).closePath();
	this.shape_176.setTransform(-2595.5,48.3,1.14,1.14);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.3).lineTo(-9,-5.2).curveTo(-6,-10.3,0,-10.3).curveTo(6,-10.3,9,-5.2).lineTo(17.9,10.3).closePath();
	this.shape_177.setTransform(-2650.2,57.9,1.14,1.14);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.7).lineTo(-8.4,-5.8).curveTo(-5.6,-10.7,-0,-10.7).curveTo(5.6,-10.7,8.4,-5.8).lineTo(17.9,10.7).closePath();
	this.shape_178.setTransform(-1927.4,57.5,1.14,1.14);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,-53.3).lineTo(-12.3,-45).curveTo(-5.6,-34.8,-0,-25.3).curveTo(17.9,5.2,17.9,17.6).curveTo(17.8,32.4,7.4,42.9).curveTo(-3.1,53.3,-17.9,53.3).closePath();
	this.shape_179.setTransform(-2302.4,-18.4,1.14,1.14);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.4,42.9).curveTo(-17.9,32.4,-17.9,17.6).curveTo(-17.9,5.2,0,-25.3).curveTo(8.9,-40.5,17.9,-53.3).lineTo(17.9,53.3).curveTo(3.1,53.3,-7.4,42.9).closePath();
	this.shape_180.setTransform(-2343.1,-18.4,1.14,1.14);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,28.8).lineTo(-2.9,-28.8).lineTo(2.9,-28.8).lineTo(2.9,28.8).closePath();
	this.shape_181.setTransform(-2322.7,36.1,1.14,1.14);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.6,4.9).curveTo(-13.5,5,-16.2,2.2).curveTo(-19,-0.5,-19,-4.4).lineTo(-18.9,-5).lineTo(19,-5).lineTo(19,-4.4).curveTo(19,-0.5,16.3,2.2).curveTo(13.5,5,9.6,4.9).closePath();
	this.shape_182.setTransform(-2118.9,-1.3,1.14,1.14);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#494A4E").beginStroke().moveTo(-18.9,4.4).curveTo(-18.8,0.7,-16.1,-1.9).curveTo(-13.3,-4.5,-9.6,-4.5).lineTo(9.6,-4.5).curveTo(13.4,-4.5,16.1,-1.9).curveTo(18.8,0.7,19,4.4).closePath();
	this.shape_183.setTransform(-2118.9,-12.1,1.14,1.14);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.1,3.7).curveTo(-9.9,3.7,-12,1.7).curveTo(-14,-0.4,-14.1,-3.3).lineTo(-14.1,-3.7).lineTo(14.1,-3.7).lineTo(14.1,-3.3).curveTo(14,-0.4,12,1.7).curveTo(10,3.7,7.1,3.7).closePath();
	this.shape_184.setTransform(-2092,-66.4,1.14,1.14);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.1,3.3).curveTo(-13.8,0.6,-11.8,-1.3).curveTo(-9.9,-3.3,-7.1,-3.3).lineTo(7.1,-3.3).curveTo(9.8,-3.3,11.8,-1.3).curveTo(13.9,0.6,14.1,3.3).closePath();
	this.shape_185.setTransform(-2092,-74.3,1.14,1.14);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.3,7.5).curveTo(-19.3,7.5,-23.5,3.3).curveTo(-27.7,-0.9,-27.8,-6.9).lineTo(-27.7,-7.5).lineTo(27.7,-7.5).lineTo(27.8,-6.9).curveTo(27.8,-0.9,23.5,3.3).curveTo(19.2,7.5,13.3,7.5).closePath();
	this.shape_186.setTransform(-2130.7,-30.5,1.14,1.14);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.7,6.9).curveTo(-27.4,1.1,-23.3,-2.9).curveTo(-19.1,-6.9,-13.3,-6.9).lineTo(13.3,-6.9).curveTo(19.1,-6.9,23.3,-2.9).curveTo(27.5,1.1,27.7,6.9).closePath();
	this.shape_187.setTransform(-2130.7,-46.9,1.14,1.14);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.1,5.2).curveTo(-24.4,5.2,-27.5,2.2).curveTo(-30.6,-0.9,-30.7,-5.2).lineTo(30.6,-5.2).curveTo(30.6,-0.9,27.6,2.2).curveTo(24.5,5.2,20.2,5.2).closePath();
	this.shape_188.setTransform(-2076,-42.1,1.14,1.14);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.7,5.3).lineTo(-30.7,5.2).curveTo(-30.7,0.9,-27.5,-2.2).curveTo(-24.5,-5.3,-20.1,-5.3).lineTo(20.2,-5.3).curveTo(24.5,-5.3,27.6,-2.2).curveTo(30.7,0.9,30.6,5.2).lineTo(30.6,5.3).closePath();
	this.shape_189.setTransform(-2076,-54,1.14,1.14);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.7,6.6).curveTo(-34.1,1,-30,-2.8).curveTo(-25.8,-6.6,-20.2,-6.6).lineTo(20.2,-6.6).curveTo(25.8,-6.6,30,-2.8).curveTo(34.1,1,34.7,6.6).closePath();
	this.shape_190.setTransform(-2056.8,-26.1,1.14,1.14);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.2,8).curveTo(-26.2,8,-30.5,3.7).curveTo(-34.7,-0.6,-34.7,-6.6).lineTo(-34.7,-8).lineTo(34.7,-8).lineTo(34.7,-6.6).curveTo(34.7,-0.6,30.5,3.7).curveTo(26.2,8,20.2,8).closePath();
	this.shape_191.setTransform(-2056.8,-9.5,1.14,1.14);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,17.6).lineTo(-2.4,-17.6).lineTo(2.4,-17.6).lineTo(2.4,17.6).closePath();
	this.shape_192.setTransform(-2085.1,56,1.14,1.14);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#494A4E").beginStroke().moveTo(-29.6,-29.8).lineTo(-25.6,-32.4).lineTo(9.2,22.3).lineTo(25.2,-13.2).lineTo(29.6,-11.3).lineTo(10,32.4).closePath();
	this.shape_193.setTransform(-2096.1,4.7,1.14,1.14);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,47.5).curveTo(-8.2,46.8,-9.4,45.9).curveTo(-10.7,45,-12,43.6).curveTo(-13,42.3,-13.8,40.6).curveTo(-14.4,39.7,-14.8,37.4).curveTo(-14.9,36.6,-14.9,35.8).lineTo(-14.7,34).curveTo(-14.5,32.5,-13.7,31).lineTo(-12.8,29.4).curveTo(-11.7,27.5,-10.6,26).curveTo(-9.2,24.3,-7.4,22.5).lineTo(-7.7,21.5).curveTo(-9.6,20.9,-11.9,19.6).curveTo(-13.4,18.7,-15.2,17.4).lineTo(-16.7,16.2).curveTo(-19.3,14.2,-20.4,11).curveTo(-21.4,7.9,-20.9,4.8).curveTo(-20.4,1.7,-18.5,-0.9).curveTo(-16.6,-3.4,-13.6,-4.7).lineTo(-5,-8.3).lineTo(-4.2,-10.9).lineTo(-9.5,-18.5).curveTo(-11.3,-21.2,-11.5,-24.5).curveTo(-11.7,-27.5,-10.5,-30.5).curveTo(-9.2,-33.3,-6.8,-35.3).curveTo(-4.2,-37.4,-1.1,-37.9).lineTo(4.7,-38.6).lineTo(8,-38.8).curveTo(14.5,-48.1,21.1,-48).lineTo(21.1,44.5).curveTo(11.5,44.5,3.7,38.7).curveTo(4.8,39.6,6.4,40.5).curveTo(7,41,9.2,42.1).lineTo(10,42.4).lineTo(10.3,42.5).lineTo(8.9,43.5).lineTo(5.5,45.5).lineTo(1.9,47).lineTo(0.1,47.6).curveTo(-1.3,48,-3.1,48.1).curveTo(-4.8,48,-6.4,47.5).closePath();
	this.shape_194.setTransform(-2700.1,-16.8,1.14,1.14);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,47.6).lineTo(-1.9,47).lineTo(-5.5,45.5).lineTo(-8.9,43.5).lineTo(-10.3,42.5).lineTo(-10,42.4).lineTo(-9.2,42.1).lineTo(-7.9,41.4).lineTo(-6.4,40.5).curveTo(-4.9,39.7,-3.5,38.6).curveTo(-11.4,44.5,-21.1,44.5).lineTo(-21.1,-48).curveTo(-14.5,-48.1,-8,-38.8).lineTo(-4.7,-38.6).lineTo(1.1,-37.9).curveTo(4.3,-37.4,6.8,-35.3).curveTo(9.2,-33.3,10.5,-30.5).curveTo(11.7,-27.6,11.5,-24.5).curveTo(11.3,-21.3,9.5,-18.5).lineTo(6.2,-13.7).lineTo(4.2,-10.9).lineTo(5,-8.3).lineTo(8.2,-7).lineTo(13.6,-4.7).curveTo(16.6,-3.4,18.5,-0.9).curveTo(20.4,1.7,20.9,4.8).curveTo(21.4,7.9,20.4,11).curveTo(19.3,14.2,16.7,16.2).curveTo(14.3,18.2,11.9,19.6).curveTo(10,20.6,7.7,21.6).lineTo(7.4,22.4).curveTo(9.6,24.8,10.6,26).curveTo(11.7,27.5,12.8,29.4).lineTo(13.7,31).curveTo(14.5,32.5,14.8,34).curveTo(14.9,34.9,14.9,35.8).curveTo(14.9,36.6,14.8,37.4).curveTo(14.4,39.7,13.8,40.6).curveTo(13,42.3,12,43.6).curveTo(10.7,44.9,9.5,45.9).curveTo(8.1,46.9,6.4,47.5).curveTo(4.9,48,3.2,48.1).curveTo(1.3,48,-0.1,47.6).closePath();
	this.shape_195.setTransform(-2652.1,-16.8,1.14,1.14);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,5.4).curveTo(-10.8,2.7,-11,-0.5).curveTo(-11.2,-3.6,-10,-6.5).curveTo(-8.7,-9.4,-6.3,-11.4).curveTo(-3.7,-13.4,-0.6,-13.9).lineTo(9.2,-14.9).lineTo(11,-14.8).curveTo(9.8,-13.3,8.3,-10.7).curveTo(5.8,-6.5,3.3,-0.7).curveTo(1.3,4,-0.7,9.9).lineTo(-2.3,14.9).closePath();
	this.shape_196.setTransform(-2700.7,-44,1.14,1.14);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,13.1).curveTo(-1.5,12.3,-3.3,11).lineTo(-4.8,9.8).curveTo(-7.4,7.8,-8.5,4.6).curveTo(-9.5,1.5,-9,-1.6).curveTo(-8.5,-4.8,-6.6,-7.3).curveTo(-4.7,-9.8,-1.7,-11.1).lineTo(3.7,-13.4).curveTo(6.4,-14.5,9.1,-15.5).lineTo(7.7,-10.4).curveTo(6.2,-4.6,5.4,0.7).curveTo(4.9,3.6,4.6,6.5).curveTo(4.4,9.1,4.6,11.1).lineTo(4.7,12.9).lineTo(5.1,15.5).curveTo(2.6,14.6,-0,13.1).closePath();
	this.shape_197.setTransform(-2713.7,-9.5,1.14,1.14);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,12.5).curveTo(-5.9,11.8,-7.1,11).curveTo(-8.4,10,-9.7,8.6).curveTo(-10.7,7.3,-11.5,5.7).curveTo(-12,4.7,-12.4,2.4).curveTo(-12.6,1.6,-12.6,0.8).lineTo(-12.4,-0.9).curveTo(-12.2,-2.5,-11.4,-4).lineTo(-10.5,-5.6).curveTo(-9.4,-7.4,-8.3,-8.9).curveTo(-6.4,-11.3,-4.5,-13.1).lineTo(-3.3,-8.9).curveTo(-1.6,-4.3,1.4,-0.6).curveTo(4.7,3.2,8.7,5.6).curveTo(9.3,6,11.5,7.1).lineTo(12.3,7.5).lineTo(12.6,7.6).lineTo(11.2,8.5).lineTo(7.8,10.5).lineTo(4.2,12).lineTo(2.4,12.7).curveTo(1,13.1,-0.8,13.1).curveTo(-2.5,13.1,-4.1,12.5).closePath();
	this.shape_198.setTransform(-2702.7,23.1,1.14,1.14);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#494A4E").beginStroke().moveTo(0.7,9.9).curveTo(-1.3,4,-3.4,-0.7).curveTo(-5.9,-6.5,-8.4,-10.7).lineTo(-11,-14.8).lineTo(-9.2,-14.9).lineTo(0.5,-13.9).curveTo(3.7,-13.4,6.3,-11.4).curveTo(8.7,-9.4,9.9,-6.5).curveTo(11.2,-3.6,11,-0.5).curveTo(10.7,2.7,9,5.4).lineTo(5.7,10.2).lineTo(2.3,14.9).closePath();
	this.shape_199.setTransform(-2651.4,-44,1.14,1.14);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.7,12.9).lineTo(-4.6,11.1).curveTo(-4.4,9.5,-4.7,6.5).curveTo(-4.9,3.9,-5.4,0.7).curveTo(-6.2,-4.2,-7.7,-10.4).lineTo(-9.1,-15.5).lineTo(-3.7,-13.4).lineTo(1.7,-11.1).curveTo(4.6,-9.8,6.6,-7.3).curveTo(8.4,-4.8,8.9,-1.6).curveTo(9.4,1.5,8.4,4.6).curveTo(7.3,7.8,4.8,9.8).curveTo(2.4,11.7,-0,13.1).curveTo(-1.6,14,-3.5,14.8).lineTo(-5.1,15.5).closePath();
	this.shape_200.setTransform(-2638.5,-9.5,1.14,1.14);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,12.7).lineTo(-4.2,12).lineTo(-7.8,10.5).lineTo(-11.2,8.5).lineTo(-12.6,7.6).lineTo(-12.3,7.5).lineTo(-11.5,7.1).lineTo(-10.3,6.5).lineTo(-8.7,5.6).curveTo(-4.5,3.1,-1.5,-0.6).curveTo(1.6,-4.3,3.3,-8.9).lineTo(3.9,-10.6).lineTo(4.5,-13.1).lineTo(5.7,-11.9).curveTo(7.2,-10.4,8.3,-8.9).curveTo(9.4,-7.4,10.4,-5.6).lineTo(11.4,-4).curveTo(12.1,-2.5,12.4,-0.9).curveTo(12.6,-0.1,12.6,0.8).curveTo(12.6,1.6,12.4,2.4).curveTo(12,4.7,11.5,5.7).curveTo(10.7,7.3,9.7,8.6).curveTo(8.4,10,7.2,11).curveTo(5.8,11.9,4.1,12.5).curveTo(2.6,13.1,0.9,13.1).curveTo(-1,13.1,-2.4,12.7).closePath();
	this.shape_201.setTransform(-2649.4,23.1,1.14,1.14);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#494A4E").beginStroke().moveTo(-21,37.3).curveTo(-29.7,28.3,-29.7,15.7).curveTo(-29.7,9.1,-27.4,-1.2).curveTo(-24.9,-11.9,-21,-21.7).curveTo(-11.1,-46.3,-0,-46.3).curveTo(11.1,-46.3,21,-21.7).curveTo(24.9,-11.9,27.4,-1.2).curveTo(29.7,9.1,29.7,15.7).curveTo(29.7,28.3,21,37.3).curveTo(12.3,46.3,-0,46.3).curveTo(-12.3,46.3,-21,37.3).closePath();
	this.shape_202.setTransform(-2676.1,-18.8,1.14,1.14);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#494A4E").beginStroke().moveTo(-3,28.8).lineTo(-3,-28.8).lineTo(3,-28.8).lineTo(3,28.8).closePath();
	this.shape_203.setTransform(-2676.1,36.1,1.14,1.14);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,23.8).curveTo(-11,17.4,-11,8.4).curveTo(-11,2.1,-7.8,-3.1).curveTo(-4.6,-8.2,0.6,-11).curveTo(-1.5,-14.3,-1.5,-17.9).curveTo(-1.5,-23.1,2.2,-26.7).curveTo(5.8,-30.3,11,-30.3).lineTo(11,30.3).curveTo(1.9,30.3,-4.6,23.8).closePath();
	this.shape_204.setTransform(-2478.6,19.1,1.14,1.14);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,5.6).curveTo(-4,3.2,-4,-0).curveTo(-4,-3.3,-1.6,-5.6).curveTo(0.7,-7.9,4,-7.9).lineTo(4,7.9).curveTo(0.7,7.9,-1.6,5.6).closePath();
	this.shape_205.setTransform(-2470.6,-25.9,1.14,1.14);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.6,15.5).curveTo(-22,9.1,-21.9,0).curveTo(-22,-9.1,-15.6,-15.6).curveTo(-9.1,-22,0,-21.9).curveTo(9.1,-22,15.5,-15.6).curveTo(22,-9.1,22,0).curveTo(22,9.1,15.5,15.5).curveTo(9.1,22,0,22).curveTo(-9.1,22,-15.6,15.5).closePath();
	this.shape_206.setTransform(-2466.1,28.6,1.14,1.14);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.6,5.6).curveTo(-7.9,3.2,-7.9,-0).curveTo(-7.9,-3.3,-5.6,-5.6).curveTo(-3.2,-7.9,0,-7.9).curveTo(3.3,-7.9,5.6,-5.6).curveTo(7.9,-3.3,7.9,-0).curveTo(7.9,3.2,5.6,5.6).curveTo(3.3,7.9,0,7.9).curveTo(-3.2,7.9,-5.6,5.6).closePath();
	this.shape_207.setTransform(-2466.2,-25.9,1.14,1.14);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,-0).curveTo(-12.4,-5.2,-8.8,-8.8).curveTo(-5.1,-12.4,0,-12.4).curveTo(5.2,-12.4,8.8,-8.8).curveTo(12.4,-5.2,12.4,-0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.2,12.4,0,12.4).curveTo(-5.1,12.4,-8.8,8.8).closePath();
	this.shape_208.setTransform(-2466.2,-1.3,1.14,1.14);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.7).lineTo(-1.8,-17.7).lineTo(1.8,-17.7).lineTo(1.8,17.7).closePath();
	this.shape_209.setTransform(-2466.1,49.7,1.14,1.14);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#494A4E").beginStroke().moveTo(-523.2,5).curveTo(-525.9,5,-527.7,3.6).curveTo(-529.6,2.1,-529.6,-0).curveTo(-529.6,-2.1,-527.7,-3.5).curveTo(-525.9,-5,-523.2,-5.1).lineTo(523.2,-5.1).curveTo(525.9,-5,527.7,-3.5).curveTo(529.6,-2.1,529.6,-0).curveTo(529.6,2.1,527.7,3.6).curveTo(525.9,5,523.2,5).closePath();
	this.shape_210.setTransform(-2340.4,75.8,1.14,1.14);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.5,12.5).curveTo(-17.7,7.3,-17.7,-0).curveTo(-17.7,-7.3,-12.5,-12.5).curveTo(-7.3,-17.7,-0,-17.7).curveTo(7.4,-17.7,12.6,-12.5).curveTo(17.7,-7.3,17.7,-0).curveTo(17.7,7.3,12.6,12.5).curveTo(7.4,17.7,-0,17.7).curveTo(-7.3,17.7,-12.5,12.5).closePath();
	this.shape_211.setTransform(-2263.7,56.2,1.14,1.14);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.7,5.3,-12.7,-0).curveTo(-12.7,-5.3,-9,-9).curveTo(-5.3,-12.8,-0,-12.8).curveTo(5.3,-12.8,9,-9).curveTo(12.7,-5.3,12.7,-0).curveTo(12.7,5.3,9,9).curveTo(5.3,12.8,-0,12.8).curveTo(-5.3,12.8,-9,9).closePath();
	this.shape_212.setTransform(-2208.6,56.5,1.14,1.14);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.6,16.6).curveTo(-23.5,9.8,-23.6,-0).curveTo(-23.5,-9.8,-16.6,-16.7).curveTo(-9.8,-23.5,0,-23.5).curveTo(9.8,-23.5,16.7,-16.7).curveTo(23.5,-9.8,23.5,-0).curveTo(23.5,9.8,16.7,16.6).curveTo(9.8,23.5,0,23.6).curveTo(-9.8,23.5,-16.6,16.6).closePath();
	this.shape_213.setTransform(-2235.5,49.5,1.14,1.14);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,-0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,-0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_214.setTransform(-2044.2,62.4,1.14,1.14);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_215.setTransform(-2013.3,58.6,1.14,1.14);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_216.setTransform(-2153.2,62.4,1.14,1.14);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_217.setTransform(-2122.2,58.6,1.14,1.14);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.9,21.9).lineTo(0,-21.9).lineTo(13.9,21.9).closePath();
	this.shape_218.setTransform(-2856.1,23.7,1.14,1.14);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,13.6).lineTo(-1.4,-13.6).lineTo(1.4,-13.6).lineTo(1.4,13.6).closePath();
	this.shape_219.setTransform(-2856.1,52.5,1.14,1.14);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,3.1).curveTo(-6.2,1.5,-6.3,-0.3).curveTo(-6.4,-2.1,-5.7,-3.7).curveTo(-5,-5.4,-3.6,-6.5).curveTo(-2.2,-7.7,-0.3,-8).lineTo(5.3,-8.5).lineTo(6.3,-8.5).curveTo(5.6,-7.6,4.8,-6.1).curveTo(3.2,-3.4,1.9,-0.4).curveTo(0.5,2.8,-0.4,5.7).lineTo(-1.3,8.5).closePath();
	this.shape_220.setTransform(-1876.8,5.4,1.14,1.14);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#494A4E").beginStroke().moveTo(0,7.5).lineTo(-2.8,5.6).curveTo(-4.2,4.5,-4.8,2.6).curveTo(-5.4,0.9,-5.1,-0.9).curveTo(-4.8,-2.7,-3.8,-4.2).curveTo(-2.7,-5.6,-1,-6.4).lineTo(5.2,-8.9).lineTo(4.4,-6).curveTo(3.7,-3,3.1,0.4).lineTo(2.7,3.7).curveTo(2.5,5.1,2.6,6.4).lineTo(2.7,7.4).lineTo(2.9,8.9).curveTo(1.5,8.3,0,7.5).closePath();
	this.shape_221.setTransform(-1884.2,25.2,1.14,1.14);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,7.5).curveTo(-1.4,7.5,-2.3,7.2).curveTo(-3.6,6.6,-4.1,6.3).curveTo(-4.8,5.8,-5.5,5).curveTo(-6.2,4.1,-6.6,3.3).curveTo(-6.9,2.5,-7.1,1.4).lineTo(-7.2,0.4).lineTo(-7.1,-0.5).curveTo(-7,-1.5,-6.5,-2.3).lineTo(-6,-3.2).curveTo(-5.5,-4.2,-4.7,-5.1).curveTo(-3.7,-6.4,-2.6,-7.5).lineTo(-1.9,-5.1).curveTo(-1,-2.5,0.8,-0.4).curveTo(2.5,1.7,5,3.2).lineTo(6.6,4.1).lineTo(7.1,4.3).lineTo(7.2,4.3).lineTo(4.5,6).curveTo(3.5,6.5,2.4,6.9).lineTo(1.4,7.3).curveTo(0.5,7.5,-0.2,7.5).lineTo(-0.5,7.5).closePath();
	this.shape_222.setTransform(-1878,43.8,1.14,1.14);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#494A4E").beginStroke().moveTo(0.4,5.7).curveTo(-0.7,2.3,-1.9,-0.4).curveTo(-3.4,-3.9,-4.8,-6.2).lineTo(-6.3,-8.5).lineTo(-5.3,-8.5).lineTo(0.3,-8).curveTo(2.1,-7.7,3.6,-6.6).curveTo(5,-5.4,5.7,-3.8).curveTo(6.4,-2.1,6.3,-0.3).curveTo(6.2,1.5,5.1,3.1).lineTo(1.9,7.7).lineTo(1.3,8.5).lineTo(0.4,5.7).closePath();
	this.shape_223.setTransform(-1848.6,5.4,1.14,1.14);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,6.4).curveTo(-2.5,5.5,-2.7,3.7).curveTo(-2.7,2.3,-3.1,0.4).curveTo(-3.5,-2.3,-4.4,-6).lineTo(-5.2,-8.9).lineTo(-2.1,-7.7).lineTo(1,-6.4).curveTo(2.7,-5.6,3.8,-4.2).curveTo(4.9,-2.7,5.1,-0.9).curveTo(5.4,0.9,4.9,2.6).curveTo(4.2,4.5,2.8,5.6).curveTo(1.4,6.7,0,7.5).lineTo(-2.9,8.9).closePath();
	this.shape_224.setTransform(-1841.2,25.2,1.14,1.14);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,7.3).lineTo(-4.5,6).lineTo(-6.4,4.9).lineTo(-7.2,4.3).lineTo(-7,4.3).lineTo(-5,3.2).curveTo(-2.3,1.5,-0.8,-0.4).curveTo(0.9,-2.4,1.9,-5.1).lineTo(2.2,-6.1).lineTo(2.6,-7.5).lineTo(4.7,-5.1).lineTo(6.6,-2.3).curveTo(7,-1.4,7.1,-0.5).lineTo(7.2,0.4).lineTo(7.2,1.4).curveTo(6.8,2.9,6.6,3.3).curveTo(6.2,4.1,5.6,5).lineTo(4.1,6.3).curveTo(3.6,6.7,2.4,7.2).curveTo(1.5,7.5,0.5,7.5).lineTo(0.2,7.5).curveTo(-0.5,7.5,-1.4,7.3).closePath();
	this.shape_225.setTransform(-1847.4,43.8,1.14,1.14);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#494A4E").beginStroke().moveTo(-12,21.4).curveTo(-17,16.2,-17,9).curveTo(-17,-0,-12,-12.4).curveTo(-6.3,-26.5,0,-26.5).curveTo(6.4,-26.5,12.1,-12.4).curveTo(17,-0,17,9).curveTo(17,16.3,12.1,21.4).curveTo(7.1,26.5,0,26.5).curveTo(-7,26.5,-12,21.4).closePath();
	this.shape_226.setTransform(-1862.7,19.8,1.14,1.14);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,16.5).lineTo(-1.7,-16.5).lineTo(1.7,-16.5).lineTo(1.7,16.5).closePath();
	this.shape_227.setTransform(-1862.7,51.3,1.14,1.14);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,8.4).curveTo(-1.2,3.2,-2.9,-0.6).curveTo(-4.9,-5.2,-7.1,-9.1).lineTo(-9.4,-12.7).lineTo(-7.9,-12.7).lineTo(0.4,-11.9).curveTo(3.1,-11.5,5.3,-9.7).curveTo(7.4,-8,8.4,-5.6).curveTo(9.5,-3.1,9.3,-0.4).curveTo(9.1,2.3,7.6,4.6).lineTo(4.8,8.7).lineTo(1.9,12.7).closePath();
	this.shape_228.setTransform(-1768.6,-22.3,1.14,1.14);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,11).lineTo(-3.9,9.5).curveTo(-3.8,8.2,-4,5.5).lineTo(-4.6,0.5).curveTo(-5.4,-4.2,-6.6,-8.9).lineTo(-7.8,-13.2).lineTo(1.4,-9.5).curveTo(3.9,-8.4,5.6,-6.2).curveTo(7.2,-4.1,7.6,-1.4).curveTo(8,1.3,7.2,3.9).curveTo(6.2,6.7,4.1,8.4).curveTo(2,10,-0,11.2).curveTo(-1.4,11.9,-3,12.7).lineTo(-4.3,13.2).closePath();
	this.shape_229.setTransform(-1757.6,7.2,1.14,1.14);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,10.8).lineTo(-3.6,10.2).curveTo(-5.1,9.7,-6.7,8.9).lineTo(-9.5,7.3).lineTo(-10.7,6.4).lineTo(-9.8,6).lineTo(-7.4,4.8).curveTo(-3.8,2.6,-1.2,-0.5).curveTo(1.3,-3.6,2.8,-7.6).lineTo(3.3,-9).lineTo(3.9,-11.1).lineTo(4.9,-10.1).lineTo(7,-7.6).lineTo(9.5,-3.8).lineTo(9.7,-3.4).curveTo(10.4,-2,10.6,-0.8).lineTo(10.7,0.6).lineTo(10.6,2.1).curveTo(10.3,3.9,9.8,4.8).curveTo(9.1,6.3,8.3,7.4).curveTo(6.9,8.8,6.1,9.3).curveTo(5,10.1,3.5,10.6).curveTo(2.3,11.1,0.7,11.1).lineTo(0.2,11.1).curveTo(-1,11.1,-2.1,10.8).closePath();
	this.shape_230.setTransform(-1766.9,34.9,1.14,1.14);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.7,4.6).curveTo(-9.2,2.3,-9.4,-0.4).curveTo(-9.5,-3.1,-8.5,-5.6).curveTo(-7.4,-8,-5.3,-9.7).curveTo(-3.2,-11.5,-0.5,-11.9).lineTo(7.8,-12.7).lineTo(9.4,-12.7).curveTo(8.4,-11.3,7.1,-9.1).curveTo(5.1,-5.7,2.9,-0.6).curveTo(1,3.7,-0.6,8.4).lineTo(-1.9,12.7).closePath();
	this.shape_231.setTransform(-1810.6,-22.3,1.14,1.14);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,11.2).lineTo(-2.8,9.4).lineTo(-4.1,8.4).curveTo(-6.3,6.7,-7.2,3.9).curveTo(-8.1,1.3,-7.6,-1.4).curveTo(-7.2,-4.1,-5.6,-6.2).curveTo(-4,-8.4,-1.5,-9.5).lineTo(7.8,-13.2).lineTo(6.6,-8.9).curveTo(5.4,-4.7,4.6,0.5).curveTo(4.1,3.2,4,5.5).curveTo(3.7,7.9,3.9,9.5).lineTo(4.3,13.2).curveTo(2.2,12.4,-0,11.2).closePath();
	this.shape_232.setTransform(-1821.7,7.2,1.14,1.14);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,11.1).curveTo(-2.2,11.1,-3.5,10.6).curveTo(-5,10.1,-6.1,9.3).curveTo(-7.2,8.5,-8.3,7.4).curveTo(-9.2,6.2,-9.8,4.8).curveTo(-10.3,3.9,-10.6,2.1).lineTo(-10.8,0.6).lineTo(-10.6,-0.8).curveTo(-10.4,-2,-9.8,-3.4).lineTo(-9,-4.8).lineTo(-7.1,-7.6).curveTo(-5.5,-9.6,-3.8,-11.1).lineTo(-3.3,-9).lineTo(-2.8,-7.6).curveTo(-1.3,-3.6,1.3,-0.5).curveTo(3.9,2.7,7.4,4.8).curveTo(8.3,5.4,9.8,6).lineTo(10.7,6.4).lineTo(9.6,7.3).lineTo(6.7,8.9).curveTo(5.2,9.7,3.5,10.2).lineTo(2,10.8).curveTo(1,11.1,-0.2,11.1).lineTo(-0.7,11.1).closePath();
	this.shape_233.setTransform(-1812.4,34.9,1.14,1.14);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,31.8).curveTo(-25.3,24.2,-25.3,13.4).curveTo(-25.3,7.7,-23.3,-0.9).curveTo(-21.2,-10.2,-17.9,-18.5).curveTo(-9.4,-39.4,-0,-39.4).curveTo(9.4,-39.4,17.9,-18.5).curveTo(21.2,-10.2,23.3,-0.9).curveTo(25.3,7.7,25.3,13.4).curveTo(25.3,24.2,17.9,31.8).curveTo(10.5,39.4,-0,39.5).curveTo(-10.5,39.4,-17.9,31.8).closePath();
	this.shape_234.setTransform(-1789.6,-0.8,1.14,1.14);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.6).lineTo(-2.5,-24.6).lineTo(2.5,-24.6).lineTo(2.5,24.6).closePath();
	this.shape_235.setTransform(-1789.6,46,1.14,1.14);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.3,26).curveTo(-21.7,19.6,-21.7,10.7).curveTo(-21.7,3.2,-10.8,-15.3).curveTo(-5.4,-24.6,-0,-32.3).lineTo(10.8,-15.3).curveTo(21.7,3.2,21.7,10.7).curveTo(21.7,19.6,15.3,26).curveTo(9,32.3,-0,32.3).curveTo(-9,32.3,-15.3,26).closePath();
	this.shape_236.setTransform(-2787.8,26,1.14,1.14);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.5).lineTo(-1.8,-17.5).lineTo(1.8,-17.5).lineTo(1.8,17.5).closePath();
	this.shape_237.setTransform(-2787.8,59.1,1.14,1.14);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1.1).lineTo(0.5,-1.1).lineTo(0.5,1).closePath();
	this.shape_238.setTransform(-1725.5,-32.7,1.14,1.14);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1).closePath();
	this.shape_239.setTransform(-1722.7,-32.7,1.14,1.14);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.2,-4.1).lineTo(2.1,4).closePath();
	this.shape_240.setTransform(-1727.4,-38.5,1.14,1.14);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_241.setTransform(-1725.6,-38.5,1.14,1.14);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_242.setTransform(-1729.9,-38.5,1.14,1.14);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_243.setTransform(-1722.8,-23.6,1.14,1.14);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_244.setTransform(-1737,-23.6,1.14,1.14);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1).closePath();
	this.shape_245.setTransform(-1729.9,-32.7,1.14,1.14);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_246.setTransform(-1729.9,-11.6,1.14,1.14);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_247.setTransform(-1729.9,-14.7,1.14,1.14);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_248.setTransform(-1729.9,69.8,1.14,1.14);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.1,-41.1).lineTo(2.1,41.1).closePath();
	this.shape_249.setTransform(-1729.9,32.1,1.14,1.14);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.8,-6.9).lineTo(0.8,6.9).closePath();
	this.shape_250.setTransform(-1729.9,-23.6,1.14,1.14);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-0.9,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_251.setTransform(-1729.9,-23.6,1.14,1.14);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,0).curveTo(-12.4,-5.2,-8.8,-8.7).curveTo(-5.2,-12.4,-0,-12.4).curveTo(5.1,-12.4,8.8,-8.7).curveTo(12.4,-5.2,12.4,0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.1,12.4,-0,12.4).curveTo(-5.2,12.4,-8.8,8.8).closePath();
	this.shape_252.setTransform(-1587.1,-47.4,1.14,1.14);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.9,9.3).curveTo(-19.8,9.3,-22.5,6.6).curveTo(-25.2,3.9,-25.2,0).curveTo(-25.2,-3.9,-22.5,-6.6).curveTo(-19.8,-9.3,-15.9,-9.3).lineTo(15.9,-9.3).curveTo(19.8,-9.3,22.5,-6.6).curveTo(25.2,-3.9,25.2,0).curveTo(25.2,3.9,22.5,6.6).curveTo(19.8,9.3,15.9,9.3).closePath();
	this.shape_253.setTransform(-1581.3,-40.8,1.14,1.14);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.2,4.2).curveTo(-5.9,2.5,-5.9,0).curveTo(-5.9,-2.4,-4.2,-4.2).curveTo(-2.4,-5.9,0,-5.9).curveTo(2.5,-5.9,4.2,-4.2).curveTo(5.9,-2.4,5.9,0).curveTo(5.9,2.5,4.2,4.2).curveTo(2.5,5.9,0,5.9).curveTo(-2.4,5.9,-4.2,4.2).closePath();
	this.shape_254.setTransform(-824.6,-110.9,1.14,1.14);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-7.1,7.2).curveTo(-10.1,4.2,-10.1,0).curveTo(-10.1,-4.2,-7.1,-7.1).curveTo(-4.2,-10.1,0,-10.1).curveTo(4.2,-10.1,7.2,-7.1).curveTo(10.1,-4.2,10.1,0).curveTo(10.1,4.2,7.2,7.2).curveTo(4.2,10.1,0,10.1).curveTo(-4.2,10.1,-7.1,7.2).closePath();
	this.shape_255.setTransform(-809.9,-109,1.14,1.14);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.5,7.9).curveTo(-16.8,7.9,-19.1,5.6).curveTo(-21.4,3.3,-21.4,-0).curveTo(-21.4,-3.3,-19.1,-5.6).curveTo(-16.8,-7.9,-13.5,-7.9).lineTo(13.5,-7.9).curveTo(16.8,-7.9,19.1,-5.6).curveTo(21.4,-3.3,21.4,-0).curveTo(21.4,3.3,19.1,5.6).curveTo(16.8,7.9,13.5,7.9).closePath();
	this.shape_256.setTransform(-815.7,-101.9,1.14,1.14);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.2,5.2).curveTo(-7.3,3,-7.3,-0).curveTo(-7.3,-3,-5.2,-5.2).curveTo(-3,-7.3,0,-7.3).curveTo(3,-7.3,5.2,-5.2).curveTo(7.3,-3,7.3,-0).curveTo(7.3,3,5.2,5.2).curveTo(3,7.3,0,7.3).curveTo(-3,7.3,-5.2,5.2).closePath();
	this.shape_257.setTransform(-1364.2,-95.6,1.14,1.14);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,8.9).curveTo(-12.5,5.2,-12.5,0).curveTo(-12.5,-5.2,-8.9,-8.9).curveTo(-5.2,-12.5,0,-12.5).curveTo(5.2,-12.5,8.9,-8.9).curveTo(12.5,-5.2,12.5,0).curveTo(12.5,5.2,8.9,8.9).curveTo(5.2,12.5,0,12.5).curveTo(-5.2,12.5,-8.9,8.9).closePath();
	this.shape_258.setTransform(-1382.4,-93.3,1.14,1.14);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.7,9.7).curveTo(-20.8,9.7,-23.6,6.9).curveTo(-26.4,4.1,-26.4,0).curveTo(-26.4,-4,-23.6,-6.9).curveTo(-20.8,-9.8,-16.7,-9.8).lineTo(16.7,-9.8).curveTo(20.8,-9.8,23.6,-6.9).curveTo(26.4,-4,26.4,0).curveTo(26.4,4.1,23.6,6.9).curveTo(20.8,9.7,16.7,9.7).closePath();
	this.shape_259.setTransform(-1375.1,-84.5,1.14,1.14);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_260.setTransform(-1354.3,-33.8,1.14,1.14);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1).lineTo(1.2,-1).lineTo(1.2,1).closePath();
	this.shape_261.setTransform(-1351.5,-33.8,1.14,1.14);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#494A4E").beginStroke().moveTo(1.1,4.1).lineTo(-2.1,-4).lineTo(2.1,4.1).closePath();
	this.shape_262.setTransform(-1356.2,-39.6,1.14,1.14);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4.1).lineTo(-3.7,-4).lineTo(3.7,4.1).closePath();
	this.shape_263.setTransform(-1354.4,-39.6,1.14,1.14);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4.1).lineTo(0,-4).lineTo(8.8,4.1).closePath();
	this.shape_264.setTransform(-1358.6,-39.6,1.14,1.14);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_265.setTransform(-1351.6,-24.8,1.14,1.14);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_266.setTransform(-1365.7,-24.8,1.14,1.14);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1).lineTo(8.7,-1).lineTo(8.7,1).closePath();
	this.shape_267.setTransform(-1358.6,-33.8,1.14,1.14);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_268.setTransform(-1358.6,-12.7,1.14,1.14);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_269.setTransform(-1358.6,-15.9,1.14,1.14);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_270.setTransform(-1358.6,68.6,1.14,1.14);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,41.1).lineTo(-2.1,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_271.setTransform(-1358.6,31,1.14,1.14);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_272.setTransform(-1358.6,-24.8,1.14,1.14);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-1,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_273.setTransform(-1358.6,-24.8,1.14,1.14);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_274.setTransform(-994,-31.7,1.14,1.14);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1.1).closePath();
	this.shape_275.setTransform(-991.3,-31.7,1.14,1.14);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.1,-4.1).lineTo(2.2,4).closePath();
	this.shape_276.setTransform(-995.9,-37.5,1.14,1.14);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#494A4E").beginStroke().moveTo(1.4,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_277.setTransform(-994.1,-37.5,1.14,1.14);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_278.setTransform(-998.4,-37.5,1.14,1.14);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_279.setTransform(-991.3,-22.7,1.14,1.14);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_280.setTransform(-1005.4,-22.7,1.14,1.14);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1.1).closePath();
	this.shape_281.setTransform(-998.4,-31.7,1.14,1.14);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_282.setTransform(-998.4,-10.7,1.14,1.14);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_283.setTransform(-998.4,-13.8,1.14,1.14);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.5).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.5).closePath();
	this.shape_284.setTransform(-998.4,70.7,1.14,1.14);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_285.setTransform(-998.4,33.1,1.14,1.14);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_286.setTransform(-998.4,-22.7,1.14,1.14);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-4.4,-7.6,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_287.setTransform(-998.4,-22.7,1.14,1.14);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,5.4).curveTo(-4.1,5.5,-4.6,4.8).curveTo(-4.9,4.3,-4.9,3.5).curveTo(-5,1.8,-3.6,-0.4).curveTo(-2.1,-2.8,-0.3,-4.1).curveTo(1.5,-5.5,2.9,-5.5).lineTo(3.4,-5.5).curveTo(4.2,-5.4,4.5,-4.8).curveTo(4.9,-4.3,4.9,-3.5).curveTo(4.9,-1.8,3.6,0.4).curveTo(2.1,3,0.4,4.2).curveTo(-1.5,5.4,-2.9,5.4).closePath();
	this.shape_288.setTransform(-888.7,74.5,1.14,1.14);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,4).curveTo(-0.1,4,-1.3,2.7).curveTo(-2.4,1.3,-2.8,-0.2).curveTo(-3.1,-1.6,-3.1,-2.6).curveTo(-2.9,-4,-1.8,-4).lineTo(-0.6,-4).curveTo(0.2,-4,1.3,-2.7).curveTo(2.3,-1.3,2.8,0.3).curveTo(3.7,4,1.8,4).closePath();
	this.shape_289.setTransform(-820.4,69.9,1.14,1.14);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#494A4E").beginStroke().moveTo(0.2,7.5).curveTo(-1.4,6.8,-2.3,4.5).curveTo(-3.6,1.6,-3.6,-1.1).lineTo(-3.6,-1.7).curveTo(-3.6,-4.9,-2.7,-6.3).curveTo(-2.3,-7,-1.7,-7.4).curveTo(-1,-7.8,-0.3,-7.5).curveTo(1.2,-6.9,2.3,-4.5).curveTo(3.6,-1.6,3.6,1.1).lineTo(3.6,1.7).curveTo(3.6,4.9,2.7,6.4).curveTo(2.3,7.1,1.7,7.4).curveTo(1.3,7.7,0.9,7.7).lineTo(0.2,7.5).closePath();
	this.shape_290.setTransform(-738.7,66.3,1.14,1.14);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#494A4E").beginStroke().moveTo(0.1,8.1).curveTo(-1.4,8.1,-2.7,5.9).curveTo(-4,3.5,-4.1,0.2).curveTo(-4.2,-3.7,-3.3,-5.6).curveTo(-2.1,-8.2,-0.8,-8.2).lineTo(-0.1,-8.2).curveTo(1.5,-8.1,2.7,-5.9).curveTo(4,-3.5,4.1,-0.2).curveTo(4.2,3.7,3.3,5.6).curveTo(2.2,8.1,0.8,8.1).closePath();
	this.shape_291.setTransform(-714.9,56,1.14,1.14);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_292.setTransform(-1428,-2.8,1.14,1.14);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(-12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_293.setTransform(-1400,-2.8,1.14,1.14);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.6,38.7).lineTo(0,-38.7).lineTo(24.6,38.7).closePath();
	this.shape_294.setTransform(-1414,-2.8,1.14,1.14);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.1).lineTo(-2.5,-24.1).lineTo(2.5,-24.1).lineTo(2.5,24.1).closePath();
	this.shape_295.setTransform(-1414,48.3,1.14,1.14);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.3).lineTo(-9,-5.2).curveTo(-6,-10.3,0,-10.3).curveTo(6,-10.3,9,-5.2).lineTo(17.9,10.3).closePath();
	this.shape_296.setTransform(-1468.7,57.9,1.14,1.14);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.7).lineTo(-8.4,-5.8).curveTo(-5.6,-10.7,-0,-10.7).curveTo(5.6,-10.7,8.4,-5.8).lineTo(17.9,10.7).closePath();
	this.shape_297.setTransform(-745.9,57.5,1.14,1.14);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,-53.3).lineTo(-12.3,-45).curveTo(-5.6,-34.8,-0,-25.3).curveTo(17.9,5.2,17.9,17.6).curveTo(17.8,32.4,7.4,42.9).curveTo(-3.1,53.3,-17.9,53.3).closePath();
	this.shape_298.setTransform(-1120.9,-18.4,1.14,1.14);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.4,42.9).curveTo(-17.9,32.4,-17.9,17.6).curveTo(-17.9,5.2,0,-25.3).curveTo(8.9,-40.5,17.9,-53.3).lineTo(17.9,53.3).curveTo(3.1,53.3,-7.4,42.9).closePath();
	this.shape_299.setTransform(-1161.6,-18.4,1.14,1.14);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,28.8).lineTo(-2.9,-28.8).lineTo(2.9,-28.8).lineTo(2.9,28.8).closePath();
	this.shape_300.setTransform(-1141.2,36.1,1.14,1.14);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.6,4.9).curveTo(-13.5,5,-16.2,2.2).curveTo(-19,-0.5,-19,-4.4).lineTo(-18.9,-5).lineTo(19,-5).lineTo(19,-4.4).curveTo(19,-0.5,16.3,2.2).curveTo(13.5,5,9.6,4.9).closePath();
	this.shape_301.setTransform(-937.4,-1.3,1.14,1.14);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#494A4E").beginStroke().moveTo(-18.9,4.4).curveTo(-18.8,0.7,-16.1,-1.9).curveTo(-13.3,-4.5,-9.6,-4.5).lineTo(9.6,-4.5).curveTo(13.4,-4.5,16.1,-1.9).curveTo(18.8,0.7,19,4.4).closePath();
	this.shape_302.setTransform(-937.4,-12.1,1.14,1.14);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.1,3.7).curveTo(-9.9,3.7,-12,1.7).curveTo(-14,-0.4,-14.1,-3.3).lineTo(-14.1,-3.7).lineTo(14.1,-3.7).lineTo(14.1,-3.3).curveTo(14,-0.4,12,1.7).curveTo(10,3.7,7.1,3.7).closePath();
	this.shape_303.setTransform(-910.5,-66.4,1.14,1.14);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.1,3.3).curveTo(-13.8,0.6,-11.8,-1.3).curveTo(-9.9,-3.3,-7.1,-3.3).lineTo(7.1,-3.3).curveTo(9.8,-3.3,11.8,-1.3).curveTo(13.9,0.6,14.1,3.3).closePath();
	this.shape_304.setTransform(-910.5,-74.3,1.14,1.14);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.3,7.5).curveTo(-19.3,7.5,-23.5,3.3).curveTo(-27.7,-0.9,-27.8,-6.9).lineTo(-27.7,-7.5).lineTo(27.7,-7.5).lineTo(27.8,-6.9).curveTo(27.8,-0.9,23.5,3.3).curveTo(19.2,7.5,13.3,7.5).closePath();
	this.shape_305.setTransform(-949.2,-30.5,1.14,1.14);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.7,6.9).curveTo(-27.4,1.1,-23.3,-2.9).curveTo(-19.1,-6.9,-13.3,-6.9).lineTo(13.3,-6.9).curveTo(19.1,-6.9,23.3,-2.9).curveTo(27.5,1.1,27.7,6.9).closePath();
	this.shape_306.setTransform(-949.2,-46.9,1.14,1.14);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.1,5.2).curveTo(-24.4,5.2,-27.5,2.2).curveTo(-30.6,-0.9,-30.7,-5.2).lineTo(30.6,-5.2).curveTo(30.6,-0.9,27.6,2.2).curveTo(24.5,5.2,20.2,5.2).closePath();
	this.shape_307.setTransform(-894.5,-42.1,1.14,1.14);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.7,5.3).lineTo(-30.7,5.2).curveTo(-30.7,0.9,-27.5,-2.2).curveTo(-24.5,-5.3,-20.1,-5.3).lineTo(20.2,-5.3).curveTo(24.5,-5.3,27.6,-2.2).curveTo(30.7,0.9,30.6,5.2).lineTo(30.6,5.3).closePath();
	this.shape_308.setTransform(-894.5,-54,1.14,1.14);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.7,6.6).curveTo(-34.1,1,-30,-2.8).curveTo(-25.8,-6.6,-20.2,-6.6).lineTo(20.2,-6.6).curveTo(25.8,-6.6,30,-2.8).curveTo(34.1,1,34.7,6.6).closePath();
	this.shape_309.setTransform(-875.3,-26.1,1.14,1.14);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.2,8).curveTo(-26.2,8,-30.5,3.7).curveTo(-34.7,-0.6,-34.7,-6.6).lineTo(-34.7,-8).lineTo(34.7,-8).lineTo(34.7,-6.6).curveTo(34.7,-0.6,30.5,3.7).curveTo(26.2,8,20.2,8).closePath();
	this.shape_310.setTransform(-875.3,-9.5,1.14,1.14);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,17.6).lineTo(-2.4,-17.6).lineTo(2.4,-17.6).lineTo(2.4,17.6).closePath();
	this.shape_311.setTransform(-903.6,56,1.14,1.14);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#494A4E").beginStroke().moveTo(-29.6,-29.8).lineTo(-25.6,-32.4).lineTo(9.2,22.3).lineTo(25.2,-13.2).lineTo(29.6,-11.3).lineTo(10,32.4).closePath();
	this.shape_312.setTransform(-914.6,4.7,1.14,1.14);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,47.5).curveTo(-8.2,46.8,-9.4,45.9).curveTo(-10.7,45,-12,43.6).curveTo(-13,42.3,-13.8,40.6).curveTo(-14.4,39.7,-14.8,37.4).curveTo(-14.9,36.6,-14.9,35.8).lineTo(-14.7,34).curveTo(-14.5,32.5,-13.7,31).lineTo(-12.8,29.4).curveTo(-11.7,27.5,-10.6,26).curveTo(-9.2,24.3,-7.4,22.5).lineTo(-7.7,21.5).curveTo(-9.6,20.9,-11.9,19.6).curveTo(-13.4,18.7,-15.2,17.4).lineTo(-16.7,16.2).curveTo(-19.3,14.2,-20.4,11).curveTo(-21.4,7.9,-20.9,4.8).curveTo(-20.4,1.7,-18.5,-0.9).curveTo(-16.6,-3.4,-13.6,-4.7).lineTo(-5,-8.3).lineTo(-4.2,-10.9).lineTo(-9.5,-18.5).curveTo(-11.3,-21.2,-11.5,-24.5).curveTo(-11.7,-27.5,-10.5,-30.5).curveTo(-9.2,-33.3,-6.8,-35.3).curveTo(-4.2,-37.4,-1.1,-37.9).lineTo(4.7,-38.6).lineTo(8,-38.8).curveTo(14.5,-48.1,21.1,-48).lineTo(21.1,44.5).curveTo(11.5,44.5,3.7,38.7).curveTo(4.8,39.6,6.4,40.5).curveTo(7,41,9.2,42.1).lineTo(10,42.4).lineTo(10.3,42.5).lineTo(8.9,43.5).lineTo(5.5,45.5).lineTo(1.9,47).lineTo(0.1,47.6).curveTo(-1.3,48,-3.1,48.1).curveTo(-4.8,48,-6.4,47.5).closePath();
	this.shape_313.setTransform(-1518.6,-16.8,1.14,1.14);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,47.6).lineTo(-1.9,47).lineTo(-5.5,45.5).lineTo(-8.9,43.5).lineTo(-10.3,42.5).lineTo(-10,42.4).lineTo(-9.2,42.1).lineTo(-7.9,41.4).lineTo(-6.4,40.5).curveTo(-4.9,39.7,-3.5,38.6).curveTo(-11.4,44.5,-21.1,44.5).lineTo(-21.1,-48).curveTo(-14.5,-48.1,-8,-38.8).lineTo(-4.7,-38.6).lineTo(1.1,-37.9).curveTo(4.3,-37.4,6.8,-35.3).curveTo(9.2,-33.3,10.5,-30.5).curveTo(11.7,-27.6,11.5,-24.5).curveTo(11.3,-21.3,9.5,-18.5).lineTo(6.2,-13.7).lineTo(4.2,-10.9).lineTo(5,-8.3).lineTo(8.2,-7).lineTo(13.6,-4.7).curveTo(16.6,-3.4,18.5,-0.9).curveTo(20.4,1.7,20.9,4.8).curveTo(21.4,7.9,20.4,11).curveTo(19.3,14.2,16.7,16.2).curveTo(14.3,18.2,11.9,19.6).curveTo(10,20.6,7.7,21.6).lineTo(7.4,22.4).curveTo(9.6,24.8,10.6,26).curveTo(11.7,27.5,12.8,29.4).lineTo(13.7,31).curveTo(14.5,32.5,14.8,34).curveTo(14.9,34.9,14.9,35.8).curveTo(14.9,36.6,14.8,37.4).curveTo(14.4,39.7,13.8,40.6).curveTo(13,42.3,12,43.6).curveTo(10.7,44.9,9.5,45.9).curveTo(8.1,46.9,6.4,47.5).curveTo(4.9,48,3.2,48.1).curveTo(1.3,48,-0.1,47.6).closePath();
	this.shape_314.setTransform(-1470.6,-16.8,1.14,1.14);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,5.4).curveTo(-10.8,2.7,-11,-0.5).curveTo(-11.2,-3.6,-10,-6.5).curveTo(-8.7,-9.4,-6.3,-11.4).curveTo(-3.7,-13.4,-0.6,-13.9).lineTo(9.2,-14.9).lineTo(11,-14.8).curveTo(9.8,-13.3,8.3,-10.7).curveTo(5.8,-6.5,3.3,-0.7).curveTo(1.3,4,-0.7,9.9).lineTo(-2.3,14.9).closePath();
	this.shape_315.setTransform(-1519.2,-44,1.14,1.14);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,13.1).curveTo(-1.5,12.3,-3.3,11).lineTo(-4.8,9.8).curveTo(-7.4,7.8,-8.5,4.6).curveTo(-9.5,1.5,-9,-1.6).curveTo(-8.5,-4.8,-6.6,-7.3).curveTo(-4.7,-9.8,-1.7,-11.1).lineTo(3.7,-13.4).curveTo(6.4,-14.5,9.1,-15.5).lineTo(7.7,-10.4).curveTo(6.2,-4.6,5.4,0.7).curveTo(4.9,3.6,4.6,6.5).curveTo(4.4,9.1,4.6,11.1).lineTo(4.7,12.9).lineTo(5.1,15.5).curveTo(2.6,14.6,-0,13.1).closePath();
	this.shape_316.setTransform(-1532.2,-9.5,1.14,1.14);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,12.5).curveTo(-5.9,11.8,-7.1,11).curveTo(-8.4,10,-9.7,8.6).curveTo(-10.7,7.3,-11.5,5.7).curveTo(-12,4.7,-12.4,2.4).curveTo(-12.6,1.6,-12.6,0.8).lineTo(-12.4,-0.9).curveTo(-12.2,-2.5,-11.4,-4).lineTo(-10.5,-5.6).curveTo(-9.4,-7.4,-8.3,-8.9).curveTo(-6.4,-11.3,-4.5,-13.1).lineTo(-3.3,-8.9).curveTo(-1.6,-4.3,1.4,-0.6).curveTo(4.7,3.2,8.7,5.6).curveTo(9.3,6,11.5,7.1).lineTo(12.3,7.5).lineTo(12.6,7.6).lineTo(11.2,8.5).lineTo(7.8,10.5).lineTo(4.2,12).lineTo(2.4,12.7).curveTo(1,13.1,-0.8,13.1).curveTo(-2.5,13.1,-4.1,12.5).closePath();
	this.shape_317.setTransform(-1521.2,23.1,1.14,1.14);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#494A4E").beginStroke().moveTo(0.7,9.9).curveTo(-1.3,4,-3.4,-0.7).curveTo(-5.9,-6.5,-8.4,-10.7).lineTo(-11,-14.8).lineTo(-9.2,-14.9).lineTo(0.5,-13.9).curveTo(3.7,-13.4,6.3,-11.4).curveTo(8.7,-9.4,9.9,-6.5).curveTo(11.2,-3.6,11,-0.5).curveTo(10.7,2.7,9,5.4).lineTo(5.7,10.2).lineTo(2.3,14.9).closePath();
	this.shape_318.setTransform(-1469.9,-44,1.14,1.14);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.7,12.9).lineTo(-4.6,11.1).curveTo(-4.4,9.5,-4.7,6.5).curveTo(-4.9,3.9,-5.4,0.7).curveTo(-6.2,-4.2,-7.7,-10.4).lineTo(-9.1,-15.5).lineTo(-3.7,-13.4).lineTo(1.7,-11.1).curveTo(4.6,-9.8,6.6,-7.3).curveTo(8.4,-4.8,8.9,-1.6).curveTo(9.4,1.5,8.4,4.6).curveTo(7.3,7.8,4.8,9.8).curveTo(2.4,11.7,-0,13.1).curveTo(-1.6,14,-3.5,14.8).lineTo(-5.1,15.5).closePath();
	this.shape_319.setTransform(-1457,-9.5,1.14,1.14);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,12.7).lineTo(-4.2,12).lineTo(-7.8,10.5).lineTo(-11.2,8.5).lineTo(-12.6,7.6).lineTo(-12.3,7.5).lineTo(-11.5,7.1).lineTo(-10.3,6.5).lineTo(-8.7,5.6).curveTo(-4.5,3.1,-1.5,-0.6).curveTo(1.6,-4.3,3.3,-8.9).lineTo(3.9,-10.6).lineTo(4.5,-13.1).lineTo(5.7,-11.9).curveTo(7.2,-10.4,8.3,-8.9).curveTo(9.4,-7.4,10.4,-5.6).lineTo(11.4,-4).curveTo(12.1,-2.5,12.4,-0.9).curveTo(12.6,-0.1,12.6,0.8).curveTo(12.6,1.6,12.4,2.4).curveTo(12,4.7,11.5,5.7).curveTo(10.7,7.3,9.7,8.6).curveTo(8.4,10,7.2,11).curveTo(5.8,11.9,4.1,12.5).curveTo(2.6,13.1,0.9,13.1).curveTo(-1,13.1,-2.4,12.7).closePath();
	this.shape_320.setTransform(-1467.9,23.1,1.14,1.14);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#494A4E").beginStroke().moveTo(-21,37.3).curveTo(-29.7,28.3,-29.7,15.7).curveTo(-29.7,9.1,-27.4,-1.2).curveTo(-24.9,-11.9,-21,-21.7).curveTo(-11.1,-46.3,-0,-46.3).curveTo(11.1,-46.3,21,-21.7).curveTo(24.9,-11.9,27.4,-1.2).curveTo(29.7,9.1,29.7,15.7).curveTo(29.7,28.3,21,37.3).curveTo(12.3,46.3,-0,46.3).curveTo(-12.3,46.3,-21,37.3).closePath();
	this.shape_321.setTransform(-1494.6,-18.8,1.14,1.14);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#494A4E").beginStroke().moveTo(-3,28.8).lineTo(-3,-28.8).lineTo(3,-28.8).lineTo(3,28.8).closePath();
	this.shape_322.setTransform(-1494.6,36.1,1.14,1.14);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,23.8).curveTo(-11,17.4,-11,8.4).curveTo(-11,2.1,-7.8,-3.1).curveTo(-4.6,-8.2,0.6,-11).curveTo(-1.5,-14.3,-1.5,-17.9).curveTo(-1.5,-23.1,2.2,-26.7).curveTo(5.8,-30.3,11,-30.3).lineTo(11,30.3).curveTo(1.9,30.3,-4.6,23.8).closePath();
	this.shape_323.setTransform(-1297.1,19.1,1.14,1.14);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,5.6).curveTo(-4,3.2,-4,-0).curveTo(-4,-3.3,-1.6,-5.6).curveTo(0.7,-7.9,4,-7.9).lineTo(4,7.9).curveTo(0.7,7.9,-1.6,5.6).closePath();
	this.shape_324.setTransform(-1289.1,-25.9,1.14,1.14);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.6,15.5).curveTo(-22,9.1,-21.9,0).curveTo(-22,-9.1,-15.6,-15.6).curveTo(-9.1,-22,0,-21.9).curveTo(9.1,-22,15.5,-15.6).curveTo(22,-9.1,22,0).curveTo(22,9.1,15.5,15.5).curveTo(9.1,22,0,22).curveTo(-9.1,22,-15.6,15.5).closePath();
	this.shape_325.setTransform(-1284.6,28.6,1.14,1.14);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.6,5.6).curveTo(-7.9,3.2,-7.9,-0).curveTo(-7.9,-3.3,-5.6,-5.6).curveTo(-3.2,-7.9,0,-7.9).curveTo(3.3,-7.9,5.6,-5.6).curveTo(7.9,-3.3,7.9,-0).curveTo(7.9,3.2,5.6,5.6).curveTo(3.3,7.9,0,7.9).curveTo(-3.2,7.9,-5.6,5.6).closePath();
	this.shape_326.setTransform(-1284.7,-25.9,1.14,1.14);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,-0).curveTo(-12.4,-5.2,-8.8,-8.8).curveTo(-5.1,-12.4,0,-12.4).curveTo(5.2,-12.4,8.8,-8.8).curveTo(12.4,-5.2,12.4,-0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.2,12.4,0,12.4).curveTo(-5.1,12.4,-8.8,8.8).closePath();
	this.shape_327.setTransform(-1284.7,-1.3,1.14,1.14);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.7).lineTo(-1.8,-17.7).lineTo(1.8,-17.7).lineTo(1.8,17.7).closePath();
	this.shape_328.setTransform(-1284.6,49.7,1.14,1.14);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#494A4E").beginStroke().moveTo(-523.2,5).curveTo(-525.9,5,-527.7,3.6).curveTo(-529.6,2.1,-529.6,-0).curveTo(-529.6,-2.1,-527.7,-3.5).curveTo(-525.9,-5,-523.2,-5.1).lineTo(523.2,-5.1).curveTo(525.9,-5,527.7,-3.5).curveTo(529.6,-2.1,529.6,-0).curveTo(529.6,2.1,527.7,3.6).curveTo(525.9,5,523.2,5).closePath();
	this.shape_329.setTransform(-1158.9,75.8,1.14,1.14);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.5,12.5).curveTo(-17.7,7.3,-17.7,-0).curveTo(-17.7,-7.3,-12.5,-12.5).curveTo(-7.3,-17.7,-0,-17.7).curveTo(7.4,-17.7,12.6,-12.5).curveTo(17.7,-7.3,17.7,-0).curveTo(17.7,7.3,12.6,12.5).curveTo(7.4,17.7,-0,17.7).curveTo(-7.3,17.7,-12.5,12.5).closePath();
	this.shape_330.setTransform(-1082.2,56.2,1.14,1.14);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.7,5.3,-12.7,-0).curveTo(-12.7,-5.3,-9,-9).curveTo(-5.3,-12.8,-0,-12.8).curveTo(5.3,-12.8,9,-9).curveTo(12.7,-5.3,12.7,-0).curveTo(12.7,5.3,9,9).curveTo(5.3,12.8,-0,12.8).curveTo(-5.3,12.8,-9,9).closePath();
	this.shape_331.setTransform(-1027.1,56.5,1.14,1.14);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.6,16.6).curveTo(-23.5,9.8,-23.6,-0).curveTo(-23.5,-9.8,-16.6,-16.7).curveTo(-9.8,-23.5,0,-23.5).curveTo(9.8,-23.5,16.7,-16.7).curveTo(23.5,-9.8,23.5,-0).curveTo(23.5,9.8,16.7,16.6).curveTo(9.8,23.5,0,23.6).curveTo(-9.8,23.5,-16.6,16.6).closePath();
	this.shape_332.setTransform(-1054,49.5,1.14,1.14);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,-0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,-0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_333.setTransform(-862.7,62.4,1.14,1.14);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_334.setTransform(-831.8,58.6,1.14,1.14);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_335.setTransform(-971.7,62.4,1.14,1.14);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_336.setTransform(-940.7,58.6,1.14,1.14);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.9,21.9).lineTo(0,-21.9).lineTo(13.9,21.9).closePath();
	this.shape_337.setTransform(-1674.6,23.7,1.14,1.14);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,13.6).lineTo(-1.4,-13.6).lineTo(1.4,-13.6).lineTo(1.4,13.6).closePath();
	this.shape_338.setTransform(-1674.6,52.5,1.14,1.14);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,3.1).curveTo(-6.2,1.5,-6.3,-0.3).curveTo(-6.4,-2.1,-5.7,-3.7).curveTo(-5,-5.4,-3.6,-6.5).curveTo(-2.2,-7.7,-0.3,-8).lineTo(5.3,-8.5).lineTo(6.3,-8.5).curveTo(5.6,-7.6,4.8,-6.1).curveTo(3.2,-3.4,1.9,-0.4).curveTo(0.5,2.8,-0.4,5.7).lineTo(-1.3,8.5).closePath();
	this.shape_339.setTransform(-695.3,5.4,1.14,1.14);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#494A4E").beginStroke().moveTo(0,7.5).lineTo(-2.8,5.6).curveTo(-4.2,4.5,-4.8,2.6).curveTo(-5.4,0.9,-5.1,-0.9).curveTo(-4.8,-2.7,-3.8,-4.2).curveTo(-2.7,-5.6,-1,-6.4).lineTo(5.2,-8.9).lineTo(4.4,-6).curveTo(3.7,-3,3.1,0.4).lineTo(2.7,3.7).curveTo(2.5,5.1,2.6,6.4).lineTo(2.7,7.4).lineTo(2.9,8.9).curveTo(1.5,8.3,0,7.5).closePath();
	this.shape_340.setTransform(-702.7,25.2,1.14,1.14);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,7.5).curveTo(-1.4,7.5,-2.3,7.2).curveTo(-3.6,6.6,-4.1,6.3).curveTo(-4.8,5.8,-5.5,5).curveTo(-6.2,4.1,-6.6,3.3).curveTo(-6.9,2.5,-7.1,1.4).lineTo(-7.2,0.4).lineTo(-7.1,-0.5).curveTo(-7,-1.5,-6.5,-2.3).lineTo(-6,-3.2).curveTo(-5.5,-4.2,-4.7,-5.1).curveTo(-3.7,-6.4,-2.6,-7.5).lineTo(-1.9,-5.1).curveTo(-1,-2.5,0.8,-0.4).curveTo(2.5,1.7,5,3.2).lineTo(6.6,4.1).lineTo(7.1,4.3).lineTo(7.2,4.3).lineTo(4.5,6).curveTo(3.5,6.5,2.4,6.9).lineTo(1.4,7.3).curveTo(0.5,7.5,-0.2,7.5).lineTo(-0.5,7.5).closePath();
	this.shape_341.setTransform(-696.5,43.8,1.14,1.14);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#494A4E").beginStroke().moveTo(0.4,5.7).curveTo(-0.7,2.3,-1.9,-0.4).curveTo(-3.4,-3.9,-4.8,-6.2).lineTo(-6.3,-8.5).lineTo(-5.3,-8.5).lineTo(0.3,-8).curveTo(2.1,-7.7,3.6,-6.6).curveTo(5,-5.4,5.7,-3.8).curveTo(6.4,-2.1,6.3,-0.3).curveTo(6.2,1.5,5.1,3.1).lineTo(1.9,7.7).lineTo(1.3,8.5).lineTo(0.4,5.7).closePath();
	this.shape_342.setTransform(-667.1,5.4,1.14,1.14);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,6.4).curveTo(-2.5,5.5,-2.7,3.7).curveTo(-2.7,2.3,-3.1,0.4).curveTo(-3.5,-2.3,-4.4,-6).lineTo(-5.2,-8.9).lineTo(-2.1,-7.7).lineTo(1,-6.4).curveTo(2.7,-5.6,3.8,-4.2).curveTo(4.9,-2.7,5.1,-0.9).curveTo(5.4,0.9,4.9,2.6).curveTo(4.2,4.5,2.8,5.6).curveTo(1.4,6.7,0,7.5).lineTo(-2.9,8.9).closePath();
	this.shape_343.setTransform(-659.7,25.2,1.14,1.14);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,7.3).lineTo(-4.5,6).lineTo(-6.4,4.9).lineTo(-7.2,4.3).lineTo(-7,4.3).lineTo(-5,3.2).curveTo(-2.3,1.5,-0.8,-0.4).curveTo(0.9,-2.4,1.9,-5.1).lineTo(2.2,-6.1).lineTo(2.6,-7.5).lineTo(4.7,-5.1).lineTo(6.6,-2.3).curveTo(7,-1.4,7.1,-0.5).lineTo(7.2,0.4).lineTo(7.2,1.4).curveTo(6.8,2.9,6.6,3.3).curveTo(6.2,4.1,5.6,5).lineTo(4.1,6.3).curveTo(3.6,6.7,2.4,7.2).curveTo(1.5,7.5,0.5,7.5).lineTo(0.2,7.5).curveTo(-0.5,7.5,-1.4,7.3).closePath();
	this.shape_344.setTransform(-665.9,43.8,1.14,1.14);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#494A4E").beginStroke().moveTo(-12,21.4).curveTo(-17,16.2,-17,9).curveTo(-17,-0,-12,-12.4).curveTo(-6.3,-26.5,0,-26.5).curveTo(6.4,-26.5,12.1,-12.4).curveTo(17,-0,17,9).curveTo(17,16.3,12.1,21.4).curveTo(7.1,26.5,0,26.5).curveTo(-7,26.5,-12,21.4).closePath();
	this.shape_345.setTransform(-681.2,19.8,1.14,1.14);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,16.5).lineTo(-1.7,-16.5).lineTo(1.7,-16.5).lineTo(1.7,16.5).closePath();
	this.shape_346.setTransform(-681.2,51.3,1.14,1.14);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,8.4).curveTo(-1.2,3.2,-2.9,-0.6).curveTo(-4.9,-5.2,-7.1,-9.1).lineTo(-9.4,-12.7).lineTo(-7.9,-12.7).lineTo(0.4,-11.9).curveTo(3.1,-11.5,5.3,-9.7).curveTo(7.4,-8,8.4,-5.6).curveTo(9.5,-3.1,9.3,-0.4).curveTo(9.1,2.3,7.6,4.6).lineTo(4.8,8.7).lineTo(1.9,12.7).closePath();
	this.shape_347.setTransform(-587.1,-22.3,1.14,1.14);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,11).lineTo(-3.9,9.5).curveTo(-3.8,8.2,-4,5.5).lineTo(-4.6,0.5).curveTo(-5.4,-4.2,-6.6,-8.9).lineTo(-7.8,-13.2).lineTo(1.4,-9.5).curveTo(3.9,-8.4,5.6,-6.2).curveTo(7.2,-4.1,7.6,-1.4).curveTo(8,1.3,7.2,3.9).curveTo(6.2,6.7,4.1,8.4).curveTo(2,10,-0,11.2).curveTo(-1.4,11.9,-3,12.7).lineTo(-4.3,13.2).closePath();
	this.shape_348.setTransform(-576.1,7.2,1.14,1.14);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,10.8).lineTo(-3.6,10.2).curveTo(-5.1,9.7,-6.7,8.9).lineTo(-9.5,7.3).lineTo(-10.7,6.4).lineTo(-9.8,6).lineTo(-7.4,4.8).curveTo(-3.8,2.6,-1.2,-0.5).curveTo(1.3,-3.6,2.8,-7.6).lineTo(3.3,-9).lineTo(3.9,-11.1).lineTo(4.9,-10.1).lineTo(7,-7.6).lineTo(9.5,-3.8).lineTo(9.7,-3.4).curveTo(10.4,-2,10.6,-0.8).lineTo(10.7,0.6).lineTo(10.6,2.1).curveTo(10.3,3.9,9.8,4.8).curveTo(9.1,6.3,8.3,7.4).curveTo(6.9,8.8,6.1,9.3).curveTo(5,10.1,3.5,10.6).curveTo(2.3,11.1,0.7,11.1).lineTo(0.2,11.1).curveTo(-1,11.1,-2.1,10.8).closePath();
	this.shape_349.setTransform(-585.4,34.9,1.14,1.14);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.7,4.6).curveTo(-9.2,2.3,-9.4,-0.4).curveTo(-9.5,-3.1,-8.5,-5.6).curveTo(-7.4,-8,-5.3,-9.7).curveTo(-3.2,-11.5,-0.5,-11.9).lineTo(7.8,-12.7).lineTo(9.4,-12.7).curveTo(8.4,-11.3,7.1,-9.1).curveTo(5.1,-5.7,2.9,-0.6).curveTo(1,3.7,-0.6,8.4).lineTo(-1.9,12.7).closePath();
	this.shape_350.setTransform(-629.1,-22.3,1.14,1.14);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,11.2).lineTo(-2.8,9.4).lineTo(-4.1,8.4).curveTo(-6.3,6.7,-7.2,3.9).curveTo(-8.1,1.3,-7.6,-1.4).curveTo(-7.2,-4.1,-5.6,-6.2).curveTo(-4,-8.4,-1.5,-9.5).lineTo(7.8,-13.2).lineTo(6.6,-8.9).curveTo(5.4,-4.7,4.6,0.5).curveTo(4.1,3.2,4,5.5).curveTo(3.7,7.9,3.9,9.5).lineTo(4.3,13.2).curveTo(2.2,12.4,-0,11.2).closePath();
	this.shape_351.setTransform(-640.2,7.2,1.14,1.14);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,11.1).curveTo(-2.2,11.1,-3.5,10.6).curveTo(-5,10.1,-6.1,9.3).curveTo(-7.2,8.5,-8.3,7.4).curveTo(-9.2,6.2,-9.8,4.8).curveTo(-10.3,3.9,-10.6,2.1).lineTo(-10.8,0.6).lineTo(-10.6,-0.8).curveTo(-10.4,-2,-9.8,-3.4).lineTo(-9,-4.8).lineTo(-7.1,-7.6).curveTo(-5.5,-9.6,-3.8,-11.1).lineTo(-3.3,-9).lineTo(-2.8,-7.6).curveTo(-1.3,-3.6,1.3,-0.5).curveTo(3.9,2.7,7.4,4.8).curveTo(8.3,5.4,9.8,6).lineTo(10.7,6.4).lineTo(9.6,7.3).lineTo(6.7,8.9).curveTo(5.2,9.7,3.5,10.2).lineTo(2,10.8).curveTo(1,11.1,-0.2,11.1).lineTo(-0.7,11.1).closePath();
	this.shape_352.setTransform(-630.9,34.9,1.14,1.14);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,31.8).curveTo(-25.3,24.2,-25.3,13.4).curveTo(-25.3,7.7,-23.3,-0.9).curveTo(-21.2,-10.2,-17.9,-18.5).curveTo(-9.4,-39.4,-0,-39.4).curveTo(9.4,-39.4,17.9,-18.5).curveTo(21.2,-10.2,23.3,-0.9).curveTo(25.3,7.7,25.3,13.4).curveTo(25.3,24.2,17.9,31.8).curveTo(10.5,39.4,-0,39.5).curveTo(-10.5,39.4,-17.9,31.8).closePath();
	this.shape_353.setTransform(-608.1,-0.8,1.14,1.14);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.6).lineTo(-2.5,-24.6).lineTo(2.5,-24.6).lineTo(2.5,24.6).closePath();
	this.shape_354.setTransform(-608.1,46,1.14,1.14);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.3,26).curveTo(-21.7,19.6,-21.7,10.7).curveTo(-21.7,3.2,-10.8,-15.3).curveTo(-5.4,-24.6,-0,-32.3).lineTo(10.8,-15.3).curveTo(21.7,3.2,21.7,10.7).curveTo(21.7,19.6,15.3,26).curveTo(9,32.3,-0,32.3).curveTo(-9,32.3,-15.3,26).closePath();
	this.shape_355.setTransform(-1606.3,26,1.14,1.14);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.5).lineTo(-1.8,-17.5).lineTo(1.8,-17.5).lineTo(1.8,17.5).closePath();
	this.shape_356.setTransform(-1606.3,59.1,1.14,1.14);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1.1).lineTo(0.5,-1.1).lineTo(0.5,1).closePath();
	this.shape_357.setTransform(-563,-32.7,1.14,1.14);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1).closePath();
	this.shape_358.setTransform(-560.2,-32.7,1.14,1.14);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.2,-4.1).lineTo(2.1,4).closePath();
	this.shape_359.setTransform(-564.9,-38.5,1.14,1.14);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_360.setTransform(-563.1,-38.5,1.14,1.14);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_361.setTransform(-567.4,-38.5,1.14,1.14);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_362.setTransform(-560.3,-23.6,1.14,1.14);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_363.setTransform(-574.5,-23.6,1.14,1.14);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1).closePath();
	this.shape_364.setTransform(-567.4,-32.7,1.14,1.14);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_365.setTransform(-567.4,-11.6,1.14,1.14);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_366.setTransform(-567.4,-14.7,1.14,1.14);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_367.setTransform(-567.4,69.8,1.14,1.14);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.1,-41.1).lineTo(2.1,41.1).closePath();
	this.shape_368.setTransform(-567.4,32.1,1.14,1.14);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.8,-6.9).lineTo(0.8,6.9).closePath();
	this.shape_369.setTransform(-567.4,-23.6,1.14,1.14);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-0.9,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_370.setTransform(-567.4,-23.6,1.14,1.14);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,0).curveTo(-12.4,-5.2,-8.8,-8.7).curveTo(-5.2,-12.4,-0,-12.4).curveTo(5.1,-12.4,8.8,-8.7).curveTo(12.4,-5.2,12.4,0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.1,12.4,-0,12.4).curveTo(-5.2,12.4,-8.8,8.8).closePath();
	this.shape_371.setTransform(-424.6,-47.4,1.14,1.14);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-15.9,9.3).curveTo(-19.8,9.3,-22.5,6.6).curveTo(-25.2,3.9,-25.2,0).curveTo(-25.2,-3.9,-22.5,-6.6).curveTo(-19.8,-9.3,-15.9,-9.3).lineTo(15.9,-9.3).curveTo(19.8,-9.3,22.5,-6.6).curveTo(25.2,-3.9,25.2,0).curveTo(25.2,3.9,22.5,6.6).curveTo(19.8,9.3,15.9,9.3).closePath();
	this.shape_372.setTransform(-418.8,-40.8,1.14,1.14);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-4.2,4.2).curveTo(-5.9,2.5,-5.9,0).curveTo(-5.9,-2.4,-4.2,-4.2).curveTo(-2.4,-5.9,0,-5.9).curveTo(2.5,-5.9,4.2,-4.2).curveTo(5.9,-2.4,5.9,0).curveTo(5.9,2.5,4.2,4.2).curveTo(2.5,5.9,0,5.9).curveTo(-2.4,5.9,-4.2,4.2).closePath();
	this.shape_373.setTransform(337.9,-110.9,1.14,1.14);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-7.1,7.2).curveTo(-10.1,4.2,-10.1,0).curveTo(-10.1,-4.2,-7.1,-7.1).curveTo(-4.2,-10.1,0,-10.1).curveTo(4.2,-10.1,7.2,-7.1).curveTo(10.1,-4.2,10.1,0).curveTo(10.1,4.2,7.2,7.2).curveTo(4.2,10.1,0,10.1).curveTo(-4.2,10.1,-7.1,7.2).closePath();
	this.shape_374.setTransform(352.6,-109,1.14,1.14);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-13.5,7.9).curveTo(-16.8,7.9,-19.1,5.6).curveTo(-21.4,3.3,-21.4,-0).curveTo(-21.4,-3.3,-19.1,-5.6).curveTo(-16.8,-7.9,-13.5,-7.9).lineTo(13.5,-7.9).curveTo(16.8,-7.9,19.1,-5.6).curveTo(21.4,-3.3,21.4,-0).curveTo(21.4,3.3,19.1,5.6).curveTo(16.8,7.9,13.5,7.9).closePath();
	this.shape_375.setTransform(346.8,-101.9,1.14,1.14);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-5.2,5.2).curveTo(-7.3,3,-7.3,-0).curveTo(-7.3,-3,-5.2,-5.2).curveTo(-3,-7.3,0,-7.3).curveTo(3,-7.3,5.2,-5.2).curveTo(7.3,-3,7.3,-0).curveTo(7.3,3,5.2,5.2).curveTo(3,7.3,0,7.3).curveTo(-3,7.3,-5.2,5.2).closePath();
	this.shape_376.setTransform(-201.7,-95.6,1.14,1.14);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,8.9).curveTo(-12.5,5.2,-12.5,0).curveTo(-12.5,-5.2,-8.9,-8.9).curveTo(-5.2,-12.5,0,-12.5).curveTo(5.2,-12.5,8.9,-8.9).curveTo(12.5,-5.2,12.5,0).curveTo(12.5,5.2,8.9,8.9).curveTo(5.2,12.5,0,12.5).curveTo(-5.2,12.5,-8.9,8.9).closePath();
	this.shape_377.setTransform(-219.9,-93.3,1.14,1.14);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-16.7,9.7).curveTo(-20.8,9.7,-23.6,6.9).curveTo(-26.4,4.1,-26.4,0).curveTo(-26.4,-4,-23.6,-6.9).curveTo(-20.8,-9.8,-16.7,-9.8).lineTo(16.7,-9.8).curveTo(20.8,-9.8,23.6,-6.9).curveTo(26.4,-4,26.4,0).curveTo(26.4,4.1,23.6,6.9).curveTo(20.8,9.7,16.7,9.7).closePath();
	this.shape_378.setTransform(-212.6,-84.5,1.14,1.14);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_379.setTransform(-191.8,-33.8,1.14,1.14);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1).lineTo(-1.2,-1).lineTo(1.2,-1).lineTo(1.2,1).closePath();
	this.shape_380.setTransform(-189,-33.8,1.14,1.14);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#494A4E").beginStroke().moveTo(1.1,4.1).lineTo(-2.1,-4).lineTo(2.1,4.1).closePath();
	this.shape_381.setTransform(-193.7,-39.6,1.14,1.14);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#494A4E").beginStroke().moveTo(1.3,4.1).lineTo(-3.7,-4).lineTo(3.7,4.1).closePath();
	this.shape_382.setTransform(-191.9,-39.6,1.14,1.14);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4.1).lineTo(0,-4).lineTo(8.8,4.1).closePath();
	this.shape_383.setTransform(-196.1,-39.6,1.14,1.14);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_384.setTransform(-189.1,-24.8,1.14,1.14);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_385.setTransform(-203.2,-24.8,1.14,1.14);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1).lineTo(-8.7,-1).lineTo(8.7,-1).lineTo(8.7,1).closePath();
	this.shape_386.setTransform(-196.1,-33.8,1.14,1.14);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_387.setTransform(-196.1,-12.7,1.14,1.14);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_388.setTransform(-196.1,-15.9,1.14,1.14);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.6).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.6).closePath();
	this.shape_389.setTransform(-196.1,68.6,1.14,1.14);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,41.1).lineTo(-2.1,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_390.setTransform(-196.1,31,1.14,1.14);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_391.setTransform(-196.1,-24.8,1.14,1.14);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-1,-7.5,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_392.setTransform(-196.1,-24.8,1.14,1.14);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,1).lineTo(-0.5,-1).lineTo(0.5,-1).lineTo(0.5,1).closePath();
	this.shape_393.setTransform(168.5,-31.7,1.14,1.14);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.2,1.1).lineTo(-1.2,-1.1).lineTo(1.2,-1.1).lineTo(1.2,1.1).closePath();
	this.shape_394.setTransform(171.2,-31.7,1.14,1.14);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,4).lineTo(-2.1,-4.1).lineTo(2.2,4).closePath();
	this.shape_395.setTransform(166.6,-37.5,1.14,1.14);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#494A4E").beginStroke().moveTo(1.4,4).lineTo(-3.7,-4.1).lineTo(3.7,4).closePath();
	this.shape_396.setTransform(168.4,-37.5,1.14,1.14);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,4).lineTo(0,-4.1).lineTo(8.8,4).closePath();
	this.shape_397.setTransform(164.1,-37.5,1.14,1.14);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,6.9).lineTo(1.4,-6.9).lineTo(2.5,-6.9).lineTo(-1.2,6.9).closePath();
	this.shape_398.setTransform(171.2,-22.7,1.14,1.14);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#494A4E").beginStroke().moveTo(1.2,6.9).lineTo(-2.5,-6.9).lineTo(-1.4,-6.9).lineTo(2.5,6.9).closePath();
	this.shape_399.setTransform(157.1,-22.7,1.14,1.14);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.7,1.1).lineTo(-8.7,-1.1).lineTo(8.7,-1.1).lineTo(8.7,1.1).closePath();
	this.shape_400.setTransform(164.1,-31.7,1.14,1.14);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.4,0.9).lineTo(-3.4,-0.9).lineTo(3.4,-0.9).lineTo(3.4,0.9).closePath();
	this.shape_401.setTransform(164.1,-10.7,1.14,1.14);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#494A4E").beginStroke().moveTo(-5,0.9).lineTo(-5,-0.9).lineTo(5,-0.9).lineTo(5,0.9).closePath();
	this.shape_402.setTransform(164.1,-13.8,1.14,1.14);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,8.5).lineTo(-3.5,-8.6).lineTo(3.5,-8.6).lineTo(3.5,8.5).closePath();
	this.shape_403.setTransform(164.1,70.7,1.14,1.14);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.2,41.1).lineTo(-2.2,-41.1).lineTo(2.2,-41.1).lineTo(2.2,41.1).closePath();
	this.shape_404.setTransform(164.1,33.1,1.14,1.14);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,6.9).lineTo(-0.7,-6.9).lineTo(0.7,-6.9).lineTo(0.7,6.9).closePath();
	this.shape_405.setTransform(164.1,-22.7,1.14,1.14);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.1,-7.6).curveTo(-4.4,-7.6,8.1,-7.8).lineTo(4.2,7.4).lineTo(-3.7,7.8).closePath();
	this.shape_406.setTransform(164.1,-22.7,1.14,1.14);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.5,5.4).curveTo(-4.1,5.5,-4.6,4.8).curveTo(-4.9,4.3,-4.9,3.5).curveTo(-5,1.8,-3.6,-0.4).curveTo(-2.1,-2.8,-0.3,-4.1).curveTo(1.5,-5.5,2.9,-5.5).lineTo(3.4,-5.5).curveTo(4.2,-5.4,4.5,-4.8).curveTo(4.9,-4.3,4.9,-3.5).curveTo(4.9,-1.8,3.6,0.4).curveTo(2.1,3,0.4,4.2).curveTo(-1.5,5.4,-2.9,5.4).closePath();
	this.shape_407.setTransform(273.8,74.5,1.14,1.14);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,4).curveTo(-0.1,4,-1.3,2.7).curveTo(-2.4,1.3,-2.8,-0.2).curveTo(-3.1,-1.6,-3.1,-2.6).curveTo(-2.9,-4,-1.8,-4).lineTo(-0.6,-4).curveTo(0.2,-4,1.3,-2.7).curveTo(2.3,-1.3,2.8,0.3).curveTo(3.7,4,1.8,4).closePath();
	this.shape_408.setTransform(342.1,69.9,1.14,1.14);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#494A4E").beginStroke().moveTo(0.2,7.5).curveTo(-1.4,6.8,-2.3,4.5).curveTo(-3.6,1.6,-3.6,-1.1).lineTo(-3.6,-1.7).curveTo(-3.6,-4.9,-2.7,-6.3).curveTo(-2.3,-7,-1.7,-7.4).curveTo(-1,-7.8,-0.3,-7.5).curveTo(1.2,-6.9,2.3,-4.5).curveTo(3.6,-1.6,3.6,1.1).lineTo(3.6,1.7).curveTo(3.6,4.9,2.7,6.4).curveTo(2.3,7.1,1.7,7.4).curveTo(1.3,7.7,0.9,7.7).lineTo(0.2,7.5).closePath();
	this.shape_409.setTransform(423.8,66.3,1.14,1.14);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#494A4E").beginStroke().moveTo(0.1,8.1).curveTo(-1.4,8.1,-2.7,5.9).curveTo(-4,3.5,-4.1,0.2).curveTo(-4.2,-3.7,-3.3,-5.6).curveTo(-2.1,-8.2,-0.8,-8.2).lineTo(-0.1,-8.2).curveTo(1.5,-8.1,2.7,-5.9).curveTo(4,-3.5,4.1,-0.2).curveTo(4.2,3.7,3.3,5.6).curveTo(2.2,8.1,0.8,8.1).closePath();
	this.shape_410.setTransform(447.6,56,1.14,1.14);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_411.setTransform(-265.5,-2.8,1.14,1.14);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.3,38.7).lineTo(-12.3,-38.7).lineTo(12.3,38.7).closePath();
	this.shape_412.setTransform(-237.5,-2.8,1.14,1.14);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#494A4E").beginStroke().moveTo(-24.6,38.7).lineTo(0,-38.7).lineTo(24.6,38.7).closePath();
	this.shape_413.setTransform(-251.5,-2.8,1.14,1.14);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.1).lineTo(-2.5,-24.1).lineTo(2.5,-24.1).lineTo(2.5,24.1).closePath();
	this.shape_414.setTransform(-251.5,48.3,1.14,1.14);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.3).lineTo(-9,-5.2).curveTo(-6,-10.3,0,-10.3).curveTo(6,-10.3,9,-5.2).lineTo(17.9,10.3).closePath();
	this.shape_415.setTransform(-306.2,57.9,1.14,1.14);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,10.7).lineTo(-8.4,-5.8).curveTo(-5.6,-10.7,-0,-10.7).curveTo(5.6,-10.7,8.4,-5.8).lineTo(17.9,10.7).closePath();
	this.shape_416.setTransform(416.6,57.5,1.14,1.14);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,-53.3).lineTo(-12.3,-45).curveTo(-5.6,-34.8,-0,-25.3).curveTo(17.9,5.2,17.9,17.6).curveTo(17.8,32.4,7.4,42.9).curveTo(-3.1,53.3,-17.9,53.3).closePath();
	this.shape_417.setTransform(41.6,-18.4,1.14,1.14);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.4,42.9).curveTo(-17.9,32.4,-17.9,17.6).curveTo(-17.9,5.2,0,-25.3).curveTo(8.9,-40.5,17.9,-53.3).lineTo(17.9,53.3).curveTo(3.1,53.3,-7.4,42.9).closePath();
	this.shape_418.setTransform(0.9,-18.4,1.14,1.14);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,28.8).lineTo(-2.9,-28.8).lineTo(2.9,-28.8).lineTo(2.9,28.8).closePath();
	this.shape_419.setTransform(21.3,36.1,1.14,1.14);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.6,4.9).curveTo(-13.5,5,-16.2,2.2).curveTo(-19,-0.5,-19,-4.4).lineTo(-18.9,-5).lineTo(19,-5).lineTo(19,-4.4).curveTo(19,-0.5,16.3,2.2).curveTo(13.5,5,9.6,4.9).closePath();
	this.shape_420.setTransform(225.1,-1.3,1.14,1.14);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#494A4E").beginStroke().moveTo(-18.9,4.4).curveTo(-18.8,0.7,-16.1,-1.9).curveTo(-13.3,-4.5,-9.6,-4.5).lineTo(9.6,-4.5).curveTo(13.4,-4.5,16.1,-1.9).curveTo(18.8,0.7,19,4.4).closePath();
	this.shape_421.setTransform(225.1,-12.1,1.14,1.14);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.1,3.7).curveTo(-9.9,3.7,-12,1.7).curveTo(-14,-0.4,-14.1,-3.3).lineTo(-14.1,-3.7).lineTo(14.1,-3.7).lineTo(14.1,-3.3).curveTo(14,-0.4,12,1.7).curveTo(10,3.7,7.1,3.7).closePath();
	this.shape_422.setTransform(252,-66.4,1.14,1.14);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.1,3.3).curveTo(-13.8,0.6,-11.8,-1.3).curveTo(-9.9,-3.3,-7.1,-3.3).lineTo(7.1,-3.3).curveTo(9.8,-3.3,11.8,-1.3).curveTo(13.9,0.6,14.1,3.3).closePath();
	this.shape_423.setTransform(252,-74.3,1.14,1.14);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.3,7.5).curveTo(-19.3,7.5,-23.5,3.3).curveTo(-27.7,-0.9,-27.8,-6.9).lineTo(-27.7,-7.5).lineTo(27.7,-7.5).lineTo(27.8,-6.9).curveTo(27.8,-0.9,23.5,3.3).curveTo(19.2,7.5,13.3,7.5).closePath();
	this.shape_424.setTransform(213.3,-30.5,1.14,1.14);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.7,6.9).curveTo(-27.4,1.1,-23.3,-2.9).curveTo(-19.1,-6.9,-13.3,-6.9).lineTo(13.3,-6.9).curveTo(19.1,-6.9,23.3,-2.9).curveTo(27.5,1.1,27.7,6.9).closePath();
	this.shape_425.setTransform(213.3,-46.9,1.14,1.14);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.1,5.2).curveTo(-24.4,5.2,-27.5,2.2).curveTo(-30.6,-0.9,-30.7,-5.2).lineTo(30.6,-5.2).curveTo(30.6,-0.9,27.6,2.2).curveTo(24.5,5.2,20.2,5.2).closePath();
	this.shape_426.setTransform(268,-42.1,1.14,1.14);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.7,5.3).lineTo(-30.7,5.2).curveTo(-30.7,0.9,-27.5,-2.2).curveTo(-24.5,-5.3,-20.1,-5.3).lineTo(20.2,-5.3).curveTo(24.5,-5.3,27.6,-2.2).curveTo(30.7,0.9,30.6,5.2).lineTo(30.6,5.3).closePath();
	this.shape_427.setTransform(268,-54,1.14,1.14);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.7,6.6).curveTo(-34.1,1,-30,-2.8).curveTo(-25.8,-6.6,-20.2,-6.6).lineTo(20.2,-6.6).curveTo(25.8,-6.6,30,-2.8).curveTo(34.1,1,34.7,6.6).closePath();
	this.shape_428.setTransform(287.2,-26.1,1.14,1.14);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.2,8).curveTo(-26.2,8,-30.5,3.7).curveTo(-34.7,-0.6,-34.7,-6.6).lineTo(-34.7,-8).lineTo(34.7,-8).lineTo(34.7,-6.6).curveTo(34.7,-0.6,30.5,3.7).curveTo(26.2,8,20.2,8).closePath();
	this.shape_429.setTransform(287.2,-9.5,1.14,1.14);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,17.6).lineTo(-2.4,-17.6).lineTo(2.4,-17.6).lineTo(2.4,17.6).closePath();
	this.shape_430.setTransform(258.9,56,1.14,1.14);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill("#494A4E").beginStroke().moveTo(-29.6,-29.8).lineTo(-25.6,-32.4).lineTo(9.2,22.3).lineTo(25.2,-13.2).lineTo(29.6,-11.3).lineTo(10,32.4).closePath();
	this.shape_431.setTransform(247.9,4.7,1.14,1.14);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,47.5).curveTo(-8.2,46.8,-9.4,45.9).curveTo(-10.7,45,-12,43.6).curveTo(-13,42.3,-13.8,40.6).curveTo(-14.4,39.7,-14.8,37.4).curveTo(-14.9,36.6,-14.9,35.8).lineTo(-14.7,34).curveTo(-14.5,32.5,-13.7,31).lineTo(-12.8,29.4).curveTo(-11.7,27.5,-10.6,26).curveTo(-9.2,24.3,-7.4,22.5).lineTo(-7.7,21.5).curveTo(-9.6,20.9,-11.9,19.6).curveTo(-13.4,18.7,-15.2,17.4).lineTo(-16.7,16.2).curveTo(-19.3,14.2,-20.4,11).curveTo(-21.4,7.9,-20.9,4.8).curveTo(-20.4,1.7,-18.5,-0.9).curveTo(-16.6,-3.4,-13.6,-4.7).lineTo(-5,-8.3).lineTo(-4.2,-10.9).lineTo(-9.5,-18.5).curveTo(-11.3,-21.2,-11.5,-24.5).curveTo(-11.7,-27.5,-10.5,-30.5).curveTo(-9.2,-33.3,-6.8,-35.3).curveTo(-4.2,-37.4,-1.1,-37.9).lineTo(4.7,-38.6).lineTo(8,-38.8).curveTo(14.5,-48.1,21.1,-48).lineTo(21.1,44.5).curveTo(11.5,44.5,3.7,38.7).curveTo(4.8,39.6,6.4,40.5).curveTo(7,41,9.2,42.1).lineTo(10,42.4).lineTo(10.3,42.5).lineTo(8.9,43.5).lineTo(5.5,45.5).lineTo(1.9,47).lineTo(0.1,47.6).curveTo(-1.3,48,-3.1,48.1).curveTo(-4.8,48,-6.4,47.5).closePath();
	this.shape_432.setTransform(-356.1,-16.8,1.14,1.14);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,47.6).lineTo(-1.9,47).lineTo(-5.5,45.5).lineTo(-8.9,43.5).lineTo(-10.3,42.5).lineTo(-10,42.4).lineTo(-9.2,42.1).lineTo(-7.9,41.4).lineTo(-6.4,40.5).curveTo(-4.9,39.7,-3.5,38.6).curveTo(-11.4,44.5,-21.1,44.5).lineTo(-21.1,-48).curveTo(-14.5,-48.1,-8,-38.8).lineTo(-4.7,-38.6).lineTo(1.1,-37.9).curveTo(4.3,-37.4,6.8,-35.3).curveTo(9.2,-33.3,10.5,-30.5).curveTo(11.7,-27.6,11.5,-24.5).curveTo(11.3,-21.3,9.5,-18.5).lineTo(6.2,-13.7).lineTo(4.2,-10.9).lineTo(5,-8.3).lineTo(8.2,-7).lineTo(13.6,-4.7).curveTo(16.6,-3.4,18.5,-0.9).curveTo(20.4,1.7,20.9,4.8).curveTo(21.4,7.9,20.4,11).curveTo(19.3,14.2,16.7,16.2).curveTo(14.3,18.2,11.9,19.6).curveTo(10,20.6,7.7,21.6).lineTo(7.4,22.4).curveTo(9.6,24.8,10.6,26).curveTo(11.7,27.5,12.8,29.4).lineTo(13.7,31).curveTo(14.5,32.5,14.8,34).curveTo(14.9,34.9,14.9,35.8).curveTo(14.9,36.6,14.8,37.4).curveTo(14.4,39.7,13.8,40.6).curveTo(13,42.3,12,43.6).curveTo(10.7,44.9,9.5,45.9).curveTo(8.1,46.9,6.4,47.5).curveTo(4.9,48,3.2,48.1).curveTo(1.3,48,-0.1,47.6).closePath();
	this.shape_433.setTransform(-308.1,-16.8,1.14,1.14);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,5.4).curveTo(-10.8,2.7,-11,-0.5).curveTo(-11.2,-3.6,-10,-6.5).curveTo(-8.7,-9.4,-6.3,-11.4).curveTo(-3.7,-13.4,-0.6,-13.9).lineTo(9.2,-14.9).lineTo(11,-14.8).curveTo(9.8,-13.3,8.3,-10.7).curveTo(5.8,-6.5,3.3,-0.7).curveTo(1.3,4,-0.7,9.9).lineTo(-2.3,14.9).closePath();
	this.shape_434.setTransform(-356.7,-44,1.14,1.14);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,13.1).curveTo(-1.5,12.3,-3.3,11).lineTo(-4.8,9.8).curveTo(-7.4,7.8,-8.5,4.6).curveTo(-9.5,1.5,-9,-1.6).curveTo(-8.5,-4.8,-6.6,-7.3).curveTo(-4.7,-9.8,-1.7,-11.1).lineTo(3.7,-13.4).curveTo(6.4,-14.5,9.1,-15.5).lineTo(7.7,-10.4).curveTo(6.2,-4.6,5.4,0.7).curveTo(4.9,3.6,4.6,6.5).curveTo(4.4,9.1,4.6,11.1).lineTo(4.7,12.9).lineTo(5.1,15.5).curveTo(2.6,14.6,-0,13.1).closePath();
	this.shape_435.setTransform(-369.7,-9.5,1.14,1.14);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,12.5).curveTo(-5.9,11.8,-7.1,11).curveTo(-8.4,10,-9.7,8.6).curveTo(-10.7,7.3,-11.5,5.7).curveTo(-12,4.7,-12.4,2.4).curveTo(-12.6,1.6,-12.6,0.8).lineTo(-12.4,-0.9).curveTo(-12.2,-2.5,-11.4,-4).lineTo(-10.5,-5.6).curveTo(-9.4,-7.4,-8.3,-8.9).curveTo(-6.4,-11.3,-4.5,-13.1).lineTo(-3.3,-8.9).curveTo(-1.6,-4.3,1.4,-0.6).curveTo(4.7,3.2,8.7,5.6).curveTo(9.3,6,11.5,7.1).lineTo(12.3,7.5).lineTo(12.6,7.6).lineTo(11.2,8.5).lineTo(7.8,10.5).lineTo(4.2,12).lineTo(2.4,12.7).curveTo(1,13.1,-0.8,13.1).curveTo(-2.5,13.1,-4.1,12.5).closePath();
	this.shape_436.setTransform(-358.7,23.1,1.14,1.14);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.beginFill("#494A4E").beginStroke().moveTo(0.7,9.9).curveTo(-1.3,4,-3.4,-0.7).curveTo(-5.9,-6.5,-8.4,-10.7).lineTo(-11,-14.8).lineTo(-9.2,-14.9).lineTo(0.5,-13.9).curveTo(3.7,-13.4,6.3,-11.4).curveTo(8.7,-9.4,9.9,-6.5).curveTo(11.2,-3.6,11,-0.5).curveTo(10.7,2.7,9,5.4).lineTo(5.7,10.2).lineTo(2.3,14.9).closePath();
	this.shape_437.setTransform(-307.4,-44,1.14,1.14);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.7,12.9).lineTo(-4.6,11.1).curveTo(-4.4,9.5,-4.7,6.5).curveTo(-4.9,3.9,-5.4,0.7).curveTo(-6.2,-4.2,-7.7,-10.4).lineTo(-9.1,-15.5).lineTo(-3.7,-13.4).lineTo(1.7,-11.1).curveTo(4.6,-9.8,6.6,-7.3).curveTo(8.4,-4.8,8.9,-1.6).curveTo(9.4,1.5,8.4,4.6).curveTo(7.3,7.8,4.8,9.8).curveTo(2.4,11.7,-0,13.1).curveTo(-1.6,14,-3.5,14.8).lineTo(-5.1,15.5).closePath();
	this.shape_438.setTransform(-294.5,-9.5,1.14,1.14);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,12.7).lineTo(-4.2,12).lineTo(-7.8,10.5).lineTo(-11.2,8.5).lineTo(-12.6,7.6).lineTo(-12.3,7.5).lineTo(-11.5,7.1).lineTo(-10.3,6.5).lineTo(-8.7,5.6).curveTo(-4.5,3.1,-1.5,-0.6).curveTo(1.6,-4.3,3.3,-8.9).lineTo(3.9,-10.6).lineTo(4.5,-13.1).lineTo(5.7,-11.9).curveTo(7.2,-10.4,8.3,-8.9).curveTo(9.4,-7.4,10.4,-5.6).lineTo(11.4,-4).curveTo(12.1,-2.5,12.4,-0.9).curveTo(12.6,-0.1,12.6,0.8).curveTo(12.6,1.6,12.4,2.4).curveTo(12,4.7,11.5,5.7).curveTo(10.7,7.3,9.7,8.6).curveTo(8.4,10,7.2,11).curveTo(5.8,11.9,4.1,12.5).curveTo(2.6,13.1,0.9,13.1).curveTo(-1,13.1,-2.4,12.7).closePath();
	this.shape_439.setTransform(-305.4,23.1,1.14,1.14);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.beginFill("#494A4E").beginStroke().moveTo(-21,37.3).curveTo(-29.7,28.3,-29.7,15.7).curveTo(-29.7,9.1,-27.4,-1.2).curveTo(-24.9,-11.9,-21,-21.7).curveTo(-11.1,-46.3,-0,-46.3).curveTo(11.1,-46.3,21,-21.7).curveTo(24.9,-11.9,27.4,-1.2).curveTo(29.7,9.1,29.7,15.7).curveTo(29.7,28.3,21,37.3).curveTo(12.3,46.3,-0,46.3).curveTo(-12.3,46.3,-21,37.3).closePath();
	this.shape_440.setTransform(-332.1,-18.8,1.14,1.14);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.beginFill("#494A4E").beginStroke().moveTo(-3,28.8).lineTo(-3,-28.8).lineTo(3,-28.8).lineTo(3,28.8).closePath();
	this.shape_441.setTransform(-332.1,36.1,1.14,1.14);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.6,23.8).curveTo(-11,17.4,-11,8.4).curveTo(-11,2.1,-7.8,-3.1).curveTo(-4.6,-8.2,0.6,-11).curveTo(-1.5,-14.3,-1.5,-17.9).curveTo(-1.5,-23.1,2.2,-26.7).curveTo(5.8,-30.3,11,-30.3).lineTo(11,30.3).curveTo(1.9,30.3,-4.6,23.8).closePath();
	this.shape_442.setTransform(-134.6,19.1,1.14,1.14);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.6,5.6).curveTo(-4,3.2,-4,-0).curveTo(-4,-3.3,-1.6,-5.6).curveTo(0.7,-7.9,4,-7.9).lineTo(4,7.9).curveTo(0.7,7.9,-1.6,5.6).closePath();
	this.shape_443.setTransform(-126.6,-25.9,1.14,1.14);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.6,15.5).curveTo(-22,9.1,-21.9,0).curveTo(-22,-9.1,-15.6,-15.6).curveTo(-9.1,-22,0,-21.9).curveTo(9.1,-22,15.5,-15.6).curveTo(22,-9.1,22,0).curveTo(22,9.1,15.5,15.5).curveTo(9.1,22,0,22).curveTo(-9.1,22,-15.6,15.5).closePath();
	this.shape_444.setTransform(-122.1,28.6,1.14,1.14);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.6,5.6).curveTo(-7.9,3.2,-7.9,-0).curveTo(-7.9,-3.3,-5.6,-5.6).curveTo(-3.2,-7.9,0,-7.9).curveTo(3.3,-7.9,5.6,-5.6).curveTo(7.9,-3.3,7.9,-0).curveTo(7.9,3.2,5.6,5.6).curveTo(3.3,7.9,0,7.9).curveTo(-3.2,7.9,-5.6,5.6).closePath();
	this.shape_445.setTransform(-122.2,-25.9,1.14,1.14);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.beginFill("#494A4E").beginStroke().moveTo(-8.8,8.8).curveTo(-12.4,5.1,-12.4,-0).curveTo(-12.4,-5.2,-8.8,-8.8).curveTo(-5.1,-12.4,0,-12.4).curveTo(5.2,-12.4,8.8,-8.8).curveTo(12.4,-5.2,12.4,-0).curveTo(12.4,5.1,8.8,8.8).curveTo(5.2,12.4,0,12.4).curveTo(-5.1,12.4,-8.8,8.8).closePath();
	this.shape_446.setTransform(-122.2,-1.3,1.14,1.14);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.7).lineTo(-1.8,-17.7).lineTo(1.8,-17.7).lineTo(1.8,17.7).closePath();
	this.shape_447.setTransform(-122.1,49.7,1.14,1.14);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.beginFill("#494A4E").beginStroke().moveTo(-523.2,5).curveTo(-525.9,5,-527.7,3.6).curveTo(-529.6,2.1,-529.6,-0).curveTo(-529.6,-2.1,-527.7,-3.5).curveTo(-525.9,-5,-523.2,-5.1).lineTo(523.2,-5.1).curveTo(525.9,-5,527.7,-3.5).curveTo(529.6,-2.1,529.6,-0).curveTo(529.6,2.1,527.7,3.6).curveTo(525.9,5,523.2,5).closePath();
	this.shape_448.setTransform(3.6,75.8,1.14,1.14);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.beginFill("#494A4E").beginStroke().moveTo(-12.5,12.5).curveTo(-17.7,7.3,-17.7,-0).curveTo(-17.7,-7.3,-12.5,-12.5).curveTo(-7.3,-17.7,-0,-17.7).curveTo(7.4,-17.7,12.6,-12.5).curveTo(17.7,-7.3,17.7,-0).curveTo(17.7,7.3,12.6,12.5).curveTo(7.4,17.7,-0,17.7).curveTo(-7.3,17.7,-12.5,12.5).closePath();
	this.shape_449.setTransform(80.3,56.2,1.14,1.14);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.7,5.3,-12.7,-0).curveTo(-12.7,-5.3,-9,-9).curveTo(-5.3,-12.8,-0,-12.8).curveTo(5.3,-12.8,9,-9).curveTo(12.7,-5.3,12.7,-0).curveTo(12.7,5.3,9,9).curveTo(5.3,12.8,-0,12.8).curveTo(-5.3,12.8,-9,9).closePath();
	this.shape_450.setTransform(135.4,56.5,1.14,1.14);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.beginFill("#494A4E").beginStroke().moveTo(-16.6,16.6).curveTo(-23.5,9.8,-23.6,-0).curveTo(-23.5,-9.8,-16.6,-16.7).curveTo(-9.8,-23.5,0,-23.5).curveTo(9.8,-23.5,16.7,-16.7).curveTo(23.5,-9.8,23.5,-0).curveTo(23.5,9.8,16.7,16.6).curveTo(9.8,23.5,0,23.6).curveTo(-9.8,23.5,-16.6,16.6).closePath();
	this.shape_451.setTransform(108.5,49.5,1.14,1.14);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,-0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,-0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_452.setTransform(299.8,62.4,1.14,1.14);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_453.setTransform(330.7,58.6,1.14,1.14);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,9).curveTo(-12.8,5.3,-12.8,-0).curveTo(-12.8,-5.3,-9,-9).curveTo(-5.3,-12.7,0,-12.7).curveTo(5.3,-12.7,9,-9).curveTo(12.8,-5.3,12.8,-0).curveTo(12.8,5.3,9,9).curveTo(5.3,12.7,0,12.8).curveTo(-5.3,12.7,-9,9).closePath();
	this.shape_454.setTransform(190.8,62.4,1.14,1.14);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.7,14.7).curveTo(-20.7,8.6,-20.7,0).curveTo(-20.7,-8.6,-14.7,-14.6).curveTo(-8.6,-20.7,-0,-20.7).curveTo(8.6,-20.7,14.6,-14.6).curveTo(20.7,-8.6,20.7,0).curveTo(20.7,8.6,14.6,14.7).curveTo(8.6,20.7,-0,20.7).curveTo(-8.6,20.7,-14.7,14.7).closePath();
	this.shape_455.setTransform(221.8,58.6,1.14,1.14);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.9,21.9).lineTo(0,-21.9).lineTo(13.9,21.9).closePath();
	this.shape_456.setTransform(-512.1,23.7,1.14,1.14);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,13.6).lineTo(-1.4,-13.6).lineTo(1.4,-13.6).lineTo(1.4,13.6).closePath();
	this.shape_457.setTransform(-512.1,52.5,1.14,1.14);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.beginFill("#494A4E").beginStroke().moveTo(-5.2,3.1).curveTo(-6.2,1.5,-6.3,-0.3).curveTo(-6.4,-2.1,-5.7,-3.7).curveTo(-5,-5.4,-3.6,-6.5).curveTo(-2.2,-7.7,-0.3,-8).lineTo(5.3,-8.5).lineTo(6.3,-8.5).curveTo(5.6,-7.6,4.8,-6.1).curveTo(3.2,-3.4,1.9,-0.4).curveTo(0.5,2.8,-0.4,5.7).lineTo(-1.3,8.5).closePath();
	this.shape_458.setTransform(467.2,5.4,1.14,1.14);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.beginFill("#494A4E").beginStroke().moveTo(0,7.5).lineTo(-2.8,5.6).curveTo(-4.2,4.5,-4.8,2.6).curveTo(-5.4,0.9,-5.1,-0.9).curveTo(-4.8,-2.7,-3.8,-4.2).curveTo(-2.7,-5.6,-1,-6.4).lineTo(5.2,-8.9).lineTo(4.4,-6).curveTo(3.7,-3,3.1,0.4).lineTo(2.7,3.7).curveTo(2.5,5.1,2.6,6.4).lineTo(2.7,7.4).lineTo(2.9,8.9).curveTo(1.5,8.3,0,7.5).closePath();
	this.shape_459.setTransform(459.8,25.2,1.14,1.14);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.5,7.5).curveTo(-1.4,7.5,-2.3,7.2).curveTo(-3.6,6.6,-4.1,6.3).curveTo(-4.8,5.8,-5.5,5).curveTo(-6.2,4.1,-6.6,3.3).curveTo(-6.9,2.5,-7.1,1.4).lineTo(-7.2,0.4).lineTo(-7.1,-0.5).curveTo(-7,-1.5,-6.5,-2.3).lineTo(-6,-3.2).curveTo(-5.5,-4.2,-4.7,-5.1).curveTo(-3.7,-6.4,-2.6,-7.5).lineTo(-1.9,-5.1).curveTo(-1,-2.5,0.8,-0.4).curveTo(2.5,1.7,5,3.2).lineTo(6.6,4.1).lineTo(7.1,4.3).lineTo(7.2,4.3).lineTo(4.5,6).curveTo(3.5,6.5,2.4,6.9).lineTo(1.4,7.3).curveTo(0.5,7.5,-0.2,7.5).lineTo(-0.5,7.5).closePath();
	this.shape_460.setTransform(466,43.8,1.14,1.14);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.beginFill("#494A4E").beginStroke().moveTo(0.4,5.7).curveTo(-0.7,2.3,-1.9,-0.4).curveTo(-3.4,-3.9,-4.8,-6.2).lineTo(-6.3,-8.5).lineTo(-5.3,-8.5).lineTo(0.3,-8).curveTo(2.1,-7.7,3.6,-6.6).curveTo(5,-5.4,5.7,-3.8).curveTo(6.4,-2.1,6.3,-0.3).curveTo(6.2,1.5,5.1,3.1).lineTo(1.9,7.7).lineTo(1.3,8.5).lineTo(0.4,5.7).closePath();
	this.shape_461.setTransform(495.4,5.4,1.14,1.14);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.6,6.4).curveTo(-2.5,5.5,-2.7,3.7).curveTo(-2.7,2.3,-3.1,0.4).curveTo(-3.5,-2.3,-4.4,-6).lineTo(-5.2,-8.9).lineTo(-2.1,-7.7).lineTo(1,-6.4).curveTo(2.7,-5.6,3.8,-4.2).curveTo(4.9,-2.7,5.1,-0.9).curveTo(5.4,0.9,4.9,2.6).curveTo(4.2,4.5,2.8,5.6).curveTo(1.4,6.7,0,7.5).lineTo(-2.9,8.9).closePath();
	this.shape_462.setTransform(502.8,25.2,1.14,1.14);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.4,7.3).lineTo(-4.5,6).lineTo(-6.4,4.9).lineTo(-7.2,4.3).lineTo(-7,4.3).lineTo(-5,3.2).curveTo(-2.3,1.5,-0.8,-0.4).curveTo(0.9,-2.4,1.9,-5.1).lineTo(2.2,-6.1).lineTo(2.6,-7.5).lineTo(4.7,-5.1).lineTo(6.6,-2.3).curveTo(7,-1.4,7.1,-0.5).lineTo(7.2,0.4).lineTo(7.2,1.4).curveTo(6.8,2.9,6.6,3.3).curveTo(6.2,4.1,5.6,5).lineTo(4.1,6.3).curveTo(3.6,6.7,2.4,7.2).curveTo(1.5,7.5,0.5,7.5).lineTo(0.2,7.5).curveTo(-0.5,7.5,-1.4,7.3).closePath();
	this.shape_463.setTransform(496.6,43.8,1.14,1.14);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.beginFill("#494A4E").beginStroke().moveTo(-12,21.4).curveTo(-17,16.2,-17,9).curveTo(-17,-0,-12,-12.4).curveTo(-6.3,-26.5,0,-26.5).curveTo(6.4,-26.5,12.1,-12.4).curveTo(17,-0,17,9).curveTo(17,16.3,12.1,21.4).curveTo(7.1,26.5,0,26.5).curveTo(-7,26.5,-12,21.4).closePath();
	this.shape_464.setTransform(481.3,19.8,1.14,1.14);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.7,16.5).lineTo(-1.7,-16.5).lineTo(1.7,-16.5).lineTo(1.7,16.5).closePath();
	this.shape_465.setTransform(481.3,51.3,1.14,1.14);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.beginFill("#494A4E").beginStroke().moveTo(0.6,8.4).curveTo(-1.2,3.2,-2.9,-0.6).curveTo(-4.9,-5.2,-7.1,-9.1).lineTo(-9.4,-12.7).lineTo(-7.9,-12.7).lineTo(0.4,-11.9).curveTo(3.1,-11.5,5.3,-9.7).curveTo(7.4,-8,8.4,-5.6).curveTo(9.5,-3.1,9.3,-0.4).curveTo(9.1,2.3,7.6,4.6).lineTo(4.8,8.7).lineTo(1.9,12.7).closePath();
	this.shape_466.setTransform(575.4,-22.3,1.14,1.14);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.beginFill("#494A4E").beginStroke().moveTo(-4,11).lineTo(-3.9,9.5).curveTo(-3.8,8.2,-4,5.5).lineTo(-4.6,0.5).curveTo(-5.4,-4.2,-6.6,-8.9).lineTo(-7.8,-13.2).lineTo(1.4,-9.5).curveTo(3.9,-8.4,5.6,-6.2).curveTo(7.2,-4.1,7.6,-1.4).curveTo(8,1.3,7.2,3.9).curveTo(6.2,6.7,4.1,8.4).curveTo(2,10,-0,11.2).curveTo(-1.4,11.9,-3,12.7).lineTo(-4.3,13.2).closePath();
	this.shape_467.setTransform(586.4,7.2,1.14,1.14);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.1,10.8).lineTo(-3.6,10.2).curveTo(-5.1,9.7,-6.7,8.9).lineTo(-9.5,7.3).lineTo(-10.7,6.4).lineTo(-9.8,6).lineTo(-7.4,4.8).curveTo(-3.8,2.6,-1.2,-0.5).curveTo(1.3,-3.6,2.8,-7.6).lineTo(3.3,-9).lineTo(3.9,-11.1).lineTo(4.9,-10.1).lineTo(7,-7.6).lineTo(9.5,-3.8).lineTo(9.7,-3.4).curveTo(10.4,-2,10.6,-0.8).lineTo(10.7,0.6).lineTo(10.6,2.1).curveTo(10.3,3.9,9.8,4.8).curveTo(9.1,6.3,8.3,7.4).curveTo(6.9,8.8,6.1,9.3).curveTo(5,10.1,3.5,10.6).curveTo(2.3,11.1,0.7,11.1).lineTo(0.2,11.1).curveTo(-1,11.1,-2.1,10.8).closePath();
	this.shape_468.setTransform(577.1,34.9,1.14,1.14);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.7,4.6).curveTo(-9.2,2.3,-9.4,-0.4).curveTo(-9.5,-3.1,-8.5,-5.6).curveTo(-7.4,-8,-5.3,-9.7).curveTo(-3.2,-11.5,-0.5,-11.9).lineTo(7.8,-12.7).lineTo(9.4,-12.7).curveTo(8.4,-11.3,7.1,-9.1).curveTo(5.1,-5.7,2.9,-0.6).curveTo(1,3.7,-0.6,8.4).lineTo(-1.9,12.7).closePath();
	this.shape_469.setTransform(533.4,-22.3,1.14,1.14);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,11.2).lineTo(-2.8,9.4).lineTo(-4.1,8.4).curveTo(-6.3,6.7,-7.2,3.9).curveTo(-8.1,1.3,-7.6,-1.4).curveTo(-7.2,-4.1,-5.6,-6.2).curveTo(-4,-8.4,-1.5,-9.5).lineTo(7.8,-13.2).lineTo(6.6,-8.9).curveTo(5.4,-4.7,4.6,0.5).curveTo(4.1,3.2,4,5.5).curveTo(3.7,7.9,3.9,9.5).lineTo(4.3,13.2).curveTo(2.2,12.4,-0,11.2).closePath();
	this.shape_470.setTransform(522.3,7.2,1.14,1.14);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.7,11.1).curveTo(-2.2,11.1,-3.5,10.6).curveTo(-5,10.1,-6.1,9.3).curveTo(-7.2,8.5,-8.3,7.4).curveTo(-9.2,6.2,-9.8,4.8).curveTo(-10.3,3.9,-10.6,2.1).lineTo(-10.8,0.6).lineTo(-10.6,-0.8).curveTo(-10.4,-2,-9.8,-3.4).lineTo(-9,-4.8).lineTo(-7.1,-7.6).curveTo(-5.5,-9.6,-3.8,-11.1).lineTo(-3.3,-9).lineTo(-2.8,-7.6).curveTo(-1.3,-3.6,1.3,-0.5).curveTo(3.9,2.7,7.4,4.8).curveTo(8.3,5.4,9.8,6).lineTo(10.7,6.4).lineTo(9.6,7.3).lineTo(6.7,8.9).curveTo(5.2,9.7,3.5,10.2).lineTo(2,10.8).curveTo(1,11.1,-0.2,11.1).lineTo(-0.7,11.1).closePath();
	this.shape_471.setTransform(531.6,34.9,1.14,1.14);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.9,31.8).curveTo(-25.3,24.2,-25.3,13.4).curveTo(-25.3,7.7,-23.3,-0.9).curveTo(-21.2,-10.2,-17.9,-18.5).curveTo(-9.4,-39.4,-0,-39.4).curveTo(9.4,-39.4,17.9,-18.5).curveTo(21.2,-10.2,23.3,-0.9).curveTo(25.3,7.7,25.3,13.4).curveTo(25.3,24.2,17.9,31.8).curveTo(10.5,39.4,-0,39.5).curveTo(-10.5,39.4,-17.9,31.8).closePath();
	this.shape_472.setTransform(554.4,-0.8,1.14,1.14);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.5,24.6).lineTo(-2.5,-24.6).lineTo(2.5,-24.6).lineTo(2.5,24.6).closePath();
	this.shape_473.setTransform(554.4,46,1.14,1.14);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.beginFill("#494A4E").beginStroke().moveTo(-15.3,26).curveTo(-21.7,19.6,-21.7,10.7).curveTo(-21.7,3.2,-10.8,-15.3).curveTo(-5.4,-24.6,-0,-32.3).lineTo(10.8,-15.3).curveTo(21.7,3.2,21.7,10.7).curveTo(21.7,19.6,15.3,26).curveTo(9,32.3,-0,32.3).curveTo(-9,32.3,-15.3,26).closePath();
	this.shape_474.setTransform(-443.8,26,1.14,1.14);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.beginFill("#494A4E").beginStroke().moveTo(-1.8,17.5).lineTo(-1.8,-17.5).lineTo(1.8,-17.5).lineTo(1.8,17.5).closePath();
	this.shape_475.setTransform(-443.8,59.1,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4106.6,-120.5,4714,202.8);


(lib.arrastrebrazo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-28.9,0).lineTo(-3,-5).curveTo(23.2,-9.8,24.7,-8.7).curveTo(27,-7,28,-5.6).curveTo(29.5,-3.5,28.6,-1.2).curveTo(27.8,1,25.2,1.3).curveTo(22.7,1.6,23,0.2).curveTo(23.2,-0.6,24.3,-0.9).curveTo(25.5,-1.1,25.9,-2.4).curveTo(26.3,-3.7,25.4,-4.4).curveTo(24.5,-5.2,22.9,-4.8).curveTo(20.4,-4.2,19,-4.4).curveTo(17.6,-4.5,16,-5.2).lineTo(14.7,-6).lineTo(-20,8.9).closePath();
	this.shape.setTransform(11.4,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.2,-5.9).lineTo(0.4,-14.5).lineTo(8.2,-6.7).lineTo(-5.8,14.5).closePath();
	this.shape_1.setTransform(-23.2,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#999999").beginStroke().moveTo(-7.8,2.7).lineTo(2.7,-7.8).lineTo(7.8,-2.7).lineTo(-2.7,7.8).closePath();
	this.shape_2.setTransform(-14.9,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#999999").beginStroke().moveTo(-83,7.2).lineTo(60.5,-13.6).lineTo(60.5,-18.8).lineTo(71.2,-21.3).lineTo(73.9,-20.8).lineTo(81,-17.2).lineTo(83,-13.6).lineTo(81,-5.5).lineTo(77.4,-6.1).lineTo(78.5,-11.1).lineTo(77.4,-13).lineTo(73.4,-15.1).lineTo(71.6,-2.2).lineTo(54.7,1.9).lineTo(-83,21.3).closePath();
	this.shape_3.setTransform(0,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-29.1,166,70.9);


(lib.arrastreconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.arrastrehandss();
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


(lib.arrastrebody = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#C10606").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.4,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.3).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.4,2.5,1.9,1.8).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2).curveTo(5,2.8,4.6,3.4).curveTo(4,4.4,2,4.5).closePath();
	this.shape.setTransform(-103.2,5.6,0.773,0.773);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#C10606").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.4,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.3).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-4).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.4,2.5,1.9,1.8).curveTo(2.1,1.5,2.1,0.7).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2).curveTo(5,2.8,4.6,3.4).curveTo(4,4.4,2,4.5).closePath();
	this.shape_1.setTransform(-121.9,5.6,0.773,0.773);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#C10606").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.6).curveTo(-5.5,2.2,-5.3,1.7).curveTo(-5.1,0.8,-4.2,0.4).lineTo(2,-1.9).curveTo(2.1,-2,2.1,-2).curveTo(2.2,-2,2.2,-2).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.2).curveTo(2.2,-2.2,2.2,-2.3).curveTo(2.2,-2.3,2.2,-2.4).curveTo(2.1,-2.4,2,-2.4).curveTo(1.9,-2.5,1.8,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-2.9).lineTo(-5.2,-4).curveTo(-5.1,-4.3,-4.8,-4.4).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.5).lineTo(5.4,-1.6).curveTo(5.1,-0.5,4.1,-0.2).lineTo(-1.6,1.9).curveTo(-2.4,2.2,-2.2,2.3).lineTo(-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.9).lineTo(5.2,4).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_2.setTransform(-112.5,5.6,0.773,0.773);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#C10606").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.5,-4.8,2.4).lineTo(-4.5,2.4).lineTo(1.7,2.4).lineTo(2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.4,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.5).lineTo(-1.8,-2.5).curveTo(-2,-2.4,-2,-2.4).curveTo(-2.1,-2.4,-2.2,-2.3).curveTo(-2.2,-2.3,-2.2,-2.3).curveTo(-2.2,-2.2,-2.2,-2.2).curveTo(-2.2,-2.1,-2.2,-2.1).curveTo(-2.2,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-1.9,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_3.setTransform(-131.4,5.6,0.773,0.773);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#C10606").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_4.setTransform(-138.1,5.6,0.773,0.773);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#C10606").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-3.9).lineTo(-2.3,0.7).curveTo(-2.3,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.5).curveTo(1.5,2.6,2,1.8).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.6,4.6,3.4).curveTo(4,4.4,2.1,4.5).closePath();
	this.shape_5.setTransform(19.9,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#C10606").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.2,-3.9).lineTo(-2.2,0.7).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.5).curveTo(1.5,2.6,2,1.8).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.6,4.6,3.4).curveTo(4.1,4.4,2.1,4.5).closePath();
	this.shape_6.setTransform(-4.3,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#C10606").beginStroke().moveTo(4.7,4.5).lineTo(-3.1,4.5).curveTo(-4.5,4.5,-5.1,3.5).lineTo(-5.4,2.6).lineTo(-5.4,1.7).curveTo(-5.1,0.7,-4.2,0.3).curveTo(-2.8,-0.3,2,-2).curveTo(2,-2,2.1,-2).curveTo(2.1,-2,2.2,-2).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.2,2.2,-2.2).curveTo(2.2,-2.3,2.2,-2.3).curveTo(2.2,-2.3,2.1,-2.4).curveTo(2.1,-2.4,2,-2.4).curveTo(1.9,-2.4,1.8,-2.5).curveTo(1.4,-2.6,-1.7,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-3).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).curveTo(5.6,-0.8,4.1,-0.2).curveTo(-0.4,1.3,-1.6,1.8).curveTo(-2.4,2.1,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.8).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_7.setTransform(8,34.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#C10606").beginStroke().moveTo(-5.2,3.9).lineTo(-5.2,2.8).curveTo(-5.2,2.5,-4.8,2.4).lineTo(-4.5,2.4).lineTo(1.7,2.4).curveTo(2.1,2.4,2.2,2.3).curveTo(2.3,2.1,1.6,1.8).lineTo(-4.1,-0.2).curveTo(-5.1,-0.6,-5.4,-1.6).lineTo(-5.4,-2.6).lineTo(-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.5).curveTo(5.1,-4.4,5.1,-4).lineTo(5.1,-3).curveTo(5.1,-2.4,4.7,-2.5).curveTo(-1.1,-2.6,-1.9,-2.5).curveTo(-2,-2.4,-2.1,-2.4).curveTo(-2.1,-2.4,-2.2,-2.4).curveTo(-2.2,-2.3,-2.3,-2.3).curveTo(-2.3,-2.3,-2.3,-2.2).curveTo(-2.3,-2.2,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-2,-2,-2).lineTo(4.2,0.3).curveTo(5.6,0.9,5.4,2.6).curveTo(5.4,3.1,5.1,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,3.9).closePath();
	this.shape_8.setTransform(-16.5,34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#C10606").beginStroke().moveTo(1,4.5).lineTo(-1,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.2,-1.5,-4.3).curveTo(-1.5,-4.3,-1.4,-4.4).curveTo(-1.4,-4.4,-1.3,-4.5).curveTo(-1.3,-4.5,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.4,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4).curveTo(1.5,4.5,1.1,4.5).lineTo(1,4.5).closePath();
	this.shape_9.setTransform(-25.2,34.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#999999").beginStroke().moveTo(-93.8,27.1).lineTo(-93.8,-27.1).lineTo(43.9,-26.5).lineTo(93.8,-3.4).lineTo(93.8,26.5).lineTo(70.7,26.5).curveTo(72.5,11,63.4,-0.2).curveTo(53.9,-12.1,37.1,-12.1).curveTo(14.6,-12.1,5.4,4.3).curveTo(2.4,9.7,0.5,17.4).lineTo(-1.5,27.1).closePath();
	this.shape_10.setTransform(42.3,33.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.8,-26,0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.8,18.4,18.4).curveTo(10.7,26,0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_11.setTransform(-88.6,51.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.8,18.4,18.4).curveTo(10.7,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape_12.setTransform(79,51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).lineTo(-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.5,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).curveTo(1.9,-2.4,-3.9,-1.8).curveTo(-8.5,-1.3,-18.5,-0.6).curveTo(-19.9,0.6,-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.8).closePath();
	this.shape_13.setTransform(-120.7,-65.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.5,1.9).closePath();
	this.shape_14.setTransform(-94.5,-71.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_15.setTransform(-141.2,-20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_16.setTransform(-141.2,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0.1,0.5).lineTo(-0.8,0.5).curveTo(-2.1,0.5,-3,0.3).closePath();
	this.shape_17.setTransform(-141.3,-6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#999999").beginStroke().moveTo(-3.2,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).lineTo(-3.1,-5).lineTo(2.4,-6.7).curveTo(2.9,-6.9,3.3,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,4,3.2,4.5).curveTo(2.4,5.1,-1.4,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.2,6.7).closePath();
	this.shape_18.setTransform(-141.3,-3.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.5,-12.9,0.8,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.6,5,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_19.setTransform(-137.1,-46.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#999999").beginStroke().moveTo(3.4,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.8,12.2,-5.8,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6.1,-10.6,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.8,-14.4).curveTo(5.1,-14.4,5.6,-11.1).curveTo(6.2,-6.7,6.3,1.1).curveTo(6.3,5.1,5.8,11.1).curveTo(5.7,12.2,5.1,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.4,14.3).closePath();
	this.shape_20.setTransform(-138.3,-46.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#999999").beginStroke().moveTo(-2.3,5.7).curveTo(-3,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.8,-2.6,-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.8,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.1).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.4).lineTo(-0.4,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_21.setTransform(-159.7,-21);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(1.3,-11.7,6.4,-25.5).curveTo(9.2,-25,7.8,-20.5).lineTo(4.7,-10.6).curveTo(2.1,-2.3,1,1.8).curveTo(-0.1,5.8,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_22.setTransform(-150.1,-44.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_23.setTransform(-159.5,16.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_24.setTransform(-159.1,35.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.4,-4.7,-1.7).lineTo(4.7,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_25.setTransform(-158,46.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_26.setTransform(-154.3,50.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.7,-8.4).lineTo(0.7,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_27.setTransform(-153.5,42.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.9).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.5).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.4,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.9).lineTo(-4.4,-6.9).closePath();
	this.shape_28.setTransform(-155,40.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.2,3.2,-1.5,1.9).curveTo(-2,-1,-2,-4.6).curveTo(-1,-3.3,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_29.setTransform(-161.4,41);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,3.1,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_30.setTransform(-79.5,-2.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.3).curveTo(-3.9,8.2,-4.5,7.7).curveTo(-5,7.1,-5,6.4).curveTo(-5.5,2.2,-5.3,-2.4).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.7).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.3,-8.2).curveTo(4,-8.2,4.6,-7.7).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.5).curveTo(5.4,3.8,5.1,6.4).curveTo(5.1,7.1,4.6,7.7).curveTo(4,8.2,3.3,8.3).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.3).closePath();
	this.shape_31.setTransform(-79.6,-2.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-50,62).curveTo(-50.4,61.8,-51,61.2).curveTo(-52,60.2,-52.5,58.5).curveTo(-53.2,56.4,-53.5,53.3).lineTo(-54,48).curveTo(-54.2,44.9,-53.3,42.1).lineTo(-52.4,39.9).curveTo(-53.3,23.7,-53.3,18.3).curveTo(-53.3,14.9,-52.8,6.7).lineTo(-52.3,-0.9).lineTo(-48.1,-7.9).curveTo(-47.1,-12.9,-43.6,-27.3).curveTo(-40.1,-41.6,-32.9,-60.5).curveTo(-32.5,-61.4,-31.9,-61.8).curveTo(-31.3,-62.2,-29.7,-62.4).curveTo(-22.5,-63.3,5.4,-64.5).lineTo(31.8,-65.5).curveTo(34.7,-65.6,36.1,-65.3).curveTo(38.3,-64.9,40.2,-63.5).curveTo(42.1,-62.2,43.2,-61.2).lineTo(45.3,-59.2).curveTo(46.4,-58.2,47.8,-56.1).curveTo(48.9,-54.3,49.7,-52.7).curveTo(50.9,-50.1,52.2,-44.6).curveTo(54,-36.9,54,-29.7).lineTo(54,-12.7).curveTo(54,-9.9,53.3,-8.8).curveTo(50,-2.2,50,-0.1).lineTo(50,6.5).curveTo(50,8,49.5,8.9).curveTo(49,9.7,49,10.5).lineTo(49,25.4).lineTo(39.1,25.7).lineTo(36,26).lineTo(36,28.3).curveTo(24.9,28.4,20,29).curveTo(13.2,29.9,10.4,31.2).curveTo(3.7,34.3,-1.3,42.9).curveTo(-3.6,46.8,-6.7,53.4).curveTo(-7.5,54.5,-9.1,54.5).lineTo(-17.2,54.5).lineTo(-18.7,54.1).lineTo(-21.4,54.5).lineTo(-39,54.5).lineTo(-39,61.9).curveTo(-39,63.3,-39.8,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-48.5,65.5,-50,62).closePath().moveTo(9.8,-55.4).curveTo(-9.6,-54.6,-16,-53.6).curveTo(-21.4,-52.8,-23,-51.9).curveTo(-24.2,-51.1,-25.6,-48.5).curveTo(-26.6,-46.5,-28.8,-36.4).curveTo(-31.1,-26.4,-31.5,-22.1).curveTo(-31.9,-18.2,-32.2,-10.8).curveTo(-32.5,-4,-32.5,-1.5).lineTo(-32.4,-0.4).lineTo(-31.2,-0.7).lineTo(9.3,-16.4).curveTo(14,-18.1,26.6,-20.3).lineTo(29.1,-20.8).curveTo(30.3,-21,30.7,-21.4).curveTo(30.9,-21.7,30.9,-22.3).lineTo(31.5,-51.8).curveTo(31.5,-54.2,30.7,-55).curveTo(30,-55.8,28,-56).curveTo(19.5,-55.8,9.8,-55.4).closePath();
	this.shape_32.setTransform(-109.9,-12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-51.2,24.4).lineTo(-51.2,22.7).lineTo(-55.2,22.9).lineTo(-55.2,17.3).lineTo(-104.2,17.3).lineTo(-104.2,21.2).lineTo(-119.2,19.4).lineTo(-130.7,5.5).lineTo(-126.6,-24.7).lineTo(-51.7,-24.7).lineTo(-49.9,-16.7).lineTo(104.8,-17.7).curveTo(100.8,-14.4,105.4,-10.4).curveTo(108.2,-8,117.2,-3.6).curveTo(126.3,0.9,128.7,2.8).curveTo(132.8,6.3,128.3,8.8).curveTo(128.1,8.9,127,12).curveTo(125.9,15.3,125.8,15.3).lineTo(100.1,13.1).lineTo(91.7,10.3).lineTo(54.8,10.3).curveTo(55.7,10.7,58.6,10.9).curveTo(56.1,11.5,55.3,13.9).curveTo(54.4,16.2,55.5,18.3).curveTo(46,18.8,35.8,15.6).curveTo(31.5,14.3,29,14.5).curveTo(25.4,14.8,23.6,18).curveTo(23.7,15.8,25,14.1).curveTo(24.6,13.5,24.4,12.8).lineTo(24.3,12.2).lineTo(23.2,11.3).lineTo(7.8,11.3).lineTo(7.8,13.4).lineTo(8.1,15.1).curveTo(8.3,16.3,7.9,16.3).lineTo(-18.3,16.3).curveTo(-18.7,16.3,-20,15.1).curveTo(-21.2,13.8,-21.2,13.4).lineTo(-21.2,12.3).lineTo(-22.6,12.3).lineTo(-22.9,16.3).lineTo(-26.2,16.3).lineTo(-26.4,12.3).lineTo(-30.7,12.3).curveTo(-33.2,13.6,-34.2,14.8).lineTo(-34.2,18.1).curveTo(-34.2,21.5,-37.8,21.9).curveTo(-38.7,22,-42.1,22.2).lineTo(-48.2,22.6).lineTo(-48.2,24.7).closePath().moveTo(33.4,11.2).lineTo(37.8,10.9).curveTo(40,10.6,40.9,10.3).lineTo(21.4,10.3).closePath();
	this.shape_33.setTransform(-10.7,33.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-25.6,-11.1).lineTo(0.4,-14.1).lineTo(27.3,13.8).lineTo(-27.3,14.1).closePath();
	this.shape_34.setTransform(27.6,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.3,4.7,-186.4,-0).curveTo(-186.3,-4.7,-131.8,-8).curveTo(-77.2,-11.3,0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.3,-0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_35.setTransform(2.8,80.2,0.85,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Capa 3
	this.instance = new lib.arrastreconductor();
	this.instance.parent = this;
	this.instance.setTransform(-112.4,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.9,-77.5,325.1,169.1);


// stage content:
(lib.gruadearrastre = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_191 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(1));

	// llanta
	this.instance = new lib.llanta();
	this.instance.parent = this;
	this.instance.setTransform(1298.3,436.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({rotation:-1800,x:417.3},32).wait(54).to({rotation:-3240,x:531.3},62).to({rotation:-4320,x:417.3},30).to({x:-399.7},11).wait(1));

	// llanta
	this.instance_1 = new lib.llanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1130.3,435.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({rotation:-1800,x:249.3},32).wait(54).to({rotation:-3240,x:363.3},62).to({rotation:-4320,x:249.3},30).to({x:-567.7},11).wait(1));

	// gruaa-body
	this.instance_2 = new lib.arrastrebody();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1218.6,384.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:337.6},32).wait(54).to({x:451.6},62).to({x:337.6},30).to({x:-479.4},11).wait(1));

	// gruaa-brazo
	this.instance_3 = new lib.arrastrebrazo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1291,359.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:410},32).wait(30).to({rotation:-15,x:400,y:346.6},10).wait(14).to({scaleX:1,scaleY:1,rotation:-14.8,x:514},62).to({scaleX:1,scaleY:1,rotation:-15,x:400},30).to({x:-417},11).wait(1));

	// gruaa-plataforma
	this.instance_4 = new lib.arrastreplataforma();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1340.7,423.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({x:459.7},32).to({rotation:15,x:515,y:436.6},22).to({scaleX:1,scaleY:1,rotation:14.8,y:436.5},8).to({regX:0.1,regY:0.1,rotation:-0.2,x:515.1,y:426.7},10).wait(14).to({rotation:-0.2},0).to({rotation:0,x:629.1},62).to({rotation:-0.2,x:515.1},30).to({x:-301.9},11).wait(1));

	// Capa 8
	this.instance_5 = new lib.arrastreotraceurda();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1363.5,377.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({x:481.6,y:377},32).wait(30).to({regX:0.1,regY:0.1,scaleX:0.8,scaleY:1.5,rotation:-4.3,x:470.3,y:367.1},10).wait(14).to({x:584.3},62).to({x:470.3},30).to({x:-346.7},11).wait(1));

	// gruaa-jeep
	this.instance_6 = new lib.arrastrejeep();
	this.instance_6.parent = this;
	this.instance_6.setTransform(647.9,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({rotation:15},10).wait(14).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:14.8,x:762,y:384.2},62).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:15,x:647.9,y:384},30).to({x:-169.1},11).wait(1));

	// fondo
	this.instance_7 = new lib.arrastrefondo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(440.7,284);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(88).to({x:732},0).to({x:3012.7},103).wait(1));

	// FlashAICB
	this.instance_8 = new lib.arrastrepiso();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-53.5,430.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88).to({x:1103.5},103).wait(1));

	// Ambient
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape.setTransform(525,182.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_1.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3141,257.5,4716,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;