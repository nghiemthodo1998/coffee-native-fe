export interface GrandientBGIconProps {
  name: string;
  color: string;
  size: number;
}

const useGrandientBGIcon = (props: GrandientBGIconProps) => {
  return {
    ...props,
  };
};

export default useGrandientBGIcon;
