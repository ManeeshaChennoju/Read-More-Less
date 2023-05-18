// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Para,
  Img,
  Div,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [readLess, updateReadingText] = useState(true)
  const {reactHooksDescription} = props
  const string = reactHooksDescription.split(' ')
  const lessText = string.slice(0, 27)
  const fullText = reactHooksDescription

  const onClickButton = () => {
    updateReadingText(prevState => !prevState)
  }

  const text = readLess ? lessText.join(' ') : fullText
  const buttonText = readLess ? 'Read More' : 'Read Less'
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />
      <Para>{text}</Para>
      <Div>
        <Button onClick={onClickButton} type="button">
          {buttonText}
        </Button>
      </Div>
    </MainContainer>
  )
}

export default ReadMore
