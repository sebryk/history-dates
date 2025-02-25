import { Button } from './styles';
import { FC } from 'react';
import { IRoundedButtonProps } from '@/types/types';

const RoundedButton: FC<IRoundedButtonProps> = ({ title, icon, isReversed, ...props }) => {
   return (
      <Button {...props} isReversed={isReversed}>
         {title && <span>{title}</span>}
         {icon && icon}
      </Button>
   );
};

export default RoundedButton;
