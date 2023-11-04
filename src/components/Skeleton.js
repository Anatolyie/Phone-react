import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={320}
    viewBox="0 0 150 187"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >

   <rect x="15" y="6" rx="18" ry="18" width="117" height="106" /> 
    <rect x="15" y="120" rx="8" ry="8" width="115" height="9" /> 
    <rect x="15" y="134" rx="2" ry="2" width="74" height="8" /> 
    <rect x="15" y="148" rx="1" ry="1" width="40" height="11" /> 
    <rect x="106" y="146" rx="1" ry="1" width="22" height="17" />
  </ContentLoader>
)

export default MyLoader

