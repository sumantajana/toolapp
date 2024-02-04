function InputFileImg({ noImg, setNoImg, setCustomImg }) {
	const handleImage = e => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setCustomImg(reader.result);
			}
		}
		reader.readAsDataURL(e.target.files[0]);
	}
	return <>
		<div>
			<label for="file" class="form-label">Upload custom image</label>
			<input className="form-control form-control-lg p-3" id="file" type="file" name="file"
				accept="image/png, image/jpeg"
				onChange={handleImage}
				disabled={noImg} />
		</div>
		<div className="form-group mt-2">
			<label htmlFor="isIncludeUpperCase" className='mr-1'>Without image</label>
			<input
				id="noImg"
				name="noImg"
				type="checkbox"
				value={noImg}
				checked={noImg}
				onClick={() => setNoImg(!noImg)}
			/>
		</div>
	</>
}
export default InputFileImg;