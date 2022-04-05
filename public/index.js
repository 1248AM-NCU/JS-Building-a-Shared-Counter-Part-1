async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    let res = await fetch("http://127.0.0.1:9001/counter")
    let val = await res.json()
    console.log(val)
    let countValue = val.value;

    async function increment(){
        countValue++;
        countContainer.textContent = countValue;
        let m = await fetch("http://127.0.0.1:9001/counter",
        {
            method:"PATCH",
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify({value: countValue})
        })
    }

    async function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        let m = await fetch("http://127.0.0.1:9001/counter",
        {
            method:"PATCH",
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify({value: countValue})
        })
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()