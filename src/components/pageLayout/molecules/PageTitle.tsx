import { HTMLAttributes } from 'react';
import Title from '../../common/atoms/Title';
import Description from '../atoms/Description';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description, ...props }: Props) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
      {...props}
    >
      <Title as="h2" font="size900">
        {title}
      </Title>
      <Description>{description}</Description>
    </div>
  );
}
