import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Section from '../components/Section'
import Experiences from '../components/Home/Experiences'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Section title="Blog">
          <h3>Vel eligendi culpa voluptas sit ipsa id.</h3>
          <p>
            Quas ullam nesciunt harum et architecto ad dolorum. Suscipit eius iure amet sunt repellendus. Corporis et facere nobis
            reprehenderit eius voluptatibus.
          </p>
        </Section>
        <Section title="Experiences">
          <Experiences />
        </Section>
        <Section title="Technos">
          <p>Hey!</p>
        </Section>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
