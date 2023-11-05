import { css } from '@emotion/react';
import { zIndexes } from '../../../styles/variables/zIndexes';

export default function HeaderTitle() {
  return (
    <h1
      css={css({
        position: 'relative',
        zIndex: zIndexes.HEADER_TITLE,
        margin: 0,
        fontSize: '16px',
        fontWeight: 500,
      })}
    >
      정산하자
    </h1>
  );
}
