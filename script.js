document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider');
    setTimeout(function moveSlide() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left, behavior: 'smooth'})
        }

        setTimeout(moveSlide, 4000)
    }, 2000)

})

  let carrito = [];

  // Función para añadir un producto al carrito
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito(); // Actualizar la lista del carrito
  }

  // Función para actualizar la visualización del carrito
  function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista actual
    let total = 0; // Inicializar el total

    carrito.forEach((producto, index) => {
      const li = document.createElement('li');
      const subtotal = producto.precio * producto.cantidad; // Calcular subtotal
      total += subtotal; // Sumar al total

      li.innerHTML = `
        <div style="display: block; align-items: center; margin-bottom: 10px; margin-left: 20%">
          <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 300px; height: 300px; border-radius: 20px; margin-right: 10px;"> <br>
          <div>
            <strong style="font-size:30px">${producto.nombre}</strong><br>
            <span style="font-size: 20px; text-aling:center;">Precio: $${producto.precio}</span><br>
            <select id="cantidad-${index}" style="margin-left: 10px; color:black; margin-top:20px">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <select id="talla-${index}" style="margin-left: 10px; color:black; margin-top:20px">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <button onclick="quitarDelCarrito(${index})" style="margin-left: auto; background: red; color: white; border: none; padding: 5px; border-radius:20px; width:100px; margin-top:20px;">Eliminar</button>
        </div>
      `;
      listaCarrito.appendChild(li);

      // Actualizar cantidad y talla en el objeto producto
      document.getElementById(`cantidad-${index}`).addEventListener('change', function() {
        producto.cantidad = parseInt(this.value);
        actualizarCarrito(); // Actualizar el total
      });

      document.getElementById(`talla-${index}`).addEventListener('change', function() {
        producto.talla = this.value;
      });
    });

    document.getElementById('total-carrito').innerText = total.toFixed(2); // Mostrar el total
  }

  // Función para quitar un producto del carrito
  function quitarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito(); // Actualizar la lista del carrito
  }

  // Añadir evento a los botones de "comprar"
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    const button = slide.querySelector('button');
    button.addEventListener('click', function() {
      const producto = {
        id: slide.dataset.id, // Obtener el ID del producto
        nombre: slide.querySelector('h2').innerText, // Obtener el nombre del producto
        imagen: `./compts/${slide.style.backgroundImage.replace('url("', '').replace('")', '').split('/').pop()}`, // Obtener la imagen del producto
        precio: 70000, // Precio fijo en 70,000
        cantidad: 1, // Inicializar cantidad en 1
        talla: 'S', // Inicializar talla en S
      };
      agregarAlCarrito(producto);
    });
  });

 
  document.getElementById('abrir-menu').addEventListener('click', function() {
    var carrito = document.getElementById('carrito');
    carrito.classList.remove('cerrado');
    carrito.classList.add('abierto');
  });
  
  document.getElementById('cerrar-carrito').addEventListener('click', function() {
    var carrito = document.getElementById('carrito');
    carrito.classList.remove('abierto');
    carrito.classList.add('cerrado');
  });


