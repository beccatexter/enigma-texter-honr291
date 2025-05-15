import { Input, Notifier, ValueEvent, WebzComponent } from "@boots-edu/webz";
import html from "./line-encrypt.component.html";
import css from "./line-encrypt.component.css";

function rotate(characterCode: number, rotation: number): number {
    return ((characterCode + rotation - 32) % 94) + 32;
}

function encryptText(message: string): string {
    let characterCodes: number[] = [];
    let newCharacterCodes: number[] = [];
    let encryptedMessage: string = "";
    for (let i = 0; i < message.length; i++) {
        let characterCode: number = message.charCodeAt(i);
        characterCodes.push(characterCode);
    }
    for (let j = 0; j < characterCodes.length; j++) {
        let newCharacterCode: number = rotate(characterCodes[j], 81);
        if (newCharacterCode < 48) {
            newCharacterCodes.push(newCharacterCode);
            newCharacterCodes.push(126);
        } else {
            newCharacterCodes.push(newCharacterCode);
        }
    }
    for (let k = 0; k < newCharacterCodes.length; k++) {
        encryptedMessage += String.fromCharCode(newCharacterCodes[k]);
        if ((k + 1) % 4 === 0) {
            encryptedMessage += " ";
        }
    }
    return encryptedMessage;
}

export class LineEncryptComponent extends WebzComponent {
    encryptionChange: Notifier<string> = new Notifier<string>();
    constructor() {
        super(html, css);
    }

    @Input("encryption")
    onItemInputChange(e: ValueEvent) {
        const encrypted: string = encryptText(e.value);
        this.encryptionChange.notify(encrypted);
    }
}
