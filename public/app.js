import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // tuples
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let docs;
    if (type.value === 'invoice') {
        docs = new Invoice(...values);
    }
    else {
        docs = new Payment(...values);
    }
    list.render(docs, type.value, 'end');
});
