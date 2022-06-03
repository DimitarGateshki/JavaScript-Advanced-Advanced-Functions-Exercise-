function result(arr,type) {

    function sortt(param) {
        if (param=='asc') {
            return arr.sort((a,b)=>a-b);
            
        }else if (param=='desc') {
            return arr.sort((a,b)=>b-a);
        }
        
    }

    let sorted=sortt(type);
    return sorted;
    
}