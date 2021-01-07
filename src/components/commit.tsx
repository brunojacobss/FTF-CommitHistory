import { useState } from 'react';
import { CommitData } from '../models/commitData';

export const Commit: React.FC<CommitData> = ({ commit, author, html_url }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div data-testid="commitDiv">
      {!visible && (
        <div>
          {commit.message}

          <button data-testid="expand" onClick={() => setVisible(!visible)}>
            Expand
          </button>
        </div>
      )}
      {visible && (
        <div data-testid="togglable">
          {commit.message}
          <button onClick={() => setVisible(!visible)}>Hide</button>
          <p>Date: {commit.committer.date}</p>
          <div>
            <p>
              Author: <a href={author.html_url}>{author.login}</a>{' '}
            </p>
            <img src={author.avatar_url} alt="author_avatar" />
          </div>
          <p>Email: {commit.committer.email}</p>
          <p>
            Commit url: <a href={html_url}>Take me to the commit!</a>
          </p>
        </div>
      )}
    </div>
  );
};
