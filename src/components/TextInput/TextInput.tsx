import styles from './TextInput.module.css';

interface TextInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export default function TextInput({
  placeholder,
  value,
  onChange,
  name,
  disabled = false,
  className = '',
  label,
}: TextInputProps) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
}
