/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  avatar?: S3ObjectProfileInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  bio?: string | null,
  location?: string | null,
  gender?: string | null,
  birthdate?: string | null,
  coints?: number | null,
};

export type S3ObjectProfileInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  location?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  coints?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  avatar?: S3ObjectProfileInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  bio?: string | null,
  location?: string | null,
  gender?: string | null,
  birthdate?: string | null,
  coints?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateFollowingInput = {
  id?: string | null,
  followId?: string | null,
  followingId: string,
  followerId: string,
  avatar?: string | null,
  name?: string | null,
  username?: string | null,
  followed?: boolean | null,
};

export type ModelFollowingConditionInput = {
  followId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  avatar?: ModelStringInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  followed?: ModelBooleanInput | null,
  and?: Array< ModelFollowingConditionInput | null > | null,
  or?: Array< ModelFollowingConditionInput | null > | null,
  not?: ModelFollowingConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFollowingInput = {
  id: string,
  followId?: string | null,
  followingId?: string | null,
  followerId?: string | null,
  avatar?: string | null,
  name?: string | null,
  username?: string | null,
  followed?: boolean | null,
};

export type DeleteFollowingInput = {
  id?: string | null,
};

export type CreateFollowerInput = {
  id?: string | null,
  followId?: string | null,
  followingId: string,
  followerId: string,
  avatar?: string | null,
  name?: string | null,
  username?: string | null,
  followed?: boolean | null,
};

export type ModelFollowerConditionInput = {
  followId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  avatar?: ModelStringInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  followed?: ModelBooleanInput | null,
  and?: Array< ModelFollowerConditionInput | null > | null,
  or?: Array< ModelFollowerConditionInput | null > | null,
  not?: ModelFollowerConditionInput | null,
};

export type UpdateFollowerInput = {
  id: string,
  followId?: string | null,
  followingId?: string | null,
  followerId?: string | null,
  avatar?: string | null,
  name?: string | null,
  username?: string | null,
  followed?: boolean | null,
};

export type DeleteFollowerInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  location?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  coints?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelFollowingFilterInput = {
  id?: ModelIDInput | null,
  followId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  avatar?: ModelStringInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  followed?: ModelBooleanInput | null,
  and?: Array< ModelFollowingFilterInput | null > | null,
  or?: Array< ModelFollowingFilterInput | null > | null,
  not?: ModelFollowingFilterInput | null,
};

export type ModelFollowerFilterInput = {
  id?: ModelIDInput | null,
  followId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  avatar?: ModelStringInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  followed?: ModelBooleanInput | null,
  and?: Array< ModelFollowerFilterInput | null > | null,
  or?: Array< ModelFollowerFilterInput | null > | null,
  not?: ModelFollowerFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar:  {
      __typename: "S3ObjectProfile",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    bio: string | null,
    location: string | null,
    gender: string | null,
    birthdate: string | null,
    coints: number | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar:  {
      __typename: "S3ObjectProfile",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    bio: string | null,
    location: string | null,
    gender: string | null,
    birthdate: string | null,
    coints: number | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar:  {
      __typename: "S3ObjectProfile",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    bio: string | null,
    location: string | null,
    gender: string | null,
    birthdate: string | null,
    coints: number | null,
  } | null,
};

export type CreateFollowingMutationVariables = {
  input: CreateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type CreateFollowingMutation = {
  createFollowing:  {
    __typename: "Following",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowingMutationVariables = {
  input: UpdateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingMutation = {
  updateFollowing:  {
    __typename: "Following",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowingMutationVariables = {
  input: DeleteFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type DeleteFollowingMutation = {
  deleteFollowing:  {
    __typename: "Following",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowerMutationVariables = {
  input: CreateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type CreateFollowerMutation = {
  createFollower:  {
    __typename: "Follower",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowerMutationVariables = {
  input: UpdateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type UpdateFollowerMutation = {
  updateFollower:  {
    __typename: "Follower",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowerMutationVariables = {
  input: DeleteFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type DeleteFollowerMutation = {
  deleteFollower:  {
    __typename: "Follower",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar:  {
      __typename: "S3ObjectProfile",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    bio: string | null,
    location: string | null,
    gender: string | null,
    birthdate: string | null,
    coints: number | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar:  {
        __typename: "S3ObjectProfile",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
      name: string | null,
      bio: string | null,
      location: string | null,
      gender: string | null,
      birthdate: string | null,
      coints: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFollowingQueryVariables = {
  id: string,
};

export type GetFollowingQuery = {
  getFollowing:  {
    __typename: "Following",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingsQuery = {
  listFollowings:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string | null,
      followId: string | null,
      followingId: string,
      followerId: string,
      avatar: string | null,
      name: string | null,
      username: string | null,
      followed: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFollowerQueryVariables = {
  id: string,
};

export type GetFollowerQuery = {
  getFollower:  {
    __typename: "Follower",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowersQueryVariables = {
  filter?: ModelFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowersQuery = {
  listFollowers:  {
    __typename: "ModelFollowerConnection",
    items:  Array< {
      __typename: "Follower",
      id: string | null,
      followId: string | null,
      followingId: string,
      followerId: string,
      avatar: string | null,
      name: string | null,
      username: string | null,
      followed: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar:  {
      __typename: "S3ObjectProfile",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    bio: string | null,
    location: string | null,
    gender: string | null,
    birthdate: string | null,
    coints: number | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar:  {
      __typename: "S3ObjectProfile",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    bio: string | null,
    location: string | null,
    gender: string | null,
    birthdate: string | null,
    coints: number | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar:  {
      __typename: "S3ObjectProfile",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    name: string | null,
    bio: string | null,
    location: string | null,
    gender: string | null,
    birthdate: string | null,
    coints: number | null,
  } | null,
};

export type OnCreateFollowingSubscription = {
  onCreateFollowing:  {
    __typename: "Following",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowingSubscription = {
  onUpdateFollowing:  {
    __typename: "Following",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowingSubscription = {
  onDeleteFollowing:  {
    __typename: "Following",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowerSubscription = {
  onCreateFollower:  {
    __typename: "Follower",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowerSubscription = {
  onUpdateFollower:  {
    __typename: "Follower",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowerSubscription = {
  onDeleteFollower:  {
    __typename: "Follower",
    id: string | null,
    followId: string | null,
    followingId: string,
    followerId: string,
    avatar: string | null,
    name: string | null,
    username: string | null,
    followed: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
