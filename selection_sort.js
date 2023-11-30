function selection_sort(arr,op) {
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if (op=="asc") {
                if(arr[j]<arr[min]){
                    // console.log("min ",arr[min],"j:",arr[j])
                    min=j
                    // console.log("aff ass min ",arr[min],"after ass j:",arr[j])
                }
            }
            else if (op=="des") {
                if(arr[j]>arr[min]){
                    // console.log("min ",arr[min],"j:",arr[j])
                    min=j
                    // console.log("aff ass min ",arr[min],"after ass j:",arr[j])
                }
            }
            
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}

arr=[3,2,1,5,3,6,9]
console.log("Desending order",selection_sort(arr,"des"));
console.log("Assending order",selection_sort(arr,"asc"));