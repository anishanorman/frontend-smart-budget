export default function VerifyLoading (){
  return(
    <div id="container">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
              floodColor="#DC5E28"/>
          </filter>
        </defs>
        <circle id="spinner" style={{ fill: 'transparent', stroke: '#DC5E28', strokeWidth: '7px', strokeLinecap: 'round', filter: 'url(#shadow)' }} cx="50" cy="50" r="45"/>
      </svg>
    </div>
  )
}
  
