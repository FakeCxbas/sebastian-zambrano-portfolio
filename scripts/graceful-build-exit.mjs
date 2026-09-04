if (process.platform === 'win32') {
  const immediateExit = process.exit.bind(process);
  process.exit = function gracefulBuildExit(code = 0) {
    if (Number(code) !== 0) return immediateExit(code);
    process.exitCode = 0;
  };
}
