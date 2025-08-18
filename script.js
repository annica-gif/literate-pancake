// Quiz-funktion
function checkAnswer() {
    const answers = document.getElementsByName("answer");
    let selected = "";
    for (let ans of answers) {
      if (ans.checked) {
        selected = ans.value;
      }
    }
  
    const result = document.getElementById("result");
    if (selected === "") {
      result.textContent = "Välj ett svar!";
    } else if (selected === "Kungsholmen") {
      result.textContent = "Rätt! Stadshuset ligger på Kungsholmen.";
      result.style.color = "green";
    } else {
      result.textContent = "Fel, försök igen!";
      result.style.color = "red";
    }
  }
  
  // Blogg-funktion
  document.getElementById("blogForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.getElementById("blogInput");
    const post = document.createElement("div");
    post.className = "post";
    post.textContent = input.value;
    document.getElementById("blogPosts").prepend(post);
    input.value = "";
  });
  