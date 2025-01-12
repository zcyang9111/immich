import { AlbumEntity } from '@app/infra/entities';
import { assetStub } from './asset.stub';
import { authStub } from './auth.stub';
import { userStub } from './user.stub';

export const albumStub = {
  empty: Object.freeze<AlbumEntity>({
    id: 'album-1',
    albumName: 'Empty album',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [],
    isActivityEnabled: true,
    startDate: null,
    endDate: null,
    assetCount: 0,
  }),
  sharedWithUser: Object.freeze<AlbumEntity>({
    id: 'album-2',
    albumName: 'Empty album shared with user',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [userStub.user1],
    isActivityEnabled: true,
    startDate: null,
    endDate: null,
    assetCount: 0,
  }),
  sharedWithMultiple: Object.freeze<AlbumEntity>({
    id: 'album-3',
    albumName: 'Empty album shared with users',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [userStub.user1, userStub.user2],
    isActivityEnabled: true,
    startDate: null,
    endDate: null,
    assetCount: 0,
  }),
  sharedWithAdmin: Object.freeze<AlbumEntity>({
    id: 'album-3',
    albumName: 'Empty album shared with admin',
    description: '',
    ownerId: authStub.user1.id,
    owner: userStub.user1,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [userStub.admin],
    isActivityEnabled: true,
    startDate: null,
    endDate: null,
    assetCount: 0,
  }),
  oneAsset: Object.freeze<AlbumEntity>({
    id: 'album-4',
    albumName: 'Album with one asset',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [assetStub.image],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [],
    isActivityEnabled: true,
    startDate: assetStub.image.fileCreatedAt,
    endDate: assetStub.image.fileCreatedAt,
    assetCount: 1,
  }),
  twoAssets: Object.freeze<AlbumEntity>({
    id: 'album-4a',
    albumName: 'Album with two assets',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [assetStub.image, assetStub.withLocation],
    albumThumbnailAsset: assetStub.image,
    albumThumbnailAssetId: assetStub.image.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [],
    isActivityEnabled: true,
    startDate: assetStub.withLocation.fileCreatedAt,
    endDate: assetStub.image.fileCreatedAt,
    assetCount: 2,
  }),
  emptyWithInvalidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-5',
    albumName: 'Empty album with invalid thumbnail',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [],
    albumThumbnailAsset: assetStub.image,
    albumThumbnailAssetId: assetStub.image.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [],
    isActivityEnabled: true,
    startDate: null,
    endDate: null,
    assetCount: 0,
  }),
  emptyWithValidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-5',
    albumName: 'Empty album with invalid thumbnail',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [],
    isActivityEnabled: true,
    startDate: null,
    endDate: null,
    assetCount: 0,
  }),
  oneAssetInvalidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-6',
    albumName: 'Album with one asset and invalid thumbnail',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [assetStub.image],
    albumThumbnailAsset: assetStub.livePhotoMotionAsset,
    albumThumbnailAssetId: assetStub.livePhotoMotionAsset.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [],
    isActivityEnabled: true,
    startDate: assetStub.image.fileCreatedAt,
    endDate: assetStub.image.fileCreatedAt,
    assetCount: 1,
  }),
  oneAssetValidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-6',
    albumName: 'Album with one asset and invalid thumbnail',
    description: '',
    ownerId: authStub.admin.id,
    owner: userStub.admin,
    assets: [assetStub.image],
    albumThumbnailAsset: assetStub.image,
    albumThumbnailAssetId: assetStub.image.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    sharedLinks: [],
    sharedUsers: [],
    isActivityEnabled: true,
    startDate: assetStub.image.fileCreatedAt,
    endDate: assetStub.image.fileCreatedAt,
    assetCount: 1,
  }),
};
