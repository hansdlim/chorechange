export function isEmpty(obj) : boolean { 
    return Object.keys(obj).length === 0; 
} 

export function isNotEmpty(obj) : boolean { 
    return !isEmpty(obj);
} 

  