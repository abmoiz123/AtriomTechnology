import React from 'react'
import Atriomicon from '../static/img/AtriomFavicon.png'
export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {/* <link href="/img/favicon.ico" rel="icon" /> */}
          <link href={Atriomicon} rel="icon" />
        </head>
        <body style={{ backgroundColor: '#013567' }}>
        {/* <body style={{ backgroundColor: '#fff' }}> */}
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
