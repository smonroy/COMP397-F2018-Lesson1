// IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas;
    let stage;
    let assetManager;
    let assetManifest = [
        { id: "plane", src: "/Assets/Images/plane.png" },
        { id: "cloud", src: "/Assets/Images/cloud.png" },
        { id: "island", src: "/Assets/Images/island.png" },
        { id: "ocean", src: "/Assets/Images/ocean.gif" },
        { id: "engineSound", src: "/Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "/Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "/Assets/audio/yay.ogg" },
    ];
    let player;
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
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }
    // this is the game loop
    function Update() {
        //        helloLabel.rotation -= 5;
        player.Update();
        stage.update();
    }
    function Main() {
        player = new objects.Player();
        stage.addChild(player);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map