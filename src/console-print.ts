import { Color } from "./model/color";

const EMPTY_STRING = '';

export class ConsolePrint {
    closeByNewLine = true
    useIcons = true
    logsTitle = 'LOGS'
    warningsTitle = 'WARNINGS'
    errorsTitle = 'ERRORS'
    informationsTitle = 'INFORMATIONS'
    successesTitle = 'SUCCESS'
    debugsTitle = 'DEBUG'
    assertsTitle = 'ASSERT'

    public clear() {
        console.clear()
    }

    public log(...strings: string[]): void {
        const fg = Color.WHITE;
        const bg = Color.TRANSPARENT;
        const icon = '\u25ce'
        const groupTile = ` ${this.logsTitle}`
        if (strings.length > 1) {
            const c = this.getColorString(fg, bg)
            console.group(c, (this.useIcons ? icon : EMPTY_STRING) + groupTile)
            const nl = this.closeByNewLine
            this.closeByNewLine = false
            strings.forEach((item) => {
                this.print(fg, bg, item, Color.RESET)
            })
            this.closeByNewLine = nl
            console.groupEnd()
            if (nl) console.log()
        } else {
            this.print(fg, bg, `${(this.useIcons ? `${icon} ` : EMPTY_STRING)}${strings[0]}`)
        }
    }

    public warn(...strings: string[]): void {
        const fg = Color.YELLOW;
        const bg = Color.TRANSPARENT;
        const icon = '\u26a0'
        const groupTile = ` ${this.warningsTitle}`
        if (strings.length > 1) {
            const c = this.getColorString(fg, bg)
            console.group(c, (this.useIcons ? icon : EMPTY_STRING) + groupTile)
            const nl = this.closeByNewLine
            this.closeByNewLine = false
            strings.forEach((item) => {
                this.print(fg, bg, item, Color.RESET)
            })
            this.closeByNewLine = nl
            console.groupEnd()
            if (nl) console.log()
        } else {
            this.print(fg, bg, `${(this.useIcons ? `${icon} ` : EMPTY_STRING)}${strings[0]}`);
        }
    }

    public error(...strings: string[]): void {
        const fg = Color.RED;
        const bg = Color.TRANSPARENT;
        const icon = '\u26D4'
        const groupTile = ` ${this.errorsTitle}`
        if (strings.length > 1) {
            const c = this.getColorString(fg, bg)
            console.group(c, (this.useIcons ? icon : EMPTY_STRING) + groupTile)
            const nl = this.closeByNewLine
            this.closeByNewLine = false
            strings.forEach((item) => {
                this.print(fg, bg, item)
            })
            this.closeByNewLine = nl
            console.groupEnd()
            if (nl) console.log()
        } else {
            this.print(fg, bg, `${(this.useIcons ? `${icon} ` : EMPTY_STRING)}${strings[0]}`);
        }
    }

    public info(...strings: string[]): void {
        const fg = Color.BLUE;
        const bg = Color.TRANSPARENT;
        const icon = '\u2139'
        const groupTile = ` ${this.informationsTitle}`
        if (strings.length > 1) {
            const c = this.getColorString(fg, bg)
            console.group(c, (this.useIcons ? icon : EMPTY_STRING) + groupTile)
            const nl = this.closeByNewLine
            this.closeByNewLine = false
            strings.forEach((item) => {
                this.print(fg, bg, item)
            })
            this.closeByNewLine = nl
            console.groupEnd()
            if (nl) console.log()
        } else {
            this.print(fg, bg, `${(this.useIcons ? `${icon} ` : EMPTY_STRING)}${strings[0]}`);
        }
    }

    public success(...strings: string[]): void {
        const fg = Color.GREEN;
        const bg = Color.TRANSPARENT;
        const icon = '\u2713'
        const groupTile = ` ${this.successesTitle}`
        if (strings.length > 1) {
            const c = this.getColorString(fg, bg)
            console.group(c, (this.useIcons ? icon : EMPTY_STRING) + groupTile)
            const nl = this.closeByNewLine
            this.closeByNewLine = false
            strings.forEach((item) => {
                this.print(fg, bg, item)
            })
            this.closeByNewLine = nl
            console.groupEnd()
            if (nl) console.log()
        } else {
            this.print(fg, bg, `${(this.useIcons ? `${icon} ` : EMPTY_STRING)}${strings[0]}`);
        }
    }

    public debug(...strings: string[]): void {
        const fg = Color.MAGENTA;
        const bg = Color.TRANSPARENT;
        const icon = '\u1367'
        const groupTile = ` ${this.debugsTitle}`
        if (strings.length > 1) {
            const c = this.getColorString(fg, bg)
            console.group(c, (this.useIcons ? icon : EMPTY_STRING) + groupTile)
            const nl = this.closeByNewLine
            this.closeByNewLine = false
            strings.forEach((item) => {
                this.print(fg, bg, item)
            })
            this.closeByNewLine = nl
            console.groupEnd()
            if (nl) console.log()
        } else {
            this.print(fg, bg, `${(this.useIcons ? `${icon} ` : EMPTY_STRING)}${strings[0]}`);
        }
    }

    public assert(...strings: string[]): void {
        const fg = Color.CYAN;
        const bg = Color.TRANSPARENT;
        const icon = '\u0021'
        const groupTile = ` ${this.assertsTitle}`
        if (strings.length > 1) {
            const c = this.getColorString(fg, bg)
            console.group(c, (this.useIcons ? icon : EMPTY_STRING) + groupTile)
            const nl = this.closeByNewLine
            this.closeByNewLine = false
            strings.forEach((item) => {
                this.print(fg, bg, item)
            })
            this.closeByNewLine = nl
            console.groupEnd()
            if (nl) console.log()
        } else {
            this.print(fg, bg, `${(this.useIcons ? `${icon} ` : EMPTY_STRING)}${strings[0]}`);
        }
    }

    private print(foregroundColor = Color.WHITE, backgroundColor = Color.BLACK, ...strings: string[]) {
        const color = this.getColorString(foregroundColor, backgroundColor)
        // turns objects into printable strings
        strings = strings.map((item) => {
            if (typeof item === 'object') item = JSON.stringify(item)
            return item
        })
        console.log(color, strings.join(EMPTY_STRING), Color.RESET)
        if (this.closeByNewLine) {
            console.log(EMPTY_STRING);
        }
    }

    private getColorString(foregroundColor: Color, backgroundColor?: Color): string {
        backgroundColor ?? Color.TRANSPARENT;

        return `${foregroundColor}${backgroundColor}`
    }
}