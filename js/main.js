/* jshint esversion: 6 */

let nums = [4, 1, 192, 45, 91, 32, 76, 71, 43];

console.log('start array - ' + nums);
let isSorted = false;

while(!isSorted){
    isSorted = true;
    for ( let i = 0 ; i < nums.length ; i++ ){
        if( nums[i] < nums[i-1]){
            let temp = nums[i-1];
            nums[i-1] = nums[i];
            nums[i] = temp;
            isSorted = false;
        }
    }
    console.log('end array - ' + nums);
}