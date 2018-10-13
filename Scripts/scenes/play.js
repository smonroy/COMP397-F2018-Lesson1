var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        constructor() {
            super();
            this._cloudNum = 3;
            this._clouds = new Array();
            for (let i = 0; i < this._cloudNum; i++) {
                this._clouds[i] = new objects.Clound();
            }
            this.Start();
        }
        Start() {
            managers.Game.currentScene = this;
            this.Main();
        }
        ;
        Update() {
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            managers.Collision.Check(this._player, this._island);
            for (let cloud of this._clouds) {
                cloud.Update();
                managers.Collision.Check(this._player, cloud);
            }
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
        }
        ;
        Main() {
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            this._island = new objects.Island();
            this.addChild(this._island);
            this._player = new objects.Player();
            this.addChild(this._player);
            for (let cloud of this._clouds) {
                this.addChild(cloud);
            }
            this._engineSound = createjs.Sound.play("engineSound");
            this._engineSound.volume = 0.1;
            this._engineSound.loop = 1;
            this._scoreBoard = new managers.ScoreBoard();
        }
        ;
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map