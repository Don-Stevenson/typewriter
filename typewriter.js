const sentence = "hello there from lighthouse labs \n";
let i = 0
const typewriter = (str) => {
  if (i < str.length) {
    for (const char of sentence) {
      setTimeout(() => {
        process.stdout.write(char);
      }, 100 * i)
      i++
    }
  }
}
typewriter(sentence);