  var article =  document.getElementsByTagName("*");


if (article) {

for (var i = 0; i < article.length; i++) {
     var article = article[i];

        if (article.tagName.toLowerCase() == "select" || article.tagName.toLowerCase() == "input") {

            if (article.type.toLowerCase() == "checkbox" || article.type.toLowerCase() == "radio" || article.tagName.toLowerCase() == "select") {

                    if (article.multiple) {


                    }
            }
        }
    }  

   

  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = "Multi-Choice Detected";
const article2 = document.getElementsByTagName('*')[0];
  // Support for API reference docs
  const heading = article2.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}