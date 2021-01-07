import { Author } from './author';
import { Commit } from './commit';

export interface CommitData {
  commit: Commit;
  html_url: string;
  author: Author;
}
