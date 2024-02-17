import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  .container {
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    /* width: 1100px; */
    color: #8a8a89;
    padding: 12px;

    display: grid;
    grid-template-columns: 6.5rem 1fr 10.25rem;
    justify-items: center;
    align-items: center;
    gap: 0.9375rem;

    min-height: 3rem;

    padding-top: 15px;

    max-width: rgba(18, 20, 23, 0.5);
    margin: 0 auto;
  }

  .logo {
    margin-left: 100px;
    position: relative;
    font-size: 20px;
    display: flex;
    align-items: center;

    font-weight: 800;
    /* text-transform: uppercase; */

    padding: 4px;

    color: #121417;

    border-radius: 5px;

    overflow: hidden;
    z-index: 1;

    transition: color 0.5s;

    fill: #3470ff;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #0b44cd;

      fill: #ffffff;
    }
  }
  .addition-data__list {
    text-align: start;
    color: #000000;
  }

  .addition-data__text {
    /* margin-right: 100px; */
    font-size: 14px;
    color: #000000;
  }
  .addition-data__link {
    font-size: 14px;
    position: relative;
    z-index: 1;
    display: block;

    width: fit-content;

    color: inherit;

    padding: 5px 0;

    transition: color 0.5s;

    &:after,
    &:before {
      transition: color 0.5s, width 0.5s, left 0.5s, right 0.5s;
    }

    &:after,
    &:before {
      content: ' ';
      position: absolute;
      z-index: -1;
      bottom: 2px;
      width: 0;
      height: 2px;
      margin: auto;
      border-radius: 4px;
      background: #0b44cd;
      color: transparent;
      opacity: 0.75;
      transition: color 0.5s, width 0.5s, left 0.5s, right 0.5s;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }

    &:hover:after,
    &:hover:before {
      width: 100%;
    }

    &:hover {
      color: #0b44cd;
    }
  }
`;
