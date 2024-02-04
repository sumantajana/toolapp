import { useRef, useState } from 'react';
import FormQrCustom from './components/FormQrCustom';
import QrCard from './components/QrCard';
import ToolTemplate from '../template';
import './index.css';
function GenerateQR(props) {
    const qrRef = useRef();
    const [url, setUrl] = useState(''),
        [qrColor, setQrColor] = useState('#ffffff'),
        [qrBgColor, setQrBgColor] = useState('#000000'),
        [customImg, setCustomImg] = useState(''),
        [noImg, setNoImg] = useState(false);
    const handleQrReset = () => {
        setUrl('');
        setQrColor('#ffffff');
        setQrBgColor('#000000');
        setCustomImg('');
        setNoImg(false);
    }
    return <ToolTemplate {...props}>
        <div className="row tool-bg p-5 rounded mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <FormQrCustom
                    qrRef={qrRef}
                    url={url}
                    qrColor={qrColor}
                    qrBgColor={qrBgColor}
                    noImg={noImg}
                    setUrl={setUrl}
                    setQrColor={setQrColor}
                    setQrBgColor={setQrBgColor}
                    setCustomImg={setCustomImg}
                    setNoImg={setNoImg}
                    handleQrReset={handleQrReset}
                />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <QrCard
                    qrRef={qrRef}
                    url={url}
                    qrColor={qrColor}
                    bgColor={qrBgColor}
                    customImg={customImg}
                    noImg={noImg}
                />
            </div>
        </div>
    </ToolTemplate >
}
export default GenerateQR;