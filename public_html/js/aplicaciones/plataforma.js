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



(lib.plattronco5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-65.2,-3.5).lineTo(-41.9,-4).lineTo(-6.4,-1.8).curveTo(28.2,-3.4,30.9,-2.8).curveTo(31,-2.8,34.1,-2.4).curveTo(37.3,-1.9,41.6,-0.9).lineTo(46.7,0.9).curveTo(52.2,2.8,54.8,2.7).curveTo(58.8,2.6,65.1,4.1);
	this.shape.setTransform(-230.9,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-33.8,2.1).curveTo(-29.6,1,-17.9,-0.1).curveTo(-8.4,-1,-1.8,-1.3).curveTo(1.1,-1.5,5.6,-1.8).curveTo(9.5,-2.1,12.9,-2).curveTo(22.7,-1.8,33.8,0.3);
	this.shape_1.setTransform(-60.4,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-147.7,-2.4).curveTo(-135.3,-3,-122.2,-2.7).curveTo(-116.5,-2.5,-107.8,-1.5).curveTo(-99.1,-0.5,-93.4,-0.4).curveTo(-86.8,-0.2,-76.4,-0.8).curveTo(-66,-1.5,-59.4,-1.3).curveTo(-53,-1.1,-41.3,0.6).curveTo(-31,2.1,-23.1,1.9).curveTo(-19.4,1.8,-13.2,1).curveTo(-7.2,0.2,-3.2,0.1).curveTo(0.8,0.1,6,0.6).curveTo(12.1,1.2,15.3,1.3).curveTo(22.5,1.5,32.6,0.8).curveTo(44.1,0,50,0).curveTo(55.4,0,64.8,0.5).curveTo(73.4,0.9,79.5,0.8).curveTo(84.9,0.7,94.3,-0.1).curveTo(103,-0.9,109.1,-0.9).curveTo(120.7,-0.8,128.8,-0.1).curveTo(136.9,0.7,147.6,2.8);
	this.shape_2.setTransform(-148.4,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-83.6,-3.4).curveTo(-67.9,-3.4,-53,-2.9).curveTo(-48.1,-2.7,-38.9,-2).curveTo(-30.9,-1.4,-24.9,-1.3).curveTo(-15.6,-1.1,-0.9,-2.3).curveTo(13.8,-3.4,23.1,-3.2).curveTo(45.4,-2.8,62.9,-1.4).curveTo(84.5,0.3,83.1,2.6).curveTo(82.3,3.9,72.7,3.1).curveTo(59,2,55,2).curveTo(52.6,2.1,44.9,2.9).curveTo(39.4,3.5,35.1,3.1).curveTo(32.2,2.8,27.9,0.9).curveTo(23.9,-0.8,20.2,-0.9).curveTo(14.5,-1,-1,-0.5).curveTo(-17.6,-0,-27.1,-0.1).curveTo(-35,-0.2,-47.4,-0.6).curveTo(-59.7,-1.1,-67.7,-1.2).curveTo(-78.5,-1.3,-83.6,-1.2);
	this.shape_3.setTransform(-212.6,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(85.7,5.1).curveTo(80.1,3.6,74.5,3).curveTo(69.8,2.5,63.6,3.1).curveTo(55.1,3.8,52.4,3.8).curveTo(44.5,3.9,33.1,3.1).curveTo(21.1,2.3,13.9,2.2).curveTo(7.8,2.2,-2.7,2.7).curveTo(-12.6,3.2,-19.3,3.1).curveTo(-33.3,2.9,-43,2.1).curveTo(-52.8,1.2,-66,-0.8).lineTo(-85.7,-5);
	this.shape_4.setTransform(-86.7,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-147.2,-4.5).curveTo(-132.6,-4,-118,-3.2).curveTo(-114.5,-3,-106.5,-2.3).curveTo(-100.1,-1.7,-95,-1.6).curveTo(-85.7,-1.3,-71.8,-2.4).curveTo(-57,-3.6,-48.5,-3.5).curveTo(-38.7,-3.4,-30.5,-3).curveTo(-24.5,-2.7,-12.7,-1.8).curveTo(0.5,-0.7,9.9,0.4).curveTo(17.3,1.3,34,3.7).curveTo(43.4,5.1,56.8,4).curveTo(73.8,2.7,80.6,2.8).curveTo(84,2.9,89.8,3.3).curveTo(95.3,3.6,99.1,3.7).curveTo(104.8,3.8,114.6,3.2).curveTo(123.8,2.7,130.1,2.9).curveTo(137.9,3.2,147.1,4.3);
	this.shape_5.setTransform(-148.1,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#939393").beginStroke().moveTo(-148.5,-7.1).lineTo(147.9,-14.8).lineTo(148.5,7.1).lineTo(-147.9,14.9).closePath();
	this.shape_6.setTransform(-148.5,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.2,0,297.4,29.7);


(lib.plattronco4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-63.1,-4.7).lineTo(-40.6,-5.1).lineTo(-6.3,-2.3).curveTo(27.2,-4,29.8,-3.2).curveTo(30.5,-3,32.9,-2.7).curveTo(36,-2.2,40.2,-0.9).lineTo(45.1,1.3).curveTo(50.5,3.5,52.9,3.5).curveTo(56.9,3.4,62.9,5.2);
	this.shape.setTransform(-223.2,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-32.7,2.3).curveTo(-28.6,1.1,-17.3,-0.2).curveTo(-8.3,-1.2,-1.8,-1.5).curveTo(-1.4,-1.5,5.4,-2.1).curveTo(9.2,-2.4,12.5,-2.3).curveTo(21.9,-2,32.7,0.6);
	this.shape_1.setTransform(-58.4,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-142.8,-3.8).curveTo(-130.9,-4.5,-118.2,-3.9).curveTo(-112.7,-3.7,-104.2,-2.5).curveTo(-95.8,-1.3,-90.3,-1.1).curveTo(-83.9,-0.8,-73.8,-1.5).curveTo(-63.7,-2.2,-57.4,-2).curveTo(-51.3,-1.7,-39.9,0.4).curveTo(-29.9,2.3,-22.3,2.1).curveTo(-18.7,2,-12.7,1).curveTo(-7,0.2,-3.1,0.1).curveTo(0.8,0.1,5.9,0.8).curveTo(11.8,1.6,14.8,1.7).curveTo(21.8,1.9,31.5,1.2).curveTo(42.6,0.3,48.3,0.3).curveTo(53.7,0.3,62.6,0.9).curveTo(71.1,1.5,76.9,1.4).curveTo(82.1,1.3,91.2,0.3).curveTo(99.6,-0.6,105.5,-0.5).curveTo(116.6,-0.3,124.5,0.7).curveTo(132.3,1.7,142.7,4.2);
	this.shape_2.setTransform(-143.6,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-80.9,-4.5).curveTo(-66.7,-4.6,-51.3,-3.8).curveTo(-46.5,-3.6,-37.7,-2.7).curveTo(-29.8,-1.9,-24.1,-1.7).curveTo(-15.1,-1.5,-0.9,-2.7).curveTo(13.3,-4,22.3,-3.7).curveTo(43.5,-3.1,60.8,-1.3).curveTo(81.7,0.9,80.3,3.6).curveTo(79.6,5.1,70.3,4.1).curveTo(57,2.7,53.2,2.8).curveTo(50.7,2.8,43.4,3.8).curveTo(38,4.4,33.9,3.9).curveTo(31.1,3.5,26.9,1.2).curveTo(23.1,-0.8,19.5,-0.9).curveTo(13.9,-1.1,-1,-0.6).curveTo(-17,-0.1,-26.2,-0.3).curveTo(-33.9,-0.4,-45.9,-1).curveTo(-57.8,-1.7,-65.5,-1.8).curveTo(-73.8,-2,-80.8,-2);
	this.shape_3.setTransform(-205.6,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(82.9,6.6).curveTo(77.6,4.8,72.1,4).curveTo(67.5,3.4,61.5,4).curveTo(53.5,4.9,50.7,4.9).curveTo(43,4.9,32.1,3.9).curveTo(20.3,2.8,13.5,2.7).curveTo(7.5,2.7,-2.6,3.2).curveTo(-12.2,3.8,-18.6,3.6).curveTo(-32.1,3.2,-41.6,2.2).curveTo(-51,1.1,-63.8,-1.3).lineTo(-82.9,-6.5);
	this.shape_4.setTransform(-83.9,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-142.3,-6.1).curveTo(-128.6,-5.5,-114.1,-4.4).curveTo(-110.8,-4.1,-103,-3.2).curveTo(-96.8,-2.5,-91.9,-2.3).curveTo(-82.8,-1.9,-69.4,-3.2).curveTo(-55.2,-4.5,-46.9,-4.4).curveTo(-37.4,-4.2,-29.5,-3.6).curveTo(-23.4,-3.2,-12.2,-2).curveTo(0.5,-0.7,9.5,0.7).curveTo(16.8,1.8,32.9,4.8).curveTo(42,6.5,55,5.3).curveTo(71.3,3.7,77.9,4).curveTo(81.1,4.1,86.9,4.6).curveTo(92.1,5,95.8,5.1).curveTo(101.2,5.3,110.8,4.7).curveTo(119.7,4.1,125.8,4.4).curveTo(133.8,4.9,142.3,6.1);
	this.shape_5.setTransform(-143.3,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#BCBCBC").beginStroke().moveTo(-143.6,-9.3).lineTo(142.9,-16.9).lineTo(143.6,9.3).lineTo(-142.9,16.9).closePath();
	this.shape_6.setTransform(-143.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.5,0,287.7,33.8);


(lib.plattronco3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(64.9,-7.2).lineTo(41.7,-6.4).lineTo(6.3,-2.4).curveTo(-2.3,-2.4,-11.3,-2.2).curveTo(-29.3,-1.9,-31,-1.4).curveTo(-32.5,-1.1,-34.1,-0.8).curveTo(-37.3,-0.3,-41.6,1).curveTo(-43.8,2,-46.5,3.1).curveTo(-52,5.2,-54.5,5.3).curveTo(-57.1,5.3,-61.2,6.3).lineTo(-64.8,7.2);
	this.shape.setTransform(-65.8,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(33.8,0.1).curveTo(29.6,-0.8,17.9,-1.3).curveTo(8.6,-1.7,1.7,-1.7).curveTo(0.8,-1.7,-5.7,-1.8).curveTo(-9.7,-1.8,-13.1,-1.6).curveTo(-22.6,-0.9,-33.8,1.8);
	this.shape_1.setTransform(-236,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(147.3,-10.2).curveTo(134.2,-10.2,121.9,-9.2).curveTo(116.3,-8.7,107.6,-7.3).curveTo(99,-5.9,93.2,-5.4).curveTo(86.5,-4.9,76.2,-5).curveTo(65.6,-5.1,59.2,-4.6).curveTo(52.9,-4.1,41.3,-1.7).curveTo(31.1,0.3,23.2,0.5).curveTo(19.4,0.6,13.2,0.1).curveTo(7.2,-0.4,3.2,-0.2).curveTo(-0.7,-0.1,-6,0.8).curveTo(-12,1.7,-15.2,1.9).curveTo(-22.5,2.5,-32.5,2.3).curveTo(-44,2.1,-49.9,2.4).curveTo(-55.5,2.7,-64.7,3.6).curveTo(-73.4,4.5,-79.4,4.7).curveTo(-84.6,4.9,-94.2,4.5).curveTo(-102.9,4.2,-109,4.6).curveTo(-120.5,5.2,-128.6,6.4).curveTo(-136.6,7.6,-147.2,10.3);
	this.shape_2.setTransform(-148.3,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(83.4,-7.6).curveTo(68.2,-6.9,52.8,-5.6).curveTo(47.9,-5.1,38.8,-3.9).curveTo(30.8,-2.9,24.8,-2.5).curveTo(15.6,-1.8,0.8,-2.2).curveTo(-13.9,-2.6,-23.2,-1.9).curveTo(-45.3,-0.4,-62.9,2).curveTo(-84.4,4.8,-82.8,7).curveTo(-81.9,8.2,-72.4,6.9).curveTo(-58.8,5.1,-54.8,5).curveTo(-52.4,4.9,-44.7,5.4).curveTo(-39.1,5.7,-34.8,5).curveTo(-31.9,4.5,-27.7,2.4).curveTo(-23.9,0.5,-20.2,0.3).curveTo(-14.4,-0.1,1,-0.5).curveTo(17.7,-0.8,27.1,-1.4).curveTo(35,-1.8,47.4,-3).curveTo(59.7,-4.1,67.6,-4.6).lineTo(83.4,-5.5);
	this.shape_3.setTransform(-84.5,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-85.3,9.5).curveTo(-80,7.7,-74.3,6.8).curveTo(-69.5,6.1,-63.3,6.3).curveTo(-55,6.6,-52.1,6.5).curveTo(-44.1,6.2,-32.9,4.8).curveTo(-20.8,3.3,-13.7,2.9).curveTo(-7.5,2.6,2.9,2.5).curveTo(12.9,2.5,19.5,2.1).curveTo(33.4,1.1,43.1,-0.2).curveTo(52.8,-1.5,65.9,-4.2).lineTo(85.3,-9.5);
	this.shape_4.setTransform(-210.5,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(146.7,-12).curveTo(130.6,-10.6,117.6,-9.1).curveTo(114.4,-8.8,106.2,-7.6).curveTo(99.9,-6.7,94.8,-6.3).curveTo(85.5,-5.5,71.6,-6).curveTo(56.8,-6.4,48.3,-5.9).curveTo(38.4,-5.3,30.3,-4.4).curveTo(24.1,-3.8,12.5,-2.3).curveTo(-0.5,-0.5,-9.9,1.1).curveTo(-17.1,2.3,-33.8,5.6).curveTo(-43.1,7.5,-56.6,7.1).curveTo(-73.5,6.6,-80.3,7.1).curveTo(-83.8,7.4,-89.5,8).curveTo(-95,8.7,-98.8,8.9).curveTo(-104.4,9.3,-114.3,9.3).curveTo(-123.5,9.2,-129.8,9.8).curveTo(-137.4,10.5,-146.7,12);
	this.shape_5.setTransform(-149,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#D1D1D1").beginStroke().moveTo(-148.5,-7.2).lineTo(147.9,-14.7).lineTo(148.5,7.2).lineTo(-147.9,14.7).closePath();
	this.shape_6.setTransform(-148.5,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.9,-1,297.1,30.9);


(lib.plattronco2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-65.2,-3.6).lineTo(-42,-4).lineTo(-6.5,-1.8).curveTo(28.2,-3.4,30.9,-2.8).curveTo(31.6,-2.6,34.1,-2.4).curveTo(37.2,-2,41.6,-0.9).lineTo(46.6,0.9).curveTo(52.2,2.7,54.7,2.7).curveTo(58.8,2.6,65.1,4.1);
	this.shape.setTransform(-230.9,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-33.8,2).curveTo(-29.5,1,-17.9,-0.1).curveTo(-8.3,-1,-1.8,-1.3).curveTo(1.1,-1.5,5.6,-1.8).curveTo(9.5,-2.1,13,-2).curveTo(22.7,-1.9,33.8,0.3);
	this.shape_1.setTransform(-60.4,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-147.7,-2.4).curveTo(-135.1,-3.1,-122.2,-2.7).curveTo(-116.6,-2.5,-107.8,-1.5).curveTo(-99.2,-0.6,-93.4,-0.4).curveTo(-86.7,-0.2,-76.4,-0.9).curveTo(-65.9,-1.5,-59.4,-1.3).curveTo(-53.1,-1.1,-41.3,0.6).curveTo(-31,2.1,-23.1,1.8).curveTo(-19.4,1.7,-13.2,0.9).curveTo(-7.2,0.2,-3.2,0.1).curveTo(0.8,0.1,6.1,0.6).curveTo(12.1,1.2,15.3,1.3).curveTo(22.6,1.5,32.6,0.8).curveTo(44.2,0,50,-0).curveTo(55.6,-0,64.8,0.4).curveTo(73.6,0.9,79.6,0.8).curveTo(84.9,0.7,94.3,-0.2).curveTo(103,-0.9,109.1,-0.9).curveTo(120.7,-0.8,128.8,-0.1).curveTo(136.9,0.7,147.6,2.8);
	this.shape_2.setTransform(-148.5,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-83.7,-3.4).curveTo(-68,-3.5,-53,-2.9).curveTo(-47.8,-2.8,-39,-2.1).curveTo(-30.7,-1.5,-24.9,-1.3).curveTo(-15.6,-1.1,-0.9,-2.3).curveTo(13.8,-3.4,23.1,-3.2).curveTo(45,-2.9,62.9,-1.4).curveTo(84.5,0.3,83.1,2.6).curveTo(82.3,3.8,72.6,3.1).curveTo(59.1,1.9,55,2).curveTo(52.3,2.1,44.9,2.9).curveTo(39.3,3.5,35,3.1).curveTo(32.2,2.8,27.8,0.9).curveTo(23.9,-0.8,20.2,-0.9).curveTo(14.3,-1,-1,-0.6).curveTo(-17.8,-0.1,-27.1,-0.1).curveTo(-35,-0.2,-47.4,-0.6).curveTo(-59.8,-1.1,-67.8,-1.2).curveTo(-73.5,-1.3,-83.6,-1.3);
	this.shape_3.setTransform(-212.6,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(85.7,5).curveTo(80.5,3.6,74.5,3).curveTo(69.8,2.5,63.6,3).curveTo(55.3,3.8,52.4,3.8).curveTo(44.4,3.9,33.1,3.1).curveTo(21,2.2,13.9,2.2).curveTo(7.7,2.2,-2.7,2.7).curveTo(-12.7,3.2,-19.3,3.1).curveTo(-33.2,2.9,-43,2).curveTo(-52.7,1.2,-66,-0.8).lineTo(-85.7,-5);
	this.shape_4.setTransform(-86.7,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-147.2,-4.5).curveTo(-132.5,-4,-118,-3.1).curveTo(-114.5,-2.9,-106.5,-2.2).curveTo(-100.1,-1.7,-95,-1.5).curveTo(-85.6,-1.2,-71.8,-2.4).curveTo(-57,-3.6,-48.5,-3.5).curveTo(-38.6,-3.4,-30.5,-3).curveTo(-24.2,-2.6,-12.6,-1.7).curveTo(0.4,-0.7,9.9,0.4).curveTo(16.8,1.3,34,3.8).curveTo(43.4,5.1,56.9,4).curveTo(73.7,2.7,80.6,2.9).curveTo(84.2,3,89.8,3.3).curveTo(95.4,3.7,99.1,3.7).curveTo(104.7,3.8,114.6,3.3).curveTo(123.8,2.7,130.1,3).curveTo(138.5,3.3,147.1,4.3);
	this.shape_5.setTransform(-148.1,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#939393").beginStroke().moveTo(-148.5,-7.1).lineTo(147.9,-14.9).lineTo(148.5,7).lineTo(-147.9,14.9).closePath();
	this.shape_6.setTransform(-148.5,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.3,0,297.4,29.7);


(lib.plattronco1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-63.1,-4.7).lineTo(-40.6,-5.2).lineTo(-6.2,-2.3).lineTo(10.8,-3.1).curveTo(28.2,-3.7,29.9,-3.2).curveTo(30.6,-3,32.9,-2.7).curveTo(36,-2.2,40.2,-1).lineTo(45.1,1.3).curveTo(50.5,3.5,52.9,3.4).curveTo(56.9,3.3,62.9,5.2);
	this.shape.setTransform(-223.2,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-32.7,2.3).curveTo(-28.6,1.1,-17.3,-0.2).curveTo(-8.2,-1.2,-1.8,-1.6).curveTo(1,-1.7,5.4,-2.1).curveTo(9.2,-2.4,12.5,-2.3).curveTo(21.6,-2.1,32.7,0.6);
	this.shape_1.setTransform(-58.4,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-142.8,-3.8).curveTo(-130.3,-4.5,-118.2,-4).curveTo(-112.7,-3.7,-104.2,-2.5).curveTo(-95.9,-1.3,-90.3,-1.1).curveTo(-83.9,-0.8,-73.8,-1.5).curveTo(-63.7,-2.2,-57.4,-2).curveTo(-51.3,-1.7,-39.9,0.4).curveTo(-29.9,2.2,-22.3,2).curveTo(-18.7,1.9,-12.7,1).curveTo(-6.9,0.1,-3.1,0.1).curveTo(0.7,0,5.9,0.7).curveTo(11.7,1.5,14.8,1.6).curveTo(21.9,1.9,31.6,1.2).curveTo(42.7,0.3,48.3,0.3).curveTo(53.7,0.3,62.6,0.9).curveTo(71.1,1.5,76.9,1.4).curveTo(82.1,1.3,91.2,0.3).curveTo(99.6,-0.6,105.5,-0.5).curveTo(116.6,-0.3,124.5,0.7).curveTo(132.3,1.7,142.7,4.2);
	this.shape_2.setTransform(-143.6,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-80.9,-4.5).curveTo(-66.7,-4.5,-51.3,-3.8).curveTo(-46.3,-3.5,-37.7,-2.7).curveTo(-29.7,-1.9,-24.1,-1.7).curveTo(-15.2,-1.4,-0.9,-2.7).curveTo(13.3,-3.9,22.3,-3.7).curveTo(43.7,-3.1,60.8,-1.3).curveTo(81.7,0.9,80.3,3.6).curveTo(79.6,5.1,70.3,4.1).curveTo(57.1,2.7,53.2,2.8).curveTo(50.8,2.8,43.5,3.8).curveTo(38.1,4.5,33.9,3.9).curveTo(31.1,3.5,26.9,1.3).curveTo(23.1,-0.8,19.5,-0.9).curveTo(13.9,-1.1,-1,-0.6).curveTo(-17.2,-0.1,-26.2,-0.3).curveTo(-34,-0.4,-45.8,-1).curveTo(-58,-1.7,-65.5,-1.8).lineTo(-80.8,-2);
	this.shape_3.setTransform(-205.6,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(82.8,6.5).curveTo(77.5,4.8,72.1,4).curveTo(67.5,3.4,61.5,4).curveTo(53.4,4.9,50.6,4.9).curveTo(43,4.9,32,3.9).curveTo(20.4,2.8,13.4,2.7).curveTo(7.5,2.7,-2.6,3.2).curveTo(-12.2,3.7,-18.7,3.6).curveTo(-32.2,3.2,-41.6,2.2).curveTo(-51.1,1.1,-63.8,-1.4).lineTo(-82.9,-6.5);
	this.shape_4.setTransform(-83.9,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#434343").setStrokeStyle(0.3,0,0,3.9).moveTo(-142.3,-6.1).curveTo(-126.2,-5.3,-114.1,-4.3).curveTo(-110.7,-4.1,-103,-3.2).curveTo(-96.8,-2.5,-91.9,-2.3).curveTo(-82.8,-1.9,-69.4,-3.1).curveTo(-55.1,-4.5,-46.9,-4.4).curveTo(-37.5,-4.2,-29.5,-3.6).curveTo(-24,-3.2,-12.2,-2).curveTo(0.5,-0.7,9.6,0.7).curveTo(16.7,1.8,33,4.8).curveTo(42.1,6.5,55,5.3).curveTo(71.4,3.8,78,4).curveTo(81.5,4.2,86.9,4.6).curveTo(92.3,5.1,95.8,5.2).curveTo(101.3,5.3,110.9,4.7).curveTo(119.7,4.1,125.8,4.5).curveTo(133.9,4.9,142.3,6.2);
	this.shape_5.setTransform(-143.3,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#BCBCBC").beginStroke().moveTo(-143.6,-9.4).lineTo(142.9,-16.9).lineTo(143.6,9.3).lineTo(-142.9,16.9).closePath();
	this.shape_6.setTransform(-143.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.5,0,287.7,33.8);


(lib.platlenador = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#4B4C4C").beginStroke().moveTo(-0.8,43.9).lineTo(-0.8,-43.9).lineTo(0.8,-43.9).lineTo(0.8,43.9).closePath();
	this.shape.setTransform(0,-47.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#4B4C4C").beginStroke().moveTo(-18.9,25.2).lineTo(0.5,3.2).lineTo(-20,-14.1).lineTo(-9.9,-39.9).lineTo(18.4,-1.1).curveTo(20.1,1.1,20,3.9).curveTo(19.9,6.8,18,8.9).lineTo(-10.2,39.9).closePath();
	this.shape_1.setTransform(54.2,-53.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#656968").beginStroke().moveTo(-10.3,23.9).curveTo(-15,22.5,-15,20.1).curveTo(-15,16.3,-12.2,14).lineTo(-13.4,-25.2).lineTo(10.9,-25.2).lineTo(10.4,12.6).curveTo(15,15.2,15,20.1).curveTo(15,22.5,10.3,23.9).curveTo(6.1,25.2,0,25.1).curveTo(-6.1,25.2,-10.3,23.9).closePath();
	this.shape_2.setTransform(18.7,154.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#656968").beginStroke().moveTo(-10.3,23.9).curveTo(-15,22.5,-15,20.1).curveTo(-15,15.2,-10.3,12.6).lineTo(-9.8,-25.2).lineTo(14.6,-25.2).lineTo(12.3,14).curveTo(15,16.4,15,20.1).curveTo(15,22.5,10.3,23.9).curveTo(6.1,25.2,-0,25.1).curveTo(-6.1,25.2,-10.3,23.9).closePath();
	this.shape_3.setTransform(-24.1,154.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#AAAAAA").beginStroke().moveTo(-4.6,3.4).curveTo(-5.4,3.2,-6,2.5).curveTo(-6.5,1.9,-6.4,1).curveTo(-6.4,0.1,-5.7,-0.4).curveTo(-2.7,-2.6,1.3,-3.2).curveTo(4,-3.6,4.9,-3.3).curveTo(5.7,-3,6.2,-2.3).curveTo(6.6,-1.5,6.4,-0.7).curveTo(6.2,0.2,5.5,0.6).curveTo(4.8,1,4,0.7).lineTo(3.3,0.8).lineTo(1.6,1).curveTo(-1.2,1.6,-3.1,3).curveTo(-3.6,3.4,-4.2,3.4).lineTo(-4.6,3.4).closePath();
	this.shape_4.setTransform(35.2,-25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#AAAAAA").beginStroke().moveTo(-5.5,10.8).curveTo(-6.6,10.4,-8.3,8.2).curveTo(-13.2,1.8,-10,-0.6).lineTo(3.4,-10.8).lineTo(11.2,-0.6).lineTo(-2.2,9.7).curveTo(-3.7,10.8,-4.9,10.8).lineTo(-5.5,10.8).closePath();
	this.shape_5.setTransform(39.2,-20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#42404D").beginStroke().moveTo(-2.7,5.1).curveTo(-4.3,5.1,-5.4,4).curveTo(-6.5,2.9,-6.5,1.4).lineTo(-6.5,-1.3).curveTo(-6.5,-2.9,-5.4,-4).curveTo(-4.3,-5.1,-2.7,-5.1).lineTo(2.8,-5.1).curveTo(4.3,-5.1,5.4,-4).curveTo(6.5,-2.8,6.5,-1.3).lineTo(6.5,1.4).curveTo(6.5,2.9,5.4,4).curveTo(4.3,5.1,2.8,5.1).closePath().moveTo(-4.1,-2.7).curveTo(-4.7,-2.1,-4.6,-1.3).lineTo(-4.6,1.4).curveTo(-4.7,2.1,-4.1,2.7).curveTo(-3.6,3.2,-2.7,3.3).lineTo(2.8,3.3).curveTo(3.5,3.2,4.1,2.7).curveTo(4.6,2.1,4.7,1.4).lineTo(4.7,-1.3).curveTo(4.6,-2.1,4.1,-2.7).curveTo(3.5,-3.3,2.8,-3.2).lineTo(-2.7,-3.2).curveTo(-3.6,-3.3,-4.1,-2.7).closePath();
	this.shape_6.setTransform(-0.2,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#231F20").beginStroke().moveTo(-31.8,3.3).lineTo(-31.8,-3.3).lineTo(31.8,-3.3).lineTo(31.8,3.3).closePath();
	this.shape_7.setTransform(-0.3,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#4B4C4C").beginStroke().moveTo(11.1,89.4).curveTo(6.4,88.1,6.4,85.7).curveTo(6.4,81.8,9.2,79.5).lineTo(5,-66).lineTo(-0.8,-66).lineTo(-9.1,79.5).curveTo(-6.4,81.9,-6.4,85.7).curveTo(-6.4,88.1,-11.1,89.4).curveTo(-15.3,90.7,-21.4,90.7).curveTo(-27.5,90.7,-31.7,89.4).curveTo(-36.4,88.1,-36.4,85.7).curveTo(-36.4,80.7,-31.7,78.2).lineTo(-29.6,-90.7).lineTo(33.9,-90.7).lineTo(31.8,78.2).curveTo(36.4,80.8,36.4,85.7).curveTo(36.4,88.1,31.7,89.4).curveTo(27.5,90.7,21.4,90.7).curveTo(15.3,90.7,11.1,89.4).closePath();
	this.shape_8.setTransform(-2.7,88.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#4B4C4C").beginStroke().moveTo(-12.6,2.3).lineTo(1.5,-12.6).lineTo(12.6,-6.9).lineTo(-4,12.6).closePath();
	this.shape_9.setTransform(12.7,-93.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#4B4C4C").beginStroke().moveTo(-12,-6.9).lineTo(-1.4,-12.6).lineTo(12.1,2.3).lineTo(3.9,12.6).closePath();
	this.shape_10.setTransform(-11.9,-93.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.3).curveTo(-3.3,1.3,-3.3,-0).curveTo(-3.3,-1.4,-2.3,-2.3).curveTo(-1.3,-3.3,-0,-3.3).curveTo(1.4,-3.3,2.3,-2.3).curveTo(3.3,-1.4,3.3,-0).curveTo(3.3,1.3,2.3,2.3).curveTo(1.4,3.3,-0,3.2).curveTo(-1.3,3.3,-2.3,2.3).closePath();
	this.shape_11.setTransform(10.8,-140.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.3).curveTo(-3.2,1.3,-3.2,-0).curveTo(-3.2,-1.4,-2.3,-2.3).curveTo(-1.3,-3.3,-0,-3.3).curveTo(1.3,-3.3,2.3,-2.3).curveTo(3.2,-1.4,3.2,-0).curveTo(3.2,1.3,2.3,2.3).curveTo(1.3,3.3,-0,3.2).curveTo(-1.3,3.3,-2.3,2.3).closePath();
	this.shape_12.setTransform(-11.2,-140.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#4B4C4C").beginStroke().moveTo(-6.4,7.1).curveTo(-9,4.5,-9,0.7).lineTo(-9,-9.7).lineTo(9,-9.7).lineTo(9,0.7).curveTo(9,4.5,6.3,7.1).curveTo(3.7,9.7,0,9.7).curveTo(-3.7,9.7,-6.4,7.1).closePath();
	this.shape_13.setTransform(19.1,-66.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.2,1.4).curveTo(-10.1,-0.4,-10.9,-3.2).lineTo(10.8,-3.2).curveTo(10.1,-0.4,7.1,1.4).curveTo(4.1,3.2,0,3.2).curveTo(-4,3.2,-7.2,1.4).closePath();
	this.shape_14.setTransform(-0.1,-122);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#0D0C0C").beginStroke().moveTo(23.2,19.7).curveTo(22.4,19.6,22.4,18.9).curveTo(22.2,11.9,20.6,7.2).curveTo(18.5,0.5,14.2,1.1).curveTo(6,2.3,0,2.3).curveTo(-6,2.3,-14.2,1.1).curveTo(-18.4,0.5,-20.6,7.2).curveTo(-22.2,11.9,-22.4,18.9).curveTo(-22.5,19.6,-23.1,19.7).curveTo(-23.9,19.8,-24.1,19.1).curveTo(-33,-19.3,0,-19.8).curveTo(32.9,-19.2,24.1,19.1).curveTo(23.9,19.8,23.3,19.8).lineTo(23.2,19.7).closePath();
	this.shape_15.setTransform(-0.6,-159.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#AAAAAA").beginStroke().moveTo(-13.8,25.9).curveTo(-21.5,18.7,-21.4,10.8).curveTo(-23.2,10.8,-24.5,9.5).curveTo(-25.7,8.3,-25.7,6.5).lineTo(-25.7,2.1).curveTo(-25.7,0,-24.2,-1.2).curveTo(-23.4,-1.8,-22.5,-2.1).lineTo(-23.1,-11.1).curveTo(-23.1,-19.9,-16,-26.3).curveTo(-9.1,-32.6,0,-32.6).curveTo(9,-32.6,16,-26.3).curveTo(23.1,-19.9,23.1,-11.1).lineTo(22.4,-2.1).curveTo(23.8,-1.7,24.8,-0.6).curveTo(25.7,0.6,25.7,2.1).lineTo(25.7,6.5).curveTo(25.7,8.3,24.5,9.5).curveTo(23.2,10.8,21.4,10.8).curveTo(21.4,18.7,13.8,25.9).curveTo(6.5,32.6,0,32.6).curveTo(-6.6,32.6,-13.8,25.9).closePath();
	this.shape_16.setTransform(-0.6,-141.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#656968").beginStroke().moveTo(-0,51.3).lineTo(-2.6,53.3).lineTo(-31.2,53.3).curveTo(-30.9,48.1,-31.4,39.1).lineTo(-36.5,-16).curveTo(-36.6,-15.9,-38.6,-17.2).curveTo(-41,-18.7,-42.8,-20.9).curveTo(-48.8,-27.7,-47.1,-37.4).curveTo(-46.1,-43.3,-36.1,-46.6).curveTo(-22.2,-50.2,-13.8,-53.3).lineTo(-0,-38.5).lineTo(13.8,-53.3).curveTo(18.6,-51.5,25.8,-49.5).lineTo(36.1,-46.6).curveTo(46.1,-43.3,47.1,-37.4).curveTo(48.8,-27.7,42.8,-20.9).curveTo(39.9,-17.4,36.5,-16).lineTo(31.4,39.1).curveTo(30.8,48.1,31.1,53.3).lineTo(2.5,53.3).closePath();
	this.shape_17.setTransform(0.4,-51.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#AAAAAA").beginStroke().moveTo(-10.3,22.4).lineTo(-10.3,18).lineTo(-12.7,18).lineTo(-13.5,-10.9).lineTo(-10.3,-12.3).lineTo(-10.3,-22.5).lineTo(10.3,-22.5).lineTo(10.3,-12.3).lineTo(13.5,-10.8).lineTo(12.6,18).lineTo(10.3,18).lineTo(10.3,22.4).closePath();
	this.shape_18.setTransform(-0.6,-93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#4B4C4C").beginStroke().moveTo(-15.8,-18.8).lineTo(6.2,-23.5).lineTo(15.8,17.2).lineTo(-1.5,23.5).closePath();
	this.shape_19.setTransform(-57.9,-62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#AAAAAA").beginStroke().moveTo(-12.5,-3).lineTo(9,-8.5).lineTo(12.5,4.5).lineTo(-4.5,8.5).closePath();
	this.shape_20.setTransform(-63.1,-93.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#979B9E").beginStroke().moveTo(-10.9,7.4).curveTo(-16.8,6.2,-18.2,2.4).lineTo(-17.4,1.4).curveTo(-12.4,5.1,-1.6,2.7).curveTo(9.9,0.1,15.9,-7.8).curveTo(17.3,-7.2,18.2,-7.3).curveTo(18.1,-2.3,12.9,1.7).curveTo(8.3,5.3,1.3,6.9).curveTo(-2.7,7.8,-6.3,7.8).curveTo(-8.7,7.8,-10.9,7.4).closePath();
	this.shape_21.setTransform(74.1,-82.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#656968").beginStroke().moveTo(-10.8,22.3).curveTo(-16.6,21.2,-18,17.3).curveTo(-12.5,10.5,-13.2,2.3).curveTo(-13.4,-0.3,-14.2,-2.7).lineTo(-14.9,-4.5).lineTo(-18.3,-17.4).lineTo(1.6,-22.8).lineTo(4.4,-9.7).curveTo(5.6,-1.5,10.8,3.6).curveTo(15,7.8,18.3,7.6).curveTo(18.2,12.7,13.1,16.7).curveTo(8.4,20.2,1.5,21.8).curveTo(-2.5,22.8,-6.1,22.8).curveTo(-8.5,22.8,-10.8,22.3).closePath();
	this.shape_22.setTransform(73.9,-97.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-87.3,10.6).lineTo(85.1,-18.5).lineTo(87.3,-10.6).lineTo(-85.2,18.5).closePath();
	this.shape_23.setTransform(-5,-99.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#656968").beginStroke().moveTo(-11,-8.2).lineTo(9.5,-6.2).lineTo(11,4.7).lineTo(-8,8.3).closePath();
	this.shape_24.setTransform(-64.6,-88);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#4B4C4C").beginStroke().moveTo(-12.1,16.2).lineTo(12.1,-25.6).lineTo(12.1,1.6).lineTo(5.8,25.7).closePath();
	this.shape_25.setTransform(-48.2,-70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-179.4,184.5,358.9);


(lib.platInterpolación1 = function(mode,startPosition,loop) {
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


(lib.plathandss = function(mode,startPosition,loop) {
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


(lib.platbosuque3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-0,11.3).curveTo(-1.8,13.3,-8.6,13.1).lineTo(-15.8,12.5).curveTo(-16.6,12.5,-15.6,11.1).lineTo(-14.5,9.7).curveTo(-8.6,4,-0.1,-13.1).lineTo(0,-13.1).curveTo(2.2,-8.5,5.3,-3.2).curveTo(10.5,6,14.4,9.7).curveTo(17,12.5,15.7,12.5).curveTo(11.9,13,8.5,13.1).lineTo(7.3,13.1).curveTo(1.6,13.1,-0,11.3).closePath();
	this.shape.setTransform(-54.6,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#303030").beginStroke().moveTo(-0,11.3).curveTo(-2.6,13.3,-12.4,13.1).lineTo(-22.9,12.5).curveTo(-24,12.5,-22.6,11.1).lineTo(-21,9.7).curveTo(-15.4,6,-7.7,-3.2).curveTo(-3.6,-8.1,-0.1,-13.1).lineTo(0,-13.1).curveTo(3.4,-8.2,7.7,-3.2).curveTo(15.3,6,20.9,9.7).curveTo(24.6,12.5,22.9,12.5).curveTo(17.3,13,12.3,13.1).lineTo(10.6,13.1).curveTo(2.3,13.1,-0,11.3).closePath();
	this.shape_1.setTransform(-54.6,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#303030").beginStroke().moveTo(0.1,11.2).curveTo(-9.7,16.1,-31.1,16.2).curveTo(-37.7,16.2,-45.7,15.7).lineTo(-53.5,15.2).curveTo(-56.1,15.2,-52.8,13.5).curveTo(-51.1,12.6,-49,11.8).curveTo(-35.8,7,-18,-4.4).curveTo(-8.1,-10.8,-0.2,-16.9).lineTo(0.2,-16.9).curveTo(8,-10.8,18,-4.4).curveTo(35.8,7,49,11.8).lineTo(52.8,13.5).curveTo(56.1,15.2,53.5,15.2).curveTo(41.7,16.6,30.6,16.9).lineTo(27.9,16.9).curveTo(8.3,16.9,0.1,11.2).closePath();
	this.shape_2.setTransform(-54.7,103.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#303030").beginStroke().moveTo(0,14.2).curveTo(-5.1,16.7,-24.3,16.4).lineTo(-44.9,15.6).curveTo(-47.1,15.6,-44.4,13.9).curveTo(-43,13.1,-41.1,12.2).curveTo(-30.1,7.5,-15.1,-4).curveTo(-6.4,-10.6,-0.2,-16.4).lineTo(0.2,-16.4).curveTo(6.5,-10.6,15.1,-4).curveTo(30.1,7.5,41.2,12.2).lineTo(44.4,13.9).curveTo(47.2,15.6,45,15.6).curveTo(34.1,16.3,24.3,16.4).lineTo(20.9,16.4).curveTo(4.6,16.4,0,14.2).closePath();
	this.shape_3.setTransform(-54.7,84.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#303030").beginStroke().moveTo(0,11.3).curveTo(-4.3,13.2,-20.5,13).lineTo(-37.8,12.4).curveTo(-39.7,12.4,-37.3,11.1).lineTo(-34.6,9.7).curveTo(-25.3,5.9,-12.7,-3.2).curveTo(-6.2,-7.9,-0.1,-13.1).lineTo(0.1,-13.1).curveTo(6.3,-7.9,12.7,-3.2).curveTo(25.3,5.9,34.6,9.7).lineTo(37.4,11.1).curveTo(39.7,12.4,37.8,12.4).curveTo(28.7,12.9,20.5,13).lineTo(17.5,13.1).curveTo(3.9,13.1,0,11.3).closePath();
	this.shape_4.setTransform(-54.7,66.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#303030").beginStroke().moveTo(0,11.3).curveTo(-3.2,13.3,-15.1,13.1).lineTo(-27.9,12.5).curveTo(-29.2,12.5,-27.5,11.1).curveTo(-26.7,10.4,-25.5,9.7).curveTo(-18.6,6,-9.4,-3.2).curveTo(-4.2,-8.3,-0.1,-13.1).lineTo(0.1,-13.1).curveTo(3.7,-8.7,9.4,-3.2).curveTo(18.6,5.9,25.5,9.7).lineTo(27.5,11.1).curveTo(29.3,12.5,27.9,12.5).curveTo(21.2,13,15.1,13.1).lineTo(12.9,13.1).curveTo(2.9,13.1,0,11.3).closePath();
	this.shape_5.setTransform(-54.7,49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#303030").beginStroke().moveTo(-5.9,27.4).lineTo(-5.9,-27.4).lineTo(5.9,-27.4).lineTo(5.9,27.4).closePath();
	this.shape_6.setTransform(-54.4,118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,0,109.3,145.5);


(lib.platbosque4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-2.9,1.9).curveTo(-4.6,0.7,-6.1,-1).lineTo(-7.3,-2.5).lineTo(-5.4,-3.1).curveTo(-3.1,-3.7,-1.1,-3.7).curveTo(5.5,-3.7,7.2,2.1).lineTo(7.2,2).curveTo(4.8,3.7,2.3,3.7).curveTo(-0.2,3.7,-2.9,1.9).closePath();
	this.shape.setTransform(-44.1,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#303030").beginStroke().moveTo(-3.6,0.7).curveTo(-4.7,-1,-5.4,-3.1).lineTo(-5.9,-5).lineTo(-3.9,-4.8).curveTo(-1.6,-4.5,0.3,-3.8).curveTo(6.3,-1.3,5.8,4.7).lineTo(5.8,4.7).curveTo(4.5,5,3.4,5).curveTo(-0.8,5,-3.6,0.7).closePath();
	this.shape_1.setTransform(-44.1,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#303030").beginStroke().moveTo(-7.3,-1.8).lineTo(-7.3,-1.8).curveTo(-2.6,-5.6,2.8,-1.9).curveTo(5.5,-0.1,7.3,2.5).curveTo(4.5,3.7,1.3,3.8).lineTo(1,3.8).curveTo(-5.2,3.8,-7.3,-1.8).closePath();
	this.shape_2.setTransform(-14.6,48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#303030").beginStroke().moveTo(-2.5,-2.5).curveTo(-1.7,-4.3,-0.2,-6.1).lineTo(1.1,-7.5).lineTo(2,-5.8).curveTo(3,-3.8,3.3,-1.8).curveTo(4.5,4.5,-0.8,7.5).lineTo(-0.8,7.6).curveTo(-5.3,3.5,-2.5,-2.5).closePath();
	this.shape_3.setTransform(-50,53.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-1.7).lineTo(0.4,-5.9).lineTo(2.4,-1.6).curveTo(3.7,3.3,-0.2,5.9).lineTo(-0.2,5.9).curveTo(-3.9,3,-2.1,-1.7).closePath();
	this.shape_4.setTransform(-54.9,81.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,2.7).lineTo(-5.8,1.1).lineTo(-2,-1.8).curveTo(2.4,-4.1,5.8,-0.9).curveTo(4.1,2.8,0.2,2.8).lineTo(-1.2,2.7).closePath();
	this.shape_5.setTransform(-63.7,87.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,3.5).curveTo(-3.6,3.2,-5.8,2.3).lineTo(-7.5,1.5).lineTo(-6.1,0.1).curveTo(-4.5,-1.4,-2.6,-2.3).curveTo(3.1,-5.3,7.5,-1.1).lineTo(7.5,-1.1).curveTo(5.3,3.6,0.2,3.6).lineTo(-1.5,3.5).closePath();
	this.shape_6.setTransform(-61.1,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#303030").beginStroke().moveTo(-7.4,-1.2).lineTo(-7.5,-1.2).curveTo(-3.1,-5.4,2.6,-2.3).curveTo(5.5,-0.7,7.5,1.7).curveTo(4.8,3.1,1.6,3.5).lineTo(0.2,3.6).curveTo(-5.1,3.6,-7.4,-1.2).closePath();
	this.shape_7.setTransform(-9,87.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,-0.9).curveTo(-3.9,-2.9,-3.5,-5.2).lineTo(-3,-7.1).lineTo(-1.4,-6.1).curveTo(0.4,-4.6,1.7,-3.1).curveTo(5.7,2,2.4,7.1).lineTo(2.4,7.1).curveTo(-3.4,5.6,-3.8,-0.9).closePath();
	this.shape_8.setTransform(-16,75.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#303030").beginStroke().moveTo(-3.4,-1.5).curveTo(-3.1,-3.6,-2.3,-5.8).lineTo(-1.4,-7.5).lineTo(-0.1,-6.1).curveTo(1.4,-4.4,2.4,-2.6).curveTo(5.3,3.1,1.1,7.5).lineTo(1.2,7.5).curveTo(-4.3,4.9,-3.4,-1.5).closePath();
	this.shape_9.setTransform(-22.6,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,0.7).curveTo(-4.1,-0.8,-4.7,-2.7).lineTo(-5.3,-4.4).lineTo(0.1,-3.4).curveTo(5.4,-1.4,5.2,4).lineTo(5.2,4).curveTo(4,4.4,2.9,4.4).curveTo(-0.6,4.4,-3.1,0.7).closePath();
	this.shape_10.setTransform(-67.7,78.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#303030").beginStroke().moveTo(-3.6,0.6).curveTo(-4.5,-1.3,-5.1,-3.6).lineTo(-5.4,-5.5).lineTo(-3.5,-5.1).curveTo(-1.3,-4.6,0.5,-3.7).curveTo(6.2,-0.6,5.2,5.3).lineTo(5.3,5.4).lineTo(3.6,5.5).curveTo(-1.1,5.5,-3.6,0.6).closePath();
	this.shape_11.setTransform(-62.5,50.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-3.5).curveTo(1.9,-5.3,5,-5.9).lineTo(4.8,-4).curveTo(4.6,-1.7,3.8,0.1).curveTo(1.5,6.2,-4.5,5.9).lineTo(-4.6,5.9).curveTo(-6.2,0.1,-0.8,-3.5).closePath();
	this.shape_12.setTransform(-5,73.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-3.5).curveTo(1.9,-5.3,5,-5.9).lineTo(4.8,-4).curveTo(4.6,-1.7,3.8,0.1).curveTo(1.5,6.1,-4.5,5.9).lineTo(-4.6,5.9).curveTo(-6.3,0.1,-0.8,-3.5).closePath();
	this.shape_13.setTransform(-11.9,34);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#303030").beginStroke().moveTo(-5,3.5).curveTo(-5.1,-1.4,-0,-3.1).curveTo(2.5,-4,5,-3.8).curveTo(4.4,-1.4,2.9,0.7).curveTo(0.5,3.9,-2.7,3.9).curveTo(-3.8,3.9,-5,3.5).closePath();
	this.shape_14.setTransform(-32.6,34.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#303030").beginStroke().moveTo(-5.8,4.7).curveTo(-6.3,-1.3,-0.3,-3.8).curveTo(2.8,-5,5.9,-5).curveTo(5.3,-2,3.6,0.7).curveTo(0.8,5,-3.5,5).curveTo(-4.6,5,-5.8,4.7).closePath();
	this.shape_15.setTransform(-31.2,20.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#303030").beginStroke().moveTo(-2.9,-2.1).curveTo(-2.3,-4,-1,-6).lineTo(0.1,-7.6).lineTo(1.2,-6).curveTo(2.4,-4.1,3,-2.1).curveTo(4.9,4,-0,7.6).lineTo(-0,7.6).curveTo(-5,4.1,-2.9,-2.1).closePath();
	this.shape_16.setTransform(-37.5,7.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#303030").beginStroke().moveTo(-9.5,8.8).lineTo(9,-17.2).lineTo(9.5,-13.8).lineTo(-9.5,17.2).closePath();
	this.shape_17.setTransform(-24.5,52.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#303030").beginStroke().moveTo(-13.7,-8).lineTo(-13.7,-10.2).lineTo(12.8,5.4).lineTo(13.7,10.2).closePath();
	this.shape_18.setTransform(-50.7,90.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#303030").beginStroke().moveTo(-11.3,-10.7).lineTo(-10.5,-14.7).lineTo(11.3,7.1).lineTo(9.6,14.7).closePath();
	this.shape_19.setTransform(-48.4,65.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#303030").beginStroke().moveTo(-13.4,7.3).curveTo(7.5,-11.9,9.2,-14.4).curveTo(10.3,-16,11.9,-15.7).curveTo(12.8,-15.5,13.4,-15).lineTo(-12.6,15.7).closePath();
	this.shape_20.setTransform(-19.5,91.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#303030").beginStroke().moveTo(-7.5,82.2).lineTo(-5.9,-82.2).lineTo(-4.2,-77.3).lineTo(7.5,82.2).closePath();
	this.shape_21.setTransform(-32.9,92.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,0,73,174.6);


(lib.platbosque2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,1.4).lineTo(-5.5,-2).lineTo(-0.8,-2.8).curveTo(4.1,-2.8,5.5,1.5).lineTo(5.4,1.5).curveTo(3.6,2.8,1.7,2.8).curveTo(-0.2,2.8,-2.2,1.4).closePath();
	this.shape.setTransform(-58.7,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0.5).lineTo(-4.4,-3.8).lineTo(0.2,-2.8).curveTo(4.8,-1,4.4,3.6).lineTo(4.4,3.5).curveTo(3.4,3.8,2.6,3.8).curveTo(-0.6,3.8,-2.7,0.5).closePath();
	this.shape_1.setTransform(-58.7,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,-1.7).lineTo(-6.8,-1.7).curveTo(-2.4,-5.3,2.7,-1.8).curveTo(5.2,-0.1,6.8,2.3).curveTo(4.2,3.4,1.2,3.5).lineTo(1,3.5).curveTo(-4.9,3.5,-6.8,-1.7).closePath();
	this.shape_2.setTransform(-33,60.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#303030").beginStroke().moveTo(-3.2,-1.4).curveTo(-3,-3.4,-2.2,-5.4).lineTo(-1.4,-7).lineTo(-0.1,-5.8).curveTo(1.3,-4.2,2.2,-2.4).curveTo(4.9,2.9,1,6.9).lineTo(1,7).curveTo(-4.1,4.6,-3.2,-1.4).closePath();
	this.shape_3.setTransform(-40.4,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-3.3).curveTo(1.8,-4.9,4.7,-5.5).lineTo(4.6,-3.7).curveTo(4.3,-1.6,3.6,0.1).curveTo(1.4,5.7,-4.2,5.5).lineTo(-4.3,5.5).curveTo(-5.8,0.1,-0.7,-3.3).closePath();
	this.shape_4.setTransform(-30.4,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#303030").beginStroke().moveTo(-8.9,8.2).lineTo(8.4,-16).lineTo(8.9,-12.9).lineTo(-8.9,16).closePath();
	this.shape_5.setTransform(-42.2,64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-1.8).lineTo(0.8,-5.7).lineTo(2.5,-1.4).curveTo(3.4,3.4,-0.6,5.6).lineTo(-0.6,5.7).curveTo(-4,2.6,-1.9,-1.8).closePath();
	this.shape_6.setTransform(-62.3,73.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,2.6).lineTo(-5.7,1.1).lineTo(-2,-1.8).curveTo(2.3,-4,5.6,-0.9).lineTo(5.7,-0.9).curveTo(4,2.7,0.2,2.7).lineTo(-1.2,2.6).closePath();
	this.shape_7.setTransform(-70.8,79.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0.4).lineTo(-4.1,-4.2).lineTo(0.4,-2.8).curveTo(4.7,-0.5,4,4).lineTo(4,4).lineTo(2.7,4.2).curveTo(-0.9,4.2,-2.7,0.4).closePath();
	this.shape_8.setTransform(-71.8,70.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#303030").beginStroke().moveTo(-8.6,-8.1).lineTo(-7.9,-11.1).lineTo(8.5,5.4).lineTo(7.2,11.1).closePath();
	this.shape_9.setTransform(-61.1,82.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.2).lineTo(-0.2,-4.5).lineTo(1.7,-1.3).curveTo(2.9,2.2,0.1,4.4).lineTo(0.1,4.5).curveTo(-2.8,2.5,-1.8,-1.2).closePath();
	this.shape_10.setTransform(-67.8,51.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,2.1).lineTo(-4.4,1.3).lineTo(-1.7,-1.2).curveTo(1.5,-3.2,4.3,-1).lineTo(4.4,-1).curveTo(3.2,2.1,-0.3,2.1).lineTo(-0.8,2.1).closePath();
	this.shape_11.setTransform(-74,56.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.7).lineTo(-4.2,-3).lineTo(-0.1,-2.6).curveTo(4,-1.4,4.2,2.6).lineTo(4.2,2.6).curveTo(3.1,3,2.1,3).curveTo(-0.4,3,-2.3,0.7).closePath();
	this.shape_12.setTransform(-77.7,50.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#303030").beginStroke().moveTo(-10.9,-5.1).lineTo(-11,-6.8).lineTo(10,3.2).lineTo(11,6.8).closePath();
	this.shape_13.setTransform(-64.1,58.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,-1.3).lineTo(0.3,-4.5).lineTo(1.8,-1.2).curveTo(2.8,2.5,-0.2,4.4).lineTo(-0.2,4.5).curveTo(-3,2.3,-1.6,-1.3).closePath();
	this.shape_14.setTransform(-65.6,94.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,2).lineTo(-4.4,0.8).lineTo(-1.6,-1.4).curveTo(1.8,-3.1,4.4,-0.7).lineTo(4.4,-0.7).curveTo(3.1,2.1,0.1,2.1).lineTo(-0.9,2).closePath();
	this.shape_15.setTransform(-72.2,98.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.5).lineTo(-4,-3.3).lineTo(0.1,-2.6).curveTo(4.1,-1,3.9,3).curveTo(3,3.3,2.2,3.3).curveTo(-0.5,3.3,-2.3,0.5).closePath();
	this.shape_16.setTransform(-75.3,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#303030").beginStroke().moveTo(-10.3,-6.1).lineTo(-10.4,-7.7).lineTo(9.7,4.1).lineTo(10.4,7.7).closePath();
	this.shape_17.setTransform(-62.5,101.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#303030").beginStroke().moveTo(-4.5,-0.9).lineTo(-4.5,-1).curveTo(-1.7,-3.4,1.7,-1.3).curveTo(3.4,-0.2,4.5,1.3).curveTo(2.8,2.1,0.8,2.2).lineTo(0.3,2.2).curveTo(-3.2,2.2,-4.5,-0.9).closePath();
	this.shape_18.setTransform(-35.4,103.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,-0.7).lineTo(-1.6,-4.4).lineTo(1.1,-1.8).curveTo(3.4,1.4,1.2,4.3).lineTo(1.2,4.4).curveTo(-2.3,3.3,-2.3,-0.7).closePath();
	this.shape_19.setTransform(-39.3,96.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#303030").beginStroke().moveTo(-3,3.4).lineTo(-3,3.4).curveTo(-3.8,-0.1,-0.4,-2.1).curveTo(1.3,-3.1,3.2,-3.4).curveTo(3.1,-1.6,2.3,0.2).curveTo(0.8,3.4,-2.3,3.4).lineTo(-3,3.4).closePath();
	this.shape_20.setTransform(-32.5,95.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#303030").beginStroke().moveTo(-8.5,4.1).curveTo(4.8,-6.9,5.9,-8.4).curveTo(6.6,-9.3,7.6,-9.1).curveTo(8.1,-8.9,8.5,-8.6).lineTo(-8.2,9.1).closePath();
	this.shape_21.setTransform(-41.8,106);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#303030").beginStroke().moveTo(-0.2,2.9).curveTo(-4.7,0.9,-4.3,-3.7).lineTo(-4.3,-3.7).curveTo(0.1,-4.7,2.7,-0.5).curveTo(4,1.6,4.3,3.9).curveTo(2,3.9,-0.2,2.9).closePath();
	this.shape_22.setTransform(-31.5,81.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.9).lineTo(1.1,-5.7).lineTo(2.6,-1.3).curveTo(3.3,3.5,-0.7,5.6).lineTo(-0.8,5.7).curveTo(-4,2.5,-1.8,-1.9).closePath();
	this.shape_23.setTransform(-31.7,70.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#303030").beginStroke().moveTo(-5.4,1.8).lineTo(-5.4,1.8).curveTo(-4.3,-2.6,0.7,-2.9).curveTo(3.1,-3,5.4,-2.2).curveTo(4.2,-0.2,2.4,1.3).curveTo(0.2,2.9,-1.9,2.9).curveTo(-3.6,2.9,-5.4,1.8).closePath();
	this.shape_24.setTransform(-23.1,73.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#303030").beginStroke().moveTo(-11.7,0).curveTo(9.3,-4.5,11.4,-5.5).curveTo(12.7,-6.1,13.6,-5.3).curveTo(14.1,-4.8,14.3,-4.3).lineTo(-14.3,5.8).closePath();
	this.shape_25.setTransform(-39.7,79.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#303030").beginStroke().moveTo(-3.7,2.6).lineTo(-3.8,2.6).curveTo(-3.9,-1.1,-0.1,-2.4).curveTo(1.9,-3,3.8,-2.9).curveTo(3.3,-1.1,2.2,0.5).curveTo(0.4,2.9,-2,2.9).curveTo(-2.8,2.9,-3.7,2.6).closePath();
	this.shape_26.setTransform(-50,50.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,3.5).lineTo(-4.4,3.5).curveTo(-4.8,-1,-0.2,-2.9).curveTo(2.1,-3.8,4.5,-3.8).curveTo(4,-1.5,2.7,0.5).curveTo(0.6,3.8,-2.6,3.8).curveTo(-3.4,3.8,-4.4,3.5).closePath();
	this.shape_27.setTransform(-48.9,40);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,-1.6).lineTo(0.1,-5.8).lineTo(2.3,-1.6).curveTo(3.7,3,-0,5.7).lineTo(-0,5.7).curveTo(-3.7,3.1,-2.2,-1.6).closePath();
	this.shape_28.setTransform(-53.7,30.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#303030").beginStroke().moveTo(-5.7,61.4).lineTo(-4.5,-61.4).lineTo(-3.2,-57.7).lineTo(5.7,61.4).closePath();
	this.shape_29.setTransform(-50.2,93.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-8,-19.2,-0,-19.2).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(7.9,19.1,-0,19.2).curveTo(-8,19.1,-13.5,13.5).closePath();
	this.shape_30.setTransform(-52.2,73.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#303030").beginStroke().moveTo(-8.9,8.8).curveTo(-12.5,5.2,-12.5,0).curveTo(-12.5,-5.2,-8.9,-8.9).curveTo(-5.2,-12.5,0,-12.5).curveTo(5.2,-12.5,8.9,-8.9).curveTo(12.5,-5.2,12.5,0).curveTo(12.5,5.2,8.9,8.8).curveTo(5.2,12.5,0,12.5).curveTo(-5.2,12.5,-8.9,8.8).closePath();
	this.shape_31.setTransform(-35.5,27.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,14).curveTo(-19.2,8.2,-19.2,0).curveTo(-19.2,-8.1,-13.5,-13.9).curveTo(-7.9,-19.8,0,-19.8).curveTo(8,-19.8,13.6,-13.9).curveTo(19.2,-8.2,19.2,0).curveTo(19.2,8.2,13.6,14).curveTo(8,19.7,0,19.7).curveTo(-7.9,19.7,-13.5,14).closePath();
	this.shape_32.setTransform(-35.5,45.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.6).curveTo(-19.2,7.9,-19.2,-0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-8,-19.2,-0,-19.2).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,-0).curveTo(19.2,7.9,13.6,13.6).curveTo(7.9,19.2,-0,19.2).curveTo(-8,19.2,-13.5,13.6).closePath();
	this.shape_33.setTransform(-21.7,60);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,7.9,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.1,0,-19.1).curveTo(8,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,7.9,13.6,13.5).curveTo(8,19.1,0,19.1).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_34.setTransform(-19.2,83);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#303030").beginStroke().moveTo(-8.3,8.3).curveTo(-11.8,4.9,-11.8,-0).curveTo(-11.8,-4.9,-8.3,-8.3).curveTo(-4.8,-11.8,0,-11.8).curveTo(4.9,-11.8,8.3,-8.3).curveTo(11.8,-4.9,11.8,-0).curveTo(11.8,4.9,8.3,8.3).curveTo(4.9,11.8,0,11.8).curveTo(-4.9,11.8,-8.3,8.3).closePath();
	this.shape_35.setTransform(-85.5,66.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#303030").beginStroke().moveTo(-8.4,8.3).curveTo(-11.8,4.9,-11.8,-0).curveTo(-11.8,-4.9,-8.4,-8.3).curveTo(-4.9,-11.8,0,-11.8).curveTo(4.9,-11.8,8.4,-8.3).curveTo(11.8,-4.8,11.8,-0).curveTo(11.8,4.9,8.4,8.3).curveTo(4.9,11.8,0,11.8).curveTo(-4.9,11.8,-8.4,8.3).closePath();
	this.shape_36.setTransform(-71.4,30.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,11.6).curveTo(-7,10.7,-9.7,6.7).curveTo(-12.5,2.6,-11.6,-2.2).curveTo(-10.7,-7,-6.7,-9.7).curveTo(-2.7,-12.5,2.2,-11.6).curveTo(7,-10.7,9.8,-6.7).curveTo(12.5,-2.7,11.6,2.1).curveTo(10.7,6.9,6.7,9.7).curveTo(3.6,11.8,0.2,11.8).curveTo(-1,11.8,-2.2,11.6).closePath();
	this.shape_37.setTransform(-37.5,88.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.2,-0,-19.1).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(7.9,19.1,-0,19.2).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_38.setTransform(-30.9,93.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.5).curveTo(-19.2,7.9,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.1,0,-19.1).curveTo(8,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,7.9,13.6,13.5).curveTo(8,19.1,0,19.1).curveTo(-8,19.1,-13.6,13.5).closePath();
	this.shape_39.setTransform(-49.9,101);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.1,0,-19.2).curveTo(8,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(8,19.1,0,19.2).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_40.setTransform(-69.1,95.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.2,0,-19.1).curveTo(8,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(8,19.1,0,19.2).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_41.setTransform(-84.7,84.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#303030").beginStroke().moveTo(-3.2,18.9).curveTo(-11,17.6,-15.6,11.1).curveTo(-20.2,4.7,-19,-3.2).curveTo(-17.7,-11,-11.2,-15.6).curveTo(-4.7,-20.2,3.1,-18.9).curveTo(11,-17.6,15.6,-11.1).curveTo(20.2,-4.6,18.9,3.1).curveTo(17.6,11,11.1,15.6).curveTo(6.1,19.2,0.2,19.2).curveTo(-1.4,19.2,-3.2,18.9).closePath();
	this.shape_42.setTransform(-54.6,44.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,18.9).curveTo(-11,17.6,-15.6,11.1).curveTo(-20.2,4.7,-18.9,-3.2).curveTo(-17.6,-11,-11.1,-15.6).curveTo(-4.7,-20.2,3.2,-18.9).curveTo(11,-17.6,15.6,-11.1).curveTo(20.2,-4.7,18.9,3.2).curveTo(17.7,11,11.2,15.6).curveTo(6.1,19.2,0.3,19.2).curveTo(-1.4,19.2,-3.1,18.9).closePath();
	this.shape_43.setTransform(-73.4,52.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.6).curveTo(-19.2,8,-19.2,-0).curveTo(-19.2,-7.9,-13.6,-13.5).curveTo(-8,-19.2,0,-19.2).curveTo(8,-19.2,13.6,-13.5).curveTo(19.2,-7.9,19.2,-0).curveTo(19.2,8,13.6,13.6).curveTo(8,19.2,0,19.2).curveTo(-8,19.2,-13.6,13.6).closePath();
	this.shape_44.setTransform(-54,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.8,0,103.9,155.2);


(lib.platbosque1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.9).curveTo(0.6,-3.2,2.3,-4).lineTo(2.4,-0.4).curveTo(1.7,3.3,-1.8,3.9).lineTo(-1.8,4).curveTo(-3.4,0.9,-0.7,-1.9).closePath();
	this.shape.setTransform(-98.1,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.9).curveTo(0.6,-3.2,2.3,-4).lineTo(2.4,-0.4).curveTo(1.7,3.4,-1.8,3.9).lineTo(-1.8,4).curveTo(-3.4,0.9,-0.7,-1.9).closePath();
	this.shape_1.setTransform(-102.3,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.8).curveTo(0.6,-3.2,2.3,-4).lineTo(2.4,-0.4).curveTo(1.7,3.4,-1.7,3.9).lineTo(-1.8,3.9).curveTo(-3.4,0.9,-0.7,-1.8).closePath();
	this.shape_2.setTransform(-106.7,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,1.1).lineTo(-4.2,-1.6).lineTo(-0.6,-2.2).curveTo(3.1,-2.1,4.2,1.2).lineTo(4.2,1.2).curveTo(2.8,2.2,1.4,2.2).curveTo(-0.1,2.2,-1.7,1.1).closePath();
	this.shape_3.setTransform(-110.2,31.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,1.1).lineTo(-4.2,-1.6).lineTo(-0.6,-2.2).curveTo(3.1,-2.1,4.2,1.2).lineTo(4.2,1.2).curveTo(2.8,2.2,1.4,2.2).curveTo(-0.1,2.2,-1.7,1.1).closePath();
	this.shape_4.setTransform(-114.2,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#303030").beginStroke().moveTo(-1,2).lineTo(-4.4,0.7).lineTo(-1.5,-1.4).curveTo(1.9,-3.1,4.4,-0.5).lineTo(4.4,-0.5).curveTo(3.1,2.1,0.3,2.1).lineTo(-1,2).closePath();
	this.shape_5.setTransform(-106.4,38.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#303030").beginStroke().moveTo(8.4,15.8).curveTo(7.6,15.8,5.9,13.9).lineTo(3.7,11.4).curveTo(-0.6,7,-2.9,2.6).curveTo(-3.6,1.3,-5.7,-1.7).curveTo(-7.6,-4.4,-8.4,-6.1).curveTo(-9.4,-8.3,-10.1,-11.1).curveTo(-11,-14.9,-10.2,-15.9).curveTo(-9.9,-14.3,-8.9,-12.3).lineTo(-7.4,-9).curveTo(-6.7,-7.3,-5.4,-5.5).lineTo(-3,-2.2).curveTo(-1,0.4,1.9,5.4).curveTo(4.9,9.5,9.7,12.1).lineTo(9.8,12.1).curveTo(11.1,13,10.3,14.5).curveTo(9.7,15.9,8.5,15.9).lineTo(8.4,15.8).closePath();
	this.shape_6.setTransform(-101.6,32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,1.2).lineTo(-4.6,-1.6).lineTo(-0.8,-2.4).curveTo(3.2,-2.4,4.5,1.2).lineTo(4.6,1.2).curveTo(3.1,2.4,1.5,2.4).curveTo(-0.1,2.4,-1.8,1.2).closePath();
	this.shape_7.setTransform(-69.5,59.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,0.9).lineTo(-3.6,-1.3).lineTo(-0.6,-1.9).curveTo(2.6,-1.9,3.6,0.9).curveTo(2.5,1.9,1.2,1.9).curveTo(-0.1,1.9,-1.4,0.9).closePath();
	this.shape_8.setTransform(-72,52.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#303030").beginStroke().moveTo(-1.3,-1.3).lineTo(0.6,-3.9).lineTo(1.8,-0.9).curveTo(2.3,2.4,-0.4,3.9).lineTo(-0.4,3.9).curveTo(-2.7,1.8,-1.3,-1.3).closePath();
	this.shape_9.setTransform(-64.6,51.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.4).lineTo(0.2,-4.8).lineTo(1.9,-1.3).curveTo(3,2.6,-0.1,4.7).lineTo(-0.1,4.8).curveTo(-3.2,2.5,-1.8,-1.4).closePath();
	this.shape_10.setTransform(-69,44);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#303030").beginStroke().moveTo(-4.7,-0.6).lineTo(-4.7,-0.6).curveTo(-2.1,-3.3,1.6,-1.5).curveTo(3.4,-0.6,4.7,0.8).curveTo(3.1,1.8,1.1,2.1).lineTo(-0.2,2.2).curveTo(-3.2,2.2,-4.7,-0.6).closePath();
	this.shape_11.setTransform(-45,59.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,-1.6).lineTo(1,-4.7).lineTo(2.2,-1).curveTo(2.7,3,-0.7,4.7).curveTo(-3.4,2,-1.4,-1.6).closePath();
	this.shape_12.setTransform(-69,67.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,1.5).lineTo(-4,-0.1).lineTo(-1.1,-1.6).curveTo(2.1,-2.6,4,0).lineTo(4.1,0).curveTo(2.7,1.9,0.7,1.9).curveTo(-0.2,1.9,-1.1,1.5).closePath();
	this.shape_13.setTransform(-76.6,70.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,0.2).lineTo(-3.1,-3.7).lineTo(0.4,-2.2).curveTo(3.8,-0,2.9,3.7).lineTo(2.4,3.7).curveTo(-1,3.7,-2.4,0.2).closePath();
	this.shape_14.setTransform(-77.3,63);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.9).lineTo(-0.3,-3.6).lineTo(1.3,-1.1).curveTo(2.5,1.7,0.3,3.6).curveTo(-2.2,2.2,-1.5,-0.9).closePath();
	this.shape_15.setTransform(-49.9,52.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#303030").beginStroke().moveTo(-4,0.4).lineTo(-4.1,0.4).curveTo(-2.5,-2.5,1,-1.8).curveTo(2.7,-1.4,4.1,-0.5).curveTo(2.9,0.7,1.3,1.4).curveTo(0.2,1.9,-0.9,1.9).curveTo(-2.6,1.9,-4,0.4).closePath();
	this.shape_16.setTransform(-42.5,99.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.7).lineTo(-0.5,-3.5).lineTo(1.2,-1.2).curveTo(2.4,1.5,0.4,3.5).lineTo(0.4,3.5).curveTo(-2,2.2,-1.5,-0.7).closePath();
	this.shape_17.setTransform(-46.3,93);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-2.1).curveTo(0.8,-3.4,2.7,-4.1).lineTo(2.5,-0.3).curveTo(1.7,3.7,-2.1,4.1).lineTo(-2.1,4.1).curveTo(-3.7,0.7,-0.7,-2.1).closePath();
	this.shape_18.setTransform(-39.5,87.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,4.1).curveTo(-3.7,0.6,-0.7,-2).curveTo(0.8,-3.4,2.7,-4.1).lineTo(2.5,-0.2).curveTo(1.6,3.7,-2.1,4.1).closePath();
	this.shape_19.setTransform(-44.1,49);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,0.1).lineTo(-3,-3.8).lineTo(0.5,-2.2).curveTo(3.8,0.1,2.7,3.8).lineTo(2.5,3.8).curveTo(-1.1,3.8,-2.4,0.1).closePath();
	this.shape_20.setTransform(-63.5,39.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,-2).curveTo(0.4,-3.5,2.2,-4.4).lineTo(2.5,-0.5).curveTo(2,3.5,-1.7,4.3).lineTo(-1.7,4.4).curveTo(-3.6,1.1,-0.9,-2).closePath();
	this.shape_21.setTransform(-57.1,43.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#303030").beginStroke().moveTo(-2,-1.2).lineTo(-0.3,-4.8).lineTo(1.7,-1.4).curveTo(3.2,2.3,0.2,4.8).curveTo(-3,2.7,-2,-1.2).closePath();
	this.shape_22.setTransform(-60.1,32.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#303030").beginStroke().moveTo(-2.5,-0.3).lineTo(-2.4,-4.3).lineTo(0.8,-2).curveTo(3.6,0.8,1.9,4.3).curveTo(-1.9,3.7,-2.5,-0.3).closePath();
	this.shape_23.setTransform(-74,39.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.7).lineTo(-1.4,-4.2).lineTo(1.1,-1.7).curveTo(3.2,1.4,1.1,4.2).curveTo(-2.2,3.1,-2.1,-0.7).closePath();
	this.shape_24.setTransform(-12.9,18);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,-0.4).curveTo(-2.1,-3,1.4,-1.5).curveTo(3.1,-0.8,4.4,0.5).curveTo(2.9,1.5,1.1,1.9).curveTo(0.3,2.1,-0.4,2.1).curveTo(-2.9,2.1,-4.4,-0.4).closePath();
	this.shape_25.setTransform(-10.2,25.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,2.1).lineTo(-3.8,2.1).curveTo(-3.6,-1.4,0.2,-2.2).curveTo(2,-2.7,3.8,-2.5).curveTo(3.2,-0.7,2,0.7).curveTo(0.3,2.5,-1.7,2.5).curveTo(-2.7,2.5,-3.8,2.1).closePath();
	this.shape_26.setTransform(-5.6,16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#303030").beginStroke().moveTo(-1,-1.8).curveTo(0.2,-3.2,1.8,-4.1).lineTo(2.3,-0.5).curveTo(2,3.1,-1.4,4.1).lineTo(-1.4,4.1).curveTo(-3.4,1.1,-1,-1.8).closePath();
	this.shape_27.setTransform(-5.5,7.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#303030").beginStroke().moveTo(-8.5,11).lineTo(-8.5,11).curveTo(-0.3,5.1,3.4,-0.6).curveTo(5,-3,6.4,-6.5).lineTo(8.9,-12.4).curveTo(8.9,-8.7,7,-4).curveTo(5.2,0.5,2.7,3.6).curveTo(1.8,4.6,-0.1,6.5).curveTo(-2.1,8.4,-3,9.4).curveTo(-4,10.6,-6.8,11.9).curveTo(-7.9,12.4,-8.5,12.4).curveTo(-9.3,12.4,-8.5,11).closePath();
	this.shape_28.setTransform(-15.5,21.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,5.3).lineTo(6.4,-13.1).lineTo(6.7,-10.7).lineTo(-5.2,13.1).closePath();
	this.shape_29.setTransform(-52,63);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#303030").beginStroke().moveTo(-8.4,-10).lineTo(-7.8,-13.1).lineTo(8.4,7).lineTo(7,13.1).closePath();
	this.shape_30.setTransform(-67.7,76.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,-11.8).lineTo(-6,-13.3).lineTo(6.8,7.7).lineTo(5.4,13.3).closePath();
	this.shape_31.setTransform(-66.5,55.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#303030").beginStroke().moveTo(-8.1,6.2).lineTo(7.6,-12.7).lineTo(8.1,-11.1).lineTo(-6.7,12.7).closePath();
	this.shape_32.setTransform(-48.7,102.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#303030").beginStroke().moveTo(-6,54.1).lineTo(-4.7,-54.1).lineTo(-2.4,-53.2).lineTo(6,54.1).closePath();
	this.shape_33.setTransform(-56.5,88.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#303030").beginStroke().moveTo(-32,46.7).curveTo(-35.4,44.9,-37.6,41.8).curveTo(-40.8,43.4,-44.6,43.4).curveTo(-51.2,43.4,-55.8,38.7).curveTo(-60.6,34.1,-60.6,27.4).curveTo(-60.5,21.1,-56.3,16.5).curveTo(-58.8,14.3,-60.2,11.2).curveTo(-61.7,8.1,-61.7,4.6).curveTo(-61.7,-1,-58.3,-5.3).curveTo(-55,-9.6,-49.8,-10.9).curveTo(-51.6,-13.3,-51.6,-16.4).curveTo(-51.6,-19.6,-49.6,-22.1).curveTo(-47.6,-24.6,-44.6,-25.3).curveTo(-46.3,-28.7,-46.3,-32.5).curveTo(-46.3,-39.2,-41.6,-43.9).curveTo(-36.9,-48.5,-30.3,-48.5).curveTo(-26.6,-48.6,-23.3,-46.9).curveTo(-20.1,-45.4,-17.9,-42.7).curveTo(-14.2,-44.6,-10.3,-44.6).curveTo(-6.8,-44.6,-3.7,-43.1).curveTo(-0.6,-41.7,1.5,-39.3).curveTo(4,-41.2,7.1,-41.2).curveTo(8.5,-41.2,10,-40.6).curveTo(12.2,-43,15.3,-44.3).curveTo(18.3,-45.7,21.7,-45.7).curveTo(26.1,-45.7,29.8,-43.5).curveTo(33.4,-41.4,35.5,-37.7).curveTo(39.5,-40.5,44.5,-40.5).curveTo(51.2,-40.5,55.9,-35.8).curveTo(60.5,-31.2,60.5,-24.5).curveTo(60.5,-19.1,57.1,-14.6).curveTo(61.7,-10,61.7,-3.5).curveTo(61.7,-0.1,60.3,3.1).curveTo(58.9,6.1,56.6,8.3).curveTo(57.1,10.4,57.1,12.6).curveTo(57.1,19.2,52.4,23.8).curveTo(47.8,28.6,41.1,28.6).lineTo(39.9,28.5).lineTo(39.9,30.2).curveTo(40,36.9,35.3,41.5).curveTo(30.6,46.2,24,46.2).curveTo(20,46.2,16.4,44.4).curveTo(13,42.5,10.9,39.4).curveTo(6.8,42.2,1.7,42.3).lineTo(1.3,42.3).lineTo(1.1,42.5).lineTo(1.1,42.3).curveTo(-5,42.1,-9.5,37.8).curveTo(-11.1,42.5,-15.2,45.5).curveTo(-19.4,48.5,-24.6,48.6).curveTo(-28.6,48.6,-32,46.7).closePath();
	this.shape_34.setTransform(-61.7,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.4,0,123.4,142.6);


(lib.platbosque = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,-1.8).curveTo(-0,-3.4,1.6,-4.5).lineTo(2.3,-0.8).curveTo(2.4,3.2,-1.1,4.4).lineTo(-1.1,4.5).curveTo(-3.4,1.5,-1.2,-1.8).closePath();
	this.shape.setTransform(-405.5,141.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,0.7).lineTo(-4.3,-3.2).lineTo(-0.2,-2.7).curveTo(4.1,-1.4,4.3,2.7).lineTo(4.3,2.7).curveTo(3.2,3.1,2.1,3.1).curveTo(-0.4,3.1,-2.4,0.7).closePath();
	this.shape_1.setTransform(-412.9,139.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#303030").beginStroke().moveTo(-2,-1.4).lineTo(0,-5.2).lineTo(2,-1.5).curveTo(3.3,2.7,-0,5.2).lineTo(-0,5.2).curveTo(-3.4,2.8,-2,-1.4).closePath();
	this.shape_2.setTransform(-409.5,131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,2.4).curveTo(-2.8,-0.2,-0.3,-1.6).curveTo(1,-2.2,2.3,-2.4).curveTo(2.2,-1,1.6,0.2).curveTo(0.5,2.4,-1.6,2.4).lineTo(-2.3,2.4).closePath();
	this.shape_3.setTransform(-381.1,189.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,2.4).curveTo(-2.8,-0.2,-0.3,-1.6).curveTo(1,-2.2,2.3,-2.4).curveTo(2.2,-1,1.6,0.2).curveTo(0.5,2.4,-1.6,2.4).lineTo(-2.3,2.4).closePath();
	this.shape_4.setTransform(-382.4,183.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,2.3).lineTo(-2.3,2.4).curveTo(-2.8,-0.2,-0.3,-1.6).curveTo(1,-2.3,2.3,-2.4).curveTo(2.2,-1.1,1.6,0.2).curveTo(0.6,2.4,-1.6,2.4).lineTo(-2.3,2.3).closePath();
	this.shape_5.setTransform(-384.4,178.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,0.4).lineTo(-2.7,-2.1).lineTo(-0,-1.7).curveTo(2.6,-0.8,2.6,1.8).lineTo(2.7,1.8).curveTo(2,2.1,1.4,2.1).curveTo(-0.3,2.1,-1.5,0.4).closePath();
	this.shape_6.setTransform(-388.7,183.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,0.4).lineTo(-2.7,-2.1).lineTo(-0,-1.7).curveTo(2.6,-0.8,2.7,1.8).lineTo(2.7,1.8).curveTo(2,2.1,1.4,2.1).curveTo(-0.3,2.1,-1.5,0.4).closePath();
	this.shape_7.setTransform(-390,177.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,1).lineTo(-3.3,-0.7).lineTo(-0.7,-1.5).curveTo(2,-1.9,3.2,0.4).lineTo(3.3,0.4).curveTo(2.2,1.6,0.8,1.6).curveTo(-0.1,1.6,-1.1,1).closePath();
	this.shape_8.setTransform(-387.6,189.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.3).lineTo(0.1,-4.8).lineTo(1.9,-1.3).curveTo(3.1,2.5,-0,4.7).lineTo(-0,4.8).curveTo(-3.1,2.6,-1.8,-1.3).closePath();
	this.shape_9.setTransform(-387,170.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#303030").beginStroke().moveTo(2.7,13.3).curveTo(2.1,13.1,1.3,11.4).lineTo(0.3,9.1).curveTo(-1.6,5.2,-2.4,1.4).curveTo(-2.6,0.4,-3.5,-2.3).curveTo(-4.3,-4.6,-4.4,-6).curveTo(-4.6,-7.7,-4.5,-10).curveTo(-4.4,-12.8,-3.6,-13.4).curveTo(-3.7,-12.2,-3.4,-10.6).lineTo(-3,-7.9).curveTo(-2.8,-6,-1.4,-2.1).curveTo(-0.6,0.3,0.7,5).curveTo(2,8.7,4.5,10.7).curveTo(4.7,11.5,4.2,12.4).curveTo(3.7,13.4,3,13.4).lineTo(2.7,13.3).closePath();
	this.shape_10.setTransform(-383.1,186.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.9).lineTo(-0.7,-4.1).lineTo(1.3,-1.4).curveTo(2.9,1.8,0.5,4.1).curveTo(-2.4,2.6,-1.9,-0.9).closePath();
	this.shape_11.setTransform(-373.7,142.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.9).lineTo(-0.7,-4.1).lineTo(1.3,-1.4).curveTo(2.9,1.8,0.5,4.1).lineTo(0.5,4.1).curveTo(-2.5,2.6,-1.9,-0.9).closePath();
	this.shape_12.setTransform(-381,139.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.9).lineTo(-0.7,-4.1).lineTo(1.3,-1.4).curveTo(2.9,1.8,0.5,4.1).lineTo(0.5,4.1).curveTo(-2.5,2.6,-1.9,-0.9).closePath();
	this.shape_13.setTransform(-387.3,137.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,2).lineTo(-4,1.3).lineTo(-1.6,-1.1).curveTo(1.3,-3,4,-1).curveTo(3,2,-0.4,2).lineTo(-0.7,2).closePath();
	this.shape_14.setTransform(-386.3,145.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,2).lineTo(-4,1.3).lineTo(-1.6,-1).curveTo(1.4,-3,4,-1).lineTo(4,-1).curveTo(3,2,-0.5,2).lineTo(-0.7,2).closePath();
	this.shape_15.setTransform(-393,142.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#303030").beginStroke().moveTo(-2,-0.3).curveTo(-0.3,-3.4,3,-2.8).curveTo(3.5,0.5,0.2,2).lineTo(-3.1,2.9).closePath();
	this.shape_16.setTransform(-379.3,148.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#303030").beginStroke().moveTo(-2.8,0.6).lineTo(-4.7,-3.9).lineTo(0.1,-3).curveTo(4.8,-1.2,4.6,3.6).lineTo(4.7,3.6).curveTo(3.6,3.9,2.6,3.9).curveTo(-0.6,3.9,-2.8,0.6).closePath();
	this.shape_17.setTransform(-397.7,133.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#303030").beginStroke().moveTo(12.4,7).lineTo(9.4,6.2).curveTo(3.9,5.1,-0.4,3).curveTo(-1.6,2.4,-4.9,1.2).curveTo(-7.8,0.2,-9.3,-0.7).curveTo(-11.3,-1.9,-13.3,-3.7).curveTo(-16.1,-6.1,-16,-7.3).curveTo(-14.8,-6.3,-13.1,-5.3).lineTo(-10.1,-3.6).curveTo(-8,-2.3,-3.1,-0.7).curveTo(-0.1,0.3,5.6,2.7).curveTo(10.3,4.3,14.3,3.3).curveTo(15.2,3.7,15.7,4.9).curveTo(16.4,6.5,15.4,7.1).curveTo(15.2,7.3,14.6,7.3).curveTo(13.8,7.3,12.4,7).closePath();
	this.shape_18.setTransform(-379.2,142.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,-0.2).lineTo(-2.5,-4).lineTo(0.7,-2).curveTo(3.5,0.7,2,4).lineTo(2,4).curveTo(-1.6,3.7,-2.4,-0.2).closePath();
	this.shape_19.setTransform(-352.9,133);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#303030").beginStroke().moveTo(-4.6,0.5).lineTo(-4.6,0.5).curveTo(-2.8,-2.8,1,-2).curveTo(3,-1.6,4.6,-0.6).curveTo(3.3,0.8,1.6,1.5).curveTo(0.2,2.1,-1,2.1).curveTo(-3,2.1,-4.6,0.5).closePath();
	this.shape_20.setTransform(-348.5,140.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#303030").beginStroke().moveTo(-3.3,3.1).curveTo(-3.8,-0.5,-0.2,-2.2).curveTo(1.5,-3.1,3.4,-3.2).curveTo(3.2,-1.4,2.2,0.3).curveTo(0.6,3.2,-2.2,3.2).lineTo(-3.3,3.1).closePath();
	this.shape_21.setTransform(-345.9,130);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,-1.6).lineTo(0.9,-4.5).lineTo(2.1,-1).curveTo(2.7,2.9,-0.6,4.6).curveTo(-3.2,2,-1.4,-1.6).closePath();
	this.shape_22.setTransform(-347.7,120.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#303030").beginStroke().moveTo(-6,13.2).lineTo(-6.5,13).curveTo(0.4,5.5,3.1,-1.4).curveTo(4.2,-4.2,4.9,-8).lineTo(6.1,-14.7).curveTo(6.9,-10.9,6,-5.6).curveTo(5.2,-0.7,3.3,3).curveTo(2.7,4.2,1.1,6.6).curveTo(-0.5,8.9,-1.2,10.2).curveTo(-2,11.7,-4.3,13.7).curveTo(-5.5,14.7,-5.9,14.7).curveTo(-6.5,14.7,-6,13.2).closePath();
	this.shape_23.setTransform(-354.5,137.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,-1.4).lineTo(0.4,-4.6).lineTo(1.9,-1.2).curveTo(2.8,2.7,-0.3,4.6).curveTo(-3.1,2.2,-1.6,-1.4).closePath();
	this.shape_24.setTransform(-341.3,191);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#303030").beginStroke().moveTo(0.4,2.4).curveTo(-3.4,1.8,-4.1,-1.9).lineTo(-4.1,-1.9).curveTo(-0.8,-3.6,2,-0.8).curveTo(3.3,0.6,4.1,2.3).curveTo(3.1,2.5,2,2.5).lineTo(0.4,2.4).closePath();
	this.shape_25.setTransform(-341.4,199.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#303030").beginStroke().moveTo(-4.5,0.7).curveTo(-2.9,-2.6,0.9,-2.1).curveTo(2.9,-1.8,4.5,-0.8).curveTo(3.3,0.6,1.6,1.4).curveTo(0.2,2.1,-1.1,2.1).curveTo(-3,2.1,-4.5,0.7).closePath();
	this.shape_26.setTransform(-333.5,192.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#303030").beginStroke().moveTo(-3,3.4).lineTo(-3.1,3.4).curveTo(-3.8,-0.2,-0.4,-2.2).curveTo(1.4,-3.1,3.2,-3.4).curveTo(3.1,-1.5,2.3,0.2).curveTo(0.8,3.4,-2.3,3.4).lineTo(-3,3.4).closePath();
	this.shape_27.setTransform(-329.8,183.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#303030").beginStroke().moveTo(-12.3,7.5).lineTo(-12.6,7.1).curveTo(-2.6,4.7,3.4,0.4).curveTo(5.8,-1.3,8.6,-4.1).lineTo(13.2,-8.9).curveTo(11.8,-5.3,8.2,-1.4).curveTo(4.7,2.2,1.1,4.2).curveTo(-0.1,4.9,-2.7,5.9).curveTo(-5.4,7,-6.6,7.7).curveTo(-8.2,8.5,-11.3,8.9).lineTo(-12.3,8.9).curveTo(-14.2,8.9,-12.3,7.5).closePath();
	this.shape_28.setTransform(-345,194.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#303030").beginStroke().moveTo(-4.3,1.8).lineTo(-1.9,-1).curveTo(1.2,-3.4,4.3,-1.4).lineTo(4.3,-1.5).curveTo(3.4,2.1,-0.5,2.3).closePath();
	this.shape_29.setTransform(-376.4,167);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,-1.3).lineTo(0.2,-4.6).lineTo(1.8,-1.3).curveTo(2.9,2.5,-0.1,4.6).lineTo(-0.1,4.6).curveTo(-3.1,2.4,-1.7,-1.3).closePath();
	this.shape_30.setTransform(-368.8,163.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0).lineTo(-2.8,-3.8).lineTo(0.6,-2.1).curveTo(3.7,0.3,2.5,3.7).lineTo(2.5,3.8).curveTo(-1.2,3.7,-2.3,0).closePath();
	this.shape_31.setTransform(-378.2,159.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,1.2).lineTo(-4.4,-1.6).lineTo(-0.7,-2.3).curveTo(3.2,-2.3,4.4,1.2).curveTo(3,2.3,1.4,2.3).curveTo(-0.1,2.3,-1.7,1.2).closePath();
	this.shape_32.setTransform(-387.8,160.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#303030").beginStroke().moveTo(-1,-3.4).curveTo(-3.6,-4.8,-7.3,-6.1).lineTo(-13.7,-8.2).curveTo(-9.8,-8.5,-4.7,-6.9).curveTo(0,-5.3,3.4,-2.9).lineTo(6.6,-0.2).curveTo(8.7,1.7,9.9,2.5).curveTo(11.3,3.6,12.9,6.2).curveTo(14.8,9,12.1,7.8).lineTo(11.9,8.2).curveTo(5.3,0.1,-1,-3.4).closePath();
	this.shape_33.setTransform(-372,169.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,0.4).lineTo(-3.4,-3.2).lineTo(0.2,-2.3).curveTo(3.8,-0.6,3.4,3).lineTo(3.4,3).lineTo(2.1,3.2).curveTo(-0.6,3.2,-2.2,0.4).closePath();
	this.shape_34.setTransform(-365.2,116.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#303030").beginStroke().moveTo(-4.2,1.7).curveTo(-3.5,-1.9,0.4,-2.4).curveTo(2.4,-2.6,4.2,-2.1).curveTo(3.4,-0.5,1.9,0.9).curveTo(0.2,2.4,-1.6,2.4).curveTo(-2.9,2.4,-4.2,1.7).closePath();
	this.shape_35.setTransform(-358.7,121.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-2).curveTo(0.7,-3.3,2.5,-4.1).lineTo(2.5,-0.3).curveTo(1.7,3.5,-1.9,4).lineTo(-1.9,4).curveTo(-3.5,0.8,-0.7,-2).closePath();
	this.shape_36.setTransform(-359.6,111.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#303030").beginStroke().moveTo(-2,-0.9).lineTo(-0.8,-4.5).lineTo(1.5,-1.6).curveTo(3.2,1.9,0.6,4.5).lineTo(0.6,4.5).curveTo(-2.7,3,-2,-0.9).closePath();
	this.shape_37.setTransform(-363.7,102.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#303030").beginStroke().moveTo(-2.8,14.4).lineTo(-3.3,14.4).curveTo(1,4.8,1.4,-2.3).curveTo(1.5,-5.3,1,-9.2).lineTo(0.1,-15.8).curveTo(2,-12.5,2.8,-7.3).curveTo(3.6,-2.3,2.9,1.8).curveTo(2.7,3.2,1.9,5.9).curveTo(1.1,8.7,0.9,10).curveTo(0.6,11.7,-1,14.4).curveTo(-1.8,15.9,-2.3,15.9).curveTo(-2.7,15.9,-2.8,14.4).closePath();
	this.shape_38.setTransform(-364,121);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,0.4).lineTo(-2.8,-1.9).lineTo(-0.1,-1.7).curveTo(2.6,-1,2.7,1.6).lineTo(2.8,1.6).curveTo(2,1.9,1.3,1.9).curveTo(-0.2,1.9,-1.5,0.4).closePath();
	this.shape_39.setTransform(-400.7,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#303030").beginStroke().moveTo(-2,2.5).curveTo(-2.7,-0,-0.3,-1.5).curveTo(0.9,-2.3,2.2,-2.6).lineTo(1.7,0.1).curveTo(0.7,2.6,-1.7,2.6).lineTo(-2,2.5).closePath();
	this.shape_40.setTransform(-395.4,181.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.7).lineTo(-0.6,-3.2).lineTo(1,-1.2).curveTo(2.3,1.3,0.4,3.2).lineTo(0.4,3.2).curveTo(-1.9,2,-1.5,-0.7).closePath();
	this.shape_41.setTransform(-398.1,175.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#303030").beginStroke().moveTo(0.2,8.4).lineTo(0.1,7.6).lineTo(-0.4,7.4).curveTo(-0.6,5.7,-0.6,2.4).curveTo(-0.5,-1,-0.7,-2.6).curveTo(-0.9,-3.8,-0.8,-7).curveTo(-0.7,-10.4,-0.3,-8.1).lineTo(-0.2,-6.3).lineTo(-0,-4.6).curveTo(0.3,-3.3,0.4,0.8).lineTo(0.7,4.5).curveTo(0.9,6.8,0.6,9).curveTo(0.3,8.8,0.2,8.4).closePath();
	this.shape_42.setTransform(-397.3,185.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,-1.6).lineTo(1,-4.5).lineTo(2.1,-1).curveTo(2.6,2.9,-0.7,4.5).lineTo(-0.7,4.5).curveTo(-3.2,1.9,-1.4,-1.6).closePath();
	this.shape_43.setTransform(-309.2,158.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,-1.2).lineTo(-4.4,-1.2).curveTo(-1.5,-3.4,1.7,-1.2).curveTo(3.3,-0,4.4,1.5).curveTo(2.7,2.2,0.7,2.3).curveTo(-3.2,2.3,-4.4,-1.2).closePath();
	this.shape_44.setTransform(-307.8,165.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#303030").beginStroke().moveTo(-3.9,2.2).curveTo(-3.7,-1.5,0.1,-2.4).curveTo(2.1,-2.8,4,-2.5).curveTo(3.3,-0.8,2,0.7).curveTo(0.3,2.6,-1.8,2.6).curveTo(-2.8,2.6,-3.9,2.2).closePath();
	this.shape_45.setTransform(-301.7,159.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#303030").beginStroke().moveTo(-10.9,4.7).lineTo(-9.9,4.1).lineTo(-9.9,3.3).curveTo(-7.9,2.2,-3.5,0.5).curveTo(0.9,-1.2,2.9,-2.3).curveTo(14.7,-7.4,10.3,-4.6).lineTo(8,-3.5).lineTo(5.9,-2.5).curveTo(4.2,-1.2,-0.9,0.9).lineTo(-5.6,3.3).curveTo(-8.5,4.7,-11.5,5.6).curveTo(-11.3,5,-10.9,4.7).closePath();
	this.shape_46.setTransform(-314.7,165.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#303030").beginStroke().moveTo(-4.2,1.6).curveTo(-3.5,-2,0.5,-2.4).curveTo(2.4,-2.6,4.2,-2).curveTo(3.4,-0.4,1.9,0.9).curveTo(0.2,2.4,-1.6,2.4).curveTo(-2.9,2.4,-4.2,1.6).closePath();
	this.shape_47.setTransform(-316.4,162.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,-0.8).lineTo(-1.2,-4.5).lineTo(1.3,-1.7).curveTo(3.3,1.6,1,4.4).lineTo(1,4.5).curveTo(-2.4,3.2,-2.2,-0.8).closePath();
	this.shape_48.setTransform(-320.9,155.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,0.8).lineTo(-3.9,-1.8).lineTo(-0.5,-2.2).curveTo(3,-1.9,3.8,1.3).lineTo(3.9,1.4).curveTo(2.7,2.2,1.5,2.2).curveTo(-0.1,2.2,-1.7,0.8).closePath();
	this.shape_49.setTransform(-400,196.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,0.1).curveTo(-1.3,-3.3,2,-3.6).lineTo(2.1,-3.6).curveTo(3.4,-0.5,0.6,1.9).lineTo(-2.4,3.6).curveTo(-2.6,1.9,-2.2,0.1).closePath();
	this.shape_50.setTransform(-400.4,203.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,2).lineTo(-4,1.2).lineTo(-1.6,-1.1).curveTo(1.4,-3,4,-1).lineTo(4.1,-1).curveTo(3,2,-0.4,2).lineTo(-0.7,2).closePath();
	this.shape_51.setTransform(-408.2,202.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#303030").beginStroke().moveTo(-4.5,-0).curveTo(-1.1,-1.5,3.5,-2.7).curveTo(10.1,-4.4,10.3,-2.2).curveTo(10.3,-2.3,10.2,-2.3).curveTo(10.2,-2.3,10.2,-2.2).curveTo(10.2,-2.2,10.2,-2.2).curveTo(10.3,-2.2,10.3,-2.1).lineTo(10.5,-2).lineTo(10.2,-1.5).lineTo(4.5,-1.3).curveTo(1.5,-1.1,-1.1,-0.1).curveTo(-5.5,1.5,-10.6,3.5).curveTo(-7.8,1.3,-4.5,-0).closePath();
	this.shape_52.setTransform(-395.8,199.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,0.6).lineTo(-3.6,-2.3).lineTo(-0.2,-2.2).curveTo(3.2,-1.5,3.6,1.9).lineTo(3.6,1.9).curveTo(2.6,2.3,1.6,2.3).curveTo(-0.3,2.3,-1.8,0.6).closePath();
	this.shape_53.setTransform(-416.2,188);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.1).curveTo(-0.8,-3.4,2.6,-3.2).curveTo(3.5,-0,0.4,1.9).lineTo(-2.8,3.2).curveTo(-2.8,1.5,-2.1,-0.1).closePath();
	this.shape_54.setTransform(-417.6,194.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#303030").beginStroke().moveTo(-1,1.9).lineTo(-4.2,0.6).lineTo(-1.4,-1.4).curveTo(1.8,-2.9,4.2,-0.5).curveTo(2.9,2,0.2,2).lineTo(-1,1.9).closePath();
	this.shape_55.setTransform(-425.2,192.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,-0.5).curveTo(-0.6,-1.5,3.9,-2).curveTo(10.7,-2.8,10.6,-0.6).curveTo(10.6,-0.7,10.6,-0.7).curveTo(10.5,-0.7,10.5,-0.6).curveTo(10.5,-0.6,10.6,-0.6).curveTo(10.6,-0.6,10.6,-0.5).lineTo(10.8,-0.3).lineTo(10.4,0.1).lineTo(4.7,-0.5).curveTo(1.8,-0.7,-1,-0.1).lineTo(-10.9,2.2).curveTo(-8,0.5,-4.4,-0.5).closePath();
	this.shape_56.setTransform(-412.6,190.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#303030").beginStroke().moveTo(-2,0.4).lineTo(-3.1,-2.9).lineTo(0.2,-2.1).curveTo(3.5,-0.6,3.1,2.8).lineTo(1.9,2.9).curveTo(-0.6,2.9,-2,0.4).closePath();
	this.shape_57.setTransform(-421.9,178.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.4).curveTo(0.1,-3.4,3.3,-2.4).curveTo(3.5,0.9,0.1,2.1).lineTo(-3.3,2.7).closePath();
	this.shape_58.setTransform(-424.8,184.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#303030").beginStroke().moveTo(-1.3,1.5).lineTo(-4.2,-0.4).lineTo(-1,-1.8).curveTo(2.4,-2.5,4.2,0.3).curveTo(2.8,2,0.9,2).curveTo(-0.1,2,-1.3,1.5).closePath();
	this.shape_59.setTransform(-431.9,181.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#303030").beginStroke().moveTo(4.9,0.1).curveTo(2.1,-0.7,-0.8,-0.7).lineTo(-10.9,-0.7).curveTo(-7.9,-1.7,-3.9,-1.9).curveTo(0.3,-2,4.4,-1.5).curveTo(11.3,-0.8,10.7,1.3).curveTo(10.7,1.2,10.7,1.2).curveTo(10.6,1.2,10.6,1.2).curveTo(10.6,1.2,10.6,1.3).curveTo(10.7,1.3,10.7,1.4).lineTo(10.8,1.6).lineTo(10.3,1.9).lineTo(4.9,0.1).closePath();
	this.shape_60.setTransform(-419.2,182.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#303030").beginStroke().moveTo(0.1,2.4).curveTo(-3.7,1.3,-3.8,-2.4).lineTo(-3.8,-2.4).curveTo(-0.4,-3.7,2,-0.6).curveTo(3.3,1,3.8,2.8).lineTo(2.9,2.8).curveTo(1.5,2.8,0.1,2.4).closePath();
	this.shape_61.setTransform(-322.5,185.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,3.3).lineTo(-3.2,3.3).curveTo(-3.9,-0.3,-0.4,-2.2).curveTo(1.4,-3.1,3.3,-3.3).curveTo(3.1,-1.5,2.3,0.3).curveTo(0.7,3.3,-2.3,3.3).lineTo(-3.1,3.3).closePath();
	this.shape_62.setTransform(-320.4,179);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#303030").beginStroke().moveTo(-4.6,0.2).curveTo(-2.7,-2.9,1.1,-1.9).curveTo(3.1,-1.4,4.6,-0.3).curveTo(3.2,1,1.4,1.7).curveTo(0.2,2.1,-0.8,2.1).curveTo(-3,2.1,-4.6,0.2).closePath();
	this.shape_63.setTransform(-312.2,181);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#303030").beginStroke().moveTo(-11.8,-0.4).curveTo(-11.7,-0.3,-11.7,-0.3).curveTo(-11.7,-0.3,-11.7,-0.3).curveTo(-11.7,-0.3,-11.7,-0.4).curveTo(-11.7,-0.4,-11.8,-0.5).curveTo(-11.8,-0.5,-11.9,-0.6).curveTo(-11.9,-0.6,-11.9,-0.6).curveTo(-12,-0.7,-12,-0.7).curveTo(-12,-0.7,-11.9,-0.7).lineTo(-11.4,-1.1).lineTo(-5.3,0).curveTo(-2.1,0.4,1,-0.1).lineTo(12,-1.7).curveTo(8.8,-0.2,4.6,0.7).curveTo(0.6,1.5,-4.5,1.7).lineTo(-5.9,1.7).curveTo(-12,1.7,-11.8,-0.4).closePath();
	this.shape_64.setTransform(-326.2,182.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#303030").beginStroke().moveTo(-0.5,-1.9).curveTo(1,-2.9,2.7,-3.3).lineTo(2.1,0).curveTo(0.9,3.4,-2.4,3.3).lineTo(-2.5,3.3).curveTo(-3.4,0.1,-0.5,-1.9).closePath();
	this.shape_65.setTransform(-403.6,171.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#303030").beginStroke().moveTo(-2,0.2).lineTo(-2.9,-3.1).lineTo(0.3,-2).curveTo(3.4,-0.3,2.8,3).lineTo(2,3.1).curveTo(-0.7,3.1,-2,0.2).closePath();
	this.shape_66.setTransform(-409.7,169.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,-1.2).lineTo(0,-4.2).lineTo(1.6,-1.2).curveTo(2.7,2.2,-0,4.1).lineTo(-0,4.2).curveTo(-2.8,2.2,-1.6,-1.2).closePath();
	this.shape_67.setTransform(-407.5,161.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,10.9).lineTo(-1.5,10.4).lineTo(-0.1,4.9).curveTo(0.5,2,0.2,-0.9).lineTo(-0.8,-10.9).curveTo(0.6,-7.9,1,-4.1).curveTo(1.5,-0.3,1.5,4.2).curveTo(1.3,11.1,-0.8,10.7).curveTo(-0.8,10.7,-0.7,10.7).curveTo(-0.7,10.6,-0.8,10.6).curveTo(-0.8,10.6,-0.8,10.7).curveTo(-0.8,10.7,-0.9,10.7).lineTo(-1.1,10.9).lineTo(-1.1,10.9).closePath();
	this.shape_68.setTransform(-407.1,174.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.1).lineTo(-2.4,-3.5).lineTo(0.5,-1.8).curveTo(3.2,0.4,2,3.4).lineTo(2,3.5).curveTo(-1.3,3.3,-2.1,-0.1).closePath();
	this.shape_69.setTransform(-414.2,148);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,1.8).lineTo(-1.7,-0.8).curveTo(0.9,-3.1,3.7,-1.4).lineTo(3.8,-1.4).curveTo(3.1,1.8,-0.4,2.1).closePath();
	this.shape_70.setTransform(-418.6,152.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,0.9).lineTo(-3.9,-1.6).lineTo(-0.6,-2.1).curveTo(2.9,-1.9,3.8,1.2).curveTo(2.6,2.1,1.3,2.1).curveTo(-0.1,2.1,-1.6,0.9).closePath();
	this.shape_71.setTransform(-424.6,148.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#303030").beginStroke().moveTo(4.7,0.8).curveTo(2.2,-0.7,-0.5,-1.4).lineTo(-10,-3.8).curveTo(-7,-4.1,-3.2,-3.2).curveTo(0.2,-2.6,4.6,-0.9).curveTo(10.9,1.6,9.9,3.4).curveTo(9.8,3.3,9.8,3.3).curveTo(9.8,3.3,9.8,3.3).curveTo(9.8,3.3,9.8,3.4).curveTo(9.8,3.4,9.8,3.5).lineTo(9.9,3.7).lineTo(9.3,3.9).lineTo(4.7,0.8).closePath();
	this.shape_72.setTransform(-413,153.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-2).curveTo(0.6,-3.3,2.3,-4.2).lineTo(2.5,-0.4).curveTo(1.9,3.5,-1.7,4.1).lineTo(-1.7,4.1).curveTo(-3.5,1,-0.8,-2).closePath();
	this.shape_73.setTransform(-332.6,163.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,0.6).lineTo(-3.8,-2.8).lineTo(-0,-2.3).curveTo(3.7,-1.1,3.8,2.5).curveTo(2.8,2.8,1.9,2.8).curveTo(-0.4,2.8,-2.1,0.6).closePath();
	this.shape_74.setTransform(-339.5,162.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.8).lineTo(-1.1,-4.5).lineTo(1.3,-1.6).curveTo(3.3,1.8,0.8,4.5).curveTo(-2.5,3.1,-2.1,-0.8).closePath();
	this.shape_75.setTransform(-338.7,153.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#303030").beginStroke().moveTo(1.4,11.7).lineTo(0.9,11.3).lineTo(1.1,5.1).curveTo(1,1.8,0.1,-1.2).lineTo(-3.2,-11.8).curveTo(-1.1,-8.9,0.3,-4.9).curveTo(1.7,-0.9,2.7,4).curveTo(4.1,11.4,1.7,11.5).curveTo(1.7,11.5,1.7,11.4).curveTo(1.7,11.4,1.7,11.4).curveTo(1.7,11.4,1.6,11.4).curveTo(1.6,11.5,1.6,11.5).lineTo(1.4,11.8).lineTo(1.4,11.7).closePath();
	this.shape_76.setTransform(-335.5,167.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,3.3).lineTo(-3.1,3.3).curveTo(-3.9,-0.3,-0.4,-2.2).curveTo(1.3,-3.1,3.2,-3.4).curveTo(3.1,-1.5,2.3,0.2).curveTo(0.8,3.4,-2.3,3.4).lineTo(-3.1,3.3).closePath();
	this.shape_77.setTransform(-312.8,150.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,-1.6).curveTo(-0.1,-3.1,1.3,-4.1).lineTo(2.1,-0.8).curveTo(2.3,2.8,-0.9,4.1).lineTo(-0.9,4.1).curveTo(-3.1,1.5,-1.1,-1.6).closePath();
	this.shape_78.setTransform(-417,166.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#303030").beginStroke().moveTo(-1.3,1.6).lineTo(-4.3,-0.2).lineTo(-1.2,-1.7).curveTo(2.3,-2.7,4.2,0.1).lineTo(4.3,0.1).curveTo(2.8,2,0.8,2).curveTo(-0.2,2,-1.3,1.6).closePath();
	this.shape_79.setTransform(-421.3,172.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#303030").beginStroke().moveTo(-2.5,-0.5).lineTo(-2,-4.5).lineTo(1,-2).curveTo(3.6,1.3,1.5,4.5).curveTo(-2.2,3.6,-2.5,-0.5).closePath();
	this.shape_80.setTransform(-421.7,160.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,2.4).lineTo(-6,0.1).lineTo(-1.8,-2.3).curveTo(3.1,-3.9,6,-0.1).lineTo(6,-0.1).curveTo(4,2.8,0.9,2.8).curveTo(-0.3,2.8,-1.6,2.4).closePath();
	this.shape_81.setTransform(-377.8,131.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,2.4).lineTo(-6,0.1).lineTo(-1.8,-2.3).curveTo(3.1,-3.9,6,-0.1).lineTo(6,-0.1).curveTo(4.1,2.8,0.9,2.8).curveTo(-0.3,2.8,-1.6,2.4).closePath();
	this.shape_82.setTransform(-384,124);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#303030").beginStroke().moveTo(-5.3,3.1).lineTo(-2.6,-0.9).curveTo(0.9,-4.5,5.3,-2.5).lineTo(5.3,-2.5).curveTo(4.7,2.3,-0.3,3.2).closePath();
	this.shape_83.setTransform(-390.5,117.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,-0).lineTo(-3.7,-4.9).lineTo(0.7,-2.8).curveTo(4.7,0.3,3.3,4.9).lineTo(3.3,4.9).lineTo(3.2,4.9).curveTo(-1.5,4.9,-3.1,-0).closePath();
	this.shape_84.setTransform(-393.2,105.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#303030").beginStroke().moveTo(-1,-2.5).curveTo(0.8,-4.3,3.1,-5.3).lineTo(3.2,-0.5).curveTo(2.4,4.5,-2.3,5.3).lineTo(-2.3,5.4).curveTo(-4.6,1.2,-1,-2.5).closePath();
	this.shape_85.setTransform(-374,121);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#303030").beginStroke().moveTo(-1,-2.5).curveTo(0.8,-4.4,3.1,-5.4).lineTo(3.2,-0.5).curveTo(2.4,4.5,-2.3,5.3).lineTo(-2.3,5.4).curveTo(-4.6,1.2,-1,-2.5).closePath();
	this.shape_86.setTransform(-379.8,114.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,5.3).curveTo(-4.6,1.1,-1,-2.5).curveTo(0.9,-4.3,3.1,-5.3).lineTo(3.2,-0.5).curveTo(2.4,4.5,-2.3,5.3).closePath();
	this.shape_87.setTransform(-385.5,107.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#303030").beginStroke().moveTo(20.3,33.5).lineTo(19.3,33.2).curveTo(19.8,30.7,18.7,27.1).curveTo(16.6,19.9,9.2,14.3).curveTo(5.3,11.4,-6.8,4.8).curveTo(-14.1,0.9,-17.7,-5.4).curveTo(-22.6,-13.9,-24.9,-21.6).curveTo(-27.4,-29.9,-25.8,-33.7).lineTo(-25.1,-28.3).curveTo(-23.5,-21.1,-19.2,-12.2).curveTo(-15.2,-4.2,-10.1,-0.3).curveTo(-6.6,2.4,-0.9,4.1).curveTo(8.2,6.8,16.7,12.8).curveTo(27.1,20.1,26.3,26.6).curveTo(25.6,32.6,22.4,33.5).curveTo(21.9,33.7,21.3,33.7).lineTo(20.3,33.5).closePath();
	this.shape_88.setTransform(-383.5,167);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#303030").beginStroke().moveTo(26.6,27.3).lineTo(25.6,27.2).curveTo(25.6,24.8,23.8,21.6).curveTo(20.4,15.1,12.1,11.3).curveTo(7.8,9.3,-5.1,5.5).curveTo(-12.8,3.2,-17.5,-2).curveTo(-23.9,-9.1,-27.7,-16.1).curveTo(-31.8,-23.5,-30.9,-27.4).lineTo(-29.2,-22.3).curveTo(-26.2,-15.8,-20.3,-8.3).curveTo(-14.9,-1.5,-9.2,1.3).curveTo(-5.3,3.2,0.4,3.6).curveTo(9.6,4.3,19,8.3).curveTo(30.5,13.2,31,19.5).curveTo(31.5,25.4,28.6,26.9).curveTo(27.8,27.4,26.8,27.4).lineTo(26.6,27.3).closePath();
	this.shape_89.setTransform(-389.4,190.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#303030").beginStroke().moveTo(-10.2,73.9).lineTo(-18.5,71.6).curveTo(-19.8,68.3,-17.5,52.4).curveTo(-16.5,45.5,-13.4,28.5).curveTo(-11.6,18.9,-8.7,1.8).curveTo(-7.6,-4.9,-9,-18.1).curveTo(-10.4,-30.9,-12.8,-37.7).curveTo(-15.5,-45.2,-20.3,-51.6).lineTo(-37.8,-73).lineTo(-38.5,-74.3).lineTo(-34.7,-71.4).curveTo(-28.2,-65.4,-14.7,-50).curveTo(-1.6,-35,-0.2,-9.7).curveTo(0.4,3,-1.5,12.6).lineTo(1.7,8.7).curveTo(6.5,3.9,14.2,-0.6).curveTo(21.5,-4.8,31.9,-20.1).lineTo(37.4,-28.5).curveTo(39.1,-31,38.2,-28.8).curveTo(35.2,-21.7,30.8,-14.5).curveTo(24.9,-4.8,18.5,0.8).curveTo(12.8,4.6,10.5,7).curveTo(7.1,10.5,-0,24.4).curveTo(-7.6,39.4,-3.8,57).curveTo(-1.9,65.8,1.5,71.6).curveTo(-0.5,74.3,-5.6,74.3).curveTo(-7.6,74.3,-10.2,73.9).closePath();
	this.shape_90.setTransform(-353.4,182.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.9).curveTo(0.6,-3.2,2.3,-4).lineTo(2.4,-0.4).curveTo(1.7,3.3,-1.8,3.9).lineTo(-1.8,4).curveTo(-3.4,0.9,-0.7,-1.9).closePath();
	this.shape_91.setTransform(-1333.1,150.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.9).curveTo(0.6,-3.2,2.3,-4).lineTo(2.4,-0.4).curveTo(1.7,3.4,-1.8,3.9).lineTo(-1.8,4).curveTo(-3.4,0.9,-0.7,-1.9).closePath();
	this.shape_92.setTransform(-1337.3,142.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.8).curveTo(0.6,-3.2,2.3,-4).lineTo(2.4,-0.4).curveTo(1.7,3.4,-1.7,3.9).lineTo(-1.8,3.9).curveTo(-3.4,0.9,-0.7,-1.8).closePath();
	this.shape_93.setTransform(-1341.7,137.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,1.1).lineTo(-4.2,-1.6).lineTo(-0.6,-2.2).curveTo(3.1,-2.1,4.2,1.2).lineTo(4.2,1.2).curveTo(2.8,2.2,1.4,2.2).curveTo(-0.1,2.2,-1.7,1.1).closePath();
	this.shape_94.setTransform(-1345.2,145.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,1.1).lineTo(-4.2,-1.6).lineTo(-0.6,-2.2).curveTo(3.1,-2.1,4.2,1.2).lineTo(4.2,1.2).curveTo(2.8,2.2,1.4,2.2).curveTo(-0.1,2.2,-1.7,1.1).closePath();
	this.shape_95.setTransform(-1349.1,138.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#303030").beginStroke().moveTo(-1,2).lineTo(-4.4,0.7).lineTo(-1.5,-1.4).curveTo(1.9,-3.1,4.4,-0.5).lineTo(4.4,-0.5).curveTo(3.1,2.1,0.3,2.1).lineTo(-1,2).closePath();
	this.shape_96.setTransform(-1341.3,152.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#303030").beginStroke().moveTo(8.4,15.8).curveTo(7.6,15.8,5.9,13.9).lineTo(3.7,11.4).curveTo(-0.6,7,-2.9,2.6).curveTo(-3.6,1.3,-5.7,-1.7).curveTo(-7.6,-4.4,-8.4,-6.1).curveTo(-9.4,-8.3,-10.1,-11.1).curveTo(-11,-14.9,-10.2,-15.9).curveTo(-9.9,-14.3,-8.9,-12.3).lineTo(-7.4,-9).curveTo(-6.7,-7.3,-5.4,-5.5).lineTo(-3,-2.2).curveTo(-1,0.4,1.9,5.4).curveTo(4.9,9.5,9.7,12.1).lineTo(9.8,12.1).curveTo(11.1,13,10.3,14.5).curveTo(9.7,15.9,8.5,15.9).lineTo(8.4,15.8).closePath();
	this.shape_97.setTransform(-1336.6,146.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,1.2).lineTo(-4.6,-1.6).lineTo(-0.8,-2.4).curveTo(3.2,-2.4,4.5,1.2).lineTo(4.6,1.2).curveTo(3.1,2.4,1.5,2.4).curveTo(-0.1,2.4,-1.8,1.2).closePath();
	this.shape_98.setTransform(-1304.4,173.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,0.9).lineTo(-3.6,-1.3).lineTo(-0.6,-1.9).curveTo(2.6,-1.9,3.6,0.9).curveTo(2.5,1.9,1.2,1.9).curveTo(-0.1,1.9,-1.4,0.9).closePath();
	this.shape_99.setTransform(-1306.9,166);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#303030").beginStroke().moveTo(-1.3,-1.3).lineTo(0.6,-3.9).lineTo(1.8,-0.9).curveTo(2.3,2.4,-0.4,3.9).lineTo(-0.4,3.9).curveTo(-2.7,1.8,-1.3,-1.3).closePath();
	this.shape_100.setTransform(-1299.6,165.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.4).lineTo(0.2,-4.8).lineTo(1.9,-1.3).curveTo(3,2.6,-0.1,4.7).lineTo(-0.1,4.8).curveTo(-3.2,2.5,-1.8,-1.4).closePath();
	this.shape_101.setTransform(-1304,157.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#303030").beginStroke().moveTo(-4.7,-0.6).lineTo(-4.7,-0.6).curveTo(-2.1,-3.3,1.6,-1.5).curveTo(3.4,-0.6,4.7,0.8).curveTo(3.1,1.8,1.1,2.1).lineTo(-0.2,2.2).curveTo(-3.2,2.2,-4.7,-0.6).closePath();
	this.shape_102.setTransform(-1280,173.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,-1.6).lineTo(1,-4.7).lineTo(2.2,-1).curveTo(2.7,3,-0.7,4.7).curveTo(-3.4,2,-1.4,-1.6).closePath();
	this.shape_103.setTransform(-1303.9,181.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,1.5).lineTo(-4,-0.1).lineTo(-1.1,-1.6).curveTo(2.1,-2.6,4,0).lineTo(4.1,0).curveTo(2.7,1.9,0.7,1.9).curveTo(-0.2,1.9,-1.1,1.5).closePath();
	this.shape_104.setTransform(-1311.5,184.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,0.2).lineTo(-3.1,-3.7).lineTo(0.4,-2.2).curveTo(3.8,-0,2.9,3.7).lineTo(2.4,3.7).curveTo(-1,3.7,-2.4,0.2).closePath();
	this.shape_105.setTransform(-1312.3,176.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.9).lineTo(-0.3,-3.6).lineTo(1.3,-1.1).curveTo(2.5,1.7,0.3,3.6).curveTo(-2.2,2.2,-1.5,-0.9).closePath();
	this.shape_106.setTransform(-1284.9,166);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#303030").beginStroke().moveTo(-4,0.4).lineTo(-4.1,0.4).curveTo(-2.5,-2.5,1,-1.8).curveTo(2.7,-1.4,4.1,-0.5).curveTo(2.9,0.7,1.3,1.4).curveTo(0.2,1.9,-0.9,1.9).curveTo(-2.6,1.9,-4,0.4).closePath();
	this.shape_107.setTransform(-1277.5,213.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.7).lineTo(-0.5,-3.5).lineTo(1.2,-1.2).curveTo(2.4,1.5,0.4,3.5).lineTo(0.4,3.5).curveTo(-2,2.2,-1.5,-0.7).closePath();
	this.shape_108.setTransform(-1281.2,206.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-2.1).curveTo(0.8,-3.4,2.7,-4.1).lineTo(2.5,-0.3).curveTo(1.7,3.7,-2.1,4.1).lineTo(-2.1,4.1).curveTo(-3.7,0.7,-0.7,-2.1).closePath();
	this.shape_109.setTransform(-1274.4,201.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,4.1).curveTo(-3.7,0.6,-0.7,-2).curveTo(0.8,-3.4,2.7,-4.1).lineTo(2.5,-0.2).curveTo(1.6,3.7,-2.1,4.1).closePath();
	this.shape_110.setTransform(-1279,162.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,0.1).lineTo(-3,-3.8).lineTo(0.5,-2.2).curveTo(3.8,0.1,2.7,3.8).lineTo(2.5,3.8).curveTo(-1.1,3.8,-2.4,0.1).closePath();
	this.shape_111.setTransform(-1298.5,153.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,-2).curveTo(0.4,-3.5,2.2,-4.4).lineTo(2.5,-0.5).curveTo(2,3.5,-1.7,4.3).lineTo(-1.7,4.4).curveTo(-3.6,1.1,-0.9,-2).closePath();
	this.shape_112.setTransform(-1292,157.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#303030").beginStroke().moveTo(-2,-1.2).lineTo(-0.3,-4.8).lineTo(1.7,-1.4).curveTo(3.2,2.3,0.2,4.8).curveTo(-3,2.7,-2,-1.2).closePath();
	this.shape_113.setTransform(-1295.1,146.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#303030").beginStroke().moveTo(-2.5,-0.3).lineTo(-2.4,-4.3).lineTo(0.8,-2).curveTo(3.6,0.8,1.9,4.3).curveTo(-1.9,3.7,-2.5,-0.3).closePath();
	this.shape_114.setTransform(-1309,153.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.7).lineTo(-1.4,-4.2).lineTo(1.1,-1.7).curveTo(3.2,1.4,1.1,4.2).curveTo(-2.2,3.1,-2.1,-0.7).closePath();
	this.shape_115.setTransform(-1247.8,131.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,-0.4).curveTo(-2.1,-3,1.4,-1.5).curveTo(3.1,-0.8,4.4,0.5).curveTo(2.9,1.5,1.1,1.9).curveTo(0.3,2.1,-0.4,2.1).curveTo(-2.9,2.1,-4.4,-0.4).closePath();
	this.shape_116.setTransform(-1245.1,139.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,2.1).lineTo(-3.8,2.1).curveTo(-3.6,-1.4,0.2,-2.2).curveTo(2,-2.7,3.8,-2.5).curveTo(3.2,-0.7,2,0.7).curveTo(0.3,2.5,-1.7,2.5).curveTo(-2.7,2.5,-3.8,2.1).closePath();
	this.shape_117.setTransform(-1240.6,130.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#303030").beginStroke().moveTo(-1,-1.8).curveTo(0.2,-3.2,1.8,-4.1).lineTo(2.3,-0.5).curveTo(2,3.1,-1.4,4.1).lineTo(-1.4,4.1).curveTo(-3.4,1.1,-1,-1.8).closePath();
	this.shape_118.setTransform(-1240.5,121.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#303030").beginStroke().moveTo(-8.5,11).lineTo(-8.5,11).curveTo(-0.3,5.1,3.4,-0.6).curveTo(5,-3,6.4,-6.5).lineTo(8.9,-12.4).curveTo(8.9,-8.7,7,-4).curveTo(5.2,0.5,2.7,3.6).curveTo(1.8,4.6,-0.1,6.5).curveTo(-2.1,8.4,-3,9.4).curveTo(-4,10.6,-6.8,11.9).curveTo(-7.9,12.4,-8.5,12.4).curveTo(-9.3,12.4,-8.5,11).closePath();
	this.shape_119.setTransform(-1250.4,135.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,5.3).lineTo(6.4,-13.1).lineTo(6.7,-10.7).lineTo(-5.2,13.1).closePath();
	this.shape_120.setTransform(-1286.9,176.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#303030").beginStroke().moveTo(-8.4,-10).lineTo(-7.8,-13.1).lineTo(8.4,7).lineTo(7,13.1).closePath();
	this.shape_121.setTransform(-1302.6,190.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,-11.8).lineTo(-6,-13.3).lineTo(6.8,7.7).lineTo(5.4,13.3).closePath();
	this.shape_122.setTransform(-1301.4,169.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#303030").beginStroke().moveTo(-8.1,6.2).lineTo(7.6,-12.7).lineTo(8.1,-11.1).lineTo(-6.7,12.7).closePath();
	this.shape_123.setTransform(-1283.7,216.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginFill("#303030").beginStroke().moveTo(-6,54.1).lineTo(-4.7,-54.1).lineTo(-2.4,-53.2).lineTo(6,54.1).closePath();
	this.shape_124.setTransform(-1291.4,202.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.beginFill("#303030").beginStroke().moveTo(-32,46.7).curveTo(-35.4,44.9,-37.6,41.8).curveTo(-40.8,43.4,-44.6,43.4).curveTo(-51.2,43.4,-55.8,38.7).curveTo(-60.6,34.1,-60.6,27.4).curveTo(-60.5,21.1,-56.3,16.5).curveTo(-58.8,14.3,-60.2,11.2).curveTo(-61.7,8.1,-61.7,4.6).curveTo(-61.7,-1,-58.3,-5.3).curveTo(-55,-9.6,-49.8,-10.9).curveTo(-51.6,-13.3,-51.6,-16.4).curveTo(-51.6,-19.6,-49.6,-22.1).curveTo(-47.6,-24.6,-44.6,-25.3).curveTo(-46.3,-28.7,-46.3,-32.5).curveTo(-46.3,-39.2,-41.6,-43.9).curveTo(-36.9,-48.5,-30.3,-48.5).curveTo(-26.6,-48.6,-23.3,-46.9).curveTo(-20.1,-45.4,-17.9,-42.7).curveTo(-14.2,-44.6,-10.3,-44.6).curveTo(-6.8,-44.6,-3.7,-43.1).curveTo(-0.6,-41.7,1.5,-39.3).curveTo(4,-41.2,7.1,-41.2).curveTo(8.5,-41.2,10,-40.6).curveTo(12.2,-43,15.3,-44.3).curveTo(18.3,-45.7,21.7,-45.7).curveTo(26.1,-45.7,29.8,-43.5).curveTo(33.4,-41.4,35.5,-37.7).curveTo(39.5,-40.5,44.5,-40.5).curveTo(51.2,-40.5,55.9,-35.8).curveTo(60.5,-31.2,60.5,-24.5).curveTo(60.5,-19.1,57.1,-14.6).curveTo(61.7,-10,61.7,-3.5).curveTo(61.7,-0.1,60.3,3.1).curveTo(58.9,6.1,56.6,8.3).curveTo(57.1,10.4,57.1,12.6).curveTo(57.1,19.2,52.4,23.8).curveTo(47.8,28.6,41.1,28.6).lineTo(39.9,28.5).lineTo(39.9,30.2).curveTo(40,36.9,35.3,41.5).curveTo(30.6,46.2,24,46.2).curveTo(20,46.2,16.4,44.4).curveTo(13,42.5,10.9,39.4).curveTo(6.8,42.2,1.7,42.3).lineTo(1.3,42.3).lineTo(1.1,42.5).lineTo(1.1,42.3).curveTo(-5,42.1,-9.5,37.8).curveTo(-11.1,42.5,-15.2,45.5).curveTo(-19.4,48.5,-24.6,48.6).curveTo(-28.6,48.6,-32,46.7).closePath();
	this.shape_125.setTransform(-1296.6,162.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.2,-2.8).curveTo(0.9,-4.9,3.4,-6).lineTo(3.6,-4.3).curveTo(3.8,-2.3,3.5,-0.5).curveTo(2.6,5.1,-2.7,5.9).lineTo(-2.7,6).curveTo(-5.2,1.3,-1.2,-2.8).closePath();
	this.shape_126.setTransform(-148.2,96.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.2,-2.8).curveTo(0.8,-4.9,3.3,-6).lineTo(3.6,-4.3).curveTo(3.8,-2.3,3.5,-0.5).curveTo(2.6,5.1,-2.7,5.9).lineTo(-2.7,6).curveTo(-5.2,1.3,-1.2,-2.8).closePath();
	this.shape_127.setTransform(-154.5,84.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-2.8).curveTo(1,-4.9,3.5,-6).lineTo(3.6,-0.5).curveTo(2.7,5.1,-2.6,5.9).lineTo(-2.6,6).curveTo(-5.1,1.3,-1.1,-2.8).closePath();
	this.shape_128.setTransform(-161.2,76.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,1.6).curveTo(-4,0.5,-5.3,-1.1).lineTo(-6.3,-2.5).lineTo(-4.8,-2.9).curveTo(-2.8,-3.4,-1,-3.4).curveTo(4.7,-3.3,6.3,1.8).lineTo(6.3,1.8).curveTo(4.3,3.4,2.1,3.4).curveTo(-0.2,3.4,-2.6,1.6).closePath();
	this.shape_129.setTransform(-166.5,88.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,1.6).curveTo(-4.1,0.5,-5.3,-1.1).lineTo(-6.3,-2.5).lineTo(-1,-3.4).curveTo(4.7,-3.3,6.3,1.8).lineTo(6.4,1.8).curveTo(4.3,3.4,2.1,3.4).curveTo(-0.2,3.4,-2.6,1.6).closePath();
	this.shape_130.setTransform(-172.4,78.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.4,3).curveTo(-3.3,2.7,-5.1,1.8).lineTo(-6.6,1).lineTo(-2.3,-2.2).curveTo(2.9,-4.6,6.6,-0.8).lineTo(6.7,-0.8).curveTo(4.6,3.1,0.4,3.1).curveTo(-0.5,3.1,-1.4,3).closePath();
	this.shape_131.setTransform(-160.7,99.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.beginFill("#6D6C6C").beginStroke().moveTo(12.7,23.9).curveTo(11.5,23.8,8.8,21).lineTo(5.6,17.3).curveTo(-0.7,10.7,-4.3,4).curveTo(-5.4,2,-8.7,-2.5).curveTo(-11.5,-6.5,-12.7,-9.2).curveTo(-14.2,-12.4,-15.3,-16.8).curveTo(-16.7,-22.4,-15.4,-23.9).curveTo(-14.9,-21.5,-13.5,-18.6).lineTo(-11.1,-13.6).curveTo(-10,-11,-8.2,-8.3).lineTo(-4.6,-3.4).curveTo(-1.5,0.6,2.9,8.1).curveTo(7.4,14.4,14.6,18.2).lineTo(14.9,18.3).curveTo(16.8,19.6,15.6,21.9).curveTo(14.6,23.9,12.8,23.9).lineTo(12.7,23.9).closePath();
	this.shape_132.setTransform(-153.5,90.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,1.8).curveTo(-4.3,0.7,-5.8,-0.9).lineTo(-6.9,-2.4).lineTo(-5.2,-2.9).curveTo(-3.1,-3.5,-1.1,-3.5).curveTo(4.9,-3.6,6.8,1.8).lineTo(6.9,1.8).curveTo(4.6,3.5,2.2,3.5).curveTo(-0.2,3.5,-2.7,1.8).closePath();
	this.shape_133.setTransform(-104.9,130.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.2,1.5).lineTo(-5.5,-1.9).lineTo(-0.9,-2.8).curveTo(3.9,-2.9,5.4,1.4).lineTo(5.5,1.4).curveTo(3.7,2.8,1.7,2.8).curveTo(-0.2,2.8,-2.2,1.5).closePath();
	this.shape_134.setTransform(-108.7,119.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.9,-1.9).lineTo(1,-5.9).lineTo(2.7,-1.4).curveTo(3.5,3.6,-0.6,5.9).lineTo(-0.6,5.9).curveTo(-4.1,2.7,-1.9,-1.9).closePath();
	this.shape_135.setTransform(-97.6,118.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-2.1).curveTo(-2,-3.9,-0.7,-5.8).lineTo(0.4,-7.2).lineTo(1.4,-5.7).curveTo(2.4,-3.8,2.9,-2).curveTo(4.5,4,-0.2,7.2).lineTo(-0.2,7.2).curveTo(-4.8,3.7,-2.7,-2.1).closePath();
	this.shape_136.setTransform(-104.2,107.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.1,-0.9).lineTo(-7.1,-0.9).curveTo(-3.2,-5,2.4,-2.3).curveTo(5.1,-0.9,7.2,1.3).curveTo(4.6,2.8,1.7,3.2).lineTo(-0.2,3.4).curveTo(-4.8,3.4,-7.1,-0.9).closePath();
	this.shape_137.setTransform(-67.9,131);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.2,-2.5).curveTo(-1.3,-4.2,0.3,-5.8).lineTo(1.6,-7.1).lineTo(2.3,-5.4).curveTo(3.1,-3.4,3.3,-1.5).curveTo(4.1,4.6,-1.1,7).lineTo(-1.1,7.1).curveTo(-5.1,3,-2.2,-2.5).closePath();
	this.shape_138.setTransform(-104.1,143.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,2.3).lineTo(-6.1,-0.1).lineTo(-1.7,-2.4).curveTo(3.2,-3.9,6.1,0.1).lineTo(6.1,0.1).curveTo(4.1,2.8,1.1,2.8).curveTo(-0.2,2.8,-1.7,2.3).closePath();
	this.shape_139.setTransform(-115.7,147.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.6,0.2).curveTo(-4.3,-1.6,-4.6,-3.7).lineTo(-4.7,-5.6).lineTo(-3,-5.1).curveTo(-0.9,-4.4,0.7,-3.4).curveTo(5.8,-0.1,4.4,5.5).lineTo(4.5,5.5).lineTo(3.7,5.6).curveTo(-1.4,5.6,-3.6,0.2).closePath();
	this.shape_140.setTransform(-116.8,136.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-1.3).lineTo(-0.5,-5.5).lineTo(1.9,-1.7).curveTo(3.7,2.6,0.4,5.5).curveTo(-3.4,3.3,-2.3,-1.3).closePath();
	this.shape_141.setTransform(-75.4,119.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.1,0.6).lineTo(-6.1,0.6).curveTo(-3.8,-3.7,1.4,-2.6).curveTo(4,-2.1,6.1,-0.7).curveTo(4.4,1.1,2,2.1).curveTo(0.2,2.9,-1.3,2.9).curveTo(-4,2.9,-6.1,0.6).closePath();
	this.shape_142.setTransform(-64.2,191.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-1.2).lineTo(-0.8,-5.3).lineTo(1.7,-1.8).curveTo(3.7,2.3,0.6,5.2).lineTo(0.6,5.3).curveTo(-3.1,3.3,-2.3,-1.2).closePath();
	this.shape_143.setTransform(-69.8,181.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,6.2).curveTo(-5.7,1,-1.1,-3.1).curveTo(1.2,-5.2,4,-6.2).lineTo(4.1,-4.4).curveTo(4.2,-2.2,3.8,-0.4).curveTo(2.4,5.6,-3.3,6.2).closePath();
	this.shape_144.setTransform(-59.5,173.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,6.2).curveTo(-5.7,1,-1.1,-3.1).curveTo(1.2,-5.2,4,-6.2).lineTo(4.1,-4.4).curveTo(4.2,-2.2,3.8,-0.4).curveTo(2.4,5.6,-3.3,6.2).closePath();
	this.shape_145.setTransform(-66.5,115.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.6,0.1).curveTo(-4.3,-1.7,-4.5,-3.9).lineTo(-4.6,-5.8).lineTo(-2.8,-5.2).curveTo(-0.8,-4.4,0.8,-3.3).curveTo(5.8,0.2,4.1,5.7).lineTo(4.2,5.7).lineTo(3.8,5.8).curveTo(-1.6,5.8,-3.6,0.1).closePath();
	this.shape_146.setTransform(-96,100.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.4,-2.9).curveTo(0.6,-5.3,3.3,-6.6).lineTo(3.6,-4.8).curveTo(3.9,-2.7,3.7,-0.8).curveTo(3.1,5.3,-2.5,6.5).lineTo(-2.6,6.6).curveTo(-5.5,1.6,-1.4,-2.9).closePath();
	this.shape_147.setTransform(-86.2,107.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3,-1.8).curveTo(-2.5,-3.7,-1.4,-5.7).lineTo(-0.4,-7.2).lineTo(0.7,-5.8).curveTo(1.9,-4,2.6,-2.2).curveTo(4.8,3.5,0.3,7.1).lineTo(0.3,7.2).curveTo(-4.5,4.2,-3,-1.8).closePath();
	this.shape_148.setTransform(-90.8,90.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.7,-0.5).curveTo(-4,-2.4,-3.8,-4.6).lineTo(-3.6,-6.4).lineTo(-2,-5.5).curveTo(-0.1,-4.4,1.2,-3.1).curveTo(5.5,1.2,3,6.3).lineTo(3,6.4).curveTo(-2.7,5.6,-3.7,-0.5).closePath();
	this.shape_149.setTransform(-111.9,101.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,-1).lineTo(-2.2,-6.4).lineTo(1.7,-2.5).curveTo(4.9,2.1,1.7,6.4).lineTo(1.7,6.4).curveTo(-3.3,4.7,-3.3,-1).closePath();
	this.shape_150.setTransform(-19.4,68.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.6,-0.5).lineTo(-6.6,-0.5).curveTo(-3.2,-4.6,2.1,-2.3).curveTo(4.7,-1.2,6.6,0.8).curveTo(4.4,2.3,1.6,2.9).curveTo(0.5,3.1,-0.5,3.1).curveTo(-4.4,3.1,-6.6,-0.5).closePath();
	this.shape_151.setTransform(-15.3,79.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.7,3.2).curveTo(-5.3,-2.1,0.3,-3.4).curveTo(3,-4.1,5.7,-3.7).curveTo(4.8,-1.1,3,1).curveTo(0.4,3.8,-2.6,3.8).curveTo(-4.1,3.8,-5.7,3.2).closePath();
	this.shape_152.setTransform(-8.5,66.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.4,-2.7).curveTo(0.4,-4.9,2.8,-6.2).lineTo(3.2,-4.6).curveTo(3.5,-2.6,3.4,-0.8).curveTo(3.1,4.8,-2.1,6.2).lineTo(-2.1,6.2).curveTo(-5.1,1.8,-1.4,-2.7).closePath();
	this.shape_153.setTransform(-8.3,52.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.7,16.5).lineTo(-12.8,16.5).curveTo(-7.5,12.8,-3,8.5).curveTo(2.2,3.6,5.2,-0.9).curveTo(7.5,-4.6,9.8,-9.8).lineTo(13.4,-18.8).curveTo(13.4,-13.1,10.6,-6).curveTo(7.9,0.7,4.1,5.4).curveTo(2.8,7,-0.1,9.7).curveTo(-3.2,12.6,-4.4,14.1).curveTo(-5.9,15.9,-10.3,18).curveTo(-12,18.8,-12.8,18.8).curveTo(-14.1,18.8,-12.7,16.5).closePath();
	this.shape_154.setTransform(-23.4,74.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.2,8).lineTo(9.6,-19.8).lineTo(10.2,-16.2).lineTo(-7.9,19.8).closePath();
	this.shape_155.setTransform(-78.5,136.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.8,-15.1).lineTo(-11.8,-19.8).lineTo(12.7,10.5).lineTo(10.5,19.8).closePath();
	this.shape_156.setTransform(-102.2,156.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.2,-17.8).lineTo(-9,-20.2).lineTo(10.3,11.5).lineTo(8.1,20.2).closePath();
	this.shape_157.setTransform(-100.4,125.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.3,9.3).lineTo(11.4,-19.3).lineTo(12.3,-16.8).lineTo(-10.2,19.2).closePath();
	this.shape_158.setTransform(-73.5,195.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9.1,81.8).lineTo(-7.1,-81.8).lineTo(-3.6,-80.3).lineTo(9.1,81.8).closePath();
	this.shape_159.setTransform(-85.3,174.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-48.3,70.6).curveTo(-53.5,67.9,-56.8,63.2).curveTo(-61.7,65.6,-67.3,65.6).curveTo(-77.3,65.6,-84.4,58.6).curveTo(-91.4,51.4,-91.4,41.5).curveTo(-91.4,36.8,-89.7,32.5).curveTo(-88.1,28.3,-85,25).curveTo(-88.9,21.6,-91,17).curveTo(-93.2,12.2,-93.2,6.9).curveTo(-93.2,-1.4,-88.1,-7.9).curveTo(-83.1,-14.4,-75.1,-16.5).curveTo(-77.9,-20.2,-77.9,-24.7).curveTo(-78,-29.6,-74.9,-33.4).curveTo(-71.9,-37.1,-67.2,-38.2).curveTo(-69.9,-43.5,-69.9,-49.1).curveTo(-69.9,-59.2,-62.8,-66.2).curveTo(-55.7,-73.3,-45.7,-73.3).curveTo(-40.1,-73.4,-35.2,-70.9).curveTo(-30.3,-68.6,-27,-64.4).curveTo(-21.6,-67.3,-15.5,-67.3).curveTo(-10.3,-67.3,-5.6,-65.2).curveTo(-1,-63.1,2.4,-59.3).curveTo(6,-62.1,10.6,-62.1).curveTo(13.1,-62.1,15.1,-61.4).curveTo(18.5,-64.9,23,-67).curveTo(27.7,-69,32.8,-69).curveTo(39.4,-69,45,-65.7).curveTo(50.5,-62.5,53.7,-57.1).curveTo(59.8,-61.3,67.3,-61.3).curveTo(77.3,-61.2,84.4,-54.2).curveTo(91.5,-47.1,91.5,-37.1).curveTo(91.5,-28.7,86.2,-22.1).curveTo(89.5,-18.7,91.4,-14.5).curveTo(93.2,-10,93.2,-5.1).curveTo(93.2,0,91.1,4.7).curveTo(89.1,9.2,85.4,12.6).curveTo(86.3,15.7,86.3,19).curveTo(86.3,29,79.2,36.1).curveTo(72.2,43.1,62.1,43.1).lineTo(60.2,43.1).curveTo(60.4,44.4,60.4,45.7).curveTo(60.4,55.8,53.4,62.8).curveTo(46.2,69.9,36.3,69.9).curveTo(30.2,69.9,24.9,67).curveTo(19.7,64.3,16.4,59.6).curveTo(10.2,63.8,2.6,63.8).lineTo(2.1,63.8).lineTo(1.7,64.2).lineTo(1.7,63.8).curveTo(-2.9,63.7,-7.1,61.8).curveTo(-11.1,60.1,-14.3,57.1).curveTo(-16.7,64.3,-22.9,68.8).curveTo(-29.3,73.3,-37.1,73.3).curveTo(-43.1,73.3,-48.3,70.6).closePath();
	this.shape_160.setTransform(-93.2,114.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.1,9.4).lineTo(9.5,-18.3).lineTo(10.1,-14.7).lineTo(-10.1,18.3).closePath();
	this.shape_161.setTransform(-258.4,122.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-14.6,-8.5).lineTo(-14.6,-10.9).lineTo(13.7,5.8).lineTo(14.6,10.9).closePath();
	this.shape_162.setTransform(-286.3,163.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-11.5,-14.6).lineTo(-11.1,-17).lineTo(11.5,9.9).lineTo(10.6,17).closePath();
	this.shape_163.setTransform(-283.9,138.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-14.3,7.8).curveTo(8,-12.7,9.8,-15.4).curveTo(10.9,-17.1,12.7,-16.7).curveTo(13.6,-16.5,14.3,-16).lineTo(-13.4,16.7).closePath();
	this.shape_164.setTransform(-253,164.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8,89.5).lineTo(-6.2,-89.5).lineTo(-4.1,-88.2).lineTo(-1.6,-46.8).lineTo(8,89.5).closePath();
	this.shape_165.setTransform(-267.3,167);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.1,72).curveTo(-29.8,68.5,-39.1,45.2).curveTo(-46.7,25.9,-39.6,-3.8).curveTo(-33.5,-28.9,-20.3,-51).curveTo(-7.6,-72.1,0.1,-72.1).curveTo(7.8,-72.1,20.4,-51).curveTo(33.6,-29.1,39.6,-4).curveTo(46.7,25.8,39.1,45.1).curveTo(29.9,68.4,0.4,72.1).closePath();
	this.shape_166.setTransform(-269.8,116.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-11.4,10.5).lineTo(10.7,-20.5).lineTo(11.4,-16.5).lineTo(-11.4,20.5).closePath();
	this.shape_167.setTransform(-346.9,88.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.4,-9.6).lineTo(-16.4,-12.2).lineTo(15.3,6.5).lineTo(16.4,12.2).closePath();
	this.shape_168.setTransform(-378.3,133.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.9,-16.4).lineTo(-12.5,-19.1).lineTo(13,11.1).lineTo(11.9,19.1).closePath();
	this.shape_169.setTransform(-375.5,105.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16,8.8).curveTo(9,-14.2,11,-17.3).curveTo(12.3,-19.1,14.3,-18.7).curveTo(15.3,-18.5,16,-17.9).lineTo(-15,18.8).closePath();
	this.shape_170.setTransform(-340.9,134.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9,109.6).lineTo(-7,-109.6).lineTo(-4.6,-108.2).lineTo(9,109.6).closePath();
	this.shape_171.setTransform(-356.9,146.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.1,80.8).curveTo(-33.5,76.8,-43.9,50.7).curveTo(-52.4,29.1,-44.4,-4.3).curveTo(-37.7,-32.5,-22.8,-57.3).curveTo(-16.2,-68.1,-10.2,-74.4).curveTo(-4,-80.9,0.1,-80.9).curveTo(4.2,-80.9,10.4,-74.4).curveTo(16.4,-68.1,22.9,-57.3).curveTo(37.7,-32.6,44.4,-4.4).curveTo(52.4,28.9,43.9,50.6).curveTo(33.6,76.8,0.5,80.9).closePath();
	this.shape_172.setTransform(-359.8,80.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,1.4).lineTo(-5.5,-2).lineTo(-0.8,-2.8).curveTo(4.1,-2.8,5.5,1.5).lineTo(5.4,1.5).curveTo(3.6,2.8,1.7,2.8).curveTo(-0.2,2.8,-2.2,1.4).closePath();
	this.shape_173.setTransform(-871,148.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0.5).lineTo(-4.4,-3.8).lineTo(0.2,-2.8).curveTo(4.8,-1,4.4,3.6).lineTo(4.4,3.5).curveTo(3.4,3.8,2.6,3.8).curveTo(-0.6,3.8,-2.7,0.5).closePath();
	this.shape_174.setTransform(-871.1,139);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,-1.7).lineTo(-6.8,-1.7).curveTo(-2.4,-5.3,2.7,-1.8).curveTo(5.2,-0.1,6.8,2.3).curveTo(4.2,3.4,1.2,3.5).lineTo(1,3.5).curveTo(-4.9,3.5,-6.8,-1.7).closePath();
	this.shape_175.setTransform(-845.3,161.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.beginFill("#303030").beginStroke().moveTo(-3.2,-1.4).curveTo(-3,-3.4,-2.2,-5.4).lineTo(-1.4,-7).lineTo(-0.1,-5.8).curveTo(1.3,-4.2,2.2,-2.4).curveTo(4.9,2.9,1,6.9).lineTo(1,7).curveTo(-4.1,4.6,-3.2,-1.4).closePath();
	this.shape_176.setTransform(-852.7,150.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-3.3).curveTo(1.8,-4.9,4.7,-5.5).lineTo(4.6,-3.7).curveTo(4.3,-1.6,3.6,0.1).curveTo(1.4,5.7,-4.2,5.5).lineTo(-4.3,5.5).curveTo(-5.8,0.1,-0.7,-3.3).closePath();
	this.shape_177.setTransform(-842.7,147.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.beginFill("#303030").beginStroke().moveTo(-8.9,8.2).lineTo(8.4,-16).lineTo(8.9,-12.9).lineTo(-8.9,16).closePath();
	this.shape_178.setTransform(-854.5,165.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-1.8).lineTo(0.8,-5.7).lineTo(2.5,-1.4).curveTo(3.4,3.4,-0.6,5.6).lineTo(-0.6,5.7).curveTo(-4,2.6,-1.9,-1.8).closePath();
	this.shape_179.setTransform(-874.6,174.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,2.6).lineTo(-5.7,1.1).lineTo(-2,-1.8).curveTo(2.3,-4,5.6,-0.9).lineTo(5.7,-0.9).curveTo(4,2.7,0.2,2.7).lineTo(-1.2,2.6).closePath();
	this.shape_180.setTransform(-883.1,180.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0.4).lineTo(-4.1,-4.2).lineTo(0.4,-2.8).curveTo(4.7,-0.5,4,4).lineTo(4,4).lineTo(2.7,4.2).curveTo(-0.9,4.2,-2.7,0.4).closePath();
	this.shape_181.setTransform(-884.2,171.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.beginFill("#303030").beginStroke().moveTo(-8.6,-8.1).lineTo(-7.9,-11.1).lineTo(8.5,5.4).lineTo(7.2,11.1).closePath();
	this.shape_182.setTransform(-873.4,183.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.2).lineTo(-0.2,-4.5).lineTo(1.7,-1.3).curveTo(2.9,2.2,0.1,4.4).lineTo(0.1,4.5).curveTo(-2.8,2.5,-1.8,-1.2).closePath();
	this.shape_183.setTransform(-880.1,152.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,2.1).lineTo(-4.4,1.3).lineTo(-1.7,-1.2).curveTo(1.5,-3.2,4.3,-1).lineTo(4.4,-1).curveTo(3.2,2.1,-0.3,2.1).lineTo(-0.8,2.1).closePath();
	this.shape_184.setTransform(-886.4,157.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.7).lineTo(-4.2,-3).lineTo(-0.1,-2.6).curveTo(4,-1.4,4.2,2.6).lineTo(4.2,2.6).curveTo(3.1,3,2.1,3).curveTo(-0.4,3,-2.3,0.7).closePath();
	this.shape_185.setTransform(-890.1,151.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.beginFill("#303030").beginStroke().moveTo(-10.9,-5.1).lineTo(-11,-6.8).lineTo(10,3.2).lineTo(11,6.8).closePath();
	this.shape_186.setTransform(-876.4,159.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,-1.3).lineTo(0.3,-4.5).lineTo(1.8,-1.2).curveTo(2.8,2.5,-0.2,4.4).lineTo(-0.2,4.5).curveTo(-3,2.3,-1.6,-1.3).closePath();
	this.shape_187.setTransform(-878,195.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,2).lineTo(-4.4,0.8).lineTo(-1.6,-1.4).curveTo(1.8,-3.1,4.4,-0.7).lineTo(4.4,-0.7).curveTo(3.1,2.1,0.1,2.1).lineTo(-0.9,2).closePath();
	this.shape_188.setTransform(-884.6,200.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.5).lineTo(-4,-3.3).lineTo(0.1,-2.6).curveTo(4.1,-1,3.9,3).curveTo(3,3.3,2.2,3.3).curveTo(-0.5,3.3,-2.3,0.5).closePath();
	this.shape_189.setTransform(-887.7,193.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.beginFill("#303030").beginStroke().moveTo(-10.3,-6.1).lineTo(-10.4,-7.7).lineTo(9.7,4.1).lineTo(10.4,7.7).closePath();
	this.shape_190.setTransform(-874.8,202.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.beginFill("#303030").beginStroke().moveTo(-4.5,-0.9).lineTo(-4.5,-1).curveTo(-1.7,-3.4,1.7,-1.3).curveTo(3.4,-0.2,4.5,1.3).curveTo(2.8,2.1,0.8,2.2).lineTo(0.3,2.2).curveTo(-3.2,2.2,-4.5,-0.9).closePath();
	this.shape_191.setTransform(-847.8,205);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,-0.7).lineTo(-1.6,-4.4).lineTo(1.1,-1.8).curveTo(3.4,1.4,1.2,4.3).lineTo(1.2,4.4).curveTo(-2.3,3.3,-2.3,-0.7).closePath();
	this.shape_192.setTransform(-851.6,197.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.beginFill("#303030").beginStroke().moveTo(-3,3.4).lineTo(-3,3.4).curveTo(-3.8,-0.1,-0.4,-2.1).curveTo(1.3,-3.1,3.2,-3.4).curveTo(3.1,-1.6,2.3,0.2).curveTo(0.8,3.4,-2.3,3.4).lineTo(-3,3.4).closePath();
	this.shape_193.setTransform(-844.8,196.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.beginFill("#303030").beginStroke().moveTo(-8.5,4.1).curveTo(4.8,-6.9,5.9,-8.4).curveTo(6.6,-9.3,7.6,-9.1).curveTo(8.1,-8.9,8.5,-8.6).lineTo(-8.2,9.1).closePath();
	this.shape_194.setTransform(-854.1,207.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.beginFill("#303030").beginStroke().moveTo(-0.2,2.9).curveTo(-4.7,0.9,-4.3,-3.7).lineTo(-4.3,-3.7).curveTo(0.1,-4.7,2.7,-0.5).curveTo(4,1.6,4.3,3.9).curveTo(2,3.9,-0.2,2.9).closePath();
	this.shape_195.setTransform(-843.8,182.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.9).lineTo(1.1,-5.7).lineTo(2.6,-1.3).curveTo(3.3,3.5,-0.7,5.6).lineTo(-0.8,5.7).curveTo(-4,2.5,-1.8,-1.9).closePath();
	this.shape_196.setTransform(-844.1,171.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.beginFill("#303030").beginStroke().moveTo(-5.4,1.8).lineTo(-5.4,1.8).curveTo(-4.3,-2.6,0.7,-2.9).curveTo(3.1,-3,5.4,-2.2).curveTo(4.2,-0.2,2.4,1.3).curveTo(0.2,2.9,-1.9,2.9).curveTo(-3.6,2.9,-5.4,1.8).closePath();
	this.shape_197.setTransform(-835.4,174.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.beginFill("#303030").beginStroke().moveTo(-11.7,0).curveTo(9.3,-4.5,11.4,-5.5).curveTo(12.7,-6.1,13.6,-5.3).curveTo(14.1,-4.8,14.3,-4.3).lineTo(-14.3,5.8).closePath();
	this.shape_198.setTransform(-852.1,180.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.beginFill("#303030").beginStroke().moveTo(-3.7,2.6).lineTo(-3.8,2.6).curveTo(-3.9,-1.1,-0.1,-2.4).curveTo(1.9,-3,3.8,-2.9).curveTo(3.3,-1.1,2.2,0.5).curveTo(0.4,2.9,-2,2.9).curveTo(-2.8,2.9,-3.7,2.6).closePath();
	this.shape_199.setTransform(-862.3,152);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,3.5).lineTo(-4.4,3.5).curveTo(-4.8,-1,-0.2,-2.9).curveTo(2.1,-3.8,4.5,-3.8).curveTo(4,-1.5,2.7,0.5).curveTo(0.6,3.8,-2.6,3.8).curveTo(-3.4,3.8,-4.4,3.5).closePath();
	this.shape_200.setTransform(-861.3,141.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,-1.6).lineTo(0.1,-5.8).lineTo(2.3,-1.6).curveTo(3.7,3,-0,5.7).lineTo(-0,5.7).curveTo(-3.7,3.1,-2.2,-1.6).closePath();
	this.shape_201.setTransform(-866.1,131.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.beginFill("#303030").beginStroke().moveTo(-5.7,61.4).lineTo(-4.5,-61.4).lineTo(-3.2,-57.7).lineTo(5.7,61.4).closePath();
	this.shape_202.setTransform(-862.5,195.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-8,-19.2,-0,-19.2).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(7.9,19.1,-0,19.2).curveTo(-8,19.1,-13.5,13.5).closePath();
	this.shape_203.setTransform(-864.5,175);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.beginFill("#303030").beginStroke().moveTo(-8.9,8.8).curveTo(-12.5,5.2,-12.5,0).curveTo(-12.5,-5.2,-8.9,-8.9).curveTo(-5.2,-12.5,0,-12.5).curveTo(5.2,-12.5,8.9,-8.9).curveTo(12.5,-5.2,12.5,0).curveTo(12.5,5.2,8.9,8.8).curveTo(5.2,12.5,0,12.5).curveTo(-5.2,12.5,-8.9,8.8).closePath();
	this.shape_204.setTransform(-847.8,129.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,14).curveTo(-19.2,8.2,-19.2,0).curveTo(-19.2,-8.1,-13.5,-13.9).curveTo(-7.9,-19.8,0,-19.8).curveTo(8,-19.8,13.6,-13.9).curveTo(19.2,-8.2,19.2,0).curveTo(19.2,8.2,13.6,14).curveTo(8,19.7,0,19.7).curveTo(-7.9,19.7,-13.5,14).closePath();
	this.shape_205.setTransform(-847.8,146.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.6).curveTo(-19.2,7.9,-19.2,-0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-8,-19.2,-0,-19.2).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,-0).curveTo(19.2,7.9,13.6,13.6).curveTo(7.9,19.2,-0,19.2).curveTo(-8,19.2,-13.5,13.6).closePath();
	this.shape_206.setTransform(-834,161.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,7.9,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.1,0,-19.1).curveTo(8,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,7.9,13.6,13.5).curveTo(8,19.1,0,19.1).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_207.setTransform(-831.5,184.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.beginFill("#303030").beginStroke().moveTo(-8.3,8.3).curveTo(-11.8,4.9,-11.8,-0).curveTo(-11.8,-4.9,-8.3,-8.3).curveTo(-4.8,-11.8,0,-11.8).curveTo(4.9,-11.8,8.3,-8.3).curveTo(11.8,-4.9,11.8,-0).curveTo(11.8,4.9,8.3,8.3).curveTo(4.9,11.8,0,11.8).curveTo(-4.9,11.8,-8.3,8.3).closePath();
	this.shape_208.setTransform(-897.9,168);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.beginFill("#303030").beginStroke().moveTo(-8.4,8.3).curveTo(-11.8,4.9,-11.8,-0).curveTo(-11.8,-4.9,-8.4,-8.3).curveTo(-4.9,-11.8,0,-11.8).curveTo(4.9,-11.8,8.4,-8.3).curveTo(11.8,-4.8,11.8,-0).curveTo(11.8,4.9,8.4,8.3).curveTo(4.9,11.8,0,11.8).curveTo(-4.9,11.8,-8.4,8.3).closePath();
	this.shape_209.setTransform(-883.8,131.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,11.6).curveTo(-7,10.7,-9.7,6.7).curveTo(-12.5,2.6,-11.6,-2.2).curveTo(-10.7,-7,-6.7,-9.7).curveTo(-2.7,-12.5,2.2,-11.6).curveTo(7,-10.7,9.8,-6.7).curveTo(12.5,-2.7,11.6,2.1).curveTo(10.7,6.9,6.7,9.7).curveTo(3.6,11.8,0.2,11.8).curveTo(-1,11.8,-2.2,11.6).closePath();
	this.shape_210.setTransform(-849.8,189.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.2,-0,-19.1).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(7.9,19.1,-0,19.2).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_211.setTransform(-843.3,194.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.5).curveTo(-19.2,7.9,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.1,0,-19.1).curveTo(8,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,7.9,13.6,13.5).curveTo(8,19.1,0,19.1).curveTo(-8,19.1,-13.6,13.5).closePath();
	this.shape_212.setTransform(-862.2,202.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.1,0,-19.2).curveTo(8,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(8,19.1,0,19.2).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_213.setTransform(-881.4,196.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.2,0,-19.1).curveTo(8,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(8,19.1,0,19.2).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_214.setTransform(-897,185.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.beginFill("#303030").beginStroke().moveTo(-3.2,18.9).curveTo(-11,17.6,-15.6,11.1).curveTo(-20.2,4.7,-19,-3.2).curveTo(-17.7,-11,-11.2,-15.6).curveTo(-4.7,-20.2,3.1,-18.9).curveTo(11,-17.6,15.6,-11.1).curveTo(20.2,-4.6,18.9,3.1).curveTo(17.6,11,11.1,15.6).curveTo(6.1,19.2,0.2,19.2).curveTo(-1.4,19.2,-3.2,18.9).closePath();
	this.shape_215.setTransform(-867,145.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,18.9).curveTo(-11,17.6,-15.6,11.1).curveTo(-20.2,4.7,-18.9,-3.2).curveTo(-17.6,-11,-11.1,-15.6).curveTo(-4.7,-20.2,3.2,-18.9).curveTo(11,-17.6,15.6,-11.1).curveTo(20.2,-4.7,18.9,3.2).curveTo(17.7,11,11.2,15.6).curveTo(6.1,19.2,0.3,19.2).curveTo(-1.4,19.2,-3.1,18.9).closePath();
	this.shape_216.setTransform(-885.8,153.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.6).curveTo(-19.2,8,-19.2,-0).curveTo(-19.2,-7.9,-13.6,-13.5).curveTo(-8,-19.2,0,-19.2).curveTo(8,-19.2,13.6,-13.5).curveTo(19.2,-7.9,19.2,-0).curveTo(19.2,8,13.6,13.6).curveTo(8,19.2,0,19.2).curveTo(-8,19.2,-13.6,13.6).closePath();
	this.shape_217.setTransform(-866.4,120.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.beginFill("#303030").beginStroke().moveTo(-0,11.3).curveTo(-1.8,13.3,-8.6,13.1).lineTo(-15.8,12.5).curveTo(-16.6,12.5,-15.6,11.1).lineTo(-14.5,9.7).curveTo(-8.6,4,-0.1,-13.1).lineTo(0,-13.1).curveTo(2.2,-8.5,5.3,-3.2).curveTo(10.5,6,14.4,9.7).curveTo(17,12.5,15.7,12.5).curveTo(11.9,13,8.5,13.1).lineTo(7.3,13.1).curveTo(1.6,13.1,-0,11.3).closePath();
	this.shape_218.setTransform(-1116.9,124);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.beginFill("#303030").beginStroke().moveTo(-0,11.3).curveTo(-2.6,13.3,-12.4,13.1).lineTo(-22.9,12.5).curveTo(-24,12.5,-22.6,11.1).lineTo(-21,9.7).curveTo(-15.4,6,-7.7,-3.2).curveTo(-3.6,-8.1,-0.1,-13.1).lineTo(0,-13.1).curveTo(3.4,-8.2,7.7,-3.2).curveTo(15.3,6,20.9,9.7).curveTo(24.6,12.5,22.9,12.5).curveTo(17.3,13,12.3,13.1).lineTo(10.6,13.1).curveTo(2.3,13.1,-0,11.3).closePath();
	this.shape_219.setTransform(-1116.9,143.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.beginFill("#303030").beginStroke().moveTo(0.1,11.2).curveTo(-9.7,16.1,-31.1,16.2).curveTo(-37.7,16.2,-45.7,15.7).lineTo(-53.5,15.2).curveTo(-56.1,15.2,-52.8,13.5).curveTo(-51.1,12.6,-49,11.8).curveTo(-35.8,7,-18,-4.4).curveTo(-8.1,-10.8,-0.2,-16.9).lineTo(0.2,-16.9).curveTo(8,-10.8,18,-4.4).curveTo(35.8,7,49,11.8).lineTo(52.8,13.5).curveTo(56.1,15.2,53.5,15.2).curveTo(41.7,16.6,30.6,16.9).lineTo(27.9,16.9).curveTo(8.3,16.9,0.1,11.2).closePath();
	this.shape_220.setTransform(-1116.9,214.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.beginFill("#303030").beginStroke().moveTo(0,14.2).curveTo(-5.1,16.7,-24.3,16.4).lineTo(-44.9,15.6).curveTo(-47.1,15.6,-44.4,13.9).curveTo(-43,13.1,-41.1,12.2).curveTo(-30.1,7.5,-15.1,-4).curveTo(-6.4,-10.6,-0.2,-16.4).lineTo(0.2,-16.4).curveTo(6.5,-10.6,15.1,-4).curveTo(30.1,7.5,41.2,12.2).lineTo(44.4,13.9).curveTo(47.2,15.6,45,15.6).curveTo(34.1,16.3,24.3,16.4).lineTo(20.9,16.4).curveTo(4.6,16.4,0,14.2).closePath();
	this.shape_221.setTransform(-1116.9,195.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.beginFill("#303030").beginStroke().moveTo(0,11.3).curveTo(-4.3,13.2,-20.5,13).lineTo(-37.8,12.4).curveTo(-39.7,12.4,-37.3,11.1).lineTo(-34.6,9.7).curveTo(-25.3,5.9,-12.7,-3.2).curveTo(-6.2,-7.9,-0.1,-13.1).lineTo(0.1,-13.1).curveTo(6.3,-7.9,12.7,-3.2).curveTo(25.3,5.9,34.6,9.7).lineTo(37.4,11.1).curveTo(39.7,12.4,37.8,12.4).curveTo(28.7,12.9,20.5,13).lineTo(17.5,13.1).curveTo(3.9,13.1,0,11.3).closePath();
	this.shape_222.setTransform(-1116.9,177.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.beginFill("#303030").beginStroke().moveTo(0,11.3).curveTo(-3.2,13.3,-15.1,13.1).lineTo(-27.9,12.5).curveTo(-29.2,12.5,-27.5,11.1).curveTo(-26.7,10.4,-25.5,9.7).curveTo(-18.6,6,-9.4,-3.2).curveTo(-4.2,-8.3,-0.1,-13.1).lineTo(0.1,-13.1).curveTo(3.7,-8.7,9.4,-3.2).curveTo(18.6,5.9,25.5,9.7).lineTo(27.5,11.1).curveTo(29.3,12.5,27.9,12.5).curveTo(21.2,13,15.1,13.1).lineTo(12.9,13.1).curveTo(2.9,13.1,0,11.3).closePath();
	this.shape_223.setTransform(-1116.9,160.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.beginFill("#303030").beginStroke().moveTo(-5.9,27.4).lineTo(-5.9,-27.4).lineTo(5.9,-27.4).lineTo(5.9,27.4).closePath();
	this.shape_224.setTransform(-1116.6,229.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.beginFill("#303030").beginStroke().moveTo(-2.9,1.9).curveTo(-4.6,0.7,-6.1,-1).lineTo(-7.3,-2.5).lineTo(-5.4,-3.1).curveTo(-3.1,-3.7,-1.1,-3.7).curveTo(5.5,-3.7,7.2,2.1).lineTo(7.2,2).curveTo(4.8,3.7,2.3,3.7).curveTo(-0.2,3.7,-2.9,1.9).closePath();
	this.shape_225.setTransform(-652.8,111.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.beginFill("#303030").beginStroke().moveTo(-3.6,0.7).curveTo(-4.7,-1,-5.4,-3.1).lineTo(-5.9,-5).lineTo(-3.9,-4.8).curveTo(-1.6,-4.5,0.3,-3.8).curveTo(6.3,-1.3,5.8,4.7).lineTo(5.8,4.7).curveTo(4.5,5,3.4,5).curveTo(-0.8,5,-3.6,0.7).closePath();
	this.shape_226.setTransform(-652.9,99.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.beginFill("#303030").beginStroke().moveTo(-7.3,-1.8).lineTo(-7.3,-1.8).curveTo(-2.6,-5.6,2.8,-1.9).curveTo(5.5,-0.1,7.3,2.5).curveTo(4.5,3.7,1.3,3.8).lineTo(1,3.8).curveTo(-5.2,3.8,-7.3,-1.8).closePath();
	this.shape_227.setTransform(-623.4,130.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.beginFill("#303030").beginStroke().moveTo(-2.5,-2.5).curveTo(-1.7,-4.3,-0.2,-6.1).lineTo(1.1,-7.5).lineTo(2,-5.8).curveTo(3,-3.8,3.3,-1.8).curveTo(4.5,4.5,-0.8,7.5).lineTo(-0.8,7.6).curveTo(-5.3,3.5,-2.5,-2.5).closePath();
	this.shape_228.setTransform(-658.7,135.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-1.7).lineTo(0.4,-5.9).lineTo(2.4,-1.6).curveTo(3.7,3.3,-0.2,5.9).lineTo(-0.2,5.9).curveTo(-3.9,3,-2.1,-1.7).closePath();
	this.shape_229.setTransform(-663.7,163.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,2.7).lineTo(-5.8,1.1).lineTo(-2,-1.8).curveTo(2.4,-4.1,5.8,-0.9).curveTo(4.1,2.8,0.2,2.8).lineTo(-1.2,2.7).closePath();
	this.shape_230.setTransform(-672.4,169.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,3.5).curveTo(-3.6,3.2,-5.8,2.3).lineTo(-7.5,1.5).lineTo(-6.1,0.1).curveTo(-4.5,-1.4,-2.6,-2.3).curveTo(3.1,-5.3,7.5,-1.1).lineTo(7.5,-1.1).curveTo(5.3,3.6,0.2,3.6).lineTo(-1.5,3.5).closePath();
	this.shape_231.setTransform(-669.9,143.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.beginFill("#303030").beginStroke().moveTo(-7.4,-1.2).lineTo(-7.5,-1.2).curveTo(-3.1,-5.4,2.6,-2.3).curveTo(5.5,-0.7,7.5,1.7).curveTo(4.8,3.1,1.6,3.5).lineTo(0.2,3.6).curveTo(-5.1,3.6,-7.4,-1.2).closePath();
	this.shape_232.setTransform(-617.7,169.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,-0.9).curveTo(-3.9,-2.9,-3.5,-5.2).lineTo(-3,-7.1).lineTo(-1.4,-6.1).curveTo(0.4,-4.6,1.7,-3.1).curveTo(5.7,2,2.4,7.1).lineTo(2.4,7.1).curveTo(-3.4,5.6,-3.8,-0.9).closePath();
	this.shape_233.setTransform(-624.7,157.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.beginFill("#303030").beginStroke().moveTo(-3.4,-1.5).curveTo(-3.1,-3.6,-2.3,-5.8).lineTo(-1.4,-7.5).lineTo(-0.1,-6.1).curveTo(1.4,-4.4,2.4,-2.6).curveTo(5.3,3.1,1.1,7.5).lineTo(1.2,7.5).curveTo(-4.3,4.9,-3.4,-1.5).closePath();
	this.shape_234.setTransform(-631.4,119.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,0.7).curveTo(-4.1,-0.8,-4.7,-2.7).lineTo(-5.3,-4.4).lineTo(0.1,-3.4).curveTo(5.4,-1.4,5.2,4).lineTo(5.2,4).curveTo(4,4.4,2.9,4.4).curveTo(-0.6,4.4,-3.1,0.7).closePath();
	this.shape_235.setTransform(-676.5,160.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.beginFill("#303030").beginStroke().moveTo(-3.6,0.6).curveTo(-4.5,-1.3,-5.1,-3.6).lineTo(-5.4,-5.5).lineTo(-3.5,-5.1).curveTo(-1.3,-4.6,0.5,-3.7).curveTo(6.2,-0.6,5.2,5.3).lineTo(5.3,5.4).lineTo(3.6,5.5).curveTo(-1.1,5.5,-3.6,0.6).closePath();
	this.shape_236.setTransform(-671.3,132);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-3.5).curveTo(1.9,-5.3,5,-5.9).lineTo(4.8,-4).curveTo(4.6,-1.7,3.8,0.1).curveTo(1.5,6.2,-4.5,5.9).lineTo(-4.6,5.9).curveTo(-6.2,0.1,-0.8,-3.5).closePath();
	this.shape_237.setTransform(-613.7,155);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-3.5).curveTo(1.9,-5.3,5,-5.9).lineTo(4.8,-4).curveTo(4.6,-1.7,3.8,0.1).curveTo(1.5,6.1,-4.5,5.9).lineTo(-4.6,5.9).curveTo(-6.3,0.1,-0.8,-3.5).closePath();
	this.shape_238.setTransform(-620.6,115.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.beginFill("#303030").beginStroke().moveTo(-5,3.5).curveTo(-5.1,-1.4,-0,-3.1).curveTo(2.5,-4,5,-3.8).curveTo(4.4,-1.4,2.9,0.7).curveTo(0.5,3.9,-2.7,3.9).curveTo(-3.8,3.9,-5,3.5).closePath();
	this.shape_239.setTransform(-641.3,116.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.beginFill("#303030").beginStroke().moveTo(-5.8,4.7).curveTo(-6.3,-1.3,-0.3,-3.8).curveTo(2.8,-5,5.9,-5).curveTo(5.3,-2,3.6,0.7).curveTo(0.8,5,-3.5,5).curveTo(-4.6,5,-5.8,4.7).closePath();
	this.shape_240.setTransform(-639.9,102.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.beginFill("#303030").beginStroke().moveTo(-2.9,-2.1).curveTo(-2.3,-4,-1,-6).lineTo(0.1,-7.6).lineTo(1.2,-6).curveTo(2.4,-4.1,3,-2.1).curveTo(4.9,4,-0,7.6).lineTo(-0,7.6).curveTo(-5,4.1,-2.9,-2.1).closePath();
	this.shape_241.setTransform(-646.3,89.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.beginFill("#303030").beginStroke().moveTo(-9.5,8.8).lineTo(9,-17.2).lineTo(9.5,-13.8).lineTo(-9.5,17.2).closePath();
	this.shape_242.setTransform(-633.2,134.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.beginFill("#303030").beginStroke().moveTo(-13.7,-8).lineTo(-13.7,-10.2).lineTo(12.8,5.4).lineTo(13.7,10.2).closePath();
	this.shape_243.setTransform(-659.5,172.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.beginFill("#303030").beginStroke().moveTo(-11.3,-10.7).lineTo(-10.5,-14.7).lineTo(11.3,7.1).lineTo(9.6,14.7).closePath();
	this.shape_244.setTransform(-657.1,147.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.beginFill("#303030").beginStroke().moveTo(-13.4,7.3).curveTo(7.5,-11.9,9.2,-14.4).curveTo(10.3,-16,11.9,-15.7).curveTo(12.8,-15.5,13.4,-15).lineTo(-12.6,15.7).closePath();
	this.shape_245.setTransform(-628.2,173.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.beginFill("#303030").beginStroke().moveTo(-7.5,82.2).lineTo(-5.9,-82.2).lineTo(-4.2,-77.3).lineTo(7.5,82.2).closePath();
	this.shape_246.setTransform(-641.6,174.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,2).curveTo(-5,0.7,-6.7,-1.2).lineTo(-7.9,-2.8).lineTo(-5.9,-3.5).curveTo(-3.4,-4.1,-1.2,-4.1).curveTo(5.9,-4.1,7.9,2.2).lineTo(7.9,2.2).curveTo(5.3,4.1,2.5,4.1).curveTo(-0.3,4.1,-3.2,2).closePath();
	this.shape_247.setTransform(-504.3,100.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.9,0.8).curveTo(-5.1,-1.1,-5.9,-3.5).lineTo(-6.4,-5.5).lineTo(-4.3,-5.3).curveTo(-1.8,-5,0.3,-4.1).curveTo(6.9,-1.4,6.4,5.2).lineTo(6.3,5.1).curveTo(5,5.5,3.7,5.5).curveTo(-0.9,5.5,-3.9,0.8).closePath();
	this.shape_248.setTransform(-504.3,86.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9.8,-2.5).lineTo(-9.9,-2.5).curveTo(-3.4,-7.6,3.9,-2.6).curveTo(7.5,-0.1,9.9,3.4).curveTo(6.1,5,1.7,5.1).lineTo(1.4,5.1).curveTo(-7.1,5.1,-9.8,-2.5).closePath();
	this.shape_249.setTransform(-467.1,119.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.7,-2.1).curveTo(-4.3,-4.8,-3.1,-7.7).lineTo(-2,-10.1).lineTo(-0.2,-8.3).curveTo(1.9,-6,3.2,-3.6).curveTo(7.2,4.2,1.5,10.1).lineTo(1.5,10.1).curveTo(-5.9,6.6,-4.7,-2.1).closePath();
	this.shape_250.setTransform(-477.8,103.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-4.7).curveTo(2.6,-7.1,6.7,-8).lineTo(6.5,-5.5).curveTo(6.2,-2.3,5.2,0.2).curveTo(2,8.3,-6.2,7.9).lineTo(-6.2,8).curveTo(-8.5,0.1,-1.1,-4.7).closePath();
	this.shape_251.setTransform(-463.3,99.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.8,11.9).lineTo(12.1,-23.2).lineTo(12.8,-18.6).lineTo(-12.8,23.2).closePath();
	this.shape_252.setTransform(-480.4,124.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.8,-2.7).curveTo(-1.8,-4.7,-0.2,-6.7).lineTo(1.2,-8.2).lineTo(2.2,-6.4).curveTo(3.3,-4.1,3.7,-1.9).curveTo(4.9,5,-0.8,8.2).lineTo(-0.9,8.3).curveTo(-5.8,3.8,-2.8,-2.7).closePath();
	this.shape_253.setTransform(-509.5,138.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,3.8).curveTo(-3.9,3.5,-6.3,2.5).lineTo(-8.2,1.6).lineTo(-6.7,0.1).curveTo(-4.9,-1.6,-2.9,-2.6).curveTo(3.3,-5.8,8.2,-1.2).lineTo(8.2,-1.2).curveTo(5.8,3.9,0.2,3.9).lineTo(-1.7,3.8).closePath();
	this.shape_254.setTransform(-521.7,146.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4,0.6).curveTo(-5,-1.4,-5.5,-3.9).lineTo(-5.9,-6).lineTo(-3.8,-5.6).curveTo(-1.4,-5.1,0.6,-4).curveTo(6.8,-0.7,5.7,5.8).lineTo(5.8,5.8).curveTo(4.8,6,3.9,6).curveTo(-1.2,6,-4,0.6).closePath();
	this.shape_255.setTransform(-523.3,134.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.4,-11.8).lineTo(-11.5,-16).lineTo(12.4,7.8).lineTo(10.5,16).closePath();
	this.shape_256.setTransform(-507.8,151.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-1.7).lineTo(-0.2,-6.4).lineTo(2.4,-1.9).curveTo(4.3,3.2,0.2,6.4).lineTo(0.2,6.4).curveTo(-4.1,3.7,-2.6,-1.7).closePath();
	this.shape_257.setTransform(-517.5,106.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,3.1).lineTo(-6.3,1.8).lineTo(-2.4,-1.7).curveTo(2.2,-4.6,6.2,-1.4).lineTo(6.3,-1.4).curveTo(4.6,3.1,-0.4,3.1).lineTo(-1.1,3.1).closePath();
	this.shape_258.setTransform(-526.5,113.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,1).curveTo(-4.5,-0.6,-5.4,-2.6).lineTo(-6.1,-4.4).lineTo(-4.3,-4.4).curveTo(-2.1,-4.3,-0.2,-3.8).curveTo(5.8,-2.1,6.1,3.7).lineTo(6.1,3.8).curveTo(4.5,4.4,3,4.4).curveTo(-0.5,4.4,-3.3,1).closePath();
	this.shape_259.setTransform(-531.8,104.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15.7,-7.5).lineTo(-15.9,-9.9).lineTo(14.4,4.7).lineTo(15.9,9.8).closePath();
	this.shape_260.setTransform(-512.1,116.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.4,-1.9).lineTo(0.4,-6.5).lineTo(2.6,-1.8).curveTo(4,3.6,-0.3,6.4).lineTo(-0.3,6.4).curveTo(-4.3,3.3,-2.4,-1.9).closePath();
	this.shape_261.setTransform(-514.3,168.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.3,2.9).lineTo(-6.4,1.2).lineTo(-2.3,-2).curveTo(2.6,-4.5,6.3,-0.9).lineTo(6.4,-1).curveTo(4.5,3,0.2,3).lineTo(-1.3,2.9).closePath();
	this.shape_262.setTransform(-523.9,174.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.4,0.8).curveTo(-4.5,-0.8,-5.2,-3).lineTo(-5.8,-4.8).lineTo(-3.9,-4.7).curveTo(-1.7,-4.4,0.1,-3.7).curveTo(5.9,-1.5,5.7,4.4).lineTo(5.7,4.4).curveTo(4.4,4.8,3.2,4.8).curveTo(-0.7,4.8,-3.4,0.8).closePath();
	this.shape_263.setTransform(-528.4,165.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15,-8.8).lineTo(-15,-11.2).lineTo(14,5.9).lineTo(15,11.2).closePath();
	this.shape_264.setTransform(-509.7,178.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.5,-1.3).lineTo(-6.5,-1.4).curveTo(-2.4,-4.8,2.4,-1.8).curveTo(4.9,-0.3,6.5,1.9).curveTo(4.1,3,1.2,3.2).lineTo(0.5,3.2).curveTo(-4.5,3.2,-6.5,-1.3).closePath();
	this.shape_265.setTransform(-470.6,182);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,-0.9).lineTo(-2.3,-6.3).lineTo(1.6,-2.6).curveTo(4.9,2,1.8,6.3).lineTo(1.8,6.4).curveTo(-3.3,4.8,-3.3,-0.9).closePath();
	this.shape_266.setTransform(-476.2,171.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.6,-3.1).curveTo(1.9,-4.6,4.6,-5).curveTo(4.5,-2.3,3.3,0.3).curveTo(1,5.4,-4.3,4.9).lineTo(-4.4,5).curveTo(-5.6,-0.2,-0.6,-3.1).closePath();
	this.shape_267.setTransform(-466.4,169.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.2,5.9).curveTo(7,-10.1,8.6,-12.2).curveTo(9.5,-13.5,11,-13.1).curveTo(11.7,-12.9,12.3,-12.5).lineTo(-11.9,13.2).closePath();
	this.shape_268.setTransform(-479.8,185.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.3,4.1).curveTo(-6.7,1.3,-6.2,-5.3).lineTo(-6.3,-5.4).curveTo(0.2,-6.9,3.9,-0.8).curveTo(5.7,2.3,6.2,5.7).curveTo(2.9,5.6,-0.3,4.1).closePath();
	this.shape_269.setTransform(-464.9,149.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-2.8).curveTo(-1.6,-4.7,0.1,-6.7).lineTo(1.6,-8.2).lineTo(2.5,-6.3).curveTo(3.5,-4,3.8,-1.8).curveTo(4.8,5.2,-1.1,8.2).lineTo(-1.1,8.2).curveTo(-5.8,3.6,-2.6,-2.8).closePath();
	this.shape_270.setTransform(-465.3,134);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.7,2.6).lineTo(-7.8,2.6).curveTo(-6.1,-3.8,1,-4.2).curveTo(4.6,-4.4,7.8,-3.3).curveTo(6.2,-0.4,3.3,1.8).curveTo(0.3,4.2,-2.7,4.2).curveTo(-5.2,4.2,-7.7,2.6).closePath();
	this.shape_271.setTransform(-452.8,138.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.9,0).curveTo(13.5,-6.5,16.5,-8).curveTo(18.3,-8.9,19.7,-7.6).curveTo(20.4,-7,20.7,-6.2).lineTo(-20.7,8.4).closePath();
	this.shape_272.setTransform(-476.8,147);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.4,3.8).lineTo(-5.5,3.9).curveTo(-5.6,-1.5,-0.1,-3.4).curveTo(2.7,-4.3,5.5,-4.2).curveTo(4.8,-1.5,3.1,0.8).curveTo(0.6,4.2,-2.9,4.2).curveTo(-4.1,4.2,-5.4,3.8).closePath();
	this.shape_273.setTransform(-491.7,105.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.4,5.1).lineTo(-6.4,5.1).curveTo(-7,-1.5,-0.3,-4.1).curveTo(3,-5.5,6.4,-5.5).curveTo(5.8,-2.2,3.9,0.8).curveTo(0.9,5.5,-3.7,5.5).curveTo(-5,5.5,-6.4,5.1).closePath();
	this.shape_274.setTransform(-490.1,89.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,-2.3).curveTo(-2.5,-4.4,-1.1,-6.6).lineTo(0.1,-8.3).lineTo(1.3,-6.6).curveTo(2.6,-4.5,3.3,-2.4).curveTo(5.4,4.4,-0,8.2).lineTo(-0,8.3).curveTo(-5.4,4.5,-3.2,-2.3).closePath();
	this.shape_275.setTransform(-497.1,76);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.3,88.9).lineTo(-6.4,-88.9).lineTo(-4.6,-83.5).lineTo(8.2,88.9).closePath();
	this.shape_276.setTransform(-492,167.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.7,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.5,-19.7,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.7,-19.6).curveTo(27.8,-11.5,27.8,0).curveTo(27.8,11.5,19.7,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.7,19.6).closePath();
	this.shape_277.setTransform(-494.9,138.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.8,12.8).curveTo(-18.1,7.5,-18.1,0).curveTo(-18.1,-7.5,-12.8,-12.8).curveTo(-7.5,-18.1,-0,-18.1).curveTo(7.5,-18.1,12.8,-12.8).curveTo(18.1,-7.5,18.1,0).curveTo(18.1,7.5,12.8,12.8).curveTo(7.5,18.1,-0,18.1).curveTo(-7.5,18.1,-12.8,12.8).closePath();
	this.shape_278.setTransform(-470.7,72.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.7,20.2).curveTo(-27.8,11.8,-27.8,-0).curveTo(-27.8,-11.8,-19.7,-20.2).curveTo(-11.5,-28.6,-0,-28.6).curveTo(11.5,-28.6,19.7,-20.2).curveTo(27.8,-11.8,27.8,-0).curveTo(27.8,11.8,19.7,20.2).curveTo(11.5,28.6,-0,28.6).curveTo(-11.5,28.6,-19.7,20.2).closePath();
	this.shape_279.setTransform(-470.7,97.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.7,11.5,-27.7,0).curveTo(-27.7,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_280.setTransform(-450.7,118.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.7,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.7,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.8,-0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.7,19.6).closePath();
	this.shape_281.setTransform(-447.1,152);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,-0).curveTo(-17.1,-7,-12.1,-12.1).curveTo(-7.1,-17.1,-0,-17).curveTo(7.1,-17.1,12.1,-12.1).curveTo(17.1,-7,17.1,-0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17.1,-0,17).curveTo(-7.1,17.1,-12.1,12.1).closePath();
	this.shape_282.setTransform(-543.1,128.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,0).curveTo(-17.1,-7.1,-12.1,-12).curveTo(-7.1,-17.1,0,-17.1).curveTo(7.1,-17.1,12.1,-12).curveTo(17.1,-7.1,17.1,0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17,0,17).curveTo(-7.1,17,-12.1,12.1).closePath();
	this.shape_283.setTransform(-522.7,75.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,16.7).curveTo(-10.1,15.5,-14.1,9.6).curveTo(-18.1,3.8,-16.8,-3.2).curveTo(-15.5,-10.1,-9.7,-14.1).curveTo(-3.9,-18.1,3.1,-16.8).curveTo(10,-15.5,14.1,-9.7).curveTo(18.1,-3.8,16.8,3.1).curveTo(15.5,10,9.7,14).curveTo(5.3,17.1,0.2,17.1).curveTo(-1.4,17.1,-3.1,16.7).closePath();
	this.shape_284.setTransform(-473.6,160.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_285.setTransform(-464.2,167.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.7,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_286.setTransform(-491.6,178.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.4,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.4,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_287.setTransform(-519.3,169.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_288.setTransform(-541.9,154.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.6,27.3).curveTo(-15.9,25.5,-22.6,16.1).curveTo(-29.3,6.8,-27.4,-4.6).curveTo(-25.5,-15.9,-16.2,-22.6).curveTo(-6.8,-29.2,4.5,-27.3).curveTo(15.9,-25.4,22.6,-16.1).curveTo(29.3,-6.8,27.4,4.6).curveTo(25.5,15.9,16.1,22.6).curveTo(8.8,27.7,0.4,27.7).curveTo(-2,27.7,-4.6,27.3).closePath();
	this.shape_289.setTransform(-498.4,95.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.6,27.3).curveTo(-15.9,25.4,-22.6,16.1).curveTo(-29.3,6.7,-27.4,-4.6).curveTo(-25.5,-15.9,-16.1,-22.6).curveTo(-6.8,-29.2,4.6,-27.4).curveTo(15.9,-25.5,22.6,-16.1).curveTo(29.3,-6.8,27.4,4.5).curveTo(25.5,15.9,16.1,22.5).curveTo(8.8,27.8,0.3,27.8).curveTo(-2.1,27.8,-4.6,27.3).closePath();
	this.shape_290.setTransform(-525.6,107.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.4,27.8,0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_291.setTransform(-497.6,59.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,-2.5).curveTo(-0,-4.9,2.3,-6.5).lineTo(2.8,-4.9).curveTo(3.3,-2.9,3.3,-1.1).curveTo(3.4,4.6,-1.7,6.4).lineTo(-1.7,6.5).curveTo(-5,2.2,-1.7,-2.5).closePath();
	this.shape_292.setTransform(-1045.7,90.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.4,1).curveTo(-4.6,-0.6,-5.6,-2.7).lineTo(-6.3,-4.5).lineTo(-4.4,-4.6).curveTo(-2.1,-4.5,-0.2,-3.9).curveTo(6,-2.1,6.2,3.9).lineTo(6.3,3.9).curveTo(4.6,4.6,3,4.6).curveTo(-0.5,4.6,-3.4,1).closePath();
	this.shape_293.setTransform(-1056.5,87.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,-2.1).curveTo(-2.3,-4,-1.1,-6).lineTo(0,-7.6).lineTo(1.1,-6).curveTo(2.3,-4.1,2.9,-2.2).curveTo(4.9,3.9,0,7.5).lineTo(0,7.6).curveTo(-4.9,4.1,-2.9,-2.1).closePath();
	this.shape_294.setTransform(-1051.5,75);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,3.4).lineTo(-3.3,3.4).curveTo(-4,-0.4,-0.4,-2.3).curveTo(1.4,-3.3,3.4,-3.5).curveTo(3.2,-1.5,2.3,0.3).curveTo(0.8,3.5,-2.3,3.5).lineTo(-3.3,3.4).closePath();
	this.shape_295.setTransform(-1010.5,160.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,3.4).lineTo(-3.3,3.4).curveTo(-4,-0.3,-0.3,-2.3).curveTo(1.5,-3.2,3.4,-3.5).curveTo(3.3,-1.5,2.4,0.3).curveTo(0.8,3.5,-2.4,3.5).lineTo(-3.2,3.4).closePath();
	this.shape_296.setTransform(-1012.4,151);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,3.4).lineTo(-3.3,3.4).curveTo(-4,-0.4,-0.4,-2.3).curveTo(1.5,-3.3,3.4,-3.5).curveTo(3.3,-1.5,2.4,0.3).curveTo(0.8,3.5,-2.3,3.5).lineTo(-3.2,3.4).closePath();
	this.shape_297.setTransform(-1015.2,144.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.2,0.6).lineTo(-3.9,-3).lineTo(-0,-2.5).curveTo(3.8,-1.2,3.8,2.6).lineTo(3.9,2.7).curveTo(2.9,3,2,3).curveTo(-0.4,3,-2.2,0.6).closePath();
	this.shape_298.setTransform(-1021.4,150.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,0.6).lineTo(-3.9,-3).lineTo(-0.1,-2.5).curveTo(3.8,-1.2,3.9,2.6).lineTo(3.9,2.6).curveTo(2.9,3,2,3).curveTo(-0.4,3,-2.1,0.6).closePath();
	this.shape_299.setTransform(-1023.3,142.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.6,1.5).lineTo(-4.7,-0.9).lineTo(-1,-2.2).curveTo(3,-2.7,4.7,0.6).lineTo(4.7,0.7).curveTo(3.2,2.3,1.2,2.3).curveTo(-0.1,2.3,-1.6,1.5).closePath();
	this.shape_300.setTransform(-1019.8,159.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-2).curveTo(-2,-3.7,-0.9,-5.5).lineTo(0.1,-6.9).lineTo(1.1,-5.5).curveTo(2.2,-3.7,2.7,-2).curveTo(4.4,3.6,-0,6.8).lineTo(-0,6.9).curveTo(-4.5,3.7,-2.6,-2).closePath();
	this.shape_301.setTransform(-1018.9,132);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.beginFill("#6D6C6C").beginStroke().moveTo(3.9,19.3).curveTo(3.1,18.9,1.9,16.4).lineTo(0.4,13.2).curveTo(-2.4,7.3,-3.5,2).curveTo(-3.8,0.5,-5.1,-3.3).curveTo(-6.2,-6.7,-6.5,-8.7).curveTo(-6.8,-11.4,-6.6,-14.4).curveTo(-6.3,-18.6,-5.2,-19.4).curveTo(-5.3,-17.6,-5,-15.3).lineTo(-4.4,-11.4).curveTo(-4.2,-9.4,-3.5,-7.1).lineTo(-2.1,-3).curveTo(-0.9,0.4,1,7.2).curveTo(2.9,12.6,6.6,15.6).curveTo(6.9,16.6,6.1,17.9).curveTo(5.3,19.4,4.4,19.4).lineTo(3.9,19.3).closePath();
	this.shape_302.setTransform(-1013.3,154.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-1.4).lineTo(-0.9,-6).lineTo(2,-2.1).curveTo(4.2,2.6,0.7,5.9).lineTo(0.7,6).curveTo(-3.6,3.8,-2.7,-1.4).closePath();
	this.shape_303.setTransform(-999.8,92.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-1.4).lineTo(-0.9,-6).lineTo(2,-2).curveTo(4.2,2.6,0.7,6).lineTo(0.7,6).curveTo(-3.6,3.8,-2.7,-1.4).closePath();
	this.shape_304.setTransform(-1010.4,87);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-1.3).lineTo(-0.9,-6).lineTo(2,-2).curveTo(4.2,2.6,0.7,6).lineTo(0.7,6).curveTo(-3.6,3.8,-2.7,-1.3).closePath();
	this.shape_305.setTransform(-1019.5,84.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1,2.9).lineTo(-5.8,1.9).lineTo(-2.3,-1.6).curveTo(1.9,-4.4,5.8,-1.5).lineTo(5.8,-1.5).curveTo(4.3,3,-0.7,3).lineTo(-1,2.9).closePath();
	this.shape_306.setTransform(-1017.9,95.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1,2.9).lineTo(-5.8,1.9).lineTo(-2.3,-1.5).curveTo(1.9,-4.4,5.8,-1.5).lineTo(5.8,-1.5).curveTo(4.3,2.9,-0.6,2.9).lineTo(-1,2.9).closePath();
	this.shape_307.setTransform(-1027.6,91);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,-0.4).curveTo(-0.4,-4.9,4.3,-4).lineTo(4.4,-4).curveTo(5,0.8,0.3,2.9).lineTo(-4.5,4.2).closePath();
	this.shape_308.setTransform(-1007.9,100.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4,0.9).curveTo(-5.3,-1,-6.2,-3.5).lineTo(-6.8,-5.7).lineTo(-4.6,-5.5).curveTo(-2,-5.2,0.1,-4.4).curveTo(7,-1.7,6.7,5.2).lineTo(6.8,5.2).curveTo(5.2,5.7,3.7,5.7).curveTo(-0.9,5.7,-4,0.9).closePath();
	this.shape_309.setTransform(-1034.4,79);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.beginFill("#6D6C6C").beginStroke().moveTo(18,10.1).lineTo(13.6,9.1).curveTo(5.6,7.4,-0.5,4.4).curveTo(-2.4,3.4,-7.1,1.8).curveTo(-11.3,0.3,-13.5,-1).curveTo(-16.3,-2.8,-19.3,-5.3).curveTo(-23.3,-8.8,-23.1,-10.6).curveTo(-21.5,-9.1,-18.9,-7.6).lineTo(-14.6,-5.1).curveTo(-12.5,-3.8,-9.7,-2.7).lineTo(-4.5,-1).curveTo(-0.2,0.4,8.1,3.9).curveTo(15,6.2,20.7,4.8).curveTo(22,5.3,22.7,7.1).curveTo(23.7,9.5,22.3,10.3).curveTo(21.9,10.6,21.1,10.6).curveTo(20,10.6,18,10.1).closePath();
	this.shape_310.setTransform(-1007.7,91.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.6,-0.3).lineTo(-3.6,-5.8).lineTo(0.9,-2.9).curveTo(5,1,2.8,5.8).lineTo(2.8,5.9).curveTo(-2.5,5.3,-3.6,-0.3).closePath();
	this.shape_311.setTransform(-969.5,77.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.6,0.7).lineTo(-6.6,0.7).curveTo(-4.1,-4,1.5,-2.9).curveTo(4.3,-2.3,6.6,-0.8).curveTo(4.8,1.1,2.2,2.3).curveTo(0.3,3.1,-1.4,3.1).curveTo(-4.3,3.1,-6.6,0.7).closePath();
	this.shape_312.setTransform(-963.3,88.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.8,4.5).lineTo(-4.8,4.5).curveTo(-5.6,-0.8,-0.4,-3.2).curveTo(2.2,-4.4,4.9,-4.6).curveTo(4.6,-2,3.2,0.5).curveTo(0.9,4.6,-3.2,4.6).lineTo(-4.8,4.5).closePath();
	this.shape_313.setTransform(-959.5,73.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,-2.2).lineTo(1.3,-6.6).lineTo(2,-5.1).curveTo(2.8,-3.2,3,-1.5).curveTo(3.8,4.1,-0.9,6.5).lineTo(-0.9,6.6).curveTo(-4.7,2.9,-2.1,-2.2).closePath();
	this.shape_314.setTransform(-962.1,59.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.7,19).lineTo(-9.4,18.8).curveTo(-5,14,-1.5,8.9).curveTo(2.6,2.9,4.5,-2.1).curveTo(6,-6.1,7.1,-11.7).lineTo(8.8,-21.3).curveTo(10,-15.8,8.7,-8.2).curveTo(7.5,-1.1,4.7,4.3).curveTo(3.8,6.1,1.6,9.4).curveTo(-0.8,12.9,-1.7,14.7).curveTo(-2.9,16.8,-6.3,19.8).curveTo(-7.9,21.3,-8.6,21.3).curveTo(-9.4,21.3,-8.7,19).closePath();
	this.shape_315.setTransform(-972,84.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-2.1).lineTo(0.7,-6.7).lineTo(1.5,-5.2).curveTo(2.5,-3.4,2.8,-1.7).curveTo(4.1,3.8,-0.4,6.6).lineTo(-0.4,6.7).curveTo(-4.5,3.2,-2.3,-2.1).closePath();
	this.shape_316.setTransform(-952.9,161.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.5,3.5).curveTo(-5,2.5,-5.9,-2.7).lineTo(-5.9,-2.7).curveTo(-1.2,-5.2,2.8,-1.2).curveTo(4.9,0.9,5.9,3.4).curveTo(4.5,3.7,3,3.7).curveTo(1.8,3.7,0.5,3.5).closePath();
	this.shape_317.setTransform(-953,173.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.5,1).lineTo(-6.6,1).curveTo(-4.3,-3.8,1.4,-3).curveTo(4.2,-2.6,6.6,-1.2).curveTo(4.8,0.8,2.3,2.1).curveTo(0.2,3.1,-1.6,3.1).curveTo(-4.3,3.1,-6.5,1).closePath();
	this.shape_318.setTransform(-941.7,164);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.4,4.8).lineTo(-4.5,4.9).curveTo(-5.6,-0.3,-0.6,-3.1).curveTo(1.9,-4.5,4.6,-4.9).curveTo(4.5,-2.2,3.3,0.4).curveTo(1.1,4.9,-3.2,4.9).lineTo(-4.4,4.8).closePath();
	this.shape_319.setTransform(-936.2,151.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-17.8,10.8).lineTo(-18.3,10.2).curveTo(-12,8.7,-6.2,6.4).curveTo(0.5,3.7,4.9,0.6).curveTo(8.4,-1.9,12.4,-5.9).lineTo(19.1,-12.9).curveTo(17.1,-7.7,11.8,-2.1).curveTo(6.8,3.1,1.6,6).curveTo(-0.2,7,-4,8.6).curveTo(-7.8,10.1,-9.6,11.1).curveTo(-11.8,12.2,-16.3,12.8).lineTo(-17.9,12.9).curveTo(-20.5,12.9,-17.8,10.8).closePath();
	this.shape_320.setTransform(-958.2,166.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.3,2.7).lineTo(-2.7,-1.4).curveTo(1.7,-4.9,6.2,-2.1).lineTo(6.2,-2.1).curveTo(4.9,3.1,-0.8,3.4).closePath();
	this.shape_321.setTransform(-1003.6,127);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.5,-1.9).lineTo(0.3,-6.7).lineTo(2.7,-1.8).curveTo(4.2,3.6,-0.1,6.6).lineTo(-0.1,6.7).curveTo(-4.4,3.5,-2.5,-1.9).closePath();
	this.shape_322.setTransform(-992.6,122.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.4,-0).lineTo(-4,-5.5).lineTo(0.8,-3).curveTo(5.3,0.4,3.6,5.4).lineTo(3.6,5.5).curveTo(-1.7,5.4,-3.4,-0).closePath();
	this.shape_323.setTransform(-1006.2,116.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.5,1.6).curveTo(-4,0.6,-5.3,-1).lineTo(-6.4,-2.3).lineTo(-1.1,-3.3).curveTo(4.6,-3.3,6.3,1.7).lineTo(6.4,1.7).curveTo(4.3,3.3,2.1,3.3).curveTo(-0.2,3.3,-2.5,1.6).closePath();
	this.shape_324.setTransform(-1020.2,117);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.beginFill("#6D6C6C").beginStroke().moveTo(8.6,2.7).curveTo(3.3,-2.2,-1.4,-4.8).curveTo(-5.2,-7,-10.6,-8.8).lineTo(-19.8,-11.9).curveTo(-14.2,-12.3,-6.9,-9.9).curveTo(0,-7.7,4.9,-4.2).curveTo(6.6,-3,9.5,-0.3).curveTo(12.6,2.5,14.2,3.7).curveTo(16.2,5.2,18.7,9).curveTo(21.3,13.1,17.5,11.3).lineTo(17.2,11.9).curveTo(13.1,6.9,8.6,2.7).closePath();
	this.shape_325.setTransform(-997.3,130.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,0.6).lineTo(-4.9,-4.6).lineTo(0.3,-3.3).curveTo(5.4,-0.9,4.8,4.4).lineTo(4.9,4.4).curveTo(3.9,4.6,3,4.6).curveTo(-0.8,4.6,-3.1,0.6).closePath();
	this.shape_326.setTransform(-987.4,53.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6,2.5).lineTo(-6.1,2.5).curveTo(-5.1,-2.7,0.6,-3.4).curveTo(3.4,-3.8,6.1,-3.1).curveTo(4.9,-0.7,2.8,1.2).curveTo(0.3,3.5,-2.4,3.5).curveTo(-4.2,3.5,-6,2.5).closePath();
	this.shape_327.setTransform(-978,61.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-2.8).curveTo(1,-4.9,3.5,-5.8).lineTo(3.7,-4.2).curveTo(3.8,-2.2,3.5,-0.4).curveTo(2.4,5.1,-2.8,5.8).lineTo(-2.9,5.9).curveTo(-5.2,1.1,-1.1,-2.8).closePath();
	this.shape_328.setTransform(-979.2,46.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3,-1.4).lineTo(-1.2,-6.6).lineTo(2.1,-2.3).curveTo(4.6,2.7,0.9,6.6).lineTo(0.9,6.6).curveTo(-3.9,4.3,-3,-1.4).closePath();
	this.shape_329.setTransform(-985.3,34);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.9,20.8).lineTo(-4.7,20.8).curveTo(-2,14.9,-0.3,9).curveTo(1.8,2,2,-3.3).curveTo(2.2,-7.6,1.5,-13.3).lineTo(0.2,-22.9).curveTo(3,-18.1,4.1,-10.5).curveTo(5.2,-3.3,4.3,2.6).curveTo(4,4.6,2.9,8.5).curveTo(1.7,12.6,1.4,14.5).curveTo(1,16.9,-1.4,20.8).curveTo(-2.6,22.9,-3.3,22.9).curveTo(-3.9,22.9,-3.9,20.8).closePath();
	this.shape_330.setTransform(-985.7,60.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,0.6).lineTo(-4,-2.8).lineTo(-0.2,-2.5).curveTo(3.7,-1.5,4,2.3).lineTo(4,2.3).curveTo(2.9,2.8,1.9,2.8).curveTo(-0.3,2.8,-2.1,0.6).closePath();
	this.shape_331.setTransform(-1038.8,145.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,3.7).curveTo(-3.9,0,-0.5,-2.2).curveTo(1.2,-3.3,3.1,-3.7).lineTo(2.4,0.1).curveTo(1,3.7,-2.6,3.7).lineTo(-2.9,3.7).closePath();
	this.shape_332.setTransform(-1031.1,147.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,-1).lineTo(-0.8,-4.7).lineTo(1.5,-1.6).curveTo(3.3,2,0.6,4.6).lineTo(0.6,4.7).curveTo(-2.8,3,-2.1,-1).closePath();
	this.shape_333.setTransform(-1035.1,139.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.3,12.2).lineTo(0.1,11).lineTo(-0.6,10.7).curveTo(-0.9,8.4,-0.8,3.5).curveTo(-0.7,-1.3,-1,-3.7).curveTo(-1.2,-5.4,-1.1,-10.2).curveTo(-1,-15.1,-0.4,-11.7).lineTo(-0.2,-9.1).curveTo(-0.2,-7.2,-0,-6.7).curveTo(0.3,-5.3,0.5,-2.8).lineTo(0.6,1.1).lineTo(1.1,6.6).curveTo(1.3,9.9,0.9,13.1).curveTo(0.4,12.7,0.3,12.2).closePath();
	this.shape_334.setTransform(-1033.9,154);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2,-2.2).lineTo(1.4,-6.6).lineTo(3.1,-1.4).curveTo(3.8,4.2,-1,6.5).lineTo(-1,6.6).curveTo(-4.7,2.7,-2,-2.2).closePath();
	this.shape_335.setTransform(-906.3,114.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.4,-1.6).lineTo(-6.4,-1.6).curveTo(-2.2,-5,2.5,-1.6).curveTo(4.9,-0.1,6.4,2.2).curveTo(3.9,3.3,1.1,3.3).lineTo(1,3.3).curveTo(-4.6,3.3,-6.4,-1.6).closePath();
	this.shape_336.setTransform(-904.4,125.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.7,3.1).lineTo(-5.7,3.2).curveTo(-5.3,-2.1,0.2,-3.4).curveTo(3,-4.1,5.7,-3.7).curveTo(4.8,-1.1,3,1).curveTo(0.5,3.8,-2.6,3.8).curveTo(-4.1,3.8,-5.7,3.1).closePath();
	this.shape_337.setTransform(-895.6,115.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15.8,6.8).lineTo(-14.3,5.9).lineTo(-14.3,4.8).curveTo(-11.4,3.2,-5,0.8).curveTo(1.3,-1.7,4.2,-3.3).curveTo(21.3,-10.7,14.9,-6.7).curveTo(14.3,-6.3,11.7,-5.1).curveTo(9.2,-4.1,8.6,-3.6).curveTo(7.1,-2.4,3.8,-0.9).lineTo(-1.2,1.4).lineTo(-8,4.8).curveTo(-12.3,6.9,-16.6,8.1).curveTo(-16.4,7.2,-15.8,6.8).closePath();
	this.shape_338.setTransform(-914.4,125.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.1,2.3).lineTo(-6.2,2.4).curveTo(-5,-2.8,0.7,-3.4).curveTo(3.5,-3.7,6.1,-2.9).curveTo(4.9,-0.5,2.8,1.3).curveTo(0.3,3.5,-2.3,3.5).curveTo(-4.2,3.5,-6.1,2.3).closePath();
	this.shape_339.setTransform(-916.8,120);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,-1.1).lineTo(-1.8,-6.5).lineTo(1.8,-2.5).curveTo(4.8,2.3,1.4,6.4).lineTo(1.4,6.5).curveTo(-3.5,4.6,-3.2,-1.1).closePath();
	this.shape_340.setTransform(-923.3,110.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.5,1.3).lineTo(-5.6,-2.6).lineTo(-0.7,-3.1).curveTo(4.4,-2.7,5.6,2).lineTo(5.6,2).curveTo(3.8,3.1,2.1,3.1).curveTo(-0.2,3.1,-2.5,1.3).closePath();
	this.shape_341.setTransform(-1037.8,169.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,0.2).curveTo(-1.9,-4.7,2.9,-5.1).lineTo(3,-5.1).curveTo(4.9,-0.7,0.9,2.7).lineTo(-3.5,5.1).curveTo(-3.8,2.7,-3.2,0.2).closePath();
	this.shape_342.setTransform(-1038.3,179.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1,2.9).lineTo(-5.9,1.8).lineTo(-2.3,-1.6).curveTo(2,-4.4,5.8,-1.4).lineTo(5.9,-1.4).curveTo(4.3,2.9,-0.4,2.9).lineTo(-1,2.9).closePath();
	this.shape_343.setTransform(-1049.7,178.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.5,-0.1).curveTo(-1.2,-2.3,5,-3.9).curveTo(14.7,-6.4,15,-3.3).curveTo(14.9,-3.3,14.8,-3.3).curveTo(14.8,-3.3,14.8,-3.2).curveTo(14.8,-3.2,14.8,-3.2).curveTo(14.9,-3.1,15,-3.1).lineTo(15.3,-2.9).lineTo(14.8,-2.2).lineTo(6.5,-1.9).curveTo(2.2,-1.6,-1.6,-0.2).curveTo(-9.4,2.7,-15.3,5).curveTo(-11.6,2.1,-6.5,-0.1).closePath();
	this.shape_344.setTransform(-1031.8,173.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,0.8).lineTo(-5.3,-3.4).lineTo(-0.3,-3.3).curveTo(4.7,-2.2,5.2,2.6).lineTo(5.3,2.7).curveTo(3.8,3.4,2.3,3.4).curveTo(-0.3,3.4,-2.6,0.8).closePath();
	this.shape_345.setTransform(-1061.3,157.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,-0.1).curveTo(-1.1,-4.9,3.7,-4.6).curveTo(5,0,0.6,2.8).lineTo(-4,4.7).curveTo(-4,2.2,-3.1,-0.1).closePath();
	this.shape_346.setTransform(-1063.2,166.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.3,2.7).lineTo(-6,0.9).lineTo(-2,-2).curveTo(2.6,-4.2,6,-0.7).lineTo(6,-0.7).curveTo(4.2,2.8,0.4,2.8).curveTo(-0.4,2.8,-1.3,2.7).closePath();
	this.shape_347.setTransform(-1074.3,164.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.2,-0.7).curveTo(-0.7,-2.2,5.7,-2.9).curveTo(15.6,-4,15.4,-0.9).curveTo(15.3,-0.9,15.3,-0.9).curveTo(15.2,-0.9,15.2,-0.9).curveTo(15.2,-0.9,15.3,-0.8).curveTo(15.3,-0.8,15.4,-0.7).lineTo(15.7,-0.5).lineTo(15.1,0.1).lineTo(6.9,-0.8).curveTo(2.6,-1,-1.4,-0.1).lineTo(-15.7,3.2).curveTo(-11.6,0.8,-6.2,-0.7).closePath();
	this.shape_348.setTransform(-1056,161.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,0.5).lineTo(-4.5,-4.2).lineTo(0.3,-3).curveTo(5,-0.8,4.4,4).curveTo(3.5,4.2,2.7,4.2).curveTo(-0.8,4.2,-2.9,0.5).closePath();
	this.shape_349.setTransform(-1069.5,143.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.8,-0.7).curveTo(0.2,-4.9,4.8,-3.5).curveTo(5,1.3,0.1,3).lineTo(-4.8,3.8).closePath();
	this.shape_350.setTransform(-1073.6,151.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.8,2.1).lineTo(-6,-0.7).lineTo(-1.5,-2.6).curveTo(3.5,-3.7,6,0.4).lineTo(6,0.4).curveTo(4,2.8,1.3,2.8).curveTo(-0.2,2.8,-1.8,2.1).closePath();
	this.shape_351.setTransform(-1083.9,148.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.beginFill("#6D6C6C").beginStroke().moveTo(7.1,0.1).curveTo(3,-1.1,-1.1,-1.1).lineTo(-15.7,-1).curveTo(-11.3,-2.5,-5.7,-2.7).curveTo(-0.3,-3,6.4,-2.2).curveTo(16.3,-1.2,15.5,1.8).curveTo(15.2,1.7,15.5,2).curveTo(15.6,2,15.6,2.1).curveTo(15.7,2.2,15.7,2.2).curveTo(15.7,2.2,15.7,2.2).curveTo(15.7,2.3,15.7,2.3).lineTo(14.9,2.8).curveTo(8,0.3,7.1,0.1).closePath();
	this.shape_352.setTransform(-1065.6,149.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.1,3.4).curveTo(-5.3,1.8,-5.4,-3.5).lineTo(-5.5,-3.5).curveTo(-0.6,-5.4,3,-0.9).curveTo(4.7,1.4,5.5,4).lineTo(4.3,4.1).curveTo(2.2,4.1,0.1,3.4).closePath();
	this.shape_353.setTransform(-925.6,154.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.5,4.7).lineTo(-4.6,4.8).curveTo(-5.5,-0.4,-0.5,-3.2).curveTo(2,-4.5,4.7,-4.8).curveTo(4.5,-2.1,3.3,0.4).curveTo(1,4.8,-3.3,4.8).lineTo(-4.5,4.7).closePath();
	this.shape_354.setTransform(-922.7,144.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.6,0.3).lineTo(-6.7,0.3).curveTo(-3.9,-4.2,1.7,-2.7).curveTo(4.4,-2,6.7,-0.4).curveTo(4.7,1.4,2.1,2.4).curveTo(0.3,3.1,-1.2,3.1).curveTo(-4.3,3.1,-6.6,0.3).closePath();
	this.shape_355.setTransform(-910.7,147.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-17,-0.5).curveTo(-16.6,-0.4,-17,-0.7).lineTo(-17.3,-1).lineTo(-16.6,-1.6).lineTo(-7.6,0).curveTo(-3,0.7,1.5,-0).curveTo(12.7,-1.7,17.3,-2.5).curveTo(12.8,-0.1,6.7,1).curveTo(0.5,2.2,-6.5,2.5).lineTo(-8.7,2.5).curveTo(-17.4,2.5,-17,-0.5).closePath();
	this.shape_356.setTransform(-931,149.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.7,-2.8).curveTo(1.5,-4.3,3.9,-4.8).lineTo(3.1,0.1).curveTo(1.3,4.9,-3.5,4.8).lineTo(-3.5,4.8).curveTo(-5,0.2,-0.7,-2.8).closePath();
	this.shape_357.setTransform(-1043.1,133.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3,0.3).lineTo(-4.2,-4.5).lineTo(0.5,-2.9).curveTo(4.9,-0.4,4,4.4).lineTo(4,4.4).lineTo(2.9,4.5).curveTo(-1,4.5,-3,0.3).closePath();
	this.shape_358.setTransform(-1051.8,130.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-1.7).lineTo(0.1,-6.1).lineTo(2.4,-1.8).curveTo(3.9,3.2,0,6).lineTo(0,6.1).curveTo(-3.9,3.3,-2.3,-1.7).closePath();
	this.shape_359.setTransform(-1048.7,119.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.6,15.8).lineTo(-2.1,15.1).lineTo(-0.1,7.1).curveTo(0.7,2.9,0.3,-1.2).curveTo(-0.4,-9.5,-1.1,-15.8).curveTo(0.8,-11.6,1.5,-5.9).curveTo(2.3,-0.3,2.1,6.1).curveTo(1.9,16.1,-1.1,15.6).curveTo(-1,15.2,-1.3,15.5).lineTo(-1.6,15.8).lineTo(-1.6,15.8).closePath();
	this.shape_360.setTransform(-1048,138);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,-0.2).lineTo(-3.4,-5).lineTo(0.8,-2.7).curveTo(4.6,0.6,2.9,5).lineTo(2.9,5).curveTo(-1.8,4.8,-3.1,-0.2).closePath();
	this.shape_361.setTransform(-1058.4,99.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.5,2.6).lineTo(-2.4,-1.2).curveTo(1.4,-4.4,5.4,-2).lineTo(5.5,-2).curveTo(4.4,2.6,-0.6,3.1).closePath();
	this.shape_362.setTransform(-1064.7,106.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,1.3).lineTo(-5.5,-2.3).lineTo(-0.8,-3).curveTo(4.2,-2.8,5.5,1.7).lineTo(5.5,1.7).curveTo(3.8,3,1.9,3).curveTo(-0.2,3,-2.3,1.3).closePath();
	this.shape_363.setTransform(-1073.3,100.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.beginFill("#6D6C6C").beginStroke().moveTo(6.8,1.2).curveTo(3.2,-1,-0.7,-2).lineTo(-14.5,-5.6).curveTo(-10,-5.8,-4.6,-4.7).curveTo(0.8,-3.5,6.7,-1.2).curveTo(15.8,2.2,14.3,4.9).curveTo(14,4.6,14.2,5).lineTo(14.3,5.3).lineTo(13.5,5.6).lineTo(6.8,1.2).closePath();
	this.shape_364.setTransform(-1056.6,107);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.2,-2.8).curveTo(0.7,-4.9,3.2,-6).lineTo(3.5,-4.4).curveTo(3.7,-2.3,3.5,-0.6).curveTo(2.6,5,-2.6,6).lineTo(-2.6,6).curveTo(-5.2,1.4,-1.2,-2.8).closePath();
	this.shape_365.setTransform(-940.1,121.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3,0.8).lineTo(-5.4,-4.1).lineTo(-0.1,-3.4).curveTo(5.3,-1.7,5.4,3.6).lineTo(5.4,3.6).curveTo(4,4.1,2.7,4.1).curveTo(-0.6,4.1,-3,0.8).closePath();
	this.shape_366.setTransform(-950.2,120.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,-1.3).lineTo(-1.5,-6.6).lineTo(-0.3,-5.4).curveTo(1.1,-4,2,-2.4).curveTo(4.7,2.5,1.2,6.5).lineTo(1.2,6.6).curveTo(-3.7,4.4,-3.1,-1.3).closePath();
	this.shape_367.setTransform(-949.1,107.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.beginFill("#6D6C6C").beginStroke().moveTo(2.1,17).lineTo(1.3,16.4).lineTo(1.6,7.3).curveTo(1.6,2.6,0.2,-1.7).curveTo(-3.1,-12.7,-4.6,-17).curveTo(-1.6,-12.9,0.5,-7.1).curveTo(2.6,-0.8,3.8,5.8).curveTo(5.9,16.5,2.5,16.7).curveTo(2.5,16.3,2.3,16.7).lineTo(2.1,17).lineTo(2.1,17).closePath();
	this.shape_368.setTransform(-944.5,127.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.5,4.8).lineTo(-4.5,4.8).curveTo(-5.5,-0.4,-0.5,-3.2).curveTo(2,-4.5,4.7,-4.9).curveTo(4.5,-2.2,3.3,0.3).curveTo(1.1,4.9,-3.3,4.9).lineTo(-4.5,4.8).closePath();
	this.shape_369.setTransform(-911.7,102.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.6,-2.3).curveTo(-0.2,-4.4,1.8,-6).lineTo(3,-1.1).curveTo(3.2,4.1,-1.3,5.9).lineTo(-1.3,5.9).curveTo(-4.5,2.2,-1.6,-2.3).closePath();
	this.shape_370.setTransform(-1062.4,125.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.8,2.3).lineTo(-6.1,-0.3).lineTo(-1.6,-2.5).curveTo(3.3,-3.9,6.1,0.2).lineTo(6.1,0.2).curveTo(4.1,2.8,1.2,2.8).curveTo(-0.2,2.8,-1.8,2.3).closePath();
	this.shape_371.setTransform(-1068.6,135.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.5,-0.8).curveTo(-3.7,-2.7,-3.3,-4.8).lineTo(-2.8,-6.5).lineTo(-1.4,-5.5).curveTo(0.3,-4.3,1.5,-2.8).curveTo(5.2,1.8,2.2,6.5).lineTo(2.2,6.5).curveTo(-3.2,5.2,-3.5,-0.8).closePath();
	this.shape_372.setTransform(-1069.2,117.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,3.4).curveTo(-4.5,2.8,-6.8,1.4).lineTo(-8.7,0.1).lineTo(-6.9,-1.2).curveTo(-4.7,-2.6,-2.5,-3.3).curveTo(4.4,-5.7,8.6,-0.2).lineTo(8.7,-0.2).curveTo(5.9,4,1.3,4).curveTo(-0.4,4,-2.3,3.4).closePath();
	this.shape_373.setTransform(-1005.7,75.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.4,3.4).curveTo(-4.6,2.7,-6.9,1.4).lineTo(-8.7,0.1).lineTo(-6.9,-1.2).curveTo(-4.7,-2.6,-2.5,-3.3).curveTo(4.4,-5.7,8.6,-0.2).lineTo(8.7,-0.2).curveTo(5.9,4,1.3,4).curveTo(-0.4,4,-2.4,3.4).closePath();
	this.shape_374.setTransform(-1014.6,64.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.5,4.7).lineTo(-7.7,4.4).lineTo(-6.7,2.5).curveTo(-5.4,0.2,-3.8,-1.4).curveTo(1.4,-6.7,7.6,-3.7).lineTo(7.7,-3.7).curveTo(6.8,3.2,-0.5,4.5).curveTo(-2.1,4.8,-3.7,4.8).lineTo(-5.5,4.7).closePath();
	this.shape_375.setTransform(-1024,55.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.4,0).curveTo(-5.2,-2.2,-5.3,-4.8).lineTo(-5.3,-7.1).lineTo(-3.3,-6.3).curveTo(-0.9,-5.3,1,-4).curveTo(6.9,0.5,4.7,7).lineTo(4.7,7.1).lineTo(4.6,7.1).curveTo(-2.2,7.1,-4.4,0).closePath();
	this.shape_376.setTransform(-1027.9,37.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,-3.6).curveTo(1.1,-6.3,4.3,-7.8).lineTo(4.6,-5.6).curveTo(4.9,-3,4.5,-0.7).curveTo(3.4,6.5,-3.4,7.7).lineTo(-3.5,7.8).curveTo(-6.7,1.6,-1.5,-3.6).closePath();
	this.shape_377.setTransform(-1000.1,60.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,-3.7).curveTo(1.1,-6.3,4.3,-7.8).lineTo(4.6,-5.6).curveTo(4.9,-3,4.5,-0.7).curveTo(3.4,6.5,-3.4,7.7).lineTo(-3.5,7.8).curveTo(-6.8,1.7,-1.5,-3.7).closePath();
	this.shape_378.setTransform(-1008.5,51.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,-3.7).curveTo(1.1,-6.3,4.4,-7.7).lineTo(4.7,-5.6).curveTo(4.9,-3,4.5,-0.7).curveTo(3.3,6.6,-3.5,7.7).lineTo(-3.6,7.7).curveTo(-6.8,1.6,-1.5,-3.7).closePath();
	this.shape_379.setTransform(-1016.6,40.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.beginFill("#6D6C6C").beginStroke().moveTo(29.3,48.5).lineTo(27.9,48.1).curveTo(28.6,44.4,27.1,39.2).curveTo(24.1,28.8,13.3,20.7).curveTo(7.3,16.2,0.5,12.4).lineTo(-9.9,6.9).curveTo(-20.4,1.3,-25.6,-7.7).curveTo(-32.7,-20.1,-36.1,-31.3).curveTo(-39.7,-43.3,-37.3,-48.7).lineTo(-36.3,-40.9).curveTo(-34.1,-30.5,-27.7,-17.7).curveTo(-22,-6.1,-14.7,-0.4).curveTo(-9.6,3.5,-1.3,5.9).curveTo(11.9,9.8,24.2,18.5).curveTo(39.3,29.1,38.1,38.4).curveTo(37.1,47.2,32.4,48.5).curveTo(31.7,48.7,30.9,48.7).curveTo(30.1,48.7,29.3,48.5).closePath();
	this.shape_380.setTransform(-1013.9,127.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.beginFill("#6D6C6C").beginStroke().moveTo(38.5,39.6).lineTo(37.1,39.4).curveTo(37,35.9,34.5,31.2).curveTo(29.5,21.9,17.5,16.3).curveTo(10.9,13.2,3.6,11).lineTo(-7.4,7.9).curveTo(-18.5,4.6,-25.3,-3).curveTo(-34.6,-13.3,-40.1,-23.3).curveTo(-46,-34,-44.8,-39.6).lineTo(-42.2,-32.3).curveTo(-38,-22.9,-29.4,-12).curveTo(-21.5,-2.1,-13.4,1.8).curveTo(-7.7,4.6,0.6,5.2).curveTo(14,6.2,27.5,12).curveTo(44,19,44.8,28.2).curveTo(45.6,36.7,41.4,38.9).curveTo(40.2,39.6,38.7,39.6).lineTo(38.5,39.6).closePath();
	this.shape_381.setTransform(-1022.4,160.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-14.8,106.9).curveTo(-18.8,106.2,-23.2,104.8).lineTo(-26.8,103.6).curveTo(-28.7,98.8,-25.3,75.8).curveTo(-24,66.9,-19.4,41.3).curveTo(-16.9,27.8,-12.7,2.6).curveTo(-11,-7.1,-13.1,-26.3).curveTo(-15.2,-44.8,-18.6,-54.6).curveTo(-22.4,-65.4,-29.4,-74.6).lineTo(-54.8,-105.6).lineTo(-55.8,-107.6).lineTo(-54.8,-107.1).curveTo(-53.2,-106.1,-50.3,-103.4).curveTo(-40.9,-94.7,-21.3,-72.4).curveTo(-2.3,-50.7,-0.4,-14).curveTo(0.6,4.3,-2.3,18.2).lineTo(2.4,12.6).curveTo(9.4,5.7,20.5,-0.8).curveTo(31.1,-7,46.2,-29.1).lineTo(54.1,-41.2).curveTo(55.4,-43.2,55.7,-43.4).curveTo(56,-43.6,55.2,-41.7).curveTo(50.9,-31.3,44.6,-21).curveTo(35.9,-6.9,26.7,1.1).curveTo(24,3.5,20.1,6.1).curveTo(16.9,8.3,15.2,10.1).curveTo(10.3,15.2,-0,35.3).curveTo(-11.1,57,-5.6,82.4).curveTo(-2.8,95.2,2.2,103.6).curveTo(-0.8,107.6,-8.2,107.6).curveTo(-11.1,107.6,-14.8,106.9).closePath();
	this.shape_382.setTransform(-970.3,148.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-2.6,19.2,-12.4,18.9).lineTo(-22.9,18).curveTo(-24,18,-22.6,16.1).lineTo(-20.9,14.1).curveTo(-15.3,8.6,-7.7,-4.6).curveTo(-3.8,-11.3,-0.1,-18.9).lineTo(0.1,-18.9).curveTo(3.2,-12.4,7.7,-4.6).curveTo(15.3,8.6,20.9,14.1).lineTo(22.5,16.1).curveTo(24,18,22.8,18).curveTo(17.3,18.8,12.3,18.9).lineTo(10.8,18.9).curveTo(2.4,18.9,-0,16.3).closePath();
	this.shape_383.setTransform(-733.5,64.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-3.8,19.2,-17.9,18.9).lineTo(-33.1,18).curveTo(-34.7,18,-32.7,16.1).curveTo(-31.7,15.1,-30.3,14.1).curveTo(-22.2,8.6,-11.1,-4.6).curveTo(-5.2,-11.7,-0.1,-18.9).lineTo(0.1,-18.9).curveTo(5.2,-11.7,11.1,-4.6).curveTo(22.2,8.6,30.3,14.1).lineTo(32.7,16.1).curveTo(34.8,18,33.1,18).curveTo(25.2,18.8,17.9,18.9).lineTo(15.7,18.9).curveTo(3.4,18.9,-0,16.3).closePath();
	this.shape_384.setTransform(-733.5,92.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.1,16.1).curveTo(-14,23.3,-45,23.4).curveTo(-54.5,23.4,-66.1,22.7).curveTo(-76,22,-77.4,22).curveTo(-81.2,22,-76.4,19.5).curveTo(-74,18.3,-70.9,17).curveTo(-51.8,10.1,-26,-6.4).curveTo(-11.3,-15.9,-0.2,-24.4).lineTo(0.3,-24.4).curveTo(11.3,-15.9,26.1,-6.4).curveTo(51.8,10.1,70.9,17).lineTo(76.4,19.5).curveTo(81.2,22,77.4,22).curveTo(60.4,24.1,44.2,24.4).lineTo(40.1,24.4).curveTo(11.9,24.4,0.1,16.1).closePath();
	this.shape_385.setTransform(-733.5,196.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,20.5).curveTo(-7.4,24.1,-35.2,23.7).curveTo(-62.7,22.6,-65.1,22.6).curveTo(-68.2,22.6,-64.2,20.1).curveTo(-62.2,18.9,-59.5,17.7).curveTo(-43.5,10.8,-21.9,-5.8).curveTo(-10,-14.8,-0.2,-23.8).lineTo(0.2,-23.8).curveTo(9.4,-15.3,21.9,-5.8).curveTo(43.5,10.8,59.5,17.7).lineTo(64.2,20.1).curveTo(68.2,22.6,65,22.6).curveTo(49.3,23.5,35.1,23.7).lineTo(29.8,23.8).curveTo(6.6,23.8,-0,20.5).closePath();
	this.shape_386.setTransform(-733.5,167.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-6.2,19.2,-29.6,18.9).lineTo(-54.8,18).curveTo(-57.4,18,-54,16.1).curveTo(-52.3,15.1,-50.1,14.1).curveTo(-36.6,8.6,-18.4,-4.6).curveTo(-9.1,-11.4,-0.2,-18.9).lineTo(0.2,-18.9).curveTo(8.4,-11.8,18.4,-4.6).curveTo(36.6,8.6,50.1,14.1).lineTo(54,16.1).curveTo(57.4,18,54.7,18).curveTo(41.5,18.8,29.6,18.9).lineTo(25.9,18.9).curveTo(5.7,18.9,-0,16.3).closePath();
	this.shape_387.setTransform(-733.5,142.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-4.6,19.2,-21.8,18.9).lineTo(-40.3,18).curveTo(-42.3,18,-39.8,16).curveTo(-38.6,15,-36.9,14).curveTo(-27,8.6,-13.6,-4.6).curveTo(-6.4,-11.7,-0.1,-18.9).lineTo(0.1,-18.9).curveTo(6.4,-11.7,13.6,-4.6).curveTo(27,8.6,36.9,14).lineTo(39.8,16).curveTo(42.3,18,40.3,18).curveTo(30.6,18.7,21.8,18.9).lineTo(18.7,18.9).curveTo(4.1,18.9,-0,16.3).closePath();
	this.shape_388.setTransform(-733.5,117.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.5,39.6).lineTo(-8.5,-39.5).lineTo(8.6,-39.5).lineTo(8.6,39.6).closePath();
	this.shape_389.setTransform(-733.1,216.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,2).curveTo(-5.1,0.7,-6.7,-1.2).lineTo(-8,-2.8).lineTo(-5.9,-3.5).curveTo(-3.5,-4.1,-1.2,-4.1).curveTo(5.9,-4.1,8,2.2).lineTo(7.9,2.2).curveTo(5.2,4.1,2.5,4.1).curveTo(-0.3,4.1,-3.3,2).closePath();
	this.shape_390.setTransform(-1216.2,100.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.9,0.8).curveTo(-5.1,-1.1,-5.9,-3.5).lineTo(-6.4,-5.5).lineTo(-4.3,-5.3).curveTo(-1.8,-5,0.3,-4.1).curveTo(6.9,-1.4,6.4,5.2).lineTo(6.4,5.1).curveTo(5,5.5,3.7,5.5).curveTo(-0.9,5.5,-3.9,0.8).closePath();
	this.shape_391.setTransform(-1216.3,86.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9.8,-2.5).lineTo(-9.9,-2.5).curveTo(-3.4,-7.6,3.9,-2.6).curveTo(7.5,-0.1,9.9,3.4).curveTo(6.1,5,1.7,5.1).lineTo(1.4,5.1).curveTo(-7,5.1,-9.8,-2.5).closePath();
	this.shape_392.setTransform(-1179.1,119.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.7,-2.1).curveTo(-4.3,-4.8,-3.1,-7.7).lineTo(-2,-10.1).lineTo(-0.2,-8.3).curveTo(1.9,-6,3.2,-3.6).curveTo(7.2,4.2,1.5,10.1).lineTo(1.5,10.1).curveTo(-5.9,6.6,-4.7,-2.1).closePath();
	this.shape_393.setTransform(-1189.8,103.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-4.7).curveTo(2.6,-7.1,6.7,-8).lineTo(6.6,-5.5).curveTo(6.2,-2.3,5.2,0.2).curveTo(2,8.3,-6.2,7.9).lineTo(-6.2,8).curveTo(-8.5,0.1,-1.1,-4.7).closePath();
	this.shape_394.setTransform(-1175.3,99.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.8,11.9).lineTo(12.1,-23.2).lineTo(12.8,-18.6).lineTo(-12.8,23.2).closePath();
	this.shape_395.setTransform(-1192.4,124.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-2.7).curveTo(-1.8,-4.7,-0.2,-6.7).lineTo(1.3,-8.2).lineTo(2.2,-6.4).curveTo(3.3,-4.1,3.7,-1.9).curveTo(5,5,-0.8,8.2).lineTo(-0.8,8.3).curveTo(-5.7,3.8,-2.7,-2.7).closePath();
	this.shape_396.setTransform(-1221.5,138.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,3.8).curveTo(-3.9,3.5,-6.3,2.5).lineTo(-8.2,1.6).lineTo(-6.7,0.1).curveTo(-4.9,-1.6,-2.9,-2.6).curveTo(3.3,-5.8,8.2,-1.2).lineTo(8.2,-1.2).curveTo(5.8,3.9,0.2,3.9).lineTo(-1.7,3.8).closePath();
	this.shape_397.setTransform(-1233.7,146.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4,0.6).curveTo(-5,-1.4,-5.6,-3.9).lineTo(-5.9,-6).lineTo(-3.9,-5.6).curveTo(-1.4,-5.1,0.5,-4).curveTo(6.8,-0.7,5.7,5.8).lineTo(5.8,5.8).curveTo(4.8,6,3.9,6).curveTo(-1.2,6,-4,0.6).closePath();
	this.shape_398.setTransform(-1235.2,134.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.4,-11.8).lineTo(-11.5,-16).lineTo(12.4,7.8).lineTo(10.5,16).closePath();
	this.shape_399.setTransform(-1219.8,151.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-1.7).lineTo(-0.2,-6.4).lineTo(2.4,-1.9).curveTo(4.3,3.2,0.2,6.4).lineTo(0.2,6.4).curveTo(-4.1,3.7,-2.6,-1.7).closePath();
	this.shape_400.setTransform(-1229.4,106.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,3.1).lineTo(-6.3,1.8).lineTo(-2.4,-1.7).curveTo(2.2,-4.6,6.2,-1.4).lineTo(6.3,-1.4).curveTo(4.6,3.1,-0.4,3.1).lineTo(-1.1,3.1).closePath();
	this.shape_401.setTransform(-1238.5,113.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,1).curveTo(-4.5,-0.6,-5.4,-2.6).lineTo(-6.1,-4.4).lineTo(-4.3,-4.4).curveTo(-2,-4.3,-0.2,-3.8).curveTo(5.7,-2.1,6.1,3.7).lineTo(6.1,3.8).curveTo(4.5,4.4,3,4.4).curveTo(-0.5,4.4,-3.3,1).closePath();
	this.shape_402.setTransform(-1243.8,104.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15.7,-7.5).lineTo(-15.9,-9.9).lineTo(14.5,4.7).lineTo(15.9,9.8).closePath();
	this.shape_403.setTransform(-1224.1,116.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.4,-1.9).lineTo(0.4,-6.5).lineTo(2.7,-1.8).curveTo(4.1,3.6,-0.2,6.4).lineTo(-0.2,6.4).curveTo(-4.3,3.3,-2.4,-1.9).closePath();
	this.shape_404.setTransform(-1226.3,168.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.4,2.9).lineTo(-6.4,1.2).lineTo(-2.3,-2).curveTo(2.7,-4.5,6.4,-0.9).lineTo(6.4,-1).curveTo(4.5,3,0.2,3).lineTo(-1.4,2.9).closePath();
	this.shape_405.setTransform(-1235.9,174.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.4,0.8).curveTo(-4.5,-0.8,-5.2,-3).lineTo(-5.7,-4.8).lineTo(-3.9,-4.7).curveTo(-1.7,-4.4,0.1,-3.7).curveTo(5.9,-1.5,5.7,4.4).lineTo(5.7,4.4).curveTo(4.4,4.8,3.2,4.8).curveTo(-0.7,4.8,-3.4,0.8).closePath();
	this.shape_406.setTransform(-1240.4,165.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15,-8.8).lineTo(-15,-11.2).lineTo(14,5.9).lineTo(15,11.2).closePath();
	this.shape_407.setTransform(-1221.7,178.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.4,-1.3).lineTo(-6.5,-1.4).curveTo(-2.4,-4.8,2.4,-1.8).curveTo(4.9,-0.3,6.5,1.9).curveTo(4.1,3,1.2,3.2).lineTo(0.5,3.2).curveTo(-4.5,3.2,-6.4,-1.3).closePath();
	this.shape_408.setTransform(-1182.6,182);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,-0.9).lineTo(-2.3,-6.3).lineTo(1.6,-2.6).curveTo(4.9,2,1.8,6.3).lineTo(1.8,6.4).curveTo(-3.3,4.8,-3.3,-0.9).closePath();
	this.shape_409.setTransform(-1188.2,171.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.6,-3.1).curveTo(1.9,-4.6,4.6,-5).curveTo(4.5,-2.3,3.3,0.3).curveTo(1,5.4,-4.3,4.9).lineTo(-4.3,5).curveTo(-5.5,-0.2,-0.6,-3.1).closePath();
	this.shape_410.setTransform(-1178.4,169.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.3,5.9).curveTo(7,-10.1,8.6,-12.2).curveTo(9.6,-13.5,11,-13.1).curveTo(11.8,-12.9,12.3,-12.5).lineTo(-11.9,13.2).closePath();
	this.shape_411.setTransform(-1191.8,185.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.3,4.1).curveTo(-6.8,1.3,-6.2,-5.3).lineTo(-6.2,-5.4).curveTo(0.2,-6.9,3.9,-0.8).curveTo(5.7,2.3,6.2,5.7).curveTo(2.9,5.6,-0.3,4.1).closePath();
	this.shape_412.setTransform(-1176.9,149.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-2.8).curveTo(-1.6,-4.7,0.1,-6.7).lineTo(1.6,-8.2).lineTo(2.5,-6.3).curveTo(3.5,-4,3.8,-1.8).curveTo(4.8,5.2,-1.1,8.2).lineTo(-1.1,8.2).curveTo(-5.9,3.6,-2.6,-2.8).closePath();
	this.shape_413.setTransform(-1177.2,134);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.7,2.6).lineTo(-7.8,2.6).curveTo(-6.1,-3.8,1,-4.2).curveTo(4.5,-4.4,7.8,-3.3).curveTo(6.1,-0.4,3.4,1.8).curveTo(0.3,4.2,-2.7,4.2).curveTo(-5.2,4.2,-7.7,2.6).closePath();
	this.shape_414.setTransform(-1164.8,138.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.9,0).curveTo(13.5,-6.5,16.5,-8).curveTo(18.4,-8.9,19.7,-7.6).curveTo(20.4,-7,20.7,-6.2).lineTo(-20.7,8.4).closePath();
	this.shape_415.setTransform(-1188.8,147);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.5,3.8).curveTo(-5.5,-1.6,-0.1,-3.4).curveTo(2.7,-4.3,5.5,-4.2).curveTo(4.8,-1.5,3.1,0.8).curveTo(0.6,4.2,-2.9,4.2).curveTo(-4.1,4.2,-5.5,3.8).closePath();
	this.shape_416.setTransform(-1203.6,105.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.3,5.1).lineTo(-6.4,5.1).curveTo(-6.9,-1.5,-0.3,-4.1).curveTo(3,-5.5,6.4,-5.5).curveTo(5.8,-2.2,3.9,0.8).curveTo(0.9,5.5,-3.7,5.5).curveTo(-5,5.5,-6.3,5.1).closePath();
	this.shape_417.setTransform(-1202.1,89.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,-2.3).curveTo(-2.5,-4.4,-1.1,-6.6).lineTo(0.1,-8.3).lineTo(1.3,-6.6).curveTo(2.6,-4.5,3.3,-2.4).curveTo(5.3,4.4,-0,8.2).lineTo(-0,8.3).curveTo(-5.4,4.5,-3.2,-2.3).closePath();
	this.shape_418.setTransform(-1209.1,76);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.2,88.9).lineTo(-6.4,-88.9).lineTo(-4.6,-83.5).lineTo(8.2,88.9).closePath();
	this.shape_419.setTransform(-1204,167.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_420.setTransform(-1206.9,138.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.8,12.8).curveTo(-18.1,7.5,-18.1,0).curveTo(-18.1,-7.5,-12.8,-12.8).curveTo(-7.5,-18.1,0,-18.1).curveTo(7.5,-18.1,12.8,-12.8).curveTo(18.1,-7.5,18.1,0).curveTo(18.1,7.5,12.8,12.8).curveTo(7.5,18.1,0,18.1).curveTo(-7.5,18.1,-12.8,12.8).closePath();
	this.shape_421.setTransform(-1182.7,72.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,20.2).curveTo(-27.8,11.8,-27.8,-0).curveTo(-27.8,-11.8,-19.6,-20.2).curveTo(-11.5,-28.6,0,-28.6).curveTo(11.5,-28.6,19.6,-20.2).curveTo(27.8,-11.8,27.8,-0).curveTo(27.8,11.8,19.6,20.2).curveTo(11.5,28.6,0,28.6).curveTo(-11.5,28.6,-19.6,20.2).closePath();
	this.shape_422.setTransform(-1182.7,97.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.4,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_423.setTransform(-1162.7,118.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_424.setTransform(-1159.1,152);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,-0).curveTo(-17.1,-7,-12.1,-12.1).curveTo(-7.1,-17.1,0,-17).curveTo(7.1,-17.1,12.1,-12.1).curveTo(17.1,-7,17.1,-0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17.1,0,17).curveTo(-7.1,17.1,-12.1,12.1).closePath();
	this.shape_425.setTransform(-1255.1,128.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,0).curveTo(-17.1,-7.1,-12.1,-12).curveTo(-7.1,-17.1,-0,-17.1).curveTo(7.1,-17.1,12.1,-12).curveTo(17.1,-7.1,17.1,0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17,-0,17).curveTo(-7.1,17,-12.1,12.1).closePath();
	this.shape_426.setTransform(-1234.7,75.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,16.7).curveTo(-10.1,15.5,-14.1,9.6).curveTo(-18.1,3.8,-16.8,-3.2).curveTo(-15.5,-10.1,-9.7,-14.1).curveTo(-3.8,-18.1,3.1,-16.8).curveTo(10.1,-15.4,14.1,-9.7).curveTo(18.1,-3.8,16.8,3.1).curveTo(15.5,10.1,9.7,14).curveTo(5.3,17.1,0.2,17.1).curveTo(-1.4,17.1,-3.1,16.7).closePath();
	this.shape_427.setTransform(-1185.6,160.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.7,11.5,-27.7,-0).curveTo(-27.7,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,-0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_428.setTransform(-1176.1,167.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_429.setTransform(-1203.6,178.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.4,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.7,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.7,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_430.setTransform(-1231.3,169.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_431.setTransform(-1253.9,154.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.6,27.3).curveTo(-15.9,25.5,-22.6,16.1).curveTo(-29.3,6.7,-27.4,-4.6).curveTo(-25.5,-15.9,-16.1,-22.6).curveTo(-6.8,-29.2,4.6,-27.3).curveTo(15.9,-25.4,22.6,-16.1).curveTo(29.3,-6.7,27.4,4.6).curveTo(25.5,15.9,16.1,22.6).curveTo(8.9,27.7,0.4,27.7).curveTo(-2.1,27.7,-4.6,27.3).closePath();
	this.shape_432.setTransform(-1210.4,95.9);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.5,27.3).curveTo(-15.9,25.4,-22.6,16.1).curveTo(-29.2,6.8,-27.4,-4.6).curveTo(-25.5,-15.9,-16.1,-22.6).curveTo(-6.8,-29.2,4.6,-27.4).curveTo(15.9,-25.5,22.6,-16.1).curveTo(29.3,-6.8,27.4,4.5).curveTo(25.5,15.8,16.2,22.5).curveTo(8.9,27.8,0.4,27.8).curveTo(-2,27.8,-4.5,27.3).closePath();
	this.shape_433.setTransform(-1237.6,107.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.7,11.5,-27.7,0).curveTo(-27.7,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_434.setTransform(-1209.5,59.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.3,2.7).curveTo(-6.7,1,-8.8,-1.5).lineTo(-10.5,-3.7).lineTo(-7.8,-4.6).curveTo(-4.5,-5.4,-1.6,-5.4).curveTo(7.9,-5.4,10.5,2.9).lineTo(10.5,2.9).curveTo(7,5.4,3.4,5.4).curveTo(-0.4,5.4,-4.3,2.7).closePath();
	this.shape_435.setTransform(-1386.7,47);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.2,1.1).curveTo(-6.7,-1.4,-7.8,-4.6).lineTo(-8.5,-7.2).lineTo(-5.7,-7).curveTo(-2.4,-6.5,0.4,-5.4).curveTo(9.1,-1.9,8.4,6.9).lineTo(8.4,6.8).curveTo(6.6,7.2,5,7.2).curveTo(-1.2,7.2,-5.2,1.1).closePath();
	this.shape_436.setTransform(-1386.7,28.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.4,-2.6).lineTo(-10.5,-2.7).curveTo(-3.7,-8.1,4.1,-2.8).curveTo(8,-0.2,10.5,3.6).curveTo(6.5,5.3,1.9,5.4).lineTo(1.5,5.4).curveTo(-7.6,5.4,-10.4,-2.6).closePath();
	this.shape_437.setTransform(-1344.1,74.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.6,-3.5).curveTo(-2.4,-6.2,-0.3,-8.8).lineTo(1.6,-10.9).lineTo(2.9,-8.5).curveTo(4.3,-5.5,4.8,-2.6).curveTo(6.5,6.6,-1.1,10.9).lineTo(-1.1,10.9).curveTo(-7.6,5,-3.6,-3.5).closePath();
	this.shape_438.setTransform(-1395.2,81.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,-2.5).curveTo(-2.3,-4.6,-0.8,-6.8).curveTo(-0.1,-7.9,0.5,-8.5).lineTo(1.7,-6.7).curveTo(2.9,-4.5,3.5,-2.3).curveTo(5.4,4.7,-0.3,8.5).lineTo(-0.3,8.6).curveTo(-5.7,4.3,-3.1,-2.5).closePath();
	this.shape_439.setTransform(-1402.3,121.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,3.9).curveTo(-4,3.6,-6.5,2.6).lineTo(-8.5,1.6).lineTo(-7,0.1).curveTo(-5,-1.6,-3,-2.7).curveTo(3.5,-6,8.4,-1.3).lineTo(8.4,-1.3).curveTo(5.9,4,0.2,4).lineTo(-1.7,3.9).closePath();
	this.shape_440.setTransform(-1415,130.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.2,5).curveTo(-5.2,4.6,-8.3,3.3).lineTo(-10.9,2.1).lineTo(-8.9,0.1).curveTo(-6.4,-2.1,-3.9,-3.4).curveTo(4.4,-7.7,10.7,-1.6).lineTo(10.8,-1.6).curveTo(7.6,5.2,0.3,5.2).curveTo(-0.9,5.2,-2.2,5).closePath();
	this.shape_441.setTransform(-1411.3,93.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.7,-1.7).lineTo(-10.8,-1.7).curveTo(-4.5,-7.8,3.8,-3.3).curveTo(7.9,-1,10.8,2.5).curveTo(6.9,4.6,2.3,5.1).lineTo(0.2,5.2).curveTo(-7.4,5.2,-10.7,-1.7).closePath();
	this.shape_442.setTransform(-1335.9,130.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.6,-1.3).curveTo(-5.7,-4.2,-5.1,-7.5).lineTo(-4.4,-10.3).lineTo(-2.1,-8.7).curveTo(0.5,-6.7,2.3,-4.4).curveTo(8.2,2.9,3.5,10.2).lineTo(3.5,10.3).curveTo(-5,8.2,-5.6,-1.3).closePath();
	this.shape_443.setTransform(-1346,113.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5,-2.3).curveTo(-4.6,-5.2,-3.3,-8.3).lineTo(-2.1,-10.8).lineTo(-0.2,-8.9).curveTo(2,-6.4,3.4,-3.9).curveTo(7.7,4.4,1.6,10.8).lineTo(1.6,10.9).curveTo(-6.3,7.1,-5,-2.3).closePath();
	this.shape_444.setTransform(-1355.6,57.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.5,1).curveTo(-5.9,-1.1,-6.9,-3.9).lineTo(-7.6,-6.3).lineTo(-5.1,-6.2).curveTo(-2.2,-5.8,0.2,-4.9).curveTo(7.8,-1.9,7.5,5.8).lineTo(7.6,5.8).curveTo(5.8,6.3,4.2,6.3).curveTo(-1,6.3,-4.5,1).closePath();
	this.shape_445.setTransform(-1420.9,117.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.3,0.7).curveTo(-6.6,-1.9,-7.4,-5.2).lineTo(-7.8,-8).lineTo(-5.1,-7.5).curveTo(-1.9,-6.7,0.7,-5.3).curveTo(9,-1,7.6,7.7).lineTo(7.6,7.7).curveTo(6.4,8,5.2,8).curveTo(-1.7,8,-5.3,0.7).closePath();
	this.shape_446.setTransform(-1413.3,76.4);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-5.1).curveTo(2.8,-7.7,7.2,-8.6).lineTo(7,-5.8).curveTo(6.6,-2.5,5.6,0.2).curveTo(2.2,8.9,-6.6,8.5).lineTo(-6.6,8.6).curveTo(-9,0.1,-1.1,-5.1).closePath();
	this.shape_447.setTransform(-1330.1,109.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-5.1).curveTo(2.8,-7.7,7.2,-8.6).lineTo(7,-5.8).curveTo(6.6,-2.5,5.6,0.2).curveTo(2.2,8.9,-6.6,8.5).lineTo(-6.6,8.6).curveTo(-9,0.1,-1.1,-5.1).closePath();
	this.shape_448.setTransform(-1340.1,53);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.2,5.1).lineTo(-7.2,5.1).curveTo(-7.4,-2.1,-0.1,-4.5).curveTo(3.6,-5.8,7.3,-5.6).curveTo(6.4,-2.1,4.2,1).curveTo(0.8,5.6,-3.8,5.6).curveTo(-5.4,5.6,-7.2,5.1).closePath();
	this.shape_449.setTransform(-1370,53.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.4,6.8).lineTo(-8.4,6.8).curveTo(-9.1,-1.9,-0.4,-5.4).curveTo(4,-7.2,8.5,-7.2).curveTo(7.7,-2.9,5.2,1.1).curveTo(1.2,7.2,-4.9,7.2).curveTo(-6.6,7.2,-8.4,6.8).closePath();
	this.shape_450.setTransform(-1368,33.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.2,-3).curveTo(-3.3,-5.9,-1.5,-8.7).lineTo(0.1,-11).lineTo(1.7,-8.7).curveTo(3.4,-5.9,4.3,-3.1).curveTo(7,5.9,-0.1,11).lineTo(-0.1,11).curveTo(-7.2,5.9,-4.2,-3).closePath();
	this.shape_451.setTransform(-1377.2,14.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-13.7,12.7).lineTo(13,-24.9).lineTo(13.7,-20).lineTo(-13.7,24.9).closePath();
	this.shape_452.setTransform(-1358.3,80.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.8,-11.7).lineTo(-19.9,-14.8).lineTo(18.5,7.8).lineTo(19.8,14.8).closePath();
	this.shape_453.setTransform(-1396.3,135.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.4,-15.6).lineTo(-15.2,-21.2).lineTo(16.4,10.3).lineTo(13.9,21.2).closePath();
	this.shape_454.setTransform(-1392.9,99.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.4,10.6).curveTo(10.9,-17.2,13.3,-20.9).curveTo(14.9,-23.2,17.2,-22.6).curveTo(18.5,-22.4,19.4,-21.7).lineTo(-18.2,22.8).closePath();
	this.shape_455.setTransform(-1351,136.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.9,119).lineTo(-8.5,-119).lineTo(-6,-111.9).lineTo(10.9,119).closePath();
	this.shape_456.setTransform(-1370.4,137.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,-1.8).curveTo(-0,-3.4,1.6,-4.5).lineTo(2.3,-0.8).curveTo(2.4,3.2,-1.1,4.4).lineTo(-1.2,4.5).curveTo(-3.5,1.5,-1.2,-1.8).closePath();
	this.shape_457.setTransform(-1560.6,141.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.7).lineTo(-4.4,-3.2).lineTo(-0.2,-2.7).curveTo(4.1,-1.4,4.3,2.7).lineTo(4.3,2.7).curveTo(3.2,3.1,2.1,3.1).curveTo(-0.4,3.1,-2.3,0.7).closePath();
	this.shape_458.setTransform(-1568,139.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.beginFill("#303030").beginStroke().moveTo(-2,-1.4).lineTo(0,-5.2).lineTo(2,-1.5).curveTo(3.4,2.7,0,5.2).lineTo(0,5.2).curveTo(-3.4,2.8,-2,-1.4).closePath();
	this.shape_459.setTransform(-1564.6,131);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,2.4).curveTo(-2.8,-0.2,-0.3,-1.6).curveTo(1,-2.2,2.3,-2.4).curveTo(2.2,-1,1.6,0.2).curveTo(0.5,2.4,-1.6,2.4).lineTo(-2.3,2.4).closePath();
	this.shape_460.setTransform(-1536.2,189.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,2.4).lineTo(-2.3,2.4).curveTo(-2.8,-0.2,-0.2,-1.6).curveTo(1,-2.2,2.4,-2.4).curveTo(2.3,-1,1.6,0.2).curveTo(0.5,2.4,-1.6,2.4).lineTo(-2.2,2.4).closePath();
	this.shape_461.setTransform(-1537.6,183.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,2.3).lineTo(-2.3,2.4).curveTo(-2.7,-0.2,-0.2,-1.6).curveTo(1,-2.3,2.4,-2.4).curveTo(2.3,-1.1,1.6,0.2).curveTo(0.5,2.4,-1.6,2.4).lineTo(-2.2,2.3).closePath();
	this.shape_462.setTransform(-1539.5,178.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,0.4).lineTo(-2.7,-2.1).lineTo(-0,-1.7).curveTo(2.6,-0.8,2.7,1.8).curveTo(2,2.1,1.3,2.1).curveTo(-0.3,2.1,-1.5,0.4).closePath();
	this.shape_463.setTransform(-1543.8,183.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,0.4).lineTo(-2.7,-2.1).lineTo(-0,-1.7).curveTo(2.7,-0.8,2.7,1.8).lineTo(2.7,1.8).curveTo(2,2.1,1.4,2.1).curveTo(-0.3,2.1,-1.5,0.4).closePath();
	this.shape_464.setTransform(-1545.1,177.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,1).lineTo(-3.3,-0.7).lineTo(-0.7,-1.5).curveTo(2.1,-1.9,3.2,0.4).curveTo(2.2,1.6,0.8,1.6).curveTo(-0.1,1.6,-1.1,1).closePath();
	this.shape_465.setTransform(-1542.7,189.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.3).lineTo(0.1,-4.8).lineTo(1.9,-1.3).curveTo(3,2.5,-0,4.7).lineTo(-0,4.8).curveTo(-3.1,2.6,-1.8,-1.3).closePath();
	this.shape_466.setTransform(-1542.1,170.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.beginFill("#303030").beginStroke().moveTo(2.7,13.3).curveTo(2.1,13.1,1.3,11.4).lineTo(0.3,9.1).curveTo(-1.6,5.2,-2.4,1.4).curveTo(-2.6,0.3,-3.5,-2.3).curveTo(-4.3,-4.6,-4.5,-6).curveTo(-4.7,-7.9,-4.5,-10).curveTo(-4.4,-12.9,-3.6,-13.4).curveTo(-3.7,-12.2,-3.5,-10.6).lineTo(-3.1,-7.9).curveTo(-2.8,-5.8,-1.5,-2.1).curveTo(-0.6,0.3,0.7,5).curveTo(2,8.7,4.5,10.7).curveTo(4.7,11.5,4.2,12.4).curveTo(3.7,13.4,3,13.4).lineTo(2.7,13.3).closePath();
	this.shape_467.setTransform(-1538.2,186.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.9).lineTo(-0.7,-4.1).lineTo(1.3,-1.4).curveTo(2.9,1.8,0.5,4.1).curveTo(-2.5,2.6,-1.9,-0.9).closePath();
	this.shape_468.setTransform(-1528.8,142.9);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.9).lineTo(-0.7,-4.1).lineTo(1.3,-1.4).curveTo(2.9,1.8,0.5,4.1).lineTo(0.5,4.1).curveTo(-2.5,2.6,-1.9,-0.9).closePath();
	this.shape_469.setTransform(-1536.1,139.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.9).lineTo(-0.7,-4.1).lineTo(1.3,-1.4).curveTo(2.9,1.8,0.5,4.1).lineTo(0.5,4.1).curveTo(-2.5,2.6,-1.9,-0.9).closePath();
	this.shape_470.setTransform(-1542.4,137.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,2).lineTo(-4,1.3).lineTo(-1.6,-1.1).curveTo(1.3,-3,4,-1).curveTo(2.9,2,-0.4,2).lineTo(-0.7,2).closePath();
	this.shape_471.setTransform(-1541.4,145.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,2).lineTo(-4,1.3).lineTo(-1.6,-1).curveTo(1.4,-3,4,-1).lineTo(4,-1).curveTo(3,2,-0.5,2).lineTo(-0.7,2).closePath();
	this.shape_472.setTransform(-1548.1,142.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.beginFill("#303030").beginStroke().moveTo(-2,-0.3).curveTo(-0.3,-3.4,3,-2.8).lineTo(3,-2.8).curveTo(3.5,0.5,0.2,2).lineTo(-3.1,2.9).closePath();
	this.shape_473.setTransform(-1534.4,148.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.beginFill("#303030").beginStroke().moveTo(-2.8,0.6).lineTo(-4.7,-3.9).lineTo(0.1,-3).curveTo(4.9,-1.2,4.7,3.6).lineTo(4.7,3.6).curveTo(3.6,3.9,2.6,3.9).curveTo(-0.6,3.9,-2.8,0.6).closePath();
	this.shape_474.setTransform(-1552.8,133.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.beginFill("#303030").beginStroke().moveTo(12.4,7).lineTo(9.4,6.2).curveTo(3.9,5.1,-0.4,3).curveTo(-1.6,2.4,-4.9,1.2).curveTo(-7.8,0.2,-9.3,-0.7).curveTo(-11.3,-1.9,-13.3,-3.7).curveTo(-16.1,-6.1,-16,-7.3).curveTo(-14.8,-6.3,-13.1,-5.3).lineTo(-10.1,-3.6).curveTo(-8,-2.3,-3.1,-0.7).curveTo(-0.1,0.3,5.5,2.7).curveTo(10.3,4.3,14.3,3.3).curveTo(15.2,3.7,15.7,4.9).curveTo(16.4,6.5,15.4,7.1).curveTo(15.1,7.3,14.5,7.3).curveTo(13.7,7.3,12.4,7).closePath();
	this.shape_475.setTransform(-1534.3,142.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,-0.2).lineTo(-2.5,-4).lineTo(0.7,-2).curveTo(3.5,0.7,2,4).lineTo(2,4).curveTo(-1.7,3.7,-2.4,-0.2).closePath();
	this.shape_476.setTransform(-1508,133);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.beginFill("#303030").beginStroke().moveTo(-4.5,0.5).lineTo(-4.6,0.5).curveTo(-2.8,-2.8,1.1,-2).curveTo(3,-1.6,4.6,-0.6).curveTo(3.3,0.8,1.5,1.5).curveTo(0.2,2.1,-1,2.1).curveTo(-3,2.1,-4.5,0.5).closePath();
	this.shape_477.setTransform(-1503.7,140.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.beginFill("#303030").beginStroke().moveTo(-3.3,3.1).curveTo(-3.9,-0.5,-0.3,-2.2).curveTo(1.5,-3.1,3.4,-3.2).curveTo(3.1,-1.4,2.2,0.3).curveTo(0.6,3.2,-2.2,3.2).lineTo(-3.3,3.1).closePath();
	this.shape_478.setTransform(-1501,130);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,-1.6).lineTo(0.9,-4.5).lineTo(2.1,-1).curveTo(2.7,2.9,-0.6,4.6).curveTo(-3.2,2,-1.4,-1.6).closePath();
	this.shape_479.setTransform(-1502.8,120.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.beginFill("#303030").beginStroke().moveTo(-6,13.2).lineTo(-6.5,13).curveTo(0.5,5.3,3.1,-1.4).curveTo(4.2,-4.2,4.9,-8).lineTo(6.1,-14.7).curveTo(6.9,-10.9,6,-5.6).curveTo(5.2,-0.7,3.3,3).curveTo(2.6,4.3,1.1,6.6).curveTo(-0.6,9,-1.2,10.2).curveTo(-2,11.7,-4.4,13.7).curveTo(-5.5,14.7,-5.9,14.7).curveTo(-6.5,14.7,-6,13.2).closePath();
	this.shape_480.setTransform(-1509.6,137.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,-1.4).lineTo(0.5,-4.6).lineTo(2,-1.2).curveTo(2.8,2.7,-0.3,4.6).curveTo(-3.1,2.2,-1.6,-1.4).closePath();
	this.shape_481.setTransform(-1496.4,191);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.beginFill("#303030").beginStroke().moveTo(0.4,2.4).curveTo(-3.5,1.8,-4,-1.9).lineTo(-4.1,-1.9).curveTo(-0.9,-3.6,1.9,-0.8).curveTo(3.4,0.6,4.1,2.3).curveTo(3.1,2.5,2,2.5).lineTo(0.4,2.4).closePath();
	this.shape_482.setTransform(-1496.5,199.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.beginFill("#303030").beginStroke().moveTo(-4.5,0.6).lineTo(-4.5,0.7).curveTo(-3,-2.6,1,-2.1).curveTo(2.9,-1.8,4.6,-0.8).curveTo(3.3,0.6,1.6,1.4).curveTo(0.2,2.1,-1.1,2.1).curveTo(-2.9,2.1,-4.5,0.6).closePath();
	this.shape_483.setTransform(-1488.7,192.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,3.4).curveTo(-3.8,-0.2,-0.4,-2.2).curveTo(1.4,-3.1,3.2,-3.4).curveTo(3.1,-1.5,2.3,0.2).curveTo(0.7,3.4,-2.4,3.4).lineTo(-3.1,3.4).closePath();
	this.shape_484.setTransform(-1484.9,183.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.beginFill("#303030").beginStroke().moveTo(-12.3,7.5).lineTo(-12.6,7.1).curveTo(-2.5,4.7,3.4,0.4).curveTo(5.9,-1.3,8.6,-4.1).lineTo(13.2,-8.9).curveTo(11.8,-5.3,8.2,-1.4).curveTo(4.8,2.2,1.1,4.2).curveTo(-0.1,4.9,-2.7,5.9).curveTo(-5.3,7,-6.6,7.7).curveTo(-8.1,8.5,-11.2,8.9).lineTo(-12.3,8.9).curveTo(-14.2,8.9,-12.3,7.5).closePath();
	this.shape_485.setTransform(-1500.1,194.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.beginFill("#303030").beginStroke().moveTo(-4.3,1.8).lineTo(-1.9,-1).curveTo(1.2,-3.4,4.3,-1.4).lineTo(4.3,-1.5).curveTo(3.4,2.1,-0.6,2.3).closePath();
	this.shape_486.setTransform(-1531.5,167);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,-1.3).lineTo(0.2,-4.6).lineTo(1.9,-1.3).curveTo(2.9,2.5,-0.1,4.6).lineTo(-0.1,4.6).curveTo(-3,2.4,-1.7,-1.3).closePath();
	this.shape_487.setTransform(-1523.9,163.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0).lineTo(-2.8,-3.8).lineTo(0.6,-2.1).curveTo(3.7,0.3,2.5,3.7).lineTo(2.5,3.8).curveTo(-1.2,3.7,-2.3,0).closePath();
	this.shape_488.setTransform(-1533.3,159.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,1.2).lineTo(-4.4,-1.6).lineTo(-0.8,-2.3).curveTo(3.1,-2.3,4.4,1.2).lineTo(4.4,1.2).curveTo(2.9,2.3,1.4,2.3).curveTo(-0.2,2.3,-1.8,1.2).closePath();
	this.shape_489.setTransform(-1542.9,160.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.beginFill("#303030").beginStroke().moveTo(-1,-3.4).curveTo(-3.6,-4.8,-7.3,-6.1).lineTo(-13.7,-8.2).curveTo(-9.8,-8.5,-4.8,-6.9).curveTo(0,-5.3,3.4,-2.9).curveTo(4.5,-2.1,6.6,-0.2).curveTo(8.7,1.7,9.8,2.5).curveTo(11.2,3.5,12.9,6.2).curveTo(14.7,9,12.1,7.8).lineTo(11.9,8.2).curveTo(5.3,0.1,-1,-3.4).closePath();
	this.shape_490.setTransform(-1527.1,169.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,0.4).lineTo(-3.4,-3.2).lineTo(0.2,-2.3).curveTo(3.8,-0.6,3.4,3).lineTo(3.4,3).lineTo(2.1,3.2).curveTo(-0.6,3.2,-2.2,0.4).closePath();
	this.shape_491.setTransform(-1520.3,116.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.beginFill("#303030").beginStroke().moveTo(-4.2,1.7).lineTo(-4.2,1.7).curveTo(-3.5,-1.9,0.4,-2.4).curveTo(2.4,-2.6,4.2,-2.1).curveTo(3.4,-0.5,1.9,0.9).curveTo(0.2,2.4,-1.6,2.4).curveTo(-2.9,2.4,-4.2,1.7).closePath();
	this.shape_492.setTransform(-1513.8,121.7);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-2).curveTo(0.8,-3.3,2.5,-4.1).lineTo(2.5,-0.3).curveTo(1.8,3.5,-1.9,4).lineTo(-1.9,4).curveTo(-3.5,0.8,-0.7,-2).closePath();
	this.shape_493.setTransform(-1514.7,111.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.beginFill("#303030").beginStroke().moveTo(-2,-0.9).lineTo(-0.8,-4.5).lineTo(1.5,-1.6).curveTo(3.2,1.9,0.6,4.5).lineTo(0.6,4.5).curveTo(-2.7,3,-2,-0.9).closePath();
	this.shape_494.setTransform(-1518.8,102.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,14.4).lineTo(-3.2,14.4).curveTo(1,4.9,1.4,-2.3).curveTo(1.5,-5.4,1,-9.2).lineTo(0.1,-15.8).curveTo(2.1,-12.5,2.9,-7.3).curveTo(3.6,-2.3,2.9,1.8).curveTo(2.7,3.2,2,5.9).curveTo(1.2,8.7,0.9,10).curveTo(0.6,11.7,-1,14.4).curveTo(-1.8,15.9,-2.3,15.9).curveTo(-2.7,15.9,-2.7,14.4).closePath();
	this.shape_495.setTransform(-1519.1,121);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,0.4).lineTo(-2.8,-1.9).lineTo(-0.1,-1.7).curveTo(2.5,-1,2.7,1.6).lineTo(2.8,1.6).curveTo(2,1.9,1.3,1.9).curveTo(-0.2,1.9,-1.5,0.4).closePath();
	this.shape_496.setTransform(-1555.8,180);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.beginFill("#303030").beginStroke().moveTo(-2,2.5).curveTo(-2.7,-0,-0.3,-1.5).curveTo(0.9,-2.3,2.2,-2.6).lineTo(1.7,0.1).curveTo(0.7,2.6,-1.7,2.6).lineTo(-2,2.5).closePath();
	this.shape_497.setTransform(-1550.5,181.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.7).lineTo(-0.5,-3.2).lineTo(1.1,-1.2).curveTo(2.3,1.3,0.4,3.2).lineTo(0.4,3.2).curveTo(-1.9,2,-1.5,-0.7).closePath();
	this.shape_498.setTransform(-1553.3,175.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.beginFill("#303030").beginStroke().moveTo(0.2,8.4).lineTo(0.1,7.6).lineTo(-0.4,7.4).curveTo(-0.6,5.8,-0.5,2.4).curveTo(-0.5,-0.9,-0.7,-2.6).curveTo(-0.8,-3.8,-0.7,-7).curveTo(-0.6,-10.4,-0.2,-8.1).lineTo(-0.1,-6.3).lineTo(0,-4.6).curveTo(0.3,-3.3,0.5,0.8).lineTo(0.7,4.5).curveTo(0.9,6.9,0.7,9).curveTo(0.3,8.8,0.2,8.4).closePath();
	this.shape_499.setTransform(-1552.5,185.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,-1.6).lineTo(1,-4.5).lineTo(2.1,-1).curveTo(2.6,2.9,-0.7,4.5).lineTo(-0.7,4.5).curveTo(-3.3,1.9,-1.4,-1.6).closePath();
	this.shape_500.setTransform(-1464.3,158.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,-1.2).curveTo(-1.5,-3.4,1.8,-1.2).curveTo(3.4,-0,4.4,1.5).curveTo(2.7,2.2,0.8,2.3).curveTo(-3.2,2.3,-4.4,-1.2).closePath();
	this.shape_501.setTransform(-1462.9,165.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.beginFill("#303030").beginStroke().moveTo(-3.9,2.2).lineTo(-4,2.2).curveTo(-3.7,-1.5,0.2,-2.4).curveTo(2.1,-2.8,4,-2.5).curveTo(3.4,-0.8,2.1,0.7).curveTo(0.3,2.6,-1.8,2.6).curveTo(-2.8,2.6,-3.9,2.2).closePath();
	this.shape_502.setTransform(-1456.9,159.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.beginFill("#303030").beginStroke().moveTo(-10.9,4.7).lineTo(-9.9,4.1).lineTo(-9.9,3.3).curveTo(-7.9,2.2,-3.5,0.5).curveTo(0.9,-1.2,2.9,-2.3).curveTo(14.6,-7.4,10.3,-4.6).lineTo(8.1,-3.5).lineTo(5.9,-2.5).curveTo(4.4,-1.4,-0.8,0.9).lineTo(-5.5,3.3).curveTo(-8.5,4.7,-11.4,5.6).curveTo(-11.3,5,-10.9,4.7).closePath();
	this.shape_503.setTransform(-1469.8,165.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.beginFill("#303030").beginStroke().moveTo(-4.2,1.6).lineTo(-4.3,1.6).curveTo(-3.5,-2,0.4,-2.4).curveTo(2.4,-2.6,4.3,-2).curveTo(3.4,-0.4,1.9,0.9).curveTo(0.2,2.4,-1.5,2.4).curveTo(-2.9,2.4,-4.2,1.6).closePath();
	this.shape_504.setTransform(-1471.5,162.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,-0.8).lineTo(-1.3,-4.5).lineTo(1.3,-1.7).curveTo(3.3,1.6,1,4.4).lineTo(1,4.5).curveTo(-2.5,3.2,-2.2,-0.8).closePath();
	this.shape_505.setTransform(-1476,155.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,0.8).lineTo(-3.9,-1.8).lineTo(-0.5,-2.2).curveTo(3.1,-1.9,3.8,1.3).lineTo(3.9,1.4).curveTo(2.7,2.2,1.4,2.2).curveTo(-0.1,2.2,-1.7,0.8).closePath();
	this.shape_506.setTransform(-1555.1,196.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,0.1).curveTo(-1.3,-3.3,2,-3.6).curveTo(3.3,-0.5,0.6,1.9).lineTo(-2.4,3.6).curveTo(-2.6,1.9,-2.2,0.1).closePath();
	this.shape_507.setTransform(-1555.5,203.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,2).lineTo(-4.1,1.2).lineTo(-1.6,-1.1).curveTo(1.4,-3,4,-1).lineTo(4.1,-1).curveTo(3,2,-0.4,2).lineTo(-0.7,2).closePath();
	this.shape_508.setTransform(-1563.3,202.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.beginFill("#303030").beginStroke().moveTo(-4.5,-0).curveTo(-1,-1.5,3.4,-2.7).curveTo(10.1,-4.4,10.3,-2.2).curveTo(10.3,-2.3,10.2,-2.3).curveTo(10.2,-2.3,10.2,-2.2).curveTo(10.2,-2.2,10.2,-2.2).curveTo(10.3,-2.2,10.3,-2.1).lineTo(10.5,-2).lineTo(10.2,-1.5).lineTo(4.5,-1.3).curveTo(1.5,-1.1,-1.2,-0.1).lineTo(-10.6,3.5).curveTo(-7.9,1.3,-4.5,-0).closePath();
	this.shape_509.setTransform(-1550.9,199.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,0.6).lineTo(-3.7,-2.3).lineTo(-0.3,-2.2).curveTo(3.3,-1.5,3.6,1.9).lineTo(3.6,1.9).curveTo(2.6,2.3,1.6,2.3).curveTo(-0.2,2.3,-1.9,0.6).closePath();
	this.shape_510.setTransform(-1571.3,188);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.1).curveTo(-0.8,-3.4,2.5,-3.2).lineTo(2.6,-3.2).curveTo(3.5,-0,0.4,1.9).lineTo(-2.8,3.2).curveTo(-2.8,1.5,-2.1,-0.1).closePath();
	this.shape_511.setTransform(-1572.7,194.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,1.9).lineTo(-4.2,0.6).lineTo(-1.4,-1.4).curveTo(1.8,-2.9,4.1,-0.5).lineTo(4.2,-0.5).curveTo(2.9,2,0.2,2).lineTo(-0.9,1.9).closePath();
	this.shape_512.setTransform(-1580.4,192.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.beginFill("#303030").beginStroke().moveTo(-4.3,-0.5).curveTo(-0.7,-1.5,3.9,-2).curveTo(10.7,-2.8,10.7,-0.6).curveTo(10.6,-0.7,10.6,-0.7).curveTo(10.5,-0.7,10.5,-0.6).curveTo(10.5,-0.6,10.6,-0.6).curveTo(10.6,-0.6,10.7,-0.5).curveTo(10.7,-0.5,10.8,-0.5).curveTo(10.8,-0.4,10.8,-0.4).curveTo(10.8,-0.4,10.8,-0.4).curveTo(10.8,-0.3,10.8,-0.3).lineTo(10.4,0.1).lineTo(4.7,-0.5).curveTo(1.8,-0.7,-1,-0.1).lineTo(-10.8,2.2).curveTo(-8,0.6,-4.3,-0.5).closePath();
	this.shape_513.setTransform(-1567.7,190.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.beginFill("#303030").beginStroke().moveTo(-2,0.4).lineTo(-3.1,-2.9).lineTo(0.2,-2.1).curveTo(3.4,-0.6,3.1,2.8).lineTo(1.9,2.9).curveTo(-0.6,2.9,-2,0.4).closePath();
	this.shape_514.setTransform(-1577,178.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-0.4).curveTo(0.1,-3.4,3.3,-2.4).curveTo(3.5,0.9,0.1,2.1).lineTo(-3.3,2.7).closePath();
	this.shape_515.setTransform(-1579.9,184.2);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.beginFill("#303030").beginStroke().moveTo(-1.3,1.5).lineTo(-4.2,-0.4).lineTo(-1.1,-1.8).curveTo(2.4,-2.5,4.1,0.3).lineTo(4.2,0.3).curveTo(2.8,2,0.9,2).curveTo(-0.1,2,-1.3,1.5).closePath();
	this.shape_516.setTransform(-1587,181.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.beginFill("#303030").beginStroke().moveTo(4.9,0.1).curveTo(2.1,-0.7,-0.8,-0.7).lineTo(-10.9,-0.7).curveTo(-8,-1.7,-4,-1.9).curveTo(0.3,-2,4.4,-1.5).curveTo(11.2,-0.8,10.7,1.3).curveTo(10.6,1.2,10.6,1.2).curveTo(10.6,1.2,10.6,1.2).curveTo(10.6,1.2,10.6,1.3).curveTo(10.6,1.3,10.7,1.4).lineTo(10.8,1.6).lineTo(10.3,1.9).lineTo(4.9,0.1).closePath();
	this.shape_517.setTransform(-1574.3,182.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.beginFill("#303030").beginStroke().moveTo(0.1,2.4).curveTo(-3.6,1.3,-3.8,-2.4).lineTo(-3.8,-2.4).curveTo(-0.4,-3.7,2.1,-0.6).curveTo(3.3,1,3.8,2.8).lineTo(2.9,2.8).curveTo(1.5,2.8,0.1,2.4).closePath();
	this.shape_518.setTransform(-1477.6,185.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,3.3).curveTo(-3.8,-0.3,-0.3,-2.2).curveTo(1.4,-3.1,3.3,-3.3).curveTo(3.1,-1.5,2.3,0.3).curveTo(0.7,3.3,-2.3,3.3).lineTo(-3.1,3.3).closePath();
	this.shape_519.setTransform(-1475.6,179);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.beginFill("#303030").beginStroke().moveTo(-4.6,0.2).lineTo(-4.6,0.2).curveTo(-2.7,-2.9,1.2,-1.9).curveTo(3.1,-1.4,4.6,-0.3).curveTo(3.3,1,1.4,1.7).curveTo(0.2,2.1,-0.8,2.1).curveTo(-3,2.1,-4.6,0.2).closePath();
	this.shape_520.setTransform(-1467.3,181);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.beginFill("#303030").beginStroke().moveTo(-11.8,-0.4).curveTo(-11.7,-0.3,-11.7,-0.3).curveTo(-11.6,-0.3,-11.6,-0.3).curveTo(-11.6,-0.3,-11.7,-0.4).curveTo(-11.7,-0.4,-11.8,-0.5).curveTo(-11.8,-0.5,-11.9,-0.6).curveTo(-11.9,-0.6,-12,-0.6).curveTo(-12,-0.7,-12,-0.7).curveTo(-12,-0.7,-12,-0.7).lineTo(-11.5,-1.1).lineTo(-5.3,0).curveTo(-2.1,0.4,1,-0.1).lineTo(12,-1.7).curveTo(8.8,-0.2,4.6,0.7).curveTo(0.6,1.5,-4.5,1.7).lineTo(-5.9,1.7).curveTo(-12,1.7,-11.8,-0.4).closePath();
	this.shape_521.setTransform(-1481.3,182.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.beginFill("#303030").beginStroke().moveTo(-0.5,-1.9).curveTo(1,-2.9,2.7,-3.3).lineTo(2.2,0).curveTo(0.9,3.4,-2.4,3.3).lineTo(-2.4,3.3).curveTo(-3.4,0.1,-0.5,-1.9).closePath();
	this.shape_522.setTransform(-1558.7,171.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.beginFill("#303030").beginStroke().moveTo(-2,0.3).lineTo(-2.9,-3.1).lineTo(0.3,-2).curveTo(3.4,-0.3,2.8,3.1).lineTo(2,3.1).curveTo(-0.7,3.1,-2,0.3).closePath();
	this.shape_523.setTransform(-1564.8,169.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,-1.2).lineTo(0,-4.2).lineTo(1.6,-1.2).curveTo(2.7,2.2,0,4.1).lineTo(0,4.2).curveTo(-2.7,2.2,-1.6,-1.2).closePath();
	this.shape_524.setTransform(-1562.7,161.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,10.9).lineTo(-1.5,10.4).lineTo(-0.1,4.9).curveTo(0.4,1.9,0.2,-0.9).lineTo(-0.8,-10.9).curveTo(0.6,-7.9,1,-4.1).curveTo(1.5,-0.3,1.5,4.2).curveTo(1.3,11.1,-0.8,10.7).curveTo(-0.8,10.7,-0.7,10.7).curveTo(-0.7,10.6,-0.8,10.6).curveTo(-0.8,10.6,-0.8,10.7).curveTo(-0.8,10.7,-0.9,10.7).lineTo(-1.1,10.9).lineTo(-1.1,10.9).closePath();
	this.shape_525.setTransform(-1562.2,174.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.1).lineTo(-2.4,-3.5).lineTo(0.5,-1.8).curveTo(3.2,0.4,2,3.4).lineTo(2,3.5).curveTo(-1.3,3.3,-2.1,-0.1).closePath();
	this.shape_526.setTransform(-1569.3,148);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,1.8).lineTo(-1.7,-0.8).curveTo(0.9,-3.1,3.7,-1.4).lineTo(3.8,-1.4).curveTo(3.1,1.8,-0.4,2.1).closePath();
	this.shape_527.setTransform(-1573.7,152.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,0.9).lineTo(-3.9,-1.6).lineTo(-0.6,-2.1).curveTo(2.9,-1.9,3.8,1.2).lineTo(3.8,1.2).curveTo(2.6,2.1,1.3,2.1).curveTo(-0.1,2.1,-1.6,0.9).closePath();
	this.shape_528.setTransform(-1579.7,148.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.beginFill("#303030").beginStroke().moveTo(4.7,0.8).curveTo(2.2,-0.7,-0.5,-1.4).lineTo(-10,-3.8).curveTo(-7,-4.1,-3.2,-3.2).curveTo(0.3,-2.5,4.6,-0.9).curveTo(10.9,1.6,9.9,3.4).curveTo(9.8,3.3,9.8,3.3).curveTo(9.8,3.3,9.8,3.3).curveTo(9.8,3.3,9.8,3.4).curveTo(9.8,3.4,9.8,3.5).lineTo(9.9,3.7).lineTo(9.3,3.9).lineTo(4.7,0.8).closePath();
	this.shape_529.setTransform(-1568.1,153.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-2).curveTo(0.6,-3.3,2.3,-4.2).lineTo(2.4,-0.4).curveTo(1.9,3.5,-1.7,4.1).lineTo(-1.7,4.1).curveTo(-3.5,1,-0.8,-2).closePath();
	this.shape_530.setTransform(-1487.7,163.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,0.6).lineTo(-3.8,-2.8).lineTo(-0.1,-2.3).curveTo(3.7,-1.1,3.7,2.5).lineTo(3.7,2.5).curveTo(2.8,2.8,1.9,2.8).curveTo(-0.4,2.8,-2.1,0.6).closePath();
	this.shape_531.setTransform(-1494.6,162.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.beginFill("#303030").beginStroke().moveTo(-2.1,-0.8).lineTo(-1,-4.5).lineTo(1.4,-1.6).curveTo(3.3,1.8,0.8,4.5).curveTo(-2.5,3.1,-2.1,-0.8).closePath();
	this.shape_532.setTransform(-1493.8,153.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.beginFill("#303030").beginStroke().moveTo(1.4,11.7).lineTo(0.9,11.3).lineTo(1.1,5.1).curveTo(1,1.8,0.1,-1.2).lineTo(-3.2,-11.8).curveTo(-1.1,-8.9,0.3,-4.9).curveTo(1.7,-0.9,2.6,4).curveTo(4,11.4,1.7,11.5).curveTo(1.7,11.5,1.7,11.4).curveTo(1.7,11.4,1.7,11.4).curveTo(1.7,11.4,1.7,11.4).curveTo(1.6,11.5,1.6,11.5).lineTo(1.4,11.8).lineTo(1.4,11.7).closePath();
	this.shape_533.setTransform(-1490.6,167.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,3.3).curveTo(-3.8,-0.3,-0.4,-2.2).curveTo(1.4,-3.1,3.2,-3.4).curveTo(3.1,-1.5,2.3,0.2).curveTo(0.8,3.4,-2.3,3.4).lineTo(-3.1,3.3).closePath();
	this.shape_534.setTransform(-1468,150.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,-1.6).curveTo(-0.1,-3.1,1.3,-4.1).lineTo(2.1,-0.8).curveTo(2.3,2.8,-0.9,4.1).lineTo(-0.9,4.1).curveTo(-3.1,1.5,-1.1,-1.6).closePath();
	this.shape_535.setTransform(-1572.1,166.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,1.6).lineTo(-4.3,-0.2).lineTo(-1.2,-1.7).curveTo(2.3,-2.7,4.2,0.1).lineTo(4.3,0.1).curveTo(2.9,2,0.8,2).curveTo(-0.1,2,-1.2,1.6).closePath();
	this.shape_536.setTransform(-1576.4,172.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,-0.5).lineTo(-1.9,-4.5).lineTo(1,-2).curveTo(3.6,1.3,1.5,4.5).curveTo(-2.2,3.6,-2.4,-0.5).closePath();
	this.shape_537.setTransform(-1576.8,160.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,2.4).lineTo(-6,0.1).lineTo(-1.8,-2.3).curveTo(3.1,-3.9,6,-0.1).lineTo(6,-0.1).curveTo(4.1,2.8,0.9,2.8).curveTo(-0.3,2.8,-1.6,2.4).closePath();
	this.shape_538.setTransform(-1532.9,131.2);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,2.4).lineTo(-6,0.1).lineTo(-1.7,-2.3).curveTo(3.1,-3.9,5.9,-0.1).lineTo(6,-0.1).curveTo(4,2.8,0.9,2.8).curveTo(-0.3,2.8,-1.6,2.4).closePath();
	this.shape_539.setTransform(-1539.1,124);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.beginFill("#303030").beginStroke().moveTo(-5.3,3.1).lineTo(-2.6,-0.9).curveTo(1,-4.5,5.2,-2.5).lineTo(5.3,-2.5).curveTo(4.7,2.3,-0.4,3.2).closePath();
	this.shape_540.setTransform(-1545.6,117.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,-0).lineTo(-3.7,-4.9).lineTo(0.7,-2.8).curveTo(4.7,0.3,3.3,4.9).lineTo(3.3,4.9).lineTo(3.2,4.9).curveTo(-1.5,4.9,-3.1,-0).closePath();
	this.shape_541.setTransform(-1548.3,105.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.beginFill("#303030").beginStroke().moveTo(-1,-2.5).curveTo(0.8,-4.3,3.1,-5.3).lineTo(3.2,-0.5).curveTo(2.4,4.5,-2.3,5.3).lineTo(-2.3,5.4).curveTo(-4.6,1.2,-1,-2.5).closePath();
	this.shape_542.setTransform(-1529.1,121);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.beginFill("#303030").beginStroke().moveTo(-1,-2.5).curveTo(0.8,-4.4,3.1,-5.4).lineTo(3.2,-0.5).curveTo(2.4,4.5,-2.3,5.3).lineTo(-2.3,5.4).curveTo(-4.6,1.2,-1,-2.5).closePath();
	this.shape_543.setTransform(-1534.9,114.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.beginFill("#303030").beginStroke().moveTo(-1,-2.5).curveTo(0.8,-4.3,3.1,-5.3).lineTo(3.2,-0.5).curveTo(2.3,4.5,-2.4,5.3).curveTo(-4.6,1.1,-1,-2.5).closePath();
	this.shape_544.setTransform(-1540.6,107.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.beginFill("#303030").beginStroke().moveTo(20.3,33.5).lineTo(19.3,33.2).curveTo(19.8,30.7,18.7,27.1).curveTo(16.7,19.9,9.2,14.3).curveTo(5.4,11.4,-6.8,4.8).curveTo(-14.1,0.9,-17.7,-5.4).curveTo(-22.6,-13.9,-24.9,-21.6).curveTo(-27.4,-29.9,-25.7,-33.7).lineTo(-25,-28.3).curveTo(-23.5,-21.1,-19.1,-12.2).curveTo(-15.1,-4.2,-10.1,-0.3).curveTo(-6.6,2.4,-0.9,4.1).curveTo(8.2,6.8,16.7,12.8).curveTo(27.1,20.1,26.4,26.6).curveTo(25.7,32.6,22.4,33.5).curveTo(21.9,33.7,21.3,33.7).lineTo(20.3,33.5).closePath();
	this.shape_545.setTransform(-1538.6,167);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.beginFill("#303030").beginStroke().moveTo(26.6,27.3).lineTo(25.6,27.2).curveTo(25.6,24.8,23.8,21.6).curveTo(20.4,15.1,12.1,11.3).curveTo(7.8,9.3,-5.1,5.5).curveTo(-12.8,3.2,-17.5,-2).curveTo(-23.9,-9.1,-27.7,-16.1).curveTo(-31.8,-23.5,-30.9,-27.4).lineTo(-29.2,-22.3).curveTo(-26.2,-15.8,-20.3,-8.3).curveTo(-14.9,-1.5,-9.2,1.3).curveTo(-5.4,3.2,0.4,3.6).curveTo(9.6,4.3,19,8.3).curveTo(30.4,13.2,31,19.5).curveTo(31.5,25.4,28.6,26.9).curveTo(27.8,27.4,26.8,27.4).lineTo(26.6,27.3).closePath();
	this.shape_546.setTransform(-1544.5,190.2);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.beginFill("#303030").beginStroke().moveTo(-10.2,73.9).lineTo(-18.5,71.6).curveTo(-19.8,68.3,-17.5,52.4).curveTo(-16.5,46,-13.4,28.5).curveTo(-11.1,15.8,-8.7,1.8).curveTo(-7.6,-4.9,-9.1,-18.1).curveTo(-10.5,-31,-12.9,-37.7).curveTo(-15.5,-45.2,-20.3,-51.6).lineTo(-37.9,-73).lineTo(-38.5,-74.3).lineTo(-34.7,-71.4).curveTo(-28.2,-65.4,-14.7,-50).curveTo(-1.6,-35,-0.3,-9.7).curveTo(0.4,3,-1.6,12.6).lineTo(1.7,8.7).curveTo(6.5,3.9,14.2,-0.6).curveTo(21.5,-4.8,31.9,-20.1).lineTo(37.4,-28.5).curveTo(39.1,-31,38.2,-28.8).curveTo(35.2,-21.7,30.8,-14.5).curveTo(24.9,-4.8,18.5,0.8).curveTo(12.8,4.6,10.5,7).curveTo(7.1,10.5,-0,24.4).curveTo(-7.7,39.4,-3.8,57).curveTo(-1.9,65.8,1.5,71.6).curveTo(-0.5,74.3,-5.6,74.3).curveTo(-7.7,74.3,-10.2,73.9).closePath();
	this.shape_547.setTransform(-1508.5,182.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.9).lineTo(2.3,-4).lineTo(2.4,-0.4).curveTo(1.7,3.3,-1.7,3.9).lineTo(-1.7,4).curveTo(-3.4,0.9,-0.7,-1.9).closePath();
	this.shape_548.setTransform(-2488.2,150.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.9).lineTo(2.3,-4).lineTo(2.4,-0.4).curveTo(1.8,3.4,-1.7,3.9).lineTo(-1.7,4).curveTo(-3.4,0.9,-0.7,-1.9).closePath();
	this.shape_549.setTransform(-2492.4,142.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-1.8).lineTo(2.3,-4).lineTo(2.4,-0.4).curveTo(1.8,3.4,-1.7,3.9).lineTo(-1.7,3.9).curveTo(-3.4,0.9,-0.7,-1.8).closePath();
	this.shape_550.setTransform(-2496.8,137.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,1.1).lineTo(-4.2,-1.6).lineTo(-0.7,-2.2).curveTo(3.1,-2.1,4.1,1.2).lineTo(4.2,1.2).curveTo(2.8,2.2,1.4,2.2).curveTo(-0.1,2.2,-1.7,1.1).closePath();
	this.shape_551.setTransform(-2500.3,145.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.beginFill("#303030").beginStroke().moveTo(-1.7,1.1).lineTo(-4.2,-1.6).lineTo(-0.7,-2.2).curveTo(3.1,-2.1,4.2,1.2).lineTo(4.2,1.2).curveTo(2.8,2.2,1.4,2.2).curveTo(-0.1,2.2,-1.7,1.1).closePath();
	this.shape_552.setTransform(-2504.2,138.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,2).lineTo(-4.4,0.7).lineTo(-1.5,-1.4).curveTo(1.9,-3.1,4.3,-0.5).lineTo(4.4,-0.5).curveTo(3.1,2.1,0.3,2.1).lineTo(-0.9,2).closePath();
	this.shape_553.setTransform(-2496.4,152.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.beginFill("#303030").beginStroke().moveTo(8.4,15.8).curveTo(7.6,15.8,5.8,13.9).lineTo(3.7,11.4).curveTo(-0.6,7,-2.9,2.6).curveTo(-3.6,1.3,-5.7,-1.7).curveTo(-7.7,-4.4,-8.4,-6.1).curveTo(-9.4,-8.3,-10.1,-11.1).curveTo(-11.1,-14.9,-10.2,-15.9).curveTo(-9.9,-14.3,-8.9,-12.3).lineTo(-7.4,-9).curveTo(-6.3,-6.6,-3.1,-2.2).curveTo(-1,0.4,1.9,5.4).curveTo(4.9,9.5,9.7,12.1).lineTo(9.8,12.1).curveTo(11.1,13,10.3,14.5).curveTo(9.7,15.9,8.5,15.9).lineTo(8.4,15.8).closePath();
	this.shape_554.setTransform(-2491.7,146.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,1.2).lineTo(-4.6,-1.6).lineTo(-0.8,-2.4).curveTo(3.3,-2.4,4.6,1.2).curveTo(3.1,2.4,1.5,2.4).curveTo(-0.1,2.4,-1.8,1.2).closePath();
	this.shape_555.setTransform(-2459.6,173.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,0.9).lineTo(-3.6,-1.3).lineTo(-0.6,-1.9).curveTo(2.6,-1.9,3.6,0.9).lineTo(3.6,0.9).curveTo(2.4,1.9,1.2,1.9).curveTo(-0.1,1.9,-1.4,0.9).closePath();
	this.shape_556.setTransform(-2462,166);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.beginFill("#303030").beginStroke().moveTo(-1.3,-1.3).lineTo(0.6,-3.9).lineTo(1.8,-0.9).curveTo(2.3,2.4,-0.4,3.9).lineTo(-0.4,3.9).curveTo(-2.7,1.8,-1.3,-1.3).closePath();
	this.shape_557.setTransform(-2454.7,165.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.4).lineTo(0.2,-4.8).lineTo(1.9,-1.3).curveTo(3,2.6,-0.2,4.7).lineTo(-0.2,4.8).curveTo(-3.2,2.5,-1.8,-1.4).closePath();
	this.shape_558.setTransform(-2459.1,157.9);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.beginFill("#303030").beginStroke().moveTo(-4.7,-0.6).lineTo(-4.7,-0.6).curveTo(-2.1,-3.3,1.6,-1.5).curveTo(3.4,-0.6,4.7,0.8).curveTo(3.1,1.8,1.1,2.1).lineTo(-0.2,2.2).curveTo(-3.2,2.2,-4.7,-0.6).closePath();
	this.shape_559.setTransform(-2435.1,173.4);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.beginFill("#303030").beginStroke().moveTo(-1.4,-1.6).lineTo(1,-4.7).lineTo(2.2,-1).curveTo(2.7,3,-0.7,4.7).curveTo(-3.4,2,-1.4,-1.6).closePath();
	this.shape_560.setTransform(-2459,181.4);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.beginFill("#303030").beginStroke().moveTo(-1.1,1.5).lineTo(-4,-0.1).lineTo(-1.1,-1.6).curveTo(2.2,-2.6,4.1,0).curveTo(2.8,1.9,0.7,1.9).curveTo(-0.1,1.9,-1.1,1.5).closePath();
	this.shape_561.setTransform(-2466.7,184.4);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.2).lineTo(-3.1,-3.7).lineTo(0.5,-2.2).curveTo(3.9,-0,3,3.7).lineTo(2.4,3.7).curveTo(-1,3.7,-2.3,0.2).closePath();
	this.shape_562.setTransform(-2467.4,176.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.9).lineTo(-0.3,-3.6).lineTo(1.3,-1.1).curveTo(2.5,1.7,0.3,3.6).curveTo(-2.3,2.2,-1.5,-0.9).closePath();
	this.shape_563.setTransform(-2440,166);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.beginFill("#303030").beginStroke().moveTo(-4.1,0.4).curveTo(-2.5,-2.5,1,-1.8).curveTo(2.7,-1.4,4.1,-0.5).curveTo(2.9,0.7,1.3,1.4).curveTo(0.1,1.9,-0.9,1.9).curveTo(-2.7,1.9,-4.1,0.4).closePath();
	this.shape_564.setTransform(-2432.6,213.4);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.beginFill("#303030").beginStroke().moveTo(-1.5,-0.7).lineTo(-0.5,-3.5).lineTo(1.2,-1.2).curveTo(2.4,1.5,0.4,3.5).lineTo(0.4,3.5).curveTo(-2.1,2.2,-1.5,-0.7).closePath();
	this.shape_565.setTransform(-2436.3,206.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-2.1).lineTo(2.7,-4.1).lineTo(2.5,-0.3).curveTo(1.7,3.7,-2.1,4.1).lineTo(-2.1,4.1).curveTo(-3.7,0.7,-0.7,-2.1).closePath();
	this.shape_566.setTransform(-2429.5,201.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-2).lineTo(2.7,-4.1).lineTo(2.5,-0.2).curveTo(1.7,3.7,-2.1,4.1).curveTo(-3.7,0.6,-0.7,-2).closePath();
	this.shape_567.setTransform(-2434.2,162.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.beginFill("#303030").beginStroke().moveTo(-2.4,0.1).lineTo(-3,-3.8).lineTo(0.5,-2.2).curveTo(3.8,0.1,2.7,3.8).lineTo(2.5,3.8).curveTo(-1.1,3.8,-2.4,0.1).closePath();
	this.shape_568.setTransform(-2453.6,153.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,-2).lineTo(2.2,-4.4).lineTo(2.5,-0.5).curveTo(2.1,3.5,-1.6,4.3).lineTo(-1.7,4.4).curveTo(-3.6,1.1,-0.9,-2).closePath();
	this.shape_569.setTransform(-2447.2,157.8);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.beginFill("#303030").beginStroke().moveTo(-2,-1.2).lineTo(-0.3,-4.8).lineTo(1.7,-1.4).curveTo(3.1,2.3,0.2,4.8).curveTo(-3,2.7,-2,-1.2).closePath();
	this.shape_570.setTransform(-2450.2,146.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.beginFill("#303030").beginStroke().moveTo(-2.5,-0.3).lineTo(-2.4,-4.3).lineTo(0.7,-2).curveTo(3.6,0.8,1.9,4.3).curveTo(-1.9,3.7,-2.5,-0.3).closePath();
	this.shape_571.setTransform(-2464.1,153.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,-0.7).lineTo(-1.4,-4.2).lineTo(1.1,-1.7).curveTo(3.2,1.4,1.1,4.2).curveTo(-2.2,3.1,-2.2,-0.7).closePath();
	this.shape_572.setTransform(-2402.9,131.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.beginFill("#303030").beginStroke().moveTo(-4.3,-0.4).lineTo(-4.4,-0.4).curveTo(-2.1,-3,1.4,-1.5).curveTo(3.2,-0.8,4.4,0.5).curveTo(3,1.5,1.1,1.9).curveTo(0.3,2.1,-0.3,2.1).curveTo(-2.9,2.1,-4.3,-0.4).closePath();
	this.shape_573.setTransform(-2400.2,139.4);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,2.1).curveTo(-3.5,-1.4,0.2,-2.2).curveTo(2,-2.7,3.8,-2.5).curveTo(3.2,-0.7,2,0.7).curveTo(0.3,2.5,-1.7,2.5).curveTo(-2.7,2.5,-3.8,2.1).closePath();
	this.shape_574.setTransform(-2395.7,130.7);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,-1.8).curveTo(0.3,-3.2,1.9,-4.1).lineTo(2.3,-0.5).curveTo(2,3.1,-1.4,4.1).lineTo(-1.4,4.1).curveTo(-3.3,1.1,-0.9,-1.8).closePath();
	this.shape_575.setTransform(-2395.6,121.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.beginFill("#303030").beginStroke().moveTo(-8.4,11).lineTo(-8.5,11).curveTo(-0.4,5.2,3.4,-0.6).curveTo(5,-3,6.5,-6.5).lineTo(8.9,-12.4).curveTo(8.9,-8.7,7,-4).curveTo(5.3,0.5,2.7,3.6).curveTo(1.9,4.6,-0.1,6.5).lineTo(-2.9,9.4).curveTo(-3.9,10.6,-6.8,11.9).curveTo(-7.9,12.4,-8.4,12.4).curveTo(-9.3,12.4,-8.4,11).closePath();
	this.shape_576.setTransform(-2405.6,135.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.beginFill("#303030").beginStroke().moveTo(-6.7,5.3).lineTo(6.3,-13.1).lineTo(6.7,-10.7).lineTo(-5.2,13.1).closePath();
	this.shape_577.setTransform(-2442.1,176.9);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.beginFill("#303030").beginStroke().moveTo(-8.5,-10).lineTo(-7.8,-13.1).lineTo(8.4,7).lineTo(7,13.1).closePath();
	this.shape_578.setTransform(-2457.7,190.5);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,-11.8).lineTo(-6,-13.3).lineTo(6.8,7.7).lineTo(5.4,13.3).closePath();
	this.shape_579.setTransform(-2456.5,169.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.beginFill("#303030").beginStroke().moveTo(-8.1,6.2).lineTo(7.5,-12.7).lineTo(8.1,-11.1).lineTo(-6.8,12.7).closePath();
	this.shape_580.setTransform(-2438.8,216.2);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.beginFill("#303030").beginStroke().moveTo(-6,54.1).lineTo(-4.7,-54.1).lineTo(-2.4,-53.2).lineTo(6,54.1).closePath();
	this.shape_581.setTransform(-2446.5,202.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.beginFill("#303030").beginStroke().moveTo(-32,46.7).curveTo(-35.4,44.9,-37.6,41.8).curveTo(-40.8,43.4,-44.6,43.4).curveTo(-51.2,43.4,-55.9,38.7).curveTo(-60.6,34.1,-60.6,27.4).curveTo(-60.6,21.2,-56.3,16.5).curveTo(-58.8,14.3,-60.2,11.2).curveTo(-61.7,8.1,-61.7,4.6).curveTo(-61.7,-1,-58.3,-5.3).curveTo(-55,-9.6,-49.8,-10.9).curveTo(-51.6,-13.4,-51.6,-16.4).curveTo(-51.6,-19.6,-49.6,-22.1).curveTo(-47.6,-24.6,-44.5,-25.3).curveTo(-46.3,-28.7,-46.3,-32.5).curveTo(-46.3,-39.2,-41.6,-43.9).curveTo(-36.9,-48.5,-30.3,-48.5).curveTo(-26.6,-48.6,-23.3,-46.9).curveTo(-20.1,-45.4,-17.9,-42.7).curveTo(-14.3,-44.6,-10.3,-44.6).curveTo(-6.8,-44.6,-3.7,-43.1).curveTo(-0.7,-41.8,1.6,-39.3).curveTo(4,-41.2,7,-41.2).curveTo(8.4,-41.2,10,-40.6).curveTo(12.2,-43,15.2,-44.3).curveTo(18.3,-45.7,21.7,-45.7).curveTo(26,-45.7,29.8,-43.5).curveTo(33.4,-41.4,35.5,-37.7).curveTo(39.5,-40.5,44.6,-40.5).curveTo(51.2,-40.5,55.9,-35.8).curveTo(60.5,-31.2,60.5,-24.5).curveTo(60.5,-19,57.1,-14.6).curveTo(61.7,-10,61.7,-3.5).curveTo(61.7,-0,60.3,3.1).curveTo(59,6.1,56.5,8.3).curveTo(57.1,10.3,57.1,12.6).curveTo(57.1,19.2,52.4,23.8).curveTo(47.8,28.6,41.1,28.6).lineTo(39.9,28.5).lineTo(40,30.2).curveTo(40,36.9,35.3,41.5).curveTo(30.6,46.2,24,46.2).curveTo(20,46.2,16.5,44.4).curveTo(13.1,42.5,10.9,39.4).curveTo(6.8,42.2,1.7,42.3).lineTo(1.3,42.3).lineTo(1.1,42.5).lineTo(1.1,42.3).curveTo(-5,42.1,-9.4,37.8).curveTo(-11.1,42.5,-15.2,45.5).curveTo(-19.4,48.5,-24.6,48.6).curveTo(-28.5,48.6,-32,46.7).closePath();
	this.shape_582.setTransform(-2451.8,162.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-2.8).curveTo(0.9,-4.9,3.4,-6).lineTo(3.6,-0.5).curveTo(2.6,5.1,-2.6,5.9).lineTo(-2.6,6).curveTo(-5.2,1.3,-1.1,-2.8).closePath();
	this.shape_583.setTransform(-1303.3,96.4);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-2.8).curveTo(0.9,-4.9,3.4,-6).lineTo(3.6,-0.5).curveTo(2.6,5.1,-2.6,5.9).lineTo(-2.6,6).curveTo(-5.2,1.3,-1.1,-2.8).closePath();
	this.shape_584.setTransform(-1309.7,84.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.2,-2.8).curveTo(0.9,-4.9,3.4,-6).lineTo(3.6,-4.3).curveTo(3.8,-2.3,3.5,-0.5).curveTo(2.6,5.1,-2.7,5.9).lineTo(-2.7,6).curveTo(-5.2,1.3,-1.2,-2.8).closePath();
	this.shape_585.setTransform(-1316.3,76.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,1.6).curveTo(-4.1,0.5,-5.4,-1.1).lineTo(-6.4,-2.5).lineTo(-1,-3.4).curveTo(4.7,-3.3,6.3,1.8).lineTo(6.4,1.8).curveTo(4.3,3.4,2.1,3.4).curveTo(-0.2,3.4,-2.6,1.6).closePath();
	this.shape_586.setTransform(-1321.6,88.4);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,1.6).curveTo(-4,0.5,-5.3,-1.1).lineTo(-6.3,-2.5).lineTo(-1,-3.4).curveTo(4.7,-3.3,6.3,1.8).lineTo(6.4,1.8).curveTo(4.3,3.4,2.1,3.4).curveTo(-0.2,3.4,-2.6,1.6).closePath();
	this.shape_587.setTransform(-1327.6,78.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,3).curveTo(-3.3,2.7,-5.1,1.8).lineTo(-6.7,1).lineTo(-5.4,-0.1).curveTo(-3.9,-1.4,-2.3,-2.2).curveTo(2.9,-4.6,6.6,-0.8).lineTo(6.6,-0.8).curveTo(4.6,3.1,0.4,3.1).curveTo(-0.5,3.1,-1.5,3).closePath();
	this.shape_588.setTransform(-1315.8,99.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.beginFill("#6D6C6C").beginStroke().moveTo(12.6,23.9).curveTo(11.5,23.8,8.8,21).lineTo(5.5,17.3).curveTo(-0.8,10.6,-4.3,4).curveTo(-5.4,2,-8.7,-2.5).curveTo(-11.5,-6.5,-12.7,-9.2).curveTo(-14.2,-12.4,-15.3,-16.8).curveTo(-16.7,-22.4,-15.5,-23.9).curveTo(-14.9,-21.6,-13.5,-18.6).lineTo(-11.2,-13.6).curveTo(-10,-11,-8.2,-8.3).curveTo(-7.2,-6.7,-4.6,-3.4).curveTo(-1.6,0.6,2.9,8.1).curveTo(7.3,14.4,14.6,18.2).lineTo(14.8,18.3).curveTo(16.7,19.6,15.6,21.9).curveTo(14.6,23.9,12.8,23.9).lineTo(12.6,23.9).closePath();
	this.shape_589.setTransform(-1308.6,90.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,1.8).curveTo(-4.3,0.7,-5.8,-0.9).lineTo(-6.9,-2.4).lineTo(-5.2,-2.9).curveTo(-3.1,-3.5,-1.2,-3.5).curveTo(5,-3.6,6.8,1.8).lineTo(6.9,1.8).curveTo(4.6,3.5,2.2,3.5).curveTo(-0.2,3.5,-2.7,1.8).closePath();
	this.shape_590.setTransform(-1260,130.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.2,1.5).lineTo(-5.5,-1.9).lineTo(-0.9,-2.8).curveTo(3.9,-2.9,5.5,1.4).lineTo(5.5,1.4).curveTo(3.7,2.8,1.8,2.8).curveTo(-0.1,2.8,-2.2,1.5).closePath();
	this.shape_591.setTransform(-1263.8,119.8);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2,-1.9).lineTo(0.9,-5.9).lineTo(2.6,-1.4).curveTo(3.5,3.6,-0.6,5.9).lineTo(-0.7,5.9).curveTo(-4.1,2.7,-2,-1.9).closePath();
	this.shape_592.setTransform(-1252.7,118.4);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-2.1).curveTo(-2,-3.9,-0.7,-5.8).lineTo(0.4,-7.2).lineTo(1.4,-5.7).curveTo(2.4,-3.8,2.9,-2).curveTo(4.5,4,-0.2,7.2).lineTo(-0.2,7.2).curveTo(-4.8,3.7,-2.7,-2.1).closePath();
	this.shape_593.setTransform(-1259.3,107.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.1,-0.9).lineTo(-7.1,-0.9).curveTo(-3.2,-5,2.4,-2.3).curveTo(5.2,-0.9,7.1,1.3).curveTo(4.7,2.8,1.6,3.2).lineTo(-0.2,3.4).curveTo(-4.8,3.4,-7.1,-0.9).closePath();
	this.shape_594.setTransform(-1223.1,131);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,-2.5).curveTo(-1.2,-4.2,0.3,-5.8).lineTo(1.6,-7.1).lineTo(2.3,-5.4).curveTo(3.1,-3.4,3.3,-1.5).curveTo(4.1,4.6,-1.1,7).lineTo(-1.1,7.1).curveTo(-5.1,3,-2.1,-2.5).closePath();
	this.shape_595.setTransform(-1259.3,143.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,2.3).lineTo(-6.1,-0.1).lineTo(-1.7,-2.4).curveTo(3.3,-3.9,6.1,0.1).lineTo(6.1,0.1).curveTo(4.1,2.8,1.1,2.8).curveTo(-0.2,2.8,-1.7,2.3).closePath();
	this.shape_596.setTransform(-1270.8,147.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.6,0.2).curveTo(-4.3,-1.6,-4.6,-3.7).lineTo(-4.7,-5.6).lineTo(-3,-5.1).curveTo(-0.9,-4.4,0.7,-3.4).curveTo(5.8,-0.1,4.4,5.5).lineTo(4.4,5.5).lineTo(3.6,5.6).curveTo(-1.4,5.6,-3.6,0.2).closePath();
	this.shape_597.setTransform(-1271.9,136.4);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-1.3).lineTo(-0.5,-5.5).lineTo(1.9,-1.7).curveTo(3.7,2.6,0.4,5.5).curveTo(-3.4,3.3,-2.3,-1.3).closePath();
	this.shape_598.setTransform(-1230.5,119.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.1,0.6).lineTo(-6.2,0.6).curveTo(-3.7,-3.7,1.5,-2.6).curveTo(4,-2.1,6.2,-0.7).curveTo(4.4,1.1,2,2.1).curveTo(0.2,2.9,-1.3,2.9).curveTo(-4,2.9,-6.1,0.6).closePath();
	this.shape_599.setTransform(-1219.3,191.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-1.2).lineTo(-0.8,-5.3).lineTo(1.8,-1.8).curveTo(3.7,2.3,0.7,5.2).lineTo(0.7,5.3).curveTo(-3.1,3.3,-2.3,-1.2).closePath();
	this.shape_600.setTransform(-1225,181.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-3.1).curveTo(1.2,-5.2,4,-6.2).lineTo(4.1,-4.4).curveTo(4.2,-2.2,3.8,-0.4).curveTo(2.4,5.6,-3.3,6.2).curveTo(-5.7,1,-1.1,-3.1).closePath();
	this.shape_601.setTransform(-1214.6,173.4);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-3.1).curveTo(1.2,-5.2,4,-6.2).lineTo(4.1,-4.4).curveTo(4.2,-2.2,3.8,-0.4).curveTo(2.4,5.6,-3.3,6.2).curveTo(-5.7,1,-1.1,-3.1).closePath();
	this.shape_602.setTransform(-1221.6,115.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.6,0.1).curveTo(-4.3,-1.7,-4.5,-3.9).lineTo(-4.6,-5.8).lineTo(-2.8,-5.2).curveTo(-0.8,-4.4,0.8,-3.3).curveTo(5.8,0.2,4.1,5.7).lineTo(4.2,5.7).lineTo(3.8,5.8).curveTo(-1.6,5.8,-3.6,0.1).closePath();
	this.shape_603.setTransform(-1251.1,100.4);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,-2.9).curveTo(0.6,-5.3,3.2,-6.6).lineTo(3.6,-4.8).curveTo(3.9,-2.7,3.7,-0.8).curveTo(3.1,5.3,-2.5,6.5).lineTo(-2.6,6.6).curveTo(-5.5,1.6,-1.5,-2.9).closePath();
	this.shape_604.setTransform(-1241.3,107.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,-1.8).curveTo(-2.4,-3.7,-1.4,-5.7).lineTo(-0.4,-7.2).lineTo(0.7,-5.8).curveTo(2,-4,2.6,-2.2).curveTo(4.8,3.5,0.4,7.1).lineTo(0.4,7.2).curveTo(-4.5,4.2,-2.9,-1.8).closePath();
	this.shape_605.setTransform(-1245.9,90.4);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.7,-0.5).curveTo(-4,-2.3,-3.8,-4.6).lineTo(-3.6,-6.4).lineTo(-2,-5.5).curveTo(-0.1,-4.4,1.2,-3.1).curveTo(5.5,1.2,3,6.3).lineTo(3,6.4).curveTo(-2.7,5.6,-3.7,-0.5).closePath();
	this.shape_606.setTransform(-1267,101.4);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,-1).lineTo(-2.2,-6.4).lineTo(1.6,-2.5).curveTo(4.8,2.1,1.7,6.4).lineTo(1.7,6.4).curveTo(-3.4,4.7,-3.3,-1).closePath();
	this.shape_607.setTransform(-1174.5,68.3);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.6,-0.5).lineTo(-6.6,-0.5).curveTo(-3.2,-4.6,2.1,-2.3).curveTo(4.7,-1.2,6.6,0.8).curveTo(4.5,2.3,1.7,2.9).curveTo(0.5,3.1,-0.5,3.1).curveTo(-4.4,3.1,-6.6,-0.5).closePath();
	this.shape_608.setTransform(-1170.4,79.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.7,3.2).lineTo(-5.7,3.2).curveTo(-5.3,-2.1,0.2,-3.4).curveTo(3,-4.1,5.7,-3.7).curveTo(4.8,-1.1,3,1).curveTo(0.4,3.8,-2.6,3.8).curveTo(-4.1,3.8,-5.7,3.2).closePath();
	this.shape_609.setTransform(-1163.6,66.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.4,-2.7).curveTo(0.4,-4.9,2.8,-6.2).lineTo(3.2,-4.6).curveTo(3.5,-2.6,3.4,-0.8).curveTo(3,4.8,-2.1,6.2).lineTo(-2.1,6.2).curveTo(-5.1,1.8,-1.4,-2.7).closePath();
	this.shape_610.setTransform(-1163.4,52.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.7,16.5).lineTo(-12.8,16.5).curveTo(-0.5,7.7,5.1,-0.9).curveTo(7.5,-4.5,9.7,-9.8).lineTo(13.4,-18.8).curveTo(13.4,-13.1,10.6,-6).curveTo(7.9,0.7,4.1,5.4).curveTo(2.8,6.9,-0.1,9.7).curveTo(-3.1,12.6,-4.4,14.1).curveTo(-5.9,15.9,-10.3,18).curveTo(-12,18.8,-12.8,18.8).curveTo(-14.1,18.8,-12.7,16.5).closePath();
	this.shape_611.setTransform(-1178.5,74.3);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.2,8).lineTo(9.6,-19.8).lineTo(10.2,-16.2).lineTo(-7.9,19.8).closePath();
	this.shape_612.setTransform(-1233.6,136.4);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.7,-15.1).lineTo(-11.7,-19.8).lineTo(12.7,10.5).lineTo(10.6,19.8).closePath();
	this.shape_613.setTransform(-1257.3,156.8);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.2,-17.8).lineTo(-9,-20.2).lineTo(10.2,11.5).lineTo(8.1,20.2).closePath();
	this.shape_614.setTransform(-1255.5,125.4);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.3,9.3).lineTo(11.4,-19.3).lineTo(12.3,-16.8).lineTo(-10.2,19.2).closePath();
	this.shape_615.setTransform(-1228.7,195.7);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9.1,81.8).lineTo(-7.1,-81.8).lineTo(-3.5,-80.3).lineTo(9.1,81.8).closePath();
	this.shape_616.setTransform(-1240.4,174.7);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-48.4,70.6).curveTo(-53.5,67.9,-56.8,63.2).curveTo(-61.7,65.6,-67.3,65.6).curveTo(-77.3,65.6,-84.4,58.6).curveTo(-91.5,51.4,-91.5,41.5).curveTo(-91.5,36.8,-89.8,32.5).curveTo(-88.1,28.3,-85.1,25).curveTo(-88.8,21.6,-91,17).curveTo(-93.2,12.2,-93.2,6.9).curveTo(-93.2,-1.4,-88.1,-7.9).curveTo(-83.1,-14.4,-75.2,-16.5).curveTo(-78,-20.2,-78,-24.7).curveTo(-78,-29.6,-74.9,-33.4).curveTo(-71.9,-37.1,-67.3,-38.2).curveTo(-69.9,-43.3,-69.9,-49.1).curveTo(-69.9,-59.2,-62.9,-66.2).curveTo(-55.8,-73.3,-45.8,-73.3).curveTo(-40.2,-73.4,-35.1,-70.9).curveTo(-30.4,-68.6,-27,-64.4).curveTo(-21.7,-67.3,-15.5,-67.3).curveTo(-10.3,-67.3,-5.6,-65.2).curveTo(-1,-63.1,2.4,-59.3).curveTo(6,-62.1,10.7,-62.1).curveTo(13,-62.1,15.2,-61.4).curveTo(18.5,-64.9,23,-67).curveTo(27.7,-69,32.8,-69).curveTo(39.4,-69,45,-65.7).curveTo(50.4,-62.5,53.7,-57.1).curveTo(59.9,-61.3,67.3,-61.3).curveTo(77.3,-61.2,84.4,-54.2).curveTo(91.4,-47.1,91.5,-37.1).curveTo(91.5,-28.7,86.3,-22.1).curveTo(89.5,-18.7,91.3,-14.5).curveTo(93.2,-10,93.2,-5.1).curveTo(93.2,0,91.1,4.7).curveTo(89,9.2,85.4,12.6).curveTo(86.3,15.7,86.3,19).curveTo(86.3,29,79.2,36.1).curveTo(72.1,43.1,62.2,43.1).lineTo(60.3,43.1).curveTo(60.4,44.4,60.4,45.7).curveTo(60.4,55.8,53.3,62.8).curveTo(46.3,69.9,36.2,69.9).curveTo(30.2,69.9,24.8,67).curveTo(19.8,64.3,16.4,59.6).curveTo(10.2,63.8,2.6,63.8).lineTo(2,63.8).lineTo(1.7,64.2).lineTo(1.7,63.8).curveTo(-2.9,63.7,-7.1,61.8).curveTo(-11.1,60.1,-14.3,57.1).curveTo(-16.7,64.3,-22.9,68.8).curveTo(-29.3,73.3,-37.1,73.3).curveTo(-43.1,73.3,-48.4,70.6).closePath();
	this.shape_617.setTransform(-1248.3,114.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.1,9.4).lineTo(9.5,-18.3).lineTo(10.1,-14.7).lineTo(-10.1,18.3).closePath();
	this.shape_618.setTransform(-1413.5,122.8);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-14.5,-8.5).lineTo(-14.6,-10.9).lineTo(13.6,5.8).lineTo(14.6,10.9).closePath();
	this.shape_619.setTransform(-1441.4,163.3);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-11.6,-14.6).lineTo(-11.1,-17).lineTo(11.6,9.9).lineTo(10.6,17).closePath();
	this.shape_620.setTransform(-1439,138.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-14.3,7.8).curveTo(8,-12.7,9.8,-15.4).curveTo(11,-17.1,12.7,-16.7).curveTo(13.6,-16.5,14.3,-16).lineTo(-13.4,16.7).closePath();
	this.shape_621.setTransform(-1408.2,164.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8,89.5).lineTo(-6.3,-89.5).lineTo(-4.1,-88.2).lineTo(-1.6,-46.8).lineTo(8,89.5).closePath();
	this.shape_622.setTransform(-1422.4,167);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,72).curveTo(-29.8,68.5,-39,45.2).curveTo(-46.7,25.9,-39.5,-3.8).curveTo(-33.5,-29,-20.2,-51).curveTo(-7.5,-72.1,0.2,-72.1).curveTo(7.9,-72.1,20.5,-51).curveTo(33.6,-29.1,39.6,-4).curveTo(46.7,25.8,39.1,45.1).curveTo(29.9,68.4,0.5,72.1).closePath();
	this.shape_623.setTransform(-1425,116.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-11.3,10.5).lineTo(10.6,-20.5).lineTo(11.3,-16.5).lineTo(-11.3,20.5).closePath();
	this.shape_624.setTransform(-1502,88.1);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.3,-9.6).lineTo(-16.4,-12.2).lineTo(15.3,6.5).lineTo(16.4,12.2).closePath();
	this.shape_625.setTransform(-1533.4,133.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-13,-16.4).lineTo(-12.4,-19.1).lineTo(13,11.1).lineTo(11.9,19.1).closePath();
	this.shape_626.setTransform(-1530.7,105.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16,8.8).curveTo(9,-14.2,11,-17.3).curveTo(12.3,-19.1,14.2,-18.7).curveTo(15.3,-18.5,16,-17.9).lineTo(-15,18.8).closePath();
	this.shape_627.setTransform(-1496,134.9);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9,109.6).lineTo(-7,-109.6).lineTo(-4.6,-108.2).lineTo(9,109.6).closePath();
	this.shape_628.setTransform(-1512.1,146.8);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,80.8).curveTo(-33.4,76.8,-43.8,50.7).curveTo(-52.4,29.1,-44.4,-4.3).curveTo(-37.6,-32.5,-22.7,-57.3).curveTo(-16.2,-68.1,-10.1,-74.4).curveTo(-3.9,-80.9,0.2,-80.9).curveTo(4.3,-80.9,10.4,-74.4).curveTo(16.5,-68.1,23,-57.3).curveTo(37.7,-32.6,44.5,-4.4).curveTo(52.4,28.9,43.9,50.6).curveTo(33.6,76.8,0.5,80.9).closePath();
	this.shape_629.setTransform(-1514.9,80.9);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,1.4).lineTo(-5.5,-2).lineTo(-0.8,-2.8).curveTo(4.1,-2.8,5.5,1.5).lineTo(5.4,1.5).curveTo(3.6,2.8,1.7,2.8).curveTo(-0.2,2.8,-2.2,1.4).closePath();
	this.shape_630.setTransform(-2026.1,148.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0.5).lineTo(-4.4,-3.8).lineTo(0.2,-2.8).curveTo(4.8,-1,4.4,3.6).lineTo(4.4,3.5).curveTo(3.4,3.8,2.6,3.8).curveTo(-0.6,3.8,-2.7,0.5).closePath();
	this.shape_631.setTransform(-2026.2,139);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.beginFill("#303030").beginStroke().moveTo(-6.8,-1.7).lineTo(-6.8,-1.7).curveTo(-2.4,-5.3,2.7,-1.8).curveTo(5.2,-0.1,6.8,2.3).curveTo(4.2,3.4,1.2,3.5).lineTo(1,3.5).curveTo(-4.9,3.5,-6.8,-1.7).closePath();
	this.shape_632.setTransform(-2000.4,161.7);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.beginFill("#303030").beginStroke().moveTo(-3.2,-1.4).curveTo(-3,-3.3,-2.1,-5.4).lineTo(-1.4,-7).lineTo(-0.1,-5.8).curveTo(1.3,-4.2,2.2,-2.4).curveTo(5,2.9,1.1,6.9).lineTo(1.1,7).curveTo(-4,4.6,-3.2,-1.4).closePath();
	this.shape_633.setTransform(-2007.9,150.8);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,-3.3).curveTo(1.8,-4.9,4.7,-5.5).lineTo(4.5,-3.7).curveTo(4.3,-1.6,3.6,0.1).curveTo(1.4,5.7,-4.3,5.5).lineTo(-4.3,5.5).curveTo(-5.8,0.1,-0.7,-3.3).closePath();
	this.shape_634.setTransform(-1997.8,147.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.beginFill("#303030").beginStroke().moveTo(-8.9,8.2).lineTo(8.3,-16).lineTo(8.9,-12.9).lineTo(-8.9,16).closePath();
	this.shape_635.setTransform(-2009.6,165.2);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.beginFill("#303030").beginStroke().moveTo(-1.9,-1.8).lineTo(0.9,-5.7).lineTo(2.6,-1.4).curveTo(3.4,3.4,-0.6,5.6).lineTo(-0.6,5.7).curveTo(-4,2.6,-1.9,-1.8).closePath();
	this.shape_636.setTransform(-2029.8,174.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,2.6).lineTo(-5.7,1.1).lineTo(-2,-1.8).curveTo(2.3,-4,5.6,-0.9).lineTo(5.7,-0.9).curveTo(4,2.7,0.2,2.7).lineTo(-1.2,2.6).closePath();
	this.shape_637.setTransform(-2038.2,180.7);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.beginFill("#303030").beginStroke().moveTo(-2.7,0.4).lineTo(-4.1,-4.2).lineTo(0.4,-2.8).curveTo(4.7,-0.5,4,4).lineTo(4,4).lineTo(2.8,4.2).curveTo(-0.8,4.2,-2.7,0.4).closePath();
	this.shape_638.setTransform(-2039.3,171.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.beginFill("#303030").beginStroke().moveTo(-8.6,-8.1).lineTo(-7.9,-11.1).lineTo(8.5,5.4).lineTo(7.3,11.1).closePath();
	this.shape_639.setTransform(-2028.5,183.7);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.2).lineTo(-0.1,-4.5).lineTo(1.7,-1.3).curveTo(3,2.2,0.2,4.4).lineTo(0.2,4.5).curveTo(-2.8,2.5,-1.8,-1.2).closePath();
	this.shape_640.setTransform(-2035.3,152.7);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.beginFill("#303030").beginStroke().moveTo(-0.7,2.1).lineTo(-4.3,1.3).lineTo(-1.7,-1.2).curveTo(1.5,-3.2,4.3,-1).curveTo(3.2,2.1,-0.3,2.1).lineTo(-0.7,2.1).closePath();
	this.shape_641.setTransform(-2041.5,157.9);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.7).lineTo(-4.2,-3).lineTo(-0.1,-2.6).curveTo(4,-1.4,4.2,2.6).lineTo(4.2,2.6).curveTo(3.1,3,2.1,3).curveTo(-0.4,3,-2.3,0.7).closePath();
	this.shape_642.setTransform(-2045.2,151.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.beginFill("#303030").beginStroke().moveTo(-10.8,-5.1).lineTo(-11,-6.8).lineTo(10,3.2).lineTo(11,6.8).closePath();
	this.shape_643.setTransform(-2031.6,159.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,-1.3).lineTo(0.3,-4.5).lineTo(1.8,-1.2).curveTo(2.8,2.5,-0.2,4.4).lineTo(-0.2,4.5).curveTo(-3,2.3,-1.6,-1.3).closePath();
	this.shape_644.setTransform(-2033.1,195.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.beginFill("#303030").beginStroke().moveTo(-0.9,2).lineTo(-4.4,0.8).lineTo(-1.6,-1.4).curveTo(1.8,-3.1,4.4,-0.7).lineTo(4.4,-0.7).curveTo(3.1,2.1,0.1,2.1).lineTo(-0.9,2).closePath();
	this.shape_645.setTransform(-2039.7,200.1);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,0.5).lineTo(-4,-3.3).lineTo(0.1,-2.6).curveTo(4.1,-1,3.9,3).lineTo(4,3).curveTo(3.1,3.3,2.2,3.3).curveTo(-0.5,3.3,-2.3,0.5).closePath();
	this.shape_646.setTransform(-2042.8,193.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.beginFill("#303030").beginStroke().moveTo(-10.4,-6.1).lineTo(-10.4,-7.7).lineTo(9.7,4.1).lineTo(10.4,7.7).closePath();
	this.shape_647.setTransform(-2029.9,202.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,-0.9).lineTo(-4.5,-1).curveTo(-1.7,-3.4,1.6,-1.3).curveTo(3.4,-0.2,4.5,1.3).curveTo(2.9,2.1,0.8,2.2).lineTo(0.3,2.2).curveTo(-3.1,2.2,-4.4,-0.9).closePath();
	this.shape_648.setTransform(-2002.9,205);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.beginFill("#303030").beginStroke().moveTo(-2.3,-0.7).lineTo(-1.6,-4.4).lineTo(1.1,-1.8).curveTo(3.4,1.4,1.3,4.3).lineTo(1.3,4.4).curveTo(-2.3,3.3,-2.3,-0.7).closePath();
	this.shape_649.setTransform(-2006.8,197.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.beginFill("#303030").beginStroke().moveTo(-3,3.4).curveTo(-3.8,-0.1,-0.4,-2.1).curveTo(1.3,-3.1,3.2,-3.4).curveTo(3.1,-1.6,2.3,0.2).curveTo(0.8,3.4,-2.4,3.4).lineTo(-3,3.4).closePath();
	this.shape_650.setTransform(-2000,196.4);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.beginFill("#303030").beginStroke().moveTo(-8.5,4.1).curveTo(4.8,-6.9,5.9,-8.4).curveTo(6.6,-9.3,7.6,-9.1).curveTo(8.1,-8.9,8.5,-8.6).lineTo(-8.2,9.1).closePath();
	this.shape_651.setTransform(-2009.3,207.3);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.beginFill("#303030").beginStroke().moveTo(-0.2,2.9).curveTo(-4.7,0.9,-4.3,-3.7).lineTo(-4.3,-3.7).curveTo(0.1,-4.7,2.7,-0.5).curveTo(4,1.6,4.3,3.9).curveTo(2,3.9,-0.2,2.9).closePath();
	this.shape_652.setTransform(-1998.9,182.4);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.beginFill("#303030").beginStroke().moveTo(-1.8,-1.9).lineTo(1.1,-5.7).lineTo(2.6,-1.3).curveTo(3.3,3.5,-0.7,5.6).lineTo(-0.7,5.7).curveTo(-4,2.5,-1.8,-1.9).closePath();
	this.shape_653.setTransform(-1999.2,171.8);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.beginFill("#303030").beginStroke().moveTo(-5.3,1.8).lineTo(-5.4,1.8).curveTo(-4.2,-2.6,0.7,-2.9).curveTo(3.2,-3,5.4,-2.2).curveTo(4.2,-0.2,2.3,1.3).curveTo(0.3,2.9,-1.8,2.9).curveTo(-3.6,2.9,-5.3,1.8).closePath();
	this.shape_654.setTransform(-1990.6,174.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.beginFill("#303030").beginStroke().moveTo(-11.7,0).curveTo(9.3,-4.5,11.4,-5.5).curveTo(12.7,-6.1,13.6,-5.3).curveTo(14.1,-4.8,14.3,-4.3).lineTo(-14.3,5.8).closePath();
	this.shape_655.setTransform(-2007.2,180.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,2.6).curveTo(-3.9,-1.1,-0.1,-2.4).curveTo(1.9,-3,3.8,-2.9).curveTo(3.3,-1.1,2.2,0.5).curveTo(0.4,2.9,-2,2.9).curveTo(-2.9,2.9,-3.8,2.6).closePath();
	this.shape_656.setTransform(-2017.4,152);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.beginFill("#303030").beginStroke().moveTo(-4.4,3.5).lineTo(-4.4,3.5).curveTo(-4.8,-1,-0.2,-2.9).curveTo(2.1,-3.8,4.4,-3.8).curveTo(4,-1.5,2.7,0.5).curveTo(0.6,3.8,-2.6,3.8).curveTo(-3.4,3.8,-4.4,3.5).closePath();
	this.shape_657.setTransform(-2016.4,141.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,-1.6).lineTo(0.1,-5.8).lineTo(2.2,-1.6).curveTo(3.7,3,-0,5.7).lineTo(-0,5.7).curveTo(-3.8,3.1,-2.2,-1.6).closePath();
	this.shape_658.setTransform(-2021.2,131.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.beginFill("#303030").beginStroke().moveTo(-5.7,61.4).lineTo(-4.4,-61.4).lineTo(-3.2,-57.7).lineTo(5.7,61.4).closePath();
	this.shape_659.setTransform(-2017.6,195.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.2,0,-19.2).curveTo(8,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(8,19.1,0,19.2).curveTo(-8,19.1,-13.6,13.5).closePath();
	this.shape_660.setTransform(-2019.6,175);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.beginFill("#303030").beginStroke().moveTo(-8.9,8.8).curveTo(-12.5,5.2,-12.5,0).curveTo(-12.5,-5.2,-8.9,-8.9).curveTo(-5.2,-12.5,-0,-12.5).curveTo(5.2,-12.5,8.9,-8.9).curveTo(12.5,-5.2,12.5,0).curveTo(12.5,5.2,8.9,8.8).curveTo(5.2,12.5,-0,12.5).curveTo(-5.2,12.5,-8.9,8.8).closePath();
	this.shape_661.setTransform(-2002.9,129.1);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,14).curveTo(-19.2,8.2,-19.2,0).curveTo(-19.2,-8.2,-13.6,-13.9).curveTo(-8,-19.8,-0,-19.8).curveTo(7.9,-19.8,13.6,-13.9).curveTo(19.2,-8.1,19.2,0).curveTo(19.2,8.2,13.6,14).curveTo(7.9,19.7,-0,19.7).curveTo(-8,19.7,-13.6,14).closePath();
	this.shape_662.setTransform(-2002.9,146.7);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.6).curveTo(-19.2,7.9,-19.2,-0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.2,0,-19.2).curveTo(8,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,-0).curveTo(19.2,7.9,13.6,13.6).curveTo(8,19.2,0,19.2).curveTo(-8,19.2,-13.6,13.6).closePath();
	this.shape_663.setTransform(-1989.1,161.3);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.5).curveTo(-19.2,7.9,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.1,-0,-19.1).curveTo(7.9,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,7.9,13.6,13.5).curveTo(7.9,19.1,-0,19.1).curveTo(-8,19.1,-13.6,13.5).closePath();
	this.shape_664.setTransform(-1986.6,184.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.beginFill("#303030").beginStroke().moveTo(-8.3,8.3).curveTo(-11.8,4.9,-11.8,-0).curveTo(-11.8,-4.9,-8.3,-8.3).curveTo(-4.9,-11.8,-0,-11.8).curveTo(4.9,-11.8,8.3,-8.3).curveTo(11.8,-4.9,11.8,-0).curveTo(11.8,4.9,8.3,8.3).curveTo(4.9,11.8,-0,11.8).curveTo(-4.9,11.8,-8.3,8.3).closePath();
	this.shape_665.setTransform(-2053,168);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.beginFill("#303030").beginStroke().moveTo(-8.4,8.3).curveTo(-11.8,4.9,-11.8,-0).curveTo(-11.8,-4.8,-8.4,-8.3).curveTo(-4.9,-11.8,0,-11.8).curveTo(4.9,-11.8,8.4,-8.3).curveTo(11.8,-4.9,11.8,-0).curveTo(11.8,4.9,8.4,8.3).curveTo(4.9,11.8,0,11.8).curveTo(-4.9,11.8,-8.4,8.3).closePath();
	this.shape_666.setTransform(-2038.9,131.4);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,11.6).curveTo(-7,10.7,-9.7,6.7).curveTo(-12.5,2.6,-11.6,-2.2).curveTo(-10.7,-7,-6.7,-9.7).curveTo(-2.7,-12.5,2.1,-11.6).curveTo(7,-10.7,9.7,-6.7).curveTo(12.5,-2.7,11.6,2.1).curveTo(10.7,6.9,6.7,9.7).curveTo(3.6,11.8,0.2,11.8).curveTo(-1,11.8,-2.2,11.6).closePath();
	this.shape_667.setTransform(-2004.9,189.9);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.5,-13.6).curveTo(-7.9,-19.2,0,-19.1).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(7.9,19.1,0,19.2).curveTo(-7.9,19.1,-13.5,13.5).closePath();
	this.shape_668.setTransform(-1998.4,194.8);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.5).curveTo(-19.2,7.9,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.1,-0,-19.1).curveTo(7.9,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,7.9,13.6,13.5).curveTo(7.9,19.1,-0,19.1).curveTo(-8,19.1,-13.6,13.5).closePath();
	this.shape_669.setTransform(-2017.4,202.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.1,-0,-19.2).curveTo(7.9,-19.1,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(7.9,19.1,-0,19.2).curveTo(-8,19.1,-13.6,13.5).closePath();
	this.shape_670.setTransform(-2036.5,196.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.beginFill("#303030").beginStroke().moveTo(-13.6,13.5).curveTo(-19.2,8,-19.2,0).curveTo(-19.2,-7.9,-13.6,-13.6).curveTo(-8,-19.2,-0,-19.1).curveTo(7.9,-19.2,13.6,-13.6).curveTo(19.2,-7.9,19.2,0).curveTo(19.2,8,13.6,13.5).curveTo(7.9,19.1,-0,19.2).curveTo(-8,19.1,-13.6,13.5).closePath();
	this.shape_671.setTransform(-2052.1,185.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,18.9).curveTo(-11,17.6,-15.6,11.1).curveTo(-20.2,4.7,-18.9,-3.2).curveTo(-17.6,-11,-11.1,-15.6).curveTo(-4.7,-20.2,3.2,-18.9).curveTo(11,-17.6,15.6,-11.1).curveTo(20.2,-4.6,18.9,3.1).curveTo(17.6,11,11.2,15.6).curveTo(6.1,19.2,0.3,19.2).curveTo(-1.4,19.2,-3.1,18.9).closePath();
	this.shape_672.setTransform(-2022.1,145.5);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,18.9).curveTo(-11,17.6,-15.6,11.1).curveTo(-20.2,4.7,-18.9,-3.2).curveTo(-17.6,-11,-11.1,-15.6).curveTo(-4.7,-20.2,3.2,-18.9).curveTo(11,-17.6,15.6,-11.1).curveTo(20.2,-4.7,18.9,3.2).curveTo(17.6,11,11.2,15.6).curveTo(6.1,19.2,0.3,19.2).curveTo(-1.4,19.2,-3.1,18.9).closePath();
	this.shape_673.setTransform(-2040.9,153.3);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.beginFill("#303030").beginStroke().moveTo(-13.5,13.6).curveTo(-19.2,8,-19.2,-0).curveTo(-19.2,-7.9,-13.5,-13.5).curveTo(-8,-19.2,-0,-19.2).curveTo(7.9,-19.2,13.6,-13.5).curveTo(19.2,-7.9,19.2,-0).curveTo(19.2,8,13.6,13.6).curveTo(7.9,19.2,-0,19.2).curveTo(-8,19.2,-13.5,13.6).closePath();
	this.shape_674.setTransform(-2021.5,120.4);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.beginFill("#303030").beginStroke().moveTo(-0.1,11.3).curveTo(-1.9,13.3,-8.6,13.1).lineTo(-15.8,12.5).curveTo(-16.6,12.5,-15.6,11.1).curveTo(-15.2,10.4,-14.5,9.7).curveTo(-10.6,6,-5.3,-3.2).curveTo(-2.3,-8.5,-0.1,-13.1).lineTo(-0,-13.1).curveTo(2.2,-8.5,5.2,-3.2).curveTo(10.5,6,14.4,9.7).curveTo(17,12.5,15.7,12.5).curveTo(11.9,13,8.5,13.1).lineTo(7.3,13.1).curveTo(1.6,13.1,-0.1,11.3).closePath();
	this.shape_675.setTransform(-2272,124);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.beginFill("#303030").beginStroke().moveTo(-0,11.3).curveTo(-2.6,13.3,-12.4,13.1).lineTo(-22.9,12.5).curveTo(-24,12.5,-22.6,11.1).curveTo(-21.9,10.4,-21,9.7).curveTo(-15.3,6,-7.7,-3.2).curveTo(-3.5,-8.2,-0.1,-13.1).lineTo(0.1,-13.1).curveTo(3.5,-8.1,7.7,-3.2).curveTo(15.3,6,21,9.7).lineTo(22.6,11.1).curveTo(24,12.5,22.9,12.5).curveTo(17.4,13,12.4,13.1).lineTo(10.6,13.1).curveTo(2.3,13.1,-0,11.3).closePath();
	this.shape_676.setTransform(-2272,143.3);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.beginFill("#303030").beginStroke().moveTo(0.1,11.2).curveTo(-9.7,16.1,-31.1,16.2).curveTo(-37.7,16.2,-45.7,15.7).lineTo(-53.5,15.2).curveTo(-56.1,15.2,-52.8,13.5).lineTo(-49,11.8).curveTo(-35.8,7,-18,-4.4).curveTo(-8,-10.8,-0.2,-16.9).lineTo(0.2,-16.9).curveTo(8.1,-10.8,18,-4.4).curveTo(35.8,7,49,11.8).lineTo(52.8,13.5).curveTo(56.1,15.2,53.5,15.2).curveTo(41.7,16.6,30.6,16.9).lineTo(27.9,16.9).curveTo(8.3,16.9,0.1,11.2).closePath();
	this.shape_677.setTransform(-2272,214.9);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.beginFill("#303030").beginStroke().moveTo(-0,14.2).curveTo(-5.1,16.7,-24.3,16.4).lineTo(-45,15.6).curveTo(-47.2,15.6,-44.4,13.9).curveTo(-43,13.1,-41.2,12.2).curveTo(-30.1,7.5,-15.1,-4).curveTo(-6.5,-10.6,-0.2,-16.4).lineTo(0.1,-16.4).curveTo(6.9,-10.2,15.1,-4).curveTo(30.1,7.5,41.1,12.2).lineTo(44.4,13.9).curveTo(47.1,15.6,44.9,15.6).curveTo(34.1,16.3,24.3,16.4).lineTo(21,16.4).curveTo(4.6,16.4,-0,14.2).closePath();
	this.shape_678.setTransform(-2272,195.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.beginFill("#303030").beginStroke().moveTo(-0,11.3).curveTo(-4.3,13.2,-20.5,13).lineTo(-37.8,12.4).curveTo(-39.7,12.4,-37.4,11.1).lineTo(-34.6,9.7).curveTo(-25.3,5.9,-12.7,-3.2).curveTo(-6.2,-7.9,-0.1,-13.1).lineTo(0.1,-13.1).curveTo(6.3,-7.9,12.7,-3.2).curveTo(25.4,5.9,34.6,9.7).lineTo(37.3,11.1).curveTo(39.7,12.4,37.8,12.4).curveTo(28.7,12.9,20.5,13).lineTo(17.6,13.1).curveTo(3.9,13.1,-0,11.3).closePath();
	this.shape_679.setTransform(-2272,177.6);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.beginFill("#303030").beginStroke().moveTo(-0,11.3).curveTo(-3.2,13.3,-15.1,13.1).lineTo(-27.9,12.5).curveTo(-29.2,12.5,-27.5,11.1).curveTo(-26.7,10.4,-25.5,9.7).curveTo(-18.6,5.9,-9.4,-3.2).curveTo(-3.7,-8.7,-0.1,-13.1).lineTo(0.1,-13.1).curveTo(4.2,-8.3,9.4,-3.2).curveTo(18.6,6,25.5,9.7).lineTo(27.5,11.1).curveTo(29.3,12.5,27.9,12.5).curveTo(21.2,13,15.1,13.1).lineTo(12.9,13.1).curveTo(2.9,13.1,-0,11.3).closePath();
	this.shape_680.setTransform(-2272,160.4);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.beginFill("#303030").beginStroke().moveTo(-5.9,27.4).lineTo(-5.9,-27.4).lineTo(5.9,-27.4).lineTo(5.9,27.4).closePath();
	this.shape_681.setTransform(-2271.7,229.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.beginFill("#303030").beginStroke().moveTo(-3,1.9).curveTo(-4.6,0.7,-6.1,-1).lineTo(-7.2,-2.5).lineTo(-5.4,-3.1).curveTo(-3.2,-3.7,-1.1,-3.7).curveTo(5.4,-3.7,7.3,2.1).lineTo(7.2,2).curveTo(4.8,3.7,2.3,3.7).curveTo(-0.3,3.7,-3,1.9).closePath();
	this.shape_682.setTransform(-1807.9,111.6);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,0.7).curveTo(-4.6,-1,-5.4,-3.1).lineTo(-5.9,-5).lineTo(-3.9,-4.8).curveTo(-1.6,-4.5,0.3,-3.8).curveTo(6.3,-1.3,5.9,4.7).lineTo(5.8,4.7).curveTo(4.6,5,3.4,5).curveTo(-0.8,5,-3.5,0.7).closePath();
	this.shape_683.setTransform(-1808,99.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.beginFill("#303030").beginStroke().moveTo(-7.2,-1.8).lineTo(-7.3,-1.8).curveTo(-2.5,-5.6,2.8,-1.9).curveTo(5.5,-0.1,7.3,2.5).curveTo(4.5,3.7,1.2,3.8).lineTo(1,3.8).curveTo(-5.2,3.8,-7.2,-1.8).closePath();
	this.shape_684.setTransform(-1778.5,130.8);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.beginFill("#303030").beginStroke().moveTo(-2.5,-2.5).curveTo(-1.7,-4.3,-0.2,-6.1).lineTo(1.1,-7.5).lineTo(2,-5.8).curveTo(3,-3.8,3.3,-1.8).curveTo(4.5,4.5,-0.8,7.5).lineTo(-0.8,7.6).curveTo(-5.3,3.5,-2.5,-2.5).closePath();
	this.shape_685.setTransform(-1813.8,135.8);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.beginFill("#303030").beginStroke().moveTo(-2.2,-1.7).lineTo(0.4,-5.9).lineTo(2.4,-1.6).curveTo(3.7,3.3,-0.2,5.9).lineTo(-0.2,5.9).curveTo(-3.9,3,-2.2,-1.7).closePath();
	this.shape_686.setTransform(-1818.8,163.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.beginFill("#303030").beginStroke().moveTo(-1.2,2.7).lineTo(-5.8,1.1).lineTo(-2,-1.8).curveTo(2.4,-4.1,5.8,-0.9).lineTo(5.8,-0.9).curveTo(4.1,2.8,0.2,2.8).lineTo(-1.2,2.7).closePath();
	this.shape_687.setTransform(-1827.5,169.4);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.beginFill("#303030").beginStroke().moveTo(-1.6,3.5).curveTo(-3.6,3.2,-5.7,2.3).lineTo(-7.5,1.5).lineTo(-6.2,0.1).curveTo(-4.4,-1.4,-2.7,-2.3).curveTo(3,-5.3,7.4,-1.1).lineTo(7.5,-1.1).curveTo(5.3,3.6,0.2,3.6).lineTo(-1.6,3.5).closePath();
	this.shape_688.setTransform(-1825,143.7);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.beginFill("#303030").beginStroke().moveTo(-7.4,-1.2).lineTo(-7.5,-1.2).curveTo(-3.1,-5.4,2.6,-2.3).curveTo(5.5,-0.7,7.5,1.7).curveTo(4.8,3.1,1.6,3.5).lineTo(0.2,3.6).curveTo(-5.1,3.6,-7.4,-1.2).closePath();
	this.shape_689.setTransform(-1772.9,169.5);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.beginFill("#303030").beginStroke().moveTo(-3.8,-0.9).curveTo(-4,-3,-3.5,-5.2).lineTo(-3,-7.1).lineTo(-1.4,-6.1).curveTo(0.4,-4.6,1.6,-3.1).curveTo(5.7,2,2.4,7.1).lineTo(2.4,7.1).curveTo(-3.5,5.6,-3.8,-0.9).closePath();
	this.shape_690.setTransform(-1779.8,157.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.beginFill("#303030").beginStroke().moveTo(-3.5,-1.5).curveTo(-3.2,-3.6,-2.3,-5.8).lineTo(-1.5,-7.5).lineTo(-0.1,-6.1).curveTo(1.4,-4.5,2.3,-2.6).curveTo(5.3,3.1,1.1,7.5).lineTo(1.1,7.5).curveTo(-4.3,4.9,-3.5,-1.5).closePath();
	this.shape_691.setTransform(-1786.5,119.2);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.beginFill("#303030").beginStroke().moveTo(-3.1,0.7).lineTo(-5.3,-4.4).lineTo(-3.5,-4.3).curveTo(-1.6,-4,0.1,-3.4).curveTo(5.4,-1.4,5.2,4).lineTo(5.3,4).curveTo(4,4.4,2.9,4.4).curveTo(-0.6,4.4,-3.1,0.7).closePath();
	this.shape_692.setTransform(-1831.6,160.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.beginFill("#303030").beginStroke().moveTo(-3.6,0.6).curveTo(-4.5,-1.3,-5.1,-3.6).lineTo(-5.4,-5.5).lineTo(-3.5,-5.1).curveTo(-1.3,-4.6,0.5,-3.7).curveTo(6.2,-0.6,5.3,5.3).lineTo(5.3,5.4).lineTo(3.6,5.5).curveTo(-1.1,5.5,-3.6,0.6).closePath();
	this.shape_693.setTransform(-1826.4,132);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-3.5).curveTo(1.9,-5.3,5,-5.9).lineTo(4.8,-4).curveTo(4.6,-1.7,3.8,0.1).curveTo(1.5,6.2,-4.5,5.9).lineTo(-4.6,5.9).curveTo(-6.3,0.1,-0.8,-3.5).closePath();
	this.shape_694.setTransform(-1768.8,155);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.beginFill("#303030").beginStroke().moveTo(-0.8,-3.5).curveTo(1.9,-5.3,5,-5.9).lineTo(4.8,-4).curveTo(4.6,-1.7,3.8,0.1).curveTo(1.5,6.1,-4.6,5.9).lineTo(-4.6,5.9).curveTo(-6.3,0.1,-0.8,-3.5).closePath();
	this.shape_695.setTransform(-1775.7,115.9);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.beginFill("#303030").beginStroke().moveTo(-4.9,3.5).lineTo(-5,3.6).curveTo(-5.1,-1.4,-0,-3.1).curveTo(2.5,-4,5,-3.8).curveTo(4.4,-1.4,2.9,0.7).curveTo(0.5,3.9,-2.7,3.9).curveTo(-3.8,3.9,-4.9,3.5).closePath();
	this.shape_696.setTransform(-1796.5,116.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.beginFill("#303030").beginStroke().moveTo(-5.8,4.7).lineTo(-5.9,4.7).curveTo(-6.3,-1.3,-0.3,-3.8).curveTo(2.8,-5,5.9,-5).curveTo(5.3,-2,3.6,0.7).curveTo(0.8,5,-3.4,5).curveTo(-4.6,5,-5.8,4.7).closePath();
	this.shape_697.setTransform(-1795,102.1);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.beginFill("#303030").beginStroke().moveTo(-2.9,-2.1).curveTo(-2.3,-4,-1,-6).lineTo(0.1,-7.6).lineTo(1.2,-6).curveTo(2.4,-4.1,3,-2.1).curveTo(4.9,4,-0,7.6).lineTo(-0,7.6).curveTo(-5,4.1,-2.9,-2.1).closePath();
	this.shape_698.setTransform(-1801.4,89.5);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.beginFill("#303030").beginStroke().moveTo(-9.5,8.8).lineTo(8.9,-17.2).lineTo(9.5,-13.8).lineTo(-9.5,17.2).closePath();
	this.shape_699.setTransform(-1788.3,134.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.beginFill("#303030").beginStroke().moveTo(-13.7,-8).lineTo(-13.7,-10.2).lineTo(12.8,5.4).lineTo(13.7,10.2).closePath();
	this.shape_700.setTransform(-1814.6,172.6);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.beginFill("#303030").beginStroke().moveTo(-11.3,-10.7).lineTo(-10.5,-14.7).lineTo(11.3,7.1).lineTo(9.7,14.7).closePath();
	this.shape_701.setTransform(-1812.2,147.8);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.beginFill("#303030").beginStroke().moveTo(-13.4,7.3).curveTo(7.5,-11.9,9.2,-14.4).curveTo(10.3,-16,11.9,-15.7).curveTo(12.8,-15.5,13.4,-15).lineTo(-12.5,15.7).closePath();
	this.shape_702.setTransform(-1783.3,173.8);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.beginFill("#303030").beginStroke().moveTo(-7.5,82.2).lineTo(-5.8,-82.2).lineTo(-4.2,-77.3).lineTo(7.5,82.2).closePath();
	this.shape_703.setTransform(-1796.7,174.2);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,2).curveTo(-5,0.7,-6.7,-1.2).lineTo(-7.9,-2.8).lineTo(-5.9,-3.5).curveTo(-3.4,-4.1,-1.2,-4.1).curveTo(5.9,-4.1,7.9,2.2).lineTo(7.9,2.2).curveTo(5.3,4.1,2.5,4.1).curveTo(-0.3,4.1,-3.2,2).closePath();
	this.shape_704.setTransform(-1659.4,100.2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.9,0.8).curveTo(-5.1,-1.1,-5.9,-3.5).lineTo(-6.4,-5.5).lineTo(-4.3,-5.3).curveTo(-1.8,-5,0.3,-4.1).curveTo(6.9,-1.4,6.4,5.2).lineTo(6.3,5.1).curveTo(5,5.5,3.7,5.5).curveTo(-0.9,5.5,-3.9,0.8).closePath();
	this.shape_705.setTransform(-1659.4,86.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9.8,-2.5).lineTo(-9.9,-2.5).curveTo(-3.4,-7.6,3.9,-2.6).curveTo(7.5,-0.1,9.9,3.4).curveTo(6.1,5,1.7,5.1).lineTo(1.3,5.1).curveTo(-7.1,5.1,-9.8,-2.5).closePath();
	this.shape_706.setTransform(-1622.2,119.4);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.7,-2.1).curveTo(-4.3,-4.8,-3.1,-7.7).lineTo(-2,-10.1).lineTo(-0.2,-8.3).curveTo(1.9,-6,3.2,-3.6).curveTo(7.2,4.2,1.5,10.1).lineTo(1.5,10.1).curveTo(-5.9,6.6,-4.7,-2.1).closePath();
	this.shape_707.setTransform(-1632.9,103.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-4.7).curveTo(2.6,-7.1,6.7,-8).lineTo(6.6,-5.5).curveTo(6.2,-2.3,5.2,0.2).curveTo(2,8.3,-6.2,7.9).lineTo(-6.2,8).curveTo(-8.5,0.1,-1.1,-4.7).closePath();
	this.shape_708.setTransform(-1618.4,99.2);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.9,11.9).lineTo(12.1,-23.2).lineTo(12.9,-18.6).lineTo(-12.9,23.2).closePath();
	this.shape_709.setTransform(-1635.5,124.5);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-2.7).curveTo(-1.8,-4.7,-0.2,-6.7).lineTo(1.3,-8.2).lineTo(2.2,-6.4).curveTo(3.3,-4.1,3.7,-1.9).curveTo(5,5,-0.8,8.2).lineTo(-0.8,8.3).curveTo(-5.7,3.8,-2.7,-2.7).closePath();
	this.shape_710.setTransform(-1664.7,138.2);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,3.8).curveTo(-3.9,3.5,-6.3,2.5).lineTo(-8.2,1.6).lineTo(-6.7,0.1).curveTo(-4.9,-1.6,-2.9,-2.6).curveTo(3.4,-5.8,8.1,-1.2).lineTo(8.2,-1.2).curveTo(5.8,3.9,0.2,3.9).lineTo(-1.7,3.8).closePath();
	this.shape_711.setTransform(-1676.9,146.8);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4,0.6).curveTo(-5,-1.4,-5.5,-3.9).lineTo(-5.9,-6).lineTo(-3.8,-5.6).curveTo(-1.4,-5.1,0.5,-4).curveTo(6.8,-0.7,5.7,5.8).lineTo(5.8,5.8).curveTo(4.8,6,3.9,6).curveTo(-1.2,6,-4,0.6).closePath();
	this.shape_712.setTransform(-1678.4,134.1);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.4,-11.8).lineTo(-11.4,-16).lineTo(12.4,7.8).lineTo(10.6,16).closePath();
	this.shape_713.setTransform(-1662.9,151.3);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-1.7).lineTo(-0.2,-6.4).lineTo(2.4,-1.9).curveTo(4.3,3.2,0.2,6.4).lineTo(0.2,6.4).curveTo(-4.1,3.7,-2.6,-1.7).closePath();
	this.shape_714.setTransform(-1672.6,106.4);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,3.1).lineTo(-6.3,1.8).lineTo(-2.4,-1.7).curveTo(2.2,-4.6,6.2,-1.4).lineTo(6.3,-1.4).curveTo(4.6,3.1,-0.4,3.1).lineTo(-1.1,3.1).closePath();
	this.shape_715.setTransform(-1681.6,113.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,1).curveTo(-4.5,-0.6,-5.4,-2.6).lineTo(-6.1,-4.4).lineTo(-4.3,-4.4).curveTo(-2.1,-4.3,-0.1,-3.8).curveTo(5.8,-2.1,6.1,3.7).lineTo(6.1,3.8).curveTo(4.5,4.4,3,4.4).curveTo(-0.5,4.4,-3.3,1).closePath();
	this.shape_716.setTransform(-1686.9,104.6);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15.6,-7.5).lineTo(-15.9,-9.9).lineTo(14.5,4.7).lineTo(15.9,9.8).closePath();
	this.shape_717.setTransform(-1667.2,116.2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.4,-1.9).lineTo(0.4,-6.5).lineTo(2.6,-1.8).curveTo(4,3.6,-0.3,6.4).lineTo(-0.3,6.4).curveTo(-4.3,3.3,-2.4,-1.9).closePath();
	this.shape_718.setTransform(-1669.4,168.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.4,2.9).lineTo(-6.4,1.2).lineTo(-2.3,-2).curveTo(2.6,-4.5,6.4,-0.9).lineTo(6.4,-1).curveTo(4.5,3,0.2,3).lineTo(-1.4,2.9).closePath();
	this.shape_719.setTransform(-1679,174.9);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.4,0.8).curveTo(-4.5,-0.8,-5.2,-3).lineTo(-5.8,-4.8).lineTo(-3.9,-4.7).curveTo(-1.7,-4.4,0.1,-3.7).curveTo(5.9,-1.5,5.7,4.4).lineTo(5.8,4.4).curveTo(4.4,4.8,3.2,4.8).curveTo(-0.7,4.8,-3.4,0.8).closePath();
	this.shape_720.setTransform(-1683.5,165.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15,-8.8).lineTo(-15,-11.2).lineTo(14.1,5.9).lineTo(15,11.2).closePath();
	this.shape_721.setTransform(-1664.9,178.4);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.4,-1.3).lineTo(-6.5,-1.4).curveTo(-2.4,-4.8,2.4,-1.8).curveTo(4.9,-0.3,6.5,1.9).curveTo(4.1,3,1.2,3.2).lineTo(0.5,3.2).curveTo(-4.5,3.2,-6.4,-1.3).closePath();
	this.shape_722.setTransform(-1625.7,182);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,-0.9).lineTo(-2.3,-6.3).lineTo(1.6,-2.6).curveTo(4.9,2,1.8,6.3).lineTo(1.8,6.4).curveTo(-3.3,4.8,-3.3,-0.9).closePath();
	this.shape_723.setTransform(-1631.3,171.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.6,-3.1).curveTo(1.9,-4.6,4.6,-5).curveTo(4.5,-2.3,3.3,0.3).curveTo(1,5.4,-4.3,4.9).lineTo(-4.4,5).curveTo(-5.6,-0.2,-0.6,-3.1).closePath();
	this.shape_724.setTransform(-1621.5,169.6);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.3,5.9).curveTo(6.9,-10.1,8.5,-12.2).curveTo(9.5,-13.5,11,-13.1).curveTo(11.7,-12.9,12.2,-12.5).lineTo(-11.9,13.2).closePath();
	this.shape_725.setTransform(-1634.9,185.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.3,4.1).curveTo(-6.8,1.3,-6.2,-5.3).lineTo(-6.3,-5.4).curveTo(0.2,-6.9,3.8,-0.8).curveTo(5.7,2.3,6.3,5.7).curveTo(2.9,5.6,-0.3,4.1).closePath();
	this.shape_726.setTransform(-1620,149.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-2.8).curveTo(-1.6,-4.8,0.1,-6.7).lineTo(1.6,-8.2).lineTo(2.5,-6.3).curveTo(3.5,-4,3.8,-1.8).curveTo(4.8,5.2,-1.1,8.2).lineTo(-1.1,8.2).curveTo(-5.8,3.6,-2.6,-2.8).closePath();
	this.shape_727.setTransform(-1620.4,134);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.7,2.6).lineTo(-7.8,2.6).curveTo(-6.1,-3.8,1,-4.2).curveTo(4.6,-4.4,7.8,-3.3).curveTo(6.1,-0.4,3.4,1.8).curveTo(0.3,4.2,-2.7,4.2).curveTo(-5.2,4.2,-7.7,2.6).closePath();
	this.shape_728.setTransform(-1607.9,138.4);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.9,0).curveTo(13.5,-6.5,16.5,-8).curveTo(18.3,-8.9,19.7,-7.6).curveTo(20.5,-7,20.7,-6.2).lineTo(-20.8,8.4).closePath();
	this.shape_729.setTransform(-1631.9,147);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.4,3.8).lineTo(-5.5,3.9).curveTo(-5.6,-1.5,-0.1,-3.4).curveTo(2.7,-4.3,5.5,-4.2).curveTo(4.8,-1.5,3.1,0.8).curveTo(0.6,4.2,-2.9,4.2).curveTo(-4.1,4.2,-5.4,3.8).closePath();
	this.shape_730.setTransform(-1646.8,105.3);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.3,5.1).lineTo(-6.4,5.1).curveTo(-6.9,-1.5,-0.3,-4.1).curveTo(3,-5.5,6.4,-5.5).curveTo(5.8,-2.2,3.9,0.8).curveTo(0.9,5.5,-3.7,5.5).curveTo(-5,5.5,-6.3,5.1).closePath();
	this.shape_731.setTransform(-1645.3,89.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,-2.3).curveTo(-2.5,-4.4,-1.1,-6.6).lineTo(0.1,-8.3).lineTo(1.3,-6.6).curveTo(2.6,-4.5,3.3,-2.4).curveTo(5.3,4.4,-0,8.2).lineTo(-0,8.3).curveTo(-5.4,4.5,-3.2,-2.3).closePath();
	this.shape_732.setTransform(-1652.2,76);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.2,88.9).lineTo(-6.4,-88.9).lineTo(-4.6,-83.5).lineTo(8.2,88.9).closePath();
	this.shape_733.setTransform(-1647.1,167.6);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_734.setTransform(-1650,138.6);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.8,12.8).curveTo(-18.1,7.5,-18.1,0).curveTo(-18.1,-7.5,-12.8,-12.8).curveTo(-7.5,-18.1,0,-18.1).curveTo(7.5,-18.1,12.8,-12.8).curveTo(18.1,-7.5,18.1,0).curveTo(18.1,7.5,12.8,12.8).curveTo(7.5,18.1,0,18.1).curveTo(-7.5,18.1,-12.8,12.8).closePath();
	this.shape_735.setTransform(-1625.8,72.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,20.2).curveTo(-27.7,11.8,-27.7,-0).curveTo(-27.7,-11.8,-19.6,-20.2).curveTo(-11.5,-28.6,-0,-28.6).curveTo(11.5,-28.6,19.6,-20.2).curveTo(27.7,-11.8,27.7,-0).curveTo(27.7,11.8,19.6,20.2).curveTo(11.5,28.6,-0,28.6).curveTo(-11.5,28.6,-19.6,20.2).closePath();
	this.shape_736.setTransform(-1625.8,97.6);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.4,27.8,0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_737.setTransform(-1605.9,118.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_738.setTransform(-1602.2,152);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,-0).curveTo(-17.1,-7,-12.1,-12.1).curveTo(-7.1,-17.1,-0,-17).curveTo(7.1,-17.1,12.1,-12.1).curveTo(17.1,-7,17.1,-0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17.1,-0,17).curveTo(-7.1,17.1,-12.1,12.1).closePath();
	this.shape_739.setTransform(-1698.2,128.4);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,0).curveTo(-17.1,-7.1,-12.1,-12).curveTo(-7.1,-17.1,-0,-17.1).curveTo(7.1,-17.1,12.1,-12).curveTo(17.1,-7.1,17.1,0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17,-0,17).curveTo(-7.1,17,-12.1,12.1).closePath();
	this.shape_740.setTransform(-1677.8,75.6);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,16.7).curveTo(-10.1,15.5,-14.1,9.6).curveTo(-18.1,3.8,-16.8,-3.2).curveTo(-15.5,-10.1,-9.7,-14.1).curveTo(-3.9,-18.1,3.1,-16.8).curveTo(10,-15.5,14.1,-9.7).curveTo(18.1,-3.8,16.8,3.1).curveTo(15.5,10.1,9.6,14).curveTo(5.2,17.1,0.2,17.1).curveTo(-1.4,17.1,-3.1,16.7).closePath();
	this.shape_741.setTransform(-1628.7,160.1);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_742.setTransform(-1619.3,167.3);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.7,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.7,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,-0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.7,19.6).closePath();
	this.shape_743.setTransform(-1646.7,178.1);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.4,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.4,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_744.setTransform(-1674.4,169.9);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.7,11.5,-27.7,-0).curveTo(-27.7,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,-0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_745.setTransform(-1697,154.3);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.6,27.3).curveTo(-15.9,25.5,-22.6,16.1).curveTo(-29.2,6.8,-27.4,-4.6).curveTo(-25.5,-15.9,-16.1,-22.6).curveTo(-6.8,-29.2,4.6,-27.3).curveTo(15.9,-25.4,22.6,-16.1).curveTo(29.3,-6.7,27.4,4.6).curveTo(25.5,15.9,16.1,22.6).curveTo(8.8,27.7,0.4,27.7).curveTo(-2.1,27.7,-4.6,27.3).closePath();
	this.shape_746.setTransform(-1653.6,95.9);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.6,27.3).curveTo(-15.9,25.4,-22.6,16.1).curveTo(-29.3,6.8,-27.4,-4.6).curveTo(-25.5,-15.9,-16.2,-22.6).curveTo(-6.8,-29.2,4.5,-27.4).curveTo(15.9,-25.5,22.6,-16.1).curveTo(29.3,-6.8,27.4,4.5).curveTo(25.5,15.9,16.1,22.5).curveTo(8.9,27.8,0.4,27.8).curveTo(-2.1,27.8,-4.6,27.3).closePath();
	this.shape_747.setTransform(-1680.7,107.3);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.4,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_748.setTransform(-1652.7,59.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,-2.5).curveTo(-0.1,-4.9,2.2,-6.5).lineTo(2.8,-4.9).curveTo(3.3,-2.9,3.3,-1.1).curveTo(3.4,4.6,-1.7,6.4).lineTo(-1.7,6.5).curveTo(-5,2.2,-1.7,-2.5).closePath();
	this.shape_749.setTransform(-2200.8,90.3);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.4,1).curveTo(-4.6,-0.6,-5.6,-2.7).lineTo(-6.3,-4.5).lineTo(-4.4,-4.6).curveTo(-2.1,-4.5,-0.2,-3.9).curveTo(6,-2.1,6.2,3.9).lineTo(6.3,3.9).curveTo(4.6,4.6,3,4.6).curveTo(-0.5,4.6,-3.4,1).closePath();
	this.shape_750.setTransform(-2211.6,87.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,-2.1).curveTo(-2.3,-4,-1.1,-6).lineTo(0,-7.6).lineTo(1.1,-6).curveTo(2.3,-4.1,2.9,-2.2).curveTo(4.9,3.9,-0,7.5).lineTo(-0,7.6).curveTo(-4.9,4.1,-2.9,-2.1).closePath();
	this.shape_751.setTransform(-2206.6,75);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,3.4).lineTo(-3.3,3.4).curveTo(-4,-0.4,-0.4,-2.3).curveTo(1.5,-3.3,3.4,-3.5).curveTo(3.3,-1.5,2.4,0.3).curveTo(0.8,3.5,-2.3,3.5).lineTo(-3.2,3.4).closePath();
	this.shape_752.setTransform(-2165.6,160.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,3.4).lineTo(-3.3,3.4).curveTo(-4,-0.3,-0.4,-2.3).curveTo(1.5,-3.2,3.4,-3.5).curveTo(3.3,-1.5,2.4,0.3).curveTo(0.8,3.5,-2.4,3.5).lineTo(-3.2,3.4).closePath();
	this.shape_753.setTransform(-2167.5,151);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,3.4).lineTo(-3.3,3.4).curveTo(-4,-0.4,-0.4,-2.3).curveTo(1.5,-3.3,3.4,-3.5).curveTo(3.3,-1.5,2.4,0.3).curveTo(0.7,3.5,-2.3,3.5).lineTo(-3.2,3.4).closePath();
	this.shape_754.setTransform(-2170.3,144.1);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,0.6).lineTo(-3.9,-3).lineTo(-0.1,-2.5).curveTo(3.8,-1.2,3.8,2.6).lineTo(3.9,2.7).curveTo(2.9,3,2,3).curveTo(-0.4,3,-2.1,0.6).closePath();
	this.shape_755.setTransform(-2176.5,150.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.2,0.6).lineTo(-3.9,-3).lineTo(-0,-2.5).curveTo(3.8,-1.2,3.9,2.6).curveTo(2.9,3,2,3).curveTo(-0.4,3,-2.2,0.6).closePath();
	this.shape_756.setTransform(-2178.5,142.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.6,1.5).lineTo(-4.7,-0.9).lineTo(-1.1,-2.2).curveTo(3,-2.7,4.7,0.6).lineTo(4.7,0.7).curveTo(3.1,2.3,1.2,2.3).curveTo(-0.1,2.3,-1.6,1.5).closePath();
	this.shape_757.setTransform(-2174.9,159.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-2).curveTo(-2,-3.7,-0.9,-5.5).lineTo(0.1,-6.9).lineTo(1.1,-5.5).curveTo(2.2,-3.7,2.7,-2).curveTo(4.4,3.6,-0.1,6.8).lineTo(-0.1,6.9).curveTo(-4.5,3.7,-2.6,-2).closePath();
	this.shape_758.setTransform(-2174,132);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.beginFill("#6D6C6C").beginStroke().moveTo(3.9,19.3).curveTo(3.1,18.9,1.9,16.4).lineTo(0.5,13.2).curveTo(-2.5,7.1,-3.5,2).curveTo(-3.8,0.5,-5.1,-3.3).curveTo(-6.2,-6.7,-6.4,-8.7).curveTo(-6.8,-11.2,-6.6,-14.4).curveTo(-6.4,-18.6,-5.2,-19.4).curveTo(-5.3,-17.7,-5,-15.3).lineTo(-4.4,-11.4).curveTo(-4.1,-8.5,-2.1,-3).curveTo(-0.9,0.4,1,7.2).curveTo(2.9,12.6,6.6,15.6).curveTo(6.9,16.6,6.1,17.9).curveTo(5.3,19.4,4.4,19.4).lineTo(3.9,19.3).closePath();
	this.shape_759.setTransform(-2168.5,154.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-1.4).lineTo(-1,-6).lineTo(1.9,-2.1).curveTo(4.2,2.6,0.7,5.9).lineTo(0.7,6).curveTo(-3.6,3.8,-2.7,-1.4).closePath();
	this.shape_760.setTransform(-2154.9,92.2);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-1.4).lineTo(-0.9,-6).lineTo(2,-2).curveTo(4.2,2.6,0.7,6).lineTo(0.7,6).curveTo(-3.6,3.8,-2.7,-1.4).closePath();
	this.shape_761.setTransform(-2165.5,87);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.7,-1.3).lineTo(-0.9,-6).lineTo(2,-2).curveTo(4.2,2.6,0.7,6).lineTo(0.7,6).curveTo(-3.6,3.8,-2.7,-1.3).closePath();
	this.shape_762.setTransform(-2174.6,84.4);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.9,2.9).lineTo(-5.8,1.9).lineTo(-2.3,-1.6).curveTo(2,-4.4,5.7,-1.5).lineTo(5.8,-1.5).curveTo(4.3,3,-0.7,3).lineTo(-0.9,2.9).closePath();
	this.shape_763.setTransform(-2173,95.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.9,2.9).lineTo(-5.8,1.9).lineTo(-2.3,-1.5).curveTo(2,-4.4,5.8,-1.5).lineTo(5.8,-1.5).curveTo(4.3,2.9,-0.6,2.9).lineTo(-0.9,2.9).closePath();
	this.shape_764.setTransform(-2182.7,91);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,-0.4).curveTo(-0.3,-4.9,4.4,-4).lineTo(4.4,-4).curveTo(5.1,0.8,0.4,2.9).lineTo(-4.5,4.2).closePath();
	this.shape_765.setTransform(-2163,100.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4,0.9).curveTo(-5.3,-1,-6.1,-3.5).lineTo(-6.8,-5.7).lineTo(-4.7,-5.5).curveTo(-2.1,-5.2,0.2,-4.4).curveTo(7,-1.7,6.7,5.2).lineTo(6.8,5.2).curveTo(5.2,5.7,3.8,5.7).curveTo(-0.8,5.7,-4,0.9).closePath();
	this.shape_766.setTransform(-2189.5,79);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.beginFill("#6D6C6C").beginStroke().moveTo(18,10.1).lineTo(13.6,9.1).curveTo(5.6,7.4,-0.5,4.4).curveTo(-2.4,3.4,-7.1,1.8).curveTo(-11.3,0.3,-13.5,-1).curveTo(-16.4,-2.7,-19.3,-5.3).curveTo(-23.3,-8.8,-23.1,-10.6).curveTo(-21.5,-9.1,-18.9,-7.6).lineTo(-14.6,-5.1).curveTo(-12.5,-3.8,-9.7,-2.7).lineTo(-4.5,-1).curveTo(-0.2,0.4,8,3.9).curveTo(15,6.2,20.7,4.8).curveTo(22,5.3,22.7,7.1).curveTo(23.7,9.5,22.3,10.3).curveTo(21.9,10.6,21.1,10.6).curveTo(19.9,10.6,18,10.1).closePath();
	this.shape_767.setTransform(-2162.8,91.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.5,-0.3).lineTo(-3.6,-5.8).lineTo(-2.1,-5.1).curveTo(-0.4,-4.1,0.9,-2.9).curveTo(5,1,2.8,5.8).lineTo(2.9,5.9).curveTo(-2.4,5.3,-3.5,-0.3).closePath();
	this.shape_768.setTransform(-2124.7,77.8);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.6,0.7).lineTo(-6.7,0.7).curveTo(-4.1,-4,1.5,-2.9).curveTo(4.3,-2.3,6.6,-0.8).curveTo(4.8,1.1,2.2,2.3).curveTo(0.3,3.1,-1.4,3.1).curveTo(-4.3,3.1,-6.6,0.7).closePath();
	this.shape_769.setTransform(-2118.4,88.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.8,4.5).lineTo(-4.8,4.5).curveTo(-5.5,-0.8,-0.4,-3.2).curveTo(2.2,-4.4,4.9,-4.6).curveTo(4.6,-2,3.2,0.5).curveTo(0.9,4.6,-3.2,4.6).lineTo(-4.8,4.5).closePath();
	this.shape_770.setTransform(-2114.7,73.5);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,-2.2).lineTo(1.3,-6.6).lineTo(2,-5.1).curveTo(2.8,-3.2,3,-1.5).curveTo(3.8,4.1,-0.9,6.5).lineTo(-0.9,6.6).curveTo(-4.7,2.9,-2.1,-2.2).closePath();
	this.shape_771.setTransform(-2117.2,59.9);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.7,19).lineTo(-9.4,18.8).curveTo(-5,14,-1.5,8.9).curveTo(2.6,2.9,4.5,-2.1).curveTo(6.1,-6.1,7.2,-11.7).lineTo(8.9,-21.3).curveTo(10,-15.8,8.8,-8.2).curveTo(7.5,-1,4.8,4.3).curveTo(3.8,6.1,1.6,9.4).curveTo(-0.8,12.9,-1.7,14.7).curveTo(-2.9,16.8,-6.3,19.8).curveTo(-7.9,21.3,-8.5,21.3).curveTo(-9.4,21.3,-8.7,19).closePath();
	this.shape_772.setTransform(-2127.1,84.5);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-2.1).lineTo(0.7,-6.7).lineTo(2.8,-1.7).curveTo(4.1,3.8,-0.4,6.6).lineTo(-0.4,6.7).curveTo(-4.5,3.2,-2.3,-2.1).closePath();
	this.shape_773.setTransform(-2108,161.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.5,3.5).curveTo(-5,2.5,-5.9,-2.7).lineTo(-5.9,-2.7).curveTo(-1.2,-5.2,2.8,-1.2).curveTo(4.9,0.9,5.9,3.4).curveTo(4.5,3.7,3,3.7).curveTo(1.8,3.7,0.5,3.5).closePath();
	this.shape_774.setTransform(-2108.1,173.6);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.5,1).lineTo(-6.6,1).curveTo(-4.3,-3.8,1.4,-3).curveTo(4.2,-2.6,6.6,-1.2).curveTo(4.8,0.8,2.3,2.1).curveTo(0.2,3.1,-1.6,3.1).curveTo(-4.3,3.1,-6.5,1).closePath();
	this.shape_775.setTransform(-2096.8,164);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.4,4.8).lineTo(-4.5,4.9).curveTo(-5.6,-0.3,-0.6,-3.1).curveTo(1.9,-4.5,4.6,-4.9).curveTo(4.5,-2.2,3.3,0.4).curveTo(1.1,4.9,-3.2,4.9).lineTo(-4.4,4.8).closePath();
	this.shape_776.setTransform(-2091.3,151.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-17.8,10.8).lineTo(-18.3,10.2).curveTo(-12,8.7,-6.2,6.4).curveTo(0.4,3.7,4.8,0.6).curveTo(8.4,-1.9,12.4,-5.9).lineTo(19.1,-12.9).curveTo(17.1,-7.7,11.8,-2.1).curveTo(6.8,3.1,1.5,6).curveTo(-0.3,7,-4,8.6).curveTo(-7.9,10.1,-9.6,11.1).curveTo(-11.7,12.2,-16.3,12.8).lineTo(-17.9,12.9).curveTo(-20.5,12.9,-17.8,10.8).closePath();
	this.shape_777.setTransform(-2113.3,166.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.2,2.7).lineTo(-2.7,-1.4).curveTo(1.7,-4.9,6.2,-2.1).lineTo(6.2,-2.1).curveTo(4.9,3.1,-0.8,3.4).closePath();
	this.shape_778.setTransform(-2158.8,127);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.5,-1.9).lineTo(0.3,-6.7).lineTo(2.7,-1.8).curveTo(4.2,3.6,-0.2,6.6).lineTo(-0.2,6.7).curveTo(-4.4,3.5,-2.5,-1.9).closePath();
	this.shape_779.setTransform(-2147.7,122.2);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.4,-0).lineTo(-4,-5.5).lineTo(0.8,-3).curveTo(5.2,0.4,3.5,5.4).lineTo(3.6,5.5).curveTo(-1.7,5.4,-3.4,-0).closePath();
	this.shape_780.setTransform(-2161.3,116.3);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,1.6).lineTo(-6.3,-2.3).lineTo(-1,-3.3).curveTo(4.6,-3.3,6.3,1.7).lineTo(6.3,1.7).curveTo(4.3,3.3,2.1,3.3).curveTo(-0.2,3.3,-2.6,1.6).closePath();
	this.shape_781.setTransform(-2175.3,117);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.beginFill("#6D6C6C").beginStroke().moveTo(8.6,2.7).curveTo(3.3,-2.2,-1.4,-4.8).curveTo(-5.2,-7,-10.6,-8.8).lineTo(-19.8,-11.9).curveTo(-14.1,-12.3,-6.9,-9.9).curveTo(0.1,-7.7,4.9,-4.2).curveTo(6.6,-3,9.6,-0.3).curveTo(12.7,2.6,14.3,3.7).curveTo(16.2,5.2,18.7,9).curveTo(21.4,13.1,17.6,11.3).lineTo(17.2,11.9).curveTo(13.1,6.9,8.6,2.7).closePath();
	this.shape_782.setTransform(-2152.4,130.4);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,0.6).lineTo(-4.9,-4.6).lineTo(0.3,-3.3).curveTo(5.4,-0.9,4.8,4.4).lineTo(4.9,4.4).curveTo(3.9,4.6,3,4.6).curveTo(-0.8,4.6,-3.2,0.6).closePath();
	this.shape_783.setTransform(-2142.5,53.6);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6,2.5).lineTo(-6.1,2.5).curveTo(-5.1,-2.7,0.5,-3.4).curveTo(3.4,-3.8,6.1,-3.1).curveTo(4.9,-0.7,2.8,1.2).curveTo(0.3,3.5,-2.4,3.5).curveTo(-4.1,3.5,-6,2.5).closePath();
	this.shape_784.setTransform(-2133.1,61.4);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-2.8).curveTo(1,-4.9,3.5,-5.8).lineTo(3.7,-4.2).curveTo(3.8,-2.2,3.5,-0.4).curveTo(2.4,5.1,-2.9,5.8).lineTo(-2.9,5.9).curveTo(-5.2,1.1,-1.1,-2.8).closePath();
	this.shape_785.setTransform(-2134.3,46.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3,-1.4).lineTo(-1.2,-6.6).lineTo(2.1,-2.3).curveTo(4.6,2.7,0.9,6.6).lineTo(0.9,6.6).curveTo(-3.9,4.3,-3,-1.4).closePath();
	this.shape_786.setTransform(-2140.4,34);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.9,20.8).lineTo(-4.7,20.8).curveTo(-2,14.9,-0.3,9).curveTo(1.7,2,2,-3.3).curveTo(2.2,-7.7,1.5,-13.3).lineTo(0.1,-22.9).curveTo(3,-18.1,4.1,-10.5).curveTo(5.2,-3.3,4.3,2.6).curveTo(3.9,4.6,2.8,8.5).curveTo(1.7,12.5,1.4,14.5).curveTo(1,16.9,-1.4,20.8).curveTo(-2.6,22.9,-3.3,22.9).curveTo(-3.9,22.9,-3.9,20.8).closePath();
	this.shape_787.setTransform(-2140.8,60.5);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,0.6).lineTo(-4,-2.8).lineTo(-0.1,-2.5).curveTo(3.7,-1.5,4,2.3).lineTo(4,2.3).curveTo(2.9,2.8,1.9,2.8).curveTo(-0.3,2.8,-2.1,0.6).closePath();
	this.shape_788.setTransform(-2193.9,145.9);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,3.7).curveTo(-3.9,0,-0.5,-2.2).curveTo(1.2,-3.3,3.1,-3.7).lineTo(2.4,0.1).curveTo(1,3.7,-2.6,3.7).lineTo(-2.9,3.7).closePath();
	this.shape_789.setTransform(-2186.2,147.5);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.1,-1).lineTo(-0.8,-4.7).lineTo(1.5,-1.6).curveTo(3.3,2,0.6,4.6).lineTo(0.6,4.7).curveTo(-2.8,3,-2.1,-1).closePath();
	this.shape_790.setTransform(-2190.2,139.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.3,12.2).lineTo(0.1,11).lineTo(-0.6,10.7).curveTo(-0.9,8.4,-0.8,3.5).curveTo(-0.7,-1.3,-1,-3.7).curveTo(-1.2,-5.4,-1.1,-10.2).curveTo(-1,-15.1,-0.4,-11.7).lineTo(-0.2,-9.1).curveTo(-0.2,-7.2,-0,-6.7).curveTo(0.3,-5.3,0.5,-2.8).lineTo(0.6,1.1).curveTo(0.7,3,1,6.6).curveTo(1.3,10,0.9,13.1).curveTo(0.4,12.7,0.3,12.2).closePath();
	this.shape_791.setTransform(-2189,154);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2,-2.2).lineTo(1.4,-6.6).lineTo(3.1,-1.4).curveTo(3.8,4.2,-1,6.5).lineTo(-1,6.6).curveTo(-4.7,2.7,-2,-2.2).closePath();
	this.shape_792.setTransform(-2061.5,114.3);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.3,-1.6).lineTo(-6.4,-1.6).curveTo(-2.2,-5,2.5,-1.6).curveTo(4.9,-0.1,6.4,2.2).curveTo(3.9,3.3,1.1,3.3).lineTo(1,3.3).curveTo(-4.5,3.3,-6.3,-1.6).closePath();
	this.shape_793.setTransform(-2059.6,125.2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.7,3.1).lineTo(-5.8,3.2).curveTo(-5.3,-2.1,0.2,-3.4).curveTo(3,-4.1,5.7,-3.7).curveTo(4.9,-1.1,2.9,1).curveTo(0.4,3.8,-2.6,3.8).curveTo(-4.1,3.8,-5.7,3.1).closePath();
	this.shape_794.setTransform(-2050.7,115.8);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15.8,6.8).lineTo(-14.3,5.9).lineTo(-14.3,4.8).curveTo(-11.4,3.2,-5,0.8).curveTo(1.3,-1.7,4.2,-3.3).curveTo(21.2,-10.7,14.9,-6.7).curveTo(14.3,-6.3,11.7,-5.1).curveTo(9.2,-4.1,8.6,-3.6).curveTo(7,-2.4,3.8,-0.9).lineTo(-1.2,1.4).lineTo(-8,4.8).curveTo(-12.3,6.9,-16.6,8.1).curveTo(-16.4,7.2,-15.8,6.8).closePath();
	this.shape_795.setTransform(-2069.5,125.1);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.1,2.3).lineTo(-6.1,2.4).curveTo(-5,-2.8,0.7,-3.4).curveTo(3.5,-3.7,6.1,-2.9).curveTo(4.9,-0.5,2.8,1.3).curveTo(0.3,3.5,-2.3,3.5).curveTo(-4.2,3.5,-6.1,2.3).closePath();
	this.shape_796.setTransform(-2071.9,120);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,-1.1).lineTo(-1.8,-6.5).lineTo(1.8,-2.5).curveTo(4.8,2.3,1.4,6.4).lineTo(1.4,6.5).curveTo(-3.5,4.6,-3.2,-1.1).closePath();
	this.shape_797.setTransform(-2078.4,110.8);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.5,1.3).lineTo(-5.6,-2.6).lineTo(-0.7,-3.1).curveTo(4.4,-2.7,5.6,2).lineTo(5.6,2).curveTo(3.8,3.1,2.1,3.1).curveTo(-0.2,3.1,-2.5,1.3).closePath();
	this.shape_798.setTransform(-2192.9,169.9);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,0.2).curveTo(-1.9,-4.7,2.9,-5.1).lineTo(3,-5.1).curveTo(4.9,-0.7,0.9,2.7).lineTo(-3.5,5.1).curveTo(-3.8,2.7,-3.2,0.2).closePath();
	this.shape_799.setTransform(-2193.4,179.2);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1,2.9).lineTo(-5.9,1.8).lineTo(-2.3,-1.6).curveTo(2,-4.4,5.8,-1.4).lineTo(5.9,-1.4).curveTo(4.3,2.9,-0.4,2.9).lineTo(-1,2.9).closePath();
	this.shape_800.setTransform(-2204.8,178.7);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.5,-0.1).curveTo(-1.2,-2.3,5,-3.9).curveTo(14.7,-6.4,15,-3.3).curveTo(14.9,-3.3,14.8,-3.3).curveTo(14.8,-3.3,14.8,-3.2).curveTo(14.8,-3.2,14.8,-3.2).curveTo(14.9,-3.1,15,-3.1).lineTo(15.3,-2.9).lineTo(14.8,-2.2).lineTo(6.5,-1.9).curveTo(2.2,-1.6,-1.6,-0.2).curveTo(-9.4,2.7,-15.3,5).curveTo(-11.6,2.1,-6.5,-0.1).closePath();
	this.shape_801.setTransform(-2186.9,173.6);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,0.8).lineTo(-5.3,-3.4).lineTo(-0.3,-3.3).curveTo(4.7,-2.2,5.2,2.6).lineTo(5.2,2.7).curveTo(3.8,3.4,2.4,3.4).curveTo(-0.3,3.4,-2.6,0.8).closePath();
	this.shape_802.setTransform(-2216.4,157.4);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3,-0.1).curveTo(-1.1,-4.9,3.8,-4.6).curveTo(5,0,0.6,2.8).lineTo(-4,4.7).curveTo(-4,2.2,-3,-0.1).closePath();
	this.shape_803.setTransform(-2218.4,166.4);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.3,2.7).lineTo(-6,0.9).lineTo(-2,-2).curveTo(2.6,-4.2,6,-0.7).lineTo(6,-0.7).curveTo(4.2,2.8,0.4,2.8).curveTo(-0.4,2.8,-1.3,2.7).closePath();
	this.shape_804.setTransform(-2229.4,164.6);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.3,-0.7).curveTo(-0.6,-2.2,5.6,-2.9).curveTo(15.5,-4,15.4,-0.9).curveTo(15,-1,15.4,-0.7).lineTo(15.7,-0.5).lineTo(15.1,0.1).lineTo(6.9,-0.8).curveTo(2.6,-1,-1.4,-0.1).lineTo(-15.7,3.2).curveTo(-11.7,0.8,-6.3,-0.7).closePath();
	this.shape_805.setTransform(-2211.1,161.5);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.8,0.5).lineTo(-4.5,-4.2).lineTo(0.3,-3).curveTo(5,-0.8,4.4,4).lineTo(4.5,4).curveTo(3.6,4.2,2.8,4.2).curveTo(-0.8,4.2,-2.8,0.5).closePath();
	this.shape_806.setTransform(-2224.6,143.5);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.8,-0.7).curveTo(0.2,-4.9,4.8,-3.5).lineTo(4.8,-3.6).curveTo(5,1.3,0.1,3).lineTo(-4.8,3.8).closePath();
	this.shape_807.setTransform(-2228.7,151.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.9,2.1).lineTo(-6.1,-0.7).lineTo(-1.5,-2.6).curveTo(3.5,-3.7,6,0.4).lineTo(6.1,0.4).curveTo(4,2.8,1.3,2.8).curveTo(-0.2,2.8,-1.9,2.1).closePath();
	this.shape_808.setTransform(-2239,148.1);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.beginFill("#6D6C6C").beginStroke().moveTo(7.1,0.1).curveTo(3,-1.1,-1.1,-1.1).lineTo(-15.7,-1).curveTo(-11.4,-2.5,-5.7,-2.7).curveTo(-0.3,-3,6.4,-2.2).curveTo(16.3,-1.2,15.5,1.8).curveTo(15.2,1.7,15.5,2).curveTo(15.6,2,15.6,2.1).curveTo(15.7,2.2,15.7,2.2).curveTo(15.7,2.2,15.7,2.2).curveTo(15.7,2.3,15.7,2.3).lineTo(14.9,2.8).lineTo(7.1,0.1).closePath();
	this.shape_809.setTransform(-2220.7,149.6);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.1,3.4).curveTo(-5.3,1.8,-5.5,-3.5).lineTo(-5.5,-3.5).curveTo(-0.5,-5.4,3,-0.9).curveTo(4.8,1.4,5.5,4).lineTo(4.3,4.1).curveTo(2.2,4.1,0.1,3.4).closePath();
	this.shape_810.setTransform(-2080.8,154.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.5,4.7).lineTo(-4.6,4.8).curveTo(-5.6,-0.4,-0.5,-3.2).curveTo(2,-4.5,4.7,-4.8).curveTo(4.5,-2.1,3.3,0.4).curveTo(1,4.8,-3.3,4.8).lineTo(-4.5,4.7).closePath();
	this.shape_811.setTransform(-2077.8,144.4);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.6,0.3).lineTo(-6.7,0.3).curveTo(-3.9,-4.2,1.7,-2.7).curveTo(4.5,-2,6.7,-0.4).curveTo(4.7,1.4,2.1,2.4).curveTo(0.3,3.1,-1.2,3.1).curveTo(-4.3,3.1,-6.6,0.3).closePath();
	this.shape_812.setTransform(-2065.9,147.2);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-17,-0.5).curveTo(-17,-0.5,-16.9,-0.5).curveTo(-16.9,-0.5,-16.9,-0.5).curveTo(-16.9,-0.6,-16.9,-0.6).curveTo(-17,-0.6,-17,-0.7).curveTo(-17.1,-0.8,-17.2,-0.8).curveTo(-17.2,-0.9,-17.3,-0.9).curveTo(-17.3,-1,-17.3,-1).curveTo(-17.3,-1,-17.3,-1).lineTo(-16.6,-1.6).lineTo(-7.7,0).curveTo(-3,0.7,1.5,-0).lineTo(17.3,-2.5).curveTo(12.7,-0.1,6.7,1).curveTo(0.4,2.2,-6.5,2.5).lineTo(-8.7,2.5).curveTo(-17.4,2.5,-17,-0.5).closePath();
	this.shape_813.setTransform(-2086.1,149.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.7,-2.8).curveTo(1.5,-4.3,3.9,-4.8).lineTo(3.1,0.1).curveTo(1.3,4.9,-3.5,4.8).lineTo(-3.5,4.8).curveTo(-5,0.2,-0.7,-2.8).closePath();
	this.shape_814.setTransform(-2198.2,133.6);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.9,0.3).lineTo(-4.2,-4.5).lineTo(0.5,-2.9).curveTo(5,-0.4,4,4.4).lineTo(4.1,4.4).lineTo(2.9,4.5).curveTo(-1,4.5,-2.9,0.3).closePath();
	this.shape_815.setTransform(-2206.9,130.3);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,-1.7).lineTo(0.1,-6.1).lineTo(2.4,-1.8).curveTo(3.9,3.2,0,6).lineTo(0,6.1).curveTo(-3.9,3.3,-2.3,-1.7).closePath();
	this.shape_816.setTransform(-2203.9,119.7);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.6,15.8).lineTo(-2.1,15.1).lineTo(-0.1,7.1).curveTo(0.7,2.9,0.3,-1.2).lineTo(-1.1,-15.8).curveTo(0.8,-11.6,1.5,-5.9).curveTo(2.3,-0.3,2.1,6.1).curveTo(1.9,16.1,-1.1,15.6).curveTo(-1,15.2,-1.3,15.5).lineTo(-1.6,15.8).lineTo(-1.6,15.8).closePath();
	this.shape_817.setTransform(-2203.1,138);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,-0.2).lineTo(-3.4,-5).lineTo(0.8,-2.7).curveTo(4.6,0.6,2.9,5).lineTo(3,5).curveTo(-1.8,4.8,-3.1,-0.2).closePath();
	this.shape_818.setTransform(-2213.5,99.5);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.5,2.6).lineTo(-2.4,-1.2).curveTo(1.4,-4.4,5.4,-2).lineTo(5.5,-2).curveTo(4.4,2.6,-0.6,3.1).closePath();
	this.shape_819.setTransform(-2219.8,106.4);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,1.3).lineTo(-5.6,-2.3).lineTo(-0.8,-3).curveTo(4.2,-2.8,5.5,1.7).lineTo(5.6,1.7).curveTo(3.8,3,1.9,3).curveTo(-0.2,3,-2.3,1.3).closePath();
	this.shape_820.setTransform(-2228.5,100.5);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.beginFill("#6D6C6C").beginStroke().moveTo(6.8,1.2).curveTo(3.2,-1,-0.7,-2).lineTo(-14.5,-5.6).curveTo(-9.9,-5.8,-4.6,-4.7).curveTo(0.7,-3.6,6.7,-1.2).curveTo(15.8,2.2,14.3,4.9).curveTo(14,4.6,14.2,5).lineTo(14.3,5.3).lineTo(13.5,5.6).lineTo(6.8,1.2).closePath();
	this.shape_821.setTransform(-2211.7,107);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.2,-2.8).curveTo(0.7,-4.9,3.2,-6).lineTo(3.5,-4.4).curveTo(3.7,-2.3,3.5,-0.6).curveTo(2.7,5,-2.5,6).lineTo(-2.6,6).curveTo(-5.2,1.4,-1.2,-2.8).closePath();
	this.shape_822.setTransform(-2095.3,121.5);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3,0.8).curveTo(-4.1,-0.6,-4.9,-2.5).lineTo(-5.5,-4.1).lineTo(-0.1,-3.4).curveTo(5.3,-1.7,5.4,3.6).lineTo(5.4,3.6).curveTo(4,4.1,2.8,4.1).curveTo(-0.5,4.1,-3,0.8).closePath();
	this.shape_823.setTransform(-2105.3,120.2);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,-1.3).lineTo(-1.5,-6.6).lineTo(1.9,-2.4).curveTo(4.7,2.5,1.2,6.5).lineTo(1.2,6.6).curveTo(-3.7,4.4,-3.1,-1.3).closePath();
	this.shape_824.setTransform(-2104.2,107.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.beginFill("#6D6C6C").beginStroke().moveTo(2.1,17).lineTo(1.3,16.4).lineTo(1.6,7.3).curveTo(1.5,2.6,0.2,-1.7).lineTo(-4.6,-17).curveTo(-1.5,-12.7,0.4,-7.1).curveTo(2.5,-1.3,3.8,5.8).curveTo(5.9,16.5,2.5,16.7).curveTo(2.5,16.3,2.3,16.7).lineTo(2.1,17).lineTo(2.1,17).closePath();
	this.shape_825.setTransform(-2099.6,127.7);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.5,4.8).lineTo(-4.5,4.8).curveTo(-5.6,-0.4,-0.6,-3.2).curveTo(2,-4.5,4.7,-4.9).curveTo(4.5,-2.2,3.3,0.3).curveTo(1.1,4.9,-3.3,4.9).lineTo(-4.5,4.8).closePath();
	this.shape_826.setTransform(-2066.8,102.9);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,-2.3).curveTo(-0.3,-4.4,1.8,-6).lineTo(3,-1.1).curveTo(3.2,4.1,-1.3,5.9).lineTo(-1.3,5.9).curveTo(-4.5,2.2,-1.7,-2.3).closePath();
	this.shape_827.setTransform(-2217.5,125.9);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.8,2.3).lineTo(-6.2,-0.3).lineTo(-1.7,-2.5).curveTo(3.3,-3.9,6.1,0.2).lineTo(6.2,0.2).curveTo(4.2,2.8,1.2,2.8).curveTo(-0.2,2.8,-1.8,2.3).closePath();
	this.shape_828.setTransform(-2223.7,135.1);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.5,-0.8).curveTo(-3.7,-2.7,-3.3,-4.8).lineTo(-2.8,-6.5).lineTo(-1.4,-5.5).curveTo(0.3,-4.3,1.5,-2.8).curveTo(5.2,1.8,2.2,6.5).lineTo(2.2,6.5).curveTo(-3.2,5.2,-3.5,-0.8).closePath();
	this.shape_829.setTransform(-2224.3,117.4);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.4,3.4).curveTo(-4.5,2.8,-6.9,1.4).lineTo(-8.7,0.1).lineTo(-7,-1.2).curveTo(-4.7,-2.6,-2.6,-3.3).curveTo(4.5,-5.7,8.7,-0.2).lineTo(8.7,-0.2).curveTo(5.9,4,1.3,4).curveTo(-0.4,4,-2.4,3.4).closePath();
	this.shape_830.setTransform(-2160.8,75.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.3,3.4).curveTo(-4.6,2.7,-6.8,1.4).lineTo(-8.7,0.1).lineTo(-7,-1.2).curveTo(-4.7,-2.6,-2.6,-3.3).curveTo(4.4,-5.7,8.6,-0.2).lineTo(8.7,-0.2).curveTo(5.8,4,1.3,4).curveTo(-0.4,4,-2.3,3.4).closePath();
	this.shape_831.setTransform(-2169.7,64.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.5,4.7).lineTo(-7.7,4.4).lineTo(-6.7,2.5).curveTo(-5.4,0.2,-3.8,-1.4).curveTo(1.4,-6.7,7.6,-3.7).lineTo(7.7,-3.7).curveTo(6.8,3.2,-0.5,4.5).curveTo(-2.1,4.8,-3.7,4.8).lineTo(-5.5,4.7).closePath();
	this.shape_832.setTransform(-2179.1,55.8);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.4,0).curveTo(-5.1,-2.2,-5.3,-4.8).lineTo(-5.3,-7.1).lineTo(-3.3,-6.3).curveTo(-0.8,-5.3,1,-4).curveTo(6.9,0.5,4.7,7).lineTo(4.8,7.1).lineTo(4.7,7.1).curveTo(-2.2,7.1,-4.4,0).closePath();
	this.shape_833.setTransform(-2183,37.7);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,-3.6).curveTo(1.1,-6.3,4.3,-7.8).lineTo(4.6,-5.6).curveTo(4.9,-3,4.5,-0.7).curveTo(3.4,6.5,-3.4,7.7).lineTo(-3.5,7.8).curveTo(-6.8,1.6,-1.5,-3.6).closePath();
	this.shape_834.setTransform(-2155.2,60.4);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,-3.7).curveTo(1.1,-6.3,4.3,-7.8).lineTo(4.6,-5.6).curveTo(4.9,-3,4.5,-0.7).curveTo(3.3,6.5,-3.5,7.7).lineTo(-3.5,7.8).curveTo(-6.8,1.7,-1.5,-3.7).closePath();
	this.shape_835.setTransform(-2163.6,51.5);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.5,-3.7).curveTo(1.1,-6.3,4.4,-7.7).lineTo(4.7,-5.6).curveTo(4.9,-3,4.5,-0.7).curveTo(3.3,6.6,-3.5,7.7).lineTo(-3.5,7.7).curveTo(-6.7,1.6,-1.5,-3.7).closePath();
	this.shape_836.setTransform(-2171.8,40.3);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.beginFill("#6D6C6C").beginStroke().moveTo(29.3,48.5).lineTo(28,48.1).curveTo(28.6,44.4,27.1,39.2).curveTo(24.1,28.8,13.3,20.7).curveTo(7.3,16.2,0.5,12.4).lineTo(-9.9,6.9).curveTo(-20.3,1.3,-25.6,-7.7).curveTo(-32.7,-20.1,-36,-31.3).curveTo(-39.6,-43.3,-37.2,-48.7).lineTo(-36.3,-40.9).curveTo(-34,-30.5,-27.7,-17.7).curveTo(-21.9,-6.1,-14.6,-0.4).curveTo(-9.6,3.5,-1.3,5.9).curveTo(11.9,9.8,24.2,18.5).curveTo(39.3,29.1,38.1,38.4).curveTo(37.1,47.2,32.4,48.5).curveTo(31.7,48.7,30.9,48.7).curveTo(30.1,48.7,29.3,48.5).closePath();
	this.shape_837.setTransform(-2169,127.1);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.beginFill("#6D6C6C").beginStroke().moveTo(38.5,39.6).lineTo(37.1,39.4).curveTo(37,35.9,34.4,31.2).curveTo(29.4,21.9,17.5,16.3).curveTo(10.9,13.2,3.6,11).lineTo(-7.4,7.9).curveTo(-18.5,4.6,-25.3,-3).curveTo(-34.6,-13.3,-40.1,-23.3).curveTo(-46,-34,-44.8,-39.6).lineTo(-42.3,-32.3).curveTo(-38,-22.9,-29.4,-12).curveTo(-21.5,-2.1,-13.4,1.8).curveTo(-7.8,4.6,0.6,5.2).curveTo(13.9,6.2,27.4,12).curveTo(44,19,44.8,28.2).curveTo(45.6,36.7,41.4,38.9).curveTo(40.2,39.6,38.7,39.6).lineTo(38.5,39.6).closePath();
	this.shape_838.setTransform(-2177.5,160.6);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-14.8,106.9).curveTo(-18.8,106.2,-23.2,104.8).lineTo(-26.8,103.6).curveTo(-28.7,98.8,-25.3,75.8).curveTo(-23.8,65.4,-19.4,41.3).curveTo(-16.3,24.5,-12.7,2.6).curveTo(-11.1,-7.1,-13.2,-26.3).curveTo(-15.2,-44.8,-18.6,-54.6).curveTo(-22.4,-65.4,-29.4,-74.6).curveTo(-42.2,-90.1,-54.8,-105.6).lineTo(-55.8,-107.6).lineTo(-54.8,-107.1).curveTo(-53.2,-106.1,-50.3,-103.4).curveTo(-40.9,-94.7,-21.4,-72.4).curveTo(-2.3,-50.7,-0.4,-14).curveTo(0.6,4.3,-2.3,18.2).lineTo(2.4,12.6).curveTo(9.4,5.7,20.5,-0.8).curveTo(31,-7,46.2,-29.1).lineTo(54.1,-41.2).curveTo(55.4,-43.2,55.7,-43.4).curveTo(56,-43.6,55.2,-41.7).curveTo(50.9,-31.3,44.6,-21).curveTo(35.9,-6.9,26.7,1.1).curveTo(24,3.5,20.1,6.1).curveTo(16.9,8.3,15.2,10.1).curveTo(10.2,15.2,-0.1,35.3).curveTo(-11.1,57,-5.6,82.4).curveTo(-2.8,95.2,2.2,103.6).curveTo(-0.8,107.6,-8.2,107.6).curveTo(-11.1,107.6,-14.8,106.9).closePath();
	this.shape_839.setTransform(-2125.4,148.9);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-2.6,19.2,-12.4,18.9).lineTo(-22.9,18).curveTo(-24,18,-22.6,16.1).curveTo(-21.9,15.1,-20.9,14.1).curveTo(-15.3,8.6,-7.7,-4.6).curveTo(-3.3,-12.2,-0.1,-18.9).lineTo(0.1,-18.9).curveTo(3.2,-12.2,7.6,-4.6).curveTo(15.2,8.6,20.9,14.1).lineTo(22.5,16.1).curveTo(24,18,22.8,18).curveTo(17.3,18.8,12.3,18.9).lineTo(10.8,18.9).curveTo(2.4,18.9,-0,16.3).closePath();
	this.shape_840.setTransform(-1888.6,64.9);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-3.8,19.2,-17.9,18.9).lineTo(-33.2,18).curveTo(-34.8,18,-32.7,16.1).curveTo(-31.7,15.1,-30.4,14.1).curveTo(-22.2,8.6,-11.2,-4.6).curveTo(-5.1,-11.8,-0.1,-18.9).lineTo(0.1,-18.9).curveTo(5.1,-11.8,11.1,-4.6).curveTo(22.2,8.6,30.3,14.1).lineTo(32.7,16.1).curveTo(34.8,18,33.1,18).curveTo(25.1,18.8,17.9,18.9).lineTo(15.7,18.9).curveTo(3.4,18.9,-0,16.3).closePath();
	this.shape_841.setTransform(-1888.6,92.7);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.beginFill("#6D6C6C").beginStroke().moveTo(0.2,16.1).curveTo(-14,23.3,-45,23.4).curveTo(-54.6,23.4,-66.1,22.7).curveTo(-76,22,-77.4,22).curveTo(-81.2,22,-76.4,19.5).curveTo(-74,18.3,-70.8,17).curveTo(-51.8,10.2,-26,-6.4).curveTo(-11.8,-15.5,-0.3,-24.4).lineTo(0.3,-24.4).curveTo(11.8,-15.5,26,-6.4).curveTo(51.8,10.2,70.8,17).lineTo(76.4,19.5).curveTo(81.2,22,77.4,22).curveTo(60.3,24.1,44.3,24.4).lineTo(40.1,24.4).curveTo(11.9,24.4,0.2,16.1).closePath();
	this.shape_842.setTransform(-1888.6,196.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,20.5).curveTo(-7.3,24.1,-35.2,23.7).curveTo(-62.6,22.6,-65.1,22.6).curveTo(-68.2,22.6,-64.2,20.1).curveTo(-62.2,18.9,-59.6,17.7).curveTo(-43.5,10.8,-21.9,-5.8).curveTo(-9.5,-15.3,-0.3,-23.8).lineTo(0.3,-23.8).curveTo(9.5,-15.3,21.9,-5.8).curveTo(43.5,10.8,59.6,17.7).lineTo(64.2,20.1).curveTo(68.2,22.6,65.1,22.6).curveTo(49.3,23.5,35.2,23.7).lineTo(29.8,23.8).curveTo(6.6,23.8,-0,20.5).closePath();
	this.shape_843.setTransform(-1888.6,167.8);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-6.2,19.2,-29.6,18.9).lineTo(-54.7,18).curveTo(-57.4,18,-54.1,16.1).curveTo(-52.3,15.1,-50.1,14.1).curveTo(-36.6,8.6,-18.4,-4.6).curveTo(-8.4,-11.8,-0.2,-18.9).lineTo(0.2,-18.9).curveTo(8.4,-11.8,18.4,-4.6).curveTo(36.6,8.6,50.1,14.1).lineTo(54.1,16.1).curveTo(57.4,18,54.7,18).curveTo(41.6,18.8,29.6,18.9).lineTo(25.9,18.9).curveTo(5.7,18.9,-0,16.3).closePath();
	this.shape_844.setTransform(-1888.6,142.4);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0,16.3).curveTo(-4.6,19.2,-21.8,18.9).lineTo(-40.4,18).curveTo(-42.3,18,-39.8,16).curveTo(-38.6,15,-36.9,14).curveTo(-27,8.6,-13.6,-4.6).curveTo(-5.8,-12.3,-0.2,-18.9).lineTo(0.1,-18.9).curveTo(6.4,-11.7,13.6,-4.6).curveTo(27,8.6,36.9,14).lineTo(39.8,16).curveTo(42.3,18,40.3,18).curveTo(30.6,18.7,21.8,18.9).lineTo(18.6,18.9).curveTo(4.1,18.9,-0,16.3).closePath();
	this.shape_845.setTransform(-1888.6,117.6);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.6,39.6).lineTo(-8.6,-39.5).lineTo(8.5,-39.5).lineTo(8.5,39.6).closePath();
	this.shape_846.setTransform(-1888.2,216.9);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,2).curveTo(-5,0.7,-6.7,-1.2).lineTo(-7.9,-2.8).lineTo(-5.9,-3.5).curveTo(-3.4,-4.1,-1.2,-4.1).curveTo(5.9,-4.1,7.9,2.2).lineTo(7.9,2.2).curveTo(5.3,4.1,2.5,4.1).curveTo(-0.3,4.1,-3.2,2).closePath();
	this.shape_847.setTransform(-2371.4,100.2);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.9,0.8).curveTo(-5.1,-1.1,-5.9,-3.5).lineTo(-6.4,-5.5).lineTo(-4.3,-5.3).curveTo(-1.8,-5,0.3,-4.1).curveTo(6.9,-1.4,6.4,5.2).lineTo(6.3,5.1).curveTo(5,5.5,3.7,5.5).curveTo(-0.9,5.5,-3.9,0.8).closePath();
	this.shape_848.setTransform(-2371.4,86.6);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-9.8,-2.5).lineTo(-9.9,-2.5).curveTo(-3.4,-7.6,3.9,-2.6).curveTo(7.5,-0.1,9.9,3.4).curveTo(6.1,5,1.7,5.1).lineTo(1.4,5.1).curveTo(-7,5.1,-9.8,-2.5).closePath();
	this.shape_849.setTransform(-2334.2,119.4);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.7,-2.1).curveTo(-4.3,-4.8,-3.1,-7.7).lineTo(-2,-10.1).lineTo(-0.2,-8.3).curveTo(1.9,-6,3.2,-3.6).curveTo(7.2,4.2,1.5,10.1).lineTo(1.5,10.1).curveTo(-5.9,6.6,-4.7,-2.1).closePath();
	this.shape_850.setTransform(-2344.9,103.6);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,-4.7).curveTo(2.6,-7.1,6.7,-8).lineTo(6.5,-5.5).curveTo(6.2,-2.3,5.2,0.2).curveTo(2,8.3,-6.2,7.9).lineTo(-6.2,8).curveTo(-8.5,0.1,-1.1,-4.7).closePath();
	this.shape_851.setTransform(-2330.4,99.2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.9,11.9).lineTo(12.1,-23.2).lineTo(12.9,-18.6).lineTo(-12.9,23.2).closePath();
	this.shape_852.setTransform(-2347.5,124.5);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.8,-2.7).curveTo(-1.8,-4.7,-0.2,-6.7).lineTo(1.2,-8.2).lineTo(2.2,-6.4).curveTo(3.3,-4.1,3.7,-1.9).curveTo(4.9,5,-0.8,8.2).lineTo(-0.8,8.3).curveTo(-5.8,3.8,-2.8,-2.7).closePath();
	this.shape_853.setTransform(-2376.6,138.2);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.7,3.8).curveTo(-3.9,3.5,-6.3,2.5).lineTo(-8.2,1.6).curveTo(-7.6,0.9,-6.7,0.1).curveTo(-4.8,-1.6,-2.9,-2.6).curveTo(3.4,-5.8,8.1,-1.2).lineTo(8.2,-1.2).curveTo(5.8,3.9,0.2,3.9).lineTo(-1.7,3.8).closePath();
	this.shape_854.setTransform(-2388.8,146.8);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4,0.6).curveTo(-5,-1.4,-5.5,-3.9).lineTo(-5.9,-6).lineTo(-3.8,-5.6).curveTo(-1.4,-5.1,0.6,-4).curveTo(6.8,-0.7,5.7,5.8).lineTo(5.8,5.8).curveTo(4.8,6,3.9,6).curveTo(-1.2,6,-4,0.6).closePath();
	this.shape_855.setTransform(-2390.4,134.1);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.4,-11.8).lineTo(-11.5,-16).lineTo(12.4,7.8).lineTo(10.5,16).closePath();
	this.shape_856.setTransform(-2374.9,151.3);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-1.7).lineTo(-0.2,-6.4).lineTo(2.4,-1.9).curveTo(4.3,3.2,0.2,6.4).lineTo(0.2,6.4).curveTo(-4.1,3.7,-2.6,-1.7).closePath();
	this.shape_857.setTransform(-2384.6,106.4);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.1,3.1).lineTo(-6.3,1.8).curveTo(-4.7,-0.3,-2.4,-1.7).curveTo(2.2,-4.6,6.2,-1.4).lineTo(6.3,-1.4).curveTo(4.6,3.1,-0.4,3.1).lineTo(-1.1,3.1).closePath();
	this.shape_858.setTransform(-2393.6,113.8);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,1).curveTo(-4.5,-0.6,-5.4,-2.6).lineTo(-6.1,-4.4).lineTo(-4.3,-4.4).curveTo(-2.1,-4.3,-0.2,-3.8).curveTo(5.8,-2.1,6.1,3.7).lineTo(6.1,3.8).curveTo(4.5,4.4,3,4.4).curveTo(-0.5,4.4,-3.3,1).closePath();
	this.shape_859.setTransform(-2398.9,104.6);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15.7,-7.5).lineTo(-15.9,-9.9).lineTo(14.4,4.7).lineTo(15.9,9.8).closePath();
	this.shape_860.setTransform(-2379.2,116.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.4,-1.9).lineTo(0.4,-6.5).lineTo(2.6,-1.8).curveTo(4.1,3.6,-0.2,6.4).lineTo(-0.2,6.4).curveTo(-4.3,3.3,-2.4,-1.9).closePath();
	this.shape_861.setTransform(-2381.4,168.3);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.3,2.9).lineTo(-6.4,1.2).lineTo(-2.3,-2).curveTo(2.6,-4.5,6.3,-0.9).lineTo(6.4,-1).curveTo(4.5,3,0.2,3).lineTo(-1.3,2.9).closePath();
	this.shape_862.setTransform(-2391,174.9);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,0.8).curveTo(-4.4,-0.8,-5.2,-3).lineTo(-5.7,-4.8).lineTo(-3.9,-4.7).curveTo(-1.7,-4.4,0.1,-3.7).curveTo(5.9,-1.5,5.7,4.4).lineTo(5.8,4.4).curveTo(4.4,4.8,3.2,4.8).curveTo(-0.7,4.8,-3.3,0.8).closePath();
	this.shape_863.setTransform(-2395.5,165.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-15,-8.8).lineTo(-15,-11.2).lineTo(14,5.9).lineTo(15,11.2).closePath();
	this.shape_864.setTransform(-2376.8,178.4);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.5,-1.3).lineTo(-6.5,-1.4).curveTo(-2.5,-4.8,2.4,-1.8).curveTo(4.8,-0.3,6.5,1.9).curveTo(4.1,3,1.2,3.2).lineTo(0.5,3.2).curveTo(-4.6,3.2,-6.5,-1.3).closePath();
	this.shape_865.setTransform(-2337.7,182);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.3,-0.9).lineTo(-2.3,-6.3).lineTo(1.6,-2.6).curveTo(4.9,2,1.8,6.3).lineTo(1.8,6.4).curveTo(-3.3,4.8,-3.3,-0.9).closePath();
	this.shape_866.setTransform(-2343.3,171.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.6,-3.1).curveTo(1.9,-4.6,4.6,-5).curveTo(4.5,-2.3,3.3,0.3).curveTo(1,5.4,-4.3,4.9).lineTo(-4.3,5).curveTo(-5.5,-0.2,-0.6,-3.1).closePath();
	this.shape_867.setTransform(-2333.5,169.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.3,5.9).curveTo(7,-10.1,8.6,-12.2).curveTo(9.5,-13.5,11,-13.1).curveTo(11.7,-12.9,12.3,-12.5).lineTo(-11.9,13.2).closePath();
	this.shape_868.setTransform(-2346.9,185.3);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-0.3,4.1).curveTo(-6.8,1.3,-6.2,-5.3).lineTo(-6.2,-5.4).curveTo(0.2,-6.9,3.9,-0.8).curveTo(5.7,2.3,6.3,5.7).curveTo(2.9,5.6,-0.3,4.1).closePath();
	this.shape_869.setTransform(-2332,149.4);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.6,-2.8).curveTo(-1.6,-4.7,0.1,-6.7).lineTo(1.6,-8.2).lineTo(2.5,-6.3).curveTo(3.5,-4,3.8,-1.8).curveTo(4.8,5.2,-1.1,8.2).lineTo(-1.1,8.2).curveTo(-5.8,3.6,-2.6,-2.8).closePath();
	this.shape_870.setTransform(-2332.4,134);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.7,2.6).lineTo(-7.8,2.6).curveTo(-6.1,-3.8,1,-4.2).curveTo(4.6,-4.4,7.8,-3.3).curveTo(6.1,-0.4,3.4,1.8).curveTo(0.3,4.2,-2.7,4.2).curveTo(-5.2,4.2,-7.7,2.6).closePath();
	this.shape_871.setTransform(-2319.9,138.4);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.9,0).curveTo(13.5,-6.5,16.5,-8).curveTo(18.3,-8.9,19.7,-7.6).curveTo(20.4,-7,20.7,-6.2).lineTo(-20.7,8.4).closePath();
	this.shape_872.setTransform(-2343.9,147);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.4,3.8).lineTo(-5.5,3.9).curveTo(-5.6,-1.5,-0.1,-3.4).curveTo(2.7,-4.3,5.5,-4.2).curveTo(4.8,-1.5,3.1,0.8).curveTo(0.6,4.2,-2.9,4.2).curveTo(-4.1,4.2,-5.4,3.8).closePath();
	this.shape_873.setTransform(-2358.8,105.3);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-6.4,5.1).lineTo(-6.4,5.1).curveTo(-7,-1.5,-0.3,-4.1).curveTo(3,-5.5,6.4,-5.5).curveTo(5.8,-2.2,3.9,0.8).curveTo(0.9,5.5,-3.7,5.5).curveTo(-5,5.5,-6.4,5.1).closePath();
	this.shape_874.setTransform(-2357.2,89.8);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.2,-2.3).curveTo(-2.5,-4.4,-1.1,-6.6).lineTo(0.1,-8.3).lineTo(1.3,-6.6).curveTo(2.6,-4.5,3.3,-2.4).curveTo(5.3,4.4,-0.1,8.2).lineTo(-0.1,8.3).curveTo(-5.4,4.5,-3.2,-2.3).closePath();
	this.shape_875.setTransform(-2364.2,76);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.2,88.9).lineTo(-6.4,-88.9).lineTo(-4.6,-83.5).lineTo(8.3,88.9).closePath();
	this.shape_876.setTransform(-2359.1,167.6);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.7,11.5,-27.7,0).curveTo(-27.7,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_877.setTransform(-2362,138.6);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.8,12.8).curveTo(-18.1,7.5,-18.1,0).curveTo(-18.1,-7.5,-12.8,-12.8).curveTo(-7.5,-18.1,-0,-18.1).curveTo(7.5,-18.1,12.8,-12.8).curveTo(18.1,-7.5,18.1,0).curveTo(18.1,7.5,12.8,12.8).curveTo(7.5,18.1,-0,18.1).curveTo(-7.5,18.1,-12.8,12.8).closePath();
	this.shape_878.setTransform(-2337.8,72.2);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,20.2).curveTo(-27.8,11.8,-27.8,-0).curveTo(-27.8,-11.8,-19.6,-20.2).curveTo(-11.5,-28.6,-0,-28.6).curveTo(11.5,-28.6,19.6,-20.2).curveTo(27.8,-11.8,27.8,-0).curveTo(27.8,11.8,19.6,20.2).curveTo(11.5,28.6,-0,28.6).curveTo(-11.5,28.6,-19.6,20.2).closePath();
	this.shape_879.setTransform(-2337.8,97.6);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.7,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.5,-19.7,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.7,-19.6).curveTo(27.8,-11.5,27.8,0).curveTo(27.8,11.5,19.7,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.7,19.6).closePath();
	this.shape_880.setTransform(-2317.8,118.7);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.7,11.5,-27.7,-0).curveTo(-27.7,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,-0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_881.setTransform(-2314.2,152);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,-0).curveTo(-17.1,-7,-12.1,-12.1).curveTo(-7.1,-17.1,-0,-17).curveTo(7.1,-17.1,12.1,-12.1).curveTo(17.1,-7,17.1,-0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17.1,-0,17).curveTo(-7.1,17.1,-12.1,12.1).closePath();
	this.shape_882.setTransform(-2410.2,128.4);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-12.1,12.1).curveTo(-17.1,7,-17.1,0).curveTo(-17.1,-7.1,-12.1,-12).curveTo(-7.1,-17.1,0,-17.1).curveTo(7.1,-17.1,12.1,-12).curveTo(17.1,-7.1,17.1,0).curveTo(17.1,7,12.1,12.1).curveTo(7.1,17,0,17).curveTo(-7.1,17,-12.1,12.1).closePath();
	this.shape_883.setTransform(-2389.8,75.6);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,16.7).curveTo(-10.1,15.5,-14.1,9.6).curveTo(-18.1,3.8,-16.8,-3.2).curveTo(-15.5,-10.1,-9.7,-14.1).curveTo(-3.8,-18.1,3.1,-16.8).curveTo(10.1,-15.4,14.1,-9.7).curveTo(18.1,-3.8,16.8,3.1).curveTo(15.5,10,9.7,14).curveTo(5.3,17.1,0.2,17.1).curveTo(-1.4,17.1,-3.1,16.7).closePath();
	this.shape_884.setTransform(-2340.7,160.1);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_885.setTransform(-2331.3,167.3);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_886.setTransform(-2358.7,178.1);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.7,11.5,-27.7,-0).curveTo(-27.7,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.7,-11.5,27.7,-0).curveTo(27.7,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_887.setTransform(-2386.4,169.9);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,-0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,-0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.5,27.8,-0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,-0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_888.setTransform(-2409,154.3);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.6,27.3).curveTo(-15.9,25.5,-22.6,16.1).curveTo(-29.3,6.8,-27.4,-4.6).curveTo(-25.5,-15.9,-16.2,-22.6).curveTo(-6.8,-29.2,4.5,-27.3).curveTo(15.9,-25.4,22.6,-16.1).curveTo(29.3,-6.8,27.4,4.6).curveTo(25.5,15.9,16.1,22.6).curveTo(8.8,27.7,0.4,27.7).curveTo(-2,27.7,-4.6,27.3).closePath();
	this.shape_889.setTransform(-2365.5,95.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.6,27.3).curveTo(-15.9,25.4,-22.6,16.1).curveTo(-29.3,6.7,-27.4,-4.6).curveTo(-25.5,-15.9,-16.1,-22.6).curveTo(-6.8,-29.2,4.6,-27.4).curveTo(15.9,-25.5,22.6,-16.1).curveTo(29.3,-6.8,27.4,4.5).curveTo(25.5,15.8,16.1,22.5).curveTo(8.8,27.8,0.3,27.8).curveTo(-2.1,27.8,-4.6,27.3).closePath();
	this.shape_890.setTransform(-2392.7,107.3);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.6,19.6).curveTo(-27.8,11.5,-27.8,0).curveTo(-27.8,-11.5,-19.6,-19.6).curveTo(-11.5,-27.7,0,-27.7).curveTo(11.5,-27.7,19.6,-19.6).curveTo(27.8,-11.4,27.8,0).curveTo(27.8,11.5,19.6,19.6).curveTo(11.5,27.7,0,27.7).curveTo(-11.5,27.7,-19.6,19.6).closePath();
	this.shape_891.setTransform(-2364.7,59.6);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.3,2.7).curveTo(-6.6,1,-8.8,-1.5).lineTo(-10.5,-3.7).lineTo(-7.8,-4.6).curveTo(-4.6,-5.4,-1.6,-5.4).curveTo(7.8,-5.4,10.5,2.9).lineTo(10.4,2.9).curveTo(6.9,5.4,3.3,5.4).curveTo(-0.4,5.4,-4.3,2.7).closePath();
	this.shape_892.setTransform(-2541.8,47);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.2,1.1).curveTo(-6.7,-1.4,-7.8,-4.6).lineTo(-8.5,-7.2).lineTo(-5.7,-7).curveTo(-2.4,-6.5,0.4,-5.4).curveTo(9.2,-1.9,8.5,6.9).lineTo(8.4,6.8).curveTo(6.6,7.2,4.9,7.2).curveTo(-1.2,7.2,-5.2,1.1).closePath();
	this.shape_893.setTransform(-2541.9,28.9);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.5,-2.6).lineTo(-10.6,-2.7).curveTo(-3.7,-8.1,4.2,-2.8).curveTo(8.1,-0.2,10.6,3.6).curveTo(6.5,5.3,1.8,5.4).lineTo(1.5,5.4).curveTo(-7.6,5.4,-10.5,-2.6).closePath();
	this.shape_894.setTransform(-2499.2,74.7);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.6,-3.5).curveTo(-2.4,-6.2,-0.3,-8.8).lineTo(1.6,-10.9).lineTo(2.9,-8.5).curveTo(4.3,-5.5,4.8,-2.6).curveTo(6.5,6.6,-1.1,10.9).lineTo(-1.1,10.9).curveTo(-7.6,5,-3.6,-3.5).closePath();
	this.shape_895.setTransform(-2550.3,81.8);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-3.1,-2.5).curveTo(-2.3,-4.6,-0.8,-6.8).lineTo(0.5,-8.5).lineTo(1.7,-6.7).curveTo(2.9,-4.5,3.5,-2.3).curveTo(5.4,4.7,-0.3,8.5).lineTo(-0.3,8.6).curveTo(-5.7,4.3,-3.1,-2.5).closePath();
	this.shape_896.setTransform(-2557.4,121.7);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.8,3.9).curveTo(-4,3.6,-6.5,2.6).lineTo(-8.4,1.6).lineTo(-6.9,0.1).curveTo(-5,-1.6,-3,-2.7).curveTo(3.4,-6,8.4,-1.3).lineTo(8.5,-1.3).curveTo(5.9,4,0.2,4).lineTo(-1.8,3.9).closePath();
	this.shape_897.setTransform(-2570.1,130.6);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-2.2,5).curveTo(-5.2,4.6,-8.3,3.3).lineTo(-10.9,2.1).curveTo(-10.1,1.2,-8.9,0.1).curveTo(-6.4,-2.1,-3.8,-3.4).curveTo(4.5,-7.7,10.8,-1.6).lineTo(10.8,-1.6).curveTo(7.6,5.2,0.3,5.2).curveTo(-0.9,5.2,-2.2,5).closePath();
	this.shape_898.setTransform(-2566.5,93.3);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.7,-1.7).lineTo(-10.8,-1.7).curveTo(-4.5,-7.8,3.8,-3.3).curveTo(8,-1,10.8,2.5).curveTo(6.9,4.6,2.3,5.1).lineTo(0.2,5.2).curveTo(-7.4,5.2,-10.7,-1.7).closePath();
	this.shape_899.setTransform(-2491,130.6);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.5,-1.3).curveTo(-5.7,-4.2,-5.1,-7.5).lineTo(-4.4,-10.3).lineTo(-2.1,-8.7).curveTo(0.6,-6.7,2.4,-4.4).curveTo(8.2,2.9,3.5,10.2).lineTo(3.5,10.3).curveTo(-5,8.2,-5.5,-1.3).closePath();
	this.shape_900.setTransform(-2501.1,113.3);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5,-2.3).curveTo(-4.6,-5.2,-3.3,-8.3).lineTo(-2.1,-10.8).lineTo(-0.1,-8.9).curveTo(2.1,-6.4,3.4,-3.9).curveTo(7.7,4.4,1.6,10.8).lineTo(1.7,10.9).curveTo(-6.3,7.1,-5,-2.3).closePath();
	this.shape_901.setTransform(-2510.7,57.9);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.5,1).curveTo(-5.9,-1.1,-6.9,-3.9).lineTo(-7.6,-6.3).lineTo(-5.2,-6.2).curveTo(-2.2,-5.8,0.1,-4.9).curveTo(7.9,-1.9,7.6,5.8).lineTo(7.6,5.8).curveTo(5.8,6.3,4.2,6.3).curveTo(-0.9,6.3,-4.5,1).closePath();
	this.shape_902.setTransform(-2576,117.6);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-5.3,0.7).curveTo(-6.6,-1.9,-7.3,-5.2).lineTo(-7.8,-8).lineTo(-5.1,-7.5).curveTo(-1.9,-6.7,0.7,-5.3).curveTo(9,-1,7.6,7.7).lineTo(7.6,7.7).curveTo(6.4,8,5.2,8).curveTo(-1.6,8,-5.3,0.7).closePath();
	this.shape_903.setTransform(-2568.5,76.4);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.2,-5.1).curveTo(1.3,-6.7,4.5,-7.8).lineTo(7.2,-8.6).lineTo(7,-5.8).curveTo(6.6,-2.5,5.6,0.2).curveTo(2.2,8.9,-6.6,8.5).lineTo(-6.6,8.6).curveTo(-9.1,0.1,-1.2,-5.1).closePath();
	this.shape_904.setTransform(-2485.2,109.7);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-1.2,-5.1).curveTo(2.8,-7.7,7.2,-8.6).lineTo(7,-5.8).curveTo(6.6,-2.5,5.6,0.2).curveTo(2.2,8.9,-6.6,8.5).lineTo(-6.6,8.6).curveTo(-9.1,0.1,-1.2,-5.1).closePath();
	this.shape_905.setTransform(-2495.2,53);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-7.2,5.1).lineTo(-7.2,5.1).curveTo(-7.4,-2.1,-0.1,-4.5).curveTo(3.5,-5.8,7.2,-5.6).lineTo(6.5,-3.4).curveTo(5.5,-0.9,4.1,1).curveTo(0.8,5.6,-3.8,5.6).curveTo(-5.4,5.6,-7.2,5.1).closePath();
	this.shape_906.setTransform(-2525.1,53.8);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-8.4,6.8).lineTo(-8.4,6.8).curveTo(-9.1,-1.9,-0.4,-5.4).curveTo(4,-7.2,8.5,-7.2).lineTo(7.8,-4.6).curveTo(6.8,-1.4,5.2,1.1).curveTo(1.2,7.2,-4.9,7.2).curveTo(-6.6,7.2,-8.4,6.8).closePath();
	this.shape_907.setTransform(-2523.1,33.1);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-4.2,-3).curveTo(-3.3,-5.9,-1.5,-8.7).lineTo(0.2,-11).lineTo(1.7,-8.7).curveTo(3.5,-5.9,4.3,-3.1).curveTo(7.1,5.9,-0,11).lineTo(-0,11).curveTo(-7.2,5.9,-4.2,-3).closePath();
	this.shape_908.setTransform(-2532.3,14.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-13.8,12.7).lineTo(12.9,-24.9).lineTo(13.7,-20).lineTo(-13.8,24.9).closePath();
	this.shape_909.setTransform(-2513.4,80.2);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.8,-11.7).lineTo(-19.9,-14.8).lineTo(18.6,7.8).lineTo(19.8,14.8).closePath();
	this.shape_910.setTransform(-2551.4,135.2);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-16.3,-15.6).lineTo(-15.2,-21.2).lineTo(16.3,10.3).lineTo(13.9,21.2).closePath();
	this.shape_911.setTransform(-2548,99.2);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-19.4,10.6).curveTo(11,-17.2,13.3,-20.9).curveTo(14.9,-23.2,17.3,-22.6).curveTo(18.5,-22.4,19.4,-21.7).lineTo(-18.2,22.8).closePath();
	this.shape_912.setTransform(-2506.2,136.8);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.beginFill("#6D6C6C").beginStroke().moveTo(-10.9,119).lineTo(-8.5,-119).lineTo(-6.1,-111.9).lineTo(10.9,119).closePath();
	this.shape_913.setTransform(-2525.6,137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2583.6,0,2583.7,256.5);


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


(lib.platconductor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handss
	this.instance = new lib.plathandss();
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


(lib.platcamionplataforma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-152,1.9).lineTo(152,-3.5).lineTo(152,-1.9).lineTo(-152,3.5).closePath();
	this.shape.setTransform(-164.5,81.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-152,1.9).lineTo(152,-3.5).lineTo(152,-2).lineTo(-152,3.4).closePath();
	this.shape_1.setTransform(-164.5,65.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.4,3.8).curveTo(-4.8,3.4,-5.1,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-3.9).lineTo(-2.3,0.8).curveTo(-2.3,1.6,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.5).curveTo(1.4,2.6,1.9,1.8).curveTo(2.1,1.5,2.1,0.8).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).curveTo(5.2,2.5,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_2.setTransform(-368.3,90.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DF1421").beginStroke().moveTo(-2.2,4.5).curveTo(-3.4,4.5,-4.3,3.8).curveTo(-4.8,3.4,-5,2.6).lineTo(-5.2,1.8).lineTo(-5.2,-4).lineTo(-5.1,-4.2).curveTo(-5,-4.4,-4.7,-4.5).lineTo(-2.8,-4.5).curveTo(-2.2,-4.5,-2.3,-3.9).lineTo(-2.3,0.8).curveTo(-2.3,1.6,-2.1,1.9).curveTo(-1.7,2.4,-0.1,2.5).curveTo(1.4,2.6,1.9,1.8).curveTo(2.1,1.5,2.1,0.8).lineTo(2.1,-3.9).lineTo(2.2,-4.2).curveTo(2.2,-4.3,2.3,-4.3).curveTo(2.3,-4.4,2.3,-4.4).curveTo(2.4,-4.5,2.5,-4.5).curveTo(2.5,-4.5,2.6,-4.5).lineTo(4.5,-4.5).curveTo(5.2,-4.5,5.1,-3.9).lineTo(5.1,1.4).lineTo(5.1,2).curveTo(5,2.9,4.6,3.4).curveTo(4,4.3,2,4.5).closePath();
	this.shape_3.setTransform(-392.5,90.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DF1421").beginStroke().moveTo(4.7,4.5).lineTo(-3,4.5).curveTo(-4.4,4.5,-5.1,3.5).lineTo(-5.4,2.5).curveTo(-5.5,2.1,-5.3,1.7).curveTo(-5.1,0.7,-4.2,0.3).curveTo(-2.8,-0.3,2,-2).curveTo(2.1,-2,2.1,-2).curveTo(2.1,-2,2.2,-2.1).curveTo(2.2,-2.1,2.2,-2.1).curveTo(2.2,-2.2,2.2,-2.2).curveTo(2.2,-2.3,2.2,-2.3).curveTo(2.2,-2.3,2.1,-2.4).curveTo(2.1,-2.4,2,-2.4).curveTo(1.9,-2.4,1.8,-2.5).curveTo(1.4,-2.6,-1.7,-2.5).lineTo(-4.7,-2.5).curveTo(-5.2,-2.5,-5.2,-3).lineTo(-5.2,-4).curveTo(-5.1,-4.4,-4.8,-4.5).lineTo(-4.5,-4.5).lineTo(2.9,-4.5).curveTo(4.5,-4.4,5.1,-3.5).curveTo(5.4,-3,5.4,-2.6).curveTo(5.6,-0.8,4.1,-0.2).lineTo(-1.6,1.8).curveTo(-2.4,2.1,-2.2,2.3).curveTo(-2.1,2.4,-1.7,2.4).lineTo(4.9,2.4).curveTo(5.2,2.5,5.2,2.8).lineTo(5.2,3.9).curveTo(5.2,4.5,4.8,4.5).lineTo(4.7,4.5).closePath();
	this.shape_4.setTransform(-380.3,90.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DF1421").beginStroke().moveTo(-5.2,4).lineTo(-5.2,2.9).curveTo(-5.2,2.6,-4.8,2.5).lineTo(-4.5,2.5).lineTo(1.7,2.5).curveTo(2.1,2.5,2.2,2.3).curveTo(2.4,2.2,1.6,1.9).lineTo(-4.1,-0.2).curveTo(-5.1,-0.5,-5.4,-1.6).lineTo(-5.4,-2.5).curveTo(-5.4,-3,-5.1,-3.5).curveTo(-4.5,-4.4,-2.9,-4.4).curveTo(-0.4,-4.5,4.5,-4.5).lineTo(4.8,-4.4).curveTo(5.1,-4.3,5.2,-4).lineTo(5.2,-2.9).curveTo(5.2,-2.4,4.7,-2.4).lineTo(1.7,-2.5).curveTo(-1.4,-2.5,-1.8,-2.4).curveTo(-2.3,-2.4,-2.3,-2.2).curveTo(-2.3,-2.2,-2.3,-2.1).curveTo(-2.3,-2.1,-2.2,-2.1).curveTo(-2.2,-2,-2.1,-2).curveTo(-2.1,-2,-2,-1.9).lineTo(4.2,0.4).curveTo(5.6,1,5.4,2.6).lineTo(5.1,3.6).curveTo(4.4,4.5,3,4.5).lineTo(-4.7,4.5).lineTo(-4.8,4.5).curveTo(-5.2,4.5,-5.2,4).closePath();
	this.shape_5.setTransform(-404.8,90.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DF1421").beginStroke().moveTo(1.1,4.5).lineTo(-1,4.5).curveTo(-1.3,4.5,-1.4,4.3).lineTo(-1.5,-4.1).curveTo(-1.5,-4.4,-1.2,-4.5).lineTo(-0.9,-4.5).lineTo(1.1,-4.5).lineTo(1.3,-4.5).curveTo(1.3,-4.4,1.4,-4.4).curveTo(1.4,-4.3,1.4,-4.3).curveTo(1.5,-4.2,1.5,-4.2).curveTo(1.5,-4.1,1.5,-4).lineTo(1.5,4.1).curveTo(1.5,4.5,1.1,4.5).lineTo(1.1,4.5).closePath();
	this.shape_6.setTransform(-413.4,90.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-18.4,18.4).curveTo(-26,10.8,-26,0).curveTo(-26,-10.7,-18.4,-18.4).curveTo(-10.7,-26,0,-26).curveTo(10.8,-26,18.4,-18.4).curveTo(26,-10.7,26,0).curveTo(26,10.8,18.4,18.4).curveTo(10.8,26,0,26).curveTo(-10.7,26,-18.4,18.4).closePath();
	this.shape_7.setTransform(-362.3,131.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-19.2,19.2).curveTo(-27.2,11.2,-27.2,0).curveTo(-27.2,-11.2,-19.2,-19.2).curveTo(-11.2,-27.1,-0,-27.1).curveTo(11.2,-27.1,19.2,-19.2).curveTo(27.2,-11.2,27.2,0).curveTo(27.2,11.2,19.2,19.2).curveTo(11.2,27.1,-0,27.1).curveTo(-11.2,27.1,-19.2,19.2).closePath();
	this.shape_8.setTransform(-125.8,134);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#999999").beginStroke().moveTo(-22.6,1.9).curveTo(-22.4,1.1,-21.5,0).lineTo(-20.7,-0.9).lineTo(-20.5,-1.9).curveTo(-20,-2.9,-18.7,-2.9).curveTo(-9.4,-3.1,3,-4.6).curveTo(20.9,-6.7,22.6,-6.8).lineTo(22.7,-4).lineTo(20,-4.2).curveTo(17.9,-4.4,16.3,-4.3).lineTo(-3.9,-1.8).lineTo(-18.6,-0.5).curveTo(-19.9,0.6,-20.3,1.1).curveTo(-20.6,1.6,-20.8,3.2).lineTo(-20.9,5.9).lineTo(-22.6,6.8).curveTo(-22.8,3.1,-22.6,1.9).closePath();
	this.shape_9.setTransform(-394.4,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#999999").beginStroke().moveTo(-3.6,-1.6).lineTo(3.4,-1.9).lineTo(3.6,1.6).lineTo(-3.5,1.9).closePath();
	this.shape_10.setTransform(-368.2,8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#999999").beginStroke().moveTo(-1,13.8).lineTo(-1.3,13.6).lineTo(-1.3,10.8).curveTo(-1.3,10.4,-1,10).curveTo(-0.7,9.6,-0.7,9.3).lineTo(-1.3,-13.4).curveTo(-1.4,-14.2,-0.1,-13.9).curveTo(0.6,-13.7,0.6,-13.2).lineTo(1.3,9.4).curveTo(1.3,10,0.7,10.7).lineTo(0.7,13.5).curveTo(0.6,13.9,-0.2,13.9).curveTo(-0.6,13.9,-1,13.8).closePath();
	this.shape_11.setTransform(-414.9,59.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#999999").beginStroke().moveTo(-2,-0.1).curveTo(-0.3,-1.3,3.1,-1.2).lineTo(-3.1,1.2).curveTo(-2.9,0.6,-2,-0.1).closePath();
	this.shape_12.setTransform(-414.8,81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#999999").beginStroke().moveTo(-2.9,0.4).lineTo(-3.8,0).lineTo(3.8,-0.5).curveTo(2.9,0.3,0,0.5).lineTo(-1.1,0.6).curveTo(-2.2,0.5,-2.9,0.4).closePath();
	this.shape_13.setTransform(-415,74.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#999999").beginStroke().moveTo(-3.1,6.7).curveTo(-3.8,6.4,-3.9,5.5).lineTo(-4.2,-3.3).curveTo(-4.2,-4.2,-3.6,-4.6).lineTo(-3.1,-4.9).curveTo(1.8,-6.4,2.4,-6.7).curveTo(3,-6.9,3.4,-6.7).curveTo(3.8,-6.6,3.8,-6).lineTo(4.2,2.2).curveTo(4.2,4,3.2,4.5).curveTo(2.1,5.2,-1.3,6.5).curveTo(-2,6.8,-2.6,6.8).lineTo(-3.1,6.7).closePath();
	this.shape_14.setTransform(-415,76.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,14).lineTo(-1.6,-14).curveTo(-0.8,-14,-0.4,-13.6).curveTo(0.5,-12.9,0.8,-10.8).curveTo(1.4,-6.9,1.5,1.1).curveTo(1.6,4.8,1.1,10.8).curveTo(1,11.9,0.4,12.9).curveTo(-0.3,14,-1.2,14).lineTo(-1.3,14).closePath();
	this.shape_15.setTransform(-410.7,33.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#999999").beginStroke().moveTo(3.5,14.4).lineTo(-2.1,13.7).curveTo(-3.6,13.6,-4.4,13).curveTo(-5.7,12.2,-5.7,10.3).curveTo(-6.4,-7.9,-6.3,-9).curveTo(-6,-10.7,-5.9,-11.1).curveTo(-5.3,-12.4,-3.3,-13.1).lineTo(-0.7,-14).lineTo(2.9,-14.4).curveTo(3.7,-14.4,4.2,-14).curveTo(5.3,-13.3,5.6,-11.1).curveTo(6.1,-7.5,6.3,1.1).curveTo(6.4,5.1,5.9,11.1).curveTo(5.7,12.3,5.2,13.2).curveTo(4.5,14.4,3.5,14.4).lineTo(3.5,14.4).closePath();
	this.shape_16.setTransform(-412,33.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill().beginStroke("#777777").setStrokeStyle(0.3,1,1).moveTo(35.1,43.8).lineTo(35.3,39.6).lineTo(34.9,38.3).curveTo(34,-25.8,33.3,-37.3).curveTo(33.2,-40.1,31.3,-41.8).curveTo(29.6,-43.3,27.1,-43.6).curveTo(24.9,-43.9,16.7,-43.7).curveTo(10.1,-43.5,3.6,-43.2).curveTo(-1.1,-43,-20.1,-41.4).curveTo(-27.2,-40.7,-30.8,-38).lineTo(-33.1,-35.3).curveTo(-33.6,-34.6,-34.5,-32.3).curveTo(-34.9,-31.2,-35.3,-30.2);
	this.shape_17.setTransform(-379.3,50);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill().beginStroke("#A5A5A5").setStrokeStyle(0.3,1,1).moveTo(-1,45.9).curveTo(-2.7,15.8,-2.9,0.6).curveTo(-3.1,-10.9,-1.5,-23.4).curveTo(0,-36.1,2.9,-45.9);
	this.shape_18.setTransform(-421,76.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#999999").beginStroke().moveTo(-2.4,5.7).curveTo(-3,5.4,-2.8,4.8).curveTo(-3.5,4.5,-3.2,3.5).lineTo(-2,-1.8).curveTo(-1.8,-2.6,-1.4,-2.9).lineTo(1.5,-6.2).lineTo(2.1,-6).lineTo(3.3,-6.2).lineTo(2.7,-3.7).lineTo(1.6,-4.6).lineTo(-0.5,-2.1).lineTo(-0.8,-1.2).lineTo(-0.7,3.2).lineTo(-1.1,4.2).lineTo(-0.4,4.3).lineTo(-0.4,4.6).curveTo(-0.4,5.1,-0.5,5.4).curveTo(-0.7,5.9,-1.3,6.1).closePath();
	this.shape_19.setTransform(-433.4,59.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#D7D7D7").beginStroke().moveTo(-1,-3.9).curveTo(0.5,-8.8,3.6,-17.6).lineTo(6.4,-25.5).curveTo(9.2,-25,7.8,-20.6).lineTo(4.7,-10.7).curveTo(2.1,-2.1,1,1.8).curveTo(-0.1,5.7,-1.7,13).lineTo(-3.4,20.3).curveTo(-3.7,21.3,-5.4,22.9).lineTo(-8.2,25.5).curveTo(-3.3,3.9,-1,-3.9).closePath();
	this.shape_20.setTransform(-423.7,35.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FEEBAB").beginStroke().moveTo(0.4,14.5).curveTo(-2.8,13.3,-2.9,10.2).lineTo(-3.3,-0).lineTo(-3.5,-7.2).curveTo(-3.5,-10.3,-2.4,-12).curveTo(-1.6,-13.4,0.4,-14.6).curveTo(2,-15.6,2.6,-14.1).curveTo(3,-13.3,3,-11.9).lineTo(3.5,15).lineTo(3.3,15).curveTo(1.9,15,0.4,14.5).closePath();
	this.shape_21.setTransform(-433.2,96.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.5).curveTo(-3.8,0.6,-4.8,-1.8).lineTo(4.8,1.8).lineTo(4,1.8).curveTo(2.3,1.8,0.6,1.5).closePath();
	this.shape_22.setTransform(-432.7,115.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#F4F4F4").beginStroke().moveTo(0.6,1.3).curveTo(-3.7,0.4,-4.8,-1.7).lineTo(4.8,1.7).curveTo(2.8,1.7,0.6,1.3).closePath();
	this.shape_23.setTransform(-431.7,126.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-5.6,-0.6).lineTo(5.6,0.2).curveTo(4.4,0.5,2.4,0.6).lineTo(1.5,0.6).curveTo(-2.1,0.6,-5.6,-0.6).closePath();
	this.shape_24.setTransform(-428,130.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-0.5,-1.6).lineTo(-0.8,-8.4).lineTo(0.7,8.4).curveTo(-0.1,5.6,-0.5,-1.6).closePath();
	this.shape_25.setTransform(-427.1,122.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-4.3,-6.9).curveTo(-3.3,-6.6,-1.5,-6.5).curveTo(0.6,-6.3,4.6,-6.6).lineTo(5.2,-6.5).curveTo(5.9,-6.3,6,-5.2).lineTo(6.7,9.7).closePath().moveTo(-4.4,-6.9).curveTo(-6.1,-7.4,-6.7,-8.5).lineTo(-5.8,-9.1).curveTo(-4.8,-9.7,-4.5,-9.7).lineTo(-4.5,-7.2).lineTo(-4.3,-6.9).lineTo(-4.4,-6.9).closePath();
	this.shape_26.setTransform(-428.7,120.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#F7BF94").beginStroke().moveTo(1,4.5).lineTo(-0.7,3.7).curveTo(-1.3,3.1,-1.5,1.9).curveTo(-2,-1,-2,-4.6).lineTo(-1.4,-3.9).curveTo(-0.6,-3.2,-0,-2.9).curveTo(0.9,-2.5,1.1,-1.6).lineTo(1.9,3.3).curveTo(2.1,4.6,1.5,4.6).lineTo(1,4.5).closePath();
	this.shape_27.setTransform(-435.1,121);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#999999").beginStroke().moveTo(-1.3,6.5).lineTo(-1.2,6.4).curveTo(-0.7,2.9,-0.7,0.2).curveTo(-0.7,-1.6,-1,-4.3).lineTo(-1.4,-6.5).lineTo(1,-6.5).lineTo(1.2,-4.3).lineTo(1.3,0.2).curveTo(1.3,3.2,1.1,6.5).closePath();
	this.shape_28.setTransform(-353.2,77.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-3.2,8.2).curveTo(-3.9,8.2,-4.5,7.7).curveTo(-5,7.1,-5,6.3).curveTo(-5.5,2.2,-5.3,-2.5).lineTo(-5,-6.3).curveTo(-5,-7.1,-4.5,-7.7).curveTo(-3.9,-8.2,-3.2,-8.2).curveTo(-2,-8.4,0.1,-8.4).curveTo(2.3,-8.4,3.2,-8.2).curveTo(4,-8.2,4.5,-7.7).curveTo(5.1,-7.1,5.1,-6.3).lineTo(5.3,-1.6).curveTo(5.4,3.7,5.1,6.3).curveTo(5.1,7.1,4.5,7.7).curveTo(4,8.2,3.2,8.2).curveTo(2.3,8.4,0.1,8.4).curveTo(-2,8.4,-3.2,8.2).closePath();
	this.shape_29.setTransform(-353.3,77.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-47.1,64.9).curveTo(-49.3,64.1,-50.2,62).curveTo(-50.6,61.8,-51.2,61.2).curveTo(-52.2,60.2,-52.7,58.5).curveTo(-53.4,56.4,-53.7,53.3).lineTo(-54.2,48).curveTo(-54.5,44.9,-53.6,42.1).lineTo(-52.6,39.9).curveTo(-53.5,23.7,-53.5,18.3).curveTo(-53.5,14.9,-53,6.7).lineTo(-52.5,-0.9).lineTo(-48.3,-7.9).curveTo(-47.3,-12.9,-43.8,-27.2).curveTo(-41.5,-36.4,-37.3,-48.8).curveTo(-34.1,-58.2,-33.1,-60.4).curveTo(-32.7,-61.4,-32.1,-61.8).curveTo(-31.5,-62.2,-29.8,-62.4).curveTo(-22.6,-63.3,5.2,-64.5).lineTo(31.6,-65.5).curveTo(34.5,-65.6,35.9,-65.3).curveTo(38.2,-64.9,40.1,-63.5).curveTo(42.1,-62,45.2,-59.2).curveTo(46.4,-58.1,47.7,-56.1).curveTo(49,-54.2,49.7,-52.6).curveTo(51,-50,52.3,-44.6).curveTo(54.2,-36.9,54.2,-29.7).lineTo(54.2,-12.7).curveTo(54.2,-9.9,53.5,-8.7).curveTo(52.6,-7,51.7,-4.7).curveTo(50.2,-1.3,50.2,-0.1).lineTo(50.2,6.5).curveTo(50.2,8,49.7,8.9).curveTo(49.2,9.7,49.2,10.5).lineTo(49.2,25.4).lineTo(36.2,26).lineTo(36.2,28.3).curveTo(24.9,28.6,20,29.2).curveTo(13.2,30.1,10.3,31.5).curveTo(3.5,34.6,-1.5,43.2).curveTo(-3.8,47.1,-6.9,54).curveTo(-8.2,55.9,-9.3,55.9).lineTo(-17.4,55.9).lineTo(-18.9,55.4).lineTo(-21.6,55.9).lineTo(-38.8,55.9).lineTo(-38.8,61.9).curveTo(-38.8,63.2,-39.7,64.3).curveTo(-40.8,65.5,-42.8,65.5).curveTo(-45.4,65.5,-47.1,64.9).closePath().moveTo(9.6,-55.4).curveTo(-9.9,-54.6,-16.2,-53.6).curveTo(-21.6,-52.8,-23.2,-51.9).curveTo(-24.4,-51.1,-25.8,-48.5).curveTo(-26.8,-46.5,-29,-36.4).curveTo(-31.3,-26.4,-31.7,-22.1).curveTo(-32.1,-18.2,-32.4,-10.8).curveTo(-32.7,-4,-32.7,-1.4).lineTo(-32.6,-0.4).lineTo(-31.4,-0.7).lineTo(9.1,-16.4).curveTo(13.8,-18.1,26.4,-20.3).lineTo(28.9,-20.7).curveTo(30.1,-21,30.4,-21.4).curveTo(30.6,-21.7,30.6,-22.3).lineTo(31.3,-51.8).curveTo(31.3,-54.2,30.5,-55).curveTo(29.8,-55.8,27.8,-56).lineTo(9.6,-55.4).closePath();
	this.shape_30.setTransform(-383.4,68.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-28.4,5.8).lineTo(-20.2,-5.2).lineTo(18.3,-6.1).lineTo(28.3,5.5).lineTo(24.3,5.5).lineTo(13.9,-4.5).lineTo(-14.9,-4.2).lineTo(-24,6.1).closePath();
	this.shape_31.setTransform(-125.2,101.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-0.9,1.6).curveTo(-1.5,1.6,-2,1.1).curveTo(-2.5,0.6,-2.5,-0).curveTo(-2.5,-0.6,-2,-1.2).curveTo(-1.5,-1.6,-0.9,-1.6).lineTo(0.9,-1.6).curveTo(1.6,-1.6,2,-1.2).curveTo(2.5,-0.6,2.5,-0).curveTo(2.5,0.6,2,1.1).curveTo(1.5,1.6,0.9,1.6).closePath();
	this.shape_32.setTransform(-187.2,123.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,4.2).lineTo(-0.4,-4.2).lineTo(0.4,-4.2).lineTo(0.4,4.2).closePath();
	this.shape_33.setTransform(-190.3,117.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,4.1).lineTo(-2.8,-4.1).lineTo(2.7,-4.1).lineTo(2.7,4.1).closePath();
	this.shape_34.setTransform(-199.2,116.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.7,4.1).lineTo(-2.7,-4.1).lineTo(2.7,-4.1).lineTo(2.7,4.1).closePath();
	this.shape_35.setTransform(-210.2,116.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#999999").beginStroke().moveTo(-10.6,5.6).lineTo(-10.6,-5.6).lineTo(10.6,-5.6).lineTo(10.6,5.6).closePath();
	this.shape_36.setTransform(-204.9,118.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-13,7.8).curveTo(-13.4,7.4,-13.4,6.9).lineTo(-13.4,3.8).curveTo(-13.6,3.4,-13.6,3).lineTo(-13.6,-6.5).curveTo(-13.6,-7.2,-13.1,-7.7).curveTo(-12.8,-8.1,-12.2,-8.1).lineTo(12.1,-8.1).curveTo(12.7,-8.1,13.2,-7.7).curveTo(13.6,-7.2,13.6,-6.5).lineTo(13.6,3).curveTo(13.6,3.6,13.2,4.1).curveTo(12.7,4.6,12.1,4.6).lineTo(-10.2,4.6).lineTo(-11,5).lineTo(-11,6.9).curveTo(-11,7.4,-11.4,7.8).curveTo(-11.7,8.1,-12.2,8.1).curveTo(-12.7,8.1,-13,7.8).closePath();
	this.shape_37.setTransform(-204.7,120.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-0.8,7.8).curveTo(-1.2,7.4,-1.2,6.9).lineTo(-1.2,-6.9).curveTo(-1.2,-7.4,-0.8,-7.8).curveTo(-0.5,-8.1,0,-8.1).curveTo(0.5,-8.1,0.8,-7.8).curveTo(1.2,-7.4,1.2,-6.9).lineTo(1.2,6.9).curveTo(1.2,7.4,0.8,7.8).curveTo(0.5,8.1,0,8.1).curveTo(-0.5,8.1,-0.8,7.8).closePath();
	this.shape_38.setTransform(-220.2,120.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#969696").beginStroke().moveTo(1.3,5.3).curveTo(-0.4,5.2,-0.8,4.9).lineTo(-6.6,-1.3).lineTo(-2.9,-5.3).lineTo(1.1,-2.1).curveTo(5.2,1.2,5.8,1.6).curveTo(7,2.4,6.5,3.4).curveTo(6.1,4.3,4.7,4.9).curveTo(3.6,5.3,2.1,5.3).lineTo(1.3,5.3).closePath();
	this.shape_39.setTransform(-19,115.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.3,0,0,4).moveTo(4.5,-8.2).lineTo(4.5,8.2).lineTo(-4.4,8.2).lineTo(-4.4,-8.2).closePath();
	this.shape_40.setTransform(-22.9,122.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,8.2).lineTo(-4.4,-8.2).lineTo(4.5,-8.2).lineTo(4.5,8.2).closePath();
	this.shape_41.setTransform(-22.9,122.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#969696").beginStroke().moveTo(-7.4,26.8).curveTo(-8.4,24.4,-7.4,23.9).curveTo(-3,21.9,-1,19.9).curveTo(1.7,17,1.9,12.6).curveTo(2.1,7.9,1.8,-3.8).curveTo(1.6,-15.4,1.4,-18.3).lineTo(0.9,-22).curveTo(0.7,-22.9,-0.2,-23.9).lineTo(-1.9,-25.8).curveTo(-2.5,-26.7,-2,-27.4).curveTo(-1,-28.8,0.8,-28.7).curveTo(2.2,-28.6,3.7,-27.7).curveTo(5.3,-26.7,6.3,-25).curveTo(7.7,-22.9,7.7,-20.1).lineTo(7.9,12.5).curveTo(7.8,19.1,6,22.3).curveTo(3.5,26.4,-3.6,28.5).curveTo(-4.3,28.7,-4.8,28.7).curveTo(-6.6,28.7,-7.4,26.8).closePath();
	this.shape_42.setTransform(-10,80.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#DBD9D9").beginStroke().moveTo(-7.7,13.4).curveTo(-8.4,11.1,-4.9,10.7).curveTo(-1.6,10.4,0.7,8.7).curveTo(3.2,6.9,3.2,4.2).lineTo(3.4,-7.8).curveTo(3.4,-9.9,2.2,-10.3).lineTo(-0.4,-10.6).curveTo(-2,-10.8,-1.5,-13.1).curveTo(-1,-15.5,1.7,-15.4).curveTo(5.1,-15.4,5.6,-15.1).curveTo(7.4,-14.2,7.6,-10.1).curveTo(7.8,-5.9,7.8,5.8).curveTo(7.8,10.4,4.3,13).curveTo(1.3,15.3,-3.2,15.4).lineTo(-3.8,15.4).curveTo(-7.2,15.4,-7.7,13.4).closePath();
	this.shape_43.setTransform(-10.1,109.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-2.3,1.9).curveTo(-3,1.9,-3.5,1.5).curveTo(-3.9,1,-3.9,0.3).lineTo(-3.9,-0.3).curveTo(-3.9,-0.9,-3.5,-1.5).curveTo(-3,-1.9,-2.3,-1.9).lineTo(2.3,-1.9).curveTo(3,-1.9,3.4,-1.5).curveTo(3.9,-0.9,3.9,-0.3).lineTo(3.9,0.3).curveTo(3.9,0.9,3.4,1.5).curveTo(3,1.9,2.3,1.9).closePath();
	this.shape_44.setTransform(-307.8,93.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-4.9,3.4).curveTo(-5.5,3.4,-6,2.9).curveTo(-6.5,2.5,-6.5,1.8).lineTo(-6.5,-1.8).curveTo(-6.5,-2.4,-6,-2.9).curveTo(-5.5,-3.4,-4.9,-3.4).lineTo(4.9,-3.4).curveTo(5.5,-3.4,6,-2.9).curveTo(6.5,-2.4,6.5,-1.8).lineTo(6,1.8).curveTo(6,2.4,5.5,2.9).curveTo(5,3.4,4.3,3.4).closePath();
	this.shape_45.setTransform(-304.1,100.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#969696").beginStroke().moveTo(-16.2,6.4).curveTo(-17,5.7,-17,3.6).lineTo(-16.8,-0.6).lineTo(-16.6,-4.2).curveTo(-16.6,-5.8,-16.1,-6.4).curveTo(-15.4,-7.1,-13.7,-7.1).lineTo(13.6,-7.1).curveTo(16,-7.1,16.7,-5.5).curveTo(17.4,-3.9,16,-2.5).curveTo(12.1,1.5,9.9,3.4).curveTo(6,6.9,3.4,6.9).lineTo(-13.4,7.1).curveTo(-15.5,7.1,-16.2,6.4).closePath();
	this.shape_46.setTransform(-304.7,99.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-151.7,-10.4).lineTo(151.2,-15.4).lineTo(151.7,10.5).lineTo(-151.2,15.4).closePath();
	this.shape_47.setTransform(-164.2,75.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#FFFFFF").beginStroke().moveTo(156.2,3.2).lineTo(152.9,-1.6).lineTo(153.1,4.4).curveTo(152.9,6.5,152,7.2).curveTo(151.7,7.5,150.6,7.5).curveTo(149.5,7.5,149.1,7.7).lineTo(148.1,8.7).curveTo(147.5,9.3,146.9,9.3).curveTo(146.4,9.3,145.8,6.9).curveTo(145.2,4.5,144.4,4.5).lineTo(-154.1,9.3).curveTo(-156.2,9.3,-157.6,7.1).curveTo(-158.6,5.4,-158.6,3.5).curveTo(-158.8,0.3,-158.8,-3).curveTo(-160.7,-7.5,-160.7,-10.6).curveTo(-160.7,-12.6,-159.5,-15.2).lineTo(-158.4,-17.3).curveTo(-158.4,-21.5,-157.3,-23.2).curveTo(-156.2,-25,-153.2,-25).lineTo(152.2,-29.8).lineTo(152.8,-6.8).lineTo(159,5.2).lineTo(160.1,5.8).lineTo(160.7,27.9).lineTo(157.3,29.8).closePath();
	this.shape_48.setTransform(-160.7,86.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#999999").beginStroke().moveTo(-0,20.3).curveTo(-2.7,-16.7,-2.6,-18.9).curveTo(-2.3,-22.8,-0.7,-22.7).curveTo(1,-22.5,1.5,-21.5).curveTo(1.6,-21.3,2.1,-18.6).curveTo(2.5,-16.6,2.3,-11.7).curveTo(2.2,-6.7,1.6,-5.7).curveTo(0.7,-4.2,0.5,-2.4).curveTo(0.3,-1,0.4,2).curveTo(0.6,4.4,1.2,6).lineTo(2.3,8.6).curveTo(2.8,9.7,2.6,14.9).lineTo(2.3,21.1).curveTo(2.3,22.5,1.2,22.6).lineTo(1.1,22.7).curveTo(0.1,22.7,-0,20.3).closePath();
	this.shape_49.setTransform(-324.2,83.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#C6C6C6").beginStroke().moveTo(-0.5,48.9).curveTo(-1.1,48.4,-1.2,47.7).lineTo(-4.9,-45.6).curveTo(-3.9,-49.3,-3.1,-49.3).lineTo(-0.5,-49.4).curveTo(0.2,-49.4,0.7,-47.9).curveTo(1.3,-46.6,1.3,-45.7).lineTo(4.9,47.6).curveTo(4.8,48.3,4.4,48.7).curveTo(4,49.2,3.3,49.2).lineTo(0.6,49.3).lineTo(0.5,49.4).curveTo(-0,49.4,-0.5,48.9).closePath();
	this.shape_50.setTransform(-322.1,49.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#F4F4F4").beginStroke().moveTo(-1.4,21).lineTo(-2.5,-14.3).lineTo(1.2,-21.7).lineTo(1.9,-8.5).lineTo(2.5,21.6).closePath();
	this.shape_51.setTransform(-5.6,50.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#969696").beginStroke().moveTo(-3.2,4).curveTo(-2.5,-6.4,-0.2,-6.4).curveTo(1.1,-6.4,2.4,-2.3).curveTo(3.6,1.8,3,3.3).lineTo(2.3,5.5).curveTo(1.9,6.2,0.6,6.3).lineTo(-0.5,6.4).curveTo(-3.3,6.4,-3.2,4).closePath();
	this.shape_52.setTransform(-327.6,26.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#757575").beginStroke().moveTo(-1.2,15.8).curveTo(-1.7,15.4,-1.7,14.8).lineTo(-1.7,-14.8).curveTo(-1.7,-15.3,-1.2,-15.7).curveTo(-0.7,-16.1,0,-16.2).curveTo(0.7,-16.1,1.2,-15.7).curveTo(1.7,-15.3,1.7,-14.8).lineTo(1.7,14.8).curveTo(1.7,15.4,1.2,15.8).curveTo(0.7,16.1,0,16.1).curveTo(-0.7,16.1,-1.2,15.8).closePath();
	this.shape_53.setTransform(-326.6,47.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#757575").beginStroke().moveTo(-1.2,1.7).lineTo(-0.9,-1.7).lineTo(-0.8,1).lineTo(1.2,1.2).lineTo(1.2,1.7).closePath();
	this.shape_54.setTransform(-70.4,110.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#757575").beginStroke().moveTo(61.7,44.9).curveTo(24.9,41,24.8,40.8).lineTo(21.9,42.7).curveTo(10.4,43.3,-4.8,43.4).lineTo(-19.1,43.3).curveTo(-20.1,43.3,-20,38.9).curveTo(-19.8,34.5,-22.2,34.5).lineTo(-54.2,33.9).lineTo(-56.1,37.2).lineTo(-63,36.1).lineTo(-66.7,42.1).lineTo(-78,43.3).curveTo(-79.5,41.5,-81.4,41.4).curveTo(-82.6,41.4,-84.4,42.2).lineTo(-86.2,43).curveTo(-87.2,42.9,-95.3,43.6).lineTo(-122.3,45.3).lineTo(-179.3,40.2).lineTo(-195.2,38).lineTo(-204.4,27.9).lineTo(-195.7,-13.1).lineTo(-158,-17.9).lineTo(-129.1,-45.5).lineTo(-118.3,-45.5).lineTo(-117.4,-1.5).lineTo(194.4,-5.1).lineTo(204.2,-0.2).lineTo(204.4,17.6).lineTo(196.9,28).lineTo(183,28).lineTo(176.9,18.8).lineTo(173.6,18.1).lineTo(173.2,20).lineTo(176.1,21.1).lineTo(176.1,33).curveTo(176.1,34.9,170.6,34.1).curveTo(165,33,164.5,33).curveTo(160.4,32.8,155,33.2).lineTo(149.1,33.8).lineTo(115.3,35.8).curveTo(108.6,39,99.5,41.7).curveTo(86.6,45.5,72.8,45.5).curveTo(67.3,45.5,61.7,44.9).closePath().moveTo(24.2,27.5).lineTo(24.4,31).lineTo(56.9,35.7).lineTo(57.8,33.1).lineTo(35.2,28.9).lineTo(33.4,26.3).closePath().moveTo(-85.5,21.7).curveTo(-85.8,22.1,-85.8,22.6).lineTo(-85.8,32.2).curveTo(-85.8,32.7,-85.5,33.1).curveTo(-85.1,33.4,-84.6,33.4).lineTo(-63,33.4).curveTo(-62.5,33.4,-62.1,33.1).curveTo(-61.8,32.7,-61.8,32.2).lineTo(-61.8,22.6).curveTo(-61.8,22.1,-62.1,21.7).curveTo(-62.5,21.4,-63,21.4).lineTo(-84.6,21.4).curveTo(-85.1,21.4,-85.5,21.7).closePath().moveTo(122.9,27.3).curveTo(118.9,30,118.4,30.9).lineTo(150.8,27.8).lineTo(149.9,21.4).lineTo(138.2,21.8).curveTo(137.6,21.8,136.5,24).lineTo(135.6,26.1).lineTo(128.5,26.3).lineTo(126.9,24.9).lineTo(122.9,27.3).closePath().moveTo(154.6,21.4).curveTo(154.1,21.9,154.1,22.5).lineTo(153.9,26.1).curveTo(153.9,26.8,154.4,27.2).curveTo(154.9,27.7,155.5,27.7).lineTo(163.1,27.7).curveTo(163.7,27.7,164.2,27.2).curveTo(164.7,26.8,164.7,26.1).lineTo(164.9,22.5).curveTo(164.9,21.9,164.5,21.4).curveTo(164,20.9,163.3,20.9).lineTo(155.7,20.9).curveTo(155.1,20.9,154.6,21.4).closePath().moveTo(132,16.6).lineTo(132.5,17.1).curveTo(133,17.6,133,18).lineTo(132.8,19.9).lineTo(132.5,25.1).curveTo(135.9,25.1,136.6,21.7).lineTo(137.2,21.7).lineTo(136.9,15.4).lineTo(134.8,15.3).lineTo(134.5,18.4).lineTo(134.4,15.4).lineTo(131.3,15.4).closePath().moveTo(128.5,20.4).lineTo(129.1,22.8).lineTo(131,22.7).lineTo(129.9,20).closePath().moveTo(-85.7,18.6).lineTo(-85.7,19.6).curveTo(-85.7,19.8,-83.6,19.8).lineTo(-64.2,19.8).curveTo(-62.1,19.8,-62.1,19.6).lineTo(-62.1,18.6).curveTo(-62.1,18.4,-64.2,18.4).lineTo(-83.6,18.4).curveTo(-85.7,18.4,-85.7,18.6).closePath();
	this.shape_55.setTransform(-205.8,90.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("rgba(0,0,0,0.498)").beginStroke().moveTo(-131.8,8).curveTo(-186.4,4.7,-186.3,0).curveTo(-186.4,-4.7,-131.8,-8).curveTo(-77.2,-11.3,-0,-11.3).curveTo(77.2,-11.3,131.7,-8).curveTo(186.3,-4.7,186.4,0).curveTo(186.3,4.7,131.7,8).curveTo(77.2,11.3,-0,11.3).curveTo(-77.2,11.3,-131.8,8).closePath();
	this.shape_56.setTransform(-219.2,158.2,1.113,1.531);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(1));

	// Capa 3
	this.instance = new lib.platconductor();
	this.instance.parent = this;
	this.instance.setTransform(-379.4,47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-437.6,0,437.7,175.5);


// stage content:
(lib.plataforma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		/* Detener en este fotograma
		La línea de tiempo de Flash se detendrá/pausará en el fotograma en el que inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// llanta
	this.instance = new lib.llanta();
	this.instance.parent = this;
	this.instance.setTransform(485.5,395.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({rotation:-720,x:335.5},47).to({rotation:-1080,x:-155.5},12).wait(1));

	// llanta
	this.instance_1 = new lib.llanta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.5,392.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({rotation:-720,x:99.5},47).to({rotation:-1080,x:-391.5},12).wait(1));

	// camion
	this.instance_2 = new lib.platcamionplataforma();
	this.instance_2.parent = this;
	this.instance_2.setTransform(392.3,341.9,1,1,0,0,0,-218.8,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({x:242.3},47).to({x:-247.7},12).wait(1));

	// FlashAICB
	this.instance_3 = new lib.platlenador();
	this.instance_3.parent = this;
	this.instance_3.setTransform(830.6,326.5,0.252,0.252,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({x:1580.6},59).wait(1));

	// tronco5
	this.instance_4 = new lib.plattronco5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(451.5,310.4,1,1,0,0,0,-148.5,14.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({alpha:1},10).wait(30).to({x:301.5},47).to({x:-188.5},12).wait(1));

	// tronco4
	this.instance_5 = new lib.plattronco4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(449.4,249,1,1,0,0,0,-143.6,16.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({alpha:1},10).wait(25).to({x:299.4},47).to({x:-190.6},12).wait(1));

	// tronco3
	this.instance_6 = new lib.plattronco3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(444.5,293.5,1,1,0,0,0,-148.5,14.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({alpha:1},10).wait(22).to({x:294.5},47).to({x:-195.5},12).wait(1));

	// tronco2
	this.instance_7 = new lib.plattronco2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(450.6,276.7,1,1,0,0,0,-148.5,14.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({alpha:1},10).wait(19).to({x:300.6},47).to({x:-189.4},12).wait(1));

	// ronco1
	this.instance_8 = new lib.plattronco1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(435.4,267.7,1,1,0,0,0,-143.6,16.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).to({alpha:1},10).wait(15).to({x:285.4},47).to({x:-204.6},12).wait(1));

	// bosque4
	this.instance_9 = new lib.platbosque4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(952.2,277.7,1,1,0,0,0,-36.5,87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35).to({alpha:0},9).to({_off:true},1).wait(71));

	// bosuque3
	this.instance_10 = new lib.platbosuque3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(891.8,292.3,1,1,0,0,0,-54.6,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({alpha:0},9).to({_off:true},1).wait(80));

	// bosque2
	this.instance_11 = new lib.platbosque2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(805.1,287.4,1,1,0,0,0,-52,77.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({alpha:0},9).to({_off:true},1).wait(90));

	// bosque1
	this.instance_12 = new lib.platbosque1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(672.8,293.7,1,1,0,0,0,-61.7,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({alpha:0},9).to({_off:true},1).wait(100));

	// bosqur
	this.instance_13 = new lib.platbosque();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-241.9,239.5,1,1,0,0,0,-1291.9,128.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(56).to({x:1291.8},59).wait(1));

	// piso
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape.setTransform(582.3,438.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-15,6).lineTo(-15,-6).lineTo(15,-6).lineTo(15,6).closePath();
	this.shape_1.setTransform(-934,438.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(405.4,6).lineTo(405.4,-6).lineTo(467.8,-6).lineTo(467.8,6).closePath().moveTo(280.7,6).lineTo(280.7,-6).lineTo(343,-6).lineTo(343,6).closePath().moveTo(155.9,6).lineTo(155.9,-6).lineTo(218.3,-6).lineTo(218.3,6).closePath().moveTo(31.2,6).lineTo(31.2,-6).lineTo(93.6,-6).lineTo(93.6,6).closePath().moveTo(-93.5,6).lineTo(-93.5,-6).lineTo(-31.2,-6).lineTo(-31.2,6).closePath().moveTo(-218.3,6).lineTo(-218.3,-6).lineTo(-155.9,-6).lineTo(-155.9,6).closePath().moveTo(-343,6).lineTo(-343,-6).lineTo(-280.7,-6).lineTo(-280.7,6).closePath().moveTo(-467.8,6).lineTo(-467.8,-6).lineTo(-405.4,-6).lineTo(-405.4,6).closePath();
	this.shape_2.setTransform(-388.8,438.5);

	this.instance_14 = new lib.platInterpolación1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(50.5,438.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_14}]},56).to({state:[{t:this.instance_14}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(56).to({_off:false},0).to({x:999.5},59).wait(1));

	// Ambient
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#999999","#7A7A7A","#595959","#3E3E3E","#2C2C2C","#212121","#1D1D1D"],[0,0.125,0.29,0.455,0.627,0.808,1],0,182.6,0,-182.5).beginStroke().moveTo(-524.9,182.6).lineTo(-524.9,-182.6).lineTo(524.9,-182.6).lineTo(524.9,182.6).closePath();
	this.shape_3.setTransform(525,182.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#333333").beginStroke().moveTo(-525,257.5).lineTo(-525,-257.5).lineTo(525,-257.5).lineTo(525,257.5).closePath();
	this.shape_4.setTransform(525,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1008.6,257.5,2583.7,515);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;