const repeatString = function(string,num) {
    if(num===0){
        string='';
    }

    if(num<0){
        string='ERROR';
    }

    let adder = string;
    for (i=1;i<num;i++){
        string+=adder;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
