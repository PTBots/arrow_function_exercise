//video 10.3.2
[ 2, 3 , 6, 78, 99, 104, 23].reduce(function(max, currNum){
    return Math.max(max, currNum)
});

[ 2, 3 , 6, 78, 99, 104, 23].reduce((max, currNum) => {
    return Math.max(max, currNum)
});

