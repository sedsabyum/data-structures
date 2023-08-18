//#######################
// Depth first traversal
//#######################

// Iterative approach
// const depthFirstPrint = (graph, source) => {
// 	const stack = [ source ];

// 	while(stack.length > 0) {
// 		const current = stack.pop();
// 		console.log(current)

// 		for(let neighbor of graph[current]) {
// 			stack.push(neighbor)
// 		}
// 	}
// }

// Recursive approach
// const depthFirstPrint = (graph, source) => {
// 	console.log(source)
// 	for(let neighbor of graph[source]) {
// 		depthFirstPrint(graph, neighbor)
// 	}
// }

// depthFirstPrint(graph, "a")


//#######################
// Breadth first traversal
//#######################

// Iterative approach
// const breadthFirstPrint = (graph, source) => {
// 	const queue = [ source ];

// 	while(queue.length > 0) {
// 		const current = queue.shift()
// 		console.log(current)

// 		for(let neighbor of graph[current]) {
// 			queue.push(neighbor)
// 		}
// 	}
// }


// breadthFirstPrint(graph, "a")


// const graph = {
// 	a: ['b', 'c'],
// 	b: ['d'],
// 	c: ['e'],
// 	d: ['f'],
// 	e: [],
// 	f: []
// }


//#######################
// Has path problem
//#######################


// Recursive approach
// const hasPath = (graph, src, dest) => {
// 	const queue = [ src ]

// 	while(queue.length > 0) {
// 		const current = queue.shift();
// 		if(current == dest) return true

// 		for(let neighbor of graph[current]) {
// 			queue.push(neighbor)
// 		}
// 	}

// 	return false
// }


// Iterative approach
const hasPath = (graph, src, dest) => {
	if(src === src) return true

	for(let neighbor of graph[src]) {
		if(hasPath(graph, neighbor, dest))  {
			return true
		}
	}

	return false
}


const graph = {
	f: ['g', 'i'],
	g: ['h'],
	h: [],
	i: ['g', 'k'],
	j: ['i'],
	k: []
}

console.log(hasPath(graph, 'f', 'k'))
console.log(hasPath(graph, 'g', 'i'))

