

const MyButton = ({className, label, children}) => {
    
  const spanClasses = "relative z-10";
  return (
    
        <button className={`${className || 'px-7 py-5 bg-black text-white rounded-2xl'}`}>
                  <span className={spanClasses}>{children}</span>
        </button>
  )
}

export default MyButton
