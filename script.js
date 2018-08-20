

const houses = [
     {
        name: "Lannister",
        background: ".lan-red",
        text: "You're a Lannister! Congratulations on being terrible!",
        pic: "assets/lion.svg",
        color: ".lan-gold",
        points: 0-15
    },
   {
        name: "Baratheon",
        background: ".bar-yellow",
        text: "You're a Baratheon!You ain't so bad, but your whole line is dead! Congrats!",
        pic: "assets/stag.svg",
        color: "bar-black",
        points: 16-25
    },
    {
        name: "Targaryen",
        background: "targ-black",
        text: "You're a Targaryen! You're a lizard person and no one can spell your name. Yay!",
        pic: "assets/dragon2.svg",
        color: "targ-red",
        points: 26-35

    },
    {
        name: "Stark",
        background: "stark-green",
        text: "You're a Stark and everybody picks on you! Congrats!",
        pic: "assets/wolf.svg",
        color: "stark-darkgrey",
        points: 36-45

    },
    {
        name: "Greyjoy",
        background: "grey-black",
        text: "You're a Greyjoy! Sadly there's no joy to being a Greyjoy. Good for you!",
        pic: "assets/squid.svg",
        color: "grey-yellow",
        points: 46-56

    }

];

 //smooth scrolling

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});


$(function() {
    

    $('form').on('submit', function(event){

        


        event.preventDefault(); //delete default behavior 

        const answerOne = $('input[name=color]:checked').data('point');
        
        const answerTwo = $('input[name=animal]:checked').data('point');

        const answerThree = $('input[name=winter]:checked').data('point');

        const answerFour = $('input[name=hair]:checked').data('point');

        const answerFive = $('input[name=incest]:checked').data('point');

        const answerSix = $('input[name=music]:checked').data('point');

        const answerSeven = $('input[name=payingBack]:checked').data('point');
        

        const scoreArray = [answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven];

       
        

        const totalScore = scoreArray.reduce(function(total, amount){
            return total + amount
        });

        

        const printToPage = function(family) {
            $('.results-wrapper').empty();
            let header = $('<h1>').text(family.name); // make an h1 element with the house name in it
            let image = $('<img>').attr('src', family.pic);
            let text = $('<p>').text(family.text).addClass(family.color);
            let reTry = `<div class="tryAgain button animated infinite pulse"><p><a href="">Play Again</a></p></div>`;

            $('.your-results').addClass('page');

            $('.results-wrapper').append(header, image, text, reTry);


            $('html, body').animate({
                scrollTop: $('#eigth').offset().top
            });


        }



        if(totalScore <= 15) {
            let result = houses[0]
            printToPage(result);
            

        } else if(totalScore >= 16 && totalScore <= 25) {
            let result = houses[1]
            printToPage(result);

        } else if(totalScore >= 26 && totalScore <= 35) {
            let result = houses[2]
            printToPage(result);

        } else if(totalScore >= 36 && totalScore <= 45) {
            let result = houses[3]
            printToPage(result);

        } else if(totalScore >= 46 && totalScore <= 56) {
            let result = houses[4]
            printToPage(result);

        }


        
    });

   

    



    

    

});



