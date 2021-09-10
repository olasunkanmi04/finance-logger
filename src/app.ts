import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
// tuples
let values: [string, string, number]
values = [toFrom.value, details.value, amount.valueAsNumber]
    let docs:HasFormatter
    if(type.value === 'invoice'){
        docs = new Invoice(...values)
    }else{
        docs = new Payment(...values)
        
    }
    list.render(docs, type.value, 'end')
})
