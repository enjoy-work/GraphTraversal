//Example for Graph traversal using BFS approch.

var inputs = {};
var start;

function main(input) {
   
	const readLine = initReader(input);
    const t = Number(readLine());
  
	for (i = 0; i < t; i++) { 
	     const test_case =  readLine().split(' ').map(Number);
		 for (j = 0; j < test_case; j++){
	         var data = readLine().split(' ').map(Number);
		     if(!inputs.hasOwnProperty(parseInt(data[0]))){
		       inputs[parseInt(data[0])] = [parseInt(data[1])];
		     }
		     else
		       inputs[parseInt(data[0])].push(parseInt(data[1]));
		 }
	     start = readLine().split(' ').map(Number); 
	}
}


function init (traversed, inputs) 
{
    for (var key in inputs) {
       var vertex = inputs[key];
        traversed[key] = false;
    }
}

function operation (inputs, start, traversed)
{
    var queue = [];
    queue.push(start);
    traversed[start] = true;
    output.push( start );
    while (queue.length > 0) {
       var currentVertexID = queue.shift();
       var currentVertex = inputs[currentVertexID];
       for (var key in currentVertex) {

       var target = currentVertex[key];
            if (!traversed[target]) {
                traversed[target] = true;
                queue.push(target);
                output.push(target);
            }
        }
    }
}

var output = [];
var traversed = [];
init(traversed, inputs);
operation(inputs, start, traversed);    
console.log(output[output.length-1]); 


function initReader(input) {
    const lines = input.split('\n');
    let l = 0;
    return () => lines[l++];
}


process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});

