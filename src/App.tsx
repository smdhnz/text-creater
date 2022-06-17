import { useState } from 'react'
import {
  Box,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  Collapse,
  Checkbox,
} from '@chakra-ui/react'
import { colors } from 'datas'

const Title = ({ value }: { value: string }) => (
  <Box fontSize='sm' fontWeight='bold' color='gray.500' >
    {value}
  </Box>
)

export const App = () => {
  const [text, setText] = useState('text')
  const [fontSize, setFontSize] = useState(200)
  const [fontColor, setFontColor] = useState('blackAlpha')
  const [fontColorDepth, setFontColorDepth] = useState(500)
  const [bgColor, setBgColor] = useState('whiteAlpha')
  const [bgColorDepth, setBgColorDepth] = useState(500)
  const [fontWeight, setFontWeight] = useState(400)
  const [isLuminous, setIsLuminous] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [open, setOpen] = useState(true)

  const bg = `${bgColor}.${bgColorDepth}`
  const color = `${fontColor}.${fontColorDepth}`
 
  return (
    <Box
      h='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      bg={bg}
    >
      <Box
        maxW='95vw'
        textAlign='center'
        fontSize={fontSize}
        fontWeight={`${fontWeight}`}
        color={color}
        textShadow={isLuminous ? `0 0 20px ${fontColor.replace('Alpha', '')}` : ''}
        fontStyle={isItalic ? 'italic' : 'normal'}
      >
        {text}
      </Box>
      <Box
        w='xs'
        position='fixed'
        top={3}
        left={3}
        bg={ open ? 'white' : bg }
        rounded='lg'
        boxShadow='lg'
        transition='0.3s'
        p={6}
      >
        <Box
          textAlign='center'
          rounded='lg'
          bg='black'
          opacity='0.05'
          _hover={{ opacity: '0.15' }}
          transition='0.3s'
          cursor='pointer'
          onClick={() => setOpen(!open)}
          p={2}
        />
        <Collapse in={open} animateOpacity>
          <Box display='flex' flexDirection='column' gap={3} p={4}>
            <Title value={'text'} />
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <Title value={'font size'} />
            <Slider min={1} max={400} value={fontSize} onChange={setFontSize}>
              <SliderTrack><SliderFilledTrack bg={bg}/></SliderTrack><SliderThumb borderColor={bg}/>
            </Slider>
            <Title value={'font weight'} />
            <Slider min={100} max={900} step={100} value={fontWeight} onChange={setFontWeight}>
              <SliderTrack><SliderFilledTrack bg={bg}/></SliderTrack><SliderThumb borderColor={bg}/>
            </Slider>
            <Checkbox checked={isItalic} onChange={() => setIsItalic(!isItalic)}><Title value={'italic'} /></Checkbox>
            <Checkbox checked={isLuminous} onChange={() => setIsLuminous(!isLuminous)}><Title value={'luminous'} /></Checkbox>
            <Title value={'font color'} />
            <Select value={fontColor} onChange={(e) => setFontColor(e.target.value)} >
              {colors.map(c => <option key={c} value={c}>{c.replace('Alpha', '')}</option>)}
            </Select>
            <Title value={'font color depth'} />
            <Slider min={100} max={900} step={100} value={fontColorDepth} onChange={setFontColorDepth}>
              <SliderTrack><SliderFilledTrack bg={bg}/></SliderTrack><SliderThumb borderColor={bg}/>
            </Slider>
            <Title value={'background color'} />
            <Select value={bgColor} onChange={(e) => setBgColor(e.target.value)} >
              {colors.map(c => <option key={c} value={c}>{c.replace('Alpha', '')}</option>)}
            </Select>
            <Title value={'background color depth'} />
            <Slider min={100} max={900} step={100} value={bgColorDepth} onChange={setBgColorDepth}>
              <SliderTrack><SliderFilledTrack bg={bg}/></SliderTrack><SliderThumb borderColor={bg}/>
            </Slider>
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}

