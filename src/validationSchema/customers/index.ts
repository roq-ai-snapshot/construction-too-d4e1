import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  company_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
