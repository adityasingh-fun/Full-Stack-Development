// Function to replace an article
function replaceArticle(articleId,newContent){
    // Find existing article elements by its ID

    const existingElement = document.getElementById(articleId);
    console.log(existingElement);
    // Create new div element for the updated article
    const newArticleElement = document.createElement('div');
    newArticleElement.className = "article";
    newArticleElement.id = "articleId";
    console.log(newArticleElement);

    // Create Node text
    const newNodeText = document.createTextNode(newContent);
    // Append text to element
    newArticleElement.appendChild(newNodeText);

    // Replacing Old text with new one
    existingElement.parentNode.replaceChild(newArticleElement,existingElement);
}

replaceArticle("article1","Text Updated for article 1");
replaceArticle("article2","Text Updated for article 2");
replaceArticle("article3","Text Updated for article 3");