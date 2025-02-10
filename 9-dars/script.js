function soat() {
    const vaqt = new Date();
    const hours = String(vaqt.getHours()).padStart(2, '0'); 
    const minutes = String(vaqt.getMinutes()).padStart(2, '0'); 
    const seconds = String(vaqt.getSeconds()).padStart(2, '0');
    const hozirgiVaqt = `${hours}:${minutes}:${seconds}`;
    document.getElementById('soat').textContent = hozirgiVaqt;
}

setInterval(soat, 1000);

soat();