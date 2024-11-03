function redes() {
    var redes = document.getElementById('redes');
    if (redes.classList.contains('hidden')) {
      redes.classList.remove('hidden');
      redes.classList.add('visible');
    } else {
      redes.classList.remove('visible');
      redes.classList.add('hidden');
    }
  }