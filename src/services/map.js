let mapLoadedResolve;
window.mapLoadedPromise = new Promise((resolve) => {
  mapLoadedResolve = resolve;
});

window.initMap = () => {
  mapLoadedResolve();
};

const head = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2hEf5ry7MYjEQz_TLJ_hBmpLw6NWO_zM&callback=initMap';
head.appendChild(script);