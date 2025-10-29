import { Link, type LinkProps } from 'react-router-dom';
import styles from './ALink.module.css';

interface ALinkProps extends Omit<LinkProps, 'className'> {
  children: React.ReactNode;
  className?: string;
}

export default function ALink({ children, className = '', ...props }: ALinkProps) {
  return (
    <Link className={`${styles.link} ${className}`} {...props}>
      {children}
    </Link>
  );
}
