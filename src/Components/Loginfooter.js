import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors/Color';
import { Link } from 'react-router-dom';
import usetranslation from '../React Localization/usetranslation';

const Loginfooter = () => {

  const t = usetranslation();

  return (
    <>
      <Loginfooterstyle>
        <section className="container-fluid p-0">
          <div className="Login-footer">
            <div className="Main-footer-content">
              <div className="content-color">
                <Link to="#" className="text-decoration">{t('About')}</Link>
              </div>
              <div>
                <Link to="#" className="text-decoration">{t('Tconditon')}</Link>
              </div>
              <div>
                <Link to="#" className="text-decoration">{t('Privacy')}</Link>
              </div>
              <div>
                <Link to="#" className="text-decoration">{t('Help')}</Link>
              </div>
              <div>
                <Link to="#" className="text-decoration">{t('Careers')}</Link>
              </div>
              <div>
                <Link to="#" className="text-decoration">{t('Cpolicy')}</Link>
              </div>
            </div>
          </div>
        </section>
      </Loginfooterstyle>
    </>
  )
}

export default Loginfooter





export const Loginfooterstyle = styled.section`
    .Login-footer{
        width:100%;
        position: absolute;
        top:850px;
        display:grid;
        place-items: center;
    }
    .Main-footer-content {
        display: flex;
        list-style: none;
        gap:100px;
    }
    .Main-footer-content a {
        color: white;
    }
    .text-decoration {
        text-decoration: none;
    }
`;