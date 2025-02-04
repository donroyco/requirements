module.exports = {
  software: {
    // java: '>= 1.8.x',
    git: '~1.9.4 || 2.0.0 - 2.10.0',
    node: '8 || 10 || 12',
    npm: '>= 6.x',
    yarn: {
      semver: '1.16.x',
      updateMessage: `Outdated 'yarn' found.\nRun 'brew upgrade yarn' to update.`,
    },
    mvn: '^3.x',
    nginx: {
      semver: '^6.x',
      optional: true,
      installMessage: `This project is configured for NGINX but 'nginx' was not found on your path.\nRun 'brew install nginx' to install.`,
    },
    httpd: {
      semver: '^2.x',
      flag: '-v',
    },
  },
};
