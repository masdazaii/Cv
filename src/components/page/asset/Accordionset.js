import React from 'react'
import { Accordion,Label, Message } from 'semantic-ui-react'

const panels = [
  {
    key: 'acquire-dog',
    title: {
      content: <Label color='grey' content={'lorem'}/>,
    },
    content: {
      content: (
        <span>
          <Message info header={'dolor'} content={'prejudas'} />,
        </span>
      ),
    },
  },
  {
    key: 'care-for-dogs',
    title: {
      content:  <Label color='blue' content={'lorem'}/>,
    },
    content: {
      content: (
        <span>
          <Message info header={'ipsum'} content={'medas'} />,
        </span>
      ),
    },
  },
]

const AccordionExampleIconShorthand = () => (
  <Accordion defaultActiveIndex={0} panels={panels} />
)

export default AccordionExampleIconShorthand