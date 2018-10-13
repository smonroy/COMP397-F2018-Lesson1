module scenes {
    export class Over extends objects.Scene{

        private _welcomeLabel:objects.Label;
        private _ocean:objects.Ocean;
        private _startButton:objects.Button;

        private _scoreBoard:managers.ScoreBoard;

        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            managers.Game.currentScene = this;

            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this._startButton = new objects.Button("restartButton", 320, 360, true);
            this.Main();
        };

        public Update():void {
            this._ocean.Update();
        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {

        };

        public Main():void {
            this.addChild(this._ocean);
    
            this.addChild(this._welcomeLabel);
    
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            });

            this._scoreBoard = new managers.ScoreBoard(0,0,managers.Game.highScore,true);
            managers.Game.scoreboard = this._scoreBoard;
        };
    }
}