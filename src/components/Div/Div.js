/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react'

const Div = ({
  children,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  styles
}) => {
  return (
    <div
      css={[
        {
          margin: 
            (mx || my) && 
            `${(my ? my : 0) * 8}px 
            ${(mx ? mx : 0) * 8}px`,
          marginTop: mt && mt * 8,
          marginRight: mr && mr * 8,
          marginBottom: mb && mb * 8,
          marginLeft: ml && ml * 8,
          padding: 
            (px || py) && 
            `${(py ? py : 0) * 8}px 
            ${(px ? px : 0) * 8}px`,
          paddingTop: pt && pt * 8,
          paddingRight: pr && pr * 8,
          paddingBottom: pb && pb * 8,
          paddingLeft: pl && pl * 8
        },
        styles
      ]}
    >
      {children}
    </div>
  );
};

export default Div;