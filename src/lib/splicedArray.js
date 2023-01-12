export const splicedArray = (array)=>{
    var temp=[];
    array.map((val, i)=>{
        if(val["visibility"]){
            temp.push(val)
        }
    })
    return temp
}

