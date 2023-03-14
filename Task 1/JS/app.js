function getData(url) {
    let result = fetch(url);
    result.then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error (`Error: ${response.status}`)
    })
    .then(modifiedData => {
        modifiedData.forEach(element => {
            res = element.title.split('');
            if(res[0] === 'a'){
                console.log(element)
            }
        });
    })
    .catch(error => console.log(error.message))
}
getData('https://jsonplaceholder.typicode.com/todos/')