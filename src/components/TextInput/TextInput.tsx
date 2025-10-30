import { forwardRef } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = 'text', className = '', label, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          type={type}
          className={`${styles.input} ${className}`}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
