document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out button clicked');

    const cashOut = document.getElementById('input-cash-out')
    .value;
    const cashOutNumber = parseFloat(cashOut);
    const cashPin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, cashPin);

    if(cashPin ==='1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to cash out.please try again later');
    }
})