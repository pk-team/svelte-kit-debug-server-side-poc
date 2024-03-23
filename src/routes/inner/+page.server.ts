export const prerender = false;

export function load() {    
    let name = 'John Doe'
    let age = name.length * 3
    return {  
        name,
        age: age
    }
}