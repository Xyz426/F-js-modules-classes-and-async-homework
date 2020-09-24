export const getPoetry = () => {
    // TODO feedback: fetch默认的method 就是get，可以不需要传第二个参数
    return fetch("https://v1.jinrishici.com/all.json",{
        method: "GET",
    }).then(response => {
        // TODO feedback:这个场景下，不要求处理状态码，可以直接返回reponse.json()
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
