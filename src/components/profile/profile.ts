export enum Attribute {
    'name' = 'name',
    'uid' = 'uid',
    'city' = 'city',
}

class Profile extends HTMLElement {
    name?: string;
    uid?: number;
    city?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // this.name = ''; // Default value
    }

    static get observedAttributes() {
        return Object.keys(Attribute); // Return ['name', 'uid', 'city']
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute.uid: // If the value of the property is a number, it is converted to a number.
                this.uid = newValue ? Number(newValue) : undefined;
                break;

            default:
                this[propName] = newValue; //  If the value of the property is a string, it is assigned directly.
                break;
        }
    }

    connectedCallback() {
        this.render();
    }

    render () {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
                <h1>${this.name || 'No name'}</h1>
                <p>User ID: ${this.uid || 'No uid'}</p>
                <p>From: ${this.city || 'No city'}</p>
            </section>
            `;
        }
    }
}
customElements.define('my-profile', Profile);
export default Profile;