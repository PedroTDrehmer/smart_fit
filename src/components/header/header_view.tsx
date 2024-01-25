import './header.scss';
import { memo } from 'react';
import { ReactElement } from 'react';

export function HeaderComponent(): ReactElement {
    return (
        <header>
            <div className="logo-container">
            </div>
            <div className="text-container">
                <div className="heading">
                    <h1>REABERTURA</h1>
                    <span className="heading-border">
                        <div className="text-inutil">cotinue sem ir</div>
                        </span>
                </div>
                <p>O horário de funcionamento das nossas unidades está seguindo a convicção que você não irá. De todo o modo, preencha o formulário.</p>
            </div>
        </header>
    );
}

export default memo(HeaderComponent);
