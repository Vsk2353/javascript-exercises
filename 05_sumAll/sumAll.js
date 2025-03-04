const sumAll = function(a,b) {
    let sum=0;

    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return("ERROR");
    }    
    if(a<0 || b<0){
        return("ERROR");
    }



    if(a<b){
        for(i=a;i<=b;i++){
            sum=sum+i;
        }
        return sum;
    }
    else{
        for(i=b;i<=a;i++){
            sum=sum+i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
