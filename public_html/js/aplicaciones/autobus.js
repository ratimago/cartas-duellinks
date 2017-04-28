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



(lib.nino1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-17.1,0.4).lineTo(-14.2,-0.3).lineTo(-13,-4.9).lineTo(-8.1,-4.4).lineTo(-5.3,-6.6).lineTo(-0.9,-5.1).lineTo(1.1,-8.2).lineTo(6,-6.9).lineTo(7.9,-9).lineTo(9.8,-5.8).lineTo(13.2,-6.3).lineTo(17.1,4.7).lineTo(9.1,2).lineTo(6.2,3.7).lineTo(3.5,2.4).lineTo(0.9,3.2).lineTo(-3.1,1.8).lineTo(-4.2,3.5).lineTo(-6.5,3.2).lineTo(-16.7,9).closePath();
	this.shape.setTransform(-1.4,-29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-1,2.4).curveTo(-2.5,2.1,-4.2,1.1).lineTo(-5.5,0.1).curveTo(-0.3,1.7,3.1,-0.3).lineTo(5.5,-2.6).curveTo(4,2.6,0.3,2.6).curveTo(-0.3,2.6,-1,2.4).closePath();
	this.shape_1.setTransform(-1.3,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#E6E7E8").beginStroke().moveTo(2.6,4.8).lineTo(1.9,3.3).curveTo(1.5,4.2,0.4,4.6).curveTo(-0.8,5,0.8,1.7).lineTo(-7.6,-1.1).lineTo(-5.8,-5.8).curveTo(2,-0.5,3,-1.4).lineTo(3.3,-1.6).curveTo(5.3,-3.4,5.9,-2.3).curveTo(6.3,-1.4,5.8,-0.2).lineTo(6.8,-0.2).curveTo(7.7,-0.1,7.6,0.7).curveTo(7.4,1.9,5.5,1.4).lineTo(6.4,2.1).curveTo(7.2,2.9,6.8,3.6).curveTo(6.3,4.3,4.9,3.6).lineTo(3.7,2.9).lineTo(4.3,3.9).curveTo(4.7,5.1,4.1,5.6).curveTo(4,5.7,4,5.7).curveTo(3.9,5.7,3.9,5.7).curveTo(3.8,5.8,3.8,5.8).curveTo(3.7,5.8,3.7,5.8).curveTo(3.2,5.8,2.6,4.8).closePath();
	this.shape_2.setTransform(19.4,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,0.2).curveTo(-0.2,0.2,-0.2,0.2).curveTo(-0.3,0.1,-0.3,0.1).curveTo(-0.3,0.1,-0.3,0).curveTo(-0.3,-0.1,-0.2,-0.1).curveTo(-0.2,-0.2,-0.2,-0.2).curveTo(-0.2,-0.3,-0.1,-0.3).curveTo(-0.1,-0.3,-0,-0.3).curveTo(0,-0.3,0.1,-0.2).curveTo(0.2,-0.2,0.2,-0.2).curveTo(0.2,-0.1,0.3,-0.1).curveTo(0.3,-0,0.3,0).curveTo(0.3,0.1,0.3,0.1).lineTo(-0,0.3).lineTo(-0.1,0.2).closePath();
	this.shape_3.setTransform(6,-18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-0.3,1.5).curveTo(-0.9,1.3,-1.3,0.8).curveTo(-1.6,0.3,-1.5,-0.3).curveTo(-1.4,-1,-0.8,-1.3).curveTo(-0.3,-1.6,0.4,-1.5).curveTo(0.9,-1.4,1.3,-0.8).curveTo(1.6,-0.3,1.5,0.3).curveTo(1.3,0.9,0.8,1.3).curveTo(0.4,1.5,0,1.5).lineTo(-0.3,1.5).closePath();
	this.shape_4.setTransform(6.2,-18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,0.2).curveTo(-0.2,0.2,-0.2,0.2).curveTo(-0.2,0.1,-0.3,0.1).curveTo(-0.3,0,-0.3,-0.1).curveTo(-0.3,-0.1,-0.3,-0.2).curveTo(-0.2,-0.2,-0.2,-0.2).curveTo(-0.1,-0.3,-0.1,-0.3).curveTo(-0,-0.3,0,-0.3).curveTo(0.1,-0.3,0.1,-0.3).curveTo(0.2,-0.2,0.2,-0.2).curveTo(0.3,-0.2,0.3,-0.1).curveTo(0.3,-0.1,0.3,-0).curveTo(0.3,0,0.2,0.1).curveTo(0.2,0.1,0.2,0.2).curveTo(0.2,0.2,0.2,0.2).curveTo(0.1,0.3,0.1,0.3).curveTo(0.1,0.3,0,0.3).lineTo(-0.1,0.2).closePath();
	this.shape_5.setTransform(-9.5,-16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-0.3,1.5).curveTo(-0.9,1.4,-1.3,0.8).curveTo(-1.6,0.3,-1.5,-0.3).curveTo(-1.4,-0.9,-0.8,-1.3).curveTo(-0.3,-1.6,0.3,-1.5).curveTo(0.9,-1.3,1.3,-0.8).curveTo(1.6,-0.3,1.5,0.3).curveTo(1.4,1,0.8,1.3).curveTo(0.4,1.5,0,1.5).lineTo(-0.3,1.5).closePath();
	this.shape_6.setTransform(-9.3,-16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#574B3A").beginStroke().moveTo(-0.7,0.3).curveTo(-1.1,-1.1,0,-0.9).lineTo(-0,-0.3).curveTo(0,0.3,0.5,0.5).curveTo(1.2,0.9,0.3,0.9).lineTo(0.2,0.9).curveTo(-0.6,0.9,-0.7,0.3).closePath();
	this.shape_7.setTransform(-1.8,-14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-12.5,12.3).curveTo(-14,11,-14.9,9.2).lineTo(-15.4,7.7).curveTo(-16.3,8,-17.4,7.9).curveTo(-19.4,7.8,-19.9,6.1).curveTo(-20.5,4.3,-18.8,3.5).lineTo(-17.1,3).curveTo(-18,-1.5,-16.8,-6).curveTo(-14.3,-14.9,-3.4,-15.1).curveTo(3.6,-15.2,7.5,-13.9).curveTo(15,-11.5,16.9,-4).lineTo(18.4,-4).curveTo(19.9,-3.8,20,-2.4).curveTo(20.1,-0.9,18.5,-0.4).lineTo(16.8,-0.1).lineTo(16.6,1.7).curveTo(16.1,4,14.9,6).curveTo(11.1,12.5,1.7,14.5).curveTo(-1.2,15.1,-3.8,15.1).curveTo(-9.2,15.1,-12.5,12.3).closePath();
	this.shape_8.setTransform(-0.7,-18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-0.9,2.1).lineTo(-3.1,8.5).lineTo(-10.3,7.7).lineTo(-10.4,-9.4).lineTo(7.7,-8.4).lineTo(9,-1.8).curveTo(9.1,-0.5,10.3,8.1).lineTo(5.3,9.4).closePath();
	this.shape_9.setTransform(-0.1,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-0.2,3.2).curveTo(-1.5,3,-2.4,2.1).lineTo(-3.1,1.3).lineTo(-2.3,-3.2).lineTo(3.1,-2.7).lineTo(2.8,1.6).lineTo(2.1,2.5).curveTo(1.3,3.2,0.3,3.2).lineTo(-0.2,3.2).closePath();
	this.shape_10.setTransform(-0.1,-4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#999999").beginStroke().moveTo(-8.5,-2.4).lineTo(-12.3,-1.2).lineTo(-14.7,-6.8).lineTo(-1.9,-9.8).curveTo(1.9,-10.2,14.8,-7).lineTo(13.2,-1.3).lineTo(8.9,-3.6).lineTo(8.3,9).lineTo(-9.8,9.9).closePath();
	this.shape_11.setTransform(-0.7,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-5.5,4.9).curveTo(-6.1,4.3,-5.5,3.2).lineTo(-4.9,2.2).curveTo(-5.5,2.6,-6.2,2.9).curveTo(-7.6,3.4,-8,2.6).curveTo(-8.4,1.9,-7.5,1.2).lineTo(-6.5,0.6).curveTo(-8.5,0.9,-8.6,-0.3).curveTo(-8.6,-1.1,-7.7,-1.1).curveTo(-7.2,-1.2,-6.7,-1.1).curveTo(-7.1,-2.3,-6.6,-3.1).curveTo(-6.3,-3.6,-5.5,-3.3).curveTo(-4.8,-3,-4.1,-2.2).lineTo(-3.8,-2).curveTo(-2.9,-1,5.4,-5.2).lineTo(8.6,-0.6).lineTo(-1.9,1.4).curveTo(-0.6,4.7,-1.7,4.3).curveTo(-2.4,4,-2.9,3.4).lineTo(-3.1,2.8).lineTo(-4,4.3).curveTo(-4.6,5.2,-5.1,5.2).curveTo(-5.2,5.2,-5.2,5.1).curveTo(-5.3,5.1,-5.3,5.1).curveTo(-5.4,5.1,-5.4,5).curveTo(-5.5,5,-5.5,4.9).closePath();
	this.shape_12.setTransform(-18.4,5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#E6E7E8").beginStroke().moveTo(0.9,7.4).curveTo(0.5,7.3,-0,6.9).lineTo(1.1,5.8).lineTo(-5.4,-4.2).lineTo(-1.3,-7.4).lineTo(1.4,-2.9).curveTo(4.3,2.1,5.4,4.5).curveTo(2.3,7.4,1.1,7.4).lineTo(0.9,7.4).closePath();
	this.shape_13.setTransform(6.9,31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-3.4,6.2).curveTo(-3.8,5.8,-3.9,5.3).lineTo(-2.4,5).lineTo(-1.3,-6.8).lineTo(3.9,-6.8).lineTo(3.3,-1.6).curveTo(2.5,4.1,1.9,6.7).lineTo(-0.8,6.8).curveTo(-3,6.8,-3.4,6.2).closePath();
	this.shape_14.setTransform(-7.4,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-38.6,54,77.3);


(lib.nina4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#999999").beginStroke().moveTo(0,2.5).lineTo(-2.4,3.8).lineTo(-2,1.1).lineTo(-4,-0.9).lineTo(-1.2,-1.3).lineTo(0,-3.8).lineTo(1.3,-1.3).lineTo(4,-0.9).lineTo(2,1.1).lineTo(2.5,3.8).closePath();
	this.shape.setTransform(12,-29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-22.8,14.8).curveTo(-25.4,14,-24,12.1).lineTo(-22.1,10.4).curveTo(-23.2,9.9,-22.1,8.9).lineTo(-20.8,8.1).curveTo(-23,7.2,-22.1,5.8).lineTo(-20.8,4.5).curveTo(-23.5,3.1,-22.6,1).lineTo(-21.1,-0.9).curveTo(-22.6,-1.9,-21.8,-3.4).lineTo(-20.8,-4.6).curveTo(-21.9,-6.6,-19.5,-8.5).lineTo(-16.9,-10).curveTo(-16.5,-11.5,-14.1,-11.9).curveTo(-13,-12.2,-11.9,-12.2).curveTo(-10.1,-14.2,-7,-14.7).curveTo(-5.4,-14.9,-4.2,-14.8).curveTo(-3,-16.6,-0.4,-15.7).curveTo(0.9,-15.2,2,-14.4).curveTo(4.8,-16.2,7.4,-14.3).curveTo(8.4,-13.7,9.1,-12.8).curveTo(10.8,-13.7,12.5,-12.5).curveTo(13.4,-11.8,14,-10.8).curveTo(16.5,-11.3,17.5,-9.4).curveTo(18,-8.4,18,-7.3).curveTo(20.5,-6.9,20.1,-4.7).curveTo(19.8,-3.6,19.1,-2.6).curveTo(20.8,-2.9,21,-1.4).curveTo(21.1,-0.6,20.8,0.3).curveTo(22.5,0.7,22.4,1.9).curveTo(22.4,2.4,22.1,2.9).curveTo(24,3.7,23.5,4.8).curveTo(23.2,5.4,22.6,5.8).curveTo(23.7,7,22.4,8.4).curveTo(21.7,9.1,20.8,9.6).lineTo(23.3,9.1).curveTo(25.4,9,23.8,11.7).curveTo(22.3,14.3,17.4,14.1).lineTo(12.7,13.3).curveTo(13.8,10.1,12.5,4.3).lineTo(11.1,-0.8).curveTo(-1.2,-0,-3.4,-0.9).curveTo(-4.1,-1.2,-3.7,-1.7).lineTo(-3.2,-2).curveTo(-13,-2.4,-14.9,4.5).curveTo(-16.3,9.2,-14.1,14.5).curveTo(-13.6,16,-16.6,16).curveTo(-19.5,16,-22.8,14.8).closePath();
	this.shape_1.setTransform(-0.7,-22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-2.3,0.3).lineTo(-2.3,0).lineTo(2.3,-1).lineTo(1.2,0.5).curveTo(0.6,1,-0.2,1).curveTo(-1.2,1,-2.3,0.3).closePath();
	this.shape_2.setTransform(-0.7,-7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#5E1205").beginStroke().moveTo(-0.9,-0.1).curveTo(-0.4,-0.5,0.6,-0.2).lineTo(1.4,0.1).lineTo(-1.1,0.3).lineTo(-1.4,0.3).curveTo(-1.6,0.3,-0.9,-0.1).closePath();
	this.shape_3.setTransform(5.2,-18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#5E1205").beginStroke().moveTo(-0.7,-0.1).curveTo(0.1,-0.6,0.8,-0.4).curveTo(1.9,-0,1.1,-0.1).lineTo(-1.4,0.5).lineTo(-0.7,-0.1).closePath();
	this.shape_4.setTransform(-9.1,-16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,0).curveTo(-0.2,-0.1,-0.2,-0.1).curveTo(-0.2,-0.1,-0.2,-0.2).curveTo(-0.2,-0.2,-0.1,-0.2).curveTo(-0.1,-0.2,-0,-0.2).curveTo(0,-0.2,0.1,-0.2).curveTo(0.1,-0.2,0.2,-0.2).curveTo(0.2,-0.2,0.2,-0.1).curveTo(0.2,-0.1,0.2,0).curveTo(0.2,0.1,0.2,0.1).curveTo(0.2,0.1,0.2,0.2).curveTo(0.2,0.2,0.1,0.2).curveTo(0.1,0.2,0,0.2).lineTo(-0.1,0.2).curveTo(-0.1,0.2,-0.1,0.2).curveTo(-0.2,0.2,-0.2,0.2).curveTo(-0.2,0.1,-0.2,0.1).curveTo(-0.2,0.1,-0.2,0).closePath();
	this.shape_5.setTransform(6.1,-16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-0.2,1.2).curveTo(-0.8,1.1,-1,0.7).curveTo(-1.3,0.2,-1.2,-0.3).curveTo(-1.1,-0.8,-0.7,-1).curveTo(-0.3,-1.3,0.2,-1.2).curveTo(0.7,-1.1,1,-0.7).curveTo(1.3,-0.3,1.2,0.2).curveTo(1.2,0.7,0.7,1).curveTo(0.4,1.3,0,1.3).lineTo(-0.2,1.2).closePath();
	this.shape_6.setTransform(5.8,-16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,0).curveTo(-0.2,-0,-0.2,-0.1).curveTo(-0.2,-0.1,-0.2,-0.2).curveTo(-0.2,-0.2,-0.1,-0.2).curveTo(-0.1,-0.2,-0,-0.2).curveTo(0,-0.2,0,-0.2).curveTo(0.1,-0.2,0.1,-0.2).curveTo(0.1,-0.2,0.2,-0.1).curveTo(0.2,-0.1,0.2,-0).curveTo(0.2,0,0.2,0.1).curveTo(0.2,0.1,0.2,0.2).curveTo(0.1,0.2,0.1,0.2).curveTo(0,0.2,-0,0.2).curveTo(-0.1,0.2,-0.1,0.2).curveTo(-0.2,0.2,-0.2,0.2).curveTo(-0.2,0.2,-0.2,0.1).curveTo(-0.2,0.1,-0.2,0).closePath();
	this.shape_7.setTransform(-8.5,-14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-0.2,1.2).curveTo(-0.7,1.1,-1,0.7).curveTo(-1.3,0.3,-1.2,-0.2).curveTo(-1.1,-0.7,-0.7,-1).curveTo(-0.3,-1.3,0.2,-1.2).curveTo(0.8,-1.1,1,-0.7).curveTo(1.3,-0.3,1.2,0.2).curveTo(1.1,0.8,0.7,1).curveTo(0.4,1.2,0,1.2).lineTo(-0.2,1.2).closePath();
	this.shape_8.setTransform(-8.4,-14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#D79E7A").beginStroke().moveTo(-0.9,1.1).lineTo(-0.7,-0).lineTo(-0.9,-1.1).lineTo(-0.4,-1.2).curveTo(0.1,-1.2,0.5,-0.9).curveTo(0.9,-0.5,0.9,-0).curveTo(0.9,0.5,0.6,0.8).curveTo(0.2,1.2,-0.3,1.2).lineTo(-0.5,1.2).lineTo(-0.9,1.1).closePath();
	this.shape_9.setTransform(14.6,-15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#F6CFB5").beginStroke().moveTo(-1.6,2.1).curveTo(-1.4,1.2,-1.4,-0).curveTo(-1.4,-1,-1.7,-2.1).lineTo(-0.8,-2.3).curveTo(0.2,-2.3,1,-1.6).curveTo(1.7,-1,1.7,-0.1).curveTo(1.7,0.9,1,1.6).curveTo(0.4,2.2,-0.6,2.3).curveTo(-1.2,2.3,-1.6,2.1).closePath();
	this.shape_10.setTransform(14.6,-15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D79E7A").beginStroke().moveTo(-0.5,0.3).curveTo(-0.8,-0.1,-0.6,-0.4).curveTo(-0.6,-0.5,-0.6,-0.5).curveTo(-0.6,-0.6,-0.5,-0.6).curveTo(-0.5,-0.6,-0.5,-0.6).curveTo(-0.4,-0.6,-0.4,-0.6).lineTo(-0.3,-0.5).curveTo(-0.5,0.3,0.1,0.3).curveTo(0.4,0.3,0.7,0.1).curveTo(0.9,0.3,0.2,0.6).lineTo(-0,0.6).curveTo(-0.3,0.6,-0.5,0.3).closePath();
	this.shape_11.setTransform(-1.7,-12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-10.4,10).curveTo(-15.1,6,-15.3,0.4).curveTo(-15.4,-5.3,-11,-9.4).curveTo(-6.5,-13.5,-0.2,-13.7).curveTo(6,-13.8,10.6,-9.9).curveTo(15.1,-6,15.3,-0.4).curveTo(15.4,5.3,11.1,9.4).curveTo(6.8,13.5,0.5,13.7).lineTo(-0.1,13.7).curveTo(-6,13.7,-10.4,10).closePath();
	this.shape_12.setTransform(-1.9,-15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#999999").beginStroke().moveTo(-10.6,7.2).curveTo(-12.5,6.3,-13.7,4.9).lineTo(-14.7,3.8).curveTo(-11.3,-0.2,-9.3,-4.5).lineTo(-7.9,-8.1).lineTo(-5.4,-8.4).lineTo(-5.1,-8.5).curveTo(-4.1,-8.6,-0.9,-8.4).curveTo(4.6,-7.9,7.4,-9).curveTo(7.3,-5.1,11,-0.2).curveTo(12.8,2.2,14.7,3.9).lineTo(12.5,5.5).curveTo(9.3,7.3,4.1,8.3).curveTo(0.7,9,-2.2,9).curveTo(-7,9,-10.6,7.2).closePath();
	this.shape_13.setTransform(0,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-2.4,-0.6).lineTo(-2,-0.8).lineTo(1,-1.5).lineTo(2.4,-1.1).curveTo(2.4,0,1.4,0.8).curveTo(0.5,1.4,-0.7,1.5).lineTo(-0.7,1.5).curveTo(-2,1.5,-2.4,-0.6).closePath();
	this.shape_14.setTransform(0.6,-2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,1.4).lineTo(0,-0.7).lineTo(-1,1.2).curveTo(-2.3,3,-3.8,2.2).curveTo(-5.3,1.4,-4.5,-0.4).lineTo(-3.4,-2).lineTo(-1,-2.7).curveTo(1.5,-3.3,2.5,-3).curveTo(3.9,-2.6,4.6,0.1).curveTo(5.2,2.8,3.6,3.1).lineTo(3.3,3.1).curveTo(2,3.1,0.9,1.4).closePath();
	this.shape_15.setTransform(0.6,-0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-1.4,7.5).curveTo(-6.2,7.3,-8.4,7).curveTo(-8.2,5.5,-8.3,2.2).curveTo(-8.5,-1,-8.4,-1.5).curveTo(-8.2,-2.6,-7.8,-3.9).lineTo(-7.4,-4.9).lineTo(2,-7.6).lineTo(8.4,-5.9).lineTo(8,-3.4).curveTo(7.5,-0.5,7.4,0.9).curveTo(7.3,2.1,7.7,4.1).curveTo(8,6.1,7.9,7.3).curveTo(5.7,7.6,2.5,7.6).lineTo(-1.4,7.5).closePath();
	this.shape_16.setTransform(0,4.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-0.1,4).curveTo(-3.3,3.7,-3.7,1.2).curveTo(-4.6,2.1,-4.8,1.2).curveTo(-5,0.7,-4.5,0.3).lineTo(-3.9,-0).curveTo(-5.2,-0.5,-4.6,-1.2).curveTo(-4.2,-1.7,-3.8,-1.5).lineTo(-3.7,-1.4).curveTo(-4.5,-2.6,-3.8,-3.3).curveTo(-3.3,-3.8,-2.9,-3.6).curveTo(-2.9,-3.6,-2.8,-3.6).curveTo(-2.8,-3.6,-2.8,-3.5).curveTo(-2.7,-3.5,-2.7,-3.5).curveTo(-2.7,-3.5,-2.7,-3.4).lineTo(0.5,-4).curveTo(3.8,-4.2,4.6,-1.9).curveTo(5.3,0.5,4.3,2.4).curveTo(3.7,3.3,3,3.8).curveTo(2,4,0.8,4).lineTo(-0.1,4).closePath();
	this.shape_17.setTransform(-11.1,2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-3.4,3.7).curveTo(-5.2,2,-4.4,-1).lineTo(-3.2,-3.6).lineTo(-1.3,-4.5).curveTo(0.9,-4.9,2.4,-3).lineTo(2.7,-3.5).curveTo(3,-3.9,3.4,-3.5).curveTo(4,-2.8,3.2,-1.9).lineTo(3.8,-1.9).curveTo(4.4,-1.8,4.3,-1.2).curveTo(4.1,-0.3,3.4,-0.7).lineTo(4.2,-0.3).curveTo(4.8,0.4,4.6,1).curveTo(4.4,1.6,4,1.7).lineTo(3.7,1.6).lineTo(1.2,3.6).curveTo(-0.3,4.5,-1.5,4.5).curveTo(-2.6,4.5,-3.4,3.7).closePath();
	this.shape_18.setTransform(11.1,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-8.7,4.6).curveTo(-9.5,4,-9.6,2.2).lineTo(-9.6,0.6).lineTo(-7,0.3).curveTo(-4.2,-0,-3.1,-0.3).lineTo(4.1,-2.3).lineTo(6.6,-4.1).curveTo(7,-4.4,7.5,-4.6).curveTo(8,-4.8,8.1,-4.6).curveTo(8.3,-4.2,7.2,-3.4).lineTo(8.1,-3.8).curveTo(9.1,-4.1,9.2,-3.8).curveTo(9.5,-3.2,7.3,-2.6).lineTo(8.3,-2.8).curveTo(9.4,-3,9.6,-2.6).curveTo(9.9,-1.9,7.4,-1.7).lineTo(8.5,-1.7).curveTo(9.6,-1.5,9.5,-1.2).curveTo(9.3,-0.6,7.3,-1).curveTo(8.4,-0,8,0.2).curveTo(7.7,0.4,7.1,0.2).curveTo(6.6,0,6.5,-0.2).curveTo(5.1,0.7,4.3,0.6).curveTo(1.4,1.8,-1.7,3).curveTo(-6.4,4.7,-8,4.7).curveTo(-8.5,4.7,-8.7,4.6).closePath();
	this.shape_19.setTransform(15.9,-1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#E6E7E8").beginStroke().moveTo(1.9,3).lineTo(-4.5,0.9).curveTo(-5,1,-5.9,0.6).lineTo(-6.8,0.2).curveTo(-6.9,0.5,-7.4,0.7).curveTo(-8,0.9,-8.3,0.8).curveTo(-8.6,0.7,-8.2,0.1).lineTo(-7.7,-0.5).curveTo(-9.8,-0,-10,-0.6).curveTo(-10.1,-1,-9,-1.2).lineTo(-7.9,-1.3).curveTo(-10.5,-1.4,-10.2,-2.1).curveTo(-10,-2.5,-8.9,-2.4).lineTo(-8.3,-2.3).curveTo(-10.1,-2.8,-9.9,-3.3).curveTo(-9.7,-3.7,-8.7,-3.4).lineTo(-7.7,-3).curveTo(-9,-3.8,-8.8,-4.2).curveTo(-8.7,-4.5,-8.1,-4.3).lineTo(-7.2,-3.8).lineTo(-4.4,-2.2).lineTo(3.2,-0.6).curveTo(5.1,-0.2,10,-0).lineTo(10.2,1.6).curveTo(10.2,3.5,9.3,4.2).curveTo(9.1,4.4,8.5,4.4).curveTo(6.7,4.4,1.9,3).closePath();
	this.shape_20.setTransform(-15.4,1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#4C4C4C").beginStroke().moveTo(3.8,1.7).lineTo(-0.9,1.6).curveTo(-4.6,1.4,-4.8,0.4).curveTo(-4.9,-0.2,-4.8,-1.8).curveTo(-1.3,-1.1,0.2,-1).curveTo(1.7,-1,2.5,-1.8).curveTo(4.4,-1.1,4.6,-0.5).curveTo(5.3,1.8,4,1.8).lineTo(3.8,1.7).closePath();
	this.shape_21.setTransform(5.8,37.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#E6E7E8").beginStroke().moveTo(3.8,8.1).lineTo(-0.9,8).curveTo(-4.6,7.8,-4.8,6.7).curveTo(-4.9,5.6,-4.5,0.3).curveTo(-4.2,-4.7,-4,-5.2).curveTo(-3.9,-5.6,-4.2,-6.9).lineTo(-4.5,-8.1).lineTo(-1.6,-8).curveTo(1.2,-7.7,1.1,-6.9).lineTo(0.1,3.9).lineTo(2.2,4.5).curveTo(4.4,5.2,4.6,5.9).curveTo(5.3,8.1,4,8.1).lineTo(3.8,8.1).closePath();
	this.shape_22.setTransform(5.8,30.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-4.6,-0.4).curveTo(-4.4,-1.1,-2.4,-1.7).curveTo(-1.7,-0.9,-0.2,-1).curveTo(1.2,-1.1,4.8,-1.8).lineTo(4.8,0.3).curveTo(4.7,1.4,0.9,1.6).lineTo(-3.8,1.8).lineTo(-4,1.8).curveTo(-5.2,1.8,-4.6,-0.4).closePath();
	this.shape_23.setTransform(-5.6,36.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-4.6,5.9).curveTo(-4.4,5.3,-2.3,4.5).lineTo(-0.2,3.9).lineTo(-1.3,-6.8).curveTo(-1.4,-7.7,1.4,-8).curveTo(2.8,-8.2,4.3,-8.2).lineTo(4,-6.9).curveTo(3.8,-5.6,3.9,-5.3).lineTo(4.5,0.3).curveTo(4.9,5.6,4.8,6.7).curveTo(4.7,7.7,0.9,8).lineTo(-3.8,8.1).lineTo(-4.1,8.2).curveTo(-5.2,8.2,-4.6,5.9).closePath();
	this.shape_24.setTransform(-5.5,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-38.8,51.2,77.7);


(lib.nina3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-1.4,1).lineTo(-3.9,-1.4).curveTo(-0.7,0.6,1.9,-0.2).curveTo(3.3,-0.5,3.9,-1.3).curveTo(2.3,1.4,0.3,1.4).curveTo(-0.5,1.4,-1.4,1).closePath();
	this.shape.setTransform(-0.1,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,0.1).curveTo(-0.1,0.1,-0.2,0.1).curveTo(-0.2,0.1,-0.2,0).curveTo(-0.2,-0,-0.2,-0).curveTo(-0.2,-0.1,-0.1,-0.1).curveTo(-0.1,-0.2,-0.1,-0.2).curveTo(-0,-0.2,-0,-0.2).curveTo(0,-0.2,0.1,-0.2).curveTo(0.1,-0.2,0.1,-0.1).curveTo(0.1,-0.1,0.2,-0.1).curveTo(0.2,-0.1,0.2,-0).curveTo(0.2,0,0.2,0).curveTo(0.2,0.1,0.2,0.1).lineTo(0,0.2).lineTo(-0.1,0.1).closePath();
	this.shape_1.setTransform(7.3,-17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-0.4,0.9).curveTo(-0.8,0.7,-1,0.3).curveTo(-1.1,-0.1,-0.9,-0.4).curveTo(-0.7,-0.8,-0.3,-1).curveTo(0.1,-1.1,0.5,-0.9).curveTo(0.8,-0.7,0.9,-0.3).curveTo(1.1,0.1,0.9,0.5).curveTo(0.7,0.8,0.3,0.9).lineTo(-0,1).lineTo(-0.4,0.9).closePath();
	this.shape_2.setTransform(7.5,-17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,0.1).curveTo(-0.2,0.1,-0.2,0).curveTo(-0.2,0,-0.2,-0).curveTo(-0.2,-0.1,-0.2,-0.1).curveTo(-0.2,-0.1,-0.1,-0.2).curveTo(-0.1,-0.2,-0.1,-0.2).curveTo(-0,-0.2,-0,-0.2).curveTo(0,-0.2,0.1,-0.2).curveTo(0.1,-0.2,0.1,-0.2).curveTo(0.2,-0.1,0.2,-0.1).curveTo(0.2,-0.1,0.2,-0).curveTo(0.2,0,0.2,0).curveTo(0.2,0.1,0.1,0.1).lineTo(0,0.2).lineTo(-0.1,0.1).closePath();
	this.shape_3.setTransform(-5,-18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-0.5,0.9).curveTo(-0.9,0.7,-1,0.3).curveTo(-1.1,-0.1,-0.9,-0.5).curveTo(-0.7,-0.8,-0.3,-1).curveTo(0.1,-1.1,0.5,-0.9).curveTo(1.3,-0.4,0.9,0.5).curveTo(0.7,0.8,0.3,1).lineTo(0,1).lineTo(-0.5,0.9).closePath();
	this.shape_4.setTransform(-4.9,-18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DCB5A1").beginStroke().moveTo(0.1,0.6).curveTo(-0.5,0.5,-0.4,0).curveTo(-0.4,-1,0.3,-0.6).lineTo(0.2,-0.2).curveTo(0.1,0.2,0.3,0.4).curveTo(0.4,0.5,0.4,0.5).curveTo(0.4,0.6,0.5,0.6).curveTo(0.5,0.6,0.4,0.7).curveTo(0.4,0.7,0.3,0.7).lineTo(0.1,0.6).closePath();
	this.shape_5.setTransform(-0.4,-15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1.8,15.3).curveTo(-11.3,14.7,-14.8,9.4).curveTo(-15.9,7.8,-16.2,5.8).lineTo(-16.4,4.2).curveTo(-17.3,4.3,-18.3,4).curveTo(-20.2,3.3,-20.3,1.5).curveTo(-20.3,-0.3,-18.5,-0.7).curveTo(-17.6,-0.9,-16.7,-0.7).curveTo(-16.4,-5.3,-14.1,-9.3).curveTo(-9.3,-17.3,1.2,-14.6).curveTo(7.8,-12.9,11.3,-10.6).curveTo(17.8,-6.3,17.7,1.4).lineTo(19.1,1.8).curveTo(20.5,2.5,20.2,3.8).curveTo(19.9,5.2,18.2,5.3).lineTo(16.5,5.2).lineTo(15.8,6.9).curveTo(14.8,8.9,13.1,10.6).curveTo(8.3,15.3,0,15.3).lineTo(-1.8,15.3).closePath();
	this.shape_6.setTransform(1,-21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-10.3,6.2).lineTo(-10.3,-6.8).curveTo(-10.2,-8,-9.9,-8.3).lineTo(-9.6,-8.3).lineTo(9.5,-6.8).lineTo(10.3,6.8).lineTo(3.2,7.5).lineTo(0.6,-1.9).lineTo(-5.2,8.3).closePath();
	this.shape_7.setTransform(0.9,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#E6E7E8").beginStroke().moveTo(0.1,3.1).curveTo(-1.2,3,-2.2,2.3).lineTo(-2.9,1.5).lineTo(-2.6,-3).lineTo(2.8,-3.1).lineTo(2.9,1.3).lineTo(2.3,2.2).curveTo(1.5,3.1,0.4,3.1).lineTo(0.1,3.1).closePath();
	this.shape_8.setTransform(1.3,-4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#999999").beginStroke().moveTo(-10.4,10.6).lineTo(-8.3,-4.4).lineTo(-12.4,-2).lineTo(-15.3,-7.9).lineTo(-7.8,-9.4).curveTo(0.2,-10.8,2.5,-10.5).lineTo(15.3,-7.5).lineTo(12.9,-2).lineTo(9.1,-3.1).lineTo(9.4,10.6).closePath();
	this.shape_9.setTransform(1,5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#E6E7E8").beginStroke().moveTo(4,4.3).lineTo(3.1,2.8).curveTo(2.9,3.8,1.7,4.3).curveTo(0.6,4.7,1.9,1.4).lineTo(-8.5,-0.6).lineTo(-5.3,-5.2).curveTo(2.9,-1,3.8,-2).lineTo(4.1,-2.2).curveTo(4.8,-3,5.5,-3.3).curveTo(6.3,-3.6,6.6,-3.1).curveTo(7.1,-2.3,6.7,-1.1).lineTo(7.6,-1.1).curveTo(8.6,-1.1,8.5,-0.3).curveTo(8.5,0.9,6.5,0.6).lineTo(7.5,1.2).curveTo(8.4,1.9,8,2.6).curveTo(7.6,3.4,6.2,2.9).lineTo(4.9,2.2).lineTo(5.5,3.2).curveTo(6.1,4.3,5.5,4.9).curveTo(5.5,5,5.4,5).curveTo(5.4,5.1,5.3,5.1).curveTo(5.3,5.1,5.2,5.1).curveTo(5.1,5.2,5.1,5.2).curveTo(4.6,5.2,4,4.3).closePath();
	this.shape_10.setTransform(18.3,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-5.4,4.5).curveTo(-4.3,2.1,-1.4,-2.9).lineTo(1.3,-7.4).lineTo(5.4,-4.2).lineTo(-1.1,5.8).lineTo(0,6.9).curveTo(-0.5,7.3,-0.9,7.4).lineTo(-1.1,7.4).curveTo(-2.2,7.4,-5.4,4.5).closePath();
	this.shape_11.setTransform(-5.9,29.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-1.9,6.7).curveTo(-2.5,4.1,-3.3,-1.6).lineTo(-3.9,-6.8).lineTo(1.3,-6.8).lineTo(2.3,5).lineTo(3.9,5.3).curveTo(3.8,5.8,3.4,6.2).curveTo(3,6.8,0.8,6.8).lineTo(-1.9,6.7).closePath();
	this.shape_12.setTransform(7.4,29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-4,5.6).curveTo(-4.6,5.1,-4.2,3.9).lineTo(-3.6,2.9).curveTo(-4.2,3.3,-4.9,3.6).curveTo(-6.2,4.3,-6.7,3.6).curveTo(-7.1,2.9,-6.3,2.1).lineTo(-5.4,1.4).curveTo(-7.4,1.9,-7.5,0.7).curveTo(-7.6,-0.1,-6.7,-0.2).lineTo(-5.8,-0.2).curveTo(-6.2,-1.4,-5.8,-2.3).curveTo(-5.3,-3.4,-3.2,-1.6).lineTo(-3,-1.4).curveTo(-2,-0.5,5.8,-5.8).lineTo(7.6,-1.1).lineTo(-0.8,1.7).curveTo(0.8,5,-0.3,4.6).curveTo(-1.1,4.4,-1.5,3.8).lineTo(-1.9,3.3).lineTo(-2.6,4.8).curveTo(-3.2,5.8,-3.6,5.8).curveTo(-3.7,5.8,-3.7,5.8).curveTo(-3.8,5.8,-3.8,5.7).curveTo(-3.9,5.7,-3.9,5.7).curveTo(-4,5.7,-4,5.6).closePath();
	this.shape_13.setTransform(-19.3,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-36.5,53.6,73.2);


(lib.nina2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#999999").beginStroke().moveTo(-2.6,-3.2).lineTo(2.5,-2.5).lineTo(-0.6,3.2).closePath();
	this.shape.setTransform(0.6,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,0).curveTo(-0.2,-0,-0.2,-0.1).curveTo(-0.2,-0.1,-0.1,-0.1).curveTo(-0.1,-0.1,-0.1,-0.2).curveTo(-0.1,-0.2,-0,-0.2).curveTo(0,-0.2,0.1,-0.2).curveTo(0.1,-0.2,0.1,-0.1).curveTo(0.2,-0.1,0.2,-0.1).curveTo(0.2,-0.1,0.2,-0).curveTo(0.2,0,0.2,0.1).curveTo(0.2,0.1,0.1,0.1).curveTo(0.1,0.2,0.1,0.2).curveTo(0.1,0.2,0,0.2).curveTo(-0,0.2,-0.1,0.2).curveTo(-0.1,0.2,-0.1,0.1).curveTo(-0.1,0.1,-0.2,0.1).curveTo(-0.2,0.1,-0.2,0).closePath();
	this.shape_1.setTransform(-5.4,-13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-0.2,1).curveTo(-0.6,1,-0.9,0.6).curveTo(-1.1,0.2,-1,-0.2).curveTo(-0.9,-0.6,-0.6,-0.9).curveTo(-0.2,-1.1,0.2,-1).curveTo(0.6,-0.9,0.9,-0.5).curveTo(1.1,-0.2,1,0.2).curveTo(1,0.6,0.6,0.9).curveTo(0.3,1,0,1).lineTo(-0.2,1).closePath();
	this.shape_2.setTransform(-5.7,-13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,0).curveTo(-0.2,-0,-0.2,-0.1).curveTo(-0.2,-0.1,-0.2,-0.1).curveTo(-0.2,-0.1,-0.1,-0.2).curveTo(-0.1,-0.2,-0,-0.2).curveTo(0,-0.2,0.1,-0.2).curveTo(0.1,-0.2,0.1,-0.1).curveTo(0.2,-0.1,0.2,-0.1).curveTo(0.2,-0.1,0.2,-0).curveTo(0.2,0,0.2,0.1).curveTo(0.2,0.1,0.1,0.1).curveTo(0.1,0.1,0.1,0.2).curveTo(0,0.2,-0,0.2).curveTo(-0,0.2,-0.1,0.2).curveTo(-0.1,0.2,-0.1,0.1).curveTo(-0.1,0.1,-0.2,0.1).curveTo(-0.2,0.1,-0.2,0).closePath();
	this.shape_3.setTransform(7.8,-11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-0.2,1).curveTo(-0.6,1,-0.9,0.6).curveTo(-1.1,0.2,-1,-0.2).curveTo(-0.9,-0.6,-0.6,-0.9).curveTo(-0.2,-1.1,0.2,-1).curveTo(0.6,-0.9,0.9,-0.5).curveTo(1.1,-0.2,1,0.2).curveTo(0.9,0.6,0.6,0.9).curveTo(0.3,1,0,1).lineTo(-0.2,1).closePath();
	this.shape_4.setTransform(7.5,-11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-2.8,8.8).curveTo(-4.2,8.6,-7.6,7.8).lineTo(-10.7,7.1).lineTo(-7.4,-3.7).lineTo(-10.5,-4.2).lineTo(-9.6,-8.7).lineTo(-6.4,-8.1).curveTo(-2.6,-7.5,0.4,-7.3).curveTo(3.5,-7.1,6.6,-8).curveTo(8.2,-8.5,9.2,-9).lineTo(10.7,-3.9).lineTo(6.5,-2.7).lineTo(7.4,8.9).lineTo(2,9).curveTo(-1.3,9,-2.8,8.8).closePath();
	this.shape_5.setTransform(0.9,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#999999").beginStroke().moveTo(-5.7,3.6).curveTo(-8.4,2.7,-10.8,1.2).lineTo(-12.6,-0.2).lineTo(-7.7,-4.9).curveTo(-2.7,-3.2,4.4,-2.9).curveTo(7.9,-2.8,10.4,-3).lineTo(12.6,2.6).curveTo(7.1,4.9,1.9,4.9).curveTo(-2,4.9,-5.7,3.6).closePath();
	this.shape_6.setTransform(-2,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#0D0C0C").beginStroke().moveTo(-3.2,-1).lineTo(-1,-0.4).curveTo(1.5,0.1,3.2,-0.7).curveTo(2.6,0.3,1.4,0.8).curveTo(0.8,1,0.2,1).curveTo(-1.5,1,-3.2,-1).closePath();
	this.shape_7.setTransform(0,-4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#D2A98E").beginStroke().moveTo(0.1,0.6).curveTo(-0.2,0.5,-0.4,0.4).curveTo(-0.5,0.2,-0.2,-0.2).curveTo(0.2,-0.7,0.3,-0.6).lineTo(0.2,-0).curveTo(0.1,0.4,0.3,0.5).curveTo(0.3,0.5,0.4,0.5).curveTo(0.4,0.5,0.4,0.6).curveTo(0.4,0.6,0.4,0.6).curveTo(0.4,0.6,0.3,0.6).lineTo(0.1,0.6).closePath();
	this.shape_8.setTransform(0,-8.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-0.6,12.3).curveTo(-9.7,12.1,-13.5,6.2).curveTo(-14.7,4.3,-15.2,2.1).lineTo(-15.5,0.3).curveTo(-16.8,0.3,-17.6,-0.4).curveTo(-18.4,-1.1,-18.2,-2.3).curveTo(-18.1,-3.6,-16.9,-3.4).curveTo(-16.3,-3.2,-15.7,-2.8).curveTo(-12.4,-4,-3.2,-4.8).lineTo(-2.1,-12.3).lineTo(-2.3,-4.8).lineTo(6.3,-4).curveTo(7,-4.6,6.8,-10.9).curveTo(8.2,-8.8,8.6,-3.6).curveTo(11.2,-3.2,13.9,-1.3).lineTo(16.5,0.4).curveTo(18.7,0.4,18.1,2.2).curveTo(17.8,3.4,16.7,3.4).lineTo(15.8,3.2).lineTo(15.3,4.7).curveTo(14.6,6.5,13.2,7.9).curveTo(8.9,12.3,0.3,12.3).lineTo(-0.6,12.3).closePath();
	this.shape_9.setTransform(-0.2,-11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-4,0.8).curveTo(-4.5,0.9,-5.4,0.6).lineTo(-6.1,0.3).curveTo(-6.2,0.5,-6.7,0.7).curveTo(-7.3,0.9,-7.6,0.8).curveTo(-7.8,0.7,-7.4,0.1).lineTo(-7,-0.4).curveTo(-8.8,0.1,-9,-0.4).curveTo(-9.1,-0.7,-8.1,-0.9).lineTo(-7.1,-1.1).curveTo(-9.5,-1.1,-9.2,-1.7).curveTo(-9,-2.1,-8,-2).lineTo(-7.4,-1.9).curveTo(-9.1,-2.3,-8.9,-2.8).curveTo(-8.7,-3.2,-7.8,-2.9).lineTo(-6.9,-2.6).curveTo(-8,-3.3,-7.9,-3.7).curveTo(-7.7,-3.9,-7.2,-3.7).lineTo(-6.4,-3.3).lineTo(-3.9,-1.9).lineTo(2.9,-0.6).curveTo(4.6,-0.3,9.1,-0.2).lineTo(9.2,1.3).curveTo(9.1,2.9,8.3,3.6).curveTo(8.1,3.8,7.3,3.8).curveTo(4.7,3.8,-4,0.8).closePath();
	this.shape_10.setTransform(-14.9,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-9.3,2.7).curveTo(-10,1.9,-9.8,0.2).lineTo(-9.4,-1.3).lineTo(-6.8,-1.1).curveTo(-4,-0.9,-2.9,-1).lineTo(4.4,-1.5).lineTo(7.2,-2.7).curveTo(7.6,-3,8.1,-3).curveTo(8.7,-3.1,8.8,-2.9).curveTo(8.9,-2.5,7.6,-1.9).lineTo(8.6,-2.1).curveTo(9.6,-2.3,9.7,-1.9).curveTo(9.9,-1.3,7.5,-1.1).lineTo(8.6,-1.2).curveTo(9.7,-1.1,9.8,-0.7).curveTo(10,0,7.5,-0.3).lineTo(8.6,-0).curveTo(9.6,0.3,9.4,0.6).curveTo(9.1,1.2,7.3,0.5).curveTo(8.2,1.6,7.7,1.7).curveTo(7.4,1.8,6.9,1.5).curveTo(6.4,1.3,6.3,1).curveTo(4.8,1.6,4.1,1.3).curveTo(1,2,-2.2,2.5).curveTo(-5.8,3.1,-7.6,3.1).curveTo(-9,3.1,-9.3,2.7).closePath();
	this.shape_11.setTransform(16.4,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-3.4,1.7).curveTo(-4.2,1.3,-4.2,-0.2).lineTo(-1,-0.2).curveTo(1.9,-0.2,1.4,-2).curveTo(3.5,-1.9,3.8,-1.4).curveTo(4.5,-0.7,3.9,0.4).curveTo(3.1,1.8,0.5,1.9).lineTo(-1.3,2).curveTo(-2.8,2,-3.4,1.7).closePath();
	this.shape_12.setTransform(5.3,30.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-2.6,4.1).curveTo(-2.6,3.1,-2.8,-0.1).lineTo(-3.1,-3.1).lineTo(1.1,-4.1).lineTo(1.5,2.2).lineTo(3,2.3).curveTo(3.4,4.1,0.5,4.1).closePath();
	this.shape_13.setTransform(3.8,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-0.4,1.9).curveTo(-3,1.9,-3.8,0.5).curveTo(-4.5,-0.5,-3.9,-1.3).curveTo(-3.5,-1.8,-1.5,-2).curveTo(-1.8,-0.1,1,-0.2).curveTo(3.4,-0.3,4.2,-0.4).curveTo(4.3,1.1,3.5,1.6).curveTo(2.8,2,0.6,2).lineTo(-0.4,1.9).closePath();
	this.shape_14.setTransform(-5.6,30.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#E6E7E8").beginStroke().moveTo(-2.9,2.3).lineTo(-1.5,2.2).lineTo(-1.3,-4.1).lineTo(2.9,-3.3).lineTo(2.8,-0.3).lineTo(2.7,3.9).curveTo(2,4,-0.4,4.1).lineTo(-0.7,4.1).curveTo(-3.2,4.1,-2.9,2.3).closePath();
	this.shape_15.setTransform(-4.1,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#0D0C0C").beginStroke().moveTo(16.4,12.5).lineTo(16,9.7).curveTo(12.8,9.8,0.8,9).lineTo(-10.3,8.4).curveTo(-10.3,8.5,-12.4,7.4).lineTo(-12.4,7.5).lineTo(-13.5,12.5).curveTo(-19.4,13.5,-23,9.6).curveTo(-24.1,8.4,-24.8,6.9).lineTo(-25.4,5.6).curveTo(-25,6.4,-22.9,4.4).curveTo(-17.5,-3.1,-12.4,-7.3).curveTo(-11.1,-8.8,-9.5,-9.8).curveTo(-5.3,-12.6,0.8,-12.7).curveTo(6.7,-12.8,11.4,-10.6).lineTo(12.7,-9.9).curveTo(15.7,-8.1,17,-5.7).curveTo(20.1,-1.9,23.5,4.4).curveTo(25.1,6.3,25.4,5.7).lineTo(23.6,9.6).curveTo(21.4,12.7,18.1,12.7).curveTo(17.3,12.7,16.4,12.5).closePath();
	this.shape_16.setTransform(-0.8,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-32.7,52.5,65.4);


(lib.llanta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000100").beginStroke().moveTo(-2.9,2.8).curveTo(-4,1.7,-4,-0).lineTo(-4,-0.5).curveTo(-3.8,-2,-2.7,-2.9).curveTo(-1.5,-4,0,-4).curveTo(1.5,-4,2.6,-2.9).curveTo(3.7,-2,4,-0.5).lineTo(4,-0).curveTo(4,1.7,2.8,2.8).curveTo(1.6,4,0,4).curveTo(-1.7,4,-2.9,2.8).closePath();
	this.shape.setTransform(0,0.5,0.755,0.755);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#878787").beginStroke().moveTo(-1.1,19.1).lineTo(-1.1,5.9).curveTo(-1.1,5,-1.9,4.7).curveTo(-2.8,4.3,-3.4,5).lineTo(-12.7,14.3).lineTo(-14.3,12.8).lineTo(-4.9,3.4).curveTo(-4.3,2.8,-4.6,1.9).curveTo(-5,1.1,-5.9,1.1).lineTo(-19.1,1.1).lineTo(-19.1,-1.1).lineTo(-5.9,-1.1).curveTo(-5,-1.1,-4.6,-1.9).curveTo(-4.3,-2.8,-4.9,-3.4).lineTo(-14.3,-12.8).lineTo(-12.7,-14.3).lineTo(-3.4,-5).curveTo(-2.8,-4.3,-1.9,-4.7).curveTo(-1.1,-5,-1.1,-5.9).lineTo(-1.1,-19.1).lineTo(1.1,-19.1).lineTo(1.1,-5.9).curveTo(1.1,-5,1.9,-4.7).curveTo(2.8,-4.3,3.4,-5).lineTo(12.8,-14.3).lineTo(14.3,-12.8).lineTo(5,-3.4).curveTo(4.3,-2.8,4.7,-1.9).curveTo(5,-1.1,6,-1.1).lineTo(19.1,-1.1).lineTo(19.1,1.1).lineTo(6,1.1).curveTo(5,1.1,4.7,1.9).curveTo(4.3,2.8,5,3.4).lineTo(14.3,12.8).lineTo(12.8,14.3).lineTo(3.4,5).curveTo(2.8,4.3,1.9,4.7).curveTo(1.1,5,1.1,5.9).lineTo(1.1,19.1).closePath();
	this.shape_1.setTransform(0,0.5,0.755,0.755);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#C9C9C9").beginStroke().moveTo(2.7,6.2).lineTo(-4.6,-1.1).curveTo(-5.1,-1.6,-5,-2.2).curveTo(-5,-2.8,-4.5,-3.2).curveTo(-1,-6,3.5,-6.6).curveTo(4.1,-6.7,4.6,-6.3).curveTo(5.1,-5.9,5.1,-5.3).lineTo(5.1,5.3).curveTo(5.1,6.2,4.2,6.5).lineTo(3.6,6.6).curveTo(3.1,6.6,2.7,6.2).closePath();
	this.shape_2.setTransform(-4.6,-7.9,0.755,0.755);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,6.5).curveTo(-5.1,6.2,-5.1,5.3).lineTo(-5.1,-5.3).curveTo(-5.1,-5.9,-4.6,-6.3).curveTo(-4.1,-6.7,-3.4,-6.6).curveTo(1,-5.9,4.5,-3.2).curveTo(5,-2.8,5,-2.2).curveTo(5.1,-1.6,4.6,-1.1).lineTo(-2.7,6.2).curveTo(-3.1,6.6,-3.6,6.6).lineTo(-4.2,6.5).closePath();
	this.shape_3.setTransform(4.6,-7.9,0.755,0.755);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#EDECEC").beginStroke().moveTo(-5,5).curveTo(-5.9,5,-6.3,4.2).curveTo(-6.6,3.3,-6,2.7).lineTo(1.3,-4.6).curveTo(1.7,-5,2.4,-5).curveTo(3,-4.9,3.4,-4.4).curveTo(5.8,-0.8,6.3,3.3).lineTo(6.4,5).closePath();
	this.shape_4.setTransform(8.3,-4.1,0.755,0.755);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#C9C9C9").beginStroke().moveTo(-4.2,5.6).curveTo(-4.7,5.2,-4.7,4.5).lineTo(-4.7,-4.6).curveTo(-4.7,-5.5,-3.8,-5.8).curveTo(-3,-6.2,-2.3,-5.5).lineTo(4.2,1).curveTo(4.7,1.5,4.6,2.1).curveTo(4.6,2.8,4,3.1).curveTo(1,5.2,-3,5.9).lineTo(-3.2,5.9).curveTo(-3.7,5.9,-4.2,5.6).closePath();
	this.shape_5.setTransform(4.3,8.4,0.755,0.755);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.4,5).lineTo(-6.3,3.3).curveTo(-5.8,-0.8,-3.4,-4.4).curveTo(-3,-4.9,-2.4,-5).curveTo(-1.8,-5,-1.3,-4.6).lineTo(6,2.7).curveTo(6.6,3.3,6.3,4.2).curveTo(5.9,5,5,5).closePath();
	this.shape_6.setTransform(-8.2,-4.1,0.755,0.755);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#EDECEC").beginStroke().moveTo(-1.9,4.7).curveTo(-2.5,4.6,-2.9,4.1).curveTo(-5.5,0.8,-6.2,-3).curveTo(-6.4,-3.7,-6,-4.2).curveTo(-5.6,-4.7,-4.9,-4.7).lineTo(4.8,-4.7).curveTo(5.8,-4.7,6.1,-3.9).curveTo(6.5,-3,5.8,-2.4).lineTo(-0.8,4.3).curveTo(-1.2,4.7,-1.8,4.7).lineTo(-1.9,4.7).closePath();
	this.shape_7.setTransform(-8.1,4.9,0.755,0.755);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.1,5.9).curveTo(-0.7,5.3,-4,3.1).curveTo(-4.5,2.8,-4.6,2.1).curveTo(-4.7,1.5,-4.2,1).lineTo(2.3,-5.5).curveTo(3,-6.2,3.8,-5.8).curveTo(4.7,-5.5,4.7,-4.6).lineTo(4.7,4.5).curveTo(4.7,5.2,4.2,5.6).curveTo(3.8,5.9,3.3,5.9).lineTo(3.1,5.9).closePath();
	this.shape_8.setTransform(-4.3,8.4,0.755,0.755);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,4.3).lineTo(-5.8,-2.4).curveTo(-6.5,-3,-6.1,-3.9).curveTo(-5.8,-4.7,-4.8,-4.7).lineTo(4.8,-4.7).curveTo(5.5,-4.7,5.9,-4.2).curveTo(6.3,-3.7,6.2,-3).curveTo(5.4,0.9,2.9,4.1).curveTo(2.5,4.6,1.9,4.7).lineTo(1.8,4.7).curveTo(1.2,4.7,0.8,4.3).closePath();
	this.shape_9.setTransform(8.2,4.9,0.755,0.755);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#878787").beginStroke().moveTo(-14,14.1).curveTo(-19.9,8.2,-19.9,-0).lineTo(-19.7,-2.4).curveTo(-18.8,-9.8,-13.2,-14.8).curveTo(-7.6,-19.9,0,-19.9).curveTo(7.6,-19.9,13.2,-14.8).curveTo(18.8,-9.9,19.7,-2.4).curveTo(19.9,-1.2,19.9,-0).curveTo(19.9,8.2,14.1,14.1).curveTo(8.2,19.9,0,19.9).curveTo(-8.2,19.9,-14,14.1).closePath();
	this.shape_10.setTransform(0,0,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-16.2,16.3).curveTo(-23,9.6,-23,0).curveTo(-23,-9.6,-16.2,-16.3).curveTo(-9.5,-23,0,-23).curveTo(9.6,-23,16.3,-16.3).curveTo(23,-9.6,23,0).curveTo(23,9.6,16.3,16.3).curveTo(9.6,23,0,23).curveTo(-9.5,23,-16.2,16.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23,46,46);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-23.7,67.4).lineTo(-23.7,-67.4).lineTo(23.7,-67.4).lineTo(23.7,67.4).closePath();
	this.shape.setTransform(146.4,28.7,0.82,0.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-22.6,36.8).lineTo(-22.6,-36.8).lineTo(22.6,-36.8).lineTo(22.6,5.1).lineTo(10.2,16.9).lineTo(3.2,36.8).closePath();
	this.shape_1.setTransform(-146.7,25.5,0.82,0.82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#7C7B7B").beginStroke().moveTo(-22.6,64.3).lineTo(-22.6,-64.2).lineTo(22.6,-64.2).lineTo(22.6,32.6).lineTo(10.2,44.4).lineTo(3.2,64.3).closePath();
	this.shape_2.setTransform(-147.3,3,0.82,0.82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#7C7B7B").beginStroke().moveTo(-23.7,67.4).lineTo(-23.7,-67.4).lineTo(23.7,-67.4).lineTo(23.7,67.4).closePath();
	this.shape_3.setTransform(146.4,-0.4,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.8,-55.6,331.6,111.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-7.6,39.3).curveTo(-18.3,28.6,-18.3,13.4).curveTo(-18.3,4,-13.8,-4.2).curveTo(-9.4,-12.2,-1.8,-17.2).curveTo(-4.3,-22.1,-4.3,-27.5).curveTo(-4.3,-36.8,2.3,-43.5).curveTo(9,-50.1,18.3,-50.1).lineTo(18.3,50.1).curveTo(3.1,50.1,-7.6,39.3).closePath();
	this.shape.setTransform(18.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,100.2);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(19.1,35.4).curveTo(15.4,35.4,12.3,33.4).curveTo(9.3,31.6,7.6,28.5).curveTo(4.4,29.6,1.1,29.6).curveTo(-7.3,29.6,-13.2,23.7).curveTo(-19.1,17.8,-19.1,9.5).curveTo(-19.1,1.9,-14.2,-3.8).curveTo(-9.2,-9.4,-1.9,-10.5).curveTo(-2.2,-12.2,-2.2,-14.1).curveTo(-2.2,-22.9,4,-29.1).curveTo(10.2,-35.4,19.1,-35.4).lineTo(19.1,-35.4).lineTo(19.1,35.4).closePath();
	this.shape.setTransform(19.1,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.2,70.7);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-1.4,22.6).lineTo(-1.4,-22.6).lineTo(1.4,-22.6).lineTo(1.4,22.6).closePath();
	this.shape.setTransform(1.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.9,45.2);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.2,23.7).lineTo(-2.2,-23.7).lineTo(2.2,-23.7).lineTo(2.2,23.7).closePath();
	this.shape.setTransform(2.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,47.5);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.2,23.7).lineTo(-2.2,-23.7).lineTo(2.2,-23.7).lineTo(2.2,23.7).closePath();
	this.shape.setTransform(2.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,47.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-7.6,39.3).curveTo(-18.4,28.6,-18.4,13.4).curveTo(-18.4,4,-13.8,-4.2).curveTo(-9.5,-12.2,-1.8,-17.2).curveTo(-4.3,-22.1,-4.3,-27.5).curveTo(-4.3,-36.8,2.3,-43.5).curveTo(9,-50.1,18.4,-50.1).lineTo(18.4,50.1).curveTo(3.2,50.1,-7.6,39.3).closePath();
	this.shape.setTransform(18.4,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,100.2);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(19.1,35.4).curveTo(15.4,35.4,12.3,33.4).curveTo(9.3,31.6,7.6,28.5).curveTo(4.4,29.6,1.1,29.6).curveTo(-7.3,29.6,-13.2,23.7).curveTo(-19.1,17.8,-19.1,9.5).curveTo(-19.1,1.9,-14.2,-3.8).curveTo(-9.2,-9.4,-1.9,-10.5).curveTo(-2.2,-12.2,-2.2,-14.1).curveTo(-2.2,-22.9,4,-29.1).curveTo(10.2,-35.4,19.1,-35.4).lineTo(19.1,-35.4).lineTo(19.1,35.4).closePath();
	this.shape.setTransform(19.1,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.2,70.7);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-1.4,22.6).lineTo(-1.4,-22.6).lineTo(1.4,-22.6).lineTo(1.4,22.6).closePath();
	this.shape.setTransform(1.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.8,45.2);


(lib.door4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(215,215,215,0.8)").beginStroke().moveTo(-11.9,64.4).lineTo(-11.9,-64.3).lineTo(11.9,-64.3).lineTo(11.9,64.4).closePath();
	this.shape.setTransform(0,0,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-52.7,19.5,105.6);


(lib.door3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(215,215,215,0.8)").beginStroke().moveTo(-11.9,64.4).lineTo(-11.9,-64.3).lineTo(11.9,-64.3).lineTo(11.9,64.4).closePath();
	this.shape.setTransform(0,0,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-52.7,19.5,105.6);


(lib.door2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(215,215,215,0.8)").beginStroke().moveTo(-12.6,64.3).lineTo(-12.6,-64.3).lineTo(12.6,-64.3).lineTo(12.6,32.6).lineTo(0.2,44.4).lineTo(-6.8,64.3).closePath();
	this.shape.setTransform(0,0,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-52.6,20.7,105.4);


(lib.door1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(215,215,215,0.8)").beginStroke().moveTo(-10.3,64.3).lineTo(-10.3,-64.4).lineTo(10.3,-64.4).lineTo(10.3,64.3).closePath();
	this.shape.setTransform(0,0,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-52.7,17,105.6);


(lib.camion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.5,-7.2).curveTo(-3.5,-10.2,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(3,-16.1,3,-11.8).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape.setTransform(-198.1,26.1,0.82,0.82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).curveTo(-0.4,3.9,-0.7,3.6).curveTo(-1.3,3.2,-1.5,1.9).curveTo(-2,-0.6,-2,-4.6).lineTo(-1.3,-3.9).curveTo(-0.6,-3.2,0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.5,4.6).lineTo(1,4.5).closePath();
	this.shape_1.setTransform(-199.6,46.2,0.82,0.82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(-22.1,63.6).lineTo(3.6,63.6).curveTo(3.9,61,4.8,57.6).curveTo(6.7,50.7,9.7,46.2).curveTo(12.9,41.4,17.8,37.4).lineTo(22.1,34.5).lineTo(22.1,-63.6).lineTo(-22.1,-63.6).closePath();
	this.shape_2.setTransform(-157.9,2.2,0.82,0.82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#999999").beginStroke().moveTo(-16.4,4.3).lineTo(-16.8,4.2).curveTo(-15.3,0.5,-13.4,-1.5).curveTo(-12.4,-2.5,-10.3,-3.7).curveTo(-5.3,-6.5,3.4,-8.2).curveTo(10.4,-9.5,17.2,-8.4).lineTo(15.9,-2.2).curveTo(13.6,-3.2,8.1,-3.6).curveTo(3.4,-3.9,-0.2,-3.6).curveTo(-3.1,-3.4,-5.5,-2.7).curveTo(-7.7,-2,-10.8,-0.4).curveTo(-13.4,0.9,-14.4,2.9).curveTo(-14.9,3.9,-14.9,4.6).lineTo(-15.5,4.6).lineTo(-16,8.5).lineTo(-17.2,8.9).closePath().moveTo(-5.4,-5).curveTo(-7,-4.4,-9.5,-3).curveTo(-11.4,-2,-12.3,-1.4).curveTo(-12.8,-1.1,-12.5,-0.7).curveTo(-12.3,-0.3,-11.9,-0.6).curveTo(-11.5,-1,-9.1,-2).curveTo(-6.6,-3.1,-5.1,-3.5).curveTo(-4.4,-3.7,-4.5,-4.4).curveTo(-4.7,-5.1,-5.1,-5.1).lineTo(-5.4,-5).closePath().moveTo(8.5,-7.7).curveTo(7.9,-7.2,7.9,-6.3).curveTo(7.8,-5.4,8.4,-4.8).curveTo(8.9,-4.2,9.3,-4.1).curveTo(12.1,-3.6,13,-3.6).curveTo(13.5,-3.6,14.2,-4).curveTo(15.2,-4.6,15.3,-5.6).curveTo(15.4,-6.5,14.8,-7.2).curveTo(14.3,-7.9,13.7,-8).lineTo(9.4,-8.1).curveTo(9,-8.1,8.5,-7.7).closePath().moveTo(5.1,-7.7).lineTo(1.1,-6.9).curveTo(-2.2,-6.1,-2.5,-5.9).curveTo(-3.4,-5.4,-3.2,-4.7).curveTo(-2.9,-3.9,-2,-4.1).lineTo(1.7,-4.4).lineTo(5.5,-4.6).curveTo(6.1,-4.5,6.5,-5).curveTo(6.9,-5.5,6.8,-6.1).curveTo(6.5,-7.7,5.3,-7.7).lineTo(5.1,-7.7).closePath();
	this.shape_3.setTransform(-191.8,-53.6,0.82,0.82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#999999").beginStroke().moveTo(-3.4,4.4).lineTo(-2.1,-3.8).lineTo(0.1,-4.5).lineTo(0.1,-3.5).lineTo(2.8,-3.4).lineTo(3.1,-2.1).curveTo(3.5,-0.6,3.3,0.3).curveTo(3.2,1.8,2.1,3).lineTo(-0.6,3).lineTo(-1.3,4.6).closePath();
	this.shape_4.setTransform(-176.8,-58.6,0.82,0.82);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_5.setTransform(-85.3,24.4,0.82,0.82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_6.setTransform(-83.9,24.4,0.82,0.82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_7.setTransform(-82.5,24.4,0.82,0.82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_8.setTransform(-81.1,24.4,0.82,0.82);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_9.setTransform(-79.7,24.4,0.82,0.82);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_10.setTransform(-78.2,24.4,0.82,0.82);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_11.setTransform(-76.8,24.4,0.82,0.82);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_12.setTransform(-75.4,24.4,0.82,0.82);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_13.setTransform(-74,24.4,0.82,0.82);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_14.setTransform(-72.6,24.4,0.82,0.82);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_15.setTransform(-71.1,24.4,0.82,0.82);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_16.setTransform(-86.1,23.2,0.82,0.82);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_17.setTransform(-84.7,23.2,0.82,0.82);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_18.setTransform(-83.2,23.2,0.82,0.82);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_19.setTransform(-81.8,23.2,0.82,0.82);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_20.setTransform(-80.4,23.2,0.82,0.82);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_21.setTransform(-79,23.2,0.82,0.82);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_22.setTransform(-77.6,23.2,0.82,0.82);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_23.setTransform(-76.2,23.2,0.82,0.82);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_24.setTransform(-74.7,23.2,0.82,0.82);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_25.setTransform(-73.3,23.2,0.82,0.82);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_26.setTransform(-71.9,23.2,0.82,0.82);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_27.setTransform(-85.3,21.9,0.82,0.82);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_28.setTransform(-83.9,21.9,0.82,0.82);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_29.setTransform(-82.5,21.9,0.82,0.82);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_30.setTransform(-81.1,21.9,0.82,0.82);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_31.setTransform(-79.7,21.9,0.82,0.82);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_32.setTransform(-78.2,21.9,0.82,0.82);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_33.setTransform(-76.8,21.9,0.82,0.82);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_34.setTransform(-75.4,21.9,0.82,0.82);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_35.setTransform(-74,21.9,0.82,0.82);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_36.setTransform(-72.6,21.9,0.82,0.82);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,-0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,-0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,-0).closePath();
	this.shape_37.setTransform(-71.1,21.9,0.82,0.82);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_38.setTransform(-86.1,20.7,0.82,0.82);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_39.setTransform(-84.7,20.7,0.82,0.82);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_40.setTransform(-83.2,20.7,0.82,0.82);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_41.setTransform(-81.8,20.7,0.82,0.82);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_42.setTransform(-80.4,20.7,0.82,0.82);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_43.setTransform(-79,20.7,0.82,0.82);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_44.setTransform(-77.6,20.7,0.82,0.82);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_45.setTransform(-76.2,20.7,0.82,0.82);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_46.setTransform(-74.7,20.7,0.82,0.82);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_47.setTransform(-73.3,20.7,0.82,0.82);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_48.setTransform(-71.9,20.7,0.82,0.82);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_49.setTransform(-85.3,19.5,0.82,0.82);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_50.setTransform(-83.9,19.5,0.82,0.82);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_51.setTransform(-82.5,19.5,0.82,0.82);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_52.setTransform(-81.1,19.5,0.82,0.82);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_53.setTransform(-79.7,19.5,0.82,0.82);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_54.setTransform(-78.2,19.5,0.82,0.82);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_55.setTransform(-76.8,19.5,0.82,0.82);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_56.setTransform(-75.4,19.5,0.82,0.82);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_57.setTransform(-74,19.5,0.82,0.82);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_58.setTransform(-72.6,19.5,0.82,0.82);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_59.setTransform(-71.1,19.5,0.82,0.82);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_60.setTransform(-86.1,18.3,0.82,0.82);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_61.setTransform(-84.7,18.3,0.82,0.82);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_62.setTransform(-83.2,18.3,0.82,0.82);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_63.setTransform(-81.8,18.3,0.82,0.82);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_64.setTransform(-80.4,18.3,0.82,0.82);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_65.setTransform(-79,18.3,0.82,0.82);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_66.setTransform(-77.6,18.3,0.82,0.82);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_67.setTransform(-76.2,18.3,0.82,0.82);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_68.setTransform(-74.7,18.3,0.82,0.82);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_69.setTransform(-73.3,18.3,0.82,0.82);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_70.setTransform(-71.9,18.3,0.82,0.82);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_71.setTransform(-85.3,17.1,0.82,0.82);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_72.setTransform(-83.9,17.1,0.82,0.82);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_73.setTransform(-82.5,17.1,0.82,0.82);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_74.setTransform(-81.1,17.1,0.82,0.82);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_75.setTransform(-79.7,17.1,0.82,0.82);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_76.setTransform(-78.2,17.1,0.82,0.82);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_77.setTransform(-76.8,17.1,0.82,0.82);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_78.setTransform(-75.4,17.1,0.82,0.82);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_79.setTransform(-74,17.1,0.82,0.82);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_80.setTransform(-72.6,17.1,0.82,0.82);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,0).curveTo(-0.5,-0.5,-0,-0.5).curveTo(0.5,-0.5,0.5,0).curveTo(0.5,0.5,-0,0.5).curveTo(-0.5,0.5,-0.5,0).closePath();
	this.shape_81.setTransform(-71.1,17.1,0.82,0.82);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(-10.8,4).curveTo(-10.8,4.8,-10.2,5.4).curveTo(-9.7,5.9,-8.8,5.9).lineTo(8.9,5.9).curveTo(9.7,5.9,10.3,5.4).curveTo(10.8,4.8,10.8,4).lineTo(10.8,-4).curveTo(10.8,-4.8,10.3,-5.4).curveTo(9.7,-5.9,8.9,-5.9).lineTo(-8.8,-5.9).curveTo(-9.7,-5.9,-10.2,-5.4).curveTo(-10.8,-4.8,-10.8,-4).closePath();
	this.shape_82.setTransform(-79,19.9,0.82,0.82);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(20.2,16.5).lineTo(20.2,-16.7).lineTo(-20.2,-16.7).lineTo(-20.2,16.7);
	this.shape_83.setTransform(-80.2,44.6,0.82,0.82);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(42.6,15.8).lineTo(42.6,-16.9).lineTo(-42.6,-16.9).lineTo(-42.6,16.9);
	this.shape_84.setTransform(-3.7,44,0.82,0.82);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#777777").beginStroke().moveTo(-2.7,1.8).curveTo(-4,1.5,-4.1,0.8).curveTo(-4.2,0.1,-3.1,-0.7).curveTo(-2,-1.4,-0.3,-1.7).curveTo(1.4,-2.1,2.7,-1.8).curveTo(4,-1.5,4.1,-0.8).curveTo(4.2,-0.1,3.1,0.6).curveTo(2,1.4,0.3,1.7).curveTo(-0.7,1.9,-1.5,1.9).lineTo(-2.7,1.8).closePath();
	this.shape_85.setTransform(-158.4,-64.6,0.82,0.82);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#999999").beginStroke().moveTo(-3,1.3).curveTo(-4.2,0.7,-4.2,0).curveTo(-4.2,-0.7,-3,-1.3).curveTo(-1.7,-1.7,0,-1.8).curveTo(1.7,-1.7,3,-1.3).curveTo(4.2,-0.7,4.2,0).curveTo(4.2,0.7,3,1.3).curveTo(1.7,1.7,0,1.7).curveTo(-1.7,1.7,-3,1.3).closePath();
	this.shape_86.setTransform(9.1,-68.2,0.82,0.82);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(4.2,0).curveTo(4.2,-0.7,3,-1.2).curveTo(1.7,-1.8,0,-1.8).curveTo(-1.7,-1.8,-3,-1.2).curveTo(-4.2,-0.7,-4.2,0).curveTo(-4.2,0.7,-3,1.2).curveTo(-1.7,1.8,0,1.8).curveTo(1.7,1.8,3,1.2).curveTo(4.2,0.7,4.2,0).closePath();
	this.shape_87.setTransform(191,-68.2,0.82,0.82);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#777777").beginStroke().moveTo(-2.9,1.3).curveTo(-4.2,0.7,-4.2,0).curveTo(-4.2,-0.8,-2.9,-1.3).curveTo(-1.8,-1.7,0,-1.7).curveTo(1.7,-1.7,2.9,-1.3).curveTo(4.2,-0.8,4.2,0).curveTo(4.2,0.7,2.9,1.3).curveTo(1.7,1.7,0,1.7).curveTo(-1.7,1.7,-2.9,1.3).closePath();
	this.shape_88.setTransform(-102.7,31.9,0.82,0.82);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill().beginStroke("#777777").setStrokeStyle(0.3,1,1).moveTo(4.2,0).curveTo(4.2,-0.8,3,-1.2).curveTo(1.7,-1.8,-0,-1.8).curveTo(-1.8,-1.8,-3,-1.2).curveTo(-4.2,-0.8,-4.2,0).curveTo(-4.2,0.7,-3,1.2).curveTo(-1.7,1.8,-0,1.8).curveTo(1.7,1.8,3,1.2).curveTo(4.2,0.7,4.2,0).closePath();
	this.shape_89.setTransform(96.1,31.9,0.82,0.82);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(4.2,0).curveTo(4.2,-0.8,3,-1.2).curveTo(1.8,-1.8,0,-1.8).curveTo(-1.8,-1.8,-3,-1.2).curveTo(-4.2,-0.8,-4.2,0).curveTo(-4.2,0.7,-3,1.2).curveTo(-1.7,1.8,0,1.8).curveTo(1.8,1.8,3,1.2).curveTo(4.2,0.7,4.2,0).closePath();
	this.shape_90.setTransform(196.4,31.9,0.82,0.82);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-65.5).lineTo(0,65.5);
	this.shape_91.setTransform(-176.7,2.5,0.82,0.82);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(5.5,-6.9).lineTo(5.5,6.8).lineTo(-5.5,6.9);
	this.shape_92.setTransform(-181.2,-45.6,0.82,0.82);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(24.6,-65.5).lineTo(24.6,35.8).curveTo(17.4,40,13.3,47.1).curveTo(9.2,54.2,7.6,65.5).lineTo(-24.7,65.5);
	this.shape_93.setTransform(-160,2.7,0.82,0.82);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-34.4).lineTo(0,34.4);
	this.shape_94.setTransform(-136.8,-35.9,0.82,0.82);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(26.9,-1).lineTo(-26.9,-1).lineTo(-26.9,1.1).lineTo(26.9,1.1).closePath();
	this.shape_95.setTransform(-159.1,-52.1,0.82,0.82);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill().beginStroke("#C6C6C6").moveTo(154.1,-2.3).lineTo(-105.4,-2.1).curveTo(-109.3,-2.1,-125.1,-0.8).curveTo(-144.2,0.7,-154,2.3);
	this.shape_96.setTransform(-10.6,-9.6,0.82,0.82);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(-47,3.8).lineTo(-32.9,0.5).curveTo(-16.2,-2.8,-2.7,-3.2).curveTo(18.9,-3.8,47.1,-3.7);
	this.shape_97.setTransform(-135.2,-61.5,0.82,0.82);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-32.1).lineTo(0,32.1);
	this.shape_98.setTransform(-182.4,33.5,0.82,0.82);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-58.7).lineTo(0,58.7);
	this.shape_99.setTransform(-180.2,8.3,0.82,0.82);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(125.4,33.3).lineTo(181.5,19.3).lineTo(179.9,-33.3).lineTo(-181.4,-32.8).lineTo(-181.4,32.5);
	this.shape_100.setTransform(52.2,-37.6,0.82,0.82);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(-150.7,1.3).lineTo(150.7,1.3).lineTo(150.7,-1.4).lineTo(-150.7,-1.4).closePath();
	this.shape_101.setTransform(-8.8,27.2,0.82,0.82);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(-26.6,1.3).lineTo(26.6,1.3).lineTo(26.6,-1.4).lineTo(-26.6,-1.4).closePath();
	this.shape_102.setTransform(178.8,27.2,0.82,0.82);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(23.7,0).lineTo(-23.7,0);
	this.shape_103.setTransform(135.3,55.6,0.82,0.82);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#6C6C6C").beginStroke().moveTo(-0.9,-18.2).lineTo(-0,-17.8).curveTo(0.9,-17.2,0.9,-16.1).curveTo(0.9,-15,0.1,-14.5).lineTo(-0.7,-14.2).lineTo(-0.9,-11.9).lineTo(0.6,-11.1).curveTo(2.1,-9.8,2.1,-7.2).curveTo(2.1,-4.5,0.5,-3.4).lineTo(-1.2,-2.9).lineTo(-1.3,-1.3).lineTo(0.2,-0.3).curveTo(1.7,1.1,1.7,3.5).curveTo(1.7,5.9,0.2,6.9).lineTo(-1.4,7.4).lineTo(-1.4,9.6).lineTo(-0,10.4).curveTo(1.4,11.6,1.4,13.8).curveTo(1.4,16,-0.4,17.3).lineTo(-2.1,18.2).closePath();
	this.shape_104.setTransform(207.4,2.1,0.82,0.82);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#999999").beginStroke().moveTo(-22.1,2.2).lineTo(-22.1,-0.8).lineTo(0.3,-2.2).lineTo(22.1,-0.8).lineTo(22.1,2.2).closePath();
	this.shape_105.setTransform(84.2,-75.6,0.82,0.82);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#999999").beginStroke().moveTo(-22.1,2.2).lineTo(-22.1,-0.8).lineTo(0.3,-2.2).lineTo(22.1,-0.8).lineTo(22.1,2.2).closePath();
	this.shape_106.setTransform(-73.8,-75.6,0.82,0.82);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-32.7).lineTo(0,32.6);
	this.shape_107.setTransform(-21.3,-37.8,0.82,0.82);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-32.7).lineTo(0,32.6);
	this.shape_108.setTransform(53.9,-37.8,0.82,0.82);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#999999").beginStroke().moveTo(-1,11.9).lineTo(-1,-11.9).lineTo(0.9,-11.9).lineTo(0.9,11.9).closePath();
	this.shape_109.setTransform(-57.5,-49.4,0.82,0.82);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#999999").beginStroke().moveTo(-39.6,1.6).lineTo(-39.6,-1.6).lineTo(39.6,-1.6).lineTo(39.6,1.6).closePath();
	this.shape_110.setTransform(-58.5,-38.4,0.82,0.82);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#999999").beginStroke().moveTo(-0.9,11.9).lineTo(-0.9,-11.9).lineTo(1,-11.9).lineTo(1,11.9).closePath();
	this.shape_111.setTransform(17.4,-49.4,0.82,0.82);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#999999").beginStroke().moveTo(-39.6,1.6).lineTo(-39.6,-1.6).lineTo(39.6,-1.6).lineTo(39.6,1.6).closePath();
	this.shape_112.setTransform(16.5,-38.4,0.82,0.82);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#999999").beginStroke().moveTo(-1,11.9).lineTo(-1,-11.9).lineTo(0.9,-11.9).lineTo(0.9,11.9).closePath();
	this.shape_113.setTransform(84.2,-49.4,0.82,0.82);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#999999").beginStroke().moveTo(-29.2,1.6).lineTo(-29.2,-1.6).lineTo(29.1,-1.6).lineTo(29.1,1.6).closePath();
	this.shape_114.setTransform(84.1,-38.4,0.82,0.82);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,32.2).lineTo(0,-32.2);
	this.shape_115.setTransform(113.5,-38.2,0.82,0.82);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-64.9).lineTo(0,64.9);
	this.shape_116.setTransform(154.8,2.4,0.82,0.82);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-64.6).lineTo(0,64.6);
	this.shape_117.setTransform(115.9,2.2,0.82,0.82);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(27,0).lineTo(-27,0);
	this.shape_118.setTransform(135.7,-50.9,0.82,0.82);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-32.1).lineTo(0,32.1);
	this.shape_119.setTransform(157.9,-38,0.82,0.82);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-5.2).lineTo(0,5.2);
	this.shape_120.setTransform(-123.8,-69.1,0.82,0.82);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill().beginStroke("#B2B2B2").setStrokeStyle(0.3,1,1).moveTo(0,-5.2).lineTo(0,5.1);
	this.shape_121.setTransform(85.4,-69.2,0.82,0.82);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-7.5,27.8).lineTo(4.4,-28.3).lineTo(7.5,-28).lineTo(6.8,28.3).closePath();
	this.shape_122.setTransform(-188,-16.1,0.82,0.82);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#999999").beginStroke().moveTo(-2.6,13.5).lineTo(0.6,-13.6).curveTo(1.4,-13.5,1.7,-13.1).curveTo(2.5,-12.3,2.6,-10.2).curveTo(2.6,-6.6,1.8,1.4).curveTo(1.3,5.7,0.1,10.7).curveTo(-0.1,11.8,-0.8,12.6).curveTo(-1.5,13.6,-2.3,13.6).lineTo(-2.6,13.5).closePath();
	this.shape_123.setTransform(-202.8,-36,0.82,0.82);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#999999").beginStroke().moveTo(1.6,14).lineTo(-3.7,12.7).curveTo(-5.2,12.3,-5.9,11.7).curveTo(-7.1,10.7,-6.8,8.9).curveTo(-5.2,-8.8,-4.9,-9.8).curveTo(-4.6,-11.3,-4.3,-11.8).curveTo(-3.6,-13.1,-1.6,-13.5).lineTo(1.1,-14).lineTo(4.6,-13.9).curveTo(6.8,-13.7,6.8,-10.4).curveTo(6.9,-6.3,6,1.5).curveTo(5.5,5.9,4.3,11.1).curveTo(4.1,12.2,3.4,13.1).curveTo(2.7,14,1.8,14).lineTo(1.6,14).closePath();
	this.shape_124.setTransform(-203.5,-35.7,0.82,0.82);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#DF1421").beginStroke().moveTo(-6.6,13.8).curveTo(-10.1,13.7,-13.2,11.6).curveTo(-14.6,10.6,-15.3,8).lineTo(-15.7,5.6).lineTo(-15.7,-12.2).curveTo(-15.8,-12.5,-15.6,-12.9).curveTo(-15.3,-13.5,-14.2,-13.7).lineTo(-8.4,-13.7).curveTo(-7.3,-13.7,-6.9,-12.9).curveTo(-6.8,-12.5,-6.8,-12.1).lineTo(-6.8,2.3).curveTo(-6.8,5.1,-6.3,5.8).curveTo(-5.1,7.5,-0.3,7.5).curveTo(4.5,7.7,6,5.7).curveTo(6.6,4.7,6.6,2.3).lineTo(6.6,-12).curveTo(6.6,-12.4,6.7,-12.9).curveTo(7,-13.8,8,-13.8).lineTo(13.9,-13.8).curveTo(15.2,-13.8,15.6,-12.9).curveTo(15.8,-12.4,15.7,-12).lineTo(15.6,6.3).curveTo(15.3,8.7,14.1,10.4).curveTo(13,12.2,9.6,13.2).lineTo(6.3,13.8).closePath();
	this.shape_125.setTransform(51.1,7.9,0.82,0.82);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#DF1421").beginStroke().moveTo(-6.6,13.8).curveTo(-10.1,13.7,-13.2,11.6).curveTo(-14.6,10.6,-15.3,8).lineTo(-15.7,5.6).lineTo(-15.7,-12.2).curveTo(-15.8,-12.5,-15.6,-12.9).curveTo(-15.3,-13.5,-14.2,-13.7).lineTo(-8.4,-13.7).curveTo(-7.3,-13.7,-6.9,-12.9).curveTo(-6.8,-12.5,-6.8,-12.1).lineTo(-6.8,2.3).curveTo(-6.8,5.1,-6.3,5.8).curveTo(-5.1,7.5,-0.3,7.5).curveTo(4.5,7.7,6,5.7).curveTo(6.6,4.7,6.6,2.3).lineTo(6.6,-12).curveTo(6.6,-12.4,6.7,-12.9).curveTo(7,-13.8,8,-13.8).lineTo(13.9,-13.8).curveTo(15.2,-13.8,15.6,-12.9).curveTo(15.8,-12.4,15.7,-12).lineTo(15.6,6.3).curveTo(15.3,8.7,14.2,10.4).curveTo(13.1,12.2,9.6,13.2).lineTo(6.3,13.8).closePath();
	this.shape_126.setTransform(-9.5,7.9,0.82,0.82);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#DF1421").beginStroke().moveTo(14.3,13.7).lineTo(-9.3,13.7).curveTo(-13.6,13.7,-15.5,10.8).lineTo(-16.5,7.9).curveTo(-16.7,6.6,-16.3,5.2).curveTo(-15.6,2.2,-12.9,1.1).curveTo(-8.6,-0.8,6.1,-5.9).curveTo(6.8,-6.2,6.9,-6.7).curveTo(6.9,-7.3,5.6,-7.5).curveTo(4.3,-7.7,-5.2,-7.7).lineTo(-14.3,-7.5).curveTo(-14.7,-7.5,-15,-7.6).curveTo(-15.8,-8,-15.8,-9).lineTo(-15.8,-12.2).curveTo(-15.6,-13.3,-14.7,-13.6).curveTo(-14.2,-13.8,-13.8,-13.7).lineTo(-5.4,-13.7).curveTo(4,-13.7,8.9,-13.6).curveTo(13.8,-13.4,15.7,-10.6).curveTo(16.6,-9.2,16.6,-7.8).lineTo(16.3,-4.8).curveTo(15.5,-1.7,12.6,-0.6).lineTo(3.5,2.6).curveTo(-2.7,4.7,-4.9,5.7).curveTo(-7.2,6.6,-6.8,7.1).curveTo(-6.4,7.5,-5.2,7.5).lineTo(14.8,7.5).curveTo(15.9,7.8,15.9,8.7).lineTo(15.9,12.1).curveTo(15.9,13.2,15.1,13.6).curveTo(14.8,13.7,14.4,13.7).lineTo(14.3,13.7).closePath();
	this.shape_127.setTransform(21.2,7.9,0.82,0.82);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#DF1421").beginStroke().moveTo(-15.1,13.6).curveTo(-16,13.2,-16,12.1).lineTo(-16,8.7).curveTo(-16,7.8,-14.8,7.5).lineTo(-13.7,7.5).lineTo(5.2,7.5).curveTo(6.4,7.5,6.7,7.1).curveTo(7.2,6.6,4.9,5.7).curveTo(2.7,4.7,-3.5,2.6).lineTo(-12.6,-0.6).curveTo(-15.5,-1.7,-16.3,-4.8).lineTo(-16.6,-7.8).curveTo(-16.6,-9.2,-15.7,-10.6).curveTo(-13.8,-13.4,-8.9,-13.6).curveTo(-1.1,-13.8,13.8,-13.7).lineTo(14.7,-13.6).curveTo(15.6,-13.3,15.7,-12.2).lineTo(15.7,-9).curveTo(15.7,-8,15,-7.6).curveTo(14.6,-7.5,14.3,-7.5).lineTo(5.1,-7.7).curveTo(-4.3,-7.7,-5.7,-7.5).curveTo(-6.9,-7.3,-6.9,-6.7).curveTo(-6.9,-6.2,-6.2,-5.9).lineTo(2,-3).curveTo(10.3,-0.1,12.9,1.1).curveTo(15.6,2.2,16.3,5.2).curveTo(16.7,6.6,16.5,7.9).lineTo(15.5,10.8).curveTo(13.5,13.7,9.2,13.7).lineTo(-14.3,13.7).lineTo(-14.5,13.7).curveTo(-14.8,13.7,-15.1,13.6).closePath();
	this.shape_128.setTransform(-40.1,7.9,0.82,0.82);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#DF1421").beginStroke().moveTo(3.2,13.8).lineTo(-3,13.8).curveTo(-4.2,13.8,-4.4,13).lineTo(-4.5,-12.5).curveTo(-4.5,-13.5,-3.6,-13.7).curveTo(-3.2,-13.8,-2.7,-13.8).lineTo(3.1,-13.8).lineTo(3.9,-13.6).curveTo(4.5,-13.3,4.6,-12.4).lineTo(4.6,12.4).curveTo(4.6,13.4,3.9,13.7).lineTo(3.4,13.8).lineTo(3.2,13.8).closePath();
	this.shape_129.setTransform(-61.8,7.9,0.82,0.82);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1.4,-6.3).curveTo(0.6,-14.1,5.1,-28.2).lineTo(9.2,-40.7).curveTo(13,-40,11.2,-32.9).lineTo(6.8,-17.1).curveTo(3,-3.7,1.4,2.8).curveTo(-0.1,9,-2.5,20.7).lineTo(-5,32.5).curveTo(-5.4,34.1,-7.7,36.6).lineTo(-11.8,40.7).curveTo(-4.7,6.1,-1.4,-6.3).closePath();
	this.shape_130.setTransform(-191.2,-24,0.82,0.82);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-230.5,81.5).lineTo(-235.2,78).curveTo(-240,74.5,-240.5,74.3).curveTo(-247.7,71.3,-249,65.5).curveTo(-249.4,63.7,-249.1,61.8).lineTo(-248.8,60.3).lineTo(-249.8,29).curveTo(-249.7,27.3,-248.9,23.4).curveTo(-248.1,19.5,-247.7,19.2).curveTo(-243.6,16.1,-243,14.2).lineTo(-240,-0.2).curveTo(-237.1,-14.4,-236,-18.4).curveTo(-232.5,-31,-226,-53.8).curveTo(-225,-57,-224.8,-58.2).curveTo(-224.6,-60.2,-225.6,-60.4).lineTo(-225.8,-60.4).curveTo(-225.6,-61.9,-224.5,-63.7).curveTo(-222.3,-67.4,-217.8,-68.9).curveTo(-213.1,-70.5,-195,-74.7).curveTo(-177.7,-78.8,-169.1,-80.4).curveTo(-166.8,-80.9,-141,-81.2).lineTo(-115.5,-81.5).lineTo(236.3,-80.9).curveTo(241.3,-81,243.4,-78.4).curveTo(244.7,-76.7,244.9,-73.8).lineTo(249.8,-7.9).curveTo(249.6,-8.1,249.3,-8).curveTo(248.8,-7.8,248.3,-6.5).curveTo(246.8,-2.3,246.8,11.4).curveTo(246.8,25.1,247.4,29).curveTo(247.7,31,248,30.3).lineTo(248,59.6).curveTo(248,64.1,243.8,65).lineTo(191.2,77.5).lineTo(117.9,77.5).curveTo(117.5,72.7,117,69.2).curveTo(116.2,62.6,113.9,58.1).curveTo(106.9,44.1,85.2,44.1).curveTo(63.7,44.1,55.6,61.1).curveTo(51.5,69.5,51.8,78).lineTo(-123.8,80).curveTo(-123.6,71.2,-127.2,62.3).curveTo(-134.4,44.7,-153.5,44.7).curveTo(-173.5,44.7,-182.3,59).curveTo(-188,68.1,-188.5,81.5).closePath().moveTo(139,74.5).lineTo(184,74.5).lineTo(184,-52.5).lineTo(139,-52.5).closePath().moveTo(-216,72.5).lineTo(-193.8,72.5).curveTo(-193.6,70.2,-192.8,67).curveTo(-191.2,60.6,-187.9,56.1).curveTo(-184.5,51.4,-179.9,47.8).lineTo(-176,45.1).lineTo(-176,-50.5).lineTo(-216,-50.5).closePath().moveTo(-167,-67.6).lineTo(-167,-5.4).curveTo(-160.1,-7.5,-141.9,-8.9).curveTo(-132.8,-9.6,-125,-9.9).lineTo(-125,-68).closePath().moveTo(70,-10.5).lineTo(128,-10.5).lineTo(128,-63.5).lineTo(70,-63.5).closePath().moveTo(-23,-10.5).lineTo(56,-10.5).lineTo(56,-63.5).lineTo(-23,-63.5).closePath().moveTo(-114,-10.5).lineTo(-35,-10.5).lineTo(-35,-63.5).lineTo(-114,-63.5).closePath().moveTo(192,-11.5).lineTo(235.7,-22).lineTo(235.2,-67.5).lineTo(192,-67.5).closePath();
	this.shape_131.setTransform(3.1,-6.2,0.82,0.82);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("rgba(255,255,255,0.2)").beginStroke().moveTo(-168.7,27.1).lineTo(-168.7,-27.1).lineTo(168.7,-27.1).lineTo(168.7,27.1).closePath();
	this.shape_132.setTransform(32,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.1,-77.4,418.2,138.3);


(lib.fondocamion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-5,1.4).lineTo(-5,-1.4).lineTo(5,-1.4).lineTo(5,1.4).closePath();
	this.shape.setTransform(-1384.2,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,7.2).lineTo(-3.6,-7.2).lineTo(3.6,-7.2).lineTo(3.6,7.2).closePath();
	this.shape_1.setTransform(-1384.2,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-22.9,1.8).lineTo(-22.9,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_2.setTransform(-1345.5,120.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-22.9,1.8).lineTo(-22.9,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_3.setTransform(-1345.5,99);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-22.9,1.8).lineTo(-22.9,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_4.setTransform(-1345.5,76.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#777777").beginStroke().moveTo(-7.7,11.5).lineTo(-7.7,-11.5).lineTo(7.7,-11.5).lineTo(7.7,11.5).closePath();
	this.shape_5.setTransform(-1345.7,139.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_6.setTransform(-1401.2,112.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_7.setTransform(-1385.7,112.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_8.setTransform(-1401.2,100.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_9.setTransform(-1385.7,100.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_10.setTransform(-1401.2,88.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_11.setTransform(-1385.7,88.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_12.setTransform(-1401.2,77.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_13.setTransform(-1385.7,77.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_14.setTransform(-1401.2,65.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_15.setTransform(-1385.7,65.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_16.setTransform(-1359.5,111.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_17.setTransform(-1345.5,111.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_18.setTransform(-1331.4,111.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_19.setTransform(-1359.5,90.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_20.setTransform(-1345.5,90.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_21.setTransform(-1331.4,90.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_22.setTransform(-1359.5,68.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_23.setTransform(-1345.5,68.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_24.setTransform(-1331.4,68.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.8,49.3).lineTo(-19.8,-49.4).lineTo(19.8,-49.4).lineTo(19.8,49.3).closePath();
	this.shape_25.setTransform(-1393.4,101.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-47.9,16.2).lineTo(-36.9,-16.2).lineTo(36.9,-16.2).lineTo(47.9,16.2).closePath();
	this.shape_26.setTransform(-1365.3,36.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#494A4E").beginStroke().moveTo(-48,49.6).lineTo(-48,-49.6).lineTo(48.1,-49.6).lineTo(48.1,49.6).closePath();
	this.shape_27.setTransform(-1365.3,101.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#494A4E").beginStroke().moveTo(3.8,55.7).lineTo(3.8,11).lineTo(-5.6,4.7).curveTo(-8.3,6.9,-11.8,8.1).curveTo(-15.3,9.3,-18.9,9.3).curveTo(-27.1,9.3,-32.9,3.4).curveTo(-38.8,-2.4,-38.8,-10.7).curveTo(-38.7,-18.4,-33.6,-24).curveTo(-28.4,-29.6,-20.9,-30.4).lineTo(-20.9,-30.5).curveTo(-20.8,-41,-13.4,-48.4).curveTo(-5.9,-55.8,4.5,-55.7).curveTo(15.1,-55.7,22.4,-48.2).curveTo(29.9,-40.8,29.8,-30.3).curveTo(29.8,-21.7,24.4,-14.7).lineTo(25,-14.8).curveTo(30.7,-14.7,34.8,-10.7).curveTo(38.8,-6.6,38.7,-0.9).curveTo(38.7,4.8,34.8,8.8).curveTo(30.7,12.8,25,12.8).curveTo(20.3,12.7,16.6,9.7).lineTo(6.8,14.9).lineTo(6.8,55.7).closePath().moveTo(6.8,-5.1).lineTo(6.8,11.1).lineTo(14.2,7.1).curveTo(11.3,3.1,11.3,-1).curveTo(11.3,-3.5,12.5,-6.3).curveTo(9.8,-5.3,6.8,-5.1).closePath().moveTo(-3.1,2.3).lineTo(3.8,6.9).lineTo(3.8,-5.1).lineTo(1.1,-5.4).curveTo(-0,-1.5,-3.1,2.3).closePath();
	this.shape_28.setTransform(-1069.7,95.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#777777").beginStroke().moveTo(-13.9,16.3).lineTo(-13.9,-3.9).curveTo(-13.9,-9.1,-9.9,-12.7).curveTo(-5.8,-16.3,-0,-16.3).curveTo(5.8,-16.3,9.8,-12.7).curveTo(13.9,-9.1,13.9,-3.9).lineTo(13.9,16.3).closePath();
	this.shape_29.setTransform(14.5,133.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_30.setTransform(43.6,94.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_31.setTransform(19,94.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.9,-11.9).lineTo(8.9,11.9).closePath();
	this.shape_32.setTransform(-5.6,94.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-42.1,2.9).lineTo(-42.1,-2.9).lineTo(42.1,-2.9).lineTo(42.1,2.9).closePath();
	this.shape_33.setTransform(16.8,73.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_34.setTransform(44.1,56.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_35.setTransform(26.4,56.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_36.setTransform(8.7,56.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_37.setTransform(-9,56.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_38.setTransform(44.1,38.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_39.setTransform(26.4,38.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_40.setTransform(8.7,38.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_41.setTransform(-9,38.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#494A4E").beginStroke().moveTo(-42.1,70.8).lineTo(-42.1,-70.8).lineTo(42.1,-70.8).lineTo(42.1,70.8).closePath();
	this.shape_42.setTransform(16.8,80.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#777777").beginStroke().moveTo(-3.5,6.9).lineTo(-3.5,-7).lineTo(3.5,-7).lineTo(3.5,6.9).closePath();
	this.shape_43.setTransform(22.5,7.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#777777").beginStroke().moveTo(-3.5,6.9).lineTo(-3.5,-7).lineTo(3.5,-7).lineTo(3.5,6.9).closePath();
	this.shape_44.setTransform(11.2,7.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.1,6.8).lineTo(0,-6.8).lineTo(26.1,6.8).closePath();
	this.shape_45.setTransform(16.8,-13.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.1,18.2).lineTo(-26.1,-18.2).lineTo(26.1,-18.2).lineTo(26.1,18.2).closePath();
	this.shape_46.setTransform(16.8,11.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-5,1.4).lineTo(-5,-1.4).lineTo(5,-1.4).lineTo(5,1.4).closePath();
	this.shape_47.setTransform(-99.4,12.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,7.2).lineTo(-3.6,-7.2).lineTo(3.6,-7.2).lineTo(3.6,7.2).closePath();
	this.shape_48.setTransform(-99.4,18.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_49.setTransform(-60.6,120.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_50.setTransform(-60.6,99);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_51.setTransform(-60.6,76.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#777777").beginStroke().moveTo(-7.7,11.5).lineTo(-7.7,-11.5).lineTo(7.7,-11.5).lineTo(7.7,11.5).closePath();
	this.shape_52.setTransform(-60.9,139.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_53.setTransform(-116.4,112.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_54.setTransform(-100.9,112.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_55.setTransform(-116.4,100.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_56.setTransform(-100.9,100.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_57.setTransform(-116.4,88.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_58.setTransform(-100.9,88.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_59.setTransform(-116.4,77.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_60.setTransform(-100.9,77.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_61.setTransform(-116.4,65.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_62.setTransform(-100.9,65.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_63.setTransform(-74.7,111.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_64.setTransform(-60.7,111.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_65.setTransform(-46.6,111.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_66.setTransform(-74.7,90.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_67.setTransform(-60.7,90.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_68.setTransform(-46.6,90.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_69.setTransform(-74.7,68.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_70.setTransform(-60.7,68.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_71.setTransform(-46.6,68.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.8,49.3).lineTo(-19.8,-49.4).lineTo(19.8,-49.4).lineTo(19.8,49.3).closePath();
	this.shape_72.setTransform(-108.6,101.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-47.9,16.2).lineTo(-36.9,-16.2).lineTo(36.9,-16.2).lineTo(47.9,16.2).closePath();
	this.shape_73.setTransform(-80.5,36.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#494A4E").beginStroke().moveTo(-48.1,49.6).lineTo(-48.1,-49.6).lineTo(48,-49.6).lineTo(48,49.6).closePath();
	this.shape_74.setTransform(-80.5,101.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_75.setTransform(129.8,76.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_76.setTransform(114.8,76.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_77.setTransform(99.9,76.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_78.setTransform(85,76.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-40.6,4.5).lineTo(-40.6,-4.5).lineTo(40.6,-4.5).lineTo(40.6,4.5).closePath();
	this.shape_79.setTransform(107.2,37.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#777777").beginStroke().moveTo(-6.6,8.2).lineTo(-6.6,-1.7).curveTo(-6.6,-4.4,-4.7,-6.3).curveTo(-2.7,-8.2,0,-8.2).curveTo(2.8,-8.2,4.6,-6.3).curveTo(6.6,-4.4,6.6,-1.7).lineTo(6.6,8.2).closePath();
	this.shape_80.setTransform(85.5,142.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_81.setTransform(130.7,128.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_82.setTransform(115.1,128.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_83.setTransform(99.4,128.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_84.setTransform(83.8,128.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_85.setTransform(130.7,107.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_86.setTransform(115.1,107.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_87.setTransform(99.4,107.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_88.setTransform(83.8,107.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_89.setTransform(130.7,122);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_90.setTransform(115.1,122);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_91.setTransform(99.4,122);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_92.setTransform(83.8,122);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_93.setTransform(130.7,101);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_94.setTransform(115.1,101);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_95.setTransform(99.4,101);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_96.setTransform(83.8,101);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-29.1,1.8).lineTo(-29.1,-1.8).lineTo(29.1,-1.8).lineTo(29.1,1.8).closePath();
	this.shape_97.setTransform(107.3,85.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-29.1,1.8).lineTo(-29.1,-1.8).lineTo(29.1,-1.8).lineTo(29.1,1.8).closePath();
	this.shape_98.setTransform(107.3,67.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.3).curveTo(-3.8,-4.9,-2.7,-6).curveTo(-1.6,-7.1,-0,-7.1).curveTo(1.6,-7.1,2.7,-6).curveTo(3.8,-4.9,3.8,-3.3).lineTo(3.8,7.1).closePath();
	this.shape_99.setTransform(122.4,54.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.3).curveTo(-3.7,-4.9,-2.7,-6).curveTo(-1.6,-7.1,-0,-7.1).curveTo(1.6,-7.1,2.6,-6).curveTo(3.7,-4.9,3.8,-3.3).lineTo(3.8,7.1).closePath();
	this.shape_100.setTransform(112.3,54.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.6).curveTo(-3.8,-5,-2.7,-6.1).curveTo(-1.7,-7.1,-0.2,-7.1).lineTo(0.2,-7.1).curveTo(1.7,-7.1,2.7,-6.1).curveTo(3.8,-5,3.8,-3.6).lineTo(3.8,7.1).closePath();
	this.shape_101.setTransform(102.2,54.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.3).curveTo(-3.7,-4.9,-2.7,-6).curveTo(-1.6,-7.1,-0,-7.1).curveTo(1.6,-7.1,2.6,-6).curveTo(3.7,-4.9,3.8,-3.3).lineTo(3.8,7.1).closePath();
	this.shape_102.setTransform(92.1,54.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#494A4E").beginStroke().moveTo(-40.6,54.3).lineTo(-40.6,-54.3).lineTo(40.6,-54.3).lineTo(40.6,54.3).closePath();
	this.shape_103.setTransform(107.2,96.7);

	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(-1212,83.2,1,1,0,0,0,18.3,50.1);
	this.instance.alpha = 0.238;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-25.9,39.3).curveTo(-36.7,28.6,-36.7,13.4).curveTo(-36.7,4,-32.2,-4.2).curveTo(-27.8,-12.2,-20.2,-17.2).curveTo(-22.6,-22.1,-22.6,-27.5).curveTo(-22.6,-36.8,-16,-43.5).curveTo(-9.4,-50.1,-0,-50.1).curveTo(9.4,-50.1,16,-43.5).curveTo(22.6,-36.8,22.6,-27.5).curveTo(22.6,-22.1,20.1,-17.2).curveTo(27.7,-12.2,32.1,-4.2).curveTo(36.7,4,36.7,13.4).curveTo(36.7,28.6,25.9,39.3).curveTo(15.2,50.1,-0,50.1).curveTo(-15.2,50.1,-25.9,39.3).closePath();
	this.shape_104.setTransform(-1193.6,83.2);

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1195.9,127.2,1,1,0,0,0,2.1,23.7);
	this.instance_1.alpha = 0.391;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-4.4,23.7).lineTo(-4.4,-23.7).lineTo(4.4,-23.7).lineTo(4.4,23.7).closePath();
	this.shape_105.setTransform(-1193.6,127.2);

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-522.4,80.5,1,1,0,0,0,19.1,35.4);
	this.instance_2.alpha = 0.191;

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-6.8,33.5).curveTo(-9.8,31.6,-11.5,28.5).curveTo(-14.7,29.6,-18.1,29.6).curveTo(-26.4,29.6,-32.3,23.7).curveTo(-38.2,17.8,-38.2,9.4).curveTo(-38.2,1.9,-33.3,-3.8).curveTo(-28.4,-9.4,-21,-10.5).curveTo(-21.3,-12.2,-21.3,-14.1).curveTo(-21.3,-22.9,-15.1,-29.2).curveTo(-8.9,-35.3,-0.1,-35.4).curveTo(8.7,-35.3,15,-29.2).curveTo(21.2,-22.9,21.2,-14.1).curveTo(21.2,-12.3,20.9,-10.5).curveTo(28.3,-9.5,33.2,-3.9).curveTo(38.2,1.9,38.2,9.4).curveTo(38.2,17.8,32.3,23.7).curveTo(26.4,29.6,18.1,29.6).curveTo(14.5,29.6,11.3,28.4).curveTo(9.7,31.6,6.7,33.5).curveTo(3.6,35.3,-0.1,35.4).curveTo(-3.7,35.3,-6.8,33.5).closePath();
	this.shape_106.setTransform(-503.3,80.4);

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-505.2,128.4,1,1,0,0,0,1.4,22.6);
	this.instance_3.alpha = 0.391;

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.8,22.6).lineTo(-2.8,-22.6).lineTo(2.8,-22.6).lineTo(2.8,22.6).closePath();
	this.shape_107.setTransform(-503.8,128.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#777777").beginStroke().moveTo(-12.9,13.5).lineTo(-12.9,-0.6).curveTo(-12.9,-5.9,-9.1,-9.7).curveTo(-5.3,-13.5,0,-13.5).curveTo(5.3,-13.5,9.1,-9.7).curveTo(12.9,-5.9,12.9,-0.6).lineTo(12.9,13.5).closePath();
	this.shape_108.setTransform(-377.4,137.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_109.setTransform(-351.7,4.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_110.setTransform(-361.2,4.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_111.setTransform(-370.6,4.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_112.setTransform(-380.1,4.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_113.setTransform(-389.5,4.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_114.setTransform(-399,4.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_115.setTransform(-351.7,16.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_116.setTransform(-361.2,16.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_117.setTransform(-370.6,16.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_118.setTransform(-380.1,16.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_119.setTransform(-389.5,16.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_120.setTransform(-399,16.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_121.setTransform(-351.7,64.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_122.setTransform(-361.2,64.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_123.setTransform(-370.6,64.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_124.setTransform(-380.1,64.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_125.setTransform(-389.5,64.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_126.setTransform(-399,64.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#777777").beginStroke().moveTo(-25.7,3.3).lineTo(-25.7,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_127.setTransform(-377.4,109.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#777777").beginStroke().moveTo(-25.7,3.3).lineTo(-25.7,-3.2).lineTo(25.8,-3.2).lineTo(25.8,3.3).closePath();
	this.shape_128.setTransform(-377.4,97.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#777777").beginStroke().moveTo(-25.7,3.3).lineTo(-25.7,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_129.setTransform(-377.4,85.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_130.setTransform(-349.6,41.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_131.setTransform(-356,41.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_132.setTransform(-362.5,41.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_133.setTransform(-368.9,41.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_134.setTransform(-375.4,41.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#777777").beginStroke().moveTo(-1.4,13.3).lineTo(-1.4,-13.3).lineTo(1.4,-13.3).lineTo(1.4,13.3).closePath();
	this.shape_135.setTransform(-381.8,41.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_136.setTransform(-388.2,41.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_137.setTransform(-394.7,41.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_138.setTransform(-401.1,41.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#494A4E").beginStroke().moveTo(-38.3,82.2).lineTo(-38.3,-82.2).lineTo(38.4,-82.2).lineTo(38.4,82.2).closePath();
	this.shape_139.setTransform(-377.4,68.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-27.3,14.1).lineTo(-27.3,-14.1).lineTo(27.3,-14.1).lineTo(27.3,14.1).closePath();
	this.shape_140.setTransform(-377.4,-24.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_141.setTransform(-301.7,119.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.5,-13).lineTo(4.5,13).closePath();
	this.shape_142.setTransform(-287.5,119.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_143.setTransform(-198.6,119.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_144.setTransform(-184.5,119.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_145.setTransform(-277.7,99.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_146.setTransform(-277.7,88.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_147.setTransform(-277.7,77.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_148.setTransform(-208.5,99.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_149.setTransform(-208.5,88.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_150.setTransform(-208.5,77.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_151.setTransform(-264.1,116.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_152.setTransform(-253.6,116.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_153.setTransform(-243.1,116.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.7,-4.7).lineTo(2.7,4.7).closePath();
	this.shape_154.setTransform(-232.5,116.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_155.setTransform(-222,116.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.6,4.7).lineTo(-23.6,-4.7).lineTo(23.6,-4.7).lineTo(23.6,4.7).closePath();
	this.shape_156.setTransform(-243,116.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#777777").beginStroke().moveTo(-19.1,15.1).lineTo(-19.1,-15.1).lineTo(19,-15.1).lineTo(19,15.1).closePath();
	this.shape_157.setTransform(-243,132.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#494A4E").beginStroke().moveTo(-86.1,11.3).lineTo(-86.1,-11.3).lineTo(86.1,-11.3).lineTo(86.1,11.3).closePath();
	this.shape_158.setTransform(-243,47.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-72,5.7).lineTo(-80,-5.7).lineTo(80,-5.7).lineTo(72.1,5.7).closePath();
	this.shape_159.setTransform(-243.1,62.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#494A4E").beginStroke().moveTo(-72.6,42.3).lineTo(-72.6,-42.3).lineTo(72.6,-42.3).lineTo(72.6,42.3).closePath();
	this.shape_160.setTransform(-243,108.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,9.6).curveTo(-13.5,5.6,-13.5,-0).curveTo(-13.5,-5.6,-9.6,-9.6).curveTo(-5.6,-13.5,-0,-13.5).curveTo(5.6,-13.5,9.6,-9.6).curveTo(13.6,-5.6,13.6,-0).curveTo(13.6,5.6,9.6,9.6).curveTo(5.6,13.6,-0,13.6).curveTo(-5.6,13.6,-9.6,9.6).closePath();
	this.shape_161.setTransform(261.1,46.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#28292B").beginStroke().moveTo(24.9,14).lineTo(0,-8.5).lineTo(-24.8,14).lineTo(-31.1,14).lineTo(0,-14).lineTo(31.1,14).closePath();
	this.shape_162.setTransform(261.3,13.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9,12.2).lineTo(-9,-12.2).lineTo(8.9,-12.2).lineTo(8.9,12.2).closePath();
	this.shape_163.setTransform(309.6,105.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9,12.2).lineTo(-9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.2).closePath();
	this.shape_164.setTransform(309.6,58.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.2).lineTo(-8.9,-12.2).lineTo(8.9,-12.2).lineTo(8.9,12.2).closePath();
	this.shape_165.setTransform(212.7,105.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-8.9,12.2).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.2).closePath();
	this.shape_166.setTransform(212.7,58.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-8.9,12.2).lineTo(-8.9,-12.3).lineTo(8.9,-12.3).lineTo(8.9,12.2).closePath();
	this.shape_167.setTransform(212.7,58.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#1A1A1A").beginStroke().moveTo(-0.8,0.8).curveTo(-1.1,0.5,-1.1,-0).curveTo(-1.1,-0.5,-0.8,-0.8).curveTo(-0.5,-1.1,-0,-1.1).curveTo(0.5,-1.1,0.8,-0.8).curveTo(1.1,-0.5,1.1,-0).curveTo(1.1,0.5,0.8,0.8).curveTo(0.5,1.1,-0,1.1).curveTo(-0.5,1.1,-0.8,0.8).closePath();
	this.shape_168.setTransform(255,120.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#7B7189").beginStroke().moveTo(-6.8,8.5).lineTo(6.5,8.3).lineTo(6.4,-8.1).lineTo(-6.5,-8.2).lineTo(-6.8,8.5).lineTo(-7,-8.7).lineTo(7,-8.8).lineTo(6.9,8.7).closePath();
	this.shape_169.setTransform(261.3,132.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#7B7189").beginStroke().moveTo(-6.8,8.5).lineTo(6.5,8.3).lineTo(6.4,-8.1).lineTo(-6.5,-8.2).lineTo(-6.8,8.5).lineTo(-7,-8.7).lineTo(7,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_170.setTransform(261.3,107.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#1A1A1A").beginStroke().moveTo(-12.8,2.3).lineTo(-12.8,-2.2).lineTo(12.8,-2.2).lineTo(12.8,2.3).closePath();
	this.shape_171.setTransform(261.3,147.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#434444").beginStroke().moveTo(-10,25.4).lineTo(-10,-25.4).lineTo(10,-25.4).lineTo(10,25.4).closePath();
	this.shape_172.setTransform(261.3,120);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#5B5C5E").beginStroke().moveTo(-24.7,70.5).lineTo(-24.7,-48).lineTo(0,-70.5).lineTo(24.7,-48).lineTo(24.7,70.5).closePath();
	this.shape_173.setTransform(261.3,74.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#434444").beginStroke().moveTo(-77.8,3.1).lineTo(-77.8,-3.1).lineTo(77.8,-3.1).lineTo(77.8,3.1).closePath();
	this.shape_174.setTransform(261.3,31.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#494A4E").beginStroke().moveTo(-72.5,55.7).lineTo(-72.5,-55.7).lineTo(72.5,-55.7).lineTo(72.5,55.7).closePath();
	this.shape_175.setTransform(261.3,89.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#28292B").beginStroke().moveTo(-75.2,0.5).lineTo(-75.2,-0.5).lineTo(75.2,-0.5).lineTo(75.2,0.5).closePath();
	this.shape_176.setTransform(261.3,150.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#28292B").beginStroke().moveTo(-75.2,2.7).lineTo(-75.2,-0.2).curveTo(-75.2,-1.3,-74.4,-2).curveTo(-73.6,-2.7,-72.4,-2.7).lineTo(72.5,-2.7).curveTo(73.6,-2.7,74.4,-2).curveTo(75.2,-1.3,75.2,-0.2).lineTo(75.2,2.7).closePath();
	this.shape_177.setTransform(261.3,148.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#434444").beginStroke().moveTo(-5.8,4.6).curveTo(-6.8,4.6,-7.5,3.9).curveTo(-8.3,3.1,-8.2,2.1).lineTo(-8.2,-2.1).curveTo(-8.3,-3.2,-7.5,-3.9).curveTo(-6.8,-4.6,-5.8,-4.6).lineTo(5.7,-4.6).curveTo(6.7,-4.6,7.5,-3.9).curveTo(8.2,-3.2,8.3,-2.1).lineTo(8.3,2.1).curveTo(8.2,3.1,7.5,3.9).curveTo(6.7,4.6,5.7,4.6).closePath();
	this.shape_178.setTransform(528.8,29.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#434444").beginStroke().moveTo(53.5,32.8).lineTo(0,-19.1).lineTo(-53.4,32.8).lineTo(-65.6,32.8).lineTo(0,-32.8).lineTo(65.6,32.8).closePath();
	this.shape_179.setTransform(562.6,43.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#28292B").beginStroke().moveTo(-0.8,0.9).curveTo(-1.2,0.5,-1.2,-0).curveTo(-1.2,-0.5,-0.8,-0.9).curveTo(-0.5,-1.2,-0,-1.2).curveTo(0.5,-1.2,0.9,-0.9).curveTo(1.3,-0.5,1.2,-0).curveTo(1.3,0.6,0.9,0.9).curveTo(0.6,1.3,-0,1.2).curveTo(-0.5,1.3,-0.8,0.9).closePath();
	this.shape_180.setTransform(592,118.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill().beginStroke("#7F7F7F").setStrokeStyle(0.5).moveTo(7.5,9.4).lineTo(-7.5,9.4).lineTo(-7.5,-9.4).lineTo(7.5,-9.4).closePath();
	this.shape_181.setTransform(585,131.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill().beginStroke("#7F7F7F").setStrokeStyle(0.5).moveTo(7.5,9.4).lineTo(-7.5,9.4).lineTo(-7.5,-9.4).lineTo(7.5,-9.4).closePath();
	this.shape_182.setTransform(585,103.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#434444").beginStroke().moveTo(-11.2,28.3).lineTo(-11.2,-28.3).lineTo(11.2,-28.3).lineTo(11.2,28.3).closePath();
	this.shape_183.setTransform(585,117.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-6.8,9.4).lineTo(-6.8,-9.4).lineTo(6.8,-9.4).lineTo(6.8,9.4).closePath();
	this.shape_184.setTransform(562.7,61.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-6.8,9.4).lineTo(-6.8,-9.4).lineTo(6.8,-9.4).lineTo(6.8,9.4).closePath();
	this.shape_185.setTransform(562.7,61.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.5,13.1).lineTo(-9.5,-13.1).lineTo(9.5,-13.1).lineTo(9.5,13.1).closePath();
	this.shape_186.setTransform(553.7,110.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-9.5,13.1).lineTo(-9.5,-13.1).lineTo(9.5,-13.1).lineTo(9.5,13.1).closePath();
	this.shape_187.setTransform(553.7,110.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,13.1).lineTo(-9.6,-13.1).lineTo(9.5,-13.1).lineTo(9.5,13.1).closePath();
	this.shape_188.setTransform(532,110.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#A1D6EC").beginStroke().moveTo(-9.6,13.1).lineTo(-9.6,-13.1).lineTo(9.5,-13.1).lineTo(9.5,13.1).closePath();
	this.shape_189.setTransform(532,110.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#434444").beginStroke().moveTo(-56,2.5).lineTo(-56,-0.2).curveTo(-56,-1.2,-55.3,-1.8).curveTo(-54.5,-2.5,-53.5,-2.5).lineTo(53.5,-2.5).curveTo(54.6,-2.5,55.3,-1.8).curveTo(56,-1.2,56,-0.2).lineTo(56,2.5).closePath();
	this.shape_190.setTransform(562.6,148.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#494A4E").beginStroke().moveTo(-53.3,61.5).lineTo(-53.3,-9.4).lineTo(0,-61.5).lineTo(53.3,-9.4).lineTo(53.3,61.5).closePath();
	this.shape_191.setTransform(562.6,84.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#5B5C5E").beginStroke().moveTo(-5.4,9.6).lineTo(-5.4,-9.6).lineTo(5.5,-9.6).lineTo(5.5,9.6).closePath();
	this.shape_192.setTransform(528.8,41.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#434444").beginStroke().moveTo(-11.7,11.7).curveTo(-16.6,6.8,-16.6,0).curveTo(-16.6,-6.8,-11.7,-11.7).curveTo(-6.8,-16.5,-0,-16.5).curveTo(6.8,-16.5,11.7,-11.7).curveTo(16.6,-6.8,16.6,0).curveTo(16.6,6.8,11.7,11.7).curveTo(6.8,16.5,-0,16.5).curveTo(-6.8,16.5,-11.7,11.7).closePath().moveTo(-9.9,-9.9).curveTo(-14,-5.8,-14,0).curveTo(-14,5.8,-9.9,9.9).curveTo(-5.8,14,-0,14).curveTo(5.8,14,9.9,9.9).curveTo(14,5.8,14,0).curveTo(14,-5.8,9.9,-9.9).curveTo(5.8,-14,-0,-14).curveTo(-5.8,-14,-9.9,-9.9).closePath();
	this.shape_193.setTransform(429.6,62.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#434444").beginStroke().moveTo(-15.3,1.3).lineTo(-15.3,-1.3).lineTo(15.2,-1.3).lineTo(15.2,1.3).closePath();
	this.shape_194.setTransform(429.6,62.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#434444").beginStroke().moveTo(-1.3,15.3).lineTo(-1.3,-15.3).lineTo(1.3,-15.3).lineTo(1.3,15.3).closePath();
	this.shape_195.setTransform(429.6,62.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-10.8,10.8).curveTo(-15.3,6.3,-15.3,0).curveTo(-15.3,-6.3,-10.8,-10.8).curveTo(-6.4,-15.3,-0,-15.3).curveTo(6.4,-15.3,10.8,-10.8).curveTo(15.2,-6.3,15.2,0).curveTo(15.2,6.3,10.8,10.8).curveTo(6.4,15.3,-0,15.3).curveTo(-6.4,15.3,-10.8,10.8).closePath();
	this.shape_196.setTransform(429.6,62.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#434444").beginStroke().moveTo(-5.8,4.7).curveTo(-6.8,4.7,-7.6,3.9).curveTo(-8.3,3.2,-8.3,2.1).lineTo(-8.3,-2.1).curveTo(-8.3,-3.2,-7.6,-3.9).curveTo(-6.8,-4.7,-5.8,-4.7).lineTo(5.8,-4.7).curveTo(6.8,-4.7,7.6,-3.9).curveTo(8.3,-3.2,8.3,-2.1).lineTo(8.3,2.1).curveTo(8.3,3.2,7.6,3.9).curveTo(6.8,4.7,5.8,4.7).closePath();
	this.shape_197.setTransform(463.7,28.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#434444").beginStroke().moveTo(53.8,33).lineTo(-0,-19.2).lineTo(-53.8,33).lineTo(-66.1,33).lineTo(-0,-33).lineTo(66.1,33).closePath();
	this.shape_198.setTransform(429.6,42.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-0.9,0.9).curveTo(-1.3,0.5,-1.3,-0).curveTo(-1.3,-0.5,-0.9,-0.9).curveTo(-0.5,-1.3,-0,-1.3).curveTo(0.5,-1.3,0.9,-0.9).curveTo(1.3,-0.5,1.3,-0).curveTo(1.3,0.5,0.9,0.9).curveTo(0.5,1.2,-0,1.2).curveTo(-0.5,1.2,-0.9,0.9).closePath();
	this.shape_199.setTransform(400,118.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill().beginStroke("#7F7F7F").setStrokeStyle(0.5).moveTo(-7.5,9.5).lineTo(7.6,9.5).lineTo(7.6,-9.5).lineTo(-7.5,-9.5).closePath();
	this.shape_200.setTransform(407.1,131.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill().beginStroke("#7F7F7F").setStrokeStyle(0.5).moveTo(-7.5,9.5).lineTo(7.6,9.5).lineTo(7.6,-9.5).lineTo(-7.5,-9.5).closePath();
	this.shape_201.setTransform(407.1,103.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#434444").beginStroke().moveTo(-14.3,2.5).lineTo(-14.3,-2.5).lineTo(14.3,-2.5).lineTo(14.3,2.5).closePath();
	this.shape_202.setTransform(407,148.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#434444").beginStroke().moveTo(-11.3,28.5).lineTo(-11.3,-28.5).lineTo(11.2,-28.5).lineTo(11.2,28.5).closePath();
	this.shape_203.setTransform(407.1,117.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#28292B").beginStroke().moveTo(-12.2,15.7).lineTo(-12.2,-15.7).lineTo(12.2,-15.7).lineTo(12.2,15.7).closePath().moveTo(-9.6,13.2).lineTo(9.6,13.2).lineTo(9.6,-13.2).lineTo(-9.6,-13.2).closePath();
	this.shape_204.setTransform(438.6,110.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,13.2).lineTo(-9.6,-13.2).lineTo(9.6,-13.2).lineTo(9.6,13.2).closePath();
	this.shape_205.setTransform(438.6,110.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#28292B").beginStroke().moveTo(-12.1,15.7).lineTo(-12.1,-15.7).lineTo(12.2,-15.7).lineTo(12.2,15.7).closePath().moveTo(-9.6,13.2).lineTo(9.6,13.2).lineTo(9.6,-13.2).lineTo(-9.6,-13.2).closePath();
	this.shape_206.setTransform(460.4,110.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#7F7F7F").beginStroke().moveTo(-9.6,13.2).lineTo(-9.6,-13.2).lineTo(9.6,-13.2).lineTo(9.6,13.2).closePath();
	this.shape_207.setTransform(460.4,110.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#1A1A1A").beginStroke().moveTo(-56.4,0.5).lineTo(-56.4,-0.5).lineTo(56.4,-0.5).lineTo(56.4,0.5).closePath();
	this.shape_208.setTransform(429.6,150.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#28292B").beginStroke().moveTo(-56.4,2.5).lineTo(-56.4,-0.2).curveTo(-56.4,-1.2,-55.6,-1.8).curveTo(-54.9,-2.5,-53.8,-2.5).lineTo(53.8,-2.5).curveTo(54.9,-2.5,55.6,-1.8).curveTo(56.4,-1.2,56.4,-0.2).lineTo(56.4,2.5).closePath();
	this.shape_209.setTransform(429.6,148.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#5B5C5E").beginStroke().moveTo(-5.5,9.7).lineTo(-5.5,-9.7).lineTo(5.5,-9.7).lineTo(5.5,9.7).closePath();
	this.shape_210.setTransform(463.7,40.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#494A4E").beginStroke().moveTo(-53.6,61.9).lineTo(-53.6,-9.4).lineTo(-0,-61.9).lineTo(53.6,-9.4).lineTo(53.6,61.9).closePath();
	this.shape_211.setTransform(429.6,84);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.9,19.1).lineTo(-0.9,6.2).lineTo(-9.9,6.2).lineTo(-9.9,4.9).lineTo(-0.9,4.9).lineTo(-0.9,-5.5).lineTo(-9.9,-5.5).lineTo(-9.9,-6.9).lineTo(-0.9,-6.9).lineTo(-0.9,-19.1).lineTo(0.9,-19.1).lineTo(0.9,-6.9).lineTo(9.9,-6.9).lineTo(9.9,-5.5).lineTo(0.9,-5.5).lineTo(0.9,4.9).lineTo(9.9,4.9).lineTo(9.9,6.2).lineTo(0.9,6.2).lineTo(0.9,19.1).closePath();
	this.shape_212.setTransform(-858.3,37.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-9,17.7).lineTo(-9,-11.3).curveTo(-8.9,-13.9,-6.3,-15.8).curveTo(-3.7,-17.7,-0,-17.7).curveTo(3.7,-17.7,6.3,-15.8).curveTo(9,-13.9,9,-11.3).lineTo(9,17.7).closePath();
	this.shape_213.setTransform(-858.3,36.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-10.7,19.4).lineTo(-10.7,-11.3).curveTo(-10.7,-11.9,-10.5,-12.7).curveTo(-9.7,-15.9,-6.4,-17.8).curveTo(-3.5,-19.4,-0,-19.4).curveTo(3.5,-19.4,6.4,-17.8).curveTo(9.7,-15.9,10.5,-12.7).curveTo(10.7,-11.9,10.7,-11.3).lineTo(10.7,19.4).closePath();
	this.shape_214.setTransform(-858.3,36.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.9,19.1).lineTo(-0.9,6.2).lineTo(-9.9,6.2).lineTo(-9.9,4.9).lineTo(-0.9,4.9).lineTo(-0.9,-5.5).lineTo(-9.9,-5.5).lineTo(-9.9,-6.9).lineTo(-0.9,-6.9).lineTo(-0.9,-19.1).lineTo(0.9,-19.1).lineTo(0.9,-6.9).lineTo(9.9,-6.9).lineTo(9.9,-5.5).lineTo(0.9,-5.5).lineTo(0.9,4.9).lineTo(9.9,4.9).lineTo(9.9,6.2).lineTo(0.9,6.2).lineTo(0.9,19.1).closePath();
	this.shape_215.setTransform(-818.6,37.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-9,17.7).lineTo(-9,-11.3).curveTo(-8.9,-13.9,-6.3,-15.8).curveTo(-3.7,-17.7,-0,-17.7).curveTo(3.7,-17.7,6.3,-15.8).curveTo(9,-13.9,9,-11.3).lineTo(9,17.7).closePath();
	this.shape_216.setTransform(-818.6,36.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-10.7,19.4).lineTo(-10.7,-11.3).curveTo(-10.7,-11.9,-10.5,-12.7).curveTo(-9.7,-15.9,-6.4,-17.8).curveTo(-3.5,-19.4,-0,-19.4).curveTo(3.5,-19.4,6.4,-17.8).curveTo(9.7,-15.9,10.5,-12.7).curveTo(10.7,-11.9,10.7,-11.3).lineTo(10.7,19.4).closePath();
	this.shape_217.setTransform(-818.6,36.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.7).lineTo(-0.8,5.7).lineTo(-9.1,5.7).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5.1).lineTo(-9.1,-5.1).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.7).lineTo(0.8,-17.7).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5.1).lineTo(0.8,-5.1).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.7).lineTo(0.8,5.7).lineTo(0.8,17.7).closePath();
	this.shape_218.setTransform(-719.9,122.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.4,16.4).lineTo(-8.4,-10.4).curveTo(-8.3,-12.9,-5.8,-14.6).curveTo(-3.4,-16.3,0,-16.3).curveTo(3.4,-16.3,5.9,-14.6).curveTo(8.3,-12.9,8.4,-10.4).lineTo(8.4,16.4).closePath();
	this.shape_219.setTransform(-719.8,122.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).curveTo(-9.9,-11.2,-9.7,-11.8).curveTo(-8.9,-14.7,-5.9,-16.4).curveTo(-3.3,-17.9,0,-17.9).curveTo(3.2,-17.9,5.9,-16.4).curveTo(9,-14.7,9.7,-11.8).curveTo(9.9,-11.2,9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_220.setTransform(-719.8,122.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.7).lineTo(-0.8,5.7).lineTo(-9.1,5.7).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5.1).lineTo(-9.1,-5.1).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.7).lineTo(0.8,-17.7).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5.1).lineTo(0.8,-5.1).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.7).lineTo(0.8,5.7).lineTo(0.8,17.7).closePath();
	this.shape_221.setTransform(-756.3,122.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.3,16.4).lineTo(-8.3,-10.4).curveTo(-8.3,-12.9,-5.9,-14.6).curveTo(-3.4,-16.3,-0,-16.3).curveTo(3.4,-16.3,5.8,-14.6).curveTo(8.3,-12.9,8.3,-10.4).lineTo(8.3,16.4).closePath();
	this.shape_222.setTransform(-756.3,122.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).curveTo(-9.9,-11,-9.7,-11.8).curveTo(-9,-14.7,-5.9,-16.4).curveTo(-3.2,-17.9,-0,-17.9).curveTo(3.3,-17.9,5.9,-16.4).curveTo(9,-14.7,9.8,-11.8).lineTo(9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_223.setTransform(-756.3,122.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.6).lineTo(-0.8,5.8).lineTo(-9.1,5.8).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5).lineTo(-9.1,-5).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.6).lineTo(0.8,-17.6).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5).lineTo(0.8,-5).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.8).lineTo(0.8,5.8).lineTo(0.8,17.6).closePath();
	this.shape_224.setTransform(-719.9,79.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.4,16.4).lineTo(-8.4,-10.4).curveTo(-8.3,-12.9,-5.8,-14.6).curveTo(-3.4,-16.3,0,-16.3).curveTo(3.4,-16.3,5.9,-14.6).curveTo(8.3,-12.9,8.4,-10.4).lineTo(8.4,16.4).closePath();
	this.shape_225.setTransform(-719.8,79.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).curveTo(-9.9,-11.2,-9.7,-11.8).curveTo(-8.9,-14.7,-5.9,-16.4).curveTo(-3.3,-17.9,0,-17.9).curveTo(3.2,-17.9,5.9,-16.4).curveTo(9,-14.7,9.7,-11.8).curveTo(9.9,-11.2,9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_226.setTransform(-719.8,79.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.6).lineTo(-0.8,5.8).lineTo(-9.1,5.8).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5).lineTo(-9.1,-5).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.6).lineTo(0.8,-17.6).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5).lineTo(0.8,-5).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.8).lineTo(0.8,5.8).lineTo(0.8,17.6).closePath();
	this.shape_227.setTransform(-756.3,79.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.3,16.4).lineTo(-8.3,-10.4).curveTo(-8.3,-12.9,-5.9,-14.6).curveTo(-3.4,-16.3,-0,-16.3).curveTo(3.4,-16.3,5.8,-14.6).curveTo(8.3,-12.9,8.3,-10.4).lineTo(8.3,16.4).closePath();
	this.shape_228.setTransform(-756.3,79.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).lineTo(-9.7,-11.8).curveTo(-9,-14.7,-5.9,-16.4).curveTo(-3.2,-17.9,-0,-17.9).curveTo(3.3,-17.9,5.9,-16.4).curveTo(9,-14.7,9.8,-11.8).lineTo(9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_229.setTransform(-756.3,79.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.7).lineTo(-0.8,5.7).lineTo(-9.1,5.7).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5.1).lineTo(-9.1,-5.1).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.7).lineTo(0.8,-17.7).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5.1).lineTo(0.8,-5.1).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.7).lineTo(0.8,5.7).lineTo(0.8,17.7).closePath();
	this.shape_230.setTransform(-920.6,122.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.3,16.4).lineTo(-8.3,-10.4).curveTo(-8.3,-12.9,-5.9,-14.6).curveTo(-3.4,-16.3,0,-16.3).curveTo(3.4,-16.3,5.9,-14.6).curveTo(8.3,-12.9,8.3,-10.4).lineTo(8.3,16.4).closePath();
	this.shape_231.setTransform(-920.6,122.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).lineTo(-9.7,-11.8).curveTo(-9,-14.7,-5.9,-16.4).curveTo(-3.2,-17.9,0,-17.9).curveTo(3.3,-17.9,5.9,-16.4).curveTo(9,-14.7,9.7,-11.8).lineTo(9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_232.setTransform(-920.6,122.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.7).lineTo(-0.8,5.7).lineTo(-9.1,5.7).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5.1).lineTo(-9.1,-5.1).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.7).lineTo(0.8,-17.7).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5.1).lineTo(0.8,-5.1).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.7).lineTo(0.8,5.7).lineTo(0.8,17.7).closePath();
	this.shape_233.setTransform(-957,122.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.3,16.4).lineTo(-8.3,-10.4).curveTo(-8.2,-12.9,-5.9,-14.6).curveTo(-3.4,-16.3,-0,-16.3).curveTo(3.4,-16.3,5.8,-14.6).curveTo(8.3,-12.9,8.3,-10.4).lineTo(8.3,16.4).closePath();
	this.shape_234.setTransform(-957,122.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).curveTo(-9.9,-11.2,-9.7,-11.8).curveTo(-9,-14.7,-6,-16.4).curveTo(-3.2,-17.9,-0,-17.9).curveTo(3.3,-17.9,5.9,-16.4).curveTo(9,-14.7,9.7,-11.8).curveTo(9.9,-11.2,9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_235.setTransform(-957,122.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.6).lineTo(-0.8,5.8).lineTo(-9.1,5.8).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5).lineTo(-9.1,-5).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.6).lineTo(0.8,-17.6).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5).lineTo(0.8,-5).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.8).lineTo(0.8,5.8).lineTo(0.8,17.6).closePath();
	this.shape_236.setTransform(-920.6,79.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.3,16.4).lineTo(-8.3,-10.4).curveTo(-8.3,-12.9,-5.9,-14.6).curveTo(-3.4,-16.3,0,-16.3).curveTo(3.4,-16.3,5.9,-14.6).curveTo(8.3,-12.9,8.3,-10.4).lineTo(8.3,16.4).closePath();
	this.shape_237.setTransform(-920.6,79.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).lineTo(-9.7,-11.8).curveTo(-9,-14.7,-5.9,-16.4).curveTo(-3.2,-17.9,0,-17.9).curveTo(3.3,-17.9,5.9,-16.4).curveTo(9,-14.7,9.7,-11.8).lineTo(9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_238.setTransform(-920.6,79.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-0.8,17.6).lineTo(-0.8,5.8).lineTo(-9.1,5.8).lineTo(-9.1,4.5).lineTo(-0.8,4.5).lineTo(-0.8,-5).lineTo(-9.1,-5).lineTo(-9.1,-6.4).lineTo(-0.8,-6.4).lineTo(-0.8,-17.6).lineTo(0.8,-17.6).lineTo(0.8,-6.4).lineTo(9.1,-6.4).lineTo(9.1,-5).lineTo(0.8,-5).lineTo(0.8,4.5).lineTo(9.1,4.5).lineTo(9.1,5.8).lineTo(0.8,5.8).lineTo(0.8,17.6).closePath();
	this.shape_239.setTransform(-957,79.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#FCFCFC").beginStroke().moveTo(-8.3,16.4).lineTo(-8.3,-10.4).curveTo(-8.2,-12.9,-5.9,-14.6).curveTo(-3.4,-16.3,-0,-16.3).curveTo(3.4,-16.3,5.8,-14.6).curveTo(8.3,-12.9,8.3,-10.4).lineTo(8.3,16.4).closePath();
	this.shape_240.setTransform(-957,79.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-9.9,17.9).lineTo(-9.9,-10.4).curveTo(-9.9,-11.2,-9.7,-11.8).curveTo(-9,-14.7,-6,-16.4).curveTo(-3.2,-17.9,-0,-17.9).curveTo(3.3,-17.9,5.9,-16.4).curveTo(9,-14.7,9.7,-11.8).curveTo(9.9,-11.2,9.9,-10.4).lineTo(9.9,17.9).closePath();
	this.shape_241.setTransform(-957,79.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#4C4C4C").beginStroke().moveTo(-0.6,37.4).lineTo(-0.6,-37.4).lineTo(0.6,-37.4).lineTo(0.6,37.4).closePath();
	this.shape_242.setTransform(-839,113.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#707070").beginStroke().moveTo(-18.4,37.4).lineTo(-18.4,-24.2).lineTo(-18,-26.5).curveTo(-16.7,-31.7,-10.9,-34.7).curveTo(-5.9,-37.4,-0,-37.4).curveTo(5.9,-37.4,10.9,-34.7).curveTo(16.7,-31.7,18,-26.5).curveTo(18.2,-25.5,18.4,-24.2).lineTo(18.4,37.4).closePath();
	this.shape_243.setTransform(-838.4,113.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#1E1E1E").beginStroke().moveTo(69,26.7).lineTo(-0,-16.8).lineTo(-69,26.7).lineTo(-84.7,26.7).lineTo(-0,-26.7).lineTo(84.7,26.7).closePath();
	this.shape_244.setTransform(-838,-7.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#494A4E").beginStroke().moveTo(-52.7,92.4).lineTo(-52.7,-58.5).lineTo(0.4,-92.4).lineTo(52.6,-58.5).lineTo(52.6,92.4).closePath();
	this.shape_245.setTransform(-838.4,58.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#414142").beginStroke().moveTo(-2.5,2.5).curveTo(-3.5,1.5,-3.5,0).curveTo(-3.5,-1.4,-2.5,-2.5).curveTo(-1.4,-3.5,0,-3.5).curveTo(1.5,-3.5,2.5,-2.5).curveTo(3.5,-1.4,3.5,0).curveTo(3.5,1.5,2.5,2.5).curveTo(1.5,3.5,0,3.5).curveTo(-1.4,3.5,-2.5,2.5).closePath();
	this.shape_246.setTransform(-838.5,-147.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#505154").beginStroke().moveTo(-1.1,-0.9).lineTo(-0.2,-1.4).lineTo(1.1,0.8).lineTo(0.2,1.4).closePath();
	this.shape_247.setTransform(-846.5,-78.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#505154").beginStroke().moveTo(-1.4,-0.2).lineTo(-0.8,-1.1).lineTo(1.4,0.2).lineTo(0.9,1.1).closePath();
	this.shape_248.setTransform(-853.1,-71.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#505154").beginStroke().moveTo(-1.3,0.5).lineTo(-1.3,-0).lineTo(-1.3,-0.5).lineTo(1.3,-0.5).lineTo(1.3,0.5).closePath();
	this.shape_249.setTransform(-855.5,-62.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#505154").beginStroke().moveTo(-1.4,0.2).lineTo(0.9,-1.1).lineTo(1.4,-0.1).lineTo(-0.8,1.1).closePath();
	this.shape_250.setTransform(-853.1,-53.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#505154").beginStroke().moveTo(-1.1,0.9).lineTo(0.2,-1.4).lineTo(1.1,-0.8).lineTo(-0.2,1.4).closePath();
	this.shape_251.setTransform(-846.5,-47);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#505154").beginStroke().moveTo(-0.6,1.3).lineTo(-0.6,-1.3).lineTo(0.5,-1.3).lineTo(0.5,1.3).closePath();
	this.shape_252.setTransform(-837.4,-44.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#505154").beginStroke().moveTo(-1.1,-0.8).lineTo(-0.2,-1.4).lineTo(1.1,0.9).lineTo(0.2,1.4).closePath();
	this.shape_253.setTransform(-828.4,-47);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#505154").beginStroke().moveTo(-1.4,-0.1).lineTo(-0.9,-1.1).lineTo(1.4,0.2).lineTo(0.8,1.1).closePath();
	this.shape_254.setTransform(-821.8,-53.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#505154").beginStroke().moveTo(-1.3,0.5).lineTo(-1.3,-0.5).lineTo(1.2,-0.5).lineTo(1.3,-0).lineTo(1.2,0.5).closePath();
	this.shape_255.setTransform(-819.3,-62.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#505154").beginStroke().moveTo(-1.4,0.2).lineTo(0.8,-1.1).lineTo(1.4,-0.2).lineTo(-0.9,1.1).closePath();
	this.shape_256.setTransform(-821.8,-71.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#505154").beginStroke().moveTo(-1.1,0.8).lineTo(0.2,-1.4).lineTo(1.1,-0.9).lineTo(-0.2,1.4).closePath();
	this.shape_257.setTransform(-828.4,-78.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#505154").beginStroke().moveTo(-0.6,1.3).lineTo(-0.6,-1.3).lineTo(0.5,-1.3).lineTo(0.5,1.3).closePath();
	this.shape_258.setTransform(-837.4,-80.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#36464F").beginStroke().moveTo(-1.3,1.3).curveTo(-1.9,0.8,-1.8,-0).curveTo(-1.9,-0.8,-1.3,-1.3).curveTo(-0.7,-1.8,-0,-1.8).curveTo(0.7,-1.8,1.3,-1.3).curveTo(1.8,-0.8,1.9,-0).curveTo(1.8,0.8,1.3,1.3).curveTo(0.7,1.8,-0,1.8).curveTo(-0.7,1.8,-1.3,1.3).closePath();
	this.shape_259.setTransform(-837.4,-62.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#CED0D1").beginStroke().moveTo(-1.6,1.6).curveTo(-2.2,0.9,-2.2,-0).curveTo(-2.2,-0.9,-1.6,-1.6).curveTo(-1,-2.2,-0,-2.2).curveTo(0.9,-2.2,1.6,-1.6).curveTo(2.2,-0.9,2.2,-0).curveTo(2.2,0.9,1.6,1.6).curveTo(0.9,2.2,-0,2.2).curveTo(-1,2.2,-1.6,1.6).closePath();
	this.shape_260.setTransform(-837.4,-62.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#353434").beginStroke().moveTo(3.9,-3.4).lineTo(5.2,-1.3).lineTo(-5.2,3.4).closePath();
	this.shape_261.setTransform(-842,-60.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#353434").beginStroke().moveTo(-1.5,6.9).lineTo(-0,-6.9).lineTo(1.5,6.9).closePath();
	this.shape_262.setTransform(-837.4,-69.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#E4E5E6").beginStroke().moveTo(-14,14).curveTo(-19.8,8.2,-19.8,-0).curveTo(-19.8,-8.2,-14,-14).curveTo(-8.2,-19.8,-0,-19.8).curveTo(8.2,-19.8,14,-14).curveTo(19.8,-8.2,19.8,-0).curveTo(19.8,8.2,14,14).curveTo(8.2,19.8,-0,19.8).curveTo(-8.2,19.8,-14,14).closePath();
	this.shape_263.setTransform(-837.4,-62.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#36464F").beginStroke().moveTo(-14.9,14.9).curveTo(-21,8.7,-21.1,-0).curveTo(-21,-8.7,-14.9,-14.9).curveTo(-8.7,-21,-0,-21).curveTo(8.7,-21,14.9,-14.9).curveTo(21,-8.7,21,-0).curveTo(21,8.7,14.9,14.9).curveTo(8.7,21,-0,21).curveTo(-8.7,21,-14.9,14.9).closePath();
	this.shape_264.setTransform(-837.4,-62.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#6D6D6D").beginStroke().moveTo(-16.5,16.4).curveTo(-23.3,9.6,-23.3,-0).curveTo(-23.3,-9.6,-16.5,-16.4).curveTo(-9.6,-23.3,-0,-23.3).curveTo(9.6,-23.3,16.4,-16.4).curveTo(23.3,-9.6,23.3,-0).curveTo(23.3,9.6,16.4,16.4).curveTo(9.6,23.3,-0,23.3).curveTo(-9.6,23.3,-16.5,16.4).closePath();
	this.shape_265.setTransform(-837.4,-62.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#1E1E1E").beginStroke().moveTo(37.5,20.3).lineTo(-0,-12.8).lineTo(-37.5,20.3).lineTo(-46,20.3).lineTo(-0,-20.3).lineTo(46,20.3).closePath();
	this.shape_266.setTransform(-838.4,-99.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.8,62.8).lineTo(-34.8,-31.8).lineTo(-0,-62.8).lineTo(34.8,-31.8).lineTo(34.8,62.8).closePath();
	this.shape_267.setTransform(-838.4,-50.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#43525A").beginStroke().moveTo(-0.9,15.9).lineTo(-0.9,-15.9).lineTo(0.9,-15.9).lineTo(0.9,15.9).closePath();
	this.shape_268.setTransform(-838.4,-129.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.9,-4.6).lineTo(13.9,-13).lineTo(13.9,4.7).lineTo(-13.9,13).closePath();
	this.shape_269.setTransform(-851.5,-130.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#2B2B2B").beginStroke().moveTo(-6.4,2.3).curveTo(5.6,-4.9,6.4,-5.3).lineTo(6.4,5.3).closePath();
	this.shape_270.setTransform(-859,-120);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#414142").beginStroke().moveTo(-5.7,2.1).lineTo(-13.9,-4.7).lineTo(13.9,-13).lineTo(13.9,4.6).lineTo(-13.9,13).closePath();
	this.shape_271.setTransform(-866.5,-119.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#707070").beginStroke().moveTo(-2,1.6).curveTo(-4,-0.6,-4.2,-3.8).lineTo(4.2,3.7).curveTo(3.6,3.8,3,3.8).curveTo(0.1,3.8,-2,1.6).closePath();
	this.shape_272.setTransform(-680.8,30.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.1,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(5.6,-4.7).lineTo(7.2,-3.4).curveTo(7.1,-0,5.1,2.3).curveTo(3,4.7,-0,4.7).curveTo(-2.9,4.7,-5.1,2.3).closePath();
	this.shape_273.setTransform(-692.8,29.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.7,0,4.7).curveTo(-3,4.7,-5.1,2.3).closePath();
	this.shape_274.setTransform(-707.7,29.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7,-4.7).lineTo(7.1,-3.4).curveTo(7.1,-0.1,5.1,2.3).curveTo(2.9,4.6,0,4.6).curveTo(-3,4.6,-5,2.3).closePath();
	this.shape_275.setTransform(-722.6,29.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,-0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_276.setTransform(-737.6,29.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.3).curveTo(-7.2,-0.1,-7.1,-3.4).lineTo(-7,-4.7).lineTo(7,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5,2.3).curveTo(3,4.6,-0,4.6).curveTo(-2.9,4.6,-5,2.3).closePath();
	this.shape_277.setTransform(-752.5,29.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,-0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_278.setTransform(-767.4,29.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,0,4.6).curveTo(-2.9,4.6,-5.1,2.3).closePath();
	this.shape_279.setTransform(-782.4,29.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,-0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_280.setTransform(-797.3,29.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,0,4.6).curveTo(-2.9,4.6,-5.1,2.3).closePath();
	this.shape_281.setTransform(-812.2,29.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,-0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_282.setTransform(-827.1,29.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,0,4.6).curveTo(-2.9,4.6,-5.1,2.3).closePath();
	this.shape_283.setTransform(-842.1,29.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,-0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_284.setTransform(-857,29.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,0,4.6).curveTo(-2.9,4.6,-5.1,2.3).closePath();
	this.shape_285.setTransform(-871.9,29.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,-0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_286.setTransform(-886.8,29.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,0,4.6).curveTo(-2.9,4.6,-5.1,2.3).closePath();
	this.shape_287.setTransform(-901.8,29.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,-0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_288.setTransform(-916.7,29.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.6,0,4.6).curveTo(-3,4.6,-5.1,2.3).closePath();
	this.shape_289.setTransform(-931.6,29.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(2.9,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.3).closePath();
	this.shape_290.setTransform(-946.5,29.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.2,-0,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.3).curveTo(3,4.7,0,4.7).curveTo(-3,4.7,-5.1,2.3).closePath();
	this.shape_291.setTransform(-961.5,29.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.3).curveTo(-7.1,-0.1,-7.1,-3.4).lineTo(-7,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5,2.3).curveTo(3,4.6,-0,4.6).curveTo(-2.9,4.6,-5.1,2.3).closePath();
	this.shape_292.setTransform(-976.4,29.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#707070").beginStroke().moveTo(-6.4,1.7).lineTo(0.9,-4.7).lineTo(6.3,-4.7).lineTo(6.4,-3.4).curveTo(6.4,-0.1,4.3,2.3).curveTo(2.2,4.6,-0.7,4.6).curveTo(-4.3,4.6,-6.4,1.7).closePath();
	this.shape_293.setTransform(-990.5,29.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#707070").beginStroke().moveTo(-3.2,2.2).curveTo(-5.3,-0.2,-5.3,-3.5).curveTo(-5.3,-4.6,-5.2,-4.6).lineTo(-4.3,-4.6).lineTo(5.3,3.7).curveTo(4,4.5,1.9,4.5).curveTo(-1.1,4.5,-3.2,2.2).closePath();
	this.shape_294.setTransform(-670.9,40.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7,-4.6).curveTo(7.1,-4.5,7.1,-3.5).curveTo(7.1,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5,2.2).closePath();
	this.shape_295.setTransform(-683.9,40.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_296.setTransform(-698.9,40.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.2).curveTo(-7.2,-0.2,-7.1,-3.5).curveTo(-7.1,-4.6,-7,-4.6).lineTo(7,-4.6).curveTo(7.1,-4.5,7.2,-3.5).curveTo(7.2,-0,5,2.3).curveTo(3,4.5,-0,4.5).curveTo(-2.9,4.5,-5,2.2).closePath();
	this.shape_297.setTransform(-713.8,40.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_298.setTransform(-728.7,40.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.1,-0.2,-7.1,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.1,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-2.9,4.5,-5.1,2.2).closePath();
	this.shape_299.setTransform(-743.6,40.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_300.setTransform(-758.6,40.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-2.9,4.5,-5.1,2.2).closePath();
	this.shape_301.setTransform(-773.5,40.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_302.setTransform(-788.4,40.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-2.9,4.5,-5.1,2.2).closePath();
	this.shape_303.setTransform(-803.4,40.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_304.setTransform(-818.3,40.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-2.9,4.5,-5.1,2.2).closePath();
	this.shape_305.setTransform(-833.2,40.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_306.setTransform(-848.1,40.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-2.9,4.5,-5.1,2.2).closePath();
	this.shape_307.setTransform(-863.1,40.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_308.setTransform(-878,40.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_309.setTransform(-892.9,40.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_310.setTransform(-907.8,40.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_311.setTransform(-922.8,40.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_312.setTransform(-937.7,40.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_313.setTransform(-952.6,40.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7,-4.6).curveTo(7.1,-4.5,7.1,-3.5).curveTo(7.1,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5,2.2).closePath();
	this.shape_314.setTransform(-967.5,40.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.2,-7.2,-3.5).curveTo(-7.2,-4.6,-7.1,-4.6).lineTo(7.1,-4.6).curveTo(7.2,-4.5,7.2,-3.5).curveTo(7.2,-0,5.1,2.3).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_315.setTransform(-982.5,40.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#707070").beginStroke().moveTo(-4.8,2.6).curveTo(-6.7,0.7,-7.1,-2.3).lineTo(-4.3,-4.5).lineTo(7,-4.5).curveTo(7.1,-4.5,7.1,-3.4).curveTo(7.1,-0.1,5,2.2).curveTo(3,4.5,-0,4.5).curveTo(-2.8,4.5,-4.8,2.6).closePath();
	this.shape_316.setTransform(-997.4,40.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#707070").beginStroke().moveTo(-4.5,2.1).curveTo(-6.6,-0.1,-6.6,-3.5).curveTo(-6.6,-4.5,-6.5,-4.4).lineTo(0.3,-4.4).lineTo(6.6,0.9).curveTo(4.7,4.4,0.5,4.5).curveTo(-2.5,4.5,-4.5,2.1).closePath();
	this.shape_317.setTransform(-699.5,19.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.1,-0.1,-7.2,-3.5).curveTo(-7.2,-4.5,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.5,7.1,-3.5).curveTo(7.1,-0,5.1,2.2).curveTo(3,4.4,0,4.5).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_318.setTransform(-713.8,19.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,-0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_319.setTransform(-728.8,19.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,0,4.6).curveTo(-2.9,4.5,-5.1,2.1).closePath();
	this.shape_320.setTransform(-743.7,19.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,-0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_321.setTransform(-758.6,19.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,0,4.6).curveTo(-2.9,4.5,-5.1,2.1).closePath();
	this.shape_322.setTransform(-773.6,19.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,-0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_323.setTransform(-788.5,19.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,0,4.6).curveTo(-2.9,4.5,-5.1,2.1).closePath();
	this.shape_324.setTransform(-803.4,19.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(2.9,4.5,-0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_325.setTransform(-818.3,19.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,0,4.6).curveTo(-2.9,4.5,-5.1,2.1).closePath();
	this.shape_326.setTransform(-833.3,19.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(2.9,4.5,-0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_327.setTransform(-848.2,19.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,0,4.6).curveTo(-2.9,4.5,-5.1,2.1).closePath();
	this.shape_328.setTransform(-863.1,19.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(2.9,4.5,-0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_329.setTransform(-878,19.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_330.setTransform(-893,19.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(2.9,4.5,-0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_331.setTransform(-907.9,19.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7.1,-4.5).curveTo(7.2,-4.6,7.2,-3.6).curveTo(7.2,-0.2,5.1,2.1).curveTo(3,4.5,0,4.6).curveTo(-3,4.5,-5.1,2.1).closePath();
	this.shape_332.setTransform(-922.8,19.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.6,-7.1,-4.5).lineTo(7,-4.5).curveTo(7.1,-4.6,7.1,-3.6).curveTo(7.1,-0.2,5.1,2.1).curveTo(2.9,4.5,0,4.6).curveTo(-2.9,4.5,-5,2.1).closePath();
	this.shape_333.setTransform(-937.7,19.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).curveTo(-7.2,-4.3,-7.1,-4.3).lineTo(7.1,-4.3).curveTo(7.2,-4.3,7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.3,0,4.3).curveTo(-3,4.3,-5.1,2.2).closePath();
	this.shape_334.setTransform(-952.7,19.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.1,-3.4).curveTo(-7.1,-4.3,-7,-4.3).lineTo(7,-4.3).curveTo(7.2,-4.3,7.2,-3.4).curveTo(7.2,-0.1,5,2.2).curveTo(3,4.3,-0,4.3).curveTo(-3,4.3,-5.1,2.2).closePath();
	this.shape_335.setTransform(-967.6,19.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#707070").beginStroke().moveTo(-5.7,3).lineTo(3.3,-4.5).lineTo(5.6,-4.5).curveTo(5.7,-4.6,5.7,-3.6).curveTo(5.7,-0.2,3.6,2.1).curveTo(1.5,4.5,-1.5,4.6).curveTo(-3.8,4.6,-5.7,3).closePath();
	this.shape_336.setTransform(-981,19.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#707070").beginStroke().moveTo(-3.7,2.2).curveTo(-5.8,-0.1,-5.8,-3.5).lineTo(-5.7,-4.6).lineTo(-3,-4.6).lineTo(5.8,3).curveTo(4.1,4.6,1.4,4.6).curveTo(-1.6,4.6,-3.7,2.2).closePath();
	this.shape_337.setTransform(-708.2,8.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_338.setTransform(-721.8,8.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_339.setTransform(-736.7,8.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_340.setTransform(-751.7,8.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_341.setTransform(-766.6,8.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_342.setTransform(-781.5,8.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_343.setTransform(-796.4,8.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_344.setTransform(-811.4,8.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.2).curveTo(-7.2,-0.1,-7.1,-3.4).lineTo(-7,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5,2.2).closePath();
	this.shape_345.setTransform(-826.3,8.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_346.setTransform(-841.2,8.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.1,-0.1,-7.1,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.1,-0.1,5.1,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_347.setTransform(-856.1,8.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_348.setTransform(-871.1,8.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7,-4.5).lineTo(7.1,-3.4).curveTo(7.1,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5,2.2).closePath();
	this.shape_349.setTransform(-886,8.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_350.setTransform(-900.9,8.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.1,-3.4).lineTo(-7,-4.5).lineTo(7,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_351.setTransform(-915.8,8.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,-0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_352.setTransform(-930.8,8.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.2).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,0,4.5).curveTo(-3,4.5,-5.1,2.2).closePath();
	this.shape_353.setTransform(-945.7,8.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#707070").beginStroke().moveTo(-4.9,2.4).curveTo(-7,0.3,-7.2,-2.9).lineTo(-5,-4.5).lineTo(7.1,-4.5).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.2).curveTo(3,4.5,-0,4.5).curveTo(-2.9,4.5,-4.9,2.4).closePath();
	this.shape_354.setTransform(-960.6,8.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#707070").beginStroke().moveTo(-4,3.5).lineTo(4,-3.6).curveTo(3.6,-0.5,1.6,1.5).curveTo(-0.4,3.6,-3.1,3.5).closePath();
	this.shape_355.setTransform(-972.4,9.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#707070").beginStroke().moveTo(-1.9,1.6).curveTo(-4,-0.6,-4.2,-3.8).lineTo(4.2,3.6).curveTo(3.6,3.8,2.9,3.8).curveTo(0.1,3.8,-1.9,1.6).closePath();
	this.shape_356.setTransform(-716.8,-1.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(5.6,-4.7).lineTo(7.2,-3.4).curveTo(7.1,0,5,2.4).curveTo(2.9,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_357.setTransform(-728.8,-2.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(3,4.7,0,4.7).curveTo(-2.9,4.7,-5.1,2.4).closePath();
	this.shape_358.setTransform(-743.8,-2.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0,5.1,2.4).curveTo(3,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_359.setTransform(-758.7,-2.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(3,4.7,0,4.7).curveTo(-2.9,4.7,-5.1,2.4).closePath();
	this.shape_360.setTransform(-773.6,-2.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(2.9,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_361.setTransform(-788.5,-2.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(3,4.7,0,4.7).curveTo(-2.9,4.7,-5.1,2.4).closePath();
	this.shape_362.setTransform(-803.5,-2.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(2.9,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_363.setTransform(-818.4,-2.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(3,4.7,0,4.7).curveTo(-2.9,4.7,-5.1,2.4).closePath();
	this.shape_364.setTransform(-833.3,-2.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(2.9,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_365.setTransform(-848.2,-2.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(3,4.7,0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_366.setTransform(-863.2,-2.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(2.9,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_367.setTransform(-878.1,-2.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(3,4.7,0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_368.setTransform(-893,-2.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0.1,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(2.9,4.7,-0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_369.setTransform(-907.9,-2.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.2,-0,-7.2,-3.4).lineTo(-7.1,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5.1,2.4).curveTo(3,4.7,0,4.7).curveTo(-3,4.7,-5.1,2.4).closePath();
	this.shape_370.setTransform(-922.9,-2.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.4).curveTo(-7.1,-0.1,-7.1,-3.4).lineTo(-7,-4.7).lineTo(7.1,-4.7).lineTo(7.2,-3.4).curveTo(7.2,-0.1,5,2.4).curveTo(3,4.7,-0,4.7).curveTo(-2.9,4.7,-5.1,2.4).closePath();
	this.shape_371.setTransform(-937.8,-2.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#707070").beginStroke().moveTo(-4.2,3.4).curveTo(-6,2.2,-6.8,0.1).lineTo(-1.3,-4.7).lineTo(6.7,-4.7).lineTo(6.8,-3.4).curveTo(6.8,-0.1,4.7,2.4).curveTo(2.6,4.7,-0.3,4.7).curveTo(-2.4,4.7,-4.2,3.4).closePath();
	this.shape_372.setTransform(-952.4,-2.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_373.setTransform(-678.7,51.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_374.setTransform(-693.6,51.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_375.setTransform(-708.6,51.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_376.setTransform(-723.5,51.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_377.setTransform(-738.4,51.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_378.setTransform(-753.3,51.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_379.setTransform(-768.3,51.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_380.setTransform(-783.2,51.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_381.setTransform(-798.1,51.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.1,-0.2,-7.1,-3.6).curveTo(-7.1,-4.4,-7,-4.4).lineTo(7.1,-4.4).lineTo(7.2,-3.5).curveTo(7.2,-0.1,5,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_382.setTransform(-813,51.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_383.setTransform(-828,51.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).lineTo(-7.1,-4.4).lineTo(7.1,-4.4).lineTo(7.1,-3.5).curveTo(7.1,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5,2.1).closePath();
	this.shape_384.setTransform(-842.9,51.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_385.setTransform(-857.8,51.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#707070").beginStroke().moveTo(-5,2.1).curveTo(-7.2,-0.2,-7.1,-3.6).lineTo(-7.1,-4.4).lineTo(7.1,-4.4).lineTo(7.1,-3.5).curveTo(7.2,-0.1,5,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5,2.1).closePath();
	this.shape_386.setTransform(-872.7,51.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_387.setTransform(-887.7,51.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.1,-0.2,-7.1,-3.6).lineTo(-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_388.setTransform(-902.6,51.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_389.setTransform(-917.5,51.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_390.setTransform(-932.5,51.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_391.setTransform(-947.4,51.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_392.setTransform(-962.3,51.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_393.setTransform(-977.2,51.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.2,-7.2,-3.6).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_394.setTransform(-992.2,51.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#707070").beginStroke().moveTo(-5.1,2.1).curveTo(-7.2,-0.1,-7.2,-3.5).curveTo(-7.2,-4.4,-7.1,-4.4).lineTo(7.1,-4.4).curveTo(7.2,-4.4,7.2,-3.5).curveTo(7.2,-0.1,5.1,2.1).curveTo(3,4.4,-0,4.4).curveTo(-3,4.4,-5.1,2.1).closePath();
	this.shape_395.setTransform(-1007.1,51.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#707070").beginStroke().moveTo(-0.8,-0.7).lineTo(0.7,-0.7).lineTo(0.8,0.6).lineTo(0.8,0.7).closePath();
	this.shape_396.setTransform(-686.4,25.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#707070").beginStroke().moveTo(-1.4,-0.1).curveTo(-1.4,-1.2,-1.3,-1.2).lineTo(1.4,-1.2).lineTo(-1.4,1.2).closePath();
	this.shape_397.setTransform(-1003.1,37.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#707070").beginStroke().moveTo(-1,-0.9).lineTo(1.1,-0.9).lineTo(-1.1,0.9).closePath();
	this.shape_398.setTransform(-966.7,4.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#707070").beginStroke().moveTo(-0.8,-0.7).lineTo(0.7,-0.7).lineTo(0.8,0.7).lineTo(0.8,0.7).closePath();
	this.shape_399.setTransform(-722.4,-6.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#414142").beginStroke().moveTo(-175.4,26.6).lineTo(-115.2,-26.6).lineTo(115.2,-26.6).lineTo(175.4,26.6).closePath();
	this.shape_400.setTransform(-838.4,19.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#2B2B2B").beginStroke().moveTo(-113.6,4.3).curveTo(-114.6,4.2,-115.4,3.6).curveTo(-116.1,2.8,-116.1,1.8).lineTo(-116.1,-1.8).curveTo(-116.1,-2.8,-115.4,-3.5).curveTo(-114.6,-4.3,-113.6,-4.3).lineTo(113.6,-4.3).curveTo(114.6,-4.3,115.4,-3.5).curveTo(116.1,-2.8,116.1,-1.8).lineTo(116.1,1.8).curveTo(116.1,2.8,115.4,3.6).curveTo(114.6,4.2,113.6,4.3).closePath();
	this.shape_401.setTransform(-838.4,-10.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#2B2B2B").beginStroke().moveTo(-175.4,20.9).lineTo(-175.4,10.7).lineTo(-127.9,-20.9).lineTo(124.2,-20.9).lineTo(175.4,10.7).lineTo(175.4,20.9).closePath();
	this.shape_402.setTransform(-838.4,35.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#414142").beginStroke().moveTo(-142.5,57.1).lineTo(-142.5,-57.2).lineTo(142.5,-57.2).lineTo(142.5,57.1).closePath();
	this.shape_403.setTransform(-838.4,93.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#777777").beginStroke().moveTo(-13.9,16.3).lineTo(-13.9,-3.9).curveTo(-13.9,-9.1,-9.8,-12.7).curveTo(-5.8,-16.3,-0,-16.3).curveTo(5.8,-16.3,9.8,-12.7).curveTo(13.9,-9.1,13.9,-3.9).lineTo(13.9,16.3).closePath();
	this.shape_404.setTransform(1280,133.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_405.setTransform(1309.1,94.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_406.setTransform(1284.5,94.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_407.setTransform(1259.9,94.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-42.1,2.9).lineTo(-42.1,-2.9).lineTo(42.1,-2.9).lineTo(42.1,2.9).closePath();
	this.shape_408.setTransform(1282.3,73.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_409.setTransform(1309.6,56.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_410.setTransform(1291.9,56.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_411.setTransform(1274.2,56.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_412.setTransform(1256.5,56.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_413.setTransform(1309.6,38.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_414.setTransform(1291.9,38.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_415.setTransform(1274.2,38.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_416.setTransform(1256.5,38.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#494A4E").beginStroke().moveTo(-42.1,70.8).lineTo(-42.1,-70.8).lineTo(42.1,-70.8).lineTo(42.1,70.8).closePath();
	this.shape_417.setTransform(1282.3,80.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#777777").beginStroke().moveTo(-3.5,6.9).lineTo(-3.5,-7).lineTo(3.5,-7).lineTo(3.5,6.9).closePath();
	this.shape_418.setTransform(1288,7.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#777777").beginStroke().moveTo(-3.5,6.9).lineTo(-3.5,-7).lineTo(3.5,-7).lineTo(3.5,6.9).closePath();
	this.shape_419.setTransform(1276.7,7.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.1,6.8).lineTo(0,-6.8).lineTo(26.1,6.8).closePath();
	this.shape_420.setTransform(1282.3,-13.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.1,18.2).lineTo(-26.1,-18.2).lineTo(26.1,-18.2).lineTo(26.1,18.2).closePath();
	this.shape_421.setTransform(1282.3,11.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-5,1.4).lineTo(-5,-1.4).lineTo(5,-1.4).lineTo(5,1.4).closePath();
	this.shape_422.setTransform(1166.1,12.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,7.2).lineTo(-3.6,-7.2).lineTo(3.5,-7.2).lineTo(3.5,7.2).closePath();
	this.shape_423.setTransform(1166.1,18.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_424.setTransform(1204.9,120.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_425.setTransform(1204.9,99);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_426.setTransform(1204.9,76.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#777777").beginStroke().moveTo(-7.8,11.5).lineTo(-7.8,-11.5).lineTo(7.7,-11.5).lineTo(7.7,11.5).closePath();
	this.shape_427.setTransform(1204.7,139.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_428.setTransform(1149.1,112.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_429.setTransform(1164.6,112.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_430.setTransform(1149.1,100.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_431.setTransform(1164.6,100.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_432.setTransform(1149.1,88.9);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_433.setTransform(1164.6,88.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_434.setTransform(1149.1,77.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_435.setTransform(1164.6,77.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_436.setTransform(1149.1,65.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_437.setTransform(1164.6,65.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_438.setTransform(1190.8,111.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_439.setTransform(1204.8,111.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_440.setTransform(1218.9,111.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_441.setTransform(1190.8,90.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_442.setTransform(1204.8,90.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_443.setTransform(1218.9,90.4);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_444.setTransform(1190.8,68.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_445.setTransform(1204.8,68.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_446.setTransform(1218.9,68.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.8,49.3).lineTo(-19.8,-49.4).lineTo(19.8,-49.4).lineTo(19.8,49.3).closePath();
	this.shape_447.setTransform(1156.9,101.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-47.9,16.2).lineTo(-36.9,-16.2).lineTo(36.9,-16.2).lineTo(47.9,16.2).closePath();
	this.shape_448.setTransform(1185,36.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.beginFill("#494A4E").beginStroke().moveTo(-48.1,49.6).lineTo(-48.1,-49.6).lineTo(48,-49.6).lineTo(48,49.6).closePath();
	this.shape_449.setTransform(1185,101.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_450.setTransform(1395.3,76.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_451.setTransform(1380.3,76.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_452.setTransform(1365.4,76.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_453.setTransform(1350.5,76.9);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-40.6,4.5).lineTo(-40.6,-4.5).lineTo(40.6,-4.5).lineTo(40.6,4.5).closePath();
	this.shape_454.setTransform(1372.8,37.9);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.beginFill("#777777").beginStroke().moveTo(-6.6,8.2).lineTo(-6.6,-1.7).curveTo(-6.6,-4.4,-4.7,-6.3).curveTo(-2.8,-8.2,-0,-8.2).curveTo(2.8,-8.2,4.6,-6.3).curveTo(6.6,-4.4,6.6,-1.7).lineTo(6.6,8.2).closePath();
	this.shape_455.setTransform(1351,142.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_456.setTransform(1396.2,128.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_457.setTransform(1380.6,128.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_458.setTransform(1365,128.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_459.setTransform(1349.3,128.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_460.setTransform(1396.2,107.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_461.setTransform(1380.6,107.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_462.setTransform(1365,107.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1).lineTo(-5.6,-1).lineTo(5.6,-1).lineTo(5.6,1).closePath();
	this.shape_463.setTransform(1349.3,107.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_464.setTransform(1396.2,122);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_465.setTransform(1380.6,122);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_466.setTransform(1365,122);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_467.setTransform(1349.3,122);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_468.setTransform(1396.2,101);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_469.setTransform(1380.6,101);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_470.setTransform(1365,101);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_471.setTransform(1349.3,101);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-29.1,1.8).lineTo(-29.1,-1.8).lineTo(29.1,-1.8).lineTo(29.1,1.8).closePath();
	this.shape_472.setTransform(1372.8,85.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-29.1,1.8).lineTo(-29.1,-1.8).lineTo(29.1,-1.8).lineTo(29.1,1.8).closePath();
	this.shape_473.setTransform(1372.8,67.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.3).curveTo(-3.7,-4.9,-2.7,-6).curveTo(-1.6,-7.1,0,-7.1).curveTo(1.6,-7.1,2.6,-6).curveTo(3.7,-4.9,3.7,-3.3).lineTo(3.7,7.1).closePath();
	this.shape_474.setTransform(1388,54.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.3).curveTo(-3.8,-4.9,-2.6,-6).curveTo(-1.6,-7.1,-0,-7.1).curveTo(1.6,-7.1,2.6,-6).curveTo(3.7,-4.9,3.8,-3.3).lineTo(3.8,7.1).closePath();
	this.shape_475.setTransform(1377.8,54.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.6).curveTo(-3.8,-5,-2.8,-6.1).curveTo(-1.7,-7.1,-0.3,-7.1).lineTo(0.2,-7.1).curveTo(1.6,-7.1,2.7,-6.1).curveTo(3.7,-5,3.7,-3.6).lineTo(3.7,7.1).closePath();
	this.shape_476.setTransform(1367.7,54.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.3).curveTo(-3.8,-4.9,-2.7,-6).curveTo(-1.5,-7.1,0,-7.1).curveTo(1.6,-7.1,2.7,-6).curveTo(3.8,-4.9,3.8,-3.3).lineTo(3.8,7.1).closePath();
	this.shape_477.setTransform(1357.6,54.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.beginFill("#494A4E").beginStroke().moveTo(-40.6,54.3).lineTo(-40.6,-54.3).lineTo(40.6,-54.3).lineTo(40.6,54.3).closePath();
	this.shape_478.setTransform(1372.8,96.7);

	this.instance_4 = new lib.Path_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(658.3,83.2,1,1,0,0,0,18.4,50.1);
	this.instance_4.alpha = 0.238;

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-25.9,39.3).curveTo(-36.7,28.6,-36.7,13.4).curveTo(-36.7,4,-32.1,-4.2).curveTo(-27.8,-12.2,-20.1,-17.2).curveTo(-22.6,-22.1,-22.6,-27.5).curveTo(-22.6,-36.8,-16,-43.5).curveTo(-9.4,-50.1,0,-50.1).curveTo(9.4,-50.1,16,-43.5).curveTo(22.6,-36.8,22.6,-27.5).curveTo(22.6,-22.1,20.2,-17.2).curveTo(27.8,-12.2,32.2,-4.2).curveTo(36.7,4,36.7,13.4).curveTo(36.7,28.6,25.9,39.3).curveTo(15.2,50.1,0,50.1).curveTo(-15.2,50.1,-25.9,39.3).closePath();
	this.shape_479.setTransform(676.6,83.2);

	this.instance_5 = new lib.Path_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(674.4,127.2,1,1,0,0,0,2.2,23.7);
	this.instance_5.alpha = 0.391;

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-4.4,23.7).lineTo(-4.4,-23.7).lineTo(4.4,-23.7).lineTo(4.4,23.7).closePath();
	this.shape_480.setTransform(676.6,127.2);

	this.instance_6 = new lib.Path_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1063.1,80.5,1,1,0,0,0,19.1,35.4);
	this.instance_6.alpha = 0.191;

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-6.8,33.5).curveTo(-9.8,31.6,-11.5,28.5).curveTo(-14.7,29.6,-18.1,29.6).curveTo(-26.4,29.6,-32.3,23.7).curveTo(-38.2,17.8,-38.2,9.4).curveTo(-38.2,1.9,-33.3,-3.8).curveTo(-28.4,-9.4,-21,-10.5).curveTo(-21.3,-12.2,-21.3,-14.1).curveTo(-21.3,-22.9,-15.1,-29.2).curveTo(-8.9,-35.3,-0.1,-35.4).curveTo(8.7,-35.3,15,-29.2).curveTo(21.2,-22.9,21.2,-14.1).curveTo(21.2,-12.3,20.9,-10.5).curveTo(28.3,-9.5,33.2,-3.9).curveTo(38.2,1.9,38.2,9.4).curveTo(38.2,17.8,32.3,23.7).curveTo(26.4,29.6,18,29.6).curveTo(14.5,29.6,11.3,28.4).curveTo(9.7,31.6,6.7,33.5).curveTo(3.6,35.3,-0.1,35.4).curveTo(-3.7,35.3,-6.8,33.5).closePath();
	this.shape_481.setTransform(1082.2,80.4);

	this.instance_7 = new lib.Path();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1080.3,128.4,1,1,0,0,0,1.4,22.6);
	this.instance_7.alpha = 0.391;

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.8,22.6).lineTo(-2.8,-22.6).lineTo(2.8,-22.6).lineTo(2.8,22.6).closePath();
	this.shape_482.setTransform(1081.7,128.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.beginFill("#777777").beginStroke().moveTo(-12.9,13.5).lineTo(-12.9,-0.6).curveTo(-12.9,-6,-9.1,-9.7).curveTo(-5.4,-13.5,0,-13.5).curveTo(5.3,-13.5,9.1,-9.7).curveTo(12.9,-6,12.9,-0.6).lineTo(12.9,13.5).closePath();
	this.shape_483.setTransform(940.2,137.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_484.setTransform(914.5,4.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_485.setTransform(924,4.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_486.setTransform(933.5,4.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_487.setTransform(942.9,4.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_488.setTransform(952.4,4.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_489.setTransform(961.8,4.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_490.setTransform(914.5,16.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_491.setTransform(924,16.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_492.setTransform(933.5,16.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_493.setTransform(942.9,16.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_494.setTransform(952.4,16.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_495.setTransform(961.8,16.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_496.setTransform(914.5,64.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_497.setTransform(924,64.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_498.setTransform(933.5,64.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_499.setTransform(942.9,64.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_500.setTransform(952.4,64.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_501.setTransform(961.8,64.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.beginFill("#777777").beginStroke().moveTo(-25.7,3.3).lineTo(-25.7,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_502.setTransform(940.2,109.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.beginFill("#777777").beginStroke().moveTo(-25.7,3.3).lineTo(-25.7,-3.2).lineTo(25.8,-3.2).lineTo(25.8,3.3).closePath();
	this.shape_503.setTransform(940.2,97.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.beginFill("#777777").beginStroke().moveTo(-25.7,3.3).lineTo(-25.7,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_504.setTransform(940.2,85.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_505.setTransform(912.4,41.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_506.setTransform(918.8,41.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_507.setTransform(925.3,41.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_508.setTransform(931.7,41.2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_509.setTransform(938.2,41.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.beginFill("#777777").beginStroke().moveTo(-1.4,13.3).lineTo(-1.4,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_510.setTransform(944.6,41.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_511.setTransform(951,41.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_512.setTransform(957.5,41.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_513.setTransform(963.9,41.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.beginFill("#494A4E").beginStroke().moveTo(-38.3,82.2).lineTo(-38.3,-82.2).lineTo(38.3,-82.2).lineTo(38.3,82.2).closePath();
	this.shape_514.setTransform(940.2,68.7);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-27.3,14.1).lineTo(-27.3,-14.1).lineTo(27.3,-14.1).lineTo(27.3,14.1).closePath();
	this.shape_515.setTransform(940.2,-24.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_516.setTransform(864.5,119.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,13).lineTo(-4.5,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_517.setTransform(850.4,119.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_518.setTransform(761.4,119.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_519.setTransform(747.3,119.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_520.setTransform(840.5,99.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_521.setTransform(840.5,88.6);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_522.setTransform(840.5,77.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_523.setTransform(771.3,99.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_524.setTransform(771.3,88.6);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_525.setTransform(771.3,77.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_526.setTransform(826.9,116.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_527.setTransform(816.4,116.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_528.setTransform(805.9,116.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.7,4.7).lineTo(-2.7,-4.7).lineTo(2.7,-4.7).lineTo(2.7,4.7).closePath();
	this.shape_529.setTransform(795.4,116.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_530.setTransform(784.8,116.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.7,4.7).lineTo(-23.7,-4.7).lineTo(23.7,-4.7).lineTo(23.7,4.7).closePath();
	this.shape_531.setTransform(805.9,116.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.beginFill("#777777").beginStroke().moveTo(-19.1,15.1).lineTo(-19.1,-15.1).lineTo(19.1,-15.1).lineTo(19.1,15.1).closePath();
	this.shape_532.setTransform(805.9,132.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.beginFill("#494A4E").beginStroke().moveTo(-86.1,11.3).lineTo(-86.1,-11.3).lineTo(86.1,-11.3).lineTo(86.1,11.3).closePath();
	this.shape_533.setTransform(805.9,47.9);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-72.1,5.7).lineTo(-80,-5.7).lineTo(80,-5.7).lineTo(72,5.7).closePath();
	this.shape_534.setTransform(805.9,62.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.beginFill("#494A4E").beginStroke().moveTo(-72.6,42.3).lineTo(-72.6,-42.3).lineTo(72.5,-42.3).lineTo(72.5,42.3).closePath();
	this.shape_535.setTransform(805.9,108.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.instance_7},{t:this.shape_481},{t:this.instance_6},{t:this.shape_480},{t:this.instance_5},{t:this.shape_479},{t:this.instance_4},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_3},{t:this.shape_106},{t:this.instance_2},{t:this.shape_105},{t:this.instance_1},{t:this.shape_104},{t:this.instance},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1413.4,-150.9,2826.8,301.9);


// stage content:
(lib.autobus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_160 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(160).call(this.frame_160).wait(1));

	// nina4
	this.instance = new lib.nina4();
	this.instance.parent = this;
	this.instance.setTransform(751.6,442.5,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:718,y:441},1).to({x:316.2,y:423.6},24).to({x:296.9,y:343.5},8).to({_off:true},1).wait(96).to({_off:false,x:587.1,y:328.4},0).to({y:412.4},6).to({x:701.1,y:376.4},10).to({_off:true},1).wait(8));

	// nina3
	this.instance_1 = new lib.nina3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(693.2,444.3,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({regX:0.1,regY:0.1,x:653.6,y:442.5},1).to({regX:0,regY:0,x:296.3,y:425.4},18).to({x:296.9,y:345.3},8).to({_off:true},1).wait(95).to({_off:false,x:588,y:330.2},0).to({y:414.2},6).to({x:702,y:378.2},10).to({_off:true},1).wait(15));

	// nina2
	this.instance_2 = new lib.nina2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(646.1,447.5,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({x:596.4,y:444.8},1).to({x:298.7,y:428.6},12).to({x:296.9,y:348.5},8).to({_off:true},1).wait(96).to({_off:false,x:587.5,y:330.7},0).to({y:414.7},6).to({x:701.5,y:378.7},10).to({_off:true},1).wait(20));

	// nino1
	this.instance_3 = new lib.nino1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(598.9,442.7,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({regX:0.1,regY:0.1,x:524.5,y:438},1).to({regX:0,regY:0,x:301,y:423.8},6).to({x:296.9,y:343.6},8).to({_off:true},1).wait(94).to({_off:false,x:588.2,y:330},0).to({y:414},6).to({x:702.2,y:378},10).to({_off:true},1).wait(28));

	// llanta
	this.instance_4 = new lib.llanta();
	this.instance_4.parent = this;
	this.instance_4.setTransform(524,398);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({x:668},28).to({x:524},12).wait(62));

	// llanta
	this.instance_5 = new lib.llanta();
	this.instance_5.parent = this;
	this.instance_5.setTransform(327.2,398);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({x:471.2},28).to({x:327.2},12).wait(62));

	// camion
	this.instance_6 = new lib.camion();
	this.instance_6.parent = this;
	this.instance_6.setTransform(451.3,341.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({x:595.3},28).to({x:451.3},12).wait(62));

	// nina4
	this.instance_7 = new lib.nina4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(289.4,328.4,0.812,0.812);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).to({x:348.3,alpha:1},8).wait(13).to({x:492.2},28).to({x:348.3},12).wait(31).to({x:585.9},6).to({_off:true},1).wait(15).to({_off:false,x:701.1,y:376.4},0).to({x:605.1,alpha:0},8).wait(1));

	// nina3
	this.instance_8 = new lib.nina3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(290.3,330.2,0.812,0.812);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({x:412.1,alpha:1},8).wait(19).to({regX:0.1,regY:0.1,x:556.2,y:330.3},28).to({regX:0,regY:0,x:412.1,y:330.2},12).wait(24).to({x:586.8},6).to({_off:true},1).wait(15).to({_off:false,x:702,y:378.2},0).to({x:606,alpha:0},8).to({_off:true},1).wait(7));

	// nina2
	this.instance_9 = new lib.nina2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(289.8,330.7,0.812,0.812);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({x:479.5,alpha:1},8).wait(24).to({x:623.5},28).to({x:479.5},12).wait(19).to({x:586.3},6).to({_off:true},1).wait(15).to({_off:false,x:701.5,y:378.7},0).to({x:605.5,alpha:0},8).to({_off:true},1).wait(12));

	// nino1
	this.instance_10 = new lib.nino1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(290.5,335.5,0.812,0.812);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21).to({_off:false},0).to({x:538,y:330,alpha:1},8).wait(30).to({regX:0.1,regY:0.1,x:682.1,y:330.1},28).to({regX:0,regY:0,x:538,y:330},12).wait(11).to({x:587},6).to({_off:true},1).wait(15).to({_off:false,x:702.2,y:378},0).to({x:606.2,alpha:0},8).to({_off:true},1).wait(20));

	// door4
	this.instance_11 = new lib.door4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(596.2,344);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({x:740.2},28).to({x:596.2},12).wait(4).to({scaleX:0.1,x:608.2},6).to({_off:true},1).wait(51));

	// door3
	this.instance_12 = new lib.door3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(577.3,344);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({x:721.3},28).to({x:577.3},12).wait(4).to({scaleX:0.1,x:565.3},6).to({_off:true},1).wait(51));

	// door2
	this.instance_13 = new lib.door2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(303.5,344.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({scaleX:0.7,x:307.3,alpha:0.621},1).to({scaleX:0.21,x:313.4,alpha:0},6).wait(33).to({scaleX:1,x:303.5,alpha:1},7).wait(8).to({x:447.5},28).to({x:303.5},12).wait(62));

	// door1
	this.instance_14 = new lib.door1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(285.5,343.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({scaleX:0.76,x:280.9},1).to({scaleX:0.37,x:273.4},6).wait(33).to({scaleX:1,x:285.5},7).wait(8).to({x:429.5},28).to({x:285.5},12).wait(62));

	// back-vcamion
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-23.7,67.4).lineTo(-23.7,-67.4).lineTo(23.7,-67.4).lineTo(23.7,67.4).closePath();
	this.shape.setTransform(586.6,371,0.82,0.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-22.6,36.8).lineTo(-22.6,-36.8).lineTo(22.6,-36.8).lineTo(22.6,5.1).lineTo(10.2,16.9).lineTo(3.2,36.8).closePath();
	this.shape_1.setTransform(293.5,367.8,0.82,0.82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#7C7B7B").beginStroke().moveTo(-22.6,64.3).lineTo(-22.6,-64.2).lineTo(22.6,-64.2).lineTo(22.6,32.6).lineTo(10.2,44.4).lineTo(3.2,64.3).closePath();
	this.shape_2.setTransform(293,345.3,0.82,0.82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#7C7B7B").beginStroke().moveTo(-23.7,67.4).lineTo(-23.7,-67.4).lineTo(23.7,-67.4).lineTo(23.7,67.4).closePath();
	this.shape_3.setTransform(586.6,341.9,0.82,0.82);

	this.instance_15 = new lib.Interpolación1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(440.3,342.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_15}]},59).to({state:[{t:this.instance_15}]},28).to({state:[{t:this.instance_15}]},12).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(59).to({_off:false},0).to({x:584.3},28).to({x:440.3},12).wait(62));

	// fondo
	this.instance_16 = new lib.fondocamion();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-363.4,214.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(59).to({x:1413.4},40).wait(62));

	// piso
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_4.setTransform(-20.1,438.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_5.setTransform(525,438.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_6.setTransform(1070.1,438.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(161));

	// Ambient
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_7.setTransform(525,182.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_8.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1251.8,257.5,2861.9,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;