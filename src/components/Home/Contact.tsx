import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faDev } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'
import { List, BlankItem } from '../styled'

const SNList = styled(List)`
  display: flex;
  justify-content: space-between;
  width: 130px;
  max-width: 100%;
`

const SNItem = styled(BlankItem)``

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <div>
        <span>Write me an email </span>
        <a href="mailto:jobs@francisprovost.com">jobs@francisprovost.com</a>
      </div>
      <div>
        <h3>Visit my social networks</h3>
        <SNList>
          <SNItem>
            <a href="https://twitter.com/frank_provost">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </SNItem>
          <SNItem>
            <a href="https://github.com/francisprovost">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </SNItem>
          <SNItem>
            <a href="https://dev.to/francisprovost">
              <FontAwesomeIcon icon={faDev} size="2x" />
            </a>
          </SNItem>
        </SNList>
      </div>
    </div>
  )
}

export default Contact
