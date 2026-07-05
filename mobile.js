// Mobile Control Handler - Always initialize
const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const btnAttack = document.getElementById('btnAttack');

console.log('Mobile controls initialized');

// Simulate key presses for mobile
function startKey(key){
    const event = new KeyboardEvent('keydown', {
        key: key,
        code: key === ' ' ? 'Space' : key.toUpperCase()
    });
    document.dispatchEvent(event);
}

function stopKey(key){
    const event = new KeyboardEvent('keyup', {
        key: key,
        code: key === ' ' ? 'Space' : key.toUpperCase()
    });
    document.dispatchEvent(event);
}

// Up Button
if(btnUp){
    btnUp.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('w'); });
    btnUp.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('w'); });
    btnUp.addEventListener('mousedown', () => startKey('w'));
    btnUp.addEventListener('mouseup', () => stopKey('w'));
}

// Down Button
if(btnDown){
    btnDown.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('s'); });
    btnDown.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('s'); });
    btnDown.addEventListener('mousedown', () => startKey('s'));
    btnDown.addEventListener('mouseup', () => stopKey('s'));
}

// Left Button
if(btnLeft){
    btnLeft.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('a'); });
    btnLeft.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('a'); });
    btnLeft.addEventListener('mousedown', () => startKey('a'));
    btnLeft.addEventListener('mouseup', () => stopKey('a'));
}

// Right Button
if(btnRight){
    btnRight.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('d'); });
    btnRight.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('d'); });
    btnRight.addEventListener('mousedown', () => startKey('d'));
    btnRight.addEventListener('mouseup', () => stopKey('d'));
}

// Attack Button
if(btnAttack){
    btnAttack.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const event = new KeyboardEvent('keydown', { key: ' ', code: 'Space' });
        document.dispatchEvent(event);
    });
    btnAttack.addEventListener('touchend', (e) => {
        e.preventDefault();
        const event = new KeyboardEvent('keyup', { key: ' ', code: 'Space' });
        document.dispatchEvent(event);
    });
    btnAttack.addEventListener('mousedown', () => {
        const event = new KeyboardEvent('keydown', { key: ' ', code: 'Space' });
        document.dispatchEvent(event);
    });
    btnAttack.addEventListener('mouseup', () => {
        const event = new KeyboardEvent('keyup', { key: ' ', code: 'Space' });
        document.dispatchEvent(event);
    });
}