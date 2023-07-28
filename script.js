
function goToIndex() {
    if (window.location.href.indexOf("index.html") === -1) {
      window.location.href = "index.html";
    }
  }

// Function to display all quotes from local storage
function displayQuotes() {
    const allQuotesPage = document.getElementById("allQuotesPage");
    allQuotesPage.innerHTML = ""; // Clear previous content

    let quotes = localStorage.getItem("quotes");
    if (quotes) {
      quotes = JSON.parse(quotes);
      for (let i = 0; i < quotes.length; i++) {
        const quote = quotes[i];

        const quoteRow = document.createElement("div");
        quoteRow.classList.add("row", "my-2",'bg-info');

        const quoteContentDiv = document.createElement("div");
        quoteContentDiv.classList.add("col-md-9");

        const quoteText = document.createElement("h3");
        quoteText.textContent = quote.quote;

        const authorText = document.createElement("h3");
        authorText.textContent = quote.author;

        quoteContentDiv.appendChild(quoteText);
        quoteContentDiv.appendChild(authorText);

        const viewDiv = document.createElement("div");
        viewDiv.classList.add("col-md-3", "d-flex", "align-items-center");


        const viewButton = document.createElement("a"); // Change to anchor tag (a)
viewButton.classList.add("btn", "bg-succes");
viewButton.textContent = "View My Full Quote";
viewButton.href = `specific.html`; // Add the href attribute with unique identifier (index)

viewDiv.appendChild(viewButton);

quoteRow.appendChild(quoteContentDiv);
quoteRow.appendChild(viewDiv);

allQuotesPage.appendChild(quoteRow);

        // Add a unique identifier (index) to the quote row
        quoteRow.dataset.index = i;

        // Attach event listener to handle click on "View My Full Quote" button
        viewButton.addEventListener("click", function () {


          displaySpecificQuote(i);
        //   window.history.pushState(null, null, `specific.html#${i}`);
        });

        viewDiv.appendChild(viewButton);

        quoteRow.appendChild(quoteContentDiv);
        quoteRow.appendChild(viewDiv);

        allQuotesPage.appendChild(quoteRow);
      }
    } else {
      const noQuotesMsg = document.createElement("p");
      noQuotesMsg.textContent = "No quotes available yet!";
      allQuotesPage.appendChild(noQuotesMsg);
    }
  }

// Function to display a specific quote on specific.html
function displaySpecificQuote(index) {
    console.log("working")
    localStorage.setItem("specificQuoteIndex", index);
    window.location.href = "specific.html";
  }


//   Function to display a specific quote on specific.html
  function showSpecificQuote(index) {
    const quote = localStorage.getItem("quotes");
    alert("going to specific")
    if (quote) {
      const quotesArray = JSON.parse(quote);
      if (index >= 0 && index < quotesArray.length) {
        const specificQuotePage = document.getElementById("specificQuotePage");
        specificQuotePage.innerHTML = "111111111111111111111";

        const specificQuoteRow = document.createElement("div");
        specificQuoteRow.classList.add("row", "my-2");

        const specificQuoteDiv = document.createElement("div");
        specificQuoteDiv.classList.add("col-md-12");

        const specificQuoteText = document.createElement("h3");
        specificQuoteText.textContent = quotesArray[index].quote;

        const specificAuthorText = document.createElement("h3");
        specificAuthorText.textContent = quotesArray[index].author;

        specificQuoteDiv.appendChild(specificQuoteText);
        specificQuoteDiv.appendChild(specificAuthorText);

        specificQuoteRow.appendChild(specificQuoteDiv);
        specificQuotePage.appendChild(specificQuoteRow);
      }
    }else{
        console.log("no data")
    }
  }


  function addQuote() {
    const author = document.getElementById("author").value;
    const quote = document.getElementById("quote").value;

    // Check if the fields are not empty
    if (author && quote) {
      const newQuote = {
        author: author,
        quote: quote
      };

      let quotes = localStorage.getItem("quotes");
      if (!quotes) {
        quotes = [];
      } else {
        quotes = JSON.parse(quotes);
      }

      quotes.push(newQuote);
      localStorage.setItem("quotes", JSON.stringify(quotes));

      // Clear the form fields after saving the quote
      document.getElementById("author").value = "";
      document.getElementById("quote").value = "";

      alert("Quote added successfully!");

      // Refresh the quotes on index.html
      displayQuotes();
    } else {
      alert("Please enter both Author and Quote!");
    }
  }





  document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
