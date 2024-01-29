import {useState} from 'react';

const valorModel = () => {
    const [valor, setValor] = useState<string>();
    return {
        valor,
        setValor
    };
};

export default valorModel
