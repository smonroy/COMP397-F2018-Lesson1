module managers {
    export class ScoreBoard {
        private _score:number;
        private _lives:number;
        private _highScore:number;
    
        private _scoreLabel:objects.Label;
        private _livesLabel:objects.Label;
        private _highScoreLabel:objects.Label;

        private _isGameOver:boolean;
        

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this._scoreLabel.text = "Score: " + this._score;
        }

        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            this._livesLabel.text = "Lives: " + this._lives;
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            this._highScoreLabel.text = "High Score: " + this._highScore;

        }

        // contructor
        constructor(livesNum:number = 5, scoreNum:number = 0, highScoreNum:number = 0, isGameOver:boolean = false) {
            this._isGameOver = isGameOver;
            this.Start();
            if(!this._isGameOver) {
                this.Lives = livesNum;
                this.Score = scoreNum;
            } else {
                this.HighScore = highScoreNum;
            }
        }

        // private methods

        // public methods
        public Start():void {
            if(!this._isGameOver) {
                this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 350, 10, false);
                this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 10, false);
            } else {
                this._highScoreLabel = new objects.Label("High Score: 999999", "30px", "Consolas", "#FFFF00", 320, 240, false);
            }
            this.Main();
        }

        public Main():void {
            if(!this._isGameOver) {
                managers.Game.currentScene.addChild(this._scoreLabel);
                managers.Game.currentScene.addChild(this._livesLabel);
            } else {
                managers.Game.currentScene.addChild(this._highScoreLabel);
            }
        }
    }
}