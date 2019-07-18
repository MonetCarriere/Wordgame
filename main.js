var wrong_guesses = 0;
var commonWords= ["fiddlesticks", "lovely", "remote", "gravity", "republic", "condition", 
            "leather", "park", "compact", "mountain", "table", "ivory", "course", 
            "television", "vibrate", "moment", "horse", "resturant", "awake", "clothes",
            "protect", "date", "computer", "van", "distant", "arrange", "rose",
            "painting", "bicycle", "coffee", "clear", "exciting", "mustard", "friend",
            "light", "acomplish", "sloth", "book", "happy", "nerd", "flower", "roast",
            "door", "music", "chair"];
var new_word = commonWords[Math.floor(Math.random() * commonWords.length)];
for (var i = 0; i < new_word.length; i++) {
    let char = new_word.charAt(i);
    if(char != ''){
        $('#guesses').append("<span letter='"+char+"' status='0'>&nbsp;&nbsp;&nbsp;</span>");
    }else{
        $('#guesses').append("&nbsp;&nbsp;&nbsp;");
    }
}
$(document).on('click','[data-letter]',function(){
    


    $(this).attr('disabled','disabled');
    let letter = $(this).attr('data-letter');
    let count = $('span[letter="'+letter+'"]').length;
    if(count === 0){
        wrong_guesses++;
        $("#image_status > img").attr('src','gallo'+wrong_guesses+'.png');
        setTimeout(function(){
            if(wrong_guesses >= 6){
                alert('You lose, sucka.');
                setTimeout(function(){
                    location.reload();
                },3000);
            }
        },500);
    }else{
        let capital = letter.toUpperCase();
        $('span[letter="'+letter+'"]').attr('status','1').html(capital);
        let leftovers = $('span[letter][status="0"]').length;
        setTimeout(function(){
            if(leftovers === 0){
                alert('YOU WIN!!!');
                setTimeout(function(){
                    location.reload();
                },3000);
            }
        },500);
    }
    
    
});



var letters = 'abcdefghijklmnopqrstuvwxyz'

const filtered = commonWords.filter(word => word.length >= 3)
const randomIndex = Math.floor(Math.random() * filtered.length)
const word = filtered[randomIndex].split('')

let under = word.map(n => '_')

//let buttons = letters.split('').map(l => `<button>$(l.toUpperCase())</button>`).join('')
//$(".buttons").html(buttons) 

$(".buttons").on('click', 'button', function(e) {
    const guess = $(this).html()
})

//console.log(word, under)