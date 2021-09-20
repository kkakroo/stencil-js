import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kk-badge', // name of the component
  styleUrl: 'kk-badge.css', // where will the style be rendered from
  shadow: false, // will it have shadow DOM
})
export class KKBadge {
  /**
   * Type of the badge.
   */
  @Prop() type: 'info' | 'warning' | 'success' | 'error';

  render() {
    return (
      <Host>
        <span class={`badge ${this.type ? 'badge-' + this.type : ''}`}>
          <slot></slot>
        </span>
      </Host>
    );
  }
}
