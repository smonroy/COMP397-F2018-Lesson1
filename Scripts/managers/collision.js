var managers;
(function (managers) {
    class Collision {
        static Check(object1, object2) {
            if (!object2.IsColliding) {
                if (util.Vector2.Distance(object1.Position, object2.Position) < (object1.HalfHeight + object2.HalfHeight)) {
                    object2.IsColliding = true;
                    console.log("collision with " + object2.name);
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("yaySound");
                            break;
                        case "cloud":
                            createjs.Sound.play("thunderSound");
                            break;
                    }
                }
            }
        }
    }
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map