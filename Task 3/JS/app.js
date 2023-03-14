async function getAsyncData(url) {
    try {
        let result = await fetch(url);
        if(result.ok){
            let response = await result.json();
            let letterA = response.filter(letterA => letterA.title.charAt(0) === 'a');
            const letterAB = response.filter(letterA => letterA.title.substring(0, 2) === 'ab');

            console.log(letterA)
            console.log(letterAB)

            let letterAString = '';
            letterA.forEach(obj => {
                letterAString += JSON.stringify(obj) + '<br>';
            });
            document.querySelector('.user-a').innerHTML = letterAString;
            
            let letterABString = '';
            letterAB.forEach(obj => {
                letterABString += JSON.stringify(obj) + '<br>'
            })
            document.querySelector('.user-ab').innerHTML = letterABString;
        } else {
            throw new Error(`Error: ${result.status}`)
        }
    } catch(error){
        console.log(error.message)
    }
}
getAsyncData('https://jsonplaceholder.typicode.com/todos/')
