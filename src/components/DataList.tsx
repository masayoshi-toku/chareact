import React, { FC } from 'react'
import { List } from 'semantic-ui-react'

const DataList: FC = () => (
  <List className='data-list' link>
    <List.Item as='a'>Data A</List.Item>
    <List.Item as='a'>Data B</List.Item>
  </List>
)

export default DataList
