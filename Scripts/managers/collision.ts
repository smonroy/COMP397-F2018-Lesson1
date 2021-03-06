module managers {
    export class Collision {
        public static Check(object1:objects.GameObject, object2:objects.GameObject):void {
            if(!object2.IsColliding) {
                if(util.Vector2.Distance(object1.Position, object2.Position) < (object1.HalfHeight + object2.HalfHeight)) {
                    object2.IsColliding = true;
                    console.log("collision with " + object2.name);

                    switch(object2.name) {
                        case "island":
                        let yaySound = createjs.Sound.play("yaySound");
                        yaySound.volume = 0.1;
                        managers.Game.scoreboard.Score += 100;
                        break
                        case "cloud":
                        let thunderSound = createjs.Sound.play("thunderSound");
                        thunderSound.volume = 0.1;
                        managers.Game.scoreboard.Lives -= 1;
                        if(managers.Game.scoreboard.Lives <= 0) {
                            managers.Game.currentState = config.Scene.OVER;
                            if(managers.Game.scoreboard.HighScore <= managers.Game.scoreboard.Score) {
                                managers.Game.scoreboard.HighScore = managers.Game.scoreboard.Score;
                            }
                        }
                        break;
                    }
                }
            }
        }
    }
}