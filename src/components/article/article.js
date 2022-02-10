import './article.less'
import data from "./data"
/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

function articleMaker(artObj){
  //s1_Instantiate elements
  const article = document.createElement("div");
  const artTitle = document.createElement("h2");
  const artDate = document.createElement("p");
  const artP1 = document.createElement("p");
  const artP2 = document.createElement("p");
  const artP3 = document.createElement("p");
  const expandBtn = document.createElement("span");
  //s2_Setup Structure
  article.appendChild(artTitle);
  article.appendChild(artDate);
  article.appendChild(artP1);
  article.appendChild(artP2);
  article.appendChild(artP3);
  article.appendChild(expandBtn);
  //s3_Add Proper className
  article.classList.add("article");
  artDate.classList.add("date");
  expandBtn.classList.add("expandButton");
  //s4_Set Text Content
  artTitle.textContent = artObj.title;
  artDate.textContent = artObj.date;
  artP1.textContent = artObj.firstParagraph;
  artP2.textContent = artObj.secondParagraph;
  artP3.textContent = artObj.thirdParagraph;
  expandBtn.textContent = "+" 
  //s5_add event listener to .expandButton
  expandBtn.addEventListener("click", evt => {
    article.classList.toggle("article-open");
  })
  //s6_return article
  return article;
}
// s7_loop over the data
data.forEach(artObj => {
  const artElem = articleMaker(artObj);
  document.querySelector("div.articles").appendChild(artElem);
})