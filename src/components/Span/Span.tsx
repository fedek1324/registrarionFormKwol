import styles from './Span.module.css';

interface SpanProps {
  children: React.ReactNode;
  className?: string;
}

export default function Span({ children, className = '' }: SpanProps) {
  return (
    <span className={`${styles.span} ${className}`}>
      {children}
    </span>
  );
}
