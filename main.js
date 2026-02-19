// Elementos del DOM
const btnAbrirContacto = document.getElementById('btnAbrirContacto');
const btnCerrar = document.getElementById('btnCerrar');
const modalContacto = document.getElementById('modalContacto');
const formContacto = document.getElementById('formContacto');
const mensajeEstado = document.getElementById('mensajeEstado');

// Abrir modal
btnAbrirContacto.addEventListener('click', () => {
  modalContacto.classList.add('activo');
  document.body.style.overflow = 'hidden'; // Prevenir scroll del body
});

// Cerrar modal
function cerrarModal() {
  modalContacto.classList.remove('activo');
  document.body.style.overflow = 'auto';
}

btnCerrar.addEventListener('click', cerrarModal);

// Cerrar modal al hacer click fuera del contenido
modalContacto.addEventListener('click', (e) => {
  if (e.target === modalContacto) {
    cerrarModal();
  }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContacto.classList.contains('activo')) {
    cerrarModal();
  }
});

// Manejar envío del formulario
formContacto.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Obtener datos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const empresa = document.getElementById('empresa').value;
  const mensaje = document.getElementById('mensaje').value;
  
  // Construir el cuerpo del email
  const asunto = `Solicitud de Contacto - ${nombre}`;
  const cuerpo = `
Nombre: ${nombre}
Email: ${email}
Empresa: ${empresa || 'No especificada'}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde tu currículum web.
  `.trim();
  
  // Método 1: Usar EmailJS (si tienes cuenta)
  // Descomentar y configurar si quieres usar EmailJS
  /*
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: nombre,
        from_email: email,
        empresa: empresa,
        message: mensaje,
        to_email: 'justin2266xd@gmail.com'
      }
    );
    
    mostrarMensaje('¡Mensaje enviado con éxito! Me pondré en contacto pronto 🎉', 'exito');
    formContacto.reset();
  } catch (error) {
    mostrarMensaje('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.', 'error');
  }
  */
  
  // Método 2: Usar mailto (más simple, abre el cliente de correo)
  const mailtoLink = `mailto:justin2266xd@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  
  // Abrir cliente de correo
  window.location.href = mailtoLink;
  
  // Mostrar mensaje de confirmación
  setTimeout(() => {
    mostrarMensaje('¡Se ha abierto tu cliente de correo! Si no se abrió, por favor envíame un email directamente a justin2266xd@gmail.com 📧', 'exito');
    formContacto.reset();
  }, 500);
});

// Función para mostrar mensajes de estado
function mostrarMensaje(texto, tipo) {
  mensajeEstado.textContent = texto;
  mensajeEstado.className = `mensaje-estado ${tipo}`;
  
  // Ocultar mensaje después de 8 segundos
  setTimeout(() => {
    mensajeEstado.className = 'mensaje-estado';
  }, 8000);
}

// Animación de entrada para el modal
modalContacto.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'opacity' && modalContacto.classList.contains('activo')) {
    // Modal completamente visible
  }
});

// Botones de idioma (si quieres implementar después)
const btnEs = document.querySelector('.btn-es');
const btnEn = document.querySelector('.btn-en');

if (btnEs) {
  btnEs.addEventListener('click', () => {
    console.log('Cambiar a español');
    // Implementar cambio de idioma aquí
  });
}

if (btnEn) {
  btnEn.addEventListener('click', () => {
    console.log('Cambiar a inglés');
    // Implementar cambio de idioma aquí
  });
}

// Función para proteger y mostrar teléfonos
document.addEventListener("DOMContentLoaded", () => {
  // Datos fragmentados (Seguridad)
  const cod = "+502";
  const cel = "55635698";
  const fijo = "77712902";

  // Inyectar Celular
  const celCont = document.getElementById('cel-container');
  if(celCont) {
    celCont.innerHTML = `📱 <a href="tel:${cod}${cel}" style="text-decoration:none; color:inherit;">${cod} ${cel.slice(0,4)} ${cel.slice(4)}</a>`;
  }

  // Inyectar Teléfono Fijo
  const telCont = document.getElementById('tel-container');
  if(telCont) {
    telCont.innerHTML = `☎️ <a href="tel:${fijo}" style="text-decoration:none; color:inherit;">${fijo.slice(0,4)}-${fijo.slice(4)}</a>`;
  }
});
