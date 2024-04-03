import {useState} from 'react'
import {Container1, Image1, P1, Button} from './styledComponents'
// Write your code here
const Unlock = () => {
  const [value, setValue] = useState(true)

  const onValue = () => {
    setValue(prevState => !prevState)
  }

  const urlValue = !value
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altValue = !value ? 'unlock' : 'lock'
  return (
    <Container1>
      <Image1 src={urlValue} alt={altValue} />
      <P1>{value ? 'Your Device is Locked' : 'Your Device is Unlocked'}</P1>
      <Button onClick={onValue} type="button">
        {!value ? 'Lock' : 'Unlock'}
      </Button>
    </Container1>
  )
}

export default Unlock
