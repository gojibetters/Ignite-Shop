import React from 'react'
import ContentLoader from 'react-content-loader'

const ProductLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={696}
    height={656}
    viewBox="0 0 696 656"
    backgroundColor="#202024"
    foregroundColor="#121214"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="696" height="600" />
    <rect x="0" y="624" rx="8" ry="8" width="330" height="32" />
    <rect x="596" y="624" rx="8" ry="8" width="100" height="32" />
  </ContentLoader>
)

export default ProductLoader
