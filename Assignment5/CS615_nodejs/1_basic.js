setTimeout(function(){
    console.log('3 seconds have passed');
    }, 3000);
    console.log(__dirname);
    console.log(__filename);
    var time = 0;
    var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed!')
    if (time > 5){ // add this code later
     clearInterval(timer); // (i.e. run code first without the lines
    } // in blue font to see what happens)
    },
    2000);