const DATA_URL = 'https://en.wikipedia.org/w/api.php?&origin=*&action=query&namespace=0&format=json&prop=links&pllimit=max&titles=';
//const DATA_URL = 'https://en.wikipedia.org/w/api.php?&origin=*&action=query&format=json&titles=';
const SEARCH_URL = 'https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&&namespace=0format=json&search=';

let inputBar_start;
let inputBar_end;
let submitButton;
let list;
//let lastInput = '';
let visited = [];
let found = [];
let iteration;

document.addEventListener('DOMContentLoaded', (e) => {
  inputBar_start = document.querySelector('input[name="start"]');
  inputBar_end = document.querySelector('input[name="end"]');
  submitButton = document.querySelector('button');
  list = document.querySelector('#links');
  console.log('hledám cestu z ' + inputBar_start.value + ' do ' + inputBar_end.value);
  console.log('');

  submitButton.addEventListener('click', (e) => {
    iteration = 0;
    found = [];
    found.push(inputBar_start.value);
    //run(inputBar_start.value);
    //lastInput = inputBar_start.value;
    recursive();
  });
});

function recursive() {
  if (iteration < 100000) {
    //console.log(found[0]);
    let tmp = found.indexOf(found.map((e) => e.toLowerCase()).includes(inputBar_end.value.toLowerCase()));
    let id = tmp == -1 ? 0 : tmp;
    run(found[id]);
  } else {
    console.log('vic jak 10 iterací');
  }
}

function run(input) {
  getSearch(input).then((input) => {
    getData(input[1][0]).then((response) => {
      console.log(response);
      if (response.query.pages['-1'] == undefined) {
        iteration++;
        let pageId = Object.keys(response.query.pages)[0];
        let tmparr = response.query.pages[pageId].links.map((e) => e.title);
        found = found.concat(tmparr);

        let current = found.shift();
        console.log('nasel jsem ' + current);
        printLinks(tmparr);

        if (current.toLowerCase() != inputBar_end.value.toLowerCase()) {
          //recursive();
        } else {
          console.log('');
          console.log('cíl nalezen za ' + iteration + ' iterací');
          console.log('');
          console.log('--------------------------------');
        }
      } else {
        console.log('nenasel jsem ' + input);
      }
    });
  });
}

function getSearch(title) {
  let path = SEARCH_URL + title;
  return fetch(path)
    .then((response) => response.json())
    .then((responseData) => {
      //console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

function getData(input) {
  console.log(input);
  let path = DATA_URL + input.replace(/\s+/g, '_');
  return fetch(path)
    .then((response) => response.json())
    .then((responseData) => {
      //console.log(responseData);
      return responseData;
    })
    .catch((error) => console.warn(error));
}

function printLinks(arr) {
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement('LI');
    let listItem_button = document.createElement('BUTTON');
    listItem_button.innerHTML = arr[i];
    listItem.appendChild(listItem_button);
    list.appendChild(listItem);
    listItem_button.addEventListener('click', (e) => {
      lastInput = '';
      run(e.target.textContent);
    });
  }
}
