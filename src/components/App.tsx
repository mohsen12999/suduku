import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
<body>
    <div id="table"></div>
</body>
<script>

function make2dArray(n){
    var arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i]  = new Array(n);
    }
    return arr;
}

function showInTable(arr, htmlElementId){
    var table = '<table>';

    for (let i = 0; i < arr.length; i++) {

        table += '<tr>';
        const row = arr[i];

        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            
            table += '<td>'+element+ '<td>';

        }

        table += '</tr>';
    }

    table += '</table>';

    var ele = document.getElementById(htmlElementId);
    if(ele){
        ele.innerHTML = table;
    }
}

// var a = make2dArray(2);
// a[0][0] = 1;
// a[0][1] = 2;
// a[1][0] = 3;
// a[1][1] = 4;
// console.log(a);
// showInTable(a,'table')

function makeNumberSudoku(n=3) {
    var arr = make2dArray(n);

    let numbers = new Array(n);
    for (let i = 0; i < n; i++) {
        numbers[i] = i; 
    }

    for (let row = 0; row < n; row++) {

        let rowNumbers = [... numbers];

        for (let col = 0; col < n; col++) {
            let colNumbers = [... rowNumbers];

            for (let i = 0; i < row; i++) {
                const element = arr[i][col];
                colNumbers = colNumbers.filter(function(value){return value!=element;});
            }

            arr[row][col]= colNumbers.splice(randomNumber(colNumbers.length),1);
            rowNumbers = rowNumbers.filter(function(value){return value!=arr[row][col];})
        }
        
    }

    return arr;
}

const randomNumber = n => Math.floor(Math.random() * n);

// fillSudoku(5)

function makeWordSudoku(wordArray) {
    const length = wordArray.length;
    numArray = makeNumberSudoku(length);

    var arr = make2dArray(length);
    for (let row = 0; row < length; row++) {
        for (let col = 0; col < length; col++) {
            arr[row][col] = wordArray[numArray[row][col]];
        }
    }

    return arr;
}

var arr = ['cat','dog','sheep']
var s = makeWordSudoku(arr);
//console.log(s);
showInTable(s,'table')

</script>
*/