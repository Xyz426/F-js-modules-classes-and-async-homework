export const getPoetry = () => {
    return fetch("https://v1.jinrishici.com/all.json",{
        method: "GET",  
    }).then(response => {
        if(response.status == 200){
            return Promise.resolve(response.json());            
        }
        return Promise.reject("error")
    }).then(data => {
        return [data.origin,data.author,data.content]
    }).catch(error => {
        console.log(error)
    })
}
// export const getPoetry = async () => {
//     try{
//         const URL = "https://v1.jinrishici.com/all.json";
//         const response = await fetch(URL,{method: "GET",});
//         const data = await response.json();
//         return [data.origin,data.author,data.content]    
//     } catch(error){
//         console.log(error)
//     }
// }