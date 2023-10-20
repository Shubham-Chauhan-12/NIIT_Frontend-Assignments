var demo = /** @class */ (function () {
    function demo(name) {
        this.name = "Shubham";
        this.name = name;
    }
    demo.prototype.getName = function () {
        console.log(this.name);
    };
    return demo;
}());
var obj = new demo("S");
obj.getName();
