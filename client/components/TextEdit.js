import { Component } from "react";

class TextEdit extends Component {
    render() {
      return (
        <div>
          <h3>Here's is the TextEdit Component.</h3>
          <textarea rows={10} cols={50} placeholder="Write something here....."></textarea>
        </div>
      )
    }
  }

  export default TextEdit;