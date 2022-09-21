/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | null;
  type InputMaybe<T> = T | null;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
    ID: string;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: string;
    GatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
  };

  type AVIFOptions = {
    readonly lossless: InputMaybe<Scalars['Boolean']>;
    readonly quality: InputMaybe<Scalars['Int']>;
    readonly speed: InputMaybe<Scalars['Int']>;
  };

  type BlurredOptions = {
    /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
    readonly toFormat: InputMaybe<ImageFormat>;
    /** Width of the generated low-res preview. Default is 20px */
    readonly width: InputMaybe<Scalars['Int']>;
  };

  type BooleanQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars['Boolean']>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
    readonly ne: InputMaybe<Scalars['Boolean']>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  };

  type DateQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars['Date']>;
    readonly gt: InputMaybe<Scalars['Date']>;
    readonly gte: InputMaybe<Scalars['Date']>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
    readonly lt: InputMaybe<Scalars['Date']>;
    readonly lte: InputMaybe<Scalars['Date']>;
    readonly ne: InputMaybe<Scalars['Date']>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  };

  type Directory = Node & {
    readonly absolutePath: Scalars['String'];
    readonly accessTime: Scalars['Date'];
    readonly atime: Scalars['Date'];
    readonly atimeMs: Scalars['Float'];
    readonly base: Scalars['String'];
    readonly birthTime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly changeTime: Scalars['Date'];
    readonly children: ReadonlyArray<Node>;
    readonly ctime: Scalars['Date'];
    readonly ctimeMs: Scalars['Float'];
    readonly dev: Scalars['Int'];
    readonly dir: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly gid: Scalars['Int'];
    readonly id: Scalars['ID'];
    readonly ino: Scalars['Float'];
    readonly internal: Internal;
    readonly mode: Scalars['Int'];
    readonly modifiedTime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly mtimeMs: Scalars['Float'];
    readonly name: Scalars['String'];
    readonly nlink: Scalars['Int'];
    readonly parent: Maybe<Node>;
    readonly prettySize: Scalars['String'];
    readonly rdev: Scalars['Int'];
    readonly relativeDirectory: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly root: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly sourceInstanceName: Scalars['String'];
    readonly uid: Scalars['Int'];
  };

  type Directory_accessTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type Directory_atimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type Directory_birthTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type Directory_changeTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type Directory_ctimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type Directory_modifiedTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type Directory_mtimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type DirectoryConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_groupArgs = {
    field: DirectoryFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type DirectoryConnection_maxArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_minArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_sumArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    readonly next: Maybe<Directory>;
    readonly node: Directory;
    readonly previous: Maybe<Directory>;
  };

  type DirectoryFieldsEnum =
    | 'absolutePath'
    | 'accessTime'
    | 'atime'
    | 'atimeMs'
    | 'base'
    | 'birthTime'
    | 'birthtime'
    | 'birthtimeMs'
    | 'changeTime'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'ctime'
    | 'ctimeMs'
    | 'dev'
    | 'dir'
    | 'ext'
    | 'extension'
    | 'gid'
    | 'id'
    | 'ino'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'mode'
    | 'modifiedTime'
    | 'mtime'
    | 'mtimeMs'
    | 'name'
    | 'nlink'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'prettySize'
    | 'rdev'
    | 'relativeDirectory'
    | 'relativePath'
    | 'root'
    | 'size'
    | 'sourceInstanceName'
    | 'uid';

  type DirectoryFilterInput = {
    readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
    readonly accessTime: InputMaybe<DateQueryOperatorInput>;
    readonly atime: InputMaybe<DateQueryOperatorInput>;
    readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly base: InputMaybe<StringQueryOperatorInput>;
    readonly birthTime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly changeTime: InputMaybe<DateQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly ctime: InputMaybe<DateQueryOperatorInput>;
    readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly dev: InputMaybe<IntQueryOperatorInput>;
    readonly dir: InputMaybe<StringQueryOperatorInput>;
    readonly ext: InputMaybe<StringQueryOperatorInput>;
    readonly extension: InputMaybe<StringQueryOperatorInput>;
    readonly gid: InputMaybe<IntQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly ino: InputMaybe<FloatQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mode: InputMaybe<IntQueryOperatorInput>;
    readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
    readonly mtime: InputMaybe<DateQueryOperatorInput>;
    readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly nlink: InputMaybe<IntQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly prettySize: InputMaybe<StringQueryOperatorInput>;
    readonly rdev: InputMaybe<IntQueryOperatorInput>;
    readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    readonly relativePath: InputMaybe<StringQueryOperatorInput>;
    readonly root: InputMaybe<StringQueryOperatorInput>;
    readonly size: InputMaybe<IntQueryOperatorInput>;
    readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    readonly uid: InputMaybe<IntQueryOperatorInput>;
  };

  type DirectoryGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type DirectoryGroupConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryGroupConnection_groupArgs = {
    field: DirectoryFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type DirectoryGroupConnection_maxArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryGroupConnection_minArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryGroupConnection_sumArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectorySortInput = {
    readonly fields: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type DuotoneGradient = {
    readonly highlight: Scalars['String'];
    readonly opacity: InputMaybe<Scalars['Int']>;
    readonly shadow: Scalars['String'];
  };

  type File = Node & {
    readonly absolutePath: Scalars['String'];
    readonly accessTime: Scalars['Date'];
    readonly atime: Scalars['Date'];
    readonly atimeMs: Scalars['Float'];
    readonly base: Scalars['String'];
    readonly birthTime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly blksize: Maybe<Scalars['Int']>;
    readonly blocks: Maybe<Scalars['Int']>;
    readonly changeTime: Scalars['Date'];
    /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
    readonly childImageSharp: Maybe<ImageSharp>;
    readonly children: ReadonlyArray<Node>;
    /** Returns all children nodes filtered by type ImageSharp */
    readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
    readonly ctime: Scalars['Date'];
    readonly ctimeMs: Scalars['Float'];
    readonly dev: Scalars['Int'];
    readonly dir: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly gid: Scalars['Int'];
    readonly id: Scalars['ID'];
    readonly ino: Scalars['Float'];
    readonly internal: Internal;
    readonly mode: Scalars['Int'];
    readonly modifiedTime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly mtimeMs: Scalars['Float'];
    readonly name: Scalars['String'];
    readonly nlink: Scalars['Int'];
    readonly parent: Maybe<Node>;
    readonly prettySize: Scalars['String'];
    readonly rdev: Scalars['Int'];
    readonly relativeDirectory: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly root: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly sourceInstanceName: Scalars['String'];
    readonly uid: Scalars['Int'];
    readonly url: Maybe<Scalars['String']>;
  };

  type File_accessTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type File_atimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type File_birthTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type File_changeTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type File_ctimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type File_modifiedTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type File_mtimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type FileConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<FileEdge>;
    readonly group: ReadonlyArray<FileGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_groupArgs = {
    field: FileFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type FileConnection_maxArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_minArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_sumArgs = {
    field: FileFieldsEnum;
  };

  type FileEdge = {
    readonly next: Maybe<File>;
    readonly node: File;
    readonly previous: Maybe<File>;
  };

  type FileFieldsEnum =
    | 'absolutePath'
    | 'accessTime'
    | 'atime'
    | 'atimeMs'
    | 'base'
    | 'birthTime'
    | 'birthtime'
    | 'birthtimeMs'
    | 'blksize'
    | 'blocks'
    | 'changeTime'
    | 'childImageSharp.children'
    | 'childImageSharp.children.children'
    | 'childImageSharp.children.children.children'
    | 'childImageSharp.children.children.id'
    | 'childImageSharp.children.id'
    | 'childImageSharp.children.internal.content'
    | 'childImageSharp.children.internal.contentDigest'
    | 'childImageSharp.children.internal.contentFilePath'
    | 'childImageSharp.children.internal.description'
    | 'childImageSharp.children.internal.fieldOwners'
    | 'childImageSharp.children.internal.ignoreType'
    | 'childImageSharp.children.internal.mediaType'
    | 'childImageSharp.children.internal.owner'
    | 'childImageSharp.children.internal.type'
    | 'childImageSharp.children.parent.children'
    | 'childImageSharp.children.parent.id'
    | 'childImageSharp.fixed.aspectRatio'
    | 'childImageSharp.fixed.base64'
    | 'childImageSharp.fixed.height'
    | 'childImageSharp.fixed.originalName'
    | 'childImageSharp.fixed.src'
    | 'childImageSharp.fixed.srcSet'
    | 'childImageSharp.fixed.srcSetWebp'
    | 'childImageSharp.fixed.srcWebp'
    | 'childImageSharp.fixed.tracedSVG'
    | 'childImageSharp.fixed.width'
    | 'childImageSharp.fluid.aspectRatio'
    | 'childImageSharp.fluid.base64'
    | 'childImageSharp.fluid.originalImg'
    | 'childImageSharp.fluid.originalName'
    | 'childImageSharp.fluid.presentationHeight'
    | 'childImageSharp.fluid.presentationWidth'
    | 'childImageSharp.fluid.sizes'
    | 'childImageSharp.fluid.src'
    | 'childImageSharp.fluid.srcSet'
    | 'childImageSharp.fluid.srcSetWebp'
    | 'childImageSharp.fluid.srcWebp'
    | 'childImageSharp.fluid.tracedSVG'
    | 'childImageSharp.gatsbyImageData'
    | 'childImageSharp.id'
    | 'childImageSharp.internal.content'
    | 'childImageSharp.internal.contentDigest'
    | 'childImageSharp.internal.contentFilePath'
    | 'childImageSharp.internal.description'
    | 'childImageSharp.internal.fieldOwners'
    | 'childImageSharp.internal.ignoreType'
    | 'childImageSharp.internal.mediaType'
    | 'childImageSharp.internal.owner'
    | 'childImageSharp.internal.type'
    | 'childImageSharp.original.height'
    | 'childImageSharp.original.src'
    | 'childImageSharp.original.width'
    | 'childImageSharp.parent.children'
    | 'childImageSharp.parent.children.children'
    | 'childImageSharp.parent.children.id'
    | 'childImageSharp.parent.id'
    | 'childImageSharp.parent.internal.content'
    | 'childImageSharp.parent.internal.contentDigest'
    | 'childImageSharp.parent.internal.contentFilePath'
    | 'childImageSharp.parent.internal.description'
    | 'childImageSharp.parent.internal.fieldOwners'
    | 'childImageSharp.parent.internal.ignoreType'
    | 'childImageSharp.parent.internal.mediaType'
    | 'childImageSharp.parent.internal.owner'
    | 'childImageSharp.parent.internal.type'
    | 'childImageSharp.parent.parent.children'
    | 'childImageSharp.parent.parent.id'
    | 'childImageSharp.resize.aspectRatio'
    | 'childImageSharp.resize.height'
    | 'childImageSharp.resize.originalName'
    | 'childImageSharp.resize.src'
    | 'childImageSharp.resize.tracedSVG'
    | 'childImageSharp.resize.width'
    | 'children'
    | 'childrenImageSharp'
    | 'childrenImageSharp.children'
    | 'childrenImageSharp.children.children'
    | 'childrenImageSharp.children.children.children'
    | 'childrenImageSharp.children.children.id'
    | 'childrenImageSharp.children.id'
    | 'childrenImageSharp.children.internal.content'
    | 'childrenImageSharp.children.internal.contentDigest'
    | 'childrenImageSharp.children.internal.contentFilePath'
    | 'childrenImageSharp.children.internal.description'
    | 'childrenImageSharp.children.internal.fieldOwners'
    | 'childrenImageSharp.children.internal.ignoreType'
    | 'childrenImageSharp.children.internal.mediaType'
    | 'childrenImageSharp.children.internal.owner'
    | 'childrenImageSharp.children.internal.type'
    | 'childrenImageSharp.children.parent.children'
    | 'childrenImageSharp.children.parent.id'
    | 'childrenImageSharp.fixed.aspectRatio'
    | 'childrenImageSharp.fixed.base64'
    | 'childrenImageSharp.fixed.height'
    | 'childrenImageSharp.fixed.originalName'
    | 'childrenImageSharp.fixed.src'
    | 'childrenImageSharp.fixed.srcSet'
    | 'childrenImageSharp.fixed.srcSetWebp'
    | 'childrenImageSharp.fixed.srcWebp'
    | 'childrenImageSharp.fixed.tracedSVG'
    | 'childrenImageSharp.fixed.width'
    | 'childrenImageSharp.fluid.aspectRatio'
    | 'childrenImageSharp.fluid.base64'
    | 'childrenImageSharp.fluid.originalImg'
    | 'childrenImageSharp.fluid.originalName'
    | 'childrenImageSharp.fluid.presentationHeight'
    | 'childrenImageSharp.fluid.presentationWidth'
    | 'childrenImageSharp.fluid.sizes'
    | 'childrenImageSharp.fluid.src'
    | 'childrenImageSharp.fluid.srcSet'
    | 'childrenImageSharp.fluid.srcSetWebp'
    | 'childrenImageSharp.fluid.srcWebp'
    | 'childrenImageSharp.fluid.tracedSVG'
    | 'childrenImageSharp.gatsbyImageData'
    | 'childrenImageSharp.id'
    | 'childrenImageSharp.internal.content'
    | 'childrenImageSharp.internal.contentDigest'
    | 'childrenImageSharp.internal.contentFilePath'
    | 'childrenImageSharp.internal.description'
    | 'childrenImageSharp.internal.fieldOwners'
    | 'childrenImageSharp.internal.ignoreType'
    | 'childrenImageSharp.internal.mediaType'
    | 'childrenImageSharp.internal.owner'
    | 'childrenImageSharp.internal.type'
    | 'childrenImageSharp.original.height'
    | 'childrenImageSharp.original.src'
    | 'childrenImageSharp.original.width'
    | 'childrenImageSharp.parent.children'
    | 'childrenImageSharp.parent.children.children'
    | 'childrenImageSharp.parent.children.id'
    | 'childrenImageSharp.parent.id'
    | 'childrenImageSharp.parent.internal.content'
    | 'childrenImageSharp.parent.internal.contentDigest'
    | 'childrenImageSharp.parent.internal.contentFilePath'
    | 'childrenImageSharp.parent.internal.description'
    | 'childrenImageSharp.parent.internal.fieldOwners'
    | 'childrenImageSharp.parent.internal.ignoreType'
    | 'childrenImageSharp.parent.internal.mediaType'
    | 'childrenImageSharp.parent.internal.owner'
    | 'childrenImageSharp.parent.internal.type'
    | 'childrenImageSharp.parent.parent.children'
    | 'childrenImageSharp.parent.parent.id'
    | 'childrenImageSharp.resize.aspectRatio'
    | 'childrenImageSharp.resize.height'
    | 'childrenImageSharp.resize.originalName'
    | 'childrenImageSharp.resize.src'
    | 'childrenImageSharp.resize.tracedSVG'
    | 'childrenImageSharp.resize.width'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'ctime'
    | 'ctimeMs'
    | 'dev'
    | 'dir'
    | 'ext'
    | 'extension'
    | 'gid'
    | 'id'
    | 'ino'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'mode'
    | 'modifiedTime'
    | 'mtime'
    | 'mtimeMs'
    | 'name'
    | 'nlink'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'prettySize'
    | 'rdev'
    | 'relativeDirectory'
    | 'relativePath'
    | 'root'
    | 'size'
    | 'sourceInstanceName'
    | 'uid'
    | 'url';

  type FileFilterInput = {
    readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
    readonly accessTime: InputMaybe<DateQueryOperatorInput>;
    readonly atime: InputMaybe<DateQueryOperatorInput>;
    readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly base: InputMaybe<StringQueryOperatorInput>;
    readonly birthTime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtime: InputMaybe<DateQueryOperatorInput>;
    readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly blksize: InputMaybe<IntQueryOperatorInput>;
    readonly blocks: InputMaybe<IntQueryOperatorInput>;
    readonly changeTime: InputMaybe<DateQueryOperatorInput>;
    readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
    readonly ctime: InputMaybe<DateQueryOperatorInput>;
    readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly dev: InputMaybe<IntQueryOperatorInput>;
    readonly dir: InputMaybe<StringQueryOperatorInput>;
    readonly ext: InputMaybe<StringQueryOperatorInput>;
    readonly extension: InputMaybe<StringQueryOperatorInput>;
    readonly gid: InputMaybe<IntQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly ino: InputMaybe<FloatQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mode: InputMaybe<IntQueryOperatorInput>;
    readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
    readonly mtime: InputMaybe<DateQueryOperatorInput>;
    readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly nlink: InputMaybe<IntQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly prettySize: InputMaybe<StringQueryOperatorInput>;
    readonly rdev: InputMaybe<IntQueryOperatorInput>;
    readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    readonly relativePath: InputMaybe<StringQueryOperatorInput>;
    readonly root: InputMaybe<StringQueryOperatorInput>;
    readonly size: InputMaybe<IntQueryOperatorInput>;
    readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    readonly uid: InputMaybe<IntQueryOperatorInput>;
    readonly url: InputMaybe<StringQueryOperatorInput>;
  };

  type FileGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<FileEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<FileGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type FileGroupConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileGroupConnection_groupArgs = {
    field: FileFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type FileGroupConnection_maxArgs = {
    field: FileFieldsEnum;
  };

  type FileGroupConnection_minArgs = {
    field: FileFieldsEnum;
  };

  type FileGroupConnection_sumArgs = {
    field: FileFieldsEnum;
  };

  type FileSortInput = {
    readonly fields: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type FloatQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars['Float']>;
    readonly gt: InputMaybe<Scalars['Float']>;
    readonly gte: InputMaybe<Scalars['Float']>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
    readonly lt: InputMaybe<Scalars['Float']>;
    readonly lte: InputMaybe<Scalars['Float']>;
    readonly ne: InputMaybe<Scalars['Float']>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  };

  type GatsbyImageDataQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars['GatsbyImageData']>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>
    >;
    readonly ne: InputMaybe<Scalars['GatsbyImageData']>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>
    >;
  };

  type GatsbyImageFormat = 'auto' | 'avif' | 'jpg' | '' | 'png' | 'webp';

  type GatsbyImageLayout = 'constrained' | 'fixed' | 'fullWidth';

  type GatsbyImagePlaceholder =
    | 'blurred'
    | 'dominantColor'
    | 'none'
    | 'tracedSVG';

  type ImageCropFocus = 17 | 0 | 2 | 16 | 1 | 5 | 8 | 3 | 6 | 7 | 4;

  type ImageFit = 'contain' | 'cover' | 'fill' | 'inside' | 'outside';

  type ImageFormat = '' | 'avif' | 'jpg' | '' | 'png' | 'webp';

  type ImageLayout = 'constrained' | 'fixed' | 'fullWidth';

  type ImagePlaceholder = 'blurred' | 'dominantColor' | 'none' | 'tracedSVG';

  type ImageSharp = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly fixed: Maybe<ImageSharpFixed>;
    readonly fluid: Maybe<ImageSharpFluid>;
    readonly gatsbyImageData: Scalars['GatsbyImageData'];
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly original: Maybe<ImageSharpOriginal>;
    readonly parent: Maybe<Node>;
    readonly resize: Maybe<ImageSharpResize>;
  };

  type ImageSharp_fixedArgs = {
    background?: InputMaybe<Scalars['String']>;
    base64Width: InputMaybe<Scalars['Int']>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars['Boolean']>;
    height: InputMaybe<Scalars['Int']>;
    jpegProgressive?: InputMaybe<Scalars['Boolean']>;
    jpegQuality: InputMaybe<Scalars['Int']>;
    pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
    pngQuality: InputMaybe<Scalars['Int']>;
    quality: InputMaybe<Scalars['Int']>;
    rotate?: InputMaybe<Scalars['Int']>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars['Float']>;
    webpQuality: InputMaybe<Scalars['Int']>;
    width: InputMaybe<Scalars['Int']>;
  };

  type ImageSharp_fluidArgs = {
    background?: InputMaybe<Scalars['String']>;
    base64Width: InputMaybe<Scalars['Int']>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars['Boolean']>;
    jpegProgressive?: InputMaybe<Scalars['Boolean']>;
    jpegQuality: InputMaybe<Scalars['Int']>;
    maxHeight: InputMaybe<Scalars['Int']>;
    maxWidth: InputMaybe<Scalars['Int']>;
    pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
    pngQuality: InputMaybe<Scalars['Int']>;
    quality: InputMaybe<Scalars['Int']>;
    rotate?: InputMaybe<Scalars['Int']>;
    sizes?: InputMaybe<Scalars['String']>;
    srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars['Float']>;
    webpQuality: InputMaybe<Scalars['Int']>;
  };

  type ImageSharp_gatsbyImageDataArgs = {
    aspectRatio: InputMaybe<Scalars['Float']>;
    avifOptions: InputMaybe<AVIFOptions>;
    backgroundColor: InputMaybe<Scalars['String']>;
    blurredOptions: InputMaybe<BlurredOptions>;
    breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
    formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
    height: InputMaybe<Scalars['Int']>;
    jpgOptions: InputMaybe<JPGOptions>;
    layout?: InputMaybe<ImageLayout>;
    outputPixelDensities: InputMaybe<
      ReadonlyArray<InputMaybe<Scalars['Float']>>
    >;
    placeholder: InputMaybe<ImagePlaceholder>;
    pngOptions: InputMaybe<PNGOptions>;
    quality: InputMaybe<Scalars['Int']>;
    sizes: InputMaybe<Scalars['String']>;
    tracedSVGOptions: InputMaybe<Potrace>;
    transformOptions: InputMaybe<TransformOptions>;
    webpOptions: InputMaybe<WebPOptions>;
    width: InputMaybe<Scalars['Int']>;
  };

  type ImageSharp_resizeArgs = {
    background?: InputMaybe<Scalars['String']>;
    base64?: InputMaybe<Scalars['Boolean']>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    duotone?: InputMaybe<DuotoneGradient>;
    fit?: InputMaybe<ImageFit>;
    grayscale?: InputMaybe<Scalars['Boolean']>;
    height: InputMaybe<Scalars['Int']>;
    jpegProgressive?: InputMaybe<Scalars['Boolean']>;
    jpegQuality: InputMaybe<Scalars['Int']>;
    pngCompressionLevel?: InputMaybe<Scalars['Int']>;
    pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
    pngQuality: InputMaybe<Scalars['Int']>;
    quality: InputMaybe<Scalars['Int']>;
    rotate?: InputMaybe<Scalars['Int']>;
    toFormat?: InputMaybe<ImageFormat>;
    traceSVG?: InputMaybe<Potrace>;
    trim?: InputMaybe<Scalars['Float']>;
    webpQuality: InputMaybe<Scalars['Int']>;
    width: InputMaybe<Scalars['Int']>;
  };

  type ImageSharpConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_groupArgs = {
    field: ImageSharpFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ImageSharpConnection_maxArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_minArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_sumArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>;
    readonly node: ImageSharp;
    readonly previous: Maybe<ImageSharp>;
  };

  type ImageSharpFieldsEnum =
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'fixed.aspectRatio'
    | 'fixed.base64'
    | 'fixed.height'
    | 'fixed.originalName'
    | 'fixed.src'
    | 'fixed.srcSet'
    | 'fixed.srcSetWebp'
    | 'fixed.srcWebp'
    | 'fixed.tracedSVG'
    | 'fixed.width'
    | 'fluid.aspectRatio'
    | 'fluid.base64'
    | 'fluid.originalImg'
    | 'fluid.originalName'
    | 'fluid.presentationHeight'
    | 'fluid.presentationWidth'
    | 'fluid.sizes'
    | 'fluid.src'
    | 'fluid.srcSet'
    | 'fluid.srcSetWebp'
    | 'fluid.srcWebp'
    | 'fluid.tracedSVG'
    | 'gatsbyImageData'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'original.height'
    | 'original.src'
    | 'original.width'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'resize.aspectRatio'
    | 'resize.height'
    | 'resize.originalName'
    | 'resize.src'
    | 'resize.tracedSVG'
    | 'resize.width';

  type ImageSharpFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
    readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
    readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
  };

  type ImageSharpFilterListInput = {
    readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
  };

  type ImageSharpFixed = {
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly base64: Maybe<Scalars['String']>;
    readonly height: Scalars['Float'];
    readonly originalName: Maybe<Scalars['String']>;
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly width: Scalars['Float'];
  };

  type ImageSharpFixedFilterInput = {
    readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
    readonly base64: InputMaybe<StringQueryOperatorInput>;
    readonly height: InputMaybe<FloatQueryOperatorInput>;
    readonly originalName: InputMaybe<StringQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly srcSet: InputMaybe<StringQueryOperatorInput>;
    readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
    readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
    readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<FloatQueryOperatorInput>;
  };

  type ImageSharpFluid = {
    readonly aspectRatio: Scalars['Float'];
    readonly base64: Maybe<Scalars['String']>;
    readonly originalImg: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly presentationHeight: Scalars['Int'];
    readonly presentationWidth: Scalars['Int'];
    readonly sizes: Scalars['String'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
  };

  type ImageSharpFluidFilterInput = {
    readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
    readonly base64: InputMaybe<StringQueryOperatorInput>;
    readonly originalImg: InputMaybe<StringQueryOperatorInput>;
    readonly originalName: InputMaybe<StringQueryOperatorInput>;
    readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
    readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
    readonly sizes: InputMaybe<StringQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly srcSet: InputMaybe<StringQueryOperatorInput>;
    readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
    readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
    readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  };

  type ImageSharpGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ImageSharpGroupConnection_distinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpGroupConnection_groupArgs = {
    field: ImageSharpFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ImageSharpGroupConnection_maxArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpGroupConnection_minArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpGroupConnection_sumArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpOriginal = {
    readonly height: Maybe<Scalars['Float']>;
    readonly src: Maybe<Scalars['String']>;
    readonly width: Maybe<Scalars['Float']>;
  };

  type ImageSharpOriginalFilterInput = {
    readonly height: InputMaybe<FloatQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<FloatQueryOperatorInput>;
  };

  type ImageSharpResize = {
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly height: Maybe<Scalars['Int']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly src: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly width: Maybe<Scalars['Int']>;
  };

  type ImageSharpResizeFilterInput = {
    readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
    readonly height: InputMaybe<IntQueryOperatorInput>;
    readonly originalName: InputMaybe<StringQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<IntQueryOperatorInput>;
  };

  type ImageSharpSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type IntQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars['Int']>;
    readonly gt: InputMaybe<Scalars['Int']>;
    readonly gte: InputMaybe<Scalars['Int']>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
    readonly lt: InputMaybe<Scalars['Int']>;
    readonly lte: InputMaybe<Scalars['Int']>;
    readonly ne: InputMaybe<Scalars['Int']>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  };

  type Internal = {
    readonly content: Maybe<Scalars['String']>;
    readonly contentDigest: Scalars['String'];
    readonly contentFilePath: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly ignoreType: Maybe<Scalars['Boolean']>;
    readonly mediaType: Maybe<Scalars['String']>;
    readonly owner: Scalars['String'];
    readonly type: Scalars['String'];
  };

  type InternalFilterInput = {
    readonly content: InputMaybe<StringQueryOperatorInput>;
    readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
    readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
    readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
    readonly mediaType: InputMaybe<StringQueryOperatorInput>;
    readonly owner: InputMaybe<StringQueryOperatorInput>;
    readonly type: InputMaybe<StringQueryOperatorInput>;
  };

  type JPGOptions = {
    readonly progressive: InputMaybe<Scalars['Boolean']>;
    readonly quality: InputMaybe<Scalars['Int']>;
  };

  type JSONQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars['JSON']>;
    readonly glob: InputMaybe<Scalars['JSON']>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
    readonly ne: InputMaybe<Scalars['JSON']>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
    readonly regex: InputMaybe<Scalars['JSON']>;
  };

  /** Node Interface */
  type Node = {
    readonly children: ReadonlyArray<Node>;
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly parent: Maybe<Node>;
  };

  type NodeFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
  };

  type NodeFilterListInput = {
    readonly elemMatch: InputMaybe<NodeFilterInput>;
  };

  type PNGOptions = {
    readonly compressionSpeed: InputMaybe<Scalars['Int']>;
    readonly quality: InputMaybe<Scalars['Int']>;
  };

  type PageInfo = {
    readonly currentPage: Scalars['Int'];
    readonly hasNextPage: Scalars['Boolean'];
    readonly hasPreviousPage: Scalars['Boolean'];
    readonly itemCount: Scalars['Int'];
    readonly pageCount: Scalars['Int'];
    readonly perPage: Maybe<Scalars['Int']>;
    readonly totalCount: Scalars['Int'];
  };

  type Potrace = {
    readonly alphaMax: InputMaybe<Scalars['Float']>;
    readonly background: InputMaybe<Scalars['String']>;
    readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
    readonly color: InputMaybe<Scalars['String']>;
    readonly optCurve: InputMaybe<Scalars['Boolean']>;
    readonly optTolerance: InputMaybe<Scalars['Float']>;
    readonly threshold: InputMaybe<Scalars['Int']>;
    readonly turdSize: InputMaybe<Scalars['Float']>;
    readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
  };

  type PotraceTurnPolicy =
    | 'black'
    | 'left'
    | 'majority'
    | 'minority'
    | 'right'
    | 'white';

  type Query = {
    readonly allDirectory: DirectoryConnection;
    readonly allFile: FileConnection;
    readonly allImageSharp: ImageSharpConnection;
    readonly allShopifyCollection: ShopifyCollectionConnection;
    readonly allShopifyExternalVideo: ShopifyExternalVideoConnection;
    readonly allShopifyMedia: ShopifyMediaConnection;
    readonly allShopifyMediaImage: ShopifyMediaImageConnection;
    readonly allShopifyMetafield: ShopifyMetafieldConnection;
    readonly allShopifyModel3D: ShopifyModel3dConnection;
    readonly allShopifyProduct: ShopifyProductConnection;
    readonly allShopifyProductVariant: ShopifyProductVariantConnection;
    readonly allShopifyVideo: ShopifyVideoConnection;
    readonly allSite: SiteConnection;
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
    readonly allSiteFunction: SiteFunctionConnection;
    readonly allSitePage: SitePageConnection;
    readonly allSitePlugin: SitePluginConnection;
    readonly directory: Maybe<Directory>;
    readonly file: Maybe<File>;
    readonly imageSharp: Maybe<ImageSharp>;
    readonly shopifyCollection: Maybe<ShopifyCollection>;
    readonly shopifyExternalVideo: Maybe<ShopifyExternalVideo>;
    readonly shopifyMedia: Maybe<ShopifyMedia>;
    readonly shopifyMediaImage: Maybe<ShopifyMediaImage>;
    readonly shopifyMetafield: Maybe<ShopifyMetafield>;
    readonly shopifyModel3D: Maybe<ShopifyModel3d>;
    readonly shopifyProduct: Maybe<ShopifyProduct>;
    readonly shopifyProductVariant: Maybe<ShopifyProductVariant>;
    readonly shopifyVideo: Maybe<ShopifyVideo>;
    readonly site: Maybe<Site>;
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
    readonly siteFunction: Maybe<SiteFunction>;
    readonly sitePage: Maybe<SitePage>;
    readonly sitePlugin: Maybe<SitePlugin>;
  };

  type Query_allDirectoryArgs = {
    filter: InputMaybe<DirectoryFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<DirectorySortInput>;
  };

  type Query_allFileArgs = {
    filter: InputMaybe<FileFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<FileSortInput>;
  };

  type Query_allImageSharpArgs = {
    filter: InputMaybe<ImageSharpFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ImageSharpSortInput>;
  };

  type Query_allShopifyCollectionArgs = {
    filter: InputMaybe<ShopifyCollectionFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyCollectionSortInput>;
  };

  type Query_allShopifyExternalVideoArgs = {
    filter: InputMaybe<ShopifyExternalVideoFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyExternalVideoSortInput>;
  };

  type Query_allShopifyMediaArgs = {
    filter: InputMaybe<ShopifyMediaFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyMediaSortInput>;
  };

  type Query_allShopifyMediaImageArgs = {
    filter: InputMaybe<ShopifyMediaImageFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyMediaImageSortInput>;
  };

  type Query_allShopifyMetafieldArgs = {
    filter: InputMaybe<ShopifyMetafieldFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyMetafieldSortInput>;
  };

  type Query_allShopifyModel3DArgs = {
    filter: InputMaybe<ShopifyModel3dFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyModel3dSortInput>;
  };

  type Query_allShopifyProductArgs = {
    filter: InputMaybe<ShopifyProductFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyProductSortInput>;
  };

  type Query_allShopifyProductVariantArgs = {
    filter: InputMaybe<ShopifyProductVariantFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyProductVariantSortInput>;
  };

  type Query_allShopifyVideoArgs = {
    filter: InputMaybe<ShopifyVideoFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<ShopifyVideoSortInput>;
  };

  type Query_allSiteArgs = {
    filter: InputMaybe<SiteFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<SiteSortInput>;
  };

  type Query_allSiteBuildMetadataArgs = {
    filter: InputMaybe<SiteBuildMetadataFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<SiteBuildMetadataSortInput>;
  };

  type Query_allSiteFunctionArgs = {
    filter: InputMaybe<SiteFunctionFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<SiteFunctionSortInput>;
  };

  type Query_allSitePageArgs = {
    filter: InputMaybe<SitePageFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<SitePageSortInput>;
  };

  type Query_allSitePluginArgs = {
    filter: InputMaybe<SitePluginFilterInput>;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
    sort: InputMaybe<SitePluginSortInput>;
  };

  type Query_directoryArgs = {
    absolutePath: InputMaybe<StringQueryOperatorInput>;
    accessTime: InputMaybe<DateQueryOperatorInput>;
    atime: InputMaybe<DateQueryOperatorInput>;
    atimeMs: InputMaybe<FloatQueryOperatorInput>;
    base: InputMaybe<StringQueryOperatorInput>;
    birthTime: InputMaybe<DateQueryOperatorInput>;
    birthtime: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    changeTime: InputMaybe<DateQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    ctime: InputMaybe<DateQueryOperatorInput>;
    ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    dev: InputMaybe<IntQueryOperatorInput>;
    dir: InputMaybe<StringQueryOperatorInput>;
    ext: InputMaybe<StringQueryOperatorInput>;
    extension: InputMaybe<StringQueryOperatorInput>;
    gid: InputMaybe<IntQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    ino: InputMaybe<FloatQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mode: InputMaybe<IntQueryOperatorInput>;
    modifiedTime: InputMaybe<DateQueryOperatorInput>;
    mtime: InputMaybe<DateQueryOperatorInput>;
    mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    name: InputMaybe<StringQueryOperatorInput>;
    nlink: InputMaybe<IntQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    prettySize: InputMaybe<StringQueryOperatorInput>;
    rdev: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    relativePath: InputMaybe<StringQueryOperatorInput>;
    root: InputMaybe<StringQueryOperatorInput>;
    size: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    uid: InputMaybe<IntQueryOperatorInput>;
  };

  type Query_fileArgs = {
    absolutePath: InputMaybe<StringQueryOperatorInput>;
    accessTime: InputMaybe<DateQueryOperatorInput>;
    atime: InputMaybe<DateQueryOperatorInput>;
    atimeMs: InputMaybe<FloatQueryOperatorInput>;
    base: InputMaybe<StringQueryOperatorInput>;
    birthTime: InputMaybe<DateQueryOperatorInput>;
    birthtime: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
    blksize: InputMaybe<IntQueryOperatorInput>;
    blocks: InputMaybe<IntQueryOperatorInput>;
    changeTime: InputMaybe<DateQueryOperatorInput>;
    childImageSharp: InputMaybe<ImageSharpFilterInput>;
    children: InputMaybe<NodeFilterListInput>;
    childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
    ctime: InputMaybe<DateQueryOperatorInput>;
    ctimeMs: InputMaybe<FloatQueryOperatorInput>;
    dev: InputMaybe<IntQueryOperatorInput>;
    dir: InputMaybe<StringQueryOperatorInput>;
    ext: InputMaybe<StringQueryOperatorInput>;
    extension: InputMaybe<StringQueryOperatorInput>;
    gid: InputMaybe<IntQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    ino: InputMaybe<FloatQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mode: InputMaybe<IntQueryOperatorInput>;
    modifiedTime: InputMaybe<DateQueryOperatorInput>;
    mtime: InputMaybe<DateQueryOperatorInput>;
    mtimeMs: InputMaybe<FloatQueryOperatorInput>;
    name: InputMaybe<StringQueryOperatorInput>;
    nlink: InputMaybe<IntQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    prettySize: InputMaybe<StringQueryOperatorInput>;
    rdev: InputMaybe<IntQueryOperatorInput>;
    relativeDirectory: InputMaybe<StringQueryOperatorInput>;
    relativePath: InputMaybe<StringQueryOperatorInput>;
    root: InputMaybe<StringQueryOperatorInput>;
    size: InputMaybe<IntQueryOperatorInput>;
    sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
    uid: InputMaybe<IntQueryOperatorInput>;
    url: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_imageSharpArgs = {
    children: InputMaybe<NodeFilterListInput>;
    fixed: InputMaybe<ImageSharpFixedFilterInput>;
    fluid: InputMaybe<ImageSharpFluidFilterInput>;
    gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    original: InputMaybe<ImageSharpOriginalFilterInput>;
    parent: InputMaybe<NodeFilterInput>;
    resize: InputMaybe<ImageSharpResizeFilterInput>;
  };

  type Query_shopifyCollectionArgs = {
    children: InputMaybe<NodeFilterListInput>;
    description: InputMaybe<StringQueryOperatorInput>;
    descriptionHtml: InputMaybe<StringQueryOperatorInput>;
    feedback: InputMaybe<ShopifyResourceFeedbackFilterInput>;
    handle: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    image: InputMaybe<ShopifyImageFilterInput>;
    internal: InputMaybe<InternalFilterInput>;
    legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    metafield: InputMaybe<ShopifyMetafieldFilterInput>;
    metafields: InputMaybe<ShopifyMetafieldFilterListInput>;
    parent: InputMaybe<NodeFilterInput>;
    products: InputMaybe<ShopifyProductFilterListInput>;
    productsCount: InputMaybe<IntQueryOperatorInput>;
    ruleSet: InputMaybe<ShopifyCollectionRuleSetFilterInput>;
    seo: InputMaybe<ShopifySEOFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    sortOrder: InputMaybe<ShopifyCollectionSortOrderQueryOperatorInput>;
    storefrontId: InputMaybe<StringQueryOperatorInput>;
    templateSuffix: InputMaybe<StringQueryOperatorInput>;
    title: InputMaybe<StringQueryOperatorInput>;
    updatedAt: InputMaybe<DateQueryOperatorInput>;
  };

  type Query_shopifyExternalVideoArgs = {
    alt: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    embeddedUrl: InputMaybe<StringQueryOperatorInput>;
    host: InputMaybe<ShopifyMediaHostQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    parent: InputMaybe<NodeFilterInput>;
    preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type Query_shopifyMediaArgs = {
    alt: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    parent: InputMaybe<NodeFilterInput>;
    preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type Query_shopifyMediaImageArgs = {
    alt: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    createdAt: InputMaybe<DateQueryOperatorInput>;
    fileErrors: InputMaybe<ShopifyFileErrorFilterListInput>;
    fileStatus: InputMaybe<ShopifyFileStatusQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    image: InputMaybe<ShopifyImageFilterInput>;
    internal: InputMaybe<InternalFilterInput>;
    mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    mimeType: InputMaybe<StringQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type Query_shopifyMetafieldArgs = {
    children: InputMaybe<NodeFilterListInput>;
    createdAt: InputMaybe<DateQueryOperatorInput>;
    description: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    key: InputMaybe<StringQueryOperatorInput>;
    legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    namespace: InputMaybe<StringQueryOperatorInput>;
    ownerType: InputMaybe<ShopifyMetafieldOwnerTypeQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    type: InputMaybe<StringQueryOperatorInput>;
    updatedAt: InputMaybe<DateQueryOperatorInput>;
    value: InputMaybe<StringQueryOperatorInput>;
    valueType: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_shopifyModel3DArgs = {
    alt: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    filename: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    originalSource: InputMaybe<ShopifyModel3dSourceFilterInput>;
    parent: InputMaybe<NodeFilterInput>;
    preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    sources: InputMaybe<ShopifyModel3dSourceFilterListInput>;
    status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type Query_shopifyProductArgs = {
    children: InputMaybe<NodeFilterListInput>;
    collections: InputMaybe<ShopifyCollectionFilterListInput>;
    createdAt: InputMaybe<DateQueryOperatorInput>;
    description: InputMaybe<StringQueryOperatorInput>;
    descriptionHtml: InputMaybe<StringQueryOperatorInput>;
    featuredImage: InputMaybe<ShopifyImageFilterInput>;
    featuredMedia: InputMaybe<ShopifyMediaFilterInput>;
    feedback: InputMaybe<ShopifyResourceFeedbackFilterInput>;
    gatsbyPath: InputMaybe<StringQueryOperatorInput>;
    giftCardTemplateSuffix: InputMaybe<StringQueryOperatorInput>;
    handle: InputMaybe<StringQueryOperatorInput>;
    hasOnlyDefaultVariant: InputMaybe<BooleanQueryOperatorInput>;
    hasOutOfStockVariants: InputMaybe<BooleanQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    isGiftCard: InputMaybe<BooleanQueryOperatorInput>;
    legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    media: InputMaybe<ShopifyMediaFilterListInput>;
    mediaCount: InputMaybe<IntQueryOperatorInput>;
    metafield: InputMaybe<ShopifyMetafieldFilterInput>;
    metafields: InputMaybe<ShopifyMetafieldFilterListInput>;
    onlineStorePreviewUrl: InputMaybe<StringQueryOperatorInput>;
    onlineStoreUrl: InputMaybe<StringQueryOperatorInput>;
    options: InputMaybe<ShopifyProductOptionFilterListInput>;
    parent: InputMaybe<NodeFilterInput>;
    priceRange: InputMaybe<ShopifyProductPriceRangeFilterInput>;
    priceRangeV2: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
    productType: InputMaybe<StringQueryOperatorInput>;
    publishedAt: InputMaybe<DateQueryOperatorInput>;
    requiresSellingPlan: InputMaybe<BooleanQueryOperatorInput>;
    sellingPlanGroupCount: InputMaybe<IntQueryOperatorInput>;
    seo: InputMaybe<ShopifySEOFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    status: InputMaybe<ShopifyProductStatusQueryOperatorInput>;
    storefrontId: InputMaybe<StringQueryOperatorInput>;
    tags: InputMaybe<StringQueryOperatorInput>;
    templateSuffix: InputMaybe<StringQueryOperatorInput>;
    title: InputMaybe<StringQueryOperatorInput>;
    totalInventory: InputMaybe<IntQueryOperatorInput>;
    totalVariants: InputMaybe<IntQueryOperatorInput>;
    tracksInventory: InputMaybe<BooleanQueryOperatorInput>;
    updatedAt: InputMaybe<DateQueryOperatorInput>;
    variants: InputMaybe<ShopifyProductVariantFilterListInput>;
    vendor: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_shopifyProductVariantArgs = {
    availableForSale: InputMaybe<BooleanQueryOperatorInput>;
    barcode: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    compareAtPrice: InputMaybe<FloatQueryOperatorInput>;
    createdAt: InputMaybe<DateQueryOperatorInput>;
    displayName: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    image: InputMaybe<ShopifyImageFilterInput>;
    internal: InputMaybe<InternalFilterInput>;
    inventoryPolicy: InputMaybe<ShopifyProductVariantInventoryPolicyQueryOperatorInput>;
    inventoryQuantity: InputMaybe<IntQueryOperatorInput>;
    legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    media: InputMaybe<ShopifyMediaFilterListInput>;
    metafield: InputMaybe<ShopifyMetafieldFilterInput>;
    metafields: InputMaybe<ShopifyMetafieldFilterListInput>;
    parent: InputMaybe<NodeFilterInput>;
    position: InputMaybe<IntQueryOperatorInput>;
    presentmentPrices: InputMaybe<ShopifyProductVariantPricePairFilterListInput>;
    price: InputMaybe<FloatQueryOperatorInput>;
    product: InputMaybe<ShopifyProductFilterInput>;
    requiresShipping: InputMaybe<BooleanQueryOperatorInput>;
    selectedOptions: InputMaybe<ShopifySelectedOptionFilterListInput>;
    sellingPlanGroupCount: InputMaybe<IntQueryOperatorInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    sku: InputMaybe<StringQueryOperatorInput>;
    storefrontId: InputMaybe<StringQueryOperatorInput>;
    taxCode: InputMaybe<StringQueryOperatorInput>;
    taxable: InputMaybe<BooleanQueryOperatorInput>;
    title: InputMaybe<StringQueryOperatorInput>;
    updatedAt: InputMaybe<DateQueryOperatorInput>;
    weight: InputMaybe<FloatQueryOperatorInput>;
    weightUnit: InputMaybe<ShopifyWeightUnitQueryOperatorInput>;
  };

  type Query_shopifyVideoArgs = {
    alt: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    filename: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    originalSource: InputMaybe<ShopifyVideoSourceFilterInput>;
    parent: InputMaybe<NodeFilterInput>;
    preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    shopifyId: InputMaybe<StringQueryOperatorInput>;
    sources: InputMaybe<ShopifyVideoSourceFilterListInput>;
    status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type Query_siteArgs = {
    buildTime: InputMaybe<DateQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    jsxRuntime: InputMaybe<StringQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    pathPrefix: InputMaybe<StringQueryOperatorInput>;
    polyfill: InputMaybe<BooleanQueryOperatorInput>;
    siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
    trailingSlash: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_siteBuildMetadataArgs = {
    buildTime: InputMaybe<DateQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    parent: InputMaybe<NodeFilterInput>;
  };

  type Query_siteFunctionArgs = {
    absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    functionRoute: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    matchPath: InputMaybe<StringQueryOperatorInput>;
    originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
    originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    pluginName: InputMaybe<StringQueryOperatorInput>;
    relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  };

  type Query_sitePageArgs = {
    children: InputMaybe<NodeFilterListInput>;
    component: InputMaybe<StringQueryOperatorInput>;
    componentChunkName: InputMaybe<StringQueryOperatorInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    internalComponentName: InputMaybe<StringQueryOperatorInput>;
    matchPath: InputMaybe<StringQueryOperatorInput>;
    pageContext: InputMaybe<JSONQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    path: InputMaybe<StringQueryOperatorInput>;
    pluginCreator: InputMaybe<SitePluginFilterInput>;
  };

  type Query_sitePluginArgs = {
    browserAPIs: InputMaybe<StringQueryOperatorInput>;
    children: InputMaybe<NodeFilterListInput>;
    id: InputMaybe<StringQueryOperatorInput>;
    internal: InputMaybe<InternalFilterInput>;
    name: InputMaybe<StringQueryOperatorInput>;
    nodeAPIs: InputMaybe<StringQueryOperatorInput>;
    packageJson: InputMaybe<JSONQueryOperatorInput>;
    parent: InputMaybe<NodeFilterInput>;
    pluginFilepath: InputMaybe<StringQueryOperatorInput>;
    pluginOptions: InputMaybe<JSONQueryOperatorInput>;
    resolve: InputMaybe<StringQueryOperatorInput>;
    ssrAPIs: InputMaybe<StringQueryOperatorInput>;
    version: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyApp = {
    readonly shopifyId: Scalars['String'];
  };

  type ShopifyAppFeedback = {
    readonly app: ShopifyApp;
    readonly link: Maybe<ShopifyLink>;
    readonly messages: ReadonlyArray<ShopifyUserError>;
  };

  type ShopifyAppFeedbackFilterInput = {
    readonly app: InputMaybe<ShopifyAppFilterInput>;
    readonly link: InputMaybe<ShopifyLinkFilterInput>;
    readonly messages: InputMaybe<ShopifyUserErrorFilterListInput>;
  };

  type ShopifyAppFeedbackFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyAppFeedbackFilterInput>;
  };

  type ShopifyAppFilterInput = {
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyCollection = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly description: Scalars['String'];
    readonly descriptionHtml: Scalars['String'];
    readonly feedback: Maybe<ShopifyResourceFeedback>;
    readonly handle: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly image: Maybe<ShopifyImage>;
    readonly internal: Internal;
    readonly legacyResourceId: Scalars['String'];
    readonly metafield: Maybe<ShopifyMetafield>;
    readonly metafields: ReadonlyArray<ShopifyMetafield>;
    readonly parent: Maybe<Node>;
    readonly products: ReadonlyArray<ShopifyProduct>;
    readonly productsCount: Scalars['Int'];
    readonly ruleSet: Maybe<ShopifyCollectionRuleSet>;
    readonly seo: ShopifySEO;
    readonly shopifyId: Scalars['String'];
    readonly sortOrder: ShopifyCollectionSortOrder;
    readonly storefrontId: Scalars['String'];
    readonly templateSuffix: Maybe<Scalars['String']>;
    readonly title: Scalars['String'];
    readonly updatedAt: Scalars['Date'];
  };

  type ShopifyCollection_metafieldArgs = {
    key: Scalars['String'];
    namespace: Scalars['String'];
  };

  type ShopifyCollection_updatedAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyCollectionConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyCollectionEdge>;
    readonly group: ReadonlyArray<ShopifyCollectionGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyCollection>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyCollectionConnection_distinctArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionConnection_groupArgs = {
    field: ShopifyCollectionFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyCollectionConnection_maxArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionConnection_minArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionConnection_sumArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionEdge = {
    readonly next: Maybe<ShopifyCollection>;
    readonly node: ShopifyCollection;
    readonly previous: Maybe<ShopifyCollection>;
  };

  type ShopifyCollectionFieldsEnum =
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'description'
    | 'descriptionHtml'
    | 'feedback.details'
    | 'feedback.details.app.shopifyId'
    | 'feedback.details.link.label'
    | 'feedback.details.link.url'
    | 'feedback.details.messages'
    | 'feedback.details.messages.field'
    | 'feedback.details.messages.message'
    | 'feedback.summary'
    | 'handle'
    | 'id'
    | 'image.altText'
    | 'image.height'
    | 'image.localFile.absolutePath'
    | 'image.localFile.accessTime'
    | 'image.localFile.atime'
    | 'image.localFile.atimeMs'
    | 'image.localFile.base'
    | 'image.localFile.birthTime'
    | 'image.localFile.birthtime'
    | 'image.localFile.birthtimeMs'
    | 'image.localFile.blksize'
    | 'image.localFile.blocks'
    | 'image.localFile.changeTime'
    | 'image.localFile.childImageSharp.children'
    | 'image.localFile.childImageSharp.gatsbyImageData'
    | 'image.localFile.childImageSharp.id'
    | 'image.localFile.children'
    | 'image.localFile.childrenImageSharp'
    | 'image.localFile.childrenImageSharp.children'
    | 'image.localFile.childrenImageSharp.gatsbyImageData'
    | 'image.localFile.childrenImageSharp.id'
    | 'image.localFile.children.children'
    | 'image.localFile.children.id'
    | 'image.localFile.ctime'
    | 'image.localFile.ctimeMs'
    | 'image.localFile.dev'
    | 'image.localFile.dir'
    | 'image.localFile.ext'
    | 'image.localFile.extension'
    | 'image.localFile.gid'
    | 'image.localFile.id'
    | 'image.localFile.ino'
    | 'image.localFile.internal.content'
    | 'image.localFile.internal.contentDigest'
    | 'image.localFile.internal.contentFilePath'
    | 'image.localFile.internal.description'
    | 'image.localFile.internal.fieldOwners'
    | 'image.localFile.internal.ignoreType'
    | 'image.localFile.internal.mediaType'
    | 'image.localFile.internal.owner'
    | 'image.localFile.internal.type'
    | 'image.localFile.mode'
    | 'image.localFile.modifiedTime'
    | 'image.localFile.mtime'
    | 'image.localFile.mtimeMs'
    | 'image.localFile.name'
    | 'image.localFile.nlink'
    | 'image.localFile.parent.children'
    | 'image.localFile.parent.id'
    | 'image.localFile.prettySize'
    | 'image.localFile.rdev'
    | 'image.localFile.relativeDirectory'
    | 'image.localFile.relativePath'
    | 'image.localFile.root'
    | 'image.localFile.size'
    | 'image.localFile.sourceInstanceName'
    | 'image.localFile.uid'
    | 'image.localFile.url'
    | 'image.originalSrc'
    | 'image.src'
    | 'image.transformedSrc'
    | 'image.width'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'legacyResourceId'
    | 'metafield.children'
    | 'metafield.children.children'
    | 'metafield.children.children.children'
    | 'metafield.children.children.id'
    | 'metafield.children.id'
    | 'metafield.children.internal.content'
    | 'metafield.children.internal.contentDigest'
    | 'metafield.children.internal.contentFilePath'
    | 'metafield.children.internal.description'
    | 'metafield.children.internal.fieldOwners'
    | 'metafield.children.internal.ignoreType'
    | 'metafield.children.internal.mediaType'
    | 'metafield.children.internal.owner'
    | 'metafield.children.internal.type'
    | 'metafield.children.parent.children'
    | 'metafield.children.parent.id'
    | 'metafield.createdAt'
    | 'metafield.description'
    | 'metafield.id'
    | 'metafield.internal.content'
    | 'metafield.internal.contentDigest'
    | 'metafield.internal.contentFilePath'
    | 'metafield.internal.description'
    | 'metafield.internal.fieldOwners'
    | 'metafield.internal.ignoreType'
    | 'metafield.internal.mediaType'
    | 'metafield.internal.owner'
    | 'metafield.internal.type'
    | 'metafield.key'
    | 'metafield.legacyResourceId'
    | 'metafield.namespace'
    | 'metafield.ownerType'
    | 'metafield.parent.children'
    | 'metafield.parent.children.children'
    | 'metafield.parent.children.id'
    | 'metafield.parent.id'
    | 'metafield.parent.internal.content'
    | 'metafield.parent.internal.contentDigest'
    | 'metafield.parent.internal.contentFilePath'
    | 'metafield.parent.internal.description'
    | 'metafield.parent.internal.fieldOwners'
    | 'metafield.parent.internal.ignoreType'
    | 'metafield.parent.internal.mediaType'
    | 'metafield.parent.internal.owner'
    | 'metafield.parent.internal.type'
    | 'metafield.parent.parent.children'
    | 'metafield.parent.parent.id'
    | 'metafield.shopifyId'
    | 'metafield.type'
    | 'metafield.updatedAt'
    | 'metafield.value'
    | 'metafield.valueType'
    | 'metafields'
    | 'metafields.children'
    | 'metafields.children.children'
    | 'metafields.children.children.children'
    | 'metafields.children.children.id'
    | 'metafields.children.id'
    | 'metafields.children.internal.content'
    | 'metafields.children.internal.contentDigest'
    | 'metafields.children.internal.contentFilePath'
    | 'metafields.children.internal.description'
    | 'metafields.children.internal.fieldOwners'
    | 'metafields.children.internal.ignoreType'
    | 'metafields.children.internal.mediaType'
    | 'metafields.children.internal.owner'
    | 'metafields.children.internal.type'
    | 'metafields.children.parent.children'
    | 'metafields.children.parent.id'
    | 'metafields.createdAt'
    | 'metafields.description'
    | 'metafields.id'
    | 'metafields.internal.content'
    | 'metafields.internal.contentDigest'
    | 'metafields.internal.contentFilePath'
    | 'metafields.internal.description'
    | 'metafields.internal.fieldOwners'
    | 'metafields.internal.ignoreType'
    | 'metafields.internal.mediaType'
    | 'metafields.internal.owner'
    | 'metafields.internal.type'
    | 'metafields.key'
    | 'metafields.legacyResourceId'
    | 'metafields.namespace'
    | 'metafields.ownerType'
    | 'metafields.parent.children'
    | 'metafields.parent.children.children'
    | 'metafields.parent.children.id'
    | 'metafields.parent.id'
    | 'metafields.parent.internal.content'
    | 'metafields.parent.internal.contentDigest'
    | 'metafields.parent.internal.contentFilePath'
    | 'metafields.parent.internal.description'
    | 'metafields.parent.internal.fieldOwners'
    | 'metafields.parent.internal.ignoreType'
    | 'metafields.parent.internal.mediaType'
    | 'metafields.parent.internal.owner'
    | 'metafields.parent.internal.type'
    | 'metafields.parent.parent.children'
    | 'metafields.parent.parent.id'
    | 'metafields.shopifyId'
    | 'metafields.type'
    | 'metafields.updatedAt'
    | 'metafields.value'
    | 'metafields.valueType'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'products'
    | 'productsCount'
    | 'products.children'
    | 'products.children.children'
    | 'products.children.children.children'
    | 'products.children.children.id'
    | 'products.children.id'
    | 'products.children.internal.content'
    | 'products.children.internal.contentDigest'
    | 'products.children.internal.contentFilePath'
    | 'products.children.internal.description'
    | 'products.children.internal.fieldOwners'
    | 'products.children.internal.ignoreType'
    | 'products.children.internal.mediaType'
    | 'products.children.internal.owner'
    | 'products.children.internal.type'
    | 'products.children.parent.children'
    | 'products.children.parent.id'
    | 'products.collections'
    | 'products.collections.children'
    | 'products.collections.children.children'
    | 'products.collections.children.id'
    | 'products.collections.description'
    | 'products.collections.descriptionHtml'
    | 'products.collections.feedback.details'
    | 'products.collections.feedback.summary'
    | 'products.collections.handle'
    | 'products.collections.id'
    | 'products.collections.image.altText'
    | 'products.collections.image.height'
    | 'products.collections.image.originalSrc'
    | 'products.collections.image.src'
    | 'products.collections.image.transformedSrc'
    | 'products.collections.image.width'
    | 'products.collections.internal.content'
    | 'products.collections.internal.contentDigest'
    | 'products.collections.internal.contentFilePath'
    | 'products.collections.internal.description'
    | 'products.collections.internal.fieldOwners'
    | 'products.collections.internal.ignoreType'
    | 'products.collections.internal.mediaType'
    | 'products.collections.internal.owner'
    | 'products.collections.internal.type'
    | 'products.collections.legacyResourceId'
    | 'products.collections.metafield.children'
    | 'products.collections.metafield.createdAt'
    | 'products.collections.metafield.description'
    | 'products.collections.metafield.id'
    | 'products.collections.metafield.key'
    | 'products.collections.metafield.legacyResourceId'
    | 'products.collections.metafield.namespace'
    | 'products.collections.metafield.ownerType'
    | 'products.collections.metafield.shopifyId'
    | 'products.collections.metafield.type'
    | 'products.collections.metafield.updatedAt'
    | 'products.collections.metafield.value'
    | 'products.collections.metafield.valueType'
    | 'products.collections.metafields'
    | 'products.collections.metafields.children'
    | 'products.collections.metafields.createdAt'
    | 'products.collections.metafields.description'
    | 'products.collections.metafields.id'
    | 'products.collections.metafields.key'
    | 'products.collections.metafields.legacyResourceId'
    | 'products.collections.metafields.namespace'
    | 'products.collections.metafields.ownerType'
    | 'products.collections.metafields.shopifyId'
    | 'products.collections.metafields.type'
    | 'products.collections.metafields.updatedAt'
    | 'products.collections.metafields.value'
    | 'products.collections.metafields.valueType'
    | 'products.collections.parent.children'
    | 'products.collections.parent.id'
    | 'products.collections.products'
    | 'products.collections.productsCount'
    | 'products.collections.products.children'
    | 'products.collections.products.collections'
    | 'products.collections.products.createdAt'
    | 'products.collections.products.description'
    | 'products.collections.products.descriptionHtml'
    | 'products.collections.products.gatsbyPath'
    | 'products.collections.products.giftCardTemplateSuffix'
    | 'products.collections.products.handle'
    | 'products.collections.products.hasOnlyDefaultVariant'
    | 'products.collections.products.hasOutOfStockVariants'
    | 'products.collections.products.id'
    | 'products.collections.products.isGiftCard'
    | 'products.collections.products.legacyResourceId'
    | 'products.collections.products.media'
    | 'products.collections.products.mediaCount'
    | 'products.collections.products.metafields'
    | 'products.collections.products.onlineStorePreviewUrl'
    | 'products.collections.products.onlineStoreUrl'
    | 'products.collections.products.options'
    | 'products.collections.products.productType'
    | 'products.collections.products.publishedAt'
    | 'products.collections.products.requiresSellingPlan'
    | 'products.collections.products.sellingPlanGroupCount'
    | 'products.collections.products.shopifyId'
    | 'products.collections.products.status'
    | 'products.collections.products.storefrontId'
    | 'products.collections.products.tags'
    | 'products.collections.products.templateSuffix'
    | 'products.collections.products.title'
    | 'products.collections.products.totalInventory'
    | 'products.collections.products.totalVariants'
    | 'products.collections.products.tracksInventory'
    | 'products.collections.products.updatedAt'
    | 'products.collections.products.variants'
    | 'products.collections.products.vendor'
    | 'products.collections.ruleSet.appliedDisjunctively'
    | 'products.collections.ruleSet.rules'
    | 'products.collections.seo.description'
    | 'products.collections.seo.title'
    | 'products.collections.shopifyId'
    | 'products.collections.sortOrder'
    | 'products.collections.storefrontId'
    | 'products.collections.templateSuffix'
    | 'products.collections.title'
    | 'products.collections.updatedAt'
    | 'products.createdAt'
    | 'products.description'
    | 'products.descriptionHtml'
    | 'products.featuredImage.altText'
    | 'products.featuredImage.height'
    | 'products.featuredImage.localFile.absolutePath'
    | 'products.featuredImage.localFile.accessTime'
    | 'products.featuredImage.localFile.atime'
    | 'products.featuredImage.localFile.atimeMs'
    | 'products.featuredImage.localFile.base'
    | 'products.featuredImage.localFile.birthTime'
    | 'products.featuredImage.localFile.birthtime'
    | 'products.featuredImage.localFile.birthtimeMs'
    | 'products.featuredImage.localFile.blksize'
    | 'products.featuredImage.localFile.blocks'
    | 'products.featuredImage.localFile.changeTime'
    | 'products.featuredImage.localFile.children'
    | 'products.featuredImage.localFile.childrenImageSharp'
    | 'products.featuredImage.localFile.ctime'
    | 'products.featuredImage.localFile.ctimeMs'
    | 'products.featuredImage.localFile.dev'
    | 'products.featuredImage.localFile.dir'
    | 'products.featuredImage.localFile.ext'
    | 'products.featuredImage.localFile.extension'
    | 'products.featuredImage.localFile.gid'
    | 'products.featuredImage.localFile.id'
    | 'products.featuredImage.localFile.ino'
    | 'products.featuredImage.localFile.mode'
    | 'products.featuredImage.localFile.modifiedTime'
    | 'products.featuredImage.localFile.mtime'
    | 'products.featuredImage.localFile.mtimeMs'
    | 'products.featuredImage.localFile.name'
    | 'products.featuredImage.localFile.nlink'
    | 'products.featuredImage.localFile.prettySize'
    | 'products.featuredImage.localFile.rdev'
    | 'products.featuredImage.localFile.relativeDirectory'
    | 'products.featuredImage.localFile.relativePath'
    | 'products.featuredImage.localFile.root'
    | 'products.featuredImage.localFile.size'
    | 'products.featuredImage.localFile.sourceInstanceName'
    | 'products.featuredImage.localFile.uid'
    | 'products.featuredImage.localFile.url'
    | 'products.featuredImage.originalSrc'
    | 'products.featuredImage.src'
    | 'products.featuredImage.transformedSrc'
    | 'products.featuredImage.width'
    | 'products.featuredMedia.alt'
    | 'products.featuredMedia.children'
    | 'products.featuredMedia.children.children'
    | 'products.featuredMedia.children.id'
    | 'products.featuredMedia.id'
    | 'products.featuredMedia.internal.content'
    | 'products.featuredMedia.internal.contentDigest'
    | 'products.featuredMedia.internal.contentFilePath'
    | 'products.featuredMedia.internal.description'
    | 'products.featuredMedia.internal.fieldOwners'
    | 'products.featuredMedia.internal.ignoreType'
    | 'products.featuredMedia.internal.mediaType'
    | 'products.featuredMedia.internal.owner'
    | 'products.featuredMedia.internal.type'
    | 'products.featuredMedia.mediaContentType'
    | 'products.featuredMedia.mediaErrors'
    | 'products.featuredMedia.mediaErrors.code'
    | 'products.featuredMedia.mediaErrors.details'
    | 'products.featuredMedia.mediaErrors.message'
    | 'products.featuredMedia.parent.children'
    | 'products.featuredMedia.parent.id'
    | 'products.featuredMedia.preview.status'
    | 'products.featuredMedia.shopifyId'
    | 'products.featuredMedia.status'
    | 'products.feedback.details'
    | 'products.feedback.details.messages'
    | 'products.feedback.summary'
    | 'products.gatsbyPath'
    | 'products.giftCardTemplateSuffix'
    | 'products.handle'
    | 'products.hasOnlyDefaultVariant'
    | 'products.hasOutOfStockVariants'
    | 'products.id'
    | 'products.internal.content'
    | 'products.internal.contentDigest'
    | 'products.internal.contentFilePath'
    | 'products.internal.description'
    | 'products.internal.fieldOwners'
    | 'products.internal.ignoreType'
    | 'products.internal.mediaType'
    | 'products.internal.owner'
    | 'products.internal.type'
    | 'products.isGiftCard'
    | 'products.legacyResourceId'
    | 'products.media'
    | 'products.mediaCount'
    | 'products.media.alt'
    | 'products.media.children'
    | 'products.media.children.children'
    | 'products.media.children.id'
    | 'products.media.id'
    | 'products.media.internal.content'
    | 'products.media.internal.contentDigest'
    | 'products.media.internal.contentFilePath'
    | 'products.media.internal.description'
    | 'products.media.internal.fieldOwners'
    | 'products.media.internal.ignoreType'
    | 'products.media.internal.mediaType'
    | 'products.media.internal.owner'
    | 'products.media.internal.type'
    | 'products.media.mediaContentType'
    | 'products.media.mediaErrors'
    | 'products.media.mediaErrors.code'
    | 'products.media.mediaErrors.details'
    | 'products.media.mediaErrors.message'
    | 'products.media.parent.children'
    | 'products.media.parent.id'
    | 'products.media.preview.status'
    | 'products.media.shopifyId'
    | 'products.media.status'
    | 'products.metafield.children'
    | 'products.metafield.children.children'
    | 'products.metafield.children.id'
    | 'products.metafield.createdAt'
    | 'products.metafield.description'
    | 'products.metafield.id'
    | 'products.metafield.internal.content'
    | 'products.metafield.internal.contentDigest'
    | 'products.metafield.internal.contentFilePath'
    | 'products.metafield.internal.description'
    | 'products.metafield.internal.fieldOwners'
    | 'products.metafield.internal.ignoreType'
    | 'products.metafield.internal.mediaType'
    | 'products.metafield.internal.owner'
    | 'products.metafield.internal.type'
    | 'products.metafield.key'
    | 'products.metafield.legacyResourceId'
    | 'products.metafield.namespace'
    | 'products.metafield.ownerType'
    | 'products.metafield.parent.children'
    | 'products.metafield.parent.id'
    | 'products.metafield.shopifyId'
    | 'products.metafield.type'
    | 'products.metafield.updatedAt'
    | 'products.metafield.value'
    | 'products.metafield.valueType'
    | 'products.metafields'
    | 'products.metafields.children'
    | 'products.metafields.children.children'
    | 'products.metafields.children.id'
    | 'products.metafields.createdAt'
    | 'products.metafields.description'
    | 'products.metafields.id'
    | 'products.metafields.internal.content'
    | 'products.metafields.internal.contentDigest'
    | 'products.metafields.internal.contentFilePath'
    | 'products.metafields.internal.description'
    | 'products.metafields.internal.fieldOwners'
    | 'products.metafields.internal.ignoreType'
    | 'products.metafields.internal.mediaType'
    | 'products.metafields.internal.owner'
    | 'products.metafields.internal.type'
    | 'products.metafields.key'
    | 'products.metafields.legacyResourceId'
    | 'products.metafields.namespace'
    | 'products.metafields.ownerType'
    | 'products.metafields.parent.children'
    | 'products.metafields.parent.id'
    | 'products.metafields.shopifyId'
    | 'products.metafields.type'
    | 'products.metafields.updatedAt'
    | 'products.metafields.value'
    | 'products.metafields.valueType'
    | 'products.onlineStorePreviewUrl'
    | 'products.onlineStoreUrl'
    | 'products.options'
    | 'products.options.name'
    | 'products.options.position'
    | 'products.options.shopifyId'
    | 'products.options.values'
    | 'products.parent.children'
    | 'products.parent.children.children'
    | 'products.parent.children.id'
    | 'products.parent.id'
    | 'products.parent.internal.content'
    | 'products.parent.internal.contentDigest'
    | 'products.parent.internal.contentFilePath'
    | 'products.parent.internal.description'
    | 'products.parent.internal.fieldOwners'
    | 'products.parent.internal.ignoreType'
    | 'products.parent.internal.mediaType'
    | 'products.parent.internal.owner'
    | 'products.parent.internal.type'
    | 'products.parent.parent.children'
    | 'products.parent.parent.id'
    | 'products.priceRangeV2.maxVariantPrice.amount'
    | 'products.priceRangeV2.maxVariantPrice.currencyCode'
    | 'products.priceRangeV2.minVariantPrice.amount'
    | 'products.priceRangeV2.minVariantPrice.currencyCode'
    | 'products.priceRange.maxVariantPrice.amount'
    | 'products.priceRange.maxVariantPrice.currencyCode'
    | 'products.priceRange.minVariantPrice.amount'
    | 'products.priceRange.minVariantPrice.currencyCode'
    | 'products.productType'
    | 'products.publishedAt'
    | 'products.requiresSellingPlan'
    | 'products.sellingPlanGroupCount'
    | 'products.seo.description'
    | 'products.seo.title'
    | 'products.shopifyId'
    | 'products.status'
    | 'products.storefrontId'
    | 'products.tags'
    | 'products.templateSuffix'
    | 'products.title'
    | 'products.totalInventory'
    | 'products.totalVariants'
    | 'products.tracksInventory'
    | 'products.updatedAt'
    | 'products.variants'
    | 'products.variants.availableForSale'
    | 'products.variants.barcode'
    | 'products.variants.children'
    | 'products.variants.children.children'
    | 'products.variants.children.id'
    | 'products.variants.compareAtPrice'
    | 'products.variants.createdAt'
    | 'products.variants.displayName'
    | 'products.variants.id'
    | 'products.variants.image.altText'
    | 'products.variants.image.height'
    | 'products.variants.image.originalSrc'
    | 'products.variants.image.src'
    | 'products.variants.image.transformedSrc'
    | 'products.variants.image.width'
    | 'products.variants.internal.content'
    | 'products.variants.internal.contentDigest'
    | 'products.variants.internal.contentFilePath'
    | 'products.variants.internal.description'
    | 'products.variants.internal.fieldOwners'
    | 'products.variants.internal.ignoreType'
    | 'products.variants.internal.mediaType'
    | 'products.variants.internal.owner'
    | 'products.variants.internal.type'
    | 'products.variants.inventoryPolicy'
    | 'products.variants.inventoryQuantity'
    | 'products.variants.legacyResourceId'
    | 'products.variants.media'
    | 'products.variants.media.alt'
    | 'products.variants.media.children'
    | 'products.variants.media.id'
    | 'products.variants.media.mediaContentType'
    | 'products.variants.media.mediaErrors'
    | 'products.variants.media.shopifyId'
    | 'products.variants.media.status'
    | 'products.variants.metafield.children'
    | 'products.variants.metafield.createdAt'
    | 'products.variants.metafield.description'
    | 'products.variants.metafield.id'
    | 'products.variants.metafield.key'
    | 'products.variants.metafield.legacyResourceId'
    | 'products.variants.metafield.namespace'
    | 'products.variants.metafield.ownerType'
    | 'products.variants.metafield.shopifyId'
    | 'products.variants.metafield.type'
    | 'products.variants.metafield.updatedAt'
    | 'products.variants.metafield.value'
    | 'products.variants.metafield.valueType'
    | 'products.variants.metafields'
    | 'products.variants.metafields.children'
    | 'products.variants.metafields.createdAt'
    | 'products.variants.metafields.description'
    | 'products.variants.metafields.id'
    | 'products.variants.metafields.key'
    | 'products.variants.metafields.legacyResourceId'
    | 'products.variants.metafields.namespace'
    | 'products.variants.metafields.ownerType'
    | 'products.variants.metafields.shopifyId'
    | 'products.variants.metafields.type'
    | 'products.variants.metafields.updatedAt'
    | 'products.variants.metafields.value'
    | 'products.variants.metafields.valueType'
    | 'products.variants.parent.children'
    | 'products.variants.parent.id'
    | 'products.variants.position'
    | 'products.variants.presentmentPrices'
    | 'products.variants.price'
    | 'products.variants.product.children'
    | 'products.variants.product.collections'
    | 'products.variants.product.createdAt'
    | 'products.variants.product.description'
    | 'products.variants.product.descriptionHtml'
    | 'products.variants.product.gatsbyPath'
    | 'products.variants.product.giftCardTemplateSuffix'
    | 'products.variants.product.handle'
    | 'products.variants.product.hasOnlyDefaultVariant'
    | 'products.variants.product.hasOutOfStockVariants'
    | 'products.variants.product.id'
    | 'products.variants.product.isGiftCard'
    | 'products.variants.product.legacyResourceId'
    | 'products.variants.product.media'
    | 'products.variants.product.mediaCount'
    | 'products.variants.product.metafields'
    | 'products.variants.product.onlineStorePreviewUrl'
    | 'products.variants.product.onlineStoreUrl'
    | 'products.variants.product.options'
    | 'products.variants.product.productType'
    | 'products.variants.product.publishedAt'
    | 'products.variants.product.requiresSellingPlan'
    | 'products.variants.product.sellingPlanGroupCount'
    | 'products.variants.product.shopifyId'
    | 'products.variants.product.status'
    | 'products.variants.product.storefrontId'
    | 'products.variants.product.tags'
    | 'products.variants.product.templateSuffix'
    | 'products.variants.product.title'
    | 'products.variants.product.totalInventory'
    | 'products.variants.product.totalVariants'
    | 'products.variants.product.tracksInventory'
    | 'products.variants.product.updatedAt'
    | 'products.variants.product.variants'
    | 'products.variants.product.vendor'
    | 'products.variants.requiresShipping'
    | 'products.variants.selectedOptions'
    | 'products.variants.selectedOptions.name'
    | 'products.variants.selectedOptions.value'
    | 'products.variants.sellingPlanGroupCount'
    | 'products.variants.shopifyId'
    | 'products.variants.sku'
    | 'products.variants.storefrontId'
    | 'products.variants.taxCode'
    | 'products.variants.taxable'
    | 'products.variants.title'
    | 'products.variants.updatedAt'
    | 'products.variants.weight'
    | 'products.variants.weightUnit'
    | 'products.vendor'
    | 'ruleSet.appliedDisjunctively'
    | 'ruleSet.rules'
    | 'ruleSet.rules.column'
    | 'ruleSet.rules.condition'
    | 'ruleSet.rules.relation'
    | 'seo.description'
    | 'seo.title'
    | 'shopifyId'
    | 'sortOrder'
    | 'storefrontId'
    | 'templateSuffix'
    | 'title'
    | 'updatedAt';

  type ShopifyCollectionFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly descriptionHtml: InputMaybe<StringQueryOperatorInput>;
    readonly feedback: InputMaybe<ShopifyResourceFeedbackFilterInput>;
    readonly handle: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly image: InputMaybe<ShopifyImageFilterInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    readonly metafield: InputMaybe<ShopifyMetafieldFilterInput>;
    readonly metafields: InputMaybe<ShopifyMetafieldFilterListInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly products: InputMaybe<ShopifyProductFilterListInput>;
    readonly productsCount: InputMaybe<IntQueryOperatorInput>;
    readonly ruleSet: InputMaybe<ShopifyCollectionRuleSetFilterInput>;
    readonly seo: InputMaybe<ShopifySEOFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly sortOrder: InputMaybe<ShopifyCollectionSortOrderQueryOperatorInput>;
    readonly storefrontId: InputMaybe<StringQueryOperatorInput>;
    readonly templateSuffix: InputMaybe<StringQueryOperatorInput>;
    readonly title: InputMaybe<StringQueryOperatorInput>;
    readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  };

  type ShopifyCollectionFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyCollectionFilterInput>;
  };

  type ShopifyCollectionGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyCollectionEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyCollectionGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyCollection>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyCollectionGroupConnection_distinctArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionGroupConnection_groupArgs = {
    field: ShopifyCollectionFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyCollectionGroupConnection_maxArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionGroupConnection_minArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionGroupConnection_sumArgs = {
    field: ShopifyCollectionFieldsEnum;
  };

  type ShopifyCollectionRule = {
    readonly column: ShopifyCollectionRuleColumn;
    readonly condition: Scalars['String'];
    readonly relation: ShopifyCollectionRuleRelation;
  };

  type ShopifyCollectionRuleColumn =
    | 'IS_PRICE_REDUCED'
    | 'TAG'
    | 'TITLE'
    | 'TYPE'
    | 'VARIANT_COMPARE_AT_PRICE'
    | 'VARIANT_INVENTORY'
    | 'VARIANT_PRICE'
    | 'VARIANT_TITLE'
    | 'VARIANT_WEIGHT'
    | 'VENDOR';

  type ShopifyCollectionRuleColumnQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyCollectionRuleColumn>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyCollectionRuleColumn>>
    >;
    readonly ne: InputMaybe<ShopifyCollectionRuleColumn>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyCollectionRuleColumn>>
    >;
  };

  type ShopifyCollectionRuleFilterInput = {
    readonly column: InputMaybe<ShopifyCollectionRuleColumnQueryOperatorInput>;
    readonly condition: InputMaybe<StringQueryOperatorInput>;
    readonly relation: InputMaybe<ShopifyCollectionRuleRelationQueryOperatorInput>;
  };

  type ShopifyCollectionRuleFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyCollectionRuleFilterInput>;
  };

  type ShopifyCollectionRuleRelation =
    | 'CONTAINS'
    | 'ENDS_WITH'
    | 'EQUALS'
    | 'GREATER_THAN'
    | 'IS_NOT_SET'
    | 'IS_SET'
    | 'LESS_THAN'
    | 'NOT_CONTAINS'
    | 'NOT_EQUALS'
    | 'STARTS_WITH';

  type ShopifyCollectionRuleRelationQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyCollectionRuleRelation>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyCollectionRuleRelation>>
    >;
    readonly ne: InputMaybe<ShopifyCollectionRuleRelation>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyCollectionRuleRelation>>
    >;
  };

  type ShopifyCollectionRuleSet = {
    readonly appliedDisjunctively: Scalars['Boolean'];
    readonly rules: ReadonlyArray<ShopifyCollectionRule>;
  };

  type ShopifyCollectionRuleSetFilterInput = {
    readonly appliedDisjunctively: InputMaybe<BooleanQueryOperatorInput>;
    readonly rules: InputMaybe<ShopifyCollectionRuleFilterListInput>;
  };

  type ShopifyCollectionSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyCollectionFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyCollectionSortOrder =
    | 'ALPHA_ASC'
    | 'ALPHA_DESC'
    | 'BEST_SELLING'
    | 'CREATED'
    | 'CREATED_DESC'
    | 'MANUAL'
    | 'PRICE_ASC'
    | 'PRICE_DESC';

  type ShopifyCollectionSortOrderQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyCollectionSortOrder>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyCollectionSortOrder>>
    >;
    readonly ne: InputMaybe<ShopifyCollectionSortOrder>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyCollectionSortOrder>>
    >;
  };

  type ShopifyCountryCode =
    | 'AC'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AN'
    | 'AO'
    | 'AR'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PS'
    | 'PT'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TA'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'XK'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW'
    | 'ZZ';

  type ShopifyCurrencyCode =
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BYR'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KID'
    | 'KMF'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'XXX'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

  type ShopifyCurrencyCodeQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyCurrencyCode>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyCurrencyCode>>>;
    readonly ne: InputMaybe<ShopifyCurrencyCode>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyCurrencyCode>>>;
  };

  type ShopifyEditableProperty = {
    readonly locked: Scalars['Boolean'];
    readonly reason: Maybe<Scalars['String']>;
  };

  type ShopifyExternalVideo = Node &
    ShopifyMedia & {
      readonly alt: Maybe<Scalars['String']>;
      readonly children: ReadonlyArray<Node>;
      readonly embeddedUrl: Scalars['String'];
      readonly host: ShopifyMediaHost;
      readonly id: Scalars['ID'];
      readonly internal: Internal;
      readonly mediaContentType: ShopifyMediaContentType;
      readonly mediaErrors: ReadonlyArray<ShopifyMediaError>;
      readonly parent: Maybe<Node>;
      readonly preview: Maybe<ShopifyMediaPreviewImage>;
      readonly shopifyId: Scalars['String'];
      readonly status: ShopifyMediaStatus;
    };

  type ShopifyExternalVideoConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyExternalVideoEdge>;
    readonly group: ReadonlyArray<ShopifyExternalVideoGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyExternalVideo>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyExternalVideoConnection_distinctArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoConnection_groupArgs = {
    field: ShopifyExternalVideoFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyExternalVideoConnection_maxArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoConnection_minArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoConnection_sumArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoEdge = {
    readonly next: Maybe<ShopifyExternalVideo>;
    readonly node: ShopifyExternalVideo;
    readonly previous: Maybe<ShopifyExternalVideo>;
  };

  type ShopifyExternalVideoFieldsEnum =
    | 'alt'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'embeddedUrl'
    | 'host'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'mediaContentType'
    | 'mediaErrors'
    | 'mediaErrors.code'
    | 'mediaErrors.details'
    | 'mediaErrors.message'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'preview.image.altText'
    | 'preview.image.height'
    | 'preview.image.localFile.absolutePath'
    | 'preview.image.localFile.accessTime'
    | 'preview.image.localFile.atime'
    | 'preview.image.localFile.atimeMs'
    | 'preview.image.localFile.base'
    | 'preview.image.localFile.birthTime'
    | 'preview.image.localFile.birthtime'
    | 'preview.image.localFile.birthtimeMs'
    | 'preview.image.localFile.blksize'
    | 'preview.image.localFile.blocks'
    | 'preview.image.localFile.changeTime'
    | 'preview.image.localFile.children'
    | 'preview.image.localFile.childrenImageSharp'
    | 'preview.image.localFile.ctime'
    | 'preview.image.localFile.ctimeMs'
    | 'preview.image.localFile.dev'
    | 'preview.image.localFile.dir'
    | 'preview.image.localFile.ext'
    | 'preview.image.localFile.extension'
    | 'preview.image.localFile.gid'
    | 'preview.image.localFile.id'
    | 'preview.image.localFile.ino'
    | 'preview.image.localFile.mode'
    | 'preview.image.localFile.modifiedTime'
    | 'preview.image.localFile.mtime'
    | 'preview.image.localFile.mtimeMs'
    | 'preview.image.localFile.name'
    | 'preview.image.localFile.nlink'
    | 'preview.image.localFile.prettySize'
    | 'preview.image.localFile.rdev'
    | 'preview.image.localFile.relativeDirectory'
    | 'preview.image.localFile.relativePath'
    | 'preview.image.localFile.root'
    | 'preview.image.localFile.size'
    | 'preview.image.localFile.sourceInstanceName'
    | 'preview.image.localFile.uid'
    | 'preview.image.localFile.url'
    | 'preview.image.originalSrc'
    | 'preview.image.src'
    | 'preview.image.transformedSrc'
    | 'preview.image.width'
    | 'preview.status'
    | 'shopifyId'
    | 'status';

  type ShopifyExternalVideoFilterInput = {
    readonly alt: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly embeddedUrl: InputMaybe<StringQueryOperatorInput>;
    readonly host: InputMaybe<ShopifyMediaHostQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    readonly mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type ShopifyExternalVideoGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyExternalVideoEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyExternalVideoGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyExternalVideo>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyExternalVideoGroupConnection_distinctArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoGroupConnection_groupArgs = {
    field: ShopifyExternalVideoFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyExternalVideoGroupConnection_maxArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoGroupConnection_minArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoGroupConnection_sumArgs = {
    field: ShopifyExternalVideoFieldsEnum;
  };

  type ShopifyExternalVideoSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyExternalVideoFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyFileError = {
    readonly code: ShopifyFileErrorCode;
    readonly details: Maybe<Scalars['String']>;
    readonly message: Scalars['String'];
  };

  type ShopifyFileErrorCode =
    | 'EXTERNAL_VIDEO_EMBED_DISABLED'
    | 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING'
    | 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO'
    | 'EXTERNAL_VIDEO_NOT_FOUND'
    | 'EXTERNAL_VIDEO_UNLISTED'
    | 'FILE_STORAGE_LIMIT_EXCEEDED'
    | 'GENERIC_FILE_DOWNLOAD_FAILURE'
    | 'GENERIC_FILE_INVALID_SIZE'
    | 'IMAGE_DOWNLOAD_FAILURE'
    | 'IMAGE_PROCESSING_FAILURE'
    | 'INVALID_IMAGE_ASPECT_RATIO'
    | 'INVALID_IMAGE_FILE_SIZE'
    | 'INVALID_IMAGE_RESOLUTION'
    | 'INVALID_SIGNED_URL'
    | 'MEDIA_TIMEOUT_ERROR'
    | 'MODEL3D_GLB_OUTPUT_CREATION_ERROR'
    | 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR'
    | 'MODEL3D_THUMBNAIL_GENERATION_ERROR'
    | 'MODEL3D_VALIDATION_ERROR'
    | 'UNKNOWN'
    | 'UNSUPPORTED_IMAGE_FILE_TYPE'
    | 'VIDEO_INVALID_FILETYPE_ERROR'
    | 'VIDEO_MAX_DURATION_ERROR'
    | 'VIDEO_MAX_HEIGHT_ERROR'
    | 'VIDEO_MAX_WIDTH_ERROR'
    | 'VIDEO_METADATA_READ_ERROR'
    | 'VIDEO_MIN_DURATION_ERROR'
    | 'VIDEO_MIN_HEIGHT_ERROR'
    | 'VIDEO_MIN_WIDTH_ERROR'
    | 'VIDEO_VALIDATION_ERROR';

  type ShopifyFileErrorCodeQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyFileErrorCode>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyFileErrorCode>>>;
    readonly ne: InputMaybe<ShopifyFileErrorCode>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyFileErrorCode>>>;
  };

  type ShopifyFileErrorFilterInput = {
    readonly code: InputMaybe<ShopifyFileErrorCodeQueryOperatorInput>;
    readonly details: InputMaybe<StringQueryOperatorInput>;
    readonly message: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyFileErrorFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyFileErrorFilterInput>;
  };

  type ShopifyFileStatus = 'FAILED' | 'PROCESSING' | 'READY' | 'UPLOADED';

  type ShopifyFileStatusQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyFileStatus>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyFileStatus>>>;
    readonly ne: InputMaybe<ShopifyFileStatus>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyFileStatus>>>;
  };

  type ShopifyImage = {
    readonly altText: Maybe<Scalars['String']>;
    readonly height: Maybe<Scalars['Int']>;
    readonly localFile: Maybe<File>;
    readonly originalSrc: Scalars['String'];
    readonly src: Scalars['String'];
    readonly transformedSrc: Scalars['String'];
    readonly width: Maybe<Scalars['Int']>;
  };

  type ShopifyImageFilterInput = {
    readonly altText: InputMaybe<StringQueryOperatorInput>;
    readonly height: InputMaybe<IntQueryOperatorInput>;
    readonly localFile: InputMaybe<FileFilterInput>;
    readonly originalSrc: InputMaybe<StringQueryOperatorInput>;
    readonly src: InputMaybe<StringQueryOperatorInput>;
    readonly transformedSrc: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<IntQueryOperatorInput>;
  };

  type ShopifyLink = {
    readonly label: Scalars['String'];
    readonly url: Scalars['String'];
  };

  type ShopifyLinkFilterInput = {
    readonly label: InputMaybe<StringQueryOperatorInput>;
    readonly url: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyMedia = {
    readonly alt: Maybe<Scalars['String']>;
    readonly children: ReadonlyArray<Node>;
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly mediaContentType: ShopifyMediaContentType;
    readonly mediaErrors: ReadonlyArray<ShopifyMediaError>;
    readonly parent: Maybe<Node>;
    readonly preview: Maybe<ShopifyMediaPreviewImage>;
    readonly shopifyId: Scalars['String'];
    readonly status: ShopifyMediaStatus;
  };

  type ShopifyMediaConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyMediaEdge>;
    readonly group: ReadonlyArray<ShopifyMediaGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyMedia>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyMediaConnection_distinctArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaConnection_groupArgs = {
    field: ShopifyMediaFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyMediaConnection_maxArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaConnection_minArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaConnection_sumArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaContentType =
    | 'EXTERNAL_VIDEO'
    | 'IMAGE'
    | 'MODEL_3D'
    | 'VIDEO';

  type ShopifyMediaContentTypeQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyMediaContentType>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyMediaContentType>>>;
    readonly ne: InputMaybe<ShopifyMediaContentType>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMediaContentType>>
    >;
  };

  type ShopifyMediaEdge = {
    readonly next: Maybe<ShopifyMedia>;
    readonly node: ShopifyMedia;
    readonly previous: Maybe<ShopifyMedia>;
  };

  type ShopifyMediaError = {
    readonly code: ShopifyMediaErrorCode;
    readonly details: Maybe<Scalars['String']>;
    readonly message: Scalars['String'];
  };

  type ShopifyMediaErrorCode =
    | 'EXTERNAL_VIDEO_EMBED_DISABLED'
    | 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING'
    | 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO'
    | 'EXTERNAL_VIDEO_NOT_FOUND'
    | 'EXTERNAL_VIDEO_UNLISTED'
    | 'FILE_STORAGE_LIMIT_EXCEEDED'
    | 'GENERIC_FILE_DOWNLOAD_FAILURE'
    | 'GENERIC_FILE_INVALID_SIZE'
    | 'IMAGE_DOWNLOAD_FAILURE'
    | 'IMAGE_PROCESSING_FAILURE'
    | 'INVALID_IMAGE_ASPECT_RATIO'
    | 'INVALID_IMAGE_FILE_SIZE'
    | 'INVALID_IMAGE_RESOLUTION'
    | 'INVALID_SIGNED_URL'
    | 'MEDIA_TIMEOUT_ERROR'
    | 'MODEL3D_GLB_OUTPUT_CREATION_ERROR'
    | 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR'
    | 'MODEL3D_THUMBNAIL_GENERATION_ERROR'
    | 'MODEL3D_VALIDATION_ERROR'
    | 'UNKNOWN'
    | 'UNSUPPORTED_IMAGE_FILE_TYPE'
    | 'VIDEO_INVALID_FILETYPE_ERROR'
    | 'VIDEO_MAX_DURATION_ERROR'
    | 'VIDEO_MAX_HEIGHT_ERROR'
    | 'VIDEO_MAX_WIDTH_ERROR'
    | 'VIDEO_METADATA_READ_ERROR'
    | 'VIDEO_MIN_DURATION_ERROR'
    | 'VIDEO_MIN_HEIGHT_ERROR'
    | 'VIDEO_MIN_WIDTH_ERROR'
    | 'VIDEO_VALIDATION_ERROR';

  type ShopifyMediaErrorCodeQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyMediaErrorCode>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyMediaErrorCode>>>;
    readonly ne: InputMaybe<ShopifyMediaErrorCode>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyMediaErrorCode>>>;
  };

  type ShopifyMediaErrorFilterInput = {
    readonly code: InputMaybe<ShopifyMediaErrorCodeQueryOperatorInput>;
    readonly details: InputMaybe<StringQueryOperatorInput>;
    readonly message: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyMediaErrorFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyMediaErrorFilterInput>;
  };

  type ShopifyMediaFieldsEnum =
    | 'alt'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'mediaContentType'
    | 'mediaErrors'
    | 'mediaErrors.code'
    | 'mediaErrors.details'
    | 'mediaErrors.message'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'preview.image.altText'
    | 'preview.image.height'
    | 'preview.image.localFile.absolutePath'
    | 'preview.image.localFile.accessTime'
    | 'preview.image.localFile.atime'
    | 'preview.image.localFile.atimeMs'
    | 'preview.image.localFile.base'
    | 'preview.image.localFile.birthTime'
    | 'preview.image.localFile.birthtime'
    | 'preview.image.localFile.birthtimeMs'
    | 'preview.image.localFile.blksize'
    | 'preview.image.localFile.blocks'
    | 'preview.image.localFile.changeTime'
    | 'preview.image.localFile.children'
    | 'preview.image.localFile.childrenImageSharp'
    | 'preview.image.localFile.ctime'
    | 'preview.image.localFile.ctimeMs'
    | 'preview.image.localFile.dev'
    | 'preview.image.localFile.dir'
    | 'preview.image.localFile.ext'
    | 'preview.image.localFile.extension'
    | 'preview.image.localFile.gid'
    | 'preview.image.localFile.id'
    | 'preview.image.localFile.ino'
    | 'preview.image.localFile.mode'
    | 'preview.image.localFile.modifiedTime'
    | 'preview.image.localFile.mtime'
    | 'preview.image.localFile.mtimeMs'
    | 'preview.image.localFile.name'
    | 'preview.image.localFile.nlink'
    | 'preview.image.localFile.prettySize'
    | 'preview.image.localFile.rdev'
    | 'preview.image.localFile.relativeDirectory'
    | 'preview.image.localFile.relativePath'
    | 'preview.image.localFile.root'
    | 'preview.image.localFile.size'
    | 'preview.image.localFile.sourceInstanceName'
    | 'preview.image.localFile.uid'
    | 'preview.image.localFile.url'
    | 'preview.image.originalSrc'
    | 'preview.image.src'
    | 'preview.image.transformedSrc'
    | 'preview.image.width'
    | 'preview.status'
    | 'shopifyId'
    | 'status';

  type ShopifyMediaFilterInput = {
    readonly alt: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    readonly mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type ShopifyMediaFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyMediaFilterInput>;
  };

  type ShopifyMediaGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyMediaEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyMediaGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyMedia>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyMediaGroupConnection_distinctArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaGroupConnection_groupArgs = {
    field: ShopifyMediaFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyMediaGroupConnection_maxArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaGroupConnection_minArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaGroupConnection_sumArgs = {
    field: ShopifyMediaFieldsEnum;
  };

  type ShopifyMediaHost = 'VIMEO' | 'YOUTUBE';

  type ShopifyMediaHostQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyMediaHost>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyMediaHost>>>;
    readonly ne: InputMaybe<ShopifyMediaHost>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyMediaHost>>>;
  };

  type ShopifyMediaImage = Node &
    ShopifyMedia & {
      readonly alt: Maybe<Scalars['String']>;
      readonly children: ReadonlyArray<Node>;
      readonly createdAt: Scalars['Date'];
      readonly fileErrors: ReadonlyArray<ShopifyFileError>;
      readonly fileStatus: ShopifyFileStatus;
      readonly id: Scalars['ID'];
      readonly image: Maybe<ShopifyImage>;
      readonly internal: Internal;
      readonly mediaContentType: ShopifyMediaContentType;
      readonly mediaErrors: ReadonlyArray<ShopifyMediaError>;
      readonly mimeType: Maybe<Scalars['String']>;
      readonly parent: Maybe<Node>;
      readonly preview: Maybe<ShopifyMediaPreviewImage>;
      readonly shopifyId: Scalars['String'];
      readonly status: ShopifyMediaStatus;
    };

  type ShopifyMediaImage_createdAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyMediaImageConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyMediaImageEdge>;
    readonly group: ReadonlyArray<ShopifyMediaImageGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyMediaImage>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyMediaImageConnection_distinctArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageConnection_groupArgs = {
    field: ShopifyMediaImageFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyMediaImageConnection_maxArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageConnection_minArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageConnection_sumArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageEdge = {
    readonly next: Maybe<ShopifyMediaImage>;
    readonly node: ShopifyMediaImage;
    readonly previous: Maybe<ShopifyMediaImage>;
  };

  type ShopifyMediaImageFieldsEnum =
    | 'alt'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'createdAt'
    | 'fileErrors'
    | 'fileErrors.code'
    | 'fileErrors.details'
    | 'fileErrors.message'
    | 'fileStatus'
    | 'id'
    | 'image.altText'
    | 'image.height'
    | 'image.localFile.absolutePath'
    | 'image.localFile.accessTime'
    | 'image.localFile.atime'
    | 'image.localFile.atimeMs'
    | 'image.localFile.base'
    | 'image.localFile.birthTime'
    | 'image.localFile.birthtime'
    | 'image.localFile.birthtimeMs'
    | 'image.localFile.blksize'
    | 'image.localFile.blocks'
    | 'image.localFile.changeTime'
    | 'image.localFile.childImageSharp.children'
    | 'image.localFile.childImageSharp.gatsbyImageData'
    | 'image.localFile.childImageSharp.id'
    | 'image.localFile.children'
    | 'image.localFile.childrenImageSharp'
    | 'image.localFile.childrenImageSharp.children'
    | 'image.localFile.childrenImageSharp.gatsbyImageData'
    | 'image.localFile.childrenImageSharp.id'
    | 'image.localFile.children.children'
    | 'image.localFile.children.id'
    | 'image.localFile.ctime'
    | 'image.localFile.ctimeMs'
    | 'image.localFile.dev'
    | 'image.localFile.dir'
    | 'image.localFile.ext'
    | 'image.localFile.extension'
    | 'image.localFile.gid'
    | 'image.localFile.id'
    | 'image.localFile.ino'
    | 'image.localFile.internal.content'
    | 'image.localFile.internal.contentDigest'
    | 'image.localFile.internal.contentFilePath'
    | 'image.localFile.internal.description'
    | 'image.localFile.internal.fieldOwners'
    | 'image.localFile.internal.ignoreType'
    | 'image.localFile.internal.mediaType'
    | 'image.localFile.internal.owner'
    | 'image.localFile.internal.type'
    | 'image.localFile.mode'
    | 'image.localFile.modifiedTime'
    | 'image.localFile.mtime'
    | 'image.localFile.mtimeMs'
    | 'image.localFile.name'
    | 'image.localFile.nlink'
    | 'image.localFile.parent.children'
    | 'image.localFile.parent.id'
    | 'image.localFile.prettySize'
    | 'image.localFile.rdev'
    | 'image.localFile.relativeDirectory'
    | 'image.localFile.relativePath'
    | 'image.localFile.root'
    | 'image.localFile.size'
    | 'image.localFile.sourceInstanceName'
    | 'image.localFile.uid'
    | 'image.localFile.url'
    | 'image.originalSrc'
    | 'image.src'
    | 'image.transformedSrc'
    | 'image.width'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'mediaContentType'
    | 'mediaErrors'
    | 'mediaErrors.code'
    | 'mediaErrors.details'
    | 'mediaErrors.message'
    | 'mimeType'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'preview.image.altText'
    | 'preview.image.height'
    | 'preview.image.localFile.absolutePath'
    | 'preview.image.localFile.accessTime'
    | 'preview.image.localFile.atime'
    | 'preview.image.localFile.atimeMs'
    | 'preview.image.localFile.base'
    | 'preview.image.localFile.birthTime'
    | 'preview.image.localFile.birthtime'
    | 'preview.image.localFile.birthtimeMs'
    | 'preview.image.localFile.blksize'
    | 'preview.image.localFile.blocks'
    | 'preview.image.localFile.changeTime'
    | 'preview.image.localFile.children'
    | 'preview.image.localFile.childrenImageSharp'
    | 'preview.image.localFile.ctime'
    | 'preview.image.localFile.ctimeMs'
    | 'preview.image.localFile.dev'
    | 'preview.image.localFile.dir'
    | 'preview.image.localFile.ext'
    | 'preview.image.localFile.extension'
    | 'preview.image.localFile.gid'
    | 'preview.image.localFile.id'
    | 'preview.image.localFile.ino'
    | 'preview.image.localFile.mode'
    | 'preview.image.localFile.modifiedTime'
    | 'preview.image.localFile.mtime'
    | 'preview.image.localFile.mtimeMs'
    | 'preview.image.localFile.name'
    | 'preview.image.localFile.nlink'
    | 'preview.image.localFile.prettySize'
    | 'preview.image.localFile.rdev'
    | 'preview.image.localFile.relativeDirectory'
    | 'preview.image.localFile.relativePath'
    | 'preview.image.localFile.root'
    | 'preview.image.localFile.size'
    | 'preview.image.localFile.sourceInstanceName'
    | 'preview.image.localFile.uid'
    | 'preview.image.localFile.url'
    | 'preview.image.originalSrc'
    | 'preview.image.src'
    | 'preview.image.transformedSrc'
    | 'preview.image.width'
    | 'preview.status'
    | 'shopifyId'
    | 'status';

  type ShopifyMediaImageFilterInput = {
    readonly alt: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly createdAt: InputMaybe<DateQueryOperatorInput>;
    readonly fileErrors: InputMaybe<ShopifyFileErrorFilterListInput>;
    readonly fileStatus: InputMaybe<ShopifyFileStatusQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly image: InputMaybe<ShopifyImageFilterInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    readonly mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    readonly mimeType: InputMaybe<StringQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type ShopifyMediaImageGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyMediaImageEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyMediaImageGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyMediaImage>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyMediaImageGroupConnection_distinctArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageGroupConnection_groupArgs = {
    field: ShopifyMediaImageFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyMediaImageGroupConnection_maxArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageGroupConnection_minArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageGroupConnection_sumArgs = {
    field: ShopifyMediaImageFieldsEnum;
  };

  type ShopifyMediaImageSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMediaImageFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyMediaPreviewImage = {
    readonly image: Maybe<ShopifyImage>;
    readonly status: ShopifyMediaPreviewImageStatus;
  };

  type ShopifyMediaPreviewImageFilterInput = {
    readonly image: InputMaybe<ShopifyImageFilterInput>;
    readonly status: InputMaybe<ShopifyMediaPreviewImageStatusQueryOperatorInput>;
  };

  type ShopifyMediaPreviewImageStatus =
    | 'FAILED'
    | 'PROCESSING'
    | 'READY'
    | 'UPLOADED';

  type ShopifyMediaPreviewImageStatusQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyMediaPreviewImageStatus>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMediaPreviewImageStatus>>
    >;
    readonly ne: InputMaybe<ShopifyMediaPreviewImageStatus>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMediaPreviewImageStatus>>
    >;
  };

  type ShopifyMediaSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMediaFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyMediaStatus = 'FAILED' | 'PROCESSING' | 'READY' | 'UPLOADED';

  type ShopifyMediaStatusQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyMediaStatus>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyMediaStatus>>>;
    readonly ne: InputMaybe<ShopifyMediaStatus>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyMediaStatus>>>;
  };

  type ShopifyMetafield = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly createdAt: Scalars['Date'];
    readonly description: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly key: Scalars['String'];
    readonly legacyResourceId: Scalars['String'];
    readonly namespace: Scalars['String'];
    readonly ownerType: ShopifyMetafieldOwnerType;
    readonly parent: Maybe<Node>;
    readonly shopifyId: Scalars['String'];
    readonly type: Scalars['String'];
    readonly updatedAt: Scalars['Date'];
    readonly value: Scalars['String'];
    /** @deprecated `valueType` is deprecated and replaced by `type` in API version 2021-07. */
    readonly valueType: Scalars['String'];
  };

  type ShopifyMetafield_createdAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyMetafield_updatedAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyMetafieldConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyMetafieldEdge>;
    readonly group: ReadonlyArray<ShopifyMetafieldGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyMetafield>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyMetafieldConnection_distinctArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldConnection_groupArgs = {
    field: ShopifyMetafieldFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyMetafieldConnection_maxArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldConnection_minArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldConnection_sumArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldEdge = {
    readonly next: Maybe<ShopifyMetafield>;
    readonly node: ShopifyMetafield;
    readonly previous: Maybe<ShopifyMetafield>;
  };

  type ShopifyMetafieldFieldsEnum =
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'createdAt'
    | 'description'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'key'
    | 'legacyResourceId'
    | 'namespace'
    | 'ownerType'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'shopifyId'
    | 'type'
    | 'updatedAt'
    | 'value'
    | 'valueType';

  type ShopifyMetafieldFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly createdAt: InputMaybe<DateQueryOperatorInput>;
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly key: InputMaybe<StringQueryOperatorInput>;
    readonly legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    readonly namespace: InputMaybe<StringQueryOperatorInput>;
    readonly ownerType: InputMaybe<ShopifyMetafieldOwnerTypeQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly type: InputMaybe<StringQueryOperatorInput>;
    readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
    readonly value: InputMaybe<StringQueryOperatorInput>;
    readonly valueType: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyMetafieldFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyMetafieldFilterInput>;
  };

  type ShopifyMetafieldGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyMetafieldEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyMetafieldGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyMetafield>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyMetafieldGroupConnection_distinctArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldGroupConnection_groupArgs = {
    field: ShopifyMetafieldFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyMetafieldGroupConnection_maxArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldGroupConnection_minArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldGroupConnection_sumArgs = {
    field: ShopifyMetafieldFieldsEnum;
  };

  type ShopifyMetafieldOwnerType =
    | 'ARTICLE'
    | 'BLOG'
    | 'COLLECTION'
    | 'CUSTOMER'
    | 'DRAFTORDER'
    | 'ORDER'
    | 'PAGE'
    | 'PRODUCT'
    | 'PRODUCTIMAGE'
    | 'PRODUCTVARIANT'
    | 'SHOP';

  type ShopifyMetafieldOwnerTypeQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyMetafieldOwnerType>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMetafieldOwnerType>>
    >;
    readonly ne: InputMaybe<ShopifyMetafieldOwnerType>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMetafieldOwnerType>>
    >;
  };

  type ShopifyMetafieldSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyMetafieldFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyModel3d = Node &
    ShopifyMedia & {
      readonly alt: Maybe<Scalars['String']>;
      readonly children: ReadonlyArray<Node>;
      readonly filename: Scalars['String'];
      readonly id: Scalars['ID'];
      readonly internal: Internal;
      readonly mediaContentType: ShopifyMediaContentType;
      readonly mediaErrors: ReadonlyArray<ShopifyMediaError>;
      readonly originalSource: Maybe<ShopifyModel3dSource>;
      readonly parent: Maybe<Node>;
      readonly preview: Maybe<ShopifyMediaPreviewImage>;
      readonly shopifyId: Scalars['String'];
      readonly sources: ReadonlyArray<ShopifyModel3dSource>;
      readonly status: ShopifyMediaStatus;
    };

  type ShopifyModel3dConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyModel3dEdge>;
    readonly group: ReadonlyArray<ShopifyModel3dGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyModel3d>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyModel3dConnection_distinctArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dConnection_groupArgs = {
    field: ShopifyModel3dFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyModel3dConnection_maxArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dConnection_minArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dConnection_sumArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dEdge = {
    readonly next: Maybe<ShopifyModel3d>;
    readonly node: ShopifyModel3d;
    readonly previous: Maybe<ShopifyModel3d>;
  };

  type ShopifyModel3dFieldsEnum =
    | 'alt'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'filename'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'mediaContentType'
    | 'mediaErrors'
    | 'mediaErrors.code'
    | 'mediaErrors.details'
    | 'mediaErrors.message'
    | 'originalSource.filesize'
    | 'originalSource.format'
    | 'originalSource.mimeType'
    | 'originalSource.url'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'preview.image.altText'
    | 'preview.image.height'
    | 'preview.image.localFile.absolutePath'
    | 'preview.image.localFile.accessTime'
    | 'preview.image.localFile.atime'
    | 'preview.image.localFile.atimeMs'
    | 'preview.image.localFile.base'
    | 'preview.image.localFile.birthTime'
    | 'preview.image.localFile.birthtime'
    | 'preview.image.localFile.birthtimeMs'
    | 'preview.image.localFile.blksize'
    | 'preview.image.localFile.blocks'
    | 'preview.image.localFile.changeTime'
    | 'preview.image.localFile.children'
    | 'preview.image.localFile.childrenImageSharp'
    | 'preview.image.localFile.ctime'
    | 'preview.image.localFile.ctimeMs'
    | 'preview.image.localFile.dev'
    | 'preview.image.localFile.dir'
    | 'preview.image.localFile.ext'
    | 'preview.image.localFile.extension'
    | 'preview.image.localFile.gid'
    | 'preview.image.localFile.id'
    | 'preview.image.localFile.ino'
    | 'preview.image.localFile.mode'
    | 'preview.image.localFile.modifiedTime'
    | 'preview.image.localFile.mtime'
    | 'preview.image.localFile.mtimeMs'
    | 'preview.image.localFile.name'
    | 'preview.image.localFile.nlink'
    | 'preview.image.localFile.prettySize'
    | 'preview.image.localFile.rdev'
    | 'preview.image.localFile.relativeDirectory'
    | 'preview.image.localFile.relativePath'
    | 'preview.image.localFile.root'
    | 'preview.image.localFile.size'
    | 'preview.image.localFile.sourceInstanceName'
    | 'preview.image.localFile.uid'
    | 'preview.image.localFile.url'
    | 'preview.image.originalSrc'
    | 'preview.image.src'
    | 'preview.image.transformedSrc'
    | 'preview.image.width'
    | 'preview.status'
    | 'shopifyId'
    | 'sources'
    | 'sources.filesize'
    | 'sources.format'
    | 'sources.mimeType'
    | 'sources.url'
    | 'status';

  type ShopifyModel3dFilterInput = {
    readonly alt: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly filename: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    readonly mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    readonly originalSource: InputMaybe<ShopifyModel3dSourceFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly sources: InputMaybe<ShopifyModel3dSourceFilterListInput>;
    readonly status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type ShopifyModel3dGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyModel3dEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyModel3dGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyModel3d>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyModel3dGroupConnection_distinctArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dGroupConnection_groupArgs = {
    field: ShopifyModel3dFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyModel3dGroupConnection_maxArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dGroupConnection_minArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dGroupConnection_sumArgs = {
    field: ShopifyModel3dFieldsEnum;
  };

  type ShopifyModel3dSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyModel3dFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyModel3dSource = {
    readonly filesize: Scalars['Int'];
    readonly format: Scalars['String'];
    readonly mimeType: Scalars['String'];
    readonly url: Scalars['String'];
  };

  type ShopifyModel3dSourceFilterInput = {
    readonly filesize: InputMaybe<IntQueryOperatorInput>;
    readonly format: InputMaybe<StringQueryOperatorInput>;
    readonly mimeType: InputMaybe<StringQueryOperatorInput>;
    readonly url: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyModel3dSourceFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyModel3dSourceFilterInput>;
  };

  type ShopifyMoneyV2 = {
    readonly amount: Scalars['Float'];
    readonly currencyCode: ShopifyCurrencyCode;
  };

  type ShopifyMoneyV2FilterInput = {
    readonly amount: InputMaybe<FloatQueryOperatorInput>;
    readonly currencyCode: InputMaybe<ShopifyCurrencyCodeQueryOperatorInput>;
  };

  type ShopifyProduct = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly collections: ReadonlyArray<ShopifyCollection>;
    readonly createdAt: Scalars['Date'];
    readonly description: Scalars['String'];
    readonly descriptionHtml: Scalars['String'];
    readonly featuredImage: Maybe<ShopifyImage>;
    readonly featuredMedia: Maybe<ShopifyMedia>;
    readonly feedback: Maybe<ShopifyResourceFeedback>;
    readonly gatsbyPath: Maybe<Scalars['String']>;
    readonly giftCardTemplateSuffix: Maybe<Scalars['String']>;
    readonly handle: Scalars['String'];
    readonly hasOnlyDefaultVariant: Scalars['Boolean'];
    readonly hasOutOfStockVariants: Scalars['Boolean'];
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly isGiftCard: Scalars['Boolean'];
    readonly legacyResourceId: Scalars['String'];
    readonly media: ReadonlyArray<ShopifyMedia>;
    readonly mediaCount: Scalars['Int'];
    readonly metafield: Maybe<ShopifyMetafield>;
    readonly metafields: ReadonlyArray<ShopifyMetafield>;
    readonly onlineStorePreviewUrl: Maybe<Scalars['String']>;
    readonly onlineStoreUrl: Maybe<Scalars['String']>;
    readonly options: ReadonlyArray<ShopifyProductOption>;
    readonly parent: Maybe<Node>;
    /** @deprecated Deprecated in API version 2020-10. Use `priceRangeV2` instead. */
    readonly priceRange: ShopifyProductPriceRange;
    readonly priceRangeV2: ShopifyProductPriceRangeV2;
    readonly productType: Scalars['String'];
    readonly publishedAt: Maybe<Scalars['Date']>;
    readonly requiresSellingPlan: Scalars['Boolean'];
    readonly sellingPlanGroupCount: Scalars['Int'];
    readonly seo: ShopifySEO;
    readonly shopifyId: Scalars['String'];
    readonly status: ShopifyProductStatus;
    readonly storefrontId: Scalars['String'];
    readonly tags: ReadonlyArray<Scalars['String']>;
    readonly templateSuffix: Maybe<Scalars['String']>;
    readonly title: Scalars['String'];
    readonly totalInventory: Scalars['Int'];
    readonly totalVariants: Scalars['Int'];
    readonly tracksInventory: Scalars['Boolean'];
    readonly updatedAt: Scalars['Date'];
    readonly variants: ReadonlyArray<ShopifyProductVariant>;
    readonly vendor: Scalars['String'];
  };

  type ShopifyProduct_createdAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyProduct_gatsbyPathArgs = {
    filePath: InputMaybe<Scalars['String']>;
  };

  type ShopifyProduct_metafieldArgs = {
    key: Scalars['String'];
    namespace: Scalars['String'];
  };

  type ShopifyProduct_publishedAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyProduct_updatedAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyProductConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyProductEdge>;
    readonly group: ReadonlyArray<ShopifyProductGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyProduct>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyProductConnection_distinctArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductConnection_groupArgs = {
    field: ShopifyProductFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyProductConnection_maxArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductConnection_minArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductConnection_sumArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductEdge = {
    readonly next: Maybe<ShopifyProduct>;
    readonly node: ShopifyProduct;
    readonly previous: Maybe<ShopifyProduct>;
  };

  type ShopifyProductFieldsEnum =
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'collections'
    | 'collections.children'
    | 'collections.children.children'
    | 'collections.children.children.children'
    | 'collections.children.children.id'
    | 'collections.children.id'
    | 'collections.children.internal.content'
    | 'collections.children.internal.contentDigest'
    | 'collections.children.internal.contentFilePath'
    | 'collections.children.internal.description'
    | 'collections.children.internal.fieldOwners'
    | 'collections.children.internal.ignoreType'
    | 'collections.children.internal.mediaType'
    | 'collections.children.internal.owner'
    | 'collections.children.internal.type'
    | 'collections.children.parent.children'
    | 'collections.children.parent.id'
    | 'collections.description'
    | 'collections.descriptionHtml'
    | 'collections.feedback.details'
    | 'collections.feedback.details.messages'
    | 'collections.feedback.summary'
    | 'collections.handle'
    | 'collections.id'
    | 'collections.image.altText'
    | 'collections.image.height'
    | 'collections.image.localFile.absolutePath'
    | 'collections.image.localFile.accessTime'
    | 'collections.image.localFile.atime'
    | 'collections.image.localFile.atimeMs'
    | 'collections.image.localFile.base'
    | 'collections.image.localFile.birthTime'
    | 'collections.image.localFile.birthtime'
    | 'collections.image.localFile.birthtimeMs'
    | 'collections.image.localFile.blksize'
    | 'collections.image.localFile.blocks'
    | 'collections.image.localFile.changeTime'
    | 'collections.image.localFile.children'
    | 'collections.image.localFile.childrenImageSharp'
    | 'collections.image.localFile.ctime'
    | 'collections.image.localFile.ctimeMs'
    | 'collections.image.localFile.dev'
    | 'collections.image.localFile.dir'
    | 'collections.image.localFile.ext'
    | 'collections.image.localFile.extension'
    | 'collections.image.localFile.gid'
    | 'collections.image.localFile.id'
    | 'collections.image.localFile.ino'
    | 'collections.image.localFile.mode'
    | 'collections.image.localFile.modifiedTime'
    | 'collections.image.localFile.mtime'
    | 'collections.image.localFile.mtimeMs'
    | 'collections.image.localFile.name'
    | 'collections.image.localFile.nlink'
    | 'collections.image.localFile.prettySize'
    | 'collections.image.localFile.rdev'
    | 'collections.image.localFile.relativeDirectory'
    | 'collections.image.localFile.relativePath'
    | 'collections.image.localFile.root'
    | 'collections.image.localFile.size'
    | 'collections.image.localFile.sourceInstanceName'
    | 'collections.image.localFile.uid'
    | 'collections.image.localFile.url'
    | 'collections.image.originalSrc'
    | 'collections.image.src'
    | 'collections.image.transformedSrc'
    | 'collections.image.width'
    | 'collections.internal.content'
    | 'collections.internal.contentDigest'
    | 'collections.internal.contentFilePath'
    | 'collections.internal.description'
    | 'collections.internal.fieldOwners'
    | 'collections.internal.ignoreType'
    | 'collections.internal.mediaType'
    | 'collections.internal.owner'
    | 'collections.internal.type'
    | 'collections.legacyResourceId'
    | 'collections.metafield.children'
    | 'collections.metafield.children.children'
    | 'collections.metafield.children.id'
    | 'collections.metafield.createdAt'
    | 'collections.metafield.description'
    | 'collections.metafield.id'
    | 'collections.metafield.internal.content'
    | 'collections.metafield.internal.contentDigest'
    | 'collections.metafield.internal.contentFilePath'
    | 'collections.metafield.internal.description'
    | 'collections.metafield.internal.fieldOwners'
    | 'collections.metafield.internal.ignoreType'
    | 'collections.metafield.internal.mediaType'
    | 'collections.metafield.internal.owner'
    | 'collections.metafield.internal.type'
    | 'collections.metafield.key'
    | 'collections.metafield.legacyResourceId'
    | 'collections.metafield.namespace'
    | 'collections.metafield.ownerType'
    | 'collections.metafield.parent.children'
    | 'collections.metafield.parent.id'
    | 'collections.metafield.shopifyId'
    | 'collections.metafield.type'
    | 'collections.metafield.updatedAt'
    | 'collections.metafield.value'
    | 'collections.metafield.valueType'
    | 'collections.metafields'
    | 'collections.metafields.children'
    | 'collections.metafields.children.children'
    | 'collections.metafields.children.id'
    | 'collections.metafields.createdAt'
    | 'collections.metafields.description'
    | 'collections.metafields.id'
    | 'collections.metafields.internal.content'
    | 'collections.metafields.internal.contentDigest'
    | 'collections.metafields.internal.contentFilePath'
    | 'collections.metafields.internal.description'
    | 'collections.metafields.internal.fieldOwners'
    | 'collections.metafields.internal.ignoreType'
    | 'collections.metafields.internal.mediaType'
    | 'collections.metafields.internal.owner'
    | 'collections.metafields.internal.type'
    | 'collections.metafields.key'
    | 'collections.metafields.legacyResourceId'
    | 'collections.metafields.namespace'
    | 'collections.metafields.ownerType'
    | 'collections.metafields.parent.children'
    | 'collections.metafields.parent.id'
    | 'collections.metafields.shopifyId'
    | 'collections.metafields.type'
    | 'collections.metafields.updatedAt'
    | 'collections.metafields.value'
    | 'collections.metafields.valueType'
    | 'collections.parent.children'
    | 'collections.parent.children.children'
    | 'collections.parent.children.id'
    | 'collections.parent.id'
    | 'collections.parent.internal.content'
    | 'collections.parent.internal.contentDigest'
    | 'collections.parent.internal.contentFilePath'
    | 'collections.parent.internal.description'
    | 'collections.parent.internal.fieldOwners'
    | 'collections.parent.internal.ignoreType'
    | 'collections.parent.internal.mediaType'
    | 'collections.parent.internal.owner'
    | 'collections.parent.internal.type'
    | 'collections.parent.parent.children'
    | 'collections.parent.parent.id'
    | 'collections.products'
    | 'collections.productsCount'
    | 'collections.products.children'
    | 'collections.products.children.children'
    | 'collections.products.children.id'
    | 'collections.products.collections'
    | 'collections.products.collections.children'
    | 'collections.products.collections.description'
    | 'collections.products.collections.descriptionHtml'
    | 'collections.products.collections.handle'
    | 'collections.products.collections.id'
    | 'collections.products.collections.legacyResourceId'
    | 'collections.products.collections.metafields'
    | 'collections.products.collections.products'
    | 'collections.products.collections.productsCount'
    | 'collections.products.collections.shopifyId'
    | 'collections.products.collections.sortOrder'
    | 'collections.products.collections.storefrontId'
    | 'collections.products.collections.templateSuffix'
    | 'collections.products.collections.title'
    | 'collections.products.collections.updatedAt'
    | 'collections.products.createdAt'
    | 'collections.products.description'
    | 'collections.products.descriptionHtml'
    | 'collections.products.featuredImage.altText'
    | 'collections.products.featuredImage.height'
    | 'collections.products.featuredImage.originalSrc'
    | 'collections.products.featuredImage.src'
    | 'collections.products.featuredImage.transformedSrc'
    | 'collections.products.featuredImage.width'
    | 'collections.products.featuredMedia.alt'
    | 'collections.products.featuredMedia.children'
    | 'collections.products.featuredMedia.id'
    | 'collections.products.featuredMedia.mediaContentType'
    | 'collections.products.featuredMedia.mediaErrors'
    | 'collections.products.featuredMedia.shopifyId'
    | 'collections.products.featuredMedia.status'
    | 'collections.products.feedback.details'
    | 'collections.products.feedback.summary'
    | 'collections.products.gatsbyPath'
    | 'collections.products.giftCardTemplateSuffix'
    | 'collections.products.handle'
    | 'collections.products.hasOnlyDefaultVariant'
    | 'collections.products.hasOutOfStockVariants'
    | 'collections.products.id'
    | 'collections.products.internal.content'
    | 'collections.products.internal.contentDigest'
    | 'collections.products.internal.contentFilePath'
    | 'collections.products.internal.description'
    | 'collections.products.internal.fieldOwners'
    | 'collections.products.internal.ignoreType'
    | 'collections.products.internal.mediaType'
    | 'collections.products.internal.owner'
    | 'collections.products.internal.type'
    | 'collections.products.isGiftCard'
    | 'collections.products.legacyResourceId'
    | 'collections.products.media'
    | 'collections.products.mediaCount'
    | 'collections.products.media.alt'
    | 'collections.products.media.children'
    | 'collections.products.media.id'
    | 'collections.products.media.mediaContentType'
    | 'collections.products.media.mediaErrors'
    | 'collections.products.media.shopifyId'
    | 'collections.products.media.status'
    | 'collections.products.metafield.children'
    | 'collections.products.metafield.createdAt'
    | 'collections.products.metafield.description'
    | 'collections.products.metafield.id'
    | 'collections.products.metafield.key'
    | 'collections.products.metafield.legacyResourceId'
    | 'collections.products.metafield.namespace'
    | 'collections.products.metafield.ownerType'
    | 'collections.products.metafield.shopifyId'
    | 'collections.products.metafield.type'
    | 'collections.products.metafield.updatedAt'
    | 'collections.products.metafield.value'
    | 'collections.products.metafield.valueType'
    | 'collections.products.metafields'
    | 'collections.products.metafields.children'
    | 'collections.products.metafields.createdAt'
    | 'collections.products.metafields.description'
    | 'collections.products.metafields.id'
    | 'collections.products.metafields.key'
    | 'collections.products.metafields.legacyResourceId'
    | 'collections.products.metafields.namespace'
    | 'collections.products.metafields.ownerType'
    | 'collections.products.metafields.shopifyId'
    | 'collections.products.metafields.type'
    | 'collections.products.metafields.updatedAt'
    | 'collections.products.metafields.value'
    | 'collections.products.metafields.valueType'
    | 'collections.products.onlineStorePreviewUrl'
    | 'collections.products.onlineStoreUrl'
    | 'collections.products.options'
    | 'collections.products.options.name'
    | 'collections.products.options.position'
    | 'collections.products.options.shopifyId'
    | 'collections.products.options.values'
    | 'collections.products.parent.children'
    | 'collections.products.parent.id'
    | 'collections.products.productType'
    | 'collections.products.publishedAt'
    | 'collections.products.requiresSellingPlan'
    | 'collections.products.sellingPlanGroupCount'
    | 'collections.products.seo.description'
    | 'collections.products.seo.title'
    | 'collections.products.shopifyId'
    | 'collections.products.status'
    | 'collections.products.storefrontId'
    | 'collections.products.tags'
    | 'collections.products.templateSuffix'
    | 'collections.products.title'
    | 'collections.products.totalInventory'
    | 'collections.products.totalVariants'
    | 'collections.products.tracksInventory'
    | 'collections.products.updatedAt'
    | 'collections.products.variants'
    | 'collections.products.variants.availableForSale'
    | 'collections.products.variants.barcode'
    | 'collections.products.variants.children'
    | 'collections.products.variants.compareAtPrice'
    | 'collections.products.variants.createdAt'
    | 'collections.products.variants.displayName'
    | 'collections.products.variants.id'
    | 'collections.products.variants.inventoryPolicy'
    | 'collections.products.variants.inventoryQuantity'
    | 'collections.products.variants.legacyResourceId'
    | 'collections.products.variants.media'
    | 'collections.products.variants.metafields'
    | 'collections.products.variants.position'
    | 'collections.products.variants.presentmentPrices'
    | 'collections.products.variants.price'
    | 'collections.products.variants.requiresShipping'
    | 'collections.products.variants.selectedOptions'
    | 'collections.products.variants.sellingPlanGroupCount'
    | 'collections.products.variants.shopifyId'
    | 'collections.products.variants.sku'
    | 'collections.products.variants.storefrontId'
    | 'collections.products.variants.taxCode'
    | 'collections.products.variants.taxable'
    | 'collections.products.variants.title'
    | 'collections.products.variants.updatedAt'
    | 'collections.products.variants.weight'
    | 'collections.products.variants.weightUnit'
    | 'collections.products.vendor'
    | 'collections.ruleSet.appliedDisjunctively'
    | 'collections.ruleSet.rules'
    | 'collections.ruleSet.rules.column'
    | 'collections.ruleSet.rules.condition'
    | 'collections.ruleSet.rules.relation'
    | 'collections.seo.description'
    | 'collections.seo.title'
    | 'collections.shopifyId'
    | 'collections.sortOrder'
    | 'collections.storefrontId'
    | 'collections.templateSuffix'
    | 'collections.title'
    | 'collections.updatedAt'
    | 'createdAt'
    | 'description'
    | 'descriptionHtml'
    | 'featuredImage.altText'
    | 'featuredImage.height'
    | 'featuredImage.localFile.absolutePath'
    | 'featuredImage.localFile.accessTime'
    | 'featuredImage.localFile.atime'
    | 'featuredImage.localFile.atimeMs'
    | 'featuredImage.localFile.base'
    | 'featuredImage.localFile.birthTime'
    | 'featuredImage.localFile.birthtime'
    | 'featuredImage.localFile.birthtimeMs'
    | 'featuredImage.localFile.blksize'
    | 'featuredImage.localFile.blocks'
    | 'featuredImage.localFile.changeTime'
    | 'featuredImage.localFile.childImageSharp.children'
    | 'featuredImage.localFile.childImageSharp.gatsbyImageData'
    | 'featuredImage.localFile.childImageSharp.id'
    | 'featuredImage.localFile.children'
    | 'featuredImage.localFile.childrenImageSharp'
    | 'featuredImage.localFile.childrenImageSharp.children'
    | 'featuredImage.localFile.childrenImageSharp.gatsbyImageData'
    | 'featuredImage.localFile.childrenImageSharp.id'
    | 'featuredImage.localFile.children.children'
    | 'featuredImage.localFile.children.id'
    | 'featuredImage.localFile.ctime'
    | 'featuredImage.localFile.ctimeMs'
    | 'featuredImage.localFile.dev'
    | 'featuredImage.localFile.dir'
    | 'featuredImage.localFile.ext'
    | 'featuredImage.localFile.extension'
    | 'featuredImage.localFile.gid'
    | 'featuredImage.localFile.id'
    | 'featuredImage.localFile.ino'
    | 'featuredImage.localFile.internal.content'
    | 'featuredImage.localFile.internal.contentDigest'
    | 'featuredImage.localFile.internal.contentFilePath'
    | 'featuredImage.localFile.internal.description'
    | 'featuredImage.localFile.internal.fieldOwners'
    | 'featuredImage.localFile.internal.ignoreType'
    | 'featuredImage.localFile.internal.mediaType'
    | 'featuredImage.localFile.internal.owner'
    | 'featuredImage.localFile.internal.type'
    | 'featuredImage.localFile.mode'
    | 'featuredImage.localFile.modifiedTime'
    | 'featuredImage.localFile.mtime'
    | 'featuredImage.localFile.mtimeMs'
    | 'featuredImage.localFile.name'
    | 'featuredImage.localFile.nlink'
    | 'featuredImage.localFile.parent.children'
    | 'featuredImage.localFile.parent.id'
    | 'featuredImage.localFile.prettySize'
    | 'featuredImage.localFile.rdev'
    | 'featuredImage.localFile.relativeDirectory'
    | 'featuredImage.localFile.relativePath'
    | 'featuredImage.localFile.root'
    | 'featuredImage.localFile.size'
    | 'featuredImage.localFile.sourceInstanceName'
    | 'featuredImage.localFile.uid'
    | 'featuredImage.localFile.url'
    | 'featuredImage.originalSrc'
    | 'featuredImage.src'
    | 'featuredImage.transformedSrc'
    | 'featuredImage.width'
    | 'featuredMedia.alt'
    | 'featuredMedia.children'
    | 'featuredMedia.children.children'
    | 'featuredMedia.children.children.children'
    | 'featuredMedia.children.children.id'
    | 'featuredMedia.children.id'
    | 'featuredMedia.children.internal.content'
    | 'featuredMedia.children.internal.contentDigest'
    | 'featuredMedia.children.internal.contentFilePath'
    | 'featuredMedia.children.internal.description'
    | 'featuredMedia.children.internal.fieldOwners'
    | 'featuredMedia.children.internal.ignoreType'
    | 'featuredMedia.children.internal.mediaType'
    | 'featuredMedia.children.internal.owner'
    | 'featuredMedia.children.internal.type'
    | 'featuredMedia.children.parent.children'
    | 'featuredMedia.children.parent.id'
    | 'featuredMedia.id'
    | 'featuredMedia.internal.content'
    | 'featuredMedia.internal.contentDigest'
    | 'featuredMedia.internal.contentFilePath'
    | 'featuredMedia.internal.description'
    | 'featuredMedia.internal.fieldOwners'
    | 'featuredMedia.internal.ignoreType'
    | 'featuredMedia.internal.mediaType'
    | 'featuredMedia.internal.owner'
    | 'featuredMedia.internal.type'
    | 'featuredMedia.mediaContentType'
    | 'featuredMedia.mediaErrors'
    | 'featuredMedia.mediaErrors.code'
    | 'featuredMedia.mediaErrors.details'
    | 'featuredMedia.mediaErrors.message'
    | 'featuredMedia.parent.children'
    | 'featuredMedia.parent.children.children'
    | 'featuredMedia.parent.children.id'
    | 'featuredMedia.parent.id'
    | 'featuredMedia.parent.internal.content'
    | 'featuredMedia.parent.internal.contentDigest'
    | 'featuredMedia.parent.internal.contentFilePath'
    | 'featuredMedia.parent.internal.description'
    | 'featuredMedia.parent.internal.fieldOwners'
    | 'featuredMedia.parent.internal.ignoreType'
    | 'featuredMedia.parent.internal.mediaType'
    | 'featuredMedia.parent.internal.owner'
    | 'featuredMedia.parent.internal.type'
    | 'featuredMedia.parent.parent.children'
    | 'featuredMedia.parent.parent.id'
    | 'featuredMedia.preview.image.altText'
    | 'featuredMedia.preview.image.height'
    | 'featuredMedia.preview.image.originalSrc'
    | 'featuredMedia.preview.image.src'
    | 'featuredMedia.preview.image.transformedSrc'
    | 'featuredMedia.preview.image.width'
    | 'featuredMedia.preview.status'
    | 'featuredMedia.shopifyId'
    | 'featuredMedia.status'
    | 'feedback.details'
    | 'feedback.details.app.shopifyId'
    | 'feedback.details.link.label'
    | 'feedback.details.link.url'
    | 'feedback.details.messages'
    | 'feedback.details.messages.field'
    | 'feedback.details.messages.message'
    | 'feedback.summary'
    | 'gatsbyPath'
    | 'giftCardTemplateSuffix'
    | 'handle'
    | 'hasOnlyDefaultVariant'
    | 'hasOutOfStockVariants'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'isGiftCard'
    | 'legacyResourceId'
    | 'media'
    | 'mediaCount'
    | 'media.alt'
    | 'media.children'
    | 'media.children.children'
    | 'media.children.children.children'
    | 'media.children.children.id'
    | 'media.children.id'
    | 'media.children.internal.content'
    | 'media.children.internal.contentDigest'
    | 'media.children.internal.contentFilePath'
    | 'media.children.internal.description'
    | 'media.children.internal.fieldOwners'
    | 'media.children.internal.ignoreType'
    | 'media.children.internal.mediaType'
    | 'media.children.internal.owner'
    | 'media.children.internal.type'
    | 'media.children.parent.children'
    | 'media.children.parent.id'
    | 'media.id'
    | 'media.internal.content'
    | 'media.internal.contentDigest'
    | 'media.internal.contentFilePath'
    | 'media.internal.description'
    | 'media.internal.fieldOwners'
    | 'media.internal.ignoreType'
    | 'media.internal.mediaType'
    | 'media.internal.owner'
    | 'media.internal.type'
    | 'media.mediaContentType'
    | 'media.mediaErrors'
    | 'media.mediaErrors.code'
    | 'media.mediaErrors.details'
    | 'media.mediaErrors.message'
    | 'media.parent.children'
    | 'media.parent.children.children'
    | 'media.parent.children.id'
    | 'media.parent.id'
    | 'media.parent.internal.content'
    | 'media.parent.internal.contentDigest'
    | 'media.parent.internal.contentFilePath'
    | 'media.parent.internal.description'
    | 'media.parent.internal.fieldOwners'
    | 'media.parent.internal.ignoreType'
    | 'media.parent.internal.mediaType'
    | 'media.parent.internal.owner'
    | 'media.parent.internal.type'
    | 'media.parent.parent.children'
    | 'media.parent.parent.id'
    | 'media.preview.image.altText'
    | 'media.preview.image.height'
    | 'media.preview.image.originalSrc'
    | 'media.preview.image.src'
    | 'media.preview.image.transformedSrc'
    | 'media.preview.image.width'
    | 'media.preview.status'
    | 'media.shopifyId'
    | 'media.status'
    | 'metafield.children'
    | 'metafield.children.children'
    | 'metafield.children.children.children'
    | 'metafield.children.children.id'
    | 'metafield.children.id'
    | 'metafield.children.internal.content'
    | 'metafield.children.internal.contentDigest'
    | 'metafield.children.internal.contentFilePath'
    | 'metafield.children.internal.description'
    | 'metafield.children.internal.fieldOwners'
    | 'metafield.children.internal.ignoreType'
    | 'metafield.children.internal.mediaType'
    | 'metafield.children.internal.owner'
    | 'metafield.children.internal.type'
    | 'metafield.children.parent.children'
    | 'metafield.children.parent.id'
    | 'metafield.createdAt'
    | 'metafield.description'
    | 'metafield.id'
    | 'metafield.internal.content'
    | 'metafield.internal.contentDigest'
    | 'metafield.internal.contentFilePath'
    | 'metafield.internal.description'
    | 'metafield.internal.fieldOwners'
    | 'metafield.internal.ignoreType'
    | 'metafield.internal.mediaType'
    | 'metafield.internal.owner'
    | 'metafield.internal.type'
    | 'metafield.key'
    | 'metafield.legacyResourceId'
    | 'metafield.namespace'
    | 'metafield.ownerType'
    | 'metafield.parent.children'
    | 'metafield.parent.children.children'
    | 'metafield.parent.children.id'
    | 'metafield.parent.id'
    | 'metafield.parent.internal.content'
    | 'metafield.parent.internal.contentDigest'
    | 'metafield.parent.internal.contentFilePath'
    | 'metafield.parent.internal.description'
    | 'metafield.parent.internal.fieldOwners'
    | 'metafield.parent.internal.ignoreType'
    | 'metafield.parent.internal.mediaType'
    | 'metafield.parent.internal.owner'
    | 'metafield.parent.internal.type'
    | 'metafield.parent.parent.children'
    | 'metafield.parent.parent.id'
    | 'metafield.shopifyId'
    | 'metafield.type'
    | 'metafield.updatedAt'
    | 'metafield.value'
    | 'metafield.valueType'
    | 'metafields'
    | 'metafields.children'
    | 'metafields.children.children'
    | 'metafields.children.children.children'
    | 'metafields.children.children.id'
    | 'metafields.children.id'
    | 'metafields.children.internal.content'
    | 'metafields.children.internal.contentDigest'
    | 'metafields.children.internal.contentFilePath'
    | 'metafields.children.internal.description'
    | 'metafields.children.internal.fieldOwners'
    | 'metafields.children.internal.ignoreType'
    | 'metafields.children.internal.mediaType'
    | 'metafields.children.internal.owner'
    | 'metafields.children.internal.type'
    | 'metafields.children.parent.children'
    | 'metafields.children.parent.id'
    | 'metafields.createdAt'
    | 'metafields.description'
    | 'metafields.id'
    | 'metafields.internal.content'
    | 'metafields.internal.contentDigest'
    | 'metafields.internal.contentFilePath'
    | 'metafields.internal.description'
    | 'metafields.internal.fieldOwners'
    | 'metafields.internal.ignoreType'
    | 'metafields.internal.mediaType'
    | 'metafields.internal.owner'
    | 'metafields.internal.type'
    | 'metafields.key'
    | 'metafields.legacyResourceId'
    | 'metafields.namespace'
    | 'metafields.ownerType'
    | 'metafields.parent.children'
    | 'metafields.parent.children.children'
    | 'metafields.parent.children.id'
    | 'metafields.parent.id'
    | 'metafields.parent.internal.content'
    | 'metafields.parent.internal.contentDigest'
    | 'metafields.parent.internal.contentFilePath'
    | 'metafields.parent.internal.description'
    | 'metafields.parent.internal.fieldOwners'
    | 'metafields.parent.internal.ignoreType'
    | 'metafields.parent.internal.mediaType'
    | 'metafields.parent.internal.owner'
    | 'metafields.parent.internal.type'
    | 'metafields.parent.parent.children'
    | 'metafields.parent.parent.id'
    | 'metafields.shopifyId'
    | 'metafields.type'
    | 'metafields.updatedAt'
    | 'metafields.value'
    | 'metafields.valueType'
    | 'onlineStorePreviewUrl'
    | 'onlineStoreUrl'
    | 'options'
    | 'options.name'
    | 'options.position'
    | 'options.shopifyId'
    | 'options.values'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'priceRangeV2.maxVariantPrice.amount'
    | 'priceRangeV2.maxVariantPrice.currencyCode'
    | 'priceRangeV2.minVariantPrice.amount'
    | 'priceRangeV2.minVariantPrice.currencyCode'
    | 'priceRange.maxVariantPrice.amount'
    | 'priceRange.maxVariantPrice.currencyCode'
    | 'priceRange.minVariantPrice.amount'
    | 'priceRange.minVariantPrice.currencyCode'
    | 'productType'
    | 'publishedAt'
    | 'requiresSellingPlan'
    | 'sellingPlanGroupCount'
    | 'seo.description'
    | 'seo.title'
    | 'shopifyId'
    | 'status'
    | 'storefrontId'
    | 'tags'
    | 'templateSuffix'
    | 'title'
    | 'totalInventory'
    | 'totalVariants'
    | 'tracksInventory'
    | 'updatedAt'
    | 'variants'
    | 'variants.availableForSale'
    | 'variants.barcode'
    | 'variants.children'
    | 'variants.children.children'
    | 'variants.children.children.children'
    | 'variants.children.children.id'
    | 'variants.children.id'
    | 'variants.children.internal.content'
    | 'variants.children.internal.contentDigest'
    | 'variants.children.internal.contentFilePath'
    | 'variants.children.internal.description'
    | 'variants.children.internal.fieldOwners'
    | 'variants.children.internal.ignoreType'
    | 'variants.children.internal.mediaType'
    | 'variants.children.internal.owner'
    | 'variants.children.internal.type'
    | 'variants.children.parent.children'
    | 'variants.children.parent.id'
    | 'variants.compareAtPrice'
    | 'variants.createdAt'
    | 'variants.displayName'
    | 'variants.id'
    | 'variants.image.altText'
    | 'variants.image.height'
    | 'variants.image.localFile.absolutePath'
    | 'variants.image.localFile.accessTime'
    | 'variants.image.localFile.atime'
    | 'variants.image.localFile.atimeMs'
    | 'variants.image.localFile.base'
    | 'variants.image.localFile.birthTime'
    | 'variants.image.localFile.birthtime'
    | 'variants.image.localFile.birthtimeMs'
    | 'variants.image.localFile.blksize'
    | 'variants.image.localFile.blocks'
    | 'variants.image.localFile.changeTime'
    | 'variants.image.localFile.children'
    | 'variants.image.localFile.childrenImageSharp'
    | 'variants.image.localFile.ctime'
    | 'variants.image.localFile.ctimeMs'
    | 'variants.image.localFile.dev'
    | 'variants.image.localFile.dir'
    | 'variants.image.localFile.ext'
    | 'variants.image.localFile.extension'
    | 'variants.image.localFile.gid'
    | 'variants.image.localFile.id'
    | 'variants.image.localFile.ino'
    | 'variants.image.localFile.mode'
    | 'variants.image.localFile.modifiedTime'
    | 'variants.image.localFile.mtime'
    | 'variants.image.localFile.mtimeMs'
    | 'variants.image.localFile.name'
    | 'variants.image.localFile.nlink'
    | 'variants.image.localFile.prettySize'
    | 'variants.image.localFile.rdev'
    | 'variants.image.localFile.relativeDirectory'
    | 'variants.image.localFile.relativePath'
    | 'variants.image.localFile.root'
    | 'variants.image.localFile.size'
    | 'variants.image.localFile.sourceInstanceName'
    | 'variants.image.localFile.uid'
    | 'variants.image.localFile.url'
    | 'variants.image.originalSrc'
    | 'variants.image.src'
    | 'variants.image.transformedSrc'
    | 'variants.image.width'
    | 'variants.internal.content'
    | 'variants.internal.contentDigest'
    | 'variants.internal.contentFilePath'
    | 'variants.internal.description'
    | 'variants.internal.fieldOwners'
    | 'variants.internal.ignoreType'
    | 'variants.internal.mediaType'
    | 'variants.internal.owner'
    | 'variants.internal.type'
    | 'variants.inventoryPolicy'
    | 'variants.inventoryQuantity'
    | 'variants.legacyResourceId'
    | 'variants.media'
    | 'variants.media.alt'
    | 'variants.media.children'
    | 'variants.media.children.children'
    | 'variants.media.children.id'
    | 'variants.media.id'
    | 'variants.media.internal.content'
    | 'variants.media.internal.contentDigest'
    | 'variants.media.internal.contentFilePath'
    | 'variants.media.internal.description'
    | 'variants.media.internal.fieldOwners'
    | 'variants.media.internal.ignoreType'
    | 'variants.media.internal.mediaType'
    | 'variants.media.internal.owner'
    | 'variants.media.internal.type'
    | 'variants.media.mediaContentType'
    | 'variants.media.mediaErrors'
    | 'variants.media.mediaErrors.code'
    | 'variants.media.mediaErrors.details'
    | 'variants.media.mediaErrors.message'
    | 'variants.media.parent.children'
    | 'variants.media.parent.id'
    | 'variants.media.preview.status'
    | 'variants.media.shopifyId'
    | 'variants.media.status'
    | 'variants.metafield.children'
    | 'variants.metafield.children.children'
    | 'variants.metafield.children.id'
    | 'variants.metafield.createdAt'
    | 'variants.metafield.description'
    | 'variants.metafield.id'
    | 'variants.metafield.internal.content'
    | 'variants.metafield.internal.contentDigest'
    | 'variants.metafield.internal.contentFilePath'
    | 'variants.metafield.internal.description'
    | 'variants.metafield.internal.fieldOwners'
    | 'variants.metafield.internal.ignoreType'
    | 'variants.metafield.internal.mediaType'
    | 'variants.metafield.internal.owner'
    | 'variants.metafield.internal.type'
    | 'variants.metafield.key'
    | 'variants.metafield.legacyResourceId'
    | 'variants.metafield.namespace'
    | 'variants.metafield.ownerType'
    | 'variants.metafield.parent.children'
    | 'variants.metafield.parent.id'
    | 'variants.metafield.shopifyId'
    | 'variants.metafield.type'
    | 'variants.metafield.updatedAt'
    | 'variants.metafield.value'
    | 'variants.metafield.valueType'
    | 'variants.metafields'
    | 'variants.metafields.children'
    | 'variants.metafields.children.children'
    | 'variants.metafields.children.id'
    | 'variants.metafields.createdAt'
    | 'variants.metafields.description'
    | 'variants.metafields.id'
    | 'variants.metafields.internal.content'
    | 'variants.metafields.internal.contentDigest'
    | 'variants.metafields.internal.contentFilePath'
    | 'variants.metafields.internal.description'
    | 'variants.metafields.internal.fieldOwners'
    | 'variants.metafields.internal.ignoreType'
    | 'variants.metafields.internal.mediaType'
    | 'variants.metafields.internal.owner'
    | 'variants.metafields.internal.type'
    | 'variants.metafields.key'
    | 'variants.metafields.legacyResourceId'
    | 'variants.metafields.namespace'
    | 'variants.metafields.ownerType'
    | 'variants.metafields.parent.children'
    | 'variants.metafields.parent.id'
    | 'variants.metafields.shopifyId'
    | 'variants.metafields.type'
    | 'variants.metafields.updatedAt'
    | 'variants.metafields.value'
    | 'variants.metafields.valueType'
    | 'variants.parent.children'
    | 'variants.parent.children.children'
    | 'variants.parent.children.id'
    | 'variants.parent.id'
    | 'variants.parent.internal.content'
    | 'variants.parent.internal.contentDigest'
    | 'variants.parent.internal.contentFilePath'
    | 'variants.parent.internal.description'
    | 'variants.parent.internal.fieldOwners'
    | 'variants.parent.internal.ignoreType'
    | 'variants.parent.internal.mediaType'
    | 'variants.parent.internal.owner'
    | 'variants.parent.internal.type'
    | 'variants.parent.parent.children'
    | 'variants.parent.parent.id'
    | 'variants.position'
    | 'variants.presentmentPrices'
    | 'variants.presentmentPrices.compareAtPrice.amount'
    | 'variants.presentmentPrices.compareAtPrice.currencyCode'
    | 'variants.presentmentPrices.price.amount'
    | 'variants.presentmentPrices.price.currencyCode'
    | 'variants.price'
    | 'variants.product.children'
    | 'variants.product.children.children'
    | 'variants.product.children.id'
    | 'variants.product.collections'
    | 'variants.product.collections.children'
    | 'variants.product.collections.description'
    | 'variants.product.collections.descriptionHtml'
    | 'variants.product.collections.handle'
    | 'variants.product.collections.id'
    | 'variants.product.collections.legacyResourceId'
    | 'variants.product.collections.metafields'
    | 'variants.product.collections.products'
    | 'variants.product.collections.productsCount'
    | 'variants.product.collections.shopifyId'
    | 'variants.product.collections.sortOrder'
    | 'variants.product.collections.storefrontId'
    | 'variants.product.collections.templateSuffix'
    | 'variants.product.collections.title'
    | 'variants.product.collections.updatedAt'
    | 'variants.product.createdAt'
    | 'variants.product.description'
    | 'variants.product.descriptionHtml'
    | 'variants.product.featuredImage.altText'
    | 'variants.product.featuredImage.height'
    | 'variants.product.featuredImage.originalSrc'
    | 'variants.product.featuredImage.src'
    | 'variants.product.featuredImage.transformedSrc'
    | 'variants.product.featuredImage.width'
    | 'variants.product.featuredMedia.alt'
    | 'variants.product.featuredMedia.children'
    | 'variants.product.featuredMedia.id'
    | 'variants.product.featuredMedia.mediaContentType'
    | 'variants.product.featuredMedia.mediaErrors'
    | 'variants.product.featuredMedia.shopifyId'
    | 'variants.product.featuredMedia.status'
    | 'variants.product.feedback.details'
    | 'variants.product.feedback.summary'
    | 'variants.product.gatsbyPath'
    | 'variants.product.giftCardTemplateSuffix'
    | 'variants.product.handle'
    | 'variants.product.hasOnlyDefaultVariant'
    | 'variants.product.hasOutOfStockVariants'
    | 'variants.product.id'
    | 'variants.product.internal.content'
    | 'variants.product.internal.contentDigest'
    | 'variants.product.internal.contentFilePath'
    | 'variants.product.internal.description'
    | 'variants.product.internal.fieldOwners'
    | 'variants.product.internal.ignoreType'
    | 'variants.product.internal.mediaType'
    | 'variants.product.internal.owner'
    | 'variants.product.internal.type'
    | 'variants.product.isGiftCard'
    | 'variants.product.legacyResourceId'
    | 'variants.product.media'
    | 'variants.product.mediaCount'
    | 'variants.product.media.alt'
    | 'variants.product.media.children'
    | 'variants.product.media.id'
    | 'variants.product.media.mediaContentType'
    | 'variants.product.media.mediaErrors'
    | 'variants.product.media.shopifyId'
    | 'variants.product.media.status'
    | 'variants.product.metafield.children'
    | 'variants.product.metafield.createdAt'
    | 'variants.product.metafield.description'
    | 'variants.product.metafield.id'
    | 'variants.product.metafield.key'
    | 'variants.product.metafield.legacyResourceId'
    | 'variants.product.metafield.namespace'
    | 'variants.product.metafield.ownerType'
    | 'variants.product.metafield.shopifyId'
    | 'variants.product.metafield.type'
    | 'variants.product.metafield.updatedAt'
    | 'variants.product.metafield.value'
    | 'variants.product.metafield.valueType'
    | 'variants.product.metafields'
    | 'variants.product.metafields.children'
    | 'variants.product.metafields.createdAt'
    | 'variants.product.metafields.description'
    | 'variants.product.metafields.id'
    | 'variants.product.metafields.key'
    | 'variants.product.metafields.legacyResourceId'
    | 'variants.product.metafields.namespace'
    | 'variants.product.metafields.ownerType'
    | 'variants.product.metafields.shopifyId'
    | 'variants.product.metafields.type'
    | 'variants.product.metafields.updatedAt'
    | 'variants.product.metafields.value'
    | 'variants.product.metafields.valueType'
    | 'variants.product.onlineStorePreviewUrl'
    | 'variants.product.onlineStoreUrl'
    | 'variants.product.options'
    | 'variants.product.options.name'
    | 'variants.product.options.position'
    | 'variants.product.options.shopifyId'
    | 'variants.product.options.values'
    | 'variants.product.parent.children'
    | 'variants.product.parent.id'
    | 'variants.product.productType'
    | 'variants.product.publishedAt'
    | 'variants.product.requiresSellingPlan'
    | 'variants.product.sellingPlanGroupCount'
    | 'variants.product.seo.description'
    | 'variants.product.seo.title'
    | 'variants.product.shopifyId'
    | 'variants.product.status'
    | 'variants.product.storefrontId'
    | 'variants.product.tags'
    | 'variants.product.templateSuffix'
    | 'variants.product.title'
    | 'variants.product.totalInventory'
    | 'variants.product.totalVariants'
    | 'variants.product.tracksInventory'
    | 'variants.product.updatedAt'
    | 'variants.product.variants'
    | 'variants.product.variants.availableForSale'
    | 'variants.product.variants.barcode'
    | 'variants.product.variants.children'
    | 'variants.product.variants.compareAtPrice'
    | 'variants.product.variants.createdAt'
    | 'variants.product.variants.displayName'
    | 'variants.product.variants.id'
    | 'variants.product.variants.inventoryPolicy'
    | 'variants.product.variants.inventoryQuantity'
    | 'variants.product.variants.legacyResourceId'
    | 'variants.product.variants.media'
    | 'variants.product.variants.metafields'
    | 'variants.product.variants.position'
    | 'variants.product.variants.presentmentPrices'
    | 'variants.product.variants.price'
    | 'variants.product.variants.requiresShipping'
    | 'variants.product.variants.selectedOptions'
    | 'variants.product.variants.sellingPlanGroupCount'
    | 'variants.product.variants.shopifyId'
    | 'variants.product.variants.sku'
    | 'variants.product.variants.storefrontId'
    | 'variants.product.variants.taxCode'
    | 'variants.product.variants.taxable'
    | 'variants.product.variants.title'
    | 'variants.product.variants.updatedAt'
    | 'variants.product.variants.weight'
    | 'variants.product.variants.weightUnit'
    | 'variants.product.vendor'
    | 'variants.requiresShipping'
    | 'variants.selectedOptions'
    | 'variants.selectedOptions.name'
    | 'variants.selectedOptions.value'
    | 'variants.sellingPlanGroupCount'
    | 'variants.shopifyId'
    | 'variants.sku'
    | 'variants.storefrontId'
    | 'variants.taxCode'
    | 'variants.taxable'
    | 'variants.title'
    | 'variants.updatedAt'
    | 'variants.weight'
    | 'variants.weightUnit'
    | 'vendor';

  type ShopifyProductFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly collections: InputMaybe<ShopifyCollectionFilterListInput>;
    readonly createdAt: InputMaybe<DateQueryOperatorInput>;
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly descriptionHtml: InputMaybe<StringQueryOperatorInput>;
    readonly featuredImage: InputMaybe<ShopifyImageFilterInput>;
    readonly featuredMedia: InputMaybe<ShopifyMediaFilterInput>;
    readonly feedback: InputMaybe<ShopifyResourceFeedbackFilterInput>;
    readonly gatsbyPath: InputMaybe<StringQueryOperatorInput>;
    readonly giftCardTemplateSuffix: InputMaybe<StringQueryOperatorInput>;
    readonly handle: InputMaybe<StringQueryOperatorInput>;
    readonly hasOnlyDefaultVariant: InputMaybe<BooleanQueryOperatorInput>;
    readonly hasOutOfStockVariants: InputMaybe<BooleanQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly isGiftCard: InputMaybe<BooleanQueryOperatorInput>;
    readonly legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    readonly media: InputMaybe<ShopifyMediaFilterListInput>;
    readonly mediaCount: InputMaybe<IntQueryOperatorInput>;
    readonly metafield: InputMaybe<ShopifyMetafieldFilterInput>;
    readonly metafields: InputMaybe<ShopifyMetafieldFilterListInput>;
    readonly onlineStorePreviewUrl: InputMaybe<StringQueryOperatorInput>;
    readonly onlineStoreUrl: InputMaybe<StringQueryOperatorInput>;
    readonly options: InputMaybe<ShopifyProductOptionFilterListInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly priceRange: InputMaybe<ShopifyProductPriceRangeFilterInput>;
    readonly priceRangeV2: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
    readonly productType: InputMaybe<StringQueryOperatorInput>;
    readonly publishedAt: InputMaybe<DateQueryOperatorInput>;
    readonly requiresSellingPlan: InputMaybe<BooleanQueryOperatorInput>;
    readonly sellingPlanGroupCount: InputMaybe<IntQueryOperatorInput>;
    readonly seo: InputMaybe<ShopifySEOFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly status: InputMaybe<ShopifyProductStatusQueryOperatorInput>;
    readonly storefrontId: InputMaybe<StringQueryOperatorInput>;
    readonly tags: InputMaybe<StringQueryOperatorInput>;
    readonly templateSuffix: InputMaybe<StringQueryOperatorInput>;
    readonly title: InputMaybe<StringQueryOperatorInput>;
    readonly totalInventory: InputMaybe<IntQueryOperatorInput>;
    readonly totalVariants: InputMaybe<IntQueryOperatorInput>;
    readonly tracksInventory: InputMaybe<BooleanQueryOperatorInput>;
    readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
    readonly variants: InputMaybe<ShopifyProductVariantFilterListInput>;
    readonly vendor: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyProductFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyProductFilterInput>;
  };

  type ShopifyProductGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyProductEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyProductGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyProduct>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyProductGroupConnection_distinctArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductGroupConnection_groupArgs = {
    field: ShopifyProductFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyProductGroupConnection_maxArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductGroupConnection_minArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductGroupConnection_sumArgs = {
    field: ShopifyProductFieldsEnum;
  };

  type ShopifyProductOption = {
    readonly name: Scalars['String'];
    readonly position: Scalars['Int'];
    readonly shopifyId: Scalars['String'];
    readonly values: ReadonlyArray<Scalars['String']>;
  };

  type ShopifyProductOptionFilterInput = {
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly position: InputMaybe<IntQueryOperatorInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly values: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyProductOptionFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyProductOptionFilterInput>;
  };

  type ShopifyProductPriceRange = {
    readonly maxVariantPrice: ShopifyMoneyV2;
    readonly minVariantPrice: ShopifyMoneyV2;
  };

  type ShopifyProductPriceRangeFilterInput = {
    readonly maxVariantPrice: InputMaybe<ShopifyMoneyV2FilterInput>;
    readonly minVariantPrice: InputMaybe<ShopifyMoneyV2FilterInput>;
  };

  type ShopifyProductPriceRangeV2 = {
    readonly maxVariantPrice: ShopifyMoneyV2;
    readonly minVariantPrice: ShopifyMoneyV2;
  };

  type ShopifyProductPriceRangeV2FilterInput = {
    readonly maxVariantPrice: InputMaybe<ShopifyMoneyV2FilterInput>;
    readonly minVariantPrice: InputMaybe<ShopifyMoneyV2FilterInput>;
  };

  type ShopifyProductSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyProductFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyProductStatus = 'ACTIVE' | 'ARCHIVED' | 'DRAFT';

  type ShopifyProductStatusQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyProductStatus>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyProductStatus>>>;
    readonly ne: InputMaybe<ShopifyProductStatus>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyProductStatus>>>;
  };

  type ShopifyProductVariant = Node & {
    readonly availableForSale: Scalars['Boolean'];
    readonly barcode: Maybe<Scalars['String']>;
    readonly children: ReadonlyArray<Node>;
    readonly compareAtPrice: Maybe<Scalars['Float']>;
    readonly createdAt: Scalars['Date'];
    readonly displayName: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly image: Maybe<ShopifyImage>;
    readonly internal: Internal;
    readonly inventoryPolicy: ShopifyProductVariantInventoryPolicy;
    readonly inventoryQuantity: Maybe<Scalars['Int']>;
    readonly legacyResourceId: Scalars['String'];
    readonly media: ReadonlyArray<ShopifyMedia>;
    readonly metafield: Maybe<ShopifyMetafield>;
    readonly metafields: ReadonlyArray<ShopifyMetafield>;
    readonly parent: Maybe<Node>;
    readonly position: Scalars['Int'];
    readonly presentmentPrices: ReadonlyArray<ShopifyProductVariantPricePair>;
    readonly price: Scalars['Float'];
    readonly product: ShopifyProduct;
    /** @deprecated Use `InventoryItem.requiresShipping` instead. */
    readonly requiresShipping: Scalars['Boolean'];
    readonly selectedOptions: ReadonlyArray<ShopifySelectedOption>;
    readonly sellingPlanGroupCount: Scalars['Int'];
    readonly shopifyId: Scalars['String'];
    readonly sku: Maybe<Scalars['String']>;
    readonly storefrontId: Scalars['String'];
    readonly taxCode: Maybe<Scalars['String']>;
    readonly taxable: Scalars['Boolean'];
    readonly title: Scalars['String'];
    readonly updatedAt: Scalars['Date'];
    readonly weight: Maybe<Scalars['Float']>;
    readonly weightUnit: ShopifyWeightUnit;
  };

  type ShopifyProductVariant_createdAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyProductVariant_metafieldArgs = {
    key: Scalars['String'];
    namespace: Scalars['String'];
  };

  type ShopifyProductVariant_updatedAtArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type ShopifyProductVariantConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyProductVariantEdge>;
    readonly group: ReadonlyArray<ShopifyProductVariantGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyProductVariant>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyProductVariantConnection_distinctArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantConnection_groupArgs = {
    field: ShopifyProductVariantFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyProductVariantConnection_maxArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantConnection_minArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantConnection_sumArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantEdge = {
    readonly next: Maybe<ShopifyProductVariant>;
    readonly node: ShopifyProductVariant;
    readonly previous: Maybe<ShopifyProductVariant>;
  };

  type ShopifyProductVariantFieldsEnum =
    | 'availableForSale'
    | 'barcode'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'compareAtPrice'
    | 'createdAt'
    | 'displayName'
    | 'id'
    | 'image.altText'
    | 'image.height'
    | 'image.localFile.absolutePath'
    | 'image.localFile.accessTime'
    | 'image.localFile.atime'
    | 'image.localFile.atimeMs'
    | 'image.localFile.base'
    | 'image.localFile.birthTime'
    | 'image.localFile.birthtime'
    | 'image.localFile.birthtimeMs'
    | 'image.localFile.blksize'
    | 'image.localFile.blocks'
    | 'image.localFile.changeTime'
    | 'image.localFile.childImageSharp.children'
    | 'image.localFile.childImageSharp.gatsbyImageData'
    | 'image.localFile.childImageSharp.id'
    | 'image.localFile.children'
    | 'image.localFile.childrenImageSharp'
    | 'image.localFile.childrenImageSharp.children'
    | 'image.localFile.childrenImageSharp.gatsbyImageData'
    | 'image.localFile.childrenImageSharp.id'
    | 'image.localFile.children.children'
    | 'image.localFile.children.id'
    | 'image.localFile.ctime'
    | 'image.localFile.ctimeMs'
    | 'image.localFile.dev'
    | 'image.localFile.dir'
    | 'image.localFile.ext'
    | 'image.localFile.extension'
    | 'image.localFile.gid'
    | 'image.localFile.id'
    | 'image.localFile.ino'
    | 'image.localFile.internal.content'
    | 'image.localFile.internal.contentDigest'
    | 'image.localFile.internal.contentFilePath'
    | 'image.localFile.internal.description'
    | 'image.localFile.internal.fieldOwners'
    | 'image.localFile.internal.ignoreType'
    | 'image.localFile.internal.mediaType'
    | 'image.localFile.internal.owner'
    | 'image.localFile.internal.type'
    | 'image.localFile.mode'
    | 'image.localFile.modifiedTime'
    | 'image.localFile.mtime'
    | 'image.localFile.mtimeMs'
    | 'image.localFile.name'
    | 'image.localFile.nlink'
    | 'image.localFile.parent.children'
    | 'image.localFile.parent.id'
    | 'image.localFile.prettySize'
    | 'image.localFile.rdev'
    | 'image.localFile.relativeDirectory'
    | 'image.localFile.relativePath'
    | 'image.localFile.root'
    | 'image.localFile.size'
    | 'image.localFile.sourceInstanceName'
    | 'image.localFile.uid'
    | 'image.localFile.url'
    | 'image.originalSrc'
    | 'image.src'
    | 'image.transformedSrc'
    | 'image.width'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'inventoryPolicy'
    | 'inventoryQuantity'
    | 'legacyResourceId'
    | 'media'
    | 'media.alt'
    | 'media.children'
    | 'media.children.children'
    | 'media.children.children.children'
    | 'media.children.children.id'
    | 'media.children.id'
    | 'media.children.internal.content'
    | 'media.children.internal.contentDigest'
    | 'media.children.internal.contentFilePath'
    | 'media.children.internal.description'
    | 'media.children.internal.fieldOwners'
    | 'media.children.internal.ignoreType'
    | 'media.children.internal.mediaType'
    | 'media.children.internal.owner'
    | 'media.children.internal.type'
    | 'media.children.parent.children'
    | 'media.children.parent.id'
    | 'media.id'
    | 'media.internal.content'
    | 'media.internal.contentDigest'
    | 'media.internal.contentFilePath'
    | 'media.internal.description'
    | 'media.internal.fieldOwners'
    | 'media.internal.ignoreType'
    | 'media.internal.mediaType'
    | 'media.internal.owner'
    | 'media.internal.type'
    | 'media.mediaContentType'
    | 'media.mediaErrors'
    | 'media.mediaErrors.code'
    | 'media.mediaErrors.details'
    | 'media.mediaErrors.message'
    | 'media.parent.children'
    | 'media.parent.children.children'
    | 'media.parent.children.id'
    | 'media.parent.id'
    | 'media.parent.internal.content'
    | 'media.parent.internal.contentDigest'
    | 'media.parent.internal.contentFilePath'
    | 'media.parent.internal.description'
    | 'media.parent.internal.fieldOwners'
    | 'media.parent.internal.ignoreType'
    | 'media.parent.internal.mediaType'
    | 'media.parent.internal.owner'
    | 'media.parent.internal.type'
    | 'media.parent.parent.children'
    | 'media.parent.parent.id'
    | 'media.preview.image.altText'
    | 'media.preview.image.height'
    | 'media.preview.image.originalSrc'
    | 'media.preview.image.src'
    | 'media.preview.image.transformedSrc'
    | 'media.preview.image.width'
    | 'media.preview.status'
    | 'media.shopifyId'
    | 'media.status'
    | 'metafield.children'
    | 'metafield.children.children'
    | 'metafield.children.children.children'
    | 'metafield.children.children.id'
    | 'metafield.children.id'
    | 'metafield.children.internal.content'
    | 'metafield.children.internal.contentDigest'
    | 'metafield.children.internal.contentFilePath'
    | 'metafield.children.internal.description'
    | 'metafield.children.internal.fieldOwners'
    | 'metafield.children.internal.ignoreType'
    | 'metafield.children.internal.mediaType'
    | 'metafield.children.internal.owner'
    | 'metafield.children.internal.type'
    | 'metafield.children.parent.children'
    | 'metafield.children.parent.id'
    | 'metafield.createdAt'
    | 'metafield.description'
    | 'metafield.id'
    | 'metafield.internal.content'
    | 'metafield.internal.contentDigest'
    | 'metafield.internal.contentFilePath'
    | 'metafield.internal.description'
    | 'metafield.internal.fieldOwners'
    | 'metafield.internal.ignoreType'
    | 'metafield.internal.mediaType'
    | 'metafield.internal.owner'
    | 'metafield.internal.type'
    | 'metafield.key'
    | 'metafield.legacyResourceId'
    | 'metafield.namespace'
    | 'metafield.ownerType'
    | 'metafield.parent.children'
    | 'metafield.parent.children.children'
    | 'metafield.parent.children.id'
    | 'metafield.parent.id'
    | 'metafield.parent.internal.content'
    | 'metafield.parent.internal.contentDigest'
    | 'metafield.parent.internal.contentFilePath'
    | 'metafield.parent.internal.description'
    | 'metafield.parent.internal.fieldOwners'
    | 'metafield.parent.internal.ignoreType'
    | 'metafield.parent.internal.mediaType'
    | 'metafield.parent.internal.owner'
    | 'metafield.parent.internal.type'
    | 'metafield.parent.parent.children'
    | 'metafield.parent.parent.id'
    | 'metafield.shopifyId'
    | 'metafield.type'
    | 'metafield.updatedAt'
    | 'metafield.value'
    | 'metafield.valueType'
    | 'metafields'
    | 'metafields.children'
    | 'metafields.children.children'
    | 'metafields.children.children.children'
    | 'metafields.children.children.id'
    | 'metafields.children.id'
    | 'metafields.children.internal.content'
    | 'metafields.children.internal.contentDigest'
    | 'metafields.children.internal.contentFilePath'
    | 'metafields.children.internal.description'
    | 'metafields.children.internal.fieldOwners'
    | 'metafields.children.internal.ignoreType'
    | 'metafields.children.internal.mediaType'
    | 'metafields.children.internal.owner'
    | 'metafields.children.internal.type'
    | 'metafields.children.parent.children'
    | 'metafields.children.parent.id'
    | 'metafields.createdAt'
    | 'metafields.description'
    | 'metafields.id'
    | 'metafields.internal.content'
    | 'metafields.internal.contentDigest'
    | 'metafields.internal.contentFilePath'
    | 'metafields.internal.description'
    | 'metafields.internal.fieldOwners'
    | 'metafields.internal.ignoreType'
    | 'metafields.internal.mediaType'
    | 'metafields.internal.owner'
    | 'metafields.internal.type'
    | 'metafields.key'
    | 'metafields.legacyResourceId'
    | 'metafields.namespace'
    | 'metafields.ownerType'
    | 'metafields.parent.children'
    | 'metafields.parent.children.children'
    | 'metafields.parent.children.id'
    | 'metafields.parent.id'
    | 'metafields.parent.internal.content'
    | 'metafields.parent.internal.contentDigest'
    | 'metafields.parent.internal.contentFilePath'
    | 'metafields.parent.internal.description'
    | 'metafields.parent.internal.fieldOwners'
    | 'metafields.parent.internal.ignoreType'
    | 'metafields.parent.internal.mediaType'
    | 'metafields.parent.internal.owner'
    | 'metafields.parent.internal.type'
    | 'metafields.parent.parent.children'
    | 'metafields.parent.parent.id'
    | 'metafields.shopifyId'
    | 'metafields.type'
    | 'metafields.updatedAt'
    | 'metafields.value'
    | 'metafields.valueType'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'position'
    | 'presentmentPrices'
    | 'presentmentPrices.compareAtPrice.amount'
    | 'presentmentPrices.compareAtPrice.currencyCode'
    | 'presentmentPrices.price.amount'
    | 'presentmentPrices.price.currencyCode'
    | 'price'
    | 'product.children'
    | 'product.children.children'
    | 'product.children.children.children'
    | 'product.children.children.id'
    | 'product.children.id'
    | 'product.children.internal.content'
    | 'product.children.internal.contentDigest'
    | 'product.children.internal.contentFilePath'
    | 'product.children.internal.description'
    | 'product.children.internal.fieldOwners'
    | 'product.children.internal.ignoreType'
    | 'product.children.internal.mediaType'
    | 'product.children.internal.owner'
    | 'product.children.internal.type'
    | 'product.children.parent.children'
    | 'product.children.parent.id'
    | 'product.collections'
    | 'product.collections.children'
    | 'product.collections.children.children'
    | 'product.collections.children.id'
    | 'product.collections.description'
    | 'product.collections.descriptionHtml'
    | 'product.collections.feedback.details'
    | 'product.collections.feedback.summary'
    | 'product.collections.handle'
    | 'product.collections.id'
    | 'product.collections.image.altText'
    | 'product.collections.image.height'
    | 'product.collections.image.originalSrc'
    | 'product.collections.image.src'
    | 'product.collections.image.transformedSrc'
    | 'product.collections.image.width'
    | 'product.collections.internal.content'
    | 'product.collections.internal.contentDigest'
    | 'product.collections.internal.contentFilePath'
    | 'product.collections.internal.description'
    | 'product.collections.internal.fieldOwners'
    | 'product.collections.internal.ignoreType'
    | 'product.collections.internal.mediaType'
    | 'product.collections.internal.owner'
    | 'product.collections.internal.type'
    | 'product.collections.legacyResourceId'
    | 'product.collections.metafield.children'
    | 'product.collections.metafield.createdAt'
    | 'product.collections.metafield.description'
    | 'product.collections.metafield.id'
    | 'product.collections.metafield.key'
    | 'product.collections.metafield.legacyResourceId'
    | 'product.collections.metafield.namespace'
    | 'product.collections.metafield.ownerType'
    | 'product.collections.metafield.shopifyId'
    | 'product.collections.metafield.type'
    | 'product.collections.metafield.updatedAt'
    | 'product.collections.metafield.value'
    | 'product.collections.metafield.valueType'
    | 'product.collections.metafields'
    | 'product.collections.metafields.children'
    | 'product.collections.metafields.createdAt'
    | 'product.collections.metafields.description'
    | 'product.collections.metafields.id'
    | 'product.collections.metafields.key'
    | 'product.collections.metafields.legacyResourceId'
    | 'product.collections.metafields.namespace'
    | 'product.collections.metafields.ownerType'
    | 'product.collections.metafields.shopifyId'
    | 'product.collections.metafields.type'
    | 'product.collections.metafields.updatedAt'
    | 'product.collections.metafields.value'
    | 'product.collections.metafields.valueType'
    | 'product.collections.parent.children'
    | 'product.collections.parent.id'
    | 'product.collections.products'
    | 'product.collections.productsCount'
    | 'product.collections.products.children'
    | 'product.collections.products.collections'
    | 'product.collections.products.createdAt'
    | 'product.collections.products.description'
    | 'product.collections.products.descriptionHtml'
    | 'product.collections.products.gatsbyPath'
    | 'product.collections.products.giftCardTemplateSuffix'
    | 'product.collections.products.handle'
    | 'product.collections.products.hasOnlyDefaultVariant'
    | 'product.collections.products.hasOutOfStockVariants'
    | 'product.collections.products.id'
    | 'product.collections.products.isGiftCard'
    | 'product.collections.products.legacyResourceId'
    | 'product.collections.products.media'
    | 'product.collections.products.mediaCount'
    | 'product.collections.products.metafields'
    | 'product.collections.products.onlineStorePreviewUrl'
    | 'product.collections.products.onlineStoreUrl'
    | 'product.collections.products.options'
    | 'product.collections.products.productType'
    | 'product.collections.products.publishedAt'
    | 'product.collections.products.requiresSellingPlan'
    | 'product.collections.products.sellingPlanGroupCount'
    | 'product.collections.products.shopifyId'
    | 'product.collections.products.status'
    | 'product.collections.products.storefrontId'
    | 'product.collections.products.tags'
    | 'product.collections.products.templateSuffix'
    | 'product.collections.products.title'
    | 'product.collections.products.totalInventory'
    | 'product.collections.products.totalVariants'
    | 'product.collections.products.tracksInventory'
    | 'product.collections.products.updatedAt'
    | 'product.collections.products.variants'
    | 'product.collections.products.vendor'
    | 'product.collections.ruleSet.appliedDisjunctively'
    | 'product.collections.ruleSet.rules'
    | 'product.collections.seo.description'
    | 'product.collections.seo.title'
    | 'product.collections.shopifyId'
    | 'product.collections.sortOrder'
    | 'product.collections.storefrontId'
    | 'product.collections.templateSuffix'
    | 'product.collections.title'
    | 'product.collections.updatedAt'
    | 'product.createdAt'
    | 'product.description'
    | 'product.descriptionHtml'
    | 'product.featuredImage.altText'
    | 'product.featuredImage.height'
    | 'product.featuredImage.localFile.absolutePath'
    | 'product.featuredImage.localFile.accessTime'
    | 'product.featuredImage.localFile.atime'
    | 'product.featuredImage.localFile.atimeMs'
    | 'product.featuredImage.localFile.base'
    | 'product.featuredImage.localFile.birthTime'
    | 'product.featuredImage.localFile.birthtime'
    | 'product.featuredImage.localFile.birthtimeMs'
    | 'product.featuredImage.localFile.blksize'
    | 'product.featuredImage.localFile.blocks'
    | 'product.featuredImage.localFile.changeTime'
    | 'product.featuredImage.localFile.children'
    | 'product.featuredImage.localFile.childrenImageSharp'
    | 'product.featuredImage.localFile.ctime'
    | 'product.featuredImage.localFile.ctimeMs'
    | 'product.featuredImage.localFile.dev'
    | 'product.featuredImage.localFile.dir'
    | 'product.featuredImage.localFile.ext'
    | 'product.featuredImage.localFile.extension'
    | 'product.featuredImage.localFile.gid'
    | 'product.featuredImage.localFile.id'
    | 'product.featuredImage.localFile.ino'
    | 'product.featuredImage.localFile.mode'
    | 'product.featuredImage.localFile.modifiedTime'
    | 'product.featuredImage.localFile.mtime'
    | 'product.featuredImage.localFile.mtimeMs'
    | 'product.featuredImage.localFile.name'
    | 'product.featuredImage.localFile.nlink'
    | 'product.featuredImage.localFile.prettySize'
    | 'product.featuredImage.localFile.rdev'
    | 'product.featuredImage.localFile.relativeDirectory'
    | 'product.featuredImage.localFile.relativePath'
    | 'product.featuredImage.localFile.root'
    | 'product.featuredImage.localFile.size'
    | 'product.featuredImage.localFile.sourceInstanceName'
    | 'product.featuredImage.localFile.uid'
    | 'product.featuredImage.localFile.url'
    | 'product.featuredImage.originalSrc'
    | 'product.featuredImage.src'
    | 'product.featuredImage.transformedSrc'
    | 'product.featuredImage.width'
    | 'product.featuredMedia.alt'
    | 'product.featuredMedia.children'
    | 'product.featuredMedia.children.children'
    | 'product.featuredMedia.children.id'
    | 'product.featuredMedia.id'
    | 'product.featuredMedia.internal.content'
    | 'product.featuredMedia.internal.contentDigest'
    | 'product.featuredMedia.internal.contentFilePath'
    | 'product.featuredMedia.internal.description'
    | 'product.featuredMedia.internal.fieldOwners'
    | 'product.featuredMedia.internal.ignoreType'
    | 'product.featuredMedia.internal.mediaType'
    | 'product.featuredMedia.internal.owner'
    | 'product.featuredMedia.internal.type'
    | 'product.featuredMedia.mediaContentType'
    | 'product.featuredMedia.mediaErrors'
    | 'product.featuredMedia.mediaErrors.code'
    | 'product.featuredMedia.mediaErrors.details'
    | 'product.featuredMedia.mediaErrors.message'
    | 'product.featuredMedia.parent.children'
    | 'product.featuredMedia.parent.id'
    | 'product.featuredMedia.preview.status'
    | 'product.featuredMedia.shopifyId'
    | 'product.featuredMedia.status'
    | 'product.feedback.details'
    | 'product.feedback.details.messages'
    | 'product.feedback.summary'
    | 'product.gatsbyPath'
    | 'product.giftCardTemplateSuffix'
    | 'product.handle'
    | 'product.hasOnlyDefaultVariant'
    | 'product.hasOutOfStockVariants'
    | 'product.id'
    | 'product.internal.content'
    | 'product.internal.contentDigest'
    | 'product.internal.contentFilePath'
    | 'product.internal.description'
    | 'product.internal.fieldOwners'
    | 'product.internal.ignoreType'
    | 'product.internal.mediaType'
    | 'product.internal.owner'
    | 'product.internal.type'
    | 'product.isGiftCard'
    | 'product.legacyResourceId'
    | 'product.media'
    | 'product.mediaCount'
    | 'product.media.alt'
    | 'product.media.children'
    | 'product.media.children.children'
    | 'product.media.children.id'
    | 'product.media.id'
    | 'product.media.internal.content'
    | 'product.media.internal.contentDigest'
    | 'product.media.internal.contentFilePath'
    | 'product.media.internal.description'
    | 'product.media.internal.fieldOwners'
    | 'product.media.internal.ignoreType'
    | 'product.media.internal.mediaType'
    | 'product.media.internal.owner'
    | 'product.media.internal.type'
    | 'product.media.mediaContentType'
    | 'product.media.mediaErrors'
    | 'product.media.mediaErrors.code'
    | 'product.media.mediaErrors.details'
    | 'product.media.mediaErrors.message'
    | 'product.media.parent.children'
    | 'product.media.parent.id'
    | 'product.media.preview.status'
    | 'product.media.shopifyId'
    | 'product.media.status'
    | 'product.metafield.children'
    | 'product.metafield.children.children'
    | 'product.metafield.children.id'
    | 'product.metafield.createdAt'
    | 'product.metafield.description'
    | 'product.metafield.id'
    | 'product.metafield.internal.content'
    | 'product.metafield.internal.contentDigest'
    | 'product.metafield.internal.contentFilePath'
    | 'product.metafield.internal.description'
    | 'product.metafield.internal.fieldOwners'
    | 'product.metafield.internal.ignoreType'
    | 'product.metafield.internal.mediaType'
    | 'product.metafield.internal.owner'
    | 'product.metafield.internal.type'
    | 'product.metafield.key'
    | 'product.metafield.legacyResourceId'
    | 'product.metafield.namespace'
    | 'product.metafield.ownerType'
    | 'product.metafield.parent.children'
    | 'product.metafield.parent.id'
    | 'product.metafield.shopifyId'
    | 'product.metafield.type'
    | 'product.metafield.updatedAt'
    | 'product.metafield.value'
    | 'product.metafield.valueType'
    | 'product.metafields'
    | 'product.metafields.children'
    | 'product.metafields.children.children'
    | 'product.metafields.children.id'
    | 'product.metafields.createdAt'
    | 'product.metafields.description'
    | 'product.metafields.id'
    | 'product.metafields.internal.content'
    | 'product.metafields.internal.contentDigest'
    | 'product.metafields.internal.contentFilePath'
    | 'product.metafields.internal.description'
    | 'product.metafields.internal.fieldOwners'
    | 'product.metafields.internal.ignoreType'
    | 'product.metafields.internal.mediaType'
    | 'product.metafields.internal.owner'
    | 'product.metafields.internal.type'
    | 'product.metafields.key'
    | 'product.metafields.legacyResourceId'
    | 'product.metafields.namespace'
    | 'product.metafields.ownerType'
    | 'product.metafields.parent.children'
    | 'product.metafields.parent.id'
    | 'product.metafields.shopifyId'
    | 'product.metafields.type'
    | 'product.metafields.updatedAt'
    | 'product.metafields.value'
    | 'product.metafields.valueType'
    | 'product.onlineStorePreviewUrl'
    | 'product.onlineStoreUrl'
    | 'product.options'
    | 'product.options.name'
    | 'product.options.position'
    | 'product.options.shopifyId'
    | 'product.options.values'
    | 'product.parent.children'
    | 'product.parent.children.children'
    | 'product.parent.children.id'
    | 'product.parent.id'
    | 'product.parent.internal.content'
    | 'product.parent.internal.contentDigest'
    | 'product.parent.internal.contentFilePath'
    | 'product.parent.internal.description'
    | 'product.parent.internal.fieldOwners'
    | 'product.parent.internal.ignoreType'
    | 'product.parent.internal.mediaType'
    | 'product.parent.internal.owner'
    | 'product.parent.internal.type'
    | 'product.parent.parent.children'
    | 'product.parent.parent.id'
    | 'product.priceRangeV2.maxVariantPrice.amount'
    | 'product.priceRangeV2.maxVariantPrice.currencyCode'
    | 'product.priceRangeV2.minVariantPrice.amount'
    | 'product.priceRangeV2.minVariantPrice.currencyCode'
    | 'product.priceRange.maxVariantPrice.amount'
    | 'product.priceRange.maxVariantPrice.currencyCode'
    | 'product.priceRange.minVariantPrice.amount'
    | 'product.priceRange.minVariantPrice.currencyCode'
    | 'product.productType'
    | 'product.publishedAt'
    | 'product.requiresSellingPlan'
    | 'product.sellingPlanGroupCount'
    | 'product.seo.description'
    | 'product.seo.title'
    | 'product.shopifyId'
    | 'product.status'
    | 'product.storefrontId'
    | 'product.tags'
    | 'product.templateSuffix'
    | 'product.title'
    | 'product.totalInventory'
    | 'product.totalVariants'
    | 'product.tracksInventory'
    | 'product.updatedAt'
    | 'product.variants'
    | 'product.variants.availableForSale'
    | 'product.variants.barcode'
    | 'product.variants.children'
    | 'product.variants.children.children'
    | 'product.variants.children.id'
    | 'product.variants.compareAtPrice'
    | 'product.variants.createdAt'
    | 'product.variants.displayName'
    | 'product.variants.id'
    | 'product.variants.image.altText'
    | 'product.variants.image.height'
    | 'product.variants.image.originalSrc'
    | 'product.variants.image.src'
    | 'product.variants.image.transformedSrc'
    | 'product.variants.image.width'
    | 'product.variants.internal.content'
    | 'product.variants.internal.contentDigest'
    | 'product.variants.internal.contentFilePath'
    | 'product.variants.internal.description'
    | 'product.variants.internal.fieldOwners'
    | 'product.variants.internal.ignoreType'
    | 'product.variants.internal.mediaType'
    | 'product.variants.internal.owner'
    | 'product.variants.internal.type'
    | 'product.variants.inventoryPolicy'
    | 'product.variants.inventoryQuantity'
    | 'product.variants.legacyResourceId'
    | 'product.variants.media'
    | 'product.variants.media.alt'
    | 'product.variants.media.children'
    | 'product.variants.media.id'
    | 'product.variants.media.mediaContentType'
    | 'product.variants.media.mediaErrors'
    | 'product.variants.media.shopifyId'
    | 'product.variants.media.status'
    | 'product.variants.metafield.children'
    | 'product.variants.metafield.createdAt'
    | 'product.variants.metafield.description'
    | 'product.variants.metafield.id'
    | 'product.variants.metafield.key'
    | 'product.variants.metafield.legacyResourceId'
    | 'product.variants.metafield.namespace'
    | 'product.variants.metafield.ownerType'
    | 'product.variants.metafield.shopifyId'
    | 'product.variants.metafield.type'
    | 'product.variants.metafield.updatedAt'
    | 'product.variants.metafield.value'
    | 'product.variants.metafield.valueType'
    | 'product.variants.metafields'
    | 'product.variants.metafields.children'
    | 'product.variants.metafields.createdAt'
    | 'product.variants.metafields.description'
    | 'product.variants.metafields.id'
    | 'product.variants.metafields.key'
    | 'product.variants.metafields.legacyResourceId'
    | 'product.variants.metafields.namespace'
    | 'product.variants.metafields.ownerType'
    | 'product.variants.metafields.shopifyId'
    | 'product.variants.metafields.type'
    | 'product.variants.metafields.updatedAt'
    | 'product.variants.metafields.value'
    | 'product.variants.metafields.valueType'
    | 'product.variants.parent.children'
    | 'product.variants.parent.id'
    | 'product.variants.position'
    | 'product.variants.presentmentPrices'
    | 'product.variants.price'
    | 'product.variants.product.children'
    | 'product.variants.product.collections'
    | 'product.variants.product.createdAt'
    | 'product.variants.product.description'
    | 'product.variants.product.descriptionHtml'
    | 'product.variants.product.gatsbyPath'
    | 'product.variants.product.giftCardTemplateSuffix'
    | 'product.variants.product.handle'
    | 'product.variants.product.hasOnlyDefaultVariant'
    | 'product.variants.product.hasOutOfStockVariants'
    | 'product.variants.product.id'
    | 'product.variants.product.isGiftCard'
    | 'product.variants.product.legacyResourceId'
    | 'product.variants.product.media'
    | 'product.variants.product.mediaCount'
    | 'product.variants.product.metafields'
    | 'product.variants.product.onlineStorePreviewUrl'
    | 'product.variants.product.onlineStoreUrl'
    | 'product.variants.product.options'
    | 'product.variants.product.productType'
    | 'product.variants.product.publishedAt'
    | 'product.variants.product.requiresSellingPlan'
    | 'product.variants.product.sellingPlanGroupCount'
    | 'product.variants.product.shopifyId'
    | 'product.variants.product.status'
    | 'product.variants.product.storefrontId'
    | 'product.variants.product.tags'
    | 'product.variants.product.templateSuffix'
    | 'product.variants.product.title'
    | 'product.variants.product.totalInventory'
    | 'product.variants.product.totalVariants'
    | 'product.variants.product.tracksInventory'
    | 'product.variants.product.updatedAt'
    | 'product.variants.product.variants'
    | 'product.variants.product.vendor'
    | 'product.variants.requiresShipping'
    | 'product.variants.selectedOptions'
    | 'product.variants.selectedOptions.name'
    | 'product.variants.selectedOptions.value'
    | 'product.variants.sellingPlanGroupCount'
    | 'product.variants.shopifyId'
    | 'product.variants.sku'
    | 'product.variants.storefrontId'
    | 'product.variants.taxCode'
    | 'product.variants.taxable'
    | 'product.variants.title'
    | 'product.variants.updatedAt'
    | 'product.variants.weight'
    | 'product.variants.weightUnit'
    | 'product.vendor'
    | 'requiresShipping'
    | 'selectedOptions'
    | 'selectedOptions.name'
    | 'selectedOptions.value'
    | 'sellingPlanGroupCount'
    | 'shopifyId'
    | 'sku'
    | 'storefrontId'
    | 'taxCode'
    | 'taxable'
    | 'title'
    | 'updatedAt'
    | 'weight'
    | 'weightUnit';

  type ShopifyProductVariantFilterInput = {
    readonly availableForSale: InputMaybe<BooleanQueryOperatorInput>;
    readonly barcode: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly compareAtPrice: InputMaybe<FloatQueryOperatorInput>;
    readonly createdAt: InputMaybe<DateQueryOperatorInput>;
    readonly displayName: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly image: InputMaybe<ShopifyImageFilterInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly inventoryPolicy: InputMaybe<ShopifyProductVariantInventoryPolicyQueryOperatorInput>;
    readonly inventoryQuantity: InputMaybe<IntQueryOperatorInput>;
    readonly legacyResourceId: InputMaybe<StringQueryOperatorInput>;
    readonly media: InputMaybe<ShopifyMediaFilterListInput>;
    readonly metafield: InputMaybe<ShopifyMetafieldFilterInput>;
    readonly metafields: InputMaybe<ShopifyMetafieldFilterListInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly position: InputMaybe<IntQueryOperatorInput>;
    readonly presentmentPrices: InputMaybe<ShopifyProductVariantPricePairFilterListInput>;
    readonly price: InputMaybe<FloatQueryOperatorInput>;
    readonly product: InputMaybe<ShopifyProductFilterInput>;
    readonly requiresShipping: InputMaybe<BooleanQueryOperatorInput>;
    readonly selectedOptions: InputMaybe<ShopifySelectedOptionFilterListInput>;
    readonly sellingPlanGroupCount: InputMaybe<IntQueryOperatorInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly sku: InputMaybe<StringQueryOperatorInput>;
    readonly storefrontId: InputMaybe<StringQueryOperatorInput>;
    readonly taxCode: InputMaybe<StringQueryOperatorInput>;
    readonly taxable: InputMaybe<BooleanQueryOperatorInput>;
    readonly title: InputMaybe<StringQueryOperatorInput>;
    readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
    readonly weight: InputMaybe<FloatQueryOperatorInput>;
    readonly weightUnit: InputMaybe<ShopifyWeightUnitQueryOperatorInput>;
  };

  type ShopifyProductVariantFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyProductVariantFilterInput>;
  };

  type ShopifyProductVariantGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyProductVariantEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyProductVariantGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyProductVariant>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyProductVariantGroupConnection_distinctArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantGroupConnection_groupArgs = {
    field: ShopifyProductVariantFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyProductVariantGroupConnection_maxArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantGroupConnection_minArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantGroupConnection_sumArgs = {
    field: ShopifyProductVariantFieldsEnum;
  };

  type ShopifyProductVariantInventoryPolicy = 'CONTINUE' | 'DENY';

  type ShopifyProductVariantInventoryPolicyQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyProductVariantInventoryPolicy>;
    readonly in: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyProductVariantInventoryPolicy>>
    >;
    readonly ne: InputMaybe<ShopifyProductVariantInventoryPolicy>;
    readonly nin: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyProductVariantInventoryPolicy>>
    >;
  };

  type ShopifyProductVariantPricePair = {
    readonly compareAtPrice: Maybe<ShopifyMoneyV2>;
    readonly price: ShopifyMoneyV2;
  };

  type ShopifyProductVariantPricePairFilterInput = {
    readonly compareAtPrice: InputMaybe<ShopifyMoneyV2FilterInput>;
    readonly price: InputMaybe<ShopifyMoneyV2FilterInput>;
  };

  type ShopifyProductVariantPricePairFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyProductVariantPricePairFilterInput>;
  };

  type ShopifyProductVariantSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyProductVariantFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyResourceFeedback = {
    readonly details: ReadonlyArray<ShopifyAppFeedback>;
    readonly summary: Scalars['String'];
  };

  type ShopifyResourceFeedbackFilterInput = {
    readonly details: InputMaybe<ShopifyAppFeedbackFilterListInput>;
    readonly summary: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifySEO = {
    readonly description: Maybe<Scalars['String']>;
    readonly title: Maybe<Scalars['String']>;
  };

  type ShopifySEOFilterInput = {
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly title: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifySelectedOption = {
    readonly name: Scalars['String'];
    readonly value: Scalars['String'];
  };

  type ShopifySelectedOptionFilterInput = {
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly value: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifySelectedOptionFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifySelectedOptionFilterInput>;
  };

  type ShopifyUserError = {
    readonly field: Maybe<ReadonlyArray<Scalars['String']>>;
    readonly message: Scalars['String'];
  };

  type ShopifyUserErrorFilterInput = {
    readonly field: InputMaybe<StringQueryOperatorInput>;
    readonly message: InputMaybe<StringQueryOperatorInput>;
  };

  type ShopifyUserErrorFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyUserErrorFilterInput>;
  };

  type ShopifyVideo = Node &
    ShopifyMedia & {
      readonly alt: Maybe<Scalars['String']>;
      readonly children: ReadonlyArray<Node>;
      readonly filename: Scalars['String'];
      readonly id: Scalars['ID'];
      readonly internal: Internal;
      readonly mediaContentType: ShopifyMediaContentType;
      readonly mediaErrors: ReadonlyArray<ShopifyMediaError>;
      readonly originalSource: Maybe<ShopifyVideoSource>;
      readonly parent: Maybe<Node>;
      readonly preview: Maybe<ShopifyMediaPreviewImage>;
      readonly shopifyId: Scalars['String'];
      readonly sources: ReadonlyArray<ShopifyVideoSource>;
      readonly status: ShopifyMediaStatus;
    };

  type ShopifyVideoConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyVideoEdge>;
    readonly group: ReadonlyArray<ShopifyVideoGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyVideo>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyVideoConnection_distinctArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoConnection_groupArgs = {
    field: ShopifyVideoFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyVideoConnection_maxArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoConnection_minArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoConnection_sumArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoEdge = {
    readonly next: Maybe<ShopifyVideo>;
    readonly node: ShopifyVideo;
    readonly previous: Maybe<ShopifyVideo>;
  };

  type ShopifyVideoFieldsEnum =
    | 'alt'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'filename'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'mediaContentType'
    | 'mediaErrors'
    | 'mediaErrors.code'
    | 'mediaErrors.details'
    | 'mediaErrors.message'
    | 'originalSource.format'
    | 'originalSource.height'
    | 'originalSource.mimeType'
    | 'originalSource.url'
    | 'originalSource.width'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'preview.image.altText'
    | 'preview.image.height'
    | 'preview.image.localFile.absolutePath'
    | 'preview.image.localFile.accessTime'
    | 'preview.image.localFile.atime'
    | 'preview.image.localFile.atimeMs'
    | 'preview.image.localFile.base'
    | 'preview.image.localFile.birthTime'
    | 'preview.image.localFile.birthtime'
    | 'preview.image.localFile.birthtimeMs'
    | 'preview.image.localFile.blksize'
    | 'preview.image.localFile.blocks'
    | 'preview.image.localFile.changeTime'
    | 'preview.image.localFile.children'
    | 'preview.image.localFile.childrenImageSharp'
    | 'preview.image.localFile.ctime'
    | 'preview.image.localFile.ctimeMs'
    | 'preview.image.localFile.dev'
    | 'preview.image.localFile.dir'
    | 'preview.image.localFile.ext'
    | 'preview.image.localFile.extension'
    | 'preview.image.localFile.gid'
    | 'preview.image.localFile.id'
    | 'preview.image.localFile.ino'
    | 'preview.image.localFile.mode'
    | 'preview.image.localFile.modifiedTime'
    | 'preview.image.localFile.mtime'
    | 'preview.image.localFile.mtimeMs'
    | 'preview.image.localFile.name'
    | 'preview.image.localFile.nlink'
    | 'preview.image.localFile.prettySize'
    | 'preview.image.localFile.rdev'
    | 'preview.image.localFile.relativeDirectory'
    | 'preview.image.localFile.relativePath'
    | 'preview.image.localFile.root'
    | 'preview.image.localFile.size'
    | 'preview.image.localFile.sourceInstanceName'
    | 'preview.image.localFile.uid'
    | 'preview.image.localFile.url'
    | 'preview.image.originalSrc'
    | 'preview.image.src'
    | 'preview.image.transformedSrc'
    | 'preview.image.width'
    | 'preview.status'
    | 'shopifyId'
    | 'sources'
    | 'sources.format'
    | 'sources.height'
    | 'sources.mimeType'
    | 'sources.url'
    | 'sources.width'
    | 'status';

  type ShopifyVideoFilterInput = {
    readonly alt: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly filename: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly mediaContentType: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
    readonly mediaErrors: InputMaybe<ShopifyMediaErrorFilterListInput>;
    readonly originalSource: InputMaybe<ShopifyVideoSourceFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly preview: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
    readonly shopifyId: InputMaybe<StringQueryOperatorInput>;
    readonly sources: InputMaybe<ShopifyVideoSourceFilterListInput>;
    readonly status: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
  };

  type ShopifyVideoGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<ShopifyVideoEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<ShopifyVideoGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<ShopifyVideo>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type ShopifyVideoGroupConnection_distinctArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoGroupConnection_groupArgs = {
    field: ShopifyVideoFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type ShopifyVideoGroupConnection_maxArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoGroupConnection_minArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoGroupConnection_sumArgs = {
    field: ShopifyVideoFieldsEnum;
  };

  type ShopifyVideoSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<ShopifyVideoFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type ShopifyVideoSource = {
    readonly format: Scalars['String'];
    readonly height: Scalars['Int'];
    readonly mimeType: Scalars['String'];
    readonly url: Scalars['String'];
    readonly width: Scalars['Int'];
  };

  type ShopifyVideoSourceFilterInput = {
    readonly format: InputMaybe<StringQueryOperatorInput>;
    readonly height: InputMaybe<IntQueryOperatorInput>;
    readonly mimeType: InputMaybe<StringQueryOperatorInput>;
    readonly url: InputMaybe<StringQueryOperatorInput>;
    readonly width: InputMaybe<IntQueryOperatorInput>;
  };

  type ShopifyVideoSourceFilterListInput = {
    readonly elemMatch: InputMaybe<ShopifyVideoSourceFilterInput>;
  };

  type ShopifyWeightUnit = 'GRAMS' | 'KILOGRAMS' | 'OUNCES' | 'POUNDS';

  type ShopifyWeightUnitQueryOperatorInput = {
    readonly eq: InputMaybe<ShopifyWeightUnit>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<ShopifyWeightUnit>>>;
    readonly ne: InputMaybe<ShopifyWeightUnit>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<ShopifyWeightUnit>>>;
  };

  type Site = Node & {
    readonly buildTime: Maybe<Scalars['Date']>;
    readonly children: ReadonlyArray<Node>;
    readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly jsxRuntime: Maybe<Scalars['String']>;
    readonly parent: Maybe<Node>;
    readonly pathPrefix: Maybe<Scalars['String']>;
    readonly polyfill: Maybe<Scalars['Boolean']>;
    readonly siteMetadata: Maybe<SiteSiteMetadata>;
    readonly trailingSlash: Maybe<Scalars['String']>;
  };

  type Site_buildTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type SiteBuildMetadata = Node & {
    readonly buildTime: Maybe<Scalars['Date']>;
    readonly children: ReadonlyArray<Node>;
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly parent: Maybe<Node>;
  };

  type SiteBuildMetadata_buildTimeArgs = {
    difference: InputMaybe<Scalars['String']>;
    formatString: InputMaybe<Scalars['String']>;
    fromNow: InputMaybe<Scalars['Boolean']>;
    locale: InputMaybe<Scalars['String']>;
  };

  type SiteBuildMetadataConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_groupArgs = {
    field: SiteBuildMetadataFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SiteBuildMetadataConnection_maxArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_minArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_sumArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>;
    readonly node: SiteBuildMetadata;
    readonly previous: Maybe<SiteBuildMetadata>;
  };

  type SiteBuildMetadataFieldsEnum =
    | 'buildTime'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id';

  type SiteBuildMetadataFilterInput = {
    readonly buildTime: InputMaybe<DateQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
  };

  type SiteBuildMetadataGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SiteBuildMetadataGroupConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataGroupConnection_groupArgs = {
    field: SiteBuildMetadataFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SiteBuildMetadataGroupConnection_maxArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataGroupConnection_minArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataGroupConnection_sumArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type SiteConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_groupArgs = {
    field: SiteFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SiteConnection_maxArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_minArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_sumArgs = {
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    readonly next: Maybe<Site>;
    readonly node: Site;
    readonly previous: Maybe<Site>;
  };

  type SiteFieldsEnum =
    | 'buildTime'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'graphqlTypegen'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'jsxRuntime'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'pathPrefix'
    | 'polyfill'
    | 'siteMetadata.description'
    | 'siteMetadata.title'
    | 'siteMetadata.url'
    | 'trailingSlash';

  type SiteFilterInput = {
    readonly buildTime: InputMaybe<DateQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
    readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
    readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
    readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
  };

  type SiteFunction = Node & {
    readonly absoluteCompiledFilePath: Scalars['String'];
    readonly children: ReadonlyArray<Node>;
    readonly functionRoute: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly matchPath: Maybe<Scalars['String']>;
    readonly originalAbsoluteFilePath: Scalars['String'];
    readonly originalRelativeFilePath: Scalars['String'];
    readonly parent: Maybe<Node>;
    readonly pluginName: Scalars['String'];
    readonly relativeCompiledFilePath: Scalars['String'];
  };

  type SiteFunctionConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SiteFunctionEdge>;
    readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SiteFunction>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SiteFunctionConnection_distinctArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionConnection_groupArgs = {
    field: SiteFunctionFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SiteFunctionConnection_maxArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionConnection_minArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionConnection_sumArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionEdge = {
    readonly next: Maybe<SiteFunction>;
    readonly node: SiteFunction;
    readonly previous: Maybe<SiteFunction>;
  };

  type SiteFunctionFieldsEnum =
    | 'absoluteCompiledFilePath'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'functionRoute'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'matchPath'
    | 'originalAbsoluteFilePath'
    | 'originalRelativeFilePath'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'pluginName'
    | 'relativeCompiledFilePath';

  type SiteFunctionFilterInput = {
    readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly matchPath: InputMaybe<StringQueryOperatorInput>;
    readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly pluginName: InputMaybe<StringQueryOperatorInput>;
    readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  };

  type SiteFunctionGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SiteFunctionEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SiteFunction>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SiteFunctionGroupConnection_distinctArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionGroupConnection_groupArgs = {
    field: SiteFunctionFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SiteFunctionGroupConnection_maxArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionGroupConnection_minArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionGroupConnection_sumArgs = {
    field: SiteFunctionFieldsEnum;
  };

  type SiteFunctionSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type SiteGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SiteGroupConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteGroupConnection_groupArgs = {
    field: SiteFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SiteGroupConnection_maxArgs = {
    field: SiteFieldsEnum;
  };

  type SiteGroupConnection_minArgs = {
    field: SiteFieldsEnum;
  };

  type SiteGroupConnection_sumArgs = {
    field: SiteFieldsEnum;
  };

  type SitePage = Node & {
    readonly children: ReadonlyArray<Node>;
    readonly component: Scalars['String'];
    readonly componentChunkName: Scalars['String'];
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly internalComponentName: Scalars['String'];
    readonly matchPath: Maybe<Scalars['String']>;
    readonly pageContext: Maybe<Scalars['JSON']>;
    readonly parent: Maybe<Node>;
    readonly path: Scalars['String'];
    readonly pluginCreator: Maybe<SitePlugin>;
  };

  type SitePageConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_groupArgs = {
    field: SitePageFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SitePageConnection_maxArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_minArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_sumArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageEdge = {
    readonly next: Maybe<SitePage>;
    readonly node: SitePage;
    readonly previous: Maybe<SitePage>;
  };

  type SitePageFieldsEnum =
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'component'
    | 'componentChunkName'
    | 'id'
    | 'internalComponentName'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'matchPath'
    | 'pageContext'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'path'
    | 'pluginCreator.browserAPIs'
    | 'pluginCreator.children'
    | 'pluginCreator.children.children'
    | 'pluginCreator.children.children.children'
    | 'pluginCreator.children.children.id'
    | 'pluginCreator.children.id'
    | 'pluginCreator.children.internal.content'
    | 'pluginCreator.children.internal.contentDigest'
    | 'pluginCreator.children.internal.contentFilePath'
    | 'pluginCreator.children.internal.description'
    | 'pluginCreator.children.internal.fieldOwners'
    | 'pluginCreator.children.internal.ignoreType'
    | 'pluginCreator.children.internal.mediaType'
    | 'pluginCreator.children.internal.owner'
    | 'pluginCreator.children.internal.type'
    | 'pluginCreator.children.parent.children'
    | 'pluginCreator.children.parent.id'
    | 'pluginCreator.id'
    | 'pluginCreator.internal.content'
    | 'pluginCreator.internal.contentDigest'
    | 'pluginCreator.internal.contentFilePath'
    | 'pluginCreator.internal.description'
    | 'pluginCreator.internal.fieldOwners'
    | 'pluginCreator.internal.ignoreType'
    | 'pluginCreator.internal.mediaType'
    | 'pluginCreator.internal.owner'
    | 'pluginCreator.internal.type'
    | 'pluginCreator.name'
    | 'pluginCreator.nodeAPIs'
    | 'pluginCreator.packageJson'
    | 'pluginCreator.parent.children'
    | 'pluginCreator.parent.children.children'
    | 'pluginCreator.parent.children.id'
    | 'pluginCreator.parent.id'
    | 'pluginCreator.parent.internal.content'
    | 'pluginCreator.parent.internal.contentDigest'
    | 'pluginCreator.parent.internal.contentFilePath'
    | 'pluginCreator.parent.internal.description'
    | 'pluginCreator.parent.internal.fieldOwners'
    | 'pluginCreator.parent.internal.ignoreType'
    | 'pluginCreator.parent.internal.mediaType'
    | 'pluginCreator.parent.internal.owner'
    | 'pluginCreator.parent.internal.type'
    | 'pluginCreator.parent.parent.children'
    | 'pluginCreator.parent.parent.id'
    | 'pluginCreator.pluginFilepath'
    | 'pluginCreator.pluginOptions'
    | 'pluginCreator.resolve'
    | 'pluginCreator.ssrAPIs'
    | 'pluginCreator.version';

  type SitePageFilterInput = {
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly component: InputMaybe<StringQueryOperatorInput>;
    readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
    readonly matchPath: InputMaybe<StringQueryOperatorInput>;
    readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly path: InputMaybe<StringQueryOperatorInput>;
    readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
  };

  type SitePageGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SitePageGroupConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageGroupConnection_groupArgs = {
    field: SitePageFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SitePageGroupConnection_maxArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageGroupConnection_minArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageGroupConnection_sumArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageSortInput = {
    readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type SitePlugin = Node & {
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly children: ReadonlyArray<Node>;
    readonly id: Scalars['ID'];
    readonly internal: Internal;
    readonly name: Maybe<Scalars['String']>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly packageJson: Maybe<Scalars['JSON']>;
    readonly parent: Maybe<Node>;
    readonly pluginFilepath: Maybe<Scalars['String']>;
    readonly pluginOptions: Maybe<Scalars['JSON']>;
    readonly resolve: Maybe<Scalars['String']>;
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_groupArgs = {
    field: SitePluginFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SitePluginConnection_maxArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_minArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_sumArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>;
    readonly node: SitePlugin;
    readonly previous: Maybe<SitePlugin>;
  };

  type SitePluginFieldsEnum =
    | 'browserAPIs'
    | 'children'
    | 'children.children'
    | 'children.children.children'
    | 'children.children.children.children'
    | 'children.children.children.id'
    | 'children.children.id'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.contentFilePath'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.children.parent.children'
    | 'children.children.parent.id'
    | 'children.id'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.contentFilePath'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'children.parent.children'
    | 'children.parent.children.children'
    | 'children.parent.children.id'
    | 'children.parent.id'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.contentFilePath'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.parent.parent.children'
    | 'children.parent.parent.id'
    | 'id'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.contentFilePath'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'name'
    | 'nodeAPIs'
    | 'packageJson'
    | 'parent.children'
    | 'parent.children.children'
    | 'parent.children.children.children'
    | 'parent.children.children.id'
    | 'parent.children.id'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.contentFilePath'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.children.parent.children'
    | 'parent.children.parent.id'
    | 'parent.id'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.contentFilePath'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'parent.parent.children'
    | 'parent.parent.children.children'
    | 'parent.parent.children.id'
    | 'parent.parent.id'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.contentFilePath'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.parent.parent.children'
    | 'parent.parent.parent.id'
    | 'pluginFilepath'
    | 'pluginOptions'
    | 'resolve'
    | 'ssrAPIs'
    | 'version';

  type SitePluginFilterInput = {
    readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
    readonly children: InputMaybe<NodeFilterListInput>;
    readonly id: InputMaybe<StringQueryOperatorInput>;
    readonly internal: InputMaybe<InternalFilterInput>;
    readonly name: InputMaybe<StringQueryOperatorInput>;
    readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
    readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
    readonly parent: InputMaybe<NodeFilterInput>;
    readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
    readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
    readonly resolve: InputMaybe<StringQueryOperatorInput>;
    readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
    readonly version: InputMaybe<StringQueryOperatorInput>;
  };

  type SitePluginGroupConnection = {
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
    readonly max: Maybe<Scalars['Float']>;
    readonly min: Maybe<Scalars['Float']>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly sum: Maybe<Scalars['Float']>;
    readonly totalCount: Scalars['Int'];
  };

  type SitePluginGroupConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginGroupConnection_groupArgs = {
    field: SitePluginFieldsEnum;
    limit: InputMaybe<Scalars['Int']>;
    skip: InputMaybe<Scalars['Int']>;
  };

  type SitePluginGroupConnection_maxArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginGroupConnection_minArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginGroupConnection_sumArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginSortInput = {
    readonly fields: InputMaybe<
      ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>
    >;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type SiteSiteMetadata = {
    readonly description: Maybe<Scalars['String']>;
    readonly title: Maybe<Scalars['String']>;
    readonly url: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataFilterInput = {
    readonly description: InputMaybe<StringQueryOperatorInput>;
    readonly title: InputMaybe<StringQueryOperatorInput>;
    readonly url: InputMaybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
    readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
  };

  type SortOrderEnum = 'ASC' | 'DESC';

  type StringQueryOperatorInput = {
    readonly eq: InputMaybe<Scalars['String']>;
    readonly glob: InputMaybe<Scalars['String']>;
    readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
    readonly ne: InputMaybe<Scalars['String']>;
    readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
    readonly regex: InputMaybe<Scalars['String']>;
  };

  type TransformOptions = {
    readonly cropFocus: InputMaybe<ImageCropFocus>;
    readonly duotone: InputMaybe<DuotoneGradient>;
    readonly fit: InputMaybe<ImageFit>;
    readonly grayscale: InputMaybe<Scalars['Boolean']>;
    readonly rotate: InputMaybe<Scalars['Int']>;
    readonly trim: InputMaybe<Scalars['Float']>;
  };

  type WebPOptions = {
    readonly quality: InputMaybe<Scalars['Int']>;
  };

  type ProductQueryQueryVariables = Exact<{
    handle: Scalars['String'];
  }>;

  type ProductQueryQuery = {
    readonly shopifyProduct: {
      readonly title: string;
      readonly handle: string;
      readonly descriptionHtml: string;
      readonly variants: ReadonlyArray<{
        readonly id: string;
        readonly price: number;
        readonly title: string;
        readonly storefrontId: string;
      }>;
      readonly priceRangeV2: {
        readonly minVariantPrice: {
          readonly amount: number;
          readonly currencyCode: ShopifyCurrencyCode;
        };
      };
      readonly featuredImage: {
        readonly altText: string | null;
        readonly localFile: {
          readonly childImageSharp: {
            readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
          } | null;
        } | null;
      } | null;
    } | null;
  };
}
