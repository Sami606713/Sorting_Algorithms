function buuble_sort(arr,op) {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (op=="asc") {
                if (arr[i]>arr[j]) {
                    let temp=arr[j]
                    arr[j]=arr[i]
                    arr[i]=temp
                }
            }
            else if (op=="desc") {
                if (arr[i]<arr[j]) {
                    let temp=arr[j]
                    arr[j]=arr[i]
                    arr[i]=temp
                }
            }
            
        }
    }
    return arr
}

let arr=[9,8,7,6,5,10,11,4,3,2,1]
console.log("Desending order: ",buuble_sort(arr,"desc"))
console.log("Asscending order: ",buuble_sort(arr,"asc"))