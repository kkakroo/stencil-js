import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kk-button',
  styleUrl: 'kk-button.css',
  shadow: true,
})
export class KKButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
