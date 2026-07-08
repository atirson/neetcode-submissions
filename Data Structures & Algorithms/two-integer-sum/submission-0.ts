class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const complement = target - current;

            if (map.has(complement)) {
                return [map.get(complement)!, i]
            }

            map.set(current, i)
        }
        
        return []
    }
}
