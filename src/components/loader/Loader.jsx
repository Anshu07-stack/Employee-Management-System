import React from 'react'

const Loader = ({ 
  size = "md", 
  text = "Loading...", 
  fullScreen = false,
  color = "text-emerald-500"
}) => {
  
  // Responsive size mappings
  const getSizeClass = () => {
    switch(size) {
      case 'xs':
        return 'loading-xs'
      case 'sm':
        return 'loading-sm'
      case 'md':
        return 'loading-md'
      case 'lg':
        return 'loading-lg'
      case 'xl':
        return 'loading-xl'
      default:
        return 'loading-md'
    }
  }

  // Responsive text sizes
  const getTextSize = () => {
    switch(size) {
      case 'xs':
        return 'text-xs sm:text-xs'
      case 'sm':
        return 'text-xs sm:text-sm'
      case 'md':
        return 'text-sm sm:text-base'
      case 'lg':
        return 'text-base sm:text-lg'
      case 'xl':
        return 'text-lg sm:text-xl'
      default:
        return 'text-sm sm:text-base'
    }
  }

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-neutral-950/90 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center px-4">
          <span className={`loading loading-ring ${getSizeClass()} ${color}`}></span>
          {text && (
            <p className={`text-white mt-4 ${getTextSize()} animate-pulse`}>
              {text}
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center w-full py-6 sm:py-8 md:py-10">
      <span className={`loading loading-ring ${getSizeClass()} ${color}`}></span>
      {text && (
        <p className={`text-white mt-3 ${getTextSize()}`}>
          {text}
        </p>
      )}
    </div>
  )
}

export default Loader