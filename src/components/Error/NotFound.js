import React from 'react'
import './NotFound.css'

export default function () {
  return (
    <div className=''>
        <div className='error-container'>
            <div className='error-code'>404</div>
            <div className='error-text'>Page not found</div>
            <div className='error-menu'>
                <ul className="links">
                <li ><a href="#" className="tds-link_for-logout tds-header-nav--auth_link tsla-link_for-account  menuitem-grouped">Tesla Account</a></li>
                <li ><a href="#" className="nav-existing-inventory-link hide-on-desk">Existing Inventory</a></li>
                <li ><a href="#" className="nav-powerwall-mobile-link hide-on-desk">Powerwall</a></li>
                <li ><a href="#" className="nav-energy-link hide-on-desk hide-for-i18n-pl_PL hide-for-i18n-el_GR hide-for-i18n-sl_SI">Energy</a></li>
                <li ><a href="#" className="hide-on-desk">Find Us</a></li>
                <li ><a href="#" className="hide-on-desk hide-for-none-basic-countries nav-support-link">Support</a></li>
                <li ><a href="#" className="nav-updates-link hide-on-mobile">Get Newsletter</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
