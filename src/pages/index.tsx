import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Section from '../components/Section'
import Experiences from '../components/Home/Experiences'
import Technos from '../components/Home/Technos'
import Contact from '../components/Home/Contact'
import Hero from '../components/Home/Hero'

const IndexPage = () => (
  <IndexLayout>
    <Hero />
    <Page>
      <Container>
        {/* <Section title="Blog">
          <h3>Vel eligendi culpa voluptas sit ipsa id.</h3>
          <p>
            Quas ullam nesciunt harum et architecto ad dolorum. Suscipit eius iure amet sunt repellendus. Corporis et facere nobis
            reprehenderit eius voluptatibus.
          </p>
        </Section> */}
        <Section title="Experiences">
          <Experiences />
        </Section>
        <Section title="Technos">
          <Technos />
        </Section>
        <Section title="Contact">
          <Contact />
        </Section>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
