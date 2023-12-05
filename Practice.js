function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i]>array[j]) {
                let temp=array[i]
                array[i]=array[j]
                array[j]=temp
            }
        }
    }
    return array
}

// let arr=[ 3, 1, 5, 4, 3, 2 ]
// console.log(bubble_sort(arr));

function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min=i
        for (let j = i+1; j < arr.length; j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}
let a=[ 1, 6, 5, 4, 3, 2 ]
// console.log(selection_sort(a));

function Merge_Sort(arr) {
    // base condition
    if (arr.length==1) {
        return arr
    }
    // split the array by using mid point
    let mid_point=Math.floor(arr.length/2)
    let left_array=arr.slice(0,mid_point)
    let right_array=arr.slice(mid_point)

    // split agai untill it reach to one
    left_array=Merge_Sort(left_array)
    right_array=Merge_Sort(right_array)
    // return{"left array":left_array,"right array":right_array}
    return helper(left_array,right_array)
}

// Helpet fun
function helper(arr1,arr2) {
    let i=0
    let j=0
    let merge=[]
    
    while (i<arr1.length & j<arr2.length) {
        if (arr1[i]<arr2[j]) {
            merge.push(arr1[i])
            i+=1
        } else {
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

let ar=[1,3,5]
let b=[2,4,6]
// console.log(helper(ar,b));

let arr=[3,1,2,5,6,9,8]
console.log(Merge_Sort(arr));