import React from 'react';
import classNames from 'classnames/bind';

import styles from './FileInput.module.scss';
import { Upload } from 'lucide-react';

const cn = classNames.bind(styles);

const FileInput = React.forwardRef(
	(
		{
			onBlur,
			name,
			onChange,
			placeholder,
			value,
			className,
			error,
			formActions,
			fileType = 'image',
		},
		ref
	) => {
		const [isDrag, setIsDrag] = React.useState(false);
		const { setError, setValue, clearErrors } = formActions;

		const dragHandler = e => {
			e.preventDefault();
			setIsDrag(true);
		};

		const dragLeaveHandler = e => {
			e.preventDefault();
			setIsDrag(false);
		};

		const dropFileHandler = e => {
			e.preventDefault();

			setIsDrag(false);
			clearErrors(name);

			if (Object.keys(e.dataTransfer.files).length > 1) {
				setError(name, {
					type: 'custom',
					message: 'Выберите только один файл',
				});
				return;
			}

			const fileList = e.dataTransfer.files;
			if (fileList[0].type.includes(fileType)) {
				setValue(name, fileList);
			} else {
				setError(name, {
					type: 'custom',
					message: `Файл должен быть типа ${fileType}`,
				});
			}
		};
		//FEAT: AUTH on reload page, profile in header
		return (
			<>
				<div
					className={cn(styles.root, className, { active: isDrag })}
					onDragOver={dragHandler}
					onDragLeave={dragLeaveHandler}
					onDrop={dropFileHandler}
				>
					<label
						onClick={() => clearErrors('avatar')}
						htmlFor={name}
						className={styles.label}
					>
						<Upload className={styles.icon} />
						<span>{placeholder}</span>
						<input
							id={name}
							type='file'
							accept={`${fileType}/*`}
							onChange={onChange}
							onBlur={onBlur}
							name={name}
							ref={ref}
							className={styles.input}
							hidden
						/>
					</label>
				</div>

				{Object.keys(value).length > 0 && (
					<span className={styles.selectedFile}>{value[0].name}</span>
				)}
				{error && <span className={styles.error}>{error}</span>}
			</>
		);
	}
);

export default FileInput;
