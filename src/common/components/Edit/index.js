import DocumentTitle from 'react-document-title';
import React, { Component } from 'react';

import EditForm from '../EditForm';

class Edit extends Component {
  render () {
    return (
      <DocumentTitle title="Edit your name">
        <EditForm
          action="/"
          inputName="name"
          inputPlaceholder="Your name..."
        />
      </DocumentTitle>
    );
  }
}

export default Edit;
