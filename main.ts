const { toast, log } = Android.io;

function unwrapShellResult(shellResult: Android.ShellResult) {
    if (!shellResult.isSuccess) {
        const message = shellResult.err.join(' ');
        throw new Error(`Error with code: ${shellResult.code}, ${message}`);
    }
}

unwrapShellResult(Android.shell.execLibsuSync('setprop service.adb.tcp.port 5555'));
unwrapShellResult(Android.shell.execLibsuSync('stop adbd'));
unwrapShellResult(Android.shell.execLibsuSync('start adbd'));

toast('ADB running...');
