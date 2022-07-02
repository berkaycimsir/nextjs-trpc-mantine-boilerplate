import Link, { LinkProps } from 'next/link';
import { Text, TextProps } from '@mantine/core';
import React from 'react';

type Props = LinkProps & {
  text: string;
  textProps: Omit<TextProps<Text>, 'component'> & { component?: string };
};

const TextLink: React.FC<Props> = ({ textProps, text, ...props }) => {
  return (
    <Link passHref {...props}>
      <Text {...textProps} component="a">
        {text}
      </Text>
    </Link>
  );
};

export default TextLink;
