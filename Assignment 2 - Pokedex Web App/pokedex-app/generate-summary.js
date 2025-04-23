/* eslint-env node */
const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

// Read and parse junit.xml
fs.readFile('coverage/junit.xml', (err, data) => {
  if (err) {
    console.error('Error reading junit.xml:', err);
    process.exit(1);
  }

  parser.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing junit.xml:', err);
      process.exit(1);
    }

    // Extract test metrics
    const testsuites = result.testsuites.testsuite;
    let totalTests = 0;
    let failures = 0;
    let errors = 0;
    let skipped = 0;
    let failedTests = [];

    testsuites.forEach(suite => {
      totalTests += parseInt(suite.$.tests);
      failures += parseInt(suite.$.failures);
      errors += parseInt(suite.$.errors);
      skipped += parseInt(suite.$.skipped);

      // Extract failed tests
      if (suite.testcase) {
        suite.testcase.forEach(testcase => {
          if (testcase.failure) {
            failedTests.push({
              suite: suite.$.name,
              name: testcase.$.name,
              message: testcase.failure[0].$.message
            });
          }
        });
      }
    });

    const passed = totalTests - failures - errors - skipped;

    // Read coverage metrics
    let lineCoverage = 'N/A';
    let branchCoverage = 'N/A';
    if (fs.existsSync('coverage/coverage-summary.json')) {
      const coverage = JSON.parse(fs.readFileSync('coverage/coverage-summary.json'));
      lineCoverage = coverage.total.lines.pct;
      branchCoverage = coverage.total.branches.pct;
    }

    // Generate Markdown summary
    let summary = '## Test Report Summary\n\n';
    summary += `**Total Tests:** ${totalTests}\n`;
    summary += `**Passed:** ${passed}\n`;
    summary += `**Failures:** ${failures}\n`;
    summary += `**Errors:** ${errors}\n`;
    summary += `**Skipped:** ${skipped}\n\n`;
    summary += `**Line Coverage:** ${lineCoverage}%\n`;
    summary += `**Branch Coverage:** ${branchCoverage}%\n\n`;

    // Add failed tests if any
    if (failedTests.length > 0) {
      summary += '### Failed Tests\n\n';
      failedTests.forEach(test => {
        summary += `- **${test.suite} > ${test.name}**\n`;
        summary += `  - Message: ${test.message}\n`;
      });
      summary += '\n';
    }

    summary += 'For detailed test results, see the [Checks tab](#checks).\n';

    // Write to GITHUB_STEP_SUMMARY
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  });
});