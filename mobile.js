// Mobile Control Handler
console.log('Mobile controls loading...');

// Wait for DOM to load
function initMobileControls(){
    const btnUp = document.getElementById('btnUp');
    const btnDown = document.getElementById('btnDown');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    const btnAttack = document.getElementById('btnAttack');
    const mobileControlsDiv = document.getElementById('mobileControls');

    console.log('Buttons found:', {btnUp, btnDown, btnLeft, btnRight, btnAttack});

    // Show controls on all devices
    if(mobileControlsDiv){
        mobileControlsDiv.classList.add('active');
        console.log('Mobile controls activated');
    }

    // Simulate key presses
    function startKey(key){
        const event = new KeyboardEvent('keydown', {
            key: key,
            code: key === ' ' ? 'Space' : key.toUpperCase(),
            bubbles: true
        });
        document.dispatchEvent(event);
    }

    function stopKey(key){
        const event = new KeyboardEvent('keyup', {
            key: key,
            code: key === ' ' ? 'Space' : key.toUpperCase(),
            bubbles: true
        });
        document.dispatchEvent(event);
    }

    // Up Button
    if(btnUp){
        btnUp.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('w'); });
        btnUp.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('w'); });
        btnUp.addEventListener('mousedown', () => startKey('w'));
        btnUp.addEventListener('mouseup', () => stopKey('w'));
        console.log('Up button attached');
    }

    // Down Button
    if(btnDown){
        btnDown.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('s'); });
        btnDown.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('s'); });
        btnDown.addEventListener('mousedown', () => startKey('s'));
        btnDown.addEventListener('mouseup', () => stopKey('s'));
        console.log('Down button attached');
    }

    // Left Button
    if(btnLeft){
        btnLeft.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('a'); });
        btnLeft.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('a'); });
        btnLeft.addEventListener('mousedown', () => startKey('a'));
        btnLeft.addEventListener('mouseup', () => stopKey('a'));
        console.log('Left button attached');
    }

    // Right Button
    if(btnRight){
        btnRight.addEventListener('touchstart', (e) => { e.preventDefault(); startKey('d'); });
        btnRight.addEventListener('touchend', (e) => { e.preventDefault(); stopKey('d'); });
        btnRight.addEventListener('mousedown', () => startKey('d'));
        btnRight.addEventListener('mouseup', () => stopKey('d'));
        console.log('Right button attached');
    }

    // Attack Button
    if(btnAttack){
        btnAttack.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startKey(' ');
        });
        btnAttack.addEventListener('touchend', (e) => {
            e.preventDefault();
            stopKey(' ');
        });
        btnAttack.addEventListener('mousedown', () => startKey(' '));
        btnAttack.addEventListener('mouseup', () => stopKey(' '));
        console.log('Attack button attached');
    }

    console.log('All mobile controls initialized!');
}

// Initialize when DOM is ready
if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initMobileControls);
} else {
    initMobileControls();
}