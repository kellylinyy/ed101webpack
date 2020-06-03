function calculate(n) {
    return n * 100 + "unit";
}

var text = "hi webpack";

module.exports = {
    name: text,
    cal: calculate,
};