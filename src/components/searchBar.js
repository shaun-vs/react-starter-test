import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    return (
    <input onFocus={this.onInputFocus}
    onBlur={this.onInputBlur}
    onKeyUp={this.onInputTyped}
    />
    )
  }

  onInputFocus() {
    console.log('focus');
  }

  onInputBlur() {
    console.log('blur');
  }

  onInputTyped(e) {
    console.log(e.target.value);
  }

}

export default SearchBar;
