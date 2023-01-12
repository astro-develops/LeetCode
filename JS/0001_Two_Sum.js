/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

	for (let i = nums.length; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if ( nums[i] + nums[j] === target ) {
				return [j, i];
			}
		}
	}

};

