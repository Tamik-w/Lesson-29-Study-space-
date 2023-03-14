async function getAsyncData(url) {
    try {
        let result = await fetch(url);
        if(result.ok){
            let response = await result.json();
            response.forEach(element => {
                res = element.title.split('');
                    if(res[0] === 'a'){
                        console.log(element)
                    }
            });
        } else {
            throw new Error(`Error: ${result.status}`)
        }
    } catch(error){
        console.log(error.message)
    }
}

getAsyncData('https://jsonplaceholder.typicode.com/todos/')