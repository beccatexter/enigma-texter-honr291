import { describe, expect, test, beforeAll } from "@jest/globals";
import { LineDecryptComponent } from "./line-decrypt.component";
import { bootstrap } from "@boots-edu/webz";

describe("LineDecryptComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<LineDecryptComponent>(LineDecryptComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(LineDecryptComponent);
        });
    });
});
