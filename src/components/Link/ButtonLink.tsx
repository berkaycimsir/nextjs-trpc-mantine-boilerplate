import Link, { LinkProps } from 'next/link';
import { ButtonProps, SharedButtonProps, Button } from '@mantine/core';
import React from 'react';

type Props = LinkProps & {
  text: string;
  buttonProps?: Omit<ButtonProps<SharedButtonProps>, 'component'> & {
    component?: string;
  };
};

const ButtonLink: React.FC<Props> = ({ buttonProps, text, ...props }) => {
  return (
    <Link passHref {...props}>
      <Button {...buttonProps} component="a">
        {text}
      </Button>
    </Link>
  );
};

export default ButtonLink;
