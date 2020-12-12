import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('format d\'email invalide').required('Remplissez ce champ'),
  password: Yup.string()
    .min(6, 'Trop court, 6 caractères minimum')
    .max(32, 'Trop long, 32 caractères maximum')
    .required('Remplissez ce champ'),

});

export default LoginSchema;
