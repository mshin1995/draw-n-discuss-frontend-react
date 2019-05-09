import React, {Component} from 'react';
import {ActionCable} from 'react-actioncable-provider';
import {HEADERS, API_ROOT} from '../constants';
import { CompactPicker } from 'react-color';

import SaveDrawingButton from './SaveDrawingButton'
import ClearButton from './ClearButton'



class Canvas extends Component {
  constructor () {
    super ()
    this.state = {
      color: '#000000',
      value: 1,
      paths: []
    }

    this.ctx = null
    this.rect = null
    this.canvas = null

    this.drawing = false

  }

  componentDidMount() {
    let canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d')
    this.ctx = ctx
    this.rect = canvas.getBoundingClientRect()
    this.canvas = canvas
  }

  draw = () => {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.state.paths.forEach(path => {
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

  makePath = () => {
    return {
      color: this.state.color,
      list: [],
      strokeWidth: this.state.value
    }
  }

  handleMouseUpOrLeave = () => {
    this.drawing = false;
    this.sendPaths();
  }

  handleMouseDown = () => {
    this.setState({paths: [...this.state.paths, this.makePath()]});
    this.drawing = true;
  }

  handleMouseMove = (e) => {
    if (!this.drawing) return;

    let x = ~~((e.pageX - this.rect.left) * 10) / 10
    let y = ~~((e.pageY - this.rect.top) * 10) / 10
    this.state.paths[this.state.paths.length - 1].list.push(x, y);
    this.draw();
  }


  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }


  handleChangeComplete = (color) => {
    this.setState({
      color: color.hex
    })
  }

  handleReceivedPaths = (paths) => {
    console.log('handleReceivedPaths', paths)
    this.setState({
      paths: paths._json
    })
    this.draw()
  }

  sendPaths = () => {
    // console.log('json', JSON.stringify(this.state.paths))
    fetch(`${API_ROOT}/canvas`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.state.paths)
    })
    .catch(err => {
      console.log({err})
    })
  }

  saveDrawing = () => {
    // fetch to save drawing
    // console.log('json', JSON.stringify(this.state.paths))
    fetch(`${API_ROOT}/saved_drawings`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.state.paths)
    })
    .catch(err => {
      console.log({err})
    })
  }

  clearDrawing = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.setState({paths: []})
  }

  render() {
    return (
      <div>
        <ActionCable
          channel={{channel: 'CanvasChannel'}}
          onReceived={this.handleReceivedPaths}
        />
        <canvas
          id="canvas"
          width="500"
          height="500"
          onMouseUp={this.handleMouseUpOrLeave}
          onMouseLeave={this.handleMouseUpOrLeave}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        />
        <CompactPicker
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        />

        <input id="slider" type="range" list="tickmarks" min="1" max="10" value={this.state.value} step="1" onChange={this.handleChange}/>

        <SaveDrawingButton saveDrawing={this.saveDrawing} paths={this.state.paths}/>
        <ClearButton clearDrawing={this.clearDrawing} paths={this.state.paths}/>

      </div>
    )
  }

}

export default Canvas
