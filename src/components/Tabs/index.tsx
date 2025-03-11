import { useState } from 'react'
import { Tabs } from '@zendeskgarden/react-tabs'
import './styles.css'

export const CTabs = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1')

  return (
    <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
      <Tabs.TabList className="cx-tab">
        <Tabs.Tab className="f-1" item="tab-1">
          Contexto
        </Tabs.Tab>
        <Tabs.Tab className="f-1" item="tab-2">
          Urgência
        </Tabs.Tab>
        <Tabs.Tab className="f-1" item="tab-3">
          Sugestões de tratativa
        </Tabs.Tab>
      </Tabs.TabList>
      <Tabs.TabPanel item="tab-1">
        Elms are deciduous and semi-deciduous trees comprising the flowering
        plant genus Ulmus in the plant family Ulmaceae.
      </Tabs.TabPanel>
      <Tabs.TabPanel item="tab-2">
        The sugar maple is one of America’s most-loved trees. In fact, more
        states have claimed it as their state tree than any other single
        species—for New York, West Virginia, Wisconsin, and Vermont, the maple
        tree stands alone.
      </Tabs.TabPanel>
      <Tabs.TabPanel item="tab-3">
        Cornus is a genus of about 30–60 species of woody plants in the family
        Cornaceae, commonly known as dogwoods, which can generally be
        distinguished by their blossoms, berries, and distinctive bark.
      </Tabs.TabPanel>
    </Tabs>
  )
}
