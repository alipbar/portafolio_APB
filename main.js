let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 150,
 cursor: "<span style='font-size:60pt; color: #EF9494;'>|</span>",
});
 
typewriter
  .pauseFor(50)
  .typeString('<span style="font-size:60pt; color: #EF9494;">Ali.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
