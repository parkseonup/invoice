import { useEffect, useState } from 'react';
import MenuButton from '../atoms/MenuButton';
import Menu from '../molecules/Menu';
import HeaderTitle from '../atoms/HeaderTitle';
import { css } from '@emotion/react';
import { contentPadding } from '../../../styles/common/layout/contentPadding';
import { colors } from '../../../styles/variables/colors';

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'visible';
  }, [showMenu]);

  return (
    <header
      css={css(contentPadding, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        color: showMenu ? colors.WHITE : colors.BLACK,
      })}
    >
      <HeaderTitle />
      <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} />
    </header>
  );
}
