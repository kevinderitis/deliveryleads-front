const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const typeParam = urlParams.get('type');

const orders = [
    {
        name: 'James Alexander',
        status: 'active',
        tags: ['dev', 'QA']
    },
    {
        name: 'Lilia Taylor',
        status: 'active',
        tags: ['design', 'marketing']
    },
    {
        name: 'Drew Cano',
        status: 'inactive',
        tags: ['design', 'marketing']
    },
    {
        name: 'Nate Conor',
        status: 'offline',
        tags: ['dev']
    },
    {
        name: 'Melissa Brantley',
        status: 'active',
        tags: ['marketing']
    },
    {
        name: 'Anna Smith',
        status: 'active',
        tags: ['marketing', 'design']
    },
    {
        name: 'Natalia Alexandra',
        status: 'inactive',
        tags: ['dev', 'marketing']
    },   
    {
        name: 'Ryan Stewart',
        status: 'inactive',
        tags: ['dev', 'QA']
    },
    {
        name: 'Edward Alexander',
        status: 'active',
        tags: ['dev', 'marketing']
    },
    {
        name: 'Laura Smith',
        status: 'inactive', 
        tags: ['design', 'QA']
    },
];

let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${orders.length}) Orders`;

let tableBody = document.getElementById('order-rows');

const itemsOnPage = 10;

const numberOfPages = Math.ceil(orders.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = orders
    .filter((order, i) => 
        (((start - 1) * itemsOnPage) < i + 1) && 
        (i+1 <= start * itemsOnPage)
    )
    .map(order => {
        // Establecer el estado según el valor de 'status'
        const status = order.status === 'active' ? 'active' : 'inactive';

        // Construir la fila de la tabla para cada pedido
        return `<tr>
            <td class="order-profile">
                <span class="profile-info">
                    <span class="profile-info__name">
                        ${order.name}
                    </span>
                </span>
            </td>
            <td>
                <span class="status status--${status}">
                    ${status}
                </span>
            </td>
            <td>N/A</td>
        </tr>`;
    });

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    
    linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');
