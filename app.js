// Пример подключения к камере
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    document.getElementById("video").srcObject = stream;
  });

// Заглушки для функций
function lock() {
  alert("Scooter Locked");
}
function unlock() {
  alert("Scooter Unlocked");
}