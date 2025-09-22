// Write your code here
// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="configuration-context-container">
          <h1>Layout</h1>
          <form className="form-container">
            <div>
              <input
                type="checkbox"
                id="contextId"
                checked={showContent}
                onChange={onToggleShowContent}
              />
              <label htmlFor="contextId">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="leftNavId"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="leftNavId">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rightNavId"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="rightNavId">Right Navbar</label>
            </div>
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
