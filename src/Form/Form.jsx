import React from 'react';
// import { nanoid } from 'nanoid';
import { Box, Input, InputName, SubmitButton, Error } from './Form.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const initialValues = { name: '', number: '' };

const phoneRegExp = /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid +xxx (xx)-xxx-xx-xx')
    .required(),
});

const Form = ({ submitForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={schema}
    >
      <Box>
        <InputName>
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <Error name="name" component="div" />
        </InputName>
        <InputName>
          phone
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="enter your phone number"
          />
          <Error name="number" component="div" />
        </InputName>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Box>
    </Formik>
  );
};

export default Form;

Form.propTypes = {
  submitForm: PropTypes.func,
};
