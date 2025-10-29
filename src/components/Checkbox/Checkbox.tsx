import styles from './Checkbox.module.css';

interface CheckboxProps {
  children?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
}

export default function Checkbox({
  children,
  checked,
  defaultChecked,
  onChange,
  name,
  disabled = false,
  className = '',
}: CheckboxProps) {
  const isControlled = checked !== undefined;

  return (
    <label className={`${styles.container} ${className}`}>
      <input
        type="checkbox"
        {...(isControlled ? { checked } : { defaultChecked })}
        onChange={onChange}
        name={name}
        disabled={disabled}
        className={styles.input}
      />
      <span className={styles.checkmark}></span>
      {children && <div className={styles.label}>{children}</div>}
    </label>
  );
}
