async function getAsyncData(url) {
    try {
        let result = await fetch(url);
        if(result.ok){
            let response = await result.json();
            const letterA = response.filter(letterA => letterA.title.charAt(0) === 'a');
            const letterAB = response.filter(letterA => letterA.title.substring(0, 2) === 'ab');

            console.log(letterA)
            console.log(letterAB)

            let letterAString = '';
            letterA.forEach(obj => {
                letterAString += JSON.stringify(obj) + '<br>';
            });
            
            let buttonA = document.querySelector('.add-a');
            buttonA.addEventListener('click', showA)
            function showA (event) {
                document.querySelector('.user-a').innerHTML = letterAString;
                document.querySelector('.user-ab').innerHTML = '';
            }
            
            let letterABString = '';
            letterAB.forEach(obj => {
                letterABString += JSON.stringify(obj) + '<br>'
            })

            let buttonAB = document.querySelector('.add-ab');
            buttonAB.addEventListener('click', showAB)
            function showAB (event) {
                document.querySelector('.user-ab').innerHTML = letterABString;
                document.querySelector('.user-a').innerHTML = '';
            }

            let buttonAll = document.querySelector('.add-all');
            buttonAll.addEventListener('click', showAll)
            function showAll (event) {
                document.querySelector('.user-a').innerHTML = letterAString;
                document.querySelector('.user-ab').innerHTML = letterABString;
            }
            
            let buttonClear = document.querySelector('.clear')
            buttonClear.addEventListener('click', clearAll)
            function clearAll (event) {
                document.querySelector('.user-a').innerHTML = '';
                document.querySelector('.user-ab').innerHTML = '';
            }
        } else {
            throw new Error(`Error: ${result.status}`)
        }
    } catch(error){
        console.log(error.message)
    }
}
getAsyncData('https://jsonplaceholder.typicode.com/todos/')
