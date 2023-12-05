import { colors } from '../../../styles/variables/colors';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export default function Description({ children }: Props) {
  return (
    <p
      css={{
        fontSize: '14px',
        fontWeight: 400,
        color: colors.DARK_GRAY,
      }}
    >
      {children}
    </p>
  );
}
