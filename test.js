const div = document.getElementById('container');

 
div.textContent = 'Replacement text';
 
div.innerHTML = `<span style="background-color: lime">Replacement HTML</span>`;

 
div.insertAdjacentText('beforeend', ' appended text');

 
div.insertAdjacentHTML(
  'beforeend',
  `<span style="background-color: cyan"> appended HTML</code>`,
);

var sum=0;

for(var i = 1;i<=100;i++){
    sum+=i;
}

const result = document.getElementById('sum');

result.innerHTML = `<span style="background-color: lime">`+'Result 1-100 sum = '+ sum +`</span>`;


