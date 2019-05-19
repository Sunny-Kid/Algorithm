function selectionSort(arr) {
	let indexMin
	for (let i = 0;i < arr.length;i++) {
		indexMin = i
		for (let j = i;j < arr.length;j++) {
			if (arr[j] > arr[indexMin]) {
				indexMin = j
			}
		}
		if (i !== indexMin) {
			[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
		}
	}
}