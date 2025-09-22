// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const displayLeftNav = showLeftNavbar ? '' : 'hide-element'
      const displayContent = showContent ? '' : 'hide-element'
      const displayRightNav = showRightNavbar ? '' : 'hide-element'

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className={`left-navbar-container ${displayLeftNav}`}>
              <h1 className="body-text">Left Navbar Menu</h1>
              <ul className="nav-items">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className={`context-container ${displayContent}`}>
              <h1 className="body-text">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimveniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className={`right-navbar-container ${displayRightNav}`}>
              <h1 className="body-text">Right Navbar</h1>
              <div className="nav-items right-nav-items">
                <li className="nav-item">Ad 1</li>
                <li className="nav-item">Ad 2</li>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
