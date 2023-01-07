export type AnonymousMessage = {
  id: string;
  message: string;
  email: string;
  created_at: {
    seconds: number;
    nanoseconds: number;
  };
};

export type Skill = {
  id: string;
  skill: string;
  skillCategory: string;
};
