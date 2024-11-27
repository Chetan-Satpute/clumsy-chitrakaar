import {useEffect, useRef} from 'react';

interface TextFieldProps {
  name: string;
  className?: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

function TextField(props: TextFieldProps) {
  const {name, className, label, value, error, onChange} = props;

  const textFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const textField = textFieldRef.current;

    const handleChange = (e: unknown) => {
      console.log(e);
    };

    textField?.addEventListener('change', handleChange);

    return () => {
      textField?.removeEventListener('change', handleChange);
    };
  }, []);

  return <md-filled-text-field ref={textFieldRef} name={name} class={className} label={label} value={value} error />;
}

export default TextField;
