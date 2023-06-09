import { testEnv } from './environment';

// tear down hooks
function stopAndExitWith(code: number) {
  return async () => {
    await testEnv.stop();
    process.exit(code);
  };
}

process.on('SIGHUP', stopAndExitWith(128 + 1));
process.on('SIGINT', stopAndExitWith(128 + 2));
process.on('SIGTERM', stopAndExitWith(128 + 15));

testEnv.start();
