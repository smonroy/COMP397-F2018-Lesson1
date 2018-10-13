module scenes {
    export class Play extends objects.Scene{

        private _player:objects.Player;
        private _ocean:objects.Player;
        private _island:objects.Island;

        private _clouds:objects.Clound[];
        private _cloudNum:number;
        private _engineSound:createjs.AbstractSoundInstance;
        private _scoreBoard:managers.ScoreBoard;

        constructor() {
            super();

            this._cloudNum = 3;
            this._clouds = new Array<objects.Clound>();

            for (let i = 0; i < this._cloudNum; i++) {
                this._clouds[i] = new objects.Clound();
            }

            this.Start();
        }

        public Start():void {
            managers.Game.currentScene = this;
            
            this.Main();
        };

        public Update():void {
            this._ocean.Update();
            this._player.Update();
            this._island.Update();

            managers.Collision.Check(this._player, this._island);

            for (let cloud of this._clouds) {
                cloud.Update();
                managers.Collision.Check(this._player, cloud);
            }

        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {

        };

        public Main():void {
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
        };
    }
}