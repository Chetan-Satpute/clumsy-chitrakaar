import {onAuthStateChanged} from 'firebase/auth';
import {PropsWithChildren, useEffect} from 'react';
import {auth} from '~/firebase/app';
import {useAppDispatch} from '~/redux/hooks';
import {updateUserProfile} from '~/redux/user/slice';

function FirebaseAppWrapper(props: PropsWithChildren) {
  const {children} = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('[Firebase User]', user);

      dispatch(
        updateUserProfile(
          user === null
            ? null
            : {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
              },
        ),
      );
    });

    return () => unsubscribe();
  }, [dispatch]);

  return children;
}

export default FirebaseAppWrapper;
