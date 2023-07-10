class SchoolItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
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
          
          .school-card:hover {
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          
          a div {
              color: black;
          }
          
      </style>
      <a href="${data.redirectLink}" style="text-decoration:none">
      <div class="school-card">
          <img class="school-image" src="${data.picture}" alt="${data.name_cn}">
          <div class="school-info">
          <h3>${data.name_cn}</h3>
          <h3>${data.name_en}</h3>
          <p><strong>地址:</strong> ${data.address}</p>
          <p><strong>大致花费 (美金):</strong> ${data.cost}</p>
          </div>
      </div>
      </a>
      `;
  }
  
  
}

customElements.define('school-item', SchoolItem);
