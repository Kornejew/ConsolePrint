import { ConsolePrint } from "./console-print";

function main() {
    const cp = new ConsolePrint();
    cp.closeByNewLine = true;
    cp.useIcons = true;
    
    cp.log('this is a log message')
    cp.log('this the 1st log of a group', 'this is the 2nd log of a group')
    cp.info('this is a info message')
    cp.info('this the 1st info of a group', 'this is the 2nd info of a group')
    cp.success('this is a success message')
    cp.success('this the 1st success of a group', 'this is the 2nd success of a group')
    cp.warn('this is a warning message')
    cp.warn('this the 1st warning of a group', 'this is the 2nd warning of a group')
    cp.error('this is an error message')
    cp.error('this the 1st error of a group', 'this is the 2nd error of a group')
    cp.debug('this is a debug message')
    cp.debug('this the 1st debug of a group', 'this is the 2nd debug of a group')
    cp.assert('this is an assert message')
    cp.assert('this the 1st assert of a group', 'this is the 2nd assert of a group')
}

main();
