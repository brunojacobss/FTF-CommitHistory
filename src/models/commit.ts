export interface Commit {
  committer: {
    email: string;
    date: string;
  };
  message: string;
}
