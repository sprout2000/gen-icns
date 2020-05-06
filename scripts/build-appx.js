require('dotenv').config();
const builder = require('electron-builder');

builder
  .build({
    config: {
      productName: 'GenICNS',
      copyright: 'Copyright (C) 2020 sprout2000.',
      artifactName: '${productName}-${version}.${ext}',
      files: ['dist/**/*'],
      directories: {
        output: 'release',
      },
      asar: true,
      asarUnpack: ['dist/preload.js'],
      win: {
        icon: 'assets/icon.ico',
        target: ['appx'],
        fileAssociations: [
          {
            ext: ['png'],
            description: 'Image files',
          },
        ],
      },
      appx: {
        applicationId: 'sprout2000.GenICNS',
        backgroundColor: '#6c757d',
        displayName: 'GenICNS',
        identityName: process.env.IDENTITY_NAME,
        publisher: process.env.PUBLISHER,
        publisherDisplayName: 'sprout2000',
        languages: ['JA-JP', 'EN-US'],
        addAutoLaunchExtension: false,
      },
    },
  })
  .catch((err) => console.log(err));
