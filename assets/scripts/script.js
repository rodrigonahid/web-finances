const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -5000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '24/02/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -1000,
        date: '27/05/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 200000,
        date: '29/05/2021',
    },
]
const Transaction ={
    incomes(){
        // somar as entradas
    },
    expenses(){
        // somar as saídas
    },
    total(){
        // entradas-saidas
    }
}

const DOM = {
    transactionsContainer: document.querySelector(".data-table tbody"),
    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction){
        var CSSClass;
        if (transaction.amount > 0){
            CSSClass = "income";
        } else {
            CSSClass = "expense";
        }
        
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}">R$ ${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
        `;
        return html;
    }
}
transactions.forEach( transactions => {
   DOM.addTransaction(transactions)
})
