if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function() {
        return Variable;
    });
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = Variable;
} else {
    window.Variable = Variable;
}
