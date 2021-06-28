import React from 'react'
import Header from '../../pagesMaterial/ServicesPage/Header/Header'
import Loader from '../page-revealer/index2'
import Footer2 from '../footer/Footer2/Footer2'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/abstract.scss'

class Layout2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      loading: true,
    }
  }
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 4000); 
  }
  componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }
  render() {

    const { children } = this.props

    return (
      this.state.loading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <div>
            {children}
          </div>
          <Footer2 />
        </div>)
    )
  }
}

export default Layout2
