import { useState } from 'react';
import { SketchPicker } from 'react-color';

function InputPicker({ id, label, customColor, handleQrCustom }) {
	const [showPicker, setShowPicker] = useState(false);
	const handleShowPicker = () => setShowPicker(!showPicker);
	return (
		<div className='mt-2'>
			<input
				class="form-control d-inline-block form-control-color w-25 h-25 mr-2"
				id={id}
				name={id}
				aria-label={id}
				type="button"
				style={{ background: customColor }}
				onClick={handleShowPicker}
			/>
			<label htmlFor={id}>Select {label}</label>
			{showPicker &&
				<SketchPicker
					presetColors={['#000000', '#FFFFFF']}
					color={customColor}
					onChange={color => { handleQrCustom(color); handleShowPicker(); }}
				/>
			}
		</div>
	);
}

export default InputPicker;