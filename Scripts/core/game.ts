// IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    let currentScene:objects.Scene;
    let currentState:config.Scene;

    let assetManifest = [
        {id:"startButton", src:"./Assets/Images/startButton.png"},
        {id:"plane", src:"./Assets/Images/plane.png"},
        {id:"cloud", src:"./Assets/Images/cloud.png"},
        {id:"island", src:"./Assets/Images/island.png"},
        {id:"ocean", src:"./Assets/Images/ocean.gif"},
        {id:"engineSound", src:"./Assets/audio/engine.ogg"},
        {id:"thunderSound", src:"./Assets/audio/thunder.ogg"},
        {id:"yaySound", src:"./Assets/audio/yay.ogg"},
    ];

    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetMnager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);

    }

    function Start():void {
        console.log(`%c Game Somewhat 3 Started`, "color:blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);

        currentState = config.Scene.START;
        managers.Game.currentState = currentState;

        Main();
    }

    // this is the game loop
    function Update():void {
        currentScene.Update();

        if(currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update();
    }

    function Main():void {

        if(currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }

        switch(currentState) {
            case config.Scene.START:
            currentScene = new scenes.Start();
            break;
            case config.Scene.PLAY:
            currentScene = new scenes.Play();
            break;
        }

        stage.addChild(currentScene);
    }

    window.addEventListener("load", Init);
})();