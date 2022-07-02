import React from 'react';
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
} from 'tabler-icons-react';
import NavbarLink from './Link/NavbarLink';

const data = [
  { icon: <GitPullRequest size={16} />, color: 'blue', label: 'Pull Requests' },
  { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
  { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
];

export function NavbarLinks() {
  const links = data.map((link) => <NavbarLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
