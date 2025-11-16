const result = document.getElementById("result");
const textInput = document.getElementById("text-input");
const checkBtn = document.querySelector(".check-btn");
const palindromeBox = document.querySelector(".palindrome-div");

checkBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  const cleaned = text.toLowerCase().replace(/[^a-z0-9آ-ی]/g, "");
  const reversed = text.split("").reverse().join("");

  if (text === "") {
    alert("Please input a value");
  } else if (cleaned === reversed) {
    result.textContent = `${text} is a palindrome`;
    palindromeBox.classList.add("height-increase");
  } else {
    result.textContent = `${text} is not a palindrome`;
    palindromeBox.classList.add("height-increase");
  }
});
