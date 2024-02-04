import { useEffect, useState } from 'react';
import InputUrl from './InputUrl';
import InputPicker from './InputPicker';
import InputFileImg from './InputFileImg';
import { func } from '../../../../helper/import';
function FormQrCustom({ qrRef, url, qrColor, qrBgColor, noImg, setUrl, setQrColor, setQrBgColor, setCustomImg, setNoImg, handleQrReset }) {
	const httpRegEx = /^https?:\/\//;
	const [downloaded, setDownloaded] = useState(false);
	useEffect(() => {
		if (downloaded) {
			const msg = setTimeout(() => setDownloaded(false), 3500);
			return () => clearTimeout(msg);
		}
	}, [downloaded]);
	const handleQrCustom = color => setQrColor(color.hex);
	const handleQrBgCustom = color => setQrBgColor(color.hex);
	const _download = event => {
		event.preventDefault();
		const canvasNode = qrRef.current.querySelector('canvas');
		const imageNode = canvasNode.toDataURL("image/png");
		func._download(imageNode, `${url.replace(httpRegEx, '').trim()}_QR_Code.png`);
		handleQrReset();
		setDownloaded(true);
	}
	return <>
		<InputUrl
			url={url}
			setUrl={setUrl}
			httpRgx={httpRegEx}
		/>
		<InputPicker
			label={'QR Color'}
			id={'qrColor'}
			customColor={qrColor}
			handleQrCustom={handleQrCustom}
		/>
		<InputPicker
			label={'Background'}
			id={'qrBgColor'}
			customColor={qrBgColor}
			handleQrCustom={handleQrBgCustom}
		/>
		<InputFileImg
			noImg={noImg}
			setNoImg={setNoImg}
			setCustomImg={setCustomImg}
		/>
		<button className='btn btn-secondary' onClick={_download}>Download QR</button>
		{downloaded &&
			<p className="success-msg">QR Code Downloaded.</p>
		}
	</>
}
export default FormQrCustom;