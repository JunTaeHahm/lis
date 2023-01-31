import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
      }

      html,
      body,
      #root {
        color: var(--black);
        background-color: var(--background);
        height: 100%;
        font-family: var(--IMB-Rg), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow: hidden;
        touch-action: manipulation;
        @media screen and (max-width: 768px) {
          & {
            overflow: scroll;
            ::-webkit-scrollbar {
              display: none;
            }
          }
        }
      }
      #app {
        height: 100%;
        min-height: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      /* IBMPlexSansKR */
      @font-face {
        font-family: IBM-Bold;
        src: url(./src/assets/fonts/IBMPlexSansKR-Bold.ttf);
      }
      @font-face {
        font-family: IBM-Regular;
        src: url(./src/assets/fonts/IBMPlexSansKR-Regular.ttf);
      }
      @font-face {
        font-family: IBM-Medium;
        src: url(./src/assets/fonts/IBMPlexSansKR-Medium.ttf);
      }
      @font-face {
        font-family: IBM-Light;
        src: url(./src/assets/fonts/IBMPlexSansKR-Light.ttf);
      }

      /* Montserrat */
      @font-face {
        font-family: Montserrat-Regular;
        src: url(./src/assets/fonts/Montserrat-Regular.ttf);
      }
      @font-face {
        font-family: Montserrat-Light;
        src: url(./src/assets/fonts/Montserrat-Light.ttf);
      }

      /* SD Samlip */
      @font-face {
        font-family: SDSamlipBasic;
        src: url(./src/assets/fonts/SDSamlipBasic.ttf);
      }
      @font-face {
        font-family: SDSamlipOutline;
        src: url(./src/assets/fonts/SDSamlipOutline.ttf);
      }

      @media screen and (min-width: 1020.3rem) {
        :root {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 1024px) {
        :root {
          font-size: 0.9rem;
        }
      }
      @media screen and (max-width: 768px) {
        :root {
          font-size: 0.8rem;
        }
      }

      :root {
        // 폰트
        --SD-B: SDSamlipBasic;
        --SD-O: SDSamlipOutline;

        --IMB-Bd: IBM-Bold;
        --IMB-Rg: IBM-Regular;
        --IMB-Md: IBM-Medium;
        --IMB-Li: IBM-Light;

        --Mont-Rg: Montserrat-Regular;
        --Mont-Li: Montserrat-Light;

        // 색상
        --background: #eee;
        --white: #f8f8f8;
        --black: #222222;
        --red: #e74c3c;
        --blue: #2225fe;
        --darkgray: #393939;
        --gray: #a7a7a7;
      }
    `}
  />
);
export default GlobalStyle;
