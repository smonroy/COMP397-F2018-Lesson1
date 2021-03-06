var util;
(function (util) {
    class Vector2 extends createjs.Point {
        // private
        // public
        // contructor
        constructor(x = 0, y = 0) {
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
        static Distance(vec1, vec2) {
            return Math.floor(Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2)));
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
        static Add(vec1, vec2) {
            let result = new util.Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        }
        static Subtract(vec1, vec2) {
            let result = new util.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        }
    }
    util.Vector2 = Vector2;
})(util || (util = {}));
//# sourceMappingURL=vector2.js.map