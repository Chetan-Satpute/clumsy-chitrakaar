import * as yup from 'yup';

/*
export const addressSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  contactNumber: yup.string().length(10).required(),
  country: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  postalCode: yup.string().length(6).required(),
  address: yup.string().required(),
});
*/

export const addressSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email().required(),
  contactNumber: yup
    .string()
    .length(10, 'Enter a valid 10 digit contact number')
    .required(),
  country: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  postalCode: yup.string().length(6).required(),
  address: yup.string().required(),
});

export type AddressFormData = yup.InferType<typeof addressSchema>;
