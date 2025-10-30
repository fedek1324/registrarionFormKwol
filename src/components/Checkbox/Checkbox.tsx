import { forwardRef, type ReactNode } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  children?: ReactNode, 
  defaultChecked?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  defaultChecked,
  children,
  ...props
}, ref) => {

  return (
    <label className={`${styles.container}`}>
      <input
        type="checkbox"
        {...{ defaultChecked }}
        className={styles.input}
        ref={ref}
        {...props}
      />
      <span className={styles.checkmark}></span>
      {children && <div className={styles.label}>{children}</div>}
    </label>
  );
});

export default Checkbox;