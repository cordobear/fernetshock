<script>
    // Seleccionamos la imagen y el texto que queremos usar
  const imagen = document.getElementById('imagen1');
  const texto = document.getElementById('texto1');

    // Le decimos al navegador: "Cuando hagan clic en la imagen..."
  imagen.addEventListener('click', function() {
    // ...alterná la clase 'visible' del texto. Si la tiene, se la saca, si no la tiene, se la pone.
    texto.classList.toggle('visible');
  });
</script>

