import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'
import  CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss'

const CollectionsOverview = ({ collections }) =>(

    <div className="collections-overview">
          {
                    collections.map(({id, ...otherCollections} )=>  (
                        <CollectionPreview key={id} {...otherCollections} />
                    ))
               }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionsOverview)