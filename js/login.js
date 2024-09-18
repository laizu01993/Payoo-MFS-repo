// step:1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event){

// step:2 prevent default behavior (prevent reloading browser)
    event.preventDefault();
    console.log('login button clicked');

// step:3 get the phone number and pin
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value
console.log(pinNumber);

// step:4 validate phone and pin (this is temporary)
if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '/home.html';
}
    else{
        alert('wrong phone number or pin');
    }

})