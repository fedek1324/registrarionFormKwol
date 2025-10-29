import styles from './Form.module.css';

interface FormProps {
  children: React.ReactNode;
  className?: string;
}

export default function Form({ children, className = '' }: FormProps) {
  return (
    <div className={`${styles.form} ${className}`}>
      {children}
    </div>
  );
}
