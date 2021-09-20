import { Component, Host, h } from '@stencil/core';
//Angular Styled Decorators
@Component({
  tag: 'kk-button', // name of the component
  styleUrl: 'kk-button.css', // where will the style be rendered from
  shadow: true, // will it have shadow DOM
})
export class KKButton {

  //React like components with JSX being returned
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
