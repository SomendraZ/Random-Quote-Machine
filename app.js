document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.getElementById('text');
    const authorText = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');
  
    async function fetchQuote() {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      quoteText.textContent = data.content;
      authorText.textContent = `- ${data.author}`;
      tweetQuoteButton.href = `https://twitter.com/intent/tweet?text="${data.content}" - ${data.author}`;
    }
  
    newQuoteButton.addEventListener('click', fetchQuote);
  
    fetchQuote();
  });
  