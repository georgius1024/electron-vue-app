module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      removeElectronJunk: true,
      win: {
        target: 'nsis',
        icon: 'build/icons/512x512.png'
      },
      linux: {
        category: 'Utility',
        target: 'AppImage',
        maintainer: 'Me',
        icon: 'build/icons/icon.png'
      }
    },
  },
}