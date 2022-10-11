'use strict';

const names = document.getElementById('name');
const surnames = document.getElementById('lname');
const age = document.getElementById('age');
const submit = document.getElementById('submit');
const tr = document.createElement('tr');
const td = document.createElement('td');
const p = document.createElement('p');


submit.addEventListener('click' , function() {
    this.parentNode.parentNode.parentNode.appendChild(tr);
        tr.appendChild(td.appendChild(p));
        p.innerText = names.value;
})