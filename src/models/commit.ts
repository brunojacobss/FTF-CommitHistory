export interface Commit {
  commiter: {
    email: string;
    date: string;
  };
  message: string;
}
