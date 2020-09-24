const getURL = (address,port,path) => {
    // TODO feedback：推荐用ES6的里的新特性连接字符串
    return address + ":" + port + path;
}

export default getURL
