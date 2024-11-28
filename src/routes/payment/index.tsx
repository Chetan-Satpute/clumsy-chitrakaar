import {Alert, AlertTitle, Button} from '@mui/material';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Navigate, useNavigate} from 'react-router';
import logo from '~/assets/images/logo.png';
import qrCode from '~/assets/images/qr-code.jpeg';
import {saveOrder, savePaymentImages} from '~/firebase/app';
import {useAppSelector} from '~/redux/hooks';
import {emptyCart} from '~/redux/cart/slice';
import {setPlacingOrder} from '~/redux/order/slice';
import {fileToBase64} from '~/utils/file';
import '@material/web/progress/circular-progress.js';

function Payment() {
  const [images, setImages] = useState<File[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isPlacingOrder = useAppSelector((state) => state.order.isPlacingOrder);

  const orderCart = useAppSelector((state) => state.order.cart);
  const orderAddress = useAppSelector((state) => state.order.address);

  const user = useAppSelector((state) => state.user.profile);

  const hasCartAndAddress = orderCart !== null && orderAddress !== null;
  const cartAmount = useAppSelector((state) =>
    state.order.cart?.reduce(
      (acc, product) => (acc += product.price * product.quantity),
      0,
    ),
  );

  if (!hasCartAndAddress || !user) {
    return <Navigate to="/cart" />;
  }

  const handleFilesChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const files = event.target.files;
    if (!files) return;

    const filesArray = Array.from(files);
    setImages(filesArray.slice(0, 5));
  };

  const imageCards = images.map((image) => {
    const handleRemove = () => {
      setImages(images.filter((img) => img != image));
    };

    return (
      <div
        key={image.name}
        className="flex justify-between items-center p-1 bg-neutral-200 rounded-md mb-2 flex"
      >
        <div className="text-sm flex-1 overflow-auto px-2">
          {image.name} ({(image.size / 1024).toFixed(2)} KB)
        </div>
        <span>
          <md-icon-button
            onClick={handleRemove}
            disabled={isPlacingOrder || undefined}
          >
            <md-icon>delete</md-icon>
          </md-icon-button>
        </span>
      </div>
    );
  });

  const handlePlaceOrder = async () => {
    try {
      dispatch(setPlacingOrder(true));

      const filesAsBase64 = await Promise.all(
        images.map((imageFile) => fileToBase64(imageFile)),
      );

      const paymentProofFilePaths = await savePaymentImages(
        filesAsBase64,
        user,
      );
      await saveOrder(orderCart, orderAddress, paymentProofFilePaths, user);

      dispatch(emptyCart());
      navigate('/thank-you');
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setPlacingOrder(false));
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-center">
        <img src={logo} className="h-24" />
      </div>

      <img src={qrCode} className="w-2/3 max-w-md m-auto" />

      <div className="flex justify-between px-5 my-5 md:px-10">
        <span className="font-bold text-xl">Total Amount</span>
        <span className="font-bold text-xl">{cartAmount} /-</span>
      </div>

      <div className="px-5 md:px-10 my-5">
        <Alert severity="info">
          <AlertTitle>Upload payment proof</AlertTitle>
          <p className="mb-2">
            Please upload an image file (.png, .jpeg, .jpg) that shows sender,
            receiver, transaction id and paid amount.
          </p>
          <p className="mb-2">
            You can get a sharable payment proof image by following the steps
            below
          </p>
          <ol>
            <li>
              <b>Step 1:</b> Open your UPI app
            </li>
            <li>
              <b>Step 2:</b> Open transaction history
            </li>
            <li>
              <b>Step 3:</b> Select the relevant transaction
            </li>
            <li>
              <b>Step 4:</b> Tap on share
            </li>
            <li>
              <b>Step 5:</b> Select Files (or any other medium to save the
              image)
            </li>
          </ol>
        </Alert>
      </div>

      <div className="px-5 md:px-10 my-5">{imageCards}</div>

      <div className="px-5 md:px-10 mb-10">
        {images.length === 0 ? (
          <Button
            variant="contained"
            component="label"
            color="primary"
            className="!rounded-full !normal-case w-full"
            startIcon={<md-icon slot="icon">upload</md-icon>}
            disabled={isPlacingOrder}
          >
            Select Images
            <input
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleFilesChange}
            />
          </Button>
        ) : (
          <div className="flex justify-center">
            <md-filled-button
              trailing-icon
              class="w-full max-w-sm"
              disabled={isPlacingOrder || undefined}
              onClick={handlePlaceOrder}
            >
              Place order
            </md-filled-button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
