import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // The line below is how we link a class component to the context object
  static contextType = LanguageContext;

  render() {
    // the information inside the context object is refrenced by this.context
    const text = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
