module util {
    export class Vector2 extends createjs.Point {
        // private
        // public
        
        // contructor
        constructor(x:number = 0, y:number = 0){
            super(x, y);
        }

        // private M
        
        // public M
        /**
         *
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {number}
         * @memberof Vector2
         */
        public static Distance(vec1:util.Vector2, vec2:util.Vector2):number {
            return Math.floor(Math.sqrt(Math.pow(vec1.x - vec2.x,2) + Math.pow(vec1.y - vec2.y,2)));
        }

        /**
         *
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         * @memberof Vector2
         */
        public static Add(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {
            let result:util.Vector2 = new util.Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        }

        public static Subtract(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {
            let result:util.Vector2 = new util.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        }
    }
}