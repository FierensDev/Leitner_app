export function Cross({color}){
  return(
    <div>
      <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2L2 14" stroke={color} stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        <path d="M2 2L14 14" stroke={color} stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    </div>
  )
}