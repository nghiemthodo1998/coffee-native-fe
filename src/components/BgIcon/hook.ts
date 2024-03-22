export interface BgIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}

const useBgIcon = (props: BgIconProps) => {
  return {
    ...props,
  };
};

export default useBgIcon;
