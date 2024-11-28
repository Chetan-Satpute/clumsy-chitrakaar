import {useMemo} from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import {useFormik} from 'formik';
import logo from '~/assets/images/logo.png';
import {addressSchema, AddressFormData} from './schema';
import {states} from '~/data/states';
import {useAppDispatch, useAppSelector} from '~/redux/hooks';
import {Navigate, useNavigate} from 'react-router';
import {saveOrderAddress} from '~/redux/order/slice';

function Address() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hasCart = useAppSelector((state) => state.order.cart !== null);

  const formik = useFormik<AddressFormData>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      country: 'India',
      state: '',
      city: '',
      postalCode: '',
      address: '',
    },
    validationSchema: addressSchema,
    onSubmit: (data: AddressFormData) => {
      dispatch(saveOrderAddress(data));
      navigate('/payment');
    },
  });

  const stateMenuItems = useMemo(
    () =>
      states.map((state) => (
        <MenuItem key={state.state_code} value={state.name}>
          {state.name}
        </MenuItem>
      )),
    [],
  );

  if (!hasCart) {
    return <Navigate to="/cart" />;
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center">
        <img src={logo} className="h-24" />
      </div>

      <div className="p-5 md:p-10 flex flex-col gap-4">
        <div className="flex gap-2 items-start">
          <TextField
            name="firstName"
            className="flex-1"
            label="First name"
            variant="standard"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.firstName && formik.touched.firstName)}
            helperText={
              (formik.touched.firstName && formik.errors.firstName) || ''
            }
          />
          <TextField
            name="lastName"
            className="flex-1"
            label="Last name"
            variant="standard"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.lastName && formik.touched.lastName)}
            helperText={
              (formik.touched.lastName && formik.errors.lastName) || ''
            }
          />
        </div>
        <TextField
          name="email"
          label="Email"
          placeholder="user@gmail.com"
          variant="standard"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.email && formik.touched.email)}
          helperText={(formik.touched.email && formik.errors.email) || ''}
        />
        <TextField
          type="number"
          name="contactNumber"
          label="Contact number"
          variant="standard"
          value={formik.values.contactNumber}
          slotProps={{
            input: {
              startAdornment: <span className="pr-2">+91</span>,
            },
          }}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(
            formik.errors.contactNumber && formik.touched.contactNumber,
          )}
          helperText={
            (formik.touched.contactNumber && formik.errors.contactNumber) || ''
          }
        />
        <TextField
          name="country"
          label="Country"
          variant="standard"
          value="India"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.country && formik.touched.country)}
          helperText={(formik.touched.country && formik.errors.country) || ''}
          disabled
        />

        <FormControl variant="standard">
          <InputLabel>State</InputLabel>

          <Select
            name="state"
            label="State"
            value={formik.values.state}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.state && formik.touched.state)}
          >
            <MenuItem value=""></MenuItem>
            {stateMenuItems}
          </Select>
          <FormHelperText
            error={Boolean(formik.errors.state && formik.touched.state)}
          >
            {(formik.touched.state && formik.errors.state) || ''}
          </FormHelperText>
        </FormControl>

        <div className="flex gap-2 items-start">
          <TextField
            className="flex-1"
            name="city"
            label="City"
            variant="standard"
            value={formik.values.city}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.city && formik.touched.city)}
            helperText={(formik.touched.city && formik.errors.city) || ''}
          />

          <TextField
            className="flex-1"
            name="postalCode"
            label="Postal Code"
            variant="standard"
            value={formik.values.postalCode}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(
              formik.errors.postalCode && formik.touched.postalCode,
            )}
            helperText={
              (formik.touched.postalCode && formik.errors.postalCode) || ''
            }
          />
        </div>

        <TextField
          multiline
          rows={5}
          name="address"
          label="Address"
          variant="standard"
          value={formik.values.address}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.address && formik.touched.address)}
          helperText={(formik.touched.address && formik.errors.address) || ''}
        />

        <div className="flex justify-center my-5">
          <md-filled-button
            trailing-icon
            class="w-full max-w-sm"
            onClick={formik.handleSubmit}
          >
            Proceed to payment
            <md-icon slot="icon">shopping_bag</md-icon>
          </md-filled-button>
        </div>
      </div>
    </div>
  );
}

export default Address;
