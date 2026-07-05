// Mobile Control Handler
const isMobile = window.innerWidth <= 768;

if(isMobile){
    const btnUp = document.getElementById('btnUp');
    const btnDown = document.getElementById('btnDown');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    const btnAttack = document.getElementById('btnAttack');

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
    btnUp.addEventListener('touchstart', () => startKey('w'));
    btnUp.addEventListener('touchend', () => stopKey('w'));
    btnUp.addEventListener('mousedown', () => startKey('w'));
    btnUp.addEventListener('mouseup', () => stopKey('w'));

    // Down Button
    btnDown.addEventListener('touchstart', () => startKey('s'));
    btnDown.addEventListener('touchend', () => stopKey('s'));
    btnDown.addEventListener('mousedown', () => startKey('s'));
    btnDown.addEventListener('mouseup', () => stopKey('s'));

    // Left Button
    btnLeft.addEventListener('touchstart', () => startKey('a'));
    btnLeft.addEventListener('touchend', () => stopKey('a'));
    btnLeft.addEventListener('mousedown', () => startKey('a'));
    btnLeft.addEventListener('mouseup', () => stopKey('a'));

    // Right Button
    btnRight.addEventListener('touchstart', () => startKey('d'));
    btnRight.addEventListener('touchend', () => stopKey('d'));
    btnRight.addEventListener('mousedown', () => startKey('d'));
    btnRight.addEventListener('mouseup', () => stopKey('d'));

    // Attack Button
    btnAttack.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const event = new KeyboardEvent('keydown', {
            key: ' ',
            code: 'Space'
        });
        document.dispatchEvent(event);
    });
    btnAttack.addEventListener('touchend', (e) => {
        e.preventDefault();
        const event = new KeyboardEvent('keyup', {
            key: ' ',
            code: 'Space'
        });
        document.dispatchEvent(event);
    });
}