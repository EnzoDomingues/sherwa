/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      avatar {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      name
      bio
      location
      gender
      birthdate
      coints
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      avatar {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      name
      bio
      location
      gender
      birthdate
      coints
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      avatar {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      name
      bio
      location
      gender
      birthdate
      coints
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
      id
      followId
      followingId
      followerId
      avatar
      name
      username
      followed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
      id
      followId
      followingId
      followerId
      avatar
      name
      username
      followed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
      id
      followId
      followingId
      followerId
      avatar
      name
      username
      followed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower {
    onCreateFollower {
      id
      followId
      followingId
      followerId
      avatar
      name
      username
      followed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower {
    onUpdateFollower {
      id
      followId
      followingId
      followerId
      avatar
      name
      username
      followed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower {
    onDeleteFollower {
      id
      followId
      followingId
      followerId
      avatar
      name
      username
      followed
      createdAt
      updatedAt
    }
  }
`;
