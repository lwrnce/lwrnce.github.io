/** Number Counter */

let nCount = selector => {
    $(selector).each(function () {
        $(this)
            .animate({
                Counter: $(this).text()
            }, {
                // A string or number determining how long the animation will run.
                duration: 1500,
                // A string indicating which easing function to use for the transition.
                easing: "swing",
                /**
                 * A function to be called for each animated property of each animated element. 
                 * This function provides an opportunity to
                 *  modify the Tween object to change the value of the property before it is set.
                 */
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            });
    });
};

let a = 0;
$(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h1");
    }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
    // get the complete height of window
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});

/** Welcome message */
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
  });

  /** Attributes */
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter2',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  });

/** Letter Counter */

function Letter(table, letter, duration) {
    this.table = table;
    this.letter = letter;
    this.current = 0;
    this.delay = duration / tbl.indexOf(letter);   // ms
    this.time = Date.now();
    this.done = false;
}
Letter.prototype.update = function () {
    if (this.done) return;
    var time = Date.now();
    if (time - this.time >= this.delay) {
        this.time = time;
        if (this.letter === this.table[this.current] ||
            this.current === this.table.length) {
            this.done = true;
        }
        else {
            this.current++;
        }
    }
};

var word = "EDUCATION";
var tbl = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letters = [];
word.toUpperCase().split("").forEach(function (l) {
    letters.push(new Letter(tbl, l, 1200))
});

(function loop() {
    var txt = "", isDone = true;
    letters.forEach(function (l) {
        l.update();
        if (!l.done) isDone = false;
        txt += l.table[l.current];
    });

    // output txt
    d.innerHTML = txt;

    if (!isDone) requestAnimationFrame(loop);
    else { /* done */ }
})();