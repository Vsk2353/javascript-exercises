const removeFromArray = function(a, ...b) {
    let array=a.filter(check);

    function check(item){
        return !(b.includes(item));
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
