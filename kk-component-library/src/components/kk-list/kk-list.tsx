import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kk-list',
  styleUrl: 'kk-list.css',
  shadow: true,
})
export class KkList {
  @Prop() items: string[];
  render() {
    return (
      <Host>
        <ul>
          {this.items.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
      </Host>
    );
  }
}
