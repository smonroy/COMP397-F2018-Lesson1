module scenes {
    export class Play extends objects.Scene{

        private _player:objects.Player;
        private _ocean:objects.Player;
        private _island:objects.Island;

        private _clouds:objects.Clound[];
        private _cloudNum:number;

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
            this.Main();
        };

        public Update():void {
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            for (const cloud of this._clouds) {
                cloud.Update();
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

            for (const cloud of this._clouds) {
                this.addChild(cloud); 
            }  
        };
    }
}