const contDegradado = document.querySelector(".conte-degradado");
contDegradado.addEventListener("mousemove", (e) =>{
    const x = e.clientX;
    const y = e.clientY;
    contDegradado.style.background = `radial-gradient(circle at ${x}px ${y}px, #d6b9e0 200px, transparent 100%)`
})