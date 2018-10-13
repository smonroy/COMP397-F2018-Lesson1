var managers;
(function (managers) {
    class ScoreBoard {
        // contructor
        constructor(livesNum = 5, scoreNum = 0, highScoreNum = 0, isGameOver = false) {
            this._isGameOver = isGameOver;
            this.Start();
            if (!this._isGameOver) {
                this.Lives = livesNum;
                this.Score = scoreNum;
            }
            else {
                this.HighScore = highScoreNum;
            }
        }
        get Score() {
            return this._score;
        }
        set Score(newValue) {
            this._score = newValue;
            this._scoreLabel.text = "Score: " + this._score;
        }
        get Lives() {
            return this._lives;
        }
        set Lives(newValue) {
            this._lives = newValue;
            this._livesLabel.text = "Lives: " + this._lives;
        }
        get HighScore() {
            return this._highScore;
        }
        set HighScore(newValue) {
            this._highScore = newValue;
            this._highScoreLabel.text = "High Score: " + this._highScore;
        }
        // private methods
        // public methods
        Start() {
            if (!this._isGameOver) {
                this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 350, 10, false);
                this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 10, false);
            }
            else {
                this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#FFFF00", 320, 140, true);
            }
            this.Main();
        }
        Main() {
            if (!this._isGameOver) {
                managers.Game.currentScene.addChild(this._scoreLabel);
                managers.Game.currentScene.addChild(this._livesLabel);
            }
            else {
                managers.Game.currentScene.addChild(this._highScoreLabel);
            }
        }
    }
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map