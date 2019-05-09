import React, {Component} from 'react'


// props: drawing

class GalleryCard extends Component {

  constructor (props) {
    super ()
    // debugger
    this.ctx = null
    this.paths = props.drawing._json
    this.id = props.id
  }

  componentDidMount() {
    // debugger
    console.log("executing componentDidMount()...")

    let canvas = document.getElementsByClassName(`card-canvas-${this.id}`)[0];
    const ctx = canvas.getContext('2d')
    this.ctx = ctx
    // this.rect = canvas.getBoundingClientRect()
    // this.canvas = canvas

    this.draw()
  }

  draw = () => {
    console.log("executing draw() for cards...")
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.paths.forEach(path => {
      this.ctx.lineWidth = path.strokeWidth;
      this.ctx.strokeStyle = path.color;
      this.ctx.beginPath();
      const list = path.list;
      this.ctx.moveTo(list[0], list[1]);
      for (let i = 2; i < list.length; i += 2) {
        this.ctx.lineTo(list[i], list[i + 1]);
      }
      this.ctx.stroke();
    })
  }

  render() {
    return (
      <div className="card">
        <canvas
          className={`card-canvas-${this.id}`}
          width="500"
          height="500"
        />
      </div>
    )
  }

}

export default GalleryCard
