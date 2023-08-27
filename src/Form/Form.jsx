import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box, Input, InputName, SubmitButton } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };

  nameInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value, id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
       
      <Box onSubmit={this.handleSubmit}>
        <InputName htmlFor={this.nameInputId}>
          Name
          <Input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputName>
        <InputName htmlFor={this.nameInputId}>
          Number
          <Input
            id={this.nameInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="enter your phone number"
          />
        </InputName>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Box>
    );
  }
}

export default Form;
