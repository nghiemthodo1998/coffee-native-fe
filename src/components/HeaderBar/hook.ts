export interface HeaderBarProps {
  title?: string;
}

const useHeaderBar = (props: HeaderBarProps) => {
  return {
    ...props,
  };
};

export default useHeaderBar;
