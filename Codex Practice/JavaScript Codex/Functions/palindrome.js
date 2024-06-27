function isPalindrome(word) {
  lowerCase = word.toLowerCase();

  let reverseCase = lowerCase.split("").reverse().join("");

  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase === reverseCase) {
      console.log(`${lowerCase.split().reverse("").join()}`);
      return true;
    } else {
      console.log(`${lowerCase.split().reverse("").join()}`);
      return false;
    }
  }
}

console.log(isPalindrome("NisiOisiN"));
