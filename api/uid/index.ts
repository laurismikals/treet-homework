import cuid from 'cuid';

export type Uid = Readonly<{
  makeId: (() => string) & {
    slug: () => string;
    isCuid: (cuid: string) => boolean;
    isSlug: (slug: string) => boolean;
  };
  isValidId: (cuid: string) => boolean;
}>;

export const uid: Uid = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid,
});
