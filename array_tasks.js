var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function(arr) {
		return arr.map(function(x){
			return Math.pow(x, 2);
		})
	},

	sum: function (arr) {
		return arr.reduce(function(acc, val){
			return acc + val;
		}, 0)
	},

	findDuplicates: function (arr) {
		var result = [];
		arr.forEach(function(item, index){
			if ( arr.indexOf(item, index + 1 ) > 1){
				if ( result.indexOf(item) === -1 ){
					result.push(item);
				}
			}
		});
		return result;
	},

	removeAndClone: function (arr, itemToRemove) {
		var index = arr.lastIndexOf(itemToRemove);
		while( index != -1 ) {
			arr.splice(index, 1);
			index = arr.indexOf(itemToRemove);
		}
		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];
		var index = arr.indexOf(itemToFind);
		while( index != -1 ) {
			indexArray.push(index);
			index = arr.indexOf(itemToFind, index + 1)
		}
		return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;
		arr.forEach(function(item){
			if (item % 2 === 0){
				total += Math.pow(item, 2);
			}
		})
		return total;
	}

}

module.exports = arrayTasks
