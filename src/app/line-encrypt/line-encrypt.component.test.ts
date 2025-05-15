import { describe, expect, test, beforeAll } from "@jest/globals";
import { LineEncryptComponent } from "./line-encrypt.component";
import { bootstrap } from "@boots-edu/webz";

describe("LineEncryptComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<LineEncryptComponent>(LineEncryptComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(LineEncryptComponent);
        });
    });
});
