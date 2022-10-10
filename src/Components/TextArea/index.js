import { TextArea } from "./styles"

const StyledTextArea = (props) => {
  return (
    <TextArea
      {...props}
      maxLength={props.maxLength || 600}
      rows={props.rows || Math.ceil(props.maxLength / 100) || 6}
      cols={props.cols || 100}
    />
  )
}

export default StyledTextArea
