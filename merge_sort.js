// 2-Helper fun 
function helper(arr1,arr2) {
    let i=0
    let j=0 
    let merge=[]

    while (i<arr1.length & j<arr2.length) {
        if (arr1[i]<arr2[j]) {
            merge.push(arr1[i])
            i+=1
        }else{
            merge.push(arr2[j])
            j+=1
        }
    }
    while (i<arr1.length) {
        merge.push(arr1[i])
        i+=1
    }
    while (j<arr2.length) {
        merge.push(arr2[j])
        j+=1
    }
    return merge
}
// let a1=[4,2,6,10,8]
// let a2=[1,5,3,9,7]
// console.log(helper(a1,a2));
// 1-Merge sort
function Merge_Sort(arr) {
    // base conditon
    if (arr.length==1) {
        return arr
    }
    // we need mid point
    let mid_point=Math.floor(arr.length/2)
    // Split the array into two sub array
    let left_array=arr.slice(0,mid_point)
    let right_array=arr.slice(mid_point)

    left_array=Merge_Sort(left_array)
    right_array=Merge_Sort(right_array)
    // return {"left:array:":left_array,"right arry:":right_array}
    return helper(left_array,right_array)
}
let arr=[3,2,5,4,7,6,9,8,10]
console.log(Merge_Sort(arr));