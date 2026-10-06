import { assets } from '@/assets/assets'

const logoSrc = typeof assets.logo === 'string' ? assets.logo : assets.logo.src

const Logo = ({ className = 'h-8 w-20', align = 'left', showAccent = true }) => {
  return (
    <span
      className={`inline-flex flex-col ${
        align === 'center' ? 'items-center' : 'items-start'
      }`}
    >
      <span
        role="img"
        aria-label="Swetha"
        className={`block bg-[#950434] ${className}`}
        style={{
          WebkitMaskImage: `url(${logoSrc})`,
          maskImage: `url(${logoSrc})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskPosition: align === 'center' ? 'center' : 'left center',
          maskPosition: align === 'center' ? 'center' : 'left center',
        }}
      />
      {showAccent ? (
        <span
          aria-hidden="true"
          className={`mt-0.5 h-px bg-[#2f2f34] ${
            align === 'center' ? 'w-2/3' : 'w-3/4'
          }`}
        />
      ) : null}
    </span>
  )
}

export default Logo
