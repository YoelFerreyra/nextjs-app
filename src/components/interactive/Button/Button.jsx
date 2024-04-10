const Button = ({ children, styles, type = 'button', action = () => {}, redirectTo = '/' }) => {
  const selectTag = () => {
    switch (type) {
      case 'a':
        return (
          <a className="btn" href={redirectTo}>
            {children}
          </a>
        );
      default:
        return (
          <button className="btn" onClick={action} style={styles}>
            {children}
          </button>
        );
    }
  };

  return selectTag();
};

export default Button;
