import React from 'react';
import FooterLogo from './svgIcons/footerLogo';
import FooterCenterIcon from './svgIcons/footerCenterIcon';
import CallIcon from '../assets/img/call.png';
import WhatsAppIcon from './svgIcons/whatsApp';

export default function Footer({ setIsDrawerOpen }) {
  return (
    <div className="#footer mt-112" id="footer">
      <div style={headerStyle} className="row">
        <div style={containerStyle} className="col-4">
          <FooterLogo />
        </div>
        <div style={centerStyle} className="col-4">
          <FooterCenterIcon />
        </div>
        <div style={rightStyle} className="col-4 align-self-center">
          <div className="row">
            <div
              className="col-4 text-xs align-self-center p-2 text-uppercase text-center cr-pointer"
              style={{ backgroundColor: '#fff', color: '#000' }}
              onClick={() => setIsDrawerOpen(true)}
            >
              Register your interest
            </div>
            <div className="col-4 align-self-center">
              <div className="d-flex justify-content-end">
                <WhatsAppIcon />
                <div className="ps-2 text-uppercase text-xs align-self-center">
                  whatsApp
                </div>
              </div>
            </div>
            <div className="col-4 align-self-center">
              <div className="d-flex justify-content-end">
                <img className="pe-2" src={CallIcon.src} />
                <div className="ps-2 text-uppercase text-xs align-self-center">
                  Call
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const headerStyle = {
  backgroundColor: '#001C33',
  height: '65px',
  paddingLeft: '56px',
  paddingRight: '56px',
  paddingTop: '4px',
  paddingBottom: '4px',
};

const containerStyle = {
  textAlign: 'left',
  color: '#ffffff',
};
const centerStyle = {
  textAlign: 'center',
  color: '#ffffff',
};
const rightStyle = {
  textAlign: 'right',
  color: '#ffffff',
};
