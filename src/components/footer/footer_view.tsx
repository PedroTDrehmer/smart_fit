import './footer.scss';
import { memo } from 'react';
import { ReactElement } from 'react';

export function FooterView(): ReactElement {
    return (
        <footer>
            <p>Todos direitos reservados para você não ir - 2024 </p>
        </footer>
    );
}

export default memo(FooterView);
