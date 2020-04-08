import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'outter-component',
})
export class OutterComonent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
        Outter component {this.name}
        <div class='container'>
          <slot />
        </div>
      </p>
    );
  }
}
