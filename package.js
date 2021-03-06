Package.describe({
  name: 'venn:venn-email',
  version: '0.0.2',
  summary: 'Venn Email Redundancy Package',
  git: 'https://github.com/VennHQ/venn-email-meteor.git',
  documentation: 'README.md'
});

Npm.depends({"venn-email": "0.1.3"});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.1');
  api.use(['meteorhacks:async@1.0.0']);
  api.addFiles('venn-email.js', 'server');
  api.export('VennEmail');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('venn:venn-email');
  api.addFiles('venn-email-tests.js');
});