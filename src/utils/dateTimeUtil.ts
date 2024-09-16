export const convertToNPT = (timestamp: number) => {
  const dateUTC = new Date(timestamp * 1000) 
  const nepalOffset = 5 * 60 + 45 

  
  const nptTime = new Date(dateUTC.getTime() + nepalOffset * 60000)

  
  return nptTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kathmandu'
  })
}

export const getTimeInNPT = (timestamp: number) => {
  const dateUTC = new Date(timestamp * 1000) 
  const nepalOffset = 5 * 60 + 45 

  
  const nptTime = new Date(dateUTC.getTime() + nepalOffset * 60000)

  
  return nptTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Kathmandu'
  })
}
