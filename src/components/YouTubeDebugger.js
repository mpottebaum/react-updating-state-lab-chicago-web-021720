import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            }
          }
        }
    }

    updateBitRate = event => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })
    }

    updateResolution = event => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.updateBitRate} className="bitrate">{this.state.settings.bitrate}</button>
                <button onClick={this.updateResolution} className="resolution">{this.state.settings.video.resolution}</button>
            </div>
            )
    }
}

export default YouTubeDebugger