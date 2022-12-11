export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Type representing a given stream of data returned through a query */
export type Content = {
  __typename?: 'Content';
  /**  When the content was created (unix timestamp)  */
  creationTimestamp?: Maybe<Scalars['String']>;
  /**
   * String representation of the data
   *
   * Note: Data of the types listed below will be return as a string:  application/json, text/html, text/plain
   *
   * All other MIME types will have data returned as the url pointing to that content on the underlying storage protocol
   */
  data?: Maybe<Scalars['String']>;
  /**  Metadata, if any, associated to the content  */
  metadata?: Maybe<Array<Tag>>;
  /**  The originating source where the content is stored  */
  provider?: Maybe<Provider>;
  /**  The identifier of the content provided by the underlying storage protocol i.e transactionID, CID  */
  providerId?: Maybe<Scalars['String']>;
  /**  The url pointing to the content hosted on the underlying storage protocol  */
  url?: Maybe<Scalars['String']>;
};

/** Type representing the outcome of mutation operation */
export type ContentStatus = {
  __typename?: 'ContentStatus';
  /**  An error message if an issue occurs while mutating your data  */
  errorMessage?: Maybe<Scalars['String']>;
  /**  The unique grouping id identifying the data you're storing.  You can use this to group related data that you want to store together (i.e. NFT project metadata, content to a given entity)  */
  groupId: Scalars['String'];
  operation: Operation;
  /**  The identifier of the content provided by the underlying storage protocol i.e transactionID, CID  */
  providerId: Scalars['String'];
  statusCode: OperationStatus;
  /**  The url pointing to the content hosted on the underlying storage protocol  */
  url: Scalars['String'];
};

/**  The ContentType enum represents the supported MIME types that are eligible to be stored using during a mutation  */
export enum ContentType {
  /**  Represents the application/json MIME type  */
  Json = 'JSON',
  /**  Represents the text/plain MIME type  */
  Text = 'TEXT'
}

/** Input representing the object being mutated */
export type CreateContentInput = {
  /**  The type of data you're storing  */
  contentType: ContentType;
  /**  The data to upload  */
  data: Scalars['String'];
  /**  The metadata to store in key/value pair form  */
  metadata?: InputMaybe<Array<TagInput>>;
};

/** Type representing a glossary term */
export type GlossaryTerm = {
  __typename?: 'GlossaryTerm';
  /**  The category the glossary term falls under i.e. general, protocol, application, etc.. */
  category?: Maybe<Scalars['String']>;
  definition?: Maybe<Scalars['String']>;
  /**  The identifier of the content provided by the underlying storage protocol i.e transactionID, CID  */
  providerId?: Maybe<Scalars['String']>;
  term?: Maybe<Scalars['String']>;
};

/**  The Locale enum represents the supported languages available to query the glossary terms against  */
export enum Locale {
  En = 'EN'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**  Upload content to the provider of your choice  */
  CreateData?: Maybe<ContentStatus>;
};


export type MutationCreateDataArgs = {
  content: CreateContentInput;
  groupId: Scalars['String'];
  provider: Provider;
};

/**  The Operation enum represents the supported mutation operations  */
export enum Operation {
  Add = 'ADD'
}

/**  The Operation enum represents the eligible outcomes of a mutation operation  */
export enum OperationStatus {
  Failed = 'FAILED',
  Success = 'SUCCESS'
}

/**  The Provider enum represents the supported web3 storage providers available to query and mutate against  */
export enum Provider {
  Arweave = 'ARWEAVE',
  Filecoin = 'FILECOIN'
}

export type Query = {
  __typename?: 'Query';
  /**  Search the Glosseta API directly for content.  The difference between this method and the provider specific query methods is that this queries the Glosseta API indexing system  */
  GetData?: Maybe<Array<Maybe<Content>>>;
  /**  Search Arweave directly for data  */
  GetDataFromArweave?: Maybe<Array<Maybe<Content>>>;
  /**  Search Filecoin directly for content  */
  GetDataFromFilecoin?: Maybe<Array<Maybe<Content>>>;
  /**  Find a single glossary term  */
  GetGlossaryTerm?: Maybe<GlossaryTerm>;
};


export type QueryGetDataArgs = {
  groupId: Scalars['String'];
  limit?: Scalars['Int'];
  metadata?: InputMaybe<Array<TagInput>>;
  sort?: InputMaybe<Sort>;
};


export type QueryGetDataFromArweaveArgs = {
  limit?: Scalars['Int'];
  metadata?: InputMaybe<Array<TagInput>>;
  sort?: InputMaybe<Sort>;
  targetWalletAddress: Scalars['String'];
};


export type QueryGetDataFromFilecoinArgs = {
  cid: Scalars['String'];
};


export type QueryGetGlossaryTermArgs = {
  locale?: InputMaybe<Locale>;
  term: Scalars['String'];
};

/**  The Sort enum represents the supported sorting options when querying  */
export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Type representing a key/value pair */
export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  value: Scalars['String'];
};

/** Input representing a key/value pair to be used when filtering in a search */
export type TagInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};
