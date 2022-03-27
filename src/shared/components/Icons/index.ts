import AddCircle from './AddCircle';
import ArrowRight from './ArrowRight';
import Check from './Check';
import Copy from './Copy';
import Dislike from './Dislike';
import Edit from './Edit';
import Lock from './Lock';
import Logo from './Logo';
import Delete from './Delete';
import Menu from './Menu';
import Search from './Search';
import More from './More';
import ArrowCircle from './ArrowCircle';
import SkipIcon from './SkipIcon';

export interface IIconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
  onClick?: () => void;
}

export {
  Copy,
  Dislike,
  AddCircle,
  ArrowRight,
  ArrowCircle,
  Lock,
  Logo,
  Edit,
  Check,
  Delete,
  Menu,
  Search,
  More,
  SkipIcon,
};
