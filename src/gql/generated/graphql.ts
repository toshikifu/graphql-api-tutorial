/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddGameInput = {
  platform: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  reviews?: Maybe<Array<Review>>;
  verified: Scalars['Boolean']['output'];
};

export type EditGameInput = {
  platform?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['ID']['output'];
  platform: Array<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGame?: Maybe<Game>;
  deleteGame?: Maybe<Array<Maybe<Game>>>;
  updateGame?: Maybe<Game>;
};


export type MutationAddGameArgs = {
  game: AddGameInput;
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateGameArgs = {
  edits: EditGameInput;
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors: Array<Author>;
  game?: Maybe<Game>;
  games: Array<Game>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: Author;
  content: Scalars['String']['output'];
  game: Game;
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: string, platform: Array<string>, title: string }> };


export const GamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GamesQuery, GamesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddGameInput = {
  platform: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  reviews?: Maybe<Array<Review>>;
  verified: Scalars['Boolean']['output'];
};

export type EditGameInput = {
  platform?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['ID']['output'];
  platform: Array<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGame?: Maybe<Game>;
  deleteGame?: Maybe<Array<Maybe<Game>>>;
  updateGame?: Maybe<Game>;
};


export type MutationAddGameArgs = {
  game: AddGameInput;
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateGameArgs = {
  edits: EditGameInput;
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors: Array<Author>;
  game?: Maybe<Game>;
  games: Array<Game>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: Author;
  content: Scalars['String']['output'];
  game: Game;
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: string, platform: Array<string>, title: string }> };


export const GamesDocument = gql`
    query Games {
  games {
    id
    platform
    title
  }
}
    `;

/**
 * __useGamesQuery__
 *
 * To run a query within a React component, call `useGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGamesQuery(baseOptions?: Apollo.QueryHookOptions<GamesQuery, GamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
      }
export function useGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesQuery, GamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
        }
export function useGamesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GamesQuery, GamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GamesQuery, GamesQueryVariables>(GamesDocument, options);
        }
export type GamesQueryHookResult = ReturnType<typeof useGamesQuery>;
export type GamesLazyQueryHookResult = ReturnType<typeof useGamesLazyQuery>;
export type GamesSuspenseQueryHookResult = ReturnType<typeof useGamesSuspenseQuery>;
export type GamesQueryResult = Apollo.QueryResult<GamesQuery, GamesQueryVariables>;