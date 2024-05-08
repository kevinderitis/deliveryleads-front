const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const typeParam = urlParams.get('type');

const clients = [
    {
        src: 'assets/profile.jpg',
        name: 'James Alexander',
        email: 'james@example.com',
        phone: '123456789',
    },
    {
        src: 'assets/liliya.jpg',
        name: 'Lilia Taylor',
        email: 'lilia.taylor@example.com',
        phone: '987654321',
    },
    {
        src: 'assets/drew.jpg',
        name: 'Drew Cano',
        email: 'drew.crano@example.com',
        phone: '456123789',
    },
    {
        src: 'assets/nate.jpg',
        name: 'Nate Conor',
        email: 'nate@example.com',
        phone: '789456123',
    },
    {
        src: 'assets/melissa.jpg',
        name: 'Melissa Brantley',
        email: 'melissa@example.com',
        phone: '159357852',
    },
    {
        src: 'assets/anna.jpg',
        name: 'Anna Smith',
        email: 'anna.smith@example.com',
        phone: '357159852',
    },
    {
        src: 'assets/natalia.jpg',
        name: 'Natalia Alexandra',
        email: 'natalia@example.com',
        phone: '753951852',
    },
    {
        src: 'assets/eddie.jpg',
        name: 'Edward Alexander',
        email: 'edward@example.com',
        phone: '456789123',
    },
    {
        src: 'assets/laura.jpg',
        name: 'Laura Smith',
        email: 'laura@example.com',
        phone: '852963741',
    },
];

let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${clients.length}) Clients`;

let tableBody = document.getElementById('client-rows');

const itemsOnPage = 10;

const numberOfPages = Math.ceil(clients.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = clients
    .filter((client, i) =>
        (((start - 1) * itemsOnPage) < i + 1) &&
        (i + 1 <= start * itemsOnPage)
    )
    .map(
        (client) => {
            return `<tr>
        <td class="client-profile">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${client.name}
                </span>
            </span>
        </td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
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
