import { clsx } from 'clsx';
import { ElementType } from 'react';
import styles from './Indent.module.scss';

type IndentProps = {
	/**размер отступа */
	size: 4 | 24 | 50 | 90 | 207;
	/**тег для рендера */
	as?: ElementType;
};

export const Indent = ({ size, as: Tag = 'div' }: IndentProps) => {
	return <Tag className={clsx(styles[`size_${size}`])}></Tag>;
};
