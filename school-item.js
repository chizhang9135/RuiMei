class SchoolItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const data = JSON.parse(this.getAttribute('data'));

        this.shadowRoot.innerHTML = `
      <style>
        .school-card {
          width: 300px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .school-image {
          width: 100%;
          height: auto;
        }
        .school-info {
          margin-top: 10px;
        }
        .school-info > .school-info > * {
          margin: 5px 0;
        }
      </style>
      <div class="school-card">
        <img class="school-image" src="${data.picture}" alt="${data.name}">
        <div class="school-info">
          <h3>${data.name}</h3>
          <p>${data.address}</p>
          <p><strong>Type:</strong> ${data.type}</p>
          <p><strong>Level:</strong> ${data.level}</p>
        </div>
      </div>
    `;
    }
}

customElements.define('school-item', SchoolItem);
