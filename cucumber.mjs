export default {
  default: {
    paths: ['features/**/*.feature'],
    import: [
      'stepdefinitions/**/*.js',
      'hooks/**/*.js'
    ],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.html'
    ]
  }
};