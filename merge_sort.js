function helper(arr1,arr2){
    let merge=[]
    let i=0
    let j=0
    while ((i<arr1.length) && (j<arr2.length) ) {
        // compare i and j
        if (arr1[i]<arr2[j]) {
            // if i is less append 
            merge.push(arr1[i])
            i+=1
        }
        else{
            merge.push(arr2[j])
            j+=1
        }
    while (i<arr1.length) {
        merge.push(arr1[i])
        i+=1
    }
    while (j<arr2.length) {
        merge.push(arr2[j])
        j+=1
    }

    }
    return merge
}

function merge_sort(arr) {
    // if size of array==1 return array
    if(arr.length==1){
        return arr
    }
    else{
        // split the array into two part 
        let mid=Math.floor(arr.length/2)
        let left=arr.slice(0,mid)
        let right=arr.slice(mid)

        return helper(left,right)
    }
}


let arr=[1,2,4,11,3,5,9,8,6]
console.log(merge_sort(arr));

let a1=[1,2,4]
let a2=[3,5,7]
// console.log(helper(a1,a2));