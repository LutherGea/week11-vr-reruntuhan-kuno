// =============================================================
// components.js — Custom A-Frame Components
// Tema 8: Reruntuhan Kuno
// =============================================================

// -------------------------------------------------------------
// LATIHAN 2: Component "blink"
// Membuat objek berkedip (visible on/off) dengan interval
// yang bisa dikonfigurasi.
//
// Cara pakai di HTML:
//   <a-sphere blink="interval: 800"> ... </a-sphere>
//   interval = waktu dalam milidetik (ms) antar kedipan
// -------------------------------------------------------------
AFRAME.registerComponent('blink', {
    schema: {
      interval: { type: 'number', default: 800 }
    },
  
    init: function () {
      this.visible = true;
      this.lastToggle = 0;
    },
  
    tick: function (time) {
      if (time - this.lastToggle > this.data.interval) {
        this.visible = !this.visible;
        this.el.setAttribute('visible', this.visible);
        this.lastToggle = time;
      }
    }
  });
  
  // -------------------------------------------------------------
  // BONUS: Component "color-on-hover"
  // Mengganti warna objek saat kursor hover di atasnya
  // -------------------------------------------------------------
  AFRAME.registerComponent('color-on-hover', {
    schema: {
      hoverColor: { type: 'color', default: '#FFD700' }
    },
  
    init: function () {
      var el = this.el;
      var originalColor = el.getAttribute('color');
      var hoverColor = this.data.hoverColor;
  
      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', hoverColor);
      });
  
      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', originalColor);
      });
    }
  });
  