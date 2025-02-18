const swipeLeft = new Event('izq');
const swipeRight = new Event('dch');
const swipeUp = new Event('up');
const swipeDown = new Event('down');

document.addEventListener('touchstart', e => {
const t = e.touches[0];
xDown = t.clientX;
yDown = t.clientY;
}, false);

document.addEventListener('touchmove', e => {
if (!xDown || !yDown) return;
const t = e.touches[0];
const xDiff = xDown - t.clientX;
const yDiff = yDown - t.clientY;

if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
    document.dispatchEvent(swipeLeft);
    } else {
    document.dispatchEvent(swipeRight);
    }
} else {
    if (yDiff > 0) {
    document.dispatchEvent(swipeUp);
    } else {
    document.dispatchEvent(swipeDown);
    }}        
xDown = null;
yDown = null;
}, false);tener('down', () => console.log('Deslizó hacia abajo'), false);