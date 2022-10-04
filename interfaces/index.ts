// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export enum UserType {
  normalUser,
  admin,
  superAdmin
}

export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  type: UserType;
};

export type NormalUser = {
  userId: string;
  user: {
    username: string
  }
}

export type Admin = {
  userId: string;
  user: {
    username: string
  }
}

export type SuperAdmin = {
  userId: string;
  user: {
    username: string
  }
}

export type UserCourse = {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  correctQns: number;
  stars: number;
  user: {
    username: string
  }
  course: {
    name: string
  }
}

export type Course = {
  id: string;
  name: string;
  description: string;
  stars: number;
  adminId: string;
}

export enum CourseItemType {
  game,
  image,
  video,
  article
}

export type CourseItem = {
  id: string;
  name: string;
  description: string;
  pageNumber: number;
  courseId: string;
  type: CourseItemType;
  course: {
    name: string;
  }
}

export type Image = {
  id: string;
  courseItemId: string | null;
  url: string;
  courseItem: {
    name: string;
  } | null;
}

export type Video = {
  id: string;
  courseItemId: string;
  url: string;
  courseItem: {
    name: string;
  }
}

export type Article = {
  id: string;
  courseItemId: string;
  text: string;
  courseItem: {
    name: string;
  }
}

export enum GameType {
  spotTheDifferenceGame,
  matchingGame,
  sortingGame,
}

export type Game = {
  id: string;
  courseItemId: string;
  type: GameType
  courseItem: {
    name: string;
  }
}

export type SpotTheDifferenceGame = {
  id: string;
  gameId: string;
}

export type MatchingGame = {
  id: string;
  gameId: string;
}

export type SortingGame = {
  id: string;
  gameId: string;
}
