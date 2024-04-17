const Button = ({ children, textOnly, className, ...props }) => {
  let stylings = textOnly ? 'text-button' : 'button';
  stylings += className ? ' ' + className: '';
  
  return(
    <button className={stylings} {...props}>
      {children}
    </button>
  )
}

export default Button