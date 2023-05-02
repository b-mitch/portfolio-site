const grow1 = document.querySelector('.grow1');

const click1 = document.querySelector('.click1');

click1.addEventListener('mousedown', () => {
    grow1.style.color = 'darkorange';
    grow1.style.fontSize = '200%';
    grow1.style.marginLeft = '.5em';
    grow2.style.color = 'black';
    grow2.style.fontSize = '1.5em';
    grow2.style.marginLeft = '';
    grow3.style.color = 'black';
    grow3.style.fontSize = '1.5em';
    grow3.style.marginLeft = '';
    })

const grow2 = document.querySelector('.grow2');

const click2 = document.querySelector('.click2');

click2.addEventListener('mousedown', () => {
    grow1.style.color = 'black';
    grow1.style.fontSize = '1.5em';
    grow1.style.marginLeft = '';
    grow2.style.color = 'darkorange';
    grow2.style.fontSize = '200%';
    grow2.style.marginLeft = '.5em';
    grow3.style.color = 'black';
    grow3.style.fontSize = '1.5em';
    grow3.style.marginLeft = '';
    })

const grow3 = document.querySelector('.grow3');

const click3 = document.querySelector('.click3');

click3.addEventListener('mousedown', () => {
    grow1.style.color = 'black';
    grow1.style.fontSize = '1.5em';
    grow1.style.marginLeft = '';
    grow2.style.color = 'black';
    grow2.style.fontSize = '1.5em';
    grow2.style.marginLeft = '';
    grow3.style.color = 'darkorange';
    grow3.style.fontSize = '200%';
    grow3.style.marginLeft = '.5em';
    })
