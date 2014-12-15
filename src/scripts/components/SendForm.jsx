/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var SendForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      text: ''
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.user, this.state.text);
    this.setState({text: ''});
  },

  render: function() {
    return (
      <div>
        <form className='form-inline' onSubmit={this.handleSubmit} >
          <div className='form-group'>
            <input className='form-control' ref="myInput" type='text' valueLink={this.linkState('text')} />
          </div>
          <input className='btn btn-primary' type='submit' />
        </form>
      </div>
    );
  }
});

module.exports = SendForm;
