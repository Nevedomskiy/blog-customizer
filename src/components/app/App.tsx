import clsx from 'clsx';
import { CSSProperties, useState } from 'react';

import {
	ArticleStateType,
	defaultArticleState,
} from '../../constants/articleProps';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';

import './App.scss';
import styles from './index.module.scss';

export const App = () => {
	const [isOpenForm, setIsOpenForm] = useState(true);
	const [appState, setAppState] =
		useState<ArticleStateType>(defaultArticleState);

	function changeAppState(newState: ArticleStateType) {
		setAppState(newState);
	}
	function resetAppState() {
		setAppState(defaultArticleState);
	}

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appState.fontFamilyOption.value,
					'--font-size': appState.fontSizeOption.value,
					'--font-color': appState.fontColor.value,
					'--container-width': appState.contentWidth.value,
					'--bg-color': appState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpenForm}
				changeOpenForm={setIsOpenForm}
				onSubmit={changeAppState}
				onReset={resetAppState}
			/>
			<Article />
		</main>
	);
};
