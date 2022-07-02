import Link, { LinkProps } from 'next/link';
import { Text, TextProps } from '@mantine/core';
import React from 'react';

type Props = LinkProps & {
  text: string;
  target?: string;
  textProps?: Omit<TextProps<Text>, 'component'> & { component?: string };
};

const TextLink: React.FC<Props> = ({
  target = '_blank',
  textProps,
  text,
  ...props
}) => {
  return (
    <Link target={target} passHref {...props}>
      <Text {...textProps} component="a">
        {text}
      </Text>
    </Link>
  );
};

export default TextLink;
