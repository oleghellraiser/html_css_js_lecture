import {host} from '../config/config';

root.attachShadow({mode: 'open'});
root.shadowRoot.innerHTML = `
<style> p { font-weight: bold; } </style>
<p>Hello, John!</p>
`;
console.log('hello world');


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

let customerForm = document.getElementById('customerForm');
customerForm.onsubmit = (e) =>
{
    e.preventDefault();
}
let buttonToSend = document.getElementById('customerSend');
buttonToSend.onclick = () => {
    let myPromise = new Promise((myResolve, myReject) => {
        let req = new XMLHttpRequest();
        req.open('POST', host + "/send");
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        let customer = document.getElementsByName('Customer')[0];
        let country = document.getElementsByName('Country')[0];
        let regNumber = document.getElementsByName('RegistrationNumber')[0];

        let payload = {
            customer: customer.value,
            country: country.value,
            regNumber: regNumber.value
        };
        req.send(JSON.stringify(payload));
        req.onload = function() {
          if (req.status == 200) {
            myResolve(req.response);
          } else {
            myReject("Something went wrong");
          }
        };
      });
    
      myPromise.then(
        (value) => myDisplayer(value),
        (error) => myDisplayer(error)
      );
};
