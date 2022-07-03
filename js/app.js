var quotes = [
    {
        quote :" Be yourself; everyone else is already taken.",
        author : " ― Oscar Wilde"
    } , 
    {
        quote :" Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author : " ― Albert Einstein"
    } , 
    {
        quote :" So many books, so little time.",
        author : " ― Frank Zappa"
    } , 
    {
        quote :"A room without books is like a body without a soul",
        author : " ― Marcus Tullius Cicero"
    } , 
    {
        quote :"You only live once, but if you do it right, once is enough",
        author : " ― Mae West"
    } , 
    {
        quote :"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author : "― Oscar Wilde"
    } , 
    {
        quote :"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author : " ― Mahatma Gandhi"
    } , 

    {
        quote :" “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author : "― Marilyn Monroe"
    } , 

];




function generateRondomQuote() {
    var randomIndex = Math.round(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
 
    document.getElementById("quoteContent").innerHTML = randomQuote.quote;
    document.getElementById("quoteAuthor").innerHTML = randomQuote.author;
}







// function generatePassword (length) {
//     var string = "gaber Sultan Asmaa 12334566789$#@!&*()_+|-";
//     var password ="";
    
//         for(var i = 0 ; i < length ; i++) {
//             var rondomCharcter = Math.round(Math.random() * string.length);
//             password += string[rondomCharcter];
//         };
        
// return password
//     // document.getElementById("passwordRandom").innerHTML = password;
// }

// console.log(generatePassword(5))






