import * as components from './components/index';
import Profile, {Attribute} from './components/profile/profile';
import { data } from './data/data';

class AppContainer extends HTMLElement {
    profiles: Profile[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        data.forEach((element) => {
            const profileCard = this.ownerDocument.createElement('my-profile') as Profile;
            profileCard.setAttribute(Attribute.name, element.name);
            profileCard.setAttribute(Attribute.city, element.city);
            profileCard.setAttribute(Attribute.uid, String(element.uid))
            // profileCard.setAttribute(Attribute.uid, element.uid.toString());
            this.profiles.push(profileCard);
            });
    }
    connectedCallback() {
        this.render();
    }
    render(){
        if (this.shadowRoot){ //Condition of validation of the shadowRoot.
            this.shadowRoot.innerHTML = `<h1>Hello World</h1>`;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile)
            })
        }
    }
}
customElements.define('app-container', AppContainer);