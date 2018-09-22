// IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas;
    let stage;
    let helloLabel;
    let clickMeButton;
    let assetManager;
    let assetManifest = [
        { id: "clickMeButton", src: "/Assets/Images/clickMeButton.jpeg" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetMnager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);
    }
    function Start() {
        console.log(`%c Game Somewhat 3 Started`, "color:blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }
    // this is the game loop
    function Update() {
        //        helloLabel.rotation -= 5;
        stage.update();
    }
    function Main() {
        helloLabel = new objects.Label("Hello, World!", "60px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickMeButton = new objects.Button("clickMeButton", 320, 360, true);
        clickMeButton.scaleX = 0.2;
        clickMeButton.scaleY = 0.2;
        stage.addChild(clickMeButton);
        clickMeButton.on("click", function () {
            helloLabel.text = "Clicked!";
        });
        clickMeButton.on("mouseover", function () {
            clickMeButton.alpha = 0.7;
        });
        clickMeButton.on("mouseout", function () {
            clickMeButton.alpha = 1.0;
        });
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map