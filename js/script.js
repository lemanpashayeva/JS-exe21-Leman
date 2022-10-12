'use strict';

const input = document.getElementsByTagName('input');
const tr = document.createElement('tr');
const td = document.createElement('td');
const p = document.createElement('p');
const submit = document.getElementById('submit');

submit.addEventListener('click' , function() {
    for (let i = 0; i < input.length; i++) {
        this.parentNode.parentNode.parentNode.appendChild(tr);
        tr.appendChild(td);
        td.appendChild(p);
        p.innerText = input[i].value;
    }
})