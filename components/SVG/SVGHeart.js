export default function SVGHeart({ classes }) {
  return (
    <svg
      className={`${classes ? classes : 'h-8'}`}
      fill='none'
      viewBox='0 0 24 24'
      id='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Iconly/Curved/Heart'>
        <g id='Heart'>
          <path
            id='Stroke 1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.92178 12.4462C1.84878 9.09619 3.10378 4.93119 6.62078 3.79919C8.47078 3.20219 10.7538 3.70019 12.0508 5.48919C13.2738 3.63419 15.6228 3.20619 17.4708 3.79919C20.9868 4.93119 22.2488 9.09619 21.1768 12.4462C19.5068 17.7562 13.6798 20.5222 12.0508 20.5222C10.4228 20.5222 4.64778 17.8182 2.92178 12.4462Z'
            stroke='#000'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 3'
            d='M15.7885 7.56396C16.9955 7.68796 17.7505 8.64496 17.7055 9.98596'
            stroke='#000'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  )
}
