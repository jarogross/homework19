function analyzaTextu() {
    var inputText = document.getElementById("text").value;
    
    // Dĺžka textu
    var textLength = inputText.length;
    document.getElementById("dlzkaTextu").textContent = textLength;
    
    // Dĺžka textu bez medzier
    var textWithoutSpaces = inputText.replace(/\s/g, "");
    var textLengthNoSpaces = textWithoutSpaces.length;
    document.getElementById("dlzkaTextuBezMedzier").textContent = textLengthNoSpaces;
    
    // Počet číslic
    var digitCount = inputText.match(/\d/g);
    digitCount = digitCount ? digitCount.length : 0;
    document.getElementById("pocetCislic").textContent = digitCount;
    
    // Najdlhšie slovo a jeho dĺžka
    var words = inputText.split(/\s+/);
    var longestWord = "";
    var longestWordLength = 0;
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
            
      if (word.length > longestWordLength) {
        longestWord = word;
        longestWordLength = word.length;
      }
    }
    
    document.getElementById("najdlhsieSlovo").textContent = longestWord;
    document.getElementById("dlzkaNajdlhsiehoSlova").textContent = longestWordLength;
  }
  
  function hladajText() {
    var searchInput = document.getElementById("vyhladajText").value;
    var inputText = document.getElementById("text").value;
    
    var searchResult = inputText.toLowerCase().includes(searchInput.toLowerCase());
    
    if (searchResult) {
      document.getElementById("vysledok").textContent = "Hľadaný text bol nájdený.";
    } else {
      document.getElementById("vysledok").textContent = "Hľadaný text nebol nájdený.";
    }
  }
  
  function sifrujText() {
    var inputText = document.getElementById("text").value;
    
    var sifrovanyText = inputText
    .replace(/0/g, "O")
    .replace(/I/g, "1")
    .replace(/i/g, "1")
    .replace(/E/g, "3")
    .replace(/e/g, "3")
    .replace(/A/g, "4")
    .replace(/a/g, "4")
    .replace(/S/g, "5")
    .replace(/s/g, "5")
    .replace(/B/g, "8")
    .replace(/b/g, "8");
   
    
    document.getElementById("sifrovanyText").innerText = sifrovanyText;
  }