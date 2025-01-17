import { Spinner } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Variants = 'green-solid' | 'green-outline' | 'black-solid' | 'black-outline';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  variant?: Variants;
  children?: ReactNode;
}

const Button = ({ className = '', variant = 'green-solid', isDisabled = false, isLoading = false, children = null, ...rest }: Props) => {
  let toShow;
  if (isLoading) {
    if (variant === 'black-solid') {
      toShow = <Spinner color='#FFFFFF' />;
    } else {
      toShow = <Spinner />;
    }
  } else {
    toShow = children;
  }
  const styling = twMerge(getConfig(variant), className);
  return (
    <button className={styling} disabled={isDisabled} {...rest}>
      {toShow}
    </button>
  );
};

const getConfig = (variant: Variants) => {
  let colourConfig = '';
  const config =
    'font-normal w-fit h-[48px] rounded-lg border-[1px] disabled:opacity-50 disabled:pointer-events-none text-lg leading-6 font-sans px-6 py-2.5';
  switch (variant) {
    case 'green-solid':
      colourConfig = 'bg-main-green border-btn-green hover:bg-btn-green ';
      break;
    case 'green-outline':
      colourConfig = 'bg-[#FFFFFF] border-btn-green hover:bg-main-light-green ';
      break;
    case 'black-solid':
      colourConfig = 'bg-[#4D4D4D] border-hover-dark-gray hover:bg-hover-dark-gray text-white ';
      break;
    case 'black-outline':
      colourConfig = 'bg-gray-300 border-[#131313] hover:bg-[#B5B5B5] ';
      break;
  }

  return twMerge(colourConfig, config);
};

export default Button;
