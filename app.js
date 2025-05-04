// BLE-поиск и подключение
document.getElementById('connectBtn').addEventListener('click', async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ namePrefix: 'Ninebot' }],
        optionalServices: ['battery_service']
      });
  
      document.getElementById('deviceStatus').textContent = `Подключено к: ${device.name}`;
      // Здесь можно подключить сервисы и получить характеристики
    } catch (error) {
      console.error('BLE ошибка:', error);
      document.getElementById('deviceStatus').textContent = 'Ошибка подключения';
    }
  });
  
  // Камера: вкл/выкл
  let cameraStream = null;
  document.getElementById('toggleCameraBtn').addEventListener('click', async () => {
    const video = document.getElementById('video');
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      video.style.display = 'none';
      cameraStream = null;
      document.getElementById('toggleCameraBtn').textContent = '🎥 Включить камеру';
    } else {
      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = cameraStream;
        video.style.display = 'block';
        document.getElementById('toggleCameraBtn').textContent = '🎥 Выключить камеру';
      } catch (err) {
        console.error('Ошибка камеры:', err);
      }
    }
  });
  
  // Заглушки блокировки
  function lock() {
    alert('Scooter Locked (заглушка)');
  }
  function unlock() {
    alert('Scooter Unlocked (заглушка)');
  }