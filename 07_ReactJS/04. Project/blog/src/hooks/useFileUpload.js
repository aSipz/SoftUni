import { useCallback, useEffect, useRef, useState } from 'react';

export default function useFileUpload(fetchHandler, onFileChangeHandler) {
    const [file, setFile] = useState();
    const [fileDataURL, setFileDataURL] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        } else {
            setFileDataURL(null);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);

    const handleClick = useCallback(() => {
        inputRef.current?.click();
    }, []);

    const onCancelUpload = useCallback(() => {
        setFile(null);
    }, []);

    const handleFileChange = useCallback((e) => {

        if (e.target.files) {
            setFile(e.target.files[0]);
            e.target.value = null;
            if (onFileChangeHandler) {
                onFileChangeHandler();
            }
        }
    }, [onFileChangeHandler]);

    const handleFileUpload = useCallback(async () => {
        if (!file) {
            return;
        }
        setDisabled(true);
        document.body.style.setProperty('cursor', 'wait');

        await fetchHandler();

        document.body.style.setProperty('cursor', 'auto');
        setFile(null);
        setDisabled(false);
    }, [file, fetchHandler]);

    return [
        file,
        inputRef,
        disabled,
        handleClick,
        onCancelUpload,
        handleFileChange,
        handleFileUpload,
        fileDataURL
    ]
}