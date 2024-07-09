// Sélectionne le document entier pour exécuter la requête XPath
const xpath = "//ul[@class='grid-construct polaroid__box']/li[@class='polaroid__col']//img";

// Exécute la requête XPath
const xpathResult = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// Crée un tableau pour stocker les liens des images
const imageLinks = [];

// Parcourt chaque élément img sélectionné par XPath
for (let i = 0; i < xpathResult.snapshotLength; i++) {
  const img = xpathResult.snapshotItem(i);
  imageLinks.push(img.src);
}

// Affiche les liens des images
console.log(imageLinks);
