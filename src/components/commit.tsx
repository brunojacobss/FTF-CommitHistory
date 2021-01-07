import { CommitData } from '../models/commitData';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { parseEmoji } from '../utils/emoji-parser';

interface Props {
  commitData: CommitData;
  index: number;
}

export const Commit: React.FC<Props> = ({ commitData, index }) => {
  const { commit, author, html_url } = commitData;
  return (
    <Card data-testid="commitDiv" style={{ cursor: 'pointer' }}>
      <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
        <Image
          src={author.avatar_url}
          alt="avatar of the author"
          roundedCircle
          style={{ height: 50, width: 50, marginRight: 24 }}
        />
        {parseEmoji(commit.message)}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index.toString()}>
        <Card.Body>
          <div>
            <p>Date: {commit.committer.date}</p>
            <p>
              Author: <a href={author.html_url}>{author.login}</a>{' '}
            </p>
          </div>
          <p>Email: {commit.committer.email}</p>
          <p>
            Commit url: <a href={html_url}>Take me to the commit!</a>
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
