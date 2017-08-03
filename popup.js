function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderImage(imageData) {
  document.getElementById('image-wrap').href = imageData.url;
  document.getElementById('image').src = imageData.image_original_url;
  document.getElementById('image-download').href = imageData.image_original_url;
}

async function getGifUrl() {
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=05eeaa5d54464a7cb4653c6ba1f2504d&tag=anime-girl-kawaii';
  let result = await fetch(url);
  let jsonResult = await result.json();
  return jsonResult.data;
}

document.addEventListener('DOMContentLoaded', async () => {
  renderStatus('Đang tìm hàng ...');
  var imageData = await getGifUrl();
  renderStatus('');
  renderImage(imageData);
});