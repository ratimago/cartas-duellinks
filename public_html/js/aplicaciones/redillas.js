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



(lib.redilaspiso = function(mode,startPosition,loop) {
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


(lib.redilasmanzanines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#D3D3D3").beginStroke().moveTo(-1.3,19.8).lineTo(-1.3,-19.8).lineTo(1.3,-19.8).lineTo(1.3,19.8).closePath();
	this.shape.setTransform(-3.6,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D3D3D3").beginStroke().moveTo(-1.3,19.8).lineTo(-1.3,-19.8).lineTo(1.3,-19.8).lineTo(1.3,19.8).closePath();
	this.shape_1.setTransform(-65.6,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#D3D3D3").beginStroke().moveTo(-34.7,5).lineTo(-34.7,-5).lineTo(34.8,-5).lineTo(34.8,5).closePath();
	this.shape_2.setTransform(-34.7,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#D3D3D3").beginStroke().moveTo(-34.7,5).lineTo(-34.7,-5).lineTo(34.8,-5).lineTo(34.8,5).closePath();
	this.shape_3.setTransform(-34.7,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#D3D3D3").beginStroke().moveTo(-34.7,5).lineTo(-34.7,-5).lineTo(34.8,-5).lineTo(34.8,5).closePath();
	this.shape_4.setTransform(-34.7,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,3).curveTo(-0.6,2.7,-1.6,1.6).curveTo(-2.7,0.6,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3,-3.1,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.5,-2.6,1.6,-1.6).curveTo(2.6,-0.5,3,1.1).curveTo(3.1,1.9,3.1,2.5).curveTo(3,3.1,2.4,3.1).lineTo(2.1,3.1).lineTo(1,3).closePath();
	this.shape_5.setTransform(-35.2,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,12.9).curveTo(-4.4,14.9,-7.9,9.9).curveTo(-11.1,5.5,-11.1,0.2).curveTo(-11.1,-4.2,-7.9,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.6,-11.6).lineTo(2.5,-13.2).curveTo(2.8,-13.7,3.4,-13.4).lineTo(5.3,-12.5).curveTo(5.8,-12.3,5.4,-11.9).curveTo(3.8,-10.7,2.9,-9.7).curveTo(1.7,-8.4,0.6,-6.6).curveTo(5,-8.5,8.1,-6.4).curveTo(11.1,-4.3,11.1,0.2).curveTo(11.1,5.6,8.1,10).curveTo(5.7,13.5,2.6,13.5).curveTo(1.4,13.5,0,12.9).closePath();
	this.shape_6.setTransform(-32.2,40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,2.9).curveTo(-0.6,2.6,-1.6,1.6).curveTo(-2.7,0.5,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3.1,-3,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.6,-2.7,1.6,-1.6).curveTo(2.7,-0.6,3,1).curveTo(3.1,1.8,3.1,2.4).curveTo(3.1,3,2.5,3.1).lineTo(2.2,3.1).lineTo(1.1,2.9).closePath();
	this.shape_7.setTransform(-59.4,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,12.9).curveTo(-4.4,14.9,-8,9.9).curveTo(-11.1,5.5,-11.1,0.2).curveTo(-11.1,-4.2,-7.9,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.5,-11.6).lineTo(2.5,-13.2).curveTo(2.8,-13.6,3.3,-13.4).lineTo(5.3,-12.5).curveTo(5.4,-12.5,5.4,-12.4).curveTo(5.4,-12.4,5.5,-12.4).curveTo(5.5,-12.3,5.5,-12.3).curveTo(5.5,-12.3,5.5,-12.2).curveTo(5.5,-12.2,5.5,-12.1).curveTo(5.5,-12.1,5.5,-12.1).curveTo(5.5,-12,5.5,-12).curveTo(5.4,-12,5.4,-11.9).curveTo(3.7,-10.7,2.9,-9.7).curveTo(1.7,-8.3,0.6,-6.6).curveTo(5,-8.5,8.1,-6.4).curveTo(11.1,-4.3,11.1,0.2).curveTo(11.1,5.6,8.1,10).curveTo(5.6,13.5,2.6,13.5).curveTo(1.3,13.5,-0,12.9).closePath();
	this.shape_8.setTransform(-56.3,38.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,1.6).curveTo(-2.7,0.6,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3.1,-3,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.5,-2.6,1.6,-1.6).curveTo(2.6,-0.5,3,1.1).curveTo(3.1,1.9,3.1,2.5).curveTo(3,3.1,2.5,3.1).lineTo(2,3.1).curveTo(-0.1,3.1,-1.6,1.6).closePath();
	this.shape_9.setTransform(-16.3,27.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,12.9).curveTo(-4.4,14.9,-8,9.9).curveTo(-11.1,5.5,-11.1,0.2).curveTo(-11.1,-4.2,-8,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.6,-11.6).lineTo(2.5,-13.2).curveTo(2.9,-13.7,3.4,-13.4).lineTo(5.3,-12.5).curveTo(5.9,-12.3,5.4,-11.9).curveTo(3.7,-10.7,2.9,-9.7).curveTo(1.9,-8.6,0.7,-6.6).curveTo(5,-8.5,8.1,-6.4).curveTo(11.1,-4.3,11.1,0.2).curveTo(11.1,5.6,8.1,10).curveTo(5.6,13.5,2.6,13.5).curveTo(1.3,13.5,0,12.9).closePath();
	this.shape_10.setTransform(-13.2,39.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,3).curveTo(-0.5,2.6,-1.6,1.6).curveTo(-2.6,0.5,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3,-3,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.6,-2.7,1.6,-1.6).curveTo(2.7,-0.6,3,1).curveTo(3.1,1.9,3.1,2.5).curveTo(3.1,3,2.5,3.1).lineTo(2.2,3.1).lineTo(1.1,3).closePath();
	this.shape_11.setTransform(-29.5,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,12.9).curveTo(-4.4,14.9,-8,10).curveTo(-11.1,5.6,-11.1,0.3).curveTo(-11.1,-4.2,-7.9,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.5,-11.6).lineTo(2.5,-13.2).curveTo(2.8,-13.6,3.3,-13.4).lineTo(5.3,-12.5).curveTo(5.8,-12.2,5.4,-11.9).curveTo(3.7,-10.7,2.9,-9.7).curveTo(1.7,-8.3,0.6,-6.5).curveTo(5,-8.5,8.1,-6.3).curveTo(11.1,-4.3,11.1,0.3).curveTo(11.1,5.7,8.1,10).curveTo(5.6,13.5,2.6,13.5).curveTo(1.3,13.5,-0,12.9).closePath();
	this.shape_12.setTransform(-26.4,35.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,3).curveTo(-0.6,2.6,-1.6,1.6).curveTo(-2.7,0.5,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3.1,-3,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.5,-2.7,1.6,-1.6).curveTo(2.6,-0.6,3,1).curveTo(3.1,1.9,3.1,2.5).curveTo(3,3,2.5,3.1).lineTo(2.2,3.1).lineTo(1.1,3).closePath();
	this.shape_13.setTransform(-48.7,24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,12.9).curveTo(-4.4,14.9,-8,10).curveTo(-11.1,5.6,-11.1,0.3).curveTo(-11.1,-4.2,-7.9,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.5,-11.6).lineTo(2.5,-13.2).curveTo(2.8,-13.6,3.3,-13.4).lineTo(5.3,-12.5).curveTo(5.8,-12.2,5.4,-11.9).curveTo(3.7,-10.7,2.9,-9.7).curveTo(1.8,-8.4,0.6,-6.5).curveTo(5,-8.5,8.1,-6.3).curveTo(11.1,-4.3,11.1,0.3).curveTo(11.1,5.7,8.1,10).curveTo(5.6,13.5,2.6,13.5).curveTo(1.3,13.5,-0,12.9).closePath();
	this.shape_14.setTransform(-45.6,36.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,1.6).curveTo(-2.7,0.6,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3.1,-3,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.5,-2.6,1.6,-1.6).curveTo(2.6,-0.5,3,1.1).curveTo(3.1,1.9,3.1,2.5).curveTo(3,3.1,2.5,3.1).lineTo(2,3.1).curveTo(-0.1,3.1,-1.6,1.6).closePath();
	this.shape_15.setTransform(-14.8,4.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,12.9).curveTo(-4.4,14.9,-7.9,9.9).curveTo(-11.1,5.5,-11.2,0.2).curveTo(-11.1,-4.2,-7.9,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.5,-11.6).lineTo(2.5,-13.2).curveTo(2.8,-13.7,3.3,-13.4).lineTo(5.3,-12.5).curveTo(5.9,-12.3,5.4,-11.9).curveTo(3.8,-10.7,2.9,-9.7).curveTo(1.9,-8.6,0.6,-6.6).curveTo(5,-8.5,8.1,-6.4).curveTo(11.1,-4.3,11.1,0.2).curveTo(11.1,5.6,8.1,10).curveTo(5.6,13.5,2.6,13.5).curveTo(1.3,13.5,-0,12.9).closePath();
	this.shape_16.setTransform(-11.7,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,3).curveTo(-0.6,2.6,-1.6,1.6).curveTo(-2.7,0.5,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3,-3,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.5,-2.7,1.6,-1.6).curveTo(2.6,-0.6,3,1).curveTo(3.1,1.9,3.1,2.5).curveTo(3,3,2.5,3.1).lineTo(2.2,3.1).lineTo(1,3).closePath();
	this.shape_17.setTransform(-37.6,3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,12.9).curveTo(-4.4,14.9,-7.9,10).curveTo(-11.1,5.6,-11.1,0.3).curveTo(-11.1,-4.2,-7.9,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.6,-11.6).lineTo(2.5,-13.2).curveTo(2.8,-13.6,3.4,-13.4).lineTo(5.3,-12.5).curveTo(5.9,-12.2,5.4,-11.9).curveTo(3.8,-10.7,2.9,-9.7).curveTo(1.8,-8.4,0.6,-6.6).curveTo(5,-8.5,8.1,-6.4).curveTo(11.1,-4.3,11.1,0.3).curveTo(11.1,5.7,8.1,10).curveTo(5.7,13.5,2.6,13.5).curveTo(1.4,13.5,0,12.9).closePath();
	this.shape_18.setTransform(-34.6,15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,3).curveTo(-0.6,2.7,-1.6,1.6).curveTo(-2.7,0.6,-3,-1.1).lineTo(-3.1,-2.5).curveTo(-3,-3.1,-2.5,-3.1).lineTo(-1.1,-3).curveTo(0.5,-2.7,1.6,-1.6).curveTo(2.6,-0.6,3,1.1).curveTo(3.1,1.9,3.1,2.5).curveTo(3,3.1,2.4,3.1).lineTo(2.1,3.1).lineTo(1,3).closePath();
	this.shape_19.setTransform(-60,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0,12.9).curveTo(-4.4,14.9,-7.9,10).curveTo(-11.1,5.6,-11.1,0.3).curveTo(-11.1,-4.1,-7.9,-6.3).curveTo(-4.7,-8.4,-0.7,-6.6).curveTo(0.4,-9.4,1.6,-11.6).lineTo(2.5,-13.2).curveTo(2.8,-13.7,3.4,-13.4).lineTo(5.3,-12.5).curveTo(5.8,-12.2,5.4,-11.9).curveTo(3.8,-10.6,2.9,-9.7).curveTo(1.5,-8.1,0.6,-6.5).curveTo(5,-8.4,8.1,-6.3).curveTo(11.1,-4.3,11.1,0.3).curveTo(11.1,5.7,8.1,10).curveTo(5.7,13.5,2.6,13.5).curveTo(1.4,13.5,0,12.9).closePath();
	this.shape_20.setTransform(-57,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,0,69.5,59.8);


(lib.redilashandss = function(mode,startPosition,loop) {
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


(lib.redilasapple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,1.2).curveTo(-2,0.4,-2.2,-0.8).lineTo(-2.3,-1.9).curveTo(-2.3,-2.2,-1.9,-2.3).lineTo(-0.8,-2.2).curveTo(0.4,-2,1.2,-1.2).curveTo(2.5,0,2.3,1.9).curveTo(2.2,2.2,1.8,2.3).lineTo(1.5,2.3).curveTo(-0.1,2.3,-1.2,1.2).closePath();
	this.shape.setTransform(-10.6,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,9.7).curveTo(-3.3,11.1,-6,7.4).curveTo(-8.4,4.1,-8.3,0.2).curveTo(-8.4,-3.2,-6,-4.8).curveTo(-3.5,-6.4,-0.6,-5).curveTo(0.2,-7.1,1.1,-8.7).lineTo(1.9,-9.9).curveTo(2.1,-10.3,2.5,-10.1).lineTo(4,-9.4).curveTo(4.1,-9.3,4.1,-9.3).curveTo(4.2,-9.2,4.2,-9.2).curveTo(4.2,-9.1,4.1,-9.1).curveTo(4.1,-9,4,-9).lineTo(2.1,-7.3).lineTo(0.4,-5).curveTo(3.8,-6.4,6.1,-4.8).curveTo(8.3,-3.3,8.3,0.2).curveTo(8.3,4.2,6.1,7.5).curveTo(4.2,10.1,1.9,10.1).curveTo(1,10.1,-0,9.7).closePath();
	this.shape_1.setTransform(-8.3,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,0,16.7,21.2);


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


(lib.redilas0015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-51.4,20.9).curveTo(-51.4,14,-46.7,9).curveTo(-42.1,3.9,-35.3,3.3).lineTo(-35.4,2.5).curveTo(-35.4,-2.6,-31.8,-6.2).curveTo(-28.2,-9.7,-23.2,-9.7).curveTo(-20.3,-9.7,-17.9,-8.6).curveTo(-15.7,-14.1,-10.8,-17.4).curveTo(-5.7,-20.9,0.4,-20.9).curveTo(6.7,-20.9,11.8,-17.3).curveTo(16.8,-13.7,19,-8).curveTo(21.4,-8.5,24.3,-8.5).curveTo(35.5,-8.5,43.5,-0.5).curveTo(51.4,7.4,51.4,18.7).lineTo(51.3,20.9).closePath();
	this.shape.setTransform(51.4,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.9,41.8);


(lib.redilas0014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-7.6,39.3).curveTo(-18.3,28.6,-18.3,13.4).curveTo(-18.3,4,-13.8,-4.2).curveTo(-9.4,-12.2,-1.8,-17.2).curveTo(-4.3,-22.1,-4.3,-27.5).curveTo(-4.3,-36.8,2.4,-43.5).curveTo(9,-50.1,18.3,-50.1).lineTo(18.3,50.1).curveTo(3.1,50.1,-7.6,39.3).closePath();
	this.shape.setTransform(18.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,100.2);


(lib.redilas0013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(19,35.4).curveTo(15.4,35.4,12.3,33.4).curveTo(9.3,31.6,7.7,28.5).curveTo(4.5,29.6,1,29.6).curveTo(-7.3,29.6,-13.2,23.7).curveTo(-19.1,17.8,-19.1,9.5).curveTo(-19.1,1.9,-14.2,-3.8).curveTo(-9.2,-9.5,-1.9,-10.5).curveTo(-2.2,-12.8,-2.2,-14.1).curveTo(-2.2,-22.9,4,-29.1).curveTo(10.2,-35.4,19,-35.4).lineTo(19.1,-35.4).lineTo(19.1,35.4).closePath();
	this.shape.setTransform(19.1,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,70.7);


(lib.redilas0012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-1.4,22.5).lineTo(-1.4,-22.6).lineTo(1.4,-22.6).lineTo(1.4,22.5).closePath();
	this.shape.setTransform(1.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.8,45.1);


(lib.redilas0011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-51.4,20.9).curveTo(-51.4,14,-46.8,9).curveTo(-42.2,3.9,-35.4,3.3).lineTo(-35.4,2.5).curveTo(-35.4,-2.5,-31.8,-6.1).curveTo(-28.2,-9.8,-23.2,-9.7).curveTo(-20.5,-9.8,-17.9,-8.6).curveTo(-15.7,-14.1,-10.8,-17.4).curveTo(-5.7,-20.9,0.4,-20.9).curveTo(6.7,-20.9,11.8,-17.2).curveTo(16.8,-13.7,19,-7.9).curveTo(21.6,-8.5,24.2,-8.5).curveTo(35.5,-8.5,43.5,-0.5).curveTo(51.4,7.5,51.4,18.7).lineTo(51.3,20.9).closePath();
	this.shape.setTransform(51.4,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.9,41.8);


(lib.redilas0010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-42,17.1).curveTo(-42,11.4,-38.2,7.3).curveTo(-34.4,3.2,-28.8,2.7).lineTo(-28.9,2).curveTo(-28.9,-2.1,-26,-5.1).curveTo(-23,-8,-18.9,-8).curveTo(-16.6,-8,-14.6,-7).curveTo(-12.8,-11.4,-8.8,-14.3).curveTo(-4.7,-17.1,0.3,-17.1).curveTo(5.5,-17,9.7,-14.1).curveTo(13.8,-11.1,15.5,-6.5).curveTo(17.3,-6.9,19.8,-6.9).curveTo(29,-6.9,35.5,-0.4).curveTo(42,6.1,42,15.3).lineTo(41.9,17.1).closePath();
	this.shape.setTransform(42,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,34.1);


(lib.redilas009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-36.4,14.8).curveTo(-36.4,9.9,-33.1,6.3).curveTo(-29.8,2.8,-25,2.4).lineTo(-25.1,1.8).curveTo(-25.1,-1.8,-22.5,-4.3).curveTo(-20,-6.9,-16.4,-6.9).curveTo(-14.5,-6.9,-12.7,-6.1).curveTo(-11.1,-9.9,-7.6,-12.3).curveTo(-4.1,-14.8,0.3,-14.8).curveTo(4.8,-14.8,8.4,-12.2).curveTo(11.9,-9.7,13.4,-5.6).curveTo(15.4,-6,17.2,-6).curveTo(25.2,-6,30.8,-0.4).curveTo(36.4,5.3,36.4,13.2).lineTo(36.4,14.8).closePath();
	this.shape.setTransform(36.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.9,29.6);


(lib.redilas008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-33.4,13.6).lineTo(-33.5,12.1).curveTo(-33.5,4.9,-28.3,-0.4).curveTo(-23.1,-5.5,-15.8,-5.5).curveTo(-14,-5.5,-12.4,-5.2).curveTo(-11,-8.9,-7.7,-11.3).curveTo(-4.4,-13.6,-0.3,-13.6).curveTo(3.7,-13.6,7,-11.3).curveTo(10.2,-9.1,11.6,-5.6).curveTo(13.3,-6.3,15.1,-6.3).curveTo(18.3,-6.3,20.7,-4).curveTo(23,-1.7,23,1.6).lineTo(23,2.2).curveTo(27.4,2.6,30.4,5.8).curveTo(33.5,9.1,33.4,13.6).closePath();
	this.shape.setTransform(33.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,27.2);


(lib.redilas007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.2,23.7).lineTo(-2.2,-23.7).lineTo(2.2,-23.7).lineTo(2.2,23.7).closePath();
	this.shape.setTransform(2.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,47.5);


(lib.redilas006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-42,17.1).curveTo(-42,11.4,-38.2,7.3).curveTo(-34.4,3.2,-28.8,2.7).lineTo(-28.9,2).curveTo(-28.9,-2.1,-26,-5.1).curveTo(-23,-8,-18.9,-8).curveTo(-16.6,-8,-14.6,-7).curveTo(-12.8,-11.4,-8.8,-14.3).curveTo(-4.7,-17.1,0.3,-17.1).curveTo(5.5,-17,9.7,-14.1).curveTo(13.8,-11.1,15.5,-6.5).curveTo(17.3,-6.9,19.8,-6.9).curveTo(29,-6.9,35.5,-0.4).curveTo(42,6.1,42,15.3).lineTo(41.9,17.1).closePath();
	this.shape.setTransform(42,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,34.1);


(lib.redilas005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.2,23.7).lineTo(-2.2,-23.7).lineTo(2.2,-23.7).lineTo(2.2,23.7).closePath();
	this.shape.setTransform(2.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,47.5);


(lib.redilas004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-36.4,14.8).curveTo(-36.4,9.9,-33.1,6.3).curveTo(-29.8,2.8,-25,2.4).lineTo(-25.1,1.8).curveTo(-25.1,-1.8,-22.5,-4.3).curveTo(-20,-6.9,-16.4,-6.9).curveTo(-14.5,-6.9,-12.7,-6.1).curveTo(-11.1,-9.9,-7.6,-12.3).curveTo(-4.1,-14.8,0.3,-14.8).curveTo(4.8,-14.8,8.4,-12.2).curveTo(11.9,-9.7,13.4,-5.6).curveTo(15.4,-6,17.2,-6).curveTo(25.2,-6,30.8,-0.4).curveTo(36.4,5.3,36.4,13.2).lineTo(36.4,14.8).closePath();
	this.shape.setTransform(36.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.9,29.6);


(lib.redilas003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-7.6,39.4).curveTo(-18.3,28.6,-18.3,13.4).curveTo(-18.3,4,-13.8,-4.3).curveTo(-9.4,-12.2,-1.8,-17.2).curveTo(-4.3,-22.1,-4.3,-27.4).curveTo(-4.3,-36.8,2.3,-43.4).curveTo(9,-50.1,18.3,-50.1).lineTo(18.3,50.1).curveTo(3.1,50.1,-7.6,39.4).closePath();
	this.shape.setTransform(18.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,100.2);


(lib.redilas002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(19,35.4).curveTo(15.4,35.4,12.3,33.5).curveTo(9.3,31.6,7.6,28.5).curveTo(4.4,29.6,1,29.6).curveTo(-7.3,29.6,-13.2,23.7).curveTo(-19.1,17.8,-19.1,9.4).curveTo(-19.1,1.9,-14.2,-3.8).curveTo(-9.2,-9.4,-1.9,-10.5).curveTo(-2.2,-12.2,-2.2,-14.1).curveTo(-2.2,-22.9,4,-29.1).curveTo(10.2,-35.4,19,-35.4).lineTo(19.1,-35.3).lineTo(19.1,35.4).closePath();
	this.shape.setTransform(19.1,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,70.8);


(lib.redilas001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-1.4,22.6).lineTo(-1.4,-22.6).lineTo(1.4,-22.6).lineTo(1.4,22.6).closePath();
	this.shape.setTransform(1.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.9,45.2);


(lib.redilasfondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#494A4E").beginStroke().moveTo(-17.8,-53.3).lineTo(-12.2,-45).curveTo(-5.6,-34.8,-0,-25.3).curveTo(17.8,5.2,17.8,17.6).curveTo(17.8,32.4,7.4,42.9).curveTo(-3,53.3,-17.8,53.3).closePath();
	this.shape.setTransform(-264.6,197.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.4,42.9).curveTo(-17.9,32.4,-17.9,17.6).curveTo(-17.9,5.2,0,-25.3).curveTo(8.9,-40.5,17.9,-53.3).lineTo(17.9,53.3).curveTo(3.1,53.3,-7.4,42.9).closePath();
	this.shape_1.setTransform(-300.4,197.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.9,28.8).lineTo(-2.9,-28.8).lineTo(2.9,-28.8).lineTo(2.9,28.8).closePath();
	this.shape_2.setTransform(-282.5,245.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#494A4E").beginStroke().moveTo(-9.5,5).curveTo(-13.5,4.9,-16.2,2.2).curveTo(-19,-0.6,-19,-4.5).lineTo(-19,-4.9).lineTo(19,-4.9).lineTo(19,-4.5).curveTo(19,-0.6,16.3,2.2).curveTo(13.4,4.9,9.6,5).closePath();
	this.shape_3.setTransform(-103.6,212.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#494A4E").beginStroke().moveTo(-19,4.5).curveTo(-18.7,0.7,-16,-1.8).curveTo(-13.3,-4.4,-9.5,-4.4).lineTo(9.6,-4.4).curveTo(13.3,-4.4,16,-1.8).curveTo(18.7,0.7,19,4.5).closePath();
	this.shape_4.setTransform(-103.6,202.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#494A4E").beginStroke().moveTo(-7.1,3.7).curveTo(-10,3.7,-12,1.7).curveTo(-14.1,-0.4,-14.1,-3.3).lineTo(-14.1,-3.7).lineTo(14,-3.7).lineTo(14,-3.3).curveTo(14,-0.4,12,1.7).curveTo(10,3.7,7.1,3.7).closePath();
	this.shape_5.setTransform(-80,155.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#494A4E").beginStroke().moveTo(-14.1,3.2).curveTo(-13.9,0.6,-11.8,-1.4).curveTo(-9.9,-3.2,-7.1,-3.3).lineTo(7.1,-3.3).curveTo(9.8,-3.2,11.9,-1.4).curveTo(13.8,0.6,14,3.2).closePath();
	this.shape_6.setTransform(-80,148.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#494A4E").beginStroke().moveTo(-13.3,7.5).curveTo(-19.2,7.5,-23.5,3.3).curveTo(-27.7,-0.9,-27.7,-6.9).lineTo(-27.7,-7.5).lineTo(27.7,-7.5).lineTo(27.7,-6.9).curveTo(27.7,-0.9,23.5,3.3).curveTo(19.2,7.5,13.3,7.5).closePath();
	this.shape_7.setTransform(-114,186.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#494A4E").beginStroke().moveTo(-27.7,6.9).curveTo(-27.4,1.2,-23.2,-2.8).curveTo(-19.1,-6.9,-13.3,-6.9).lineTo(13.3,-6.9).curveTo(19.1,-6.9,23.3,-2.8).curveTo(27.5,1.2,27.7,6.9).closePath();
	this.shape_8.setTransform(-114,172.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.2,5.2).curveTo(-24.4,5.2,-27.6,2.2).curveTo(-30.6,-0.9,-30.6,-5.2).lineTo(30.7,-5.2).curveTo(30.6,-0.9,27.5,2.2).curveTo(24.5,5.2,20.2,5.2).closePath();
	this.shape_9.setTransform(-66,176.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#494A4E").beginStroke().moveTo(-30.6,5.3).lineTo(-30.6,5.2).curveTo(-30.6,0.9,-27.6,-2.2).curveTo(-24.5,-5.3,-20.2,-5.3).lineTo(20.2,-5.3).curveTo(24.5,-5.3,27.6,-2.2).curveTo(30.6,0.9,30.7,5.2).lineTo(30.7,5.3).closePath();
	this.shape_10.setTransform(-66,166);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#494A4E").beginStroke().moveTo(-34.7,6.6).curveTo(-34.1,1,-30,-2.8).curveTo(-25.8,-6.6,-20.2,-6.6).lineTo(20.2,-6.6).curveTo(25.8,-6.6,30,-2.8).curveTo(34.1,1,34.7,6.6).closePath();
	this.shape_11.setTransform(-49.2,190.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#494A4E").beginStroke().moveTo(-20.2,8).curveTo(-26.2,8,-30.5,3.7).curveTo(-34.7,-0.6,-34.7,-6.6).lineTo(-34.7,-8).lineTo(34.7,-8).lineTo(34.7,-6.6).curveTo(34.7,-0.6,30.5,3.7).curveTo(26.2,8,20.2,8).closePath();
	this.shape_12.setTransform(-49.2,205);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,17.6).lineTo(-2.4,-17.6).lineTo(2.4,-17.6).lineTo(2.4,17.6).closePath();
	this.shape_13.setTransform(-74,262.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#494A4E").beginStroke().moveTo(-29.6,-29.8).lineTo(-25.6,-32.4).lineTo(9.2,22.3).lineTo(25.2,-13.2).lineTo(29.6,-11.3).lineTo(10,32.4).closePath();
	this.shape_14.setTransform(-83.6,217.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#494A4E").beginStroke().moveTo(-6.4,47.5).curveTo(-8.2,46.8,-9.4,46).curveTo(-10.7,45,-12,43.6).curveTo(-13,42.3,-13.8,40.7).curveTo(-14.4,39.7,-14.8,37.4).curveTo(-14.9,36.6,-14.9,35.8).lineTo(-14.7,34.1).curveTo(-14.5,32.5,-13.7,30.9).lineTo(-12.8,29.3).curveTo(-11.7,27.6,-10.6,26.1).curveTo(-9.2,24.3,-7.4,22.5).lineTo(-7.7,21.6).curveTo(-9.6,20.8,-11.9,19.6).curveTo(-13.4,18.7,-15.2,17.4).lineTo(-16.7,16.3).curveTo(-19.3,14.2,-20.4,11).curveTo(-21.4,7.9,-20.9,4.8).curveTo(-20.4,1.6,-18.5,-0.8).curveTo(-16.6,-3.4,-13.6,-4.7).lineTo(-5,-8.2).lineTo(-4.2,-10.9).lineTo(-9.5,-18.6).curveTo(-11.3,-21.2,-11.5,-24.4).curveTo(-11.7,-27.5,-10.5,-30.5).curveTo(-9.2,-33.3,-6.8,-35.3).curveTo(-4.2,-37.3,-1.1,-37.8).lineTo(4.7,-38.6).lineTo(8,-38.7).curveTo(14.5,-48.1,21.1,-48.1).lineTo(21.1,44.5).curveTo(11.5,44.5,3.7,38.7).curveTo(4.8,39.6,6.4,40.6).curveTo(7,40.9,9.2,42.1).lineTo(10,42.4).lineTo(10.3,42.5).lineTo(8.9,43.5).lineTo(5.5,45.4).lineTo(1.9,47).lineTo(0.1,47.7).curveTo(-1.3,48,-3.1,48).curveTo(-4.8,48,-6.4,47.5).closePath();
	this.shape_15.setTransform(-193.2,206.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#494A4E").beginStroke().moveTo(-0.1,47.7).lineTo(-1.9,47).lineTo(-5.5,45.4).lineTo(-8.9,43.5).lineTo(-10.3,42.5).lineTo(-10,42.4).lineTo(-9.2,42.1).lineTo(-7.9,41.5).lineTo(-6.4,40.6).curveTo(-4.9,39.7,-3.5,38.6).curveTo(-11.4,44.5,-21.1,44.5).lineTo(-21.1,-48.1).curveTo(-14.5,-48.1,-8,-38.7).lineTo(-4.7,-38.6).lineTo(1.1,-37.8).curveTo(4.3,-37.3,6.8,-35.3).curveTo(9.2,-33.3,10.5,-30.5).curveTo(11.7,-27.6,11.5,-24.4).curveTo(11.3,-21.3,9.5,-18.6).lineTo(6.2,-13.7).lineTo(4.2,-10.9).lineTo(5,-8.2).lineTo(8.2,-7).lineTo(13.6,-4.7).curveTo(16.6,-3.4,18.5,-0.8).curveTo(20.4,1.6,20.9,4.8).curveTo(21.4,7.9,20.4,11).curveTo(19.3,14.2,16.7,16.3).curveTo(14.3,18.1,11.9,19.6).curveTo(10,20.6,7.7,21.6).lineTo(7.4,22.5).curveTo(9.6,24.7,10.6,26.1).curveTo(11.7,27.6,12.8,29.3).lineTo(13.7,30.9).curveTo(14.5,32.4,14.8,34.1).lineTo(14.9,35.8).curveTo(14.9,36.6,14.8,37.4).curveTo(14.4,39.7,13.8,40.7).curveTo(13,42.3,12,43.6).curveTo(10.7,44.9,9.5,46).curveTo(8.1,46.9,6.4,47.5).curveTo(4.9,48,3.2,48).curveTo(1.3,48,-0.1,47.7).closePath();
	this.shape_16.setTransform(-151,206.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#494A4E").beginStroke().moveTo(-9,5.4).curveTo(-10.8,2.7,-11,-0.5).curveTo(-11.2,-3.6,-10,-6.5).curveTo(-8.7,-9.4,-6.3,-11.4).curveTo(-3.7,-13.4,-0.6,-13.9).lineTo(9.2,-14.9).lineTo(11,-14.8).curveTo(9.8,-13.3,8.3,-10.7).curveTo(5.8,-6.5,3.3,-0.7).curveTo(1.3,4,-0.7,9.9).lineTo(-2.3,14.9).closePath();
	this.shape_17.setTransform(-193.7,182.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#494A4E").beginStroke().moveTo(-0,13.1).curveTo(-1.5,12.3,-3.3,11).lineTo(-4.8,9.8).curveTo(-7.4,7.8,-8.5,4.6).curveTo(-9.5,1.5,-9,-1.6).curveTo(-8.5,-4.8,-6.6,-7.3).curveTo(-4.7,-9.8,-1.7,-11.1).lineTo(3.7,-13.4).curveTo(6.4,-14.5,9.1,-15.5).lineTo(7.7,-10.4).curveTo(6.2,-4.6,5.4,0.7).curveTo(4.9,3.6,4.6,6.5).curveTo(4.4,9.1,4.6,11.1).lineTo(4.7,12.9).lineTo(5.1,15.5).curveTo(2.6,14.6,-0,13.1).closePath();
	this.shape_18.setTransform(-205.1,212.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.1,12.5).curveTo(-5.9,11.8,-7.1,11).curveTo(-8.4,10,-9.7,8.6).curveTo(-10.7,7.3,-11.5,5.7).curveTo(-12,4.7,-12.5,2.4).curveTo(-12.6,1.6,-12.6,0.8).lineTo(-12.4,-0.9).curveTo(-12.2,-2.5,-11.4,-4).lineTo(-10.4,-5.6).curveTo(-9.4,-7.4,-8.3,-8.9).curveTo(-7.1,-10.4,-5.7,-11.9).lineTo(-4.5,-13.1).lineTo(-3.3,-8.9).curveTo(-1.6,-4.3,1.5,-0.6).curveTo(4.6,3.2,8.7,5.6).curveTo(9.3,6,11.5,7.1).lineTo(12.3,7.5).lineTo(12.6,7.6).lineTo(11.2,8.5).lineTo(7.8,10.5).lineTo(4.2,12).lineTo(2.4,12.7).curveTo(1,13.1,-0.8,13.1).curveTo(-2.5,13.1,-4.1,12.5).closePath();
	this.shape_19.setTransform(-195.5,241.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#494A4E").beginStroke().moveTo(0.7,9.9).curveTo(-1.3,4,-3.4,-0.7).curveTo(-5.9,-6.5,-8.4,-10.7).lineTo(-10.2,-13.7).lineTo(-11,-14.8).lineTo(-9.2,-14.9).lineTo(0.5,-13.9).curveTo(3.7,-13.4,6.3,-11.4).curveTo(8.7,-9.4,9.9,-6.5).curveTo(11.2,-3.6,11,-0.5).curveTo(10.7,2.7,9,5.4).lineTo(5.7,10.2).lineTo(2.3,14.9).closePath();
	this.shape_20.setTransform(-150.5,182.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#494A4E").beginStroke().moveTo(-4.7,12.9).lineTo(-4.6,11.1).curveTo(-4.4,9.5,-4.7,6.5).curveTo(-4.9,3.9,-5.4,0.7).curveTo(-6.2,-4.2,-7.7,-10.4).lineTo(-9.1,-15.5).lineTo(-3.7,-13.4).lineTo(1.7,-11.1).curveTo(4.6,-9.8,6.6,-7.3).curveTo(8.4,-4.8,8.9,-1.6).curveTo(9.4,1.5,8.4,4.6).curveTo(7.3,7.8,4.8,9.8).curveTo(2.4,11.7,-0,13.1).curveTo(-2.6,14.6,-5.1,15.5).closePath();
	this.shape_21.setTransform(-139.1,212.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#494A4E").beginStroke().moveTo(-2.4,12.7).lineTo(-4.2,12).lineTo(-7.8,10.5).lineTo(-11.2,8.5).lineTo(-12.6,7.6).lineTo(-12.3,7.5).lineTo(-11.5,7.1).lineTo(-10.2,6.5).lineTo(-8.7,5.6).curveTo(-4.5,3.1,-1.4,-0.6).curveTo(1.6,-4.3,3.3,-8.9).lineTo(3.9,-10.6).lineTo(4.5,-13.1).lineTo(5.7,-11.9).curveTo(7.2,-10.4,8.2,-8.9).curveTo(9.4,-7.4,10.5,-5.6).lineTo(11.4,-4).curveTo(12.2,-2.5,12.4,-0.9).lineTo(12.6,0.8).curveTo(12.6,1.6,12.4,2.4).curveTo(12.1,4.7,11.5,5.7).curveTo(10.7,7.3,9.7,8.6).curveTo(8.4,10,7.1,11).curveTo(5.8,11.9,4.1,12.5).curveTo(2.5,13.1,0.8,13.1).curveTo(-1,13.1,-2.4,12.7).closePath();
	this.shape_22.setTransform(-148.7,241.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#494A4E").beginStroke().moveTo(-21,37.3).curveTo(-29.7,28.3,-29.7,15.7).curveTo(-29.7,9.1,-27.3,-1.2).curveTo(-24.9,-11.9,-21,-21.7).curveTo(-11.1,-46.3,0,-46.3).curveTo(11.1,-46.3,21,-21.7).curveTo(24.9,-11.9,27.4,-1.2).curveTo(29.7,9.1,29.7,15.7).curveTo(29.7,28.3,21,37.3).curveTo(12.3,46.3,0,46.3).curveTo(-12.3,46.3,-21,37.3).closePath();
	this.shape_23.setTransform(-172.1,204.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#494A4E").beginStroke().moveTo(-3,28.8).lineTo(-3,-28.8).lineTo(3,-28.8).lineTo(3,28.8).closePath();
	this.shape_24.setTransform(-172.1,252.7);

	this.instance = new lib.redilas0015();
	this.instance.parent = this;
	this.instance.setTransform(-780.3,62.8,1,1,0,0,0,51.4,20.9);
	this.instance.alpha = 0.559;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-45.7,4.1).lineTo(-45.7,-4.1).lineTo(45.7,-4.1).lineTo(45.7,4.1).closePath();
	this.shape_25.setTransform(-937.5,138.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#777777").beginStroke().moveTo(-13.9,16.3).lineTo(-13.9,-3.9).curveTo(-13.9,-9.1,-9.8,-12.7).curveTo(-5.7,-16.3,0,-16.3).curveTo(5.8,-16.3,9.9,-12.7).curveTo(13.9,-9.1,13.9,-3.9).lineTo(13.9,16.3).closePath();
	this.shape_26.setTransform(-939.7,264.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.9,-11.9).lineTo(8.9,11.9).closePath();
	this.shape_27.setTransform(-910.7,225.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.9,-11.9).lineTo(8.9,11.9).closePath();
	this.shape_28.setTransform(-935.3,225.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_29.setTransform(-959.9,225.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-42.1,2.9).lineTo(-42.1,-2.9).lineTo(42.1,-2.9).lineTo(42.1,2.9).closePath();
	this.shape_30.setTransform(-937.4,204.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_31.setTransform(-910.1,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_32.setTransform(-927.8,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_33.setTransform(-945.5,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_34.setTransform(-963.2,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_35.setTransform(-910.1,161.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_36.setTransform(-927.8,161.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_37.setTransform(-945.5,161.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_38.setTransform(-963.2,161.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#494A4E").beginStroke().moveTo(-42.1,70.8).lineTo(-42.1,-70.8).lineTo(42.1,-70.8).lineTo(42.1,70.8).closePath();
	this.shape_39.setTransform(-937.4,210.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_40.setTransform(-809.3,213.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_41.setTransform(-822.9,213.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_42.setTransform(-836.4,213.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_43.setTransform(-849.9,213.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.8,5.4).lineTo(-23.8,-5.3).lineTo(23.8,-5.3).lineTo(23.8,5.4).closePath();
	this.shape_44.setTransform(-829.7,172.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-36.8,4.1).lineTo(-36.8,-4.1).lineTo(36.8,-4.1).lineTo(36.8,4.1).closePath();
	this.shape_45.setTransform(-829.7,178.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#777777").beginStroke().moveTo(-6,7.4).lineTo(-6,-1.5).curveTo(-6,-4,-4.2,-5.7).curveTo(-2.5,-7.4,-0,-7.5).curveTo(2.5,-7.4,4.2,-5.7).curveTo(6,-4,6,-1.5).lineTo(6,7.4).closePath();
	this.shape_46.setTransform(-849.9,272.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_47.setTransform(-808.5,259.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_48.setTransform(-822.6,259.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_49.setTransform(-836.8,259.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_50.setTransform(-851,259.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_51.setTransform(-808.5,240.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_52.setTransform(-822.6,240.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_53.setTransform(-836.8,240.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_54.setTransform(-851,240.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_55.setTransform(-808.5,253.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_56.setTransform(-822.6,253.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_57.setTransform(-836.8,253.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_58.setTransform(-851,253.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_59.setTransform(-808.5,234.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_60.setTransform(-822.6,234.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_61.setTransform(-836.8,234.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_62.setTransform(-851,234.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.4,1.5).lineTo(-26.4,-1.5).lineTo(26.4,-1.5).lineTo(26.4,1.5).closePath();
	this.shape_63.setTransform(-829.7,220.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.4,1.4).lineTo(-26.4,-1.5).lineTo(26.4,-1.5).lineTo(26.4,1.4).closePath();
	this.shape_64.setTransform(-829.7,206.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.5).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.8,-5.8).curveTo(-2.1,-6.4,-1.2,-6.5).lineTo(1.3,-6.5).curveTo(2.1,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.5).closePath();
	this.shape_65.setTransform(-816,193.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.5).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.8,-5.8).curveTo(-2.1,-6.4,-1.3,-6.5).lineTo(1.3,-6.5).curveTo(2.1,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.5).closePath();
	this.shape_66.setTransform(-825.1,193.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.5).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.8,-5.8).curveTo(-2.2,-6.4,-1.2,-6.5).lineTo(1.3,-6.5).curveTo(2.2,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.5).closePath();
	this.shape_67.setTransform(-834.3,193.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.5).lineTo(-3.4,-4.3).curveTo(-3.4,-5.2,-2.8,-5.8).curveTo(-2.1,-6.4,-1.3,-6.5).lineTo(1.3,-6.5).curveTo(2.1,-6.4,2.8,-5.8).curveTo(3.4,-5.2,3.4,-4.3).lineTo(3.4,6.5).closePath();
	this.shape_68.setTransform(-843.5,193.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#494A4E").beginStroke().moveTo(-36.8,49.2).lineTo(-36.8,-49.2).lineTo(36.8,-49.2).lineTo(36.8,49.2).closePath();
	this.shape_69.setTransform(-829.7,232.1);

	this.instance_1 = new lib.redilas0014();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-755.1,215.1,1,1,0,0,0,18.3,50.1);
	this.instance_1.alpha = 0.238;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-25.9,39.3).curveTo(-36.7,28.6,-36.7,13.4).curveTo(-36.7,4,-32.2,-4.2).curveTo(-27.8,-12.2,-20.2,-17.2).curveTo(-22.6,-22.1,-22.6,-27.5).curveTo(-22.6,-36.8,-16,-43.5).curveTo(-9.4,-50.1,-0,-50.1).curveTo(9.4,-50.1,16,-43.5).curveTo(22.6,-36.8,22.6,-27.5).curveTo(22.6,-22,20.1,-17.2).curveTo(27.7,-12.2,32.1,-4.2).curveTo(36.7,4,36.7,13.4).curveTo(36.7,28.6,25.9,39.3).curveTo(15.2,50.1,-0,50.1).curveTo(-15.2,50.1,-25.9,39.3).closePath();
	this.shape_70.setTransform(-736.8,215);

	this.instance_2 = new lib.redilas007();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-739,259.1,1,1,0,0,0,2.1,23.7);
	this.instance_2.alpha = 0.391;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-4.4,23.7).lineTo(-4.4,-23.7).lineTo(4.4,-23.7).lineTo(4.4,23.7).closePath();
	this.shape_71.setTransform(-736.8,259.1);

	this.instance_3 = new lib.redilas0013();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-350.3,211,1,1,0,0,0,19.1,35.4);
	this.instance_3.alpha = 0.191;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-6.8,33.4).curveTo(-9.8,31.6,-11.4,28.4).curveTo(-14.6,29.6,-18.1,29.6).curveTo(-26.4,29.6,-32.3,23.7).curveTo(-38.2,17.8,-38.2,9.4).curveTo(-38.2,1.9,-33.3,-3.8).curveTo(-28.4,-9.5,-21,-10.5).curveTo(-21.3,-12.8,-21.3,-14.1).curveTo(-21.3,-22.9,-15.1,-29.2).curveTo(-8.9,-35.3,-0.1,-35.3).curveTo(8.7,-35.3,15,-29.2).curveTo(21.2,-22.9,21.2,-14.1).curveTo(21.2,-12.9,20.9,-10.5).curveTo(28.3,-9.5,33.2,-3.8).curveTo(38.2,1.9,38.2,9.4).curveTo(38.2,17.8,32.3,23.7).curveTo(26.4,29.6,18.1,29.6).curveTo(14.6,29.6,11.4,28.4).curveTo(9.7,31.6,6.7,33.4).curveTo(3.6,35.3,-0.1,35.3).curveTo(-3.7,35.3,-6.8,33.4).closePath();
	this.shape_72.setTransform(-331.2,211);

	this.instance_4 = new lib.redilas0012();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-333,259,1,1,0,0,0,1.4,22.6);
	this.instance_4.alpha = 0.391;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.8,22.6).lineTo(-2.8,-22.5).lineTo(2.8,-22.5).lineTo(2.8,22.6).closePath();
	this.shape_73.setTransform(-331.6,258.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#777777").beginStroke().moveTo(-12.9,13.5).lineTo(-12.9,-0.6).curveTo(-12.9,-6,-9.1,-9.8).curveTo(-5.3,-13.5,0,-13.5).curveTo(5.4,-13.5,9.1,-9.8).curveTo(12.9,-6,12.9,-0.6).lineTo(12.9,13.5).closePath();
	this.shape_74.setTransform(-473.2,267.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,4).closePath();
	this.shape_75.setTransform(-498.8,133.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,4).closePath();
	this.shape_76.setTransform(-489.4,133.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,4).closePath();
	this.shape_77.setTransform(-479.9,133.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,4).closePath();
	this.shape_78.setTransform(-470.5,133.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,4).closePath();
	this.shape_79.setTransform(-461,133.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,4).closePath();
	this.shape_80.setTransform(-451.5,133.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_81.setTransform(-498.8,146.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_82.setTransform(-489.4,146.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_83.setTransform(-479.9,146.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_84.setTransform(-470.5,146.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_85.setTransform(-461,146.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_86.setTransform(-451.5,146.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,3.9).closePath();
	this.shape_87.setTransform(-498.8,194.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,3.9).closePath();
	this.shape_88.setTransform(-489.4,194.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,3.9).closePath();
	this.shape_89.setTransform(-479.9,194.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,3.9).closePath();
	this.shape_90.setTransform(-470.5,194.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,3.9).closePath();
	this.shape_91.setTransform(-461,194.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-3.9).lineTo(3.6,-3.9).lineTo(3.6,3.9).closePath();
	this.shape_92.setTransform(-451.5,194.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#777777").beginStroke().moveTo(-25.8,3.2).lineTo(-25.8,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.2).closePath();
	this.shape_93.setTransform(-473.2,239.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#777777").beginStroke().moveTo(-25.8,3.3).lineTo(-25.8,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_94.setTransform(-473.2,227.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#777777").beginStroke().moveTo(-25.8,3.3).lineTo(-25.8,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_95.setTransform(-473.2,215.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_96.setTransform(-501,171);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_97.setTransform(-494.5,171);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_98.setTransform(-488.1,171);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#777777").beginStroke().moveTo(-1.4,13.3).lineTo(-1.4,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_99.setTransform(-481.6,171);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_100.setTransform(-475.2,171);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_101.setTransform(-468.8,171);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_102.setTransform(-462.3,171);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_103.setTransform(-455.9,171);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_104.setTransform(-449.4,171);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#494A4E").beginStroke().moveTo(-38.4,82.2).lineTo(-38.4,-82.2).lineTo(38.3,-82.2).lineTo(38.3,82.2).closePath();
	this.shape_105.setTransform(-473.1,198.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-27.2,14.1).lineTo(-27.2,-14.1).lineTo(27.2,-14.1).lineTo(27.2,14.1).closePath();
	this.shape_106.setTransform(-473.2,105.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,13).lineTo(-4.5,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_107.setTransform(-548.9,250.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,13).lineTo(-4.5,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_108.setTransform(-563,250.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_109.setTransform(-652,250.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.5,-13).lineTo(4.5,13).closePath();
	this.shape_110.setTransform(-666.1,250.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_111.setTransform(-572.9,229.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_112.setTransform(-572.9,219);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_113.setTransform(-572.9,208.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_114.setTransform(-642.1,229.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_115.setTransform(-642.1,219);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_116.setTransform(-642.1,208.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_117.setTransform(-586.5,246.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_118.setTransform(-597,246.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.7,4.7).lineTo(-2.7,-4.7).lineTo(2.7,-4.7).lineTo(2.7,4.7).closePath();
	this.shape_119.setTransform(-607.5,246.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_120.setTransform(-618,246.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_121.setTransform(-628.5,246.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.6,4.7).lineTo(-23.6,-4.7).lineTo(23.6,-4.7).lineTo(23.6,4.7).closePath();
	this.shape_122.setTransform(-607.5,246.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#777777").beginStroke().moveTo(-19,15.1).lineTo(-19,-15.1).lineTo(19,-15.1).lineTo(19,15.1).closePath();
	this.shape_123.setTransform(-607.5,263.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#494A4E").beginStroke().moveTo(-86.1,11.3).lineTo(-86.1,-11.3).lineTo(86.1,-11.3).lineTo(86.1,11.3).closePath();
	this.shape_124.setTransform(-607.5,178.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-72,5.7).lineTo(-80,-5.7).lineTo(80,-5.7).lineTo(72,5.7).closePath();
	this.shape_125.setTransform(-607.5,193.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#494A4E").beginStroke().moveTo(-72.6,42.3).lineTo(-72.6,-42.3).lineTo(72.6,-42.3).lineTo(72.6,42.3).closePath();
	this.shape_126.setTransform(-607.5,238.9);

	this.instance_5 = new lib.redilas004();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-403.6,14.8,1,1,0,0,0,36.4,14.8);
	this.instance_5.alpha = 0.559;

	this.instance_6 = new lib.redilas006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1184.5,37,1,1,0,0,0,42,17.1);
	this.instance_6.alpha = 0.559;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-45.6,4.1).lineTo(-45.6,-4.1).lineTo(45.6,-4.1).lineTo(45.6,4.1).closePath();
	this.shape_127.setTransform(-2003.3,138.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#777777").beginStroke().moveTo(-13.9,16.3).lineTo(-13.9,-3.9).curveTo(-13.9,-9.1,-9.8,-12.7).curveTo(-5.8,-16.3,-0,-16.3).curveTo(5.8,-16.3,9.8,-12.7).curveTo(13.9,-9.1,13.9,-3.9).lineTo(13.9,16.3).closePath();
	this.shape_128.setTransform(-2005.6,264);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_129.setTransform(-1976.5,225.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#777777").beginStroke().moveTo(-8.9,11.9).lineTo(-8.9,-11.9).lineTo(8.9,-11.9).lineTo(8.9,11.9).closePath();
	this.shape_130.setTransform(-2001.1,225.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_131.setTransform(-2025.7,225.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-42.1,2.9).lineTo(-42.1,-2.9).lineTo(42.1,-2.9).lineTo(42.1,2.9).closePath();
	this.shape_132.setTransform(-2003.3,203.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_133.setTransform(-1976,179.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_134.setTransform(-1993.7,179.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_135.setTransform(-2011.4,179.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_136.setTransform(-2029.1,179.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_137.setTransform(-1976,161.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_138.setTransform(-1993.7,161.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_139.setTransform(-2011.4,161.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_140.setTransform(-2029.1,161.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#494A4E").beginStroke().moveTo(-42.1,70.8).lineTo(-42.1,-70.8).lineTo(42.1,-70.8).lineTo(42.1,70.8).closePath();
	this.shape_141.setTransform(-2003.3,210.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_142.setTransform(-1875.2,212.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_143.setTransform(-1888.7,212.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_144.setTransform(-1902.3,212.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,3).lineTo(-5.5,-3).lineTo(5.5,-3).lineTo(5.5,3).closePath();
	this.shape_145.setTransform(-1915.8,212.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.8,5.3).lineTo(-23.8,-5.4).lineTo(23.8,-5.4).lineTo(23.8,5.3).closePath();
	this.shape_146.setTransform(-1895.6,171.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-36.8,4.1).lineTo(-36.8,-4.1).lineTo(36.8,-4.1).lineTo(36.8,4.1).closePath();
	this.shape_147.setTransform(-1895.6,178.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#777777").beginStroke().moveTo(-6,7.4).lineTo(-6,-1.5).curveTo(-6,-3.9,-4.2,-5.7).curveTo(-2.4,-7.4,0,-7.5).curveTo(2.5,-7.4,4.2,-5.7).curveTo(6,-4,6,-1.5).lineTo(6,7.4).closePath();
	this.shape_148.setTransform(-1915.8,271.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_149.setTransform(-1874.4,259);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_150.setTransform(-1888.5,259);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_151.setTransform(-1902.7,259);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,0.9).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,0.9).closePath();
	this.shape_152.setTransform(-1916.8,259);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_153.setTransform(-1874.4,239.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_154.setTransform(-1888.5,239.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_155.setTransform(-1902.7,239.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,1).lineTo(-5.1,-1).lineTo(5.1,-1).lineTo(5.1,1).closePath();
	this.shape_156.setTransform(-1916.8,239.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_157.setTransform(-1874.4,252.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_158.setTransform(-1888.5,252.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_159.setTransform(-1902.7,252.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_160.setTransform(-1916.8,252.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_161.setTransform(-1874.4,233.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_162.setTransform(-1888.5,233.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_163.setTransform(-1902.7,233.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#777777").beginStroke().moveTo(-5.1,7.2).lineTo(-5.1,-7.2).lineTo(5.1,-7.2).lineTo(5.1,7.2).closePath();
	this.shape_164.setTransform(-1916.8,233.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.4,1.4).lineTo(-26.4,-1.4).lineTo(26.4,-1.4).lineTo(26.4,1.4).closePath();
	this.shape_165.setTransform(-1895.6,219.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.4,1.4).lineTo(-26.4,-1.4).lineTo(26.4,-1.4).lineTo(26.4,1.4).closePath();
	this.shape_166.setTransform(-1895.6,205.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.4).curveTo(-3.4,-5.2,-2.8,-5.9).curveTo(-2.2,-6.4,-1.3,-6.4).lineTo(1.3,-6.4).curveTo(2.2,-6.4,2.8,-5.9).curveTo(3.4,-5.2,3.4,-4.4).lineTo(3.4,6.4).closePath();
	this.shape_167.setTransform(-1881.8,193.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.4).curveTo(-3.4,-5.2,-2.8,-5.9).curveTo(-2.2,-6.4,-1.3,-6.4).lineTo(1.3,-6.4).curveTo(2.2,-6.4,2.8,-5.9).curveTo(3.4,-5.2,3.4,-4.4).lineTo(3.4,6.4).closePath();
	this.shape_168.setTransform(-1891,193.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.4).curveTo(-3.4,-5.2,-2.8,-5.9).curveTo(-2.2,-6.4,-1.3,-6.4).lineTo(1.3,-6.4).curveTo(2.2,-6.4,2.8,-5.9).curveTo(3.4,-5.2,3.4,-4.4).lineTo(3.4,6.4).closePath();
	this.shape_169.setTransform(-1900.2,193.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#777777").beginStroke().moveTo(-3.4,6.4).lineTo(-3.4,-4.4).curveTo(-3.4,-5.2,-2.8,-5.9).curveTo(-2.2,-6.4,-1.3,-6.4).lineTo(1.3,-6.4).curveTo(2.2,-6.4,2.8,-5.9).curveTo(3.4,-5.2,3.4,-4.4).lineTo(3.4,6.4).closePath();
	this.shape_170.setTransform(-1909.4,193.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#494A4E").beginStroke().moveTo(-36.8,49.2).lineTo(-36.8,-49.2).lineTo(36.8,-49.2).lineTo(36.8,49.2).closePath();
	this.shape_171.setTransform(-1895.6,231.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#777777").beginStroke().moveTo(-13.9,16.3).lineTo(-13.9,-3.9).curveTo(-13.9,-9.1,-9.8,-12.7).curveTo(-5.7,-16.3,0,-16.3).curveTo(5.8,-16.3,9.9,-12.7).curveTo(13.9,-9.1,13.9,-3.9).lineTo(13.9,16.3).closePath();
	this.shape_172.setTransform(-1199.2,263);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.9,-11.9).lineTo(8.9,11.9).closePath();
	this.shape_173.setTransform(-1170.2,224.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_174.setTransform(-1194.8,224.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#777777").beginStroke().moveTo(-8.8,11.9).lineTo(-8.8,-11.9).lineTo(8.8,-11.9).lineTo(8.8,11.9).closePath();
	this.shape_175.setTransform(-1219.3,224.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-42.1,2.9).lineTo(-42.1,-2.9).lineTo(42.1,-2.9).lineTo(42.1,2.9).closePath();
	this.shape_176.setTransform(-1196.9,202.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_177.setTransform(-1169.6,185.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_178.setTransform(-1187.3,185.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_179.setTransform(-1205,185.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_180.setTransform(-1222.7,185.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_181.setTransform(-1169.6,167.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_182.setTransform(-1187.3,167.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_183.setTransform(-1205,167.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#777777").beginStroke().moveTo(-5.5,5.5).lineTo(-5.5,-5.5).lineTo(5.5,-5.5).lineTo(5.5,5.5).closePath();
	this.shape_184.setTransform(-1222.7,167.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#494A4E").beginStroke().moveTo(-42.1,70.8).lineTo(-42.1,-70.8).lineTo(42.1,-70.8).lineTo(42.1,70.8).closePath();
	this.shape_185.setTransform(-1196.9,209.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#777777").beginStroke().moveTo(-3.5,7).lineTo(-3.5,-7).lineTo(3.5,-7).lineTo(3.5,7).closePath();
	this.shape_186.setTransform(-1191.2,136.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#777777").beginStroke().moveTo(-3.5,7).lineTo(-3.5,-7).lineTo(3.5,-7).lineTo(3.5,7).closePath();
	this.shape_187.setTransform(-1202.5,136.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-26.1,6.8).lineTo(-0,-6.8).lineTo(26.1,6.8).closePath();
	this.shape_188.setTransform(-1196.9,115.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#494A4E").beginStroke().moveTo(-26.1,18.2).lineTo(-26.1,-18.2).lineTo(26.1,-18.2).lineTo(26.1,18.2).closePath();
	this.shape_189.setTransform(-1196.9,140.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-5,1.4).lineTo(-5,-1.4).lineTo(5,-1.4).lineTo(5,1.4).closePath();
	this.shape_190.setTransform(-1313.1,141.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#494A4E").beginStroke().moveTo(-3.6,7.2).lineTo(-3.6,-7.2).lineTo(3.6,-7.2).lineTo(3.6,7.2).closePath();
	this.shape_191.setTransform(-1313.1,147.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_192.setTransform(-1274.4,249.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_193.setTransform(-1274.4,228.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23,1.8).lineTo(-23,-1.8).lineTo(22.9,-1.8).lineTo(22.9,1.8).closePath();
	this.shape_194.setTransform(-1274.4,205.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#777777").beginStroke().moveTo(-7.7,11.5).lineTo(-7.7,-11.5).lineTo(7.7,-11.5).lineTo(7.7,11.5).closePath();
	this.shape_195.setTransform(-1274.6,268.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_196.setTransform(-1330.1,241.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_197.setTransform(-1314.6,241.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_198.setTransform(-1330.1,229.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_199.setTransform(-1314.6,229.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.2).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.2).closePath();
	this.shape_200.setTransform(-1330.1,218.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.2).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.2).closePath();
	this.shape_201.setTransform(-1314.6,218.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_202.setTransform(-1330.1,206.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_203.setTransform(-1314.6,206.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_204.setTransform(-1330.1,194.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#777777").beginStroke().moveTo(-4.9,4.1).lineTo(-4.9,-4.1).lineTo(4.9,-4.1).lineTo(4.9,4.1).closePath();
	this.shape_205.setTransform(-1314.6,194.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_206.setTransform(-1288.4,240.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_207.setTransform(-1274.4,240.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_208.setTransform(-1260.3,240.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_209.setTransform(-1288.4,219.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_210.setTransform(-1274.4,219.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_211.setTransform(-1260.3,219.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_212.setTransform(-1288.4,197.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,7.6).lineTo(-4.4,-7.6).lineTo(4.5,-7.6).lineTo(4.5,7.6).closePath();
	this.shape_213.setTransform(-1274.4,197.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#777777").beginStroke().moveTo(-4.5,7.6).lineTo(-4.5,-7.6).lineTo(4.4,-7.6).lineTo(4.4,7.6).closePath();
	this.shape_214.setTransform(-1260.3,197.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#494A4E").beginStroke().moveTo(-19.8,49.3).lineTo(-19.8,-49.3).lineTo(19.8,-49.3).lineTo(19.8,49.3).closePath();
	this.shape_215.setTransform(-1322.3,230.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-47.9,16.2).lineTo(-36.9,-16.2).lineTo(36.9,-16.2).lineTo(47.9,16.2).closePath();
	this.shape_216.setTransform(-1294.2,165.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#494A4E").beginStroke().moveTo(-48.1,49.6).lineTo(-48.1,-49.6).lineTo(48.1,-49.6).lineTo(48.1,49.6).closePath();
	this.shape_217.setTransform(-1294.3,230.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_218.setTransform(-1084,206.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_219.setTransform(-1098.9,206.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_220.setTransform(-1113.8,206.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#777777").beginStroke().moveTo(-6.1,4.6).lineTo(-6.1,-4.6).lineTo(6.1,-4.6).lineTo(6.1,4.6).closePath();
	this.shape_221.setTransform(-1128.7,206.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-40.6,4.5).lineTo(-40.6,-4.5).lineTo(40.6,-4.5).lineTo(40.6,4.5).closePath();
	this.shape_222.setTransform(-1106.5,167.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#777777").beginStroke().moveTo(-6.6,8.2).lineTo(-6.6,-1.6).curveTo(-6.6,-4.4,-4.6,-6.3).curveTo(-2.8,-8.2,-0,-8.2).curveTo(2.8,-8.2,4.7,-6.3).curveTo(6.6,-4.4,6.6,-1.6).lineTo(6.6,8.2).closePath();
	this.shape_223.setTransform(-1128.2,271.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_224.setTransform(-1083,258.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_225.setTransform(-1098.7,258.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_226.setTransform(-1114.3,258.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#777777").beginStroke().moveTo(-5.7,1.1).lineTo(-5.7,-1.1).lineTo(5.7,-1.1).lineTo(5.7,1.1).closePath();
	this.shape_227.setTransform(-1129.9,258.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_228.setTransform(-1083,237.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_229.setTransform(-1098.7,237.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,1.1).lineTo(-5.6,-1.1).lineTo(5.6,-1.1).lineTo(5.6,1.1).closePath();
	this.shape_230.setTransform(-1114.3,237.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#777777").beginStroke().moveTo(-5.7,1.1).lineTo(-5.7,-1.1).lineTo(5.7,-1.1).lineTo(5.7,1.1).closePath();
	this.shape_231.setTransform(-1129.9,237.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_232.setTransform(-1083,251.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_233.setTransform(-1098.7,251.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_234.setTransform(-1114.3,251.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#777777").beginStroke().moveTo(-5.7,7.9).lineTo(-5.7,-7.9).lineTo(5.7,-7.9).lineTo(5.7,7.9).closePath();
	this.shape_235.setTransform(-1129.9,251.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_236.setTransform(-1083,230.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_237.setTransform(-1098.7,230.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#777777").beginStroke().moveTo(-5.6,7.9).lineTo(-5.6,-7.9).lineTo(5.6,-7.9).lineTo(5.6,7.9).closePath();
	this.shape_238.setTransform(-1114.3,230.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#777777").beginStroke().moveTo(-5.7,7.9).lineTo(-5.7,-7.9).lineTo(5.7,-7.9).lineTo(5.7,7.9).closePath();
	this.shape_239.setTransform(-1129.9,230.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-29.1,1.8).lineTo(-29.1,-1.8).lineTo(29.1,-1.8).lineTo(29.1,1.8).closePath();
	this.shape_240.setTransform(-1106.5,215.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-29.1,1.8).lineTo(-29.1,-1.8).lineTo(29.1,-1.8).lineTo(29.1,1.8).closePath();
	this.shape_241.setTransform(-1106.5,197.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.4).curveTo(-3.7,-4.9,-2.7,-6).curveTo(-1.5,-7.1,0,-7.1).curveTo(1.6,-7.1,2.6,-6).curveTo(3.7,-4.9,3.7,-3.4).lineTo(3.7,7.1).closePath();
	this.shape_242.setTransform(-1091.3,183.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.4).curveTo(-3.8,-4.9,-2.7,-6).curveTo(-1.6,-7.1,0,-7.1).curveTo(1.5,-7.1,2.6,-6).curveTo(3.7,-4.9,3.7,-3.4).lineTo(3.7,7.1).closePath();
	this.shape_243.setTransform(-1101.4,183.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.6).curveTo(-3.8,-5,-2.7,-6.1).curveTo(-1.7,-7.1,-0.2,-7.1).lineTo(0.2,-7.1).curveTo(1.7,-7.1,2.7,-6.1).curveTo(3.8,-5,3.8,-3.6).lineTo(3.8,7.1).closePath();
	this.shape_244.setTransform(-1111.5,183.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#777777").beginStroke().moveTo(-3.8,7.1).lineTo(-3.8,-3.4).curveTo(-3.8,-4.9,-2.7,-6).curveTo(-1.6,-7.1,0,-7.1).curveTo(1.5,-7.1,2.6,-6).curveTo(3.7,-4.9,3.7,-3.4).lineTo(3.7,7.1).closePath();
	this.shape_245.setTransform(-1121.6,183.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#494A4E").beginStroke().moveTo(-40.6,54.3).lineTo(-40.6,-54.3).lineTo(40.6,-54.3).lineTo(40.6,54.3).closePath();
	this.shape_246.setTransform(-1106.5,225.8);

	this.instance_7 = new lib.redilas003();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1821,214.6,1,1,0,0,0,18.3,50.1);
	this.instance_7.alpha = 0.238;

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-25.9,39.3).curveTo(-36.7,28.6,-36.6,13.4).curveTo(-36.7,4,-32.1,-4.2).curveTo(-27.8,-12.2,-20.2,-17.2).curveTo(-22.6,-22.1,-22.6,-27.4).curveTo(-22.6,-36.8,-16,-43.5).curveTo(-9.4,-50.1,-0,-50.1).curveTo(9.4,-50.1,16,-43.5).curveTo(22.6,-36.8,22.6,-27.4).curveTo(22.6,-22.1,20.2,-17.2).curveTo(27.7,-12.2,32.1,-4.2).curveTo(36.7,4,36.6,13.4).curveTo(36.6,28.6,25.9,39.3).curveTo(15.2,50.1,-0,50.1).curveTo(-15.2,50.1,-25.9,39.3).closePath();
	this.shape_247.setTransform(-1802.6,214.6);

	this.instance_8 = new lib.redilas005();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1804.8,258.6,1,1,0,0,0,2.2,23.7);
	this.instance_8.alpha = 0.391;

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-4.4,23.7).lineTo(-4.4,-23.7).lineTo(4.4,-23.7).lineTo(4.4,23.7).closePath();
	this.shape_248.setTransform(-1802.6,258.6);

	this.instance_9 = new lib.redilas002();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1416.1,210.6,1,1,0,0,0,19.1,35.4);
	this.instance_9.alpha = 0.191;

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-6.8,33.5).curveTo(-9.8,31.6,-11.5,28.5).curveTo(-14.7,29.6,-18.1,29.6).curveTo(-26.4,29.6,-32.3,23.7).curveTo(-38.2,17.8,-38.2,9.4).curveTo(-38.2,1.9,-33.3,-3.8).curveTo(-28.4,-9.4,-21,-10.5).curveTo(-21.3,-12.2,-21.3,-14.1).curveTo(-21.3,-22.9,-15.1,-29.1).curveTo(-8.9,-35.4,-0.1,-35.4).curveTo(8.7,-35.4,15,-29.1).curveTo(21.2,-22.9,21.2,-14.1).curveTo(21.2,-12.2,20.9,-10.5).curveTo(28.3,-9.5,33.2,-3.8).curveTo(38.2,1.9,38.2,9.4).curveTo(38.2,17.8,32.3,23.7).curveTo(26.4,29.6,18.1,29.6).curveTo(14.5,29.6,11.3,28.4).curveTo(9.7,31.6,6.7,33.4).curveTo(3.6,35.4,-0.1,35.4).curveTo(-3.7,35.4,-6.8,33.5).closePath();
	this.shape_249.setTransform(-1397,210.5);

	this.instance_10 = new lib.redilas001();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1398.9,258.5,1,1,0,0,0,1.4,22.6);
	this.instance_10.alpha = 0.391;

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#4E4E4F").beginStroke().moveTo(-2.8,22.6).lineTo(-2.8,-22.6).lineTo(2.8,-22.6).lineTo(2.8,22.6).closePath();
	this.shape_250.setTransform(-1397.5,258.5);

	this.instance_11 = new lib.redilas008();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-2015.2,19.1,1,1,0,0,0,33.5,13.6);
	this.instance_11.alpha = 0.559;

	this.instance_12 = new lib.redilas009();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-1448.6,17.8,1,1,0,0,0,36.4,14.8);
	this.instance_12.alpha = 0.559;

	this.instance_13 = new lib.redilas0010();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-2229.5,40,1,1,0,0,0,42,17.1);
	this.instance_13.alpha = 0.559;

	this.instance_14 = new lib.redilas0011();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-1742.1,41.4,1,1,0,0,0,51.4,20.9);
	this.instance_14.alpha = 0.559;

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#777777").beginStroke().moveTo(-12.9,13.5).lineTo(-12.9,-0.7).curveTo(-12.9,-5.9,-9.1,-9.8).curveTo(-5.3,-13.5,-0,-13.5).curveTo(5.3,-13.5,9.1,-9.8).curveTo(12.9,-6,12.9,-0.7).lineTo(12.9,13.5).closePath();
	this.shape_251.setTransform(-1539,266.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_252.setTransform(-1564.7,133.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_253.setTransform(-1555.2,133.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_254.setTransform(-1545.8,133.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_255.setTransform(-1536.3,133.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_256.setTransform(-1526.9,133.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_257.setTransform(-1517.4,133.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_258.setTransform(-1564.7,145.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_259.setTransform(-1555.2,145.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_260.setTransform(-1545.8,145.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_261.setTransform(-1536.3,145.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_262.setTransform(-1526.9,145.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,3.9).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,3.9).closePath();
	this.shape_263.setTransform(-1517.4,145.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_264.setTransform(-1564.7,194);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_265.setTransform(-1555.2,194);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_266.setTransform(-1545.8,194);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_267.setTransform(-1536.3,194);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_268.setTransform(-1526.9,194);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#777777").beginStroke().moveTo(-3.6,4).lineTo(-3.6,-4).lineTo(3.6,-4).lineTo(3.6,4).closePath();
	this.shape_269.setTransform(-1517.4,194);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#777777").beginStroke().moveTo(-25.8,3.3).lineTo(-25.8,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_270.setTransform(-1539,239.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#777777").beginStroke().moveTo(-25.8,3.2).lineTo(-25.8,-3.2).lineTo(25.8,-3.2).lineTo(25.8,3.2).closePath();
	this.shape_271.setTransform(-1539,227);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#777777").beginStroke().moveTo(-25.8,3.3).lineTo(-25.8,-3.3).lineTo(25.8,-3.3).lineTo(25.8,3.3).closePath();
	this.shape_272.setTransform(-1539,214.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_273.setTransform(-1566.8,170.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_274.setTransform(-1560.4,170.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.4,-13.3).lineTo(1.4,13.3).closePath();
	this.shape_275.setTransform(-1553.9,170.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_276.setTransform(-1547.5,170.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_277.setTransform(-1541.1,170.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_278.setTransform(-1534.6,170.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_279.setTransform(-1528.2,170.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#777777").beginStroke().moveTo(-1.5,13.3).lineTo(-1.5,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_280.setTransform(-1521.7,170.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#777777").beginStroke().moveTo(-1.4,13.3).lineTo(-1.4,-13.3).lineTo(1.5,-13.3).lineTo(1.5,13.3).closePath();
	this.shape_281.setTransform(-1515.3,170.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#494A4E").beginStroke().moveTo(-38.4,82.2).lineTo(-38.4,-82.2).lineTo(38.4,-82.2).lineTo(38.4,82.2).closePath();
	this.shape_282.setTransform(-1539,198);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-27.2,14.2).lineTo(-27.2,-14.2).lineTo(27.2,-14.2).lineTo(27.2,14.2).closePath();
	this.shape_283.setTransform(-1539,105);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_284.setTransform(-1614.8,249.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_285.setTransform(-1628.9,249.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.5,-13).lineTo(4.5,13).closePath();
	this.shape_286.setTransform(-1717.8,249.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#777777").beginStroke().moveTo(-4.4,13).lineTo(-4.4,-13).lineTo(4.4,-13).lineTo(4.4,13).closePath();
	this.shape_287.setTransform(-1732,249.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_288.setTransform(-1638.8,229.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.8).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.8).closePath();
	this.shape_289.setTransform(-1638.8,218.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_290.setTransform(-1638.8,207.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.8).lineTo(28.4,-2.8).lineTo(28.4,2.9).closePath();
	this.shape_291.setTransform(-1708,229.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.8).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.8).closePath();
	this.shape_292.setTransform(-1708,218.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#777777").beginStroke().moveTo(-28.4,2.9).lineTo(-28.4,-2.9).lineTo(28.4,-2.9).lineTo(28.4,2.9).closePath();
	this.shape_293.setTransform(-1708,207.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_294.setTransform(-1652.3,246);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.7,-4.7).lineTo(2.7,4.7).closePath();
	this.shape_295.setTransform(-1662.8,246);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_296.setTransform(-1673.4,246);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_297.setTransform(-1683.9,246);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-2.6,4.7).lineTo(-2.6,-4.7).lineTo(2.6,-4.7).lineTo(2.6,4.7).closePath();
	this.shape_298.setTransform(-1694.4,246);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-23.6,4.7).lineTo(-23.6,-4.7).lineTo(23.6,-4.7).lineTo(23.6,4.7).closePath();
	this.shape_299.setTransform(-1673.3,246);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#777777").beginStroke().moveTo(-19.1,15.1).lineTo(-19.1,-15.1).lineTo(19,-15.1).lineTo(19,15.1).closePath();
	this.shape_300.setTransform(-1673.3,262.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#494A4E").beginStroke().moveTo(-86.1,11.3).lineTo(-86.1,-11.3).lineTo(86.1,-11.3).lineTo(86.1,11.3).closePath();
	this.shape_301.setTransform(-1673.3,177.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#3E3E3F").beginStroke().moveTo(-72,5.7).lineTo(-80,-5.7).lineTo(80,-5.7).lineTo(72.1,5.7).closePath();
	this.shape_302.setTransform(-1673.4,192.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#494A4E").beginStroke().moveTo(-72.5,42.4).lineTo(-72.5,-42.3).lineTo(72.6,-42.3).lineTo(72.6,42.4).closePath();
	this.shape_303.setTransform(-1673.3,238.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#777777").beginStroke().moveTo(-18.2,15.2).lineTo(-18.2,-15.2).lineTo(18.2,-15.2).lineTo(18.2,15.2).closePath();
	this.shape_304.setTransform(-2146.7,153.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#777777").beginStroke().moveTo(-18.2,15.2).lineTo(-18.2,-15.2).lineTo(18.2,-15.2).lineTo(18.2,15.2).closePath();
	this.shape_305.setTransform(-2192.4,153.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#777777").beginStroke().moveTo(-18.2,15.2).lineTo(-18.2,-15.2).lineTo(18.2,-15.2).lineTo(18.2,15.2).closePath();
	this.shape_306.setTransform(-2237.7,153.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#777777").beginStroke().moveTo(-18.2,15.2).lineTo(-18.2,-15.2).lineTo(18.2,-15.2).lineTo(18.2,15.2).closePath();
	this.shape_307.setTransform(-2283.2,153.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#303030").beginStroke().moveTo(-116.6,3.7).lineTo(-116.6,-3.7).lineTo(116.6,-3.7).lineTo(116.6,3.7).closePath();
	this.shape_308.setTransform(-2217.3,123.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#565656").beginStroke().moveTo(-57,4.1).lineTo(-57,-4.1).lineTo(57,-4.1).lineTo(57,4.1).closePath();
	this.shape_309.setTransform(-2192.4,262.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#565656").beginStroke().moveTo(-105,2.9).lineTo(-105,-2.9).lineTo(105,-2.9).lineTo(105,2.9).closePath();
	this.shape_310.setTransform(-2217.5,210.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#303030").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_311.setTransform(-2201.3,193.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#565656").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_312.setTransform(-2219.5,193.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#303030").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_313.setTransform(-2164.9,193.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#565656").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_314.setTransform(-2146.7,193.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#303030").beginStroke().moveTo(-12.6,14.7).lineTo(-12.6,-14.7).lineTo(-3.8,-14.7).lineTo(12.6,14.7).closePath();
	this.shape_315.setTransform(-2125.1,193.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#565656").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_316.setTransform(-2183.1,193.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#303030").beginStroke().moveTo(-10.5,14.7).lineTo(5.3,-14.7).lineTo(10.5,-14.7).lineTo(10.5,14.7).closePath();
	this.shape_317.setTransform(-2312,193.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#565656").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_318.setTransform(-2292.3,193.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#565656").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_319.setTransform(-2255.9,193.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#303030").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_320.setTransform(-2274.1,193.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#303030").beginStroke().moveTo(-9.1,14.7).lineTo(-9.1,-14.7).lineTo(9.1,-14.7).lineTo(9.1,14.7).closePath();
	this.shape_321.setTransform(-2237.7,193.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#494A4E").beginStroke().moveTo(-51.6,20.6).lineTo(-51.6,-20.6).lineTo(51.6,-20.6).lineTo(51.6,20.6).closePath();
	this.shape_322.setTransform(-2192,238);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#565656").beginStroke().moveTo(-14.4,27.1).lineTo(-14.4,-27.1).lineTo(14.4,-27.1).lineTo(14.4,27.1).closePath();
	this.shape_323.setTransform(-2285.1,250.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#303030").beginStroke().moveTo(-95.5,35.1).lineTo(-95.5,-35.1).lineTo(95.5,-35.1).lineTo(95.5,35.1).closePath();
	this.shape_324.setTransform(-2216.5,242.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#494A4E").beginStroke().moveTo(-111.6,76.2).lineTo(-111.6,-76.2).lineTo(111.6,-76.2).lineTo(111.6,76.2).closePath();
	this.shape_325.setTransform(-2217.7,203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_250},{t:this.instance_10},{t:this.shape_249},{t:this.instance_9},{t:this.shape_248},{t:this.instance_8},{t:this.shape_247},{t:this.instance_7},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.instance_6},{t:this.instance_5},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.instance_4},{t:this.shape_72},{t:this.instance_3},{t:this.shape_71},{t:this.instance_2},{t:this.shape_70},{t:this.instance_1},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2333.9,0,2319.5,282.8);


(lib.redilasconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.redilashandss();
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


(lib.redilascamionicn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.8,-26,-0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.8,26,-0,26).curveTo(-10.8,26,-18.4,18.4).closePath();
	this.shape.setTransform(-271.7,156.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.7,-26,-0).curveTo(-26,-10.8,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.7,-26,18.4,-18.4).curveTo(26,-10.8,26,-0).curveTo(26,10.7,18.4,18.4).curveTo(10.7,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_1.setTransform(-104,156.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#757575").beginStroke().moveTo(-3.1,62).lineTo(-3.1,-62).lineTo(3,-62).lineTo(3,62).closePath();
	this.shape_2.setTransform(-233,62);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#757575").beginStroke().moveTo(-106.8,-2.3).lineTo(106.8,-3.5).lineTo(106.8,2.3).lineTo(-106.8,3.5).closePath();
	this.shape_3.setTransform(-129.2,126.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-101.8,-3.8).lineTo(101.8,-5.8).lineTo(101.8,3.8).lineTo(-101.8,5.8).closePath();
	this.shape_4.setTransform(-124.2,119.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#969696").beginStroke().moveTo(-3,54.6).lineTo(-3,-54.6).lineTo(3,-54.6).lineTo(3,54.6).closePath();
	this.shape_5.setTransform(-32.3,59.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#969696").beginStroke().moveTo(-3,54.6).lineTo(-3,-54.6).lineTo(3,-54.6).lineTo(3,54.6).closePath();
	this.shape_6.setTransform(-86.3,59.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#969696").beginStroke().moveTo(-3,54.6).lineTo(-3,-54.6).lineTo(3,-54.6).lineTo(3,54.6).closePath();
	this.shape_7.setTransform(-96.7,59.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#969696").beginStroke().moveTo(-3,55.3).lineTo(-3,-55.3).lineTo(3,-55.3).lineTo(3,55.3).closePath();
	this.shape_8.setTransform(-150.7,60.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#969696").beginStroke().moveTo(-3,55.3).lineTo(-3,-55.3).lineTo(3,-55.3).lineTo(3,55.3).closePath();
	this.shape_9.setTransform(-161.4,60.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#969696").beginStroke().moveTo(-3.1,55.2).lineTo(-3.1,-55.2).lineTo(3,-55.2).lineTo(3,55.2).closePath();
	this.shape_10.setTransform(-215.3,60.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-51,2.4).curveTo(-46.2,1.7,-37.6,-0).curveTo(-29.9,-1.4,-23.9,-1.4).curveTo(-16.9,-1.5,-11.9,-1.2).curveTo(-7,-1,-0.1,-0.1).lineTo(2.6,0.2).curveTo(6,0.5,9.1,0.6).curveTo(14.3,0.6,22.3,-0.4).curveTo(31.5,-1.5,41.2,-2).curveTo(46.9,-2.3,51.1,-2.4);
	this.shape_11.setTransform(-76.8,114.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-53.9,3.4).curveTo(-48.7,2.2,-39.5,-0.2).curveTo(-31.5,-2,-24.6,-2.4).curveTo(-16.2,-2.9,-4.5,-1.7).curveTo(8.5,-0.3,15.7,-0.4).curveTo(24.6,-0.5,34.9,-1.5).curveTo(51.9,-3.2,54,-3.4);
	this.shape_12.setTransform(-79.6,113.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-56.7,4.6).curveTo(-54.7,3.7,-50.6,1.8).curveTo(-46.8,0,-44.1,-0.8).curveTo(-36.7,-2.9,-29.7,-3.9).curveTo(-19.8,-5.4,-7,-3.7).curveTo(9.7,-1.6,16.1,-1.5).curveTo(27.9,-1.4,36.5,-1.8).curveTo(44.8,-2.1,56.9,-3);
	this.shape_13.setTransform(-82.5,111.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-29.9,0.2).curveTo(-15.1,0,-1.5,-0.3).curveTo(1.2,-0.3,17.4,-1.5).curveTo(27.7,-2.3,29.3,-1.2).curveTo(30,-0.7,24.9,0.4).curveTo(20,1.5,16,1.9);
	this.shape_14.setTransform(-194.2,114.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-40.7,-0.7).curveTo(-23,-0.7,-5.8,-1.2).curveTo(0.8,-1.3,23,-2.9).curveTo(38.8,-3.9,40,-3.1).curveTo(41.3,-2.2,35.1,0.2).curveTo(29.6,2.2,24.3,3.4);
	this.shape_15.setTransform(-183.4,113.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.3,2.4).curveTo(-74.7,2.6,-50,1.6).curveTo(-39.1,1.2,-19.9,-0.5).curveTo(-2.2,-2.1,10.2,-2.4).curveTo(22.7,-2.7,44.3,-1.3).curveTo(64.4,-0.1,78.3,-0.7).curveTo(87.5,-1.1,99.2,-2.1);
	this.shape_16.setTransform(-124.8,108.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.2,2.7).curveTo(-80.4,2.9,-61.8,2.2).curveTo(-50.4,1.8,-33.7,0.1).curveTo(-16.2,-1.7,-5.6,-2.2).curveTo(17.1,-3.3,46.8,-2.3).curveTo(83.1,-1.2,99.3,-1.4);
	this.shape_17.setTransform(-124.9,106.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.2,2.2).curveTo(-82.7,2.9,-67.3,2.2).curveTo(-58.7,1.9,-46.9,0.4).curveTo(-33.8,-1.3,-26.5,-1.7).curveTo(-8.6,-2.8,11.7,-2.4).curveTo(23.4,-2.1,50.1,-1.6).lineTo(99.3,-1.3);
	this.shape_18.setTransform(-124.9,104.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-29.7,1.4).curveTo(-21.9,1.9,-16.2,1.9).curveTo(-10.3,1.9,-2.7,1.5).curveTo(2,1.3,8.5,0.4).curveTo(15.6,-0.5,19.7,-0.8).curveTo(21.5,-0.9,24.7,-1.4).curveTo(27.6,-1.8,29.7,-1.9);
	this.shape_19.setTransform(-194.4,103.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-19.1,0.5).curveTo(-12.4,1.2,-7.2,1.2).curveTo(-2,1.3,4.8,0.9).curveTo(8.1,0.7,12,-0).curveTo(14.3,-0.4,19.1,-1.3);
	this.shape_20.setTransform(-204.9,102.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-100,6.9).lineTo(-99.9,-7.8).lineTo(100,-6.9).lineTo(99.9,7.8).closePath();
	this.shape_21.setTransform(-124.8,109.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-43.7,2.1).curveTo(-32.4,-0.6,-17.9,-1.3).curveTo(-17.6,-1.3,9.4,-1.9).curveTo(25.4,-2.3,43.8,-2.1);
	this.shape_22.setTransform(-69.4,91.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.1,0,0,3.9).moveTo(-26.2,1.4).curveTo(-11,-1.4,-4,-1.7).curveTo(3.1,-2.1,11.3,-0.9).curveTo(15,-0.4,26.1,1.9);
	this.shape_23.setTransform(-172.3,91.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-92.2,2.9).curveTo(-83.7,0.7,-79.2,-0.2).curveTo(-71.9,-1.8,-66,-2.4).curveTo(-57,-3.2,-45.8,-2.1).curveTo(-31,-0.6,-25.5,-0.5).curveTo(-11.1,-0.3,8.1,-1.3).curveTo(31,-2.5,41.9,-2.7).curveTo(66.6,-3.1,92.3,-2.7);
	this.shape_24.setTransform(-117.8,90.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99,4.4).curveTo(-86.3,-0.5,-77.1,-2.6).curveTo(-64.4,-5.3,-48.9,-3.9).curveTo(-44.5,-3.5,-35.5,-2.6).curveTo(-27.2,-1.8,-20.2,-1.9).curveTo(3.9,-2,33.2,-3).curveTo(42.7,-3.3,57.7,-3.8).curveTo(78.1,-4.2,99.1,-3.8);
	this.shape_25.setTransform(-124.6,88.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-87.9,-2.8).curveTo(-79.9,-1.3,-79.4,-1.2).curveTo(-74.8,-0.4,-70.7,0).curveTo(-62.8,0.8,-51.1,0.3).curveTo(-38.4,-0.2,-31.3,0.3).curveTo(-27.4,0.6,-20.1,1.7).curveTo(-13.7,2.6,-8.8,2.8).curveTo(-2.4,2.9,6.4,1.7).curveTo(16.4,0.3,21.6,0.2).curveTo(28.3,0,36.9,0.5).curveTo(47.4,1.1,52.1,1.1).curveTo(71.8,1.3,88,0.9);
	this.shape_26.setTransform(-113.5,81.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-19.8,-4.4).curveTo(-6.9,-4.9,3.5,-4.6).curveTo(18.9,-4.3,19.6,-2.5).curveTo(19.8,-2.1,10.1,-2.3).curveTo(-1.6,-2.4,-7.3,-0.7).curveTo(-11.3,0.5,-13.9,1.6).curveTo(-16.6,2.8,-19.8,4.8);
	this.shape_27.setTransform(-204.4,85.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-100,7).lineTo(-99.9,-7.9).lineTo(99.9,-7).lineTo(99.9,7.9).closePath();
	this.shape_28.setTransform(-124.7,86.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-18.5,-2.3).curveTo(-14.9,-2.7,-12.3,-2.8).curveTo(-9.6,-2.9,-6,-2.7).curveTo(-2,-2.5,6.4,-0.4).curveTo(8.2,0.1,18.5,2.9);
	this.shape_29.setTransform(-205.8,67.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-62.6,-3.9).curveTo(-54.2,-4.1,-45.1,-3.5).curveTo(-40.6,-3.2,-33.6,-2.2).curveTo(-26.6,-1.2,-22.1,-0.9).curveTo(-14.8,-0.5,-3.4,-1.3).curveTo(8.2,-2.1,15.4,-1.8).curveTo(18.1,-1.6,22.1,-1.3).curveTo(26.4,-0.9,28.9,-0.7).curveTo(31.5,-0.6,40,-0.7).curveTo(46.1,-0.8,50.8,0.1).curveTo(53.7,0.7,56.8,1.6).curveTo(60.5,2.8,62.2,4);
	this.shape_30.setTransform(-161.7,66.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(26.5,-2.4).curveTo(15.3,-1.6,2.5,-1.3).curveTo(-1.5,-1.3,-15.9,-2.1).curveTo(-26,-2.7,-26,-1.7).curveTo(-26,-0.6,-21.4,0.8).curveTo(-17.2,2,-13.5,2.4);
	this.shape_31.setTransform(-51.9,68.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.5,-2.4).curveTo(-90.8,-2.7,-83,-2.3).curveTo(-77.1,-2.1,-68,-0.7).curveTo(-59,0.7,-53,0.9).curveTo(-46.2,1.2,-36.3,0.4).curveTo(-25.6,-0.4,-19.5,-0.4).curveTo(-11.3,-0.3,1,1).curveTo(13.5,2.4,21.4,2.5).curveTo(28.8,2.7,39.7,2).curveTo(51.1,1.4,57.9,1.4).curveTo(61.6,1.4,70.2,1.9).curveTo(77.1,2.4,82.4,2.1).curveTo(90.4,1.9,99.4,0.7);
	this.shape_32.setTransform(-124.8,62.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.5,-2.3).curveTo(-90.6,-2.3,-81,-1.7).curveTo(-76.7,-1.4,-68.8,-0.1).curveTo(-61.8,1,-56.5,1.2).curveTo(-50,1.4,-41.3,0.4).curveTo(-31,-0.8,-26,-0.9).curveTo(-15.3,-1.2,2.7,0.8).curveTo(19.7,2.7,31.4,2.1).curveTo(35.4,1.9,42.9,0.8).curveTo(49.6,-0.1,54.4,-0.1).curveTo(58.8,-0.1,64.9,0.7).curveTo(71.5,1.5,75.4,1.6).curveTo(82.4,1.8,87.4,1.6).curveTo(92.4,1.3,99.4,0.6);
	this.shape_33.setTransform(-124.8,60.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-69,-2).curveTo(-56.9,-2,-46,-1.2).curveTo(-42.7,-1,-36.3,-0.2).curveTo(-30.7,0.4,-26.5,0.6).curveTo(-20.5,0.8,-12.3,0.3).curveTo(-2.7,-0.3,2,-0.3).curveTo(9.8,-0.3,25.4,1.2).curveTo(38.8,2.4,48.9,1.8).curveTo(52.1,1.6,58.9,0.2).curveTo(66.7,-1.5,68.9,-1.8);
	this.shape_34.setTransform(-155.3,57.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-100,6.9).lineTo(-99.9,-7.9).lineTo(99.9,-7).lineTo(99.9,7.9).closePath();
	this.shape_35.setTransform(-124.6,63.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-92.8,-4).curveTo(-86.8,-4,-80.4,-3.4).curveTo(-77.3,-3.1,-73.1,-2.4).curveTo(-68.5,-1.5,-65.9,-1.2).curveTo(-62.4,-0.8,-54.9,0.1).curveTo(-48.4,0.8,-43.8,1).lineTo(-33.2,1.3).curveTo(-22.1,1.6,-20.3,1.2).curveTo(-12.3,-0.2,-9.1,-0.3).curveTo(-6.9,-0.3,-3.6,0.2).curveTo(-0.3,0.7,1.9,0.6).curveTo(3.8,0.7,6.6,0.3).curveTo(9.6,-0,11.4,-0).curveTo(15.9,-0,21.8,0.8).curveTo(26.7,1.5,28.7,2.1).curveTo(31.1,2.8,40.6,2.8).curveTo(41.7,2.8,45.2,2.4).curveTo(48.2,2.1,50,1.8).curveTo(52.2,1.5,60.2,1.5).curveTo(61.8,1.5,64,1.9).curveTo(66.4,2.3,67.7,2.3).curveTo(70.4,2.4,75.2,1.6).curveTo(79.6,0.8,82.7,1.2).curveTo(85.8,1.6,88,2.2).curveTo(90.1,2.8,92.6,4.1);
	this.shape_36.setTransform(-130.9,43.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.2,-3.8).curveTo(-95.7,-4.1,-91.8,-4.1).curveTo(-84.9,-4.2,-76,-2).curveTo(-65.9,0.5,-60.4,0.9).curveTo(-53,1.4,-43.7,1.1).curveTo(-31.1,0.6,-26.9,0.6).curveTo(-19.2,0.7,-8.7,1).curveTo(3.4,1.5,9.5,1.6).curveTo(14.2,1.7,25.9,1.6).curveTo(35.2,1.5,42.4,1.9).curveTo(44.8,2,49.8,2.5).curveTo(54.1,2.8,57.3,2.9).curveTo(60.8,3,67.1,2.6).curveTo(72.8,2.2,76.8,2.4).curveTo(79.3,2.6,83.5,3.3).curveTo(87.4,4,90.2,4.1).curveTo(94.6,4.1,99.2,3.7);
	this.shape_37.setTransform(-124.5,40.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.3,-3.6).curveTo(-94.2,-3.6,-88.8,-3.2).curveTo(-84.1,-2.9,-76.6,-1.2).curveTo(-69.5,0.5,-64.4,0.7).curveTo(-57.9,1.1,-48.2,-0.5).curveTo(-38.1,-2.1,-32,-2).curveTo(-26.4,-1.8,-19,-0.6).curveTo(-10.7,0.8,-6,1.1).curveTo(1.5,1.6,11.4,1.1).curveTo(23.5,0.6,28.9,0.7).curveTo(37.3,0.9,52.3,2.1).curveTo(65.9,3.3,75.7,3.2).curveTo(77.7,3.2,83.2,2.9).curveTo(87.4,2.7,90.7,2.9).curveTo(95.2,3.1,99.2,3.6);
	this.shape_38.setTransform(-124.5,38.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.2,-3.6).curveTo(-97.2,-3.7,-92.7,-3.6).curveTo(-88.6,-3.5,-82.5,-2.5).curveTo(-76.3,-1.5,-72.3,-1.4).curveTo(-68.2,-1.3,-62.6,-1.7).curveTo(-56.2,-2.2,-52.9,-2.2).curveTo(-44.9,-2.3,-34.6,-1.2).curveTo(-22.3,-0,-16.5,0.2).curveTo(-8,0.5,6,0.2).curveTo(19.5,-0.1,28.4,0.2).curveTo(35.3,0.5,45.4,1.4).curveTo(56,2.4,62.3,2.7).curveTo(81.5,3.7,99.2,3.7);
	this.shape_39.setTransform(-124.5,36.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-100,6.9).lineTo(-99.9,-7.9).lineTo(99.9,-6.9).lineTo(99.9,7.9).closePath();
	this.shape_40.setTransform(-124.5,40);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-43.9,-3.9).lineTo(-28.2,-3.8).lineTo(-4.3,-1.6).curveTo(19,-1.9,20.8,-1.4).curveTo(21.3,-1.3,23,-1.1).curveTo(25.1,-0.7,28,0.1).lineTo(31.4,1.4).curveTo(35.1,2.8,36.8,2.8).curveTo(39.5,2.8,43.7,3.9);
	this.shape_41.setTransform(-180.2,20.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-22.8,0.8).curveTo(-19.9,0.2,-12,-0.3).curveTo(-5.8,-0.7,-1.2,-0.8).curveTo(-0.5,-0.8,3.8,-1).curveTo(6.5,-1.1,8.8,-1).curveTo(15.5,-0.6,22.8,1);
	this.shape_42.setTransform(-65.4,23.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.5,-4.8).curveTo(-91,-5,-82.3,-4.5).curveTo(-78.6,-4.2,-72.6,-3.4).curveTo(-66.8,-2.6,-62.9,-2.3).curveTo(-58.5,-2,-51.5,-2.3).curveTo(-44.4,-2.5,-40,-2.2).curveTo(-35.7,-2,-27.9,-0.6).curveTo(-20.9,0.6,-15.6,0.7).curveTo(-13.2,0.7,-8.9,0.2).curveTo(-4.9,-0.2,-2.2,-0.1).curveTo(0.5,-0,4,0.4).curveTo(8.1,1,10.2,1.1).curveTo(15.1,1.4,21.9,1.1).curveTo(29.7,0.8,33.6,0.9).curveTo(37.4,1,43.6,1.5).curveTo(49.5,2,53.6,2.1).curveTo(57.1,2.1,63.5,1.8).curveTo(69.4,1.4,73.5,1.6).curveTo(81.3,1.8,86.7,2.5).curveTo(92.2,3.2,99.3,4.9);
	this.shape_43.setTransform(-124.6,19.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-56.4,-4).curveTo(-46.6,-3.7,-35.7,-3).curveTo(-32.5,-2.8,-26.3,-2.1).curveTo(-20.9,-1.6,-16.8,-1.4).curveTo(-10.6,-1,-0.6,-1.5).curveTo(9.3,-1.9,15.5,-1.6).curveTo(30.2,-0.9,42.3,0.4).curveTo(56.8,2,55.8,3.5).curveTo(55.3,4.4,48.8,3.6).curveTo(39.7,2.6,36.9,2.6).curveTo(35.2,2.6,30.1,2.9).curveTo(26.4,3.2,23.5,2.8).curveTo(21.5,2.6,18.7,1.2).curveTo(16,0,13.5,-0.1).curveTo(9.7,-0.3,-0.7,-0.3).curveTo(-12,-0.3,-18.3,-0.6).curveTo(-23.7,-0.8,-32,-1.3).curveTo(-40.3,-1.9,-45.7,-2.1).curveTo(-50.5,-2.4,-56.4,-2.5);
	this.shape_44.setTransform(-167.7,15.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(57.6,5.2).curveTo(53.7,4,50.2,3.6).curveTo(47,3.1,42.8,3.4).curveTo(37,3.7,35.2,3.7).curveTo(29.9,3.5,22.3,2.8).curveTo(14.2,1.9,9.3,1.8).curveTo(5.2,1.6,-1.9,1.8).curveTo(-8.6,1.9,-13.1,1.7).curveTo(-22.5,1.2,-29,0.5).curveTo(-35.6,-0.3,-44.4,-1.9).lineTo(-57.6,-5.2);
	this.shape_45.setTransform(-82.8,14.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-99.1,-6).curveTo(-89.9,-5.5,-79.4,-4.5).curveTo(-77.4,-4.3,-71.7,-3.7).curveTo(-67.5,-3.2,-64,-3).curveTo(-57.7,-2.6,-48.3,-3.1).curveTo(-38.4,-3.6,-32.6,-3.3).curveTo(-21.7,-2.9,-8.5,-1.4).curveTo(0.3,-0.4,6.6,0.5).curveTo(11.4,1.3,22.8,3.3).curveTo(29.2,4.4,38.2,4).curveTo(49.8,3.4,54.2,3.6).curveTo(56.5,3.8,60.5,4.1).curveTo(64.1,4.5,66.7,4.6).curveTo(70.4,4.8,77.1,4.6).curveTo(83.3,4.5,87.6,4.8).curveTo(93,5.1,99,6);
	this.shape_46.setTransform(-124.2,15.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-99.9,7).lineTo(-99.9,-7.9).lineTo(100,-6.9).lineTo(99.9,7.9).closePath();
	this.shape_47.setTransform(-124.5,17);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-2.3,8.2).lineTo(-2.3,-8.2).lineTo(2.3,-8.2).lineTo(2.3,8.2).closePath();
	this.shape_48.setTransform(-245.7,153.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1,1.2).lineTo(-0.8,-1.2).lineTo(0.9,0.2).lineTo(0.3,1.2).closePath();
	this.shape_49.setTransform(-33.6,128.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#C6C6C6").beginStroke().moveTo(0.7,1.5).lineTo(-1,0.7).curveTo(-1.8,0.1,-1.4,-0.3).curveTo(-0.1,-1.9,0.8,-1.7).lineTo(1.5,1.3).curveTo(1.4,1.7,1.1,1.7).lineTo(0.7,1.5).closePath();
	this.shape_50.setTransform(-38.2,135.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.7,1.4).curveTo(-1.3,1.4,-1.7,1).curveTo(-2.2,0.6,-2.2,0).curveTo(-2.2,-0.6,-1.7,-1).curveTo(-1.3,-1.4,-0.7,-1.4).lineTo(0.7,-1.4).curveTo(1.3,-1.4,1.8,-1).curveTo(2.1,-0.6,2.1,0).curveTo(2.1,0.6,1.8,1).curveTo(1.3,1.4,0.7,1.4).closePath();
	this.shape_51.setTransform(-33.3,138);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1,3).curveTo(-1.4,2.6,-1.4,2).lineTo(-1.4,-2).curveTo(-1.4,-2.6,-1,-3).curveTo(-0.6,-3.4,0,-3.5).curveTo(0.6,-3.4,1,-3).curveTo(1.4,-2.6,1.4,-2).lineTo(1.4,2).curveTo(1.4,2.6,1,3).curveTo(0.6,3.5,0,3.5).curveTo(-0.6,3.5,-1,3).closePath();
	this.shape_52.setTransform(-30.3,131.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1.7,1.5).lineTo(-0.6,-0.2).lineTo(-1,-2).lineTo(1.3,-1.2).lineTo(1.8,0.2).lineTo(0.2,2).closePath();
	this.shape_53.setTransform(-116,141.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1.1,-0.5).lineTo(1.1,-1.5).lineTo(1,1.5).closePath();
	this.shape_54.setTransform(-120.9,141.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.6,1.9).lineTo(-1,-3.3).lineTo(0.6,-1.5).lineTo(1,3.3).closePath();
	this.shape_55.setTransform(-114.5,135.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.6,2.8).lineTo(-0.1,-2.9).lineTo(0.6,-3.1).lineTo(0.3,3.1).closePath();
	this.shape_56.setTransform(-121.5,135.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-1.4,-2.9).lineTo(0.8,-2.8).lineTo(1.6,2.9).lineTo(-1.6,2.9).closePath();
	this.shape_57.setTransform(-117.9,135.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-124.8,32.8).lineTo(-119.1,-34.8).lineTo(-118.5,-5.1).lineTo(-116.7,2).lineTo(-111.1,2).lineTo(-108.9,-1.4).lineTo(91.4,-5.4).lineTo(106.9,-3.7).lineTo(115.7,-3.9).lineTo(117.2,-2.9).lineTo(124.8,-2.7).lineTo(124.8,4.9).curveTo(120.1,4.1,107.8,5.6).lineTo(96.6,7.4).curveTo(94.3,11.8,92.6,12.3).curveTo(91.5,12.8,87.9,12.3).lineTo(84.6,11.8).lineTo(85,25.7).lineTo(83.8,26.1).lineTo(83.3,18.5).curveTo(77.5,16.9,73.8,17).curveTo(63.4,19.6,51.9,22.3).curveTo(29.1,27.7,24.2,27.6).curveTo(9.5,27.5,-27.3,28.1).lineTo(-61.3,28.7).curveTo(-62.2,25.2,-63.4,24.9).lineTo(-66.8,24.6).lineTo(-69.1,24.4).curveTo(-70,24.3,-71.3,22.8).lineTo(-72.4,21.3).lineTo(-77.8,21).lineTo(-78.3,22.8).curveTo(-78.9,24.5,-80.1,24.6).curveTo(-82.1,24.8,-83.4,23.8).lineTo(-84.4,22.8).lineTo(-87.9,29.4).lineTo(-114.9,30.5).lineTo(-118.5,34.4).lineTo(-123.3,34.8).closePath().moveTo(-76,7.7).lineTo(-75.8,18.8).lineTo(-53.8,18.3).lineTo(-54.1,7.2).closePath().moveTo(82.6,12.3).lineTo(82.5,9.7).lineTo(79.2,9.9).lineTo(78.1,12.3).lineTo(82.6,12.3).closePath().moveTo(-75.7,4.5).curveTo(-76,4.5,-76.3,4.8).curveTo(-76.6,5,-76.6,5.4).curveTo(-76.4,6.2,-75.7,6.2).lineTo(-54.6,5.7).curveTo(-54.3,5.7,-54,5.4).curveTo(-53.7,5.2,-53.7,4.8).curveTo(-53.8,3.9,-54.6,3.9).closePath();
	this.shape_58.setTransform(-124.8,128.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.1,1.8).lineTo(-5.1,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.2,-4).lineTo(-2.2,0.7).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,2,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.3,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4.1,4.4,2.1,4.5).closePath();
	this.shape_59.setTransform(-275.6,111.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.3,4.5,-4.3,3.8).curveTo(-4.8,3.5,-5,2.6).lineTo(-5.1,1.8).lineTo(-5.1,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.1,-4.5,-2.2,-4).lineTo(-2.2,0.7).curveTo(-2.2,1.7,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.4).curveTo(1.5,2.6,2,1.9).curveTo(2.2,1.5,2.2,0.8).lineTo(2.2,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.4).curveTo(2.3,-4.4,2.4,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.6,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4.1,4.4,2.1,4.5).closePath();
	this.shape_60.setTransform(-299.9,111.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.5,4.5,-5.1,3.5).lineTo(-5.4,2.6).curveTo(-5.5,2.2,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).curveTo(-2.8,-0.3,2,-1.9).curveTo(2,-1.9,2.1,-2).curveTo(2.1,-2,2.2,-2).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.2).curveTo(2.3,-2.4,1.8,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.4,-5.2,-2.9).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).lineTo(5.3,-1.6).curveTo(5.1,-0.6,4.1,-0.2).curveTo(-0.4,1.3,-1.6,1.9).curveTo(-2.4,2.2,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.9).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_61.setTransform(-287.6,111.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,3.9).lineTo(-5.2,2.9).curveTo(-5.2,2.5,-4.8,2.4).lineTo(-4.5,2.4).lineTo(1.7,2.4).lineTo(2.2,2.3).curveTo(2.4,2.2,1.6,1.9).curveTo(0.9,1.5,-1.1,0.8).lineTo(-4.1,-0.2).curveTo(-5.1,-0.6,-5.4,-1.6).lineTo(-5.4,-2.6).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.5).lineTo(4.5,-4.5).lineTo(4.8,-4.5).curveTo(5.1,-4.4,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.5).curveTo(-1.1,-2.6,-1.9,-2.5).curveTo(-2.3,-2.4,-2.3,-2.2).curveTo(-2.3,-2.1,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-1.9,-2,-1.9).lineTo(0.7,-1).lineTo(4.2,0.3).curveTo(5.6,1,5.4,2.6).curveTo(5.4,3.1,5.1,3.5).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,3.9).closePath();
	this.shape_62.setTransform(-312.1,111.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#DF1421").beginStroke().moveTo(1.1,4.5).lineTo(-0.9,4.5).curveTo(-1.4,4.5,-1.5,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1.1,-4.5).lineTo(1.3,-4.5).curveTo(1.4,-4.5,1.4,-4.4).curveTo(1.4,-4.4,1.5,-4.3).curveTo(1.5,-4.3,1.5,-4.2).curveTo(1.5,-4.2,1.5,-4.1).lineTo(1.5,4).curveTo(1.5,4.5,1.1,4.5).lineTo(1.1,4.5).closePath();
	this.shape_63.setTransform(-320.7,111.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-17.9,-5.3).lineTo(17.6,-6.1).lineTo(17.9,5.3).lineTo(-17.6,6.1).closePath();
	this.shape_64.setTransform(-50.5,139.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.8).curveTo(-22.4,1,-21.5,0).lineTo(-20.7,-0.9).curveTo(-20.7,-1.4,-20.5,-1.9).curveTo(-20.1,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3,-4.6).lineTo(22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).lineTo(-4,-1.8).curveTo(-8.9,-1.3,-18.6,-0.6).curveTo(-19.9,0.6,-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.1).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.8).closePath();
	this.shape_65.setTransform(-303.7,38.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.5,-1.9).lineTo(3.6,1.5).lineTo(-3.4,1.9).closePath();
	this.shape_66.setTransform(-277.5,33.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.4).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_67.setTransform(-324.2,84.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_68.setTransform(-324.2,106.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#999999").beginStroke().moveTo(-3,0.3).lineTo(-3.8,-0).lineTo(3.8,-0.5).curveTo(2.9,0.4,0.1,0.5).lineTo(-0.8,0.5).curveTo(-2.1,0.5,-3,0.3).closePath();
	this.shape_69.setTransform(-324.3,98.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#999999").beginStroke().moveTo(-3.1,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.7).curveTo(-3.4,-4.9,-3.1,-5).lineTo(2.4,-6.7).curveTo(3,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,4,3.2,4.5).curveTo(2.1,5.2,-1.3,6.5).curveTo(-2,6.8,-2.5,6.8).lineTo(-3.1,6.7).closePath();
	this.shape_70.setTransform(-324.4,101.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.3,-13.6).curveTo(0.6,-13,0.9,-10.8).curveTo(1.5,-6.9,1.6,1.1).curveTo(1.6,5,1.1,10.8).curveTo(1,11.9,0.4,12.8).curveTo(-0.2,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_71.setTransform(-320.1,57.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#999999").beginStroke().moveTo(3.5,14.3).lineTo(-2.1,13.7).curveTo(-3.7,13.5,-4.5,13).curveTo(-5.7,12.2,-5.7,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6,-10.7,-5.9,-11.1).curveTo(-5.3,-12.5,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(5.2,-14.4,5.6,-11.1).curveTo(6.1,-7.5,6.3,1.1).curveTo(6.4,5.1,5.9,11.1).curveTo(5.7,12.2,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.5,14.3).closePath();
	this.shape_72.setTransform(-321.3,57.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#999999").beginStroke().moveTo(-2.4,5.7).curveTo(-3.1,5.3,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).lineTo(-1.8,-2.3).curveTo(-1.6,-2.7,-1.4,-2.9).lineTo(1.5,-6.1).lineTo(2.1,-6).lineTo(3.3,-6.1).lineTo(2.7,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.2).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.4).lineTo(-0.4,4.7).lineTo(-0.5,5.4).curveTo(-0.7,6,-1.3,6.1).closePath();
	this.shape_73.setTransform(-342.7,83.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.1,-25,7.8,-20.5).lineTo(4.7,-10.6).lineTo(1,1.8).curveTo(-0.1,5.7,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.4,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.8,-1,-3.9).closePath();
	this.shape_74.setTransform(-333.1,59.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.3,-0.1).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.2).curveTo(3,-13.4,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_75.setTransform(-342.5,121.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.7,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_76.setTransform(-342.1,140);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.4,-4.8,-1.7).lineTo(4.8,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_77.setTransform(-341.1,151.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_78.setTransform(-337.3,155.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.7,-8.4).lineTo(0.8,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_79.setTransform(-336.5,147.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.2,-6.8).curveTo(-3.4,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.3,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.2,-6.8).lineTo(-4.4,-6.9).closePath();
	this.shape_80.setTransform(-338,145.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.1,-1.5,1.9).curveTo(-2,-1,-2,-4.6).lineTo(-1.4,-3.9).curveTo(-0.6,-3.2,-0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.4,4.6).lineTo(1,4.5).closePath();
	this.shape_81.setTransform(-344.4,145.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#999999").beginStroke().moveTo(-1.2,6.5).lineTo(-1.2,6.4).curveTo(-0.7,3.1,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.3,-6.5).lineTo(0.9,-6.5).lineTo(1.2,-4.3).curveTo(1.4,-1.6,1.4,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_82.setTransform(-262.5,101.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-4,8.3,-4.5,7.7).curveTo(-5,7.2,-5,6.3).curveTo(-5.5,2.2,-5.3,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.6).curveTo(-4,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.2,-8.2).curveTo(4,-8.2,4.5,-7.6).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.2,4.5,7.7).curveTo(4,8.3,3.2,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_83.setTransform(-262.6,101.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-47,64.9).curveTo(-49.1,64.1,-50,62).curveTo(-50.4,61.8,-51,61.2).curveTo(-52,60.2,-52.5,58.5).curveTo(-53.2,56.4,-53.5,53.3).lineTo(-54,48).curveTo(-54.3,44.9,-53.4,42.1).lineTo(-52.4,39.9).curveTo(-53.3,23.6,-53.3,18.3).curveTo(-53.3,14.9,-52.8,6.7).lineTo(-52.3,-0.9).lineTo(-48.1,-7.9).curveTo(-47.1,-13,-43.6,-27.3).curveTo(-41.3,-36.4,-37.2,-48.8).curveTo(-33.9,-58.5,-32.9,-60.5).curveTo(-32.5,-61.4,-31.9,-61.8).curveTo(-31.3,-62.2,-29.7,-62.4).curveTo(-22.5,-63.3,5.4,-64.5).lineTo(31.8,-65.5).curveTo(34.7,-65.6,36.1,-65.3).curveTo(38.3,-64.9,40.2,-63.5).lineTo(43.2,-61.2).lineTo(45.3,-59.2).curveTo(46.4,-58.2,47.8,-56.1).curveTo(48.9,-54.3,49.7,-52.7).curveTo(50.9,-50.2,52.2,-44.7).curveTo(54,-36.9,54,-29.7).lineTo(54,-12.7).curveTo(54,-9.9,53.3,-8.8).curveTo(50,-2.2,50,-0.1).lineTo(50,6.5).curveTo(50,8,49.5,8.9).curveTo(49,9.7,49,10.4).lineTo(49,25.4).lineTo(39.1,25.7).lineTo(36,26).lineTo(36,28.3).curveTo(24.9,28.4,20,29).curveTo(13.2,29.9,10.4,31.2).curveTo(3.7,34.3,-1.3,42.9).curveTo(-3.6,46.8,-6.7,53.3).curveTo(-7.5,54.5,-9.1,54.5).lineTo(-17.2,54.5).lineTo(-18.7,54.1).lineTo(-21.4,54.5).lineTo(-39,54.5).lineTo(-39,61.9).curveTo(-39,63.3,-39.8,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-45.4,65.5,-47,64.9).closePath().moveTo(9.8,-55.4).curveTo(-9.6,-54.6,-16,-53.6).curveTo(-21.4,-52.8,-23,-51.9).curveTo(-24.2,-51.1,-25.6,-48.5).curveTo(-26.6,-46.5,-28.8,-36.4).curveTo(-31.1,-26.4,-31.5,-22.1).curveTo(-31.9,-18.2,-32.2,-10.8).curveTo(-32.5,-4.1,-32.5,-1.5).lineTo(-32.4,-0.4).lineTo(-31.2,-0.7).lineTo(9.3,-16.4).curveTo(14.7,-18.4,26.6,-20.3).lineTo(29.1,-20.8).curveTo(30.3,-21,30.6,-21.4).curveTo(30.8,-21.7,30.8,-22.3).lineTo(31.5,-51.8).curveTo(31.5,-54.2,30.7,-55).curveTo(30,-55.8,28,-56).curveTo(19.5,-55.8,9.8,-55.4).closePath();
	this.shape_84.setTransform(-292.9,92.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-51.2,24.4).lineTo(-51.2,22.8).lineTo(-55.2,22.9).lineTo(-55.2,17.3).lineTo(-104.2,17.3).lineTo(-104.2,21.2).lineTo(-119.1,19.4).lineTo(-130.7,5.5).lineTo(-126.6,-24.7).lineTo(-51.6,-24.7).lineTo(-49.8,-16.7).lineTo(104.8,-17.7).curveTo(100.8,-14.3,105.4,-10.4).curveTo(108.2,-7.9,117.2,-3.6).curveTo(126.4,0.9,128.7,2.8).curveTo(132.9,6.3,128.3,8.8).lineTo(127,12.1).curveTo(125.9,15.2,125.8,15.3).lineTo(100.2,13.1).lineTo(91.8,10.3).lineTo(54.9,10.3).curveTo(55.7,10.7,58.6,11).curveTo(56.1,11.5,55.3,13.9).curveTo(54.5,16.2,55.6,18.4).curveTo(46,18.8,35.8,15.7).curveTo(31.6,14.3,29,14.5).curveTo(25.4,14.8,23.7,18).curveTo(23.7,16,25,14.1).lineTo(24.5,12.8).lineTo(24.4,12.2).lineTo(23.2,11.3).lineTo(7.8,11.3).lineTo(7.8,13.4).lineTo(8.1,15.1).curveTo(8.3,16.3,8,16.3).lineTo(-18.3,16.3).curveTo(-18.7,16.3,-20,15.1).curveTo(-21.2,13.9,-21.2,13.4).lineTo(-21.2,12.3).lineTo(-22.6,12.3).lineTo(-22.9,16.3).lineTo(-26.2,16.3).lineTo(-26.4,12.3).lineTo(-30.7,12.3).curveTo(-33.2,13.7,-34.2,14.9).lineTo(-34.2,18.2).curveTo(-34.2,21.5,-37.8,21.9).curveTo(-40.2,22.2,-48.2,22.6).lineTo(-48.2,24.7).closePath().moveTo(33.5,11.2).lineTo(37.8,10.9).curveTo(40,10.7,40.9,10.3).lineTo(21.5,10.3).closePath();
	this.shape_85.setTransform(-193.7,137.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("rgba(0,0,0,0.298)").beginStroke().moveTo(-131.8,8).curveTo(-186.3,4.7,-186.4,0).curveTo(-186.3,-4.7,-131.8,-8).curveTo(-77.2,-11.3,0,-11.3).curveTo(77.2,-11.3,131.8,-8).curveTo(186.3,-4.7,186.3,0).curveTo(186.3,4.7,131.8,8).curveTo(77.2,11.3,0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_86.setTransform(-179.1,184.3,0.855,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(1));

	// Capa 3
	this.instance = new lib.redilasconductor();
	this.instance.parent = this;
	this.instance.setTransform(-290.3,73.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347,0,347,195.6);


// stage content:
(lib.redillas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_141 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(141).call(this.frame_141).wait(1));

	// apple
	this.instance = new lib.redilasapple();
	this.instance.parent = this;
	this.instance.setTransform(166.6,313.9,1,1,0,0,0,-8.3,10.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).to({alpha:1},8).wait(18));

	// apple
	this.instance_1 = new lib.redilasapple();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.6,313.9,1,1,0,0,0,-8.3,10.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({alpha:1},8).wait(21));

	// apple
	this.instance_2 = new lib.redilasapple();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.5,313.9,1,1,0,0,0,-8.3,10.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).to({alpha:1},8).wait(24));

	// apple
	this.instance_3 = new lib.redilasapple();
	this.instance_3.parent = this;
	this.instance_3.setTransform(176,331.5,1,1,0,0,0,-8.3,10.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({alpha:1},8).wait(27));

	// apple
	this.instance_4 = new lib.redilasapple();
	this.instance_4.parent = this;
	this.instance_4.setTransform(152.9,331.5,1,1,0,0,0,-8.3,10.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({alpha:1},8).wait(30));

	// apple
	this.instance_5 = new lib.redilasapple();
	this.instance_5.parent = this;
	this.instance_5.setTransform(129.9,331.5,1,1,0,0,0,-8.3,10.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({alpha:1},8).wait(35));

	// apple
	this.instance_6 = new lib.redilasapple();
	this.instance_6.parent = this;
	this.instance_6.setTransform(106.8,331.5,1,1,0,0,0,-8.3,10.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({alpha:1},8).wait(40));

	// llanta
	this.instance_7 = new lib.llanta();
	this.instance_7.parent = this;
	this.instance_7.setTransform(759.3,426.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({rotation:-1080,x:471.3},42).wait(51));

	// llanta
	this.instance_8 = new lib.llanta();
	this.instance_8.parent = this;
	this.instance_8.setTransform(591.3,426.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(49).to({rotation:-1080,x:303.3},42).wait(51));

	// camion
	this.instance_9 = new lib.redilascamionicn();
	this.instance_9.parent = this;
	this.instance_9.setTransform(689.4,361.9,1,1,0,0,0,-173.5,91.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({x:401.4},42).wait(51));

	// manzanines
	this.instance_10 = new lib.redilasmanzanines();
	this.instance_10.parent = this;
	this.instance_10.setTransform(916.1,354.2,1,1,0,0,0,-34.8,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({x:847.8,y:240.9},7).to({x:762.8,y:297.6},5).to({x:689.8,y:354.2},5).wait(28).to({x:401.8},42).wait(15).to({alpha:0},9).wait(27));

	// manzanines
	this.instance_11 = new lib.redilasmanzanines();
	this.instance_11.parent = this;
	this.instance_11.setTransform(992.4,354.2,1,1,0,0,0,-34.8,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({x:887.8,y:240.9},7).to({x:832.3,y:244.2},5).to({x:789.8,y:288.2},2).to({x:786.1,y:354.2},3).wait(21).to({x:498.1},42).wait(11).to({alpha:0},9).wait(31));

	// manzanines
	this.instance_12 = new lib.redilasmanzanines();
	this.instance_12.parent = this;
	this.instance_12.setTransform(916.7,415.6,1,1,0,0,0,-34.8,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({x:823.9,y:228.4},7).to({x:728.6,y:235.4},5).to({x:691.1,y:294.2},5).wait(14).to({x:403.1},42).wait(7).to({alpha:0},9).wait(35));

	// manzanines
	this.instance_13 = new lib.redilasmanzanines();
	this.instance_13.parent = this;
	this.instance_13.setTransform(993,415.6,1,1,0,0,0,-34.8,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25).to({x:923.1,y:289.4},7).to({x:791,y:234.8},5).to({x:784.3,y:294.2},5).wait(7).to({x:496.3},42).wait(3).to({alpha:0},9).wait(39));

	// fondo
	this.instance_14 = new lib.redilasfondo();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-117,225.5,1,1,0,0,0,-1167,141.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(49).to({x:1167},42).wait(51));

	// pisp
	this.instance_15 = new lib.redilaspiso();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-53.5,430.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(49).to({x:1103.5},42).wait(51));

	// Ambient
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape.setTransform(525,182.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_1.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-758.9,257.5,2334,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;