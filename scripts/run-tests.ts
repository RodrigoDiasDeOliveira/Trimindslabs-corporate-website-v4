import { runAllTests } from '../src/tests/domain-and-integration.test';

async function main() {
  console.log('\n======================================================');
  console.log('TRIMINDSLABS Corporate Platform — Automated Test Suite');
  console.log('======================================================\n');

  try {
    const { results, summary } = await runAllTests();

    results.forEach((r, idx) => {
      const status = r.passed ? '✓ PASS' : '✗ FAIL';
      console.log(`[${status}] [${r.durationMs}ms] ${idx + 1}. ${r.name}`);
      if (!r.passed && r.message) {
        console.error(`      Error: ${r.message}`);
      }
    });

    console.log('\n------------------------------------------------------');
    console.log(`Total: ${summary.total} | Passed: ${summary.passed} | Failed: ${summary.failed}`);
    console.log('------------------------------------------------------\n');

    if (summary.failed > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error('Test execution fatal error:', err);
    process.exit(1);
  }
}

main();
