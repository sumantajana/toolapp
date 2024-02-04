function InputUrl({ url, setUrl, httpRegEx }) {
	const handleUrl = e => setUrl(e.target.value);
	const handleValidateUrl = () => {
		if (url && !httpRegEx.test(url)) {
			setUrl('http://' + url);
		}
	}
	return (
		<div className="form-group">
			<label htmlFor="url">Enter your URL</label>
			<input
				id="url"
				name="url"
				type="text"
				value={url}
				onChange={handleUrl}
				onBlur={handleValidateUrl}
				placeholder="Add URL for QR Code Generation"
				required
				className="form-control"
			/>
		</div>
	);
}
export default InputUrl;