const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    allTabs.forEach((tab) => {
      const id = tab.id;
      if (id.includes(linkId)) {
        tab.classList.add("tab-content--active");
      } else {
        tab.classList.remove("tab-content--active");
      }
    });
  });
});

function insertName(nombre) {
  var h2Element = document.querySelector('.profile__name h2');
  if (h2Element) {
      h2Element.textContent = nombre;
  } else {
      console.error("No se encontró el elemento h2 dentro de '.profile__name'");
  }
};

function setOrdersAndLeads(ordenesActivas, leadsRecibidos) {
  var ordenesElement = document.getElementById('ordersNumber');
  var leadsElement = document.getElementById('leadsNumber');
  console.log(ordenesElement)
  console.log(leadsElement)
  if (ordenesElement && leadsElement) {
      ordenesElement.innerHTML = ordenesActivas;
      leadsElement.innerHTML = leadsRecibidos;
  } else {
      console.error("No se encontraron los elementos de cantidades");
  }
}

function setWhatsAppNumber(number) {
  const whatsappLink = document.getElementById('client-whatsapp');
  if (whatsappLink) {
      whatsappLink.href = `https://wa.me/${number}`;
      whatsappLink.textContent = number; 
  } else {
      console.error("No se encontró el enlace de WhatsApp con el ID 'client-whatsapp'");
  }
}

async function fetchDataFromServer() {
  try {
    const response = await fetch(`${API_URL}/client/data`);

    if (!response.ok) {
      throw new Error('Hubo un problema al obtener los datos del servidor.');
    }

    const data = await response.json();

    console.log(data)

    const nombre = data.name; 
    const email = data.email;
    const ordenesActivas = data.orders; 
    const leadsRecibidos = data.leads; 
    const phone = data.phone;
    const orders = data.ordersObj;
    
    insertName(nombre);
    setOrdersAndLeads(ordenesActivas, leadsRecibidos);
    setWhatsAppNumber(phone)
  } catch (error) {
    console.error('Error al obtener datos del servidor:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchDataFromServer);
