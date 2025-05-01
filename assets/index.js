// CTA MODAL


try {

    const modal = document.getElementById("modal");
    const modal_window = document.querySelector("#modal > .modal_window");
    const modal_close = document.getElementById("modal_close");
    const button = document.getElementById("cta_button");

    button.addEventListener("click", (e) => {
        modal.classList.toggle("closed");
    });

    modal_close.addEventListener("click", (e) => {
        modal.classList.add("closed");
    });

    modal.addEventListener("click", (e) => {
        const window = e.target.closest(".modal_window");
        if(!window) {
            modal.classList.add("closed");
        }
    });

} catch {
    console.log("Error with CTA model")
}


// PARRALAX BACKGROUNDS

const parallax_down = document.getElementsByClassName('parallax_down');
new simpleParallax(parallax_down, {
	orientation: 'down',
    delay: 0.2,
    scale: 1.2,
    transition: 'cubic-bezier(0,0,0,1)'
}); 

const parallax_up = document.getElementsByClassName('parallax_up');
new simpleParallax(parallax_up, {
	orientation: 'up',
    delay: 0.2,
    scale: 1.2,
    transition: 'cubic-bezier(0,0,0,1)'
}); 

/* HOVER CARD EFFECT */

/*
document.getElementById("hovereffect").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}

*/


// Typewriter effect

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};


// Carousel


var glide = new Glide('#carousel', {
  type: 'slider',
  perView: 2,
  focusAt: 'center',
  gap: 20,                // adds spacing between slides
  autoplay: 2000,
  hoverpause: true,
  rewind: true,
  peek: { before: 50, after: 50 } // adjust these values to show a proper slice of the next slide
});

glide.mount();
