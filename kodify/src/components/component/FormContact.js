import {useFormik} from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../scss/main.scss';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const validationSchema = yup.object({
  firstName: yup.string().required("Glöm inte att fylla i ditt namn"),
  lastName: yup.string().required("Glöm inte att fylla i ditt namn"),
  subject: yup.string().required("Glöm inte att fylla i ämnet"),
  email: yup.string().email("ogiltig email").required("Glöm inte att fylla i din email"),
  message: yup.string().required("Glöm inte att skriva ditt meddelande"),
})

const FormContact = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
    },
    onSubmit:(values) => {
      console.log(values);
    },
    validationSchema: validationSchema
  })

    return (
      <form onSubmit={formik.handleSubmit} className='formContact__form'>
        <TextField
          id="firstName"
          name="firstName"
          className='formContact__item'
          label="Förnamn"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="lastName"
          name="lastName"
          className='formContact__item'
          label="Efternamn"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="subject"
          name="subject"
          className='formContact__item'
          label="Ämne"
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          onBlur={formik.handleBlur}
        />
        <TextField
          id="email"
          name="email"
          className='formContact__item'
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
       
        <TextField
          id="message"
          name="message"
          className='formContact__item'
          multiline
          rowsMax={4}
          rowsMin={4}
          label="Meddelande"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          onBlur={formik.handleBlur}
        />
        <Button type="submit" className='formContact__item'>Skicka</Button>
      </form>
    )
}

export default FormContact;
