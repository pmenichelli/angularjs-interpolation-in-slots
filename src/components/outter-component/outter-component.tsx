import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'outter-component',
  styleUrl: 'outter-component.css',
  shadow: true
})
export class OutterComonent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  @State() renderSlot: boolean = false;

  render() {
    return (
      <div class='outter-component'>
        <button
          type='button'
          onClick={() => {
            this.renderSlot = !this.renderSlot;
            console.log(this.renderSlot)
          }}
        >
          Outter component {this.name}
        </button>

        <div class='container'>
          {this._renderSlot()}
        </div>
      </div>
    );
  }

  protected _renderSlot() {
    if (!this.renderSlot) {
      return null;
    }
    return (
      <div class='named-slot-container'>
        <slot name='conditional-slot' />
      </div>
    );
  }

}
