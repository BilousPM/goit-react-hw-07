import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk } from '../../redux/contacts/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const formSchema = Yup.object({
    name: Yup.string()
      .required('This field is required')
      .min(3, 'Name must be more than 3 charts!')
      .max(50, ' Name must be lesa than 50 charts!'),
    number: Yup.string()
      .required('This field is required')
      .min(3, 'Number must be more than 3 numbers!')
      .max(50, 'Woow... it is to match !'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (data, actions) => {
    dispatch(addContactThunk(data));
    actions.resetForm();
  };

  return (
    <div className={s.formwrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" className={s.input} />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
