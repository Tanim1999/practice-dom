const quotesArray = [
    {
      quote: "The only way to do great work is to love what you do.",
      quoter: "Steve Jobs"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      quoter: "Robert Frost"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      quoter: "Nelson Mandela"
    },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
      quoter: "Confucius"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      quoter: "Winston Churchill"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      quoter: "Franklin D. Roosevelt"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      quoter: "Chinese Proverb"
    },
    {
      quote: "Believe you can and you're halfway there.",
      quoter: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      quoter: "Confucius"
    },
    {
      quote: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
      quoter: "Joel Brown"
    }
  ];
  
  document.querySelector("#quote").addEventListener("click",function(){
    const p = document.getElementById("quote-p")
    const quoter= document.getElementById("name")
    const randomQuote= Math.floor(Math.random()*quotesArray.length)
    p.innerText=quotesArray[randomQuote].quote
    quoter.innerText=quotesArray[randomQuote].quoter
  })
  
  