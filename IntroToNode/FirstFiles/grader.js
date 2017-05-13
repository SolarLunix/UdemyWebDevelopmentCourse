function average(scores){
    var total = 0;
    
    scores.forEach(function(element) {
        total += element;
    });

    var avg = total/scores.length
    console.log(Math.round(avg));
    
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 89, 94];
average(scores);