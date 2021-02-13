// LitElement and html are the basic required imports
import {LitElement, html} from 'lit-element';

// Create a class definition for your component and extend the LitElement base class
class HelloWorld extends LitElement {

    // Implement `render` to define a template for your element.
    render() {

        // Return the template using the html template tag. This will allow lit-html to
        // interpret the dynamic parts of your template.
        return html` <div>Hello world!</div>`;
    }

}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('hello-world', HelloWorld);