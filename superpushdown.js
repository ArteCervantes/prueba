(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1138,
	height: 2132,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.expandible = function() {
	this.spriteSheet = ss["superpushdown_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondoflash = function() {
	this.spriteSheet = ss["superpushdown_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20150908at110958AM = function() {
	this.spriteSheet = ss["superpushdown_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ScreenShot20150908at111945AM = function() {
	this.spriteSheet = ss["superpushdown_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._super = function() {
	this.spriteSheet = ss["superpushdown_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.roolout = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLFATiMAAAgnDMCWLAAAMAAAAnDg");
	this.shape.setTransform(480.7,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,961.4,250);
p.frameBounds = [rect];


(lib.cerrar = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CERRAR [X]", "12px 'Tw Cen MT'", "#E60D4D");
	this.text.lineHeight = 14;
	this.text.lineWidth = 61;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,65,17.1);
p.frameBounds = [rect];


(lib.boton = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ScreenShot20150908at110958AM();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,960,90);
p.frameBounds = [rect];


// stage content:
(lib.superpushdown = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.boton.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.cerrar.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 8
	this.instance = new lib.roolout();
	this.instance.setTransform(563.3,133,1,1,0,0,0,480.7,125);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// close
	this.cerrar = new lib.cerrar();
	this.cerrar.setTransform(1010.5,22.5,1,1,0,0,0,32.5,8.5);
	this.cerrar._off = true;
	new cjs.ButtonHelper(this.cerrar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cerrar).wait(4).to({_off:false},0).wait(1));

	// superb
	this.instance_1 = new lib.ScreenShot20150908at111945AM();
	this.instance_1.setTransform(84,8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLFATiMAAAgnCMCWLAAAMAAAAnCg");
	this.shape.setTransform(563.3,133);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).wait(1));

	// supera
	this.boton = new lib.boton();
	this.boton.setTransform(567,55.5,1,1,0,0,0,480,45);
	new cjs.ButtonHelper(this.boton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.boton).to({_off:true},1).wait(4));

	// fondo
	this.instance_2 = new lib._super();
	this.instance_2.setTransform(62,2);

	this.instance_3 = new lib.fondoflash();

	this.instance_4 = new lib.expandible();
	this.instance_4.setTransform(43,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{y:0}},{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_3,p:{y:158}},{t:this.instance_4}]},3).wait(1));

	// fondo copy
	this.instance_5 = new lib.fondoflash();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(569,1066,1138,2132);
p.frameBounds = [rect, rect=null, rect, rect, new cjs.Rectangle(569,1001,1138,2355.1)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;