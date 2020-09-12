// Create grid
var grid = document.getElementsByClassName('grid')[0];
for (var i = 0; i < 576; i++) {
    var panel = document.createElement('div');
    panel.classList.add('panel');

    var front = document.createElement('div');
    front.classList.add('face');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('face');
    back.classList.add('back');

    panel.appendChild(front);
    panel.appendChild(back);
    grid.appendChild(panel);
}