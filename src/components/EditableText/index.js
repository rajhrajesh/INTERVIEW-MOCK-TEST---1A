import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {isClicked: false, editableText: ''}

  onChangeEditableText = event => {
    this.setState({editableText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, editableText} = this.state
    const EditSaveButton = isClicked ? 'Edit' : 'Save'
    return (
      <div className="bg-container">
        <div className="responsive-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isClicked ? (
              <p className="description">{editableText}</p>
            ) : (
              <input
                type="text"
                className="input"
                value={editableText}
                onChange={this.onChangeEditableText}
              />
            )}

            <button
              type="button"
              onClick={this.onClickButton}
              className={EditSaveButton}
            >
              {EditSaveButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
