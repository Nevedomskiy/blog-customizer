import clsx from 'clsx';
import { SyntheticEvent, useRef, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Indent } from 'src/ui/indent';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	isOpen: boolean;
	onSubmit: (value: ArticleStateType) => void;
	onReset: () => void;
	changeOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	isOpen,
	changeOpenForm,
	onSubmit,
	onReset,
}) => {
	const defaultStateForm = useRef<ArticleStateType>(defaultArticleState);
	const [fontFamily, setFontFamily] = useState<OptionType>(
		defaultStateForm.current.fontFamilyOption
	);
	const [fontSize, setFontSize] = useState<OptionType>(
		defaultStateForm.current.fontSizeOption
	);
	const [fontColor, setFontColor] = useState<OptionType>(
		defaultStateForm.current.fontColor
	);
	const [contentWidth, setContentWidth] = useState<OptionType>(
		defaultStateForm.current.contentWidth
	);

	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		defaultStateForm.current.backgroundColor
	);

	function changeFormFamily(selected: OptionType): void {
		setFontFamily(selected);
	}

	function changeFontSize(selected: OptionType): void {
		setFontSize(selected);
	}
	function changeFontColor(selected: OptionType): void {
		setFontColor(selected);
	}
	function changeBackgroundColor(selected: OptionType): void {
		setBackgroundColor(selected);
	}
	function changeContentWidth(selected: OptionType): void {
		setContentWidth(selected);
	}

	function changeSubmitForm(e: SyntheticEvent) {
		e.preventDefault();
		onSubmit({
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		});
	}
	function changeResetForm() {
		onReset();
		setFontFamily(defaultStateForm.current.fontFamilyOption);
		setFontSize(defaultStateForm.current.fontSizeOption);
		setBackgroundColor(defaultStateForm.current.backgroundColor);
		setFontColor(defaultStateForm.current.fontColor);
		setContentWidth(defaultStateForm.current.contentWidth);
	}

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					changeOpenForm((prev) => !prev);
				}}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form} onSubmit={changeSubmitForm}>
					<Text as='h3' size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>

					<Indent size={50} />

					<Select
						selected={fontFamily}
						options={fontFamilyOptions}
						onChange={changeFormFamily}
						title={'шрифт'}
					/>

					<Indent size={50} />

					<RadioGroup
						name='font-size'
						selected={fontSize}
						options={fontSizeOptions}
						onChange={changeFontSize}
						title={'Размер шрифта'}
					/>

					<Indent size={50} />

					<Select
						selected={fontColor}
						options={fontColors}
						onChange={changeFontColor}
						title={'Цвет шрифта'}
					/>

					<Indent size={50} />

					<Separator />

					<Indent size={50} />

					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={changeBackgroundColor}
						title={'Цвет фона'}
					/>

					<Indent size={50} />

					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={changeContentWidth}
						title={'Ширина контента'}
					/>

					<Indent size={207} />

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={changeResetForm}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
