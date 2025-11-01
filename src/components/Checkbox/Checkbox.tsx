import { forwardRef, type ReactNode, type InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...props }, ref) => {
    return (
      <label className={styles.container}>
        <div className={styles.iconContainer}>
          <input
            type="checkbox"
            className={styles.input}
            ref={ref}
            {...props}
          />
          <span className={styles.checkmark}></span>
        </div>
        {children && <div className={styles.label}>{children}</div>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
