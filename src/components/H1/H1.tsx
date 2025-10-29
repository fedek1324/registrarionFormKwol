import styles from './H1.module.css';

interface H1Props {
  children: React.ReactNode;
  className?: string;
}

export default function H1({ children, className = '' }: H1Props) {
  return (
    <h1 className={`${styles.h1} ${className}`}>
      {children}
    </h1>
  );
}
