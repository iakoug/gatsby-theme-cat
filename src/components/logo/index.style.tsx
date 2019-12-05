import Styled from 'styled-components';
import { Icon } from '../Icon';

export const LogoIcon = Styled(Icon).attrs({
    type: 'heart-2',
})`
    padding-right: 8px;
    font-size: 24px !important;
    vertical-align: sub;
`;
