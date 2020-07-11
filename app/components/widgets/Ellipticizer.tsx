interface Props {
  children: JSX.Element | string;
  width?: string;
};

export const Ellipticizer:React.FC<Props> = ({ children, width }) => {
  return (
    <span>
      {children}
      
      <style jsx>{`
        span {
          width: ${width || 'auto'};
          display:inline-block;
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow:hidden;
        }
      `}</style>
    </span>
  );
};
